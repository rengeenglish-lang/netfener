import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 1 (2026 format). Original Netfener content. */
export const TOEFL_1: ToeflTest = {
  id: "toefl-1",
  no: 1,
  title: "TOEFL iBT Practice Test 1",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Sleep and memory",
          text: "Scientists have long known that sleep is important for memory. During sl{{eep}}, the br{{ain}} replays the experiences of the day and stren{{gthens}} the connections between nerve ce{{lls}}. In one st{{udy}}, students who slept after learning a list of wo{{rds}} remembered more of them the next mor{{ning}} than students who stayed aw{{ake}}. Researchers bel{{ieve}} that even a short n{{ap}} can help.",
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Library study rooms",
          text: [
            "STUDY ROOMS – NEW BOOKING RULES",
            "Study rooms on the third floor can now be reserved online for up to two hours per day. Reservations open seven days in advance.",
            "If you do not arrive within 15 minutes of your start time, the room will be released to other students.",
            "Food is not permitted in study rooms. Drinks with lids are allowed.",
          ],
          questions: [
            { text: "What happens if a student arrives 20 minutes after the start of a reservation?", options: ["The student must pay a fee.", "The room may be given to someone else.", "The reservation is extended by 20 minutes.", "The student must book again online."], answer: 1 },
            { text: "What may students bring into a study room?", options: ["a sandwich", "a drink with a lid", "a laptop charger only", "nothing at all"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Change to café hours",
          text: [
            "To: All café staff",
            "From: Dana Ortiz, Café Manager",
            "Subject: New opening time",
            "Hi everyone,",
            "Starting next Monday, the café will open at 7:00 a.m. instead of 7:30 a.m. so that we can serve students with early classes. Anyone on the morning shift should arrive at 6:40 to set up. To make up for the earlier start, morning shifts will now end at 11:30 rather than at noon.",
            "If this change causes a problem with your class schedule, please let me know by Thursday so that I can adjust the schedule.",
            "Thanks,\nDana",
          ],
          questions: [
            { text: "What is the main purpose of the email?", options: ["to hire new staff", "to announce a change in opening time", "to cancel the morning shift", "to ask staff to work longer hours"], answer: 1 },
            { text: "What time should morning staff arrive from next Monday?", options: ["6:40 a.m.", "7:00 a.m.", "7:30 a.m.", "11:30 a.m."], answer: 0 },
            { text: "What should staff do if the new schedule is a problem for them?", options: ["find someone to replace them", "speak to their professor", "tell Dana by Thursday", "work the afternoon shift instead"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "How plants warn each other",
          paragraphs: [
            "Plants cannot run from danger, but they are far from defenseless. When a caterpillar begins to chew a leaf, many plants respond by producing chemicals that make their leaves taste bitter or become harder to digest. Some of these chemicals are released into the air as gases, known as volatile organic compounds.",
            "These airborne signals can have surprising effects. In experiments with sagebrush and tomato plants, researchers found that undamaged plants growing near injured ones began to strengthen their own defenses before any insect reached them. The healthy plants appeared to be responding to the chemical warnings of their neighbors.",
            "The gases can also attract help. Certain wasps lay their eggs inside caterpillars, and these wasps are drawn to the particular mixture of compounds released by a plant under attack. In effect, the plant calls in a bodyguard. Some farmers are now exploring whether this behavior could reduce the need for pesticides, for example by growing crop varieties that release especially strong signals.",
          ],
          questions: [
            { text: "According to paragraph 1, what do many plants do when an insect begins to eat them?", options: ["They drop their leaves.", "They produce chemicals that make their leaves less appealing.", "They grow more quickly.", "They stop producing seeds."], answer: 1 },
            { text: "The word \"defenseless\" in paragraph 1 is closest in meaning to", options: ["unprotected", "unaware", "unhealthy", "unmoving"], answer: 0 },
            { text: "What did the experiments with sagebrush and tomato plants show?", options: ["Damaged plants recovered faster when they were near healthy ones.", "Healthy plants strengthened their defenses after nearby plants were damaged.", "Insects preferred plants that released gases.", "Tomato plants produced more compounds than sagebrush."], answer: 1 },
            { text: "Why does the author mention wasps in paragraph 3?", options: ["to give an example of an insect that damages crops", "to show that plant signals can attract animals that attack harmful insects", "to explain why some plants produce bitter leaves", "to compare wasps with caterpillars"], answer: 1 },
            { text: "What can be inferred about the farmers mentioned in paragraph 3?", options: ["They have stopped using pesticides completely.", "They believe wasps are a serious danger to crops.", "They hope plant signals could help them use fewer chemicals.", "They grow only sagebrush and tomatoes."], answer: 2 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Farmers' markets",
          text: "Many towns hold a farmers' market once a week. At these mar{{kets}}, local farmers sell fr{{uit}}, vegetables, eggs and br{{ead}} directly to the pub{{lic}}. Shoppers often say the fo{{od}} tastes fresher than in large sto{{res}}. Farmers also ben{{efit}}, because they keep more of the mo{{ney}} from each sale. Some mar{{kets}} even offer cooking cla{{sses}} for children.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Message from a classmate",
          text: [
            "Hi Sam! The biology study group is moving from the library to Room 204 in the Science Building this week, because the library is closed for painting. Still Wednesday at 4. Can you bring the lab handout from Monday? I left mine at home. See you there! – Priya",
          ],
          questions: [
            { text: "Why is the study group meeting in a different place?", options: ["The library is being painted.", "Room 204 is larger.", "The professor asked them to move.", "The library closes at 4."], answer: 0 },
            { text: "When will the group meet?", options: ["Monday at 4", "Wednesday at 4", "Wednesday at 2", "Thursday at 4"], answer: 1 },
            { text: "What does Priya ask Sam to do?", options: ["book Room 204", "bring a handout", "call the professor", "meet her at the library"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why cats purr",
          paragraphs: [
            "Most people think that cats purr only when they are happy. It is true that a relaxed cat often purrs while it is being stroked. However, scientists have noticed that cats also purr in very different situations, for example when they are hurt, frightened or giving birth.",
            "This has led to a new idea. Purring is a low, steady vibration, usually between 25 and 150 vibrations per second. Some studies suggest that vibrations in this range may help bones and muscles to heal. If this is correct, purring might be a way for cats to calm themselves and to recover from injury.",
            "Kittens begin to purr when they are only a few days old, while they are feeding. Their mother often purrs back. For this reason, many researchers believe that purring started as a simple signal between a mother and her young that everything is all right.",
          ],
          questions: [
            { text: "According to paragraph 1, what do most people believe about purring?", options: ["It shows a cat is hungry.", "It shows a cat is happy.", "It only happens at night.", "It is a sign of illness."], answer: 1 },
            { text: "The word \"steady\" in paragraph 2 is closest in meaning to", options: ["loud", "regular", "sudden", "weak"], answer: 1 },
            { text: "According to paragraph 2, how might purring help an injured cat?", options: ["by scaring away other animals", "by helping bones and muscles heal", "by keeping the cat warm", "by making the cat sleep longer"], answer: 1 },
            { text: "When do kittens begin to purr?", options: ["when they are a few days old", "when they learn to walk", "when they are a year old", "only after they leave their mother"], answer: 0 },
            { text: "What is the main idea of the passage?", options: ["Cats purr for several reasons, not only happiness.", "Cats purr more than other animals.", "Kittens purr less than adult cats.", "Purring is harmful to bones."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Retreating glaciers",
          text: "Mountain glaciers are among the clearest indicators of a warming climate. Over the past cen{{tury}}, the vast maj{{ority}} of glaciers worldwide have lost a consid{{erable}} portion of their ma{{ss}}. This retr{{eat}} has serious conseq{{uences}} for communities that dep{{end}} on meltwater for drin{{king}} and irrig{{ation}}, particularly during dry sum{{mers}}.",
        },
        {
          kind: "daily-life",
          genre: "Policy notice",
          title: "Equipment loan policy",
          text: [
            "MEDIA CENTER EQUIPMENT LOANS",
            "Cameras, microphones and tripods may be borrowed for up to 72 hours by currently enrolled students. Items must be reserved at least one business day in advance through the student portal; same-day requests are accepted only if equipment remains available after 2 p.m.",
            "Late returns incur a fee of $5 per item per day. Students with two or more late returns in a semester will lose borrowing privileges for the remainder of that semester. Damage must be reported at the time of return; unreported damage discovered during inspection will be charged to the borrower.",
          ],
          questions: [
            { text: "Under what condition can a student borrow equipment on the same day as the request?", options: ["if the student has never returned an item late", "if the item is still available after 2 p.m.", "if the student pays an extra $5", "if the item is needed for less than 72 hours"], answer: 1 },
            { text: "What happens to a student who returns items late twice in one semester?", options: ["The student pays double the usual fee.", "The student must reserve items two days in advance.", "The student cannot borrow equipment for the rest of the semester.", "The student must have the equipment inspected."], answer: 2 },
            { text: "Why should students report damage when they return an item?", options: ["to avoid being charged for it later", "to receive a refund of their fee", "to extend their loan period", "to reserve a replacement item"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The origins of writing",
          paragraphs: [
            "Writing is often regarded as one of humanity's most transformative inventions, yet its origins were surprisingly practical. The earliest known writing system emerged in Mesopotamia, in what is now Iraq, around 3200 BCE. Rather than recording stories or religious texts, the first inscriptions were largely administrative: lists of goods, quantities of grain and records of payments.",
            "Archaeologists believe that this system developed gradually from an earlier practice of using small clay tokens to represent goods. Tokens of different shapes stood for different commodities, such as sheep or measures of oil. Over time, people began pressing the tokens into the surface of clay envelopes to show what the envelopes contained, and eventually they simply drew the symbols directly onto flat clay tablets, making the tokens unnecessary.",
            "Once symbols could be written rather than modeled, the system became far more flexible. Scribes started to use signs to represent sounds as well as objects, allowing them to record names and, later, complete sentences. Within a few centuries, the same script, now known as cuneiform, was being used for laws, letters and literature. The development of writing therefore illustrates how a tool created to solve an economic problem came to reshape culture as a whole.",
          ],
          questions: [
            { text: "According to paragraph 1, what was the main purpose of the earliest Mesopotamian writing?", options: ["recording religious stories", "keeping economic records", "teaching children to read", "communicating with distant cities"], answer: 1 },
            { text: "The word \"commodities\" in paragraph 2 is closest in meaning to", options: ["goods", "workers", "buildings", "tools"], answer: 0 },
            { text: "According to paragraph 2, why did clay tokens eventually become unnecessary?", options: ["They were too expensive to produce.", "People began drawing the symbols directly on tablets.", "Envelopes were replaced by baskets.", "The number of goods traded decreased."], answer: 1 },
            { text: "What made the writing system more flexible, according to paragraph 3?", options: ["the use of larger clay tablets", "the use of signs to represent sounds", "the introduction of a new language", "the training of more scribes"], answer: 1 },
            { text: "Which of the following best expresses the author's overall point?", options: ["Writing was invented mainly to record literature.", "Clay tokens were more useful than writing.", "A practical invention eventually had a broad cultural impact.", "Cuneiform was used only for laws and letters."], answer: 2 },
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
        { kind: "choose-response", voice: "en-US-JennyNeural", line: "Do you know if the bookstore is still open?", options: ["I think it closes at six.", "Yes, I read that book last year.", "It's on the second shelf.", "I opened it yesterday."], answer: 0 },
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "Would you mind if I borrowed your notes from Tuesday's lecture?", options: ["I didn't mind the lecture.", "Sure, I'll email them to you tonight.", "Tuesday works for me.", "They weren't very expensive."], answer: 1 },
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "Why wasn't Professor Lee in class this morning?", options: ["Class starts at nine.", "She teaches chemistry.", "I heard she's at a conference.", "Because I was late."], answer: 2 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "How did your presentation go?", options: ["It's at three o'clock.", "I went by bus.", "I'll present it next week.", "Better than I expected, actually."], answer: 3 },
        { kind: "choose-response", voice: "en-US-EmmaNeural", line: "Should we take the bus or walk to the stadium?", options: ["Let's walk. It's a nice evening.", "The stadium is very large.", "I took it yesterday.", "Yes, we should."], answer: 0 },
        { kind: "choose-response", voice: "en-US-AndrewNeural", line: "I can't find my student ID card anywhere.", options: ["My ID number is very long.", "Have you checked your jacket pocket?", "I've never been there.", "The card was a gift."], answer: 1 },
        { kind: "choose-response", voice: "en-US-SaraNeural", line: "Is the chemistry lab open on weekends?", options: ["It's very well equipped.", "I'm taking chemistry this term.", "Only on Saturday mornings.", "Every weekday at noon."], answer: 2 },
        { kind: "choose-response", voice: "en-US-BrianNeural", line: "Do you want to join our study group for the final exam?", options: ["The final was difficult.", "I joined the gym last week.", "No, it isn't final.", "I'd love to. When do you meet?"], answer: 3 },
        {
          kind: "conversation",
          title: "At the housing office",
          cast: { A: "en-US-TonyNeural", B: "en-US-AvaNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and an employee at the university housing office.", pause: 1 },
            { who: "B", text: "Hi. I'm living in Maple Hall, and I'd like to ask about changing rooms." },
            { who: "A", text: "Sure. Is there a problem with your current room?" },
            { who: "B", text: "Not with the room itself. It's just that it's right above the dining hall, and the noise starts at six every morning when they set up for breakfast. I have late lab classes, so I really need to sleep in." },
            { who: "A", text: "I see. Well, room changes usually open after the second week of the semester, so you'll be able to apply next Monday. You'll need to fill out a request form online." },
            { who: "B", text: "Is there any chance I could get a room in Cedar Hall? My lab partner lives there." },
            { who: "A", text: "Cedar Hall is very popular, so I can't promise anything. But if you list it as your first choice and add one or two other buildings, you'll have a much better chance of moving somewhere quieter." },
            { who: "B", text: "OK. I'll do that on Monday. Thanks." },
          ],
          questions: [
            { text: "Why does the student want to change rooms?", options: ["Her room is too small.", "Her room is noisy in the early morning.", "She wants to live closer to the dining hall.", "She does not like her roommate."], answer: 1 },
            { text: "What does the employee suggest the student do?", options: ["list more than one building on her form", "move to Cedar Hall immediately", "talk to her lab partner", "wait until next semester"], answer: 0 },
          ],
        },
        {
          kind: "announcement",
          title: "Library renovation",
          cast: { A: "en-US-NancyNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Attention, students. Beginning next week, the main library will be closed for renovation until the end of the month. During this time, the science library on Elm Street will extend its hours and stay open until midnight from Monday to Thursday. Books that you have already reserved can be picked up at the science library's front desk. And please note that all return dates for borrowed items have been extended automatically by two weeks, so there's no need to return anything during the renovation. Thank you." },
          ],
          questions: [
            { text: "What is the main purpose of the announcement?", options: ["to explain changes during a library renovation", "to advertise a new science course", "to remind students to return books", "to announce the opening of a new library"], answer: 0 },
            { text: "What does the speaker say about borrowed items?", options: ["They must be returned next week.", "Their return dates have been extended.", "They can be returned only on Elm Street.", "A fee will be charged for late returns."], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Hibernation",
          cast: { A: "en-US-ChristopherNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a biology class.", pause: 1 },
            { who: "A", text: "Today, I want to talk about hibernation. Many people imagine that hibernating animals are simply asleep all winter, but hibernation is actually very different from sleep. During true hibernation, an animal's body temperature drops dramatically. In some ground squirrels, it falls to just above freezing. Their heart rate may slow from around two hundred beats a minute to fewer than ten." },
            { who: "A", text: "Why do animals do this? The main reason is energy. In winter, food is hard to find, and keeping a body warm uses a huge amount of energy. By lowering their temperature, hibernating animals can survive for months on the fat they stored in autumn." },
            { who: "A", text: "Interestingly, most hibernators don't stay cold the whole time. Every week or two, they briefly warm up to a normal temperature for several hours, and then cool down again. Scientists aren't completely sure why. One idea is that these warm periods allow the animal's immune system to work properly, or let the brain carry out processes that only happen at normal temperatures. What's puzzling is that warming up uses most of the energy the animal spends all winter, so the benefit must be important." },
            { who: "A", text: "And bears, by the way, are a special case. Their body temperature only drops by a few degrees, so some scientists prefer to call their winter state 'torpor' rather than true hibernation." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how animals find food in winter", "the features and purpose of hibernation", "the differences between squirrels and bears", "why animals sleep at night"], answer: 1 },
            { text: "According to the professor, what is the main reason animals hibernate?", options: ["to avoid predators", "to save energy when food is scarce", "to raise their young", "to grow thicker fur"], answer: 1 },
            { text: "What does the professor find puzzling about the warm periods?", options: ["They happen only in bears.", "They use a large share of the animal's winter energy.", "They last for several weeks.", "They lower the animal's heart rate."], answer: 1 },
            { text: "Why does the professor mention bears?", options: ["to give an example of a typical hibernator", "to explain how fat is stored", "to point out that their winter state may not be true hibernation", "to show that bears have the lowest body temperature"], answer: 2 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-JaneNeural", line: "What time does the next train to the city leave?", options: ["In about ten minutes.", "It's a very fast train.", "I live in the city.", "Platform tickets are free."], answer: 0 },
        { kind: "choose-response", voice: "en-US-JasonNeural", line: "Can I help you carry those boxes?", options: ["They're full of books.", "Thanks, that would be great.", "I bought them online.", "No, they're not mine to sell."], answer: 1 },
        { kind: "choose-response", voice: "en-US-MichelleNeural", line: "Where did you buy that backpack?", options: ["Last weekend.", "Because it was on sale.", "At the shop next to the bank.", "It's very heavy."], answer: 2 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "Have you finished the reading for tomorrow?", options: ["Not yet. I'll do it tonight.", "It's a long book.", "Tomorrow is Friday.", "I read very fast."], answer: 0 },
        { kind: "choose-response", voice: "en-US-AshleyNeural", line: "Is this seat taken?", options: ["I'm taking biology.", "No, please go ahead.", "It's a comfortable seat.", "Yes, I took the bus."], answer: 1 },
        { kind: "choose-response", voice: "en-US-RogerNeural", line: "How long have you been learning Spanish?", options: ["It's a beautiful language.", "In the evening.", "With my roommate.", "About two years now."], answer: 3 },
        {
          kind: "conversation",
          title: "Buying a bus pass",
          cast: { A: "en-US-CoraNeural", B: "en-US-JacobNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a clerk at the student center.", pause: 1 },
            { who: "B", text: "Hi. Can I buy a bus pass here?" },
            { who: "A", text: "Yes. We have a monthly pass for forty dollars, or a semester pass for one hundred and twenty." },
            { who: "B", text: "The semester pass sounds like a better deal. I take the bus every day." },
            { who: "A", text: "It is. You'll save about forty dollars. I just need to see your student ID card." },
            { who: "B", text: "Here it is. Does the pass work on weekends too?" },
            { who: "A", text: "Yes, it works every day, on all city buses." },
          ],
          questions: [
            { text: "What does the student decide to buy?", options: ["a monthly pass", "a semester pass", "a weekend pass", "a single ticket"], answer: 1 },
            { text: "What does the clerk need to see?", options: ["the student's ID card", "the student's bus schedule", "a receipt", "a credit card"], answer: 0 },
          ],
        },
        {
          kind: "talk",
          title: "The first public libraries",
          cast: { A: "en-US-ElizabethNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a history class.", pause: 1 },
            { who: "A", text: "Today we're looking at public libraries. For most of history, books were very expensive, so only rich people and churches owned them. Libraries existed, but most were private." },
            { who: "A", text: "That began to change in the eighteenth and nineteenth centuries. Printing became cheaper, and more people learned to read. In many towns, groups of people paid a small fee to share a collection of books. These were called subscription libraries." },
            { who: "A", text: "The first free public libraries, paid for by taxes, appeared in the mid-eighteen hundreds. People supported them because they believed that anyone, rich or poor, should be able to educate themselves. Today, of course, libraries offer much more than books, including computers, classes and community events." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how books are printed", "the history of public libraries", "the most famous libraries in the world", "how to find books in a library"], answer: 1 },
            { text: "Why did most people not own books in the past?", options: ["Books were very expensive.", "Books were not allowed.", "There were no printers.", "People preferred newspapers."], answer: 0 },
            { text: "What were subscription libraries?", options: ["libraries run by churches", "collections shared by people who paid a small fee", "libraries paid for by taxes", "libraries for children"], answer: 1 },
            { text: "Why did people support free public libraries?", options: ["They wanted fewer private libraries.", "They thought everyone should be able to learn.", "They wanted to sell more books.", "They needed places for community events."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-AmberNeural", line: "I was hoping you could look over my research proposal before I submit it.", options: ["I submitted mine last week.", "I'd be happy to, but not until Thursday.", "The proposal was accepted.", "Research is really interesting."], answer: 1 },
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "Weren't you supposed to be at the career fair this afternoon?", options: ["It got moved to next Friday.", "I'm supposed to be a career.", "The fair was very crowded last year.", "This afternoon is fine."], answer: 0 },
        { kind: "choose-response", voice: "en-US-MonicaNeural", line: "I can't believe how long the line for registration was today.", options: ["Registration is online now.", "I registered for four classes.", "Tell me about it. I waited almost an hour.", "The line is on the map."], answer: 2 },
        { kind: "choose-response", voice: "en-US-BrandonNeural", line: "Do you think the professor will extend the deadline if we ask?", options: ["The deadline was extended to Friday last time.", "It's worth a try, but I wouldn't count on it.", "He's a very good professor.", "We asked him a question."], answer: 1 },
        { kind: "choose-response", voice: "en-US-JennyNeural", line: "You haven't seen my calculator, have you?", options: ["I've never used one.", "Mine is a scientific one.", "It costs about twenty dollars.", "I think Alex borrowed it."], answer: 3 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "I'm thinking of dropping my statistics class.", options: ["Are you sure? It's required for your major.", "Statistics are very useful.", "I dropped my phone yesterday.", "The class meets on Tuesdays."], answer: 0 },
        {
          kind: "conversation",
          title: "Office hours: a research topic",
          cast: { A: "en-US-RogerNeural", B: "en-US-EmmaNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and her professor.", pause: 1 },
            { who: "B", text: "Professor Hall, do you have a minute? I wanted to talk about my research paper topic." },
            { who: "A", text: "Of course. You were planning to write about the history of urban parks, weren't you?" },
            { who: "B", text: "Yes, but I'm finding that there's so much material that I don't know where to start. Every city seems to have a different story." },
            { who: "A", text: "That's a common problem with a broad topic. Have you thought about focusing on a single question? For instance, why did cities start building large public parks in the nineteenth century in the first place?" },
            { who: "B", text: "Actually, that's what interests me most. I read that some planners thought parks would improve public health." },
            { who: "A", text: "Exactly. And there were other motives too, like raising property values. If you compare two or three cities with that one question in mind, you'll have a much more focused paper. The library has a good collection of planning documents from that period, so start there." },
          ],
          questions: [
            { text: "What problem does the student have with her paper?", options: ["She cannot find any sources.", "Her topic is too broad.", "She has missed the deadline.", "She does not understand the assignment."], answer: 1 },
            { text: "What does the professor imply about the reasons cities built parks?", options: ["Public health was the only reason.", "There was more than one motive.", "Parks were built mainly for tourists.", "The reasons are unknown."], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Coral bleaching",
          cast: { A: "en-US-AvaNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a marine biology class.", pause: 1 },
            { who: "A", text: "Let's continue with coral reefs. As you know, corals are animals, but they depend on a partnership with tiny algae that live inside their tissues. The algae carry out photosynthesis and pass much of the energy they produce to the coral. In return, the coral provides the algae with shelter and nutrients. The algae are also what give many corals their bright colors." },
            { who: "A", text: "Now, when the water becomes too warm, even by one or two degrees above the usual summer maximum, this partnership breaks down. The stressed algae start producing harmful substances, and the coral expels them. Without the algae, the coral's white skeleton shows through its transparent tissue. That's what we call bleaching." },
            { who: "A", text: "It's important to understand that a bleached coral isn't dead, at least not immediately. If temperatures return to normal fairly quickly, the coral can take in new algae and recover. But if the heat lasts for weeks, the coral essentially starves. And recovery takes time. A reef that's been badly bleached may need a decade or more to return to its previous condition, which is a problem when bleaching events are becoming more frequent." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how algae are used in medicine", "what causes coral bleaching and its effects", "why corals are brightly colored", "how reefs are formed"], answer: 1 },
            { text: "What do the algae provide to the coral?", options: ["shelter", "energy", "a skeleton", "protection from heat"], answer: 1 },
            { text: "According to the professor, what happens if water temperatures return to normal quickly?", options: ["The coral dies immediately.", "The coral can take in new algae and recover.", "The coral turns white permanently.", "The algae produce harmful substances."], answer: 1 },
            { text: "Why does the professor mention that bleaching events are becoming more frequent?", options: ["to suggest that reefs may not have enough time to recover", "to show that scientists can predict bleaching", "to explain why corals are animals", "to argue that algae are adapting to heat"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Maya", prompt: "What did you think of the new café on campus?", chunks: ["the coffee", "was", "much better", "than", "I expected"], end: "." },
      { promptBy: "Leo", prompt: "Are you going to the lecture this evening?", chunks: ["I can't", "because", "I have", "to work", "until nine"], end: "." },
      { promptBy: "Ana", prompt: "I lost the email with the meeting details.", chunks: ["do you", "want me", "to forward", "it", "to you"], end: "?" },
      { promptBy: "Sam", prompt: "Why is the library so crowded today?", chunks: ["most students", "are studying", "for", "tomorrow's", "exam"], end: "." },
      { promptBy: "Kim", prompt: "Which history course should I take next term?", chunks: ["I would", "recommend", "the one", "about", "ancient Rome"], end: "." },
      { promptBy: "Ravi", prompt: "How was your trip to the coast?", chunks: ["it rained", "the whole time", "but", "we still", "had fun"], end: "." },
      { promptBy: "Elif", prompt: "I'm not sure how to start my essay.", chunks: ["have you", "made", "an outline", "of", "your main points"], end: "?" },
      { promptBy: "Tom", prompt: "Did the professor say when the results would be posted?", chunks: ["she said", "they would be", "online", "by", "Friday"], end: "." },
      { promptBy: "Nina", prompt: "Where should we meet before the concert?", chunks: ["how about", "the main entrance", "of", "the", "music building"], end: "?" },
      { promptBy: "Omar", prompt: "Why did you decide to study engineering?", chunks: ["I have always", "been interested", "in", "how machines", "work"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently joined a hiking club at your university. The club has planned a trip for next Saturday, but you have an important exam on the same day.",
      to: "Ms. Rivera (club leader)",
      subject: "Next Saturday's hiking trip",
      tasks: ["Explain the problem.", "Ask whether you can join a later trip.", "Suggest a way you could help the club."],
      sample: "Dear Ms. Rivera,\n\nI'm writing about the hiking trip planned for next Saturday. Unfortunately, I have my final chemistry exam that morning, so I won't be able to join the group. I was really looking forward to it, since it would have been my first trip with the club.\n\nCould you tell me whether the club is planning any other trips this semester? I'd love to sign up for the next one as soon as the details are available.\n\nIn the meantime, I'd be happy to help in other ways. For example, I could help prepare the equipment on Friday evening or design a poster to advertise future trips. Please let me know if either of these would be useful.\n\nBest regards,\nJordan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education",
      professor: {
        name: "Dr. Okafor",
        text: "This week we've been discussing how students learn best. Some educators argue that homework should be eliminated in high schools, because students already spend many hours in class and need time for rest, family and other activities. Others believe homework is essential for practice and for developing independent study skills. What is your view? Should high schools stop assigning homework? Why or why not?",
      },
      students: [
        { name: "Claire", text: "I think homework should be greatly reduced, if not eliminated. When I was in high school, I often stayed up past midnight finishing assignments, and I was exhausted in class the next day. Students would learn more if they were well rested." },
        { name: "Marcus", text: "I disagree. Some subjects, like math and languages, require regular practice, and there simply isn't enough class time. Homework also teaches students to manage their time, which is a skill they'll need at university." },
      ],
      sample: "I understand Claire's concern about exhaustion, but I agree with Marcus that eliminating homework completely would be a mistake. In my view, the problem is not homework itself but how much is assigned and what kind it is. Short, focused assignments, such as solving a few math problems or reviewing new vocabulary, help students remember what they learned in class far better than reading notes the night before a test. On the other hand, long projects that simply repeat classwork waste students' time. For example, my high school limited homework to about an hour a night across all subjects, and most students found this manageable. So instead of banning homework, schools should set clear limits and make sure every assignment has a specific purpose.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-JennyNeural",
    repeat: {
      scene: "You are a new volunteer at a science museum. A guide is showing you around.",
      sentences: [
        "Welcome to the science museum.",
        "The main hall is on your left.",
        "Visitors can leave their coats at the front desk.",
        "Please remind guests not to touch the old instruments.",
        "The planetarium show begins every hour on the hour.",
        "School groups usually arrive in the morning, so the afternoons are quieter.",
        "If anyone asks for directions to the café, it is next to the gift shop on the second floor.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people use public libraries. The researcher will ask you some questions.",
      questions: [
        {
          text: "How often do you visit a library, and what do you usually do there?",
          sample: "I go to the library about twice a week, usually in the evening. Mostly I use it as a quiet place to study, because my apartment can get noisy. I also borrow novels from time to time, especially before a holiday, and I sometimes use the printers when I need to print assignments. It's a really useful place for me, especially during exam periods, when I spend several hours there at a time.",
        },
        {
          text: "Describe a library or study space that you particularly like.",
          sample: "My favorite study space is the reading room on the top floor of our university library. It has very high windows, so it's full of natural light during the day, and it's completely silent. There are long wooden tables with lamps, and plenty of power outlets for laptops. What I like most is the atmosphere. Everyone around you is concentrating, so it motivates you to focus too. I usually get much more done there than anywhere else.",
        },
        {
          text: "Some people say that libraries are less important now that so much information is available online. Do you agree? Why or why not?",
          sample: "I don't really agree. It's true that we can find a lot of information online, but libraries offer things the internet can't. First, they give everyone free access to books, computers and the internet, which is important for people who can't afford them. Second, librarians can help you find reliable sources, which matters because a lot of online information isn't accurate. And libraries also provide a quiet public space for studying and community events, which is something you can't download.",
        },
        {
          text: "In the future, what new services do you think libraries should offer? Explain your answer.",
          sample: "I think libraries should offer more practical workshops, for example on using technology or managing personal finances. Many older people struggle with online banking or government websites, and libraries are trusted places where they could get help. Libraries could also lend useful equipment, like cameras or tools, so that people don't have to buy things they only need once. That would save money and be better for the environment, while keeping libraries relevant for the whole community.",
        },
      ],
    },
  },
};
