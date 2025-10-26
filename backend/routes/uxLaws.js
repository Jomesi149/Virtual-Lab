import express from 'express';
import UXLaw from '../models/UXLaw.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all UX laws (public)
router.get('/', async (req, res) => {
  try {
    const laws = await UXLaw.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: laws
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching UX laws', 
      error: error.message 
    });
  }
});

// Get single UX law by ID (public)
router.get('/:id', async (req, res) => {
  try {
    const law = await UXLaw.findOne({ id: req.params.id });
    
    if (!law) {
      return res.status(404).json({ 
        success: false, 
        message: 'UX law not found' 
      });
    }

    res.json({
      success: true,
      data: law
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching UX law', 
      error: error.message 
    });
  }
});

// Initialize UX laws (protected - for admin)
router.post('/initialize', authMiddleware, async (req, res) => {
  try {
    const existingLaws = await UXLaw.countDocuments();
    
    if (existingLaws > 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'UX laws already initialized' 
      });
    }

    const uxLaws = [
      {
        id: 'fitts-law',
        title: "Fitts's Law",
        description: "The time to acquire a target is a function of the distance to and size of the target.",
        category: 'interaction',
        fullContent: "Fitts's Law states that the amount of time required for a person to move a pointer to a target area is a function of the distance to the target divided by the size of the target. Thus, the longer the distance and the smaller the target's size, the longer it takes.",
        principles: [
          "Touch targets should be large enough for users to accurately select them.",
          "Touch targets should have ample spacing between them.",
          "Touch targets should be placed in areas of an interface that allow them to be easily acquired."
        ],
        examples: [
          {
            title: "Button Size",
            description: "Make buttons and interactive elements large enough to be easily clicked or tapped."
          },
          {
            title: "Navigation Menus",
            description: "Place frequently used menu items in easily accessible locations."
          }
        ]
      },
      {
        id: 'hicks-law',
        title: "Hick's Law",
        description: "The time it takes to make a decision increases with the number and complexity of choices.",
        category: 'cognitive',
        fullContent: "Hick's Law describes the time it takes for a person to make a decision as a result of the possible choices they have. Increasing the number of choices will increase the decision time logarithmically.",
        principles: [
          "Minimize choices when response times are critical to increase decision time.",
          "Break complex tasks into smaller steps to decrease cognitive load.",
          "Avoid overwhelming users by highlighting recommended options.",
          "Use progressive onboarding to minimize cognitive load for new users."
        ],
        examples: [
          {
            title: "Simplified Navigation",
            description: "Reduce menu options to the most essential items."
          },
          {
            title: "Stepped Forms",
            description: "Break long forms into multiple steps to reduce decision paralysis."
          }
        ]
      },
      {
        id: 'millers-law',
        title: "Miller's Law",
        description: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
        category: 'cognitive',
        fullContent: "Miller's Law states that the number of objects an average human can hold in working memory is about 7. This has become known as the 'magical number seven, plus or minus two.'",
        principles: [
          "Don't use the 'magical number seven' to justify unnecessary design limitations.",
          "Organize content into smaller chunks to help users process, understand, and memorize easily.",
          "Remember that short-term memory capacity will vary per individual, based on their prior knowledge and situational context."
        ],
        examples: [
          {
            title: "Chunked Phone Numbers",
            description: "Phone numbers are broken into chunks: +1 (555) 123-4567"
          },
          {
            title: "Menu Organization",
            description: "Group related menu items into categories with 5-7 items per group."
          }
        ]
      },
      {
        id: 'jakobs-law',
        title: "Jakob's Law",
        description: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
        category: 'behavior',
        fullContent: "Jakob's Law states that users spend most of their time on other sites, and they prefer your site to work the same way as all the other sites they already know. By leveraging existing mental models, we can create superior user experiences in which the user can focus on their task rather than learning new models.",
        principles: [
          "Users will transfer expectations they have built around one familiar product to another that appears similar.",
          "By leveraging existing mental models, we can create superior user experiences.",
          "Minimize discord by empowering users to continue using a familiar version for a limited time."
        ],
        examples: [
          {
            title: "Shopping Cart Icon",
            description: "E-commerce sites use a shopping cart icon in the top right corner."
          },
          {
            title: "Search Placement",
            description: "Search bars are typically placed at the top of websites."
          }
        ]
      },
      {
        id: 'law-of-proximity',
        title: "Law of Proximity",
        description: "Objects that are near, or proximate to each other, tend to be grouped together.",
        category: 'perception',
        fullContent: "The Law of Proximity states that objects that are closer together are perceived as more related than objects that are further apart. Proximity helps to establish a relationship with nearby objects.",
        principles: [
          "Elements that are close together are perceived as related.",
          "Use white space to create relationships and separate groups of content.",
          "Proximity helps users understand the hierarchy of information."
        ],
        examples: [
          {
            title: "Form Labels",
            description: "Keep labels close to their corresponding input fields."
          },
          {
            title: "Card Design",
            description: "Group related information within cards or containers."
          }
        ]
      },
      {
        id: 'law-of-similarity',
        title: "Law of Similarity",
        description: "The human eye tends to perceive similar elements in a design as a complete picture, shape, or group.",
        category: 'perception',
        fullContent: "The Law of Similarity states that elements that share similar visual characteristics are perceived to be more related than elements that don't share those characteristics.",
        principles: [
          "Elements that are visually similar will be perceived as related.",
          "Color, shape, and size can be used to signify that elements belong to the same group.",
          "Ensure that links and navigation systems are visually differentiated from normal text elements."
        ],
        examples: [
          {
            title: "Button Styling",
            description: "All primary action buttons share the same color and style."
          },
          {
            title: "Icon Consistency",
            description: "Icons of the same type use consistent visual styling."
          }
        ]
      },
      {
        id: 'law-of-common-region',
        title: "Law of Common Region",
        description: "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.",
        category: 'perception',
        fullContent: "The Law of Common Region states that elements are perceived as part of a group if they are located within the same closed region. Adding a border around an element or group of elements is an easy way to create a common region.",
        principles: [
          "Common region creates a clear structure and helps users understand relationships between elements.",
          "Use borders, background colors, or shadows to create common regions.",
          "Avoid creating too many common regions, which can lead to a cluttered interface."
        ],
        examples: [
          {
            title: "Cards and Panels",
            description: "Content grouped within bordered containers or cards."
          },
          {
            title: "Form Sections",
            description: "Related form fields grouped within visible boundaries."
          }
        ]
      },
      {
        id: 'aesthetic-usability-effect',
        title: "Aesthetic-Usability Effect",
        description: "Users often perceive aesthetically pleasing design as design that's more usable.",
        category: 'perception',
        fullContent: "The Aesthetic-Usability Effect describes a phenomenon where users perceive more aesthetic designs as easier to use than less aesthetic designs. An aesthetically pleasing design creates a positive response in people's brains and leads them to believe the design actually works better.",
        principles: [
          "An aesthetically pleasing design creates a positive response and can make users more tolerant of minor usability issues.",
          "Aesthetic design can mask usability problems and prevent issues from being discovered during usability testing.",
          "Always strive for both beautiful and usable design."
        ],
        examples: [
          {
            title: "Premium Products",
            description: "High-end products often have polished, beautiful interfaces."
          },
          {
            title: "First Impressions",
            description: "Landing pages with strong visual appeal create positive initial reactions."
          }
        ]
      }
    ];

    await UXLaw.insertMany(uxLaws);

    res.status(201).json({
      success: true,
      message: 'UX laws initialized successfully',
      count: uxLaws.length
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error initializing UX laws', 
      error: error.message 
    });
  }
});

export default router;
