// Marc Nettles - Last Major Revision (08/30/2023)
// Latest Revision Details - Removed routing from app.js and put it in routes/index.js. Now routing properly.



// Project Overview
//=========================================================//
//----------------------START------------------------------//
// The intent of this project is to set up my own private
// web server which will host my public website containing
// my coding and webdev projects.
//
//
// Things I want to use: Back-end/Front-end separation, Bootstrap, NodeJS, ExpressJS, EJS, maybe try some reactJS
//-----------------------END-------------------------------//
//=========================================================//






// Setting up server using ExpressJS
//==================================//
//--------------START---------------//
const express = require('express')
const app = express()
//---------------END----------------//
//==================================//



// Setting the view engine to recognize EJS
//=============================//
//-------------START-----------//
app.set('view engine', 'ejs');
//-------------END-------------//
//=============================//



// Tells Express to serve static files from the /public folder
//===============================================//
//------------------START------------------------//
app.use(express.static(__dirname + "/public"));
//-------------------END-------------------------//
//===============================================//



// Setting up the routing by importing the different routes
//====================================================//
//--------------------START---------------------------//
const indexRouting = require('./routes/index');
//---------------------END----------------------------//
//====================================================//


// Use those routes
//=================================//
//-----------START-----------------//
app.use('/', indexRouting);
//------------END------------------//
//=================================//


// Note: Not listening here, we listen in bin/www.


// Exporting app so it can be used in bin/www
//======================//
//-------START----------//
module.exports = app;
//--------END-----------//
//======================//