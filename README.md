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
3. Find and create "Static IP" asset and attach it to your instance. NOTE: If you need to delete the instance, FIRST detach this resource and DELETE it.
4. Create your own projects directory in /opt/bitnami using "sudo mkdir /opt/bitnami/projects".
5. DO NOT USE DEFAULT SSH KEY. Instead, use the AWS built in key generator or use something like PuTTY (or use the Linux ssh-keygen command).
6. If you get a .pem file, use PuTTYGen and import the .pem file. Go to conversions->import key and import the .pem and then save the public/private pair.
7. 
