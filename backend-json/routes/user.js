import express from 'express';
import { usersDB } from '../services/database.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await usersDB.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    res.json({
      success: true,
      data: userWithoutPassword
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

    const user = await usersDB.updateProgress(req.userId, lawId, completed);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.json({
      success: true,
      message: 'Progress updated successfully',
      data: {
        progress: user.progress,
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
