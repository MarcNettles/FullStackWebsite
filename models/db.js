
// Setting up Database
//========================================================//
//---------------------START------------------------------//

// Promise based database stuff for making asynchronous requests to PostgreSQL
const pgp = require('pg-promise')();



// Database configuration
function configureDatabase() {

    // Getting the password from the environment variable DB_PASSWORD. Recommended for security purposes.
    // If this isn't working, check to make sure the root directory has a file named ".env" which has the line "DB_PASSWORD='password'"
    // with the word password replaced with the actual password.
    const dbPassword = process.env.DB_PASSWORD;

    // Configuration of the database connection
    const dbConfig = {
      host: 'localhost', 
      port: 5432,
      database: 'www_marcnettles_com', 
      user: 'postgres', 
      password: dbPassword
    };
  
    return pgp(dbConfig);
}
  
// Create a database instance
const db = configureDatabase();

// Export the database so we can query it in the routes/index.js file.
module.exports = db;


//----------------------END-------------------------------//
//========================================================//