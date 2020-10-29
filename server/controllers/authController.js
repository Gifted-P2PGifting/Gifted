const bcrypt = require('bcrypt');
const db = require('../database.js');

const saltRounds = 10;
const authController = {};

// check Username
authController.checkUsername = async (req, res, next) => {
  // get username from request body
  const { username } = req.body;

  try {
    // set value array and query string
    const values = [username];
    const QUERY = 'SELECT username FROM users WHERE username = $1';

    // query DB for user with target username
    const result = await db.query(QUERY, values);

    // if user with username already exisits
    if (result.rows.length)
      return next({
        log: 'Username already exists.',
        message: 'Please try again.',
      });

    // else continue to next middleware
    return next();
  } catch (err) {
    return next(err);
  }
};

// check Email
authController.checkEmail = async (req, res, next) => {
  // get username from request body
  const { email } = req.body;

  try {
    // set value array and query string
    const values = [email];
    const QUERY = 'SELECT email FROM users WHERE email = $1';

    // query DB for user with target username
    const result = await db.query(QUERY, values);

    // if user with username already exisits
    if (result.rows.length)
      return next({
        log: 'Account already exists for this email.',
        message: 'Please try again.',
      });

    // else continue to next middleware
    return next();
  } catch (err) {
    return next(err);
  }
};

// encryptPassword
authController.encryptPassword = async (req, res, next) => {
  const { password } = req.body;

  try {
    // use bcrypt to create a hashed password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // add hashed password to res.locals
    res.locals.hashedPassword = hashedPassword;

    // move on to next middleware
    return next();
  } catch (err) {
    return next(err);
  }
};

// verify username exists and password corresponds
authController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log('entered verify', req.body);

  try {
    // set value array and query string
    const values = [username];
    const QUERY = 'SELECT * FROM users WHERE username = $1';
    // query DB for user with specified username
    const result = await db.query(QUERY, values);

    // if no user exists with that username
    if (result.rows.length === 0)
      return next({
        log: 'Invalid username.',
        message: 'Please Try Again',
      });

    // check hashed password against users attempted password
    const dbPassword = result.rows[0].password;
    const validPassword = await bcrypt.compare(password, dbPassword);

    if (!validPassword)
      return next({
        log: 'Invalid password.',
        message: 'Please Try Again',
      });

    // create a user object that doesn't contain the hashed password
    const user = {
      user_id: result.rows[0].user_id,
      username: result.rows[0].username,
    };
    // add user to res.locals for response
    res.locals.user = user;

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = authController;
