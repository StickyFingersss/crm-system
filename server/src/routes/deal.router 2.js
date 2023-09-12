const dealRouter = require('express').Router();
const { Deal, Customer } = require('../../db/models');

dealRouter.post('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  const { total } = req.body;
  try {
    const deal = await Deal.create({ total, user_id: userId, customer_id: id });
    const findCustomer = await Customer.findByPk(id);
    findCustomer.update({ balance: findCustomer.balance + Number(total) });
    res.json(deal);
  } catch (error) {
    console.log(error);
  }
});

module.exports = dealRouter;
