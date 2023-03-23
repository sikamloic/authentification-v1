const express = require('express')
const {userValidation} = require('../validations')
const {userController} = require('../controllers')
const validate = require('../middlewares/validate')

const router = express.Router()

router.post('/register', validate(userValidation.createUser), userController.register)
router.get('/:id', validate(userValidation.getUser), userController.getUser)
router.delete('/:id', validate(userValidation.deleteUser), userController.deleteUser)
router.put('/:id', validate(userValidation.updateUser), userController.updateUser)

module.exports = router