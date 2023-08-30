var express = require('express');
var router = express.Router();




//---------------------------------------------------
// Probably useless, but just testing some stuff.
var users = [
  { name: 'ex', email: 'ex@ex.com' },
  { name: 'xe', email: 'xe@xe.com' },
  { name: 'xx', email: 'xx@xx.com' }
];

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
