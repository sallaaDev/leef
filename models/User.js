const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    googleId: String,
    notes: [String]
});

mongoose.model('users', UserSchema);