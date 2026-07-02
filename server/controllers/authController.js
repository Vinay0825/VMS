const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. find user by email
    const user = await User.findOne({ email });

    // 2. if no user, return 400
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 3. compare password with bcrypt
    const isMatch = await bcrypt.compare(password, user.password);

    // 4. if wrong password, return 400
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 5. sign JWT and return it
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.status(200).json({ token });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { login };