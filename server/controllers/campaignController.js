const db = require('../database.js');

const campaignController = {};

// createUser
campaignController.createCampaign = async (req, res, next) => {
  // prepair username and password variables
  const { familyName, recipientDesc, imageUri, story, link } = req.body;
  console.log('in create campaign', req.body);
  // add to user table
  try {
    const values = [familyName, recipientDesc, imageUri, story, link];
    const QUERY =
      'INSERT INTO campaigns_alt (familyName, recipientDesc, image_uri, story, link) VALUES ($1, $2, $3, $4, $5) RETURNING *';

    const result = await db.query(QUERY, values);
    const [campaign] = result.rows;
    res.locals.campaign = campaign;

    return next();
  } catch (err) {
    return next(err);
  }
};

campaignController.getFeed = async (req, res, next) => {
  try {
    const QUERY = 'SELECT * FROM campaigns_alt';

    const result = await db.query(QUERY);
    res.locals.feed = result.rows;

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = campaignController;
