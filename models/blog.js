const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require ('bcryptjs');
const config = require ('../config/database');


// // validating the host name
// let hostLengthChecker = (host) =>{
//
//   if(!host){
//     return false;
//   }else{
//     if (host.length < 5 || host.length > 50){
//       return false;
//     } else{
//       return true;
//     }
//   }
// };
//
//
// const hostValidators =[
//   {
//     validator: hostLengthChecker,
//     message: 'The host name must be more than 5 characters and no more than 50'
//   }
// ];

//validating the title

  let titleLengthChecker = (title) =>{

    if(!title){
      return false;
    }else{
      if (title.length < 5 || title.length > 50){
        return false;
      } else{
        return true;
      }
    }
  };


  let alphaNumericTitleChecker = (title) =>{

    if(!title){
      return false;
    }else{
      const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
      return regExp.test(title);
    }
  };

  const titleValidators =[
    {
      validator: titleLengthChecker,
      message: 'Title must be more than 5 characters and no more than 50'
    },

    {
      validator: alphaNumericTitleChecker,
      message: 'Title must be alplanumeric'
    }
  ];

  //validating the body

  let bodyLengthChecker = (body) =>{

    if(!body){
      return false;
    }else{
      if (body.length < 5 || body.length > 5000){
        return false;
      } else{
        return true;
      }
    }
  };

  const bodyValidators =[
    {
      validator: bodyLengthChecker,
      message: 'body must be more than 5 characters and no more than 5000'
    }
  ];

  //validating the venue

  let venueLengthChecker = (venue) =>{

    if(!venue){
      return false;
    }else{
      if (venue.length < 5 || venue.length > 500){
        return false;
      } else{
        return true;
      }
    }
  };

  const venueValidators =[
    {
      validator: venueLengthChecker,
      message: 'venue must be more than 5 characters and no more than 5000'
    }
  ];

//validating the comment

  let commentLengthChecker = (comment) =>{

    if(!comment[0]){
      return false;
    }else{
      if (comment[0].length < 5 || comment[0].length > 200){
        return false;
      } else{
        return true;
      }
    }
  };


  const commentValidators =[
    {
      validator: commentLengthChecker,
      message: 'Comments should not exceed 200 characters'
    }
  ];










  const blogSchema = new Schema({

    // host:{
    //   type:String, required:false, validate:hostValidators
    // },

    title:{
      type:String, required:true, validate:titleValidators
    },

    body:{
      type :String, required: true, validate:bodyValidators
    },

    // venue:{
    //   type :String, required: false, validate: venueValidators
    // },

    createdBy: {
      type: String
    },

    createdAt:{
      type: Date, default: Date.now()
    },

    likes: { type: Number, default: 0 },

    likedBy: {type: Array , default: 0 },

    dislikes: {type: Number, default: 0},

    dislikedBy: {type: Array, default: 0},

    comments:[
      {
        comment:{ type: String, validate: commentValidators },
        commentator : { type: String }
      }
    ]



  });


 module.exports = mongoose.model('Blog', blogSchema);




 // let titleLengthChecker = (title) =>{
 //
 //   if(!title){
 //     return false;
 //   }else{
 //     if (title.length < 5 || title.length > 50){
 //       return false;
 //     } else{
 //       return true;
 //     }
 //   }
 // };
 //
 // let alphaNumericTitleChecker = (title) =>{
 //
 //   if(!title){
 //     return false;
 //   }else{
 //     const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
 //     return regExp.test(title);
 //   }
 // };
 //
 // const titleValidators =[
 //   {
 //     validator: titleLengthChecker,
 //     message: 'Title must be more than 5 characters and no more than 50'
 //   },
 //
 //   {
 //     validator: alphaNumericTitleChecker,
 //     message: 'Title must be numeric'
 //   }
 // ];
 //
 // let bodyLengthChecker = (body) =>{
 //
 //   if(!body){
 //     return false;
 //   }else{
 //     if (body.length < 5 || body.length > 5000){
 //       return false;
 //     } else{
 //       return true;
 //     }
 //   }
 // };
 //
 // const bodyValidators =[
 //   {
 //     validator: bodyLengthChecker,
 //     message: 'body must be more than 5 characters and no more than 5000'
 //   }
 // ];
 //
 // let descriptionLengthChecker = (description) =>{
 //
 //   if(!description){
 //     return false;
 //   }else{
 //     if (description.length < 5 || description.length > 5000){
 //       return false;
 //     } else{
 //       return true;
 //     }
 //   }
 // };
 //
 // const descriptionValidators =[
 //   {
 //     validator: descriptionLengthChecker,
 //     message: 'description must be more than 5 characters and no more than 5000'
 //   }
 // ];
 //
 // let topicsLengthChecker = (topics) =>{
 //
 //   if(!topics){
 //     return false;
 //   }else{
 //     if (topics.length < 5 || topics.length > 5000){
 //       return false;
 //     } else{
 //       return true;
 //     }
 //   }
 // };
 //
 // const topicsValidators =[
 //   {
 //     validator: topicsLengthChecker,
 //     message: 'topics must be more than 5 characters and no more than 5000'
 //   }
 // ];
 //
 // let hostLengthChecker = (host) =>{
 //
 //   if(!host){
 //     return false;
 //   }else{
 //     if (host.length < 5 || host.length > 100){
 //       return false;
 //     } else{
 //       return true;
 //     }
 //   }
 // };
 //
 // const hostValidators =[
 //   {
 //     validator: hostLengthChecker,
 //     message: 'host must be more than 5 characters and no more than 5000'
 //   }
 // ];











 // const blogSchema = mongoose.Schema({
 //
 //   title:{
 //     type:String,
 //     // required:true,
 //     validate:titleValidators
 //   },
 //
 //   // host:{
 //   //   type:String,
 //   //   // required:true,
 //   //   validate:hostValidators
 //   // },
 //
 //   body:{
 //     type :String,
 //     // required true,
 //     validate:bodyValidators
 //   },
 //
 //   createdBy: {
 //     type: String
 //   },
 //
 //   createdAt:{
 //     type: Date,
 //     default: Date.now()
 //   },
 //
 //   interested:{
 //     type: Number,
 //     default:0
 //   },
 //
 //   description:[
 //     {
 //       description:{
 //         type: String,
 //       validate:descriptionValidators
 //     }
 //     }
 //     ],
 //   topics:[
 //     {
 //       topics:{
 //         type:String,
 //       validate:topicsValidators
 //       }
 //     }
 //   ]
 //
 // });
