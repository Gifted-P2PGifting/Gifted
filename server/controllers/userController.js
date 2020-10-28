const db = require('../database.js');

const userController = {};

// createUser
userController.createUser = async (req, res, next) => {
  // prepair username and password variables
  const { username } = req.body;
  const { email } = req.body;
  const password = res.locals.hashedPassword;

  // add to user table
  try {
    const values = [username, email, password];
    const QUERY =
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id, username, email';

    const result = await db.query(QUERY, values);
    const [user] = result.rows;
    res.locals.user = user;
  } catch (err) {
    return next(err);
  }

  // add to stats table
  try {
    const values = [res.locals.user.user_id];
    const QUERY = 'INSERT INTO stats (user_id) VALUES ($1) RETURNING *';

    const result = await db.query(QUERY, values);
    const [stats] = result.rows;
    res.locals.stats = stats;

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = userController;
