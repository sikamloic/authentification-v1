const {userService} = require('../services')
const catchAsync = require('../utils/catchAsync')

const register = catchAsync( async(req, res) =>{
  const user = await userService.createUser(req.body)
  res.send('Enregistrement reussie !!!')
})

const getUser = catchAsync(async(req, res) =>{
  const user = await userService.getUserById(req.params.id)
  if(!user) return res.status(404).send('Utilisateur introuvable !!!')
  res.status(200).send(user)
})

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.id, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async(req, res) =>{
  await userService.deleteUserById(req.params.id);
  res.send('Suppression reussie !!!');
})

module.exports = {
  register,
  getUser,
  updateUser,
  deleteUser
}