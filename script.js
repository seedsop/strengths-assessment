// Assessment questions and theme mapping
const assessmentData = {
    sections: [
        {
            title: "Section 1: Work Approach & Productivity",
            questions: [
                {
                    id: 1,
                    text: "I am most energized when:",
                    optionA: "I can complete multiple tasks and check them off my list",
                    optionB: "I can think deeply about complex problems and solutions",
                    themesA: ["Achiever"],
                    themesB: ["Strategic", "Analytical"]
                },
                {
                    id: 2,
                    text: "I prefer to:",
                    optionA: "Start projects immediately and make adjustments as I go",
                    optionB: "Thoroughly plan all aspects before beginning a project",
                    themesA: ["Activator"],
                    themesB: ["Focus", "Discipline"]
                },
                {
                    id: 3,
                    text: "I adapt easily to:",
                    optionA: "Changing priorities and can shift direction quickly",
                    optionB: "Stable routines and clear expectations that don't change frequently",
                    themesA: ["Adaptability"],
                    themesB: ["Consistency", "Discipline"]
                },
                {
                    id: 4,
                    text: "When making decisions, I focus on:",
                    optionA: "Analyzing data and evidence",
                    optionB: "Maintaining harmony and consensus",
                    themesA: ["Analytical"],
                    themesB: ["Harmony"]
                },
                {
                    id: 5,
                    text: "I enjoy:",
                    optionA: "Organizing complex projects with many moving parts",
                    optionB: "Focusing intensely on one task until it's completed perfectly",
                    themesA: ["Arranger"],
                    themesB: ["Focus"]
                },
                {
                    id: 6,
                    text: "I am driven by:",
                    optionA: "My core values and sense of purpose",
                    optionB: "Achieving specific goals and measurable results",
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 7,
                    text: "I:",
                    optionA: "Carefully consider all possible risks before making decisions",
                    optionB: "Am comfortable making quick decisions with limited information",
                    themesA: ["Deliberative"],
                    themesB: ["Activator"]
                },
                {
                    id: 8,
                    text: "I prefer to work:",
                    optionA: "Independently with minimal interruptions",
                    optionB: "Collaboratively with frequent interaction",
                    themesA: ["Focus", "Intellection"],
                    themesB: ["Relator", "Harmony"]
                },
                {
                    id: 9,
                    text: "I am energized by:",
                    optionA: "Learning new information and concepts",
                    optionB: "Achieving tangible results and outcomes",
                    themesA: ["Learner", "Input"],
                    themesB: ["Achiever"]
                },
                {
                    id: 10,
                    text: "I enjoy:",
                    optionA: "Meeting new people and building a broad network",
                    optionB: "Developing deep, meaningful relationships with fewer people",
                    themesA: ["Woo"],
                    themesB: ["Relator"]
                },
                {
                    id: 11,
                    text: "I am most effective when:",
                    optionA: "I can persuade others to my point of view",
                    optionB: "I can find common ground and avoid conflict",
                    themesA: ["Communication", "Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 12,
                    text: "I focus on:",
                    optionA: "Future possibilities and what could be",
                    optionB: "Present realities and what is",
                    themesA: ["Futuristic", "Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 13,
                    text: "I am motivated by:",
                    optionA: "Competition and being the best",
                    optionB: "Collaboration and team success",
                    themesA: ["Competition"],
                    themesB: ["Harmony"]
                },
                {
                    id: 14,
                    text: "I prefer to communicate with:",
                    optionA: "Confidence and authority",
                    optionB: "Empathy and understanding",
                    themesA: ["Command", "Self-Assurance"],
                    themesB: ["Empathy"]
                },
                {
                    id: 15,
                    text: "I enjoy:",
                    optionA: "Collecting information and knowledge for its own sake",
                    optionB: "Applying information to solve practical problems",
                    themesA: ["Input"],
                    themesB: ["Restorative"]
                },
                {
                    id: 16,
                    text: "I am comfortable:",
                    optionA: "Taking charge and directing others",
                    optionB: "Supporting others and helping them succeed",
                    themesA: ["Command"],
                    themesB: ["Developer"]
                },
                {
                    id: 17,
                    text: "I focus on:",
                    optionA: "Continuous improvement and excellence",
                    optionB: "Restoring things when they go wrong",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 18,
                    text: "I am motivated by:",
                    optionA: "Making a significant impact",
                    optionB: "Personal growth and development",
                    themesA: ["Significance"],
                    themesB: ["Learner"]
                },
                {
                    id: 19,
                    text: "I prefer to work with:",
                    optionA: "Proven, reliable methods",
                    optionB: "Innovate and try new approaches",
                    themesA: ["Consistency"],
                    themesB: ["Ideation"]
                },
                {
                    id: 20,
                    text: "I am energized by:",
                    optionA: "Thinking about complex ideas and concepts",
                    optionB: "Taking action and getting things done",
                    themesA: ["Intellection"],
                    themesB: ["Activator"]
                }
            ]
        },
        {
            title: "Section 2: Interpersonal Relationships",
            questions: [
                {
                    id: 21,
                    text: "I can easily:",
                    optionA: "Sense what others are feeling and thinking",
                    optionB: "Focus on logical solutions rather than emotions",
                    themesA: ["Empathy"],
                    themesB: ["Analytical"]
                },
                {
                    id: 22,
                    text: "In group settings, I:",
                    optionA: "Ensure everyone feels included and valued",
                    optionB: "Focus on achieving group objectives efficiently",
                    themesA: ["Includer"],
                    themesB: ["Focus"]
                },
                {
                    id: 23,
                    text: "I am fascinated by:",
                    optionA: "What makes each person unique",
                    optionB: "How people can work together effectively",
                    themesA: ["Individualization"],
                    themesB: ["Arranger"]
                },
                {
                    id: 24,
                    text: "I bring to group interactions:",
                    optionA: "Optimism and enthusiasm",
                    optionB: "Realistic assessment and practical thinking",
                    themesA: ["Positivity"],
                    themesB: ["Analytical"]
                },
                {
                    id: 25,
                    text: "I enjoy:",
                    optionA: "Helping others recognize and develop their potential",
                    optionB: "Focusing on my own growth and development",
                    themesA: ["Developer"],
                    themesB: ["Learner"]
                },
                {
                    id: 26,
                    text: "I believe:",
                    optionA: "There are meaningful connections between all things",
                    optionB: "In focusing on what can be directly observed and measured",
                    themesA: ["Connectedness"],
                    themesB: ["Analytical"]
                },
                {
                    id: 27,
                    text: "I prefer:",
                    optionA: "Deep, authentic relationships with a few people",
                    optionB: "Meeting and connecting with many different people",
                    themesA: ["Relator"],
                    themesB: ["Woo"]
                },
                {
                    id: 28,
                    text: "I communicate most effectively:",
                    optionA: "Through writing and careful preparation",
                    optionB: "Through speaking and spontaneous expression",
                    themesA: ["Communication"],
                    themesB: ["Intellection"]
                },
                {
                    id: 29,
                    text: "I am comfortable with:",
                    optionA: "Healthy disagreement and debate",
                    optionB: "Avoiding conflict and maintaining harmony",
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 30,
                    text: "I am most effective when:",
                    optionA: "I can influence others' decisions",
                    optionB: "I can support others' growth",
                    themesA: ["Communication"],
                    themesB: ["Developer"]
                },
                {
                    id: 31,
                    text: "I focus on:",
                    optionA: "Being consistent and fair in all situations",
                    optionB: "Adapting my approach based on individual circumstances",
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 32,
                    text: "I am motivated by:",
                    optionA: "External recognition and achievement",
                    optionB: "Internal satisfaction and personal values",
                    themesA: ["Significance"],
                    themesB: ["Belief"]
                },
                {
                    id: 33,
                    text: "I prefer to:",
                    optionA: "Understand the historical context of situations",
                    optionB: "Focus on future possibilities and innovations",
                    themesA: ["Context"],
                    themesB: ["Futuristic"]
                },
                {
                    id: 34,
                    text: "I enjoy:",
                    optionA: "Deep intellectual discussions and analysis",
                    optionB: "Practical, hands-on problem solving",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 35,
                    text: "I:",
                    optionA: "Am confident in my own judgment and decisions",
                    optionB: "Prefer to get input from others before deciding",
                    themesA: ["Self-Assurance"],
                    themesB: ["Harmony"]
                },
                {
                    id: 36,
                    text: "I focus on:",
                    optionA: "Transforming something strong into something superb",
                    optionB: "Fixing problems and resolving issues",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 37,
                    text: "I believe in:",
                    optionA: "Treating everyone the same according to established rules",
                    optionB: "Treating each person as a unique individual",
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 38,
                    text: "I am energized by:",
                    optionA: "Being around people and social interaction",
                    optionB: "Quiet time for reflection and thinking",
                    themesA: ["Woo"],
                    themesB: ["Intellection"]
                },
                {
                    id: 39,
                    text: "I prefer to communicate:",
                    optionA: "Directly and straightforwardly",
                    optionB: "Diplomatically and tactfully",
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 40,
                    text: "I am motivated by:",
                    optionA: "The challenge of winning",
                    optionB: "The satisfaction of a job well done",
                    themesA: ["Competition"],
                    themesB: ["Achiever"]
                }
            ]
        },
        {
            title: "Section 3: Decision Making & Problem Solving",
            questions: [
                {
                    id: 41,
                    text: "I make decisions based on:",
                    optionA: "Careful analysis of data",
                    optionB: "Intuition and gut feelings",
                    themesA: ["Analytical"],
                    themesB: ["Intuition"]
                },
                {
                    id: 42,
                    text: "When deciding, I:",
                    optionA: "Consider multiple future possibilities",
                    optionB: "Focus on the most practical and immediate solution",
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 43,
                    text: "I prefer to:",
                    optionA: "Make decisions quickly and move forward",
                    optionB: "Take time to consider all aspects before deciding",
                    themesA: ["Activator"],
                    themesB: ["Deliberative"]
                },
                {
                    id: 44,
                    text: "I focus on:",
                    optionA: "What could go wrong and how to prevent it",
                    optionB: "What could go right and how to achieve it",
                    themesA: ["Deliberative"],
                    themesB: ["Positivity"]
                },
                {
                    id: 45,
                    text: "I make decisions based on:",
                    optionA: "Established principles and values",
                    optionB: "Expected outcomes and results",
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 46,
                    text: "I enjoy:",
                    optionA: "Creating innovative solutions to problems",
                    optionB: "Implementing proven solutions to problems",
                    themesA: ["Ideation"],
                    themesB: ["Restorative"]
                },
                {
                    id: 47,
                    text: "I approach problems by:",
                    optionA: "Breaking them into logical components",
                    optionB: "Looking at the big picture first",
                    themesA: ["Analytical"],
                    themesB: ["Strategic"]
                },
                {
                    id: 48,
                    text: "I am most comfortable with:",
                    optionA: "Proven, reliable methods",
                    optionB: "New, innovative approaches",
                    themesA: ["Consistency"],
                    themesB: ["Ideation"]
                },
                {
                    id: 49,
                    text: "I focus on:",
                    optionA: "Understanding why things happened",
                    optionB: "What to do next",
                    themesA: ["Context"],
                    themesB: ["Activator"]
                },
                {
                    id: 50,
                    text: "I make decisions based on:",
                    optionA: "What is fair and consistent",
                    optionB: "What will work best in this specific situation",
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 51,
                    text: "I enjoy:",
                    optionA: "Theoretical concepts and abstract thinking",
                    optionB: "Practical applications and concrete results",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 52,
                    text: "I solve problems by:",
                    optionA: "Considering past experiences and precedents",
                    optionB: "Imagining new possibilities",
                    themesA: ["Context"],
                    themesB: ["Ideation"]
                },
                {
                    id: 53,
                    text: "I focus on:",
                    optionA: "The process of solving problems",
                    optionB: "Getting to the solution as quickly as possible",
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 54,
                    text: "I make decisions based on:",
                    optionA: "Thorough research and information gathering",
                    optionB: "My core beliefs and values",
                    themesA: ["Input"],
                    themesB: ["Belief"]
                },
                {
                    id: 55,
                    text: "I approach problems:",
                    optionA: "Systematically and methodically",
                    optionB: "Intuitively and adaptably",
                    themesA: ["Analytical"],
                    themesB: ["Adaptability"]
                },
                {
                    id: 56,
                    text: "I focus on:",
                    optionA: "Optimizing and improving existing solutions",
                    optionB: "Creating entirely new solutions",
                    themesA: ["Maximizer"],
                    themesB: ["Ideation"]
                },
                {
                    id: 57,
                    text: "I make decisions based on:",
                    optionA: "Logical analysis",
                    optionB: "Impact on people",
                    themesA: ["Analytical"],
                    themesB: ["Empathy"]
                },
                {
                    id: 58,
                    text: "I enjoy:",
                    optionA: "Complex problems that require deep analysis",
                    optionB: "Straightforward problems with clear solutions",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 59,
                    text: "I focus on:",
                    optionA: "The long-term implications of decisions",
                    optionB: "The immediate impact of decisions",
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 60,
                    text: "I solve problems by:",
                    optionA: "Drawing on my knowledge and expertise",
                    optionB: "Learning new information and approaches",
                    themesA: ["Input"],
                    themesB: ["Learner"]
                }
            ]
        },
        {
            title: "Section 4: Leadership & Influence",
            questions: [
                {
                    id: 61,
                    text: "I naturally:",
                    optionA: "Take charge of situations and direct others",
                    optionB: "Prefer to support others and help them succeed",
                    themesA: ["Command"],
                    themesB: ["Developer"]
                },
                {
                    id: 62,
                    text: "I am most effective when:",
                    optionA: "I can persuade and inspire others",
                    optionB: "I can analyze and plan thoroughly",
                    themesA: ["Communication"],
                    themesB: ["Strategic"]
                },
                {
                    id: 63,
                    text: "I focus on achieving:",
                    optionA: "Recognition and significance",
                    optionB: "Personal excellence and growth",
                    themesA: ["Significance"],
                    themesB: ["Maximizer"]
                },
                {
                    id: 64,
                    text: "I lead by:",
                    optionA: "Building consensus and harmony",
                    optionB: "Making clear decisions and providing direction",
                    themesA: ["Harmony"],
                    themesB: ["Command"]
                },
                {
                    id: 65,
                    text: "I am motivated by:",
                    optionA: "The challenge of influencing others",
                    optionB: "The satisfaction of achieving results",
                    themesA: ["Woo"],
                    themesB: ["Achiever"]
                },
                {
                    id: 66,
                    text: "I communicate with:",
                    optionA: "Confidence and authority",
                    optionB: "Empathy and understanding",
                    themesA: ["Command"],
                    themesB: ["Empathy"]
                },
                {
                    id: 67,
                    text: "I focus on:",
                    optionA: "Future possibilities and vision",
                    optionB: "Practical implementation and execution",
                    themesA: ["Futuristic"],
                    themesB: ["Focus"]
                },
                {
                    id: 68,
                    text: "I enjoy:",
                    optionA: "Competition and measuring myself against others",
                    optionB: "Collaboration and team success",
                    themesA: ["Competition"],
                    themesB: ["Harmony"]
                },
                {
                    id: 69,
                    text: "I am comfortable with:",
                    optionA: "Taking risks and making bold decisions",
                    optionB: "Careful planning and calculated risks",
                    themesA: ["Self-Assurance"],
                    themesB: ["Deliberative"]
                },
                {
                    id: 70,
                    text: "I lead by:",
                    optionA: "Inspiring others with enthusiasm",
                    optionB: "Providing stability and consistency",
                    themesA: ["Positivity"],
                    themesB: ["Discipline"]
                },
                {
                    id: 71,
                    text: "I focus on:",
                    optionA: "Transforming good into great",
                    optionB: "Fixing what's wrong",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 72,
                    text: "I am motivated by:",
                    optionA: "Making a significant impact",
                    optionB: "Personal growth and development",
                    themesA: ["Significance"],
                    themesB: ["Learner"]
                },
                {
                    id: 73,
                    text: "I communicate most effectively through:",
                    optionA: "Inspiring presentations",
                    optionB: "Thoughtful analysis",
                    themesA: ["Communication"],
                    themesB: ["Analytical"]
                },
                {
                    id: 74,
                    text: "I enjoy:",
                    optionA: "Being in the spotlight and receiving recognition",
                    optionB: "Working behind the scenes and supporting others",
                    themesA: ["Significance"],
                    themesB: ["Responsibility"]
                },
                {
                    id: 75,
                    text: "I lead by:",
                    optionA: "Challenging others to excel",
                    optionB: "Developing others' potential",
                    themesA: ["Maximizer"],
                    themesB: ["Developer"]
                },
                {
                    id: 76,
                    text: "I focus on being:",
                    optionA: "Innovative and forward-thinking",
                    optionB: "Reliable and consistent",
                    themesA: ["Ideation"],
                    themesB: ["Consistency"]
                },
                {
                    id: 77,
                    text: "I am most effective when:",
                    optionA: "I can take initiative and activate others",
                    optionB: "I can provide stability and support",
                    themesA: ["Activator"],
                    themesB: ["Responsibility"]
                },
                {
                    id: 78,
                    text: "I lead by:",
                    optionA: "Creating excitement and momentum",
                    optionB: "Providing structure and clarity",
                    themesA: ["Positivity"],
                    themesB: ["Discipline"]
                },
                {
                    id: 79,
                    text: "I focus on:",
                    optionA: "Achieving ambitious goals and recognition",
                    optionB: "Living according to my core values",
                    themesA: ["Competition"],
                    themesB: ["Belief"]
                },
                {
                    id: 80,
                    text: "I am comfortable with:",
                    optionA: "Confrontation and difficult conversations",
                    optionB: "Maintaining harmony and avoiding confrontation",
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                }
            ]
        },
        {
            title: "Section 5: Personal Motivation & Growth",
            questions: [
                {
                    id: 81,
                    text: "I am motivated by:",
                    optionA: "Learning new things and acquiring knowledge",
                    optionB: "Achieving tangible results and outcomes",
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 82,
                    text: "I focus on:",
                    optionA: "Continuous improvement and excellence",
                    optionB: "Restoring things when they go wrong",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 83,
                    text: "I am energized by:",
                    optionA: "Thinking about the future and possibilities",
                    optionB: "Dealing with present realities and challenges",
                    themesA: ["Futuristic"],
                    themesB: ["Activator"]
                },
                {
                    id: 84,
                    text: "I enjoy:",
                    optionA: "Collecting information and knowledge for its own sake",
                    optionB: "Applying information to solve practical problems",
                    themesA: ["Input"],
                    themesB: ["Restorative"]
                },
                {
                    id: 85,
                    text: "I am motivated by:",
                    optionA: "External recognition and achievement",
                    optionB: "Internal satisfaction and personal values",
                    themesA: ["Significance"],
                    themesB: ["Belief"]
                },
                {
                    id: 86,
                    text: "I focus on:",
                    optionA: "Developing my existing strengths",
                    optionB: "Improving my areas of weakness",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 87,
                    text: "I am energized by:",
                    optionA: "Being around people and social interaction",
                    optionB: "Quiet time for reflection and thinking",
                    themesA: ["Woo"],
                    themesB: ["Intellection"]
                },
                {
                    id: 88,
                    text: "I enjoy:",
                    optionA: "Theoretical concepts and abstract thinking",
                    optionB: "Practical applications and concrete results",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 89,
                    text: "I am motivated by:",
                    optionA: "Making a difference in the world",
                    optionB: "Achieving personal success",
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 90,
                    text: "I focus on:",
                    optionA: "Understanding the historical context of situations",
                    optionB: "Future possibilities and innovations",
                    themesA: ["Context"],
                    themesB: ["Futuristic"]
                },
                {
                    id: 91,
                    text: "I am motivated by:",
                    optionA: "The challenge of winning and competition",
                    optionB: "The satisfaction of a job well done",
                    themesA: ["Competition"],
                    themesB: ["Achiever"]
                },
                {
                    id: 92,
                    text: "I enjoy:",
                    optionA: "Deep intellectual discussions and analysis",
                    optionB: "Practical, hands-on problem solving",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 93,
                    text: "I am motivated by:",
                    optionA: "Personal growth and self-improvement",
                    optionB: "Achieving specific goals and outcomes",
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 94,
                    text: "I focus on:",
                    optionA: "Transforming something strong into something superb",
                    optionB: "Fixing problems and resolving issues",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 95,
                    text: "I am energized by:",
                    optionA: "Variety and new experiences",
                    optionB: "Routine and predictability",
                    themesA: ["Adaptability"],
                    themesB: ["Discipline"]
                },
                {
                    id: 96,
                    text: "I am motivated by:",
                    optionA: "Being reliable and responsible",
                    optionB: "Being significant and making an impact",
                    themesA: ["Responsibility"],
                    themesB: ["Significance"]
                },
                {
                    id: 97,
                    text: "I enjoy learning:",
                    optionA: "For the joy of learning itself",
                    optionB: "To achieve specific goals",
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 98,
                    text: "I am motivated by:",
                    optionA: "Internal standards and values",
                    optionB: "External validation and recognition",
                    themesA: ["Belief"],
                    themesB: ["Significance"]
                },
                {
                    id: 99,
                    text: "I focus on:",
                    optionA: "Future possibilities and what could be",
                    optionB: "Present realities and what is",
                    themesA: ["Futuristic"],
                    themesB: ["Activator"]
                },
                {
                    id: 100,
                    text: "I am motivated by:",
                    optionA: "Personal freedom and independence",
                    optionB: "Structure and clear expectations",
                    themesA: ["Self-Assurance"],
                    themesB: ["Discipline"]
                }
            ]
        }
    ]
};

// Themes database with descriptions
const themes = {
    "Achiever": {
        name: "Achiever",
        domain: "Executing",
        description: "People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive."
    },
    "Activator": {
        name: "Activator",
        domain: "Influencing",
        description: "People exceptionally talented in the Activator theme can make things happen by turning thoughts into action. They want to do things now, rather than simply talk about them."
    },
    "Adaptability": {
        name: "Adaptability",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Adaptability theme prefer to go with the flow. They tend to be 'now' people who take things as they come and discover the future one day at a time."
    },
    "Analytical": {
        name: "Analytical",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Analytical theme search for reasons and causes. They have the ability to think about all of the factors that might affect a situation."
    },
    "Arranger": {
        name: "Arranger",
        domain: "Executing",
        description: "People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to determine how all of the pieces and resources can be arranged for maximum productivity."
    },
    "Belief": {
        name: "Belief",
        domain: "Executing",
        description: "People exceptionally talented in the Belief theme have certain core values that are unchanging. Out of these values emerges a defined purpose for their lives."
    },
    "Command": {
        name: "Command",
        domain: "Influencing",
        description: "People exceptionally talented in the Command theme have presence. They can take control of a situation and make decisions."
    },
    "Communication": {
        name: "Communication",
        domain: "Influencing",
        description: "People exceptionally talented in the Communication theme generally find it easy to put their thoughts into words. They are good conversationalists and presenters."
    },
    "Competition": {
        name: "Competition",
        domain: "Influencing",
        description: "People exceptionally talented in the Competition theme measure their progress against the performance of others. They strive to win first place and revel in contests."
    },
    "Connectedness": {
        name: "Connectedness",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Connectedness theme have faith in the links among all things. They believe there are few coincidences and that almost every event has meaning."
    },
    "Consistency": {
        name: "Consistency",
        domain: "Executing",
        description: "People exceptionally talented in the Consistency theme are keenly aware of the need to treat people the same. They crave stable routines and clear rules and procedures that everyone can follow."
    },
    "Context": {
        name: "Context",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Context theme enjoy thinking about the past. They understand the present by researching its history."
    },
    "Deliberative": {
        name: "Deliberative",
        domain: "Executing",
        description: "People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate obstacles."
    },
    "Developer": {
        name: "Developer",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Developer theme recognize and cultivate the potential in others. They spot the signs of each small improvement and derive satisfaction from evidence of progress."
    },
    "Discipline": {
        name: "Discipline",
        domain: "Executing",
        description: "People exceptionally talented in the Discipline theme enjoy routine and structure. Their world is best described by the order they create."
    },
    "Empathy": {
        name: "Empathy",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Empathy theme can sense other people's feelings by imagining themselves in others' lives or situations."
    },
    "Focus": {
        name: "Focus",
        domain: "Executing",
        description: "People exceptionally talented in the Focus theme can take a direction, follow through and make the corrections necessary to stay on track. They prioritize, then act."
    },
    "Futuristic": {
        name: "Futuristic",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Futuristic theme are inspired by the future and what could be. They energize others with their visions of the future."
    },
    "Harmony": {
        name: "Harmony",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Harmony theme look for consensus. They don't enjoy conflict; rather, they seek areas of agreement."
    },
    "Ideation": {
        name: "Ideation",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena."
    },
    "Includer": {
        name: "Includer",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Includer theme accept others. They show awareness of those who feel left out and make an effort to include them."
    },
    "Individualization": {
        name: "Individualization",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Individualization theme are intrigued with the unique qualities of each person. They have a gift for figuring out how different people can work together productively."
    },
    "Input": {
        name: "Input",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Input theme have a need to collect and archive. They may accumulate information, ideas, artifacts or even relationships."
    },
    "Intellection": {
        name: "Intellection",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Intellection theme are characterized by their intellectual activity. They are introspective and appreciate intellectual discussions."
    },
    "Learner": {
        name: "Learner",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve. The process of learning, rather than the outcome, excites them."
    },
    "Maximizer": {
        name: "Maximizer",
        domain: "Influencing",
        description: "People exceptionally talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence. They seek to transform something strong into something superb."
    },
    "Positivity": {
        name: "Positivity",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Positivity theme have contagious enthusiasm. They are upbeat and can get others excited about what they are going to do."
    },
    "Relator": {
        name: "Relator",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal."
    },
    "Responsibility": {
        name: "Responsibility",
        domain: "Executing",
        description: "People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty."
    },
    "Restorative": {
        name: "Restorative",
        domain: "Executing",
        description: "People exceptionally talented in the Restorative theme are adept at dealing with problems. They are good at figuring out what is wrong and resolving it."
    },
    "Self-Assurance": {
        name: "Self-Assurance",
        domain: "Influencing",
        description: "People exceptionally talented in the Self-Assurance theme feel confident in their ability to take risks and manage their own lives. They have an inner compass that gives them certainty in their decisions."
    },
    "Significance": {
        name: "Significance",
        domain: "Influencing",
        description: "People exceptionally talented in the Significance theme want to make a big impact. They are independent and prioritize projects based on how much influence they will have on their organization or people around them."
    },
    "Strategic": {
        name: "Strategic",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Strategic theme create alternative ways to proceed. Faced with any given scenario, they can quickly spot the relevant patterns and issues."
    },
    "Woo": {
        name: "Woo",
        domain: "Influencing",
        description: "People exceptionally talented in the Woo theme love the challenge of meeting new people and winning them over. They derive satisfaction from breaking the ice and making a connection with someone."
    }
};

// Assessment state
let currentSection = 0;
let currentQuestion = 0;
let responses = [];
let scores = {};

// Initialize scores
function initializeScores() {
    Object.keys(themes).forEach(theme => {
        scores[theme] = 0;
    });
}

// Start the assessment
function startAssessment() {
    document.getElementById('introduction').classList.add('hidden');
    document.getElementById('assessment').classList.remove('hidden');
    initializeScores();
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const section = assessmentData.sections[currentSection];
    const question = section.questions[currentQuestion];
    const container = document.getElementById('question-container');
    
    // Update progress info
    document.getElementById('section-title').textContent = section.title;
    document.getElementById('progress-text').textContent = 
        `Question ${currentQuestion + 1} of ${section.questions.length} (Section ${currentSection + 1} of ${assessmentData.sections.length})`;
    
    // Update progress bar
    const totalQuestions = assessmentData.sections.reduce((sum, section) => sum + section.questions.length, 0);
    const questionsAnswered = responses.length;
    const progressPercentage = (questionsAnswered / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progressPercentage + '%';
    
    // Load question
    container.innerHTML = `
        <div class="question">
            <div class="question-text">${question.text}</div>
            <div class="options">
                <div class="option" onclick="selectOption('A')">
                    ${question.optionA}
                </div>
                <div class="option" onclick="selectOption('B')">
                    ${question.optionB}
                </div>
            </div>
        </div>
    `;
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = (currentSection === 0 && currentQuestion === 0);
    document.getElementById('nextBtn').disabled = true;
}

// Select an option
function selectOption(option) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    event.target.classList.add('selected');
    
    // Store response
    const section = assessmentData.sections[currentSection];
    const question = section.questions[currentQuestion];
    
    responses.push({
        questionId: question.id,
        answer: option,
        section: currentSection,
        questionIndex: currentQuestion
    });
    
    // Update scores
    const selectedThemes = option === 'A' ? question.themesA : question.themesB;
    selectedThemes.forEach(theme => {
        if (scores[theme] !== undefined) {
            scores[theme]++;
        }
    });
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

// Navigate to next question
function nextQuestion() {
    const section = assessmentData.sections[currentSection];
    
    if (currentQuestion < section.questions.length - 1) {
        // Move to next question in current section
        currentQuestion++;
    } else if (currentSection < assessmentData.sections.length - 1) {
        // Move to first question in next section
        currentSection++;
        currentQuestion = 0;
    } else {
        // Assessment complete, show results
        showResults();
        return;
    }
    
    loadQuestion();
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        // Move to previous question in current section
        currentQuestion--;
    } else if (currentSection > 0) {
        // Move to last question in previous section
        currentSection--;
        currentQuestion = assessmentData.sections[currentSection].questions.length - 1;
    }
    
    // Remove last response
    if (responses.length > 0) {
        const lastResponse = responses.pop();
        
        // Update scores (subtract the last response)
        const section = assessmentData.sections[lastResponse.section];
        const question = section.questions[lastResponse.questionIndex];
        const selectedThemes = lastResponse.answer === 'A' ? question.themesA : question.themesB;
        
        selectedThemes.forEach(theme => {
            if (scores[theme] !== undefined && scores[theme] > 0) {
                scores[theme]--;
            }
        });
    }
    
    loadQuestion();
}

// Show results
function showResults() {
    document.getElementById('assessment').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    
    // Apply normalization to reduce bias
    const normalizedScores = normalizeScores(scores);
    
    // Sort themes by score and get top 5
    const sortedThemes = Object.entries(normalizedScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
    
    sortedThemes.forEach((themeData, index) => {
        const themeKey = themeData[0];
        const themeScore = themeData[1];
        const theme = themes[themeKey];
        
        resultsContainer.innerHTML += `
            <div class="strength-item">
                <div class="strength-rank">#${index + 1}</div>
                <div class="strength-name">${theme.name}</div>
                <div class="strength-domain">${theme.domain}</div>
                <div class="strength-description">${theme.description}</div>
            </div>
        `;
    });
}

// Normalize scores to reduce bias
function normalizeScores(scores) {
    // Group similar themes to apply normalization
    const themeGroups = {
        analytical: ["Analytical", "Strategic", "Intellection"],
        harmony: ["Harmony", "Empathy", "Developer"],
        execution: ["Achiever", "Focus", "Discipline"],
        influence: ["Communication", "Woo", "Command"]
    };
    
    const normalizedScores = {...scores};
    
    // Apply normalization within groups
    Object.values(themeGroups).forEach(group => {
        const groupTotal = group.reduce((sum, theme) => sum + (scores[theme] || 0), 0);
        const groupAverage = groupTotal / group.length;
        
        group.forEach(theme => {
            // Reduce scores that are significantly above group average
            if (scores[theme] > groupAverage * 1.2) {
                normalizedScores[theme] = groupAverage + (scores[theme] - groupAverage) * 0.7;
            }
        });
    });
    
    return normalizedScores;
}

// Restart assessment
function restartAssessment() {
    currentSection = 0;
    currentQuestion = 0;
    responses = [];
    scores = {};
    
    document.getElementById('results').classList.add('hidden');
    document.getElementById('introduction').classList.remove('hidden');
}

// Share results
function shareResults() {
    const resultsText = document.getElementById('results-container').innerText;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Top 5 Strengths',
            text: resultsText
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const textArea = document.createElement('textarea');
        textArea.value = resultsText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        alert('Results copied to clipboard!');
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Comprehensive Strengths Assessment loaded successfully!');
});
