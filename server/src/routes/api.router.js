const apiRouter = require('express').Router();
const todosRouter = require('./todos.router');
const userRouter = require('./user.router');
const callsRouter = require('./calls.router');
const managerRouter = require('./manager.router');

apiRouter.use('/todos', todosRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/calls', callsRouter);
apiRouter.use('/managers', managerRouter);

module.exports = apiRouter;
