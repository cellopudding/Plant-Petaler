const db = require('../config/connection');
const { Product } = require('../models');
const plantSeeds = require('./plantSeeds.json');

db.once('open', async () => {
  try {
    await Product.deleteMany({});
    await Product.create(plantSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
