const bcrypt = require('bcrypt');

const hashPassword = password =>
  new Promise((resolve, reject) => {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err2, hash) => {
        if (err2) {
          reject(err2);
        }
        resolve(hash);
      });
    });
  });

module.exports = hashPassword;
