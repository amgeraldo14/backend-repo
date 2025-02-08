import User = require("../entities/user");
const db = require("../config/firebaseConfig");

const getUsers = async (req, res) => {
  const usersRef = db.collection("users");
  const userSnapshot = await usersRef.get();
  const users: User[] = [];
  userSnapshot.forEach((user) => {
    users.push({ id: user.id, ...user.data() });
  });
  res.json(users);
};

module.exports = { getUsers };
