const commentRouter = require('express').Router();
const { Comment } = require('../../db/models');

commentRouter.post('/create', async (req, res) => {
  const { comment } = req.body;
  try {
    await Comment.create({
      text: comment,
      user_id: req.session.userId,
      customer_id: 1,
    });
    res.json(comment);
  } catch (error) {
    console.log(error);
  }
});

commentRouter.get('/all', async (req, res) => {
  try {
    const comments = await Comment.findAll({ raw: true });
    res.json(comments);
  } catch (error) {
    console.log(error);
  }
});

module.exports = commentRouter;
