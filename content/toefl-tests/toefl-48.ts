import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 48 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_48: ToeflTest = {
  id: "toefl-48",
  no: 48,
  title: "TOEFL iBT Practice Test 48",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Wristwatches",
          text: "For centuries, people who wanted to carry a watch used a pocket watch attached to a ch{{ain}}. Small watches worn on the wrist existed in the nineteenth cen{{tury}}, but they were considered jewelry for wo{{men}}. Attitudes changed during the First World War, when soldiers needed to check the ti{{me}} quickly while keeping their hands free. Wristwatches proved much more prac{{tical}} than pocket watches, and after the war they became popu{{lar}} with men as well. In the 1970s, cheap electronic watches with quartz crys{{tals}} became widely available. Today, many people use smartwatches that can also measure their heart ra{{te}}, count their st{{eps}} and display mes{{sages}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Choir rehearsal change",
          text: [
            "Hello everyone, just a reminder that this week's choir rehearsal is moving from Wednesday to Thursday at 7 p.m. because the music hall is being used for an exam.",
            "We'll practice the songs for the spring concert, so please bring your printed music sheets. See you all there!",
          ],
          questions: [
            { text: "Why is the rehearsal moving to Thursday?", options: ["The music hall is being used for an exam.", "The director is ill.", "The concert was canceled.", "Many singers are busy on Wednesday."], answer: 0 },
            { text: "What should choir members bring?", options: ["their printed music sheets", "their instruments", "concert tickets", "snacks"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "New campus bicycle stations",
          text: [
            "NEW: CAMPUS BICYCLE SHARING",
            "Twelve bicycle sharing stations have opened across campus, including outside the library, the dormitories and the sports center. Students and staff can use the bicycles free of charge for the first thirty minutes of each ride.",
            "To start, download the campus app and register with your university email address. Rides longer than thirty minutes cost $1 for every additional half hour. Bicycles must be returned to a station; bicycles left elsewhere will result in a $10 fee.",
          ],
          questions: [
            { text: "How long can people ride for free?", options: ["the first thirty minutes of each ride", "one hour", "all day", "ten minutes"], answer: 0 },
            { text: "What must users do to start?", options: ["download the app and register with a university email", "buy a membership card", "pay a deposit", "attend a training session"], answer: 0 },
            { text: "What happens if a bicycle is left away from a station?", options: ["The user is charged a $10 fee.", "The user is banned.", "Nothing happens.", "The bicycle is given to another user."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How sound travels",
          paragraphs: [
            "Every sound we hear, from a whisper to a thunderclap, begins with a vibration. When a guitar string is plucked or a drum is struck, it moves rapidly back and forth, pushing on the air particles next to it. These particles push on their neighbors, which push on theirs, creating a wave of pressure that spreads outward from the source. When this wave reaches our ears, it causes the eardrum to vibrate, and the brain interprets these vibrations as sound.",
            "Because sound is carried by particles, it cannot travel through a vacuum, where there are no particles at all. This is why space is silent, despite what science fiction films may suggest. Sound also travels at different speeds through different materials. In air at room temperature, it moves at about 340 meters per second, but in water it travels more than four times faster, and in steel it is faster still. This is because the particles in liquids and solids are closer together and pass vibrations to one another more efficiently.",
            "Sound waves have two main properties that affect what we hear. Frequency, the number of vibrations per second, determines the pitch: high-frequency waves produce high-pitched sounds, while low-frequency waves produce deep sounds. Amplitude, the size of the vibrations, determines loudness. Humans can typically hear frequencies between about twenty and twenty thousand vibrations per second, but many animals can hear far beyond this range. Bats and dolphins, for example, use extremely high-frequency sounds to locate objects, while elephants communicate using very low sounds that travel long distances.",
          ],
          questions: [
            { text: "According to paragraph 1, how does a sound begin?", options: ["with a vibration", "with a flash of light", "with a change in temperature", "with the movement of the eardrum"], answer: 0 },
            { text: "According to paragraph 2, why is space silent?", options: ["There are no particles to carry sound.", "It is too cold.", "Sound moves too fast there.", "Stars absorb all sound."], answer: 0 },
            { text: "Why does sound travel faster in water than in air?", options: ["The particles are closer together.", "Water is warmer than air.", "Water has no particles.", "Air blocks vibrations completely."], answer: 0 },
            { text: "The word \"determines\" in paragraph 3 is closest in meaning to", options: ["decides", "hides", "reduces", "repeats"], answer: 0 },
            { text: "According to paragraph 3, what determines the loudness of a sound?", options: ["amplitude", "frequency", "temperature", "the material of the eardrum"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our class garden",
          text: "This year, our class started a small garden behind the sch{{ool}}. Our teacher divided us into gro{{ups}}, and each group planted different vegeta{{bles}}. My group planted carrots and let{{tuce}}. Every morning before class, we water the pla{{nts}} and pull out the we{{eds}}. At first, nothing happened, and we were wor{{ried}}. But after two weeks, small green le{{aves}} appeared. In June, we picked our carrots and made a salad for the whole cl{{ass}}. It was the most delicious salad I have ever ea{{ten}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Free tennis lessons",
          text: [
            "FREE TENNIS FOR BEGINNERS!",
            "Riverside Tennis Club is offering four free lessons for adult beginners every Tuesday evening in May, from 6 to 7:30 p.m.",
            "Rackets and balls are provided. Just bring sports clothes and comfortable shoes. Places are limited to sixteen people, so please call the club to reserve your spot.",
          ],
          questions: [
            { text: "Who are the lessons for?", options: ["adult beginners", "children", "professional players", "club members only"], answer: 0 },
            { text: "What do participants need to bring?", options: ["sports clothes and comfortable shoes", "a racket", "tennis balls", "a membership card"], answer: 0 },
            { text: "How can people reserve a place?", options: ["by calling the club", "by sending an email", "by arriving early", "by paying online"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How hedgehogs protect themselves",
          paragraphs: [
            "Hedgehogs are small animals that live in Europe, Asia and Africa. They are covered with about five thousand sharp spines.",
            "When a hedgehog feels afraid, it rolls into a tight ball. Its head, legs and soft belly are hidden inside, and only the spines are on the outside. Most animals do not want to touch a ball of sharp spines, so they leave the hedgehog alone.",
            "Hedgehogs are active at night. They eat insects, worms and snails, so many gardeners like them. In cold places, hedgehogs sleep through the winter in nests made of leaves.",
          ],
          questions: [
            { text: "How many spines does a hedgehog have?", options: ["about five thousand", "about fifty", "about five hundred", "about one million"], answer: 0 },
            { text: "What does a hedgehog do when it feels afraid?", options: ["It rolls into a tight ball.", "It runs very fast.", "It climbs a tree.", "It makes a loud noise."], answer: 0 },
            { text: "The word \"hidden\" in paragraph 2 is closest in meaning to", options: ["not seen", "broken", "large", "painted"], answer: 0 },
            { text: "Why do many gardeners like hedgehogs?", options: ["They eat insects, worms and snails.", "They plant flowers.", "They are colorful.", "They sleep all day."], answer: 0 },
            { text: "What do hedgehogs do in cold places in winter?", options: ["They sleep in nests made of leaves.", "They move to warmer countries.", "They live in houses.", "They hunt more often."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The gig economy",
          text: "In recent years, a growing number of people have found work through digital platforms that connect them with customers for short tasks, such as delivering food or giving ri{{des}}. This way of working is often called the gig econ{{omy}}. For workers, gig jobs can offer flexibility, since they can often choose when and how much to wo{{rk}}. For companies, they reduce the cost of hiring permanent emplo{{yees}}. However, critics argue that gig workers often lack basic prote{{ctions}}, such as sick pay, paid holidays and pen{{sions}}. Their incomes can also be unpre{{dictable}}. Several countries have recently passed la{{ws}} to give gig workers more rights, but the debate over how to clas{{sify}} them continues in many pla{{ces}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Seminar room booking policy",
          text: [
            "To: Graduate students in the Faculty of Arts",
            "From: Faculty Administration",
            "Subject: Updated policy for booking seminar rooms",
            "Graduate students may now book seminar rooms on the third floor for reading groups, thesis presentations and study sessions. Bookings must be made through the online room booking system and are limited to three hours per group per week.",
            "Priority is given to faculty-organized events, so student bookings may occasionally be canceled, in which case you will be notified at least 48 hours in advance. Food is permitted, but groups are responsible for leaving the room clean and returning furniture to its original position. Repeated failure to do so may result in the loss of booking privileges.",
          ],
          questions: [
            { text: "What may graduate students now do?", options: ["book seminar rooms for academic activities", "teach undergraduate seminars", "use faculty offices", "reserve rooms for private parties"], answer: 0 },
            { text: "Why might student bookings occasionally be canceled?", options: ["Faculty-organized events have priority.", "Rooms are being repaired.", "Students did not pay a fee.", "The system often fails."], answer: 0 },
            { text: "What are groups responsible for?", options: ["leaving the room clean and returning furniture", "providing food for everyone", "locking the building", "inviting a faculty member"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Public transport and urban growth",
          paragraphs: [
            "The shape of a city is closely connected to the ways in which its residents travel. Before the nineteenth century, most people walked, so cities were compact and densely populated, with homes, workplaces and markets close together. The arrival of horse-drawn trams and then railways allowed people to live farther from the city center, and new neighborhoods grew along transport lines, often in long, narrow patterns following the tracks.",
            "In the twentieth century, the spread of private cars transformed cities again, particularly in North America and Australia. Because cars could travel almost anywhere, development was no longer limited to areas near rail lines. Cities expanded outward into low-density suburbs, where homes were often far from shops and workplaces. This pattern made public transport less practical, since buses and trains require large numbers of passengers living near their stops to be efficient, and it increased dependence on cars.",
            "Today, many urban planners promote what is known as transit-oriented development, an approach that concentrates housing, offices and shops around public transport stations. By making it possible for more people to live within walking distance of a station, planners hope to reduce traffic congestion, air pollution and greenhouse gas emissions. Cities such as Copenhagen, Hong Kong and Curitiba in Brazil are often cited as successful examples. However, transit-oriented development can be difficult to introduce in cities that are already spread out, and it may raise property values near stations, making these areas less affordable for low-income residents.",
          ],
          questions: [
            { text: "According to paragraph 1, why were cities compact before the nineteenth century?", options: ["Most people walked.", "Land was very expensive.", "Cars were not allowed.", "Governments limited city size."], answer: 0 },
            { text: "According to paragraph 2, why did cars make public transport less practical?", options: ["Low-density suburbs had too few passengers near stops.", "Cars were cheaper than train tickets.", "Railways were destroyed.", "Buses could not use the roads."], answer: 0 },
            { text: "The word \"concentrates\" in paragraph 3 is closest in meaning to", options: ["brings together in one area", "spreads out", "removes", "decorates"], answer: 0 },
            { text: "What is the main goal of transit-oriented development?", options: ["to allow more people to live within walking distance of stations", "to build more highways", "to move people out of cities", "to replace trains with buses"], answer: 0 },
            { text: "What is one challenge of transit-oriented development mentioned in paragraph 3?", options: ["It may make areas near stations less affordable.", "It increases air pollution.", "It requires more parking lots.", "It reduces the number of stations."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Kerem", prompt: "Why didn't you come to the party?", chunks: ["I", "had to", "work", "a late", "shift"], end: "." },
      { promptBy: "Natalie", prompt: "Did you finish the puzzle?", chunks: ["we", "completed it", "after", "three", "long evenings"], end: "." },
      { promptBy: "Cemre", prompt: "I'm not sure what to give my sister for her birthday.", chunks: ["why don't", "you", "ask", "her best", "friend"], end: "?" },
      { promptBy: "Rob", prompt: "How long does it take to get to the beach?", chunks: ["it", "takes", "about", "twenty minutes", "by car"], end: "." },
      { promptBy: "Esin", prompt: "Where can I find information about scholarships?", chunks: ["you", "can find it", "on", "the university", "website"], end: "." },
      { promptBy: "Luke", prompt: "Why is your sister so happy today?", chunks: ["she", "passed", "her", "driving", "test"], end: "." },
      { promptBy: "Pelin", prompt: "What did the weather forecast say?", chunks: ["it", "will be", "sunny", "for the rest", "of the week"], end: "." },
      { promptBy: "Ethan", prompt: "When does the next semester start?", chunks: ["classes", "begin", "in", "late", "September"], end: "." },
      { promptBy: "Damla", prompt: "This coffee is too strong for me.", chunks: ["would you", "like", "some", "milk", "with it"], end: "?" },
      { promptBy: "Joel", prompt: "Why did you choose to live on campus?", chunks: ["it", "is", "easier", "to make", "new friends"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You signed up for a weekend volunteering event to clean a local beach, but you have just learned that you have an important exam on the Monday after. You want to change your volunteering date.",
      to: "the volunteer coordinator, Ms. Rivera",
      subject: "Request to change my volunteering date",
      tasks: ["Explain which event you signed up for.", "Explain why you need to change.", "Suggest an alternative and offer additional help."],
      sample: "Dear Ms. Rivera,\n\nI signed up last week to volunteer at the beach cleanup on Saturday, April 12, as part of the group from the Environmental Club. I was really looking forward to it, especially as it would be my first volunteering event with your organization.\n\nUnfortunately, I have just found out that my final chemistry exam has been moved to Monday, April 14, and it is one of the most important exams of my degree. I need to spend the whole weekend preparing, so I'm afraid I will not be able to take part on the twelfth.\n\nI noticed on your website that there is another beach cleanup planned for Saturday, April 26. Would it be possible to move my registration to that date? In addition, if you need help before then, I would be happy to design posters for the event or share information about it on the club's social media pages.\n\nThank you for your understanding, and I apologize for the inconvenience.\n\nBest regards,\nArda Güneş",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Communication Studies",
      professor: {
        name: "Dr. Bennett",
        text: "Some people believe that face-to-face meetings are essential for good teamwork, while others think video calls and online messaging are just as effective and save time and money. As more companies allow employees to work remotely, this question is becoming increasingly important. Are face-to-face meetings still necessary for effective teamwork? Explain your view.",
      },
      students: [
        { name: "Lucy", text: "Yes. In person, you can read people's body language and build trust more easily. Online, misunderstandings happen more often and people feel less connected." },
        { name: "Doruk", text: "Not really. Video calls work well for most meetings, and they save hours of commuting. Teams can still communicate clearly if they use the right tools." },
      ],
      sample: "I believe face-to-face meetings are still necessary, but they do not need to happen every day. Lucy makes an important point: when people meet in person, they can pick up on body language, have informal conversations and build the kind of trust that makes teams work well together. This is especially valuable when a team is new or is dealing with a complex problem or conflict. On the other hand, Doruk is right that many routine meetings, such as weekly updates, can be held online just as effectively, saving time and travel costs. In my opinion, the best approach is a hybrid model, where teams communicate online for everyday work but meet in person regularly, perhaps once a month, to strengthen relationships and work on important decisions.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new assistant at a science museum. The education manager is telling you what to say to school groups.",
      sentences: [
        "Hello everyone, welcome to the science museum.",
        "Please stay with your group at all times.",
        "You may touch the exhibits in this room.",
        "The planetarium show starts at eleven o'clock.",
        "Lunch can be eaten in the picnic area on the ground floor.",
        "If anyone feels unwell or gets lost, please go to the nearest staff member wearing a blue shirt.",
        "Before you leave, each student will receive a small activity booklet, which includes experiments that you can try safely at home with your family.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about sports and physical activity. The researcher will ask you some questions.",
      questions: [
        {
          text: "What kind of physical activity do you enjoy most?",
          sample: "The physical activity I enjoy most is swimming. I usually go to the pool three times a week before my classes. I like it because it exercises the whole body without putting too much pressure on my joints, and it helps me clear my mind. When I'm swimming, I can't look at my phone or think about my assignments, so it's a great way to relax and reduce stress.",
        },
        {
          text: "Do you prefer team sports or individual sports?",
          sample: "I generally prefer individual sports, like running and swimming, because I can do them whenever I want and focus on improving my own performance. However, I also enjoy playing volleyball with my friends on weekends. Team sports are great for learning cooperation and communication, and they're often more fun because you share the experience with others. So I think both types have their own benefits.",
        },
        {
          text: "Should physical education be a required subject in schools?",
          sample: "Yes, I strongly believe physical education should be required. Many children spend most of the day sitting in classrooms and then sit again at home in front of screens. PE classes make sure every child gets at least some regular exercise, which is important for their health. They also teach teamwork, discipline and how to deal with winning and losing. However, schools should offer a variety of activities so that students who don't like competitive sports can still enjoy moving.",
        },
        {
          text: "Do you think professional athletes are paid too much?",
          sample: "In some cases, I think top athletes' salaries are extremely high compared with the salaries of people like nurses or teachers, whose work is essential to society. However, professional sports are a huge business, and athletes' salaries come from ticket sales, advertising and television rights, so they reflect how much money people are willing to spend. Also, athletes' careers are often short and they risk serious injuries. Still, I would like to see more support for less popular sports and for athletes at lower levels.",
        },
      ],
    },
  },
};
