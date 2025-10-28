// Assessment questions and theme mapping
const assessmentData = {
    sections: [
        {
            title: "Section 1: Work Approach & Productivity (Seksyon 1: Pamaagi sa Paggahugma ug Produktibidad)",
            questions: [
                {
                    id: 1,
                    text: "I am most energized when: (Pinaka ganado ko kung:)",
                    optionA: "I can complete multiple tasks and check them off my list (Makakumpleto ko ug daghan nga buluhaton ug ma tsek nako sa akong listahan)",
                    optionB: "I can think deeply about complex problems and solutions ((Maka huna huna ko ug maayo sa mga komplikado nga problema ug solusyon)",
                    themesA: ["Achiever"],
                    themesB: ["Strategic", "Analytical"]
                },
                {
                    id: 2,
                    text: "I prefer to: (Mas ganahan ko:)",
                    optionA: "Start projects immediately and make adjustments as I go (Magsugod dayon ug mga proyekto og mag adjust nalang samtang naga padayon)",
                    optionB: "Thoroughly plan all aspects before beginning a project (Planuhon og tarong ang tanan sa wala pa nagsugod ang proyekto)",
                    themesA: ["Activator"],
                    themesB: ["Focus", "Discipline"]
                },
                {
                    id: 3,
                    text: "I adapt easily to: (Dali ra ko maka-angay sa:)",
                    optionA: "Changing priorities and can shift direction quickly (Pag-usab sa mga prayoridad ug dali nga makabalhin sa direksyon)",
                    optionB: "Stable routines and clear expectations that don't change frequently (Klaro nga mga rutina nga gilauman nga dili kanunay mausab)",
                    themesA: ["Adaptability"],
                    themesB: ["Consistency", "Discipline"]
                },
                {
                    id: 4,
                    text: "When making decisions, I focus on: (Kung mag himo ko og desisyon, mas naga pokus ko sa:)",
                    optionA: "Analyzing data and evidence (Pagsabot sa mga datos ug ebidensya)",
                    optionB: "Maintaining harmony and consensus (Pagpabilin sa pagkahiusa ug pagsinabtanay)",
                    themesA: ["Analytical"],
                    themesB: ["Harmony"]
                },
                {
                    id: 5,
                    text: "I enjoy: (Malingaw ko:)",
                    optionA: "Organizing complex projects with many moving parts (Pagplastar og mga komplikado nga proyekto nga daghan og mga kinahanglan lihokon)",
                    optionB: "Focusing intensely on one task until it's completed perfectly (Magtutok sa isa lang ka trabahuon hangtod mahuman nga walay mali)",
                    themesA: ["Arranger"],
                    themesB: ["Focus"]
                },
                {
                    id: 6,
                    text: "I am driven by: (Gipalihok ko sa:)",
                    optionA: "My core values and sense of purpose (Ang akong kinauyokan nga mga mithi ug pagbati sa katuyoan)",
                    optionB: "Achieving specific goals and measurable results (Pagkab-ot sa mga tumong ug masukod nga mga resulta)",
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 7,
                    text: "I: (Ako:)",
                    optionA: "Carefully consider all possible risks before making decisions (Pagtan-aw og maayo sa tanang posible nga risgo sa wala pa mohimo og desisyon)",
                    optionB: "Am comfortable making quick decisions with limited information (Komportable ko maghimo ug desisyon bisan limitado ra akong nahibal-an)",
                    themesA: ["Deliberative"],
                    themesB: ["Activator"]
                },
                {
                    id: 8,
                    text: "I prefer to work: (Mas ganahan ko magtrabaho nga:)",
                    optionA: "Independently with minimal interruptions (Ako ra isa nga gamay ra ang distorbo)",
                    optionB: "Collaboratively with frequent interaction (Naay mga kauban nga permi nay interaksyon)",
                    themesA: ["Focus", "Intellection"],
                    themesB: ["Relator", "Harmony"]
                },
                {
                    id: 9,
                    text: "I am energized by: (Ganahan ko nga:)",
                    optionA: "Learning new information and concepts (Magkat-on ug bag-ong impormasyon ug konsepto)",
                    optionB: "Achieving tangible results and outcomes (Pag-abot sa klaro ug makita nga mga resulta)",
                    themesA: ["Learner", "Input"],
                    themesB: ["Achiever"]
                },
                {
                    id: 10,
                    text: "I enjoy: (Malingaw ko:)",
                    optionA: "Meeting new people and building a broad network (Pag-ila ug mga bag-ong tao para sa mas daghan nga koneksyon)",
                    optionB: "Developing deep, meaningful relationships with fewer people (Pagpalambo og lawom, may kahulugang relasyon sa pipila lang ka tawo)",
                    themesA: ["Woo"],
                    themesB: ["Relator"]
                },
                {
                    id: 11,
                    text: "I am most effective when: (Pinaka epektibo ko kung:)",
                    optionA: "I can persuade others to my point of view (Makadani ko ug laing tao sa akong gituohan)",
                    optionB: "I can find common ground and avoid conflict (Makakita ko ug pareho ug pagtoo aron walay panagbangi)",
                    themesA: ["Communication", "Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 12,
                    text: "I focus on: (Naga pokus ako sa:)",
                    optionA: "Future possibilities and what could be (Mga posibilidad sa umaabot ug unsay pwede pa mahitabo))",
                    optionB: "Present realities and what is (Sa tinuod nga kahimtang karon ug unsay naa karon)",
                    themesA: ["Futuristic", "Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 13,
                    text: "I am motivated by: (Mas nadasig ako sa:)",
                    optionA: "Competition and being the best (Kompetisyon ug mahimong pinaka maayo sa tanan)",
                    optionB: "Collaboration and team success (Panaghiusa ug kalampusan sa grupo)",
                    themesA: ["Competition"],
                    themesB: ["Harmony"]
                },
                {
                    id: 14,
                    text: "I prefer to communicate with: (Mas ganahan ko mosulti uban sa:)",
                    optionA: "Confidence and authority (Pagsalig ug awtoridad)",
                    optionB: "Empathy and understanding (Empatiya ug pagsabot)",
                    themesA: ["Command", "Self-Assurance"],
                    themesB: ["Empathy"]
                },
                {
                    id: 15,
                    text: "I enjoy: (Malingaw ako sa:)",
                    optionA: "Collecting information and knowledge for its own sake (Pagkolekta ug impormasyon ug kahibalo bisan alang lang sa kahibalo mismo)",
                    optionB: "Applying information to solve practical problems (Pag-gamit sa impormasyon aron masulbad ang praktikal nga problema)",
                    themesA: ["Input"],
                    themesB: ["Restorative"]
                },
                {
                    id: 16,
                    text: "I am comfortable: (Komportable ko sa :)",
                    optionA: "Taking charge and directing others (Kung ako ang manguna ug mag-dumala sa uban)",
                    optionB: "Supporting others and helping them succeed (Kung ako ang mosuporta sa uban ug motabang nga sila molampos)",
                    themesA: ["Command"],
                    themesB: ["Developer"]
                },
                {
                    id: 17,
                    text: "I focus on: (Naga tutok ako sa:)",
                    optionA: "Continuous improvement and excellence (Padayon nga paglambo ug pagkamaayo)",
                    optionB: "Restoring things when they go wrong (Pag-ayo sa mga butang kung nay masayop)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 18,
                    text: "I am motivated by: (Madasig ako sa:)",
                    optionA: "Making a significant impact (Pagbuhat ug dako nga epekto)",
                    optionB: "Personal growth and development (Personal nga pagtubo ug paglambo)",
                    themesA: ["Significance"],
                    themesB: ["Learner"]
                },
                {
                    id: 19,
                    text: "I prefer to work with: (Mas ganahan ko magtrabaho gamit ang:)",
                    optionA: "Proven, reliable methods (Mga napamatud-an ug kasaligan nga pamaagi)",
                    optionB: "Innovate and try new approaches (Pag bag-o ug pagsulay sa mga bag-ong mga pamaagi)",
                    themesA: ["Consistency"],
                    themesB: ["Ideation"]
                },
                {
                    id: 20,
                    text: "I am energized by: (Napuno kog kusog sa:)",
                    optionA: "Thinking about complex ideas and concepts (Pagpanghunahuna bahin sa komplikado nga mga ideya ug konsepto)",
                    optionB: "Taking action and getting things done (Paglihok ug pagkahuman dayon sa mga buluhaton)",
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
                    text: "I can easily: (Dali ra sa ako ang:)",
                    optionA: "Sense what others are feeling and thinking (Pagbati unsay gibati ug gihunahuna sa uban)",
                    optionB: "Focus on logical solutions rather than emotions (Pagpokus sa lohikal nga solusyon kaysa emosyon))",
                    themesA: ["Empathy"],
                    themesB: ["Analytical"]
                },
                {
                    id: 22,
                    text: "In group settings, I: (Kung naa sa grupo, ako:)",
                    optionA: "Ensure everyone feels included and valued (Siguraduhon nga ang tanan mobati nga apil ug gihatagan bili)",
                    optionB: "Focus on achieving group objectives efficiently (Magpokus sa pagkab-ot sa tumong sa grupo sa labing epektibo nga paagi)",
                    themesA: ["Includer"],
                    themesB: ["Focus"]
                },
                {
                    id: 23,
                    text: "I am fascinated by: (Mahibulong ako:)",
                    optionA: "What makes each person unique (Kung unsa ang nakapahimo nga lahi ang matag usa ka tawo)",
                    optionB: "How people can work together effectively (Kung giunsa pagtinabangay sa mga tawo aron mahimong epektibo)",
                    themesA: ["Individualization"],
                    themesB: ["Arranger"]
                },
                {
                    id: 24,
                    text: "I bring to group interactions: (Gidala ko sa mga interaksyon sa grupo:)",
                    optionA: "Optimism and enthusiasm (Pagkamalaumon ug kadasig)",
                    optionB: "Realistic assessment and practical thinking (Tinud-anay nga pagsusi ug praktikal nga panghunahuna)",
                    themesA: ["Positivity"],
                    themesB: ["Analytical"]
                },
                {
                    id: 25,
                    text: "I enjoy: (Malipay ko:)",
                    optionA: "Helping others recognize and develop their potential (Pagtabang sa uban nga maila ug mapalambo ang ilang potensyal)",
                    optionB: "Focusing on my own growth and development (Pagpokus sa akong kaugalingong pagtubo ug paglambo)",
                    themesA: ["Developer"],
                    themesB: ["Learner"]
                },
                {
                    id: 26,
                    text: "I believe: (Nagtoo ko:)",
                    optionA: "There are meaningful connections between all things (Nga adunay mga hinungdanong koneksyon ang tanang butang)",
                    optionB: "In focusing on what can be directly observed and measured (Sa pagpokus sa mga butang nga makita ug masukod diretso)",
                    themesA: ["Connectedness"],
                    themesB: ["Analytical"]
                },
                {
                    id: 27,
                    text: "I prefer: (Mas ganahan ko:)",
                    optionA: "Deep, authentic relationships with a few people (Lawom ug tinuod nga relasyon uban sa pipila ka tao)",
                    optionB: "Meeting and connecting with many different people (Pagtagbog ug pagkonektar sa daghang lain-laing tawo)",
                    themesA: ["Relator"],
                    themesB: ["Woo"]
                },
                {
                    id: 28,
                    text: "I communicate most effectively: (Pinaka-epektibo ko makigsulti pinaagi sa:)",
                    optionA: "Through writing and careful preparation (Pinaagi sa pagsulat ug maampingong pagpangandam)",
                    optionB: "Through speaking and spontaneous expression (Pinaagi sa pagsulti ug pinakalit nga ekspresyon)",
                    themesA: ["Communication"],
                    themesB: ["Intellection"]
                },
                {
                    id: 29,
                    text: "I am comfortable with: (Komportable ko sa:)",
                    optionA: "Healthy disagreement and debate (Himsog nga panaglantugi ug debate)",
                    optionB: "Avoiding conflict and maintaining harmony (Paglikay sa panagbangi ug pagpabilin sa panaghiusa)",
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 30,
                    text: "I am most effective when: (Pinaka epektibo ko kung:)",
                    optionA: "I can influence others' decisions (Kung makaimpluwensya ko sa mga desisyon sa uban)",
                    optionB: "I can support others' growth (Kung masuportahan nako ang pagtubo sa uban)",
                    themesA: ["Communication"],
                    themesB: ["Developer"]
                },
                {
                    id: 31,
                    text: "I focus on: (Ako nagapokus sa:)",
                    optionA: "Being consistent and fair in all situations (Pagpabilin nga patas ug pareho sa tanang sitwasyon)",
                    optionB: "Adapting my approach based on individual circumstances (Pag-angay sa akong paagi base sa indibidwal nga sitwasyon)",
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 32,
                    text: "I am motivated by: (Mas nadasig ako sa:)",
                    optionA: "External recognition and achievement (Pag-ila gikan sa ubang mga tao ug kalampusan)",
                    optionB: "Internal satisfaction and personal values (Internal nga katagbawan ug personal nga prinsipyo)",
                    themesA: ["Significance"],
                    themesB: ["Belief"]
                },
                {
                    id: 33,
                    text: "I prefer to: (Mas ganahan ko:)",
                    optionA: "Understand the historical context of situations (Masabtan ang kasaysayan nga konteksto sa sitwasyon)",
                    optionB: "Focus on future possibilities and innovations (Magpokus sa umaabot nga posibilidad ug kabag-ohan)",
                    themesA: ["Context"],
                    themesB: ["Futuristic"]
                },
                {
                    id: 34,
                    text: "I enjoy: (Malingaw ako:)",
                    optionA: "Deep intellectual discussions and analysis (Lawom nga intelektwal nga diskusyon ug pagsususi)",
                    optionB: "Practical, hands-on problem solving (Praktika ug l nga pag-solbar sa problema)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 35,
                    text: "I: (Ako:)",
                    optionA: "Am confident in my own judgment and decisions (KKompyansa sa akong kaugalingong paghukom ug mga desisyon)",
                    optionB: "Prefer to get input from others before deciding (Mas ganahan nga makadungog sa opinyon sa uban una magdesisyonn)",
                    themesA: ["Self-Assurance"],
                    themesB: ["Harmony"]
                },
                {
                    id: 36,
                    text: "I focus on: (Naga pokus ako sa:)",
                    optionA: "Transforming something strong into something superb (Pagbag-o sa maayo nga butang aron mahimong labaw pa ka maayo)",
                    optionB: "Fixing problems and resolving issues (Pag-ayo sa mga problema ug pagresolba sa mga isyu)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 37,
                    text: "I believe in: (Nagtoo ko sa:)",
                    optionA: "Treating everyone the same according to established rules (Pagtratar sa tanan nga parehas sumala sa natukod nga mga balaod)",
                    optionB: "Treating each person as a unique individual (Pagtratar sa matag usa isip lahi ug talagsaon nga indibidwal)",
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 38,
                    text: "I am energized by: (Nakakuha ako og enerhiya gikan sa:)",
                    optionA: "Being around people and social interaction (Kung naa ko sa palibot sa mga tawo ug sosyal nga interaksyon)",
                    optionB: "Quiet time for reflection and thinking (Kung adunay hilom nga oras alang sa pagpamalandong ug pagpanghunahuna)",
                    themesA: ["Woo"],
                    themesB: ["Intellection"]
                },
                {
                    id: 39,
                    text: "I prefer to communicate: (Gusto ko makigkomunika:)",
                    optionA: "Directly and straightforwardly (Direkta ug klaro)",
                    optionB: "Diplomatically and tactfully (Diplomatiko ug maampingon)",
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 40,
                    text: "I am motivated by: (Gipamotibo ako sa:)",
                    optionA: "The challenge of winning (Ang hagit sa pagdaog)",
                    optionB: "The satisfaction of a job well done (Ang kalipay kung nindot ang resulta sa trabaho)",
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
                    text: "I make decisions based on: (Nagahimo ako ug desisyon base sa:)",
                    optionA: "Careful analysis of data (Maampingong pagsususi sa datos)",
                    optionB: "Intuition and gut feelings (Intuwisyon ug pagbati)",
                    themesA: ["Analytical"],
                    themesB: ["Intuition"]
                },
                {
                    id: 42,
                    text: "When deciding, I: (Kung magdesisyon, ako:)",
                    optionA: "Consider multiple future possibilities (Ginahuna huna ang daghan nga posibleng mahitabo)",
                    optionB: "Focus on the most practical and immediate solution (Magpokus sa pinakapratikal ug dali nga solusyon)",
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 43,
                    text: "I prefer to: (Mas ganahan ko nga:)",
                    optionA: "Make decisions quickly and move forward (Magdesisyon ug dali ug mopadayon dayon)",
                    optionB: "Take time to consider all aspects before deciding (Maghatag ug panahon sa pagtan-aw sa tanang bahin una magdesisyon))",
                    themesA: ["Activator"],
                    themesB: ["Deliberative"]
                },
                {
                    id: 44,
                    text: "I focus on: (Naga pokus ako sa:)",
                    optionA: "What could go wrong and how to prevent it (Unsay mahimong masayop ug unsaon kini pagpugong)",
                    optionB: "What could go right and how to achieve it (Unsay mahimong maayo ug unsaon kini pagkab-ot)",
                    themesA: ["Deliberative"],
                    themesB: ["Positivity"]
                },
                {
                    id: 45,
                    text: "I make decisions based on: (Nagahimo ako ug desisyon base sa:)",
                    optionA: "Established principles and values (Mga prinsipyo ug mithi nga gisunod)",
                    optionB: "Expected outcomes and results (Mga resulta ug mga gipaabot nga kalampusan)",
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 46,
                    text: "I enjoy: (Malingaw ako sa:)",
                    optionA: "Creating innovative solutions to problems (Pagbuhat ug bag-ong solusyon sa problema)",
                    optionB: "Implementing proven solutions to problems (Pag-implementar sa napamatud-an nga solusyon sa problema)",
                    themesA: ["Ideation"],
                    themesB: ["Restorative"]
                },
                {
                    id: 47,
                    text: "I approach problems by: (Gina atubang nako ang problema pinaagi sa:)",
                    optionA: "Breaking them into logical components (Pagbahinbahin niini sa lohikal nga mga bahin)",
                    optionB: "Looking at the big picture first (Pagtan-aw una sa tibuok nga hulagway sa problema)",
                    themesA: ["Analytical"],
                    themesB: ["Strategic"]
                },
                {
                    id: 48,
                    text: "I am most comfortable with: (Pinaka komportable ako sa:)",
                    optionA: "Proven, reliable methods (Napamatud-an ug kasaligan nga mga pamaagi)",
                    optionB: "New, innovative approaches (Bag-ong ug inobatibo nga mga paagi)",
                    themesA: ["Consistency"],
                    themesB: ["Ideation"]
                },
                {
                    id: 49,
                    text: "I focus on: (Naga pokus ako sa:)",
                    optionA: "Understanding why things happened (Pagsabot nganong nahitabo ang mga butang)",
                    optionB: "What to do next (Kung unsay buhaton sunod)",
                    themesA: ["Context"],
                    themesB: ["Activator"]
                },
                {
                    id: 50,
                    text: "I make decisions based on: (Nagahimo ako ug desisyon base sa:)",
                    optionA: "What is fair and consistent (Kung unsay patas ug makanunayon)",
                    optionB: "What will work best in this specific situation (Kung unsay labing maayo alang sa maong sitwasyon)",
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 51,
                    text: "I enjoy: (Malingaw ako sa:)",
                    optionA: "Theoretical concepts and abstract thinking (Teoretikal nga konsepto ug abstrak nga paghunahuna)",
                    optionB: "Practical applications and concrete results (Praktikal nga aplikasyon ug konkreto nga resulta)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 52,
                    text: "I solve problems by: (Gina sulbad nako ang problema pinaagi sa:)",
                    optionA: "Considering past experiences and precedents (Pagtagad sa kasinatian sa nangagi ug mga kasinatian nga kapareha)",
                    optionB: "Imagining new possibilities (Paghuna huna ug bag-ong posibilidad)",
                    themesA: ["Context"],
                    themesB: ["Ideation"]
                },
                {
                    id: 53,
                    text: "I focus on: (Naga pokus ako sa:)",
                    optionA: "The process of solving problems (Ang proseso sa pagsulbad sa problema)",
                    optionB: "Getting to the solution as quickly as possible (Pag-abot dayon sa solusyon sa labing dali nga paagi)",
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 54,
                    text: "I make decisions based on: (Nagahimo ako ug desisyon base sa:)",
                    optionA: "Thorough research and information gathering (Kompletong research ug pagtipon sa impormasyon)",
                    optionB: "My core beliefs and values (Akong kinauyokan nga mga prinsipyo ug bili)",
                    themesA: ["Input"],
                    themesB: ["Belief"]
                },
                {
                    id: 55,
                    text: "I approach problems: (Gina atubang nako ang problema pinaagi sa:)",
                    optionA: "Systematically and methodically (Sa sistematiko ug metodikal nga paagi)",
                    optionB: "Intuitively and adaptably (Sa intuwitibo ug adaptableng paagi)",
                    themesA: ["Analytical"],
                    themesB: ["Adaptability"]
                },
                {
                    id: 56,
                    text: "I focus on: (Naga pokus ako sa:)",
                    optionA: "Optimizing and improving existing solutions (Pagpaayo ug pagpalambo sa kasamtangan nga solusyon)",
                    optionB: "Creating entirely new solutions (Pagmugna ug bag-ong solusyon)",
                    themesA: ["Maximizer"],
                    themesB: ["Ideation"]
                },
                {
                    id: 57,
                    text: "I make decisions based on: (Nagahimo ako ug desisyon base sa:)",
                    optionA: "Logical analysis (Lohikal nga pagsususi)",
                    optionB: "Impact on people (Epekto niini sa mga tawo)",
                    themesA: ["Analytical"],
                    themesB: ["Empathy"]
                },
                {
                    id: 58,
                    text: "I enjoy: (Malipay ko sa:)",
                    optionA: "Complex problems that require deep analysis (Komplikado nga problema nga nanginahanglan ug lalom nga pagsususi)",
                    optionB: "Straightforward problems with clear solutions (Diretsong problema nga adunay klaro nga solusyon)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 59,
                    text: "I focus on: (Naga pokus ako sa:)",
                    optionA: "The long-term implications of decisions (Mga umaabot epekto sa desisyon)",
                    optionB: "The immediate impact of decisions (Mga diretsong epekto sa desisyon)",
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 60,
                    text: "I solve problems by: (Gina sulbad nako ang problema pinaagi sa:)",
                    optionA: "Drawing on my knowledge and expertise (Pagkuha gikan sa akong kahibalo ug eksperyensya))",
                    optionB: "Learning new information and approaches (Pagkat-on ug bag-ong impormasyon ug mga paagi)",
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
                    text: "I naturally: (Natural ko nga:)",
                    optionA: "Take charge of situations and direct others (Manguna sa mga sitwasyon ug mag-giya sa uban)",
                    optionB: "Prefer to support others and help them succeed (Mas ganahan kong mosuporta sa uban ug motabang aron sila makab-ot og kalampusan)",
                    themesA: ["Command"],
                    themesB: ["Developer"]
                },
                {
                    id: 62,
                    text: "I am most effective when: (Mas epektibo ko kung:)",
                    optionA: "I can persuade and inspire others (Makadani ug makapadasig ko sa uban)",
                    optionB: "I can analyze and plan thoroughly (Makaanalisar ug makaplano ko og maayo)",
                    themesA: ["Communication"],
                    themesB: ["Strategic"]
                },
                {
                    id: 63,
                    text: "I focus on achieving: (Nagapokus ko sa pag-abot sa:)",
                    optionA: "Recognition and significance (Pag-ila ug paghatag bili)",
                    optionB: "Personal excellence and growth (Personal nga kahanas ug pagtubo)",
                    themesA: ["Significance"],
                    themesB: ["Maximizer"]
                },
                {
                    id: 64,
                    text: "I lead by: (Nanguna ko pinaagi sa:)",
                    optionA: "Building consensus and harmony (Pagtukod og panaghiusa ug kalinaw)",
                    optionB: "Making clear decisions and providing direction (Paghimo og klarong desisyon ug paghatag og giya)",
                    themesA: ["Harmony"],
                    themesB: ["Command"]
                },
                {
                    id: 65,
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "The challenge of influencing others (Ang hagit sa pag-impluwensya sa uban)",
                    optionB: "The satisfaction of achieving results (Ang kalipay sa pagkab-ot sa mga resulta)",
                    themesA: ["Woo"],
                    themesB: ["Achiever"]
                },
                {
                    id: 66,
                    text: "I communicate with: (Makigkomunikar ko uban sa:)",
                    optionA: "Confidence and authority (Kompiyansa ug awtoridad)",
                    optionB: "Empathy and understanding (Pagpakig-ambit ug pagsabot)",
                    themesA: ["Command"],
                    themesB: ["Empathy"]
                },
                {
                    id: 67,
                    text: "I focus on: (Nagapokus ko sa:)",
                    optionA: "Future possibilities and vision (Mga posibilidad sa umaabot ug panan-aw)",
                    optionB: "Practical implementation and execution (Praktikal nga pagpatuman ug paglihok)",
                    themesA: ["Futuristic"],
                    themesB: ["Focus"]
                },
                {
                    id: 68,
                    text: "I enjoy: (Nalipay ko sa:)",
                    optionA: "Competition and measuring myself against others (Pagkompetensya ug pagtandi sa akong kaugalingon sa uban)",
                    optionB: "Collaboration and team success (Pagtinabangay ug kalampusan sa grupo)",
                    themesA: ["Competition"],
                    themesB: ["Harmony"]
                },
                {
                    id: 69,
                    text: "I am comfortable with: (Komportable ko sa:)",
                    optionA: "Taking risks and making bold decisions (Pagdawat og risgo ug paghimo og maisugon nga mga desisyon)",
                    optionB: "Careful planning and calculated risks (Maampingong pagplano ug maayong pagtimang sa risgo)",
                    themesA: ["Self-Assurance"],
                    themesB: ["Deliberative"]
                },
                {
                    id: 70,
                    text: "I lead by: (Nanguna ko pinaagi sa:)",
                    optionA: "Inspiring others with enthusiasm (Pagpahimutang sa uban nga nay kadasig)",
                    optionB: "Providing stability and consistency (Paghatag ug kalig-on ug pagkamakanunayon)",
                    themesA: ["Positivity"],
                    themesB: ["Discipline"]
                },
                {
                    id: 71,
                    text: "I focus on: (Nagpokus ko sa:)",
                    optionA: "Transforming good into great (Pagbalhin sa maayo ngadto sa bantugan)",
                    optionB: "Fixing what's wrong (Pag-ayo sa sayop)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 72,
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "Making a significant impact (Paghimo og dako nga epekto)",
                    optionB: "Personal growth and development (Personal nga pagtubo ug paglambo)",
                    themesA: ["Significance"],
                    themesB: ["Learner"]
                },
                {
                    id: 73,
                    text: "I communicate most effectively through: (Labaw ka epektibo ako makigstorya pinaagi sa:)",
                    optionA: "Inspiring presentations (Makapadasig nga mga presentasyon)",
                    optionB: "Thoughtful analysis (Mahunahunaon nga pagtuki)",
                    themesA: ["Communication"],
                    themesB: ["Analytical"]
                },
                {
                    id: 74,
                    text: "I enjoy: (Nalipay ko sa:)",
                    optionA: "Being in the spotlight and receiving recognition (Naa sa spotlight ug nakadawat og pag-ila)",
                    optionB: "Working behind the scenes and supporting others (Pagtrabaho sa luyo sa mga talan-awon ug pagsuporta sa uban)",
                    themesA: ["Significance"],
                    themesB: ["Responsibility"]
                },
                {
                    id: 75,
                    text: "I lead by: (Nanguna ko pinaagi sa:)",
                    optionA: "Challenging others to excel (Paghagit sa uban nga molampos)",
                    optionB: "Developing others' potential (Pagpalambo sa potensyal sa uban)",
                    themesA: ["Maximizer"],
                    themesB: ["Developer"]
                },
                {
                    id: 76,
                    text: "I focus on being: (Nag-focus ako sa pagka:)",
                    optionA: "Innovative and forward-thinking (Makabag-o ug paghuna huna sa umaabot)",
                    optionB: "Reliable and consistent (kasaligan ug makanunayon)",
                    themesA: ["Ideation"],
                    themesB: ["Consistency"]
                },
                {
                    id: 77,
                    text: "I am most effective when: (Pinaka epektibo ko kung:)",
                    optionA: "I can take initiative and activate others (Makahimo kog inisyatibo ug makapaaktibo sa uban)",
                    optionB: "I can provide stability and support (Makahatag ako og kalig-on ug suporta)",
                    themesA: ["Activator"],
                    themesB: ["Responsibility"]
                },
                {
                    id: 78,
                    text: "I lead by: (Nanguna ko pinaagi sa:)",
                    optionA: "Creating excitement and momentum (Pagmugna og kahinam ug momentum)",
                    optionB: "Providing structure and clarity (Paghatag istruktura ug katin-aw)",
                    themesA: ["Positivity"],
                    themesB: ["Discipline"]
                },
                {
                    id: 79,
                    text: "I focus on: (Nagpokus ko sa:)",
                    optionA: "Achieving ambitious goals and recognition (Pagkab-ot sa dinagko nga mga tumong ug pag-ila)",
                    optionB: "Living according to my core values (Pagkinabuhi sumala sa akong kinauyokan nga mga mithi)",
                    themesA: ["Competition"],
                    themesB: ["Belief"]
                },
                {
                    id: 80,
                    text: "I am comfortable with: (Komportable ko sa:)",
                    optionA: "Confrontation and difficult conversations (Ang komprontasyon ug lisud nga mga panag-istoryahanay)",
                    optionB: "Maintaining harmony and avoiding confrontation (Pagmintinar sa panag-uyon ug paglikay sa komprontasyon)",
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
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "Learning new things and acquiring knowledge (Pagkat-on og mga bag-ong butang ug pagkuha og kahibalo)",
                    optionB: "Achieving tangible results and outcomes (Pagkab-ot sa klaro ug makita nga mga resulta)",
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 82,
                    text: "I focus on: (NNagpasiugda ko sa:)",
                    optionA: "Continuous improvement and excellence (Padayon nga pagpalambo ug kaayuhan)",
                    optionB: "Restoring things when they go wrong (Pagbalik sa mga butang kung maguba)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 83,
                    text: "I am energized by: (Nakabaton ko ug kusog pinaagi sa:)",
                    optionA: "Thinking about the future and possibilities (Pag hunahuna sa umaabot ug mga posibilidad)",
                    optionB: "Dealing with present realities and challenges (Pag-atubang ug pagdumala sa kasamtangang mga sitwasyon ug mga hagit)",
                    themesA: ["Futuristic"],
                    themesB: ["Activator"]
                },
                {
                    id: 84,
                    text: "I enjoy: (Nalipay ko sa:)",
                    optionA: "Collecting information and knowledge for its own sake (Pagpangita ug impormasyon ug kahibalo alang sa akong kaugalingong interes ug paglambo)",
                    optionB: "Applying information to solve practical problems (Paggamit sa akong kahibalo aron masulbad ang tinuod nga mga problema)",
                    themesA: ["Input"],
                    themesB: ["Restorative"]
                },
                {
                    id: 85,
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "External recognition and achievement (Pag-ila ug pagdayeg gikan sa uban tungod sa akong mga kalampusan)",
                    optionB: "Internal satisfaction and personal values (Kalipay ug katagbawan nga naggikan sa akong kaugalingong mga prinsipyo ug bili)",
                    themesA: ["Significance"],
                    themesB: ["Belief"]
                },
                {
                    id: 86,
                    text: "I focus on: (Nagpasiugda ko sa:)",
                    optionA: "Developing my existing strengths (Pagpalig-on ug pagpalambo sa akong mga abilidad ug kusog)",
                    optionB: "Improving my areas of weakness (Pagpauswag sa mga aspeto nga gusto pa nako mapalambo)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 87,
                    text: "I am energized by: (Nakabaton ko ug kusog pinaagi sa:)",
                    optionA: "Being around people and social interaction (Pagpakiguban ug pakig-istorya sa mga tawo)",
                    optionB: "Quiet time for reflection and thinking (Hilum nga panahon alang sa pagpamalandong ug paghunahuna)",
                    themesA: ["Woo"],
                    themesB: ["Intellection"]
                },
                {
                    id: 88,
                    text: "I enjoy: (Nalipay ko sa:)",
                    optionA: "Theoretical concepts and abstract thinking (Pagdiskobre ug paghunahuna sa mga konsepto ug ideyang lawom ug abstrak)",
                    optionB: "Practical applications and concrete results (Praktikal nga aplikasyon ug konkretong resulta)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 89,
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "Making a difference in the world (Pagpahimo ug kausaban o positibong epekto sa kalibutan)",
                    optionB: "Achieving personal success (Pagkab-ot sa akong kaugalingong kalampusan)",
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 90,
                    text: "I focus on: (Nagpasiugda ko sa:)",
                    optionA: "Understanding the historical context of situations (Pagtuon sa kasaysayan ug kahimtang aron masabtan ang sitwasyon)",
                    optionB: "Future possibilities and innovations (Paglantaw sa mga umaabot nga oportunidad ug kabag-ohan)",
                    themesA: ["Context"],
                    themesB: ["Futuristic"]
                },
                {
                    id: 91,
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "The challenge of winning and competition (Ang hagit sa pagdaog ug pagpanguna sa kompetisyon))",
                    optionB: "The satisfaction of a job well done (Ang kalipay ug katagbawan nga makuha sa maayong pagkahimo sa trabaho)",
                    themesA: ["Competition"],
                    themesB: ["Achiever"]
                },
                {
                    id: 92,
                    text: "I enjoy: (Nalipay ko sa:)",
                    optionA: "Deep intellectual discussions and analysis (Lalum ug makapadasig nga panaghisgot ug pag-analisar)",
                    optionB: "Practical, hands-on problem solving (Direktang pagtrabaho sa pagsulbad sa mga problema)",
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 93,
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "Personal growth and self-improvement (Paglambo sa kaugalingon ug pagpalambo sa akong abilidad))",
                    optionB: "Achieving specific goals and outcomes (Pagkab-ot sa tinuyo ug klarong mga tumong)",
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 94,
                    text: "I focus on: (Nagpasiugda ko sa:)",
                    optionA: "Transforming something strong into something superb (Pagpauswag sa usa ka maayo nga butang aron mahimong labing maayo)",
                    optionB: "Fixing problems and resolving issues (Pag-ayo ug pagsulbad sa mga problema ug isyu)",
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 95,
                    text: "I am energized by: (Nakabaton ko ug kusog pinaagi sa:)",
                    optionA: "Variety and new experiences (bag-ong mga kasinatian ug kalainlain nga buhaton)",
                    optionB: "Routine and predictability (Pagtrabaho sa naandan ug klarong sistema)",
                    themesA: ["Adaptability"],
                    themesB: ["Discipline"]
                },
                {
                    id: 96,
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "Being reliable and responsible (Pagpakita nga kasaligan ug responsable sa akong mga buhat)",
                    optionB: "Being significant and making an impact (Pagkahinungdanon ug paghatag ug positibong epekto sa uban)",
                    themesA: ["Responsibility"],
                    themesB: ["Significance"]
                },
                {
                    id: 97,
                    text: "I enjoy learning: (Ganahan ako magkat-on:)",
                    optionA: "For the joy of learning itself (Tungod sa kalipay nga akong makuha sa proseso sa pagkat-on mismo))",
                    optionB: "To achieve specific goals (Aron makab-ot ang mga tumong nga akong gituyo)",
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 98,
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "Internal standards and values (Kaugalingong prinsipyo ug bili nga nagagiya sa akong mga desisyon)",
                    optionB: "External validation and recognition (Pagdayeg ug pag-ila gikan sa uban)",
                    themesA: ["Belief"],
                    themesB: ["Significance"]
                },
                {
                    id: 99,
                    text: "I focus on: (Nagpasiugda ko sa:)",
                    optionA: "Future possibilities and what could be (Paglantaw sa mga posibilidad ug kahigayunan sa umaabot)",
                    optionB: "Present realities and what is (Pag-atubang sa tinuod ug kasamtangang kahimtang)",
                    themesA: ["Futuristic"],
                    themesB: ["Activator"]
                },
                {
                    id: 100,
                    text: "I am motivated by: (Gipadasig ko sa:)",
                    optionA: "Personal freedom and independence (Pagkinabuhi nga gawasnon ug adunay kaugalingong pagpili)",
                    optionB: "Structure and clear expectations (Organisado ug klarong direksyon o giya sa buhat)",
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
