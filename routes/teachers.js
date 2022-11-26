const router = require("express").Router();
const Teachers = require("../models/Teachers");
const cloudinary = require("../utils/cloudinary");

// const bcrypt = require("bcrypt");
// const
// const jwt = require("jsonwebtoken");
const express = require("express");
const {
  signup,
  login,
  verifyToken,
  getUser,
  sendOTPverificationEmail,
  verifyOTP,
  refreshToken,
  logout,
} = require("../controllers/Teachers_Controller");


router.post("/signupOTP",sendOTPverificationEmail);
router.post("/signupVerify",verifyOTP);
// router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
// router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logout);