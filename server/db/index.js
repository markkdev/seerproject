const mongoose = require('mongoose');

const initDb = () =>
  new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost/seerproject', {
      useNewUrlParser: true
    });

    const db = mongoose.connection;

    db.on('error', error => {
      reject(error);
    });

    db.once('open', () => {
      console.log('DB Initialized Successfully');
      resolve();
    });
  });

module.exports = initDb;
