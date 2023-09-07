const apiRouter = require('express').Router();
const managerRouter = require('./manager.router');
const todosRouter = require('./todos.router');
const usersRouter = require('./user.router');
const customerRouter = require('./customer.router');

apiRouter.use('/todos', todosRouter);
apiRouter.use('/managers', managerRouter);
apiRouter.use('/user', usersRouter);
apiRouter.use('/customer', customerRouter);

module.exports = apiRouter;
