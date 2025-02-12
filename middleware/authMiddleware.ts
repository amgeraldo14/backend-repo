//@ts-ignore
const { admin } = require("../config/firebaseConfig");

const authMiddleWare = async (req: any, res: any, next: any) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Authorization header missing or invalid" });
    }

    const idToken = authHeader.split("Bearer ")[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const requestedUserId = req.params.userId;
    if (requestedUserId && requestedUserId !== decodedToken.uid) {
      return res
        .status(403)
        .json({ error: "Unauthorized access to this user data" });
    }
    req.user = decodedToken;

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ error: "Invalid authentication token" });
  }
};

module.exports = authMiddleWare;
