// Marc Nettles - Last Major Revision (08/30/2023)
// Last Revision Details - Moved all routing to this file from app.js.





// Standard required items for express and using the express router.
//=====================================//
//-------------START-------------------//
const express = require('express');
const router = express.Router();
//--------------END--------------------//
//=====================================//

// Database access
//=================================//
//-----------START-----------------//
const db = require('../models/db');
//-------------END-----------------//
//=================================//

// Using bcrypt for password hashing
//=================//
//------START------//
const bcrypt = require('bcrypt');
//------END--------//
//=================//


// Using EJS to render files so I can do my own layouts with partials still supported
//======================================//
//-----------------START----------------//
const ejs = require('ejs');
//------------------END-----------------//
//======================================//


// Regex for making sure username is alphanumeric
//====================//
//-------START--------//
const usernamePattern = /^[a-zA-Z0-9_]+$/; // pattern requires one or more of a-z or A-Z or 0-9. $ is end of line. ^ is start of line.
//--------END---------//
//====================//

//                    Handle all GET method requests
//===================================================================================>
//--------------------------------START---------------------------------------------->

// Default, for when people go to https://www.marcnettles.com/, it's like a home page. 
// req -> stuff being pulled in
// res -> stuff to send back

/*
router.get('/', (req,res) => {

  // res.render will send the page "index", which can be html but in this case I'm using EJS
  // The reason index is in "pages/index" and not "view/pages/index" is because EJS already
  // knows to look in the views folder, so we can leave that out.

  // Renders the page index.ejs and passes the variable "title" with the value "Home | Marc Nettles | etc".
  res.render('pages/index', {
      title: "Home | Marc Nettles | Personal Site | Full Stack Development | CU Boulder Computer Science Graduate" // Putting most relevant information to the left, so it doesn't get cut-off by resizing
  });
});
*/
router.get('/', async (req,res, next)=>{ // Upgraded to async so we can use "await" on the ejs.renderFile
  

  // Wait for the database to be created using await db
  const my_db = await db;

  // Make a query using .any()
  const my_data = await my_db.any("SELECT * FROM u_table ORDER BY id DESC LIMIT 5;");  

  // Render the page with the database information injected
  const pageContents = await ejs.renderFile('views/pages/index.ejs', {this_data: my_data}); // Rendering the file in order to get EJS to fill in the includes for the partials.

  if(req.session.user){

    // Render the rest of the page by injecting it into the standard "layout"
    res.render('layout', { // Now we render the basic layout, which has the variable content filled with the page contents we just pulled in.
      title:"Home | Marc Nettles | Personal Site | Full Stack Development | CU Boulder Computer Science Graduate",
      content: pageContents,
      username: req.session.user
    });
  }
  else{

    // Render the rest of the page by injecting it into the standard "layout"
    res.render('layout', { // Now we render the basic layout, which has the variable content filled with the page contents we just pulled in.
      title:"Home | Marc Nettles | Personal Site | Full Stack Development | CU Boulder Computer Science Graduate",
      content: pageContents
    });
  }

  
});






// A simple about me page.
/*router.get('/about', (req,res) => {

  // res.render takes in two arguments, res.render(string, tuple), where the string is the thing we wish to render and tuple is like a json,
  // where the thing on the left ('title') is referenced in the HTML using EJS like so: <%= title %>.
  res.render('pages/about', {
      title: "About Me | Marc Nettles"
  });

});
*/
router.get('/about', async (req,res, next)=>{
  try{
    if(req.session.user){
      const pageContents = await ejs.renderFile('views/pages/about.ejs');
      res.render('layout', {
        title:"About Me | Marc Nettles",
        content: pageContents,
        username: req.session.user
      });
    }else{
      const pageContents = await ejs.renderFile('views/pages/about.ejs');
      res.render('layout', {
        title:"About Me | Marc Nettles",
        content: pageContents
      });
    }
    
  } catch(error){
    console.error('Error rendering partial:', error);
    res.status(500).send('Internal Server Error')
  }
});


// My blog
router.get('/blog', async (req,res, next)=>{
  try{
    if(req.session.user){
      const pageContents = await ejs.renderFile('views/pages/blog.ejs');
      res.render('layout', {
        title:"Blog | Marc Nettles",
        content: pageContents,
        username: req.session.user,
      });  
    } else{
      const pageContents = await ejs.renderFile('views/pages/blog.ejs');
      res.render('layout', {
        title:"Blog | Marc Nettles",
        content: pageContents,
      });
  
    }
   } catch(error){
    console.error('Error rendering partial:', error);
    res.status(500).send('Internal Server Error')
  }
});


// Flickr to show off API requests and AJAX
/*regular flickr page was having issues, so that was renamed to flickrOLD*/
/*router.get('/flickr', (req,res)=>{
  res.render('pages/flickr' , {
      title:"Flickr Api Access Example | Marc Nettles"
  });

});
*/
router.get('/flickr', async (req,res, next)=>{
  try{
    if(req.session.user){
      const pageContents = await ejs.renderFile('views/pages/flickr.ejs');
      res.render('layout', {
        title:"Flickr Api Access Example | Marc Nettles",
        content: pageContents,
        username: req.session.user,
      });
    } else{
      const pageContents = await ejs.renderFile('views/pages/flickr.ejs');
      res.render('layout', {
        title:"Flickr Api Access Example | Marc Nettles",
        content: pageContents
      });  
    }
} catch(error){
    console.error('Error rendering partial:', error);
    res.status(500).send('Internal Server Error')
  }
});

// Personal Projects directory. Will contain all my personal projects that I have code for.
/*router.get('/projects', (req,res)=> {
  res.render('pages/projects', {
      title: "My Projects | Marc Nettles"
  });
});
*/
router.get('/projects', async (req,res, next)=>{
  try{
    if(req.session.user){
      const pageContents = await ejs.renderFile('views/pages/projects.ejs');
      res.render('layout', {
        title:"My Projects | Marc Nettles",
        content: pageContents,
        username: req.session.user,
      });
    } else{
      const pageContents = await ejs.renderFile('views/pages/projects.ejs');
      res.render('layout', {
        title:"My Projects | Marc Nettles",
        content: pageContents
      });  
    }
  } catch(error){
    console.error('Error rendering partial:', error);
    res.status(500).send('Internal Server Error')
  }
});



// Login/Signup page, will be tied to a database to show off DB integration.
/*router.get('/signup', (req,res)=> {
  res.render('pages/signup', {
      title: "Signup/Login | Marc Nettles"
  });
});
*/
// NOTE: signup modal seems to be having trouble before I even did this, so I think something with the CSP is blocking it? Not sure...
router.get('/signup', async (req,res, next)=>{
  try{
    if(req.session.user){
      const pageContents = await ejs.renderFile('views/pages/signup.ejs');
      res.render('layout', {
        title:"Signup/Login | Marc Nettles",
        content: pageContents,
        username: req.session.user,
      });
    } else{
      const pageContents = await ejs.renderFile('views/pages/signup.ejs');
      res.render('layout', {
        title:"Signup/Login | Marc Nettles",
        content: pageContents
      });
    }
 
  } catch(error){
    console.error('Error rendering partial:', error);
    res.status(500).send('Internal Server Error')
  }
});




// Tic-Tac-Toe to show off some simple javascripting
/*router.get('/tictactoe', (req,res)=>{
  res.render('pages/tictactoe', {
      title: "Simple Tic-Tac-Toe Demo | Marc Nettles"
  });
});
*/
router.get('/tictactoe', async (req,res, next)=>{
  try{
    if(req.session.user){
      const pageContents = await ejs.renderFile('views/pages/tictactoe.ejs');
      res.render('layout', {
        title:"Simple Tic-Tac-Toe Demo | Marc Nettles",
        content: pageContents,
        username: req.session.user,
      });
   
    } else{
      const pageContents = await ejs.renderFile('views/pages/tictactoe.ejs');
      res.render('layout', {
        title:"Simple Tic-Tac-Toe Demo | Marc Nettles",
        content: pageContents
      });
   
    }
 } catch(error){
    console.error('Error rendering partial:', error);
    res.status(500).send('Internal Server Error')
  }
});


router.get('/logout', async (req,res,next)=>{
    if(req.session.user){
      req.session.user = null;
      req.session.destroy(function(err){
        if(err){
          console.error("Error destroying session: ", req.session);
        }
      });
    }
    
    // Redirect to the home page after logging out.
    res.redirect('/');
    //next();
  });
//-------------------------------------END------------------------------------------->
//===================================================================================>






//                        Handle all POST method requests
//===================================================================================]
//-----------------------------------START-------------------------------------------]

// Default, for when people go to example.com/, it's like a home page.
router.post('/', (req,res, next) => {
  res.send("Hello World! from METHOD=POST")
});



// Signup
router.post('/signup', async (req,res,next) => {
  const { username, password, conf_password} = req.body;

  if(password !== conf_password){
    return res.status(400).json({ error: 'Passwords do not match'});
  }
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
  // Wait for the database to be created using await db
  const my_db = await db;

  //const usernameExists = await my_db.any("SELECT * FROM u_table WHERE username='"+username+"';")
  const usernameExists = await my_db.any("SELECT * FROM u_table WHERE username=$1", [username])
  if(usernameExists.length > 0){
    return res.status(400).json({ error: 'Username already exists.'});
  }

  if(usernamePattern.test(username)){
    await my_db.none("INSERT INTO u_table (username, password, value) VALUES ($1, $2, 42);", [username, hashedPassword]);  
  } else{
    return res.status(400).json({error: 'Username needs to be alpha-numeric. No un-approved characters.'});
  }



});

// Log a user in
router.post('/login', async (req,res,next) =>{
  const { username, password } = req.body;
 
  
  try{

    if(usernamePattern.test(username)){
     
      // Wait for the database to be created using await db
      const my_db = await db;
      const result = await my_db.any('SELECT * FROM u_table where username = $1', [username]);

      if (result.length === 0){
        return res.status(401).json({ error: 'User not found'});
      }

      // Retrieve the password hash from the database results.
      const hashedPassword = result[0].password;

      // Compare the provided password with the hashed password
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      if (passwordMatch) {
        // Passwords match, user is authenticated
        res.json({ message: 'Authentication successful' });
        // Store the user in the local session, server-side for max security.
        req.session.user = username;

        // express-sessions will auto-save when redirecting, but not when in a POST function, so we NEED to save like this.
        req.session.save(function(err){
          if(err){console.error("Error saving the session", err);}
          //console.log("session info", req.session);

        });
        next();


      } else {
        // Passwords do not match, user authentication failed
        res.status(401).json({ error: 'Authentication failed' });
      }
    } else{
    return res.status(400).json({error: 'Username needs to be alpha-numeric. No un-approved characters.'});
  }

  } catch(error){
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the login request.'});
  }
});
//------------------------------------END--------------------------------------------]
//===================================================================================]



//                       Handle all PUT method requests
//===================================================================================<
//------------------------------------START------------------------------------------<


// Default, for when people go to example.com/, it's like a home page.
router.put('/', (req,res, next) => {
  res.send("Hello World! from METHOD=PUT")
}); 
//-------------------------------------END-------------------------------------------<
//===================================================================================<



//                       Handle all DELETE method requests
//====================================================================================(
//------------------------------------START-------------------------------------------(

/*router.delete('/users/:id', (req,res, next) => {

});

router.delete('/logout', (req,res,next)=>{
  if(req.session){
    req.session.user = null;
    req.session.destroy(function(err){
      console.error(err);
    });
    console.log("User Logged Out");
  }
  
});
*/
//-------------------------------------END--------------------------------------------(
//====================================================================================(

// Export the router so we can use it in app.js
module.exports = router;
