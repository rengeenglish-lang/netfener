import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 10 (2026 format). Original Netfener content. */
export const TOEFL_10: ToeflTest = {
  id: "toefl-10",
  no: 10,
  title: "TOEFL iBT Practice Test 10",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Early maps",
          text: "People have been making maps for thousands of years. Some of the earl{{iest}} known maps were carved on clay tab{{lets}} in ancient Babylon. These maps sho{{wed}} rivers, fields and the loca{{tion}} of nearby cities. Later, Greek schol{{ars}} tried to draw the wh{{ole}} known world, using rep{{orts}} from travelers and sail{{ors}}. Their maps were not alw{{ays}} accurate, but they hel{{ped}} people imagine distant places.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Change of plans",
          text: [
            "Hey Mina, I'm so sorry, but I can't make it to lunch today. My manager just asked me to cover a colleague's shift.",
            "Could we meet on Thursday instead? Same place, 12:30? I'll pay this time to make up for it!",
          ],
          questions: [
            { text: "Why can't the writer meet Mina today?", options: ["The writer is sick.", "The writer has to work an extra shift.", "The restaurant is closed.", "The writer missed the bus."], answer: 1 },
            { text: "What does the writer offer to do?", options: ["choose a new restaurant", "pay for lunch on Thursday", "call Mina later", "bring a colleague"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Recycling changes",
          text: [
            "NEW RECYCLING SYSTEM IN ALL DORMITORIES",
            "From March 1, each dormitory floor will have three bins: blue for paper and cardboard, yellow for plastic and metal, and green for food waste.",
            "Glass bottles should be taken to the large container behind the dining hall. Please rinse all containers before recycling them. Bins that contain the wrong items may not be collected.",
          ],
          questions: [
            { text: "Which bin should plastic be placed in?", options: ["blue", "yellow", "green", "the container behind the dining hall"], answer: 1 },
            { text: "Where should glass bottles be taken?", options: ["to the blue bin", "to the green bin", "to the container behind the dining hall", "to the front desk"], answer: 2 },
            { text: "What may happen to bins with the wrong items?", options: ["They may not be collected.", "Residents will be fined.", "They will be moved to another floor.", "They will be emptied twice."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Thawing permafrost",
          paragraphs: [
            "In the far north of Asia, Europe and North America, large areas of ground remain frozen all year. This permanently frozen ground, called permafrost, can be hundreds of meters thick in some places, and much of it has stayed frozen for thousands of years.",
            "Permafrost contains huge amounts of organic material, such as the remains of plants and animals that never fully decomposed because of the cold. As Arctic temperatures rise, the permafrost is beginning to thaw. When it does, microbes break down this organic material and release carbon dioxide and methane, two powerful greenhouse gases. Scientists are concerned that this could create a feedback loop: warming releases more gases, and those gases cause further warming.",
            "Thawing permafrost also causes problems on the surface. The ground becomes soft and unstable, damaging roads, pipelines and buildings in northern communities. In some areas, the ground collapses suddenly, forming holes and uneven landscapes. Researchers are now monitoring permafrost temperatures closely to better predict how quickly these changes will occur.",
          ],
          questions: [
            { text: "What is permafrost?", options: ["ground that stays frozen all year", "ice that floats in the ocean", "snow that falls in summer", "a type of Arctic plant"], answer: 0 },
            { text: "The word \"decomposed\" in paragraph 2 is closest in meaning to", options: ["grew", "broke down", "froze", "moved"], answer: 1 },
            { text: "According to paragraph 2, why is thawing permafrost a concern for the climate?", options: ["It cools the Arctic.", "It releases greenhouse gases that cause further warming.", "It increases the amount of ice.", "It reduces rainfall."], answer: 1 },
            { text: "What does the author mean by a \"feedback loop\"?", options: ["a process in which an effect increases its own cause", "a way of measuring temperatures", "a system for recycling gases", "a type of Arctic road"], answer: 0 },
            { text: "According to paragraph 3, what is one effect of thawing permafrost on the surface?", options: ["Roads and buildings are damaged.", "Forests grow faster.", "Rivers freeze more often.", "Snow lasts longer."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A trip to the museum",
          text: "Last Saturday, our class visited the city museum. We arri{{ved}} at ten o'clock and met our gu{{ide}}. First, she showed us some very o{{ld}} coins and pots. Then we saw the sk{{eleton}} of a dinosaur, which was hu{{ge}}. After lun{{ch}}, we visited the art sec{{tion}} and looked at famous paint{{ings}}. Everyone enjoyed the tr{{ip}} and learned a l{{ot}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Room for rent",
          text: [
            "ROOM FOR RENT – 10 MINUTES FROM CAMPUS",
            "Large, bright room in a shared apartment with two other students. Furnished with a bed, desk and closet.",
            "$450 per month, including internet and electricity. Available from September 1. No pets, please. Email Laura at laura.rent@example.com to arrange a visit.",
          ],
          questions: [
            { text: "How many people already live in the apartment?", options: ["one", "two", "three", "four"], answer: 1 },
            { text: "What is included in the rent?", options: ["meals", "internet and electricity", "a parking space", "cleaning"], answer: 1 },
            { text: "What is NOT allowed?", options: ["guests", "pets", "cooking", "music"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How spiders make webs",
          paragraphs: [
            "Many spiders build webs to catch insects. A web may look delicate, but it is made of silk that is very strong for its weight.",
            "Spiders make silk inside their bodies. The silk comes out as a liquid through small openings called spinnerets, and it becomes solid when it touches the air. Some spiders can make several kinds of silk, such as strong silk for the frame of the web and sticky silk for catching insects.",
            "When an insect flies into the web, it gets stuck. The spider feels the web shake and quickly moves toward the insect. Many spiders build a new web every day, and some even eat the old web to reuse the silk.",
          ],
          questions: [
            { text: "Why do many spiders build webs?", options: ["to sleep in them", "to catch insects", "to keep warm", "to hide from birds"], answer: 1 },
            { text: "The word \"delicate\" in paragraph 1 is closest in meaning to", options: ["fragile", "heavy", "colorful", "dangerous"], answer: 0 },
            { text: "What happens to silk when it touches the air?", options: ["It disappears.", "It becomes solid.", "It changes color.", "It becomes sticky."], answer: 1 },
            { text: "How does a spider know an insect is caught?", options: ["It sees the insect from far away.", "It hears the insect.", "It feels the web shake.", "It smells the insect."], answer: 2 },
            { text: "Why do some spiders eat their old webs?", options: ["to reuse the silk", "because they are very hungry", "to clean their homes", "to hide from other spiders"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Mirror neurons",
          text: "In the 1990s, researchers studying monkeys made an unexpected observation. Certain neu{{rons}} fired not only when a monkey grasped an obj{{ect}}, but also when it simply wat{{ched}} another individual perform the sa{{me}} action. These cells became known as mirror neu{{rons}}. Some scientists have spec{{ulated}} that similar systems in humans may contr{{ibute}} to imitation, language learn{{ing}} and even empa{{thy}}, although these broader claims rem{{ain}} controversial.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Research assistant position",
          text: [
            "To: Undergraduate students, Department of Psychology",
            "From: Dr. Hannah Weiss",
            "Subject: Research assistant position – Memory Lab",
            "The Memory Lab is seeking one undergraduate research assistant for the spring semester. The assistant will help recruit participants, run experimental sessions and enter data. The position requires approximately ten hours per week and may be taken either for course credit or as paid employment, but not both.",
            "Applicants must have completed Introduction to Research Methods. Prior laboratory experience is helpful but not required. To apply, send a one-page statement of interest and an unofficial transcript by November 20. Shortlisted candidates will be invited for a brief interview.",
          ],
          questions: [
            { text: "What is one of the assistant's duties?", options: ["teaching a course", "running experimental sessions", "writing research articles", "grading exams"], answer: 1 },
            { text: "What is true about how the assistant will be compensated?", options: ["The assistant will receive both pay and credit.", "The assistant may choose either pay or course credit.", "The position is unpaid volunteer work.", "Only graduate students are paid."], answer: 1 },
            { text: "What is required of all applicants?", options: ["previous laboratory experience", "completion of Introduction to Research Methods", "a letter of recommendation", "a published paper"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The Hanseatic League",
          paragraphs: [
            "From the thirteenth to the fifteenth century, much of the trade in northern Europe was dominated by the Hanseatic League, an association of merchant guilds and market towns. At its height, the League included nearly two hundred towns, from London in the west to Novgorod in the east, with the German city of Lübeck serving as its unofficial center. Unlike a kingdom, the League had no single ruler, permanent army or common government; it was held together primarily by shared commercial interests.",
            "The League's members cooperated to make long-distance trade safer and more profitable. They established trading posts, known as kontors, in foreign cities, where Hanseatic merchants lived under their own laws and enjoyed special privileges. They also worked together to suppress piracy, build lighthouses and standardize trading practices. Goods such as fish from Norway, furs and wax from Russia, grain from the Baltic region and cloth from Flanders moved through this network, and the wealth it generated financed the impressive brick churches and town halls that still stand in many former Hanseatic cities.",
            "The League's power declined gradually during the fifteenth and sixteenth centuries. Strong territorial states, such as Sweden, Denmark and the growing principalities of Germany, increasingly resisted the merchants' privileges. At the same time, Dutch and English traders developed larger ships and more efficient business methods, and the opening of Atlantic trade routes shifted Europe's economic center away from the Baltic. Because the League depended on voluntary cooperation, it had few tools to respond to these challenges, and its last formal assembly was held in 1669.",
          ],
          questions: [
            { text: "According to paragraph 1, what held the Hanseatic League together?", options: ["a powerful king", "a permanent army", "shared commercial interests", "a common religion"], answer: 2 },
            { text: "The word \"suppress\" in paragraph 2 is closest in meaning to", options: ["support", "stop", "study", "ignore"], answer: 1 },
            { text: "According to paragraph 2, what were kontors?", options: ["warships used against pirates", "trading posts in foreign cities", "town halls in Lübeck", "taxes on foreign goods"], answer: 1 },
            { text: "Why does the author mention brick churches and town halls?", options: ["to show the wealth generated by Hanseatic trade", "to explain how goods were stored", "to describe the League's government", "to compare Hanseatic and Dutch architecture"], answer: 0 },
            { text: "According to paragraph 3, why was the League unable to respond effectively to challenges?", options: ["It had too many soldiers.", "It depended on voluntary cooperation.", "Its ships were too large.", "It controlled Atlantic trade."], answer: 1 },
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
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "Where can I find information about internships?", options: ["The career center has a list on its website.", "I did an internship last summer.", "Internships are usually unpaid.", "In the spring semester."], answer: 0 },
        { kind: "choose-response", voice: "en-US-ElizabethNeural", line: "Why did you decide to take a gap year?", options: ["The gap is very small.", "I want to travel and work before starting college.", "It was a great year.", "I decided yesterday."], answer: 1 },
        { kind: "choose-response", voice: "en-US-BrianNeural", line: "Is the economics lecture recorded?", options: ["Economics is my major.", "The lecture was long.", "Yes, the recordings are posted the same evening.", "I recorded a song."], answer: 2 },
        { kind: "choose-response", voice: "en-US-AvaNeural", line: "How many people are coming to the club meeting?", options: ["The club is new.", "It's in Room 4.", "I met them yesterday.", "About fifteen, I think."], answer: 3 },
        { kind: "choose-response", voice: "en-US-JasonNeural", line: "Could you lend me your calculator for the exam?", options: ["Sorry, I need it myself. Maybe ask Dana?", "The exam is tomorrow.", "I calculated it twice.", "It's a new calculator."], answer: 0 },
        { kind: "choose-response", voice: "en-US-SaraNeural", line: "Didn't you live in Canada for a while?", options: ["Canada is very big.", "I'd like to go there.", "Yes, for three years when I was in high school.", "I live near here."], answer: 2 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "When does registration for next semester open?", options: ["Next semester starts in January.", "It opens on Monday at eight a.m.", "I registered for five classes.", "It's an online form."], answer: 1 },
        { kind: "choose-response", voice: "en-US-NancyNeural", line: "Why is the hallway so wet?", options: ["It's a long hallway.", "I like rainy days.", "Wet floors are dangerous.", "Someone just mopped it."], answer: 3 },
        {
          kind: "conversation",
          title: "Returning a textbook",
          cast: { A: "en-US-AmberNeural", B: "en-US-KaiNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a campus bookstore employee.", pause: 1 },
            { who: "B", text: "Hi. I'd like to return this textbook. I dropped the course." },
            { who: "A", text: "Sure. Do you have the receipt?" },
            { who: "B", text: "Yes, here it is. I bought it two weeks ago." },
            { who: "A", text: "Okay. Since it's within the first three weeks of the semester and the book is in new condition, you'll get a full refund. But I see the plastic wrap has been removed from the online access code." },
            { who: "B", text: "Oh, I did open that. Is that a problem?" },
            { who: "A", text: "I'm afraid we can't refund the code once it's been opened. So you'll get back the price of the book, minus thirty dollars for the code." },
          ],
          questions: [
            { text: "Why does the student want to return the textbook?", options: ["He bought the wrong edition.", "He dropped the course.", "The book is damaged.", "He found it cheaper online."], answer: 1 },
            { text: "Why won't the student get a full refund?", options: ["He lost the receipt.", "The return period has ended.", "He opened the online access code.", "The book is used."], answer: 2 },
          ],
        },
        {
          kind: "announcement",
          title: "Fire drill",
          cast: { A: "en-US-ChristopherNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Attention, residents of Oak Hall. A fire drill will take place this Wednesday between ten a.m. and noon. When the alarm sounds, please leave the building immediately using the nearest staircase. Do not use the elevators. Once outside, gather in the parking lot across the street, and wait there until a staff member tells you it's safe to return. The drill usually takes about fifteen minutes. Thank you for your cooperation in helping us keep everyone safe." },
          ],
          questions: [
            { text: "What should residents do when the alarm sounds?", options: ["take the elevator", "leave using the nearest staircase", "stay in their rooms", "call the front desk"], answer: 1 },
            { text: "Where should residents wait?", options: ["in the lobby", "in the dining hall", "in the parking lot across the street", "on the roof"], answer: 2 },
          ],
        },
        {
          kind: "talk",
          title: "Dunbar's number",
          cast: { A: "en-US-JennyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an anthropology class.", pause: 1 },
            { who: "A", text: "How many friends can one person really have? In the nineteen nineties, the anthropologist Robin Dunbar proposed an answer. He noticed that among primates, species with larger brains, specifically a larger neocortex, tended to live in larger social groups. Based on the size of the human brain, he predicted that people can maintain stable relationships with about one hundred and fifty others. This became known as Dunbar's number." },
            { who: "A", text: "Dunbar then looked for evidence in human societies. He found that many traditional villages, as well as basic military units in several armies, had roughly that number of members. He also suggested that our relationships form layers: around five very close friends, about fifteen good friends, fifty friends, and then one hundred and fifty meaningful contacts." },
            { who: "A", text: "Not everyone accepts this idea. Some researchers point out that the number varies a lot from person to person, and that statistical analyses of primate data give a very wide range of possible group sizes. Still, the idea has been influential. Some companies, for example, try to keep teams or office units below one hundred and fifty people, hoping to keep communication personal." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how primates find food", "an idea about the number of stable relationships people can maintain", "why social media is harmful", "the history of military units"], answer: 1 },
            { text: "What did Dunbar base his prediction on?", options: ["surveys of social media users", "the relationship between brain size and group size in primates", "interviews with soldiers", "the size of modern cities"], answer: 1 },
            { text: "According to the professor, how many very close friends do people typically have?", options: ["about five", "about fifteen", "about fifty", "about one hundred and fifty"], answer: 0 },
            { text: "Why does the professor mention companies?", options: ["to show how the idea has been applied", "to prove that Dunbar's number is correct", "to criticize large companies", "to explain how armies are organized"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-JaneNeural", line: "Do you like your new apartment?", options: ["Yes, it's bright and quiet.", "I moved last month.", "It's on Pine Street.", "It has two rooms."], answer: 0 },
        { kind: "choose-response", voice: "en-US-JacobNeural", line: "What are you reading?", options: ["I read every night.", "A mystery novel. It's really exciting.", "In the library.", "For about an hour."], answer: 1 },
        { kind: "choose-response", voice: "en-US-MonicaNeural", line: "When is your birthday?", options: ["I'm twenty years old.", "We had a party.", "It's on the fifth of May.", "I got a cake."], answer: 2 },
        { kind: "choose-response", voice: "en-US-BrandonNeural", line: "Can you tell me how to get to the train station?", options: ["The train is fast.", "I took the train yesterday.", "Trains leave every hour.", "Go straight and turn left at the bank."], answer: 3 },
        { kind: "choose-response", voice: "en-US-LunaNeural", line: "Are you ready to order?", options: ["I ordered it online.", "Yes, I'll have the chicken salad, please.", "It's ready now.", "The menu is long."], answer: 1 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "Who did you go to the concert with?", options: ["With my cousin and her friend.", "It was a great concert.", "On Saturday night.", "At the stadium."], answer: 0 },
        {
          kind: "conversation",
          title: "Lost student card",
          cast: { A: "en-US-AshleyNeural", B: "en-US-RogerNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a worker at the student services office.", pause: 1 },
            { who: "B", text: "Hi. I think I lost my student card. What should I do?" },
            { who: "A", text: "We can make you a new one. It costs ten dollars, and I'll need to take a new photo." },
            { who: "B", text: "Okay. How long does it take?" },
            { who: "A", text: "Only about five minutes. Your old card will stop working as soon as we print the new one." },
          ],
          questions: [
            { text: "What is the student's problem?", options: ["He lost his student card.", "His card is broken.", "He needs a new photo for a passport.", "He forgot his password."], answer: 0 },
            { text: "What will happen to the old card?", options: ["It will still work.", "It will stop working.", "It will be mailed to him.", "It will be used as a library card."], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Why we have seasons",
          cast: { A: "en-US-AndrewNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a science class.", pause: 1 },
            { who: "A", text: "Many people think we have summer because the Earth is closer to the sun. But that's not true. In fact, the Earth is closest to the sun in January, when it's winter in the northern half of the world." },
            { who: "A", text: "The real reason for the seasons is that the Earth is tilted. As the Earth travels around the sun, sometimes the northern half leans toward the sun, and sometimes it leans away." },
            { who: "A", text: "When the northern half leans toward the sun, sunlight hits it more directly, and the days are longer. That's summer. When it leans away, sunlight is weaker and the days are shorter, so it's winter. That's also why, when it's summer in Canada, it's winter in Australia." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["the distance between the Earth and the sun", "the reason the Earth has seasons", "the weather in Australia", "how long a year is"], answer: 1 },
            { text: "What mistaken belief does the professor mention?", options: ["Summer happens when the Earth is closer to the sun.", "The Earth is not tilted.", "The sun moves around the Earth.", "Winter days are longer."], answer: 0 },
            { text: "What is the real cause of the seasons?", options: ["clouds", "the tilt of the Earth", "the moon", "ocean currents"], answer: 1 },
            { text: "Why does the professor mention Canada and Australia?", options: ["to show that seasons are opposite in the two halves of the world", "to compare their sizes", "to talk about travel", "to explain time zones"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "I heard the department is planning to cut the graduate teaching positions.", options: ["Where did you hear that? Nobody's told us anything.", "The department is large.", "I cut my hair.", "Teaching is hard."], answer: 0 },
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "Shouldn't we have heard back from the journal by now?", options: ["The journal is published monthly.", "I heard a strange noise.", "Reviews often take three months or more.", "We submitted it online."], answer: 2 },
        { kind: "choose-response", voice: "en-US-MichelleNeural", line: "I can't decide whether to take the job offer or stay in school.", options: ["The job is downtown.", "What are the main things you're weighing?", "School starts in September.", "I offered to help."], answer: 1 },
        { kind: "choose-response", voice: "en-US-TonyNeural", line: "Why don't we just use last year's data instead of collecting new data?", options: ["Data is important.", "Last year was busy.", "We collected it yesterday.", "The survey questions have changed, so the results wouldn't be comparable."], answer: 3 },
        { kind: "choose-response", voice: "en-US-EmmaNeural", line: "I'm surprised so few people signed up for the leadership program.", options: ["Maybe the information session was poorly advertised.", "I signed my name.", "Leadership is a skill.", "The program is in the fall."], answer: 0 },
        { kind: "choose-response", voice: "en-US-ChristopherNeural", line: "Has anyone told the new students about the change in the lab schedule?", options: ["The lab is in the basement.", "Students are new every year.", "I sent them an email this morning.", "The schedule is long."], answer: 2 },
        {
          kind: "conversation",
          title: "Asking about graduate school",
          cast: { A: "en-US-RogerNeural", B: "en-US-LunaNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and her professor.", pause: 1 },
            { who: "B", text: "Professor Klein, I'm thinking about applying to graduate programs in marine biology, and I wanted your advice." },
            { who: "A", text: "I'm glad to hear that. Have you started looking at specific programs?" },
            { who: "B", text: "A few. But I'm not sure what matters most: the university's reputation or something else." },
            { who: "A", text: "Reputation matters a little, but for a research degree, the most important thing is finding a supervisor whose work really interests you. Read some of their recent papers, and then email them directly to ask whether they're accepting new students." },
            { who: "B", text: "Isn't it strange to email a professor I've never met?" },
            { who: "A", text: "Not at all. It's expected. Just keep the email short, explain why their research interests you, and attach your CV. Many students get accepted that way." },
          ],
          questions: [
            { text: "According to the professor, what is most important when choosing a research program?", options: ["the university's reputation", "the cost of the program", "finding a supervisor whose work interests you", "the location of the university"], answer: 2 },
            { text: "What does the professor say about emailing potential supervisors?", options: ["It is considered rude.", "It is expected and often helpful.", "It should only be done after applying.", "It should include a long essay."], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Cane toads in Australia",
          cast: { A: "en-US-NancyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a biology class.", pause: 1 },
            { who: "A", text: "Today we're looking at invasive species, organisms introduced to a new environment where they spread and cause harm. One of the best-known cases is the cane toad in Australia." },
            { who: "A", text: "In nineteen thirty-five, about one hundred cane toads were brought from Hawaii to northeastern Australia. The idea was that they would eat beetles that were damaging sugarcane crops. Unfortunately, the plan failed. The beetles lived high on the sugarcane plants, where the toads couldn't easily reach them. Meanwhile, the toads found plenty of other food, had no natural predators, and reproduced rapidly. A single female can lay tens of thousands of eggs at once." },
            { who: "A", text: "Today, there are estimated to be more than two hundred million cane toads in Australia, and they have spread thousands of kilometers. The real damage comes from their poison. Native predators, such as certain lizards, snakes and small marsupials, have never encountered such a toxic animal, so they attack the toads and die. Interestingly, some native species seem to be adapting. Researchers have found that some snakes in areas with toads now have smaller mouths, which prevents them from swallowing large, dangerous toads. This shows how quickly evolution can respond to a new threat." },
          ],
          questions: [
            { text: "Why were cane toads brought to Australia?", options: ["to be kept as pets", "to control beetles damaging sugarcane", "to feed native snakes", "to be studied by scientists"], answer: 1 },
            { text: "Why did the original plan fail?", options: ["The toads died in the cold.", "The beetles lived where the toads couldn't easily reach them.", "Farmers killed the toads.", "The toads ate the sugarcane."], answer: 1 },
            { text: "What is the main way cane toads harm native animals?", options: ["by eating all their food", "by poisoning predators that attack them", "by destroying their homes", "by spreading diseases"], answer: 1 },
            { text: "Why does the professor mention snakes with smaller mouths?", options: ["to show that some native species are adapting to the toads", "to explain why snakes are dangerous", "to describe how toads hunt", "to show that the toads are disappearing"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Anna", prompt: "Why are the lights off in the classroom?", chunks: ["the teacher", "is", "showing", "a short film", "to the class"], end: "." },
      { promptBy: "Emre", prompt: "Did you find a gift for your sister?", chunks: ["I bought her", "a scarf", "at", "the market", "near my house"], end: "." },
      { promptBy: "Leila", prompt: "I keep forgetting my passwords.", chunks: ["why don't", "you", "use", "a password manager", "on your phone"], end: "?" },
      { promptBy: "Thomas", prompt: "Where are you going after class?", chunks: ["I'm meeting", "some friends", "at", "the café", "across the street"], end: "." },
      { promptBy: "Defne", prompt: "How was the job interview?", chunks: ["they", "asked me", "a lot of", "questions", "about teamwork"], end: "." },
      { promptBy: "Ryan", prompt: "Why is the train so slow today?", chunks: ["there", "is", "construction", "on", "part of the line"], end: "." },
      { promptBy: "Sara", prompt: "I need help moving to my new apartment.", chunks: ["I", "can", "help you", "on", "Saturday morning"], end: "." },
      { promptBy: "Mehmet", prompt: "What did your advisor recommend?", chunks: ["she", "recommended", "taking", "a statistics course", "next term"], end: "." },
      { promptBy: "Julia", prompt: "Is the hiking trail difficult?", chunks: ["the first part", "is easy", "but", "the last kilometer", "is very steep"], end: "." },
      { promptBy: "Adrian", prompt: "How long did it take you to write your essay?", chunks: ["it took", "me", "about", "three", "full days"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your university is organizing an international food festival, and the organizers are looking for volunteers. You would like to help.",
      to: "the festival organizing committee",
      subject: "Volunteering at the food festival",
      tasks: ["Say why you want to volunteer.", "Describe any relevant experience or skills you have.", "Ask about the schedule and what volunteers will do."],
      sample: "Dear Festival Organizing Committee,\n\nI saw your notice looking for volunteers for the international food festival, and I would love to help. As an international student from Turkey, I think the festival is a wonderful way to bring students from different cultures together, and I would be proud to help share some Turkish dishes with others.\n\nI have some relevant experience. Last year, I volunteered at our department's welcome week, where I helped set up tables, guide new students and manage a registration desk. I also worked part-time in a café for two summers, so I am comfortable serving food and dealing with large numbers of people.\n\nCould you let me know which days and times volunteers are needed and what kinds of tasks we will be doing? I am available on both days of the festival, but I have a class until noon on Friday.\n\nThank you, and I look forward to hearing from you.\n\nBest regards,\nZeynep Arslan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Studies",
      professor: {
        name: "Dr. Patel",
        text: "Many governments are trying to reduce plastic waste. Some have banned single-use plastic items such as bags and straws, while others prefer to encourage people to change their habits through education and small fees. Which approach do you think is more effective in reducing plastic waste: bans or education and fees? Why?",
      },
      students: [
        { name: "Sophie", text: "Bans are more effective. People are busy and won't always change their habits voluntarily. When a product is simply not available, everyone has to adapt, and the problem is solved quickly." },
        { name: "Ali", text: "I think education and small fees work better. A ban might make people angry, but a small charge for bags, for example, reminds people to bring their own, and over time it becomes a habit." },
      ],
      sample: "In my view, a combination works best, but bans should be used for the most harmful and easily replaced items. Sophie is right that bans produce fast results. When my city banned plastic straws, they disappeared from cafés within a few months, and nobody really missed them, because paper and metal alternatives were already available. However, Ali makes a good point that bans can create resistance if people feel they have no choice. For products that are harder to replace, a small fee combined with education seems more effective. For example, after a fee on plastic bags was introduced in many countries, the number of bags used dropped dramatically, and carrying a reusable bag became normal. So governments should ban unnecessary items like straws, while using fees and education to gradually change habits for everything else.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are helping at a university open day. A staff member is telling you what to say to visitors.",
      sentences: [
        "Welcome to our open day.",
        "Campus tours leave from the main entrance.",
        "Each tour lasts about forty-five minutes.",
        "Free coffee and snacks are available in the student center.",
        "Students from every department are here to answer your questions.",
        "If you would like to attend a sample lecture, please choose a session from the program.",
        "Visitors who need help finding a building can ask any volunteer wearing a green shirt for directions.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's views on work and careers. The researcher will ask you some questions.",
      questions: [
        {
          text: "What kind of job would you like to have in the future, and why?",
          sample: "In the future, I'd like to work as an environmental engineer. I've always been interested in both science and nature, and this job combines the two. Environmental engineers design solutions for problems like water pollution and waste management, so I would feel that my work makes a real difference. I also like that it involves a mix of office work, fieldwork and teamwork. It's a field that will become even more important as countries deal with climate change.",
        },
        {
          text: "Would you prefer to work from home or in an office? Why?",
          sample: "I think I'd prefer a mix, but if I had to choose, I'd pick the office. Working from home saves time on commuting and can be more comfortable, but I find it hard to separate work from my personal life at home. In an office, it's easier to focus, and I can learn from colleagues just by watching how they work and asking quick questions. Being around other people also keeps me motivated, especially early in my career.",
        },
        {
          text: "Some people believe that having a well-paid job is more important than enjoying your work. What do you think?",
          sample: "I don't completely agree. Of course, a good salary is important, because people need to pay for housing, food and their family's needs. But we spend most of our lives at work, so if we hate our jobs, a high salary may not make us happy. I think the ideal is to find a job that you enjoy and that pays enough to live comfortably. If I had to choose, I'd accept a slightly lower salary for work I find meaningful.",
        },
        {
          text: "How do you think the way people work will change in the next twenty years?",
          sample: "I think work will become much more flexible. More people will work remotely or in hybrid arrangements, and some may have several part-time jobs or freelance projects instead of one employer. Technology, especially artificial intelligence, will take over many routine tasks, so workers will need to keep learning new skills throughout their careers. I also expect more attention to well-being, such as shorter working weeks, as companies realize that rested employees are more productive.",
        },
      ],
    },
  },
};
