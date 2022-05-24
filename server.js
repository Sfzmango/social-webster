const express = require('express');
// const routes = require("./routes");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

mongoose.connect('mongodb://127.0.0.1:27017/social-webster', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection to mongoose open!');
    })
    .catch((err) => {
        console.log('Error connecting to mongoose...');
        console.error(err);
    })

app.listen(PORT, () => {
    console.log('Listening on PORT: ' + PORT);
});