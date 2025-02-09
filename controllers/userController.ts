const userRepository = require("../repository/userRepository");

const getUsers = async (req, res) => {
  const users = await userRepository.getAllUser();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await userRepository.getUserById(req.params.id);
  res.json(user);
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const users = await userRepository.updateUser(userId, userData);
  res.json(users);
};

module.exports = { getUsers, updateUser, getUserById };
