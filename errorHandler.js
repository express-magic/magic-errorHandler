'use strict';

var express = require('express')
  , path    = require('path')
  , handler = express()
  , log     = require('magic-log')
;

handler.use(function (req, res, next) {
  log.warn('404 called');
  res.send('404 error');
}

handler.use(function(err, req, res, next) {
  if ( err.status === 404 ) {
    return res.send('404 error');
  }
  log.warn('500 called');
  res.send('error');
});

module.exports = handler;
