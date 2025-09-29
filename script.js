// Assessment data with English and Bisaya translations
const assessmentData = {
    sections: [
        {
            title: {
                english: "Section 1: Work Approach & Productivity",
                bisaya: "Bahin 1: Pamaagi sa Pagtrabaho ug Pagkatagbaw"
            },
            questions: [
                {
                    id: 1,
                    text: {
                        english: "I am most energized when:",
                        bisaya: "Nalingawaw ako labing unya kon:"
                    },
                    optionA: {
                        english: "I can complete multiple tasks and check them off my list",
                        bisaya: "Makakompleto ako daghang mga buluhaton ug ma-tick kini sa akong lista"
                    },
                    optionB: {
                        english: "I can think deeply about complex problems and solutions",
                        bisaya: "Makahuna-huna ako og lawom bahin sa komplikadong mga problema ug solusyon"
                    },
                    themesA: ["Achiever"],
                    themesB: ["Strategic", "Analytical"]
                },
                {
                    id: 2,
                    text: {
                        english: "I prefer to:",
                        bisaya: "Ganahan ko nga:"
                    },
                    optionA: {
                        english: "Start projects immediately and make adjustments as I go",
                        bisaya: "Magsugod dayon sa mga proyekto ug mag-adjust samtang nagpadayon"
                    },
                    optionB: {
                        english: "Thoroughly plan all aspects before beginning a project",
                        bisaya: "Magplano og maayo sa tanang bahin sa wala pa mag sugod sa proyekto"
                    },
                    themesA: ["Activator"],
                    themesB: ["Focus", "Discipline"]
                },
                {
                    id: 3,
                    text: {
                        english: "I adapt easily to:",
                        bisaya: "Dali kong makasabay sa:"
                    },
                    optionA: {
                        english: "Changing priorities and can shift direction quickly",
                        bisaya: "Mga nagbag-ong priyoridad ug makabalhin dayon og direksyon"
                    },
                    optionB: {
                        english: "Stable routines and clear expectations that don't change frequently",
                        bisaya: "Mga establidong rutina ug klarong mga ekspektasyon nga dili madalihan magbag-o"
                    },
                    themesA: ["Adaptability"],
                    themesB: ["Consistency", "Discipline"]
                },
                {
                    id: 4,
                    text: {
                        english: "When making decisions, I focus on:",
                        bisaya: "Kung magbuhat og desisyon, ako nag-focus sa:"
                    },
                    optionA: {
                        english: "Analyzing data and evidence",
                        bisaya: "Pag-analisar sa datos ug ebidensya"
                    },
                    optionB: {
                        english: "Maintaining harmony and consensus",
                        bisaya: "Pagmantinir sa harmoniya ug konsenso"
                    },
                    themesA: ["Analytical"],
                    themesB: ["Harmony"]
                },
                {
                    id: 5,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Organizing complex projects with many moving parts",
                        bisaya: "Pag-organizar sa komplikadong mga proyekto nga daghang bahin nga nagalihok"
                    },
                    optionB: {
                        english: "Focusing intensely on one task until it's completed perfectly",
                        bisaya: "Pag-focus og intensibo sa usa ka buluhaton hangtod mahuman kini nga perpekto"
                    },
                    themesA: ["Arranger"],
                    themesB: ["Focus"]
                },
                {
                    id: 6,
                    text: {
                        english: "I am driven by:",
                        bisaya: "Gipadako ko sa:"
                    },
                    optionA: {
                        english: "My core values and sense of purpose",
                        bisaya: "Akong mga bugtong kinauyokan ug kahulugan sa pangarap"
                    },
                    optionB: {
                        english: "Achieving specific goals and measurable results",
                        bisaya: "Pag-abut sa mga ispesipikong goal ug masukod nga mga resulta"
                    },
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 7,
                    text: {
                        english: "I:",
                        bisaya: "Ako:"
                    },
                    optionA: {
                        english: "Carefully consider all possible risks before making decisions",
                        bisaya: "Dili gayud masusi ang tanang posibleng risgo sa wala pa magbuhat og desisyon"
                    },
                    optionB: {
                        english: "Am comfortable making quick decisions with limited information",
                        bisaya: "Komportable ko sa pagbuhat og desisyon nga dali bisan limitado ang impormasyon"
                    },
                    themesA: ["Deliberative"],
                    themesB: ["Activator"]
                },
                {
                    id: 8,
                    text: {
                        english: "I prefer to work:",
                        bisaya: "Ganahan ko magtrabaho:"
                    },
                    optionA: {
                        english: "Independently with minimal interruptions",
                        bisaya: "Nag-independente gamay nga pagka-disturb"
                    },
                    optionB: {
                        english: "Collaboratively with frequent interaction",
                        bisaya: "Nagkolaborar nga daghang interaksyon"
                    },
                    themesA: ["Focus", "Intellection"],
                    themesB: ["Relator", "Harmony"]
                },
                {
                    id: 9,
                    text: {
                        english: "I am energized by:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Learning new information and concepts",
                        bisaya: "Pagkat-on og bag-ong impormasyon ug mga konsepto"
                    },
                    optionB: {
                        english: "Achieving tangible results and outcomes",
                        bisaya: "Pag-abut sa mga concrete nga resulta ug outcome"
                    },
                    themesA: ["Learner", "Input"],
                    themesB: ["Achiever"]
                },
                {
                    id: 10,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Meeting new people and building a broad network",
                        bisaya: "Pagkita og bag-ong mga tawo ug pagtukod og lapad nga network"
                    },
                    optionB: {
                        english: "Developing deep, meaningful relationships with fewer people",
                        bisaya: "Pag-uswag og lawom, may kahulugan nga relasyon sa pipila ka mga tawo"
                    },
                    themesA: ["Woo"],
                    themesB: ["Relator"]
                },
                {
                    id: 11,
                    text: {
                        english: "I am most effective when:",
                        bisaya: "Labing epektibo ako kon:"
                    },
                    optionA: {
                        english: "I can persuade others to my point of view",
                        bisaya: "Makapahimo kog pagsuporta sa mga tawo sa akong punto de vista"
                    },
                    optionB: {
                        english: "I can find common ground and avoid conflict",
                        bisaya: "Makakitag komun nga yuta ug likayan ang komplikasyon"
                    },
                    themesA: ["Communication", "Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 12,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Future possibilities and what could be",
                        bisaya: "Mga posibleng kaugmaon ug ang mahitabo"
                    },
                    optionB: {
                        english: "Present realities and what is",
                        bisaya: "Kasamtangan nga realidad ug ang nag-unya"
                    },
                    themesA: ["Futuristic", "Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 13,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "Competition and being the best",
                        bisaya: "Kompetisyon ug pagka-maayo"
                    },
                    optionB: {
                        english: "Collaboration and team success",
                        bisaya: "Kolaborasyon ug kalampusan sa team"
                    },
                    themesA: ["Competition"],
                    themesB: ["Harmony"]
                },
                {
                    id: 14,
                    text: {
                        english: "I prefer to communicate with:",
                        bisaya: "Ganahan ko magkomunika uban:"
                    },
                    optionA: {
                        english: "Confidence and authority",
                        bisaya: "Kompido ug awtoridad"
                    },
                    optionB: {
                        english: "Empathy and understanding",
                        bisaya: "Empatiya pag-intindi"
                    },
                    themesA: ["Command", "Self-Assurance"],
                    themesB: ["Empathy"]
                },
                {
                    id: 15,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Collecting information and knowledge for its own sake",
                        bisaya: "Pag kolekta og impormasyon ug kahibalo para niini ra"
                    },
                    optionB: {
                        english: "Applying information to solve practical problems",
                        bisaya: "Paggamit og impormasyon sa pag-solve sa praktikal nga mga problema"
                    },
                    themesA: ["Input"],
                    themesB: ["Restorative"]
                },
                {
                    id: 16,
                    text: {
                        english: "I am comfortable:",
                        bisaya: "Komportable ako sa:"
                    },
                    optionA: {
                        english: "Taking charge and directing others",
                        bisaya: "Pangandam ug pagdumala sa mga tawo"
                    },
                    optionB: {
                        english: "Supporting others and helping them succeed",
                        bisaya: "Pag-suporta sa mga tawo ug pagtabang nila nga magmalampuson"
                    },
                    themesA: ["Command"],
                    themesB: ["Developer"]
                },
                {
                    id: 17,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Continuous improvement and excellence",
                        bisaya: "Padayon nga pagpauswag ug kaekselensya"
                    },
                    optionB: {
                        english: "Restoring things when they go wrong",
                        bisaya: "Pagbalik sa mga butang kon maguba na"
                    },
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 18,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "Making a significant impact",
                        bisaya: "Pagbuhat og signipikante nga epekto"
                    },
                    optionB: {
                        english: "Personal growth and development",
                        bisaya: "Personal nga pagtubo ug pag-uswag"
                    },
                    themesA: ["Significance"],
                    themesB: ["Learner"]
                },
                {
                    id: 19,
                    text: {
                        english: "I prefer to work with:",
                        bisaya: "Ganayan ko magtrabaho uban:"
                    },
                    optionA: {
                        english: "Proven, reliable methods",
                        bisaya: "Mga na-proban, masaligan nga pamaagi"
                    },
                    optionB: {
                        english: "Innovate and try new approaches",
                        bisaya: "Pag-inobar ug pagsulay sa bag-ong pamaagi"
                    },
                    themesA: ["Consistency"],
                    themesB: ["Ideation"]
                },
                {
                    id: 20,
                    text: {
                        english: "I am energized by:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Thinking about complex ideas and concepts",
                        bisaya: "Pag hunahuna sa komplikadong mga ideya ug konsepto"
                    },
                    optionB: {
                        english: "Taking action and getting things done",
                        bisaya: "Pagbuhat og aksyon ug paghuman sa mga butang"
                    },
                    themesA: ["Intellection"],
                    themesB: ["Activator"]
                }
            ]
        },
        {
            title: {
                english: "Section 2: Interpersonal Relationships",
                bisaya: "Bahin 2: Mga Relasyon sa Tawo"
            },
            questions: [
                {
                    id: 21,
                    text: {
                        english: "I can easily:",
                        bisaya: "Dali kong makabuhat sa:"
                    },
                    optionA: {
                        english: "Sense what others are feeling and thinking",
                        bisaya: "Makabati sa gibati ug gipanghunahuna sa mga tawo"
                    },
                    optionB: {
                        english: "Focus on logical solutions rather than emotions",
                        bisaya: "Focus sa lohikal nga solusyon dili sa emosyon"
                    },
                    themesA: ["Empathy"],
                    themesB: ["Analytical"]
                },
                {
                    id: 22,
                    text: {
                        english: "In group settings, I:",
                        bisaya: "Sa mga grupo, ako:"
                    },
                    optionA: {
                        english: "Ensure everyone feels included and valued",
                        bisaya: "Siguraduhon nga tanan nakabati nga apil ug bilihan og bili"
                    },
                    optionB: {
                        english: "Focus on achieving group objectives efficiently",
                        bisaya: "Focus sa pag-abut sa mga grupo nga obhetibo nga episyente"
                    },
                    themesA: ["Includer"],
                    themesB: ["Focus"]
                },
                {
                    id: 23,
                    text: {
                        english: "I am fascinated by:",
                        bisaya: "Nagpalihok ko sa:"
                    },
                    optionA: {
                        english: "What makes each person unique",
                        bisaya: "Ang nagpala-unique sa matag tawo"
                    },
                    optionB: {
                        english: "How people can work together effectively",
                        bisaya: "Unsaon sa mga tawo nga magtrabaho nga epektibo"
                    },
                    themesA: ["Individualization"],
                    themesB: ["Arranger"]
                },
                {
                    id: 24,
                    text: {
                        english: "I bring to group interactions:",
                        bisaya: "Gidala ko sa mga interaksyon sa grupo:"
                    },
                    optionA: {
                        english: "Optimism and enthusiasm",
                        bisaya: "Optimismo ug entusiasmo"
                    },
                    optionB: {
                        english: "Realistic assessment and practical thinking",
                        bisaya: "Realistik nga pag-assess ug praktikal nga paghunahuna"
                    },
                    themesA: ["Positivity"],
                    themesB: ["Analytical"]
                },
                {
                    id: 25,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Helping others recognize and develop their potential",
                        bisaya: "Pagtabang sa mga tawo nga makakita ug mag-uswag sa ilang potensyal"
                    },
                    optionB: {
                        english: "Focusing on my own growth and development",
                        bisaya: "Pag-focus sa akong kaugalingong pagtubo ug pag-uswag"
                    },
                    themesA: ["Developer"],
                    themesB: ["Learner"]
                },
                {
                    id: 26,
                    text: {
                        english: "I believe:",
                        bisaya: "Tuo ko nga:"
                    },
                    optionA: {
                        english: "There are meaningful connections between all things",
                        bisaya: "Adunay may kahulugang koneksyon sa tanang butang"
                    },
                    optionB: {
                        english: "In focusing on what can be directly observed and measured",
                        bisaya: "Sa pag-focus sa mga mahimo nga direktang tan-awon ug masukdon"
                    },
                    themesA: ["Connectedness"],
                    themesB: ["Analytical"]
                },
                {
                    id: 27,
                    text: {
                        english: "I prefer:",
                        bisaya: "Ganahan ko sa:"
                    },
                    optionA: {
                        english: "Deep, authentic relationships with a few people",
                        bisaya: "Lawom, autentik nga relasyon sa pipila ka mga tawo"
                    },
                    optionB: {
                        english: "Meeting and connecting with many different people",
                        bisaya: "Pagkita ug pagkonektar sa daghang lain-laing mga tawo"
                    },
                    themesA: ["Relator"],
                    themesB: ["Woo"]
                },
                {
                    id: 28,
                    text: {
                        english: "I communicate most effectively:",
                        bisaya: "Labing epektibo ako makomunika:"
                    },
                    optionA: {
                        english: "Through writing and careful preparation",
                        bisaya: "Pinaagi sa pagsulat ug maayong pag-andam"
                    },
                    optionB: {
                        english: "Through speaking and spontaneous expression",
                        bisaya: "Pinaagi sa pagsulti ug spontaneus nga pagpahayag"
                    },
                    themesA: ["Communication"],
                    themesB: ["Intellection"]
                },
                {
                    id: 29,
                    text: {
                        english: "I am comfortable with:",
                        bisaya: "Komportable ko sa:"
                    },
                    optionA: {
                        english: "Healthy disagreement and debate",
                        bisaya: "Malinawong pagkasayon ug debate"
                    },
                    optionB: {
                        english: "Avoiding conflict and maintaining harmony",
                        bisaya: "Paglikay sa komplikasyon ug pagmantinir sa harmoniya"
                    },
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 30,
                    text: {
                        english: "I am most effective when:",
                        bisaya: "Labing epektibo ako kon:"
                    },
                    optionA: {
                        english: "I can influence others' decisions",
                        bisaya: "Maka-ako sa mga desisyon sa mga tawo"
                    },
                    optionB: {
                        english: "I can support others' growth",
                        bisaya: "Makasuporta sa pagtubo sa mga tawo"
                    },
                    themesA: ["Communication"],
                    themesB: ["Developer"]
                },
                {
                    id: 31,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Being consistent and fair in all situations",
                        bisaya: "Pagka-konsistente ug patas sa tanang sitwasyon"
                    },
                    optionB: {
                        english: "Adapting my approach based on individual circumstances",
                        bisaya: "Pag-akoma sa akong pamaagi base sa indibidwal nga sitwasyon"
                    },
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 32,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "External recognition and achievement",
                        bisaya: "Panlabas nga pag-ila ug nakab-ot"
                    },
                    optionB: {
                        english: "Internal satisfaction and personal values",
                        bisaya: "Panlaing nga katagbawan ug personal nga mga bili"
                    },
                    themesA: ["Significance"],
                    themesB: ["Belief"]
                },
                {
                    id: 33,
                    text: {
                        english: "I prefer to:",
                        bisaya: "Ganahan ko sa:"
                    },
                    optionA: {
                        english: "Understand the historical context of situations",
                        bisaya: "Pag-intindi sa historikal nga konteksto sa mga sitwasyon"
                    },
                    optionB: {
                        english: "Focus on future possibilities and innovations",
                        bisaya: "Pag-focus sa mga posibleng kaugmaon ug inobasyon"
                    },
                    themesA: ["Context"],
                    themesB: ["Futuristic"]
                },
                {
                    id: 34,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Deep intellectual discussions and analysis",
                        bisaya: "Lawom nga intelektwal nga mga diskusyon ug analisis"
                    },
                    optionB: {
                        english: "Practical, hands-on problem solving",
                        bisaya: "Praktikal, hands-on nga pag-solve sa mga problema"
                    },
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 35,
                    text: {
                        english: "I:",
                        bisaya: "Ako:"
                    },
                    optionA: {
                        english: "Am confident in my own judgment and decisions",
                        bisaya: "Kompyado ako sa akong kaugalingong paghuwaw ug mga desisyon"
                    },
                    optionB: {
                        english: "Prefer to get input from others before deciding",
                        bisaya: "Ganahan makuha ang input sa mga tawo sa wala pa magdesisyon"
                    },
                    themesA: ["Self-Assurance"],
                    themesB: ["Harmony"]
                },
                {
                    id: 36,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Transforming something strong into something superb",
                        bisaya: "Pagbag-o og usa ka gamay ngadto sa labing maayo"
                    },
                    optionB: {
                        english: "Fixing problems and resolving issues",
                        bisaya: "Pag-ayo sa mga problema ug pagtulog sa mga isyu"
                    },
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 37,
                    text: {
                        english: "I believe in:",
                        bisaya: "Tuo ko sa:"
                    },
                    optionA: {
                        english: "Treating everyone the same according to established rules",
                        bisaya: "Pagtratar sa tanan nga pareho base sa mga naestablisar nga lagda"
                    },
                    optionB: {
                        english: "Treating each person as a unique individual",
                        bisaya: "Pagtratar sa matag tawo isip lahi nga indibidwal"
                    },
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 38,
                    text: {
                        english: "I am energized by:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Being around people and social interaction",
                        bisaya: "Pagpuyo duol sa mga tawo ug sosyal nga interaksyon"
                    },
                    optionB: {
                        english: "Quiet time for reflection and thinking",
                        bisaya: "Hilig nga oras alang sa pagtuo ug paghunahuna"
                    },
                    themesA: ["Woo"],
                    themesB: ["Intellection"]
                },
                {
                    id: 39,
                    text: {
                        english: "I prefer to communicate:",
                        bisaya: "Ganahan ko makomunika:"
                    },
                    optionA: {
                        english: "Directly and straightforwardly",
                        bisaya: "Direkta ug walay sapayan"
                    },
                    optionB: {
                        english: "Diplomatically and tactfully",
                        bisaya: "Diplomatiko ug may tact"
                    },
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                },
                {
                    id: 40,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "The challenge of winning",
                        bisaya: "Pagsubok sa pagdaug"
                    },
                    optionB: {
                        english: "The satisfaction of a job well done",
                        bisaya: "Katagbawan sa maayong gibuhat nga trabaho"
                    },
                    themesA: ["Competition"],
                    themesB: ["Achiever"]
                }
            ]
        },
        {
            title: {
                english: "Section 3: Decision Making & Problem Solving",
                bisaya: "Bahin 3: Pagbuhat og Desisyon ug Pag-solve sa Mga Problema"
            },
            questions: [
                {
                    id: 41,
                    text: {
                        english: "I make decisions based on:",
                        bisaya: "Nagbuhat ko og desisyon base sa:"
                    },
                    optionA: {
                        english: "Careful analysis of data",
                        bisaya: "Maayong analisis sa datos"
                    },
                    optionB: {
                        english: "Intuition and gut feelings",
                        bisaya: "Intusyon ug gut feeling"
                    },
                    themesA: ["Analytical"],
                    themesB: ["Intuition"]
                },
                {
                    id: 42,
                    text: {
                        english: "When deciding, I:",
                        bisaya: "Kung magdesisyon, ako:"
                    },
                    optionA: {
                        english: "Consider multiple future possibilities",
                        bisaya: "Isipon ang daghang posibleng kaugmaon"
                    },
                    optionB: {
                        english: "Focus on the most practical and immediate solution",
                        bisaya: "Focus sa labing praktikal ug diha-desisyong solusyon"
                    },
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 43,
                    text: {
                        english: "I prefer to:",
                        bisaya: "Ganahan ko sa:"
                    },
                    optionA: {
                        english: "Make decisions quickly and move forward",
                        bisaya: "Magsugod og desisyon dayon ug molusad"
                    },
                    optionB: {
                        english: "Take time to consider all aspects before deciding",
                        bisaya: "Magkuha og oras sa pagtan-aw sa tanang bahin sa wala pa magdesisyon"
                    },
                    themesA: ["Activator"],
                    themesB: ["Deliberative"]
                },
                {
                    id: 44,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "What could go wrong and how to prevent it",
                        bisaya: "Ang mahitabo nga sayop ug unsaon paglikay niini"
                    },
                    optionB: {
                        english: "What could go right and how to achieve it",
                        bisaya: "Ang mahitogo nga tama ug unsaon pag-abut niini"
                    },
                    themesA: ["Deliberative"],
                    themesB: ["Positivity"]
                },
                {
                    id: 45,
                    text: {
                        english: "I make decisions based on:",
                        bisaya: "Nagbuhat ko og desisyon base sa:"
                    },
                    optionA: {
                        english: "Established principles and values",
                        bisaya: "Mga naestablisar nga prinsipyo ug bili"
                    },
                    optionB: {
                        english: "Expected outcomes and results",
                        bisaya: "Ginaasahan nga outcome ug resulta"
                    },
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 46,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Creating innovative solutions to problems",
                        bisaya: "Paghimo og inobatibong solusyon sa mga problema"
                    },
                    optionB: {
                        english: "Implementing proven solutions to problems",
                        bisaya: "Pag-implementar sa mga na-probang solusyon sa mga problema"
                    },
                    themesA: ["Ideation"],
                    themesB: ["Restorative"]
                },
                {
                    id: 47,
                    text: {
                        english: "I approach problems by:",
                        bisaya: "Nakig-uban ko sa mga pinaagi sa:"
                    },
                    optionA: {
                        english: "Breaking them into logical components",
                        bisaya: "Pagbahin niini sa lohikal nga mga sangkap"
                    },
                    optionB: {
                        english: "Looking at the big picture first",
                        bisaya: "Tan-awon ang hulagway sa kinadak-an"
                    },
                    themesA: ["Analytical"],
                    themesB: ["Strategic"]
                },
                {
                    id: 48,
                    text: {
                        english: "I am most comfortable with:",
                        bisaya: "Labing komportable ako sa:"
                    },
                    optionA: {
                        english: "Proven, reliable methods",
                        bisaya: "Mga na-proban, masaligan nga pamaagi"
                    },
                    optionB: {
                        english: "New, innovative approaches",
                        bisaya: "Bag-ong, inobatibong pamaagi"
                    },
                    themesA: ["Consistency"],
                    themesB: ["Ideation"]
                },
                {
                    id: 49,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Understanding why things happened",
                        bisaya: "Pag-intendi nganong ngitngit ang mga butang"
                    },
                    optionB: {
                        english: "What to do next",
                        bisaya: "Ang unsa ang buhaton sunod"
                    },
                    themesA: ["Context"],
                    themesB: ["Activator"]
                },
                {
                    id: 50,
                    text: {
                        english: "I make decisions based on:",
                        bisaya: "Nagbuhat ko og desisyon base sa:"
                    },
                    optionA: {
                        english: "What is fair and consistent",
                        bisaya: "Ang unsay patas ug konsistente"
                    },
                    optionB: {
                        english: "What will work best in this specific situation",
                        bisaya: "Ang unsay labing maobra niini nga ispesipikong sitwasyon"
                    },
                    themesA: ["Consistency"],
                    themesB: ["Individualization"]
                },
                {
                    id: 51,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Theoretical concepts and abstract thinking",
                        bisaya: "Teoretikal nga konsepto ug abstract nga paghunahuna"
                    },
                    optionB: {
                        english: "Practical applications and concrete results",
                        bisaya: "Praktikal nga aplikasyon ug konkreto nga resulta"
                    },
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 52,
                    text: {
                        english: "I solve problems by:",
                        bisaya: "Nagsolob ko og mga problema pinaagi sa:"
                    },
                    optionA: {
                        english: "Considering past experiences and precedents",
                        bisaya: "Pagtan-aw sa mga nahitabo nga kasinatiran ug mga precedente"
                    },
                    optionB: {
                        english: "Imagining new possibilities",
                        bisaya: "Pag-imaginar og bag-ong mga posibilidad"
                    },
                    themesA: ["Context"],
                    themesB: ["Ideation"]
                },
                {
                    id: 53,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "The process of solving problems",
                        bisaya: "Proseso sa pag-solve sa mga problema"
                    },
                    optionB: {
                        english: "Getting to the solution as quickly as possible",
                        bisaya: "Pag-abut sa solusyon nga labing dali"
                    },
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 54,
                    text: {
                        english: "I make decisions based on:",
                        bisaya: "Nagbuhat ko og desisyon base sa:"
                    },
                    optionA: {
                        english: "Thorough research and information gathering",
                        bisaya: "Lubos nga pagsalik ug pagkuha og impormasyon"
                    },
                    optionB: {
                        english: "My core beliefs and values",
                        bisaya: "Akong mga bugtong nga pagtuo ug mga bili"
                    },
                    themesA: ["Input"],
                    themesB: ["Belief"]
                },
                {
                    id: 55,
                    text: {
                        english: "I approach problems:",
                        bisaya: "Nakig-uban ko sa mga problema:"
                    },
                    optionA: {
                        english: "Systematically and methodically",
                        bisaya: "Sistematiko ug metodikal"
                    },
                    optionB: {
                        english: "Intuitively and adaptably",
                        bisaya: "Intuitibo ug adaptable"
                    },
                    themesA: ["Analytical"],
                    themesB: ["Adaptability"]
                },
                {
                    id: 56,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Optimizing and improving existing solutions",
                        bisaya: "Pag-optimize ug pagpauswag sa mga kasamtangang solusyon"
                    },
                    optionB: {
                        english: "Creating entirely new solutions",
                        bisaya: "Paghimo sa bag-ong solusyon"
                    },
                    themesA: ["Maximizer"],
                    themesB: ["Ideation"]
                },
                {
                    id: 57,
                    text: {
                        english: "I make decisions based on:",
                        bisaya: "Nagbuhat ko og desisyon base sa:"
                    },
                    optionA: {
                        english: "Logical analysis",
                        bisaya: "Lohikal nga analisis"
                    },
                    optionB: {
                        english: "Impact on people",
                        bisaya: "Epekto sa mga tawo"
                    },
                    themesA: ["Analytical"],
                    themesB: ["Empathy"]
                },
                {
                    id: 58,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Complex problems that require deep analysis",
                        bisaya: "Komplikadong mga problema nga nanginahanglan og lawom nga analisis"
                    },
                    optionB: {
                        english: "Straightforward problems with clear solutions",
                        bisaya: "Direkta nga mga problema nga klarong solusyon"
                    },
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 59,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "The long-term implications of decisions",
                        bisaya: "Ang mga epekto sa desisyon sa habagatan"
                    },
                    optionB: {
                        english: "The immediate impact of decisions",
                        bisaya: "Diha-desisyong epekto sa desisyon"
                    },
                    themesA: ["Strategic"],
                    themesB: ["Activator"]
                },
                {
                    id: 60,
                    text: {
                        english: "I solve problems by:",
                        bisaya: "Nagsolob ko og mga problema pinaagi sa:"
                    },
                    optionA: {
                        english: "Drawing on my knowledge and expertise",
                        bisaya: "Pagkuha og akong kahibalo ug ekspertiya"
                    },
                    optionB: {
                        english: "Learning new information and approaches",
                        bisaya: "Pagkat-on og bag-ong impormasyon ug pamaagi"
                    },
                    themesA: ["Input"],
                    themesB: ["Learner"]
                }
            ]
        },
        {
            title: {
                english: "Section 4: Leadership & Influence",
                bisaya: "Bahin 4: Pagdumala ug Pag-impluwensya"
            },
            questions: [
                {
                    id: 61,
                    text: {
                        english: "I naturally:",
                        bisaya: "Natural kong:"
                    },
                    optionA: {
                        english: "Take charge of situations and direct others",
                        bisaya: "Mangandam sa mga sitwasyon ug magdumala sa mga tawo"
                    },
                    optionB: {
                        english: "Prefer to support others and help them succeed",
                        bisaya: "Ganahan magsuporta sa mga tawo ug tabangan sila nga magmalampuson"
                    },
                    themesA: ["Command"],
                    themesB: ["Developer"]
                },
                {
                    id: 62,
                    text: {
                        english: "I am most effective when:",
                        bisaya: "Labing epektibo ako kon:"
                    },
                    optionA: {
                        english: "I can persuade and inspire others",
                        bisaya: "Makapahimo kog pagsuporta ug pagpahimugso sa mga tawo"
                    },
                    optionB: {
                        english: "I can analyze and plan thoroughly",
                        bisaya: "Makap-analisar ug magplano og maayo"
                    },
                    themesA: ["Communication"],
                    themesB: ["Strategic"]
                },
                {
                    id: 63,
                    text: {
                        english: "I focus on achieving:",
                        bisaya: "Nag-focus ko sa pag-abut sa:"
                    },
                    optionA: {
                        english: "Recognition and significance",
                        bisaya: "Pag-ila ug kahalagahan"
                    },
                    optionB: {
                        english: "Personal excellence and growth",
                        bisaya: "Personal nga kaekselensya ug pagtubo"
                    },
                    themesA: ["Significance"],
                    themesB: ["Maximizer"]
                },
                {
                    id: 64,
                    text: {
                        english: "I lead by:",
                        bisaya: "Nanguna ko pinaagi sa:"
                    },
                    optionA: {
                        english: "Building consensus and harmony",
                        bisaya: "Pagtukod og konsenso ug harmoniya"
                    },
                    optionB: {
                        english: "Making clear decisions and providing direction",
                        bisaya: "Pagbuhat og klarong desisyon ug paghatag og direksyon"
                    },
                    themesA: ["Harmony"],
                    themesB: ["Command"]
                },
                {
                    id: 65,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "The challenge of influencing others",
                        bisaya: "Pagsubok sa pag-impluwensya sa mga tawo"
                    },
                    optionB: {
                        english: "The satisfaction of achieving results",
                        bisaya: "Katagbawan sa pag-abut sa mga resulta"
                    },
                    themesA: ["Woo"],
                    themesB: ["Achiever"]
                },
                {
                    id: 66,
                    text: {
                        english: "I communicate with:",
                        bisaya: "Nagkomunika ko uban:"
                    },
                    optionA: {
                        english: "Confidence and authority",
                        bisaya: "Kompido ug awtoridad"
                    },
                    optionB: {
                        english: "Empathy and understanding",
                        bisaya: "Empatiya pag-intindi"
                    },
                    themesA: ["Command"],
                    themesB: ["Empathy"]
                },
                {
                    id: 67,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Future possibilities and vision",
                        bisaya: "Mga posibleng kaugmaon ug pangitaon"
                    },
                    optionB: {
                        english: "Practical implementation and execution",
                        bisaya: "Praktikal nga implementasyon ug pagpatuman"
                    },
                    themesA: ["Futuristic"],
                    themesB: ["Focus"]
                },
                {
                    id: 68,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Competition and measuring myself against others",
                        bisaya: "Kompetisyon ug pagsukod sa akong kaugalingon batok sa mga tawo"
                    },
                    optionB: {
                        english: "Collaboration and team success",
                        bisaya: "Kolaborasyon ug kalampusan sa team"
                    },
                    themesA: ["Competition"],
                    themesB: ["Harmony"]
                },
                {
                    id: 69,
                    text: {
                        english: "I am comfortable with:",
                        bisaya: "Komportable ako sa:"
                    },
                    optionA: {
                        english: "Taking risks and making bold decisions",
                        bisaya: "Paggamit og risgo ug pagbuhat og desisyon nga balido"
                    },
                    optionB: {
                        english: "Careful planning and calculated risks",
                        bisaya: "Maayong pagplano ug kalkulado nga mga risgo"
                    },
                    themesA: ["Self-Assurance"],
                    themesB: ["Deliberative"]
                },
                {
                    id: 70,
                    text: {
                        english: "I lead by:",
                        bisaya: "Nanguna ko pinaagi sa:"
                    },
                    optionA: {
                        english: "Inspiring others with enthusiasm",
                        bisaya: "Pagpahimugso sa mga tawo pinaagi sa entusiasmo"
                    },
                    optionB: {
                        english: "Providing stability and consistency",
                        bisaya: "Paghatag ug katibuk-an ug konsistensya"
                    },
                    themesA: ["Positivity"],
                    themesB: ["Discipline"]
                },
                {
                    id: 71,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Transforming good into great",
                        bisaya: "Pagbag-o sa maayo ngadto sa labing maayo"
                    },
                    optionB: {
                        english: "Fixing what's wrong",
                        bisaya: "Pag-ayo sa sayop"
                    },
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 72,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "Making a significant impact",
                        bisaya: "Pagbuhat og signipikante nga epekto"
                    },
                    optionB: {
                        english: "Personal growth and development",
                        bisaya: "Personal nga pagtubo ug pag-uswag"
                    },
                    themesA: ["Significance"],
                    themesB: ["Learner"]
                },
                {
                    id: 73,
                    text: {
                        english: "I communicate most effectively through:",
                        bisaya: "Labing epektivo ako makomunika pinaagi sa:"
                    },
                    optionA: {
                        english: "Inspiring presentations",
                        bisaya: "Mga presentasyon nga nagpahimugso"
                    },
                    optionB: {
                        english: "Thoughtful analysis",
                        bisaya: "Pag-analisar nga may pagtagad"
                    },
                    themesA: ["Communication"],
                    themesB: ["Analytical"]
                },
                {
                    id: 74,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Being in the spotlight and receiving recognition",
                        bisaya: "Pagka-istar sa pagpangita og pag-ila"
                    },
                    optionB: {
                        english: "Working behind the scenes and supporting others",
                        bisaya: "Pagtrabaho likod sa kurtina ug pag-suporta sa mga tawo"
                    },
                    themesA: ["Significance"],
                    themesB: ["Responsibility"]
                },
                {
                    id: 75,
                    text: {
                        english: "I lead by:",
                        bisaya: "Nanguna ko pinaagi sa:"
                    },
                    optionA: {
                        english: "Challenging others to excel",
                        bisaya: "Pagsubok sa mga tawo nga mag-eksel"
                    },
                    optionB: {
                        english: "Developing others' potential",
                        bisaya: "Pag-uswag sa potensyal sa mga tawo"
                    },
                    themesA: ["Maximizer"],
                    themesB: ["Developer"]
                },
                {
                    id: 76,
                    text: {
                        english: "I focus on being:",
                        bisaya: "Nag-focus ko sa pagka-:"
                    },
                    optionA: {
                        english: "Innovative and forward-thinking",
                        bisaya: "Inobatibo ug forward-thinking"
                    },
                    optionB: {
                        english: "Reliable and consistent",
                        bisaya: "Masaligan ug konsistente"
                    },
                    themesA: ["Ideation"],
                    themesB: ["Consistency"]
                },
                {
                    id: 77,
                    text: {
                        english: "I am most effective when:",
                        bisaya: "Labing epektibo ako kon:"
                    },
                    optionA: {
                        english: "I can take initiative and activate others",
                        bisaya: "Makapangandam og magsugod ug mangandam sa mga tawo"
                    },
                    optionB: {
                        english: "I can provide stability and support",
                        bisaya: "Makahatag ug katibuk-an ug suporta"
                    },
                    themesA: ["Activator"],
                    themesB: ["Responsibility"]
                },
                {
                    id: 78,
                    text: {
                        english: "I lead by:",
                        bisaya: "Nanguna ko pinaagi sa:"
                    },
                    optionA: {
                        english: "Creating excitement and momentum",
                        bisaya: "Paghimo og kaexcite ug momentum"
                    },
                    optionB: {
                        english: "Providing structure and clarity",
                        bisaya: "Paghatag og istruktura ug klaridad"
                    },
                    themesA: ["Positivity"],
                    themesB: ["Discipline"]
                },
                {
                    id: 79,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Achieving ambitious goals and recognition",
                        bisaya: "Pag-abut sa ambisyoso nga mga goal ug pag-ila"
                    },
                    optionB: {
                        english: "Living according to my core values",
                        bisaya: "Pagkinabuhi base sa akong mga bugtong nga bili"
                    },
                    themesA: ["Competition"],
                    themesB: ["Belief"]
                },
                {
                    id: 80,
                    text: {
                        english: "I am comfortable with:",
                        bisaya: "Komportable ako sa:"
                    },
                    optionA: {
                        english: "Confrontation and difficult conversations",
                        bisaya: "Pag-atubang ug mga lisud nga paghisgot"
                    },
                    optionB: {
                        english: "Maintaining harmony and avoiding confrontation",
                        bisaya: "Pagmantinir sa harmoniya ug paglikay sa pag-atubang"
                    },
                    themesA: ["Command"],
                    themesB: ["Harmony"]
                }
            ]
        },
        {
            title: {
                english: "Section 5: Personal Motivation & Growth",
                bisaya: "Bahin 5: Personal nga Motibasyon ug Pagtubo"
            },
            questions: [
                {
                    id: 81,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "Learning new things and acquiring knowledge",
                        bisaya: "Pagkat-on og bag-ong mga butang ug pagkuha og kahibalo"
                    },
                    optionB: {
                        english: "Achieving tangible results and outcomes",
                        bisaya: "Pag-abut sa mga tangible nga resulta ug outcome"
                    },
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 82,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Continuous improvement and excellence",
                        bisaya: "Padayon nga pagpauswag ug kaekselensya"
                    },
                    optionB: {
                        english: "Restoring things when they go wrong",
                        bisaya: "Pagbalik sa mga butang kon maguba na"
                    },
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 83,
                    text: {
                        english: "I am energized by:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Thinking about the future and possibilities",
                        bisaya: "Pag hunahuna sa kaugmaon ug mga posibilidad"
                    },
                    optionB: {
                        english: "Dealing with present realities and challenges",
                        bisaya: "Pag-atubang sa kasamtangan nga realidad ug mga pagsubok"
                    },
                    themesA: ["Futuristic"],
                    themesB: ["Activator"]
                },
                {
                    id: 84,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Collecting information and knowledge for its own sake",
                        bisaya: "Pag kolekta og impormasyon ug kahibalo para niini ra"
                    },
                    optionB: {
                        english: "Applying information to solve practical problems",
                        bisaya: "Paggamit og impormasyon sa pag-solve sa praktikal nga mga problema"
                    },
                    themesA: ["Input"],
                    themesB: ["Restorative"]
                },
                {
                    id: 85,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "External recognition and achievement",
                        bisaya: "Panlabas nga pag-ila ug nakab-ot"
                    },
                    optionB: {
                        english: "Internal satisfaction and personal values",
                        bisaya: "Panlaing nga katagbawan ug personal nga mga bili"
                    },
                    themesA: ["Significance"],
                    themesB: ["Belief"]
                },
                {
                    id: 86,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Developing my existing strengths",
                        bisaya: "Pag-uswag sa akong mga kasamtangang kusog"
                    },
                    optionB: {
                        english: "Improving my areas of weakness",
                        bisaya: "Pagpauswag sa akong mga kahinaan"
                    },
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 87,
                    text: {
                        english: "I am energized by:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Being around people and social interaction",
                        bisaya: "Pagpuyo duol sa mga tawo ug sosyal nga interaksyon"
                    },
                    optionB: {
                        english: "Quiet time for reflection and thinking",
                        bisaya: "Hilig nga oras alang sa pagtuo ug paghunahuna"
                    },
                    themesA: ["Woo"],
                    themesB: ["Intellection"]
                },
                {
                    id: 88,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Theoretical concepts and abstract thinking",
                        bisaya: "Teoretikal nga konsepto ug abstract nga paghunahuna"
                    },
                    optionB: {
                        english: "Practical applications and concrete results",
                        bisaya: "Praktikal nga aplikasyon ug konkreto nga resulta"
                    },
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 89,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "Making a difference in the world",
                        bisaya: "Pagbuhat og kalainan sa kalibutan"
                    },
                    optionB: {
                        english: "Achieving personal success",
                        bisaya: "Pag-abut sa personal nga kalampusan"
                    },
                    themesA: ["Belief"],
                    themesB: ["Achiever"]
                },
                {
                    id: 90,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Understanding the historical context of situations",
                        bisaya: "Pag-intindi sa historikal nga konteksto sa mga sitwasyon"
                    },
                    optionB: {
                        english: "Future possibilities and innovations",
                        bisaya: "Mga posibleng kaugmaon ug inobasyon"
                    },
                    themesA: ["Context"],
                    themesB: ["Futuristic"]
                },
                {
                    id: 91,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "The challenge of winning and competition",
                        bisaya: "Pagsubok sa pagdaug ug kompetisyon"
                    },
                    optionB: {
                        english: "The satisfaction of a job well done",
                        bisaya: "Katagbawan sa maayong gibuhat nga trabaho"
                    },
                    themesA: ["Competition"],
                    themesB: ["Achiever"]
                },
                {
                    id: 92,
                    text: {
                        english: "I enjoy:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Deep intellectual discussions and analysis",
                        bisaya: "Lawom nga intelektwal nga mga diskusyon ug analisis"
                    },
                    optionB: {
                        english: "Practical, hands-on problem solving",
                        bisaya: "Praktikal, hands-on nga pag-solve sa mga problema"
                    },
                    themesA: ["Intellection"],
                    themesB: ["Restorative"]
                },
                {
                    id: 93,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "Personal growth and self-improvement",
                        bisaya: "Personal nga pagtubo ug pagpauswag sa kaugalingon"
                    },
                    optionB: {
                        english: "Achieving specific goals and outcomes",
                        bisaya: "Pag-abut sa mga ispesipikong goal ug outcome"
                    },
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 94,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Transforming something strong into something superb",
                        bisaya: "Pagbag-o og usa ka gamay ngadto sa labing maayo"
                    },
                    optionB: {
                        english: "Fixing problems and resolving issues",
                        bisaya: "Pag-ayo sa mga problema ug pagtulog sa mga isyu"
                    },
                    themesA: ["Maximizer"],
                    themesB: ["Restorative"]
                },
                {
                    id: 95,
                    text: {
                        english: "I am energized by:",
                        bisaya: "Nalingawaw ko sa:"
                    },
                    optionA: {
                        english: "Variety and new experiences",
                        bisaya: "Daghang lahi ug bag-ong kasinatiran"
                    },
                    optionB: {
                        english: "Routine and predictability",
                        bisaya: "Rutina ug pagka-predictable"
                    },
                    themesA: ["Adaptability"],
                    themesB: ["Discipline"]
                },
                {
                    id: 96,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "Being reliable and responsible",
                        bisaya: "Pagka-masaligan ug pagka-responsable"
                    },
                    optionB: {
                        english: "Being significant and making an impact",
                        bisaya: "Pagka-signipikante ug pagbuhat og epekto"
                    },
                    themesA: ["Responsibility"],
                    themesB: ["Significance"]
                },
                {
                    id: 97,
                    text: {
                        english: "I enjoy learning:",
                        bisaya: "Nalingawaw ko makat-on og:"
                    },
                    optionA: {
                        english: "For the joy of learning itself",
                        bisaya: "Alang sa kalipay sa pagkat-on ra"
                    },
                    optionB: {
                        english: "To achieve specific goals",
                        bisaya: "Aron makab-ot sa mga ispesipikong goal"
                    },
                    themesA: ["Learner"],
                    themesB: ["Achiever"]
                },
                {
                    id: 98,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "Internal standards and values",
                        bisaya: "Panlaing nga mga standard ug bili"
                    },
                    optionB: {
                        english: "External validation and recognition",
                        bisaya: "Panlabas nga balidasyon ug pag-ila"
                    },
                    themesA: ["Belief"],
                    themesB: ["Significance"]
                },
                {
                    id: 99,
                    text: {
                        english: "I focus on:",
                        bisaya: "Nag-focus ko sa:"
                    },
                    optionA: {
                        english: "Future possibilities and what could be",
                        bisaya: "Mga posibleng kaugmaon ug ang mahimo"
                    },
                    optionB: {
                        english: "Present realities and what is",
                        bisaya: "Kasamtangan nga realidad ug ang nag-unya"
                    },
                    themesA: ["Futuristic"],
                    themesB: ["Activator"]
                },
                {
                    id: 100,
                    text: {
                        english: "I am motivated by:",
                        bisaya: "Gipahimo kog buhat sa:"
                    },
                    optionA: {
                        english: "Personal freedom and independence",
                        bisaya: "Personal nga kagawasan ug independensya"
                    },
                    optionB: {
                        english: "Structure and clear expectations",
                        bisaya: "Estruktura ug klarong mga ekspektasyon"
                    },
                    themesA: ["Self-Assurance"],
                    themesB: ["Discipline"]
                }
            ]
        }
    ]
};

// Translations for UI elements
const translations = {
    english: {
        introTitle: "Comprehensive Strengths Assessment",
        introDescription: "Discover your unique combination of strengths with this research-based assessment. This comprehensive tool will help you identify your top 5 strengths from the 34 CliftonStrengths themes.",
        whatExpectTitle: "What to Expect:",
        expect1: "100 carefully designed questions",
        expect2: "5 distinct sections covering different aspects",
        expect3: "20-30 minutes to complete",
        expect4: "Personalized results showing your top 5 strengths",
        expect5: "Detailed descriptions and development suggestions",
        instructionsTitle: "Instructions:",
        instruction1: "For each question, choose the statement that better describes you",
        instruction2: "Answer honestly - there are no right or wrong answers",
        instruction3: "Work at your own pace - your progress will be saved",
        instruction4: "Complete all sections for the most accurate results",
        startBtn: "Begin Assessment",
        resultsTitle: "Your Top 5 Strengths",
        resultsIntro: "Based on your responses, here are your top 5 strengths from the 34 CliftonStrengths themes. These represent your most natural talents and areas where you have the greatest potential for success.",
        restartBtn: "Take Assessment Again",
        shareBtn: "Share Results",
        prevBtn: "Previous",
        nextBtn: "Next"
    },
    bisaya: {
        introTitle: "Komprehensibong Pagsulay sa Kusog",
        introDescription: "Diskubreha ang imong lahi nga kombinasyon sa kusog niining panukiduki nga base sa panukiduki. Kini nga komprehensibong himan makatabang kanimo sa pag-ila sa imong labing 5 ka gatus gikan sa 34 ka CliftonStrengths nga tema.",
        whatExpectTitle: "Ang Unya Mahitabo:",
        expect1: "100 ka maayong gidisenyong mga pangutana",
        expect2: "5 lahi nga bahin nga nagtumong sa lain-laing aspeto",
        expect3: "20-30 ka minuto nga matapos",
        expect4: "Personal nga resulta nga nagpakita sa imong labing 5 ka gatus",
        expect5: "Detalyadong mga deskripsyon ug mga suhestiyon sa pag-uswag",
        instructionsTitle: "Mga Instruksyon:",
        instruction1: "Alang sa matag pangutana, pili-a ang pahayag nga labing maayo nga nagdescribe sa imo",
        instruction2: "Tubag nga matinud-anon - walay tuo o sayop nga tubag",
        instruction3 "Trabaho sa imong kaugalingong gikuskad - ang imong pag-uswag maluwas",
        instruction4: "Kumpletoha ang tanang bahin alang sa labing tukmang resulta",
        startBtn: "Magsugod sa Pagsulay",
        resultsTitle: "Imong Labing 5 ka Kusog",
        resultsIntro: "Base sa imong mga tubag, kini ang imong labing 5 ka gatus gikan sa 34 ka CliftonStrengths nga tema. Kini nagrepresenta sa imong labing natural nga talento ug mga lugar diin ikaw adunay labing dako nga potensyal alang sa kalampusan.",
        restartBtn: "Kuhaa Pagsulay Usab",
        shareBtn: "Bahina ang mga Resulta",
        prevBtn "Wala pa",
        nextBtn: "Sunod"
    }
};

// Themes database with descriptions
const themes = {
    "Achiever": {
        name: {
            english: "Achiever",
            bisaya: "Nag-angkon"
        },
        domain: {
            english: "Executing",
            bisaya: "Pagpatuman"
        },
        description: {
            english: "People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive.",
            bisaya: "Ang mga tawo nga labing maayo sa Achiever nga tema magtrabaho ug dugo ug adunay dagkong kusog. Dili sila maulaw sa pagkaubos sa pagka busy ug produktibo."
        }
    },
    "Activator": {
        name: {
            english: "Activator",
            bisaya: "Nagpahinungod"
        },
        domain: {
            english: "Influencing",
            bisaya: "Pag-impluwensya"
        },
        description: {
            english: "People exceptionally talented in the Activator theme can make things happen by turning thoughts into action. They want to do things now, rather than simply talk about them.",
            bisaya: "Ang mga tawo nga labing maayo sa Activator nga tema makahimo og mga butang pinaagi sa pagbalhin sa mga hunahuna ngadto sa aksyon. Gusto nila mubukat karon, dili lang magsulti niini."
        }
    },
    "Adaptability": {
        name: {
            english: "Adaptability",
            bisaya: "Pagka-adaptable"
        },
        domain: {
            english: "Relationship Building",
            bisaya: "Pagtukod ug Relasyon"
        },
        description: {
            english: "People exceptionally talented in the Adaptability theme prefer to go with the flow. They tend to be 'now' people who take things as they come and discover the future one day at a time.",
            bisaya: "Ang mga tawo nga labing maayo sa Adaptability nga tema ganahan mosunod sa agos. Sila kasagaran mga 'karon' nga mga tawo nga mokupot sa mga butang samtang moabut ug nakit-an ang uma-uma matag adlaw."
        }
    },
    "Analytical": {
        name: {
            english: "Analytical",
            bisaya: "Analitikal"
        },
        domain: {
            english: "Strategic Thinking",
            bisaya: "Stratehikong Paghunahuna"
        },
        description: {
            english: "People exceptionally talented in the Analytical theme search for reasons and causes. They have the ability to think about all of the factors that might affect a situation.",
            bisaya: "Ang mga tawo nga labing maayo sa Analytical nga mangita og rason ug hinungdan. Aduna silay abilidad nga maghunahuna sa tanang mga faktor nga makakaapekto sa usa ka sitwasyon."
        }
    },
    "Arranger": {
        name: {
            english: "Arranger",
            bisaya: "Nag-ayos"
        },
        domain: {
            english: "Executing",
            bisaya: "Pagpatuman"
        },
        description: {
            english: "People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to determine how all of the pieces and resources can be arranged for maximum productivity.",
            bisaya: "Ang mga tawo nga labing maayo sa Arranger nga tema makapag-organisar, apan aduna us silay ka-flexibilidad nga nakompleto niini nga abilidad. Gusto nilang mahibaloan kung unsaon pag-ayos sa tanang mga piraso ug recursos alang sa labing katahom nga pagka-productibo."
        }
    },
    "Belief": {
        name: {
            english: "Belief",
            bisaya: "Pagtuo"
        },
        domain: {
            english: "Executing",
            bisaya: "Pagpatuman"
        },
        description: {
            english: "People exceptionally talented in the Belief theme have certain core values that are unchanging. Out of these values emerges a defined purpose for their lives.",
            bisaya: "Ang mga tawo nga labing maayo sa Belief nga tema adunay mga partikular nga bugtong nga bili nga dili magbag-o. Gikan niining mga bili moabut ang usa ka klarong katuyoan sa ilang kinabuhi."
        }
    },
    "Command": {
        name: {
            english: "Command",
            bisaya: "Pagmando"
        },
        domain: {
            english: "Influencing",
            bisaya: "Pag-impluwensya"
        },
        description: {
            english: "People exceptionally talented in the Command theme have presence. They can take control of a situation and make decisions.",
            bisaya: "Ang mga tawo nga labing maayo sa Command nga tema adunay presensya. Sila makapangandam sa usa ka sitwasyon ug makapagbuhat og desisyon."
        }
    },
    "Communication": {
        name: {
            english: "Communication",
            bisaya: "Komunikasyon"
        },
        domain: {
            english: "Influencing",
            bisaya: "Pag-impluwensya"
        },
        description: {
            english: "People exceptionally talented in the Communication theme generally find it easy to put their thoughts into words. They are good conversationalists and presenters.",
            bisaya: "Ang mga tawo nga labing maayo sa Communication nga tema kasagaran makakita og sayon sa pagbutang sa ilang mga hunahuna sa mga pulong. Sila maayo nga maghisgot ug magpresentar."
        }
    },
    "Competition": {
        name: {
            english: "Competition",
            bisaya: "Kompetisyon"
        },
        domain: {
            english: "Influencing",
            bisaya: "Pag-impluwensya"
        },
        description: {
            english: "People exceptionally talented in the Competition theme measure their progress against the performance of others. They strive to win first place and revel in contests.",
            bisaya: "Ang mga tawo nga labing maayo sa Competition nga tema sukdan ang ilang pag-uswag batok sa performance sa mga tawo. Sila naningkamot sa pagdaog sa unang lugar ug nalingawaw sa mga kompetisyon."
        }
    },
    "Connectedness": {
        name: {
            english: "Connectedness",
            bisaya: "Pagkonektar"
        },
        domain: {
            english: "Relationship Building",
            bisaya: "Pagtukod ug Relasyon"
        },
        description: {
            english: "People exceptionally talented in the Connectedness theme have faith in the links among all things. They believe there are few coincidences and that almost every event has meaning.",
            bisaya: "Ang mga tawo nga labing maayo sa Connectedness nga tema adunay pagtuo sa mga link sa tanang butang. Sila naniniwala nga adunay pipila ka coincidence ug nga halos tanang panghitabo may kahulugan."
        }
    },
    "Consistency": {
        name: {
            english: "Consistency",
            bisaya: "Pagkonsistente"
        },
        domain: {
            english: "Executing",
            bisaya: "Pagpatuman"
        },
        description: {
            english: "People exceptionally talented in the Consistency theme are keenly aware of the need to treat people the same. They crave stable routines and clear rules and procedures that everyone can follow.",
            bisaya: "Ang mga tawo nga labing maayo sa Consistency ngaayo nga nahibalo sa panginahanglan sa pagtratar sa mga tawon nga pareho. Gusto nila ang mga establidong rutina ug klarong mga lagda ug proseduro nga tanan makasunod."
        }
    },
    "Context": {
        name: {
            english: "Context",
            bisaya: "Konteksto"
        },
        domain: {
            english: "Strategic Thinking",
            bisaya: "Stratehikong Paghunahuna"
        },
        description: {
            english: "People exceptionally talented in the Context theme enjoy thinking about the past. They understand the present by researching its history.",
            bisaya: "Ang mga tawo nga labing maayo sa Context nga tema nalingawaw sa paghunahuna sa kahapon. Nakasabut nila ang kasamtangan pinaagi sa pagpanukiduki sa kasaysayan niini."
        }
    },
    "Deliberative": {
        name: {
            english: "Deliberative",
            bisaya: "Deliberatibo"
        },
        domain: {
            english: "Executing",
            bisaya: "Pagpatuman"
        },
        description: {
            english: "People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate obstacles.",
            bisaya: "Ang mga tawo nga labing maayo sa Deliberative nga tema labing maong isipon sa seryosong pag-atubang nga ilang gibuhat sa pagbuhat og desisyon o pagpili. Sila nag-antisipar sa mga hadlang."
        }
    },
    "Developer": {
        name: {
            english: "Developer",
            bisaya: "Nag-uswag"
        },
        domain: {
            english: "Relationship Building",
            bisaya: "Pagtukod ug Relasyon"
        },
        description: {
            english: "People exceptionally talented in the Developer theme recognize and cultivate the potential in others. They spot the signs of each small improvement and derive satisfaction from evidence of progress.",
            bisaya: "Ang mga tawo nga labing maayo sa Developer nga tema makakita ug magpatubo sa potensyal sa mga tawo. Sila makakita sa mga timailhan sa matag gamay nga pagpauswag ug nakuha katagbawan sa ebidensya sa pag-uswag."
        }
    },
    "Discipline": {
        name: {
            english: "Discipline",
            bisaya: "Disiplina"
        },
        domain: {
            english: "Executing",
            bisaya: "Pagpatuman"
        },
        description: {
            english: "People exceptionally talented in the Discipline theme enjoy routine and structure. Their world is best described by the order they create.",
            bisaya: "Ang mga tawo nga labing maayo sa Discipline nga tema nalingawaw sa rutina ug istruktura. Ilang kalibutan labing maong isipon pinaagi sa order nga ilang gibuhat."
        }
    },
    "Empathy": {
        name: {
            english: "Empathy",
            bisaya: "Empatiya"
        },
        domain: {
            english: "Relationship Building",
            bisaya: "Pagtukod ug Relasyon"
        },
        description: {
            english: "People exceptionally talented in the Empathy theme can sense other people's feelings by imagining themselves in others' lives or situations.",
            bisaya: "Ang mga tawo nga labing maayo sa Empathy nga tema makabati sa mga gibati sa mga tawo pinaagi sa pag-imaginar sa ilang kaugalingon sa kinabuhi o sitwasyon sa mga tawo."
        }
    },
    "Focus": {
        name: {
            english: "Focus",
            bisaya: "Focus"
        },
        domain: {
            english: "Executing",
            bisaya: "Pagpatuman"
        },
        description: {
            english: "People exceptionally talented in the Focus theme can take a direction, follow through and make the corrections necessary to stay on track. They prioritize, then act.",
            bisaya: "Ang mga tawo nga labing maayo sa Focus nga maka kuha og direksyon, sunod-sunod, ug magbuhat sa mga koreksyon nga gikinahanglan aron magpabilin sa track. Sila nagprioritize, unya magbuhat."
        }
    },
    "Futuristic": {
        name: {
            english: "Futuristic",
            bisaya: "Futuristiko"
        },
        domain: {
            english: "Strategic Thinking",
            bisaya: "Stratehikong Paghunahuna"
        },
        description: {
            english: "People exceptionally talented in the Futuristic theme are inspired by the future and what could be. They energize others with their visions of the future.",
            bisaya: "Ang mga tawo nga labing maayo sa Futuristic nga tema napaandar sa uma-uma ug sa mahimo. Sila nagpahinungod sa mga tawo pinaagi sa ilang mga pangitaon sa uma-uma."
        }
    },
    "Harmony": {
        name: {
            english: "Harmony",
            bisaya: "Harmoniya"
        },
        domain: {
            english: "Relationship Building",
            bisaya: "Pagtukod ug Relasyon"
        },
        description: {
            english: "People exceptionally talented in the Harmony theme look for consensus. They don't enjoy conflict; rather, they seek areas of agreement.",
            bisaya: "Ang mga tawo nga labing maayo sa Harmony nga mangaon sa konsenso. Dili sila nalingawaw sa komplikasyon; sa halip, mangita sila mga lugar nga pagkauyonan."
        }
    },
    "Ideation": {
        name: {
            english: "Ideation",
            bisaya: "Pag-ideya"
        },
        domain: {
            english: "Strategic Thinking",
            bisaya: "Stratehikong Paghunahuna"
        },
        description: {
            english: "People exceptionally talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena.",
            bisaya: "Ang mga tawo nga labing maayo sa Ideation nga tema nalingawaw sa mga ideya. Sila makakapangita og koneksyon tali sa mga lahi-laing phenomena nga wala'y koneksyon."
        }
    },
    "Includer": {
        name: {
            english: "Includer",
            bisaya: "Nag-ila"
        },
        domain: {
            english: "Relationship Building",
            bisaya: "Pagtukod ug Relasyon"
        },
        description: {
            english: "People exceptionally talented in the Includer theme accept others. They show awareness of those who feel left out and make an effort to include them.",
            bisaya: "Ang mga tawo nga labing maayo sa Includer nga tema dason ang mga tawo. Nagpakita sila kahibalo sa mga tawo nga nagpakabana nga gipabilin ug magpaningkamot sa pag-ila kanila."
        }
    },
    "Individualization": {
        name: {
            english: "Individualization",
            bisaya: "Individualisasyon"
        },
        domain: {
            english: "Relationship Building",
            bisaya: "Pagtukod ug Relasyon"
        },
        description: {
            english: "People exceptionally talented in the Individualization theme are intrigued with the unique qualities of each person. They have a gift for figuring out how different people can work together productively.",
            bisaya: "Ang mga tawo nga labing maayo sa Individualization nga taas ang pangutana sa lahi nga mga kalidad sa matag tawo. Sila adunay don sa pag-ila kung unsaon ang lain-laing mga tawo nga makatrabaho nga produktibo."
        }
    },
    "Input": {
        name: {
            english: "Input",
            bisaya: "Input"
        },
        domain: {
            english: "Strategic Thinking",
            bisaya: "Stratehikong Paghunahuna"
        },
        description: {
            english: "People exceptionally talented in the Input theme have a need to collect and archive. They may accumulate information, ideas, artifacts or even relationships.",
            bisaya: "Ang mga tawo nga labing maayo sa Input nga tema adunay panginahanglan sa pagkolekta ug pag-arkibo. Sila makakolekta og impormasyon, mga ideya, mga artifact o bisan mga relasyon."
        }
    },
    "Intellection": {
        name: {
            english: "Intellection",
            bisaya: "Inteleksyon"
        },
        domain: {
            english: "Strategic Thinking",
            bisaya: "Stratehikong Paghunahuna"
        },
        description: {
            english: "People exceptionally talented in the Intellection theme are characterized by their intellectual activity. They are introspective and appreciate intellectual discussions.",
            bisaya: "Ang mga tawo nga labing maayo sa Intellection nga tema gilagikan sa ilang intelektwal nga aktibidad. Sila introspektibo ug nagtinabangay sa intelektwal nga mga diskusyon."
        }
    },
    "Learner": {
        name: {
            english: "Learner",
            bisaya: "Magtun-an"
        },
        domain: {
            english: "Strategic Thinking",
            bisaya: "Stratehikong Paghunahuna"
        },
        description: {
            english: "People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve. The process of learning, rather than the outcome, excites them.",
            bisaya: "Ang mga tawo nga labing maayo sa Learner nga tema adunay dako nga gusto makat-on ug gusto nga padayon nga mapauswag. Ang proseso sa pagkat-on, dili ang resulta, ang nagpalihok kanila."
        }
    },
    "Maximizer": {
        name: {
            english: "Maximizer",
            bisaya: "Nagpauswag"
        },
        domain: {
            english: "Influencing",
            bisaya: "Pag-impluwensya"
        },
        description: {
            english: "People exceptionally talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence. They seek to transform something strong into something superb.",
            bisaya: "Ang mga tawo nga labing maayo sa Maximizer nga tema nag-focus sa mga kusog isip paagi sa pagpahinungod sa personal ug grupo nga kaekselensya. Sila mangita og pagbag-o sa usa ka gamay ngadto sa labing maayo."
        }
    },
    "Positivity": {
        name: {
            english: "Positivity",
            bisaya: "Positibidad"
        },
        domain: {
            english: "Relationship Building",
            bisaya: "Pagtukod ug Relasyon"
        },
        description: {
            english: "People exceptionally talented in the Positivity theme have contagious enthusiasm. They are upbeat and can get others excited about what they are going to do.",
            bisaya: "Ang mga tawo nga labing maayo sa Positivity nga tema adunay kontahyos nga entusiasmo. Sila upbeat ug makapahinungod sa mga tawo sa ilang gibuhat."
        }
    },
    "Relator": {
        name: {
            english: "Relator",
            bisaya: "Relator"
        },
        domain: {
            english: "Relationship Building",
            bisaya: "Pagtukod ug Relasyon"
        },
        description: {
            english: "People exceptionally talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal.",
            bisaya: "Ang mga tawo nga labing maayo sa Relator nga tema nalingawaw sa duol nga relasyon sa mga tawo. Sila nakakita og lawom nga katagbawan sa pagtrabaho og dugo sa mga amigo aron makab-ot sa usa ka goal."
        }
    },
    "Responsibility": {
        name: {
            english: "Responsibility",
            bisaya: "Pag-responsibilidad"
        },
        domain: {
            english: "Executing",
            bisaya: "Pagpatuman"
        },
        description: {
            english: "People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty.",
            bisaya: "Ang mga tawo nga labing maayo sa Responsibility nga tema kuhaon sa sikolohikal nga pagpanag-iya sa ilang gisulti nga buhaton nila. Sila komitido sa mga establidong bili sama sa pagkatinuoran ug pagtuo."
        }
    },
    "Restorative": {
        name: {
            english: "Restorative",
            bisaya: "Nagbalik"
        },
        domain: {
            english: "Executing",
            bisaya: "Pagpatuman"
        },
        description: {
            english: "People exceptionally talented in the Restorative theme are adept at dealing with problems. They are good at figuring out what is wrong and resolving it.",
            bisaya: "Ang mga tawo nga labing maayo sa Restorative nga maayo sa pag-atubang sa mga problema. Sila maayo sa pag-ila sa unsay sayop ug pagtulod niini."
        }
    },
    "Self-Assurance": {
        name: {
            english: "Self-Assurance",
            bisaya: "Pagtuo sa Kaugalingon"
        },
        domain: {
            english: "Influencing",
            bisaya: "Pag-impluwensya"
        },
        description: {
            english: "People exceptionally talented in the Self-Assurance theme feel confident in their ability to take risks and manage their own lives. They have an inner compass that gives them certainty in their decisions.",
            bisaya: "Ang mga tawo nga labing maayo sa Self-Assurance nga tema kompyado sa ilang abilidad sa paggamit og risgo ug pagdumala sa ilang kaugalingong kinabuhi. Sila adunay panlaing nga kompas nga naghatag kanila og kasigurohan sa ilang mga desisyon."
        }
    },
    "Significance": {
        name: {
            english: "Significance",
            bisaya: "Kahalagahan"
        },
        domain: {
            english: "Influencing",
            bisaya: "Pag-impluwensya"
        },
        description: {
            english: "People exceptionally talented in the Significance theme want to make a big impact. They are independent and prioritize projects based on how much influence they will have on their organization or people around them.",
            bisaya: "Ang mga tawo nga labing maayo sa Significance nga tema gusto makabuhat og dako nga epekto. Sila independente ug nagprioritize sa mga proyekto base sa unsa kadako ang ilang impluwensya sa ilang organisasyon o mga tawo nga palibot nila."
        }
    },
    "Strategic": {
        name: {
            english: "Strategic",
            bisaya: "Stratehiko"
        },
        domain: {
            english: "Strategic Thinking",
            bisaya: "Stratehikong Paghunahuna"
        },
        description: {
            english: "People exceptionally talented in the Strategic theme create alternative ways to proceed. Faced with any given scenario, they can quickly spot the relevant patterns and issues.",
            bisaya: "Ang mga tawo nga labing maayo sa Strategic nga tema magmugna og lahi nga pamaagi sa pagpadayon. Atubangan sa bisan unsang scenario, sila makakita dayon sa may kalabutan nga mga pattern ug mga isyu."
        }
    },
    "Woo": {
        name: {
            english: "Woo",
            bisaya: "Woo"
        },
        domain: {
            english: "Influencing",
            bisaya: "Pag-impluwensya"
        },
        description: {
            english: "People exceptionally talented in the Woo theme love the challenge of meeting new people and winning them over. They derive satisfaction from breaking the ice and making a connection with someone.",
            bisaya: "Ang mga tawo nga labing maayo sa Woo nga tema nalingawaw sa pagsubok sa pagkita og bag-ong mga tawo ug pagdaog kanila. Sila nakuha katagbawan sa pagputol sa yelo ug pagkonektar sa usa ka tawo."
        }
    }
};

// Assessment state
let currentLanguage = 'english';
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

// Select language
function selectLanguage(language) {
    currentLanguage = language;
    document.getElementById('language-selection').classList.add('hidden');
    document.getElementById('introduction').classList.remove('hidden');
    
    // Update UI text based on selected language
    updateUIText();
}

// Update UI text based on selected language
function updateUIText() {
    const t = translations[currentLanguage];
    
    // Update introduction section
    document.getElementById('intro-title').textContent = t.introTitle;
    document.getElementById('intro-description').textContent = t.introDescription;
    document.getElementById('what-expect-title').textContent = t.whatExpectTitle;
    document.getElementById('expect-1').textContent = t.expect1;
    document.getElementById('expect-2').textContent = t.expect2;
    document.getElementById('expect-3').textContent = t.expect3;
    document.getElementById('expect-4').textContent = t.expect4;
    document.getElementById('expect-5').textContent = t.expect5;
    document.getElementById('instructions-title').textContent = t.instructionsTitle;
    document.getElementById('instruction-1').textContent = t.instruction1;
    document.getElementById('instruction-2').textContent = t.instruction2;
    document.getElementById('instruction-3').textContent = t.instruction3;
    document.getElementById('instruction-4').textContent = t.instruction4;
    document.getElementById('start-btn').textContent = t.startBtn;
    
    // Update results section
    document.getElementById('results-title').textContent = t.resultsTitle;
    document.getElementById('results-intro').textContent = t.resultsIntro;
    document.getElementById('restart-btn').textContent = t.restartBtn;
    document.getElementById('share-btn').textContent = t.shareBtn;
    
    // Update navigation buttons
    document.getElementById('prevBtn').textContent = t.prevBtn;
    document.getElementById('nextBtn').textContent = t.nextBtn;
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
    document.getElementById('section-title').textContent = section.title[currentLanguage];
    document.getElementById('progress-text').textContent = 
        `Question ${currentQuestion + 1} of ${section.questions.length} (Section ${currentSection + 1} of ${assessmentData.sections.length})`;
    
    // Update progress bar
    const totalQuestions = assessmentData.sections.reduce((sum, section) => sum + section.questions.length, 0);
    const questionsAnswered = responses.length;
    const progressPercentage = (questionsAnswered / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progressPercentage + '%';
    
    // Load question with translation if needed
    let questionHTML = `
        <div class="question">
            <div class="question-text">${question.text[currentLanguage]}</div>
    `;
    
    // Add translation if Bisaya is selected
    if (currentLanguage === 'bisaya') {
        questionHTML += `
            <div class="translation">${question.text.english}</div>
        `;
    }
    
    questionHTML += `
            <div class="options">
                <div class="option" onclick="selectOption('A')">
                    <div class="option-text">${question.optionA[currentLanguage]}</div>
    `;
    
    // Add translation if Bisaya is selected
    if (currentLanguage === 'bisaya') {
        questionHTML += `
                    <div class="option-translation">${question.optionA.english}</div>
        `;
    }
    
    questionHTML += `
                </div>
                <div class="option" onclick="selectOption('B')">
                    <div class="option-text">${question.optionB[currentLanguage]}</div>
    `;
    
    // Add translation if Bisaya is selected
    if (currentLanguage === 'bisaya') {
        questionHTML += `
                    <div class="option-translation">${question.optionB.english}</div>
        `;
    }
    
    questionHTML += `
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = questionHTML;
    
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
    event.target.closest('.option').classList.add('selected');
    
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
                <div class="strength-name">${theme.name[currentLanguage]}</div>
                <div class="strength-domain">${theme.domain[currentLanguage]}</div>
                <div class="strength-description">${theme.description[currentLanguage]}</div>
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
    document.getElementById('language-selection').classList.remove('hidden');
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
    console.log('Bilingual Strengths Assessment loaded successfully!');
});