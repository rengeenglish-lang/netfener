import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 9 (2026 format). Original Netfener content. */
export const TOEFL_9: ToeflTest = {
  id: "toefl-9",
  no: 9,
  title: "TOEFL iBT Practice Test 9",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Origami and engineering",
          text: "Origami, the Japanese art of paper folding, has found surprising uses in modern science. Engineers have stu{{died}} folding patterns to des{{ign}} objects that can be pac{{ked}} into small spaces and then open{{ed}} later. For example, large so{{lar}} panels for satellites are fol{{ded}} tightly during launch and unfo{{ld}} once they reach space. Doc{{tors}} are also testing tiny fol{{ded}} devices that could trav{{el}} through blood vessels.",
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Water shut-off",
          text: [
            "NOTICE TO ALL RESIDENTS",
            "Due to essential maintenance, the water supply to this building will be turned off on Tuesday from 10:00 a.m. to 2:00 p.m.",
            "Please store some drinking water in advance. When the water is turned back on, it may look slightly brown for a few minutes. Let the tap run until the water is clear.",
          ],
          questions: [
            { text: "How long will the water be turned off?", options: ["two hours", "four hours", "all day", "until Wednesday"], answer: 1 },
            { text: "What should residents do if the water looks brown afterward?", options: ["call a plumber", "let the tap run until it is clear", "boil it for ten minutes", "report it to the office"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Study group schedule",
          text: [
            "To: Chemistry study group",
            "From: Tariq",
            "Subject: Plan for exam week",
            "Hi all,",
            "Since the final exam is next Thursday, I suggest we meet three times next week instead of once: Monday, Tuesday and Wednesday, from 7 to 9 p.m. I've reserved Room 3B in the science library for all three evenings.",
            "To make the sessions useful, let's each prepare one chapter. I'll take Chapter 9. Please reply by Saturday with the chapter you'd like, so we don't repeat any. Also, bring the practice exam the professor posted online.",
            "Tariq",
          ],
          questions: [
            { text: "Why does Tariq suggest meeting more often?", options: ["The group is behind schedule.", "The final exam is next week.", "The library is closing.", "The professor asked them to."], answer: 1 },
            { text: "What should each member do?", options: ["reserve a room", "prepare one chapter", "write a practice exam", "bring snacks"], answer: 1 },
            { text: "What does Tariq ask members to bring?", options: ["their textbooks", "their lab reports", "the professor's practice exam", "a calculator"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "Desalination",
          paragraphs: [
            "Although about seventy percent of Earth's surface is covered by water, almost all of it is salt water from the oceans. As populations grow and droughts become more frequent, many countries have turned to desalination, the process of removing salt from seawater to make it suitable for drinking and farming.",
            "The most common method today is reverse osmosis. In this process, seawater is pushed at high pressure through special membranes with extremely small holes. Water molecules can pass through, but most salt and other substances cannot. The result is fresh water on one side of the membrane and very salty water, called brine, on the other.",
            "Desalination has transformed life in dry regions such as the Middle East, but it has drawbacks. The process requires large amounts of energy, which makes the water expensive and, if the energy comes from fossil fuels, adds to carbon emissions. In addition, the brine is often returned to the sea, where it can harm marine life. Researchers are therefore working on more efficient membranes and on using solar power to run desalination plants.",
          ],
          questions: [
            { text: "Why have many countries turned to desalination?", options: ["Ocean water is becoming less salty.", "Growing populations and droughts increase the need for fresh water.", "It is cheaper than other water sources.", "It helps marine life."], answer: 1 },
            { text: "The word \"suitable\" in paragraph 1 is closest in meaning to", options: ["appropriate", "available", "expensive", "dangerous"], answer: 0 },
            { text: "According to paragraph 2, what happens in reverse osmosis?", options: ["Seawater is boiled to remove salt.", "Seawater is pushed through membranes that block most salt.", "Salt is removed with chemicals.", "Seawater is frozen."], answer: 1 },
            { text: "What is brine?", options: ["fresh water used for farming", "very salty water left after desalination", "a type of membrane", "a source of energy"], answer: 1 },
            { text: "Which of the following is NOT mentioned as a drawback of desalination?", options: ["high energy use", "expensive water", "harm to marine life", "shortages of membranes"], answer: 3 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Cycling to work",
          text: "More and more people ride a bicycle to work. Cycl{{ing}} is good for your hea{{lth}} because it is a form of exer{{cise}}. It is also che{{ap}}, since you do not need to b{{uy}} fuel. In many cit{{ies}}, it can even be fas{{ter}} than driving a car in traf{{fic}}. However, cyclists should alw{{ays}} wear a helmet to st{{ay}} safe.",
        },
        {
          kind: "daily-life",
          genre: "Schedule",
          title: "Weekend shuttle",
          text: [
            "CAMPUS WEEKEND SHUTTLE",
            "The shuttle runs between the main gate and the city shopping center every Saturday and Sunday.",
            "First bus: 9:00 a.m. Last bus: 8:00 p.m. Buses leave every 30 minutes. The ride is free with a student ID. Please be at the stop five minutes early.",
          ],
          questions: [
            { text: "Where does the shuttle go?", options: ["to the airport", "to the city shopping center", "to the train station", "to the beach"], answer: 1 },
            { text: "How often do the buses leave?", options: ["every 15 minutes", "every 30 minutes", "every hour", "twice a day"], answer: 1 },
            { text: "What do students need to ride for free?", options: ["a ticket", "a student ID", "a bus pass", "nothing at all"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The life cycle of a frog",
          paragraphs: [
            "Frogs go through big changes during their lives. This process is called metamorphosis.",
            "A frog begins as a small egg in the water. After a few days, a tadpole comes out of the egg. A tadpole looks more like a fish than a frog. It has a long tail and breathes through gills, just like a fish.",
            "As the tadpole grows, its body slowly changes. First, it grows back legs, and then front legs. Its tail gets shorter, and it develops lungs so that it can breathe air. After about twelve to sixteen weeks, it becomes a young frog and can leave the water to live on land.",
          ],
          questions: [
            { text: "What is metamorphosis?", options: ["a kind of frog", "the process of big changes during an animal's life", "a type of water plant", "the way frogs find food"], answer: 1 },
            { text: "How does a tadpole breathe?", options: ["through gills", "through lungs", "through its skin only", "through its tail"], answer: 0 },
            { text: "Which legs grow first?", options: ["the front legs", "the back legs", "all legs at the same time", "no legs grow"], answer: 1 },
            { text: "The word \"develops\" in paragraph 3 is closest in meaning to", options: ["loses", "forms", "hides", "cleans"], answer: 1 },
            { text: "How long does it take a tadpole to become a young frog?", options: ["a few days", "about two weeks", "about twelve to sixteen weeks", "about one year"], answer: 2 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Quantum computing",
          text: "Conventional computers store information in bits, each of which represents either a zero or a one. Quantum computers instead use qubits, which, thanks to a property called superp{{osition}}, can repr{{esent}} a combination of both states simult{{aneously}}. In princ{{iple}}, this allows certain calculations to be perf{{ormed}} far more quickly. However, qubits are extremely frag{{ile}}: even tiny vibr{{ations}} or temperature changes can dest{{roy}} the information they hold, which is why most quantum mach{{ines}} must be cooled to near absolute ze{{ro}}.",
        },
        {
          kind: "daily-life",
          genre: "Policy notice",
          title: "Laboratory safety rules",
          text: [
            "CHEMISTRY LABORATORY – SAFETY REQUIREMENTS",
            "Students will not be admitted to any laboratory session without safety goggles and a lab coat. Open-toed shoes are prohibited. Students who arrive without the required equipment will be marked absent, and the session cannot be made up unless the absence is excused in advance.",
            "Any spill or injury, however minor, must be reported immediately to the teaching assistant. Food and drink may not be brought into the laboratory under any circumstances; they may be left in the lockers outside.",
          ],
          questions: [
            { text: "What happens to students who arrive without goggles and a lab coat?", options: ["They may borrow equipment.", "They are marked absent.", "They receive a warning only.", "They may watch from the door."], answer: 1 },
            { text: "When can a missed session be made up?", options: ["at any time", "only if the absence was excused in advance", "only during the final week", "never"], answer: 1 },
            { text: "What should students do with food and drink?", options: ["finish them before class", "keep them in their bags", "leave them in the lockers outside", "give them to the teaching assistant"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "The Columbian Exchange",
          paragraphs: [
            "After Christopher Columbus reached the Americas in 1492, a vast transfer of plants, animals, people and diseases took place between the Eastern and Western Hemispheres. Historians call this process the Columbian Exchange, and it ranks among the most significant events in the history of agriculture, ecology and human populations.",
            "Crops moved in both directions, with profound consequences. From the Americas came maize, potatoes, tomatoes, cacao and chili peppers. The potato, in particular, thrived in the cool climate of northern Europe and produced more calories per hectare than traditional grains, contributing to population growth there in the eighteenth and nineteenth centuries. Meanwhile, Europeans brought wheat, rice, sugarcane, coffee, horses and cattle to the Americas. Horses transformed the way of life of many Indigenous peoples of the North American plains, enabling them to hunt bison far more efficiently.",
            "The exchange, however, also had devastating effects. Indigenous Americans had no previous exposure to diseases such as smallpox and measles, which Europeans had lived with for centuries. Epidemics spread rapidly, often ahead of European explorers themselves, and killed a large proportion of the Indigenous population. Furthermore, the expansion of sugar and other plantation crops created an enormous demand for labor, which was met largely through the forced transport of millions of enslaved Africans. Thus the same process that enriched diets around the world also caused immense human suffering.",
          ],
          questions: [
            { text: "What is the Columbian Exchange?", options: ["a trade agreement between Spain and Portugal", "the transfer of plants, animals, people and diseases between hemispheres", "Columbus's first voyage", "a market in the Americas"], answer: 1 },
            { text: "The word \"thrived\" in paragraph 2 is closest in meaning to", options: ["grew well", "failed", "became expensive", "was forbidden"], answer: 0 },
            { text: "According to paragraph 2, why was the potato important in northern Europe?", options: ["It could be stored for many years.", "It produced more calories per hectare than traditional grains.", "It was easier to cook.", "It was used to feed horses."], answer: 1 },
            { text: "Why does the author mention horses in paragraph 2?", options: ["to show how a new animal transformed some Indigenous ways of life", "to explain how diseases spread", "to describe European farming", "to compare horses with cattle"], answer: 0 },
            { text: "What does the author suggest in the final sentence of paragraph 3?", options: ["The exchange had only positive effects.", "The exchange had both great benefits and terrible costs.", "Diets did not change much.", "Disease was not important."], answer: 1 },
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
        { kind: "choose-response", voice: "en-US-BrianNeural", line: "Have you picked up your graduation gown yet?", options: ["Graduation is in June.", "Not yet. I'm going this afternoon.", "The gown is black.", "I picked some flowers."], answer: 1 },
        { kind: "choose-response", voice: "en-US-AvaNeural", line: "Why is the professor's office door closed?", options: ["She's meeting with another student right now.", "The office is on the fourth floor.", "I closed the window.", "Her office hours are long."], answer: 0 },
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "Which bus goes to the stadium?", options: ["The stadium is huge.", "I took the bus yesterday.", "Number twelve stops right in front of it.", "The game starts at seven."], answer: 2 },
        { kind: "choose-response", voice: "en-US-ElizabethNeural", line: "Would you like to join our debate team?", options: ["The debate was on Friday.", "I joined a gym.", "Our team won.", "I'd like to, but I'm worried about speaking in public."], answer: 3 },
        { kind: "choose-response", voice: "en-US-JasonNeural", line: "How did you do on the chemistry midterm?", options: ["Better than I expected, actually.", "Chemistry is on Tuesday.", "I studied in the lab.", "The midterm had five parts."], answer: 0 },
        { kind: "choose-response", voice: "en-US-SaraNeural", line: "Is there a printer I can use in this building?", options: ["I printed my essay.", "The building is new.", "There's one in the computer lab on the second floor.", "My printer is broken."], answer: 2 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "Who organized the trip to the science museum?", options: ["The museum is downtown.", "The Physics Club did.", "The trip was fun.", "We went by train."], answer: 1 },
        { kind: "choose-response", voice: "en-US-NancyNeural", line: "Should I bring anything to the potluck dinner?", options: ["Dinner is at seven.", "I brought my friend.", "It was delicious.", "Maybe a salad or a dessert."], answer: 3 },
        {
          kind: "conversation",
          title: "A problem with a housing application",
          cast: { A: "en-US-AmberNeural", B: "en-US-KaiNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a housing office employee.", pause: 1 },
            { who: "B", text: "Hi. I applied for on-campus housing for next year, but I received an email saying my application was incomplete." },
            { who: "A", text: "Let me look it up. Ah, I see. Your application is fine, but we haven't received the deposit." },
            { who: "B", text: "Really? I thought I paid it online." },
            { who: "A", text: "It looks like the payment was started but not completed. Maybe the page timed out. You can pay it here today, and your application will be complete." },
            { who: "B", text: "Will I still be considered for a single room?" },
            { who: "A", text: "Yes. The deadline is Friday, so as long as you pay before then, you'll keep your place in line." },
          ],
          questions: [
            { text: "Why was the student's application incomplete?", options: ["He forgot to sign it.", "The deposit payment was not completed.", "He chose the wrong room type.", "He missed the deadline."], answer: 1 },
            { text: "What does the employee say about the single room?", options: ["They are all taken.", "He will still be considered if he pays by Friday.", "It costs more than he paid.", "He must apply again next year."], answer: 1 },
          ],
        },
        {
          kind: "announcement",
          title: "Writing center workshops",
          cast: { A: "en-US-ChristopherNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Good morning. The Writing Center is offering a series of free workshops this month for students working on research papers. Topics include finding reliable sources, avoiding plagiarism and writing a strong conclusion. Each workshop lasts about forty-five minutes and takes place on Wednesdays at four p.m. in the Writing Center on the ground floor of the library. You don't need to register for the first two workshops, but space in the final one is limited, so please sign up in advance on our website." },
          ],
          questions: [
            { text: "Who are the workshops mainly for?", options: ["students working on research papers", "new professors", "students applying for jobs", "library employees"], answer: 0 },
            { text: "What is true about the final workshop?", options: ["It is canceled.", "It costs money.", "Students should sign up in advance.", "It is on Friday."], answer: 2 },
          ],
        },
        {
          kind: "talk",
          title: "Pidgin and creole languages",
          cast: { A: "en-US-JennyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a linguistics class.", pause: 1 },
            { who: "A", text: "When groups of people who don't share a language need to communicate regularly, for example for trade, they often develop what linguists call a pidgin. A pidgin is a simplified language with a small vocabulary, usually borrowed mostly from one language, and very basic grammar. Importantly, nobody speaks a pidgin as their first language. It's a tool for limited communication." },
            { who: "A", text: "But something remarkable can happen. When children grow up in a community where a pidgin is widely used, they don't just learn it as it is. They expand it. They add grammar for things like tense and plurals, and the vocabulary grows. Within a generation or two, the pidgin can become a full language, which linguists call a creole." },
            { who: "A", text: "Creoles, like Haitian Creole or Tok Pisin in Papua New Guinea, are complete languages that can express anything, from jokes to scientific ideas. Some linguists think that the way children create creoles tells us something important about the human brain, that we may have a natural ability to build grammar." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how children learn to read", "how pidgins develop into creoles", "the history of Papua New Guinea", "why some languages disappear"], answer: 1 },
            { text: "Which of the following is true of a pidgin?", options: ["It is nobody's first language.", "It has very complex grammar.", "It is spoken only by children.", "It has a large vocabulary."], answer: 0 },
            { text: "According to the professor, what do children do with a pidgin?", options: ["They stop using it.", "They expand it into a full language.", "They translate it into English.", "They simplify it further."], answer: 1 },
            { text: "Why do some linguists find creoles important?", options: ["They show that trade is good for language.", "They may reveal a natural human ability to build grammar.", "They are easier to learn than other languages.", "They are the oldest languages."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-JaneNeural", line: "What's your favorite food?", options: ["I love pasta.", "I'm hungry.", "At home.", "In the kitchen."], answer: 0 },
        { kind: "choose-response", voice: "en-US-JacobNeural", line: "Where did you buy your shoes?", options: ["They're size forty.", "At the mall near my house.", "Last week.", "They're comfortable."], answer: 1 },
        { kind: "choose-response", voice: "en-US-MonicaNeural", line: "Do you want to play tennis this weekend?", options: ["I played on Monday.", "Tennis is popular.", "Sure. Is Saturday morning okay?", "My racket is new."], answer: 2 },
        { kind: "choose-response", voice: "en-US-BrandonNeural", line: "How long have you been waiting?", options: ["I'm waiting for the bus.", "It's a long line.", "At the station.", "About ten minutes."], answer: 3 },
        { kind: "choose-response", voice: "en-US-LunaNeural", line: "Could you help me carry these boxes?", options: ["They're big boxes.", "Of course. Where do they go?", "I carried them yesterday.", "Boxes are useful."], answer: 1 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "Is the supermarket open now?", options: ["Yes, it's open until ten.", "I need some milk.", "It's a big supermarket.", "I went there yesterday."], answer: 0 },
        {
          kind: "conversation",
          title: "Joining the gym",
          cast: { A: "en-US-AshleyNeural", B: "en-US-RogerNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a worker at the campus gym.", pause: 1 },
            { who: "B", text: "Hi. I'd like to join the gym. How much does it cost?" },
            { who: "A", text: "For students, it's free. You just need to fill out this form and watch a short safety video." },
            { who: "B", text: "Great. Are there any fitness classes?" },
            { who: "A", text: "Yes, we have yoga on Mondays and dance on Thursdays. Both start at six p.m." },
          ],
          questions: [
            { text: "How much does the gym cost for students?", options: ["ten dollars", "twenty dollars", "nothing", "fifty dollars"], answer: 2 },
            { text: "When is the dance class?", options: ["on Mondays", "on Thursdays", "on Saturdays", "every day"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Why the moon has phases",
          cast: { A: "en-US-AndrewNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an astronomy class.", pause: 1 },
            { who: "A", text: "When you look at the moon, its shape seems to change. Sometimes it's a full circle, and sometimes it's just a thin line. These shapes are called phases." },
            { who: "A", text: "The moon doesn't make its own light. We see it because it reflects light from the sun. Half of the moon is always lit by the sun, but as the moon travels around the Earth, we see different amounts of that lit half." },
            { who: "A", text: "When the moon is between the Earth and the sun, we can't see the lit side at all. That's a new moon. When the Earth is between the moon and the sun, we see the whole lit side, a full moon. The moon takes about twenty-nine and a half days to go through all its phases." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["why the moon changes shape", "how hot the moon is", "the first trip to the moon", "how the sun makes light"], answer: 0 },
            { text: "Why can we see the moon?", options: ["It makes its own light.", "It reflects light from the sun.", "It is very close to Earth.", "It reflects light from the Earth."], answer: 1 },
            { text: "What happens during a new moon?", options: ["We see the whole lit side.", "We can't see the lit side.", "The moon is bigger.", "The moon stops moving."], answer: 1 },
            { text: "How long does it take the moon to go through all its phases?", options: ["about one week", "about two weeks", "about twenty-nine and a half days", "about one year"], answer: 2 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "I was hoping the professor would curve the grades on that exam.", options: ["The exam was in the morning.", "Me too, but she said the average was high enough.", "I hoped it would rain.", "Grades are posted online."], answer: 1 },
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "Didn't the conference organizers say they'd cover travel costs for student presenters?", options: ["Only for those presenting a full paper, not a poster.", "The conference was interesting.", "I traveled by plane.", "Students organized it."], answer: 0 },
        { kind: "choose-response", voice: "en-US-MichelleNeural", line: "I'm thinking of changing my major to economics.", options: ["The economy is slow.", "I changed my phone.", "Majors are listed online.", "Really? What made you decide that?"], answer: 3 },
        { kind: "choose-response", voice: "en-US-TonyNeural", line: "Wouldn't it be easier to just email the professor instead of waiting for office hours?", options: ["Office hours are on Tuesday.", "The professor is busy.", "Probably, but I think my question is easier to explain in person.", "I waited for an hour."], answer: 2 },
        { kind: "choose-response", voice: "en-US-EmmaNeural", line: "Has the library extended its hours for finals week?", options: ["I extended my deadline.", "Yes, it'll be open twenty-four hours starting Monday.", "Finals week is stressful.", "The library is quiet."], answer: 1 },
        { kind: "choose-response", voice: "en-US-ChristopherNeural", line: "I'm not convinced the survey questions were worded neutrally.", options: ["You might be right. Some of them seem to suggest an answer.", "The survey had twenty questions.", "I'm convinced it was Monday.", "We sent the survey yesterday."], answer: 0 },
        {
          kind: "conversation",
          title: "Feedback on a draft",
          cast: { A: "en-US-RogerNeural", B: "en-US-LunaNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and her professor.", pause: 1 },
            { who: "B", text: "Professor Diaz, thank you for your comments on my essay draft. I was a little confused by one note. You wrote that my argument gets lost in the middle." },
            { who: "A", text: "Yes. Your introduction makes a clear claim that city parks reduce crime. But in the middle sections, you spend several pages describing the history of urban parks." },
            { who: "B", text: "I thought the background would be helpful." },
            { who: "A", text: "Some background is useful, but each section should support your main claim. Ask yourself, for every paragraph: how does this help prove my argument? If it doesn't, cut it or shorten it." },
            { who: "B", text: "So I should move most of the history into the introduction?" },
            { who: "A", text: "Keep a short paragraph of history there, and use the space you save to discuss the crime studies in more depth. That's where your essay is strongest." },
          ],
          questions: [
            { text: "What was the problem with the student's draft?", options: ["Her claim was unclear.", "The middle sections did not support her main argument.", "It was too short.", "It had too many sources."], answer: 1 },
            { text: "What does the professor advise the student to do?", options: ["remove the introduction", "add more history", "shorten the history and expand the discussion of the crime studies", "change her topic"], answer: 2 },
          ],
        },
        {
          kind: "talk",
          title: "Cognitive dissonance",
          cast: { A: "en-US-NancyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a psychology class.", pause: 1 },
            { who: "A", text: "In the nineteen fifties, the psychologist Leon Festinger proposed the idea of cognitive dissonance. It describes the uncomfortable feeling we experience when we hold two beliefs that conflict, or when our actions conflict with our beliefs." },
            { who: "A", text: "Festinger argued that people are strongly motivated to reduce this discomfort. And interestingly, they often do it not by changing their behavior, but by changing their beliefs. In a famous experiment, participants completed a very boring task. Then some were paid one dollar and others twenty dollars to tell the next participant that the task was enjoyable. Later, when asked how much they had actually enjoyed the task, the people paid only one dollar rated it as more enjoyable." },
            { who: "A", text: "Why? Those paid twenty dollars had a good reason for lying: the money. But those paid one dollar didn't have a good external reason. To reduce the conflict between 'I said it was fun' and 'it was boring,' they convinced themselves that it really wasn't so bad. This helps explain why people sometimes defend decisions more strongly after they've made them, even when the evidence suggests they were wrong." },
          ],
          questions: [
            { text: "What is cognitive dissonance?", options: ["a type of memory loss", "discomfort caused by conflicting beliefs or actions", "the ability to make quick decisions", "a fear of boring tasks"], answer: 1 },
            { text: "In the experiment, which participants later rated the task as more enjoyable?", options: ["those paid twenty dollars", "those paid one dollar", "those who were not paid", "all participants equally"], answer: 1 },
            { text: "Why did those participants rate the task more positively?", options: ["They actually enjoyed it more.", "They changed their beliefs to reduce the conflict.", "They wanted more money.", "They misunderstood the question."], answer: 1 },
            { text: "What does the professor imply about people's decisions?", options: ["People always change bad decisions quickly.", "People may defend decisions more strongly after making them.", "People rarely make decisions on their own.", "Money is the main reason for all decisions."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Lily", prompt: "Why are you so early today?", chunks: ["I wanted", "to find", "a good seat", "before", "the lecture"], end: "." },
      { promptBy: "Can", prompt: "Did you enjoy the hiking trip?", chunks: ["the views", "from", "the top", "were", "incredible"], end: "." },
      { promptBy: "Nora", prompt: "My plants keep dying.", chunks: ["are you", "giving them", "too much", "water", "every day"], end: "?" },
      { promptBy: "Henry", prompt: "What are your plans after graduation?", chunks: ["I'm hoping", "to find", "a job", "in", "software design"], end: "." },
      { promptBy: "Elif", prompt: "Why did you leave the meeting early?", chunks: ["I had", "a dentist", "appointment", "at", "four o'clock"], end: "." },
      { promptBy: "Jack", prompt: "Is the new bridge finished?", chunks: ["it", "should", "open", "to traffic", "next month"], end: "." },
      { promptBy: "Amira", prompt: "I'm not sure which course to choose.", chunks: ["why don't", "you", "talk", "to", "your advisor"], end: "?" },
      { promptBy: "Felix", prompt: "What did the mechanic say about your car?", chunks: ["he said", "the battery", "needs", "to be", "replaced"], end: "." },
      { promptBy: "Rosa", prompt: "Why do you like this café so much?", chunks: ["the staff", "are", "friendly", "and", "the coffee is excellent"], end: "." },
      { promptBy: "Ali", prompt: "How did you hear about the competition?", chunks: ["my roommate", "saw", "a poster", "in", "the student center"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You took an online course offered by your university, but you have not received the certificate of completion that was promised.",
      to: "the course coordinator",
      subject: "Missing certificate of completion",
      tasks: ["Give details about the course you completed.", "Explain why you need the certificate.", "Ask when and how you can receive it."],
      sample: "Dear Course Coordinator,\n\nI completed the online course \"Introduction to Data Analysis\" last month. I finished all eight modules and passed the final quiz with a score of 92 percent on March 3rd. According to the course website, participants should receive a certificate of completion by email within two weeks, but I have not received anything yet. I have also checked my spam folder.\n\nI need the certificate fairly soon because I am applying for a summer internship at a research company, and the application deadline is April 15th. The company asks applicants to show proof of any data analysis training.\n\nCould you please let me know when I can expect to receive the certificate? If there is a problem with my record, I would be happy to provide any information you need.\n\nThank you for your help.\n\nSincerely,\nAhmet Yilmaz",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Urban Planning",
      professor: {
        name: "Dr. Morgan",
        text: "Some cities have closed parts of their downtown areas to private cars, turning streets into spaces for pedestrians, cyclists and public transportation. Supporters say this improves air quality and makes cities more pleasant, while opponents argue that it hurts local businesses and makes life difficult for people who depend on cars. Should city centers be closed to private cars? Why or why not?",
      },
      students: [
        { name: "Olivia", text: "Yes. Car-free streets are safer and quieter, and people are more likely to walk around and visit shops. Many European cities have done this successfully." },
        { name: "Hassan", text: "I'm not sure. Older people, people with disabilities and families with young children often need cars. Closing the center could make it harder for them to get there." },
      ],
      sample: "I support closing city centers to most private cars, but only if the city plans carefully for the people Hassan mentions. Olivia is right that car-free streets have real benefits. Without heavy traffic, the air is cleaner, the streets are safer for children, and people tend to spend more time outdoors. Studies from several European cities show that shops in pedestrian areas often have more customers, not fewer, because people walk past them slowly instead of driving by. However, a car ban would be unfair if it made the center impossible to reach for some groups. Cities should therefore provide frequent, accessible public transportation, allow delivery vehicles during certain hours, and give special permits to people with disabilities. With these measures, a car-free center can benefit almost everyone.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are starting a part-time job at a bookstore. The store manager is giving you some instructions.",
      sentences: [
        "Thanks for joining our team.",
        "The store opens at ten in the morning.",
        "New books arrive every Tuesday and Friday.",
        "Please check the shelves and tidy them every hour.",
        "Customers can order books that are not available in the store.",
        "When someone asks for a recommendation, ask them what kinds of books they usually enjoy.",
        "Before you close the register at night, count the money and write the total in the daily report.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people use technology in their daily lives. The researcher will ask you some questions.",
      questions: [
        {
          text: "Which piece of technology do you use most often, and what do you use it for?",
          sample: "The technology I use most often is definitely my smartphone. I use it for almost everything: messaging my friends and family, checking my class schedule, listening to music and reading the news. I also use it to study, for example with language learning apps and online dictionaries. And when I travel around the city, I depend on it for maps and bus times. Honestly, it would be very difficult for me to get through a day without it.",
        },
        {
          text: "Do you think people spend too much time on their phones? Why or why not?",
          sample: "Yes, I think many people do, including me sometimes. Phones are designed to keep our attention, with endless videos and notifications, so it's easy to spend hours scrolling without noticing. This can affect sleep, concentration and even face-to-face relationships. For example, I often see friends sitting together at a café but all looking at their phones. That said, phones are also very useful, so the problem isn't the phone itself but how we use it. Setting limits can really help.",
        },
        {
          text: "Some people believe that technology has made people less social. Do you agree?",
          sample: "I only partly agree. It's true that some people spend less time talking face to face because they're busy with screens. But technology has also made it easier to stay in touch with people. For example, I talk with my cousin in Germany every week on video calls, which would have been very expensive in the past. Social media also helps people with similar interests find each other. So I think technology changes how we socialize rather than simply making us less social.",
        },
        {
          text: "What new technology do you think will change people's lives the most in the future?",
          sample: "I think artificial intelligence will change people's lives the most. It's already being used in medicine to help doctors detect diseases earlier, and in education to give students personalized practice. In the future, it could manage traffic in cities, help scientists develop new medicines faster, and take over many repetitive jobs. Of course, this creates challenges, such as people losing jobs or privacy concerns, so governments will need clear rules. But overall, I believe its impact will be enormous.",
        },
      ],
    },
  },
};
