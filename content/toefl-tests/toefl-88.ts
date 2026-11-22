import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 88 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_88: ToeflTest = {
  id: "toefl-88",
  no: 88,
  title: "TOEFL iBT Practice Test 88",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Escalators",
          text: "Escalators, or moving staircases, carry millions of people every day in shopping centers, airports and subway sta{{tions}}. Several inventors designed moving stairs in the late nineteenth cen{{tury}}. One early version, installed at an amusement park in New York in 1896, was really a moving ra{{mp}} rather than a staircase. A few years later, a company that made eleva{{tors}} produced the first escalators with flat st{{eps}}, and it introduced one at the Paris World's Fair in 1900. The name \"escalator\" was originally a trade{{mark}}, but it soon became the common wo{{rd}} for all moving stairs. Escalators can move large numbers of people more quickly than eleva{{tors}}. However, many cities now ask people to stand still on both si{{des}}, since walking can cause acci{{dents}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Ride to the vet",
          text: [
            "Hi Banu, my dog hurt his paw this morning and needs to see the vet at 3 p.m. today. My car is being repaired, and he's too big to take on the bus.",
            "Could you possibly drive us there? The clinic is only fifteen minutes away. I'll pay for the fuel and buy you a coffee afterwards!",
          ],
          questions: [
            { text: "Why does the dog need to see the vet?", options: ["He hurt his paw.", "He needs a vaccination.", "He stopped eating.", "He needs a haircut."], answer: 0 },
            { text: "Why can't the writer take the bus?", options: ["The dog is too big.", "The bus is not running.", "The writer has no ticket.", "The clinic is too far."], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Sports center fee changes",
          text: [
            "CHANGES TO SPORTS CENTER FEES",
            "From September 1, the monthly fee for student members of the sports center will increase from $15 to $18 because of rising energy and maintenance costs. Staff fees will increase from $25 to $30.",
            "Students who buy a full-year membership before August 31 can still pay the old price of $150. All fitness classes will remain free for members, and new equipment will be installed in the weight room this autumn.",
          ],
          questions: [
            { text: "Why are fees increasing?", options: ["because of rising energy and maintenance costs", "because of new staff", "because the center is closing", "because of fewer members"], answer: 0 },
            { text: "How can students still pay the old price?", options: ["by buying a full-year membership before August 31", "by attending more classes", "by showing an ID card", "by paying in cash"], answer: 0 },
            { text: "What will remain free for members?", options: ["all fitness classes", "personal training", "locker rentals", "towels"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How the Hagia Sophia's dome stands",
          paragraphs: [
            "The Hagia Sophia in Istanbul, completed in 537 under the Byzantine emperor Justinian, was for nearly a thousand years the largest church in the world. Its most impressive feature is its enormous central dome, which rises more than fifty meters above the floor and appears to float above a ring of windows. Building such a large dome over a square space was a remarkable engineering achievement for its time.",
            "A dome pushes downward and outward on the structure that supports it, and this outward force can cause walls to crack or collapse. To solve this problem, the architects, Anthemius of Tralles and Isidore of Miletus, used a system of pendentives, curved triangular sections that allow a round dome to rest on a square base formed by four large arches. Half-domes on the east and west sides help absorb the dome's outward thrust, while massive stone supports on the north and south strengthen the structure. The builders also used relatively light materials, including specially made bricks and thick layers of mortar, to reduce the weight of the dome.",
            "Despite these innovations, the original dome partially collapsed after an earthquake in 558, only about twenty years after the building's completion. It was rebuilt with a steeper shape, which reduced the outward force. Over the following centuries, additional earthquakes caused further damage, and repairs were carried out many times. After the Ottoman conquest of Constantinople in 1453, the building became a mosque, and architects, including the famous Mimar Sinan in the sixteenth century, added buttresses that strengthened the structure. The Hagia Sophia's survival through many earthquakes is a testament to both its original design and centuries of careful maintenance.",
          ],
          questions: [
            { text: "According to paragraph 1, what is the most impressive feature of the Hagia Sophia?", options: ["its enormous central dome", "its colorful floors", "its underground rooms", "its tall towers"], answer: 0 },
            { text: "According to paragraph 2, what problem does a dome create?", options: ["It pushes downward and outward on its supports.", "It blocks light.", "It makes buildings too cold.", "It is too light."], answer: 0 },
            { text: "The word \"thrust\" in paragraph 2 is closest in meaning to", options: ["pushing force", "color", "height", "weight loss"], answer: 0 },
            { text: "What happened to the original dome in 558?", options: ["It partially collapsed after an earthquake.", "It was painted gold.", "It was moved to another building.", "It was made larger."], answer: 0 },
            { text: "What did Mimar Sinan contribute to the building?", options: ["buttresses that strengthened the structure", "the original dome", "the windows", "the pendentives"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Painting a mural at school",
          text: "This year, our art teacher asked our class to paint a mural on a wall in the school gar{{den}}. We decided to paint a big for{{est}} full of animals. First, we drew the picture on pa{{per}}. Then our teacher helped us draw it on the wa{{ll}} with chalk. Everyone had a different j{{ob}}. I painted the bi{{rds}}, and my friend painted the trees. We used bright col{{ors}}, like green, yellow and blue. It took us three wee{{ks}} to finish. When parents came to see it, they were very imp{{ressed}}. Now, every time I walk past it, I feel pro{{ud}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Pancake breakfast fundraiser",
          text: [
            "PANCAKE BREAKFAST FOR A GOOD CAUSE!",
            "Join us for a pancake breakfast at Oakwood School on Sunday, March 9, from 8 to 11 a.m. Enjoy pancakes with fruit, honey or chocolate, plus coffee, tea and juice.",
            "Tickets cost $8 for adults and $4 for children. All money raised will help build a new playground for the school. Tickets can be bought at the door.",
          ],
          questions: [
            { text: "Where is the pancake breakfast?", options: ["at Oakwood School", "at a hotel", "in the park", "at a restaurant"], answer: 0 },
            { text: "What will the money be used for?", options: ["building a new playground", "buying new books", "a school trip", "new computers"], answer: 0 },
            { text: "Where can tickets be bought?", options: ["at the door", "online only", "at a supermarket", "at the bank"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why skunks smell bad",
          paragraphs: [
            "Skunks are small black and white animals that live in North and South America. They are famous for their terrible smell.",
            "Skunks do not smell bad all the time. They have special glands under their tails that make a strong-smelling oily liquid. When a skunk feels in danger, it can spray this liquid at an enemy from up to three meters away. The smell can last for days.",
            "Before spraying, a skunk usually gives a warning. It stamps its feet, raises its tail and turns around. Its black and white colors also tell other animals to stay away. Most animals learn quickly to leave skunks alone.",
          ],
          questions: [
            { text: "Where do skunks live?", options: ["in North and South America", "in Africa", "in Australia", "in Asia"], answer: 0 },
            { text: "When does a skunk spray its liquid?", options: ["when it feels in danger", "when it is hungry", "when it is sleeping", "when it is happy"], answer: 0 },
            { text: "How far can a skunk spray?", options: ["up to three meters", "about ten meters", "only a few centimeters", "one kilometer"], answer: 0 },
            { text: "The word \"warning\" in paragraph 3 is closest in meaning to", options: ["a sign that something bad may happen", "a gift", "a song", "a type of food"], answer: 0 },
            { text: "What do a skunk's black and white colors tell other animals?", options: ["to stay away", "to come closer", "that it is young", "that it is sick"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Psychological reactance",
          text: "When people feel that their freedom to choose is being threatened, they often react by doing the opposite of what they have been to{{ld}}. Psychologists call this response reac{{tance}}. For example, a sign that says \"Do not touch\" may make some visitors more curious to tou{{ch}} the object. Teenagers whose parents strongly forbid them from seeing certain fri{{ends}} may become even more determined to see th{{em}}. Reactance helps explain why aggressive advertising or overly strict ru{{les}} can backfire. Researchers have found that messages are often more persua{{sive}} when they acknowledge people's freedom, for example by adding phrases such as \"but the choice is yo{{urs}}\". Giving people options rather than orders may reduce resis{{tance}} and encourage cooper{{ation}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Teaching assistant workload",
          text: [
            "To: Graduate teaching assistants",
            "From: Graduate School",
            "Subject: Workload guidelines for teaching assistants",
            "To ensure that teaching assistants have enough time for their own research, the Graduate School has introduced new workload guidelines. Teaching assistants should not be asked to work more than fifteen hours per week on teaching duties, including preparation, grading and office hours.",
            "Supervisors are asked to provide a written description of duties at the start of each semester. If you regularly work more than the recommended hours, please speak first with your course supervisor. If the problem is not resolved, you may contact the Graduate School confidentially, and your concerns will be handled without affecting your position.",
          ],
          questions: [
            { text: "Why were the new guidelines introduced?", options: ["to ensure teaching assistants have time for their own research", "to reduce salaries", "to increase teaching hours", "to hire more professors"], answer: 0 },
            { text: "What is the maximum recommended workload?", options: ["fifteen hours per week", "twenty-five hours per week", "five hours per week", "forty hours per week"], answer: 0 },
            { text: "What should teaching assistants do first if they work too many hours?", options: ["speak with their course supervisor", "stop working immediately", "complain to students", "change universities"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Is online learning effective?",
          paragraphs: [
            "Online learning has grown rapidly over the past two decades. Universities offer fully online degrees, millions of people take free online courses, and many schools now combine classroom teaching with digital activities. During periods when schools were closed, such as during the COVID-19 pandemic, online learning became the main form of education for hundreds of millions of students worldwide, giving researchers an unexpected opportunity to study its effects.",
            "Research suggests that the effectiveness of online learning varies widely. Some studies have found that well-designed online courses can be as effective as traditional classes, particularly for motivated adult learners. Online learning allows students to study at their own pace, review recorded lectures and access courses from anywhere. Interactive features, such as quizzes with immediate feedback and discussion forums, can support learning when they are used effectively.",
            "However, online learning also presents challenges. Many students find it harder to stay motivated without regular face-to-face contact with teachers and classmates, and completion rates for free online courses are often very low. Studies of school closures found that many children fell behind, especially younger students and those from low-income families who lacked reliable internet access, quiet places to study or adult support at home. As a result, many educators now favor 'blended' approaches that combine online materials with in-person teaching, aiming to keep the flexibility of digital tools while preserving the social and motivational benefits of the classroom.",
          ],
          questions: [
            { text: "According to paragraph 1, what gave researchers an unexpected opportunity to study online learning?", options: ["school closures during the COVID-19 pandemic", "new government laws", "the invention of computers", "a decrease in students"], answer: 0 },
            { text: "According to paragraph 2, who may benefit most from online courses?", options: ["motivated adult learners", "very young children", "students without internet access", "people who dislike technology"], answer: 0 },
            { text: "The word \"preserving\" in paragraph 3 is closest in meaning to", options: ["keeping", "losing", "changing", "measuring"], answer: 0 },
            { text: "According to paragraph 3, which students fell behind during school closures?", options: ["younger students and those from low-income families", "university professors", "adult learners", "students in large cities only"], answer: 0 },
            { text: "What do many educators now favor?", options: ["blended approaches combining online and in-person teaching", "only online teaching", "only traditional lectures", "no use of technology"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Furkan", prompt: "Why are you leaving so early in the morning?", chunks: ["I", "want to", "avoid", "the heavy", "traffic"], end: "." },
      { promptBy: "Megan", prompt: "Did you enjoy the guided tour?", chunks: ["the guide", "made", "the history", "very", "interesting"], end: "." },
      { promptBy: "Elçin", prompt: "I can't find my favorite pen.", chunks: ["did you", "leave it", "in", "the meeting", "room"], end: "?" },
      { promptBy: "Rob", prompt: "How did you get such a good tan?", chunks: ["I", "spent", "a week", "at", "the beach"], end: "." },
      { promptBy: "Defne", prompt: "When will your exams finish?", chunks: ["my last", "exam", "is", "next", "Friday"], end: "." },
      { promptBy: "Joel", prompt: "Why is the café so busy?", chunks: ["they", "are", "offering", "free", "desserts today"], end: "." },
      { promptBy: "Gülay", prompt: "What did you think of the book?", chunks: ["the characters", "were", "realistic", "and", "interesting"], end: "." },
      { promptBy: "Liam", prompt: "Where should we go for our class trip?", chunks: ["let's", "visit", "the science", "museum", "in the city"], end: "." },
      { promptBy: "Melis", prompt: "My shoes are wet from the rain.", chunks: ["do you", "want", "to borrow", "a pair", "of mine"], end: "?" },
      { promptBy: "Mike", prompt: "Why did you decide to study medicine?", chunks: ["I", "want to", "help", "sick", "children"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently attended a free public lecture at a museum about ancient civilizations. You enjoyed it very much and want to suggest topics for future lectures. You want to write to the museum's education department.",
      to: "the museum education department",
      subject: "Feedback and suggestions for future lectures",
      tasks: ["Explain which lecture you attended.", "Describe what you enjoyed about it.", "Suggest topics or improvements for future lectures."],
      sample: "Dear Education Department,\n\nLast Thursday evening, I attended the free public lecture 'Daily Life in Ancient Mesopotamia' by Dr. Elena Ross in the museum's main auditorium. I wanted to thank you for organizing such an interesting event.\n\nI particularly enjoyed the way Dr. Ross used objects from the museum's own collection to illustrate her points. Seeing photographs of clay tablets and cooking tools while she explained how people lived made the topic feel very real. I also appreciated the question-and-answer session at the end, which allowed the audience to explore some topics in more detail.\n\nFor future lectures, I would love to learn more about ancient trade routes, such as the Silk Road, and about how ancient peoples studied astronomy. It might also be helpful to offer some lectures on weekend afternoons, as many people, including families with children, cannot attend in the evening. Finally, recording the lectures and posting them online would allow more people to enjoy them.\n\nThank you again for this wonderful initiative.\n\nBest regards,\nOsman Kaya",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Ethics",
      professor: {
        name: "Dr. Morgan",
        text: "Some companies test new products, such as cosmetics and household chemicals, on animals to make sure they are safe for humans. Supporters argue that such testing protects consumers. Opponents believe it is cruel and that alternative methods, such as computer models and tests on human cells, are now good enough. Should animal testing for cosmetics be banned? Explain your view.",
      },
      students: [
        { name: "Hannah", text: "Yes. Cosmetics aren't essential, so it's wrong to cause animals pain just to make new lipsticks or shampoos." },
        { name: "Doruk", text: "I'm not sure. Some chemicals could be dangerous for people. Until alternatives are completely reliable, some testing may still be necessary." },
      ],
      sample: "I believe animal testing for cosmetics should be banned, although testing for life-saving medicines raises different questions. Hannah makes an important ethical point: cosmetics are not essential to human survival, so causing suffering to animals to develop new beauty products is very difficult to justify. Many companies already produce successful cosmetics without animal testing by using ingredients with long safety records. Doruk is right that consumer safety matters, and new chemicals must be tested carefully. However, scientists have developed alternative methods, such as tests using human skin cells grown in laboratories and computer models, which in many cases can predict reactions accurately. Several regions, including the European Union, have already banned animal testing for cosmetics without harming consumers, which suggests that a ban is both possible and responsible.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new receptionist at a language school. The director is telling you what to say to new students.",
      sentences: [
        "Hello, welcome to the language school.",
        "Please fill in this registration form.",
        "Your placement test begins at nine.",
        "Classes are held in the building across the street.",
        "The library has books in many languages.",
        "If you would like to change your class time, please speak to me before the end of the first week.",
        "On Friday evenings, we organize a conversation club where students can practice speaking with native speakers in a relaxed atmosphere.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about learning and education. The researcher will ask you some questions.",
      questions: [
        {
          text: "Have you ever taken an online course? What was it like?",
          sample: "Yes, last summer I took an online course in graphic design. It was really convenient, because I could watch the videos whenever I had free time, even late at night. The instructor gave clear explanations, and we submitted small design projects every week. However, I sometimes found it hard to stay motivated without classmates around me. I think I learned a lot, but I would have liked more live interaction.",
        },
        {
          text: "Do you think online learning will replace traditional classrooms?",
          sample: "I don't think online learning will completely replace traditional classrooms, especially for children. Schools are not only places to learn facts but also places to develop social skills and friendships. Teachers can also notice when a student is struggling and help immediately. However, online learning will continue to grow, particularly for adults and for courses that people take alongside work. I think the future will be a combination of both.",
        },
        {
          text: "What makes a good teacher?",
          sample: "I think a good teacher is someone who is passionate about their subject and cares about their students. They explain ideas clearly, use interesting examples and are patient when students make mistakes. A good teacher also encourages students to think for themselves and ask questions, rather than just memorizing information. Most importantly, they believe in their students' ability to improve, which builds students' confidence.",
        },
        {
          text: "Should adults continue learning new skills throughout their lives?",
          sample: "Yes, I strongly believe adults should continue learning throughout their lives. The world is changing quickly, especially because of technology, so people need to update their skills to stay employed and adapt to new situations. Learning also keeps the mind active and can be very enjoyable, whether it's a new language, a musical instrument or cooking. Many people find that learning new things gives them confidence and a sense of purpose.",
        },
      ],
    },
  },
};
