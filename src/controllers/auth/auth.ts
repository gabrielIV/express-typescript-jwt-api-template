import { Request, Response } from "express";
import jwt = require("jsonwebtoken");

const secretKey = "secret";

// create token
export let createToken = (user, callback) => {
 jwt.sign({ user }, secretKey, (err, token) => {
  callback(err, token);
 });
};

// Token verification
export let verifyToken = (req, res, next) => {
 // Get auth value
 let token = req.headers["authorization"];
 // Check if defined
 if (typeof token !== "undefined") {
  // verifyToken
  jwt.verify(token, secretKey, (err, authData) => {
   if (err) {
    res.sendStatus(403);
   } else {
    // set token
    req.authData = authData;
    // Next middleware
    next();
   }
  });
 } else {
  res.sendStatus(403);
 }
};

export let permit = classes => {
 return function(req, res, next) {
  let { authData } = req;
  //   console.log();
  if (classes.includes(authData.user.class)) {
   next();
  } else {
   res.sendStatus(403);
  }
 };
};
