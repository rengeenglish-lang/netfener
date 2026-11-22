import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 82 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_82: ToeflTest = {
  id: "toefl-82",
  no: 82,
  title: "TOEFL iBT Practice Test 82",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Lawn mowers",
          text: "Before lawn mowers were invented, grass was cut by workers using long curved blades called scythes, or it was kept short by grazing she{{ep}}. Only wealthy families could afford large, neatly cut la{{wns}}. In 1830, an English engineer named Edwin Budding invented the first mechanical lawn mo{{wer}}. He got the idea from a machine used in a cloth fac{{tory}} to trim fabric. His mower had a set of rotating bla{{des}} and was pushed by ha{{nd}}. Later, mowers powered by horses, steam and gas{{oline}} were developed. Lawn mowers made it possible for ordinary families to have lawns, and they also helped create modern spo{{rts}} played on grass, such as tennis and gol{{f}}. Today, some mowers are electric robots that work automa{{tically}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "A room for my cousin",
          text: [
            "Hi Deniz, my cousin is visiting the city for a job interview next Tuesday and needs a place to stay for two nights. Is your spare room still free?",
            "She's very tidy and quiet, and she'd be happy to pay something. Could you let me know by tomorrow so she can book her train?",
          ],
          questions: [
            { text: "Why is the writer's cousin visiting the city?", options: ["for a job interview", "for a holiday", "for a wedding", "to start university"], answer: 0 },
            { text: "What does the writer ask?", options: ["whether Deniz's spare room is free", "whether Deniz can lend money", "whether Deniz can drive her cousin", "whether Deniz knows a hotel"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Graduation photo sessions",
          text: [
            "GRADUATION PHOTOS",
            "Professional photographers will be in the Main Hall from May 20 to May 24, between 10 a.m. and 5 p.m., to take individual graduation photos. Gowns and caps will be provided.",
            "Sessions are free, but you must book a ten-minute time slot online. Printed photos can be ordered afterwards, and digital copies will be emailed to you within two weeks.",
          ],
          questions: [
            { text: "What will be provided for the photos?", options: ["gowns and caps", "suits and ties", "flowers", "frames"], answer: 0 },
            { text: "What must students do to have their photo taken?", options: ["book a ten-minute time slot online", "pay a fee", "bring their own camera", "come with a family member"], answer: 0 },
            { text: "When will digital copies be emailed?", options: ["within two weeks", "the same day", "after one month", "at graduation"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How the Vikings navigated",
          paragraphs: [
            "Between the late eighth and eleventh centuries, Scandinavian seafarers known as the Vikings traveled across vast stretches of ocean. They raided and traded along the coasts of Europe, settled in Iceland and Greenland, and even reached North America around the year 1000, nearly five hundred years before Columbus. They did all this without compasses, detailed maps or modern instruments, which raises the question of how they found their way.",
            "Historians believe that Viking navigators relied heavily on natural signs. They observed the position of the sun during the day and the stars at night, particularly the North Star, to judge direction. They also used knowledge passed down from experienced sailors, including descriptions of coastlines, mountains and islands. Signs from nature, such as the presence of certain birds, the color of the water and the behavior of whales, could indicate that land was near. Some sagas describe sailors releasing birds and following them toward land.",
            "Some researchers have suggested that the Vikings may also have used tools. A fragment of a wooden disk found in Greenland may have been part of a kind of sun compass, which used the shadow cast by a pointer to determine direction. Old Norse stories also mention a 'sunstone', which some scientists believe may have been a crystal that could reveal the sun's position even on cloudy days by changing how light appears. Experiments have shown that certain crystals found in Scandinavia can work in this way, although there is no definite proof that the Vikings used them. Whatever methods they used, their voyages show remarkable skill and courage.",
          ],
          questions: [
            { text: "According to paragraph 1, what is remarkable about Viking voyages?", options: ["They traveled vast distances without compasses or detailed maps.", "They traveled only along rivers.", "They never left Scandinavia.", "They used steam-powered ships."], answer: 0 },
            { text: "According to paragraph 2, what natural signs could indicate that land was near?", options: ["certain birds, the color of the water and whale behavior", "snow", "strong winds only", "the height of waves"], answer: 0 },
            { text: "The word \"indicate\" in paragraph 2 is closest in meaning to", options: ["show", "hide", "prevent", "create"], answer: 0 },
            { text: "What might the wooden disk found in Greenland have been?", options: ["part of a sun compass", "a shield", "a map", "a fishing tool"], answer: 0 },
            { text: "What does the author say about the 'sunstone'?", options: ["Certain crystals can work this way, but there is no definite proof the Vikings used them.", "It has been proven that every Viking ship had one.", "It was a type of map.", "It was used to start fires."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A day at the water park",
          text: "Last summer, my family spent a whole day at a big water pa{{rk}}. It was a very hot d{{ay}}, so the cold water felt wonderful. First, my brother and I went down the tallest sl{{ide}}. I screamed all the way down, but it was really f{{un}}! Then we swam in the wave po{{ol}}, where the water moved up and down like the s{{ea}}. My par{{ents}} relaxed on chairs in the sha{{de}}. At lunchtime, we ate pizza and ice cre{{am}}. In the afternoon, we went on the slides again and again. When we went home, we were very ti{{red}} but happy.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Cheese-making workshop",
          text: [
            "MAKE YOUR OWN CHEESE!",
            "Spend a morning at Green Valley Farm and learn how to make fresh cheese from local milk. Workshops are held every Saturday from 9 a.m. to 12 p.m.",
            "The price is $50, including a farm tour, all ingredients and a cheese tasting. Each participant takes home their own cheese. Children over ten are welcome with an adult.",
          ],
          questions: [
            { text: "Where is the workshop held?", options: ["at Green Valley Farm", "at a restaurant", "at a school", "at a supermarket"], answer: 0 },
            { text: "What is included in the price?", options: ["a farm tour, ingredients and a tasting", "lunch and dinner", "transport to the farm", "a bottle of milk"], answer: 0 },
            { text: "Who can join with an adult?", options: ["children over ten", "babies", "teenagers only", "pets"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How sloths survive by moving slowly",
          paragraphs: [
            "Sloths live in the rainforests of Central and South America. They spend almost their whole lives hanging upside down in trees. They are famous for being very slow.",
            "Sloths eat mainly leaves, which give them very little energy. To save energy, they move slowly and sleep many hours a day. Their bodies also stay at a lower temperature than most mammals.",
            "Moving slowly also helps sloths stay safe. Eagles and big cats look for movement, so a slow sloth is hard to notice. Tiny green plants called algae even grow in a sloth's fur, which helps it blend in with the leaves.",
          ],
          questions: [
            { text: "Where do sloths live?", options: ["in the rainforests of Central and South America", "in African deserts", "in cold mountains", "in the ocean"], answer: 0 },
            { text: "Why do sloths move slowly?", options: ["to save energy", "because they are lazy", "because they are old", "because they are sick"], answer: 0 },
            { text: "How does moving slowly help sloths stay safe?", options: ["Predators look for movement and may not notice them.", "It makes them look bigger.", "It scares other animals.", "It helps them run away."], answer: 0 },
            { text: "The phrase \"blend in\" in paragraph 3 is closest in meaning to", options: ["look similar to the surroundings", "stand out", "fall down", "make noise"], answer: 0 },
            { text: "What grows in a sloth's fur?", options: ["tiny green plants called algae", "flowers", "mushrooms", "leaves"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Social facilitation",
          text: "In 1898, a psychologist noticed that cyclists rode faster when they raced against others than when they rode al{{one}}. Later research showed that the presence of other people often improves performance on simple or well-practiced ta{{sks}}. This phenomenon is called social facili{{tation}}. However, the same presence can make performance wor{{se}} on difficult or unfamiliar tasks. For example, an experienced pianist may play better in front of an aud{{ience}}, while a beginner may make more mis{{takes}}. One explanation is that being watched increases phys{{ical}} arousal, which makes people more likely to do whatever comes most natu{{rally}} to them. If a task is well learned, the natural response is usu{{ally}} correct; if not, it is often wr{{ong}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Scholarship interview schedule",
          text: [
            "To: Shortlisted applicants for the Global Leaders Scholarship",
            "From: Scholarship Committee",
            "Subject: Interview schedule and preparation",
            "Congratulations on being shortlisted for the Global Leaders Scholarship. Interviews will take place on March 3 and 4 in the Administration Building. Your individual interview time is listed in the attached document. Each interview will last approximately thirty minutes.",
            "During the interview, you will be asked to discuss your academic goals and a community project you have been involved in. You will also give a five-minute presentation on a global issue of your choice; no slides are permitted. If you are unable to attend at your scheduled time, please contact us at least three days in advance.",
          ],
          questions: [
            { text: "How long will each interview last?", options: ["about thirty minutes", "five minutes", "two hours", "one day"], answer: 0 },
            { text: "What will candidates be asked to do?", options: ["give a five-minute presentation without slides", "take a written exam", "submit a new essay", "bring a recommendation letter"], answer: 0 },
            { text: "What should candidates do if they cannot attend?", options: ["contact the committee at least three days in advance", "send a friend", "skip the interview", "reapply next year"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Tidal power",
          paragraphs: [
            "Twice a day, the gravitational pull of the Moon and, to a lesser extent, the Sun causes sea levels to rise and fall along the world's coasts. These tides represent an enormous amount of moving water, and engineers have long been interested in using them to generate electricity. Unlike wind and solar power, which depend on the weather and the time of day, tides are highly predictable, since their timing can be calculated years in advance.",
            "There are two main approaches to tidal power. The first uses a barrage, a dam-like structure built across the mouth of a bay or river. As the tide rises and falls, water flows through turbines in the barrage, generating electricity. One of the oldest examples, built in France in the 1960s, is still operating today. The second approach uses underwater turbines, similar to wind turbines, placed in areas where tidal currents are strong. These turbines can be installed without blocking the entire waterway.",
            "Despite its advantages, tidal power currently provides only a tiny fraction of the world's electricity. Suitable sites are limited, since strong tides occur only in certain locations, and building equipment that can survive powerful currents and corrosive seawater is expensive. Barrages can also affect local ecosystems by changing water levels, blocking the movement of fish and altering the deposition of sediment. Underwater turbines may have smaller environmental impacts, but scientists are still studying how they affect marine animals. As technology improves and costs fall, some experts believe tidal power could become a valuable part of a renewable energy mix, particularly for coastal regions.",
          ],
          questions: [
            { text: "According to paragraph 1, what is an advantage of tidal power over wind and solar power?", options: ["Tides are highly predictable.", "Tides are stronger at night.", "Tides exist only in summer.", "Tides require no equipment."], answer: 0 },
            { text: "According to paragraph 2, how does a barrage generate electricity?", options: ["Water flows through turbines as the tide rises and falls.", "It uses solar panels.", "It burns fuel.", "It uses wind on the coast."], answer: 0 },
            { text: "The word \"corrosive\" in paragraph 3 is closest in meaning to", options: ["able to damage materials gradually", "cold", "clean", "fast-moving"], answer: 0 },
            { text: "According to paragraph 3, why does tidal power provide only a small fraction of electricity?", options: ["Suitable sites are limited and equipment is expensive.", "Tides are unpredictable.", "It produces too much electricity.", "Governments have banned it."], answer: 0 },
            { text: "What environmental effect of barrages is mentioned?", options: ["blocking the movement of fish", "causing earthquakes", "increasing air pollution", "creating new islands"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Engin", prompt: "Why are you buying so many vegetables?", chunks: ["I", "am cooking", "dinner", "for", "ten people"], end: "." },
      { promptBy: "Sarah", prompt: "Did you enjoy the play last night?", chunks: ["the costumes", "and", "the music", "were", "wonderful"], end: "." },
      { promptBy: "Nil", prompt: "I'm always nervous before presentations.", chunks: ["why don't", "you", "practice", "in front of", "a mirror"], end: "?" },
      { promptBy: "Adam", prompt: "How long did it take to paint the house?", chunks: ["it", "took us", "about", "two", "weekends"], end: "." },
      { promptBy: "Hande", prompt: "When will the pool reopen?", chunks: ["it", "will", "reopen", "after", "the repairs"], end: "." },
      { promptBy: "Will", prompt: "Why are the lights off in the hallway?", chunks: ["the electricity", "has", "been", "cut off", "for maintenance"], end: "." },
      { promptBy: "Sinem", prompt: "What did your teacher think of your essay?", chunks: ["she", "said", "it", "was", "well organized"], end: "." },
      { promptBy: "Ian", prompt: "Where are you going for New Year's Eve?", chunks: ["we", "are going", "to", "a party", "at my friend's house"], end: "." },
      { promptBy: "Ceren", prompt: "My bag strap just broke.", chunks: ["do you", "want", "to borrow", "my", "backpack"], end: "?" },
      { promptBy: "Kyle", prompt: "Why did you start volunteering at the hospital?", chunks: ["I", "want to", "become", "a doctor", "one day"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a member of a neighborhood association. The association wants to organize a street festival next summer, and you have been asked to write to the city council for permission to close the street for one day.",
      to: "the city council events office",
      subject: "Request to close Linden Street for a festival",
      tasks: ["Introduce the association and the festival.", "Explain the details of the street closure.", "Describe how you will ensure safety and minimize disruption."],
      sample: "Dear Events Office,\n\nI am writing on behalf of the Linden Street Neighborhood Association, a volunteer group representing about two hundred households. We would like to organize our first summer street festival on Saturday, July 12, to bring neighbors together and support local businesses.\n\nWe are requesting permission to close Linden Street between Oak Avenue and Pine Road from 9 a.m. to 9 p.m. on that day. The festival would include food stalls run by local restaurants, children's games, a small stage for local musicians and a market for handmade goods. We expect around five hundred visitors throughout the day.\n\nTo ensure safety, we will hire a professional security company and place barriers at both ends of the street, with clear access for emergency vehicles. We will inform all residents and businesses on the street at least four weeks in advance and arrange parking for residents on nearby streets. Volunteers will clean the street at the end of the day, and noise will end by 9 p.m.\n\nWe would be happy to provide any further information. Thank you for considering our request.\n\nYours faithfully,\nMerve Tan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education Policy",
      professor: {
        name: "Dr. Lewis",
        text: "Some people argue that schools should require all students to learn computer programming, since technology plays such an important role in modern life. Others believe that programming should be an optional subject, and that schools should focus on traditional subjects such as reading, writing and mathematics. Should computer programming be a required subject in schools? Explain your view.",
      },
      students: [
        { name: "Amelia", text: "Yes. Almost every job now involves technology. Learning programming teaches logical thinking and prepares students for the future." },
        { name: "Hakan", text: "No. Not every student will work with computers. Schools already have too many subjects, and basic skills like reading are more important." },
      ],
      sample: "I believe schools should require students to learn the basics of computer programming, but advanced programming should remain optional. Amelia is right that technology is now part of almost every field, from medicine to agriculture, and understanding how software works helps people use it more effectively and critically. Programming also develops logical thinking, problem-solving and persistence, which are valuable for all students, whether or not they become programmers. However, Hakan makes a fair point that schools should not overload students or neglect fundamental skills such as reading and mathematics. A good compromise would be a short required introduction to programming in primary or middle school, perhaps integrated with math lessons, followed by optional advanced courses for students who are interested.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new employee at a campsite. The campsite manager is telling you what to say to visitors.",
      sentences: [
        "Welcome to Pine Lake Campsite.",
        "Here is a map of the campsite.",
        "Your tent area is number twelve.",
        "Showers are next to the main building.",
        "Please keep the noise down after ten.",
        "Campfires are only allowed in the metal fire rings, and they must be put out completely before you go to sleep.",
        "You can rent canoes at the lake from eight in the morning until six in the evening, and life jackets are included in the price.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about outdoor activities. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is your favorite outdoor activity?",
          sample: "My favorite outdoor activity is hiking. I love walking through forests and mountains, especially in spring when the flowers are blooming. Hiking helps me stay fit, but more importantly, it helps me relax and clear my mind. I usually go with a few friends on weekends, and we often bring a picnic to eat at the top. Reaching a beautiful viewpoint after a long climb is a wonderful feeling.",
        },
        {
          text: "Do you prefer spending holidays in nature or in cities?",
          sample: "I usually prefer holidays in nature, like camping by a lake or staying in a small village in the mountains. Cities are exciting, with museums and restaurants, but they can also be crowded and tiring. In nature, I feel calmer and more connected to the world around me. However, I sometimes enjoy a short city break, especially if there's a special exhibition or concert I want to see.",
        },
        {
          text: "Do you think children today spend enough time playing outdoors?",
          sample: "Unfortunately, I don't think most children today spend enough time outdoors. Many prefer playing video games or watching videos, and parents may be worried about safety or have busy schedules. However, playing outside is important for children's health, creativity and social skills. Schools and parents should encourage outdoor activities, and cities should provide safe parks and playgrounds where children can play freely.",
        },
        {
          text: "Should cities create more spaces for outdoor sports and activities?",
          sample: "Yes, I think cities should create more spaces for outdoor sports and activities, such as running paths, cycling routes and outdoor gyms. These spaces encourage people to exercise, which improves public health and can reduce healthcare costs. They also give people places to meet and build community. Even small spaces, like a basketball court in a neighborhood, can make a big difference, especially for young people who might not have other options.",
        },
      ],
    },
  },
};
