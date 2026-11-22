import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 45 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_45: ToeflTest = {
  id: "toefl-45",
  no: 45,
  title: "TOEFL iBT Practice Test 45",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Thermometers",
          text: "A thermometer is an instrument used to measure tempe{{rature}}. One of the earliest devices for showing changes in heat was made by the Italian scien{{tist}} Galileo around 1600, but it had no sc{{ale}}. In the early eighteenth century, the German physicist Daniel Fahrenheit made a reliable thermometer using mercury in a narrow glass tu{{be}}. As the mercury warmed, it expan{{ded}} and rose. A few decades later, the Swedish astronomer Anders Celsius propo{{sed}} a scale based on the freezing and boiling po{{ints}} of water. Because mercury is poiso{{nous}}, most modern thermometers are digi{{tal}}, using electronic sensors that give quick and accu{{rate}} readings.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Movie night plans",
          text: [
            "Hi everyone! Movie night is at my place this Friday at 8. I'll make popcorn, but could each of you bring a drink or a snack?",
            "We'll vote on the movie when everyone arrives. Please don't be late, because the film needs to finish before the last bus at 11:30!",
          ],
          questions: [
            { text: "What does the writer ask guests to bring?", options: ["a drink or a snack", "popcorn", "a movie", "chairs"], answer: 0 },
            { text: "Why should guests not be late?", options: ["The film must end before the last bus.", "The popcorn will get cold.", "The neighbors complain about noise.", "The writer has to work early."], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Free health checks for students",
          text: [
            "STUDENT HEALTH WEEK",
            "During Student Health Week, nurses from the campus health center will offer free blood pressure, eyesight and blood sugar checks in the main hall from 11 a.m. to 3 p.m. every day.",
            "No appointment is needed, but please bring your student card. Students who receive unusual results will be given advice and, if necessary, an appointment with a doctor at the health center.",
          ],
          questions: [
            { text: "What will nurses offer during Student Health Week?", options: ["free health checks", "free vaccinations only", "cooking classes", "sports training"], answer: 0 },
            { text: "What do students need to bring?", options: ["their student card", "a doctor's letter", "a fee", "their medical records"], answer: 0 },
            { text: "What happens to students with unusual results?", options: ["They receive advice and, if needed, a doctor's appointment.", "They are sent to a hospital immediately.", "They are asked to leave campus.", "Nothing happens."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The first public hospitals",
          paragraphs: [
            "For much of history, sick people were cared for at home by family members, and only the wealthy could afford to pay a physician to visit them. Institutions that offered care to anyone who needed it developed gradually. In the ancient world, some temples served as places of healing, but these were primarily religious sites, and the care they offered was based as much on ritual as on medicine.",
            "Some of the most advanced early hospitals were built in the medieval Islamic world. Beginning in the ninth century, cities such as Baghdad, Damascus and Cairo established large hospitals, known as bimaristans, that treated patients regardless of their religion, wealth or origin. Many had separate wards for different illnesses, as well as pharmacies, libraries and lecture halls where students were trained. Physicians kept records of patients' treatment, and some hospitals even provided patients with money when they left so that they would not have to return to work immediately.",
            "In Europe, early hospitals were often run by religious orders and provided shelter for the poor, travelers and the elderly as well as for the sick. Over time, particularly from the eighteenth century onward, hospitals became more focused on medical treatment and teaching. However, until the nineteenth century, hospitals were frequently dangerous places, as infections spread easily between patients. Only with the acceptance of germ theory and practices such as hand washing and sterilizing instruments did hospitals become the centers of healing that we know today.",
          ],
          questions: [
            { text: "According to paragraph 1, who could afford to have a physician visit them?", options: ["only the wealthy", "everyone", "only priests", "only soldiers"], answer: 0 },
            { text: "According to paragraph 2, what was notable about bimaristans?", options: ["They treated patients regardless of religion, wealth or origin.", "They were only for rulers.", "They had no doctors.", "They were located only in villages."], answer: 0 },
            { text: "The word \"regardless of\" in paragraph 2 is closest in meaning to", options: ["without considering", "because of", "only after", "instead of"], answer: 0 },
            { text: "According to paragraph 3, why were hospitals dangerous before the nineteenth century?", options: ["Infections spread easily between patients.", "Doctors were not allowed inside.", "They were built in remote areas.", "They had no beds."], answer: 0 },
            { text: "What helped hospitals become centers of healing?", options: ["the acceptance of germ theory and hygiene practices", "the construction of larger buildings", "the removal of religious orders", "a decrease in the number of patients"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A camping trip",
          text: "Last August, my friends and I went cam{{ping}} near a lake. We put up our te{{nts}} under some tall trees. In the afternoon, we swam in the l{{ake}} and went fishing. My friend Ali caught a big fi{{sh}}, and we cooked it over a small fi{{re}}. At night, we sat together and told sto{{ries}}. The sky was full of bright st{{ars}}. It was cold, so I slept in my warm sleep{{ing}} bag. In the morning, we heard birds sing{{ing}}. I want to go camping ag{{ain}} next summer.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Kids' coding camp",
          text: [
            "LEARN TO CODE THIS SUMMER!",
            "Our one-week coding camp for children aged 9 to 13 teaches kids how to create their own games and animations. Camps run from 9 a.m. to 3 p.m., Monday to Friday, throughout July.",
            "The cost is $180 per week, including lunch. Children do not need any previous experience, and all computers are provided. On Friday, parents are invited to see the games their children have made.",
          ],
          questions: [
            { text: "What will children learn at the camp?", options: ["how to create games and animations", "how to repair computers", "how to play sports", "how to cook"], answer: 0 },
            { text: "What is included in the cost?", options: ["lunch", "a free laptop", "transportation", "a second week"], answer: 0 },
            { text: "What happens on Friday?", options: ["Parents can see the children's games.", "The children take an exam.", "The camp is closed.", "The children go on a trip."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How snails move",
          paragraphs: [
            "Snails are small animals with soft bodies and hard shells. They have no legs, but they can still move from place to place.",
            "A snail moves on a large muscle called a foot. Waves of movement travel along the bottom of the foot and push the snail forward. Snails are very slow. Some move only a few meters in an hour.",
            "Snails also make a slippery liquid called mucus. The mucus helps the foot slide smoothly over the ground and protects the snail's soft body from sharp objects. That is why snails leave a shiny trail behind them.",
          ],
          questions: [
            { text: "What do snails have?", options: ["soft bodies and hard shells", "four legs", "wings", "hard bodies and soft shells"], answer: 0 },
            { text: "What does a snail move on?", options: ["a large muscle called a foot", "small wheels", "its shell", "tiny legs"], answer: 0 },
            { text: "The word \"slippery\" in paragraph 3 is closest in meaning to", options: ["smooth and wet", "dry and rough", "hard", "hot"], answer: 0 },
            { text: "What does mucus do?", options: ["It helps the foot slide and protects the body.", "It makes the shell grow.", "It helps snails see.", "It makes snails faster than rabbits."], answer: 0 },
            { text: "Why do snails leave a shiny trail?", options: ["because of the mucus they make", "because they carry water", "because their shells shine", "because of the sun"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The four-day work week",
          text: "Several companies and governments have recently experimented with a four-day work week, in which employees work fewer hours for the same pa{{y}}. Supporters argue that shorter weeks can im{{prove}} employees' health and reduce stress without lowering produc{{tivity}}. In some trials, participating companies reported that employees took fewer sick da{{ys}} and that staff turnover dec{{lined}}. Workers also said they had more time for their fam{{ilies}} and hobbies. Critics, however, point out that the model may not su{{it}} every industry. Hospitals, schools and shops, for example, must remain op{{en}} throughout the week, which could require hiring addi{{tional}} staff and incre{{asing}} costs.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Course feedback survey",
          text: [
            "To: All students enrolled this semester",
            "From: Office of Academic Quality",
            "Subject: Please complete your course feedback surveys",
            "Course feedback surveys are now open and will close on December 15. Each survey takes about five minutes and asks about the clarity of teaching, the usefulness of course materials and the fairness of assessment. Your responses are anonymous; instructors receive only summarized results after final grades have been published.",
            "Your feedback directly influences decisions about course design and teaching support. Departments review the results each year, and several courses have been redesigned in response to student comments. Students who complete surveys for all their courses will be entered into a prize draw for one of twenty bookstore vouchers.",
          ],
          questions: [
            { text: "When do instructors receive the survey results?", options: ["after final grades have been published", "immediately", "before the final exam", "never"], answer: 0 },
            { text: "How is student feedback used?", options: ["to influence course design and teaching support", "to calculate final grades", "to choose new students", "to set tuition fees"], answer: 0 },
            { text: "What do students who complete all surveys receive?", options: ["an entry into a prize draw", "extra credit", "a free course", "a certificate"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Light pollution",
          paragraphs: [
            "For most of human history, people could look up on a clear night and see thousands of stars and the bright band of the Milky Way. Today, more than a third of the world's population, including the great majority of people in Europe and North America, can no longer see the Milky Way from where they live. The cause is light pollution: the excessive or poorly directed artificial light produced by streetlights, buildings, advertising and vehicles.",
            "Light pollution affects far more than our view of the stars. Many animals rely on natural patterns of light and darkness to guide their behavior. Newly hatched sea turtles, for example, find their way to the ocean by moving toward the brighter horizon over the water; bright lights on the shore can lead them in the wrong direction, where they die of exhaustion or are caught by predators. Migrating birds can become confused by brightly lit buildings, and many collide with them. Artificial light also attracts and kills enormous numbers of insects, which are an important food source for other animals.",
            "Human health may also be affected. Exposure to bright light at night can suppress the production of melatonin, a hormone that helps regulate sleep, and some studies have linked long-term disruption of natural light cycles to sleep disorders and other health problems. Unlike many forms of pollution, light pollution can be reduced relatively easily. Shielded streetlights that direct light downward, warmer and dimmer bulbs and motion sensors that switch lights on only when needed can all reduce light pollution while saving energy. Some towns have even been certified as 'dark sky' communities for their efforts.",
          ],
          questions: [
            { text: "According to paragraph 1, what is light pollution?", options: ["excessive or poorly directed artificial light", "smoke from factories", "pollution caused by the Sun", "light reflected from the Moon"], answer: 0 },
            { text: "According to paragraph 2, how do bright lights on the shore harm sea turtles?", options: ["They lead newly hatched turtles in the wrong direction.", "They heat the sand too much.", "They attract sharks to the beach.", "They prevent turtles from laying eggs."], answer: 0 },
            { text: "The word \"suppress\" in paragraph 3 is closest in meaning to", options: ["reduce", "increase", "copy", "measure"], answer: 0 },
            { text: "What does the author say about reducing light pollution?", options: ["It can be done relatively easily.", "It is impossible.", "It requires turning off all lights.", "It increases energy use."], answer: 0 },
            { text: "Which of the following is mentioned as a way to reduce light pollution?", options: ["shielded streetlights that direct light downward", "brighter advertising signs", "more streetlights", "white bulbs only"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Uğur", prompt: "Why are you bringing your laptop?", chunks: ["I", "need to", "finish", "a report", "on the train"], end: "." },
      { promptBy: "Sarah", prompt: "How was the cooking class?", chunks: ["we", "learned", "how to", "make", "fresh pasta"], end: "." },
      { promptBy: "Burak", prompt: "I'm bored with my exercise routine.", chunks: ["have you", "thought about", "joining", "a dance", "class"], end: "?" },
      { promptBy: "Lucy", prompt: "Where did you put the spare key?", chunks: ["I", "left it", "in", "the top drawer", "of my desk"], end: "." },
      { promptBy: "Oya", prompt: "When will the new bridge be finished?", chunks: ["it", "should be", "ready", "by the end", "of next year"], end: "." },
      { promptBy: "Jack", prompt: "Why is the river so high?", chunks: ["the snow", "in the mountains", "is", "melting", "quickly"], end: "." },
      { promptBy: "Hazal", prompt: "Who will look after your cat?", chunks: ["my neighbor", "has", "agreed", "to feed", "her"], end: "." },
      { promptBy: "Tony", prompt: "What do you usually eat for breakfast?", chunks: ["I", "usually have", "eggs", "and", "some bread"], end: "." },
      { promptBy: "Aysel", prompt: "The printer isn't working again.", chunks: ["should", "we", "call", "the technician", "this time"], end: "?" },
      { promptBy: "Ross", prompt: "Why did you choose this apartment?", chunks: ["it", "is", "close to", "the park", "and the station"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a member of the student council. The council wants to invite a well-known local author to give a talk at your university. You have been asked to write to the author.",
      to: "the author, Ms. Erdem",
      subject: "Invitation to speak at our university",
      tasks: ["Introduce yourself and the student council.", "Explain why you are inviting the author.", "Give details about the event and ask about her availability."],
      sample: "Dear Ms. Erdem,\n\nMy name is Kerem Ateş, and I am a member of the student council at Ege Valley University. Our council organizes cultural events throughout the year, including talks, film screenings and workshops for our six thousand students.\n\nI am writing to invite you to give a talk at our university. Many of our students have read your novels, especially your latest book about life in a coastal village, which was discussed in our literature club last semester. Students were particularly interested in how you combine local history with modern characters, and they would love to hear about your writing process and your advice for young writers.\n\nWe are planning the event for an evening in late April, and we expect an audience of around two hundred students in our main lecture hall. The talk would last about an hour, followed by questions and a book signing. Of course, we would cover your travel expenses and offer a speaker's fee. Could you please let us know whether you would be available and which dates would suit you best?\n\nWith best regards,\nKerem Ateş",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Science",
      professor: {
        name: "Dr. Patel",
        text: "Many cities are considering banning single-use plastic items, such as bags, straws and cutlery. Supporters say this is necessary to reduce plastic waste in oceans and landfills. Critics argue that bans are inconvenient for consumers and that alternatives, such as paper bags, also have environmental costs. Should cities ban single-use plastics? Why or why not?",
      },
      students: [
        { name: "Ava", text: "Yes. Plastic stays in the environment for hundreds of years and harms marine animals. A ban is the fastest way to change people's habits." },
        { name: "Yiğit", text: "I'm not sure. Paper bags need more energy and water to produce. Instead of a ban, cities should focus on better recycling systems." },
      ],
      sample: "I believe cities should ban the most common single-use plastic items, while also improving recycling. Ava is right that plastic waste is a serious and long-lasting problem. Items like bags and straws are used for only a few minutes but can remain in the environment for centuries, where they break into microplastics and harm wildlife. Experience in many places shows that bans or fees quickly change people's habits, and most people adapt to carrying reusable bags. However, Yiğit raises a fair point: replacing plastic with paper is not automatically better, since paper products also require resources. That is why bans should encourage reusable alternatives rather than simply replace one disposable item with another. Combined with better recycling systems, a ban could greatly reduce waste without causing unnecessary inconvenience.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-JennyNeural",
    repeat: {
      scene: "You are a new assistant at a language school. The school director is telling you what to say to new students.",
      sentences: [
        "Welcome to our language school.",
        "Classes begin at nine every morning.",
        "Please bring a notebook and a pen.",
        "Your teacher will give you a placement test.",
        "Each class has no more than twelve students.",
        "If you would like to change to a different level, please speak to the director after your first week.",
        "On Friday afternoons, we organize cultural activities, such as cooking classes and city tours, which give students a chance to practice the language outside the classroom.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about the environment and daily habits. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you do in your daily life to help the environment?",
          sample: "I try to make small changes in my daily routine. For example, I carry a reusable water bottle and a cloth bag, so I don't need to buy plastic ones. I also separate my recycling and try to turn off lights and electronics when I'm not using them. When possible, I walk or take public transport instead of using a taxi. These are small things, but I believe they add up over time.",
        },
        {
          text: "Do you think individuals or governments are more responsible for protecting the environment?",
          sample: "I think both are responsible, but governments have more power to create big changes. Individuals can reduce waste and save energy, but governments can pass laws that limit pollution, invest in renewable energy and improve public transport. These actions affect millions of people at once. However, governments often act when citizens demand it, so individual choices and public pressure are also important for encouraging political action.",
        },
        {
          text: "Should companies be required to make products that last longer?",
          sample: "Yes, I think companies should be encouraged or even required to make products that last longer. Many electronics today are designed to be replaced after only a few years, which creates a huge amount of waste and costs consumers a lot of money. If companies made products that could be easily repaired and provided spare parts, people could keep their devices longer. This would be better for both the environment and people's wallets.",
        },
        {
          text: "What environmental problem do you think is most urgent today?",
          sample: "In my opinion, climate change is the most urgent environmental problem, because it affects so many other issues, like extreme weather, rising sea levels, food production and the survival of many species. Its effects are already visible, with more heat waves, floods and wildfires around the world. To address it, countries need to reduce their use of fossil fuels quickly and invest in clean energy, while also helping communities adapt to the changes that are already happening.",
        },
      ],
    },
  },
};
