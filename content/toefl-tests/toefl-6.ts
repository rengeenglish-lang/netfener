import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 6 (2026 format). Original Netfener content. */
export const TOEFL_6: ToeflTest = {
  id: "toefl-6",
  no: 6,
  title: "TOEFL iBT Practice Test 6",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The honeybee dance",
          text: "Honeybees have a remarkable way of sharing information about food. When a bee fi{{nds}} a good source of nectar, it ret{{urns}} to the hive and performs a spe{{cial}} movement called the waggle da{{nce}}. The direction of the dance sh{{ows}} the other bees which way to fly, comp{{ared}} with the position of the sun. The len{{gth}} of the waggle tells them how f{{ar}} away the flowers are. This disc{{overy}} earned an Austrian scientist a Nobel Pri{{ze}} in 1973.",
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Elevator out of service",
          text: [
            "ELEVATOR OUT OF SERVICE",
            "The elevator in this building will be closed for repairs from Monday, May 12, to Friday, May 16. Please use the stairs at either end of the hallway.",
            "Residents who need help carrying heavy items or who have difficulty using the stairs should contact the front desk, and staff will assist you.",
          ],
          questions: [
            { text: "How long will the elevator be closed?", options: ["one day", "about five days", "two weeks", "one month"], answer: 1 },
            { text: "What should residents who have trouble using the stairs do?", options: ["wait until Friday", "contact the front desk for help", "use the elevator in another building", "call a repair company"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Utility bills",
          text: [
            "To: Jordan, Kim",
            "From: Alex",
            "Subject: This month's bills",
            "Hey both,",
            "The electricity bill came today, and it's higher than usual, $96 instead of our normal $60, probably because we've been using the heater so much. I've already paid it online, so if you could each send me $32 by the weekend, that would be great.",
            "Also, to keep the next bill down, maybe we could turn the heater off when nobody's in the living room? Let me know what you think.",
            "Alex",
          ],
          questions: [
            { text: "Why is the electricity bill higher than usual?", options: ["A new roommate moved in.", "They have used the heater a lot.", "The price of electricity increased.", "Alex made a payment error."], answer: 1 },
            { text: "How much should each roommate send Alex?", options: ["$20", "$32", "$48", "$96"], answer: 1 },
            { text: "What does Alex suggest?", options: ["buying a new heater", "paying the bills separately", "turning the heater off when the room is empty", "moving to a different apartment"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "The Little Ice Age",
          paragraphs: [
            "Between roughly 1300 and 1850, much of the Northern Hemisphere experienced a period of cooler temperatures known as the Little Ice Age. The name is somewhat misleading, since temperatures fell by only around one degree Celsius on average and the cooling was not continuous. Nevertheless, the effects on many societies were significant.",
            "In Europe, colder winters and shorter growing seasons led to repeated crop failures. Alpine glaciers advanced, in some cases destroying farms and villages in their path. In London, the River Thames froze over several times, thick enough that residents held 'frost fairs' on the ice, with stalls, games and even printing presses.",
            "Scientists continue to debate the causes of the Little Ice Age. One factor may have been a series of large volcanic eruptions, which released particles into the atmosphere that reflected sunlight. Another may have been a period of reduced solar activity, when the sun produced slightly less energy. Most researchers now believe that a combination of these factors, rather than a single cause, was responsible.",
          ],
          questions: [
            { text: "Why does the author say the name \"Little Ice Age\" is misleading?", options: ["The period was very short.", "Temperatures dropped only slightly and not continuously.", "It affected only the Southern Hemisphere.", "There was no ice during the period."], answer: 1 },
            { text: "The word \"advanced\" in paragraph 2 is closest in meaning to", options: ["melted", "moved forward", "improved", "disappeared"], answer: 1 },
            { text: "According to paragraph 2, what was one effect of the Little Ice Age in Europe?", options: ["Crops grew faster.", "Repeated crop failures occurred.", "Rivers dried up.", "Glaciers disappeared."], answer: 1 },
            { text: "Why does the author mention frost fairs?", options: ["to show how cold it became in London", "to describe a famous printing press", "to explain why the Thames was important", "to show that people enjoyed the cold"], answer: 0 },
            { text: "What do most researchers now believe about the causes of the Little Ice Age?", options: ["Volcanoes were the only cause.", "The sun had no effect.", "Several factors together were responsible.", "The causes will never be known."], answer: 2 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Morning exercise",
          text: "Many people like to exercise in the morning before work. Exer{{cise}} can give you more ene{{rgy}} for the rest of the d{{ay}}. Some people go for a r{{un}}, while others prefer yo{{ga}} or swimming. It is a go{{od}} idea to drink water bef{{ore}} you start. Even a short wa{{lk}} can make you feel bet{{ter}} and help you sl{{eep}} at night.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Cooking class",
          text: [
            "LEARN TO COOK – BEGINNER CLASSES",
            "Join our friendly evening classes at the Community Kitchen! Each week you'll cook a simple, healthy meal and eat it together at the end.",
            "Thursdays, 6:00–8:00 p.m. $15 per class, all ingredients included. Bring an apron. Sign up at the front desk or on our website.",
          ],
          questions: [
            { text: "What will students do at the end of each class?", options: ["take a test", "eat the meal together", "wash the dishes", "take food home"], answer: 1 },
            { text: "What is included in the price?", options: ["an apron", "all ingredients", "a cookbook", "a drink"], answer: 1 },
            { text: "When are the classes?", options: ["Thursday mornings", "Thursday evenings", "every weekend", "Monday evenings"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How camels survive in the desert",
          paragraphs: [
            "Camels are well known for living in hot, dry deserts. They can travel for days without drinking water, and they have several special features that help them survive.",
            "Many people think that a camel's hump is full of water, but this is not true. The hump actually stores fat. When there is little food, the camel's body can use this fat for energy.",
            "Camels also save water in clever ways. They do not sweat much, even on very hot days, and their bodies can handle large changes in temperature. When a camel finally finds water, it can drink more than one hundred liters in just a few minutes.",
          ],
          questions: [
            { text: "Where do camels usually live?", options: ["in rainforests", "in hot, dry deserts", "near the ocean", "in cold mountains"], answer: 1 },
            { text: "The word \"stores\" in paragraph 2 is closest in meaning to", options: ["keeps", "sells", "loses", "heats"], answer: 0 },
            { text: "What is inside a camel's hump?", options: ["water", "fat", "air", "muscle"], answer: 1 },
            { text: "How do camels save water?", options: ["by sweating a lot", "by sleeping all day", "by not sweating much", "by eating only at night"], answer: 2 },
            { text: "How much water can a camel drink in a few minutes?", options: ["about ten liters", "about fifty liters", "more than one hundred liters", "only a small amount"], answer: 2 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Neuroplasticity",
          text: "For much of the twentieth century, scientists believed that the adult brain was essentially fixed. Research on neuroplasticity has overt{{urned}} this view, demonstrating that the brain can reorg{{anize}} itself throughout life. When a person le{{arns}} a new skill, connections between neu{{rons}} are strengthened, and unused pathways may wea{{ken}}. Following an injury, other reg{{ions}} of the brain can sometimes ta{{ke}} over lost functions, a disc{{overy}} that has transformed rehabili{{tation}} for patients recovering from str{{okes}}.",
        },
        {
          kind: "daily-life",
          genre: "Policy notice",
          title: "Library fine amnesty",
          text: [
            "LIBRARY FINE AMNESTY – APRIL 1–15",
            "During the amnesty period, all overdue fines will be canceled for any item that is returned to the library, regardless of how long it has been overdue. Fines that have already been paid will not be refunded.",
            "Items that are reported lost will still be charged at their replacement cost. However, if a lost item is found and returned during the amnesty, the replacement charge will be removed. After April 15, the normal fine schedule will apply again.",
          ],
          questions: [
            { text: "What happens to fines for items returned during the amnesty?", options: ["They are reduced by half.", "They are canceled.", "They are refunded.", "They are added to the replacement cost."], answer: 1 },
            { text: "What is true about fines that were paid before the amnesty?", options: ["They will be refunded.", "They will be refunded only for lost items.", "They will not be refunded.", "They will be credited to future fines."], answer: 2 },
            { text: "In which case will a replacement charge be removed?", options: ["if a lost item is found and returned during the amnesty", "if the item is reported lost after April 15", "if the student pays the fine", "if the item was damaged"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Bioluminescence",
          paragraphs: [
            "Bioluminescence, the production of light by living organisms, is surprisingly widespread. Although it is familiar on land mainly through fireflies, it is far more common in the ocean, where researchers estimate that roughly three-quarters of the animals living in the open sea at depths below a few hundred meters can produce light. In most cases, the light results from a chemical reaction in which a molecule called luciferin is oxidized with the help of an enzyme, releasing energy in the form of light rather than heat.",
            "Bioluminescence serves a variety of purposes. Some deep-sea anglerfish dangle a glowing lure in front of their mouths to attract prey in the darkness. Certain squid and shrimp, when threatened, release clouds of luminous fluid that distract predators while they escape. Perhaps the most ingenious use is counterillumination: some fish and squid produce a faint glow on their undersides that matches the dim light coming from above. To a predator looking up from below, the animal's silhouette effectively disappears.",
            "Bioluminescence also appears to have evolved independently many times, perhaps more than ninety, in very different groups of organisms. This repeated evolution suggests that, in the dark environment of the deep ocean, the ability to produce light provides such strong advantages that natural selection has favored it again and again.",
          ],
          questions: [
            { text: "According to paragraph 1, where is bioluminescence most common?", options: ["among land insects", "in the open ocean at depth", "in freshwater lakes", "in shallow coastal waters"], answer: 1 },
            { text: "The word \"ingenious\" in paragraph 2 is closest in meaning to", options: ["dangerous", "clever", "common", "ancient"], answer: 1 },
            { text: "According to paragraph 2, why do some squid release luminous fluid?", options: ["to attract mates", "to distract predators while they escape", "to find food", "to communicate with other squid"], answer: 1 },
            { text: "What is the purpose of counterillumination?", options: ["to make an animal's outline less visible from below", "to attract prey from above", "to keep the animal warm", "to signal danger to other fish"], answer: 0 },
            { text: "What does the author suggest by stating that bioluminescence evolved independently many times?", options: ["It is a recent development.", "It offers strong survival advantages in the deep ocean.", "It is caused by a single gene.", "It developed only in fish."], answer: 1 },
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
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "Is the study abroad fair today or tomorrow?", options: ["It's tomorrow, in the student center.", "I studied abroad last year.", "The fair was very busy.", "Today is Friday."], answer: 0 },
        { kind: "choose-response", voice: "en-US-ElizabethNeural", line: "Why do you look so happy?", options: ["I'm going to the doctor.", "I just found out I got the internship.", "I look happy in photos.", "It's a sunny day tomorrow."], answer: 1 },
        { kind: "choose-response", voice: "en-US-BrianNeural", line: "Have you decided which topic to choose for your presentation?", options: ["The presentation is ten minutes.", "I'm presenting on Monday.", "I'm thinking about renewable energy.", "I chose the room."], answer: 2 },
        { kind: "choose-response", voice: "en-US-AvaNeural", line: "Can you recommend a good place to study off campus?", options: ["I study chemistry.", "Campus is closed on Sunday.", "I recommended it to a friend.", "The café on Main Street is pretty quiet."], answer: 3 },
        { kind: "choose-response", voice: "en-US-JasonNeural", line: "Did you hear that the concert was canceled?", options: ["No! Do you know why?", "I heard it on the radio.", "The concert is at eight.", "I canceled my phone plan."], answer: 0 },
        { kind: "choose-response", voice: "en-US-NancyNeural", line: "How many credits are you taking this semester?", options: ["I'm taking the bus.", "Fifteen, which is a lot.", "The semester ends in May.", "Credit cards are useful."], answer: 1 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "Where did you get that great backpack?", options: ["It's a great backpack.", "I carry it every day.", "A friend gave it to me for my birthday.", "It's very heavy."], answer: 2 },
        { kind: "choose-response", voice: "en-US-SaraNeural", line: "Should we start the meeting without Tom?", options: ["Tom is my roommate.", "The meeting room is big.", "I met Tom yesterday.", "Let's give him five more minutes."], answer: 3 },
        {
          kind: "conversation",
          title: "At the study abroad office",
          cast: { A: "en-US-AmberNeural", B: "en-US-KaiNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and an advisor at the study abroad office.", pause: 1 },
            { who: "B", text: "Hi. I'm interested in studying in Spain next year, but I'm worried it'll delay my graduation." },
            { who: "A", text: "That's a common concern. What's your major?" },
            { who: "B", text: "Business." },
            { who: "A", text: "Good news, then. We have a partner university in Madrid where many business courses have already been approved to count toward your major. As long as you choose from that list, your credits will transfer directly." },
            { who: "B", text: "That's a relief. Do I need to speak Spanish fluently?" },
            { who: "A", text: "Not for that program. Many business courses there are taught in English, though you'd have to take one Spanish language course each semester. Most students find that's the best part of the experience." },
          ],
          questions: [
            { text: "What is the student worried about?", options: ["the cost of studying abroad", "that studying abroad will delay his graduation", "finding housing in Spain", "his grades in business"], answer: 1 },
            { text: "What does the advisor say about language requirements?", options: ["Students must be fluent in Spanish.", "All courses are taught in Spanish.", "Students must take one Spanish course each semester.", "There are no language courses."], answer: 2 },
          ],
        },
        {
          kind: "announcement",
          title: "Guest lecture",
          cast: { A: "en-US-ChristopherNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Good afternoon. The Department of Environmental Science is pleased to invite all students to a guest lecture by Dr. Anita Rao, who has spent ten years studying coral reefs in the Indian Ocean. The lecture will take place this Thursday at six p.m. in the Garcia Auditorium. It's free and open to everyone, but seating is limited, so please register on the department website. There will be time for questions afterward, followed by a short reception in the lobby." },
          ],
          questions: [
            { text: "What is the announcement about?", options: ["a new environmental science course", "a guest lecture on coral reefs", "a field trip to the Indian Ocean", "a change in auditorium hours"], answer: 1 },
            { text: "What should students who want to attend do?", options: ["buy a ticket", "register on the department website", "arrive at five", "email Dr. Rao"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "The spacing effect",
          cast: { A: "en-US-JennyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a psychology class.", pause: 1 },
            { who: "A", text: "Many students prepare for exams by cramming, studying intensively for many hours the night before. It feels productive, but research on memory suggests it's one of the least efficient ways to learn." },
            { who: "A", text: "More than a century ago, the psychologist Hermann Ebbinghaus discovered what's now called the spacing effect. He found that if he spread his study sessions out over several days, he remembered information much better than if he studied the same amount in one long session. Many later studies have confirmed this." },
            { who: "A", text: "Why does spacing help? One explanation is that when you return to material after a break, you've started to forget some of it, and the effort of recalling it strengthens the memory. In other words, a little forgetting actually helps learning. So, rather than studying a topic for three hours on one night, you'd remember more by studying it for one hour on three different days. The total time is the same, but the result is very different." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["why students feel stressed before exams", "the benefits of spacing out study sessions", "the life of Hermann Ebbinghaus", "how to sleep better"], answer: 1 },
            { text: "What did Ebbinghaus discover?", options: ["Cramming is the best way to learn.", "Spreading study over several days improves memory.", "People forget everything after one day.", "Long sessions are more efficient."], answer: 1 },
            { text: "According to the professor, why does spacing help?", options: ["The effort of recalling partly forgotten material strengthens memory.", "Students study for more total hours.", "Breaks allow students to sleep more.", "Information is easier the second time."], answer: 0 },
            { text: "Why does the professor compare three hours on one night with one hour on three days?", options: ["to show that the total time matters most", "to show that the same time used differently gives better results", "to recommend studying less", "to criticize long exams"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-JaneNeural", line: "Would you like tea or coffee?", options: ["Tea, please.", "I like the café.", "It's very hot.", "In the morning."], answer: 0 },
        { kind: "choose-response", voice: "en-US-JacobNeural", line: "When does the library close?", options: ["It's a big library.", "At ten o'clock tonight.", "I closed my book.", "On the second floor."], answer: 1 },
        { kind: "choose-response", voice: "en-US-MonicaNeural", line: "How was your weekend?", options: ["Next weekend.", "On Saturday.", "Great. I went hiking.", "It's a long weekend."], answer: 2 },
        { kind: "choose-response", voice: "en-US-BrandonNeural", line: "Do you need any help with your homework?", options: ["It's math homework.", "I did it at home.", "Homework is due Friday.", "Yes, please. I don't understand question five."], answer: 3 },
        { kind: "choose-response", voice: "en-US-LunaNeural", line: "Where should we meet?", options: ["How about in front of the library?", "At three o'clock.", "We met last week.", "With some friends."], answer: 0 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "Is this your phone?", options: ["It's a new phone.", "Yes, thank you. I was looking for it.", "Call me later.", "It's on the table."], answer: 1 },
        {
          kind: "conversation",
          title: "At the café",
          cast: { A: "en-US-AshleyNeural", B: "en-US-RogerNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a worker at a campus café.", pause: 1 },
            { who: "B", text: "Hi. Can I get a large coffee and a muffin, please?" },
            { who: "A", text: "Sure. We have blueberry or chocolate muffins." },
            { who: "B", text: "Blueberry, please. Do you take cards?" },
            { who: "A", text: "Yes, we do. And if you show your student card, you get ten percent off." },
          ],
          questions: [
            { text: "What does the student order?", options: ["tea and a sandwich", "a coffee and a blueberry muffin", "a chocolate muffin only", "two coffees"], answer: 1 },
            { text: "How can the student get a discount?", options: ["by paying with cash", "by showing his student card", "by ordering two items", "by coming in the morning"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "How hurricanes get their names",
          cast: { A: "en-US-AndrewNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a geography class.", pause: 1 },
            { who: "A", text: "Have you ever wondered why hurricanes have names like Katrina or Andrew? Giving storms names makes it easier for people to talk about them and to follow warnings, especially when there's more than one storm at the same time." },
            { who: "A", text: "Today, the names are chosen by the World Meteorological Organization. For Atlantic hurricanes, there are six lists of names, and they are used again every six years. Each list goes in alphabetical order." },
            { who: "A", text: "But if a hurricane is very destructive, its name is removed from the list and never used again. A new name replaces it. That's why there will never be another Hurricane Katrina." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how hurricanes form", "how hurricanes are named", "the worst hurricanes in history", "how to stay safe in a storm"], answer: 1 },
            { text: "Why are storms given names?", options: ["to make them easier to discuss and follow", "to honor famous people", "to make them less dangerous", "to measure their size"], answer: 0 },
            { text: "How often are the Atlantic name lists used again?", options: ["every year", "every three years", "every six years", "every ten years"], answer: 2 },
            { text: "What happens to the name of a very destructive hurricane?", options: ["It is used again the next year.", "It is removed from the list.", "It is given to a city.", "It is changed to a number."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "I was surprised the professor didn't mention the midterm at all today.", options: ["Maybe she'll send an email about it.", "The midterm was easy.", "I mentioned it to her.", "Today was a surprise party."], answer: 0 },
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "Wouldn't it make more sense to rent the textbook rather than buy it?", options: ["The textbook is on reserve.", "Probably, since I'll only need it for one semester.", "It makes sense to read it.", "I rented an apartment."], answer: 1 },
        { kind: "choose-response", voice: "en-US-MichelleNeural", line: "Didn't you say you were going to apply for the tutoring position?", options: ["The tutor is very helpful.", "I said it last week.", "I did, but the deadline was earlier than I thought.", "Positions are listed online."], answer: 2 },
        { kind: "choose-response", voice: "en-US-TonyNeural", line: "I'm not sure the results of our experiment support our hypothesis.", options: ["The experiment was in the lab.", "I'm sure it was Tuesday.", "We wrote the hypothesis first.", "Then maybe we should discuss it with the professor."], answer: 3 },
        { kind: "choose-response", voice: "en-US-EmmaNeural", line: "You'd better leave early if you want to get a seat at the lecture.", options: ["Thanks. I'll head over right after lunch.", "The lecture is about history.", "I left my seat.", "It's an early lecture."], answer: 0 },
        { kind: "choose-response", voice: "en-US-ChristopherNeural", line: "Has anyone figured out how to fix the projector in Room 210?", options: ["Room 210 is on the second floor.", "The technician is supposedly on his way.", "I projected the slides.", "It's a new room."], answer: 1 },
        {
          kind: "conversation",
          title: "Unexpected lab results",
          cast: { A: "en-US-RogerNeural", B: "en-US-LunaNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and her professor.", pause: 1 },
            { who: "B", text: "Professor Reyes, our group's results from the plant growth experiment don't match what the textbook predicts. The plants with more light actually grew less." },
            { who: "A", text: "Interesting. Before we decide the textbook is wrong, let's consider your setup. Where were the plants with more light kept?" },
            { who: "B", text: "On the shelf right under the extra lamps." },
            { who: "A", text: "Did you measure the temperature there? Those lamps produce quite a bit of heat. If the soil dried out faster, that could explain the result." },
            { who: "B", text: "Oh, we didn't think about that. We watered all the plants the same amount." },
            { who: "A", text: "So light might not be the only variable you changed. That doesn't mean your experiment failed. In your report, describe the result honestly, explain this possible cause, and suggest how you'd control for temperature next time. That's what good science looks like." },
          ],
          questions: [
            { text: "Why does the student go to see the professor?", options: ["to ask for an extension", "to discuss surprising experiment results", "to change her lab group", "to borrow equipment"], answer: 1 },
            { text: "What does the professor suggest may have affected the results?", options: ["the type of plant", "heat from the lamps drying the soil", "the amount of fertilizer", "errors in the textbook"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Flying buttresses",
          cast: { A: "en-US-NancyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an architecture class.", pause: 1 },
            { who: "A", text: "If you visit a Gothic cathedral, like Notre-Dame in Paris, you'll notice stone arches on the outside of the building that seem to fly out from the walls. These are called flying buttresses, and they solved a major engineering problem." },
            { who: "A", text: "Earlier churches had thick, heavy walls with small windows. That was necessary because a stone roof pushes outward on the walls, and thick walls were needed to resist that push. But medieval builders wanted taller churches filled with light, which meant thinner walls and much larger windows, which were weaker." },
            { who: "A", text: "The flying buttress transferred the outward push of the roof away from the walls, through the arch, and down into a heavy stone pier standing outside the building. Because the walls no longer carried all the force, they could be made thinner and opened up with enormous stained-glass windows. So something that looks decorative is actually the key structural element that made Gothic architecture possible." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["the history of stained glass", "how flying buttresses made Gothic architecture possible", "the construction of Notre-Dame", "why medieval churches were dark"], answer: 1 },
            { text: "Why did earlier churches need thick walls?", options: ["to keep the inside warm", "to resist the outward push of the roof", "to support large windows", "because thin stone was expensive"], answer: 1 },
            { text: "According to the professor, what did flying buttresses do?", options: ["They carried the roof's push to piers outside the building.", "They made the roof lighter.", "They held the windows in place.", "They decorated the walls."], answer: 0 },
            { text: "What does the professor imply about flying buttresses?", options: ["They are mainly decorative.", "Their appearance hides their structural importance.", "They were added after the cathedrals were built.", "They made cathedrals weaker."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ruby", prompt: "Why is the road closed?", chunks: ["they're", "repairing", "a water pipe", "under", "the street"], end: "." },
      { promptBy: "Adam", prompt: "Did you enjoy the book I lent you?", chunks: ["I loved", "it", "and", "finished it", "in two days"], end: "." },
      { promptBy: "Selin", prompt: "I'm having trouble sleeping before exams.", chunks: ["have you", "tried", "avoiding", "screens", "before bed"], end: "?" },
      { promptBy: "Victor", prompt: "Where are you going for your vacation?", chunks: ["we're", "planning", "a road trip", "along", "the coast"], end: "." },
      { promptBy: "Leah", prompt: "How did your team do in the tournament?", chunks: ["we reached", "the final", "but lost", "by", "one point"], end: "." },
      { promptBy: "Kenji", prompt: "Why did you choose this apartment?", chunks: ["it's", "within", "walking distance", "of", "campus"], end: "." },
      { promptBy: "Freya", prompt: "I can't find a partner for the lab.", chunks: ["would you", "like", "to work", "with", "my group"], end: "?" },
      { promptBy: "Omar", prompt: "What did the doctor tell you?", chunks: ["she told me", "to rest", "for", "a few", "days"], end: "." },
      { promptBy: "Julia", prompt: "Is the new campus app useful?", chunks: ["it shows", "when", "the buses", "will", "arrive"], end: "." },
      { promptBy: "Sami", prompt: "How long have you lived in this city?", chunks: ["I moved", "here", "about", "three years", "ago"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You want to attend an international student conference next month, but the conference website does not answer some of your questions.",
      to: "the conference organizers",
      subject: "Questions about the student conference",
      tasks: ["Explain why you are interested in the conference.", "Ask about the registration fee and any discounts.", "Ask whether accommodation is available."],
      sample: "Dear Conference Organizers,\n\nI'm a second-year environmental science student, and I'm very interested in attending your international student conference next month. In particular, I'd love to hear the sessions on climate adaptation, since that is the topic of my research project.\n\nI couldn't find information about the registration fee on your website. Could you tell me how much it costs, and whether there are discounts for students or for people who register early?\n\nI'd also like to know whether accommodation is available for participants. If the conference has an arrangement with nearby hotels or student housing, I'd be grateful for the details, as I'll be traveling from another city.\n\nThank you very much for your help. I look forward to hearing from you.\n\nKind regards,\nLaura Kim",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Business",
      professor: {
        name: "Dr. Brooks",
        text: "When students graduate, they often face a choice between working for a large, well-known company or joining a small business or start-up. Large companies may offer stability and structured training, while small companies may offer more responsibility and a chance to learn quickly. Which do you think is better for a recent graduate, and why?",
      },
      students: [
        { name: "Naomi", text: "I'd choose a large company. They usually have training programs and mentors, which is important when you have little experience. The salary and benefits are often better, too." },
        { name: "Leo", text: "I'd prefer a small company. At a start-up, you're given real responsibility from the first day, and you get to see how every part of a business works, not just one department." },
      ],
      sample: "For most recent graduates, I think a large company is the better first choice, although Leo makes a fair point about responsibility. Naomi is right that structured training and mentoring are extremely valuable at the beginning of a career, when you still need to learn professional skills such as managing projects and communicating with clients. A well-known company on your résumé can also open doors later. However, this depends on the person. A graduate who already has experience, for example from internships, or who wants to start a business one day, might benefit more from the broad experience Leo describes. Personally, I would spend two or three years at a large company to build a strong foundation, and then move to a smaller company, where I could use those skills and take on more responsibility.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are starting an internship at a local radio station. The station manager is showing you around.",
      sentences: [
        "Welcome to the radio station.",
        "The recording studio is down the hall.",
        "Please switch off your phone before entering the studio.",
        "The red light above the door means we are on air.",
        "Listeners often call in with questions during the morning show.",
        "You will help prepare the news summaries that we read at the top of every hour.",
        "If a guest arrives early for an interview, offer them something to drink and ask them to wait in the lounge.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people travel and what they enjoy about tourism. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe a place you visited that you really enjoyed.",
          sample: "One place I really enjoyed was Cappadocia, in central Turkey. I went there with friends two summers ago. The landscape is amazing, with strange rock formations called fairy chimneys, and some hotels are built inside caves. The highlight was getting up before sunrise to watch hundreds of hot-air balloons rise over the valleys. It felt like being in another world. We also explored underground cities that people built thousands of years ago, which was fascinating.",
        },
        {
          text: "Do you prefer to plan every detail of a trip in advance, or to be more spontaneous? Why?",
          sample: "I prefer a mix of both. I like to plan the important things in advance, like transportation and where I'm staying, because that saves money and reduces stress. But I don't like having every hour scheduled. Some of my best travel memories came from unplanned moments, like following a local's recommendation to a small restaurant or joining a festival I didn't know about. So I plan the basics and leave plenty of free time to explore.",
        },
        {
          text: "Some people think tourism does more harm than good to popular destinations. Do you agree? Why or why not?",
          sample: "I don't completely agree, but I think the concern is valid. Tourism brings jobs and income, and it helps preserve historic sites because there's money to maintain them. However, in very popular places, too many tourists can push up rents, crowd streets and damage the environment. So the problem isn't tourism itself, but poor management. Limits on visitor numbers, taxes that fund local services, and encouraging travel outside peak season can reduce the harm while keeping the benefits.",
        },
        {
          text: "How do you think travel and tourism will change in the next twenty years?",
          sample: "I think travel will become more environmentally conscious. More people may choose trains instead of short flights, and destinations might limit visitor numbers to protect their environment. Technology will also play a bigger role. For example, virtual reality could let people preview destinations, or even visit places that are too fragile to receive many tourists. At the same time, I expect working remotely to become more common, so people might stay in one place for weeks or months instead of taking short trips.",
        },
      ],
    },
  },
};
