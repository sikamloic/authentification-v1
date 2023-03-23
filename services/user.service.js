const {User} = require('../models')

const createUser = async (userBody) =>{
  if (await User.isEmailTaken(userBody.email)) {
    return res.send('email existant')
   }
  return User.create(userBody)
}

const getAllUser = async () =>{
  return User.find()
}

const getUserById = async (id) =>{
  return User.findById(id)
}

const getUserByEmail = async (email) =>{
  return User.findOne({email})
}

const updateUser = async (id) =>{
  const user = await getUserById(id)
}

const deleteUser = async (id) =>{
  const user = await getUserById(id)
  if(!user) return res.status(404).send('Utilisateur introuvable')
  await user.remove()
  return user
}

const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

module.exports = {
  createUser,
  getAllUser,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
  updateUserById
}