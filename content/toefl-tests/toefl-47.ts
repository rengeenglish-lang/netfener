import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 47 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_47: ToeflTest = {
  id: "toefl-47",
  no: 47,
  title: "TOEFL iBT Practice Test 47",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Buttons",
          text: "Buttons have been used for thousands of years, but at first they were mainly decorative. Archaeologists have found ornaments made of shell that are about five thousand ye{{ars}} old. In ancient times, clothes were usually held together with pins or ti{{es}}. Buttons with matching buttonholes became popular in Europe in the thirteenth cen{{tury}}, allowing clothing to fit the body more clo{{sely}}. For a long time, buttons were a sign of wea{{lth}}, and some were made of gold, silver or precious sto{{nes}}. Wealthy men sometimes wore hundreds of them on a single jac{{ket}}. In the nineteenth century, factories began to produce cheap buttons from metal, glass and bo{{ne}}. Today, most buttons are made of plas{{tic}} and cost almost noth{{ing}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Need a ride to the airport?",
          text: [
            "Hi Tarık! I'm driving to the airport on Sunday morning to pick up my cousin. I remember you said your flight was on Sunday too.",
            "I'm leaving at 9 if you'd like a ride. There's plenty of space for your suitcase. Just let me know by Saturday evening!",
          ],
          questions: [
            { text: "Why is the writer going to the airport?", options: ["to pick up a cousin", "to take a flight", "to return a rental car", "to meet a business partner"], answer: 0 },
            { text: "What does the writer offer?", options: ["a ride to the airport", "to carry Tarık's suitcase on the plane", "to buy Tarık a ticket", "to change the flight"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Cafeteria opening hours",
          text: [
            "NEW CAFETERIA HOURS",
            "From next Monday, the main cafeteria will open at 7 a.m. instead of 8 a.m. to serve students with early classes. Breakfast will be served until 10:30 a.m.",
            "Because of lower demand, the cafeteria will now close at 8 p.m. on weekends. Students who need a late meal on weekends can use the snack bar in the library, which remains open until midnight.",
          ],
          questions: [
            { text: "Why will the cafeteria open earlier?", options: ["to serve students with early classes", "because of a staff change", "to save money", "because the library is closed"], answer: 0 },
            { text: "What will change on weekends?", options: ["The cafeteria will close at 8 p.m.", "The cafeteria will be closed all day.", "Breakfast will not be served.", "Prices will increase."], answer: 0 },
            { text: "Where can students get a late meal on weekends?", options: ["at the snack bar in the library", "at the main cafeteria", "at the sports center", "nowhere on campus"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why humans blush",
          paragraphs: [
            "Blushing, the sudden reddening of the face, neck and sometimes the upper chest, is a response that almost everyone experiences. It usually occurs when people feel embarrassed, ashamed or self-conscious, for example when they make a mistake in public or receive unexpected praise. Physically, blushing happens when blood vessels in the skin widen, allowing more blood to flow close to the surface. This process is controlled by the nervous system and is almost impossible to stop voluntarily.",
            "Charles Darwin described blushing as 'the most peculiar and the most human of all expressions'. Although other animals show signs of submission or fear, there is no clear evidence that any other species blushes. This has led researchers to ask why such a visible and uncontrollable signal would have developed in humans. After all, revealing one's embarrassment might seem to be a disadvantage.",
            "One influential explanation is that blushing serves a social purpose. Because it cannot easily be faked, a blush may communicate genuine regret after a person breaks a social rule, signaling that they understand they have done something wrong and care about others' opinions. Several studies support this idea: people who blush after an embarrassing mistake are often judged more positively and are more readily forgiven than people who show no reaction. In this sense, blushing may help repair relationships and maintain trust within groups, which would have been important for early humans who depended on cooperation to survive.",
          ],
          questions: [
            { text: "According to paragraph 1, what causes the reddening of the skin during a blush?", options: ["Blood vessels in the skin widen.", "The skin becomes thinner.", "The body temperature drops.", "Muscles in the face tighten."], answer: 0 },
            { text: "The word \"voluntarily\" in paragraph 1 is closest in meaning to", options: ["by choice", "by accident", "quickly", "painfully"], answer: 0 },
            { text: "Why does the author mention Charles Darwin in paragraph 2?", options: ["to emphasize that blushing seems to be uniquely human", "to explain how blood vessels work", "to show that animals blush", "to describe a famous mistake"], answer: 0 },
            { text: "According to paragraph 3, why may a blush be an effective social signal?", options: ["It cannot easily be faked.", "It is very easy to control.", "It makes people look healthier.", "It frightens others."], answer: 0 },
            { text: "What do studies suggest about people who blush after a mistake?", options: ["They are often judged more positively and forgiven more readily.", "They are trusted less.", "They make more mistakes.", "They are considered rude."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Helping at the animal shelter",
          text: "Every Saturday, I help at an animal shel{{ter}} near my house. The shelter takes care of dogs and ca{{ts}} that have no home. In the morning, I clean the ca{{ges}} and give the animals fresh water. Then I take the dogs for a walk in the pa{{rk}}. My favorite dog is an old brown one called Max. He is very gen{{tle}} and loves to play with a ba{{ll}}. Sometimes families come to the shelter to adopt a pe{{t}}. I feel happy when an animal finds a new fam{{ily}}, but a little sad when I have to say good{{bye}}. One day, I hope to become a vet{{erinarian}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Photography walk",
          text: [
            "PHOTOGRAPHY WALK IN THE OLD TOWN",
            "Join a professional photographer for a two-hour walk through the old town every Sunday at 4 p.m. Learn how to take better photos of buildings, people and street life.",
            "You can use any camera, even a phone. The walk costs $25 per person. Groups are limited to ten people, so please book in advance.",
          ],
          questions: [
            { text: "Who leads the walk?", options: ["a professional photographer", "a history teacher", "a tour bus driver", "a student"], answer: 0 },
            { text: "What kind of camera can people use?", options: ["any camera, even a phone", "only professional cameras", "only cameras provided by the guide", "only film cameras"], answer: 0 },
            { text: "Why should people book in advance?", options: ["Groups are limited to ten people.", "The walk is only once a year.", "The price will go up.", "Tickets are sold only online."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why ducks stay dry",
          paragraphs: [
            "Ducks spend a lot of time swimming in ponds and lakes. Yet when they come out of the water, their feathers look almost dry.",
            "Ducks have a special gland near the base of their tails. This gland makes oil. Ducks use their beaks to spread the oil over their feathers. The oil makes the feathers waterproof, so water simply rolls off them.",
            "Under their outer feathers, ducks also have soft, fluffy feathers called down. The down traps warm air close to the duck's body. This helps ducks stay warm even in very cold water.",
          ],
          questions: [
            { text: "How do ducks' feathers look when they come out of the water?", options: ["almost dry", "very wet", "dirty", "white"], answer: 0 },
            { text: "What does the special gland make?", options: ["oil", "water", "feathers", "food"], answer: 0 },
            { text: "The word \"waterproof\" in paragraph 2 is closest in meaning to", options: ["not letting water through", "very heavy", "easy to break", "full of water"], answer: 0 },
            { text: "What is down?", options: ["soft, fluffy feathers under the outer feathers", "the duck's beak", "a kind of oil", "the bottom of the lake"], answer: 0 },
            { text: "How does down help ducks?", options: ["It keeps them warm.", "It helps them fly faster.", "It makes them float higher.", "It changes their color."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Learned optimism",
          text: "Some people seem naturally optimistic, while others expect the worst. Psychologists have found that these attitudes are linked to how people explain the causes of events in their li{{ves}}. Optimists tend to see setbacks as tempo{{rary}} and limited to a particular situation, while pessimists see them as perm{{anent}} and affecting everything. For example, after failing an ex{{am}}, an optimist might think the test was unusually diff{{icult}}, while a pessimist might conclude that they are simply not intel{{ligent}}. Research suggests that people can learn to change their explan{{ations}}, a process called learned opti{{mism}}. Training programs have helped some participants reduce symp{{toms}} of depression and impr{{ove}} their performance.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Teaching award nominations",
          text: [
            "To: All students",
            "From: Office of the Provost",
            "Subject: Nominate an outstanding teacher",
            "Each year, the university presents Excellence in Teaching Awards to five faculty members who have made an exceptional contribution to student learning. We invite you to nominate an instructor who has inspired you, supported your learning or made a difficult subject accessible.",
            "Nominations must be submitted through the online form by March 1 and should include specific examples of the instructor's teaching. Nominations supported by several students carry more weight with the selection committee. Instructors who have received the award in the past five years are not eligible. Winners will be announced at the graduation ceremony in May.",
          ],
          questions: [
            { text: "What is the purpose of the email?", options: ["to invite students to nominate an outstanding teacher", "to announce new courses", "to ask students to evaluate their courses", "to invite students to graduation"], answer: 0 },
            { text: "What should nominations include?", options: ["specific examples of the instructor's teaching", "the student's grades", "a letter from the department", "a photograph"], answer: 0 },
            { text: "Which instructors are NOT eligible?", options: ["those who received the award in the past five years", "part-time instructors", "instructors in their first year", "professors in the sciences"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The debate over deep-sea mining",
          paragraphs: [
            "Vast areas of the deep ocean floor, thousands of meters below the surface, are covered with potato-sized lumps called polymetallic nodules. These nodules form extremely slowly over millions of years and contain valuable metals such as nickel, cobalt, copper and manganese. As demand for these metals has grown, especially for use in batteries for electric vehicles and renewable energy storage, several companies and governments have become interested in mining them.",
            "Supporters argue that deep-sea mining could provide a large new supply of metals needed for the transition away from fossil fuels. They point out that mining on land often involves clearing forests, displacing communities and producing large amounts of waste, and that some land-based mines have poor working conditions. Collecting nodules from the seabed, they claim, could avoid some of these problems.",
            "Many scientists, however, warn that the environmental risks are poorly understood. The deep sea is one of the least explored environments on Earth, and new species are discovered on almost every research expedition. Many of these organisms live on or among the nodules themselves and grow and reproduce very slowly, so damaged habitats may take centuries or longer to recover. Mining machines would also create clouds of sediment that could spread over large distances, potentially smothering animals far from the mining sites. Because of these concerns, a number of countries and companies have called for a pause on deep-sea mining until more research has been done.",
          ],
          questions: [
            { text: "According to paragraph 1, why has interest in deep-sea mining grown?", options: ["Demand for metals used in batteries has increased.", "Nodules have recently formed in large numbers.", "Land mines have been closed worldwide.", "Fish populations have declined."], answer: 0 },
            { text: "According to paragraph 2, what problem associated with land mining might deep-sea mining avoid?", options: ["clearing forests and displacing communities", "high transport costs", "the need for metals", "the use of machines"], answer: 0 },
            { text: "The word \"smothering\" in paragraph 3 is closest in meaning to", options: ["covering and suffocating", "feeding", "warming", "attracting"], answer: 0 },
            { text: "Why might damaged deep-sea habitats take centuries to recover?", options: ["Many organisms grow and reproduce very slowly.", "The water is too warm.", "There is too much light.", "Humans visit them often."], answer: 0 },
            { text: "What have some countries and companies called for?", options: ["a pause on deep-sea mining until more research is done", "an immediate increase in mining", "the end of all land mining", "new species to be introduced"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Levent", prompt: "Why are you studying in the library today?", chunks: ["my roommate", "is", "having", "friends over", "this afternoon"], end: "." },
      { promptBy: "Helen", prompt: "Did you enjoy the boat trip?", chunks: ["we", "saw", "dolphins", "near", "the island"], end: "." },
      { promptBy: "Zeynep", prompt: "I'm always late for my morning class.", chunks: ["why don't", "you", "prepare", "your bag", "the night before"], end: "?" },
      { promptBy: "Martin", prompt: "How did you learn to speak French?", chunks: ["I", "lived", "in Paris", "for", "two years"], end: "." },
      { promptBy: "Bengü", prompt: "When does the art exhibition open?", chunks: ["it", "opens", "to the public", "next", "Saturday"], end: "." },
      { promptBy: "Craig", prompt: "Why is the bakery closed?", chunks: ["the owners", "are", "on", "vacation", "this week"], end: "." },
      { promptBy: "Ebru", prompt: "What did your manager think of your idea?", chunks: ["she", "asked me", "to present", "it", "to the team"], end: "." },
      { promptBy: "Kyle", prompt: "Where are you staying in London?", chunks: ["we", "booked", "a small", "hotel near", "the river"], end: "." },
      { promptBy: "Tülay", prompt: "I need some new running shoes.", chunks: ["have you", "checked", "the sports shop", "in", "the mall"], end: "?" },
      { promptBy: "Gary", prompt: "Why did you decide to become a teacher?", chunks: ["I", "enjoy", "helping", "young people", "learn"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You attended a three-day academic workshop organized by another university. The workshop was very useful, and one of the speakers, Professor Lin, offered to share her presentation slides. You want to write to her.",
      to: "Professor Lin",
      subject: "Thank you and request for slides",
      tasks: ["Introduce yourself and mention the workshop.", "Explain what you found useful in her talk.", "Ask for the slides and explain how you will use them."],
      sample: "Dear Professor Lin,\n\nMy name is Selin Koç, and I am a master's student in urban planning at Anatolia University. I attended the workshop on sustainable cities at your university last week, and I had the pleasure of hearing your talk on green infrastructure on the second day.\n\nI found your presentation extremely useful. In particular, your comparison of rainwater management systems in Copenhagen and Singapore helped me understand how cities with very different climates can adopt similar strategies. Your examples of community involvement in the design of new parks were also very inspiring, as this is a topic I am exploring in my own research.\n\nAt the end of the session, you kindly offered to share your slides with participants. I would be very grateful if you could send them to me. I would like to use them as a reference while writing the literature review for my thesis, and of course I would cite your work appropriately.\n\nThank you again for such an informative talk.\n\nYours sincerely,\nSelin Koç",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Economics",
      professor: {
        name: "Dr. Coleman",
        text: "Some countries have proposed giving every adult citizen a fixed monthly payment, known as a universal basic income, regardless of whether they work. Supporters argue this would reduce poverty and give people security as automation changes the job market. Critics worry it would be extremely expensive and might discourage people from working. Do you think a universal basic income is a good idea? Why or why not?",
      },
      students: [
        { name: "Zoe", text: "I think it's a good idea. As machines take over more jobs, people will need a safety net. It would also allow people to retrain or start businesses without fear." },
        { name: "Erdem", text: "I doubt it. The cost would be enormous, and taxes would have to rise a lot. Some people might also stop working, which would hurt the economy." },
      ],
      sample: "I think a universal basic income could be a good idea in principle, but it should be tested carefully before being introduced on a large scale. Zoe makes a convincing point that automation is likely to disrupt many jobs, and a basic income would give people the security to retrain, care for family members or start small businesses. It would also be simpler than many existing welfare programs, which can be complicated and leave some people without support. However, Erdem's concern about cost is serious. Paying every adult a meaningful amount would require major tax increases or cuts to other services. As for the worry that people would stop working, several pilot programs have found only small effects on employment. Governments should therefore expand such trials to gather evidence before deciding.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new receptionist at a medical clinic. The office manager is telling you what to say to patients.",
      sentences: [
        "Good morning, do you have an appointment?",
        "Please take a seat in the waiting room.",
        "The doctor is running ten minutes late.",
        "Please turn off your phone in the examination room.",
        "Remember to bring your insurance card to every visit.",
        "If you need to cancel your appointment, please call us at least one day in advance.",
        "Test results are usually ready within three days, and the nurse will call you if the doctor needs to discuss them with you in person.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's habits related to sleep and daily routines. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe your typical daily routine on a weekday.",
          sample: "On a typical weekday, I wake up at around seven, have a quick breakfast and take the bus to campus. My classes usually run from nine until two, and I have lunch with my friends in between. In the afternoon, I study in the library or work on group projects. In the evening, I go to the gym twice a week, cook dinner and then relax by watching a series before going to bed around midnight.",
        },
        {
          text: "Do you think you get enough sleep? Why or why not?",
          sample: "Honestly, I don't think I get enough sleep during the week. I usually sleep about six hours, but experts recommend seven to nine hours for young adults. The main reason is that I often stay up late finishing assignments or using my phone. I notice that when I sleep less, I find it harder to concentrate in class. I'm trying to improve by putting my phone away an hour before bed.",
        },
        {
          text: "Some people say it's better to be a morning person than a night person. Do you agree?",
          sample: "I don't completely agree. Our society is organized around morning schedules, with school and work starting early, so morning people may find life easier. However, research suggests that people have different natural rhythms, and night people can be just as productive if they're allowed to work at times that suit them. I think it would be better if schools and workplaces offered more flexible hours, so everyone could perform at their best.",
        },
        {
          text: "Should schools start later in the morning so that teenagers can sleep more?",
          sample: "Yes, I think schools should start a bit later, especially for teenagers. Studies show that teenagers' body clocks naturally shift later, so they find it hard to fall asleep early. When school starts very early, many students arrive tired and struggle to concentrate. Some schools that have moved their start time later have reported better attendance and grades. Of course, it might cause problems for parents' work schedules, but I believe the benefits for students are worth it.",
        },
      ],
    },
  },
};
