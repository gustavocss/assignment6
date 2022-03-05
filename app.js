const express = require('express');
const app = express();

const connected = require('./db/connection.js');

app.set('json spaces', 40);

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

connected
    .then(() => {
        console.log('connected to database!');
        const server = app.listen(process.env.PORT || 3000, () => {
            console.log('listening...');
        });
    })
    .catch((error) => {
        console.error(error);
    });

app.get('/', (req, res) => {
    res.status(200).send('Heroes API');
});

const router = require('./routes/index.js');
app.use('/api/v1', router);
