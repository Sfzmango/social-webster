const { Schema, model } = require('mongoose');

const reactionsSchema = new mongoose.Schema({

})

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    username: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    reactions: [reactionsSchema],

})





/*
{
    toJSON: {
        virtuals: true,
    },
    id: false,
  }

userSchema
    .virtual('fullName')
    // Getter
    .get(function () {
        return `${this.first} ${this.last}`;
    })
    // Setter to set the first and last name
    .set(function (v) {
        const first = v.split(' ')[0];
        const last = v.split(' ')[1];
        this.set({ first, last });
    });

// Initialize our User model
const User = model('user', userSchema);
*/