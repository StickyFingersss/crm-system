const apiRouter = require('express').Router();
const todosRouter = require('./todos.router');
const userRouter = require('./user.router');
const callsRouter = require('./calls.router');

apiRouter.use('/todos', todosRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/calls', callsRouter);

module.exports = apiRouter;
