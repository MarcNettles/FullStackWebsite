// Marc Nettles - Last Major Revision (08/30/2023)
// Last Revision Details - Moved all routing to this file from app.js.





// Standard required items for express and using the express router.
//=====================================//
//-------------START-------------------//
const express = require('express');
const router = express.Router();
//--------------END--------------------//
//=====================================//


// Create a file stream to pull in html info from a file
//======================================//
//-----------------START----------------//
const fs = require('fs');



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
router.get('/', (req,res)=>{
  fs.readFile("views/pages/index.ejs", function callback_read(err,data){
    if (err){
      throw err;
    }
    res.render('layout', {
      title:"Home | Marc Nettles | Personal Site | Full Stack Development | CU Boulder Computer Science Graduate",
      content: data
    });
  });
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
router.get('/about', (req,res)=>{
  fs.readFile("views/pages/about.ejs", function callback_read(err,data){
    if (err){
      throw err;
    }
    res.render('layout', {
      title:"About Me | Marc Nettles",
      content: data
    });
  });
});


// My blog
router.get('/blog', (req,res)=>{
  fs.readFile("views/pages/blog.ejs", function callback_read(err,data){
    if(err){
      throw err;
    }
    res.render('layout', {
      title:"Blog | Marc Nettles",
      content: data
    });
  });
});


// Flickr to show off API requests and AJAX
/*regular flickr page was having issues, so that was renamed to flickrOLD*/
/*router.get('/flickr', (req,res)=>{
  res.render('pages/flickr' , {
      title:"Flickr Api Access Example | Marc Nettles"
  });

});
*/
router.get('/flickr', (req,res)=>{
  fs.readFile("views/pages/flickr.ejs", function callback_read(err,data){
    if (err){
      throw err;
    }
    res.render('layout', {
      title:"Flickr Api Access Example | Marc Nettles",
      content: data
    });
  });
});

// Personal Projects directory. Will contain all my personal projects that I have code for.
/*router.get('/projects', (req,res)=> {
  res.render('pages/projects', {
      title: "My Projects | Marc Nettles"
  });
});
*/
router.get('/projects', (req,res)=>{
  fs.readFile("views/pages/projects.ejs", function callback_read(err,data){
    if (err){
      throw err;
    }
    res.render('layout', {
      title:"My Projects | Marc Nettles",
      content: data
    });
  });
});



// Login/Signup page, will be tied to a database to show off DB integration.
/*router.get('/signup', (req,res)=> {
  res.render('pages/signup', {
      title: "Signup/Login | Marc Nettles"
  });
});
*/
// NOTE: signup modal seems to be having trouble before I even did this, so I think something with the CSP is blocking it? Not sure...
router.get('/signup', (req,res)=>{
  fs.readFile("views/pages/signup.ejs", function callback_read(err,data){
    if (err){
      throw err;
    }
    res.render('layout', {
      title:"Signup/Login | Marc Nettles",
      content: data
    });
  });
});




// Tic-Tac-Toe to show off some simple javascripting
/*router.get('/tictactoe', (req,res)=>{
  res.render('pages/tictactoe', {
      title: "Simple Tic-Tac-Toe Demo | Marc Nettles"
  });
});
*/
router.get('/tictactoe', (req,res)=>{
  fs.readFile("views/pages/tictactoe.ejs", function callback_read(err,data){
    if (err){
      throw err;
    }
    res.render('layout', {
      title:"Simple Tic-Tac-Toe Demo | Marc Nettles",
      content: data
    });
  });
});

// Just a test page to mess around with.
router.get('/testpage', (req,res)=>{
  fs.readFile("views/pages/aboutTest.ejs", function callback_read(err,data){
    if (err){
      throw err;
    }
    res.render('layout', {
      title:"Test Page | Marc Nettles",
      content: data
    });
  });
});

//-------------------------------------END------------------------------------------->
//===================================================================================>






//                        Handle all POST method requests
//===================================================================================]
//-----------------------------------START-------------------------------------------]

// Default, for when people go to example.com/, it's like a home page.
router.post('/', (req,res) => {
  res.send("Hello World! from METHOD=POST")
});
//------------------------------------END--------------------------------------------]
//===================================================================================]



//                       Handle all PUT method requests
//===================================================================================<
//------------------------------------START------------------------------------------<


// Default, for when people go to example.com/, it's like a home page.
router.put('/', (req,res) => {
  res.send("Hello World! from METHOD=PUT")
}); 
//-------------------------------------END-------------------------------------------<
//===================================================================================<


// Export the router so we can use it in app.js
module.exports = router;
