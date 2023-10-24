# FullStackWebsite

-----------
Intro
-----------
 My attempt at a full stack website built from the ground up with Node.js with Express back-end and HTML/CSS with Bootstrap front-end.

 This is a work in progress.


Find the finished product at https://www.marcnettles.com (or simply marcnettles.com).



-------------
Technologies Used
------------------

Hosted on AWS Lightsail with a Debian Linux instance using Bitnami.
Frontend built with HTML5, CSS3, Bootstrap 5.3, and EJS.
Apache and Nodejs. The Apache server listens on port 80 and 443, with HTTP traffic being automatically rerouted to HTTPS, and then forwards traffic to the Nodejs server via port 3000.
HTTPS is only possible because of a signed certificate from LetsEncrypt via the Bitnami "bncert" tool. This is well documented by Bitnami and automatically renews the certificate.
Nodejs server listens on port 3000, and uses Express to route the traffic.
PostgreSQL Database used to store user data, with an emphasis on security by first hashing passwords using the bcrypt library.


----------------------------------------------
A step-by-step guide to doing this yourself
----------------------------------------------

1. Sign up for an AWS Lightsail acccount if you haven't already.
2. Create a "New Instance" using the "Linux with Nodejs" settings.
3. Find and create "Static IP" asset (under "Networking") and attach it to your instance. NOTE: If you need to delete the instance, FIRST detach this resource and DELETE it.
4. DO NOT USE DEFAULT SSH KEY. Instead, use the AWS built in key generator or use something like PuTTY (or use the Linux ssh-keygen command).
5. Create your own projects directory in /opt/bitnami using "sudo mkdir /opt/bitnami/projects".
7. If you get a .pem file, use PuTTYGen and import the .pem file. Go to conversions->import key and import the .pem and then save the public/private pair.
8. If you have an already established Nodejs website (complete framework for frontend and backend), then you'll want to use SFTP to transfer those files to this new server.
9. Otherwise, you'll have to start from the ground up. The AWS Lightsail settings should have set you up with Nodejs already, so next you'll need to navigate to your project "/opt/bitnami/project/<your-project>" and run the command "npm init". NPM stands for Node Package Manager and allows Nodejs to install "packages" (kinda like libraries in other languages). Next, to use Express for routing (recommended), use the command "npm install express". You'll need to use "npm install <package-name>" to install the various packages you want, such as "express-sessions" for storing session information and "bcrypt" for hashing passwords and more.
    a. I use the following packages:  express (routing), express-sessions (storing user login session), bcrypt (for password hashing), pg-promise (a promise-based way to connect to a database), connect-pg-simple (for storing session information inside a PostgreSQL database, which is more secure), dotenv (used for storing Environment variables in a dotenv file. This allows us to set Environment variables for storing sensitive information, like our session's SessionSecret, or for determining whether our code is being used in a development environment or a production environment. For example, I develop on Windows 10 but the production server is Debian Linux, so the file structure is different and we will need to use two different ways of navigating the directory depending on the environment we are in), helmet (HelmetJS is a powerful security package which we can configure to set up our Content-Security Policy (CSP), set Security Headers, and more), body-parser (allows for parsing JSON from the request body), fs (Allows us to read and write to/from local files on the server), csurf (Allows us to implement CSRF-tokens, which protect against Cross-Site Request Forgery attacks).
   b. Your file structure should be:
   -Project-Name
     --bin
       ---www <Run this, not app.js. You should be listening on port 3000 here, not in app.js. Import app into www>
     --forever
       ---development.json
     --logs
       ---error.log
       ---forever.log
       ---out.log
     --models
       ---db.js
     --node_modules
       ---<All of your node modules are in here. Most come with Nodejs, but here's where your "npm install <package-name>" installs the modules.>
     --public
       ---javascripts <All your javascripting should be here **AVOID INLINE JAVASCRIPT**>
       ---resources <For storing media, such as pictures and videos>
       ---stylesheets <Store all CSS styles here **AVOID INLINE CSS**>
     --routes
       ---index.js <Do your main routing of GET, POST, etc methods here, NOT in app.js>
     --views
       ---pages
       ---partials
       ---error.ejs
       ---index.ejs
       ---layout.ejs <This is the main layout. If you don't want to use layouts, ignore this.>
     --.gitattributes
     --.gitignore
     --app.js
     --package-lock.json
     --package.json
     --.env

   **IMPORTANT** Make sure .env is listed in your .gitignore, along with any sensitive information such as keys. If you push sensitive information to Github, it will be incredibly difficult and maybe impossible to completely remove it.
11. 




