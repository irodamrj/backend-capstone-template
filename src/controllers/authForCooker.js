const express = require('express');
const routes = express.Router();

const bcrypt = require('bcryptjs');

const { attachCookiesToResponse } = require('../utils/jwt');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const Cooker = require('../models/cooker');
const { createCookerToken } = require('../utils/createToken');
const Adress = require('../models/address');
const checkCookie = require('../middleware/checkCookie');
const { cookerAuth } = require('../middleware/authorization');

routes.post('/signup', checkCookie, async (req, res) => {
  const {
    email,
    password,
    username,
    phoneNumber,
    aboutCooker,
    openingHour,
    closingHour,
    address,
  } = req.body;

  const emailAlreadyExists = await Cooker.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }
  if (!password || password.length < 6) {
    throw new CustomError.BadRequestError(
      'password cannot be null or less than 5 characters'
    );
  }

  const hashed = await bcrypt.hash(password, 10);

  const addressObject = await Adress.create(address);

  const cooker = await Cooker.create({
    email: email,
    address: addressObject._id,
    password: hashed,
    username: username,
    phoneNumber: phoneNumber,
    aboutCooker: aboutCooker,
    openingHour: openingHour,
    closingHour: closingHour,
  });

  const payload = createCookerToken(cooker);
  attachCookiesToResponse(res, payload);
  return res.status(StatusCodes.OK).send(cooker);
});

routes.post('/login', checkCookie, async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password');
  }
  const cooker = await Cooker.findOne({ email });
  if (!cooker) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials try again');
  }

  const isMatch = await bcrypt.compare(password, cooker.password);
  if (!isMatch) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials second');
  }

  const payload = createCookerToken(cooker);
  attachCookiesToResponse(res, payload);
  res.status(StatusCodes.OK).send(cooker);
});

//logout route
routes.get('/logout', cookerAuth, (req, res) => {
  res.clearCookie('token', {
    signed: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 14 * 1000,
  });
  res.send('logged out');
});

module.exports = routes;
