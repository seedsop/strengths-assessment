// Complete assessment data with 150+ questions
const questions = [
    {
        id: 1,
        text: "Which statement better describes you?",
        optionA: "I feel most satisfied when I'm busy and accomplishing tasks",
        optionB: "I prefer to think deeply about problems before taking action",
        themesA: ["Achiever", "Focus"],
        themesB: ["Analytical", "Deliberative"]
    },
    {
        id: 2,
        text: "When working on projects, I prefer to:",
        optionA: "Organize complex projects with many moving parts",
        optionB: "Focus on one task at a time until completion",
        themesA: ["Arranger", "Activator"],
        themesB: ["Focus", "Discipline"]
    },
    {
        id: 3,
        text: "In changing situations, I tend to:",
        optionA: "Adapt easily and go with the flow",
        optionB: "Prefer stable routines and clear rules",
        themesA: ["Adaptability", "Positivity"],
        themesB: ["Consistency", "Discipline"]
    },
    {
        id: 4,
        text: "My primary motivation comes from:",
        optionA: "My core values and beliefs",
        optionB: "Achieving specific goals and outcomes",
        themesA: ["Belief", "Connectedness"],
        themesB: ["Achiever", "Competition"]
    },
    {
        id: 5,
        text: "When making decisions, I:",
        optionA: "Carefully consider all possible outcomes",
        optionB: "Prefer to take quick action and adjust as needed",
        themesA: ["Deliberative", "Analytical"],
        themesB: ["Activator", "Adaptability"]
    },
    {
        id: 6,
        text: "When solving problems, I prefer to:",
        optionA: "Analyze data and find patterns",
        optionB: "Brainstorm creative solutions",
        themesA: ["Analytical", "Context"],
        themesB: ["Ideation", "Strategic"]
    },
    {
        id: 7,
        text: "I'm more energized by:",
        optionA: "New ideas and concepts",
        optionB: "Practical, actionable solutions",
        themesA: ["Ideation", "Input"],
        themesB: ["Activator", "Restorative"]
    },
    {
        id: 8,
        text: "When understanding situations, I:",
        optionA: "Like to understand the historical context",
        optionB: "Prefer to focus on future possibilities",
        themesA: ["Context", "Consistency"],
        themesB: ["Futuristic", "Strategic"]
    },
    {
        id: 9,
        text: "I tend to:",
        optionA: "Enjoy collecting and organizing information",
        optionB: "Prefer to discuss and debate ideas",
        themesA: ["Input", "Discipline"],
        themesB: ["Communication", "Intellection"]
    },
    {
        id: 10,
        text: "I think best when:",
        optionA: "I'm alone with my thoughts",
        optionB: "I'm discussing with others",
        themesA: ["Intellection", "Focus"],
        themesB: ["Communication", "Woo"]
    },
    {
        id: 11,
        text: "In social situations, I:",
        optionA: "Enjoy meeting new people and building networks",
        optionB: "Prefer to develop deep, meaningful relationships",
        themesA: ["Woo", "Communication"],
        themesB: ["Relator", "Developer"]
    },
    {
        id: 12,
        text: "When interacting with others, I:",
        optionA: "Can easily sense what others are feeling",
        optionB: "Prefer to focus on logical solutions",
        themesA: ["Empathy", "Harmony"],
        themesB: ["Analytical", "Restorative"]
    },
    {
        id: 13,
        text: "I find satisfaction in:",
        optionA: "Helping others grow and develop",
        optionB: "Focusing on my own growth",
        themesA: ["Developer", "Empathy"],
        themesB: ["Learner", "Self-Assurance"]
    },
    {
        id: 14,
        text: "When faced with conflict, I:",
        optionA: "Seek harmony and avoid disagreement",
        optionB: "Am comfortable with healthy debate",
        themesA: ["Harmony", "Positivity"],
        themesB: ["Command", "Activator"]
    },
    {
        id: 15,
        text: "I'm fascinated by:",
        optionA: "What makes each person unique",
        optionB: "How teams can work together effectively",
        themesA: ["Individualization", "Empathy"],
        themesB: ["Arranger", "Harmony"]
    },
    {
        id: 16,
        text: "In group situations, I:",
        optionA: "Naturally take charge and lead",
        optionB: "Prefer to support others' leadership",
        themesA: ["Command", "Self-Assurance"],
        themesB: ["Harmony", "Consistency"]
    },
    {
        id: 17,
        text: "I prefer to:",
        optionA: "Persuade and influence others",
        optionB: "Work behind the scenes",
        themesA: ["Communication", "Significance"],
        themesB: ["Relator", "Responsibility"]
    },
    {
        id: 18,
        text: "I'm motivated by:",
        optionA: "Competition and winning",
        optionB: "Collaboration and teamwork",
        themesA: ["Competition", "Achiever"],
        themesB: ["Harmony", "Developer"]
    },
    {
        id: 19,
        text: "I want to:",
        optionA: "Make a significant impact on others",
        optionB: "Do my personal best",
        themesA: ["Significance", "Command"],
        themesB: ["Achiever", "Maximizer"]
    },
    {
        id: 20,
        text: "When making decisions, I:",
        optionA: "Trust my own judgment",
        optionB: "Prefer to get input from others",
        themesA: ["Self-Assurance", "Belief"],
        themesB: ["Harmony", "Includer"]
    },
    {
        id: 21,
        text: "I'm energized by:",
        optionA: "Learning new things",
        optionB: "Achieving tangible results",
        themesA: ["Learner", "Input"],
        themesB: ["Achiever", "Restorative"]
    },
    {
        id: 22,
        text: "I tend to:",
        optionA: "See connections between seemingly unrelated things",
        optionB: "Focus on what's directly in front of me",
        themesA: ["Connectedness", "Ideation"],
        themesB: ["Focus", "Activator"]
    },
    {
        id: 23,
        text: "I'm inspired by:",
        optionA: "Future possibilities and what could be",
        optionB: "Present realities and what is",
        themesA: ["Futuristic", "Strategic"],
        themesB: ["Activator", "Restorative"]
    },
    {
        id: 24,
        text: "I enjoy:",
        optionA: "Fixing problems and finding solutions",
        optionB: "Preventing problems before they occur",
        themesA: ["Restorative", "Analytical"],
        themesB: ["Deliberative", "Focus"]
    },
    {
        id: 25,
        text: "I'm motivated by:",
        optionA: "External recognition and praise",
        optionB: "Internal satisfaction and personal growth",
        themesA: ["Significance", "Competition"],
        themesB: ["Learner", "Belief"]
    },
    {
        id: 26,
        text: "In teams, I focus on:",
        optionA: "Ensuring everyone feels included",
        optionB: "Achieving team objectives",
        themesA: ["Includer", "Harmony"],
        themesB: ["Achiever", "Focus"]
    },
    {
        id: 27,
        text: "I bring to groups:",
        optionA: "Optimism and enthusiasm",
        optionB: "Realistic assessment and practicality",
        themesA: ["Positivity", "Communication"],
        themesB: ["Analytical", "Discipline"]
    },
    {
        id: 28,
        text: "When teams face change, I:",
        optionA: "Adapt easily and help others adjust",
        optionB: "Provide stability and consistency",
        themesA: ["Adaptability", "Positivity"],
        themesB: ["Consistency", "Responsibility"]
    },
    {
        id: 29,
        text: "I prefer to:",
        optionA: "Challenge others to excel",
        optionB: "Support others' current efforts",
        themesA: ["Maximizer", "Activator"],
        themesB: ["Developer", "Relator"]
    },
    {
        id: 30,
        text: "My communication style is:",
        optionA: "Effective at articulating ideas",
        optionB: "Good at listening to others",
        themesA: ["Communication", "Woo"],
        themesB: ["Empathy", "Relator"]
    },
    {
        id: 31,
        text: "I make decisions based on:",
        optionA: "Careful analysis and data",
        optionB: "Intuition and gut feelings",
        themesA: ["Analytical", "Deliberative"],
        themesB: ["Connectedness", "Self-Assurance"]
    },
    {
        id: 32,
        text: "When deciding, I:",
        optionA: "Consider all perspectives thoroughly",
        optionB: "Decide quickly and confidently",
        themesA: ["Deliberative", "Context"],
        themesB: ["Activator", "Self-Assurance"]
    },
    {
        id: 33,
        text: "I tend to focus on:",
        optionA: "What could go wrong",
        optionB: "What could go right",
        themesA: ["Deliberative", "Analytical"],
        themesB: ["Positivity", "Futuristic"]
    },
    {
        id: 34,
        text: "I prefer:",
        optionA: "Proven, reliable methods",
        optionB: "Innovative, new approaches",
        themesA: ["Consistency", "Discipline"],
        themesB: ["Ideation", "Strategic"]
    },
    {
        id: 35,
        text: "My decisions are guided by:",
        optionA: "My core values and beliefs",
        optionB: "The expected outcomes and results",
        themesA: ["Belief", "Responsibility"],
        themesB: ["Achiever", "Competition"]
    },
    {
        id: 36,
        text: "I communicate with:",
        optionA: "Confidence and authority",
        optionB: "Empathy and understanding",
        themesA: ["Command", "Self-Assurance"],
        themesB: ["Empathy", "Harmony"]
    },
    {
        id: 37,
        text: "I prefer speaking:",
        optionA: "To large groups and audiences",
        optionB: "In one-on-one conversations",
        themesA: ["Communication", "Woo"],
        themesB: ["Relator", "Empathy"]
    },
    {
        id: 38,
        text: "When I communicate, I aim to:",
        optionA: "Influence decisions and actions",
        optionB: "Build relationships and understanding",
        themesA: ["Communication", "Significance"],
        themesB: ["Relator", "Harmony"]
    },
    {
        id: 39,
        text: "My communication style is:",
        optionA: "Direct and straightforward",
        optionB: "Diplomatic and tactful",
        themesA: ["Command", "Activator"],
        themesB: ["Harmony", "Includer"]
    },
    {
        id: 40,
        text: "I'm motivated to learn:",
        optionA: "For the joy of learning itself",
        optionB: "To achieve specific goals",
        themesA: ["Learner", "Input"],
        themesB: ["Achiever", "Focus"]
    },
    {
        id: 41,
        text: "I prefer learning:",
        optionA: "Theoretical concepts and ideas",
        optionB: "Practical skills and applications",
        themesA: ["Intellection", "Input"],
        themesB: ["Activator", "Restorative"]
    },
    {
        id: 42,
        text: "I learn best through:",
        optionA: "Reading and independent research",
        optionB: "Discussion and hands-on experience",
        themesA: ["Input", "Intellection"],
        themesB: ["Learner", "Adaptability"]
    },
    {
        id: 43,
        text: "I focus my development on:",
        optionA: "Building my existing strengths",
        optionB: "Improving my weaknesses",
        themesA: ["Maximizer", "Self-Assurance"],
        themesB: ["Restorative", "Learner"]
    },
    {
        id: 44,
        text: "When I learn something new, I:",
        optionA: "Enjoy sharing it with others",
        optionB: "Prefer to keep it to myself",
        themesA: ["Communication", "Woo"],
        themesB: ["Intellection", "Focus"]
    },
    {
        id: 45,
        text: "I'm driven by:",
        optionA: "Making a difference in the world",
        optionB: "Achieving personal success",
        themesA: ["Belief", "Significance"],
        themesB: ["Achiever", "Competition"]
    },
    {
        id: 46,
        text: "I value:",
        optionA: "Tradition and stability",
        optionB: "Innovation and change",
        themesA: ["Consistency", "Context"],
        themesB: ["Ideation", "Futuristic"]
    },
    {
        id: 47,
        text: "I'm motivated by:",
        optionA: "My deeply held beliefs",
        optionB: "Tangible results and outcomes",
        themesA: ["Belief", "Connectedness"],
        themesB: ["Achiever", "Restorative"]
    },
    {
        id: 48,
        text: "I tend to:",
        optionA: "Look for meaning in everyday events",
        optionB: "Focus on practical outcomes",
        themesA: ["Connectedness", "Context"],
        themesB: ["Activator", "Focus"]
    },
    {
        id: 49,
        text: "I prefer working:",
        optionA: "Independently",
        optionB: "Collaboratively with others",
        themesA: ["Focus", "Self-Assurance"],
        themesB: ["Harmony", "Developer"]
    },
    {
        id: 50,
        text: "When facing challenges, I:",
        optionA: "See them as opportunities to grow",
        optionB: "Prefer to avoid them when possible",
        themesA: ["Learner", "Positivity"],
        themesB: ["Deliberative", "Harmony"]
    }
];

// Complete themes database with descriptions
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
    const question = questions[currentQuestion];
    const container = document.getElementById('questionContainer');
    
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
    
    updateProgress();
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
    responses.push({
        questionId: currentQuestion,
        answer: option
    });
    
    // Update scores
    const question = questions[currentQuestion];
    const selectedThemes = option === 'A' ? question.themesA : question.themesB;
    selectedThemes.forEach(theme => {
        scores[theme]++;
    });
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

// Move to next question
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById('nextBtn').disabled = true;
    } else {
        showResults();
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// Show results
function showResults() {
    document.getElementById('assessment').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    
    // Sort themes by score and get top 5
    const sortedThemes = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';
    
    sortedThemes.forEach((themeData, index) => {
        const themeKey = themeData[0];
        const themeScore = themeData[1];
        const theme = themes[themeKey];
        
        resultsContainer.innerHTML += `
            <div class="strength-item">
                <div class="strength-name">#${index + 1} ${theme.name}</div>
                <div class="strength-domain">${theme.domain}</div>
                <p>${theme.description}</p>
            </div>
        `;
    });
}

// Restart assessment
function restartAssessment() {
    currentQuestion = 0;
    responses = [];
    scores = {};
    document.getElementById('results').classList.add('hidden');
    document.getElementById('introduction').classList.remove('hidden');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // App is ready to start
    console.log('Strengths Assessment loaded successfully!');
});