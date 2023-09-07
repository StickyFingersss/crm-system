const customerRouter = require('express').Router();
const commentRouter = require('./comment.router');

const { Customer } = require('../../db/models');

customerRouter.use('/comment', commentRouter);

customerRouter.get('/:id');

customerRouter.get('/all', async (req, res) => {
  try {
    const customers = await Customer.findAll({ raw: true });
    res.json(customers);
  } catch (error) {
    console.log(error);
  }
});

module.exports = customerRouter;
