const customerRouter = require('express').Router();
const { Op } = require('sequelize');
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

customerRouter.get('/special', async (req, res) => {
  const { name, balance, id, createdAt } = req.query;
  console.log("🚀 ~ file: customer.router.js:20 ~ customerRouter.get ~ req.query:", req.query);
  const filter = {};
  try {
    if (name) {
      // Используем оператор LIKE для поиска имен, содержащих заданное значение
      filter.name = {
        [Op.like]: `${name}`,
      };
    }
    // Проверяем наличие ключа balance
    if (balance) {
      // Используем оператор >= для поиска клиентов с балансом больше или равным заданному значению
      filter.balance = {
        [Op.gte]: balance,
      };
    }
    // Проверяем наличие ключа id
    if (id) {
      // Используем оператор = для поиска клиента с заданным id
      filter.id = id;
    }
    // Проверяем наличие ключа createdAt
    if (createdAt) {
      // Используем оператор = для поиска клиентов, зарегистрированных в заданную дату
      filter.createdAt = createdAt;
    }
    // Выполняем запрос к базе данных с использованием созданного фильтра
    const customers = await Customer.findAll({
      where: filter,
    });
    // Отправляем полученные данные на фронтенд
    console.log('!!!!!!!!!!!!!!!!!!', customers);
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
