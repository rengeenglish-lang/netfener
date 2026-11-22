import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 24 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_24: ToeflTest = {
  id: "toefl-24",
  no: 24,
  title: "TOEFL iBT Practice Test 24",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Eyeglasses",
          text: "For most of history, people whose eyesight became weak could do little to impr{{ove}} it. The first eyeglasses appeared in northern Italy at the end of the thirteenth cent{{ury}}. They had two small round len{{ses}} in frames of wood or bone, and people held them in front of their ey{{es}} or balanced them on their no{{ses}}. These early glasses helped older people re{{ad}}, which was important for monks and scho{{lars}}. Glasses with arms that rest on the ea{{rs}} were only invented in the eighteenth century, making them much eas{{ier}} to we{{ar}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Ride to the stadium",
          text: [
            "Hey Murat, are you still going to the basketball game tonight? My brother can drive us there at 6:30.",
            "We'll pick you up outside the library. If you'd rather take the metro, let me know and I'll save you a seat inside.",
          ],
          questions: [
            { text: "Who will drive to the game?", options: ["Murat", "the writer", "the writer's brother", "a taxi driver"], answer: 2 },
            { text: "Where will they pick Murat up?", options: ["at his home", "outside the library", "at the metro station", "at the stadium"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Noise complaint procedure",
          text: [
            "RESIDENCE LIFE: REPORTING NOISE PROBLEMS",
            "If noise from a neighbor is disturbing you, we encourage you to speak to them politely first, since many problems can be solved this way.",
            "If the problem continues, contact your resident assistant, who will speak to the residents involved. Noise after midnight can be reported 24 hours a day to the security desk at 555-0100. Repeated complaints may lead to a formal warning.",
          ],
          questions: [
            { text: "What should residents do first?", options: ["call security", "speak to the neighbor politely", "write a formal complaint", "move to another room"], answer: 1 },
            { text: "Who should residents contact if the problem continues?", options: ["the university president", "their resident assistant", "the police", "their professor"], answer: 1 },
            { text: "What may result from repeated complaints?", options: ["a formal warning", "a fine of $100", "immediate eviction", "a meeting with parents"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why elephants rarely get cancer",
          paragraphs: [
            "Cancer begins when a cell's DNA is damaged in ways that allow it to divide uncontrollably. Since every cell division carries a small risk of such damage, one might expect large, long-lived animals, which have many more cells and live for many years, to develop cancer far more often than small, short-lived ones. Yet this is not the case. Elephants, with roughly a hundred times as many cells as humans, have a lower rate of death from cancer than people do. This puzzle is known as Peto's paradox, after the scientist who first described it.",
            "Research published in 2015 suggested part of the explanation. Humans have a single pair of copies of a gene called TP53, which helps prevent cancer by detecting damaged DNA and either repairing it or causing the damaged cell to destroy itself. Elephants, by contrast, have about twenty copies of this gene. In laboratory experiments, elephant cells exposed to radiation were much more likely than human cells to self-destruct, removing damaged cells before they could become cancerous.",
            "Other large animals appear to have evolved different solutions. Bowhead whales, which can live for more than two hundred years, seem to have unusually effective systems for repairing damaged DNA. Scientists hope that understanding these natural defenses could eventually lead to new ways of preventing or treating cancer in humans.",
          ],
          questions: [
            { text: "According to paragraph 1, why might large animals be expected to get cancer more often?", options: ["They eat more food.", "They have more cells and live longer.", "They are less active.", "They have weaker immune systems."], answer: 1 },
            { text: "The word \"uncontrollably\" in paragraph 1 is closest in meaning to", options: ["without limits", "slowly", "carefully", "rarely"], answer: 0 },
            { text: "According to paragraph 2, what does the TP53 gene do?", options: ["It makes cells divide faster.", "It helps detect and deal with damaged DNA.", "It makes elephants larger.", "It protects against infections."], answer: 1 },
            { text: "What happened when elephant cells were exposed to radiation?", options: ["They became cancerous.", "They were more likely to self-destruct.", "They divided faster.", "They were unaffected."], answer: 1 },
            { text: "Why does the author mention bowhead whales?", options: ["to show that other large animals have different defenses", "to prove that whales often get cancer", "to compare whale and elephant diets", "to explain Peto's career"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My weekend routine",
          text: "On weekends, I like to relax after a busy we{{ek}}. On Saturday morning, I sleep la{{te}} and have a big breakfast with my fam{{ily}}. In the afternoon, I meet my frie{{nds}} in the city center. Sometimes we go to the cin{{ema}}, and sometimes we just walk and ta{{lk}}. On Sunday, I clean my ro{{om}} and do my home{{work}}. In the evening, I read a bo{{ok}} and go to bed ea{{rly}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Cooking club",
          text: [
            "JOIN THE INTERNATIONAL COOKING CLUB",
            "Every other Thursday, students from different countries teach the group how to cook a dish from their home country. Meetings are held in the residence hall kitchen at 6 p.m.",
            "Members pay $5 per meeting to cover ingredients, and everyone eats together at the end. Sign up at the student activities office.",
          ],
          questions: [
            { text: "How often does the club meet?", options: ["every Thursday", "every other Thursday", "once a month", "every weekend"], answer: 1 },
            { text: "Who teaches the dishes?", options: ["a professional chef", "students from different countries", "the residence hall staff", "a cooking teacher from the city"], answer: 1 },
            { text: "What is the $5 fee for?", options: ["membership for a year", "ingredients", "the kitchen rental", "a cookbook"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How deserts form",
          paragraphs: [
            "A desert is a place that receives very little rain, usually less than 250 millimeters a year. Not all deserts are hot; some, like those in Antarctica, are very cold.",
            "Many deserts form near mountains. When wet air from the sea meets a mountain range, it rises and cools, and most of its water falls as rain on that side of the mountains. By the time the air reaches the other side, it is dry.",
            "Other deserts form in areas where dry air from high in the atmosphere sinks toward the ground. This sinking air makes clouds and rain very rare. The Sahara is an example of this kind of desert.",
          ],
          questions: [
            { text: "What makes a place a desert?", options: ["high temperatures", "very little rain", "a lot of sand", "few animals"], answer: 1 },
            { text: "What does the passage say about Antarctica?", options: ["It has hot deserts.", "It has cold deserts.", "It has no deserts.", "It receives a lot of rain."], answer: 1 },
            { text: "Why is the air dry on the far side of mountains?", options: ["The wind is stronger there.", "Most of the water has already fallen as rain.", "The sun is hotter there.", "There are no clouds in the sky."], answer: 1 },
            { text: "The word \"rare\" in paragraph 3 is closest in meaning to", options: ["uncommon", "heavy", "cold", "dangerous"], answer: 0 },
            { text: "How did the Sahara form?", options: ["Wet air rose over mountains.", "Dry air from high in the atmosphere sank toward the ground.", "Rivers dried up.", "People cut down forests."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The paradox of choice",
          text: "Common sense suggests that having more options should make people happ{{ier}}. However, the psychologist Barry Schwartz has argued that an exces{{sive}} number of choices can have the opposite eff{{ect}}. In one widely cited stu{{dy}}, shoppers who were offered twenty-four types of jam were less lik{{ely}} to buy any than those offered only six. Schwartz suggested that too many alter{{natives}} make decisions more difficult and increase the fear of choos{{ing}} wrongly. Later research has found that the effect depe{{nds}} on circumstances, and it does not app{{ear}} in every sit{{uation}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Research participants needed",
          text: [
            "To: Students in the Faculty of Arts and Sciences",
            "From: Language Development Lab",
            "Subject: Paid participants needed for a study on bilingual memory",
            "We are looking for adult participants who speak both English and another language fluently to take part in a study on how bilingual people remember words. The study involves one session of about 45 minutes, during which you will complete computer tasks and a short questionnaire.",
            "Participants will receive $20 in cash at the end of the session. Students enrolled in Psychology 101 may choose to receive one hour of course credit instead of payment. Sessions are available Monday to Friday between 10 a.m. and 5 p.m. To book a session, please complete the online sign-up form.",
          ],
          questions: [
            { text: "Who can take part in the study?", options: ["any student", "adults who speak English and another language fluently", "only psychology students", "only native English speakers"], answer: 1 },
            { text: "How long is the session?", options: ["about 20 minutes", "about 45 minutes", "about two hours", "one full day"], answer: 1 },
            { text: "What option is available to Psychology 101 students?", options: ["a longer session", "course credit instead of payment", "a free textbook", "a double payment"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The origins of the Internet",
          paragraphs: [
            "The Internet grew out of a research project funded by the United States Department of Defense in the late 1960s. Its goal was to connect computers at universities and research centers so that scientists could share expensive computing resources. The resulting network, called ARPANET, sent its first message in October 1969, between computers at the University of California, Los Angeles, and Stanford Research Institute. The system crashed after the first two letters of the word 'login' had been transmitted.",
            "A key feature of ARPANET was a technique called packet switching. Instead of opening a dedicated line between two computers, as a telephone call does, messages were broken into small units called packets, each of which could travel by a different route and be reassembled at its destination. This made the network more efficient and more resilient, since traffic could be redirected if part of the network failed.",
            "During the 1970s, other networks were created, but they could not easily communicate with one another. In 1974, Vinton Cerf and Robert Kahn proposed a common set of rules, later known as TCP/IP, that allowed different networks to connect into a single 'network of networks.' ARPANET adopted these rules on January 1, 1983, a date often considered the birth of the Internet. For many years, however, it remained a tool mainly for researchers; it became widely used by the public only after the invention of the World Wide Web in the early 1990s made it easy to access and link information.",
          ],
          questions: [
            { text: "According to paragraph 1, what was the original goal of ARPANET?", options: ["to entertain the public", "to let scientists share computing resources", "to replace the telephone", "to sell computers"], answer: 1 },
            { text: "The word \"resilient\" in paragraph 2 is closest in meaning to", options: ["able to recover from problems", "expensive", "fast", "complicated"], answer: 0 },
            { text: "According to paragraph 2, how did packet switching work?", options: ["A dedicated line was opened between computers.", "Messages were broken into packets that could take different routes.", "Messages were sent by telephone.", "Computers were physically connected by cables only."], answer: 1 },
            { text: "What problem did TCP/IP solve?", options: ["Networks could not easily communicate with one another.", "Computers were too slow.", "Messages were too long.", "Universities did not have computers."], answer: 0 },
            { text: "According to paragraph 3, what made the Internet widely used by the public?", options: ["the first message in 1969", "the invention of the World Wide Web", "the end of ARPANET funding", "the adoption of packet switching"], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Gökhan", prompt: "Why are you learning to drive now?", chunks: ["I", "will need", "a car", "for", "my new job"], end: "." },
      { promptBy: "Amy", prompt: "Have you seen my blue notebook?", chunks: ["I", "think", "you left it", "in", "the classroom"], end: "." },
      { promptBy: "Kaan", prompt: "I can't concentrate at home.", chunks: ["why don't", "you", "study", "at", "the public library"], end: "?" },
      { promptBy: "Rachel", prompt: "Where are you staying in Rome?", chunks: ["we", "rented", "an apartment", "near", "the city center"], end: "." },
      { promptBy: "Burcu", prompt: "How was the dinner party?", chunks: ["the food", "was", "delicious", "and", "everyone had fun"], end: "." },
      { promptBy: "Tom", prompt: "Why is there no hot water?", chunks: ["the boiler", "is", "being", "repaired", "this morning"], end: "." },
      { promptBy: "Esma", prompt: "When is your graduation ceremony?", chunks: ["it", "will take place", "on", "the second", "Saturday of June"], end: "." },
      { promptBy: "Luke", prompt: "What did your manager say about the project?", chunks: ["she", "was", "pleased", "with", "our progress"], end: "." },
      { promptBy: "Ceylin", prompt: "It's going to rain this afternoon.", chunks: ["should", "we", "postpone", "the picnic", "until Sunday"], end: "?" },
      { promptBy: "Eli", prompt: "Why did you choose engineering?", chunks: ["I", "have", "always", "enjoyed", "solving problems"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently attended a three-day academic conference that your department helped pay for. Your department head has asked all students who received funding to write a short report.",
      to: "the head of your department, Professor Lane",
      subject: "Report on the regional linguistics conference",
      tasks: ["Thank the department for the funding.", "Describe what you did and learned at the conference.", "Explain how the experience will help your studies."],
      sample: "Dear Professor Lane,\n\nI would like to thank the department for funding my attendance at the Regional Linguistics Conference in Boston last week. Without this support, I would not have been able to cover the cost of travel and accommodation.\n\nDuring the three days, I attended more than ten presentations, mainly on second language acquisition, which is the focus of my thesis. I found a talk on how adult learners acquire pronunciation particularly useful, as it introduced a research method that I had not considered. I also presented a poster on my preliminary results and received helpful feedback from two researchers, one of whom offered to share a dataset with me.\n\nThis experience will help my studies in several ways. It has given me new ideas for my methodology, connected me with researchers in my field, and made me more confident about presenting my work. I plan to share what I learned with the other students in our research group next week.\n\nThank you again for this opportunity.\n\nBest regards,\nNazlı Aktaş",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Urban Planning",
      professor: {
        name: "Dr. Evans",
        text: "Many cities face a shortage of affordable housing. Some experts argue that the best solution is to allow taller and denser buildings, even in neighborhoods that currently have only houses. Others believe this would change the character of neighborhoods and that cities should instead build new housing on the edges of the city. Which approach do you think is better for solving housing shortages? Why?",
      },
      students: [
        { name: "Lily", text: "Building taller in existing neighborhoods is better. People can live close to jobs and public transport, and the city doesn't spread into farmland." },
        { name: "Serkan", text: "Building on the edges is better. Residents chose their neighborhoods for their quiet character, and tall buildings could create traffic and block sunlight." },
      ],
      sample: "I think allowing denser housing in existing neighborhoods is generally the better approach, although it should be done carefully. Lily makes an important point: when people live close to where they work and to public transport, they spend less time commuting and produce less pollution. Building on the edges of cities, as Serkan suggests, often requires long car journeys and destroys farmland and natural areas. However, Serkan's concerns about neighborhood character are understandable. Cities don't need to build skyscrapers next to small houses; moderate increases, such as three- or four-story apartment buildings near transport stations, can add many homes without dramatically changing an area. Combined with good design rules and investment in local services like schools and parks, this approach can provide more affordable housing while keeping neighborhoods pleasant to live in.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are volunteering at a city marathon. The race organizer is telling you what to say to runners.",
      sentences: [
        "Good morning, runners.",
        "The race starts in thirty minutes.",
        "Please collect your number at the tent.",
        "Water stations are located every five kilometers.",
        "Runners must wear their number on the front of their shirt.",
        "If you feel unwell during the race, please stop and speak to the nearest medical volunteer.",
        "After crossing the finish line, keep walking toward the exit, where you will receive your medal and a bottle of water.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with reading and books. The researcher will ask you some questions.",
      questions: [
        {
          text: "What kind of books do you enjoy reading, and why?",
          sample: "I mostly enjoy reading historical novels. They let me learn about different periods and cultures while following an exciting story, which makes history feel much more real than it did in school textbooks. Recently I read a novel set in Istanbul in the nineteenth century, and it made me want to learn more about that period. I also read some popular science books, especially about psychology, because I'm curious about why people behave the way they do.",
        },
        {
          text: "Do you prefer reading printed books or e-books? Why?",
          sample: "I prefer printed books for reading at home. I like the feeling of turning pages, and I find it easier to remember what I've read when I can see where it is on the page. Reading on paper is also less tiring for my eyes than reading on a screen. However, e-books are very convenient when I'm traveling, since I can carry many books in one small device, so I use both depending on the situation.",
        },
        {
          text: "Some people say that young people today read less than in the past. Do you agree?",
          sample: "I think young people read differently rather than less. It's true that fewer teenagers read long novels for pleasure, partly because of social media and video platforms that compete for their attention. But young people read a huge amount online, including articles, messages and posts. The concern is that this kind of reading is often short and fragmented, so they may have fewer chances to develop the concentration needed for longer, more complex texts.",
        },
        {
          text: "What could be done to encourage more people to read books?",
          sample: "I think making reading social could help a lot. Book clubs, reading challenges and author events give people a reason to read and someone to talk to about it. Libraries could also play a bigger role by offering comfortable spaces, digital lending and activities for families. In schools, letting students choose some of the books they read, rather than only assigning classics, would help them discover that reading can be enjoyable rather than just homework.",
        },
      ],
    },
  },
};
