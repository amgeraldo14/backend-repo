import User = require("../entities/user");
const { db } = require("../config/firebaseConfig");

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
  const query = userDb.where("userId", "==", userId);
  const snapshot = await query.get();
  if (snapshot.empty) {
    return null;
  }
  const userData = snapshot.docs[0].data();
  return {
    id: snapshot.docs[0].id,
    ...userData,
  };
}

async function updateUser(userId: string, payload: Partial<User>) {
  const userQuery = userDb.where("userId", "==", userId);
  const userSnapshot = await userQuery.get();
  if (userSnapshot.empty) {
    return {};
  }
  const userDocRef = userSnapshot.docs[0].ref;
  const userData = userSnapshot.docs[0].data();
  if (Object.keys(payload).length === 0) {
    return { id: userSnapshot.docs[0].id, ...userData };
  }
  await userDocRef.update(payload);
  const updatedUserSnapshot = await userDocRef.get();
  if (!updatedUserSnapshot.exists) {
    return null;
  }
  return { id: updatedUserSnapshot.id, ...updatedUserSnapshot.data() } as User;
}

module.exports = { getAllUser, updateUser, getUserById };
