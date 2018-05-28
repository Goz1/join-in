const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');


module.exports =(router) =>{

router.post('/register', (req,res)=>{
  if (!req.body.email){
    res.json({success:false, message:"You need to provide an e-mail"});
  }else{
    if (!req.body.username){
      res.json({success:false, message:"You need to provide a username"});
    }else{
      if (!req.body.password){
        res.json({success:false, message:"You need to provide a password"});
    }else{
    let user = new User({
      email:req.body.email.toLowerCase(),
      username:req.body.username.toLowerCase(),
      password:req.body.password
    });

  user.save(user, (err,user) =>{
    if(err){
      if (err.code === 11000){
        res.json({success: false, msg:'Username or email already exists'});
      }else{
          res.json({success: false, msg:'Failed to register user'});
      }

      } else {
        res.json({success: true, msg:'User registered'});
      }
    });

      }
    }
  }
});

  router.post('/login',(req, res)=>{
    if(!req.body.username){
      res.json({success: false, message:'No username was provided '});
    } else{
      if(!req.body.password){
        res.json({success: false, message:'No password was provided '});
    }else{
      User.findOne({username: req.body.username.toLowerCase()}, (err,user)=>{
        if (err) {
          res.json({success: false, message:err });
        } else {
          if(!user){
            res.json({success: false, message:'Username not found.'});
          }else{
          const validPassword = user.comparePassword(req.body.password);
          if(!validPassword){
            res.json({success: false, message:'Invalid password'});
          } else {
              const token =  jwt.sign({ userId:user._id}, config.secret, {
                expiresIn: 604800// 1 week
              });// check data:user
            res.json({success:true, message: 'Success!', token: token, user:{username:user.username}});
          }
        }
      }
      });
    }
  }
});

  router.use((req, res, next) =>{
    const token = req.headers['authorization'];
    if (!token){
      res.json({success: false, message:'No token provided'});
    } else {
      jwt.verify(token, config.secret,(err, decoded)=>{
        if(err){
          res.json({success: false,message:'Token  Invalid' + err });
        } else{
          req.decoded = decoded;
          next();
        }
      });
    }
  });

  router.get('/profile', (req,res)=>{
    User.findOne({ _id: req.decoded.userId}).select('username email').exec((err,  user)=>{
      if(err){
        res.json({success: false, message: err});
      } else {
        if(!user){
          res.json({success:false, message:'User not found'});
        }else{
          res.json({success: true, user: user});
        }
      }
    })
  })

  return router;
}
