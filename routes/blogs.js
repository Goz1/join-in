const express = require('express');
const router = express.Router();
const Blog = require('../models/blog')
const passport = require('passport')
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');




module.exports = (router) =>{

  router.post('/newBlog',(req, res)=>{

    if(!req.body.title){
      res.json({ success: false, message: 'Blog title is required'});
    } else {
      if(!req.body.body){
        res.json({ success: false, message: 'Blog body is required'});
      } else{
        if(!req.body.createdBy){
          res.json({ success: false, message: 'Blog creator is required'});
      } else {
        const blog = new Blog({
          title: req.body.title,
          body: req.body.body,
          createdBy: req.body.createdBy
        });
          blog.save((err)=>{
            if (err){
              if(err.errors){
                if (err.errors.title){
                  res.json({ success:false, message: err.errors.title.message});
                } else {
                  if (err.errors.body){
                    res.json({ success:false, message: err.errors.body.message});
                } else {
                  res.json({success:false, message: errmsg });
                }
              }
            }else {
              res.json({success:false,message: err});
            }
      } else {
        res.json({success: true,message: 'Conference saved!'});
          }
          });
        }
      }
    }
  });




  router.get('/allBlogs',(req, res) => {
    Blog.find({}, (err, blogs)=>{
      if(err){
        res.json({ success: false, message: err});
      } else {
        if (!blogs){
          res.json({success: false, message: 'No Posts found.'});
        } else {
          res.json({ success: true, blogs: blogs });
        }
      }
    }).sort({'_id': -1 });

  });

  router.get('/singleBlog/:id', (req,res) =>{

    if(!req.params.id){
      res.json({ success: false, message: 'No blog ID was provided' });
    } else {
      Blog.findOne({ _id: req.params.id}, (err, blog)=>{
        if(err){
          res.json({ success: false, message: 'Not a valid id' });
        } else {
          if(!blog){
            res.json({ success: false, message: 'Post not found.'});
          } else {

            User.findOne({ _id: req.decoded.userId}, (err, user) =>{
              if(err){
                res.json({ success: false, message: err});
              } else {
                if(!user){
                  res.json({ success: false, message: 'Unable to authenticate user'});
                } else {
                  if (user.username !== blog.createdBy){
                    res.json({ success: false, message: 'You are not authorized to edit this post'});
                  } else {
                    res.json({ success: true, blog: blog });
                  }
                }
              }
            });
          }
        }
      });
    }
  });

  router.put('/updateBlog', (req, res) =>{
    if(!req.body._id){
      res.json({success: false, message:'No id Provided'});
    } else {
      Blog.findOne({ _id:req.body._id}, (err, blog)=>{
        if (err){
            res.json({success: false, message:'Not a valid id'});
        } else{
          if (!blog){
              res.json({success: false, message:'Id was not found'});
          } else{
            User.findOne({ _id: req.decoded.userId }, (err, user) =>{
              if (err){
                  res.json({success: false, message: err });
              } else {
                if (!user){
                    res.json({success: false, message:'User not found.'});
                } else {
                  if (user.username !== blog.createdBy){
                    res.json({success: false, message:'You are not authorized to edit this post'});
                  }else{
                    blog.title =  req.body.title;
                    blog.body = req.body.body;
                    blog.save((err) =>{
                      if(err){
                        res.json({ success: false, message: err });
                      } else {
                        res.json({success: true, message: 'Post Updated!'});
                      }
                    });
                  }
                }
              }
            });
          }
        }
      });
    }
  });


    router.delete('/deleteBlog/:id',(req, res)=>{
      if(!req.params.id){
        res.json({success: false, message:'No id provided'});
      } else {
        Blog.findOne({ _id: req.params.id }, (err, blog)=>{
        if(err){
          res.json({success: false, message:'Invalid id'});
        } else {
          if(!blog){
            res.json({success: false, message:'Post was not found'});
          } else{
            User.findOne({ _id: req.decoded.userId}, (err, user)=>{
              if(err){
                res.json({success: false, message: err });
              } else {
                if(!user){
                  res.json({success: false, message: 'Unable to authenticate user' });
                } else {
                  if(user.username !== blog.createdBy){
                    res.json({ success: false, message: 'You are not authorized to delete this post'});
                  }else{
                    blog.remove((err)=>{
                      if (err){
                        res.json({success: false, message: err });
                      } else{
                        res.json({success: true, message: "Post deleted!" });
                      }
                    });
                  }
                }
              }
            });
          }
        }
      });
    }
  });


  router.put('/likeBlog', (req, res) =>{
    if(!req.body.id) {
      res.json({ success:false, message: 'No id was provided'});
    } else {
      Blog.findOne({ _id: req.body.id} , (err, blog) =>{
        if(err){
          res.json({ success: false, message:'Invalid Id'});
        } else {
          if (!blog){
            res.json({success: false, message:'That post was not found'});
          } else {
            User.findOne({ _id: req.decoded.userId}, (err, user)=>{
              if(err){
                res.json({success: false, message: 'Something went wrong'});
              } else {
                if(!user){
                  res.json({ success: false, message:'Could not authenticate user'});
                }else{
                  if(user.username === blog.createdBy){
                    res.json({ success: false, message:'You posted this'});
                  } else {
                    if(blog.likedBy.includes(user.username)){
                      res.json({ success: false, message: 'You have already clicked the button'});
                    } else {
                      if(blog.dislikedBy.includes(user.username)){
                        blog.dislikes--;
                        const arrayIndex = blog.dislikedBy.indexOf(user.username);
                        blog.dislikedBy.splice(arrayIndex,1);
                        blog.likes++;
                        blog.likedBy.push(user.username);
                        blog.save((err) =>{
                          if (err){
                            res.json({ success: false, message: 'Something went wrong'});
                          } else {
                            res.json({success: true, message: 'Im Interested!'});
                          }
                        });
                      } else{
                        blog.likes++;
                        blog.likedBy.push(user.username);
                        blog.save((err) =>{
                          if (err){
                            res.json({ success: false, message: 'Something went wrong'});
                          } else {
                            res.json({success: true, message: 'Im Interested!'});
                          }
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        }
      });
    }
  });

  router.put('/dislikeBlog', (req, res) =>{
    if(!req.body.id) {
      res.json({ success:false, message: 'No id was provided'});
    } else {
      Blog.findOne({ _id: req.body.id} , (err, blog) =>{
        if(err){
          res.json({ success: false, message:'Invalid Id'});
        } else {
          if (!blog){
            res.json({success: false, message:'That post was not found'});
          } else {
            User.findOne({ _id: req.decoded.userId}, (err, user)=>{
              if(err){
                res.json({success: false, message: 'Something went wrong'});
              } else {
                if(!user){
                  res.json({ success: false, message:'Could not authenticate user'});
                }else{
                  if(user.username === blog.createdBy){
                    res.json({ success: false, message:'You posted this'});
                  } else {
                    if(blog.dislikedBy.includes(user.username)){
                      res.json({ success: false, message: 'You have already clicked the button'});
                    } else {
                      if(blog.likedBy.includes(user.username)){
                        blog.likes--;
                        const arrayIndex = blog.likedBy.indexOf(user.username);
                        blog.likedBy.splice(arrayIndex,1);
                        blog.dislikes++;
                        blog.dislikedBy.push(user.username);
                        blog.save((err) =>{
                          if (err){
                            res.json({ success: false, message: 'Something went wrong'});
                          } else {
                            res.json({success: true, message: 'Im not interested!'});
                          }
                        });
                      } else{
                        blog.dislikes++;
                        blog.dislikedBy.push(user.username);
                        blog.save((err) =>{
                          if (err){
                            res.json({ success: false, message: 'Something went wrong'});
                          } else {
                            res.json({success: true, message: 'Im not Interested!'});
                          }
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        }
      });
    }
  });

    return router;
}
