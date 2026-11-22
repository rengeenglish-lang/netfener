import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 60 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_60: ToeflTest = {
  id: "toefl-60",
  no: 60,
  title: "TOEFL iBT Practice Test 60",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Alarm clocks",
          text: "Before alarm clocks became common, people relied on roosters, church bells or the sun to wake th{{em}}. In some industrial cities in the nineteenth century, workers even paid a \"knocker-up\", who walked through the str{{eets}} early in the morning and tapped on windows with a long st{{ick}}. Mechanical alarm clocks that could be set for any ti{{me}} became widely available in the late nineteenth cen{{tury}}. They used a spring and a small bell that rang lou{{dly}}. Later, electric and digital clocks replaced many mechan{{ical}} ones. Today, most people use their phones as alarms, and some apps even try to wake users gen{{tly}} during light sleep. However, sleep experts warn that keeping a phone next to the b{{ed}} can make it harder to fall asl{{eep}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Help with my slides",
          text: [
            "Hi Duygu, my presentation for the marketing class is on Thursday, and my slides look really boring. You're great at design, could you give me some tips?",
            "Maybe we could meet in the computer lab after lunch tomorrow for half an hour? I'll bring you a coffee!",
          ],
          questions: [
            { text: "What does the writer want help with?", options: ["making presentation slides look better", "writing a marketing essay", "choosing a class", "finding the computer lab"], answer: 0 },
            { text: "When does the writer suggest meeting?", options: ["after lunch tomorrow", "on Thursday morning", "tonight", "next week"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Food truck schedule",
          text: [
            "FOOD TRUCKS ON CAMPUS",
            "Starting this semester, food trucks will be parked in the main square from 11 a.m. to 3 p.m. on weekdays. Each day features different types of food, including vegetarian and vegan options.",
            "The weekly schedule is posted on the student union website. All trucks accept card payments, and students who show their student card receive a 10% discount. Please use the recycling bins provided in the square.",
          ],
          questions: [
            { text: "When will food trucks be on campus?", options: ["from 11 a.m. to 3 p.m. on weekdays", "only on weekends", "every evening", "once a month"], answer: 0 },
            { text: "Where can students find the weekly schedule?", options: ["on the student union website", "in the library", "on the trucks only", "in their email"], answer: 0 },
            { text: "How can students get a discount?", options: ["by showing their student card", "by paying in cash", "by arriving early", "by buying two meals"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why rainforests are so diverse",
          paragraphs: [
            "Tropical rainforests cover less than ten percent of Earth's land surface, yet they are home to more than half of the world's plant and animal species. A single hectare of rainforest in the Amazon may contain several hundred species of trees, more than are found in all of Europe. Scientists have long tried to explain why these forests contain such extraordinary biodiversity.",
            "One explanation concerns climate. Tropical rainforests are warm and wet throughout the year, with no cold winters. This allows plants to grow continuously and provides a constant supply of food for animals. Some scientists also argue that because tropical regions were less affected by the ice ages than higher latitudes, species there had more time to evolve and diversify without being wiped out by dramatic climate changes.",
            "The structure of the rainforest also creates many different habitats. From the dark forest floor to the sunny canopy high above, conditions of light, temperature and humidity change dramatically, and different species are adapted to each layer. In addition, interactions between species may promote diversity. Insects, fungi and diseases that specialize in attacking a particular tree species tend to be most common near adult trees of that species, so seedlings of the same species struggle to survive close to their parents. This gives other species space to grow and prevents any single species from dominating. Unfortunately, rainforests are being cleared rapidly for farming, logging and mining, threatening many species before scientists have even had the chance to describe them.",
          ],
          questions: [
            { text: "According to paragraph 1, what is remarkable about tropical rainforests?", options: ["They contain more than half of the world's species on a small area of land.", "They cover most of Earth's surface.", "They contain very few trees.", "They are found only in Europe."], answer: 0 },
            { text: "According to paragraph 2, how might the ice ages have contributed to rainforest diversity?", options: ["Tropical regions were less affected, giving species more time to evolve.", "Ice ages brought new species to the tropics.", "Ice covered the rainforests.", "Ice ages made rainforests colder."], answer: 0 },
            { text: "The word \"dominating\" in paragraph 3 is closest in meaning to", options: ["controlling or being the most common", "disappearing", "growing slowly", "moving"], answer: 0 },
            { text: "According to paragraph 3, why do seedlings struggle to survive near adult trees of the same species?", options: ["Pests and diseases that attack that species are common there.", "They receive too much sunlight.", "The soil is too wet.", "Animals eat all the seeds."], answer: 0 },
            { text: "What threat to rainforests is mentioned in paragraph 3?", options: ["clearing for farming, logging and mining", "too much rainfall", "the return of the ice ages", "a lack of insects"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A day at the science fair",
          text: "Last month, my school held a science fa{{ir}}. Every student had to prepare a small proj{{ect}}. My friend Selin and I made a simple vol{{cano}} using baking soda and vinegar. We painted it brown and gr{{een}} so it looked real. On the day of the fair, many parents and teach{{ers}} visited our table. Every time we added vinegar, red foam came out of the to{{p}}. The children laughed and clap{{ped}}. At the end of the day, the judges gave us second pri{{ze}}. We were very happy, and now I want to be a scien{{tist}} when I grow u{{p}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Second-hand furniture sale",
          text: [
            "MOVING SALE: EVERYTHING MUST GO!",
            "We are moving abroad and selling our furniture at very low prices: a sofa, a dining table with four chairs, a bookshelf, a desk and two lamps.",
            "Everything is in excellent condition. Come and see on Saturday or Sunday between 10 a.m. and 4 p.m. at 15 Pine Street, Apartment 3. Buyers must collect items themselves.",
          ],
          questions: [
            { text: "Why are the owners selling their furniture?", options: ["They are moving abroad.", "They bought new furniture.", "The furniture is broken.", "They are opening a shop."], answer: 0 },
            { text: "When can people come to see the furniture?", options: ["on Saturday or Sunday", "every evening", "only on Monday", "by appointment only"], answer: 0 },
            { text: "What must buyers do?", options: ["collect the items themselves", "pay for delivery", "buy everything", "pay in advance online"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why parrots can talk",
          paragraphs: [
            "Parrots are colorful birds that live in warm forests. Some parrots can copy human words and even whole sentences.",
            "Parrots do not have lips or teeth like people. Instead, they use a special organ in their throat and their thick tongues to make many different sounds. They are also very good at listening and remembering.",
            "In the wild, parrots live in large groups. They copy the calls of the other parrots in their group to fit in. Pet parrots do the same thing with the people they live with. For a pet parrot, its human family is its group.",
          ],
          questions: [
            { text: "Where do parrots live in the wild?", options: ["in warm forests", "in cold mountains", "in deserts", "in the sea"], answer: 0 },
            { text: "What do parrots use to make sounds?", options: ["a special organ in their throat and their tongues", "their lips and teeth", "their wings", "their feet"], answer: 0 },
            { text: "The word \"copy\" in paragraph 1 is closest in meaning to", options: ["repeat", "forget", "hide", "write"], answer: 0 },
            { text: "Why do wild parrots copy the calls of other parrots?", options: ["to fit in with their group", "to scare other birds", "to find water", "to sleep better"], answer: 0 },
            { text: "Who is a pet parrot's group?", options: ["its human family", "other pets only", "birds outside", "nobody"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Ego depletion",
          text: "For many years, psychologists believed that self-control works like a muscle that can become tired with u{{se}}. According to this theory, known as ego depletion, people who resist temptation in one situation will have less self-control left for the next ta{{sk}}. In an early experiment, participants who had to eat radishes instead of fresh cookies gave up sooner on a difficult puz{{zle}} than participants who were allowed to eat the coo{{kies}}. Hundreds of later studies seemed to confirm the eff{{ect}}. However, when researchers in many countries tried to repeat the experiments using the same meth{{ods}}, they found little or no evidence for it. This has made ego depletion a well-known exam{{ple}} of the so-called replication cri{{sis}} in psychology, in which famous findings fail to appear ag{{ain}} in careful new stu{{dies}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Ethics approval for student research",
          text: [
            "To: Undergraduate students conducting research with human participants",
            "From: Research Ethics Committee",
            "Subject: Ethics approval required before data collection",
            "Any student project that involves collecting data from people, including surveys, interviews and experiments, must receive ethics approval before data collection begins. This applies even to short class projects if the results will be presented outside the course.",
            "Applications should include a description of the project, copies of all questionnaires or interview questions and a consent form for participants. The committee meets every two weeks, so please allow at least a month for review. Data collected without approval cannot be used in any thesis, presentation or publication.",
          ],
          questions: [
            { text: "Which projects require ethics approval?", options: ["projects that collect data from people", "only projects funded by the government", "only projects by graduate students", "only laboratory experiments with animals"], answer: 0 },
            { text: "Why should students allow at least a month for review?", options: ["The committee meets every two weeks.", "Applications are reviewed only once a year.", "Students must wait for their grades.", "The committee is on vacation."], answer: 0 },
            { text: "What happens to data collected without approval?", options: ["It cannot be used in any thesis, presentation or publication.", "It can be used with a small penalty.", "It is accepted if the results are good.", "It is sent to the committee for review."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The psychology of waiting in line",
          paragraphs: [
            "People spend a surprising amount of time waiting in lines: at supermarkets, banks, airports and amusement parks. Researchers who study waiting have found that how long a wait feels often matters as much as how long it actually lasts. A ten-minute wait can feel short or unbearably long depending on the circumstances, and customers' satisfaction often depends more on their perception of the wait than on the real time involved.",
            "Several factors influence how long a wait seems. Unoccupied time tends to feel longer than occupied time, which is why many businesses place mirrors near elevators, show videos in waiting rooms or provide magazines. Uncertain waits feel longer than known waits, so displaying the expected waiting time can reduce frustration, even if the wait itself does not change. Unexplained waits are also more irritating than explained ones; passengers on a delayed train are usually calmer if they are told the reason for the delay.",
            "Fairness is another important factor. People become particularly angry when someone who arrived later is served first. For this reason, many banks and post offices use a single line that feeds into several service desks rather than separate lines for each desk. Although the average waiting time may be similar, a single line ensures that customers are served in the order in which they arrived and removes the frustration of choosing a line that moves slowly. Some amusement parks have even designed lines that wind through decorated areas, so that visitors feel they are already part of the experience while they wait.",
          ],
          questions: [
            { text: "According to paragraph 1, what often matters as much as the actual length of a wait?", options: ["how long the wait feels", "the number of staff", "the price of the product", "the time of day"], answer: 0 },
            { text: "According to paragraph 2, why do businesses place mirrors near elevators?", options: ["to occupy people's time so the wait feels shorter", "to make the area look bigger", "for security reasons", "to help people check their appearance for interviews"], answer: 0 },
            { text: "The word \"perception\" in paragraph 1 is closest in meaning to", options: ["the way something is experienced or understood", "the exact measurement", "the cost", "the location"], answer: 0 },
            { text: "According to paragraph 2, how can businesses reduce frustration with uncertain waits?", options: ["by displaying the expected waiting time", "by closing earlier", "by making lines longer", "by removing chairs"], answer: 0 },
            { text: "Why do many banks use a single line feeding into several desks?", options: ["It ensures customers are served in the order they arrived.", "It always makes the wait much shorter.", "It requires fewer employees.", "It allows customers to choose their desk."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Mert", prompt: "Why do you look so tired?", chunks: ["I", "stayed up", "late", "finishing", "my project"], end: "." },
      { promptBy: "Anna", prompt: "Did you enjoy the boat tour?", chunks: ["we", "saw", "some", "beautiful", "old palaces"], end: "." },
      { promptBy: "Gökhan", prompt: "I have too many emails to answer.", chunks: ["why don't", "you", "set aside", "an hour", "every morning"], end: "?" },
      { promptBy: "Emma", prompt: "How long have you been learning Japanese?", chunks: ["I", "started", "learning it", "about", "a year ago"], end: "." },
      { promptBy: "Defne", prompt: "Where is the closest bus stop?", chunks: ["it", "is", "just", "around", "the corner"], end: "." },
      { promptBy: "Luke", prompt: "Why is the coffee machine not working?", chunks: ["someone", "forgot", "to", "refill", "the water"], end: "." },
      { promptBy: "Nehir", prompt: "What did you think of the guest speaker?", chunks: ["her", "talk", "was", "inspiring and", "very practical"], end: "." },
      { promptBy: "Dave", prompt: "When will you start your new job?", chunks: ["I", "start", "on", "the first", "of next month"], end: "." },
      { promptBy: "Yasemin", prompt: "My bag is too heavy to carry.", chunks: ["do you", "want", "me", "to carry", "it for you"], end: "?" },
      { promptBy: "Owen", prompt: "Why did you choose to study engineering?", chunks: ["I", "have always", "enjoyed", "building", "things"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your company has asked employees for suggestions on how to improve the office break room. You use the break room every day and have some ideas.",
      to: "the office manager, Ms. Lopez",
      subject: "Suggestions for the break room",
      tasks: ["Describe how you and your colleagues use the break room.", "Explain the main problems with it.", "Make suggestions for improvements."],
      sample: "Dear Ms. Lopez,\n\nThank you for asking for suggestions about the break room. I use it every day to eat lunch and make coffee, and many of my colleagues also use it for short breaks and informal meetings, especially since our open-plan office can be quite noisy.\n\nAt the moment, there are a few problems. The room only has one small table with six chairs, so at lunchtime many people have to eat at their desks. The single microwave often has a long queue, and the refrigerator is usually so full that there is no space for new food. In addition, the room has no windows and feels rather dark and uninviting.\n\nI would like to suggest adding a second table and microwave, and perhaps introducing a weekly rule for clearing old food from the refrigerator. Some plants and brighter lighting would also make the space more pleasant. Finally, a small bookshelf where colleagues could share books might encourage people to take proper breaks away from their screens.\n\nThank you for considering these ideas.\n\nBest regards,\nTolga Arslan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Technology and Education",
      professor: {
        name: "Dr. Price",
        text: "Artificial intelligence tools that can write essays and answer questions are now widely available. Some teachers believe students should be allowed to use these tools for homework, as long as they are honest about it. Others think AI tools prevent students from developing their own thinking and writing skills. Should students be allowed to use AI tools for homework? Explain your view.",
      },
      students: [
        { name: "Mia", text: "Yes. AI will be part of every job in the future, so students should learn how to use it well. Banning it is unrealistic anyway." },
        { name: "Arda", text: "No. If AI writes your essays, you never learn how to organize your own ideas. Homework is supposed to help students practice." },
      ],
      sample: "I believe students should be allowed to use AI tools for some homework tasks, but with clear rules and in ways that support learning rather than replace it. Mia is right that AI tools are already part of many workplaces, and students need to learn how to use them responsibly, for example to check grammar, generate ideas or explain difficult concepts. Banning them completely would also be very difficult to enforce. However, Arda makes an important point: writing an essay is a way of learning to think clearly, and if AI does all the work, students miss that practice. Teachers could therefore allow AI for brainstorming and feedback while requiring students to write their own drafts, explain how they used the tools and complete some assignments in class.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new tour guide at a historic castle. The head guide is telling you what to say to visitors.",
      sentences: [
        "Welcome to the castle.",
        "The tour lasts about one hour.",
        "Please do not touch the old paintings.",
        "The stairs to the tower are very narrow.",
        "Photographs are allowed, but please do not use a flash.",
        "The castle was built more than seven hundred years ago to protect the town from attacks.",
        "At the end of the tour, you are welcome to visit the gift shop and the café in the garden, which serves traditional food from the region.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's views on history and tradition. The researcher will ask you some questions.",
      questions: [
        {
          text: "Is there a historical place in your country that you think everyone should visit?",
          sample: "I think everyone should visit Ephesus, an ancient city on the western coast of Turkey. Walking along its old marble streets, you can see the remains of temples, theaters and the famous Library of Celsus. It's amazing to imagine how people lived there thousands of years ago. The site is also beautiful, surrounded by hills and olive trees. I visited it with my school, and it made history feel real to me.",
        },
        {
          text: "Do you think it's important to learn about history at school?",
          sample: "Yes, I think learning history at school is very important. History helps us understand how our societies developed and why the world is the way it is today. It also teaches us to learn from past mistakes, such as wars and injustice. In addition, studying history develops useful skills, like analyzing sources and forming arguments. However, I think history lessons should be more interactive, using museums, films and discussions instead of only memorizing dates.",
        },
        {
          text: "Are traditions less important to young people today?",
          sample: "In some ways, yes. Many young people today are influenced by global culture through the internet, so they may be less interested in some local traditions, like traditional music or clothing. However, I think many young people still value important family traditions, such as celebrating holidays together or cooking traditional dishes. Some are even finding new ways to keep traditions alive, for example by sharing them on social media.",
        },
        {
          text: "Should governments spend money to protect historical buildings?",
          sample: "Yes, I believe governments should spend money to protect historical buildings. These buildings are part of a country's identity and cultural heritage, and once they are destroyed, they can never be replaced. They also attract tourists, which supports local businesses and creates jobs. Of course, governments have many priorities, so they could also work with private companies and international organizations to share the costs of restoration and maintenance.",
        },
      ],
    },
  },
};
