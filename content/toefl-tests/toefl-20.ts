import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 20 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_20: ToeflTest = {
  id: "toefl-20",
  no: 20,
  title: "TOEFL iBT Practice Test 20",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Glass",
          text: "Glass is made by heating sand to a very high tempe{{rature}} until it melts. People in the Middle East were making small gl{{ass}} beads more than four thousand years a{{go}}. Later, around two thousand years ago, craftsmen disco{{vered}} that they could blow air into melted glass through a long tu{{be}}. This allowed them to make bowls and bott{{les}} quickly and cheaply. Today, glass is used everywh{{ere}}, from windows and phones to the fib{{ers}} that car{{ry}} internet sig{{nals}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Lab partner",
          text: [
            "Hi Zoe, I won't be able to come to the physics lab tomorrow because I have a dentist appointment I can't change.",
            "I've already asked Professor Kim, and she said you can do the experiment with Tom's group. I'll write up the results section this weekend.",
          ],
          questions: [
            { text: "Why can't the writer come to the lab?", options: ["The writer is sick.", "The writer has a dentist appointment.", "The lab is cancelled.", "The writer has another class."], answer: 1 },
            { text: "What will the writer do this weekend?", options: ["repeat the experiment", "write up the results section", "meet Professor Kim", "join Tom's group"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Water shortage measures",
          text: [
            "IMPORTANT: WATER-SAVING MEASURES ON CAMPUS",
            "Because of the ongoing drought, the city has asked all institutions to reduce water use by 15 percent. Lawn watering on campus will stop immediately, and fountains will be switched off.",
            "Students in residence halls are asked to limit showers to five minutes and to report any leaking taps or toilets to the maintenance office. Water-saving shower heads will be installed in all bathrooms over the next month.",
          ],
          questions: [
            { text: "Why are water-saving measures being introduced?", options: ["Water prices have increased.", "There is an ongoing drought.", "The pipes are being replaced.", "The university wants to save money."], answer: 1 },
            { text: "What are students asked to do?", options: ["stop using the dining hall", "limit showers to five minutes", "water the lawns at night", "buy bottled water"], answer: 1 },
            { text: "What will be installed over the next month?", options: ["new fountains", "water-saving shower heads", "new toilets", "water meters in every room"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How noise affects wildlife",
          paragraphs: [
            "Human activities have made the world a much noisier place. Traffic, aircraft, construction and ships produce sounds that travel far into forests, fields and oceans. For many animals, which rely on sound to find mates, locate food and detect predators, this noise can be a serious problem.",
            "Birds offer some of the clearest evidence. Studies in cities have found that some species, such as great tits, sing at a higher pitch in noisy areas, apparently so that their songs are not drowned out by the low rumble of traffic. Other birds sing earlier in the morning, before traffic builds up, or even at night. However, not all species can adjust, and research has shown that some birds avoid noisy roadsides altogether, even when the habitat is otherwise suitable.",
            "Noise also affects life underwater. Sound travels much farther in water than in air, and the engines of large ships create a constant background noise in busy shipping lanes. Whales, which communicate using low-frequency calls that can travel hundreds of kilometers, may have to call louder or more often to be heard. A rare opportunity to measure this effect came in 2001, when shipping was briefly reduced in a Canadian bay, and researchers recorded a drop in stress hormones in the local whales.",
          ],
          questions: [
            { text: "According to paragraph 1, why is noise a problem for many animals?", options: ["It makes them sleep less.", "They rely on sound to find mates, food and predators.", "It damages their eyes.", "It makes them migrate earlier."], answer: 1 },
            { text: "The word \"drowned out\" in paragraph 2 is closest in meaning to", options: ["covered by louder sound", "made longer", "repeated", "washed away"], answer: 0 },
            { text: "According to paragraph 2, how have some city birds adapted?", options: ["They sing at a higher pitch.", "They stopped singing.", "They moved underground.", "They sing only in winter."], answer: 0 },
            { text: "Why does noise travel far underwater?", options: ["Whales amplify it.", "Sound travels much farther in water than in air.", "Ships are louder underwater.", "Water is warmer than air."], answer: 1 },
            { text: "What did researchers observe when shipping was reduced in a Canadian bay?", options: ["Whales left the bay.", "Stress hormones in whales dropped.", "Whales stopped calling.", "More ships arrived later."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Learning to swim",
          text: "When I was eight, my parents signed me up for swimming les{{sons}}. At first, I was afraid of the wa{{ter}} and held on to the side of the po{{ol}}. My teacher was very pat{{ient}}. She showed me how to float on my ba{{ck}} and how to kick my le{{gs}}. After a few we{{eks}}, I could swim across the pool without he{{lp}}. Now I love swimming, and I go to the pool every Satur{{day}} with my bro{{ther}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Roommate wanted",
          text: [
            "ROOMMATE WANTED",
            "Two quiet graduate students looking for a third roommate in a three-bedroom house near the park. The house has a garden and a large kitchen.",
            "Rent is $520 per month, plus a share of the bills. Non-smokers only. Available from January. Contact Hana by email at hana.house@example.com.",
          ],
          questions: [
            { text: "Who already lives in the house?", options: ["a family", "two graduate students", "three undergraduates", "the landlord"], answer: 1 },
            { text: "What is NOT included in the rent?", options: ["the bedroom", "the bills", "the garden", "the kitchen"], answer: 1 },
            { text: "Who can apply?", options: ["only graduate students", "non-smokers", "people with pets", "students who can move in now"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why we have fingerprints",
          paragraphs: [
            "If you look closely at your fingertips, you will see patterns of tiny ridges. These patterns are called fingerprints, and everyone's are different, even those of identical twins.",
            "Fingerprints form before a baby is born. The pattern depends on genes, but also on small differences in the baby's position and surroundings in the womb.",
            "Scientists are still studying why we have fingerprints. One idea is that the ridges help us grip objects. Another is that they make our fingertips more sensitive, helping us feel the texture of surfaces.",
          ],
          questions: [
            { text: "What is special about fingerprints?", options: ["They change every year.", "Everyone's are different.", "Only adults have them.", "They are the same in twins."], answer: 1 },
            { text: "When do fingerprints form?", options: ["before a baby is born", "in early childhood", "during the teenage years", "in old age"], answer: 0 },
            { text: "What affects the pattern of fingerprints?", options: ["only genes", "genes and small differences in the womb", "the food a child eats", "the weather"], answer: 1 },
            { text: "The word \"grip\" in paragraph 3 is closest in meaning to", options: ["hold firmly", "throw", "clean", "drop"], answer: 0 },
            { text: "What is one idea about why we have fingerprints?", options: ["to keep our hands warm", "to make our fingertips more sensitive", "to help us swim", "to protect our nails"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Flynn effect",
          text: "During the twentieth century, average scores on intelligence tests rose steadily in many coun{{tries}}, by around three points per dec{{ade}}. This trend is named after the researcher James Flynn, who documented it in the 1980s. Because the increase was too rap{{id}} to be explained by genetic chan{{ges}}, researchers have proposed environ{{mental}} explanations, including better nutri{{tion}}, longer schooling and greater famil{{iarity}} with abstract thinking. Interestingly, some recent stu{{dies}} suggest that the trend has slowed or even rever{{sed}} in several wealthy nati{{ons}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Emergency alert system",
          text: [
            "To: All students and staff",
            "From: Campus Safety Office",
            "Subject: Register for the new emergency alert system",
            "The university has introduced a new emergency alert system that will send text messages and push notifications in case of severe weather, fire, building closures or other urgent situations. Email alerts will continue, but text alerts will reach you more quickly.",
            "All students and staff are automatically registered with their university email address. However, to receive text messages, you must add your mobile number through the student portal under 'Personal Details.' A test alert will be sent on September 20 at noon; no action is required when you receive it.",
          ],
          questions: [
            { text: "What is the purpose of the new system?", options: ["to send class schedules", "to send urgent alerts quickly", "to replace email entirely", "to collect student feedback"], answer: 1 },
            { text: "What must students do to receive text messages?", options: ["download a new app", "add their mobile number in the student portal", "visit the Campus Safety Office", "reply to the test alert"], answer: 1 },
            { text: "What should students do when they receive the test alert?", options: ["leave the building", "reply to confirm", "nothing", "call the Campus Safety Office"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "Why the Maya abandoned their cities",
          paragraphs: [
            "Between about 250 and 900 CE, the Maya of southern Mexico and Central America built dozens of large cities with stone pyramids, palaces and plazas, supported by intensive agriculture and complex systems of trade. During the ninth and tenth centuries, however, many of the great cities in the southern lowlands were gradually abandoned, their populations falling sharply. This period, often called the Classic Maya collapse, has long puzzled archaeologists.",
            "One influential explanation involves climate. Analyses of sediments from lakes and of mineral deposits in caves in the region indicate that the ninth and tenth centuries saw a series of severe droughts, some lasting years. Because Maya cities depended on seasonal rainfall to grow maize and to fill the reservoirs that supplied water through the dry season, prolonged drought would have caused serious food and water shortages.",
            "Most researchers, however, believe that drought alone cannot explain the collapse. Inscriptions record increasing warfare between rival cities during this period, and population growth and deforestation may have left agricultural systems vulnerable. Political factors also seem to have mattered: Maya kings claimed authority partly through their supposed ability to influence the gods, and repeated crop failures may have undermined their legitimacy. It is also important to note that Maya civilization did not disappear. Cities in the northern Yucatán continued to flourish for centuries, and millions of Maya people live in the region today.",
          ],
          questions: [
            { text: "According to paragraph 1, what happened during the ninth and tenth centuries?", options: ["The Maya built their first cities.", "Many southern lowland cities were abandoned.", "The Maya conquered Mexico.", "Maya cities doubled in size."], answer: 1 },
            { text: "The word \"prolonged\" in paragraph 2 is closest in meaning to", options: ["brief", "extended", "sudden", "mild"], answer: 1 },
            { text: "According to paragraph 2, why would drought have been especially damaging?", options: ["The Maya relied on seasonal rainfall for crops and water.", "The Maya lived near the sea.", "The Maya did not grow food.", "Drought destroyed the pyramids."], answer: 0 },
            { text: "Why does the author mention Maya kings' claims to influence the gods?", options: ["to show that crop failures may have weakened royal authority", "to explain how pyramids were built", "to describe Maya religion in general", "to prove that the kings caused the drought"], answer: 0 },
            { text: "What point does the author make at the end of paragraph 3?", options: ["Maya civilization ended completely.", "Maya civilization continued in other areas and Maya people live there today.", "The northern cities were destroyed first.", "The collapse happened in a single year."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Nur", prompt: "Why did you leave the concert early?", chunks: ["I", "had", "a terrible headache", "and", "needed to rest"], end: "." },
      { promptBy: "Henry", prompt: "Have you finished the lab report?", chunks: ["I", "still need", "to add", "the graphs", "and conclusion"], end: "." },
      { promptBy: "Beren", prompt: "I spend too much money on coffee.", chunks: ["why don't", "you", "make it", "at home", "in the morning"], end: "?" },
      { promptBy: "Joe", prompt: "Where is the meeting being held?", chunks: ["it", "will be", "in the conference room", "on", "the third floor"], end: "." },
      { promptBy: "Sevgi", prompt: "How was your first week of classes?", chunks: ["it", "was", "busy", "but", "very interesting"], end: "." },
      { promptBy: "Paul", prompt: "Why is the road closed?", chunks: ["workers", "are", "repairing", "a broken", "water pipe"], end: "." },
      { promptBy: "Zehra", prompt: "Can I join your study group?", chunks: ["you", "are", "welcome", "to join us", "on Thursday"], end: "." },
      { promptBy: "Mike", prompt: "What did you think of the lecture?", chunks: ["it", "was", "much more", "interesting", "than I expected"], end: "." },
      { promptBy: "Ebru", prompt: "We don't have enough time to finish.", chunks: ["could", "we", "ask", "the professor", "for an extension"], end: "?" },
      { promptBy: "Chris", prompt: "Why did you choose to study abroad?", chunks: ["I", "wanted to", "experience", "a different", "culture"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently completed an internship at a local company. Your supervisor was very helpful, and you would now like to ask her for a letter of recommendation for a graduate program.",
      to: "your former supervisor, Ms. Rivera",
      subject: "Request for a letter of recommendation",
      tasks: ["Thank your supervisor for the internship.", "Explain what program you are applying to and why.", "Ask whether she would be willing to write a letter and mention the deadline."],
      sample: "Dear Ms. Rivera,\n\nI hope you are well. I wanted to thank you again for your guidance during my summer internship in the marketing department. Working on the social media campaign for the new product line taught me a great deal, and I especially appreciated the time you spent explaining how to analyze customer data.\n\nI am now applying to a master's program in digital marketing at Westfield University. The internship confirmed that I want to build a career in this field, and the program offers courses in data analytics and consumer behavior that would help me develop the skills I began learning with your team.\n\nI was wondering whether you would be willing to write a letter of recommendation for my application. The deadline is January 15, and the letter can be submitted online through a link the university will send you. I would be happy to send you my CV and a summary of the projects I worked on.\n\nThank you very much for considering my request.\n\nBest regards,\nİrem Yıldız",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Brown",
        text: "In many countries, people are living longer, and the number of older adults is growing. Some people believe that older adults should be encouraged to keep working past the traditional retirement age. Others think that retirement allows older people to rest and makes room for younger workers. Should people be encouraged to work longer before retiring? Why or why not?",
      },
      students: [
        { name: "Emma", text: "Yes. Many older people are healthy and experienced, and work keeps them active and socially connected. It also helps pension systems, which are under pressure." },
        { name: "Onur", text: "I don't think so. Younger people already find it hard to get jobs. If older workers stay longer, there will be fewer opportunities for the next generation." },
      ],
      sample: "I think people should be encouraged, but not required, to work longer if they wish. Emma makes a convincing point about health and experience. My grandfather continued teaching part-time until he was seventy, and he often said that work gave his days structure and kept his mind sharp. Older workers also have knowledge that is difficult to replace, and they can train younger colleagues. Onur's concern about jobs for young people is understandable, but I'm not sure it is accurate. Economies do not have a fixed number of jobs, and experienced workers often create value that supports new positions. The key is flexibility: governments and employers could offer part-time or advisory roles so that older adults can gradually reduce their hours, which would benefit them, younger workers and pension systems at the same time.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are working at the visitor center of a national park. A ranger is telling you what to say to visitors.",
      sentences: [
        "Welcome to the national park.",
        "Maps of the hiking trails are free.",
        "Please stay on the marked paths.",
        "Feeding the animals is not allowed anywhere in the park.",
        "The lake trail is closed today because of flooding.",
        "Visitors who plan to camp overnight need a permit, which can be bought at this desk.",
        "If you see an injured animal or a fire, please call the emergency number printed on the back of your map immediately.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about the environment. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you do in your daily life to protect the environment?",
          sample: "I try to make small changes that add up. I use public transport or walk instead of taking taxis, and I carry a reusable water bottle and shopping bag. At home, I separate my recycling and try not to waste food by planning my meals for the week. I've also reduced how much meat I eat, because I read that meat production has a large environmental impact. These things aren't difficult once they become habits.",
        },
        {
          text: "Do you think individuals or governments have more responsibility for protecting the environment?",
          sample: "I think governments have more responsibility, because they can make changes on a much larger scale. For example, they can invest in renewable energy, improve public transport and set rules for factories. Individuals can help, but if recycling facilities don't exist or public transport is poor, it's hard for people to make greener choices. That said, individuals still matter, because public pressure is often what pushes governments to act.",
        },
        {
          text: "Some people say that protecting the environment is bad for the economy. Do you agree?",
          sample: "I don't really agree. In the short term, some environmental rules can increase costs for certain industries. But in the long term, protecting the environment can create new jobs, for example in renewable energy and public transport, and it prevents costly damage from floods, droughts and pollution. Many countries have shown that the economy can grow while emissions fall. So I'd say environmental protection and economic growth can support each other.",
        },
        {
          text: "What environmental problem do you think will be most important in the next twenty years?",
          sample: "I think water shortages will become one of the most serious problems. As temperatures rise, droughts are becoming more common in many regions, including parts of Turkey, and growing populations need more water for drinking and farming. This could lead to food shortages and even conflicts between countries that share rivers. To deal with it, we'll need better water management, less wasteful irrigation and technologies like recycling wastewater.",
        },
      ],
    },
  },
};
