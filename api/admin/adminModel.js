const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var usersSchema = new Schema({
  username : {type : String,required : true,unique:true},
  password : { type : String,minlength : 6}
})

usersSchema.pre('save', function (next) {
  var user = this;
  console.log("this is user",user);

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    })
  })
});


module.exports = mongoose.model('users', usersSchema);
