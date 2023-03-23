const express = require('express')
const {authValidation} = require('../validations')
const {authController} = require('../controllers')
const validate = require('../middlewares/validate')

const router = express.Router()

router.post('/login', validate(authValidation.login), authController.login)
router.post('/logout', validate(authValidation.logout), authController.logout)
router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword)
router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);

module.exports = router