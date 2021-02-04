
// require modules
const express = require('express');
const cors = require('cors');

// middleware
const userController = require('./controllers/userController.js');
const authController = require('./controllers/authController.js');
const campaignController = require('./controllers/campaignController.js');

const PORT = 3000;
const app = express();

// allows cross origin sharing
app.use(cors());
// parse urlencoded and json bodies
app.use(express.json());
console.log('in server');

// create new user in database on sign-up
app.post(
  '/signup',
  authController.checkUsername,
  authController.checkEmail,
  authController.encryptPassword,
  userController.createUser,
  (req, res) => {
    // returns user object and stats object
    return res
      .status(200)
      .json({ user: res.locals.user, stats: res.locals.stats });
  }
);

// ensure valid user on login request
app.post('/login', authController.verifyUser, (req, res) => {
  // returns user object
  return res.status(200).json({ user: res.locals.user });
});

app.post('/campaign', campaignController.createCampaign, (req, res) => {
  return res.status(200).json({ campaign: res.locals.campaign });
});

app.get('/campaign', campaignController.getFeed, (req, res) => {
  return res.status(200).json({ feed: res.locals.feed });
});

// catch all error handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use('*', (err, req, res, next) => {
  const defaultErr = {
    status: 500,
    message: 'error in middleware',
    ...err,
  };
  res.status(defaultErr.status).send(defaultErr.message);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
