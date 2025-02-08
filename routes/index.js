var express = require('express');
var router = express.Router();
var passport = require('passport');

// This app has no "home" page, but your projects should 😀
router.get('/', function(req, res, next) {
  res.redirect('/movies');
});

router.get('/auth/google', passport.authenticate(
  // Which passport strategy to use:
  'google',
  {
    // Requesting the user's profile and email:
    scope: ['profile', 'email'],
    // Force to pick account each time:
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/movies',
    // Change to what's best for your app:
    failureRedirect: '/movies'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    // Change path for your "landing" page:
    res.redirect('/movies');
  });
});

module.exports = router;
