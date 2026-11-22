import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 86 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_86: ToeflTest = {
  id: "toefl-86",
  no: 86,
  title: "TOEFL iBT Practice Test 86",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Doorbells",
          text: "Before doorbells were invented, visitors usually knocked on the door or used a heavy metal knocker attached to it. In large houses, servants often could not he{{ar}} the knocking, so some homes installed bells connected to the front door by long wi{{res}} and pulleys. When a visitor pulled a handle outside, a bell rang in the kit{{chen}}. In the nineteenth century, after the invention of the electric bat{{tery}}, inventors created the first electric doorbells. Pressing a button completed an electric cir{{cuit}}, which made a small hammer strike a me{{tal}} bell. Later, doorbells that played musical notes became popu{{lar}}. Today, many homes have video doorbells that send a mess{{age}} to the owner's phone and allow them to see and speak to visitors from any{{where}} in the wor{{ld}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Waiting for a package",
          text: [
            "Hi Ceyda, I'm expecting a package with my new textbooks this afternoon, but I'll be at the hospital for my grandmother's appointment until 4.",
            "If the delivery person rings, could you sign for it and keep it in your room? I'll pick it up as soon as I get back. Thanks!",
          ],
          questions: [
            { text: "What is in the package?", options: ["new textbooks", "clothes", "a phone", "food"], answer: 0 },
            { text: "What does the writer ask Ceyda to do?", options: ["sign for the package and keep it", "open the package", "return the package", "go to the hospital"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Library seat booking",
          text: [
            "NEW SEAT BOOKING SYSTEM",
            "To reduce crowding during exam periods, students must now book a study seat through the library app before entering the main reading room. Seats can be booked for up to four hours at a time.",
            "If you do not check in within twenty minutes of your booking time, your seat will be released to other students. Seats in the group study area and computer room do not need to be booked.",
          ],
          questions: [
            { text: "Why has the seat booking system been introduced?", options: ["to reduce crowding during exam periods", "to save electricity", "to close the library earlier", "to sell tickets"], answer: 0 },
            { text: "What happens if students do not check in within twenty minutes?", options: ["Their seat is released to other students.", "They pay a fine.", "They lose library access.", "Nothing happens."], answer: 0 },
            { text: "Which seats do not need to be booked?", options: ["seats in the group study area and computer room", "seats in the reading room", "all seats", "seats near the windows"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How Machu Picchu was built",
          paragraphs: [
            "High in the Andes Mountains of Peru, on a narrow ridge about 2,400 meters above sea level, lie the remains of Machu Picchu, a stone city built by the Inca in the fifteenth century. The site was probably a royal estate for the Inca emperor Pachacuti, and it was abandoned about a century later, around the time of the Spanish conquest. Because the Spanish apparently never found it, the city remained largely intact.",
            "The Inca were remarkable stonemasons. At Machu Picchu, many walls were built from granite blocks cut so precisely that they fit together without mortar; in some places, not even a thin knife blade can be inserted between the stones. This technique, known as ashlar masonry, also helped the buildings survive the region's frequent earthquakes. During a tremor, the stones can move slightly and then settle back into place, rather than collapsing.",
            "Building on a steep mountain ridge in an area of heavy rainfall presented serious challenges. Engineers estimate that around sixty percent of the construction at Machu Picchu lies underground, in the form of deep foundations and layers of crushed stone that allow rainwater to drain away. The site also includes hundreds of agricultural terraces, which prevented erosion and provided land for crops, and a network of stone channels that carried fresh water from a spring to fountains throughout the city. These features have helped Machu Picchu withstand centuries of rain and earthquakes, and it is now one of the most visited archaeological sites in South America.",
          ],
          questions: [
            { text: "According to paragraph 1, why did Machu Picchu remain largely intact?", options: ["The Spanish apparently never found it.", "It was rebuilt in the twentieth century.", "It was protected by walls.", "It was underground."], answer: 0 },
            { text: "According to paragraph 2, what is special about the walls?", options: ["The stones fit together without mortar.", "They are made of wood.", "They are painted gold.", "They are very thin."], answer: 0 },
            { text: "The word \"intact\" in paragraph 1 is closest in meaning to", options: ["undamaged", "hidden", "crowded", "modern"], answer: 0 },
            { text: "How did ashlar masonry help buildings survive earthquakes?", options: ["The stones could move slightly and settle back into place.", "The stones were glued with metal.", "The buildings were very low.", "The walls bent like rubber."], answer: 0 },
            { text: "According to paragraph 3, what is the purpose of the underground construction?", options: ["to allow rainwater to drain away", "to store food", "to hide treasure", "to create tunnels for travel"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My piano recital",
          text: "Last spring, I played the piano at my first reci{{tal}}. My teacher chose a short piece by a famous compo{{ser}}. I practiced for an hour every d{{ay}} for two months. On the day of the recital, I wore a new dr{{ess}}, and my whole family came to watch. When it was my tu{{rn}}, my hands were cold and sha{{king}}. I sat down at the big black pia{{no}} and took a deep breath. As soon as I started play{{ing}}, I felt calmer. At the end, everyone clap{{ped}}, and my teacher gave me a big hu{{g}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Stand-up comedy night",
          text: [
            "LAUGH OUT LOUD!",
            "Join us for a stand-up comedy night every Friday at 9 p.m. at The Laughing Owl. Each week, five local comedians perform short sets.",
            "Tickets cost $10, or $7 for students. If you would like to try comedy yourself, you can sign up for the five-minute open stage at the end of the show. The show is suitable for adults only.",
          ],
          questions: [
            { text: "When is the comedy night?", options: ["every Friday at 9 p.m.", "every Sunday afternoon", "once a month", "every weekday"], answer: 0 },
            { text: "How much do students pay?", options: ["$7", "$10", "nothing", "$5"], answer: 0 },
            { text: "What can audience members sign up for?", options: ["a five-minute open stage", "a comedy class", "a free drink", "a backstage tour"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why peacocks have colorful tails",
          paragraphs: [
            "Male peacocks have long, beautiful tail feathers covered with shiny blue and green patterns that look like eyes. Female peahens, by contrast, are mostly brown.",
            "Males use their tails to attract females. During the breeding season, a male spreads his tail into a large fan and shakes it to make the feathers shimmer. Females watch carefully and choose the males with the most impressive displays.",
            "A large, colorful tail may show that a male is healthy and strong. However, long tails are also heavy and make it harder for males to escape from predators such as tigers. After the breeding season, peacocks lose their long tail feathers and grow new ones the next year.",
          ],
          questions: [
            { text: "What color are female peahens mostly?", options: ["brown", "blue", "green", "white"], answer: 0 },
            { text: "What do males use their tails for?", options: ["to attract females", "to fly long distances", "to keep warm", "to find food"], answer: 0 },
            { text: "The word \"shimmer\" in paragraph 2 is closest in meaning to", options: ["shine and sparkle", "fall off", "change size", "become dark"], answer: 0 },
            { text: "What might a large, colorful tail show?", options: ["that a male is healthy and strong", "that a male is young", "that a male is hungry", "that a male is lost"], answer: 0 },
            { text: "What is a disadvantage of long tails?", options: ["They make it harder to escape predators.", "They make peacocks too cold.", "They stop peacocks from eating.", "They are easy to lose."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The frequency illusion",
          text: "Have you ever learned a new word and then suddenly noticed it everywhere? This experience is known as the frequency illu{{sion}}. The word did not actually become more com{{mon}}; instead, your attention changed. Once something becomes meaning{{ful}} to us, the brain is more lik{{ely}} to notice it, a process called selective atten{{tion}}. Each time we notice the word again, we feel that it is appearing more of{{ten}}, a pattern known as confirmation. The same thing happens when people buy a new car and then seem to see the same mo{{del}} on every street. The frequency illusion is usually har{{mless}}, but it can sometimes lead people to believe that rare eve{{nts}} or coincidences are more significant than they re{{ally}} are.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Field course fees",
          text: [
            "To: Students registered for the summer geology field course",
            "From: Department of Earth Sciences",
            "Subject: Payment and preparation for the field course",
            "The two-week geology field course in the Taurus Mountains will run from July 1 to July 14. The course fee of $600 covers transport, shared accommodation and most meals. Payment must be made through the student portal by May 31 to confirm your place.",
            "Students who receive financial aid may apply for a reduced fee by submitting a short form to the department office. All participants must attend a safety briefing on June 20 and bring suitable hiking boots, a hard hat and waterproof clothing. Students who cancel after June 1 will not receive a refund unless they have a medical reason.",
          ],
          questions: [
            { text: "What does the course fee cover?", options: ["transport, accommodation and most meals", "flights only", "equipment only", "nothing"], answer: 0 },
            { text: "Who may apply for a reduced fee?", options: ["students who receive financial aid", "all students", "students with good grades", "international students only"], answer: 0 },
            { text: "When will students who cancel not receive a refund?", options: ["after June 1, unless they have a medical reason", "before May 31", "at any time", "if they attend the briefing"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Wildlife corridors",
          paragraphs: [
            "As cities, farms and roads expand, natural habitats are increasingly broken into small, isolated patches. This process, known as habitat fragmentation, is one of the most serious threats to wildlife. Animals living in a small patch of forest may be unable to find enough food, mates or shelter, and populations cut off from one another can lose genetic diversity, making them more vulnerable to disease and environmental change.",
            "One solution that conservationists promote is the creation of wildlife corridors, strips of natural habitat that connect separate areas and allow animals to move safely between them. Corridors can take many forms, from long belts of forest along rivers to hedges between farm fields. Where roads cut through habitats, engineers have built special bridges covered with soil and vegetation, as well as tunnels beneath highways, so that animals can cross without being hit by vehicles. In parts of Canada and the Netherlands, such crossings have significantly reduced road deaths of large mammals.",
            "Research suggests that corridors can increase the movement of animals and plants between habitats and help populations recover. However, they are not a perfect solution. Corridors may also allow invasive species or diseases to spread, and some animals may avoid narrow corridors if they feel exposed. Creating corridors can also be expensive and may require cooperation among many landowners and governments. For these reasons, scientists emphasize that corridors work best as part of broader conservation strategies that also protect large areas of habitat. As climate change forces many species to shift their ranges, connected landscapes may become even more important.",
          ],
          questions: [
            { text: "According to paragraph 1, what is habitat fragmentation?", options: ["the breaking of natural habitats into small, isolated patches", "the growth of forests", "the movement of animals to cities", "the creation of new parks"], answer: 0 },
            { text: "According to paragraph 2, what are wildlife corridors?", options: ["strips of habitat connecting separate areas", "fences that keep animals out", "roads built for tourists", "zoos for endangered animals"], answer: 0 },
            { text: "The word \"vulnerable\" in paragraph 1 is closest in meaning to", options: ["easily harmed", "strong", "numerous", "healthy"], answer: 0 },
            { text: "According to paragraph 3, what is one possible problem with corridors?", options: ["They may allow invasive species or diseases to spread.", "They prevent all animal movement.", "They are always cheap.", "They make habitats smaller."], answer: 0 },
            { text: "Why might connected landscapes become more important in the future?", options: ["Climate change is forcing many species to shift their ranges.", "Animals will stop moving.", "Cities will disappear.", "Roads will no longer exist."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Cem", prompt: "Why are you leaving work early?", chunks: ["my son", "has", "a football", "match", "this afternoon"], end: "." },
      { promptBy: "Lily", prompt: "Did you enjoy the opera?", chunks: ["the singers", "had", "incredibly", "powerful", "voices"], end: "." },
      { promptBy: "Aylin", prompt: "I spend too much time on my phone.", chunks: ["why don't", "you", "turn off", "notifications", "at night"], end: "?" },
      { promptBy: "Mark", prompt: "How long did you live in London?", chunks: ["I", "lived there", "for", "almost", "five years"], end: "." },
      { promptBy: "Nur", prompt: "When is the next staff meeting?", chunks: ["it", "is", "scheduled", "for", "Thursday morning"], end: "." },
      { promptBy: "Jake", prompt: "Why is the park so crowded today?", chunks: ["there is", "a free", "music festival", "this", "weekend"], end: "." },
      { promptBy: "Derya", prompt: "What did your grandmother cook for you?", chunks: ["she", "made", "my", "favorite", "vegetable soup"], end: "." },
      { promptBy: "Will", prompt: "Where did you buy your new glasses?", chunks: ["I", "got them", "from", "an optician", "near my office"], end: "." },
      { promptBy: "Esra", prompt: "I'm too tired to cook tonight.", chunks: ["should", "we", "order", "something", "instead"], end: "?" },
      { promptBy: "Peter", prompt: "Why did you start taking photography classes?", chunks: ["I", "want to", "improve", "my", "travel photos"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You booked a guided tour of a historic site for your family, but the tour company changed the start time without informing you, and your family missed the tour. You want to write to the company.",
      to: "the tour company's customer service team",
      subject: "Missed tour due to time change",
      tasks: ["Give details of your booking.", "Explain what happened.", "Say what you would like the company to do."],
      sample: "Dear Customer Service Team,\n\nOn June 2, I booked a guided tour of the old city walls for my family of four through your website. The tour was scheduled for Saturday, June 14, at 10 a.m., and I paid $120 in total. My booking reference is OC-5521.\n\nWhen we arrived at the meeting point at 9:45 a.m., there was no guide or group. After calling your office, we were told that the tour had been moved to 8:30 a.m. and had already finished. I checked my email and phone carefully, but I never received any message about this change. My children had been looking forward to the tour for weeks, and we had traveled more than an hour to get there, so we were very disappointed.\n\nI would like either a full refund or a free rebooking for another tour on a weekend later this month. I would also suggest reviewing your system for informing customers about schedule changes, so that this does not happen to others.\n\nI look forward to your reply.\n\nSincerely,\nGökhan Taş",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Psychology",
      professor: {
        name: "Dr. Allen",
        text: "Some psychologists argue that people are happier when they spend money on experiences, such as travel or concerts, rather than on material possessions, such as clothes or electronics. Others think that useful possessions can bring lasting satisfaction too. Do experiences or possessions make people happier? Explain your view.",
      },
      students: [
        { name: "Mia", text: "Experiences. A trip with friends creates memories that last forever, while a new phone becomes boring after a few months." },
        { name: "Kemal", text: "Possessions can make people happy too. A good bicycle or a comfortable bed improves your life every single day." },
      ],
      sample: "I think experiences usually bring more lasting happiness, although some carefully chosen possessions can also improve life significantly. Mia makes a convincing point: experiences like traveling, attending concerts or learning a new skill often create memories that people enjoy remembering for many years, and they are frequently shared with others, which strengthens relationships. People also tend to compare possessions with what others have, which can reduce satisfaction, while experiences feel more personal. However, Kemal is right that some possessions are used every day and support other activities. A good bicycle, for example, can lead to many enjoyable rides and better health. The key may be that possessions make people happiest when they enable experiences, rather than simply serving as status symbols.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new employee at an outdoor equipment rental shop at a ski resort. Your manager is telling you what to say to customers.",
      sentences: [
        "Good morning, welcome to the rental shop.",
        "Please tell me your shoe size.",
        "Helmets are included with every rental.",
        "The ski lifts open at nine o'clock.",
        "Please return your equipment before five.",
        "If your boots are uncomfortable, come back and we will find a different size for you.",
        "Beginner lessons start every morning at ten near the small slope, and you can book them here or at the ski school office.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about money and happiness. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is something you bought that made you very happy?",
          sample: "Something I bought that made me very happy was a ticket to see my favorite band in concert last year. I had wanted to see them live for a long time, and the concert was even better than I expected. The atmosphere was amazing, and I went with my best friend, so we still talk about it. I think the memory of that evening has made me happier than any object I've bought.",
        },
        {
          text: "Do you think people today care too much about money?",
          sample: "In some ways, yes. Many people work very long hours to earn more money and buy expensive things, sometimes at the cost of their health and relationships. Social media can also make people feel that they need more possessions to be successful. However, money is important for security, especially with rising living costs. I think the problem is not caring about money, but forgetting other important things in life.",
        },
        {
          text: "Would you prefer a job you love with a low salary or a boring job with a high salary?",
          sample: "I would choose a job I love, as long as the salary is enough to cover my basic needs. I believe that doing something meaningful every day leads to greater happiness than having a lot of money. A boring job could make me feel stressed and unmotivated, even with a high salary. However, I understand that some people need higher salaries to support their families, so it depends on each person's situation.",
        },
        {
          text: "Should schools teach children about the relationship between money and happiness?",
          sample: "I think it would be valuable for schools to teach children about money and happiness. Children are exposed to many advertisements that suggest buying things will make them happy. Learning that experiences, relationships and helping others often bring more lasting happiness could help them make better choices. Schools could also teach practical skills, like saving and budgeting, so that money becomes a tool for a good life rather than a source of stress.",
        },
      ],
    },
  },
};
