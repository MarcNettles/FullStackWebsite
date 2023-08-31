// Marc Nettles - Last Major Revision (08/30/2023)
// Last Revision Details - Moved all routing to this file from app.js.





// Standard required items for express and using the express router.
//=====================================//
//-------------START-------------------//
const express = require('express');
const router = express.Router();
//--------------END--------------------//
//=====================================//


// Using EJS to render files so I can do my own layouts with partials still supported
//======================================//
//-----------------START----------------//
const ejs = require('ejs');


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
router.get('/', async (req,res)=>{ // Upgraded to async so we can use "await" on the ejs.renderFile
  try{
    const pageContents = await ejs.renderFile('views/pages/index.ejs'); // Rendering the file in order to get EJS to fill in the includes for the partials.
    

    res.render('layout', { // Now we render the basic layout, which has the variable content filled with the page contents we just pulled in.
      title:"Home | Marc Nettles | Personal Site | Full Stack Development | CU Boulder Computer Science Graduate",
      content: pageContents
    });
  } catch(error){ // Standard error handling
    console.error('Error rendering partial:', error);
    res.status(500).send('Internal Server Error')
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
router.get('/about', async (req,res)=>{
  try{
    const pageContents = await ejs.renderFile('views/pages/about.ejs');
    res.render('layout', {
      title:"About Me | Marc Nettles",
      content: pageContents
    });
  } catch(error){
    console.error('Error rendering partial:', error);
    res.status(500).send('Internal Server Error')
  }
});


// My blog
router.get('/blog', async (req,res)=>{
  try{
    const pageContents = await ejs.renderFile('views/pages/blog.ejs');
    res.render('layout', {
      title:"Blog | Marc Nettles",
      content: pageContents
    });
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
router.get('/flickr', async (req,res)=>{
  try{
    const pageContents = await ejs.renderFile('views/pages/flickr.ejs');
    res.render('layout', {
      title:"Flickr Api Access Example | Marc Nettles",
      content: pageContents
    });
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
router.get('/projects', async (req,res)=>{
  try{
    const pageContents = await ejs.renderFile('views/pages/projects.ejs');
    res.render('layout', {
      title:"My Projects | Marc Nettles",
      content: pageContents
    });
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
router.get('/signup', async (req,res)=>{
  try{
    const pageContents = await ejs.renderFile('views/pages/signup.ejs');
    res.render('layout', {
      title:"Signup/Login | Marc Nettles",
      content: pageContents
    });
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
router.get('/tictactoe', async (req,res)=>{
  try{
    const pageContents = await ejs.renderFile('views/pages/tictactoe.ejs');
    res.render('layout', {
      title:"Simple Tic-Tac-Toe Demo | Marc Nettles",
      content: pageContents
    });
  } catch(error){
    console.error('Error rendering partial:', error);
    res.status(500).send('Internal Server Error')
  }
});

// Just a test page to mess around with.
router.get('/testpage', async (req,res)=>{
    try{

      const pageContents = await ejs.renderFile('views/pages/about.ejs');//'views/partials/skillsnavbar.ejs');
      res.render('layout', {
        title:"Test Page | Marc Nettles",
        content: skillsnavbar //res.render('pages/testpage') //data // Figure out how to make this run as javascript and not as just regular HTML. Maybe use res.render('pages/testpage) instead?
      });

    } catch(error){
      console.error('Error rendering partial:', error);
      res.status(500).send('Internal Server Error')
    }
    
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
