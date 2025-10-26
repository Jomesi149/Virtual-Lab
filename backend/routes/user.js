import express from 'express';
import User from '../models/User.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching user profile', 
      error: error.message 
    });
  }
});

// Update user progress
router.put('/progress/:lawId', authMiddleware, async (req, res) => {
  try {
    const { lawId } = req.params;
    const { completed } = req.body;

    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Update progress
    user.progress.set(lawId, completed);
    
    // Update completed laws
    if (completed && !user.completedLaws.includes(lawId)) {
      user.completedLaws.push(lawId);
    } else if (!completed && user.completedLaws.includes(lawId)) {
      user.completedLaws = user.completedLaws.filter(id => id !== lawId);
    }

    await user.save();

    res.json({
      success: true,
      message: 'Progress updated successfully',
      data: {
        progress: Object.fromEntries(user.progress),
        completedLaws: user.completedLaws
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error updating progress', 
      error: error.message 
    });
  }
});

export default router;
