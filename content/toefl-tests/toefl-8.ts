import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 8 (2026 format). Original Netfener content. */
export const TOEFL_8: ToeflTest = {
  id: "toefl-8",
  no: 8,
  title: "TOEFL iBT Practice Test 8",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The history of chocolate",
          text: "Chocolate is made from the seeds of the cacao tree, which grows in tropical regions. The ancient Maya and Aztecs prep{{ared}} a bitter drink from roasted cacao se{{eds}}, often mixed with chili and wa{{ter}}. Cacao was so val{{ued}} that the Aztecs even us{{ed}} it as money. When the dr{{ink}} reached Europe in the sixteenth cen{{tury}}, people added sug{{ar}} to make it swe{{eter}}. Solid chocolate bars did not app{{ear}} until the nineteenth century.",
        },
        {
          kind: "daily-life",
          genre: "Sign",
          title: "Swimming pool rules",
          text: [
            "UNIVERSITY POOL – PLEASE READ",
            "All swimmers must shower before entering the pool. Children under 12 must be accompanied by an adult at all times.",
            "Lap lanes are reserved for swimmers who can complete at least four lengths without stopping. Lifeguards are on duty during all opening hours.",
          ],
          questions: [
            { text: "What must all swimmers do before entering the pool?", options: ["pay a fee", "take a shower", "show an ID card", "take a swimming test"], answer: 1 },
            { text: "Who may use the lap lanes?", options: ["children under 12", "anyone with a ticket", "swimmers who can swim four lengths without stopping", "only lifeguards"], answer: 2 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Club meeting change",
          text: [
            "To: Photography Club members",
            "From: Elena",
            "Subject: Meeting moved to Friday",
            "Hi everyone,",
            "Because the art building will be closed on Wednesday for an inspection, this week's meeting will take place on Friday at 5:00 p.m. instead, in Room 104 of the library.",
            "We'll still be reviewing the photos from last weekend's trip to the lake, so please upload your three best pictures to the shared folder by Thursday night. Snacks will be provided!",
            "Elena",
          ],
          questions: [
            { text: "Why has the meeting been moved?", options: ["Elena is sick.", "The art building will be closed.", "The trip was canceled.", "The library is busy on Wednesday."], answer: 1 },
            { text: "Where will the meeting take place?", options: ["at the lake", "in the art building", "in Room 104 of the library", "online"], answer: 2 },
            { text: "What should members do before the meeting?", options: ["buy snacks", "upload three photos", "print their pictures", "pay the club fee"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Mangrove forests",
          paragraphs: [
            "Mangroves are trees and shrubs that grow along tropical and subtropical coastlines, in the zone where land meets the sea. Few plants can survive in salt water, but mangroves have developed remarkable adaptations. Some filter salt out through their roots, while others get rid of it through special glands in their leaves.",
            "Mangrove forests provide important benefits to coastal communities. Their dense, tangled roots slow down waves and trap sediment, which protects shorelines from erosion and reduces damage from storms. The roots also create sheltered underwater spaces where young fish can grow safely, making mangroves essential nurseries for many species that are later caught by fishers.",
            "In addition, mangroves store large amounts of carbon in their soil, more per hectare than many tropical rainforests. Despite this value, a significant portion of the world's mangroves has been cleared over the past fifty years, often to make room for shrimp farms and coastal development. Today, many countries are working to restore these forests by planting young mangroves along damaged coastlines.",
          ],
          questions: [
            { text: "According to paragraph 1, what is special about mangroves?", options: ["They grow only in cold regions.", "They can survive in salt water.", "They need very little sunlight.", "They grow only on mountains."], answer: 1 },
            { text: "The word \"dense\" in paragraph 2 is closest in meaning to", options: ["thick", "weak", "colorful", "short"], answer: 0 },
            { text: "According to paragraph 2, how do mangroves help young fish?", options: ["by providing sheltered spaces to grow", "by cleaning the water of salt", "by giving them food from their leaves", "by keeping predators away with chemicals"], answer: 0 },
            { text: "What does the author say about the carbon stored by mangroves?", options: ["It is less than in grasslands.", "It is more per hectare than in many rainforests.", "It is released by their leaves.", "It harms young fish."], answer: 1 },
            { text: "What is one reason mangroves have been cleared?", options: ["to build shrimp farms", "to stop erosion", "to create nurseries for fish", "to plant rainforests"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Starting a garden",
          text: "Growing your own vegetables is fun and healthy. First, choose a sp{{ot}} that gets plenty of sunl{{ight}}. Next, prepare the so{{il}} by removing stones and we{{eds}}. Easy plants for begin{{ners}} include tomatoes, beans and lett{{uce}}. Remember to wa{{ter}} your plants regularly, especially when the wea{{ther}} is hot. After a few we{{eks}}, you can enjoy fresh food from your own gar{{den}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Bike for sale",
          text: [
            "FOR SALE: BLUE MOUNTAIN BIKE",
            "Used for one year, in excellent condition. New tires and brakes. Comes with a lock and a front light.",
            "Price: $120 (new price $300). I'm moving abroad, so I need to sell it quickly. Call or text Ben at 555-0193 after 5:00 p.m.",
          ],
          questions: [
            { text: "What comes with the bike?", options: ["a helmet and gloves", "a lock and a front light", "a basket", "a bike rack"], answer: 1 },
            { text: "Why is Ben selling the bike?", options: ["It is broken.", "He bought a car.", "He is moving abroad.", "It is too small for him."], answer: 2 },
            { text: "When should people contact Ben?", options: ["after 5:00 p.m.", "before noon", "only on weekends", "any time"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Polar bears and sea ice",
          paragraphs: [
            "Polar bears live in the Arctic, one of the coldest places on Earth. They are excellent swimmers, but they depend on sea ice to survive.",
            "Polar bears mainly eat seals. They wait on the ice next to small holes where seals come up to breathe. When a seal appears, the bear catches it. Without ice, it is very difficult for polar bears to hunt.",
            "Because the Arctic is getting warmer, the sea ice melts earlier in the spring and forms later in the fall. This means polar bears have less time to hunt, and many of them become thinner. Scientists are worried that polar bear numbers may fall in the future.",
          ],
          questions: [
            { text: "Where do polar bears live?", options: ["in the Antarctic", "in the Arctic", "in forests", "in deserts"], answer: 1 },
            { text: "What do polar bears mainly eat?", options: ["fish", "plants", "seals", "birds"], answer: 2 },
            { text: "Why do polar bears wait next to holes in the ice?", options: ["to drink water", "to catch seals that come up to breathe", "to sleep", "to stay warm"], answer: 1 },
            { text: "The word \"appears\" in paragraph 2 is closest in meaning to", options: ["comes into view", "swims away", "makes a noise", "falls asleep"], answer: 0 },
            { text: "Why are scientists worried about polar bears?", options: ["They are eating too many seals.", "Melting ice gives them less time to hunt.", "They are moving to cities.", "They cannot swim well."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Game theory",
          text: "Game theory is the mathematical study of strategic decision-making, in which the outcome for each participant depe{{nds}} on the choices of others. Its most fam{{ous}} example is the prisoner's dil{{emma}}, in which two people would both ben{{efit}} from cooperating, yet each has an indiv{{idual}} incentive to betray the other. Economists apply these mod{{els}} to price competition between fi{{rms}}, while biologists use them to expl{{ain}} why cooperation evol{{ves}} among animals that might otherwise comp{{ete}}.",
        },
        {
          kind: "daily-life",
          genre: "Policy notice",
          title: "Course withdrawal policy",
          text: [
            "COURSE WITHDRAWAL – IMPORTANT DATES",
            "Students may drop a course without any record on their transcript until the end of the second week of classes. After this date and until the end of the eighth week, students may still withdraw, but a grade of \"W\" will appear on their transcript. A \"W\" does not affect the grade point average.",
            "Withdrawals are not permitted after the eighth week except in cases of serious illness or family emergency, which must be supported by documentation and approved by the Dean of Students.",
          ],
          questions: [
            { text: "What happens if a student drops a course in the first two weeks?", options: ["A \"W\" appears on the transcript.", "Nothing appears on the transcript.", "The student's GPA is lowered.", "The student must pay a fine."], answer: 1 },
            { text: "What is true about a grade of \"W\"?", options: ["It lowers the GPA.", "It does not affect the GPA.", "It counts as a failing grade.", "It is removed after one year."], answer: 1 },
            { text: "Under what condition may a student withdraw after the eighth week?", options: ["if the course is too difficult", "if the student has a documented serious illness or family emergency", "if the professor agrees", "if the student pays an extra fee"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The Bronze Age collapse",
          paragraphs: [
            "Around 1200 BCE, the eastern Mediterranean was home to a network of prosperous societies, including the Egyptians, the Hittites in Anatolia, the Mycenaeans in Greece and wealthy trading cities along the Levantine coast. These states exchanged copper, tin, grain and luxury goods across long distances, and their rulers maintained diplomatic correspondence with one another. Within roughly fifty years, however, much of this world had fallen apart. Several major cities were destroyed, long-distance trade declined sharply, and in some regions writing itself disappeared for centuries.",
            "Historians have proposed many explanations for this collapse. Ancient Egyptian records describe attacks by groups they called the \"Sea Peoples,\" and some scholars once considered these invaders the main cause. Other researchers point to evidence of a prolonged drought, revealed by pollen samples and sediment cores, which could have caused crop failures and famine. Earthquakes, internal rebellions and the disruption of trade routes have also been suggested.",
            "Today, many historians favor an explanation based on systems collapse. Because the Bronze Age economies were so interconnected, a problem in one area could quickly spread to others. Bronze, for example, required both copper and tin, which often came from distant regions; if trade routes were interrupted, the production of tools and weapons could stop. In this view, no single factor destroyed Bronze Age civilization. Instead, several stresses occurring together overwhelmed a system that was efficient but fragile, and the very connections that had made these societies rich made them vulnerable.",
          ],
          questions: [
            { text: "According to paragraph 1, which of the following was a result of the collapse?", options: ["Trade between regions increased.", "Writing disappeared in some regions.", "New cities were founded in Anatolia.", "Egypt conquered the Hittites."], answer: 1 },
            { text: "The word \"prolonged\" in paragraph 2 is closest in meaning to", options: ["sudden", "long-lasting", "mild", "local"], answer: 1 },
            { text: "According to paragraph 2, what evidence suggests that drought played a role?", options: ["Egyptian records", "pollen samples and sediment cores", "letters between rulers", "destroyed weapons"], answer: 1 },
            { text: "Why does the author mention copper and tin in paragraph 3?", options: ["to explain why bronze was expensive", "to illustrate how dependence on trade made societies vulnerable", "to describe the main exports of Egypt", "to show that bronze tools were of poor quality"], answer: 1 },
            { text: "Which statement best expresses the systems-collapse view?", options: ["The Sea Peoples alone destroyed the Bronze Age world.", "A single earthquake caused the collapse.", "Several stresses together overwhelmed an interconnected but fragile system.", "The collapse was caused by the invention of iron."], answer: 2 },
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
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "When is the deadline for the scholarship application?", options: ["I applied last year.", "It's the end of this month.", "The scholarship is generous.", "I'm applying for two."], answer: 1 },
        { kind: "choose-response", voice: "en-US-ElizabethNeural", line: "Would you mind closing the window?", options: ["Not at all. Is it too cold?", "The window is large.", "I closed my account.", "I don't mind the view."], answer: 0 },
        { kind: "choose-response", voice: "en-US-BrianNeural", line: "Why is the cafeteria so crowded today?", options: ["The cafeteria is on the first floor.", "I'm not hungry.", "They're serving free pizza for the club fair.", "Today is Tuesday."], answer: 2 },
        { kind: "choose-response", voice: "en-US-AvaNeural", line: "Did you finish reading the article for seminar?", options: ["The seminar is long.", "I read the newspaper every day.", "The article was printed.", "Almost. I have about five pages left."], answer: 3 },
        { kind: "choose-response", voice: "en-US-JasonNeural", line: "Who's giving the presentation for your group?", options: ["Our presentation is about water.", "We decided to split it among all four of us.", "It was a great presentation.", "The group meets on Monday."], answer: 1 },
        { kind: "choose-response", voice: "en-US-NancyNeural", line: "How do I get a parking permit for campus?", options: ["You can apply online through the transportation office.", "I parked near the library.", "The permit is green.", "I don't have a car."], answer: 0 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "Are you going home for the winter break?", options: ["The break is three weeks.", "Winter is my favorite season.", "Yes, I'm flying out on the twentieth.", "I broke my phone."], answer: 2 },
        { kind: "choose-response", voice: "en-US-SaraNeural", line: "Is it okay if I record the lecture on my phone?", options: ["The lecture was recorded last year.", "My phone is new.", "It's a long lecture.", "You'll need to ask the professor first."], answer: 3 },
        {
          kind: "conversation",
          title: "Applying for a campus job",
          cast: { A: "en-US-AmberNeural", B: "en-US-KaiNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a library supervisor.", pause: 1 },
            { who: "B", text: "Hi. I saw that the library is hiring student assistants. Is the position still open?" },
            { who: "A", text: "Yes, it is. We need someone to work at the circulation desk, mostly in the evenings. Are you available after six?" },
            { who: "B", text: "Most nights, yes, except Wednesdays, when I have a lab." },
            { who: "A", text: "That's fine. We schedule around classes. Do you have any customer service experience?" },
            { who: "B", text: "I worked at a bookstore last summer." },
            { who: "A", text: "Perfect. Please fill out the application online and attach a short reference from your manager at the bookstore." },
          ],
          questions: [
            { text: "When would the student mostly work?", options: ["in the mornings", "in the evenings", "only on weekends", "on Wednesdays"], answer: 1 },
            { text: "What does the supervisor ask the student to include with the application?", options: ["a reference from his previous manager", "his class schedule", "a copy of his ID", "a writing sample"], answer: 0 },
          ],
        },
        {
          kind: "announcement",
          title: "Volunteer day",
          cast: { A: "en-US-ChristopherNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Hello, everyone. This Saturday is our annual Community Volunteer Day. Students can choose from several projects, including cleaning up the riverbank, helping at the city food bank, and reading to children at the public library. Buses will leave from the student center at eight thirty a.m., and lunch will be provided for all volunteers. If you'd like to take part, please sign up at the volunteer office by Thursday so that we can arrange enough transportation. And remember to wear comfortable clothes and shoes." },
          ],
          questions: [
            { text: "What is one of the projects students can choose?", options: ["painting a school", "cleaning up the riverbank", "planting trees in the park", "building a playground"], answer: 1 },
            { text: "Why should students sign up by Thursday?", options: ["so that enough transportation can be arranged", "so that they can receive a certificate", "so that lunch can be ordered", "so that they can choose their partners"], answer: 0 },
          ],
        },
        {
          kind: "talk",
          title: "Roman concrete",
          cast: { A: "en-US-JennyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an engineering class.", pause: 1 },
            { who: "A", text: "Some Roman structures, like harbor walls built in the sea, have survived for about two thousand years. Meanwhile, modern concrete structures can start to crack and crumble within a few decades. So what did the Romans know that we didn't?" },
            { who: "A", text: "Roman concrete was made by mixing lime with volcanic ash. When seawater soaked into this material, it caused a slow chemical reaction that actually formed new minerals inside the concrete. These minerals filled small cracks and made the structure stronger over time, instead of weaker." },
            { who: "A", text: "Researchers have also found small white lumps of lime in Roman concrete. For a long time, people assumed these were mistakes caused by poor mixing. But recent studies suggest they may have been useful. When water enters a crack, it dissolves some of the lime, which then hardens again and seals the crack. In other words, the concrete could partly repair itself. Engineers are now studying these materials to design longer-lasting concrete for today's buildings." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["why Roman concrete lasted so long", "the history of Roman harbors", "how volcanoes form ash", "problems with modern buildings"], answer: 0 },
            { text: "What happened when seawater soaked into Roman concrete?", options: ["The concrete dissolved.", "New minerals formed and strengthened it.", "The concrete changed color.", "Cracks became larger."], answer: 1 },
            { text: "What does the professor say about the white lumps of lime?", options: ["They were definitely mistakes.", "They made the concrete weaker.", "They may have helped the concrete repair itself.", "They were added for decoration."], answer: 2 },
            { text: "Why are modern engineers interested in Roman concrete?", options: ["to restore ancient buildings", "to design longer-lasting concrete", "to reduce the cost of lime", "to build in volcanic areas"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-JaneNeural", line: "Is it going to rain today?", options: ["I hope not. I didn't bring an umbrella.", "It rained a lot.", "I like the rain.", "In the afternoon."], answer: 0 },
        { kind: "choose-response", voice: "en-US-JacobNeural", line: "How much is this T-shirt?", options: ["It's a large.", "It's fifteen dollars.", "It's made of cotton.", "It's blue."], answer: 1 },
        { kind: "choose-response", voice: "en-US-MonicaNeural", line: "Do you have any brothers or sisters?", options: ["My mother is a teacher.", "I live with my family.", "I have one older sister.", "Yes, I have a dog."], answer: 2 },
        { kind: "choose-response", voice: "en-US-BrandonNeural", line: "Where did you go on vacation?", options: ["For two weeks.", "Last summer.", "With my friends.", "We went to the mountains."], answer: 3 },
        { kind: "choose-response", voice: "en-US-LunaNeural", line: "Would you like to come to the movies with us?", options: ["I'd love to. What time?", "The movie is long.", "I watched TV.", "Movies are expensive."], answer: 0 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "Why are you so tired today?", options: ["I'm tired of it.", "I stayed up late studying.", "Today is Monday.", "I'm going to bed."], answer: 1 },
        {
          kind: "conversation",
          title: "At the doctor's office",
          cast: { A: "en-US-AshleyNeural", B: "en-US-RogerNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a receptionist at the campus health center.", pause: 1 },
            { who: "B", text: "Hi. I have a bad cough. Can I see a doctor today?" },
            { who: "A", text: "Let me check. The next appointment is at three fifteen. Does that work for you?" },
            { who: "B", text: "Yes, that's fine. Do I need to bring anything?" },
            { who: "A", text: "Just your student ID and your insurance card. Please arrive ten minutes early to fill out a form." },
          ],
          questions: [
            { text: "Why does the student want to see a doctor?", options: ["He has a headache.", "He has a bad cough.", "He hurt his leg.", "He needs a vaccine."], answer: 1 },
            { text: "What should the student bring?", options: ["a form from his professor", "his student ID and insurance card", "some money", "a list of his classes"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Why we have time zones",
          cast: { A: "en-US-AndrewNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a geography class.", pause: 1 },
            { who: "A", text: "Long ago, every town set its clocks by the sun. When the sun was highest in the sky, it was noon. This meant that two towns only a short distance apart could have slightly different times." },
            { who: "A", text: "This wasn't a problem until railroads were built. Trains traveled quickly between towns, and with so many different local times, it was very hard to make clear train schedules." },
            { who: "A", text: "So, in the late eighteen hundreds, countries agreed to divide the world into time zones. Each zone is about fifteen degrees wide, and the time changes by one hour from one zone to the next. That's why, when it's morning in New York, it's already afternoon in London." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how clocks work", "why time zones were created", "the history of London", "how to read a train schedule"], answer: 1 },
            { text: "How did towns set their clocks long ago?", options: ["by the sun", "by the radio", "by train schedules", "by the moon"], answer: 0 },
            { text: "What problem did railroads face?", options: ["Trains were too slow.", "Different local times made schedules difficult.", "There were not enough stations.", "Tickets were expensive."], answer: 1 },
            { text: "How much does the time usually change from one zone to the next?", options: ["fifteen minutes", "thirty minutes", "one hour", "two hours"], answer: 2 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "I thought the reading list for this course was supposed to be shorter.", options: ["So did I. It's twice as long as last year's.", "I read a short story.", "The course is in Room 12.", "I made a list."], answer: 0 },
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "Shouldn't we confirm the room booking before we invite the speaker?", options: ["The speaker was very good.", "I booked a flight.", "Good point. I'll call the events office now.", "The room is large."], answer: 2 },
        { kind: "choose-response", voice: "en-US-MichelleNeural", line: "Why didn't you tell me the review session had been canceled?", options: ["The review was positive.", "I'm sorry. I only found out an hour ago myself.", "The session is at two.", "I told the professor."], answer: 1 },
        { kind: "choose-response", voice: "en-US-TonyNeural", line: "I doubt we'll be able to finish the survey analysis by Friday.", options: ["The survey has ten questions.", "Friday is a holiday.", "We analyzed it carefully.", "Then let's ask for a short extension now."], answer: 3 },
        { kind: "choose-response", voice: "en-US-EmmaNeural", line: "Do you happen to know if the computer lab has the statistics software?", options: ["It does, but only on the machines in the back row.", "I happen to like statistics.", "The lab closes at nine.", "My computer is slow."], answer: 0 },
        { kind: "choose-response", voice: "en-US-ChristopherNeural", line: "Isn't it a bit risky to choose such a broad topic for your thesis?", options: ["The thesis is due in May.", "Maybe. My advisor suggested I narrow it down.", "I chose it yesterday.", "It's a popular topic."], answer: 1 },
        {
          kind: "conversation",
          title: "Choosing a research topic",
          cast: { A: "en-US-RogerNeural", B: "en-US-LunaNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and her professor.", pause: 1 },
            { who: "B", text: "Professor Grant, I'd like to write my research paper on social media, but I'm not sure exactly what to focus on." },
            { who: "A", text: "Social media is a huge topic. What aspect interests you most?" },
            { who: "B", text: "I've noticed that my younger brother checks his phone constantly, even during dinner. I wonder how it affects teenagers' sleep." },
            { who: "A", text: "That's a much better starting point. There's quite a lot of research on screen use and sleep. I'd suggest narrowing it further, for example, to the effect of phone use in the hour before bed." },
            { who: "B", text: "Should I do my own survey?" },
            { who: "A", text: "A small survey could be interesting, but for this paper, focus on reviewing published studies. Collecting your own data properly takes more time than you have this semester." },
          ],
          questions: [
            { text: "What is the student's problem at the beginning of the conversation?", options: ["She cannot find any sources.", "Her topic is too broad.", "She missed the deadline.", "She does not like social media."], answer: 1 },
            { text: "Why does the professor advise against doing a survey?", options: ["Surveys are not scientific.", "It would take more time than she has.", "Her brother would not participate.", "The topic has no published studies."], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Wolves in Yellowstone",
          cast: { A: "en-US-NancyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an ecology class.", pause: 1 },
            { who: "A", text: "Today I'd like to talk about keystone species, species that have a much larger effect on their ecosystem than their numbers would suggest. A famous example comes from Yellowstone National Park in the United States." },
            { who: "A", text: "By the nineteen twenties, wolves had been completely eliminated from Yellowstone. Without wolves, the elk population grew rapidly, and the elk ate young willow and aspen trees, especially along rivers. In nineteen ninety-five, wolves were reintroduced to the park." },
            { who: "A", text: "What happened next surprised many people. The wolves reduced the number of elk, but they also changed elk behavior. Elk started avoiding open river valleys, where they were easy to catch. As a result, trees along the rivers began to recover. The trees provided food for beavers, and beaver dams created ponds that supported fish, birds and other animals. Now, I should add that some ecologists think this story has been simplified. Other factors, like changes in rainfall and other predators, also played a role. But the case still shows how removing or returning one species can affect an entire ecosystem." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["the history of Yellowstone National Park", "how one species can affect an entire ecosystem", "why elk are endangered", "how beavers build dams"], answer: 1 },
            { text: "What happened when wolves were absent from Yellowstone?", options: ["Elk numbers grew and they ate young trees.", "Beavers became more common.", "Rivers dried up.", "Fish populations increased."], answer: 0 },
            { text: "According to the professor, how did wolves help trees recover?", options: ["by eating insects that damaged trees", "by changing where elk fed", "by spreading seeds", "by digging the soil"], answer: 1 },
            { text: "Why does the professor mention changes in rainfall?", options: ["to explain why wolves left the park", "to point out that the story may be more complex", "to describe beaver behavior", "to argue that wolves had no effect"], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ella", prompt: "Why is the store so busy today?", chunks: ["they're", "having", "a big sale", "on", "winter coats"], end: "." },
      { promptBy: "Kerem", prompt: "Did you get my message?", chunks: ["I did", "but", "I haven't had", "time", "to reply"], end: "." },
      { promptBy: "Sofia", prompt: "My laptop keeps freezing.", chunks: ["have you", "tried", "restarting it", "in", "safe mode"], end: "?" },
      { promptBy: "Liam", prompt: "Where did you learn to cook so well?", chunks: ["my grandmother", "taught me", "when", "I was", "a child"], end: "." },
      { promptBy: "Zara", prompt: "How was the concert last night?", chunks: ["the band", "played", "for", "almost", "three hours"], end: "." },
      { promptBy: "Ethan", prompt: "Why are you taking the stairs?", chunks: ["the elevator", "has been", "broken", "since", "Monday"], end: "." },
      { promptBy: "Maya", prompt: "I don't understand the homework.", chunks: ["do you", "want", "me", "to explain", "the first question"], end: "?" },
      { promptBy: "Burak", prompt: "What did the coach say after the game?", chunks: ["he said", "we", "need to", "practice", "our defense"], end: "." },
      { promptBy: "Ivy", prompt: "Is the new restaurant expensive?", chunks: ["the prices", "are", "surprisingly", "reasonable", "for students"], end: "." },
      { promptBy: "Owen", prompt: "When did you start playing the guitar?", chunks: ["I", "started", "taking lessons", "about", "five years ago"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your neighbor has been playing loud music late at night for the past week, and it is making it hard for you to sleep before your exams.",
      to: "your neighbor",
      subject: "Noise in the evenings",
      tasks: ["Introduce yourself and explain the problem politely.", "Explain why it is especially important for you right now.", "Suggest a solution that could work for both of you."],
      sample: "Hi Alex,\n\nI'm Sara, your neighbor in apartment 4B. I hope you're doing well. I wanted to mention something that has been a problem for me this week. Over the past few nights, I've heard loud music from your apartment until about one or two in the morning.\n\nThis is especially difficult for me right now because I have final exams over the next two weeks, and I really need to get enough sleep to concentrate. My first exam is this Thursday morning.\n\nI don't want to stop you from enjoying your music. Would it be possible to turn the volume down after eleven on weeknights, or use headphones late at night? On weekends, I don't mind as much. If you ever need something from me, please let me know.\n\nThanks so much for understanding.\n\nBest,\nSara",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Chen",
        text: "In many cities, young adults are living with their parents longer than previous generations did. Some people see this as a sensible financial decision, while others believe that moving out early helps young people become independent. Is it better for young adults to move out of their parents' home as soon as they can? Why or why not?",
      },
      students: [
        { name: "Jake", text: "I think so. Living alone forces you to learn how to manage money, cook and solve problems yourself. Those are skills you can't really learn while your parents take care of everything." },
        { name: "Priya", text: "Not necessarily. Rent is so expensive now that living at home can help young people save money for the future or pay off student loans more quickly." },
      ],
      sample: "I believe the right choice depends on a person's situation, but in general, I agree with Priya that staying at home for a few years can be a smart decision. In many cities, rent takes up more than half of a young worker's salary, which makes it almost impossible to save. By living with their parents, young adults can build savings or pay off debts, and later move into a better home without financial stress. At the same time, Jake makes a valid point about independence. However, I don't think moving out is the only way to develop these skills. Young people living at home can still pay a share of the bills, cook regularly and take responsibility for their own decisions. What matters most is not where you live, but whether you are actively learning to manage your own life.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You have just joined a university sports center as a part-time receptionist. The manager is explaining your job.",
      sentences: [
        "Welcome to the sports center.",
        "The front desk opens at six every morning.",
        "Members must scan their cards when they arrive.",
        "Towels can be rented for one dollar at the counter.",
        "The swimming pool is closed for cleaning every Monday afternoon.",
        "If a member forgets their card, you can look up their name in the computer system.",
        "Please remind visitors that outdoor shoes are not allowed on the gym floor or in the fitness studios.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people learn new skills. The researcher will ask you some questions.",
      questions: [
        {
          text: "Tell me about a skill you learned recently.",
          sample: "Recently, I learned how to edit videos. A friend asked me to help make a short video for our club, so I downloaded a free editing program and watched several online tutorials. At first, it was confusing, because there were so many tools, but I practiced by editing short clips from my own phone. After a few weeks, I could cut scenes, add music and create titles. Now I really enjoy it, and I've made several videos for my family.",
        },
        {
          text: "Do you prefer learning from a teacher or teaching yourself? Why?",
          sample: "I usually prefer learning from a teacher, especially at the beginning. A good teacher can explain things clearly, correct my mistakes early and keep me motivated. When I teach myself, I sometimes waste time on the wrong methods or give up when it gets difficult. However, once I understand the basics, I like learning on my own, because I can go at my own speed and focus on the parts that interest me most.",
        },
        {
          text: "Some people say that it is harder to learn new skills as you get older. Do you agree?",
          sample: "I partly agree. Children often learn some skills, like languages or musical instruments, more naturally, and older adults usually have less free time because of work and family. However, I don't think age itself is the biggest barrier. Adults have advantages too: they can plan their learning, understand why something is useful, and stay disciplined. My grandmother started painting at sixty-five and is now quite good. So it may take more effort, but it's definitely possible.",
        },
        {
          text: "Which skills do you think will be most important for young people in the future?",
          sample: "I think the ability to keep learning will be the most important skill, because technology is changing so quickly that many jobs will look very different in twenty years. Digital skills, such as understanding data and using artificial intelligence tools, will also be essential. At the same time, I believe human skills, like communication, teamwork and creativity, will become even more valuable, since these are things machines cannot easily replace. Young people who combine both will have the best opportunities.",
        },
      ],
    },
  },
};
