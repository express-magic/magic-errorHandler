'use strict';
var express = require('express')
  , path    = require('path')
  , handler = express()
  , log     = require('magic-log')
  , view   = require('magic-view')
;

handler.use(function (req, res, next) {
  var app  = req.app
    , r404 = app.get('404page') || '404'
  ;
  log.warn('404 error page called, page was:', req.params.page);
  req.params.page = r404;
  res.status(404);

  view.render.page(req, res, function(err) {
    log.error('404 page template for host not found');
    if ( err ) { next(err); }
  });
});

handler.use(function(err, req, res, next) {
  log.error('500 called, err:', err);
  res.send('500 server error.');
});

module.exports = handler;
