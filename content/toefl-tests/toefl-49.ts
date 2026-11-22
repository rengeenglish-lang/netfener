import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 49 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_49: ToeflTest = {
  id: "toefl-49",
  no: 49,
  title: "TOEFL iBT Practice Test 49",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Chopsticks",
          text: "Chopsticks are used every day by more than a billion people in East Asia. They were first developed in China at least three thousand ye{{ars}} ago. At first, they were used mainly for cook{{ing}}, because long sticks allowed people to reach into pots of boiling wa{{ter}} or hot oil. Later, as food was cut into small pie{{ces}} before cooking, chopsticks became common for ea{{ting}} as well. The custom spread to Japan, Korea and Viet{{nam}}, where different styles developed. Japanese chopsticks, for example, are usually shor{{ter}} and pointed, while Korean ones are often made of met{{al}}. Learning to use them requires prac{{tice}}, but many visitors enjoy the chal{{lenge}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a calculator",
          text: [
            "Hi Burcu, my calculator stopped working this morning and I have my statistics exam at 2 p.m. Do you have a spare one I could borrow?",
            "I'll be in the library on the second floor until 1:30. If you can bring it there, I'll give it back right after the exam. You're a lifesaver!",
          ],
          questions: [
            { text: "Why does the writer need a calculator?", options: ["The writer's calculator broke before an exam.", "The writer lost it on the bus.", "The writer is buying a new one.", "The writer's teacher asked for it."], answer: 0 },
            { text: "Where will the writer be until 1:30?", options: ["on the second floor of the library", "in the exam room", "at the cafeteria", "at home"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Museum free entry day",
          text: [
            "FREE ENTRY FOR STUDENTS",
            "On the first Wednesday of every month, the City Art Museum offers free entry to all students with a valid student card. The museum is open from 10 a.m. to 8 p.m. on these days.",
            "Special exhibitions are not included in the free entry, but students can visit them at half price. Free guided tours in English start at 3 p.m. and 6 p.m.; no booking is required.",
          ],
          questions: [
            { text: "When is the museum free for students?", options: ["on the first Wednesday of every month", "every weekend", "every evening after 6 p.m.", "during the summer only"], answer: 0 },
            { text: "What is true about special exhibitions?", options: ["Students can visit them at half price.", "They are free for students.", "They are closed on free days.", "They require a booking."], answer: 0 },
            { text: "What is said about the guided tours?", options: ["They are free and need no booking.", "They cost extra.", "They are only in the morning.", "They must be booked a week in advance."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How coral islands form",
          paragraphs: [
            "In the tropical Pacific and Indian Oceans, there are thousands of low, ring-shaped islands surrounding shallow lagoons. These islands, known as atolls, are made almost entirely of coral, the hard skeletons produced by tiny marine animals. Coral reefs can only grow in warm, clear, shallow water, where sunlight reaches the algae living inside the coral. This raises a puzzle: many atolls rise from the deep ocean floor, thousands of meters below the surface, far deeper than coral can live.",
            "The explanation was first proposed by Charles Darwin in the 1830s. Darwin suggested that atolls begin as fringing reefs around volcanic islands. Over millions of years, the volcano becomes inactive and slowly sinks as the ocean floor beneath it cools and the island erodes. As the island sinks, the coral continues to grow upward toward the light, keeping pace with the sinking. Eventually, the volcano disappears completely beneath the water, leaving only a ring of coral around a central lagoon.",
            "Darwin's theory could not be tested directly during his lifetime. In the 1950s, however, scientists drilled deep into an atoll in the Marshall Islands and found more than a thousand meters of coral resting on volcanic rock, confirming his explanation. Today, atolls face new threats. Because most rise only a few meters above sea level, they are extremely vulnerable to rising seas caused by climate change, and warming ocean temperatures can cause coral bleaching, which weakens the reefs that protect and build the islands.",
          ],
          questions: [
            { text: "According to paragraph 1, what is puzzling about many atolls?", options: ["They rise from depths where coral cannot live.", "They are made of sand.", "They are found only in cold seas.", "They have no lagoons."], answer: 0 },
            { text: "According to paragraph 2, how do atolls begin?", options: ["as fringing reefs around volcanic islands", "as sand banks in rivers", "as floating plants", "as pieces of continents"], answer: 0 },
            { text: "The phrase \"keeping pace with\" in paragraph 2 is closest in meaning to", options: ["moving at the same rate as", "falling behind", "stopping", "replacing"], answer: 0 },
            { text: "How was Darwin's theory confirmed?", options: ["Scientists drilled through coral and found volcanic rock below.", "Darwin observed a volcano sinking.", "Divers found fossils of fish.", "Satellites photographed the ocean floor."], answer: 0 },
            { text: "According to paragraph 3, why are atolls vulnerable to climate change?", options: ["They rise only a few meters above sea level.", "They are made of volcanic rock.", "They are located near the poles.", "They have no coral."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our mountain holiday",
          text: "Last winter, my family spent a week in a small village in the moun{{tains}}. We stayed in a wooden ho{{use}} with a big fireplace. Every morning, we walked in the sn{{ow}} and looked at the beautiful vi{{ew}}. My father taught me how to ski on a small hi{{ll}}. I fell many times, but it was very f{{un}}. In the evenings, we sat by the fi{{re}} and played cards. My mother made hot so{{up}} every night. On the last day, I did not want to go ho{{me}}. I hope we can go back next ye{{ar}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Language café",
          text: [
            "PRACTICE A NEW LANGUAGE!",
            "Come to the Language Café every Monday from 7 to 9 p.m. at Bean & Book on Park Road. Tables are organized by language, including English, German, Spanish and Arabic.",
            "Entry is free, but please buy a drink. Everyone is welcome, from beginners to advanced speakers. Volunteer hosts at each table help keep the conversation going.",
          ],
          questions: [
            { text: "What can people do at the Language Café?", options: ["practice speaking a new language", "take a formal language exam", "buy language books", "watch films"], answer: 0 },
            { text: "What are visitors asked to do?", options: ["buy a drink", "pay an entry fee", "bring a dictionary", "book a table"], answer: 0 },
            { text: "What do the volunteer hosts do?", options: ["help keep the conversation going", "serve food", "teach grammar lessons", "check tickets"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How squirrels find their nuts",
          paragraphs: [
            "In autumn, squirrels are very busy. They collect nuts and seeds and bury them in many different places. This food helps them survive the winter.",
            "A single squirrel may bury thousands of nuts. Scientists have found that squirrels remember where they hid many of them. They also use their strong sense of smell to find nuts under the ground, even under snow.",
            "Squirrels do not find all the nuts they bury. The forgotten nuts can grow into new trees. In this way, squirrels help forests spread and grow.",
          ],
          questions: [
            { text: "Why do squirrels bury nuts in autumn?", options: ["to survive the winter", "to hide them from people", "to grow new trees on purpose", "to keep them clean"], answer: 0 },
            { text: "How many nuts may a single squirrel bury?", options: ["thousands", "about ten", "only one", "about a hundred"], answer: 0 },
            { text: "The word \"bury\" in paragraph 1 is closest in meaning to", options: ["hide under the ground", "eat quickly", "throw away", "carry"], answer: 0 },
            { text: "How do squirrels find their nuts?", options: ["by memory and smell", "by sight only", "by listening", "by following other animals"], answer: 0 },
            { text: "What can happen to nuts that squirrels forget?", options: ["They can grow into new trees.", "They turn into stones.", "Birds always eat them.", "They disappear."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Present bias",
          text: "Many people plan to start exercising, saving money or eating healthier \"next week\", but when next week arrives, they postpone again. Economists use the term present bias to describe the tendency to give much more wei{{ght}} to immediate rewards than to future ones. In experiments, participants often prefer a small amount of mo{{ney}} today over a larger amount a month la{{ter}}. Yet when both options are moved into the fut{{ure}}, the same people usually choose the larger, later rew{{ard}}. This inconsis{{tency}} helps explain why people struggle with long-term go{{als}}. Some solutions, such as automatic sav{{ings}} plans, work by removing the need to make a new deci{{sion}} each time temp{{tation}} appears.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Exam accommodation requests",
          text: [
            "To: Students registered with the Accessibility Services Office",
            "From: Accessibility Services Office",
            "Subject: Requesting accommodations for final exams",
            "If you require accommodations for your final exams, such as extra time, a separate room or the use of a computer, you must submit a request through the online portal by November 20. Requests received after this date may not be possible to arrange.",
            "Your request must be supported by current documentation from a qualified professional, which should already be on file with our office. Once your request is approved, you will receive a confirmation email listing your exam times and locations. Please note that exams taken with accommodations may be scheduled at a slightly different time from the main exam, and you should check your confirmation carefully.",
          ],
          questions: [
            { text: "What must students do by November 20?", options: ["submit an accommodation request through the portal", "register for their exams", "meet with their professors", "pay an exam fee"], answer: 0 },
            { text: "What must support the request?", options: ["current documentation from a qualified professional", "a letter from a classmate", "a previous exam paper", "a personal essay"], answer: 0 },
            { text: "Why should students check their confirmation carefully?", options: ["Their exam may be at a slightly different time.", "The exam may be canceled.", "The confirmation contains exam questions.", "They need to sign and return it."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The history of standardized testing",
          paragraphs: [
            "Standardized tests, in which all candidates answer the same questions under the same conditions and are scored in the same way, have a long history. As early as the seventh century, imperial China used written examinations to select government officials. Candidates studied for years to master classical texts, and the examinations were intended to choose officials on the basis of merit rather than family connections, although in practice wealthy families had many advantages.",
            "In the West, standardized testing expanded rapidly in the early twentieth century. Psychologists developed intelligence tests that claimed to measure mental ability, and during the First World War the United States Army tested more than a million recruits to assign them to different roles. After the war, similar tests were adapted for schools and universities. Supporters argued that such tests offered an objective way to compare students from different schools and backgrounds.",
            "Standardized testing has, however, been the subject of intense debate. Critics point out that test scores are often closely linked to family income, since wealthier students can afford private tutoring and test preparation courses. Others argue that an emphasis on high-stakes testing encourages teachers to 'teach to the test', narrowing the curriculum and reducing time for creative or practical learning. In recent years, a number of universities have made test scores optional in admissions, while others have returned to requiring them, arguing that scores help identify talented students whose abilities might otherwise be overlooked.",
          ],
          questions: [
            { text: "According to paragraph 1, what was the intended purpose of imperial Chinese examinations?", options: ["to select officials on the basis of merit", "to train soldiers", "to measure intelligence", "to choose religious leaders"], answer: 0 },
            { text: "According to paragraph 2, why did the US Army test recruits during the First World War?", options: ["to assign them to different roles", "to decide their salaries", "to prepare them for university", "to test new weapons"], answer: 0 },
            { text: "The word \"objective\" in paragraph 2 is closest in meaning to", options: ["fair and not influenced by personal opinion", "difficult", "expensive", "secret"], answer: 0 },
            { text: "According to paragraph 3, why are test scores often linked to family income?", options: ["Wealthier students can afford tutoring and test preparation.", "Tests are only given in wealthy areas.", "Poorer students are not allowed to take tests.", "Test questions are about money."], answer: 0 },
            { text: "What does paragraph 3 suggest about universities' current approach to test scores?", options: ["Universities disagree, with some making them optional and others requiring them.", "All universities have stopped using them.", "All universities now require them.", "Universities rely only on test scores."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Serdar", prompt: "Why are you wearing sunglasses indoors?", chunks: ["I", "just", "had", "an eye", "examination"], end: "." },
      { promptBy: "Chloe", prompt: "Did you see the fireworks last night?", chunks: ["we", "watched them", "from", "the roof", "of our building"], end: "." },
      { promptBy: "Melis", prompt: "I'm too nervous to call the landlord.", chunks: ["would you", "like me", "to call", "him", "for you"], end: "?" },
      { promptBy: "Jim", prompt: "How was your trip to the countryside?", chunks: ["it", "was", "quiet", "and very", "relaxing"], end: "." },
      { promptBy: "Elif", prompt: "Where did you buy that beautiful lamp?", chunks: ["I", "found it", "at", "a flea market", "last weekend"], end: "." },
      { promptBy: "Owen", prompt: "Why is the train delayed?", chunks: ["there is", "a problem", "with", "the signals", "near the station"], end: "." },
      { promptBy: "Aynur", prompt: "Who is your favorite writer?", chunks: ["I", "really", "enjoy", "reading", "Orhan Pamuk"], end: "." },
      { promptBy: "Sam", prompt: "When will you finish your degree?", chunks: ["I", "should", "graduate", "next", "June"], end: "." },
      { promptBy: "Ceyda", prompt: "This box of books is very heavy.", chunks: ["should", "we", "use", "the trolley", "instead"], end: "?" },
      { promptBy: "Dean", prompt: "Why did you start learning to paint?", chunks: ["my therapist", "suggested", "it", "as a way", "to relax"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "A new student from another country, Mina, has just joined your class. Your teacher has asked you to help her settle in. You want to write to Mina to welcome her.",
      to: "your new classmate, Mina",
      subject: "Welcome to our class!",
      tasks: ["Welcome Mina and introduce yourself.", "Give her some useful information about the school or city.", "Invite her to an activity."],
      sample: "Hi Mina,\n\nWelcome to our class! My name is Ece, and our teacher, Mr. Polat, asked me to help you settle in during your first few weeks. I'm in my second year here, and I'm also from out of town, so I know how strange everything can feel at the beginning.\n\nHere are a few useful tips. The student card office is on the ground floor of the main building, and you'll need your card to use the library and the cafeteria. The cheapest and fastest way to get around the city is by tram; you can buy a monthly student pass at any station. Also, the café behind the library has the best and cheapest lunches on campus!\n\nThis Friday evening, a few of us from class are going to a small concert in the old town, and we'd love you to join us. It would be a great chance to meet everyone in a relaxed setting. We'll meet at the main gate at 7. Let me know if you'd like to come, or if you have any questions at all.\n\nSee you soon,\nEce",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Political Science",
      professor: {
        name: "Dr. Howard",
        text: "In some countries, voting in national elections is compulsory, and citizens who do not vote may have to pay a small fine. Supporters say this ensures that governments represent the whole population. Opponents argue that voting is a right, not a duty, and that people should be free to choose whether to participate. Should voting be compulsory? Why or why not?",
      },
      students: [
        { name: "Grace", text: "Yes. When voting is compulsory, almost everyone participates, so politicians have to pay attention to all groups, not just those who usually vote." },
        { name: "Ahmet", text: "No. Forcing people to vote doesn't mean they'll make informed choices. Some will just choose randomly, which doesn't improve democracy." },
      ],
      sample: "I think compulsory voting has real advantages, but I would not support it unless voters also have the option to submit a blank ballot. Grace makes a strong point: in countries such as Australia, compulsory voting leads to very high participation, so election results reflect the views of the whole population rather than only those of older or wealthier citizens, who tend to vote more. Politicians must then appeal to everyone. However, Ahmet is right that forcing people to vote does not guarantee thoughtful choices, and some citizens may feel their freedom is being limited. Allowing a blank or 'none of the above' option would respect people who do not want to support any candidate. Combined with better civic education, compulsory participation could strengthen democracy.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new crew member at a ferry company. The captain is telling you what to announce to passengers.",
      sentences: [
        "Good morning, and welcome aboard.",
        "Please keep your tickets with you.",
        "Life jackets are under every seat.",
        "The café on the upper deck is now open.",
        "Passengers may not stand near the edge of the deck.",
        "Our journey to the island will take about forty minutes, depending on the weather conditions.",
        "When we arrive, please wait until the ferry has stopped completely before standing up, and passengers with cars should return to the lower deck.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with reading and books. The researcher will ask you some questions.",
      questions: [
        {
          text: "What kind of books or articles do you enjoy reading?",
          sample: "I mostly enjoy reading mystery novels and articles about science. Mystery novels keep me interested because I always want to find out who committed the crime, and I like trying to solve the puzzle before the detective does. Science articles, on the other hand, help me learn about new discoveries, like space exploration or medical research. I usually read science articles online and novels in printed form before going to sleep.",
        },
        {
          text: "Do you prefer reading printed books or e-books?",
          sample: "I prefer printed books for reading novels, because I like the feeling of turning the pages, and I find it easier to concentrate without notifications from my phone. Reading on paper also feels more relaxing before bed. However, e-books are very convenient when I'm traveling, since I can carry hundreds of books on one small device. For studying, I often use e-books because I can search for words quickly.",
        },
        {
          text: "Do you think young people today read less than in the past?",
          sample: "I think young people today read differently rather than less. They may read fewer traditional books, but they read a lot of text online, such as news, social media posts and messages. The problem is that this kind of reading is often short and quick, so they may not develop the concentration needed for long, complex texts. Encouraging young people to read longer books, perhaps through book clubs, could help balance this.",
        },
        {
          text: "Should parents read to their children every day?",
          sample: "Yes, I think reading to children every day is very valuable. It helps them develop vocabulary and listening skills, and it often makes them more interested in reading on their own later. It's also a special time when parents and children can bond and talk about the stories. Even ten or fifteen minutes before bed can make a big difference. Of course, busy parents may not always manage it, but they should try to make it a regular habit.",
        },
      ],
    },
  },
};
