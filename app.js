const express = require ('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',()=>{
  console.log('Connected to database'+config.database);
});


//on error
mongoose.connection.on('error',(err)=>{
  console.log('Database error'+err);
});


const app = express();
const router = express.Router();

const authentication = require('./routes/authentication')(router);
const blogs =  require('./routes/blogs')(router);

//port number
const port = process.env.PORT || 8080;

//CORS middleware
app.use(cors({
  origin:'http://localhost:4200'
}));


app.use(bodyParser.urlencoded({extended:false}))
//Body parser middleware
app.use(bodyParser.json());

//SET static folder
app.use(express.static(path.join(__dirname,'public')));
app.use('/authentication', authentication);
app.use('/blogs', blogs);



//index route
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname,'public'));
});


//start server
app.listen(port,  () =>{
  console.log('server started on port '+ port);
});
