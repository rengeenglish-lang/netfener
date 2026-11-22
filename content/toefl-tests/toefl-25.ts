import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 25 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_25: ToeflTest = {
  id: "toefl-25",
  no: 25,
  title: "TOEFL iBT Practice Test 25",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Refrigerators",
          text: "Before refrigerators were common, people kept food cold with ice. In winter, workers cut large bloc{{ks}} of ice from frozen lakes and stored them in special buil{{dings}} filled with sawdust. The ice was then deli{{vered}} to homes and shops, where it was placed in wooden ice bo{{xes}}. Electric refrigerators became popular in the 1920s and 1930s. They kept food fre{{sh}} much longer and changed the way people shop{{ped}} and cooked. Families no longer needed to buy fo{{od}} every day, and new products, such as frozen mea{{ls}}, beca{{me}} poss{{ible}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Missed call",
          text: [
            "Hi Dad, sorry I missed your call. I was in a lab session and had my phone on silent.",
            "I'm free after 5 today. I'll call you on my way home. Tell Mom I passed my driving test!",
          ],
          questions: [
            { text: "Why did the writer miss the call?", options: ["The phone was broken.", "The writer was in a lab session.", "The writer was driving.", "The writer was asleep."], answer: 1 },
            { text: "What good news does the writer share?", options: ["passing a driving test", "getting a new job", "finishing a lab report", "moving to a new apartment"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Charging stations for electric scooters",
          text: [
            "NEW: E-SCOOTER PARKING AND CHARGING",
            "Electric scooters may no longer be parked or charged inside academic buildings or residence halls because of fire safety concerns.",
            "Six new outdoor charging stations have been installed around campus, including outside the library and the student center. Charging is free for students. Scooters found inside buildings will be removed and can be collected from the security office.",
          ],
          questions: [
            { text: "Why can't scooters be charged inside buildings?", options: ["because of fire safety concerns", "because electricity is expensive", "because buildings are crowded", "because scooters are noisy"], answer: 0 },
            { text: "How much does charging cost for students?", options: ["$1 per hour", "nothing", "$5 per month", "It depends on the station."], answer: 1 },
            { text: "What happens to scooters found inside buildings?", options: ["They are destroyed.", "They are removed and kept at the security office.", "Their owners are fined.", "They are donated."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How the Panama Canal locks work",
          paragraphs: [
            "Ships traveling between the Atlantic and Pacific Oceans once had to sail around the southern tip of South America, a voyage of thousands of extra kilometers. The Panama Canal, opened in 1914, shortened this journey dramatically. However, building a canal across Panama was not simply a matter of digging a channel, because the land between the oceans rises well above sea level.",
            "Instead of cutting through the hills at sea level, engineers built a system of locks that lift ships up to an artificial lake about twenty-six meters above the sea and then lower them again on the other side. A lock is a chamber with gates at each end. When a ship enters, the gates close behind it, and water flows into the chamber, raising the ship to the level of the next section. To descend, water is released from the chamber, lowering the ship.",
            "Remarkably, the system uses no pumps. The water flows into the locks by gravity from the artificial lake, which is fed by rainfall. Each ship that passes uses tens of millions of liters of fresh water, which flows out to the sea. This makes the canal vulnerable to droughts, when the lake's level falls and the number of ships that can pass each day must be reduced.",
          ],
          questions: [
            { text: "According to paragraph 1, why did the canal need locks?", options: ["The land between the oceans rises above sea level.", "The oceans have different temperatures.", "Ships were too large for a channel.", "The canal was built underground."], answer: 0 },
            { text: "The word \"descend\" in paragraph 2 is closest in meaning to", options: ["go down", "move forward", "stop", "turn around"], answer: 0 },
            { text: "According to paragraph 2, how is a ship raised in a lock?", options: ["by a large crane", "by water flowing into the chamber", "by pumps lifting the ship", "by the tide"], answer: 1 },
            { text: "Where does the water for the locks come from?", options: ["from the ocean", "from an artificial lake fed by rainfall", "from underground wells", "from nearby rivers in other countries"], answer: 1 },
            { text: "Why is the canal vulnerable to droughts?", options: ["Ships cannot sail in hot weather.", "The lake's water level falls, limiting the number of ships.", "The gates stop working.", "Rainfall damages the locks."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A rainy day",
          text: "Yesterday it rained all day, and I could not go outsi{{de}}. At first, I was bored, so I called my best frie{{nd}}. She came to my house, and we played car{{ds}} and drank hot chocolate. Then we decided to bake cook{{ies}}. We made a big mess in the kitch{{en}}, but the cookies were deli{{cious}}. In the evening, we watched a funny mov{{ie}}. In the end, it was a very ni{{ce}} d{{ay}}, even without the s{{un}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Free campus tours",
          text: [
            "BECOME A CAMPUS TOUR GUIDE",
            "Are you friendly and proud of our university? Lead tours for visiting high school students and their parents.",
            "Guides work two hours a week, usually on Saturday mornings, and receive $14 per hour. Training is provided. Apply online by March 1.",
          ],
          questions: [
            { text: "Who will the guides show around?", options: ["new professors", "high school students and their parents", "international tourists", "university staff"], answer: 1 },
            { text: "When do guides usually work?", options: ["on weekday evenings", "on Saturday mornings", "on Sunday afternoons", "every day"], answer: 1 },
            { text: "What is provided for guides?", options: ["free meals", "training", "a free laptop", "accommodation"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why leaves fall in autumn",
          paragraphs: [
            "In autumn, many trees in cool regions lose all their leaves. These trees are called deciduous trees.",
            "Leaves use sunlight to make food for the tree, but they also lose a lot of water. In winter, the ground is often frozen, so the tree cannot get enough water. Dropping its leaves helps the tree save water.",
            "Before the leaves fall, the tree takes back useful nutrients from them. Then a special layer of cells forms where each leaf joins the branch, and the leaf breaks off. In spring, new leaves grow from buds.",
          ],
          questions: [
            { text: "What are deciduous trees?", options: ["trees that keep their leaves all year", "trees that lose all their leaves in autumn", "trees that grow only in deserts", "trees without leaves"], answer: 1 },
            { text: "Why is winter difficult for trees?", options: ["There is too much sunlight.", "The frozen ground makes it hard to get water.", "Insects eat the leaves.", "The days are too long."], answer: 1 },
            { text: "What does the tree do before its leaves fall?", options: ["takes back useful nutrients", "makes new leaves", "grows taller", "produces flowers"], answer: 0 },
            { text: "The word \"joins\" in paragraph 3 is closest in meaning to", options: ["connects to", "leaves", "covers", "breaks"], answer: 0 },
            { text: "Where do new leaves grow from in spring?", options: ["from the roots", "from buds", "from fallen leaves", "from flowers"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The halo effect",
          text: "The halo effect is a tendency for a positive impression in one area to influence how we judge someone in other, unrel{{ated}} areas. For instance, people who are physically attrac{{tive}} are often assumed to be more intelligent, kind or comp{{etent}}, even without evid{{ence}}. The term was introduced by the psychologist Edward Thorndike, who noticed that military off{{icers}} rating soldiers tended to give consis{{tently}} high or low scores across very different quali{{ties}}. The effect can influence job inter{{views}}, school grading and even cou{{rt}} deci{{sions}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Internship credit requirements",
          text: [
            "To: Third-year students, School of Business",
            "From: Career Development Office",
            "Subject: Earning academic credit for summer internships",
            "Students who complete a summer internship may earn three academic credits, provided that the internship lasts at least eight weeks and involves a minimum of 240 hours of work. Before starting, you must submit a learning agreement, signed by your workplace supervisor and a faculty advisor, describing your planned responsibilities.",
            "At the end of the internship, you will need to submit a 3,000-word reflective report and an evaluation form completed by your supervisor. Unpaid internships are eligible, but internships with family members' businesses are not. The deadline for learning agreements is June 1.",
          ],
          questions: [
            { text: "What is required for an internship to earn credit?", options: ["at least four weeks and 120 hours", "at least eight weeks and 240 hours", "a paid position", "a job offer at the end"], answer: 1 },
            { text: "Who must sign the learning agreement?", options: ["the student's parents", "the workplace supervisor and a faculty advisor", "the dean only", "another student"], answer: 1 },
            { text: "Which internships are NOT eligible?", options: ["unpaid internships", "internships abroad", "internships with family members' businesses", "internships longer than eight weeks"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "Why some cities sink",
          paragraphs: [
            "In a number of large cities around the world, the ground is slowly sinking, a process known as subsidence. Parts of Jakarta, the capital of Indonesia, have sunk by several meters over the past few decades, and some neighborhoods now lie below sea level, protected from the sea only by walls. Mexico City, Bangkok and Houston have also experienced significant subsidence.",
            "The main cause in most of these cities is the excessive pumping of groundwater. Many cities are built on soft sediments, such as clay, deposited by rivers or lakes. Water fills the tiny spaces between the particles of these sediments and helps support the weight of the ground above. When large amounts of water are pumped out for drinking and industry, the sediments compact, like a sponge being squeezed, and the land surface drops. Because clay compacts permanently, the ground does not rise again even if the water returns.",
            "Subsidence causes serious problems. It damages buildings, roads and pipes, and in coastal cities it increases the risk of flooding, especially as sea levels rise because of climate change. Some cities have managed to slow or even halt subsidence by restricting groundwater pumping and supplying water from other sources; Tokyo, which sank rapidly in the mid-twentieth century, is often cited as a successful example. Indonesia, however, has decided to move its capital to a new city on the island of Borneo, partly because of the problems facing Jakarta.",
          ],
          questions: [
            { text: "According to paragraph 1, what is subsidence?", options: ["the rising of sea levels", "the slow sinking of the ground", "the building of sea walls", "an earthquake"], answer: 1 },
            { text: "The word \"compact\" in paragraph 2 is closest in meaning to", options: ["press together", "dissolve", "expand", "move away"], answer: 0 },
            { text: "According to paragraph 2, why does pumping groundwater cause the land to sink?", options: ["The water carries the soil away to the sea.", "The sediments lose the water that supports them and compact.", "The pumps shake the ground.", "The water freezes underground."], answer: 1 },
            { text: "Why does the author mention Tokyo?", options: ["as a city that successfully slowed subsidence", "as a city that has moved its capital", "as the city that sank most", "as a city built on rock"], answer: 0 },
            { text: "What has Indonesia decided to do?", options: ["stop all groundwater pumping immediately", "move its capital to a new city on Borneo", "raise all buildings in Jakarta", "build a canal through Jakarta"], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Hatice", prompt: "Why did you take the stairs?", chunks: ["the elevator", "was", "full", "of", "people with boxes"], end: "." },
      { promptBy: "Ben", prompt: "Have you started your summer job?", chunks: ["I", "start", "next Monday", "at", "a bookshop"], end: "." },
      { promptBy: "Zeynep", prompt: "I forgot my umbrella again.", chunks: ["why don't", "you", "keep", "a spare one", "in your bag"], end: "?" },
      { promptBy: "Owen", prompt: "Where did you get that recipe?", chunks: ["my aunt", "sent it", "to me", "from", "Italy"], end: "." },
      { promptBy: "Pelin", prompt: "How was the museum tour?", chunks: ["the guide", "told", "us", "fascinating", "stories"], end: "." },
      { promptBy: "Dylan", prompt: "Why is the class canceled?", chunks: ["the professor", "is", "attending", "a conference", "in Berlin"], end: "." },
      { promptBy: "Sıla", prompt: "Do you know how to get to the stadium?", chunks: ["you", "can take", "the number", "five", "bus"], end: "." },
      { promptBy: "Jake", prompt: "What do you usually do on Sundays?", chunks: ["I", "usually", "visit", "my grandparents", "for lunch"], end: "." },
      { promptBy: "Nehir", prompt: "The printer is out of ink.", chunks: ["should", "we", "tell", "the office", "manager"], end: "?" },
      { promptBy: "Adam", prompt: "Why did you choose this apartment?", chunks: ["it", "has", "a lot of", "natural", "light"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a student representative for your class. Many students have complained that the deadline for a major assignment falls in the same week as three other exams.",
      to: "your professor, Dr. Moore",
      subject: "Request to change the assignment deadline",
      tasks: ["Explain your role and why you are writing.", "Describe the problem students are facing.", "Suggest a new deadline or another solution."],
      sample: "Dear Dr. Moore,\n\nI am writing as the student representative for your Introduction to Economics course. Several of my classmates have asked me to contact you about the deadline for the research assignment, which is currently due on Friday, December 6.\n\nThe problem is that most students in the course are also first-year business students, and we have three other exams that same week: accounting on Monday, statistics on Wednesday and management on Thursday. Many students are worried that they will not have enough time to prepare for the exams and also produce a research assignment of good quality.\n\nWould it be possible to move the deadline to Friday, December 13? This would give us time to focus on the exams first and then complete the assignment properly. If changing the deadline is not possible, perhaps students could be allowed to submit an outline by December 6 and the final version a week later.\n\nThank you for considering our request.\n\nKind regards,\nAyşenur Bal\nStudent Representative, ECON 101",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Health Sciences",
      professor: {
        name: "Dr. Singh",
        text: "Wearable devices such as smartwatches can track our steps, heart rate and sleep. Some people believe they help users live healthier lives. Others argue that they cause unnecessary anxiety and raise privacy concerns, since health data may be shared with companies. Overall, do you think wearable health trackers are beneficial? Why or why not?",
      },
      students: [
        { name: "Ava", text: "Yes. Seeing how many steps I take each day motivates me to walk more. Some watches have even detected heart problems early and saved lives." },
        { name: "Mert", text: "I'm skeptical. People become obsessed with numbers and worry about every small change. Also, companies may sell our health data to insurers or advertisers." },
      ],
      sample: "I believe wearable health trackers are beneficial overall, but users need to be careful about how they use them and who sees their data. Ava is right that the motivation they provide can be powerful. When I started using a fitness tracker, I began taking the stairs and walking to campus to reach my daily goal, and over a few months my fitness clearly improved. However, Mert raises two valid concerns. Some people do become anxious about their sleep scores or heart rate, even when the variations are normal, and health data is very sensitive. The solution is not to abandon these devices but to use them as general guides rather than medical tools, and to choose products with strong privacy protections. Governments should also make sure that companies cannot share health data without users' clear permission.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are working at the front desk of a public swimming pool. Your manager is telling you what to say to visitors.",
      sentences: [
        "Welcome to the city pool.",
        "Please take a shower before swimming.",
        "Swimming caps are required in all pools.",
        "The diving area is closed this afternoon.",
        "Children under eight must be with an adult in the water.",
        "Lockers can be used for free, but you will need a one-euro coin, which is returned.",
        "Swimming lessons for adults take place on Tuesday and Thursday evenings, and you can book them at this desk.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people use technology to communicate. The researcher will ask you some questions.",
      questions: [
        {
          text: "How do you usually keep in touch with friends and family?",
          sample: "I mostly use messaging apps to stay in touch, because they're quick and free. I have a family group where we share photos and news almost every day. With close friends, I prefer voice messages or calls, because it feels more personal than text. Once a week, I also have a video call with my parents, since I live in another city for university, and it's nice to see their faces and catch up properly.",
        },
        {
          text: "Do you prefer talking on the phone or sending messages? Why?",
          sample: "It depends on the situation. For quick questions or arrangements, I prefer messages, because the other person can answer when it suits them, and I don't interrupt them. But for important or emotional conversations, I prefer phone calls, because it's easier to understand someone's feelings from their voice, and misunderstandings are less likely. Messages can sometimes sound cold or rude even when that wasn't intended.",
        },
        {
          text: "Some people think that technology has made communication less meaningful. Do you agree?",
          sample: "I only partly agree. Technology has made it easy to send short, quick messages, and sometimes these replace longer, deeper conversations. But it has also made meaningful communication possible in ways that weren't before. I can talk to my cousin in Germany every week, and I have friends I met through online communities who have become very important to me. So I think it depends on how people use technology, rather than technology itself.",
        },
        {
          text: "How do you think communication will change in the next twenty years?",
          sample: "I think communication will become even more immediate and visual. Real-time translation is improving quickly, so people may soon be able to talk naturally with someone who speaks a completely different language. Virtual and augmented reality might also make video calls feel more like being in the same room. At the same time, I hope people will become more aware of the value of face-to-face contact and try to balance online and offline communication.",
        },
      ],
    },
  },
};
