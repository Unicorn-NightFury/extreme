var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const { ejwt, checkToken } = require('./jwt')
mongoose.connect('mongodb://localhost/extrem')



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

// app.use(function(req, res, next) {
  
//   var token = req.headers['onetoken'];

// 	if(token == undefined){
// 		return next();
// 	}else{

// 		checkToken(token).then((data)=> {
//       console.log(data);
// 			req.data = data;
// 			return next();
// 		}).catch((error)=>{
// 			return next();
// 		})
// 	}
// })

app.use(ejwt);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname, 'client')));

app.use('/api', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
