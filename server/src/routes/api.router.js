const apiRouter = require('express').Router();

const todosRouter = require('./todos.router');

apiRouter.use('/todos', todosRouter);

module.exports = apiRouter;
