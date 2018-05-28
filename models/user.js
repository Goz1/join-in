const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require ('bcrypt-nodejs');


let emailLengthChecker = (email) =>{

  if(!email){
    return false;
  }else{
    if (email.length < 5 || email.length > 50){
      return false;
    } else{
      return true;
    }
  }
};

const emailValidators =[
  {
    validator: emailLengthChecker,
    message: 'email must be more than 5 characters and no more than 50'
  }
];


//user schema
const userSchema = new Schema({
  name:{
    type: String,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: emailValidators
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
  type: String,
  required: true
}
});

userSchema.pre('save', function(next){

  if (!this.isModified('password'))
  return next();

  bcrypt.hash(this.password, null, null, (err,hash)=>{
    if (err) return next(err);
    this.password = hash;
    next();
  });
});



userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('UserSchema', userSchema);







// module.exports.save = function(user, callback){
// bcrypt.genSalt(10, (err, salt) => {
// bcrypt.hash(user.password, salt,(err, hash) =>{
//   if(err) throw err;
//   user.password = hash;
//   user.save(callback);
// });
// });
// }
