const express = require('express')
const {userValidation} = require('../validations')
const {userController} = require('../controllers')
const validate = require('../middlewares/validate')
const auth = require('../middlewares/auth')

const router = express.Router()

router
  .route('/')
  .post(validate(userValidation.createUser), userController.register)
  // .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

// router.post('/register', validate(userValidation.createUser), userController.register)
// router.get('/:id', validate(userValidation.getUser), userController.getUser)
// router.delete('/:id', validate(userValidation.deleteUser), userController.deleteUser)
// router.put('/:id', validate(userValidation.updateUser), userController.updateUser)

module.exports = router