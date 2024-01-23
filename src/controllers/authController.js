// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const emailService = require('../services/emailService');

async function register(req, res) {
  try {
    const { email, username, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });

    await newUser.save();

    // email
    emailService.sendWelcomeEmail(email);

    res.status(201).json({ message: 'User registered successfully. Welcome email sent.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { register, login };
