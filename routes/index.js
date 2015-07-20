var express = require('express');
var router = express.Router();
var cookieSession = require('cookie-session');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/logout', function(req, res) {
  if (req.cookie.user) {
    req.session.destroy(function (err) {
        res.redirect('/');
  })}
  else {
    res.redirect('/')
  }
  })
module.exports = router;
