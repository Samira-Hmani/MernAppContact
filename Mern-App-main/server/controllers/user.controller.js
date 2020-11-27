const bcrypt = require("bcryptjs");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const secretOrKey = config.get("secretOrKey");

exports.register = async (req, res) => {
  const { name, lastName, email, phoneNumber, password } = req.body;

  const searchUser = await User.findOne({ email });

  if (searchUser) return res.status(404).json({ msg: "user already exist" });

  try {
    const newUser = new User({
      name,
      lastName,
      email,
      phoneNumber,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    newUser.password = hash;

    await newUser.save(newUser);
    res.status(201).json({ msg: "User Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Email incorrect" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Password incorrect" });
    const payload = {
      id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };

    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};
