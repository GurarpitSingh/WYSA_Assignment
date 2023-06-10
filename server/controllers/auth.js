const User = require("../models/user");
const bcrypt = require("bcrypt");

// Login function
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    const isMatch = bcrypt.compare(password, user.password);
    isMatch
      ? res
          .status(200)
          .json({ message: "User logged in successfully", token: 123654789 })
      : res.status(500).json({ message: "Invalid credentials" });
  } catch (err) {
    return res.status(500).json({ message: "Invalid credentials" });
  }
};

// Register function
exports.register = async (req, res) => {
  const { name, email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = new User({
      name: name,
      email: email,
      username: username,
      password: hashedPassword,
    });

    await user.save();
    return res
      .status(200)
      .json({ message: "User created successfully", registered: true });
  } catch (err) {
    // }
    return res.status(500).json({ message: err.message });
  }
};
