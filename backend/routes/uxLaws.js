import express from 'express';
import UXLaw from '../models/UXLaw.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all UX laws (public)
router.get('/', async (req, res) => {
  try {
    const laws = await UXLaw.find();
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

// Initialize UX laws (protected - run once)
router.post('/initialize', authMiddleware, async (req, res) => {
  try {
    // Check if laws already exist
    const existingCount = await UXLaw.countDocuments();
    if (existingCount > 0) {
      return res.status(400).json({
        success: false,
        message: 'UX laws already initialized'
      });
    }

    const uxLaws = [
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
            description: "High-end products often have polished, beautiful interfaces that users perceive as more functional."
          },
          {
            title: "First Impressions",
            description: "Landing pages with strong visual appeal create positive initial reactions and increased trust."
          }
        ]
      },
      {
        id: 'doherty-threshold',
        title: "Doherty Threshold",
        description: "Productivity soars when a computer and its users interact at a pace that ensures that neither has to wait on the other.",
        category: 'interaction',
        fullContent: "The Doherty Threshold suggests that when computer responses are faster than 400ms, user productivity increases because the interaction feels instantaneous. This creates a sense of flow and keeps users engaged without breaking their concentration.",
        principles: [
          "Provide system feedback within 400ms to keep users engaged.",
          "Use perceived performance improvements like optimistic UI updates and skeleton screens.",
          "Progress indicators should be used for actions taking longer than 400ms.",
          "Animation can make wait times feel shorter when used thoughtfully."
        ],
        examples: [
          {
            title: "Instant Search",
            description: "Search results that appear as you type without noticeable delay."
          },
          {
            title: "Optimistic UI",
            description: "Like buttons that respond immediately while the action processes in the background."
          }
        ]
      },
      {
        id: 'fitts-law',
        title: "Fitts's Law",
        description: "The time to acquire a target is a function of the distance to and size of the target.",
        category: 'interaction',
        fullContent: "Fitts's Law states that the amount of time required for a person to move a pointer to a target area is a function of the distance to the target divided by the size of the target. Thus, the longer the distance and the smaller the target's size, the longer it takes.",
        principles: [
          "Touch targets should be large enough for users to accurately select them.",
          "Touch targets should have ample spacing between them.",
          "Touch targets should be placed in areas of an interface that allow them to be easily acquired.",
          "The edges and corners of the screen are prime locations for important actions."
        ],
        examples: [
          {
            title: "Button Size",
            description: "Make buttons and interactive elements large enough to be easily clicked or tapped (minimum 44x44px for mobile)."
          },
          {
            title: "Navigation Menus",
            description: "Place frequently used menu items in easily accessible locations like screen edges."
          }
        ]
      },
      {
        id: 'goal-gradient-effect',
        title: "Goal-Gradient Effect",
        description: "The tendency to approach a goal increases with proximity to the goal.",
        category: 'behavior',
        fullContent: "The Goal-Gradient Effect suggests that people are more motivated to complete a task as they get closer to finishing it. This effect can be leveraged in UX design through progress indicators, gamification, and artificial advancement.",
        principles: [
          "Show users their progress to increase motivation to complete tasks.",
          "Provide artificial advancement by giving users a head start.",
          "Break down long processes into smaller milestones.",
          "Use progress bars and completion percentages to visualize advancement."
        ],
        examples: [
          {
            title: "LinkedIn Profile Strength",
            description: "Shows percentage complete and suggests next steps to improve profile."
          },
          {
            title: "Loyalty Programs",
            description: "Coffee shop cards that start with 2 stamps already filled encourage completion."
          }
        ]
      },
      {
        id: 'hicks-law',
        title: "Hick's Law",
        description: "The time it takes to make a decision increases with the number and complexity of choices.",
        category: 'cognitive',
        fullContent: "Hick's Law (or the Hick-Hyman Law) describes the time it takes for a person to make a decision as a result of the possible choices they have. Increasing the number of choices will increase the decision time logarithmically. The law is named after British and American psychologists William Edmund Hick and Ray Hyman.",
        principles: [
          "Minimize choices when response times are critical to increase decision time.",
          "Break complex tasks into smaller steps to decrease cognitive load.",
          "Avoid overwhelming users by highlighting recommended options.",
          "Use progressive onboarding to minimize cognitive load for new users.",
          "Be careful not to simplify to the point of abstraction."
        ],
        examples: [
          {
            title: "Simplified Navigation",
            description: "Reduce menu options to the most essential items to speed up decision making."
          },
          {
            title: "Stepped Forms",
            description: "Break long forms into multiple steps to reduce decision paralysis and improve completion rates."
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
          "Minimize discord by empowering users to continue using a familiar version for a limited time.",
          "When making changes, allow users to opt-in to new features gradually."
        ],
        examples: [
          {
            title: "Shopping Cart Icon",
            description: "E-commerce sites use a shopping cart icon in the top right corner because that's where users expect it."
          },
          {
            title: "Search Placement",
            description: "Search bars are typically placed at the top of websites, often with a magnifying glass icon."
          }
        ]
      },
      {
        id: 'law-of-common-region',
        title: "Law of Common Region",
        description: "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.",
        category: 'perception',
        fullContent: "The Law of Common Region states that elements are perceived as part of a group if they are located within the same closed region. Adding a border around an element or group of elements is an easy way to create a common region and indicate that the elements are related.",
        principles: [
          "Common region creates a clear structure and helps users understand relationships between elements.",
          "Use borders, background colors, or shadows to create common regions.",
          "Avoid creating too many common regions, which can lead to a cluttered interface.",
          "Common regions can be combined with other Gestalt principles for stronger grouping."
        ],
        examples: [
          {
            title: "Cards and Panels",
            description: "Content grouped within bordered containers or cards to show related information."
          },
          {
            title: "Form Sections",
            description: "Related form fields grouped within visible boundaries to indicate they belong together."
          }
        ]
      },
      {
        id: 'law-of-proximity',
        title: "Law of Proximity",
        description: "Objects that are near, or proximate to each other, tend to be grouped together.",
        category: 'perception',
        fullContent: "The Law of Proximity states that objects that are closer together are perceived as more related than objects that are further apart. Proximity helps to establish a relationship with nearby objects and is one of the most powerful ways to indicate grouping in visual design.",
        principles: [
          "Elements that are close together are perceived as related.",
          "Use white space to create relationships and separate groups of content.",
          "Proximity helps users understand the hierarchy of information.",
          "Be mindful of the spacing between different groups of elements."
        ],
        examples: [
          {
            title: "Form Labels",
            description: "Keep labels close to their corresponding input fields so users understand they're related."
          },
          {
            title: "Navigation Groups",
            description: "Group related navigation items closer together than unrelated items."
          }
        ]
      },
      {
        id: 'law-of-pragnanz',
        title: "Law of Prägnanz",
        description: "People will perceive and interpret ambiguous or complex images as the simplest form possible.",
        category: 'perception',
        fullContent: "The Law of Prägnanz (also known as the law of simplicity or the law of good figure) states that people will perceive and interpret ambiguous or complex images in the simplest form possible. The human eye likes to find simplicity and order in complex shapes because it prevents us from becoming overwhelmed with information.",
        principles: [
          "The human eye simplifies complex shapes by transforming them into a single, unified shape.",
          "People are better able to visually process and remember simple figures than complex figures.",
          "Remove unnecessary elements to improve user comprehension.",
          "Use simple, clear visual hierarchies to guide users through content."
        ],
        examples: [
          {
            title: "Logo Design",
            description: "The Olympic rings are perceived as overlapping circles rather than complex curved shapes."
          },
          {
            title: "Icons",
            description: "Simple iconography is easier to recognize and remember than complex illustrations."
          }
        ]
      },
      {
        id: 'law-of-similarity',
        title: "Law of Similarity",
        description: "The human eye tends to perceive similar elements in a design as a complete picture, shape, or group.",
        category: 'perception',
        fullContent: "The Law of Similarity states that elements that share similar visual characteristics are perceived to be more related than elements that don't share those characteristics. Similarity can be achieved through color, shape, size, texture, or any other visual property.",
        principles: [
          "Elements that are visually similar will be perceived as related.",
          "Color, shape, and size can be used to signify that elements belong to the same group.",
          "Ensure that links and navigation systems are visually differentiated from normal text elements.",
          "Use visual similarity to create consistent design patterns across your interface."
        ],
        examples: [
          {
            title: "Button Styling",
            description: "All primary action buttons share the same color and style so users recognize them as similar actions."
          },
          {
            title: "Icon Consistency",
            description: "Icons of the same type use consistent visual styling to indicate they serve similar functions."
          }
        ]
      },
      {
        id: 'law-of-uniform-connectedness',
        title: "Law of Uniform Connectedness",
        description: "Elements that are visually connected are perceived as more related than elements with no connection.",
        category: 'perception',
        fullContent: "The Law of Uniform Connectedness states that elements that are visually connected are perceived as more related than elements with no connection. This can be achieved through lines, boxes, colors, or other visual elements that create a connection between items.",
        principles: [
          "Use lines, boxes, or colors to visually connect related elements.",
          "Connected elements are perceived as a single unit.",
          "This principle is stronger than proximity or similarity alone.",
          "Use connecting elements to guide users through complex interfaces."
        ],
        examples: [
          {
            title: "Table Rows",
            description: "Alternating row colors or lines connect cells in the same row."
          },
          {
            title: "Form Groups",
            description: "Lines or backgrounds connect related form fields together."
          }
        ]
      },
      {
        id: 'millers-law',
        title: "Miller's Law",
        description: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
        category: 'cognitive',
        fullContent: "Miller's Law states that the number of objects an average human can hold in working memory is about 7. This has become known as the 'magical number seven, plus or minus two.' The law was first proposed by cognitive psychologist George A. Miller.",
        principles: [
          "Don't use the 'magical number seven' to justify unnecessary design limitations.",
          "Organize content into smaller chunks to help users process, understand, and memorize easily.",
          "Remember that short-term memory capacity will vary per individual, based on their prior knowledge and situational context.",
          "Chunking information makes it easier to remember and reduces cognitive load."
        ],
        examples: [
          {
            title: "Chunked Phone Numbers",
            description: "Phone numbers are broken into chunks: +1 (555) 123-4567 instead of +15551234567"
          },
          {
            title: "Menu Organization",
            description: "Group related menu items into categories with 5-7 items per group."
          }
        ]
      },
      {
        id: 'occams-razor',
        title: "Occam's Razor",
        description: "Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected.",
        category: 'cognitive',
        fullContent: "Occam's Razor states that the simplest solution is usually the best one. In UX design, this means we should analyze each element and remove as many as possible without compromising the overall function. Simplicity should be a key goal in design.",
        principles: [
          "Simplify interfaces by removing unnecessary elements or content.",
          "The best design solution is usually the simplest one that solves the problem.",
          "Analyze each element and remove as many as possible without compromising function.",
          "Simple designs are easier to understand and use."
        ],
        examples: [
          {
            title: "Google Search",
            description: "The homepage is extremely simple - just a search box and logo, nothing more."
          },
          {
            title: "Minimalist UI",
            description: "Modern apps focus on core functionality with minimal chrome and decoration."
          }
        ]
      },
      {
        id: 'parkinsons-law',
        title: "Parkinson's Law",
        description: "Any task will inflate until all of the available time is spent.",
        category: 'behavior',
        fullContent: "Parkinson's Law states that work expands to fill the time available for its completion. In UX design, this means that users will take as much time as we give them to complete a task. By setting constraints, we can help users work more efficiently.",
        principles: [
          "Set realistic time constraints to increase focus and efficiency.",
          "Limit the time available to complete a task to improve performance.",
          "Use time limits to create urgency without causing anxiety.",
          "Break large tasks into smaller, time-boxed activities."
        ],
        examples: [
          {
            title: "Flash Sales",
            description: "Limited-time offers create urgency and encourage quick decision-making."
          },
          {
            title: "Session Timeouts",
            description: "Shopping cart timers encourage users to complete purchases."
          }
        ]
      },
      {
        id: 'peak-end-rule',
        title: "Peak-End Rule",
        description: "People judge an experience largely based on how they felt at its peak and at its end, rather than the total sum or average of every moment.",
        category: 'behavior',
        fullContent: "The Peak-End Rule suggests that people remember an experience based on how they felt at its peak (most intense point) and at its end, rather than the average of every moment. This has significant implications for UX design - we should focus on making the most memorable moments positive.",
        principles: [
          "Pay close attention to the most intense points and the final moments of the user journey.",
          "Identify the moments when your product is most helpful or delightful and design to make those moments even better.",
          "Remember that people recall negative experiences more vividly than positive ones.",
          "End experiences on a high note to leave lasting positive impressions."
        ],
        examples: [
          {
            title: "Onboarding Success",
            description: "Apps that celebrate user achievements at the end of onboarding create positive lasting impressions."
          },
          {
            title: "Checkout Confirmation",
            description: "E-commerce sites with delightful order confirmation pages leave users with positive feelings."
          }
        ]
      },
      {
        id: 'postel-law',
        title: "Postel's Law",
        description: "Be liberal in what you accept, and conservative in what you send.",
        category: 'interaction',
        fullContent: "Postel's Law (also known as the Robustness Principle) states that we should be liberal in what we accept from users, but conservative in what we send back. In UX design, this means accepting a wide variety of user inputs and behaviors, while providing clear, consistent outputs.",
        principles: [
          "Be empathetic to, flexible about, and tolerant of any of the various actions users could take.",
          "Accept variable input from users but return consistent, standard output.",
          "The more we can anticipate and plan for in design, the more resilient the design will be.",
          "Provide helpful error messages and suggestions when things go wrong."
        ],
        examples: [
          {
            title: "Form Validation",
            description: "Accept phone numbers in various formats (with/without dashes, spaces, country codes)."
          },
          {
            title: "Search Flexibility",
            description: "Search systems that handle typos, synonyms, and different phrasings."
          }
        ]
      },
      {
        id: 'serial-position-effect',
        title: "Serial Position Effect",
        description: "Users have a propensity to best remember the first and last items in a series.",
        category: 'cognitive',
        fullContent: "The Serial Position Effect suggests that people tend to recall the first and last items in a series best, and the middle items worst. This is a combination of the primacy effect (better recall of items at the beginning) and recency effect (better recall of items at the end).",
        principles: [
          "Place the most important items at the beginning and end of lists or menus.",
          "Positioning key actions at the far left and right of navigation can increase memorability.",
          "Users are more likely to remember the first and last items in a journey.",
          "Use this principle when designing navigation, forms, and content hierarchies."
        ],
        examples: [
          {
            title: "Navigation Menus",
            description: "Place the most important navigation items at the far left and right of the menu bar."
          },
          {
            title: "Product Lists",
            description: "Feature your best products at the beginning and end of category lists."
          }
        ]
      },
      {
        id: 'teslers-law',
        title: "Tesler's Law",
        description: "For any system there is a certain amount of complexity which cannot be reduced.",
        category: 'cognitive',
        fullContent: "Tesler's Law (also known as The Law of Conservation of Complexity) states that for any system, there is a certain amount of complexity that cannot be reduced. This complexity can be shifted, but it cannot be eliminated. The question becomes: who should handle this complexity - users or designers?",
        principles: [
          "All processes have a core of complexity that cannot be designed away.",
          "The only question is: who will handle the complexity - the user or the designer?",
          "Ensure that as much complexity as possible is moved away from users.",
          "Simplify the user experience even if it means more complex systems behind the scenes."
        ],
        examples: [
          {
            title: "Smart Defaults",
            description: "Pre-filling forms with intelligent defaults reduces user decisions while adding backend complexity."
          },
          {
            title: "Autocomplete",
            description: "Search autocomplete handles complexity of prediction algorithms to simplify user input."
          }
        ]
      },
      {
        id: 'von-restorff-effect',
        title: "Von Restorff Effect",
        description: "When multiple similar objects are present, the one that differs from the rest is most likely to be remembered.",
        category: 'perception',
        fullContent: "The Von Restorff Effect (also known as the Isolation Effect) predicts that when multiple similar objects are present, the one that differs from the rest is most likely to be remembered. This effect was first studied by German psychiatrist Hedwig von Restorff in 1933.",
        principles: [
          "Make important information or key actions visually distinctive.",
          "Use color, size, or other visual properties to make critical elements stand out.",
          "Don't make too many elements distinctive or the effect will be diluted.",
          "Ensure that what stands out is actually important to the user's goals."
        ],
        examples: [
          {
            title: "Call-to-Action Buttons",
            description: "Primary CTA buttons use contrasting colors to stand out from other page elements."
          },
          {
            title: "Error Messages",
            description: "Error states use red or other distinctive styling to grab attention."
          }
        ]
      },
      {
        id: 'zeigarnik-effect',
        title: "Zeigarnik Effect",
        description: "People remember uncompleted or interrupted tasks better than completed tasks.",
        category: 'behavior',
        fullContent: "The Zeigarnik Effect suggests that people remember uncompleted or interrupted tasks better than completed ones. This creates a sense of tension that stays with us until the task is complete. This effect was first studied by Russian psychologist Bluma Zeigarnik in the 1920s.",
        principles: [
          "Use progress bars and indicators to show users how close they are to completing tasks.",
          "Providing artificial progress toward a goal can increase motivation to complete it.",
          "Incomplete tasks create mental tension that can be leveraged to encourage task completion.",
          "Save user progress automatically so they can easily resume interrupted tasks."
        ],
        examples: [
          {
            title: "LinkedIn Profile Completion",
            description: "Shows percentage complete and what's missing to motivate users to finish their profile."
          },
          {
            title: "Multi-Step Forms",
            description: "Progress indicators show users how many steps remain, encouraging completion."
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
      message: error.message || 'Error initializing UX laws'
    });
  }
});

export default router;
