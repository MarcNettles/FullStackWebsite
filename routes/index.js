// Marc Nettles - Last Major Revision (08/30/2023)
// Last Revision Details - Moved all routing to this file from app.js.





// Standard required items for express and using the express router.
//=====================================//
//-------------START-------------------//
var express = require('express');
var router = express.Router();
//--------------END--------------------//
//=====================================//




//                    Handle all GET method requests
//===================================================================================>
//--------------------------------START---------------------------------------------->

// Default, for when people go to https://www.marcnettles.com/, it's like a home page. 
// req -> stuff being pulled in
// res -> stuff to send back
router.get('/', (req,res) => {

  // res.render will send the page "index", which can be html but in this case I'm using EJS
  // The reason index is in "pages/index" and not "view/pages/index" is because EJS already
  // knows to look in the views folder, so we can leave that out.

  // Renders the page index.ejs and passes the variable "title" with the value "Home | Marc Nettles | etc".
  res.render('pages/index', {
      title: "Home | Marc Nettles | Personal Site | Full Stack Development | CU Boulder Computer Science Graduate" // Putting most relevant information to the left, so it doesn't get cut-off by resizing
  });

});

// A simple about me page.
router.get('/about', (req,res) => {

  // res.render takes in two arguments, res.render(string, tuple), where the string is the thing we wish to render and tuple is like a json,
  // where the thing on the left ('title') is referenced in the HTML using EJS like so: <%= title %>.
  res.render('pages/about', {
      title: "About Me | Marc Nettles"
  });

});


// Personal Projects directory. Will contain all my personal projects that I have code for.
router.get('/projects', (req,res)=> {
  res.render('pages/projects', {
      title: "My Projects | Marc Nettles"
  });
});

// Login/Signup page, will be tied to a database to show off DB integration.
router.get('/signup', (req,res)=> {
  res.render('pages/signup', {
      title: "Signup/Login | Marc Nettles"
  });
});

// Flickr to show off API requests and AJAX
router.get('/flickr', (req,res)=>{
  res.render('pages/flickr', {
      title:"Flickr Api Access Example | Marc Nettles"
  });

});

// Tic-Tac-Toe to show off some simple javascripting
router.get('/tictactoe', (req,res)=>{
  res.render('pages/tictactoe', {
      title: "Simple Tic-Tac-Toe Demo | Marc Nettles"
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
