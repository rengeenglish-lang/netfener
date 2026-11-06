import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 2 (2026 format). Original Netfener content. */
export const TOEFL_2: ToeflTest = {
  id: "toefl-2",
  no: 2,
  title: "TOEFL iBT Practice Test 2",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The spread of coffee",
          text: "Coffee is one of the most widely traded products in the world. It prob{{ably}} originated in Ethiopia, where people may have chewed the be{{ans}} for energy. By the fifteenth cen{{tury}}, coffee was being brewed in Yemen, and from there it spr{{ead}} to Cairo and Istanbul. Coffee ho{{uses}} soon became popular pla{{ces}} for conversation and bus{{iness}}. Today, Brazil grows more cof{{fee}} than any other cou{{ntry}}, producing about a th{{ird}} of the global supply.",
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Fitness center",
          text: [
            "CAMPUS FITNESS CENTER",
            "From October 1, students must scan their ID card at the entrance. Guests are welcome on weekends only and must be signed in by a student member.",
            "Lockers are for daytime use. Any items left in lockers after closing time will be removed and taken to the front desk.",
          ],
          questions: [
            { text: "When can students bring a guest to the fitness center?", options: ["any day before closing time", "only on Saturdays and Sundays", "only after October 1", "only with a staff member"], answer: 1 },
            { text: "What happens to items left in a locker overnight?", options: ["They are thrown away.", "They are given to charity.", "They are taken to the front desk.", "They stay in the locker until collected."], answer: 2 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Class moved online",
          text: [
            "To: Students in History 210",
            "From: Professor Grant",
            "Subject: Thursday's class",
            "Dear all,",
            "Because the building will be closed for electrical repairs on Thursday, our class will meet online instead, at the usual time. You will find the video link on the course page by Wednesday evening.",
            "Please note that the short quiz planned for Thursday will now take place next Tuesday, in our usual classroom. The reading for Thursday has not changed.",
            "Best wishes,\nProfessor Grant",
          ],
          questions: [
            { text: "Why will Thursday's class take place online?", options: ["The professor is traveling.", "The building will be closed for repairs.", "The classroom is too small.", "Students asked for an online class."], answer: 1 },
            { text: "Where will students find the video link?", options: ["in an email on Thursday morning", "on the course page", "on the classroom door", "in the course textbook"], answer: 1 },
            { text: "What is true about the quiz?", options: ["It has been canceled.", "It will be taken online.", "It will be given next Tuesday.", "It will cover new reading."], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "When the Sahara was green",
          paragraphs: [
            "Today the Sahara is the largest hot desert on Earth, but it has not always been dry. Between roughly 11,000 and 5,000 years ago, much of North Africa was covered by grassland, lakes and rivers. Scientists call this period the African Humid Period.",
            "Evidence for this wetter past comes from several sources. Layers of mud at the bottom of former lakes contain fossil pollen from grasses and trees. Archaeologists have also found rock paintings deep in the desert that show giraffes, cattle and people swimming, activities that would be impossible in the region today.",
            "The main cause of the change appears to be a slow wobble in the Earth's orbit. About 10,000 years ago, this wobble meant that the Northern Hemisphere received more sunlight in summer, which strengthened the monsoon rains that reach Africa from the ocean. As the orbit gradually shifted, the rains weakened. Vegetation, which helps to recycle moisture into the air, began to disappear, and this loss may have made the drying happen even faster.",
          ],
          questions: [
            { text: "What is the passage mainly about?", options: ["why the Sahara is the largest desert", "evidence for and causes of a wetter Sahara in the past", "how people crossed the Sahara", "the animals that live in the Sahara today"], answer: 1 },
            { text: "The word \"former\" in paragraph 2 is closest in meaning to", options: ["deep", "earlier", "large", "frozen"], answer: 1 },
            { text: "Why does the author mention rock paintings?", options: ["to show that people in the region were skilled artists", "to provide evidence that the region was once much wetter", "to explain how giraffes reached Africa", "to describe modern desert life"], answer: 1 },
            { text: "According to paragraph 3, what strengthened the monsoon rains about 10,000 years ago?", options: ["more summer sunlight in the Northern Hemisphere", "an increase in the number of lakes", "colder ocean temperatures", "the spread of forests"], answer: 0 },
            { text: "What does paragraph 3 suggest about vegetation?", options: ["It had no effect on rainfall.", "Its loss may have sped up the drying of the region.", "It returned when the orbit shifted.", "It caused the orbit to change."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Taking the bus",
          text: "In many cities, buses are the cheapest way to travel. A bus can car{{ry}} many people at once, so it hel{{ps}} reduce traffic on busy ro{{ads}}. Most buses follow a fixed rou{{te}} and stop at the same pla{{ces}} every day. Passengers can often che{{ck}} the times on their pho{{nes}}. Some cit{{ies}} now use electric bus{{es}}, which are qui{{eter}} and cleaner.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Room for rent",
          text: [
            "ROOM AVAILABLE – 10 MINUTES FROM CAMPUS",
            "Bright single room in a shared house with two other students. Rent: $550 a month, including internet and electricity. Shared kitchen and bathroom. No pets. Available from January 5.",
            "Call or text Lena on 555-0148. Viewings on weekday evenings only.",
          ],
          questions: [
            { text: "What is included in the rent?", options: ["internet and electricity", "a private bathroom", "meals", "parking"], answer: 0 },
            { text: "When can the room be viewed?", options: ["on weekend mornings", "on weekday evenings", "any time", "only on January 5"], answer: 1 },
            { text: "Who would not be allowed to rent the room?", options: ["a student", "someone with a dog", "someone without a car", "someone who cooks"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why leaves change color",
          paragraphs: [
            "In autumn, the leaves of many trees turn yellow, orange and red. During spring and summer, leaves are green because they contain chlorophyll, a substance that plants use to make food from sunlight.",
            "As the days get shorter and colder, trees stop making chlorophyll. The green color slowly disappears, and other colors that were in the leaf all along, such as yellow and orange, can finally be seen. Red colors are different. They are made by new substances that some trees produce in autumn.",
            "The weather affects how bright the colors are. Sunny days and cool nights usually produce the most colorful autumns. After the leaves change color, they fall, and the tree rests through the winter.",
          ],
          questions: [
            { text: "Why are leaves green in summer?", options: ["because they contain chlorophyll", "because the weather is warm", "because of red substances", "because they are young"], answer: 0 },
            { text: "The word \"slowly\" in paragraph 2 is closest in meaning to", options: ["suddenly", "gradually", "completely", "rarely"], answer: 1 },
            { text: "According to paragraph 2, why do yellow and orange colors appear in autumn?", options: ["Trees make them when it gets cold.", "They become visible when the green disappears.", "They come from the soil.", "Sunlight changes the leaves."], answer: 1 },
            { text: "How are red colors different from yellow and orange?", options: ["They are produced by new substances in autumn.", "They are always in the leaf.", "They appear only in spring.", "They come from chlorophyll."], answer: 0 },
            { text: "What weather produces the brightest autumn colors?", options: ["rainy days and warm nights", "sunny days and cool nights", "cloudy days and cold nights", "windy days and warm nights"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Antibiotic resistance",
          text: "The discovery of antibiotics transformed modern medicine. However, bacteria can evo{{lve}} quickly, and strains that sur{{vive}} treatment pass their resis{{tance}} to later generations. The overuse of antibi{{otics}}, both in human medi{{cine}} and in agriculture, has accel{{erated}} this process. As a res{{ult}}, some infections that were once eas{{ily}} cured have become diff{{icult}} to treat, prompting urgent cal{{ls}} for new drugs.",
        },
        {
          kind: "daily-life",
          genre: "Policy",
          title: "Travel grant rules",
          text: [
            "GRADUATE TRAVEL GRANTS",
            "Grants of up to $800 are available to graduate students presenting their own research at an academic conference. Applications must be submitted at least six weeks before the conference and must include a letter of support from the student's advisor.",
            "Students may receive one grant per academic year. Funds are paid after travel, upon submission of original receipts within 30 days of returning. Grants cannot be used for conference registration fees, which are covered separately by each department.",
          ],
          questions: [
            { text: "Which student would be eligible for a grant?", options: ["an undergraduate attending a conference", "a graduate student presenting her own research", "a graduate student attending a conference as a listener", "a professor presenting research"], answer: 1 },
            { text: "When are grant funds paid?", options: ["six weeks before the conference", "when the application is approved", "after the student submits receipts following the trip", "at the start of the academic year"], answer: 2 },
            { text: "What can be inferred about conference registration fees?", options: ["They are paid by the student's department.", "They are included in the $800 grant.", "They must be paid by the advisor.", "They are refunded after 30 days."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Trade along the Silk Road",
          paragraphs: [
            "The term \"Silk Road\" suggests a single highway along which merchants carried silk from China to Rome. In reality, it was a shifting network of land and sea routes that, at its height, connected East Asia with the Mediterranean world. Few traders ever traveled its entire length; instead, goods typically passed through the hands of many intermediaries, each covering a relatively short stage of the journey.",
            "This relay system had important economic consequences. Because each intermediary added a profit, goods became dramatically more expensive the farther they traveled. Silk that was relatively affordable in China could be worth many times its weight in silver by the time it reached Roman markets. Luxury goods that were light and valuable, such as silk, spices and precious stones, were therefore the items most worth transporting over such distances.",
            "Historians increasingly emphasize that the network's most lasting effects were not commercial at all. Along with goods traveled religions, technologies and ideas. Buddhism spread from India into Central and East Asia along these routes, and techniques such as papermaking eventually moved westward. The Silk Road, in other words, was as much a channel for cultural exchange as it was a marketplace.",
          ],
          questions: [
            { text: "According to paragraph 1, what is misleading about the term \"Silk Road\"?", options: ["It suggests that silk was not traded.", "It implies a single route rather than a network.", "It ignores trade with Rome.", "It refers only to sea routes."], answer: 1 },
            { text: "The word \"intermediaries\" in paragraph 1 is closest in meaning to", options: ["customers", "go-betweens", "rulers", "producers"], answer: 1 },
            { text: "According to paragraph 2, why did goods become more expensive as they traveled?", options: ["Taxes were higher in Rome.", "Each trader along the way added a profit.", "Silk became rarer over time.", "Transport by sea was costly."], answer: 1 },
            { text: "Why does the author mention papermaking in paragraph 3?", options: ["to show that technology also spread along the routes", "to explain how merchants kept records", "to argue that paper was more valuable than silk", "to describe a product made in Rome"], answer: 0 },
            { text: "Which statement best reflects the author's view?", options: ["The Silk Road mattered mainly for its luxury trade.", "The Silk Road's cultural effects were at least as important as its trade.", "Few goods actually traveled on the Silk Road.", "The Silk Road had little effect on religion."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= LISTENING =================
  listening: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        { kind: "choose-response", voice: "en-US-AvaNeural", line: "Where's the best place to buy a used bicycle around here?", options: ["Try the market on Saturday mornings.", "I ride it every day.", "It's about fifty dollars.", "Yes, it's a used one."], answer: 0 },
        { kind: "choose-response", voice: "en-US-TonyNeural", line: "Did you understand the instructions for the lab report?", options: ["The lab is on the third floor.", "Not really. Shall we ask the teaching assistant?", "I reported it yesterday.", "They're very long instructions."], answer: 1 },
        { kind: "choose-response", voice: "en-US-NancyNeural", line: "How long does it take to get to the airport from here?", options: ["The airport is very modern.", "I flew there last month.", "About forty minutes by train.", "Twice a week."], answer: 2 },
        { kind: "choose-response", voice: "en-US-JasonNeural", line: "Are you coming to the welcome party on Friday?", options: ["The party was great.", "I'm welcome, thanks.", "Friday is a holiday.", "I'll be there, but a little late."], answer: 3 },
        { kind: "choose-response", voice: "en-US-SaraNeural", line: "Could you lend me a pen? Mine just ran out.", options: ["Of course. Here you go.", "I ran this morning.", "It's a blue pen.", "I lent it to the library."], answer: 0 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "Why are you studying in the cafeteria instead of the library?", options: ["I like the library's books.", "The library is too quiet for me, actually.", "I studied for two hours.", "Because it's lunchtime at noon."], answer: 1 },
        { kind: "choose-response", voice: "en-US-MichelleNeural", line: "Has anyone signed up for the volunteer program yet?", options: ["The program lasts a month.", "I volunteered last summer.", "About twenty people so far.", "Sign here, please."], answer: 2 },
        { kind: "choose-response", voice: "en-US-BrianNeural", line: "I think I left my umbrella in the classroom.", options: ["It isn't raining much.", "The classroom is upstairs.", "I bought it on sale.", "Let's go back and check before it's locked."], answer: 3 },
        {
          kind: "conversation",
          title: "A missed quiz",
          cast: { A: "en-US-RogerNeural", B: "en-US-JennyNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and her professor.", pause: 1 },
            { who: "B", text: "Professor Klein, I'm sorry to bother you. I missed Monday's quiz because I was sick, and I was wondering if I could take it another time." },
            { who: "A", text: "I'm sorry to hear you were ill. Do you have a note from the health center?" },
            { who: "B", text: "Yes, I brought it with me. Here." },
            { who: "A", text: "Thank you. Well, I don't usually give the same quiz twice, because other students have already discussed the answers. But you can take a different version during my office hours on Thursday. It covers the same chapter." },
            { who: "B", text: "Thursday afternoon would be perfect. Should I bring anything?" },
            { who: "A", text: "Just a pencil. And since you missed the lecture too, you might want to borrow someone's notes before then." },
          ],
          questions: [
            { text: "Why does the student go to see the professor?", options: ["to ask about a grade", "to arrange to take a quiz she missed", "to return a library book", "to discuss a group project"], answer: 1 },
            { text: "Why won't the professor give the student the same quiz?", options: ["It was too easy.", "Other students have already discussed the answers.", "It covered the wrong chapter.", "She lost the original quiz."], answer: 1 },
          ],
        },
        {
          kind: "announcement",
          title: "Bike-share program",
          cast: { A: "en-US-AndrewNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Good morning, everyone. We're pleased to announce that the new campus bike-share program starts this Monday. There are now one hundred bikes at ten stations around campus, including outside the library and both dining halls. Students can use the bikes free of charge for up to thirty minutes per ride. To get started, simply download the campus app and link it to your student account. Helmets aren't provided, so please bring your own. And remember to return bikes to any station when you're finished, so they're available for others." },
          ],
          questions: [
            { text: "What is the announcement mainly about?", options: ["a new bike-share program", "a cycling competition", "changes to parking rules", "a new dining hall"], answer: 0 },
            { text: "What must students do to use the bikes?", options: ["pay a monthly fee", "download an app and link their account", "borrow a helmet from the library", "register at a dining hall"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Paint tubes and Impressionism",
          cast: { A: "en-US-ElizabethNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an art history class.", pause: 1 },
            { who: "A", text: "When we talk about Impressionism, we usually focus on the artists themselves, Monet, Renoir and so on. But today I want to talk about a small invention that made their work possible: the paint tube." },
            { who: "A", text: "Before the 1840s, painters had to mix their own paints from powdered pigments and oil, and the paint dried quickly once it was made. It was usually stored in small bags made from pig bladders, which were messy and easily burst. So most painting was done indoors, in the studio." },
            { who: "A", text: "In 1841, an American painter named John Rand invented a collapsible metal tube that could be sealed with a cap. Paint stayed fresh much longer, and it was easy to carry. Suddenly, artists could take a full set of colors outside and paint directly in front of their subject." },
            { who: "A", text: "That's exactly what the Impressionists did. They wanted to capture how light changed at different times of day, which really required painting outdoors, and quickly. Renoir is reported to have said that without paint tubes there would have been no Impressionism. That may be an exaggeration, but it shows how technology can shape an entire artistic movement." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["the life of Claude Monet", "how an invention influenced Impressionist painting", "how pigments are made", "the history of art studios"], answer: 1 },
            { text: "What was a problem with storing paint before the 1840s?", options: ["The containers were messy and burst easily.", "Paint was too expensive to buy.", "Paint could only be made outdoors.", "The colors were too bright."], answer: 0 },
            { text: "Why did the Impressionists need to paint outdoors?", options: ["Their studios were too small.", "They wanted to capture changing light.", "Outdoor paint was cheaper.", "Their teachers required it."], answer: 1 },
            { text: "What does the professor imply about Renoir's statement?", options: ["It is completely accurate.", "It may overstate the role of paint tubes.", "Renoir never said it.", "It refers to a different invention."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-CoraNeural", line: "Is there a pharmacy near the campus?", options: ["Yes, there's one across the street.", "I need some medicine.", "The campus is very big.", "It opens at nine."], answer: 0 },
        { kind: "choose-response", voice: "en-US-JacobNeural", line: "What did you have for lunch?", options: ["At twelve thirty.", "Just a salad and some soup.", "In the cafeteria.", "I'm not hungry yet."], answer: 1 },
        { kind: "choose-response", voice: "en-US-AshleyNeural", line: "Can you help me move this table?", options: ["It's a wooden table.", "I moved last year.", "Sure, which end should I take?", "The table is in the kitchen."], answer: 2 },
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "When is the essay due?", options: ["It's about climate change.", "Next Monday, I think.", "Two thousand words.", "I'm due at the dentist."], answer: 1 },
        { kind: "choose-response", voice: "en-US-JaneNeural", line: "Would you like some coffee?", options: ["No, thanks. I just had some.", "It's from Brazil.", "I like the café.", "At seven in the morning."], answer: 0 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "Whose jacket is this?", options: ["It's very warm.", "I bought it yesterday.", "On the chair.", "I think it's Mark's."], answer: 3 },
        {
          kind: "conversation",
          title: "At the campus bookstore",
          cast: { A: "en-US-MonicaNeural", B: "en-US-BrandonNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a clerk at the campus bookstore.", pause: 1 },
            { who: "B", text: "Hi. I'm looking for the textbook for Biology 101, but I can't find it on the shelf." },
            { who: "A", text: "Let me check. Oh, we've sold out of new copies, I'm afraid. More will arrive next Wednesday." },
            { who: "B", text: "Next Wednesday? My first reading is due on Monday." },
            { who: "A", text: "We do have two used copies left. They're about thirty percent cheaper, and they're in good condition." },
            { who: "B", text: "Great, I'll take a used one, then." },
          ],
          questions: [
            { text: "What is the student's problem?", options: ["He has the wrong textbook.", "The new textbook is sold out.", "He lost his textbook.", "The bookstore is closed."], answer: 1 },
            { text: "What does the student decide to do?", options: ["wait until Wednesday", "buy a used copy", "borrow a friend's book", "buy the book online"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Why we yawn",
          cast: { A: "en-US-ChristopherNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a psychology class.", pause: 1 },
            { who: "A", text: "Everyone yawns, but scientists still aren't sure exactly why. For a long time, people believed that we yawn because our bodies need more oxygen. However, experiments have shown that breathing extra oxygen doesn't make people yawn less, so that idea is probably wrong." },
            { who: "A", text: "A newer idea is that yawning helps to cool the brain. When we yawn, we take in a large amount of air, which may lower the temperature of the blood going to the brain. This could help us stay alert when we're tired or bored." },
            { who: "A", text: "Yawning is also contagious. If you see someone yawn, you're likely to yawn too. Interestingly, people are more likely to catch a yawn from friends and family than from strangers, which suggests yawning may be connected to how we feel about other people." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["why people sleep", "possible reasons for yawning", "how the brain uses oxygen", "how to stop yawning"], answer: 1 },
            { text: "What did experiments show about the oxygen idea?", options: ["It is probably wrong.", "It is completely correct.", "It applies only to children.", "It explains contagious yawning."], answer: 0 },
            { text: "According to the newer idea, how might yawning help us?", options: ["by cooling the brain", "by warming the body", "by helping us sleep", "by making us hungry"], answer: 0 },
            { text: "Who are people most likely to catch a yawn from?", options: ["strangers", "friends and family", "teachers", "animals"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "I was under the impression that the seminar had been canceled.", options: ["No, it's just been moved to a bigger room.", "I was very impressed by the seminar.", "The seminar is on economics.", "It was canceled last year too."], answer: 0 },
        { kind: "choose-response", voice: "en-US-AmberNeural", line: "Wouldn't it make more sense to finish the survey before writing the introduction?", options: ["The introduction is two pages.", "You're right. Let's reorganize our plan.", "I surveyed fifty people.", "It makes sense to me now."], answer: 1 },
        { kind: "choose-response", voice: "en-US-RogerNeural", line: "Do you happen to know whether the dean approved our proposal?", options: ["The dean's office is closed today.", "We proposed it in March.", "I haven't heard anything either way.", "Yes, I know the dean."], answer: 2 },
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "I'm surprised you're taking an eight a.m. class this semester.", options: ["I'm taking five classes.", "The class is in the science building.", "It surprised me too.", "It was the only section that fit my schedule."], answer: 3 },
        { kind: "choose-response", voice: "en-US-KaiNeural", line: "You should really have the bike's brakes checked before the trip.", options: ["Good point. I'll take it to the shop tomorrow.", "The trip is next week.", "I checked out a book.", "It's a mountain bike."], answer: 0 },
        { kind: "choose-response", voice: "en-US-LunaNeural", line: "Didn't the library used to stay open later during exams?", options: ["I study at the library.", "It did, but they changed the policy this year.", "Exams start in December.", "It's later than I thought."], answer: 1 },
        {
          kind: "conversation",
          title: "A research assistant position",
          cast: { A: "en-US-NancyNeural", B: "en-US-AndrewNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a laboratory coordinator.", pause: 1 },
            { who: "B", text: "Hi, I saw the posting for a research assistant in the psychology lab, and I wanted to ask a few questions before I apply." },
            { who: "A", text: "Sure. The position is ten hours a week, mostly helping with a study on sleep and memory. You'd be scheduling participants and running some of the sessions." },
            { who: "B", text: "That sounds interesting. The posting says experience with statistics software is preferred. I've only used it in one class. Is that a problem?" },
            { who: "A", text: "Not necessarily. Honestly, we care more about reliability, because participants come in at fixed times and we can't reschedule easily. If you can commit to a regular schedule, we can train you on the software." },
            { who: "B", text: "I can definitely do that. Should I include a reference?" },
            { who: "A", text: "Yes, ideally from a professor who knows your work. And the deadline is Friday, so don't wait too long." },
          ],
          questions: [
            { text: "What concern does the student have about applying?", options: ["The job requires too many hours.", "He has limited experience with statistics software.", "He has never studied psychology.", "The deadline has passed."], answer: 1 },
            { text: "What does the coordinator imply is most important for the position?", options: ["advanced software skills", "being dependable about scheduling", "previous research publications", "experience with sleep studies"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "How limestone caves form",
          cast: { A: "en-US-JennyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a geology class.", pause: 1 },
            { who: "A", text: "Most of the world's large caves form in limestone, and the process is mainly chemical, not mechanical. Rainwater absorbs carbon dioxide, first from the air and then, in much larger amounts, from the soil, where decaying plants release it. This produces a weak acid, carbonic acid." },
            { who: "A", text: "As this slightly acidic water seeps down through cracks in the limestone, it slowly dissolves the rock. Over tens of thousands of years, the cracks widen into passages, and eventually into large chambers. Interestingly, the most active dissolving often happens right around the water table, the level below which the rock is saturated, which is why many caves have long horizontal passages." },
            { who: "A", text: "Now, the features most visitors notice, stalactites and stalagmites, are formed by the reverse process. When water dripping from a cave ceiling meets the cave air, it releases some of its carbon dioxide, and the dissolved limestone is deposited again as a mineral called calcite. So the same chemistry that carves out the cave also decorates it, just in the opposite direction." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how limestone is mined", "the chemical processes that form and decorate caves", "the animals that live in caves", "why caves flood"], answer: 1 },
            { text: "According to the professor, where does rainwater absorb most of its carbon dioxide?", options: ["from the air", "from the soil", "from the limestone", "from the ocean"], answer: 1 },
            { text: "Why does the professor mention the water table?", options: ["to explain why many caves have horizontal passages", "to show that caves are always full of water", "to describe how stalactites form", "to explain where rainwater comes from"], answer: 0 },
            { text: "What does the professor imply about stalactites?", options: ["They form through the opposite of the process that creates caves.", "They are made of a different rock from limestone.", "They form only in dry caves.", "They grow faster than caves are carved."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Jake", prompt: "Have you decided where to live next year?", chunks: ["I'm thinking", "of sharing", "an apartment", "with", "two friends"], end: "." },
      { promptBy: "Lily", prompt: "The printer in the library isn't working again.", chunks: ["you can use", "the one", "in the", "student", "center"], end: "." },
      { promptBy: "Ben", prompt: "Why did you miss the bus this morning?", chunks: ["my alarm", "didn't", "go off", "on", "time"], end: "." },
      { promptBy: "Sofia", prompt: "I need to improve my presentation skills.", chunks: ["have you", "thought about", "joining", "the debate", "club"], end: "?" },
      { promptBy: "Dan", prompt: "What was the guest lecture about?", chunks: ["it was", "about", "the future", "of renewable", "energy"], end: "." },
      { promptBy: "Mia", prompt: "Is the swimming pool open tonight?", chunks: ["it closes", "early", "on Fridays", "because of", "swim practice"], end: "." },
      { promptBy: "Chris", prompt: "I can't decide which elective to choose.", chunks: ["why don't", "you ask", "your advisor", "for", "some advice"], end: "?" },
      { promptBy: "Aisha", prompt: "How did you get such good grades last semester?", chunks: ["I started", "reviewing", "my notes", "after", "every class"], end: "." },
      { promptBy: "Noah", prompt: "Do you know when the cafeteria opens?", chunks: ["it opens", "at seven", "but", "breakfast starts", "at seven thirty"], end: "." },
      { promptBy: "Grace", prompt: "Are you going home for the holidays?", chunks: ["I'm staying", "here", "because", "flights are", "too expensive"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You work part-time at the university library. Next month you will start an evening class that meets on Tuesdays, which is one of your usual work days.",
      to: "Mr. Chen (library supervisor)",
      subject: "Change to my work schedule",
      tasks: ["Explain why you need to change your schedule.", "Suggest a different day or time you could work.", "Ask how to arrange the change officially."],
      sample: "Dear Mr. Chen,\n\nI'm writing to ask about changing my work schedule from next month. I've enrolled in an evening statistics class that meets every Tuesday from five to eight, which means I won't be able to work my usual Tuesday shift.\n\nI'd be happy to work on Thursday evenings instead, since I'm free after four o'clock on that day. Alternatively, I could take an extra shift on Saturday mornings if that would be more helpful for the library.\n\nCould you let me know how to arrange this officially? I'm not sure whether I need to fill in a form or speak to someone in the staffing office.\n\nThank you for your understanding.\n\nBest regards,\nAlex",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Morales",
        text: "Many universities encourage students to volunteer in their local communities, and some now require a certain number of community service hours before graduation. Supporters say this helps students develop responsibility and connects universities with their neighborhoods. Critics argue that required service is no longer truly voluntary and takes time away from studies. Should universities require community service for graduation? Why or why not?",
      },
      students: [
        { name: "Hannah", text: "I think it should be required. Many students would never try volunteering otherwise, and once they do, they often discover it's rewarding. It also teaches skills that classes don't, like working with people from different backgrounds." },
        { name: "Victor", text: "I don't think it should be required. Lots of students already work part-time to pay for their education. Adding mandatory service hours puts extra pressure on exactly the students who have the least free time." },
      ],
      sample: "Victor raises an important point about students who work, but I still believe that universities should require some community service, as long as the requirement is flexible. A small number of hours, perhaps twenty over four years, would not be a heavy burden, especially if students could choose activities that fit their schedules, such as tutoring online or volunteering on weekends. The benefits are significant. As Hannah says, many students never try volunteering until they have to, and the experience can change their career plans. For example, a friend of mine started volunteering at a free legal clinic because of a requirement, and she is now planning to become a public interest lawyer. Universities could also count relevant part-time work, like working in a hospital, toward the requirement, which would address Victor's concern.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You have just started working at the front desk of a hotel. Your manager is explaining your duties.",
      sentences: [
        "Good morning, and welcome to the hotel.",
        "Breakfast is served until ten thirty.",
        "Please ask every guest for a form of identification.",
        "Room keys must be returned at the front desk on departure.",
        "If a guest needs a taxi, you can call one from this phone.",
        "We keep spare towels and pillows in the cupboard behind the office.",
        "When the hotel is fully booked, please suggest the hotel across the street, which belongs to the same company.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people spend their free time. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you usually do in your free time on weekdays?",
          sample: "On weekdays I don't have much free time, because I have classes until late afternoon. When I get home, I usually go for a short run in the park near my apartment, which helps me relax after sitting all day. In the evenings, I like to cook dinner with my roommate and then watch an episode of a series or read a little before bed. It's a simple routine, but it helps me feel refreshed for the next day.",
        },
        {
          text: "Tell me about a hobby that you started recently.",
          sample: "A few months ago I started learning to play the guitar. A friend lent me an old one, and I began following free video lessons online. At first my fingers hurt and I could only play a couple of chords, but now I can play several simple songs. I practice for about twenty minutes most evenings. What I like most is that it's completely different from my studies, so it helps me switch off and gives me a sense of progress.",
        },
        {
          text: "Some people think that young people spend too much of their free time on their phones. Do you agree? Why or why not?",
          sample: "I partly agree. Many young people do spend hours scrolling through social media, and I think that can affect their sleep and their ability to concentrate. However, phones aren't only used for wasting time. People also use them to learn languages, follow fitness programs or keep in touch with friends who live far away. So I think the real issue is how phones are used, rather than how much. Setting limits on social media apps, for example, can make a big difference.",
        },
        {
          text: "Should employers do more to help their workers have a good balance between work and free time? Explain your opinion.",
          sample: "Yes, I think employers should do more, because it benefits both sides. When people have enough time to rest and see their families, they're usually healthier and more productive at work. Employers could offer flexible working hours or allow people to work from home on some days, which saves commuting time. They could also discourage sending emails late in the evening. In my opinion, companies that respect free time are also more likely to keep good employees for longer.",
        },
      ],
    },
  },
};
