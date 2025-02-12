const userRepository = require("../repository/userRepository");

const getUsers = async (req: any, res: any) => {
  const users = await userRepository.getAllUser();
  res.json(users);
};

const getUserById = async (req: any, res: any) => {
  const user = await userRepository.getUserById(req.params.id);
  res.json(user);
};

const updateUser = async (req: any, res: any) => {
  const userId = req.params.id;
  const userData = req.body;
  const users = await userRepository.updateUser(userId, userData);
  res.json(users);
};

module.exports = { getUsers, updateUser, getUserById };
