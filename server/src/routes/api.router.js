const apiRouter = require('express').Router();
const todosRouter = require('./todos.router');
const userRouter = require('./user.router');
const callsRouter = require('./calls.router');
const managerRouter = require('./manager.router');
const customerRouter = require('./customer.router');
const statusRouter = require('./status.router');

apiRouter.use('/todos', todosRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/calls', callsRouter);
apiRouter.use('/managers', managerRouter);
apiRouter.use('/customer', customerRouter);
apiRouter.use('/status', statusRouter);

module.exports = apiRouter;
