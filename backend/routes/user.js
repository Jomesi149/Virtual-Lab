import express from 'express';
import User from '../models/User.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Remove password from response
    const userObject = user.toJSON();
    delete userObject.password;
    
    // Convert Map to plain object for progress
    if (userObject.progress instanceof Map) {
      userObject.progress = Object.fromEntries(userObject.progress);
    }

    console.log('User profile:', userObject);
    console.log('Progress:', userObject.progress);

    res.json({
      success: true,
      data: userObject
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

    console.log('Updating progress for law:', lawId, 'completed:', completed);

    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Update progress
    user.progress.set(lawId, completed);

    // Update completed laws array
    if (completed && !user.completedLaws.includes(lawId)) {
      user.completedLaws.push(lawId);
    } else if (!completed && user.completedLaws.includes(lawId)) {
      user.completedLaws = user.completedLaws.filter(l => l !== lawId);
    }

    await user.save();

    console.log('Progress updated successfully');
    console.log('User progress:', Object.fromEntries(user.progress));
    console.log('Completed laws:', user.completedLaws);

    res.json({
      success: true,
      message: 'Progress updated successfully',
      data: {
        progress: Object.fromEntries(user.progress),
        completedLaws: user.completedLaws
      }
    });
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error updating progress', 
      error: error.message 
    });
  }
});

export default router;
