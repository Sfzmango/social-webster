const express = require('express');
// const routes = require("./routes");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-webster';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
try {
    console.log('Connection to mongoose open!');
    app.listen(PORT, () => {
        console.log('Listening on PORT: ' + PORT);
    });
}
catch (err) {
    console.log('Error connecting to mongoose...');
    console.error(err);
    process.exit();
}

