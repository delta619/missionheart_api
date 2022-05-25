const express = require('express');

const app = express();


const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const path = require('path');
// GLOBAL
app.use(morgan('dev'));
// protect
app.use(helmet());

const limiter = rateLimit({
  max: 50,
  windowMs: 60 * 60 * 1000, // MAX 100 requests in 1 hr
  message: 'Too many requests from your ip, Please try again in an hour',
});

if (process.env.NODE_ENV === 'production') {
  app.use('/api', limiter);
}

// BODY PARSER
app.use(express.json({ limit: '10kb' }));

// prevent NOSQL injection
app.use(mongoSanitize());

// prevent xss

app.use(xss());


app.use(cors());

app.use(express.urlencoded({ extended: true }));


const ReachRoute = require('./routes/reachRouter')
const PatientRoute = require('./routes/PatientRouter')
const DonationRouter = require('./routes/DonationRouter')

app.use('/api/reach', ReachRoute)
app.use('/api/patient', PatientRoute)
app.use('/api/donate', DonationRouter)


app.use('*', (req, res)=>{
  res.json({
    status: 404,
    message: "Unknown endpoint"
  })
})



app.all('*', (req, res, next) => {
  return res.status(204).end();
});

// app.use(globalErrorController);

exports.Server = app;
