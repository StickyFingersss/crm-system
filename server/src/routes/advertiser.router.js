const advertisierRouter = require('express').Router();

const axios = require('axios');
const { Customer } = require('../../db/models');

advertisierRouter.get('/', async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
advertisierRouter.post('/', async (req, res) => {
  try {
    const { newApi } = req.body;
    const { data } = await axios.get(`${newApi}`);
    const { team_id, userId } = req.session;
    const status_id = 3;
    console.log(data);

    // 'https://64fc5122605a026163ae5dbe.mockapi.io/customers'
    data.map((el) => delete el.id);

    const seedCustomers = async (element) => {
      await Customer.create({ ...element, team_id, manager_id: userId, status_id });
    };

    data.forEach((element) => {
      seedCustomers(element);
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = advertisierRouter;
