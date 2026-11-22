import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 72 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_72: ToeflTest = {
  id: "toefl-72",
  no: 72,
  title: "TOEFL iBT Practice Test 72",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Clothespins",
          text: "Before electric dryers became common, almost every household dried its laundry outside on a li{{ne}}. To keep the clothes from blowing away, people used clothespins. The earliest clothespins were simple pieces of wood split at one e{{nd}}, which were pushed over the clothes and the line. They often slipped off in strong wi{{nd}}. In 1853, an American inventor patented a design with two pieces of wo{{od}} joined by a metal spr{{ing}}. This design held clothes much more firm{{ly}} and could be opened easily with one ha{{nd}}. It became the standard design around the wor{{ld}}. Today, many clothespins are made of plas{{tic}}, but wooden ones are still popular, and people also use them to hold bags of food or photos on a str{{ing}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a suit",
          text: [
            "Hi Cem, I have a job interview at a bank on Monday, and I don't own a suit. We're about the same size, so could I borrow your dark gray one?",
            "I'll take it to the dry cleaner before returning it. Could I pick it up on Saturday afternoon?",
          ],
          questions: [
            { text: "Why does the writer want to borrow a suit?", options: ["for a job interview", "for a wedding", "for a graduation", "for a party"], answer: 0 },
            { text: "What does the writer promise to do?", options: ["take the suit to the dry cleaner before returning it", "buy Cem a new suit", "return it the same day", "pay to rent it"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Language lab reopening",
          text: [
            "LANGUAGE LAB NOW OPEN",
            "The renovated language lab on the second floor of the Humanities Building is now open. It offers twenty computers with headsets, language learning software for twelve languages and quiet booths for speaking practice.",
            "The lab is open from 9 a.m. to 8 p.m. on weekdays. Students may book a speaking booth for up to one hour per day. Food and drinks, except water, are not allowed in the lab.",
          ],
          questions: [
            { text: "What does the language lab offer?", options: ["computers with headsets, software and speaking booths", "free language classes with teachers", "a café", "a library of novels"], answer: 0 },
            { text: "How long can students book a speaking booth?", options: ["up to one hour per day", "all day", "thirty minutes per week", "two hours per day"], answer: 0 },
            { text: "What is allowed in the lab?", options: ["water", "coffee", "snacks", "lunch"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How Stonehenge was built",
          paragraphs: [
            "Stonehenge, on Salisbury Plain in southern England, is one of the most famous prehistoric monuments in the world. It consists of a ring of enormous standing stones, some topped by horizontal stones called lintels. Construction took place in several stages over more than a thousand years, beginning around 3000 BCE with a circular ditch and bank, and continuing with the arrangement of the large stones around 2500 BCE.",
            "The monument contains two main types of stone. The largest, known as sarsens, weigh up to around twenty-five tons each and were brought from an area about twenty-five kilometers to the north. The smaller 'bluestones', each weighing a few tons, came from the Preseli Hills in Wales, more than two hundred kilometers away. How people without metal tools or the wheel transported these stones has long been debated. Many researchers believe the stones were dragged on wooden sledges, possibly over wooden rails, by large teams of people, while others have suggested that some were moved partly by water.",
            "The purpose of Stonehenge also remains a subject of discussion. The monument is aligned so that the sun rises in line with a particular entrance on the summer solstice, the longest day of the year, and sets in line with it on the winter solstice, which suggests that it was connected with the calendar and seasonal ceremonies. Archaeologists have also found human remains buried at the site, indicating that it served as a cemetery. Some researchers propose that it was a place of healing or a monument to unite communities from different regions. Whatever its purpose, its construction required remarkable organization and cooperation.",
          ],
          questions: [
            { text: "According to paragraph 1, how long did the construction of Stonehenge take?", options: ["more than a thousand years in several stages", "a few months", "about ten years", "one generation"], answer: 0 },
            { text: "According to paragraph 2, where did the bluestones come from?", options: ["the Preseli Hills in Wales", "Salisbury Plain", "France", "Scotland"], answer: 0 },
            { text: "The word \"transported\" in paragraph 2 is closest in meaning to", options: ["moved", "carved", "broke", "painted"], answer: 0 },
            { text: "What does the alignment of Stonehenge with the solstices suggest?", options: ["It was connected with the calendar and seasonal ceremonies.", "It was used as a fortress.", "It was a marketplace.", "It was built by accident."], answer: 0 },
            { text: "What evidence suggests that Stonehenge served as a cemetery?", options: ["human remains buried at the site", "ancient coins", "written records", "metal tools"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "The school play",
          text: "This year, our class performed a play for the whole sch{{ool}}. The play was about a brave girl who saves her vil{{lage}}. I played the role of the old ki{{ng}}. I had to learn many li{{nes}}, so I practiced every evening with my mot{{her}}. My friends made the costumes and painted the back{{ground}}. On the day of the show, the hall was full of par{{ents}}. I was very nervous, and once I forgot my li{{ne}}, but my friend helped me. At the end, everyone clap{{ped}} loudly. It was a won{{derful}} day.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Winter market",
          text: [
            "WINTER MARKET IN THE OLD TOWN!",
            "Visit our winter market every weekend in December in the Old Town Square, from 12 p.m. to 9 p.m. Find handmade gifts, warm drinks and traditional winter food.",
            "There will be live music every evening and a small ice rink for children. Entry is free. On December 20, a choir will perform holiday songs at 6 p.m.",
          ],
          questions: [
            { text: "When is the winter market open?", options: ["every weekend in December", "every day in November", "only on December 20", "every evening all winter"], answer: 0 },
            { text: "What is there for children?", options: ["a small ice rink", "a petting zoo", "a cinema", "a swimming pool"], answer: 0 },
            { text: "What will happen on December 20?", options: ["A choir will perform holiday songs.", "The market will close.", "Prices will be half off.", "There will be fireworks."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How elephants use their trunks",
          paragraphs: [
            "An elephant's trunk is its nose and upper lip together. It is very long and strong, and it has no bones. It contains thousands of muscles.",
            "Elephants use their trunks in many ways. They use them to breathe, smell, drink and eat. An elephant sucks water into its trunk and then sprays it into its mouth. It can also spray water or dust over its body to keep cool and protect its skin from the sun.",
            "The tip of the trunk is very sensitive. Elephants can pick up something as small as a peanut or as heavy as a log. They also use their trunks to greet each other and to comfort their babies.",
          ],
          questions: [
            { text: "What is an elephant's trunk?", options: ["its nose and upper lip together", "its tail", "a long tooth", "its ear"], answer: 0 },
            { text: "What does a trunk contain?", options: ["thousands of muscles", "many bones", "water only", "feathers"], answer: 0 },
            { text: "How do elephants keep cool?", options: ["by spraying water or dust over their bodies", "by sleeping in caves", "by flapping their trunks", "by eating ice"], answer: 0 },
            { text: "The word \"sensitive\" in paragraph 3 is closest in meaning to", options: ["able to feel very small things", "very heavy", "hard", "dangerous"], answer: 0 },
            { text: "What else do elephants use their trunks for?", options: ["to greet each other and comfort their babies", "to dig deep holes", "to fly", "to swim underwater only"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Self-serving bias",
          text: "When things go well, people tend to credit their own abilities; when things go badly, they often blame outside fac{{tors}}. Psychologists call this pattern the self-serving bi{{as}}. A student who receives a high grade might think, \"I studied ha{{rd}}\", while a student who fails might say, \"The test was un{{fair}}.\" Athletes, managers and politicians show similar patt{{erns}}. The bias may help protect people's self-est{{eem}} and keep them motivated after diffi{{culties}}. However, it can also prevent people from learning from their mis{{takes}}, since they may not recognize their own role in a fail{{ure}}. In teams, the bias can create con{{flict}} when each person takes credit for success but blames others for problems.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Peer mentors needed",
          text: [
            "To: Second- and third-year students",
            "From: First-Year Experience Office",
            "Subject: Become a peer mentor for new students",
            "We are looking for friendly and reliable students to serve as peer mentors for incoming first-year students next fall. Each mentor will be matched with five or six new students and will meet with them regularly during their first semester to answer questions, share study tips and help them get involved in campus life.",
            "Mentors must have a grade point average of at least 2.8 and attend a two-day training session in August. Although the position is unpaid, mentors receive a certificate, priority course registration and a reference letter upon request. Applications, which include two short essays, are due by April 10.",
          ],
          questions: [
            { text: "What will peer mentors do?", options: ["meet with new students to help them adjust to university", "teach first-year courses", "grade exams", "organize sports events"], answer: 0 },
            { text: "Which requirement is mentioned?", options: ["a GPA of at least 2.8", "a part-time job", "a car", "previous teaching experience"], answer: 0 },
            { text: "What benefit do mentors receive?", options: ["priority course registration", "a salary", "free housing", "a scholarship"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The science of habit formation",
          paragraphs: [
            "Much of human behavior consists of habits: actions performed automatically in response to familiar situations, with little conscious thought. Researchers estimate that a substantial portion of our daily actions, from brushing our teeth to checking our phones, are performed largely out of habit. Habits are efficient because they free the mind to focus on other tasks, but they can also make it difficult to change unhealthy behaviors.",
            "Psychologists describe habits as forming through a repeated sequence. First, a cue, such as a time of day, a place or a feeling, triggers the behavior. Then the behavior itself is performed. Finally, the behavior is followed by a reward, such as pleasure, relief or a sense of accomplishment. When this sequence is repeated many times in a stable context, the brain gradually links the cue directly to the behavior, so that the action begins almost automatically when the cue appears. Brain imaging studies suggest that, as habits form, control of the behavior shifts from areas involved in decision-making to areas associated with automatic routines.",
            "This understanding has practical implications. Studies indicate that forming a new habit takes, on average, around two months of consistent repetition, though the time varies widely between people and behaviors. People who want to build a habit, such as exercising, may find it helpful to attach the new behavior to an existing cue, for example by going for a walk immediately after lunch. Breaking a bad habit is often easier if people change their environment to remove the cue, since willpower alone tends to be unreliable. In this sense, changing behavior may depend less on motivation than on designing everyday situations wisely.",
          ],
          questions: [
            { text: "According to paragraph 1, why are habits efficient?", options: ["They free the mind to focus on other tasks.", "They always lead to healthy behavior.", "They require a lot of thought.", "They change frequently."], answer: 0 },
            { text: "According to paragraph 2, what is the correct sequence in habit formation?", options: ["cue, behavior, reward", "reward, cue, behavior", "behavior, reward, cue", "cue, reward, behavior"], answer: 0 },
            { text: "The word \"triggers\" in paragraph 2 is closest in meaning to", options: ["causes to start", "prevents", "rewards", "hides"], answer: 0 },
            { text: "According to paragraph 3, how long does it take on average to form a new habit?", options: ["around two months", "one day", "one week", "two years"], answer: 0 },
            { text: "What does the author suggest about breaking a bad habit?", options: ["Changing one's environment to remove the cue can help.", "Willpower alone is always enough.", "It is impossible.", "People should ignore the cue."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Yusuf", prompt: "Why are you up so late?", chunks: ["I", "am watching", "the football", "match", "from Brazil"], end: "." },
      { promptBy: "Kate", prompt: "Did you enjoy the bike ride?", chunks: ["we", "rode", "along", "the coast", "for two hours"], end: "." },
      { promptBy: "Melek", prompt: "I'm always hungry in the afternoon.", chunks: ["why don't", "you", "bring", "some fruit", "to work"], end: "?" },
      { promptBy: "Ian", prompt: "How did you hear about the course?", chunks: ["my friend", "told me", "about it", "last", "month"], end: "." },
      { promptBy: "Tuba", prompt: "When does the museum close today?", chunks: ["it", "closes", "early", "on", "Sundays"], end: "." },
      { promptBy: "Rick", prompt: "Why is the river so clean now?", chunks: ["the city", "built", "a new", "water treatment", "plant"], end: "." },
      { promptBy: "Elçin", prompt: "What did you learn in the workshop?", chunks: ["we", "learned", "how to", "manage", "our time better"], end: "." },
      { promptBy: "Paul", prompt: "Where are you going this weekend?", chunks: ["we", "are visiting", "friends", "in", "the countryside"], end: "." },
      { promptBy: "Burcu", prompt: "I don't understand these instructions.", chunks: ["should", "we", "watch", "a video", "about it"], end: "?" },
      { promptBy: "Mark", prompt: "Why did you start cycling to work?", chunks: ["it", "helps me", "stay fit", "and", "save money"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are organizing a reunion for your high school class, which graduated ten years ago. You want to invite your former teacher, Mr. Arslan, who was very important to many students.",
      to: "your former teacher, Mr. Arslan",
      subject: "Invitation to our class reunion",
      tasks: ["Remind him who you are.", "Explain the reunion plans.", "Invite him and explain why his presence would be special."],
      sample: "Dear Mr. Arslan,\n\nI hope this email finds you well. My name is Deniz Kara, and I was a student in your history class at Atatürk High School from 2012 to 2015. You may remember me as the student who always asked too many questions about ancient Rome!\n\nI am writing because I am organizing a ten-year reunion for our graduating class. The reunion will take place on Saturday, June 21, at 7 p.m. at the Garden Restaurant near our old school. About sixty former classmates have already confirmed that they will attend, and we are planning dinner, a slideshow of old photos and some short speeches.\n\nWe would be truly honored if you could join us. Many of my classmates have told me that your lessons inspired them, not only to enjoy history but also to think critically and believe in themselves. Several of us even became teachers because of you. Your presence would make the evening very special. Please let me know if you are able to come.\n\nWith warm regards,\nDeniz Kara",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Business Studies",
      professor: {
        name: "Dr. Coleman",
        text: "Some companies have begun offering employees the option to work from anywhere in the world, as long as they complete their work. Supporters say this attracts talented workers and improves job satisfaction. Others worry that it weakens teamwork and makes it harder to manage employees across time zones. Should companies allow employees to work from anywhere? Explain your view.",
      },
      students: [
        { name: "Zoe", text: "Yes. People can live where they want, closer to family or in cheaper places. Happier employees are more productive and stay with the company longer." },
        { name: "Mert", text: "I'm not sure. If team members are in different time zones, it's hard to meet and solve problems together. Some people also feel lonely." },
      ],
      sample: "I believe companies should allow employees to work from anywhere when the nature of the job makes it possible, but with some clear guidelines. Zoe makes a convincing argument: this flexibility allows people to live closer to family, move to areas with a lower cost of living and organize their lives in ways that suit them. As a result, they are often more satisfied and less likely to leave, and companies can hire talented people regardless of location. However, Mert raises a valid point about teamwork. When colleagues are spread across many time zones, scheduling meetings becomes difficult, and some employees may feel isolated. To address this, companies could require a few hours of overlap each day for meetings and organize regular in-person gatherings to build relationships.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new assistant at a university admissions office. Your supervisor is telling you what to say to visitors.",
      sentences: [
        "Good morning, welcome to the admissions office.",
        "Campus tours leave every hour from this room.",
        "Please write your name on this list.",
        "The tour takes about ninety minutes.",
        "Brochures for every program are on that table.",
        "If you have questions about scholarships, you can speak with an advisor in the office next door.",
        "Applications for next year must be submitted online by January fifteenth, and all supporting documents should be uploaded at the same time.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's habits and daily routines. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe a good habit that you have.",
          sample: "One good habit I have is going for a short walk every evening after dinner. I started doing it about a year ago because I was spending too much time sitting while studying. Now I walk for about thirty minutes, usually along the same route near my apartment. It helps me relax, clear my mind and sleep better. It has become so automatic that I feel strange if I skip it.",
        },
        {
          text: "Is there a habit you would like to change?",
          sample: "Yes, I would like to stop checking my phone first thing in the morning. As soon as I wake up, I usually read messages and social media, and sometimes I spend twenty minutes in bed doing that. It makes my mornings feel rushed and stressful. I'm planning to leave my phone in another room at night and use a normal alarm clock instead, so I can start the day more calmly.",
        },
        {
          text: "Do you think it is easier to build good habits when you are young?",
          sample: "I think it's often easier to build habits when you're young, because children's routines are usually organized by their parents and schools, and they haven't developed as many bad habits yet. However, adults can also build good habits successfully, especially when they understand why the habit is important and plan carefully. In some ways, adults have an advantage, because they can choose their own environment and goals.",
        },
        {
          text: "How can parents help children develop good habits?",
          sample: "Parents can help children develop good habits mainly by setting a good example, since children copy what they see. For instance, if parents read regularly, children are more likely to enjoy reading. Parents can also create consistent routines, like a fixed bedtime and regular times for homework. Praising children's efforts, rather than only results, can encourage them to keep trying. Making habits fun, such as cooking healthy meals together, can also help.",
        },
      ],
    },
  },
};
