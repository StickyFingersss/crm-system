const apiRouter = require('express').Router();
const managerRouter = require('./manager.router');
const todosRouter = require('./todos.router');

apiRouter.use('/todos', todosRouter);
apiRouter.use('/managers', managerRouter);

module.exports = apiRouter;
