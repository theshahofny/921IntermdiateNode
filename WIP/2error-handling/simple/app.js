var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var carRouter = require ('./routes/cars');

var app = express();


app.all('*', function(req, res, next){
  fs.readFile('db.json', function(err, data){
    res.locals.cars = JSON.parse(data);
    next();
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cars', carRouter){
  res.json(res.locals.cars);
};

app.get('/cars/:make_country', function(req, res, next){
  res.locals.cars.forEach(function(cars){
  res.locals.count = 0;
    if(req.params.make_country === cars.make_country){
      res.locals.count++}
    });
  res.send('cars', );
  });


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
