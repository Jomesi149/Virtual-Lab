import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword
    });

    // Generate token
    const token = jwt.sign(
      { userId: user._id.toString() }, 
      process.env.JWT_SECRET, 
      { expiresIn: '7d' }
    );

    // Remove password from response
    const userObject = user.toJSON();
    delete userObject.password;

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: userObject
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error registering user', 
      error: error.message 
    });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id.toString() }, 
      process.env.JWT_SECRET, 
      { expiresIn: '7d' }
    );

    // Remove password from response
    const userObject = user.toJSON();
    delete userObject.password;

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: userObject
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error logging in', 
      error: error.message 
    });
  }
});

export default router;
