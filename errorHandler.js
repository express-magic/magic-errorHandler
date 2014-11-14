'use strict';
var express = require('express')
  , path    = require('path')
  , handler = express.Router()
  , log     = require('magic-log')
;
handler.use(function (req, res, next) {
  var err = { status: 404 };
  log.error('404 called');
  next(err, req, res, next);
});

handler.use(function(err, req, res, next) {
  if ( err.status === 404 ) {
    log.error('404 called');
    return res.send('404 error');
  }
  log.error('500 called, err:', err);
  res.send('500 server error');
});
module.exports = handler;
