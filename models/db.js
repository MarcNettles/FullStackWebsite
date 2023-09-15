
// Setting up Database
//========================================================//
//---------------------START------------------------------//

// Promise based database stuff for making asynchronous requests to PostgreSQL
const pgp = require('pg-promise')();
// File stream to read in a file for the password
const fs = require('fs').promises;



// Function to 
async function readDbPassword() {
    try {
      const dbPassword = await fs.readFile('../FullStackWebsite/AWS Lightsail Stuff/pg-pass.txt', 'utf8');
      return dbPassword.trim();
    } catch (error) {
      console.error('Error reading database password:', error);
      throw error;
    }
  }

// Database configuration
async function configureDatabase() {
    const dbPassword = process.env.DB_PASSWORD;//await readDbPassword();
    
    const dbConfig = {
      host: 'localhost', // Change this to your PostgreSQL host
      port: 5432, // Change this to your PostgreSQL port
      database: 'www_marcnettles_com', // Change this to your database name
      user: 'postgres', // Change this to your database username
      password: dbPassword // Use the password read asynchronously
    };
  
    return pgp(dbConfig);
}
  
// Create a database instance
const db = configureDatabase();


module.exports = db;


//----------------------END-------------------------------//
//========================================================//