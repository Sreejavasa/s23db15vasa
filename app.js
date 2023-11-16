var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var electronicsRouter= require('./routes/electronics');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var electronics = require("./models/electronics");
var resourceRouter = require("./routes/resource");
var electronicssRouter = require("./routes/electronicss");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/electronics', electronicsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);
app.use('/electronicss', electronicssRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed onserver start
async function recreateDB(){
  // Delete everything
 await electronics.deleteMany();
  let instance1 = new
  electronics({productname: "Electronics 1", manufacturer : "dell", price: 199.99 });
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
  
  let instance2 = new
  electronics({productname: "Electronics 2", manufacturer: "Hp" , price: 249.99});
  instance2.save().then(doc=>{
  console.log("secound object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
  let instance3 = new
  electronics({productname: "Electronics 3", manufacturer: "Apple", price: 299.99});
  instance3.save().then(doc=>{
  console.log("Thired object saved")}
  ).catch(err=>{
  console.error(err)
  });
 }
 let reseed = true;
 if (reseed) {recreateDB();}

 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

module.exports = app;
