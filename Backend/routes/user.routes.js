const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", [
    body('email').isEmail().withMessage('Invalid email'),
    body('firstName').isLength({min:3}).withMessage('First name must have at least 3 character'),
    body('password').isLength({min:6}).withMessage('Password must have at least 6 character'),
] , userController.registerUser
)

router.post("/login",[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must have at least 6 character'),
], userController.loginUser);

router.get('/profile', authMiddleware.authUser ,userController.getUserProfile);

module.exports = router ;