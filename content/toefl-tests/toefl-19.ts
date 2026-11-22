import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 19 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_19: ToeflTest = {
  id: "toefl-19",
  no: 19,
  title: "TOEFL iBT Practice Test 19",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Sundials",
          text: "Long before mechanical clocks were invented, people used sundials to te{{ll}} the time. A sundial has a flat surf{{ace}} marked with hours and a stick or bla{{de}} that casts a shadow. As the sun mov{{es}} across the sky, the shadow moves too and poi{{nts}} to the correct hour. The ancient Egyptians and Gre{{eks}} built large sundials in public pla{{ces}}. However, sundials only wor{{ked}} on sunny days, and they were use{{less}} at night, so people also used water clo{{cks}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a car",
          text: [
            "Hey Ozan, would it be OK if I borrowed your car on Saturday morning? I need to take some boxes to the post office.",
            "I'll fill up the tank and bring it back by 1 p.m. I can also give you a ride to the airport next week if you need one!",
          ],
          questions: [
            { text: "Why does the writer want to borrow the car?", options: ["to go on a trip", "to take boxes to the post office", "to pick someone up from the airport", "to go shopping"], answer: 1 },
            { text: "What does the writer offer in return?", options: ["to pay for repairs", "a ride to the airport next week", "to wash the car", "to buy lunch"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Elevator maintenance",
          text: [
            "WESTSIDE APARTMENTS – ELEVATOR MAINTENANCE",
            "The elevator will be out of service on Tuesday, May 7, from 8 a.m. to 4 p.m. while the cables are replaced.",
            "Residents who need help carrying heavy items or who have difficulty using the stairs should contact the building office by Monday so that assistance can be arranged. We apologize for the inconvenience.",
          ],
          questions: [
            { text: "Why will the elevator be out of service?", options: ["for cleaning", "for cable replacement", "because of a power cut", "for an inspection by the fire department"], answer: 1 },
            { text: "How long will the work last?", options: ["one hour", "four hours", "eight hours", "two days"], answer: 2 },
            { text: "Who should contact the building office?", options: ["all residents", "residents who need help with stairs or heavy items", "residents who want to complain", "new residents only"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why the Dead Sea is so salty",
          paragraphs: [
            "The Dead Sea, which lies between Jordan and Israel, is one of the saltiest bodies of water on Earth. Its water contains about ten times as much salt as ordinary seawater, so much that swimmers float on the surface without effort and almost nothing can live in it apart from certain microorganisms, which is how the lake got its name.",
            "The reason for its extreme saltiness lies in its location. The Dead Sea occupies the lowest point on land, more than four hundred meters below sea level, at the bottom of a deep valley. Water flows into it, mainly from the Jordan River, but there is no outlet through which water can flow out. In the region's hot, dry climate, water evaporates rapidly from the surface, leaving behind the minerals that were dissolved in it. Over thousands of years, these minerals have become highly concentrated.",
            "In recent decades, the Dead Sea has been shrinking rapidly, its surface falling by about a meter each year. Much of the water that once flowed into it from the Jordan River is now diverted for drinking and agriculture, and the mineral industry evaporates seawater in large ponds to extract chemicals. As the water retreats, thousands of sinkholes have opened along the shore, damaging roads and farmland. Several plans to bring water from the Red Sea have been proposed, but none has yet been completed.",
          ],
          questions: [
            { text: "According to paragraph 1, why is it called the Dead Sea?", options: ["It is very old.", "Almost nothing can live in it.", "It never moves.", "It is surrounded by desert."], answer: 1 },
            { text: "The word \"concentrated\" in paragraph 2 is closest in meaning to", options: ["dense", "scattered", "clean", "frozen"], answer: 0 },
            { text: "According to paragraph 2, why has salt built up in the Dead Sea?", options: ["Salt is added by factories.", "Water flows in but has no outlet and evaporates.", "The sea is connected to the ocean.", "It rains salt in the region."], answer: 1 },
            { text: "What is one reason the Dead Sea is shrinking?", options: ["Water from the Jordan River is diverted.", "It is getting colder.", "More rain falls in the region.", "Its outlet has become larger."], answer: 0 },
            { text: "What problem has been caused by the retreating water?", options: ["floods in nearby towns", "sinkholes along the shore", "an increase in fish", "higher salt in the Red Sea"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A school trip to the mountains",
          text: "In spring, our class went on a trip to the moun{{tains}}. We traveled by bus for three ho{{urs}}. When we arrived, our teacher gave us a ma{{p}}, and we walked along a forest pa{{th}}. We saw a small lake and many bir{{ds}}. At lunchtime, we sat on the gr{{ass}} and ate sandwiches. In the afternoon, it star{{ted}} to rain, so we went back to the b{{us}}. Everyone was tired, but we all had a won{{derful}} d{{ay}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Bike repair workshop",
          text: [
            "FREE BIKE REPAIR WORKSHOP",
            "Learn how to fix a flat tire, adjust your brakes and keep your chain clean. The workshop is on Saturday, April 12, from 10 a.m. to noon, behind the student center.",
            "Bring your own bike. Tools are provided. Places are limited to 15 people, so please sign up online by Thursday.",
          ],
          questions: [
            { text: "What will people learn at the workshop?", options: ["how to ride safely in traffic", "how to fix and maintain their bikes", "how to build a bike", "how to choose a new bike"], answer: 1 },
            { text: "What should participants bring?", options: ["their own tools", "their own bike", "a helmet", "a new tire"], answer: 1 },
            { text: "By when must people sign up?", options: ["Monday", "Wednesday", "Thursday", "Saturday"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "Why the ocean has tides",
          paragraphs: [
            "Along most coasts, the level of the sea rises and falls about twice a day. These regular changes are called tides.",
            "Tides are caused mainly by the Moon. The Moon's gravity pulls on the Earth's oceans, making the water bulge out on the side of the Earth facing the Moon. A second bulge forms on the opposite side.",
            "As the Earth turns, coasts pass through these bulges, so the water rises to high tide and then falls to low tide. The Sun also affects tides. When the Sun and Moon line up, the tides are especially high and low.",
          ],
          questions: [
            { text: "How often does the sea level usually rise and fall?", options: ["once a week", "about twice a day", "once a month", "every hour"], answer: 1 },
            { text: "What mainly causes tides?", options: ["the wind", "the Moon", "rivers", "earthquakes"], answer: 1 },
            { text: "The word \"bulge\" in paragraph 2 is closest in meaning to", options: ["swell outward", "become calm", "freeze", "disappear"], answer: 0 },
            { text: "Where does the second bulge form?", options: ["on the side facing the Moon", "on the opposite side of the Earth", "near the poles", "in large lakes"], answer: 1 },
            { text: "When are tides especially high and low?", options: ["when the Sun and Moon line up", "in winter", "at night", "when it rains"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Anchoring",
          text: "When people make estimates, they are often influenced by numbers they have recently encoun{{tered}}, even when those numbers are clearly irrele{{vant}}. In a well-known experi{{ment}}, participants who first spun a wheel that stopped at a high num{{ber}} later gave higher estimates of the percen{{tage}} of African countries in the United Nations than those whose wheel stopped low. This tend{{ency}}, called anchoring, affects many real deci{{sions}}, such as negotiations over sala{{ries}} and the prices people are willing to pay, which is why sellers often begin with a high fir{{st}} off{{er}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "New course evaluation system",
          text: [
            "To: All students",
            "From: Office of Academic Quality",
            "Subject: Course evaluations – new online system",
            "This semester, course evaluations will be completed through a new online system instead of on paper forms in class. You will receive a link by email for each of your courses two weeks before the end of the semester, and the system will remain open until the last day of exams.",
            "All responses are anonymous; instructors will see only summary results, and only after final grades have been submitted. Students who complete evaluations for all their courses will be able to see their final grades three days earlier than other students. Your feedback is used to improve teaching and course design.",
          ],
          questions: [
            { text: "How will students complete evaluations this semester?", options: ["on paper in class", "through a new online system", "in meetings with instructors", "by phone"], answer: 1 },
            { text: "When can instructors see the results?", options: ["immediately", "only after final grades have been submitted", "before the last day of classes", "never"], answer: 1 },
            { text: "What benefit do students receive for completing all evaluations?", options: ["extra credit", "earlier access to final grades", "a discount on books", "priority registration"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The rise of container shipping",
          paragraphs: [
            "Until the 1950s, loading and unloading a cargo ship was slow, costly and labor-intensive. Goods arrived at ports in sacks, barrels, crates and bundles of every shape and size, and teams of dockworkers had to lift them individually into the ship's hold. A large vessel could spend a week or more in port, and theft and damage were common. Loading costs often made up a large share of the total cost of transporting goods across the ocean.",
            "In 1956, an American trucking businessman named Malcolm McLean shipped fifty-eight metal truck containers from New Jersey to Texas on a converted oil tanker. His idea was simple: instead of handling individual items, goods would be packed into standard-sized steel boxes that could be moved directly between trucks, trains and ships by cranes. The containers did not need to be opened during the journey, which reduced theft and allowed ships to be loaded in hours rather than days.",
            "The system spread slowly at first, because ports, ships and railways needed expensive new equipment and agreement on standard sizes, which was reached internationally in the late 1960s. Once these standards were in place, however, the cost of shipping fell dramatically. Economists argue that containerization did more to increase world trade in the late twentieth century than many trade agreements, making it possible for companies to produce goods in one country and sell them cheaply in another. It also transformed port cities, as large, automated container terminals replaced the crowded docks of the past and employed far fewer workers.",
          ],
          questions: [
            { text: "According to paragraph 1, what was a problem with shipping before the 1950s?", options: ["Ships were too fast.", "Loading was slow and costly.", "Goods were never damaged.", "Ports were too small for ships."], answer: 1 },
            { text: "The word \"converted\" in paragraph 2 is closest in meaning to", options: ["changed", "destroyed", "rented", "built"], answer: 0 },
            { text: "According to paragraph 2, why did containers reduce theft?", options: ["They were guarded by police.", "They did not need to be opened during the journey.", "They were made of glass.", "They were too heavy to lift."], answer: 1 },
            { text: "Why did the system spread slowly at first?", options: ["People did not trust McLean.", "New equipment and agreement on standard sizes were needed.", "Containers were too expensive to build.", "Governments banned containers."], answer: 1 },
            { text: "According to paragraph 3, how did containerization affect port cities?", options: ["Docks employed more workers.", "Automated terminals replaced crowded docks and employed fewer workers.", "Port cities became smaller.", "Ships stopped visiting them."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Sinem", prompt: "Why are you so happy today?", chunks: ["I", "got", "an A", "on my", "chemistry exam"], end: "." },
      { promptBy: "Brian", prompt: "Have you heard about the new café?", chunks: ["my friends", "said", "the coffee", "is", "really good"], end: "." },
      { promptBy: "Merve", prompt: "I feel stressed about my exams.", chunks: ["why don't", "you", "take", "a short break", "and go for a walk"], end: "?" },
      { promptBy: "Kevin", prompt: "Where did you put the printer paper?", chunks: ["it is", "in", "the cabinet", "under", "the window"], end: "." },
      { promptBy: "Aslı", prompt: "How did you hear about the internship?", chunks: ["my professor", "told me", "about it", "after", "class"], end: "." },
      { promptBy: "Rob", prompt: "Why are the lights flickering?", chunks: ["there", "might be", "a problem", "with", "the wiring"], end: "." },
      { promptBy: "Ceren", prompt: "Is it far to the train station?", chunks: ["it", "takes", "about", "ten minutes", "on foot"], end: "." },
      { promptBy: "Tim", prompt: "What did you do last weekend?", chunks: ["I", "went", "hiking", "with", "some friends"], end: "." },
      { promptBy: "Gamze", prompt: "This assignment is very confusing.", chunks: ["should", "we", "ask", "the teaching assistant", "for help"], end: "?" },
      { promptBy: "Andrew", prompt: "Why did you move to a new apartment?", chunks: ["the old one", "was", "too far", "from", "the university"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You live in a shared apartment, and the landlord has announced that the rent will increase by 20 percent next month. You and your roommates think this increase is too high.",
      to: "your landlord, Mr. Peterson",
      subject: "The planned rent increase",
      tasks: ["Explain why you are writing.", "Give reasons why you think the increase is too high.", "Suggest a solution or ask for a meeting."],
      sample: "Dear Mr. Peterson,\n\nI am writing on behalf of myself and my three roommates in Apartment 4B regarding your letter about the rent increase. We understand that costs have risen this year, but we were surprised to learn that the rent will increase by 20 percent from next month.\n\nWe feel that this increase is too high for several reasons. First, we are all students with limited incomes, and such a large increase would be very difficult for us to manage in the middle of the academic year. Second, there have been some ongoing problems in the apartment, including a leaking bathroom tap and a broken heater, which have not yet been repaired. Finally, similar apartments in the neighborhood are currently being rented for less.\n\nWe would like to continue living in the apartment and would be happy to discuss a smaller increase, perhaps around 8 percent. Would it be possible to meet next week to talk about this?\n\nThank you for your consideration.\n\nYours sincerely,\nBaran Çelik",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Public Health",
      professor: {
        name: "Dr. Ahmed",
        text: "Many workplaces now offer standing desks, fitness programs or free gym memberships to encourage employees to be more active. Some people think employers have a responsibility to support their employees' health. Others believe health is a personal matter and that employers should not be involved. Should employers take an active role in promoting their employees' health? Why or why not?",
      },
      students: [
        { name: "Laura", text: "Yes. People spend most of their day at work, often sitting for hours. Employers benefit too, because healthy employees take fewer sick days and are more productive." },
        { name: "Cem", text: "I think it should be the individual's choice. Some programs feel like pressure, and employers might start monitoring people's private habits, which isn't appropriate." },
      ],
      sample: "I believe employers should support their employees' health, but in a way that respects personal choice. Laura makes a strong point: because work shapes so much of our daily routine, employers are in a good position to make healthy choices easier. Simple measures, such as standing desks, healthy food in the canteen or flexible hours that allow people to exercise, benefit everyone without forcing anyone. My father's company introduced free yoga sessions at lunchtime, and many of his colleagues say they feel less stressed. However, Cem is right that there is a line employers should not cross. Collecting data on employees' weight or exercise, or linking health programs to promotions, would be intrusive. The best approach is to offer opportunities and resources while leaving the decision to each individual.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-JennyNeural",
    repeat: {
      scene: "You are working at the entrance of a science museum. The museum manager is telling you what to say to visitors.",
      sentences: [
        "Good morning and welcome.",
        "Tickets can be bought at the desk.",
        "The planetarium show starts at eleven.",
        "Please do not touch the exhibits marked with a red sign.",
        "Children can try hands-on experiments on the second floor.",
        "The gift shop and café are located next to the main exit on the ground floor.",
        "If you would like to join a free guided tour, please wait near the dinosaur skeleton in the main hall at two o'clock.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's relationships with friends and family. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe a close friend of yours. Why are you good friends?",
          sample: "My closest friend is Ayça, whom I've known since primary school. We became friends because we sat next to each other in class and discovered we both loved drawing. Over the years, we've supported each other through many changes, including moving to different cities for university. I think we're good friends because we're honest with each other, even when it's difficult, and we always make time to talk, even when we're both very busy.",
        },
        {
          text: "Is it easier to make friends at school or at university? Why?",
          sample: "I think it's easier to make friends at school, because you see the same classmates every day for years, so friendships develop naturally. At university, classes change every semester, and people have different schedules, so you have to make more effort. However, university has advantages too, like clubs and societies where you can meet people who share your interests. So making friends at university is possible, but it requires taking the first step.",
        },
        {
          text: "Some people say that online friendships are as valuable as face-to-face friendships. Do you agree?",
          sample: "I partly agree. I have a friend I met through an online language exchange, and we've had very meaningful conversations, even though we've never met. Online friendships can be valuable, especially for people who feel isolated or share unusual interests. However, I think face-to-face friendships offer something extra. Being physically present when someone is sick or celebrating creates a deeper kind of support that is hard to replace with messages or video calls.",
        },
        {
          text: "How do you think family relationships have changed compared with your grandparents' generation?",
          sample: "I think families have become smaller and more spread out. In my grandparents' time, several generations often lived in the same house or neighborhood and saw each other every day. Now, people move to other cities or countries for work and study, so they see their relatives less often. On the other hand, relationships between parents and children seem more open now. My parents talk to me more like a friend, whereas my grandparents' relationship with their parents was much more formal.",
        },
      ],
    },
  },
};
