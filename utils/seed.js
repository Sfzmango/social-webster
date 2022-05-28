const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

const user = await User.create({
    username: "Joemama",
    email: "joe@gmail.com",
    thoughts: [],
    friends: [],
})

const thoughts = await Thought.create({

})