import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 26 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_26: ToeflTest = {
  id: "toefl-26",
  no: 26,
  title: "TOEFL iBT Practice Test 26",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Kites",
          text: "Kites were probably invented in China more than two thousand years a{{go}}. The earliest kites were made of silk and bamb{{oo}}. They were not only toys; armies used them to send sign{{als}} and to measure distances. Later, kites spread to other parts of As{{ia}}, where flying them became part of many festi{{vals}}. In the eighteenth century, the American scientist Benjamin Franklin used a ki{{te}} in a famous experiment with lightn{{ing}}. Kites also helped early inventors under{{stand}} how wings could lift heavy obj{{ects}} into the a{{ir}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Swap shifts",
          text: [
            "Hi Lara, would you be able to swap shifts with me next week? I have an exam on Tuesday morning, so I can't work then.",
            "I could take your Saturday afternoon shift instead. Let me know so I can tell the manager.",
          ],
          questions: [
            { text: "Why does the writer want to swap shifts?", options: ["The writer is going on vacation.", "The writer has an exam on Tuesday morning.", "The writer is sick.", "The writer wants more hours."], answer: 1 },
            { text: "What does the writer offer to do?", options: ["work Lara's Saturday afternoon shift", "pay Lara extra money", "work two extra shifts", "talk to the manager first"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Lab coat requirement",
          text: [
            "CHEMISTRY LABORATORIES – SAFETY REMINDER",
            "All students must wear a lab coat and safety glasses at all times during laboratory sessions. Students without the correct equipment will not be allowed to take part and will be marked absent.",
            "Lab coats can be bought from the campus bookstore for $25, and safety glasses are available free of charge at the lab entrance. Long hair must be tied back, and open-toed shoes are not permitted.",
          ],
          questions: [
            { text: "What happens to students without the correct equipment?", options: ["They receive a warning.", "They are marked absent.", "They must pay a fine.", "They can borrow a coat."], answer: 1 },
            { text: "What is available free of charge?", options: ["lab coats", "safety glasses", "gloves", "lab notebooks"], answer: 1 },
            { text: "Which type of shoes is NOT allowed?", options: ["sports shoes", "boots", "open-toed shoes", "leather shoes"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "How caterpillars become butterflies",
          paragraphs: [
            "The transformation of a caterpillar into a butterfly is one of the most dramatic changes in the animal world. A caterpillar spends most of its life eating, sometimes increasing its body mass thousands of times. When it has grown enough, it attaches itself to a branch or leaf and forms a hard protective case called a chrysalis.",
            "Inside the chrysalis, the caterpillar's body is largely broken down. Digestive enzymes dissolve most of its tissues, producing a kind of soup. However, certain groups of cells, called imaginal discs, survive. These clusters of cells, which were present in the caterpillar from the beginning but remained inactive, now grow rapidly, using the nutrients from the dissolved tissues to build the wings, legs, eyes and other organs of the adult butterfly.",
            "Remarkably, some evidence suggests that butterflies may retain memories from their caterpillar stage. In one experiment, caterpillars were trained to avoid a particular smell by pairing it with a mild electric shock. After they had transformed into adults, many still avoided the smell. Scientists believe that parts of the nervous system may survive the breakdown, although exactly how memories are preserved through such a radical change is still not fully understood.",
          ],
          questions: [
            { text: "According to paragraph 1, what does a caterpillar spend most of its life doing?", options: ["flying", "eating", "sleeping", "building a chrysalis"], answer: 1 },
            { text: "The word \"radical\" in paragraph 3 is closest in meaning to", options: ["extreme", "slow", "small", "familiar"], answer: 0 },
            { text: "According to paragraph 2, what happens to most of the caterpillar's tissues?", options: ["They harden into a shell.", "They are dissolved by enzymes.", "They become wings directly.", "They are released from the chrysalis."], answer: 1 },
            { text: "What are imaginal discs?", options: ["groups of cells that build the adult's organs", "the hard case of the chrysalis", "the caterpillar's food", "special leaves"], answer: 0 },
            { text: "What did the experiment described in paragraph 3 suggest?", options: ["Butterflies cannot smell.", "Butterflies may keep memories from the caterpillar stage.", "Caterpillars do not learn.", "Electric shocks prevent transformation."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My neighbor's dog",
          text: "My neighbor has a big brown dog named Max. Every morning, Max sits by the ga{{te}} and waits for the children going to sch{{ool}}. He is very friendly and wags his ta{{il}} when people say hello. Sometimes I take him for a walk when my neighbor is bu{{sy}}. Max loves to run in the pa{{rk}} and chase balls. When it rai{{ns}}, he does not want to go out{{side}}. Everyone on our st{{reet}} knows Max, and he is like a frie{{nd}} to all of u{{s}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Spanish conversation group",
          text: [
            "PRACTICE YOUR SPANISH!",
            "Join our informal conversation group every Wednesday at 5 p.m. in the International Café. All levels are welcome, from beginners to advanced speakers.",
            "Each week we discuss a different topic, such as food, travel or music. The group is free, and native speakers help with pronunciation.",
          ],
          questions: [
            { text: "When does the group meet?", options: ["every Monday", "every Wednesday", "every Friday", "every weekend"], answer: 1 },
            { text: "Who can join?", options: ["only beginners", "only advanced speakers", "learners of all levels", "only Spanish teachers"], answer: 2 },
            { text: "Who helps with pronunciation?", options: ["a professor", "native speakers", "a computer program", "the café staff"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How volcanoes make islands",
          paragraphs: [
            "Some islands in the ocean were made by volcanoes. Hawaii and Iceland are famous examples.",
            "Deep under the sea floor, hot melted rock called magma pushes up through cracks. When it reaches the sea floor, it cools and becomes hard rock. After many eruptions, the rock builds up into a mountain.",
            "If the mountain grows tall enough, its top rises above the water and becomes an island. Over time, plants and animals arrive, carried by wind, waves and birds.",
          ],
          questions: [
            { text: "Which places are given as examples of volcanic islands?", options: ["Hawaii and Iceland", "Japan and Italy", "Cuba and Jamaica", "Ireland and Britain"], answer: 0 },
            { text: "What is magma?", options: ["hot melted rock", "cold sea water", "a type of plant", "sand"], answer: 0 },
            { text: "What happens when magma reaches the sea floor?", options: ["It disappears.", "It cools and becomes hard rock.", "It turns into sand.", "It becomes water."], answer: 1 },
            { text: "The word \"eruptions\" in paragraph 2 is closest in meaning to", options: ["explosions of lava", "storms", "earthquakes", "waves"], answer: 0 },
            { text: "How do plants and animals reach new islands?", options: ["People bring all of them.", "They are carried by wind, waves and birds.", "They grow from the rock.", "They swim from nearby islands only."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Social loafing",
          text: "When people work in groups, they sometimes put in less effort than they would if they were work{{ing}} alone. This phenomenon, called social loafing, was first observed in experiments in which participants pulled on a ro{{pe}}; as more people were added, each individual pulled less ha{{rd}}. Researchers believe that people loaf partly because their individual contribu{{tions}} are harder to identify in a gro{{up}}. Social loafing can be red{{uced}} when individual efforts are measured, when tasks are meani{{ngful}} and when group members kn{{ow}} and va{{lue}} one ano{{ther}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Student housing lottery",
          text: [
            "To: First- and second-year students",
            "From: Office of Residence Life",
            "Subject: Housing lottery for next year",
            "Because demand for on-campus housing exceeds the number of available rooms, rooms for next year will be assigned through a lottery. Students who wish to take part must submit a housing application and pay a $200 deposit by February 15. The deposit will be applied to your first rent payment or refunded if you do not receive a room.",
            "Each student will receive a random selection time. Students may form groups of up to four and choose rooms together, using the earliest selection time in the group. Students who receive accommodation through the disability services office are guaranteed housing and do not need to enter the lottery.",
          ],
          questions: [
            { text: "Why is a lottery being used?", options: ["The university wants to save money.", "Demand for housing exceeds the number of rooms.", "Students asked for it.", "Some residence halls are closing."], answer: 1 },
            { text: "What happens to the deposit if a student does not receive a room?", options: ["It is kept by the university.", "It is refunded.", "It is used for next year's lottery.", "It is given to another student."], answer: 1 },
            { text: "Which students do not need to enter the lottery?", options: ["second-year students", "students in groups of four", "students with accommodation through disability services", "students who pay early"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "The story of insulin",
          paragraphs: [
            "Until the early twentieth century, a diagnosis of type 1 diabetes was effectively a death sentence. In this disease, the body cannot produce insulin, a hormone made by the pancreas that allows cells to absorb sugar from the blood. Without it, sugar builds up in the blood while the body's tissues starve. The only treatment available was an extremely strict diet, which could extend patients' lives by a few months or years but left them severely weakened.",
            "In 1921, the Canadian surgeon Frederick Banting and his student assistant Charles Best, working in the laboratory of John Macleod at the University of Toronto, succeeded in extracting insulin from the pancreases of dogs. The extract lowered blood sugar in diabetic dogs, but it was impure and caused side effects. A biochemist, James Collip, developed a method of purifying it, and in January 1922 a fourteen-year-old boy named Leonard Thompson became the first person to receive an effective injection of insulin. His condition improved dramatically.",
            "Demand for insulin quickly outpaced supply, and the Toronto team arranged for it to be manufactured on a large scale using pancreases from cattle and pigs. The researchers sold the patent to the university for a nominal sum, reportedly one dollar each, because they wanted the treatment to be widely available. Banting and Macleod received the Nobel Prize in 1923, and each shared his prize money with a colleague he felt had been overlooked. Since the 1980s, most insulin has been produced by genetically modified bacteria, although its price in some countries has become a subject of considerable controversy.",
          ],
          questions: [
            { text: "According to paragraph 1, what does insulin do?", options: ["It allows cells to absorb sugar from the blood.", "It produces sugar.", "It destroys the pancreas.", "It increases blood sugar."], answer: 0 },
            { text: "The word \"nominal\" in paragraph 3 is closest in meaning to", options: ["very small", "very large", "secret", "fair"], answer: 0 },
            { text: "According to paragraph 2, what was James Collip's contribution?", options: ["He discovered diabetes.", "He developed a method of purifying insulin.", "He was the first patient.", "He provided the dogs."], answer: 1 },
            { text: "Why did the researchers sell the patent for very little money?", options: ["They wanted the treatment to be widely available.", "The university forced them.", "Insulin was not useful.", "They planned to sell it later at a higher price."], answer: 0 },
            { text: "According to paragraph 3, how is most insulin produced today?", options: ["from pig and cattle pancreases", "by genetically modified bacteria", "from plants", "in human volunteers"], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Şule", prompt: "Why are you selling your bike?", chunks: ["I", "am moving", "to a city", "with", "very steep hills"], end: "." },
      { promptBy: "Connor", prompt: "Have you read the article for today?", chunks: ["I", "read", "half of it", "on", "the bus"], end: "." },
      { promptBy: "Ayşe", prompt: "I never know what to cook.", chunks: ["why don't", "you", "plan", "your meals", "every Sunday"], end: "?" },
      { promptBy: "Dean", prompt: "Where can I get a coffee near here?", chunks: ["there is", "a small café", "around", "the next", "corner"], end: "." },
      { promptBy: "Nil", prompt: "How was the volunteer event?", chunks: ["we", "planted", "more than", "a hundred", "trees"], end: "." },
      { promptBy: "Jordan", prompt: "Why is your phone off?", chunks: ["the battery", "died", "while", "I was", "on the train"], end: "." },
      { promptBy: "Cemre", prompt: "When does the semester end?", chunks: ["classes", "finish", "in", "the middle of", "December"], end: "." },
      { promptBy: "Hugo", prompt: "What did you buy at the market?", chunks: ["I", "bought", "fresh", "fruit and", "some cheese"], end: "." },
      { promptBy: "Beyza", prompt: "The meeting room is booked.", chunks: ["could", "we", "use", "the lounge", "instead"], end: "?" },
      { promptBy: "Tyler", prompt: "Why did you start volunteering?", chunks: ["I", "wanted to", "give", "something back", "to my community"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently stayed at a hotel during a family trip. The staff were extremely helpful when your younger brother became ill, and you want to thank them.",
      to: "the manager of the Seaside Hotel",
      subject: "Thank you to your staff",
      tasks: ["Explain when you stayed at the hotel and what happened.", "Describe how the staff helped your family.", "Ask the manager to pass on your thanks to specific employees."],
      sample: "Dear Manager,\n\nMy family and I stayed at the Seaside Hotel from July 10 to 15, and I am writing to thank your staff for their outstanding help during our visit.\n\nOn our second night, my eight-year-old brother developed a high fever and started having difficulty breathing. It was almost midnight, and we did not know where to find a doctor in an unfamiliar city. The night receptionist immediately called a doctor who came to the hotel within twenty minutes. She also arranged a taxi to the hospital when the doctor recommended further tests, and she called our room the next morning to ask how my brother was feeling.\n\nThe following day, the restaurant staff kindly prepared light meals for my brother and delivered them to our room. Thanks to everyone's care, he recovered quickly, and we were able to enjoy the rest of our holiday.\n\nCould you please pass on our sincere thanks to the night receptionist, Ms. Elena Novak, and to the restaurant team? Their kindness made a very difficult night much easier for our family.\n\nWith best wishes,\nAhmet Erdem",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Anthropology",
      professor: {
        name: "Dr. Russo",
        text: "Many traditional crafts, such as handmade pottery, weaving and woodcarving, are disappearing as mass-produced goods become cheaper. Some people believe governments should support traditional craftspeople, for example with funding or training programs. Others think that if there is no demand, these crafts should be allowed to disappear naturally. Should governments spend money to preserve traditional crafts? Why or why not?",
      },
      students: [
        { name: "Emily", text: "Yes. Traditional crafts are part of a country's identity and history. Once the knowledge is lost, it can't be recovered. A small investment can keep these skills alive." },
        { name: "Barış", text: "I don't think governments should pay for this. Public money is limited and should go to education and healthcare. If a craft can't survive in the market, that's a natural change." },
      ],
      sample: "I think governments should support traditional crafts, but in ways that help them become self-sustaining rather than simply depending on subsidies. Emily is right that these crafts carry valuable cultural knowledge. In my grandmother's village, there were once dozens of carpet weavers, but now only two elderly women know the traditional patterns, and when they are gone, centuries of knowledge will disappear. Barış raises a fair point about limited budgets, but the costs involved are relatively small. Instead of permanent payments, governments could fund apprenticeships so that young people can learn from masters, help craftspeople sell their products online, and promote them to tourists. In many places, such programs have turned traditional crafts into sources of income, which shows that preserving heritage and supporting the economy can go together.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are working at a car rental office at the airport. Your supervisor is telling you what to say to customers.",
      sentences: [
        "Welcome to our rental office.",
        "May I see your driving license, please?",
        "Your car is parked in section B.",
        "Please return the car with a full tank of fuel.",
        "The rental price includes basic insurance and unlimited kilometers.",
        "If you have any problems with the car, please call the number on the key ring at any time.",
        "Cars that are returned more than one hour late will be charged for an extra day, so please plan your journey carefully.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about cities and public spaces. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is your favorite public place in your city, and why?",
          sample: "My favorite public place is the seaside promenade near my home. It's a long path along the water with benches, trees and small cafés. In the evenings, families walk there, people fish, and street musicians play. I love going there after a long day because the sea breeze and the view of the sunset help me relax. It's also free, so everyone can enjoy it regardless of their income.",
        },
        {
          text: "Do you think cities have enough green spaces? Why or why not?",
          sample: "In my opinion, most large cities don't have enough green spaces. In many neighborhoods, especially newer ones, there are lots of apartment buildings but very few parks, and children have to play in parking lots. Green spaces are important not only for relaxation but also for health, because they reduce air pollution and heat. I think city planners should require a certain amount of green space whenever new housing is built.",
        },
        {
          text: "Some people believe that cars should be banned from city centers. What is your opinion?",
          sample: "I support limiting cars in city centers, though not necessarily a complete ban. Fewer cars would make the air cleaner, reduce noise and make streets safer for pedestrians and cyclists. Many European cities have done this successfully, and their centers became more pleasant and attractive. However, there should be exceptions for emergency vehicles, deliveries at certain times and people with disabilities, and public transport must be good enough to replace cars.",
        },
        {
          text: "How do you think public spaces in cities will change in the future?",
          sample: "I think public spaces will become greener and more flexible. Many cities are already turning roads into pedestrian areas and adding trees to fight rising temperatures. I also expect more spaces to be designed for multiple uses, for example a square that hosts a market in the morning and concerts in the evening. Technology might play a role too, with free wi-fi and digital information points, but I hope public spaces remain places where people meet face to face.",
        },
      ],
    },
  },
};
