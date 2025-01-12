const express = require('express');
const captianController = require('../controllers/captian.controller');

const router = express.Router();
const { body } = require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({min:3}).withMessage('Name should have at least 3 character '),
    body('password').isLength({min:6}).withMessage('password must have at least 6 character '),
    body('vehicle.color').isLength({min:3}).withMessage('must have at least 3 character'),
    body('vehicle.plate').isLength({min:3}).withMessage('must have at least 3 character '),
    body('vehicle.capacity').isInt({min:1}).withMessage('must have at least 1'),
    body('vehicle.vehicleType').isIn(['car','auto','motorcycle']).withMessage('should be on these three')
], captianController.registerCaptian); 

module.exports = router;