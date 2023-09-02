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
const express = require('express');
const app = express();
//---------------END----------------//
//==================================//


/* Setting up Helmet for 
    Content-Security-Policy: A powerful allow-list of what can happen on your page which mitigates many attacks
    Cross-Origin-Opener-Policy: Helps process-isolate your page
    Cross-Origin-Resource-Policy: Blocks others from loading your resources cross-origin
    Origin-Agent-Cluster: Changes process isolation to be origin-based
    Referrer-Policy: Controls the Referer header
    Strict-Transport-Security: Tells browsers to prefer HTTPS
    X-Content-Type-Options: Avoids MIME sniffing
    X-DNS-Prefetch-Control: Controls DNS prefetching
    X-Download-Options: Forces downloads to be saved (Internet Explorer only)
    X-Frame-Options: Legacy header that mitigates clickjacking attacks
    X-Permitted-Cross-Domain-Policies: Controls cross-domain behavior for Adobe products, like Acrobat
    X-Powered-By: Info about the web server. Removed because it could be used in simple attacks
    X-XSS-Protection: Legacy header that tries to mitigate XSS attacks, but makes things worse, so Helmet disables it
*/
const helmet = require('helmet');
// Using helmet and setting custom policies. Default helmet would be just app.use(helmet());
app.use(helmet({
            contentSecurityPolicy: {
                directives: {
                    "script-src": ["'self'", 
                                    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", //includes Popper
                                    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js",
                                    "https://code.jquery.com/jquery-3.3.1.min.js",
                                    "https://cdn.jsdelivr.net/npm/popper.min.js",
                                    "https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Nunito+Sans:opsz@6..12&family=Poppins:wght@300&family=Roboto&display=swap"
                                ],
                    "connect-src": [
                        "'self'",
                        'api.flickr.com',
                    ],
                    "img-src": [
                        "'self'",
                        "https://live.staticflickr.com",
                         "https://cdn.pixabay.com"
                    ]/*,
                    "style-src": [
                        "'self'"
                    ]*/
                },
            },
         })
        );
// Setting custom headers that helmet doesn't set
app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'geolocation=(self "https://www.marcnettles.com"), microphone=()');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp; report-to="default"'); // This is new and stops people from embedding if CORS or CORP isn't enforced on their site.
    next();
});

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