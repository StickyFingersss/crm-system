require('dotenv').config();
require('@babel/register');

const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const FileStore = require('session-file-store')(session);
const apiRouter = require('./src/routes/api.router');

const sessionConfig = {
  name: 'CRM',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(session(sessionConfig));
app.use(cors({ credentials: true, origin: ['http://localhost:5173'] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public'))); // ! зачем нам мидлварка на public?

app.use('/api', apiRouter);

app.get('/*', (req, res) => {
  res.send('404 Page not found');
});

app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});
