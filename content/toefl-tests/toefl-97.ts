import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 97 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_97: ToeflTest = {
  id: "toefl-97",
  no: 97,
  title: "TOEFL iBT Practice Test 97",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Fire hydrants",
          text: "In many cities, small metal fire hydrants stand on street corners, ready to supply water to firefigh{{ters}}. Before hydrants existed, people fought fires by passing buc{{kets}} of water from hand to hand. In some cities, water flowed through wooden pi{{pes}} under the streets. When a fire started, firefighters dug down to the pipe and drilled a ho{{le}} in it to get water. Afterwards, they closed the hole with a wooden plug, which may be why hydrants are still called \"fire plugs\" in some pla{{ces}}. In the early nineteenth century, cities began installing hydrants made of cast i{{ron}}, which could be opened quickly in an emer{{gency}}. Today, hydrants are often painted bright colors so that firefighters can find them eas{{ily}}, and they must be kept clear of parked ca{{rs}} at all ti{{mes}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Looking for a tennis partner",
          text: [
            "Hi Efe! I've just booked a tennis court for Thursday evening at 6, but my usual partner can't come. Would you like to play?",
            "You don't need to be very good; I'm still learning too! I can lend you a racket if you don't have one. Let me know by Wednesday.",
          ],
          questions: [
            { text: "Why is the writer looking for a partner?", options: ["The usual partner can't come.", "The writer is a tennis coach.", "The court was free.", "The writer wants to enter a competition."], answer: 0 },
            { text: "What does the writer offer to do?", options: ["lend Efe a racket", "pay for dinner", "drive Efe home", "teach Efe for free every week"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "New campus pharmacy",
          text: [
            "PHARMACY NOW OPEN ON CAMPUS",
            "A pharmacy has opened on the ground floor of the Health Center. It is open from 9 a.m. to 6 p.m. on weekdays and from 10 a.m. to 2 p.m. on Saturdays.",
            "Students can collect prescriptions from the campus doctors, buy everyday medicines and get advice from a qualified pharmacist. Students with university health insurance receive a 20% discount on prescription medicines.",
          ],
          questions: [
            { text: "Where is the new pharmacy?", options: ["on the ground floor of the Health Center", "in the library", "in the student union", "next to the sports center"], answer: 0 },
            { text: "What can students do at the pharmacy?", options: ["collect prescriptions and get advice", "see a dentist", "have eye tests", "buy textbooks"], answer: 0 },
            { text: "Who receives a discount?", options: ["students with university health insurance", "all visitors", "staff only", "first-year students only"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How the Brooklyn Bridge was built",
          paragraphs: [
            "When the Brooklyn Bridge opened in 1883, it connected the cities of New York and Brooklyn across the East River and was the longest suspension bridge in the world. Before it was built, people traveled between the two cities by ferry, which could be slow and dangerous in winter, when the river was full of ice. The bridge was designed by the engineer John Augustus Roebling, who planned to use steel wire cables, a new technology at the time.",
            "The project faced tragedy from the start. In 1869, before construction began, John Roebling was injured in an accident and died a few weeks later. His son, Washington Roebling, took over the project. To build the foundations of the bridge's huge stone towers, workers used caissons, enormous wooden boxes without bottoms that were sunk into the riverbed and filled with compressed air so that workers could dig inside them. Many workers suffered from a mysterious illness when they returned to the surface too quickly, now known as decompression sickness. Washington Roebling himself became seriously ill and was unable to visit the site.",
            "For the rest of the project, Washington Roebling watched the construction through a telescope from his home, while his wife, Emily Warren Roebling, carried his instructions to the engineers. She studied mathematics and engineering in order to understand the work and became deeply involved in managing the project. When the bridge finally opened, Emily was the first person to cross it. Today, the Brooklyn Bridge remains an important route and one of the most famous landmarks in New York City.",
          ],
          questions: [
            { text: "According to paragraph 1, how did people travel between New York and Brooklyn before the bridge?", options: ["by ferry", "by train", "by tunnel", "by car"], answer: 0 },
            { text: "According to paragraph 2, what were caissons?", options: ["huge wooden boxes sunk into the riverbed for digging foundations", "boats for carrying stones", "steel cables", "towers made of wood"], answer: 0 },
            { text: "The word \"compressed\" in paragraph 2 is closest in meaning to", options: ["pressed into a smaller space", "heated", "cleaned", "frozen"], answer: 0 },
            { text: "Why could Washington Roebling not visit the construction site?", options: ["He became seriously ill.", "He moved to another city.", "He lost interest in the project.", "He was building another bridge."], answer: 0 },
            { text: "What role did Emily Warren Roebling play?", options: ["She carried instructions and became involved in managing the project.", "She designed the original bridge.", "She was a ferry operator.", "She opposed the construction."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A trip to the countryside",
          text: "Last spring, my class went on a trip to the country{{side}}. We traveled by bus for two ho{{urs}}. When we arrived, we saw green fields, small farms and a beautiful ri{{ver}}. A farmer showed us how he grows wheat and takes care of his co{{ws}}. We were allowed to feed the baby goats with bot{{tles}} of milk. Then we had a picnic under a big tr{{ee}}. After lunch, we walked along the river and looked for interesting sto{{nes}}. The air was clean and fre{{sh}}, and everything was very qui{{et}}. I was tired at the end of the day, but very hap{{py}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Ukulele lessons",
          text: [
            "PLAY THE UKULELE IN SIX WEEKS!",
            "Our group ukulele course for beginners meets every Wednesday from 6:30 to 7:30 p.m. at Harmony Music School. The ukulele is small, light and easy to learn.",
            "The six-week course costs $60. Ukuleles can be borrowed for free during the course, or you can buy one at the school for $35. By the end of the course, you will be able to play several popular songs.",
          ],
          questions: [
            { text: "How long is the course?", options: ["six weeks", "one week", "three months", "one year"], answer: 0 },
            { text: "What can students do if they don't have a ukulele?", options: ["borrow one for free or buy one at the school", "share with a teacher", "use a guitar instead", "they cannot join"], answer: 0 },
            { text: "What will students be able to do by the end?", options: ["play several popular songs", "teach the course", "perform in a concert hall", "write their own music"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How cheetahs run so fast",
          paragraphs: [
            "Cheetahs are the fastest land animals in the world. They can run up to about one hundred kilometers per hour, but only for a short time.",
            "Cheetahs have long, thin bodies and light bones, so they are not heavy. Their backbone is very flexible and bends like a spring when they run. This helps them take very long steps. Their claws also grip the ground like the shoes of a runner.",
            "A cheetah's long tail helps it keep its balance when it turns quickly. After a fast chase, a cheetah is very tired and hot, so it must rest before it can eat. Because they use so much energy, cheetahs usually hunt only when they are close to their prey.",
          ],
          questions: [
            { text: "How fast can cheetahs run?", options: ["up to about one hundred kilometers per hour", "ten kilometers per hour", "five hundred kilometers per hour", "as fast as a car on a highway all day"], answer: 0 },
            { text: "Why are cheetahs not heavy?", options: ["They have long, thin bodies and light bones.", "They eat very little.", "They have no fur.", "They are very small."], answer: 0 },
            { text: "The word \"flexible\" in paragraph 2 is closest in meaning to", options: ["able to bend easily", "very hard", "short", "weak"], answer: 0 },
            { text: "What does a cheetah's tail help it do?", options: ["keep its balance when turning", "climb trees", "swim", "catch fish"], answer: 0 },
            { text: "Why must a cheetah rest after a chase?", options: ["It is very tired and hot.", "It is afraid of other animals.", "It needs to find water first.", "It wants to sleep all day."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The cocktail party effect",
          text: "Imagine standing in a noisy room full of people talking at the same time. Despite the noise, you can usually focus on a single conver{{sation}} and ignore the others. Yet if someone across the room suddenly says your na{{me}}, you will probably notice it immedi{{ately}}. Psychologists call this ability the cocktail party ef{{fect}}. Research suggests that the brain continues to process some information from the sounds we are not paying atten{{tion}} to, and that personally important words can break through this fil{{ter}}. Scientists study the effect to understand how atten{{tion}} works and to improve hearing ai{{ds}}, which often struggle to separate one voice from back{{ground}} noise. People with hearing loss frequently find crowded pla{{ces}} especially tiring.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Teaching evaluation results",
          text: [
            "To: Faculty members in the School of Business",
            "From: Office of Academic Quality",
            "Subject: Access to student evaluation results",
            "Student evaluation results for the fall semester are now available through the faculty portal. Each report includes average scores for each question and anonymous written comments. To protect students' privacy, results are shown only for courses with at least five responses.",
            "Department heads will discuss the results with each instructor during annual reviews. Instructors who would like support in improving their teaching may book a confidential consultation with the Teaching and Learning Center. Please note that individual comments should not be shared with other students or colleagues.",
          ],
          questions: [
            { text: "Why are results shown only for courses with at least five responses?", options: ["to protect students' privacy", "to save time", "because smaller courses are not important", "because of software problems"], answer: 0 },
            { text: "Who will discuss the results with instructors?", options: ["department heads", "students", "the university president", "other instructors"], answer: 0 },
            { text: "What can instructors do if they want support?", options: ["book a confidential consultation with the Teaching and Learning Center", "change their courses immediately", "contact the students directly", "ignore the results"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why peatlands matter",
          paragraphs: [
            "Peatlands are wetlands in which waterlogged soil prevents dead plant material from decomposing completely. Over thousands of years, layers of partly decayed plants build up to form peat, a dark, spongy material. Peatlands are found on every continent, from the cold bogs of northern Europe and Canada to tropical swamp forests in Southeast Asia. Although they cover only about three percent of the world's land surface, they store more carbon than all of the world's forests combined.",
            "This makes peatlands extremely important for the climate. As long as peat remains wet, the carbon it contains stays locked in the ground. However, for centuries, people have drained peatlands to create farmland, plant forests or harvest peat itself, which has been burned as fuel and used in gardening. When peatlands are drained, oxygen enters the soil, and the peat begins to decompose, releasing large amounts of carbon dioxide. Dry peat is also highly flammable, and fires in drained peatlands can burn underground for months, producing thick smoke that harms human health.",
            "In recent years, many countries have begun to protect and restore peatlands. Restoration usually involves blocking drainage ditches so that water levels rise again, allowing peat-forming plants such as mosses to return. Restored peatlands can once again store carbon, provide habitats for rare plants and animals, and help reduce flooding by absorbing water during heavy rain. Gardeners are also being encouraged to use peat-free compost. Experts argue that protecting the peatlands that remain is one of the most cost-effective ways to reduce greenhouse gas emissions.",
          ],
          questions: [
            { text: "According to paragraph 1, how does peat form?", options: ["Waterlogged soil prevents dead plants from fully decomposing.", "Rocks break down into dust.", "Ash from volcanoes builds up.", "Trees turn into coal quickly."], answer: 0 },
            { text: "According to paragraph 1, what is remarkable about peatlands?", options: ["They store more carbon than all of the world's forests combined.", "They cover most of the Earth.", "They are found only in Asia.", "They produce oxygen for the whole planet."], answer: 0 },
            { text: "The word \"flammable\" in paragraph 2 is closest in meaning to", options: ["easily set on fire", "wet", "heavy", "colorful"], answer: 0 },
            { text: "According to paragraph 2, what happens when peatlands are drained?", options: ["The peat decomposes and releases carbon dioxide.", "The peat becomes stronger.", "More carbon is stored.", "Rare animals return."], answer: 0 },
            { text: "How are peatlands usually restored?", options: ["by blocking drainage ditches so water levels rise", "by planting large forests on them", "by burning the peat", "by building houses on them"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Serdar", prompt: "Why are you going to bed so early?", chunks: ["I", "have", "to catch", "an early", "flight"], end: "." },
      { promptBy: "Helen", prompt: "Did you enjoy the theater festival?", chunks: ["we", "watched", "four", "different", "plays"], end: "." },
      { promptBy: "Gamze", prompt: "I'm not sleeping well these days.", chunks: ["have you", "tried", "reading", "before", "going to bed"], end: "?" },
      { promptBy: "Ryan", prompt: "How did you learn to cook Indian food?", chunks: ["my roommate", "taught me", "some", "of her", "family recipes"], end: "." },
      { promptBy: "Nur", prompt: "When will the results be announced?", chunks: ["they", "will be", "posted", "online", "next Monday"], end: "." },
      { promptBy: "Kyle", prompt: "Why is the museum so busy today?", chunks: ["entry", "is", "free", "on the first", "Sunday of the month"], end: "." },
      { promptBy: "Esin", prompt: "What did you buy at the market?", chunks: ["I", "bought", "fresh", "fruit", "and cheese"], end: "." },
      { promptBy: "Will", prompt: "Where did you put the car keys?", chunks: ["I", "left them", "on", "the table", "by the door"], end: "." },
      { promptBy: "Ceren", prompt: "This room is very dark.", chunks: ["should", "we", "open", "the", "curtains"], end: "?" },
      { promptBy: "Luke", prompt: "Why did you start learning the cello?", chunks: ["I", "fell in love", "with", "its deep", "sound"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your company has recently moved to a new office building. Many employees, including you, are having difficulty finding parking near the building. You want to write to the office manager to suggest solutions.",
      to: "the office manager, Mr. Kaplan",
      subject: "Parking at the new office",
      tasks: ["Describe the parking problem.", "Explain how it is affecting employees.", "Suggest possible solutions."],
      sample: "Dear Mr. Kaplan,\n\nI am writing about the parking situation at our new office on Harbor Street. Since we moved two weeks ago, there have not been enough parking spaces for employees. The building's garage has only forty spaces, but more than one hundred of us work here, and the nearby streets have strict two-hour parking limits.\n\nThis has caused several problems. Many employees arrive very early to find a space, while others have to park in a paid garage more than a kilometer away, which costs about $15 per day. Some colleagues have had to leave important meetings to move their cars, and several have received parking fines. People are starting to feel stressed before the workday even begins.\n\nI would like to suggest a few possible solutions. The company could negotiate a discounted monthly rate with the nearby public garage, or provide a monthly public transport pass for employees who choose not to drive. We could also introduce a car-sharing system, so that colleagues who live in the same areas can travel together. Finally, secure bicycle parking would encourage more people to cycle.\n\nThank you for considering these ideas.\n\nKind regards,\nSeda Kurt",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Communication Studies",
      professor: {
        name: "Dr. Ward",
        text: "Some people believe that handwritten letters and cards are more meaningful than emails or text messages, because they take more time and effort. Others think that the message matters more than the method, and digital communication is just as personal. Are handwritten messages more meaningful than digital ones? Explain your view.",
      },
      students: [
        { name: "Natalie", text: "Yes. When someone writes a card by hand, you know they really thought about you. I keep handwritten letters for years." },
        { name: "Kerem", text: "Not necessarily. A long, thoughtful email can be just as meaningful. And digital messages let us stay in touch more often." },
      ],
      sample: "I believe handwritten messages often feel more meaningful, but digital messages can be equally personal when they are written with care. Natalie makes a strong point: writing a letter or card by hand takes time and effort, and the person's handwriting itself makes the message feel unique. Handwritten letters are also physical objects that people can keep and reread for many years, which gives them special emotional value. However, Kerem is right that the content of a message matters most. A thoughtful email that shares genuine feelings can mean more than a short, generic card. Digital communication also allows people to stay in touch much more frequently, especially across long distances. In my view, handwritten notes are ideal for special occasions, while digital messages are valuable for everyday connection.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new staff member at a city tourist bus company. Your supervisor is telling you what to say to passengers.",
      sentences: [
        "Good morning, welcome aboard.",
        "Please keep your ticket with you.",
        "The tour lasts about two hours.",
        "Headphones are under your seat.",
        "You can get off at any stop.",
        "Buses come every thirty minutes, so you can visit a museum and then join the next bus.",
        "The audio guide is available in ten languages, and you can change the language using the buttons on the armrest of your seat.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about cities and history. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is a famous building or landmark in your city?",
          sample: "One famous landmark in my city is the old clock tower in the main square. It was built more than one hundred years ago, and it has become a symbol of the city. Many people use it as a meeting point, and tourists always take photos in front of it. At night, it's lit up with colorful lights, which makes the square look beautiful.",
        },
        {
          text: "Do you think old buildings should be preserved even if they are expensive to maintain?",
          sample: "Yes, I believe important old buildings should be preserved, even if it is expensive. They are part of a city's history and identity, and once they are destroyed, they can never be replaced. Historic buildings also attract tourists, which brings money to the city. However, not every old building can be saved, so cities need to choose carefully and find new uses for old buildings, such as turning them into museums or cafés.",
        },
        {
          text: "How do large construction projects change cities?",
          sample: "Large construction projects, like bridges, stadiums and new metro lines, can change cities dramatically. They can improve transportation, create jobs and attract investment. For example, a new bridge can connect two parts of a city and make travel much faster. However, these projects can also cause problems, such as noise, traffic during construction and higher housing prices in nearby areas. It's important for cities to plan them carefully and listen to residents.",
        },
        {
          text: "What would you change about the city where you live?",
          sample: "If I could change something about my city, I would create more pedestrian streets and green spaces in the center. At the moment, the main streets are very crowded with cars, which makes walking unpleasant and noisy. More trees, benches and car-free areas would make the city center more relaxing and enjoyable for everyone. I would also improve public transport so that people don't need to drive as much.",
        },
      ],
    },
  },
};
