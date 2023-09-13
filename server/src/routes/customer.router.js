const customerRouter = require('express').Router();
const { Op } = require('sequelize');
const commentRouter = require('./comment.router');

const { Customer, User, Status } = require('../../db/models');

customerRouter.use('/comment', commentRouter);

customerRouter.get('/all', async (req, res) => {
  const { team_id } = req.session;
  try {
    const customers = await Customer.findAll({
      where: { team_id },
      include: [{ model: Status }],
      raw: true,
      nest: true,
    });
    res.json(customers);
  } catch (error) {
    console.log(error);
  }
});

customerRouter.get('/special', async (req, res) => {
  const { name, balance, id, createdAt, status_id, manager_id } = req.query;
  const { team_id } = req.session;
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
      const start = new Date(createdAt).toISOString();
      filter.createdAt = {
        [Op.gte]: start,
      };
    }
    // Проверяем наличие ключа status_id
    if (status_id) {
      // Проверяем значение ключа status на равенство "empty"
      if (
        status_id === 'Пустой' ||
        status_id === 'пустой' ||
        status_id === 'empty' ||
        status_id === 'Empty'
      ) {
        // Используем оператор IS NULL для поиска клиентов со значением status_id, равным null
        filter.status_id = {
          [Op.is]: null,
        };
      } else {
        // Ищем запись о статусе с заданным именем
        const statusData = await Status.findOne({
          where: { name: status_id },
        });

        if (statusData) {
          // Используем оператор = для поиска клиентов с заданным значением status_id
          filter.status_id = statusData.id;
        }
      }
    }
    // Проверяем наличие ключа manager_id
    if (manager_id) {
      // Проверяем значение manager_id
      if (
        manager_id === 'Пусто' ||
        manager_id === 'пусто' ||
        manager_id === 'empty' ||
        manager_id === 'Empty'
      ) {
        // Показываем всех клиентов с manager_id = null
        filter.manager_id = null;
      } else {
        // Ищем менеджера с заданным именем
        const manager = await User.findOne({
          where: { name: manager_id },
        });

        if (manager) {
          // Показываем всех клиентов с текущим manager_id
          filter.manager_id = manager.id;
        }
      }
    }
    // Выполняем запрос к базе данных с использованием созданного фильтра
    const customers = await Customer.findAll({
      where: {
        ...filter,
        team_id,
      },
      include: [{ model: Status }],
      raw: true,
      nest: true,
    });
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
    res.json(customers);
  } catch (error) {
    console.log(error);
  }
});

customerRouter.get('/by-manager/:id', async (req, res) => {
  try {
    const { userId, isAdmin } = req.session;
    const { id } = req.params;

    if (isAdmin && id === undefined) {
      const customers = await Customer.findAll();
      res.json(customers);
    } else {
      const customers = await Customer.findAll({
        where: { manager_id: id },
        include: [{ model: Status }],
        raw: true,
        nest: true,
      });
      res.json(customers);
    }
  } catch (error) {
    console.log(error);
  }
});

customerRouter.put('/manager/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { manager_id } = req.body;
    const customer = await Customer.findByPk(id);
    customer.update({ manager_id });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

customerRouter.put('/status/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status_id } = req.body;
    const customer = await Customer.findByPk(id);
    customer.update({ status_id });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

customerRouter.put('/create');

module.exports = customerRouter;
