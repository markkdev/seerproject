const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const initDb = require('./db');
const User = require('./db/models/user');
const hashPassword = require('./utils/hash');

const app = express();
const port = process.env.PORT || 3000;

initDb()
  .then(() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/api/verify', async (req, res) => {
      const hashedPassword = await hashPassword(req.body.password);
      const user = new User({ ...req.body, password: hashedPassword });
      user.save(err => {
        if (err) {
          res.status(500).send('Server Error, sorry');
        } else {
          res.status(200).send(`Successfully Saved Information`);
        }
      });
    });

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../build')));

      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
      });
    }

    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch(err => {
    console.log('DB Error: ', err.message);
  });
