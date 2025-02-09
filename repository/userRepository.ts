import User = require("../entities/user");
const db = require("../config/firebaseConfig");
const userDb = db.collection("users");

async function getAllUser() {
  const userSnapshot = await userDb.get();
  const users: User[] = [];

  userSnapshot.forEach((user) => {
    users.push({ id: user.id, ...user.data() });
  });

  return users;
}

async function getUserById(userId) {
  const userRef = await userDb.doc(userId).get();
  return userRef.data();
}

async function updateUser(userId: string, userData: Partial<User>) {
  const userRef = userDb.doc(userId);
  if (Object.keys(userData).length === 0) {
    const userDoc = await userRef.get();
    return { id: userDoc.id, ...userDoc.data() };
  }
  await userRef.update(userData);
  const updatedUserDoc = await userRef.get();
  if (!updatedUserDoc.exists) {
    return null;
  }
  return { id: updatedUserDoc.id, ...updatedUserDoc.data() } as User;
}

module.exports = { getAllUser, updateUser, getUserById };
