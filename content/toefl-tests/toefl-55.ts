import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 55 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_55: ToeflTest = {
  id: "toefl-55",
  no: 55,
  title: "TOEFL iBT Practice Test 55",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Paper bags",
          text: "Paper bags are so common that few people think about their history. Early paper bags were simple envelopes that could not stand up on their o{{wn}}. In 1871, an American inventor named Margaret Knight built a machine that could fold and glue paper bags with flat bot{{toms}}. These bags could stand open, making them much easier to fi{{ll}} with groceries. When another man tried to patent her idea, Knight went to co{{urt}} and proved that the invention was hers. She received the pat{{ent}} and became one of the most famous female inventors of her ti{{me}}. In the twentieth century, plastic bags replaced paper bags in many sho{{ps}}. Recently, however, many countries have limited the use of plas{{tic}}, and paper bags have become popular ag{{ain}}, although they also have environmental co{{sts}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Ride to football practice",
          text: [
            "Hi Mrs. Demir, this is Can's mother. My car is at the mechanic this week. Could Can ride with you and Emre to football practice on Thursday?",
            "I can pick both boys up after practice at 6:30 and drive Emre home. Thank you so much!",
          ],
          questions: [
            { text: "Why does the writer need help?", options: ["The writer's car is at the mechanic.", "The writer is working late.", "Football practice has moved.", "Can is sick."], answer: 0 },
            { text: "What does the writer offer to do?", options: ["pick up both boys after practice", "pay for gas", "drive both boys to practice", "coach the team"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Silent study floor",
          text: [
            "THIRD FLOOR: SILENT STUDY ZONE",
            "The third floor of the library is a silent study zone. Conversations, phone calls and group work are not permitted. Please set your phone to silent and use headphones at a low volume.",
            "Students who wish to work in groups may use the second floor, where quiet conversation is allowed, or book a group study room online. Library staff may ask students who disturb others to move to another floor.",
          ],
          questions: [
            { text: "What is NOT permitted on the third floor?", options: ["conversations and phone calls", "using laptops", "reading books", "using headphones at low volume"], answer: 0 },
            { text: "Where can students work in groups?", options: ["on the second floor or in a group study room", "on the third floor", "in the library entrance", "nowhere in the library"], answer: 0 },
            { text: "What may staff do if students disturb others?", options: ["ask them to move to another floor", "charge them a fee", "take their phones", "call their professors"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "What ice cores reveal about past climates",
          paragraphs: [
            "In the polar regions, snow that falls each year does not melt completely. Over thousands of years, layer upon layer of snow builds up and is compressed into thick ice sheets. In Antarctica and Greenland, these ice sheets are more than three kilometers deep in places. By drilling into the ice and removing long cylinders called ice cores, scientists can study a record of Earth's climate stretching back hundreds of thousands of years.",
            "Ice cores contain several kinds of evidence. As snow turns into ice, tiny bubbles of air become trapped inside it. These bubbles are samples of the ancient atmosphere, allowing scientists to measure past levels of gases such as carbon dioxide and methane. The ice itself also holds information about temperature: the proportion of different forms of oxygen in the water molecules varies depending on how cold it was when the snow fell. Layers of dust and volcanic ash can reveal past droughts, strong winds and major volcanic eruptions.",
            "The longest ice cores, taken from Antarctica, cover about eight hundred thousand years. They show that Earth's climate has repeatedly shifted between long ice ages and shorter warm periods, and that temperatures and carbon dioxide levels have risen and fallen together. They also show that current carbon dioxide levels are far higher than at any point in this long record. Scientists are now trying to find even older ice, which could help explain why the timing of ice ages changed about a million years ago, a puzzle that remains unsolved.",
          ],
          questions: [
            { text: "According to paragraph 1, how do ice sheets form?", options: ["Snow builds up over thousands of years and is compressed.", "Ocean water freezes quickly.", "Rain falls on cold rocks.", "Glaciers move from mountains."], answer: 0 },
            { text: "According to paragraph 2, what do air bubbles in ice cores reveal?", options: ["past levels of gases in the atmosphere", "the age of animals", "the depth of the ocean", "ancient languages"], answer: 0 },
            { text: "The word \"proportion\" in paragraph 2 is closest in meaning to", options: ["relative amount", "color", "weight", "shape"], answer: 0 },
            { text: "According to paragraph 3, what do the longest ice cores show?", options: ["Temperatures and carbon dioxide levels have risen and fallen together.", "Earth's climate has never changed.", "Carbon dioxide levels are lower today than in the past.", "Ice ages ended a million years ago."], answer: 0 },
            { text: "Why are scientists looking for even older ice?", options: ["to help explain why the timing of ice ages changed", "to find fossils of dinosaurs", "to use it as drinking water", "to measure the size of Antarctica"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Feeding the birds in winter",
          text: "Every winter, my grandfather and I feed the bi{{rds}} in his garden. When it is very co{{ld}}, it is hard for birds to find fo{{od}}. We fill a small wooden box with see{{ds}} and hang it from a tree. We also put out some bread and a little dish of wa{{ter}}. Every morning, we watch the birds from the kit{{chen}} window. My favorite birds are the small ones with red bre{{asts}}. My grandfather knows the na{{mes}} of all of them. He gave me a book about birds for my birth{{day}}, and now I am learning them, t{{oo}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Pet sitting service",
          text: [
            "GOING AWAY? WE'LL CARE FOR YOUR PET!",
            "Happy Paws visits your home to feed, walk and play with your pets while you are away. We care for dogs, cats, rabbits and birds.",
            "One visit costs $15, and daily photo updates are sent to your phone. All our pet sitters are trained and insured. Call us at least two days before your trip.",
          ],
          questions: [
            { text: "What does the service do?", options: ["cares for pets at the owner's home", "sells pet food", "trains dogs", "rents pets"], answer: 0 },
            { text: "What do owners receive every day?", options: ["photo updates", "a phone call", "a bill", "a gift"], answer: 0 },
            { text: "When should owners call the service?", options: ["at least two days before their trip", "on the day they leave", "a month before", "after they return"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How ants carry heavy food",
          paragraphs: [
            "Ants are very small, but they are very strong. A single ant can carry something many times heavier than its own body.",
            "When an ant finds food that is too big to carry alone, it often goes back to its nest. On the way, it leaves a special smell on the ground. Other ants follow the smell to the food.",
            "Then the ants work together. They hold the food from different sides and walk in the same direction. Some ants pull while others push. In this way, a group of ants can move a large piece of food all the way to their nest.",
          ],
          questions: [
            { text: "What can a single ant carry?", options: ["something many times heavier than itself", "nothing at all", "only very light leaves", "another ant only"], answer: 0 },
            { text: "What does an ant leave on the ground?", options: ["a special smell", "pieces of food", "small stones", "water"], answer: 0 },
            { text: "The word \"follow\" in paragraph 2 is closest in meaning to", options: ["go after", "eat", "forget", "build"], answer: 0 },
            { text: "How do ants move large pieces of food?", options: ["by working together", "by breaking it into dust", "by waiting for rain", "by calling other animals"], answer: 0 },
            { text: "What do some ants do while others push?", options: ["pull", "sleep", "eat", "dig"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The fresh start effect",
          text: "Many people make resolutions at the beginning of a new year, but researchers have found that other dates can also motivate cha{{nge}}. The start of a new week, a new month, a birth{{day}} or even the first day after a holiday can make people more lik{{ely}} to pursue their goals. This pattern is called the fresh start eff{{ect}}. Studies show, for example, that searches for the word \"diet\" and visits to gyms incr{{ease}} at the beginning of weeks and mon{{ths}}. One explanation is that such dates create a sense of separ{{ation}} from past failures, allowing people to feel that their old se{{lves}} are behind them. Organizations may use this insi{{ght}} to encourage healthier be{{havior}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Course enrollment errors",
          text: [
            "To: Students affected by the recent enrollment system error",
            "From: Office of the Registrar",
            "Subject: Correction of course enrollment errors",
            "Due to a technical error on Monday, some students were incorrectly removed from courses for which they had registered. We sincerely apologize for the inconvenience. Our records show that you were affected, and we have restored your place in all of the courses you originally selected.",
            "Please log in to the student portal and check your timetable carefully. If any course is still missing, contact the Registrar's Office by Friday, and we will correct it manually. The deadline for adding or dropping courses has been extended by one week for all affected students, and no late fees will be charged.",
          ],
          questions: [
            { text: "What happened because of the technical error?", options: ["Some students were removed from their courses.", "Some students were charged twice.", "All courses were canceled.", "Exam dates were changed."], answer: 0 },
            { text: "What should students do if a course is still missing?", options: ["contact the Registrar's Office by Friday", "register for a different course", "wait until next semester", "pay a late fee"], answer: 0 },
            { text: "What has been done for affected students?", options: ["The add/drop deadline has been extended by one week.", "They have received a refund.", "Their exams have been canceled.", "They have been given extra credits."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The rise of plant-based meat",
          paragraphs: [
            "In recent years, supermarkets and restaurants in many countries have begun selling products designed to look, taste and cook like meat but made entirely from plants. Vegetarian alternatives to meat, such as tofu and veggie burgers, have existed for a long time, but the new generation of products aims to appeal not only to vegetarians but also to meat eaters. Using ingredients such as pea and soy protein, coconut oil and beet juice, manufacturers try to recreate the texture, juiciness and even the 'bleeding' appearance of beef.",
            "Supporters argue that plant-based meat could help address some of the environmental problems associated with livestock farming. Raising animals for meat uses large amounts of land and water, and cattle in particular produce methane, a powerful greenhouse gas. Several studies suggest that producing plant-based burgers generates far lower emissions and requires much less land than producing beef. Supporters also point to animal welfare and to potential health benefits, such as lower levels of saturated fat.",
            "Critics, however, raise several concerns. Some nutritionists note that many plant-based meats are highly processed and can contain large amounts of salt and additives, so they are not necessarily healthier than unprocessed meat. Farmers' groups argue that such products should not be labeled as 'meat' or 'burgers'. Sales have also been uneven: after rapid growth, demand slowed in some markets, possibly because of high prices and because some consumers were disappointed by the taste. Whether plant-based meat will become a mainstream part of diets or remain a niche product is still uncertain.",
          ],
          questions: [
            { text: "According to paragraph 1, how is the new generation of plant-based products different from older alternatives?", options: ["It aims to appeal to meat eaters as well as vegetarians.", "It contains small amounts of meat.", "It is sold only in restaurants.", "It is cheaper than tofu."], answer: 0 },
            { text: "According to paragraph 2, why is cattle farming environmentally harmful?", options: ["It uses a lot of land and water, and cattle produce methane.", "It produces too much oxygen.", "It requires too many workers.", "It causes earthquakes."], answer: 0 },
            { text: "The word \"processed\" in paragraph 3 is closest in meaning to", options: ["changed by industrial methods", "natural", "fresh", "grown at home"], answer: 0 },
            { text: "According to paragraph 3, why might plant-based meats not be healthier?", options: ["They can contain a lot of salt and additives.", "They contain too much protein.", "They have no calories.", "They are made from animal fat."], answer: 0 },
            { text: "What does the author conclude about the future of plant-based meat?", options: ["It is uncertain whether it will become mainstream.", "It will soon replace all meat.", "It will disappear next year.", "It is already eaten by everyone."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Özge", prompt: "Why are you studying on a Saturday night?", chunks: ["I", "have", "three exams", "next", "week"], end: "." },
      { promptBy: "Mike", prompt: "Did you like the new science teacher?", chunks: ["her", "experiments", "made", "the lesson", "really fun"], end: "." },
      { promptBy: "Tolga", prompt: "I never have time for breakfast.", chunks: ["why don't", "you", "prepare", "something", "the night before"], end: "?" },
      { promptBy: "Sarah", prompt: "How did you hear about the concert?", chunks: ["I", "saw", "a poster", "at", "the bus stop"], end: "." },
      { promptBy: "Emine", prompt: "When does the next train to Izmir leave?", chunks: ["it", "leaves", "at", "a quarter", "past six"], end: "." },
      { promptBy: "Chris", prompt: "Why is the street so dark tonight?", chunks: ["the streetlights", "have not", "been", "repaired", "yet"], end: "." },
      { promptBy: "Hilal", prompt: "What did you buy for your mother?", chunks: ["I", "bought her", "a silk", "scarf", "from the market"], end: "." },
      { promptBy: "Jason", prompt: "Where should we have the team dinner?", chunks: ["let's", "go to", "the fish", "restaurant", "by the sea"], end: "." },
      { promptBy: "Selin", prompt: "My phone keeps freezing.", chunks: ["have you", "tried", "updating", "the", "software"], end: "?" },
      { promptBy: "Kevin", prompt: "Why did you decide to learn Turkish?", chunks: ["I", "want to", "talk", "with", "my wife's family"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You have been offered a summer internship at a marketing company, but the start date clashes with your final exams. You want to write to the human resources manager.",
      to: "the human resources manager, Ms. Kaya",
      subject: "Internship start date",
      tasks: ["Thank her for the internship offer.", "Explain the problem with the start date.", "Suggest an alternative start date and show your enthusiasm."],
      sample: "Dear Ms. Kaya,\n\nThank you very much for offering me the summer internship position in your digital marketing team. I was delighted to receive your email, and I am very excited about the opportunity to work with your company, especially after learning about your recent social media campaigns during my interview.\n\nUnfortunately, there is a problem with the proposed start date of June 2. My university has just published the final exam schedule, and my last two exams are on June 4 and June 6. Because these exams are required to complete my degree, I am unable to miss them or take them at another time.\n\nWould it be possible for me to start the internship on Monday, June 9, instead? I would be happy to extend the internship by one week at the end of the summer to make up for the delay. In the meantime, I could also read any materials or complete online training modules to prepare for the role.\n\nThank you for your understanding. I am truly looking forward to joining your team.\n\nKind regards,\nBerk Çınar",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Policy",
      professor: {
        name: "Dr. Turner",
        text: "Many popular natural sites, such as national parks and beaches, have become overcrowded with tourists. Some governments have introduced daily visitor limits or require advance reservations. Supporters say this protects the environment and improves the visitor experience. Critics argue that it makes nature less accessible, especially for people who cannot plan ahead. Should popular natural sites limit the number of visitors? Explain your view.",
      },
      students: [
        { name: "Isla", text: "Yes. Too many visitors damage plants, disturb wildlife and leave trash. Limits are the only way to protect these places for future generations." },
        { name: "Emre", text: "I disagree. Nature belongs to everyone. Limits and reservations favor people with more time and money, and local businesses lose customers." },
      ],
      sample: "I believe popular natural sites should limit visitor numbers, but the system should be designed to remain fair and accessible. Isla is right that overcrowding causes serious damage. When thousands of people walk the same trails every day, they erode soil, trample plants and disturb animals, and the beauty that attracted visitors in the first place begins to disappear. Limits can also make the experience more enjoyable for visitors themselves. However, Emre raises a valid concern about fairness. If reservations fill up months in advance or require expensive fees, people with less flexibility or money may be excluded. To address this, parks could reserve a portion of daily permits for same-day visitors, keep fees low and offer discounts for local residents and students.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new volunteer at a food bank. The coordinator is explaining your tasks and what to tell visitors.",
      sentences: [
        "Good morning, welcome to the food bank.",
        "Please sign in at the front table.",
        "Each family can take one box of food.",
        "Fresh vegetables are on the left side.",
        "Please check the dates on all canned products.",
        "If someone has a food allergy, help them choose products that are safe for them.",
        "At the end of the day, all volunteers should help clean the tables and move any remaining boxes into the storage room at the back.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with volunteering and helping others. The researcher will ask you some questions.",
      questions: [
        {
          text: "Have you ever done volunteer work? What did you do?",
          sample: "Yes, last year I volunteered at an animal shelter every Saturday for about six months. My main tasks were cleaning the cages, feeding the animals and taking dogs for walks. Sometimes I also helped at adoption events, where I talked to families who wanted to adopt a pet. It was hard work, but I enjoyed it a lot, especially when an animal I had cared for found a new home.",
        },
        {
          text: "Why do you think some people choose to volunteer?",
          sample: "I think people volunteer for many different reasons. Some want to help their community or support a cause they care about, like protecting the environment. Others volunteer to gain experience and skills that might help them find a job. Volunteering is also a great way to meet new people and feel part of a group. Many people say it makes them feel happier and more connected to others.",
        },
        {
          text: "Should high school students be required to do volunteer work?",
          sample: "I think requiring some volunteer work in high school is a good idea, as long as students can choose the type of activity. It helps teenagers understand problems in their community and develop empathy and responsibility. It can also help them discover their interests and possible careers. However, if volunteering is forced and students don't care about it, they may not benefit. So schools should offer many options and explain why the work matters.",
        },
        {
          text: "Do you think companies should give employees time off to volunteer?",
          sample: "Yes, I think it's a great idea for companies to give employees a few paid days each year to volunteer. It benefits the community, and it can also improve employees' morale and teamwork, especially if colleagues volunteer together. Companies that support volunteering often have a better reputation and can attract talented young workers who care about social issues. The cost to the company is relatively small compared with these benefits.",
        },
      ],
    },
  },
};
