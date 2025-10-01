// Assessment questions and theme mapping
const assessmentData = {
    sections: [
        {
            title: "Section 1: Work Approach & Productivity (Seksyon 1: Pamaagi sa Paggahugma ug Produktibidad)",
            questions: [
                {
                    id: 1,
                    text: "I am most energized when: (Nakakuha ako labaw sa tanang enerhiya kung:)",
                    optionA: "I can complete multiple tasks and check them off my list (Makakompleto ako daghang mga buluhaton ug tsekahan sila sa akong lista)",
                    optionB: "I can think deeply about complex problems and solutions (Makahunahuna ako og lawom bahin sa mga komplikadong problema ug solusyon)",
                    themesA: ["Achiever"],
                    themesB: ["Strategic", "Analytical"]
                },
                {
                    id: 2,
                    text: "I prefer to: (Nanginahanglan ko nga:)",
                    optionA: "Start projects immediately and make adjustments as I go (Magsugod dayon og mga proyekto ug mag-adjust samtang nagpadayon)",
                    optionB: "Thoroughly plan all aspects before beginning a project (Magplano og maayo sa tanang bahin sa wala pa magsugod og proyekto)",
                    themesA: ["Activator"],
                    themesB: ["Focus", "Discipline"]
                },
                {
                    id: 3,
                    text: "I adapt easily to: (Madali kong makina-umon sa:)",
                    optionA: "Changing priorities and can shift direction quickly (Mga nagbalhin-baghin nga prioridad ug makabalhin og direksyon nga paspas)",
                    optionB: "Stable routines and clear expectations that don't change frequently (Mga establdong rutina ug klarong mga ekspektasyon nga dili kanunay magbag-o)",
                    themesA: ["Adaptability"],
                    themesB: ["Consistency", "Discipline"]
                },
                {
                    id: 4,
                    text: "When making decisions, I focus on: (Sa paghimo og desisyon, nag-focus ako sa:)",
                    optionA: "Analyzing data and evidence (Pag-analisar sa datos ug ebidensya)",
                    optionB: "Maintaining harmony and consensus (Pagpabilin sa harmony ug konsenso)",
                    themesA: ["Analytical"],
                    themesB: ["Harmony"]
                },
                {
                    id: 5,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Organizing complex projects with many moving parts (Pag-organisa sa mga komplikadong proyekto nga daghang bahin nga nagalihok)",
                    optionB: "Focusing intensely on one task until it's completed perfectly (Pag-focus og maayo sa usa ka buluhaton hangtod ma-perfect kini)",
                    themesA: ["Arranger"],
                    themesB: ["Focus"]
                },
                {
                    id: 6,
                    text: "I am driven by: (Gipadagan ako sa:)",
                    optionA: "My core values and sense of purpose (Akong mga pundasyon nga bili ug kahulugan sa katuyoan)",
                    optionB: "Achieving specific goals and measurable results (Pag-abot sa mga espesipikong goal ug masukod nga resulta)",
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 7,
                    text: "I: (Ako:)",
                    optionA: "Carefully consider all possible risks before making decisions (Pagtan-aw og maayo sa tanang posible nga risgo sa wala pa mohimo og desisyon)",
                    optionB: "Am comfortable making quick decisions with limited information (Komportable ako sa paghimo og paspas nga desisyon gamay lang nga impormasyon)",
                    themesA: ["Deliberative"],
                    themesB: ["Activator"]
                },
                {
                    id: 8,
                    text: "I prefer to work: (Gusto ko magtrabaho:)",
                    optionA: "Independently with minimal interruptions (Nag-inusara gamay lang nga pagputol)",
                    optionB: "Collaboratively with frequent interaction (Sa pagtinabangay uban kanunay nga interaksyon)",
                    themesA: ["Focus", "Intellection"],
                    themesB: ["Relator", "Harmony"]
                },
                {
                    id: 9,
                    text: "I am energized by: (Nakakuha ako og enerhiya gikan sa:)",
                    optionA: "Learning new information and concepts (Pagkat-on og bag-ong impormasyon ug konsepto)",
                    optionB: "Achieving tangible results and outcomes (Pag-abot sa mga konkreto nga resulta ug sangputanan)",
                    themesA: ["Learner", "Input"],
                    themesB: ["Achiever"]
                },
                {
                    id: 10,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Meeting new people and building a broad network (Pagtagbog og bag-ong tawo ug pagtukod og lapad nga network)",
                    optionB: "Developing deep, meaningful relationships with fewer people (Pagpalambo og lawom, may kahulugang relasyon sa pipila lang ka tawo)",
                    themesA: ["Woo"],
                    themesB: ["Relator"]
                },
                {
                    id: 11,
                    text: "I am most effective when: (Labaw ka epektibo ako kung:)",
                    optionA: "I can persuade others to my point of view (Makapahimo ako og uban sa akong punto de vista)",
                    optionB: "I can find common ground and avoid conflict (Makakita ako og komon nga yuta ug likayan ang away)",
                    themesA: ["Communication", "Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 12,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Future possibilities and what could be (Mga posibilidad sa umaabot ug unsa mahimo)",
                    optionB: "Present realities and what is (Kasamtangang realidad ug unsa karon)",
                    themesA: ["Futuristic", "Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 13,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "Competition and being the best (Pagkompetensya ug pagka labing maayo)",
                    optionB: "Collaboration and team success (Pagtinabangay ug kalampusan sa team)",
                    themesA: ["Competition"],
                    themesB: ["Harmony"]
                },
                {
                    id: 14,
                    text: "I prefer to communicate with: (Gusto ko makigkomunika uban sa:)",
                    optionA: "Confidence and authority (Kompido ug awtoridad)",
                    optionB: "Empathy and understanding (Empati ug pagkasabot)",
                    themesA: ["Command", "Self-Assurance"],
                    themesB: ["Empathy"]
                },
                {
                    id: 15,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Collecting information and knowledge for its own sake (Pagkolekta og impormasyon ug kahibalo para sa kaugalingon niini)",
                    optionB: "Applying information to solve practical problems (Paggamit og impormasyon sa pag-solve sa praktikal nga mga problema)",
                    themesA: ["Input"],
                    themesB: ["Restorative"]
                },
                {
                    id: 16,
                    text: "I am comfortable: (Komportable ako:)",
                    optionA: "Taking charge and directing others (Pagkuha sa responsibilidad ug pagdumala sa uban)",
                    optionB: "Supporting others and helping them succeed (Pag-support sa uban ug pagtabang nila nga malampuson)",
                    themesA: ["Command"],
                    themesB: ["Developer"]
                },
                {
                    id: 17,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Continuous improvement and excellence (Padayon nga pagpalambo ug kaayuhan)",
                    optionB: "Restoring things when they go wrong (Pagbalik sa mga butang kon maguba)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 18,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "Making a significant impact (Paghimo og dako nga epekto)",
                    optionB: "Personal growth and development (Personal nga pagtubo ug paglambo)",
                    themesA: ["Significance"],
                    themesB: ["Learner"]
                },
                {
                    id: 19,
                    text: "I prefer to work with: (Gusto ko magtrabaho uban sa:)",
                    optionA: "Proven, reliable methods (Mga na-prove, masaligan nga pamaagi)",
                    optionB: "Innovate and try new approaches (Mag-innovate ug sulayan ang bag-ong pamaagi)",
                    themesA: ["Consistency"],
                    themesB: ["Ideation"]
                },
                {
                    id: 20,
                    text: "I am energized by: (Nakakuha ako og enerhiya gikan sa:)",
                    optionA: "Thinking about complex ideas and concepts (Pag hunahuna sa mga komplikadong ideya ug konsepto)",
                    optionB: "Taking action and getting things done (Pagkuha og aksyon ug paghuman sa mga butang)",
                    themesA: ["Intellection"],
                    themesB: ["Activator"]
                }
            ]
        },
        {
            title: "Section 2: Interpersonal Relationships (Seksyon 2: Mga Relasyon sa Tawo)",
            questions: [
                {
                    id: 21,
                    text: "I can easily: (Makaya ko dali:)",
                    optionA: "Sense what others are feeling and thinking (Makabati sa gibati ug gihunahuna sa uban)",
                    optionB: "Focus on logical solutions rather than emotions (Focus sa lohikal nga solusyon dili sa emosyon)",
                    themesA: ["Empathy"],
                    themesB: ["Analytical"]
                },
                {
                    id: 22,
                    text: "In group settings, I: (Sa mga grupo, ako:)",
                    optionA: "Ensure everyone feels included and valued (Siguraduhon nga tanan nakabati nga kabahin ug bilihan)",
                    optionB: "Focus on achieving group objectives efficiently (Focus sa pag-abot sa mga objetivo sa grupo nga episyente)",
                    themesA: ["Includer"],
                    themesB: ["Focus"]
                },
                {
                    id: 23,
                    text: "I am fascinated by: (Nakapahinumdom ako sa:)",
                    optionA: "What makes each person unique (Unsa ang nagpaka-iba sa matag tawo)",
                    optionB: "How people can work together effectively (Unsaon pagtrabaho ang mga tawo nga epektibo)",
                    themesA: ["Individualization"],
                    themesB: ["Arranger"]
                },
                {
                    id: 24,
                    text: "I bring to group interactions: (Gidala ko sa mga interaksyon sa grupo:)",
                    optionA: "Optimism and enthusiasm (Optimismo ug entusyamo)",
                    optionB: "Realistic assessment and practical thinking (Realistiko nga pagtasa ug praktikal nga paghunahuna)",
                    themesA: ["Positivity"],
                    themesB: ["Analytical"]
                },
                {
                    id: 25,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Helping others recognize and develop their potential (Pagtabang sa uban nga makakita ug mapalambo ang ilang potensyal)",
                    optionB: "Focusing on my own growth and development (Pag-focus sa akong kaugalingong pagtubo ug paglambo)",
                    themesA: ["Developer"],
                    themesB: ["Learner"]
                },
                {
                    id: 26,
                    text: "I believe: (Nagtuo ako:)",
                    optionA: "There are meaningful connections between all things (Adunay may kahulugang koneksyon sa tanang butang)",
                    optionB: "In focusing on what can be directly observed and measured (Sa pag-focus sa unsay mahimo nga direktang makita ug masukdan)",
                    themesA: ["Connectedness"],
                    themesB: ["Analytical"]
                },
                {
                    id: 27,
                    text: "I prefer: (Gusto ko:)",
                    optionA: "Deep, authentic relationships with a few people (Lawom, autentikong relasyon sa pipila ka tawo)",
                    optionB: "Meeting and connecting with many different people (Pagtagbog ug pagkonektar sa daghang lain-laing tawo)",
                    themesA: ["Relator"],
                    themesB: ["Woo"]
                },
                {
                    id: 28,
                    text: "I communicate most effectively: (Labaw ka epektibo ako makigkomunika:)",
                    optionA: "Through writing and careful preparation (Pinaagi sa pagsulat ug maayong pag-andam)",
                    optionB: "Through speaking and spontaneous expression (Pinaagi sa pagsulti ug spontaneo nga pagpahayag)",
                    themesA: ["Communication"],
                    themesB: ["Intellection"]
                },
                {
                    id: 29,
                    text: "I am comfortable with: (Komportable ako sa:)",
                    optionA: "Healthy disagreement and debate (Malinawong dili pagkasundu ug debate)",
                    optionB: "Avoiding conflict and maintaining harmony (Paglikay sa away ug pagpabilin sa harmony)",
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 30,
                    text: "I am most effective when: (Labaw ka epektibo ako kung:)",
                    optionA: "I can influence others' decisions (Makaimpluwensya ako sa desisyon sa uban)",
                    optionB: "I can support others' growth (Makasuporta ako sa pagtubo sa uban)",
                    themesA: ["Communication"],
                    themesB: ["Developer"]
                },
                {
                    id: 31,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Being consistent and fair in all situations (Pagka konsistente ug patas sa tanang sitwasyon)",
                    optionB: "Adapting my approach based on individual circumstances (Pag-akma sa akong pamaagi base sa indibidwal nga sitwasyon)",
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 32,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "External recognition and achievement (Eksternal nga pagkilala ug pag-abot)",
                    optionB: "Internal satisfaction and personal values (Internal nga kalipay ug personal nga mga bili)",
                    themesA: ["Significance"],
                    themesB: ["Belief"]
                },
                {
                    id: 33,
                    text: "I prefer to: (Gusto ko:)",
                    optionA: "Understand the historical context of situations (Masabtan ang historikal nga konteksto sa mga sitwasyon)",
                    optionB: "Focus on future possibilities and innovations (Focus sa mga posibilidad sa umaabot ug mga inobasyon)",
                    themesA: ["Context"],
                    themesB: ["Futuristic"]
                },
                {
                    id: 34,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Deep intellectual discussions and analysis (Lawom nga intelektwal nga diskusyon ug analisis)",
                    optionB: "Practical, hands-on problem solving (Praktikal, hands-on nga pag-solve sa problema)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 35,
                    text: "I: (Ako:)",
                    optionA: "Am confident in my own judgment and decisions (Komportable ako sa akong kaugalingong paghusay ug mga desisyon)",
                    optionB: "Prefer to get input from others before deciding (Gusto mokuha og input gikan sa uban sa wala magdesisyon)",
                    themesA: ["Self-Assurance"],
                    themesB: ["Harmony"]
                },
                {
                    id: 36,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Transforming something strong into something superb (Pagbalhin og usa ka bagay nga lig-on ngadto sa labing maayo)",
                    optionB: "Fixing problems and resolving issues (Pag-ayo sa mga problema ug pag-solve sa mga isyu)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 37,
                    text: "I believe in: (Nagtuo ako sa:)",
                    optionA: "Treating everyone the same according to established rules (Pagtratar sa tanan pareho base sa mga naestablisar nga lagda)",
                    optionB: "Treating each person as a unique individual (Pagtratar sa matag tawo isip lahi nga indibidwal)",
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 38,
                    text: "I am energized by: (Nakakuha ako og enerhiya gikan sa:)",
                    optionA: "Being around people and social interaction (Pagpuyo duol sa mga tawo ug sosyal nga interaksyon)",
                    optionB: "Quiet time for reflection and thinking (Hinay nga oras alang sa pagpahunahuna ug paghunahuna)",
                    themesA: ["Woo"],
                    themesB: ["Intellection"]
                },
                {
                    id: 39,
                    text: "I prefer to communicate: (Gusto ko makigkomunika:)",
                    optionA: "Directly and straightforwardly (Direkta ug straight)",
                    optionB: "Diplomatically and tactfully (Diplomatiko ug tactful)",
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 40,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "The challenge of winning (Ang hamog sa pagdaog)",
                    optionB: "The satisfaction of a job well done (Ang kalipay sa maayong gibuhat nga trabaho)",
                    themesA: ["Competition"],
                    themesB: ["Achiever"]
                }
            ]
        },
        {
            title: "Section 3: Decision Making & Problem Solving (Seksyon 3: Pagdesisyon ug Pag-solve sa Mga Problema)",
            questions: [
                {
                    id: 41,
                    text: "I make decisions based on: (Mogamit ako og desisyon base sa:)",
                    optionA: "Careful analysis of data (Maayong analisis sa datos)",
                    optionB: "Intuition and gut feelings (Intuwersyon ug gut feeling)",
                    themesA: ["Analytical"],
                    themesB: ["Intuition"]
                },
                {
                    id: 42,
                    text: "When deciding, I: (Sa pagdesisyon, ako:)",
                    optionA: "Consider multiple future possibilities (Isipon ang daghang posibilidad sa umaabot)",
                    optionB: "Focus on the most practical and immediate solution (Focus sa labing praktikal ug dayon nga solusyon)",
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 43,
                    text: "I prefer to: (Gusto ko:)",
                    optionA: "Make decisions quickly and move forward (Mogamit og desisyon nga paspas ug molihok)",
                    optionB: "Take time to consider all aspects before deciding (Mokuha og oras sa pagtan-aw sa tanang bahin sa wala magdesisyon)",
                    themesA: ["Activator"],
                    themesB: ["Deliberative"]
                },
                {
                    id: 44,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "What could go wrong and how to prevent it (Unsa ang mahimong sayop ug unsaon ika-prevent)",
                    optionB: "What could go right and how to achieve it (Unsa ang mahimong tuo ug unsaon maabut)",
                    themesA: ["Deliberative"],
                    themesB: ["Positivity"]
                },
                {
                    id: 45,
                    text: "I make decisions based on: (Mogamit ako og desisyon base sa:)",
                    optionA: "Established principles and values (Mga naestablisar nga prinsipyo ug mga bili)",
                    optionB: "Expected outcomes and results (Ginaasahan nga resulta ug sangputanan)",
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 46,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Creating innovative solutions to problems (Paghimo og inobatibong solusyon sa mga problema)",
                    optionB: "Implementing proven solutions to problems (Pagpatuman og na-probeng solusyon sa mga problema)",
                    themesA: ["Ideation"],
                    themesB: ["Restorative"]
                },
                {
                    id: 47,
                    text: "I approach problems by: (Nakig-uban ako sa mga problema pinaagi sa:)",
                    optionA: "Breaking them into logical components (Pagbuklag niini sa lohikal nga mga bahin)",
                    optionB: "Looking at the big picture first (Tan-aw una ang dako nga litrato)",
                    themesA: ["Analytical"],
                    themesB: ["Strategic"]
                },
                {
                    id: 48,
                    text: "I am most comfortable with: (Labaw ka komportable ako sa:)",
                    optionA: "Proven, reliable methods (Na-probe, masaligan nga mga pamaagi)",
                    optionB: "New, innovative approaches (Bag-ong, inobatibong pamaagi)",
                    themesA: ["Consistency"],
                    themesB: ["Ideation"]
                },
                {
                    id: 49,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Understanding why things happened (Pagkasabot nganit nganong nahitabo ang mga butang)",
                    optionB: "What to do next (Unsa ang buhaton sunod)",
                    themesA: ["Context"],
                    themesB: ["Activator"]
                },
                {
                    id: 50,
                    text: "I make decisions based on: (Mogamit ako og desisyon base sa:)",
                    optionA: "What is fair and consistent (Unsa ang patas ug konsistente)",
                    optionB: "What will work best in this specific situation (Unsa ang labing maandam niini nga espesipikong sitwasyon)",
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 51,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Theoretical concepts and abstract thinking (Teoretikal nga konsepto ug abstract nga paghunahuna)",
                    optionB: "Practical applications and concrete results (Praktikal nga aplikasyon ug konkretong resulta)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 52,
                    text: "I solve problems by: (Nagsolve ako og mga problema pinaagi sa:)",
                    optionA: "Considering past experiences and precedents (Pagtuo sa mga karaan nga kasinati ug mga precedent)",
                    optionB: "Imagining new possibilities (Pag-imaginar sa mga bag-ong posibilidad)",
                    themesA: ["Context"],
                    themesB: ["Ideation"]
                },
                {
                    id: 53,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "The process of solving problems (Ang proseso sa pag-solve sa mga problema)",
                    optionB: "Getting to the solution as quickly as possible (Pag-abot sa solusyon nga labing paspas)",
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 54,
                    text: "I make decisions based on: (Mogamit ako og desisyon base sa:)",
                    optionA: "Thorough research and information gathering (Maayong pagsalikway ug pagkuha og impormasyon)",
                    optionB: "My core beliefs and values (Akong mga pundasyon nga pagtuo ug mga bili)",
                    themesA: ["Input"],
                    themesB: ["Belief"]
                },
                {
                    id: 55,
                    text: "I approach problems: (Nakig-uban ako sa mga problema:)",
                    optionA: "Systematically and methodically (Sistematiko ug metodiko)",
                    optionB: "Intuitively and adaptably (Intuitibo ug adaptable)",
                    themesA: ["Analytical"],
                    themesB: ["Adaptability"]
                },
                {
                    id: 56,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Optimizing and improving existing solutions (Pag-optimize ug pagpalambo sa mga naa na solusyon)",
                    optionB: "Creating entirely new solutions (Paghimo og bag-ong solusyon)",
                    themesA: ["Maximizer"],
                    themesB: ["Ideation"]
                },
                {
                    id: 57,
                    text: "I make decisions based on: (Mogamit ako og desisyon base sa:)",
                    optionA: "Logical analysis (Lohikal nga analisis)",
                    optionB: "Impact on people (Epekto sa mga tawo)",
                    themesA: ["Analytical"],
                    themesB: ["Empathy"]
                },
                {
                    id: 58,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Complex problems that require deep analysis (Mga komplikadong problema nga nanginahanglan og lawom nga analisis)",
                    optionB: "Straightforward problems with clear solutions (Mga straight nga problema klarong solusyon)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 59,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "The long-term implications of decisions (Ang long-term nga implikasyon sa mga desisyon)",
                    optionB: "The immediate impact of decisions (Ang dayon nga epekto sa mga desisyon)",
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 60,
                    text: "I solve problems by: (Nagsolve ako og mga problema pinaagi sa:)",
                    optionA: "Drawing on my knowledge and expertise (Paggamit sa akong kahibalo ug ekspertis)",
                    optionB: "Learning new information and approaches (Pagkat-on og bag-ong impormasyon ug pamaagi)",
                    themesA: ["Input"],
                    themesB: ["Learner"]
                }
            ]
        },
        {
            title: "Section 4: Leadership & Influence (Seksyon 4: Pagpangulo ug Pagpaimpluwensya)",
            questions: [
                {
                    id: 61,
                    text: "I naturally: (Natural ko:)",
                    optionA: "Take charge of situations and direct others (Mokuha sa kontrol sa mga sitwasyon ug magdumala sa uban)",
                    optionB: "Prefer to support others and help them succeed (Gusto mosuporta sa uban ug tabangan sila nga malampuson)",
                    themesA: ["Command"],
                    themesB: ["Developer"]
                },
                {
                    id: 62,
                    text: "I am most effective when: (Labaw ka epektibo ako kung:)",
                    optionA: "I can persuade and inspire others (Makapahimo ako ug makapag-umay sa uban)",
                    optionB: "I can analyze and plan thoroughly (Maka-analisar ako ug magplano og maayo)",
                    themesA: ["Communication"],
                    themesB: ["Strategic"]
                },
                {
                    id: 63,
                    text: "I focus on achieving: (Nag-focus ako sa pag-abot sa:)",
                    optionA: "Recognition and significance (Pagkilala ug importansya)",
                    optionB: "Personal excellence and growth (Personal nga kaayuhan ug pagtubo)",
                    themesA: ["Significance"],
                    themesB: ["Maximizer"]
                },
                {
                    id: 64,
                    text: "I lead by: (Nanguna ako pinaagi sa:)",
                    optionA: "Building consensus and harmony (Pagtukod og konsenso ug harmony)",
                    optionB: "Making clear decisions and providing direction (Paghimo og klarong desisyon ug paghatag direksyon)",
                    themesA: ["Harmony"],
                    themesB: ["Command"]
                },
                {
                    id: 65,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "The challenge of influencing others (Ang hamog sa pagpaimpluwensya sa uban)",
                    optionB: "The satisfaction of achieving results (Ang kalipay sa pag-abot sa resulta)",
                    themesA: ["Woo"],
                    themesB: ["Achiever"]
                },
                {
                    id: 66,
                    text: "I communicate with: (Makigkomunika ako uban sa:)",
                    optionA: "Confidence and authority (Kompido ug awtoridad)",
                    optionB: "Empathy and understanding (Empati ug pagkasabot)",
                    themesA: ["Command"],
                    themesB: ["Empathy"]
                },
                {
                    id: 67,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Future possibilities and vision (Mga posibilidad sa umaabot ug pangitaa)",
                    optionB: "Practical implementation and execution (Praktikal nga pagpatuman ug pagpatuman)",
                    themesA: ["Futuristic"],
                    themesB: ["Focus"]
                },
                {
                    id: 68,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Competition and measuring myself against others (Pagkompetensya ug pagsukod sa akong kaugalingon batok sa uban)",
                    optionB: "Collaboration and team success (Pagtinabangay ug kalampusan sa team)",
                    themesA: ["Competition"],
                    themesB: ["Harmony"]
                },
                {
                    id: 69,
                    text: "I am comfortable with: (Komportable ako sa:)",
                    optionA: "Taking risks and making bold decisions (Paggamit og risgo ug paghimo og bolde nga desisyon)",
                    optionB: "Careful planning and calculated risks (Maayong pagplano ug kalkulado nga mga risgo)",
                    themesA: ["Self-Assurance"],
                    themesB: ["Deliberative"]
                },
                {
                    id: 70,
                    text: "I lead by: (Nanguna ako pinaagi sa:)",
                    optionA: "Inspiring others with enthusiasm (Pagpahimutang sa uban uban ang entusyamo)",
                    optionB: "Providing stability and consistency (Paghatag ug katibuk-ang ug konsistensya)",
                    themesA: ["Positivity"],
                    themesB: ["Discipline"]
                },
                {
                    id: 71,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Transforming good into great (Pagbalhin sa maayo ngadto sa bantugan)",
                    optionB: "Fixing what's wrong (Pag-ayo sa sayop)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 72,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "Making a significant impact (Paghimo og dako nga epekto)",
                    optionB: "Personal growth and development (Personal nga pagtubo ug paglambo)",
                    themesA: ["Significance"],
                    themesB: ["Learner"]
                },
                {
                    id: 73,
                    text: "I communicate most effectively through: (Labaw ka epektibo ako makigkomunika pinaagi sa:)",
                    optionA: "Inspiring presentations (Mga nakapahimutang nga presentasyon)",
                    optionB: "Thoughtful analysis (May pagtagad nga analisis)",
                    themesA: ["Communication"],
                    themesB: ["Analytical"]
                },
                {
                    id: 74,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Being in the spotlight and receiving recognition (Pagpuyo sa spotlight ug pagdawat og pagkilala)",
                    optionB: "Working behind the scenes and supporting others (Pagtrabaho sa likod ug pag-support sa uban)",
                    themesA: ["Significance"],
                    themesB: ["Responsibility"]
                },
                {
                    id: 75,
                    text: "I lead by: (Nanguna ako pinaagi sa:)",
                    optionA: "Challenging others to excel (Paghamog sa uban nga mag-eksil)",
                    optionB: "Developing others' potential (Pagpalambo sa potensyal sa uban)",
                    themesA: ["Maximizer"],
                    themesB: ["Developer"]
                },
                {
                    id: 76,
                    text: "I focus on being: (Nag-focus ako sa pagka:)",
                    optionA: "Innovative and forward-thinking (Inobatibo ug forward-thinking)",
                    optionB: "Reliable and consistent (Masaligan ug konsistente)",
                    themesA: ["Ideation"],
                    themesB: ["Consistency"]
                },
                {
                    id: 77,
                    text: "I am most effective when: (Labaw ka epektibo ako kung:)",
                    optionA: "I can take initiative and activate others (Makakuha ako og inisyatibo ug mag-activate sa uban)",
                    optionB: "I can provide stability and support (Makahatag ako ug katibuk-ang ug suporta)",
                    themesA: ["Activator"],
                    themesB: ["Responsibility"]
                },
                {
                    id: 78,
                    text: "I lead by: (Nanguna ako pinaagi sa:)",
                    optionA: "Creating excitement and momentum (Paghimo og kusog ug momentum)",
                    optionB: "Providing structure and clarity (Paghatag ug istruktura ug klaridad)",
                    themesA: ["Positivity"],
                    themesB: ["Discipline"]
                },
                {
                    id: 79,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Achieving ambitious goals and recognition (Pag-abot sa mga ambisyoso nga goal ug pagkilala)",
                    optionB: "Living according to my core values (Pagpuyo base sa akong mga pundasyon nga bili)",
                    themesA: ["Competition"],
                    themesB: ["Belief"]
                },
                {
                    id: 80,
                    text: "I am comfortable with: (Komportable ako sa:)",
                    optionA: "Confrontation and difficult conversations (Pag-atubang ug lisud nga mga panulti)",
                    optionB: "Maintaining harmony and avoiding confrontation (Pagpabilin sa harmony ug paglikay sa pag-atubang)",
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                }
            ]
        },
        {
            title: "Section 5: Personal Motivation & Growth (Seksyon 5: Personal nga Motibasyon ug Pagtubo)",
            questions: [
                {
                    id: 81,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "Learning new things and acquiring knowledge (Pagkat-on og mga bag-ong butang ug pagkuha og kahibalo)",
                    optionB: "Achieving tangible results and outcomes (Pag-abot sa mga konkretong resulta ug sangputanan)",
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 82,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Continuous improvement and excellence (Padayon nga pagpalambo ug kaayuhan)",
                    optionB: "Restoring things when they go wrong (Pagbalik sa mga butang kon maguba)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 83,
                    text: "I am energized by: (Nakakuha ako og enerhiya gikan sa:)",
                    optionA: "Thinking about the future and possibilities (Pag hunahuna sa umaabot ug mga posibilidad)",
                    optionB: "Dealing with present realities and challenges (Pagdeal sa kasamtangang realidad ug mga hamug)",
                    themesA: ["Futuristic"],
                    themesB: ["Activator"]
                },
                {
                    id: 84,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Collecting information and knowledge for its own sake (Pagkolekta og impormasyon ug kahibalo para sa kaugalingon niini)",
                    optionB: "Applying information to solve practical problems (Paggamit og impormasyon sa pag-solve sa praktikal nga mga problema)",
                    themesA: ["Input"],
                    themesB: ["Restorative"]
                },
                {
                    id: 85,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "External recognition and achievement (Eksternal nga pagkilala ug pag-abot)",
                    optionB: "Internal satisfaction and personal values (Internal nga kalipay ug personal nga mga bili)",
                    themesA: ["Significance"],
                    themesB: ["Belief"]
                },
                {
                    id: 86,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Developing my existing strengths (Pagpalambo sa akong naa na mga kusog)",
                    optionB: "Improving my areas of weakness (Pagpalambo sa akong mga lugar nga kuyaw)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 87,
                    text: "I am energized by: (Nakakuha ako og enerhiya gikan sa:)",
                    optionA: "Being around people and social interaction (Pagpuyo duol sa mga tawo ug sosyal nga interaksyon)",
                    optionB: "Quiet time for reflection and thinking (Hinay nga oras alang sa pagpahunahuna ug paghunahuna)",
                    themesA: ["Woo"],
                    themesB: ["Intellection"]
                },
                {
                    id: 88,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Theoretical concepts and abstract thinking (Teoretikal nga konsepto ug abstract nga paghunahuna)",
                    optionB: "Practical applications and concrete results (Praktikal nga aplikasyon ug konkretong resulta)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 89,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "Making a difference in the world (Paghimo og kalainan sa kalibutan)",
                    optionB: "Achieving personal success (Pag-abot sa personal nga kalampusan)",
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 90,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Understanding the historical context of situations (Pagkasabot sa historikal nga konteksto sa mga sitwasyon)",
                    optionB: "Future possibilities and innovations (Mga posibilidad sa umaabot ug mga inobasyon)",
                    themesA: ["Context"],
                    themesB: ["Futuristic"]
                },
                {
                    id: 91,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "The challenge of winning and competition (Ang hamog sa pagdaog ug kompetensya)",
                    optionB: "The satisfaction of a job well done (Ang kalipay sa maayong gibuhat nga trabaho)",
                    themesA: ["Competition"],
                    themesB: ["Achiever"]
                },
                {
                    id: 92,
                    text: "I enjoy: (Ganahan ako:)",
                    optionA: "Deep intellectual discussions and analysis (Lawom nga intelektwal nga diskusyon ug analisis)",
                    optionB: "Practical, hands-on problem solving (Praktikal, hands-on nga pag-solve sa problema)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 93,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "Personal growth and self-improvement (Personal nga pagtubo ug pagpalambo sa kaugalingon)",
                    optionB: "Achieving specific goals and outcomes (Pag-abot sa mga espesipikong goal ug sangputanan)",
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 94,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Transforming something strong into something superb (Pagbalhin og usa ka butang nga lig-on ngadto sa labing maayo)",
                    optionB: "Fixing problems and resolving issues (Pag-ayo sa mga problema ug pag-solve sa mga isyu)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 95,
                    text: "I am energized by: (Nakakuha ako og enerhiya gikan sa:)",
                    optionA: "Variety and new experiences (Variety ug bag-ong kasinati)",
                    optionB: "Routine and predictability (Rutina ug predictability)",
                    themesA: ["Adaptability"],
                    themesB: ["Discipline"]
                },
                {
                    id: 96,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "Being reliable and responsible (Pagka masaligan ug responsable)",
                    optionB: "Being significant and making an impact (Pagka importante ug paghimo og epekto)",
                    themesA: ["Responsibility"],
                    themesB: ["Significance"]
                },
                {
                    id: 97,
                    text: "I enjoy learning: (Ganahan ako magkat-on:)",
                    optionA: "For the joy of learning itself (Alang sa kalipay sa pagkat-on mismo)",
                    optionB: "To achieve specific goals (Para maabut ang mga espesipikong goal)",
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 98,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "Internal standards and values (Internal nga standard ug mga bili)",
                    optionB: "External validation and recognition (Eksternal nga balido ug pagkilala)",
                    themesA: ["Belief"],
                    themesB: ["Significance"]
                },
                {
                    id: 99,
                    text: "I focus on: (Nag-focus ako sa:)",
                    optionA: "Future possibilities and what could be (Mga posibilidad sa umaabot ug unsa mahimo)",
                    optionB: "Present realities and what is (Kasamtangang realidad ug unsa karon)",
                    themesA: ["Futuristic"],
                    themesB: ["Activator"]
                },
                {
                    id: 100,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "Personal freedom and independence (Personal nga kagawasan ug independensya)",
                    optionB: "Structure and clear expectations (Estruktura ug klarong mga ekspektasyon)",
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
        description: "People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive. (Ang mga tawo nga labaw ka talan-aw sa Achiever theme magtrabaho ug dili magsawa ug adunay daghang kusog. Nakuha nila ang dako nga kalipay sa pagka busy ug produktibo.)"
    },
    "Activator": {
        name: "Activator",
        domain: "Influencing",
        description: "People exceptionally talented in the Activator theme can make things happen by turning thoughts into action. They want to do things now, rather than simply talk about them. (Ang mga tawo nga labaw ka talan-aw sa Activator theme makahimo mga butang pinaagi sa pagbalhin sa mga hunahuna sa aksyon. Gusto nila buhaton ang mga butang karon, dili lang maghisgot niini.)"
    },
    "Adaptability": {
        name: "Adaptability",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Adaptability theme prefer to go with the flow. They tend to be 'now' people who take things as they come and discover the future one day at a time. (Ang mga tawo nga labaw ka talan-aw sa Adaptability theme gusto mosunod sa agos. Sila kasagaran mga 'karon' nga tawo nga kuhaon ang mga butang samtang nangabut ug makit-an ang umaabot usa ka adlaw sa usa ka panahon.)"
    },
    "Analytical": {
        name: "Analytical",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Analytical theme search for reasons and causes. They have the ability to think about all of the factors that might affect a situation. (Ang mga tawo nga labaw ka talan-aw sa Analytical theme nagpangita ug rason ug hinungdan. Aduna silay abilidad sa paghunahuna sa tanang mga sangkap nga mahimong makaapekto sa usa ka sitwasyon.)"
    },
    "Arranger": {
        name: "Arranger",
        domain: "Executing",
        description: "People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to determine how all of the pieces and resources can be arranged for maximum productivity. (Ang mga tawo nga labaw ka talan-aw sa Arranger theme makahimo og organize, apan aduna usab silay flexibility nga makapakompleto niini nga abilidad. Gusto nila makita kung unsaon pag-organisa ang tanang mga piraso ug recursos alang sa maximum nga produktibidad.)"
    },
    "Belief": {
        name: "Belief",
        domain: "Executing",
        description: "People exceptionally talented in the Belief theme have certain core values that are unchanging. Out of these values emerges a defined purpose for their lives. (Ang mga tawo nga labaw ka talan-aw sa Belief theme adunay mga pundasyon nga bili nga dili magbag-o. Gikan niini nga mga bili, moabot ang klarong katuyoan sa ilang kinabuhi.)"
    },
    "Command": {
        name: "Command",
        domain: "Influencing",
        description: "People exceptionally talented in the Command theme have presence. They can take control of a situation and make decisions. (Ang mga tawo nga labaw ka talan-aw sa Command theme adunay presensya. Makakuha sila sa kontrol sa usa ka sitwasyon ug makahimo og desisyon.)"
    },
    "Communication": {
        name: "Communication",
        domain: "Influencing",
        description: "People exceptionally talented in the Communication theme generally find it easy to put their thoughts into words. They are good conversationalists and presenters. (Ang mga tawo nga labaw ka talan-aw sa Communication theme kasagaran makita nga dali ipahayag ang ilang mga hunahuna pinaagi sa mga pulong. Maayo sila magkomunikar ug mag-presentar.)"
    },
    "Competition": {
        name: "Competition",
        domain: "Influencing",
        description: "People exceptionally talented in the Competition theme measure their progress against the performance of others. They strive to win first place and revel in contests. (Ang mga tawo nga labaw ka talan-aw sa Competition theme nagsukod sa ilang pag-uswag batok sa performance sa uban. Nagpuyo sila nga manguna ug ganahan sa mga kompetensya.)"
    },
    "Connectedness": {
        name: "Connectedness",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Connectedness theme have faith in the links among all things. They believe there are few coincidences and that almost every event has meaning. (Ang mga tawo nga labaw ka talan-aw sa Connectedness theme adunay pagtuo sa mga koneksyon sa tanang butang. Nagtuo sila nga gamay ra ang mga koincidensya nga halos tanang panghitabo adunay kahulugan.)"
    },
    "Consistency": {
        name: "Consistency",
        domain: "Executing",
        description: "People exceptionally talented in the Consistency theme are keenly aware of the need to treat people the same. They crave stable routines and clear rules and procedures that everyone can follow. (Ang mga tawo nga labaw ka talan-aw sa Consistency theme labaw ka mahibalo sa panginahanglan nga pagtratar sa tanan nga tawo pareho. Gusto nila ang mga establdong rutina ug klarong mga lagda ug proseso nga tanan makasunod.)"
    },
    "Context": {
        name: "Context",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Context theme enjoy thinking about the past. They understand the present by researching its history. (Ang mga tawo nga labaw ka talan-aw sa Context theme ganahan maghunahuna sa karaan. Masabtan nila ang kasamtangan pinaagi sa pag-study sa kasaysayan niini.)"
    },
    "Deliberative": {
        name: "Deliberative",
        domain: "Executing",
        description: "People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate obstacles. (Ang mga tawo nga labaw ka talan-aw sa Deliberative theme labing mailarom sa seryoso nga pagtagad nga ilang gihatag sa paghimo og desisyon o mga pagpili. Nag-antisipar sila sa mga hadlang.)"
    },
    "Developer": {
        name: "Developer",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Developer theme recognize and cultivate the potential in others. They spot the signs of each small improvement and derive satisfaction from evidence of progress. (Ang mga tawo nga labaw ka talan-aw sa Developer theme makakita ug mapalambo ang potensyal sa uban. Makakita sila sa mga senyas sa matag gamay nga paglambo ug nakuha nila ang kalipay gikan sa ebidensya sa pag-uswag.)"
    },
    "Discipline": {
        name: "Discipline",
        domain: "Executing",
        description: "People exceptionally talented in the Discipline theme enjoy routine and structure. Their world is best described by the order they create. (Ang mga tawo nga labaw ka talan-aw sa Discipline theme ganahan sa rutina ug istruktura. Ang ilang kalibutan labing mailarom sa pagka-ordo nga ilang gibuhat.)"
    },
    "Empathy": {
        name: "Empathy",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Empathy theme can sense other people's feelings by imagining themselves in others' lives or situations. (Ang mga tawo nga labaw ka talan-aw sa Empathy theme makabati sa gibati sa uban pinaagi sa pag-imaginar sa ilang kaugalingon sa kinabuhi o sitwasyon sa uban.)"
    },
    "Focus": {
        name: "Focus",
        domain: "Executing",
        description: "People exceptionally talented in the Focus theme can take a direction, follow through and make the corrections necessary to stay on track. They prioritize, then act. (Ang mga tawo nga labaw ka talan-aw sa Focus theme makakuha og direksyon, mosunod ug maghimo sa mga koreksyon nga kinahanglan aron magpadayon. Nagprioritize sila unya modagan.)"
    },
    "Futuristic": {
        name: "Futuristic",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Futuristic theme are inspired by the future and what could be. They energize others with their visions of the future. (Ang mga tawo nga labaw ka talan-aw sa Futuristic theme napaandar sa umaabot ug unsa mahimo. Nagpahatag sila og enerhiya sa uban pinaagi sa ilang pangitaa sa umaabot.)"
    },
    "Harmony": {
        name: "Harmony",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Harmony theme look for consensus. They don't enjoy conflict; rather, they seek areas of agreement. (Ang mga tawo nga labaw ka talan-aw sa Harmony theme nagpangita og konsenso. Dili sila ganahan sa away; hinuon, nagpangita sila sa mga lugar nga maoy pagkasundu.)"
    },
    "Ideation": {
        name: "Ideation",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena. (Ang mga tawo nga labaw ka talan-aw sa Ideation theme nahibulong sa mga ideya. Makakita sila og koneksyon sa mga sangputanan nga wala magkuyap.)"
    },
    "Includer": {
        name: "Includer",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Includer theme accept others. They show awareness of those who feel left out and make an effort to include them. (Ang mga tawo nga labaw ka talan-aw sa Includer theme modawat sa uban. Nagpakita sila kahibalo sa mga tawo nga nakabati nga gipabayaan ug mosuporta sa paglakip kanila.)"
    },
    "Individualization": {
        name: "Individualization",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Individualization theme are intrigued with the unique qualities of each person. They have a gift for figuring out how different people can work together productively. (Ang mga tawo nga labaw ka talan-aw sa Individualization theme nahibulong sa mga lahi nga kalidad sa matag tawo. Aduna silay regalo sa pag-ila kung unsaon pagtrabaho ang lain-laing tawo nga magtinabangay nga produktibo.)"
    },
    "Input": {
        name: "Input",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Input theme have a need to collect and archive. They may accumulate information, ideas, artifacts or even relationships. (Ang mga tawo nga labaw ka talan-aw sa Input theme adunay panginahanglan sa pagkolekta ug pag-arkibo. Makakolekta sila og impormasyon, mga ideya, mga artifact o bisan mga relasyon.)"
    },
    "Intellection": {
        name: "Intellection",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Intellection theme are characterized by their intellectual activity. They are introspective and appreciate intellectual discussions. (Ang mga tawo nga labaw ka talan-aw sa Intellection theme nailhan pinaagi sa ilang intelektwal nga aktibidad. Introspektibo sila ug ganahan sa intelektwal nga mga diskusyon.)"
    },
    "Learner": {
        name: "Learner",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve. The process of learning, rather than the outcome, excites them. (Ang mga tawo nga labaw ka talan-aw sa Learner theme adunay dako nga kagustohan sa pagkat-on ug gusto nga padayon nga mapalambo. Ang proseso sa pagkat-on, dili ang resulta, ang nagpahinumdom kanila.)"
    },
    "Maximizer": {
        name: "Maximizer",
        domain: "Influencing",
        description: "People exceptionally talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence. They seek to transform something strong into something superb. (Ang mga tawo nga labaw ka talan-aw sa Maximizer theme nag-focus sa mga kusog isip paagi sa pagpahinumdom sa personal ug grupo nga kaayuhan. Nagpangita sila sa pagbalhin og usa ka butang nga lig-on ngadto sa labing maayo.)"
    },
    "Positivity": {
        name: "Positivity",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Positivity theme have contagious enthusiasm. They are upbeat and can get others excited about what they are going to do. (Ang mga tawo nga labaw ka talan-aw sa Positivity theme adunay makahawak nga entusyamo. Positibo sila ug makapahimo og uban nga maexcite sa ilang giplanong buhaton.)"
    },
    "Relator": {
        name: "Relator",
        domain: "Relationship Building",
        description: "People exceptionally talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal. (Ang mga tawo nga labaw ka talan-aw sa Relator theme ganahan sa duol nga relasyon sa uban. Nakakita sila og lawom nga kalipay sa pagtrabaho og dili uban sa mga higala aron maabut ang usa ka goal.)"
    },
    "Responsibility": {
        name: "Responsibility",
        domain: "Executing",
        description: "People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty. (Ang mga tawo nga labaw ka talan-aw sa Responsibility theme kuhaon ang psychological ownership sa ilang gisulti nga buhaton. Sila nangandam sa mga establdong bili sama sa pagkatinuod ug pagka-loyal.)"
    },
    "Restorative": {
        name: "Restorative",
        domain: "Executing",
        description: "People exceptionally talented in the Restorative theme are adept at dealing with problems. They are good at figuring out what is wrong and resolving it. (Ang mga tawo nga labaw ka talan-aw sa Restorative theme maayo sa pagdeal sa mga problema. Maayo sila sa pag-ila sa sayop ug pag-solve niini.)"
    },
    "Self-Assurance": {
        name: "Self-Assurance",
        domain: "Influencing",
        description: "People exceptionally talented in the Self-Assurance theme feel confident in their ability to take risks and manage their own lives. They have an inner compass that gives them certainty in their decisions. (Ang mga tawo nga labaw ka talan-aw sa Self-Assurance theme komportado sa ilang abilidad sa pagkuha og risgo ug pagdumala sa ilang kaugalingong kinabuhi. Aduna silay inner compass nga naghatag kanila og siguroha sa ilang mga desisyon.)"
    },
    "Significance": {
        name: "Significance",
        domain: "Influencing",
        description: "People exceptionally talented in the Significance theme want to make a big impact. They are independent and prioritize projects based on how much influence they will have on their organization or people around them. (Ang mga tawo nga labaw ka talan-aw sa Significance theme gusto makahimo og dako nga epekto. Independente sila ug nagprioritize og mga proyekto base sa unsa kadako ang impluwensya nga mahimo nila sa ilang organisasyon o mga tawo sa palibot nila.)"
    },
    "Strategic": {
        name: "Strategic",
        domain: "Strategic Thinking",
        description: "People exceptionally talented in the Strategic theme create alternative ways to proceed. Faced with any given scenario, they can quickly spot the relevant patterns and issues. (Ang mga tawo nga labaw ka talan-aw sa Strategic theme makahimo og alternatibong paagi sa pagpadayon. Atubangan sa bisan unsang scenario, makakita sila dayon sa mga may kalabotang pattern ug mga isyu.)"
    },
    "Woo": {
        name: "Woo",
        domain: "Influencing",
        description: "People exceptionally talented in the Woo theme love the challenge of meeting new people and winning them over. They derive satisfaction from breaking the ice and making a connection with someone. (Ang mga tawo nga labaw ka talan-aw sa Woo theme ganahan sa hamog sa pagtagbog og bag-ong tawo ug pagdaog kanila. Nakuha nila ang kalipay sa pag-break sa ice ug pagkonektar sa usa ka tawo.)"
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
        // Move to first question of next section
        currentSection++;
        currentQuestion = 0;
    } else {
        // Assessment complete
        showResults();
        return;
    }
    
    loadQuestion();
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        // Move to previous question in current section
        currentQuestion--;
    } else if (currentSection > 0) {
        // Move to last question of previous section
        currentSection--;
        currentQuestion = assessmentData.sections[currentSection].questions.length - 1;
    } else {
        // Already at first question
        return;
    }
    
    loadQuestion();
}

// Show assessment results
function showResults() {
    document.getElementById('assessment').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    
    // Sort themes by score
    const sortedThemes = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5); // Top 5 themes
    
    // Display results
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
    
    sortedThemes.forEach(([themeName, score]) => {
        const theme = themes[themeName];
        const percentage = (score / 20) * 100; // Assuming max 20 points per theme
        
        resultsContainer.innerHTML += `
            <div class="result-item">
                <div class="result-header">
                    <h3>${theme.name}</h3>
                    <span class="result-domain">${theme.domain}</span>
                </div>
                <div class="result-description">${theme.description}</div>
                <div class="result-score">
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span class="score-text">${score}/20</span>
                </div>
            </div>
        `;
    });
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