import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 62 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_62: ToeflTest = {
  id: "toefl-62",
  no: 62,
  title: "TOEFL iBT Practice Test 62",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Sticky notes",
          text: "Sticky notes, the small squares of paper that can be attached and removed many times, were the result of two separate ide{{as}}. In 1968, a scientist at an American company was trying to develop a very strong glue. Instead, he created a weak one that stuck lightly to surf{{aces}} and could be peeled off without leaving a ma{{rk}}. For several years, nobody knew how to use it. Then a colleague who sang in a church choir became frustrated because his paper book{{marks}} kept falling out of his song{{book}}. He realized that the weak glue could solve this prob{{lem}}. The company began selling the notes in 1980, and they quickly became popular in off{{ices}}. Today, they are sold in many colors and si{{zes}} and are used by students and workers around the wor{{ld}} to leave quick remin{{ders}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Late for dinner",
          text: [
            "Hi Mum, my meeting is running much longer than expected, so I won't be home for dinner at 7. Please start without me!",
            "I'll probably be back around 8:30. Could you save me a plate in the oven? Sorry about this!",
          ],
          questions: [
            { text: "Why will the writer be late?", options: ["A meeting is running longer than expected.", "The bus is delayed.", "The writer is shopping.", "The writer is at the gym."], answer: 0 },
            { text: "What does the writer ask Mum to do?", options: ["save a plate in the oven", "wait for dinner", "pick the writer up", "cook something different"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Library book drop",
          text: [
            "24-HOUR BOOK RETURN",
            "A new book drop has been installed outside the main entrance of the library. You can now return books at any time, even when the library is closed.",
            "Books returned through the book drop will be checked in on the next working day. Please do not place laptops, DVDs or other equipment in the book drop, as they may be damaged; these items must be returned at the front desk during opening hours.",
          ],
          questions: [
            { text: "What is the main advantage of the new book drop?", options: ["Books can be returned at any time.", "Books are checked in immediately.", "It accepts all kinds of equipment.", "It is inside the library."], answer: 0 },
            { text: "When will returned books be checked in?", options: ["on the next working day", "immediately", "at the end of the week", "after one month"], answer: 0 },
            { text: "Which item should NOT be placed in the book drop?", options: ["a laptop", "a novel", "a textbook", "a magazine"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The invention of the telephone",
          paragraphs: [
            "In the nineteenth century, the telegraph allowed messages to be sent over long distances as coded electrical pulses, but it could not carry the human voice. Several inventors in Europe and North America worked on devices that could transmit speech electrically. The person most often credited with inventing the telephone is Alexander Graham Bell, a Scottish-born teacher of deaf students who had moved to North America. Bell's interest in sound and hearing led him to experiment with ways of converting the vibrations of the voice into electrical signals.",
            "In 1876, Bell received a patent for a device that could transmit speech, only hours before another inventor, Elisha Gray, filed a similar application. This close timing led to years of legal disputes, and historians still debate how much each inventor contributed. An Italian immigrant, Antonio Meucci, had also developed a voice-communication device years earlier, but he could not afford to maintain a full patent. Nevertheless, Bell's company won most of the legal battles and became extremely successful.",
            "At first, many people doubted that the telephone would be useful, seeing it as an interesting toy. However, it spread rapidly in cities, and by the early twentieth century, millions of telephones were in use. Early telephones required human operators, mostly young women, who connected calls by hand using large switchboards. Over time, automatic exchanges replaced operators, and long-distance and international calls became possible. The telephone transformed business, allowing companies to communicate instantly across great distances, and changed social life by allowing friends and families to stay in touch without writing letters or traveling.",
          ],
          questions: [
            { text: "According to paragraph 1, what was a limitation of the telegraph?", options: ["It could not carry the human voice.", "It was too slow to send messages.", "It worked only in Europe.", "It required no electricity."], answer: 0 },
            { text: "According to paragraph 2, why did legal disputes arise?", options: ["Another inventor filed a similar application only hours after Bell.", "Bell stole a telephone from a museum.", "Bell refused to sell telephones.", "The government banned the telephone."], answer: 0 },
            { text: "Why did Antonio Meucci not obtain a full patent?", options: ["He could not afford to maintain it.", "He did not want one.", "His device did not work.", "He lived in Europe."], answer: 0 },
            { text: "The word \"doubted\" in paragraph 3 is closest in meaning to", options: ["were not sure about", "believed strongly", "remembered", "celebrated"], answer: 0 },
            { text: "According to paragraph 3, what did early telephone operators do?", options: ["connected calls by hand using switchboards", "repaired telephones", "sold telephones in shops", "wrote letters for customers"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Learning to play the drums",
          text: "When I was twelve, I decided to learn to play the dr{{ums}}. My parents were not very hap{{py}}, because drums are very lo{{ud}}! But they agreed, and I started taking les{{sons}} at a music school near our house. My teacher was a young man with long ha{{ir}}. He taught me how to hold the sti{{cks}} and keep a steady rhythm. At first, it was very diff{{icult}} to use my hands and feet at the same ti{{me}}. I practiced every day after sch{{ool}}. Now I play in a band with my frie{{nds}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Repair café",
          text: [
            "DON'T THROW IT AWAY, FIX IT!",
            "Bring your broken items to the Repair Café at the Community Center on the last Saturday of every month, from 10 a.m. to 1 p.m.",
            "Volunteer experts can help you fix clothes, bicycles, lamps, toys and small electronics. The service is free, but donations are welcome. Coffee and cake are available while you wait.",
          ],
          questions: [
            { text: "What can people do at the Repair Café?", options: ["get help fixing broken items", "buy new electronics", "sell old clothes", "learn to cook"], answer: 0 },
            { text: "How often is the Repair Café held?", options: ["on the last Saturday of every month", "every day", "every Sunday", "once a year"], answer: 0 },
            { text: "How much does the service cost?", options: ["It is free, but donations are welcome.", "$10 per item", "$5 per hour", "It depends on the item."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why dolphins jump out of the water",
          paragraphs: [
            "Dolphins are smart and playful animals that live in oceans all over the world. People often see them jumping high out of the water.",
            "One reason dolphins jump is to travel faster. Moving through air is easier than moving through water, so jumping helps them save energy when they swim quickly.",
            "Dolphins may also jump to look for food, such as groups of fish or birds diving into the sea. Sometimes they jump to communicate with other dolphins or to remove small animals from their skin. And sometimes, scientists think, dolphins jump simply because it is fun.",
          ],
          questions: [
            { text: "What kind of animals are dolphins?", options: ["smart and playful", "slow and shy", "dangerous and angry", "small and quiet"], answer: 0 },
            { text: "Why does jumping help dolphins travel faster?", options: ["Moving through air is easier than moving through water.", "Air is warmer than water.", "Jumping makes them heavier.", "Fish push them upward."], answer: 0 },
            { text: "What might dolphins look for when they jump?", options: ["food, such as groups of fish", "their nests", "land", "boats"], answer: 0 },
            { text: "The word \"communicate\" in paragraph 3 is closest in meaning to", options: ["share information", "fight", "eat", "sleep"], answer: 0 },
            { text: "According to scientists, what is another possible reason dolphins jump?", options: ["because it is fun", "because they are lost", "because they are sick", "because the water is too cold"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Benjamin Franklin effect",
          text: "It seems logical that we do favors for people we like. Surprisingly, the reverse may also be tr{{ue}}: doing a favor for someone can make us like them mo{{re}}. In his autobiography, Benjamin Franklin described how he won over a political ri{{val}}. Instead of trying to please the man, Franklin asked to borrow a rare bo{{ok}} from his library. The rival agreed, and afterward he became much friend{{lier}}. Psychologists suggest that people try to keep their actions and attitudes consis{{tent}}. If we help someone, we may unconsciously conclude that we must like th{{em}}, since otherwise we would not have helped. Some experi{{ments}} have supported this idea, although the effect seems to depend on the situ{{ation}} and on how the request is ma{{de}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Change to office hours",
          text: [
            "To: Students in Organic Chemistry 220",
            "From: Professor Demir",
            "Subject: Change to my office hours this semester",
            "Because of a scheduling conflict with a departmental committee, my office hours will move from Tuesday afternoons to Wednesday mornings from 10 a.m. to 12 p.m., starting next week. The location remains the same: Room 315 in the Chemistry Building.",
            "If you cannot attend during these hours, you may request an appointment by email at least two days in advance. I also encourage you to post general questions about course material on the online discussion board, where I and the teaching assistants respond regularly. Answers posted there may also help your classmates.",
          ],
          questions: [
            { text: "Why are the office hours changing?", options: ["because of a scheduling conflict with a committee", "because the office is moving", "because of student requests", "because the professor is on leave"], answer: 0 },
            { text: "What should students do if they cannot attend office hours?", options: ["request an appointment by email at least two days in advance", "visit at any time", "call the department", "wait until next semester"], answer: 0 },
            { text: "Why does the professor encourage students to use the discussion board?", options: ["Answers may also help classmates.", "Office hours are canceled.", "It is required for the grade.", "Emails will not be answered."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Citizen science",
          paragraphs: [
            "Citizen science refers to scientific research in which members of the public, rather than only professional scientists, take part in collecting or analyzing data. The idea is not new. For more than a century, volunteers in North America have counted birds during an annual winter census, and amateur astronomers have long made important observations of comets and variable stars. However, the internet and smartphones have greatly expanded the possibilities for public participation.",
            "Today, millions of people contribute to citizen science projects in fields ranging from ecology to medicine. Volunteers photograph plants and animals and upload the images to online databases, where experts and computer programs identify the species. Others classify galaxies in telescope images, transcribe handwritten historical records or measure local air and water quality. Because volunteers are spread across wide areas, they can gather information on a scale that would be impossible for small research teams. For example, data from citizen observers have helped scientists track how climate change is affecting the timing of bird migration and the flowering of plants.",
            "Citizen science also has limitations. Data collected by volunteers may be less consistent than data collected by trained researchers, and some regions, particularly wealthy and urban areas, tend to be overrepresented because more participants live there. Researchers address these problems by providing clear instructions, using statistical methods to correct for bias and checking samples of the data. Beyond its scientific value, citizen science can increase public understanding of science and encourage people to care about environmental issues in their own communities.",
          ],
          questions: [
            { text: "According to paragraph 1, what is citizen science?", options: ["research in which members of the public collect or analyze data", "science taught in schools", "research done only by governments", "science fiction written by citizens"], answer: 0 },
            { text: "According to paragraph 2, what is an advantage of using volunteers?", options: ["They can gather information on a very large scale.", "They are always more accurate than scientists.", "They do not need instructions.", "They work only in laboratories."], answer: 0 },
            { text: "The word \"transcribe\" in paragraph 2 is closest in meaning to", options: ["write out in another form", "destroy", "translate into images", "hide"], answer: 0 },
            { text: "According to paragraph 3, what is one limitation of citizen science?", options: ["Some regions are overrepresented.", "Volunteers are too few.", "It is extremely expensive.", "Scientists refuse to use the data."], answer: 0 },
            { text: "What benefit of citizen science beyond research is mentioned in paragraph 3?", options: ["It can increase public understanding of science.", "It makes volunteers rich.", "It replaces professional scientists.", "It reduces the need for schools."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Kaan", prompt: "Why are you wearing your best clothes?", chunks: ["I", "am going", "to", "my cousin's", "engagement party"], end: "." },
      { promptBy: "Lily", prompt: "Did you enjoy the museum tour?", chunks: ["the guide", "told us", "many", "interesting", "stories"], end: "." },
      { promptBy: "Elif", prompt: "I can't sleep before exams.", chunks: ["have you", "tried", "reading", "a book", "before bed"], end: "?" },
      { promptBy: "Ryan", prompt: "How did you get such good grades?", chunks: ["I", "studied", "a little", "every", "day"], end: "." },
      { promptBy: "Sena", prompt: "When does the next ferry leave?", chunks: ["it", "leaves", "in", "about", "twenty minutes"], end: "." },
      { promptBy: "Jack", prompt: "Why is the shop so crowded?", chunks: ["they", "are having", "a big", "sale", "this weekend"], end: "." },
      { promptBy: "Aylin", prompt: "What did you think of the novel?", chunks: ["the ending", "was", "sad but", "very", "beautiful"], end: "." },
      { promptBy: "Dan", prompt: "Where are you going after class?", chunks: ["I", "am meeting", "some friends", "at", "the park"], end: "." },
      { promptBy: "Nil", prompt: "I need to print my assignment.", chunks: ["do you", "know", "where", "the nearest", "printer is"], end: "?" },
      { promptBy: "Tom", prompt: "Why did you choose to study law?", chunks: ["I", "want to", "help people", "defend", "their rights"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You have been using a language learning app for six months and recently paid for a premium subscription. However, several premium features are not working. You want to contact the app's support team.",
      to: "the app support team",
      subject: "Premium features not working",
      tasks: ["Explain how long you have used the app and what you paid for.", "Describe the features that are not working.", "Say what you would like the company to do."],
      sample: "Dear Support Team,\n\nI have been using your language learning app to study Spanish for about six months, and I have generally been very happy with it. Two weeks ago, I upgraded to the premium annual subscription, which cost $79.99, mainly because I wanted access to the speaking practice and offline lessons.\n\nUnfortunately, several of the premium features are not working. The speaking exercises do not recognize my voice at all; even when I repeat the sentences clearly, the app marks every answer as incorrect. In addition, when I try to download lessons for offline use, the download stops at around fifty percent and then fails. I have tried reinstalling the app and restarting my phone, but the problems continue.\n\nI would be grateful if you could look into these problems and fix them as soon as possible. If they cannot be solved within the next two weeks, I would like a refund for the premium subscription. I have attached screenshots of the error messages for your reference.\n\nThank you for your help.\n\nBest regards,\nSelin Aktaş",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Health Policy",
      professor: {
        name: "Dr. Collins",
        text: "Some countries are considering banning the sale of energy drinks to people under eighteen. Supporters argue that these drinks contain high levels of caffeine and sugar that can harm young people's health and sleep. Opponents say that teenagers can still get caffeine from coffee and tea, and that education is more effective than bans. Should energy drinks be banned for people under eighteen? Explain your view.",
      },
      students: [
        { name: "Hannah", text: "Yes. Many teenagers drink several cans a day to stay awake for exams, and it affects their sleep and concentration. A ban would protect them." },
        { name: "Mert", text: "No. Teenagers can still drink strong coffee. It's better to teach them about the risks than to ban one product." },
      ],
      sample: "I support a ban on selling energy drinks to people under eighteen, combined with education about caffeine. Hannah is right that these drinks are heavily marketed to young people, often with images of sports and gaming, and many teenagers consume several cans a day, especially during exam periods. The combination of high caffeine and sugar can lead to poor sleep, anxiety and difficulty concentrating, which ironically harms the academic performance students are trying to improve. Mert makes a fair point that teenagers can still drink coffee, but coffee is usually not marketed to children in the same way, and people tend to drink it more slowly. A ban would send a clear message about the risks, while health education in schools could teach young people to manage their energy through sleep, exercise and better study habits.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new employee at a children's summer camp. The camp director is telling you what to say to parents and children.",
      sentences: [
        "Welcome to our summer camp.",
        "Please write your child's name on all their clothes.",
        "Lunch is served at twelve thirty.",
        "Children must wear a hat when playing outside.",
        "Mobile phones are not allowed during activities.",
        "If your child has any allergies, please tell the camp nurse on the first day.",
        "At the end of the week, we will have a small show where the children perform songs and dances, and all parents are invited to watch.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of childhood and growing up. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is one of your happiest childhood memories?",
          sample: "One of my happiest childhood memories is the summer I spent at my grandparents' house by the sea when I was about eight. Every morning, my grandfather took me fishing in his small boat, and in the afternoons I played on the beach with the neighbors' children. In the evenings, we ate dinner outside and listened to my grandmother's stories. I remember feeling completely free and happy that summer.",
        },
        {
          text: "Do you think children today have a better childhood than children in the past?",
          sample: "In some ways, yes. Children today generally have better healthcare, more educational opportunities and access to a huge amount of information online. However, I think they may have less freedom than children in the past. Many children spend most of their time indoors, either studying or using screens, and parents are often worried about letting them play outside alone. So I'd say childhood today is safer and more comfortable, but perhaps less adventurous.",
        },
        {
          text: "At what age should children be allowed to make their own decisions?",
          sample: "I think children should be allowed to make small decisions from a very young age, like choosing what to wear or which book to read. This helps them develop confidence and responsibility. As they grow older, they can make bigger decisions, such as how to spend their pocket money or which activities to join. By their mid-teens, they should have a say in important decisions, like their education, although parents should still guide them.",
        },
        {
          text: "What is the most important thing parents can teach their children?",
          sample: "I believe the most important thing parents can teach their children is kindness and respect for others. Academic skills and knowledge are important, but being able to treat people fairly, listen to others and help those in need makes a person a good member of society. Children learn these values mostly by watching how their parents behave, so parents need to set a good example in their daily lives.",
        },
      ],
    },
  },
};
