import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 12 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_12: ToeflTest = {
  id: "toefl-12",
  no: 12,
  title: "TOEFL iBT Practice Test 12",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Ice hotels",
          text: "Every winter, in the far north of Sweden, workers build a hotel made almost entir{{ely}} of ice and snow. They cut huge bloc{{ks}} of ice from a nearby fro{{zen}} river. Artists from around the wor{{ld}} then carve beds, chairs and sculp{{tures}}. Inside, the temperature stays at about minus five deg{{rees}}, so guests sleep in warm sleeping ba{{gs}} on top of reindeer skins. In spring, the hotel slow{{ly}} melts, and the water flows back into the ri{{ver}}. The next year, a completely new hot{{el}} is built.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Study session moved",
          text: [
            "Hi everyone! Quick update for tonight's chemistry study session. Room 204 is being used for an exam, so we're moving to the second floor of the student center.",
            "Same time, 7 p.m. Please bring your practice problems from Chapter 6. Priya is bringing snacks!",
          ],
          questions: [
            { text: "Why has the study session moved?", options: ["The student center is closed.", "Room 204 is being used for an exam.", "Too many students are coming.", "The time has changed."], answer: 1 },
            { text: "What should students bring?", options: ["snacks", "practice problems from Chapter 6", "their lab coats", "a calculator only"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Bike storage rules",
          text: [
            "BICYCLE STORAGE: NEW RULES FROM SEPTEMBER",
            "Bicycles may only be left in the marked racks outside each residence hall. Bicycles locked to railings, trees or signposts will be removed without warning.",
            "Students leaving campus for the summer must take their bicycles with them or store them in the basement storage room, which is available for a fee of $15. Abandoned bicycles will be donated to a local charity at the end of June.",
          ],
          questions: [
            { text: "Where may students leave their bicycles?", options: ["next to trees", "in the marked racks", "on railings", "inside their rooms"], answer: 1 },
            { text: "What happens to bicycles locked to signposts?", options: ["Their owners are fined.", "They are removed without warning.", "They are moved to the basement.", "They are given a warning label."], answer: 1 },
            { text: "What will happen to abandoned bicycles?", options: ["They will be sold to students.", "They will be donated to a charity.", "They will be stored for free.", "They will be returned to the shop."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Fairy circles",
          paragraphs: [
            "In the dry grasslands of the Namib Desert in southern Africa, the ground is covered with millions of bare, circular patches surrounded by rings of taller grass. These so-called fairy circles range from a few meters to more than twenty meters across, and seen from the air they form a remarkably regular pattern, as if the circles had been deliberately spaced. Local legends attributed them to the footprints of gods or to the breath of a dragon living underground.",
            "Scientists have proposed two main explanations. According to the first, the circles are created by sand termites that eat the roots of grasses, killing the plants above their nests. The bare patch then acts as a kind of reservoir: rainwater soaks into the sandy soil and is not used by plants, which benefits both the termites and the grasses at the edge of the circle. Supporters of this view point out that termites are found in most of the circles.",
            "The second explanation focuses on the plants themselves. In an environment where water is extremely scarce, grasses compete for moisture through their roots. Computer models suggest that this competition alone can produce a pattern of bare patches surrounded by vigorous rings of grass, because plants at the edge of a gap draw water from the empty area. In 2014, similar circles were found in Western Australia in places with no comparable termite activity, which many researchers regard as support for this view. Today, some scientists suspect that both processes may operate together.",
          ],
          questions: [
            { text: "According to paragraph 1, what is unusual about fairy circles when seen from the air?", options: ["They change color during the day.", "They form a very regular pattern.", "They are perfectly square.", "They are covered with flowers."], answer: 1 },
            { text: "The word \"reservoir\" in paragraph 2 is closest in meaning to", options: ["store", "barrier", "hole", "path"], answer: 0 },
            { text: "According to paragraph 2, how do termites benefit from the bare patches?", options: ["The patches provide shade.", "The soil beneath them holds rainwater.", "They protect the termites from birds.", "The patches are warmer at night."], answer: 1 },
            { text: "Why does the author mention circles found in Western Australia?", options: ["to show that termites live everywhere", "to support the explanation based on competition between plants", "to prove that the legends were correct", "to describe a different type of grass"], answer: 1 },
            { text: "What does paragraph 3 suggest about current scientific opinion?", options: ["The termite explanation has been proven wrong.", "Both processes may contribute to the circles.", "The circles were made by people.", "Scientists have stopped studying the circles."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A rainy weekend",
          text: "Last weekend, it rained all the ti{{me}}, so we stayed at ho{{me}}. On Saturday, my brother and I pla{{yed}} board games and baked cook{{ies}}. In the afternoon, we watc{{hed}} an old film with our par{{ents}}. On Sunday, I fini{{shed}} a book that I had star{{ted}} months ago. It was a qui{{et}} weekend, but I really enj{{oyed}} it.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Free furniture",
          text: [
            "FREE FURNITURE – MOVING OUT SALE",
            "Graduating student giving away a desk, two chairs and a small bookshelf. All items are in good condition.",
            "Pick up only, from 25 Elm Street, this Saturday between 10 a.m. and 2 p.m. First come, first served. Please bring someone to help you carry the desk!",
          ],
          questions: [
            { text: "Why is the student giving away furniture?", options: ["The furniture is broken.", "The student is moving out.", "The student bought new furniture.", "The student is opening a shop."], answer: 1 },
            { text: "When can people collect the items?", options: ["any day this week", "Saturday between 10 a.m. and 2 p.m.", "Sunday morning", "after graduation"], answer: 1 },
            { text: "What does the student suggest?", options: ["bringing someone to help carry the desk", "calling before visiting", "paying a small fee", "bringing boxes"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How baby turtles find the sea",
          paragraphs: [
            "Sea turtles lay their eggs in holes they dig on sandy beaches. After about two months, the baby turtles hatch and climb out of the sand, usually at night.",
            "The babies must reach the sea quickly, because birds and crabs may eat them. To find the water, they move toward the brightest direction. On a natural beach, this is the sea, which reflects light from the moon and stars.",
            "Today, bright lights from hotels and roads can confuse the young turtles, and many crawl away from the water. For this reason, some beaches turn off their lights during the hatching season.",
          ],
          questions: [
            { text: "Where do sea turtles lay their eggs?", options: ["in the sea", "on sandy beaches", "in rivers", "on rocks"], answer: 1 },
            { text: "When do baby turtles usually come out of the sand?", options: ["in the morning", "at noon", "at night", "in winter"], answer: 2 },
            { text: "Why must the babies reach the sea quickly?", options: ["The sand is too hot.", "Birds and crabs may eat them.", "The tide is going out.", "They need to find their mothers."], answer: 1 },
            { text: "The word \"confuse\" in paragraph 3 is closest in meaning to", options: ["help", "mislead", "wake", "frighten"], answer: 1 },
            { text: "Why do some beaches turn off their lights?", options: ["to save electricity", "to help baby turtles find the sea", "to keep tourists away", "to protect birds"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Herd immunity",
          text: "When a large proportion of a population becomes immune to an infectious dise{{ase}}, either through vaccination or previous infec{{tion}}, the disease finds it harder to spr{{ead}}. This effect, known as herd immun{{ity}}, also protects people who cannot be vacci{{nated}}, such as newborn babies. The proportion requ{{ired}} depends on how easily the disease is trans{{mitted}}; for highly contagious illnesses such as mea{{sles}}, it can exceed ninety per{{cent}}. If vaccination rates fall below this lev{{el}}, outbreaks may return.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Summer research fellowship",
          text: [
            "To: Undergraduate students, Faculty of Science",
            "From: Office of Undergraduate Research",
            "Subject: Summer research fellowships – applications open",
            "The Faculty of Science will award up to twenty fellowships for full-time research during the summer. Fellows work for ten weeks under the supervision of a faculty member and receive a stipend of $5,000. Campus housing is available at a reduced rate for fellows who do not live locally.",
            "Applicants must be in their second or third year and must arrange a supervisor before applying. Each application should include a two-page research proposal and a letter of support from the proposed supervisor. Fellows are expected to present their results at the research poster day in September. The deadline is February 28.",
          ],
          questions: [
            { text: "What do fellows receive?", options: ["free tuition for a year", "a stipend of $5,000", "a guaranteed job", "free campus housing"], answer: 1 },
            { text: "What must applicants do before applying?", options: ["complete their degree", "arrange a supervisor", "present a poster", "move into campus housing"], answer: 1 },
            { text: "What are fellows required to do in September?", options: ["begin their research", "present their results at a poster day", "submit a new proposal", "teach a course"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Rethinking Easter Island",
          paragraphs: [
            "Easter Island, or Rapa Nui, a remote island in the Pacific Ocean, is famous for the hundreds of giant stone statues, known as moai, erected by its inhabitants centuries ago. When European ships arrived in 1722, visitors found a treeless landscape and a population far smaller than such monumental construction seemed to require. This led to a widely repeated explanation: the islanders had cut down all their forests, partly to transport the statues, causing environmental collapse, famine and violent conflict.",
            "In recent decades, this account of self-inflicted catastrophe has been challenged. Researchers have pointed out that the island's palm forests may have been destroyed largely by rats, which arrived with the first Polynesian settlers and ate the palm seeds, preventing new trees from growing. Archaeological evidence also suggests that the islanders adapted successfully to the loss of trees, developing techniques such as rock gardens, in which stones were placed over the soil to retain moisture and protect crops from wind.",
            "Furthermore, a study published in 2024, based on satellite images of these gardens, estimated that the land could have supported only a few thousand people, suggesting that the population was never as large as the collapse theory assumed. Many researchers now argue that the most devastating decline occurred after European contact, when introduced diseases and the slave raids of the 1860s killed a large proportion of the islanders. The revised view presents the Rapa Nui people not as an example of ecological suicide but as a society that showed considerable resilience in a difficult environment.",
          ],
          questions: [
            { text: "According to paragraph 1, what did the traditional explanation claim?", options: ["The statues were built by Europeans.", "The islanders destroyed their own forests and society.", "The island had never had trees.", "The statues were carved after 1722."], answer: 1 },
            { text: "The word \"retain\" in paragraph 2 is closest in meaning to", options: ["release", "keep", "measure", "remove"], answer: 1 },
            { text: "According to paragraph 2, what role may rats have played?", options: ["They carried the statues.", "They ate palm seeds and prevented new trees from growing.", "They destroyed the rock gardens.", "They were the islanders' main food."], answer: 1 },
            { text: "What did the 2024 study suggest?", options: ["The population was smaller than the collapse theory assumed.", "The island once supported millions of people.", "Rock gardens were never used.", "The statues were moved by satellites."], answer: 0 },
            { text: "What is the author's main purpose in the passage?", options: ["to describe how the moai were carved", "to explain how a traditional account has been revised", "to argue that Europeans built the statues", "to compare Easter Island with other Pacific islands"], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Selin", prompt: "Why weren't you at the meeting?", chunks: ["I", "had to", "take my car", "to the garage", "for a repair"], end: "." },
      { promptBy: "David", prompt: "Have you decided where to go on vacation?", chunks: ["we're", "thinking of", "visiting", "the mountains", "in July"], end: "." },
      { promptBy: "Amira", prompt: "My laptop keeps freezing.", chunks: ["have you", "tried", "restarting it", "in", "safe mode"], end: "?" },
      { promptBy: "Ben", prompt: "What did the professor say about the exam?", chunks: ["she said", "it will", "cover", "the first", "six chapters"], end: "." },
      { promptBy: "Zeynep", prompt: "How was your first day at the new job?", chunks: ["my colleagues", "were", "very friendly", "and", "helpful"], end: "." },
      { promptBy: "Chris", prompt: "Why is the cafeteria so crowded today?", chunks: ["they", "are offering", "free lunch", "to celebrate", "the new semester"], end: "." },
      { promptBy: "Nora", prompt: "Can you recommend a good book?", chunks: ["I", "just finished", "a novel", "that", "you would love"], end: "." },
      { promptBy: "Emir", prompt: "When does the next bus leave?", chunks: ["the next one", "leaves", "in", "about", "ten minutes"], end: "." },
      { promptBy: "Isabel", prompt: "I'm nervous about my presentation tomorrow.", chunks: ["why don't", "you", "practice it", "with me", "this evening"], end: "?" },
      { promptBy: "Liam", prompt: "Where did you find that jacket?", chunks: ["I found it", "at", "a small shop", "near", "the train station"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a member of a student club that would like to organize a weekend trip to a national park. You need permission and some funding from the Student Activities Office.",
      to: "the Student Activities Office",
      subject: "Request for support for a club trip",
      tasks: ["Describe the trip your club is planning.", "Explain why the trip would benefit students.", "Ask what support the office can provide and how to apply."],
      sample: "Dear Student Activities Office,\n\nI am writing on behalf of the Outdoor Adventure Club. We are planning a weekend trip to Pine Valley National Park on the first weekend of October. We expect about twenty-five students to take part, and our plan is to hike two of the park's main trails and stay overnight at the campsite near the visitor center.\n\nWe believe the trip would be very valuable for students. Many of our members are international or first-year students who have not yet had a chance to explore the region, and the trip would help them make friends and relax before the midterm exam period. Spending time outdoors is also a great way to reduce stress.\n\nCould you please let us know what kind of support the office can offer, for example help with transportation costs or the campsite fee? I would also be grateful if you could explain the application process and any deadlines we need to meet.\n\nThank you for your time.\n\nBest regards,\nMert Kaya\nPresident, Outdoor Adventure Club",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education",
      professor: {
        name: "Dr. Chen",
        text: "Some universities now record all their lectures and make them available online, so students can watch them whenever they like. Supporters say this helps students learn at their own pace. Critics worry that students will stop attending classes. Do you think universities should record all lectures and put them online? Why or why not?",
      },
      students: [
        { name: "Hannah", text: "Yes, definitely. Recorded lectures let students review difficult parts and help those who are sick or have to work. Students who want to learn will still come to class." },
        { name: "Kemal", text: "I disagree. If everything is online, many students will plan to watch later and then never do it. Being in the room also allows you to ask questions and discuss ideas." },
      ],
      sample: "I believe universities should record lectures, but they should treat the recordings as a support for attendance rather than a replacement. Hannah makes an important point: recordings are extremely useful for reviewing complicated material. Before my statistics exam, I watched the recording of one lecture three times, and it helped me understand a method I had completely missed in class. Recordings are also fair to students who are ill or who work part-time. However, Kemal is right that some students may fall behind if they rely only on videos. Universities can reduce this risk by making classes more interactive, for example by including discussions, short in-class activities and group work that cannot be recorded. That way, students have a real reason to attend, while still benefiting from the flexibility that recorded lectures provide.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are working at the reception desk of a university sports center. A manager is telling you what to say to new members.",
      sentences: [
        "Welcome to the sports center.",
        "Please show your card at the entrance.",
        "The swimming pool opens at seven o'clock.",
        "Towels can be rented for one dollar at the front desk.",
        "Fitness classes are free for all students with a valid membership.",
        "Lockers are available in both changing rooms, but you need to bring your own lock.",
        "If you would like to book a tennis court for the weekend, please reserve it online no later than Thursday evening.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's habits and attitudes toward health and exercise. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you usually do to stay healthy?",
          sample: "I try to stay healthy in a few simple ways. I walk to campus every day, which takes about twenty-five minutes, and I go swimming twice a week at the university pool. I also try to cook at home instead of eating fast food, because it's healthier and cheaper. The hardest part for me is sleep. During exam periods I often stay up late, so I'm trying to keep a more regular bedtime.",
        },
        {
          text: "Do you prefer exercising alone or with other people? Why?",
          sample: "I generally prefer exercising with other people. When I go running alone, it's easy to find excuses to stop early or skip a day. But when I've arranged to meet a friend, I feel responsible and I almost always go. Exercising with others is also more fun, because we can chat and encourage each other. That said, swimming is something I enjoy alone, because it gives me time to think and relax.",
        },
        {
          text: "Some people think that the government should tax unhealthy food. What is your opinion?",
          sample: "I think a tax on very unhealthy food, like sugary drinks, could be a good idea, but only as part of a wider approach. A tax can encourage companies to reduce sugar and push people toward healthier choices, and the money could be used for health programs. However, it can also be unfair to people on low incomes, who may spend a larger share of their money on food. So I'd combine a tax with making healthy food cheaper and more available.",
        },
        {
          text: "How do you think people's attitudes toward health have changed in recent years?",
          sample: "I think people have become much more aware of health, especially mental health. Ten years ago, people rarely talked openly about stress or anxiety, but now it's much more common, even at universities. People also pay more attention to what they eat and use apps to track their steps or sleep. On the negative side, social media sometimes promotes unrealistic body images and extreme diets, so I think we need to be careful about where we get health information.",
        },
      ],
    },
  },
};
