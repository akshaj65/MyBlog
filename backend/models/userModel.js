const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require('crypto');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the user name"],
        maxLength: [30, "30 max chars allowed in name "],
        minlength: [4, "name should have more than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter the user name"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false //when you search in using findone it will not show password with the output 
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    role: {
        type: String,
        default: "user",
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});
// console.log(userSchema)
// this is an event before save
userSchema.pre("save", async function (next) {  //we are using function because in arrow func we cant use "this"
    if (!this.isModified("password")) { // when we update email name but no password we need not update hash again so hash only change when its modified
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
});

//JWT token 
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

//compare Password
userSchema.methods.comparePassword = async function (inputedPassword) {
    return await bcrypt.compare(inputedPassword, this.password);
}

//generating password reset
userSchema.methods.getResetPasswordToken = function () {
    //generating token
    const resetToken = crypto.randomBytes(20).toString('hex');

    //hashing  and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

//

//compare Role
// userSchema.methods.compareRole =  function (role) {
//     return ( role === 'admin');
// }

module.exports = mongoose.model("User", userSchema);