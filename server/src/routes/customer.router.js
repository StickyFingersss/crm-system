const customerRouter = require('express').Router();
const commentRouter = require('./comment.router');

const { Customer, Comment, User, Status } = require('../../db/models');

customerRouter.use('/comment', commentRouter);

customerRouter.get('/all', async (req, res) => {
  try {
    const customers = await Customer.findAll({ raw: true });
    res.json(customers);
  } catch (error) {
    console.log(error);
  }
});

customerRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const customers = await Customer.findOne({
      where: { id },
      include: [{ model: Status }],
      raw: true,
      nest: true,
    });
    const comment = await Comment.findAll({ where: { user_id: id } });
    const manager = await User.findOne({
      where: { id },
      raw: true,
      nest: true,
    });
    console.log('asdasdsadasdadasasd');
    console.log(customers);
    res.json(customers);
  } catch (error) {
    console.log(error);
  }
});

module.exports = customerRouter;
