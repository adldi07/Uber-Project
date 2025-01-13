const express = require('express');
const captianController = require('../controllers/captian.controller');

const router = express.Router();
const { body } = require('express-validator');
const  authMiddleware  = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({min:3}).withMessage('Name should have at least 3 character '),
    body('password').isLength({min:6}).withMessage('password must have at least 6 character '),
    body('vehicle.color').isLength({min:3}).withMessage('must have at least 3 character'),
    body('vehicle.plate').isLength({min:3}).withMessage('must have at least 3 character '),
    body('vehicle.capacity').isInt({min:1}).withMessage('must have at least 1'),
    body('vehicle.vehicleType').isIn(['car','auto','motorcycle']).withMessage('should be on these three')
], captianController.registerCaptian); 

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('password must have at least 6 character '),

], captianController.loginCaptian );

router.get('/profile',
    authMiddleware.authCaptian,
    captianController.getCaptianProfile
);

router.get('/logout', 
    authMiddleware.authCaptian,
    captianController.logOutCaptian
);

module.exports = router;