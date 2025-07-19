const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepo = require("../repositories/userRepository");


const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.log(" ⚠️ Registration failed: Missing username or password");
    return res.status(400).json({ error: "Username and password are required" });
  }

  const existing = userRepo.findUserByUsername(username);
  if (existing) {
    console.log(" ⚠️ Registration failed: User already exists");
    return res.status(400).json({ error: "User already exists" });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = userRepo.createUser({ username, password: hash, currentRoom: 1 });
  res.status(201).json({ message: "Utilisateur créé" })
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt for:", username);

  const user = userRepo.findUserByUsername(username);
  if (!user) {
    return res.status(401).json({ error: "Identifiants invalides" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) { 
    return res.status(401).json({ error: "Invalid credentials" });
}

  console.log(" ✅ User authenticated:", username);
  const token = jwt.sign({ username: user.username}, process.env.JWT_SECRET, { expiresIn: "1h"});
  res.json({ token });
};

exports.me = (req, res) => {
  res.json({ user: req.user });
};

