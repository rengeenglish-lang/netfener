import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 78 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_78: ToeflTest = {
  id: "toefl-78",
  no: 78,
  title: "TOEFL iBT Practice Test 78",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Bookmarks",
          text: "As long as people have read books, they have needed a way to remember where they stopped rea{{ding}}. In medieval Europe, books were rare and very expen{{sive}}, so readers used thin strips of leather or cl{{oth}} attached to the binding to mark their pla{{ce}}. Some of these early bookmarks were decorated with beautiful pat{{terns}}. In the nineteenth century, as books became cheaper, separate paper and silk bookmarks became popu{{lar}}, and they were often given as gi{{fts}}. Some publishers printed advertise{{ments}} on bookmarks and placed them inside new bo{{oks}}. Today, many people read on electronic devices that save their place automa{{tically}}, but paper bookmarks are still widely used.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Dead car battery",
          text: [
            "Hi Ozan, my car won't start this morning. I think the battery is dead because I left the lights on last night.",
            "Do you have jumper cables? If you could come by before 8:30, we could try to start it with your car. Otherwise, I'll have to take the bus and call a mechanic.",
          ],
          questions: [
            { text: "Why won't the writer's car start?", options: ["The battery is probably dead.", "The car has no fuel.", "A tire is flat.", "The key is lost."], answer: 0 },
            { text: "What will the writer do if Ozan can't come?", options: ["take the bus and call a mechanic", "stay home all day", "buy a new car", "walk to work"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Exam room assignments",
          text: [
            "FINAL EXAM ROOM ASSIGNMENTS",
            "Room assignments for final exams are now available in the student portal. Because of the large number of students, many exams will take place in different rooms from your usual classroom.",
            "Please arrive at least fifteen minutes before your exam begins and bring your student card, which will be checked at the door. Phones must be switched off and placed in your bag at the front of the room. Students who arrive more than thirty minutes late will not be admitted.",
          ],
          questions: [
            { text: "Where can students find their exam room?", options: ["in the student portal", "on the classroom door", "at the library", "by asking their professor"], answer: 0 },
            { text: "What will be checked at the door?", options: ["student cards", "phones", "bags", "tickets"], answer: 0 },
            { text: "What happens to students who arrive more than thirty minutes late?", options: ["They will not be admitted.", "They receive extra time.", "They take the exam in another room.", "They must pay a fee."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How the Romans heated their baths",
          paragraphs: [
            "Public baths were among the most important buildings in ancient Roman cities. Far more than places to wash, they were social centers where people of different classes met to exercise, relax, talk and conduct business. Large bath complexes contained a series of rooms at different temperatures, including a cold room, a warm room and a hot room, as well as pools, gardens and even libraries.",
            "To heat these rooms, Roman engineers developed a system called the hypocaust, from Greek words meaning 'heat from below'. The floors of the heated rooms were raised on short pillars of brick or stone, creating an empty space underneath. A furnace, kept burning by slaves who added wood, pushed hot air and smoke into this space, where it circulated beneath the floor and heated it. In the hottest rooms, the floors became so warm that bathers wore wooden sandals to protect their feet.",
            "The Romans later improved the system by placing hollow clay tiles inside the walls, allowing hot air to rise through them and escape through openings near the roof. This heated the walls as well as the floor, keeping the rooms evenly warm. The hypocaust required enormous amounts of fuel, and the demand for wood may have contributed to the clearing of forests around some Roman cities. Remains of hypocausts have been found across the former Roman Empire, from Britain to North Africa, and the basic idea of heating from below is still used today in modern underfloor heating systems.",
          ],
          questions: [
            { text: "According to paragraph 1, what were Roman public baths used for besides washing?", options: ["exercising, relaxing and conducting business", "storing grain", "religious ceremonies only", "military training only"], answer: 0 },
            { text: "According to paragraph 2, how did the hypocaust heat the rooms?", options: ["Hot air circulated in a space beneath raised floors.", "Fires were lit in the middle of each room.", "Hot water was poured on the walls.", "Sunlight was reflected by mirrors."], answer: 0 },
            { text: "The word \"circulated\" in paragraph 2 is closest in meaning to", options: ["moved around", "disappeared", "cooled down", "stopped"], answer: 0 },
            { text: "Why did bathers wear wooden sandals in the hottest rooms?", options: ["to protect their feet from the hot floors", "to show their social class", "to avoid slipping on wet floors", "because of a religious rule"], answer: 0 },
            { text: "According to paragraph 3, what may the demand for fuel have contributed to?", options: ["the clearing of forests near some cities", "the invention of coal", "the end of the Roman Empire", "the building of new rivers"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Learning to skateboard",
          text: "For my eleventh birthday, my uncle gave me a skate{{board}}. I had never ridden one before, so I was a little scar{{ed}}. My older cousin offered to tea{{ch}} me. First, she showed me how to stand on the bo{{ard}} with my feet in the right place. Then she held my ha{{nd}} while I pushed slowly with one foot. I fell many ti{{mes}}, but I always wore a helmet and knee pa{{ds}}. After a few weeks, I could ride down the street without he{{lp}}. Now I go to the skate park with my fri{{ends}} every weekend, and I am learning new tri{{cks}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Woodworking for beginners",
          text: [
            "MAKE SOMETHING WITH YOUR HANDS!",
            "Our six-week woodworking course for beginners meets every Monday evening from 6 to 8:30 p.m. at the Maker Workshop on Mill Road.",
            "You will learn to use basic tools safely and build a small shelf and a wooden box to take home. The course costs $150, including wood and safety glasses. Participants must be at least 16 years old.",
          ],
          questions: [
            { text: "What will participants build?", options: ["a small shelf and a wooden box", "a table and chairs", "a boat", "a house"], answer: 0 },
            { text: "What is included in the price?", options: ["wood and safety glasses", "tools to take home", "dinner", "a certificate only"], answer: 0 },
            { text: "How old must participants be?", options: ["at least 16", "at least 12", "at least 21", "at least 18"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How ostriches protect their eggs",
          paragraphs: [
            "Ostriches are the largest birds in the world. They live in the dry grasslands of Africa. Their eggs are also the biggest of any bird, about as heavy as twenty chicken eggs.",
            "Ostriches lay their eggs in a shallow hole in the ground. Several females may lay their eggs in the same nest. The main female and the male take turns sitting on the eggs to keep them warm and safe.",
            "The female usually sits on the eggs during the day, because her brown feathers match the color of the ground. The male sits at night, when his black feathers are hard to see in the dark. This helps hide the nest from animals that want to eat the eggs.",
          ],
          questions: [
            { text: "Where do ostriches live?", options: ["in the dry grasslands of Africa", "in cold forests", "in the mountains of Asia", "near the sea in Europe"], answer: 0 },
            { text: "How heavy is an ostrich egg?", options: ["about as heavy as twenty chicken eggs", "as heavy as one chicken egg", "as heavy as a car", "as light as a feather"], answer: 0 },
            { text: "Where do ostriches lay their eggs?", options: ["in a shallow hole in the ground", "in trees", "in caves", "in water"], answer: 0 },
            { text: "The phrase \"take turns\" in paragraph 2 is closest in meaning to", options: ["do something one after the other", "fight", "run away", "eat together"], answer: 0 },
            { text: "Why does the male sit on the eggs at night?", options: ["His black feathers are hard to see in the dark.", "He is bigger.", "The female is sleeping in a tree.", "He needs to stay warm."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The contrast effect",
          text: "Our judgment of something is often influenced by what we have seen just bef{{ore}}. Psychologists call this the contrast eff{{ect}}. For example, lukewarm water feels cold to a hand that was previously in hot wa{{ter}}, but warm to a hand that was in cold wa{{ter}}. The same principle applies to many everyday deci{{sions}}. A salesperson may show customers an expensive item fi{{rst}}, so that a moderately priced item seems like a bar{{gain}}. In job interviews, a candidate may appear stronger if the previous candidate perfor{{med}} poorly. Being aware of the contrast effect can help people make fairer compar{{isons}} by judging each option on its own me{{rits}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Foreign language requirement",
          text: [
            "To: Students in the Faculty of Arts and Humanities",
            "From: Faculty Academic Office",
            "Subject: Changes to the foreign language requirement",
            "Starting with students who enter the university next fall, all Arts and Humanities majors must complete two semesters of study in a foreign language or demonstrate equivalent ability through a placement test. Current students are not affected by this change.",
            "Students who already speak a second language fluently may request an exemption by taking an oral and written test at the Language Center. Courses taken at other universities may also count toward the requirement if they are approved by the Language Center. Please contact your academic advisor if you have questions about how the requirement applies to your program.",
          ],
          questions: [
            { text: "Who is affected by the new requirement?", options: ["students entering the university next fall", "all current students", "only graduate students", "only international students"], answer: 0 },
            { text: "How can fluent speakers of a second language be exempted?", options: ["by taking an oral and written test at the Language Center", "by sending a letter from their parents", "by paying a fee", "they cannot be exempted"], answer: 0 },
            { text: "What must happen for courses from other universities to count?", options: ["They must be approved by the Language Center.", "They must be taken online.", "They must be in English.", "They must be completed in one week."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The human microbiome",
          paragraphs: [
            "The human body is home to trillions of microorganisms, including bacteria, viruses and fungi, which live on the skin, in the mouth and especially in the digestive system. Together, these organisms are known as the human microbiome. Scientists once estimated that microbial cells outnumbered human cells by ten to one; more recent estimates suggest the numbers are roughly equal. Either way, each person carries a vast and complex community of living things.",
            "Far from being merely passengers, many of these microorganisms perform essential functions. Gut bacteria help break down types of fiber that the human body cannot digest on its own, producing substances that nourish the cells lining the intestine. They also help produce certain vitamins and train the immune system to distinguish between harmful and harmless organisms. A healthy microbiome may also protect against infection by occupying space and resources that harmful bacteria would otherwise use.",
            "Research has linked changes in the microbiome to a wide range of health conditions, including obesity, allergies and inflammatory diseases, and even to mood and behavior through connections between the gut and the brain. However, scientists caution that many of these findings come from studies in animals or show associations rather than clear causes. The composition of the microbiome is influenced by diet, medicines such as antibiotics, the environment and even the way a person was born. While products such as probiotics are widely marketed, evidence for their benefits varies, and researchers are still working to understand how the microbiome can be changed to improve health.",
          ],
          questions: [
            { text: "According to paragraph 1, what is the human microbiome?", options: ["the community of microorganisms living in and on the body", "the human immune system", "a type of human cell", "a part of the brain"], answer: 0 },
            { text: "According to paragraph 2, how do gut bacteria help digestion?", options: ["They break down fiber the body cannot digest alone.", "They produce stomach acid.", "They remove all fiber from food.", "They slow down digestion."], answer: 0 },
            { text: "The word \"nourish\" in paragraph 2 is closest in meaning to", options: ["feed", "damage", "replace", "clean"], answer: 0 },
            { text: "Why do scientists caution about microbiome research findings?", options: ["Many show associations rather than clear causes or come from animal studies.", "There is no research on the topic.", "The microbiome does not affect health.", "All findings have been proven wrong."], answer: 0 },
            { text: "What does the author say about probiotics?", options: ["Evidence for their benefits varies.", "They cure all diseases.", "They are dangerous.", "They have been banned."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Okan", prompt: "Why are you so happy today?", chunks: ["my sister", "had", "a baby", "last", "night"], end: "." },
      { promptBy: "Megan", prompt: "Did you like the new restaurant?", chunks: ["the food", "was", "fresh", "and", "beautifully presented"], end: "." },
      { promptBy: "Sibel", prompt: "I can't wake up early.", chunks: ["why don't", "you", "go", "to bed", "a bit earlier"], end: "?" },
      { promptBy: "Rick", prompt: "How long have you worked here?", chunks: ["I", "have", "worked here", "for", "about six years"], end: "." },
      { promptBy: "Pınar", prompt: "When is the deadline for the application?", chunks: ["it", "is", "due", "on", "the tenth of May"], end: "." },
      { promptBy: "Will", prompt: "Why is the shop full of people?", chunks: ["they", "are", "giving away", "free", "samples"], end: "." },
      { promptBy: "Derya", prompt: "What did you do last weekend?", chunks: ["we", "visited", "an old", "castle", "near the coast"], end: "." },
      { promptBy: "Max", prompt: "Where can I buy a phone charger?", chunks: ["there is", "an electronics", "shop", "on", "the second floor"], end: "." },
      { promptBy: "Melis", prompt: "The heater isn't working.", chunks: ["should", "we", "call", "the building", "manager"], end: "?" },
      { promptBy: "Dan", prompt: "Why did you choose to study geology?", chunks: ["I", "love", "learning", "about", "rocks and mountains"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently stayed in a hotel where the staff were especially helpful when you became ill during your trip. You want to write to the hotel manager to thank them.",
      to: "the hotel manager",
      subject: "Thank you to your staff",
      tasks: ["Explain when you stayed and what happened.", "Describe how the staff helped you.", "Explain how their help affected your trip."],
      sample: "Dear Hotel Manager,\n\nI stayed at your hotel from August 4 to August 9 during a holiday with my sister, and I would like to thank your staff for their extraordinary kindness. On our second night, I suddenly developed a high fever and felt very weak, and I was worried because I did not speak the local language and did not know where to find a doctor.\n\nWhen my sister went to the reception desk, the night receptionist, Mr. Kemal, immediately called a doctor who came to the hotel within an hour. The next morning, the restaurant staff brought soup and tea to our room, and a housekeeper checked on me several times during the day. Mr. Kemal even helped my sister buy the medicine the doctor prescribed and explained the instructions carefully.\n\nThanks to their help, I recovered within two days and was able to enjoy the rest of our holiday, including a boat trip that we had been looking forward to for months. Please pass on my sincere thanks to everyone involved. Your staff made a difficult situation much easier, and we will certainly stay with you again.\n\nWith gratitude,\nGülay Şen",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Technology and Society",
      professor: {
        name: "Dr. Stewart",
        text: "Many people now use voice assistants and smart speakers in their homes to play music, answer questions and control devices. Supporters say these tools make daily life more convenient. Critics worry about privacy, since the devices are always listening, and about people becoming too dependent on technology. Are smart speakers a positive addition to people's homes? Explain your view.",
      },
      students: [
        { name: "Lucy", text: "Yes. They're very helpful, especially for elderly people or people with disabilities, who can control lights or call for help using only their voice." },
        { name: "Emre", text: "I don't trust them. They record what we say, and companies could use that information to target us with advertisements." },
      ],
      sample: "I think smart speakers can be a positive addition to homes, but users need to be careful about how they use them. Lucy makes an excellent point about accessibility. For elderly people, people with limited mobility or those with visual impairments, being able to turn on lights, set reminders or call a family member simply by speaking can greatly improve independence and safety. For everyone else, they offer convenience in small daily tasks. However, Emre's concern about privacy is serious. Although companies say the devices only record after a wake word, there have been cases where recordings were stored or reviewed without users realizing it. Therefore, people should check their privacy settings, delete recordings regularly and avoid placing devices in bedrooms. With these precautions, the benefits can outweigh the risks.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new assistant at a children's library. The librarian is telling you what to say to parents and children.",
      sentences: [
        "Hello, welcome to the children's library.",
        "Picture books are on the low shelves.",
        "Children can borrow five books at a time.",
        "Story time begins at ten thirty.",
        "Please return books to the box by the door.",
        "If your child would like a library card, you can fill out this form and we will make one today.",
        "During the summer holidays, children who read ten books receive a certificate and are invited to a special party at the end of August.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with travel and hospitality. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe a time when someone helped you while you were traveling.",
          sample: "A few years ago, I was traveling alone in Italy, and I got lost trying to find my hostel late at night. My phone battery had died, so I couldn't use a map. An elderly woman noticed that I looked confused and asked if I needed help. Even though she didn't speak much English, she walked with me for about ten minutes until we found the hostel. I was really touched by her kindness.",
        },
        {
          text: "Do you prefer staying in hotels or in more personal accommodation, like guesthouses?",
          sample: "I usually prefer guesthouses or small family-run places. They often feel more welcoming, and the owners can give useful advice about local restaurants and places to visit. I also like meeting other travelers in shared spaces. Hotels are more comfortable and reliable, especially for business trips, but they can feel quite impersonal. For holidays, I enjoy the more personal experience of a guesthouse.",
        },
        {
          text: "How important is customer service in the tourism industry?",
          sample: "I think customer service is extremely important in tourism. Travelers are often in unfamiliar places, and they may be tired or stressed, so friendly and helpful staff can make a huge difference to their experience. Good service also encourages people to return and recommend a place to others, which is very valuable for businesses. On the other hand, poor service can quickly lead to bad reviews online, which can hurt a hotel or restaurant.",
        },
        {
          text: "Should people learn about the customs of a country before visiting?",
          sample: "Yes, I think it's important to learn about local customs before visiting a country. It shows respect for local people and helps avoid misunderstandings or offending someone by accident. For example, in some countries it's polite to remove your shoes before entering a home, or to dress modestly in religious places. Learning about customs can also make the trip more interesting, because you understand the culture better.",
        },
      ],
    },
  },
};
