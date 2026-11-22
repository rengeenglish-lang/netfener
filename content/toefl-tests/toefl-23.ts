import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 23 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_23: ToeflTest = {
  id: "toefl-23",
  no: 23,
  title: "TOEFL iBT Practice Test 23",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Paper money",
          text: "For thousands of years, people paid for goods with coins made of gold, silver or cop{{per}}. Coins were heavy, however, and carrying large amo{{unts}} was difficult and dangerous. In the seventh century, merchants in China began leav{{ing}} their coins with trusted businesses and receiving paper rece{{ipts}} instead. These receipts could be exch{{anged}} for coins later. By the eleventh cent{{ury}}, the Chinese government was prin{{ting}} official paper money. When the traveler Marco Polo desc{{ribed}} it, many Europeans found the id{{ea}} hard to bel{{ieve}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Shared shopping",
          text: [
            "Hi! I'm going to the supermarket after class. We're out of milk, eggs and dish soap.",
            "Do you need anything else? Send me a list by 4. We can split the bill when I get home.",
          ],
          questions: [
            { text: "Why is the writer going to the supermarket?", options: ["to buy a birthday cake", "because they have run out of some items", "to return something", "to meet a friend"], answer: 1 },
            { text: "What does the writer suggest about paying?", options: ["The writer will pay for everything.", "They can split the bill later.", "The roommate should pay in advance.", "They should use a shared card."], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Changes to office hours",
          text: [
            "STUDENT FINANCE OFFICE – NEW OPENING HOURS",
            "From September 1, the Student Finance Office will be open from 9 a.m. to 3 p.m., Monday to Thursday. The office will be closed to visitors on Fridays, when staff will process applications.",
            "Most questions can now be answered through the online chat service, available 24 hours a day. Students who need an in-person appointment should book it online at least two days in advance.",
          ],
          questions: [
            { text: "When is the office closed to visitors?", options: ["on Mondays", "on Fridays", "every afternoon", "on weekends only"], answer: 1 },
            { text: "What is available 24 hours a day?", options: ["the office", "an online chat service", "a telephone line", "an emergency fund"], answer: 1 },
            { text: "How should students arrange an in-person appointment?", options: ["by visiting on Friday", "by booking online at least two days in advance", "by sending a letter", "by calling the same day"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How beavers shape rivers",
          paragraphs: [
            "Few animals change their surroundings as dramatically as beavers. Using their strong front teeth, these large rodents cut down trees and use the branches, along with mud and stones, to build dams across streams. The dams create ponds deep enough for beavers to build their lodges, dome-shaped homes with underwater entrances that protect them from predators.",
            "Beaver dams have effects that reach far beyond the animals themselves. The ponds they create slow the flow of water, so that rainwater spreads out across the valley instead of rushing downstream. As a result, the surrounding land becomes wetter, and new wetlands form that provide habitat for fish, frogs, insects and birds. The slowed water also allows soil and pollutants to settle, which can make the water downstream cleaner.",
            "In many parts of Europe, beavers were hunted to extinction for their fur and for a substance used in perfumes and medicines. In recent decades, however, they have been reintroduced to countries such as Britain and the Netherlands. Studies of these programs suggest that beaver dams can reduce flooding in towns downstream and help rivers retain water during droughts. Not everyone welcomes them, though; some farmers complain that beaver ponds flood fields and that the animals cut down valuable trees.",
          ],
          questions: [
            { text: "According to paragraph 1, why do beavers build dams?", options: ["to catch fish", "to create ponds deep enough for their lodges", "to cross rivers", "to store food for winter"], answer: 1 },
            { text: "The word \"retain\" in paragraph 3 is closest in meaning to", options: ["keep", "lose", "clean", "heat"], answer: 0 },
            { text: "According to paragraph 2, what is one effect of slowing the flow of water?", options: ["The land becomes drier.", "New wetlands form that support many species.", "Fish cannot survive.", "The river becomes faster downstream."], answer: 1 },
            { text: "Why were beavers hunted to extinction in many parts of Europe?", options: ["They spread disease.", "for their fur and a substance used in perfumes and medicines", "because they damaged bridges", "because they ate crops"], answer: 1 },
            { text: "What complaint do some farmers make about beavers?", options: ["Their ponds flood fields.", "They eat farm animals.", "They pollute the water.", "They make too much noise."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A day at the beach",
          text: "Last summer, my friends and I spent a day at the be{{ach}}. We left early in the morn{{ing}} and took a bus to the co{{ast}}. The sand was warm, and the sea was very bl{{ue}}. We swam, played volleyball and built a big sandc{{astle}}. At lunchtime, we bought fish sandwiches from a small resta{{urant}}. In the evening, we watched the sun go do{{wn}} over the wa{{ter}}. It was a perf{{ect}} d{{ay}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Dance classes",
          text: [
            "LEARN TO DANCE!",
            "Salsa classes for beginners every Tuesday evening from 7 to 8:30 p.m. at the Community Hall on River Street.",
            "No partner needed. The first class is free. After that, classes are $8 each or $60 for ten. Wear comfortable shoes!",
          ],
          questions: [
            { text: "Who are the classes for?", options: ["professional dancers", "beginners", "children only", "couples only"], answer: 1 },
            { text: "How much is the first class?", options: ["free", "$8", "$60", "$10"], answer: 0 },
            { text: "What should students wear?", options: ["a costume", "comfortable shoes", "sports clothes", "formal clothes"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How thunderstorms form",
          paragraphs: [
            "Thunderstorms are common on hot summer afternoons. They begin when the sun heats the ground and warm, wet air rises quickly into the sky.",
            "As the air rises, it cools, and the water in it forms tall clouds. Inside these clouds, tiny pieces of ice and water crash into each other. This creates electric charges, which can produce lightning.",
            "Lightning heats the air around it very quickly, making it expand suddenly. This causes the loud sound we call thunder. Because light travels faster than sound, we see lightning before we hear thunder.",
          ],
          questions: [
            { text: "When are thunderstorms common?", options: ["on cold winter mornings", "on hot summer afternoons", "at midnight", "on cloudy autumn days"], answer: 1 },
            { text: "What happens to rising air?", options: ["It becomes warmer.", "It cools and forms clouds.", "It turns into lightning.", "It falls back down immediately."], answer: 1 },
            { text: "What creates electric charges in clouds?", options: ["wind", "ice and water crashing into each other", "sunlight", "rain hitting the ground"], answer: 1 },
            { text: "The word \"expand\" in paragraph 3 is closest in meaning to", options: ["get bigger", "become cold", "disappear", "slow down"], answer: 0 },
            { text: "Why do we see lightning before we hear thunder?", options: ["Lightning happens first.", "Light travels faster than sound.", "Thunder is very quiet.", "Our eyes are faster than our ears."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Groupthink",
          text: "The psychologist Irving Janis used the term groupthink to describe a situation in which the desire for agreement within a group leads to poor deci{{sions}}. Members may hesitate to express dou{{bts}}, assume that silence means agree{{ment}} and ignore warning signs. Janis argued that several historical policy fail{{ures}} could be explained in this way. To pre{{vent}} groupthink, he recommended that leaders avoid stating their own prefer{{ences}} too early, invite outside exp{{erts}} and assign someone to argue against the major{{ity}} view. Many organizations now use similar meth{{ods}} to improve decision-mak{{ing}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to course registration",
          text: [
            "To: All undergraduate students",
            "From: Registrar's Office",
            "Subject: Course registration for the spring semester",
            "Registration for spring courses will open on November 12. To reduce the load on the system, students will be given registration times based on the number of credits they have completed, with final-year students registering first. Your individual registration time will be shown in the student portal from November 5.",
            "If a course is full, you may join an electronic waiting list. When a place becomes available, the first student on the list will be enrolled automatically and notified by email. Students may be on waiting lists for no more than three courses at the same time.",
          ],
          questions: [
            { text: "How will registration times be decided?", options: ["alphabetically", "by the number of credits completed", "by date of application", "randomly"], answer: 1 },
            { text: "What happens when a place becomes available in a full course?", options: ["Students must apply again.", "The first student on the waiting list is enrolled automatically.", "The professor chooses a student.", "The course is reopened to everyone."], answer: 1 },
            { text: "What limit applies to waiting lists?", options: ["Students can join only one.", "Students can join up to three at the same time.", "Only final-year students can join them.", "Waiting lists close on November 5."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The invention of anesthesia",
          paragraphs: [
            "Before the middle of the nineteenth century, surgery was a terrifying experience. Patients were fully conscious during operations, and surgeons were valued above all for their speed; a skilled surgeon could amputate a leg in less than a minute. Alcohol and opium were sometimes used to dull the pain, but they were unreliable and often dangerous, and many patients avoided surgery altogether, even when it was their only chance of survival.",
            "In the 1840s, several Americans began experimenting with gases that had previously been used mainly for entertainment, at parties where people inhaled them for their intoxicating effects. A dentist named Horace Wells noticed that a man who had inhaled nitrous oxide injured his leg without appearing to feel pain, and he began using the gas when extracting teeth. However, a public demonstration he organized in Boston in 1845 failed when the patient cried out. The following year, another dentist, William Morton, successfully used ether to anesthetize a patient during the removal of a tumor at Massachusetts General Hospital.",
            "News of the demonstration spread rapidly, and within months ether was being used in Europe. Chloroform, introduced shortly afterward, became popular in Britain, especially after Queen Victoria used it during childbirth in 1853. Anesthesia transformed surgery: operations no longer had to be rushed, allowing surgeons to undertake longer and more complex procedures. Its full benefits, however, came only later in the century, when antiseptic methods began to reduce the infections that still killed many surgical patients.",
          ],
          questions: [
            { text: "According to paragraph 1, why were surgeons valued for their speed?", options: ["Patients were conscious and felt pain during operations.", "Hospitals had few beds.", "Anesthesia was expensive.", "Operations were done at night."], answer: 0 },
            { text: "The word \"dull\" in paragraph 1 is closest in meaning to", options: ["reduce", "increase", "explain", "cause"], answer: 0 },
            { text: "What happened at Horace Wells's public demonstration in 1845?", options: ["It was a complete success.", "The patient cried out, so it was seen as a failure.", "No patient attended.", "Wells used ether instead of nitrous oxide."], answer: 1 },
            { text: "Why does the author mention Queen Victoria?", options: ["to show how chloroform became popular in Britain", "to explain how ether was invented", "to describe the history of childbirth", "to criticize British doctors"], answer: 0 },
            { text: "According to paragraph 3, why did the full benefits of anesthesia come later?", options: ["Ether was banned for many years.", "Infections still killed many patients until antiseptic methods were used.", "Surgeons refused to use it.", "It was too expensive for most hospitals."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Elif", prompt: "Why did you bring an umbrella and sunglasses?", chunks: ["the weather", "changes", "very quickly", "in", "this city"], end: "." },
      { promptBy: "Nathan", prompt: "Have you met the new professor?", chunks: ["I", "attended", "her first", "lecture", "yesterday"], end: "." },
      { promptBy: "Damla", prompt: "I'm worried about my presentation.", chunks: ["why don't", "you", "practice it", "in front of", "your roommates"], end: "?" },
      { promptBy: "Ian", prompt: "Where should I put these boxes?", chunks: ["you", "can leave them", "in", "the storage room", "downstairs"], end: "." },
      { promptBy: "Sena", prompt: "How long is the flight to London?", chunks: ["it", "takes", "about", "four", "hours"], end: "." },
      { promptBy: "Victor", prompt: "Why is the restaurant closed today?", chunks: ["the owners", "are", "on vacation", "until", "next Tuesday"], end: "." },
      { promptBy: "Tuğçe", prompt: "Do you want to watch a movie tonight?", chunks: ["I", "would love to", "but", "I have", "an early class"], end: "." },
      { promptBy: "Patrick", prompt: "What did you think of the city?", chunks: ["the old town", "was", "beautiful", "and", "very peaceful"], end: "." },
      { promptBy: "Özge", prompt: "We forgot to buy bread.", chunks: ["should", "I", "go back", "to", "the bakery"], end: "?" },
      { promptBy: "Joshua", prompt: "Why are you studying in the café?", chunks: ["the library", "was", "too crowded", "this", "afternoon"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your university is planning to remove the bicycle parking area near your department building to create more space for cars. You and many other students cycle to campus every day.",
      to: "the Campus Planning Office",
      subject: "Bicycle parking near the Engineering Building",
      tasks: ["Explain why you are writing.", "Describe why the bicycle parking area is important to students.", "Suggest an alternative to the plan."],
      sample: "Dear Campus Planning Office,\n\nI am writing about the plan, announced in last week's campus newsletter, to remove the bicycle parking area next to the Engineering Building and replace it with car parking spaces. As a student who cycles to campus every day, I am very concerned about this change.\n\nThe bicycle area is used by a large number of students. On most weekdays, all of its sixty spaces are full by nine o'clock, and many bikes are locked to nearby railings. Cycling is a cheap, healthy and environmentally friendly way to travel, and removing the parking would discourage many students from cycling and make it harder to find a safe place to leave our bikes.\n\nInstead of removing the area, I would suggest moving the new car spaces to the large parking lot behind the sports center, which is rarely full. Alternatively, the bicycle parking could be moved to another location close to the building and covered to protect bikes from rain.\n\nThank you for considering students' views.\n\nYours faithfully,\nEmre Tekin",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Policy",
      professor: {
        name: "Dr. Clark",
        text: "Fast fashion, inexpensive clothing produced quickly to follow trends, has become extremely popular. However, it creates large amounts of waste and pollution. Some people believe that governments should regulate the fashion industry, for example by requiring companies to recycle old clothes. Others think that consumers should be responsible for their own choices. Who should be responsible for reducing the environmental impact of fashion: governments or consumers? Why?",
      },
      students: [
        { name: "Amelia", text: "Governments should act. Most consumers don't know how clothes are made, and cheap prices make it hard to resist. Rules can force companies to change their practices." },
        { name: "Ozan", text: "Consumers have the real power. If people buy fewer clothes and choose better-quality items, companies will have to change. Regulations can be avoided by moving production abroad." },
      ],
      sample: "I think both are needed, but governments should take the lead. Ozan is right that consumers can make a difference; buying fewer and better-quality clothes, or shopping second-hand, does reduce waste. However, relying on consumers alone is unrealistic. Fast fashion is cheap and heavily advertised, and most people have no way of knowing how much water or energy a particular shirt required. Amelia's point about regulation is therefore important. Governments can require companies to report their environmental impact, pay for the collection and recycling of old clothes, and meet minimum standards for durability. The European Union is already moving in this direction. When rules apply to every company selling in a market, moving production abroad does not help them avoid the requirements, and consumers can then make better choices based on clear information.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are working at a hotel restaurant. The head waiter is telling you what to say to guests.",
      sentences: [
        "Good evening and welcome.",
        "Do you have a reservation tonight?",
        "Your table will be ready in five minutes.",
        "Today's special is grilled fish with vegetables.",
        "Please tell us if you have any food allergies.",
        "Breakfast is served in this restaurant from seven to ten every morning for hotel guests.",
        "If you would like to have dinner on the terrace, we recommend booking a table at least one day in advance.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with work and part-time jobs. The researcher will ask you some questions.",
      questions: [
        {
          text: "Have you ever had a part-time job? What did you learn from it?",
          sample: "Yes, I worked as a waiter in a small restaurant during two summers. It taught me a lot about dealing with people, especially when customers were impatient or unhappy. I also learned to manage my time and stay calm when the restaurant was very busy. Before that job, I was quite shy, but having to talk to dozens of strangers every day made me much more confident, which has helped me in my studies too.",
        },
        {
          text: "Do you think students should work while they study? Why or why not?",
          sample: "I think working a few hours a week can be very good for students. It helps them earn money, gain experience and learn responsibility, and employers often value work experience. However, if students work too many hours, their grades may suffer and they may become exhausted. So I'd recommend a part-time job of around ten hours a week, preferably one that's flexible during exam periods or related to their field of study.",
        },
        {
          text: "Some people believe that it is better to work for a large company than a small one. What do you think?",
          sample: "I think both have advantages. Large companies usually offer higher salaries, better training programs and more opportunities for promotion, and having a famous company on your CV can help later. On the other hand, in a small company you often have more responsibility early on, you can see how the whole business works, and the atmosphere can be friendlier. For my first job, I'd probably choose a large company for the training, but later I might prefer a smaller one.",
        },
        {
          text: "How do you think artificial intelligence will change the workplace?",
          sample: "I think artificial intelligence will take over many routine tasks, like processing documents, answering simple customer questions and analyzing data. This could make workers more productive and give them more time for creative and interpersonal work. However, some jobs will probably disappear, so people will need to retrain. I think companies and governments should invest in training programs to help workers adapt, rather than leaving them to deal with the changes alone.",
        },
      ],
    },
  },
};
