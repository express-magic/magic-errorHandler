'use strict';

var express = require('express')
  , path    = require('path')
  , handler = express()
  , log     = require('magic-log')
;

handler.use(function(err, req, res, next) {
  if ( err.status === 404 ) {
    return res.send('404 error');
  }
  res.send('error');
});

module.exports = handler;
