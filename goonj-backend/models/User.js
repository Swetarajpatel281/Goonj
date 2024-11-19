
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
         type: String,
          required: true },
    lastName: {
         type: String,
          required: true },
    email: {
        type: String,
        required: true,
        unique: true },
    password: {
        type: String,
        required: true },
        Confirmpassword: {
            type: String,
            validate: {
              validator: function(value) {
                return value === this.password; 
              },
              message: 'Passwords do not match!'
            }
          },
        isVerified: { 
            type: Boolean,
            default: false },
        verificationToken: {
            type: String },
          tokenExpires: { type: Date },
        date: {
            type: Date,
            default: Date.now,
        }
});


module.exports = mongoose.model('User', userSchema);
