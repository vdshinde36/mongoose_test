const routes = require('express').Router();
const HackerNewsController = require('./controller.js');


routes.get('/news', HackerNewsController.getNews);

module.exports = routes;