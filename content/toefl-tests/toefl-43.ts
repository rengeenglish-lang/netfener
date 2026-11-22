import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 43 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_43: ToeflTest = {
  id: "toefl-43",
  no: 43,
  title: "TOEFL iBT Practice Test 43",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Postcards",
          text: "Before telephones and email, postcards were one of the most popular ways to send short mess{{ages}}. The first postcards appeared in Austria in 1869, and they quickly spr{{ead}} to other countries because they were cheaper to send than let{{ters}}. At first, the address had to be written on one si{{de}} and the message on the ot{{her}}. Later, the rules changed so that one side could show a pic{{ture}}, such as a famous building or a beautiful land{{scape}}. Collecting postcards became a popular hob{{by}} in the early twentieth cen{{tury}}. Even today, many tourists still send postcards to fri{{ends}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Bicycle pump",
          text: [
            "Hey Selim, my bike tire is completely flat and I need to ride to work tomorrow morning. Do you still have that bicycle pump?",
            "If you're home this evening, I could come by around 8 to borrow it. I'll return it on Saturday when we play tennis.",
          ],
          questions: [
            { text: "Why does the writer need a pump?", options: ["The bike tire is flat.", "The writer is buying a new bike.", "The writer's car broke down.", "The writer wants to play tennis."], answer: 0 },
            { text: "When will the writer return the pump?", options: ["tomorrow morning", "this evening", "on Saturday", "next month"], answer: 2 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Wireless network upgrade",
          text: [
            "IT SERVICES: WIRELESS NETWORK UPGRADE",
            "The campus wireless network will be upgraded this Saturday between midnight and 6 a.m. During this time, wireless internet will not be available in any campus building.",
            "After the upgrade, all users will need to log in again using their university username and password. Older devices that do not support the new security standard may not be able to connect; please visit the IT help desk for advice.",
          ],
          questions: [
            { text: "When will the upgrade take place?", options: ["Saturday between midnight and 6 a.m.", "every weekday morning", "Friday afternoon", "all day Sunday"], answer: 0 },
            { text: "What must all users do after the upgrade?", options: ["buy new devices", "log in again with their university details", "pay a fee", "register online"], answer: 1 },
            { text: "What may happen to older devices?", options: ["They may be unable to connect.", "They will connect faster.", "They will be replaced for free.", "They will be removed from campus."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why some animals play",
          paragraphs: [
            "Play is common among young mammals and is also seen in some birds and even certain reptiles and fish. Puppies chase each other, young goats leap into the air for no apparent reason, and young ravens slide down snowy roofs again and again. Unlike behaviors such as feeding or escaping predators, play does not seem to have an immediate purpose. It also has costs: playing animals use energy, may injure themselves and can be less alert to danger.",
            "Because play is costly, biologists assume it must bring important benefits. One widely accepted explanation is that play allows young animals to practice skills they will need as adults. Play fighting, for instance, may help young predators develop the coordination and strength needed for hunting, while chasing games may help prey animals practice escaping. Another explanation is that play helps animals learn to cope with unexpected situations. By deliberately putting themselves off balance or in unusual positions, young animals may learn to recover quickly when something goes wrong.",
            "Play also appears to have social functions. In species that live in groups, such as wolves and chimpanzees, play helps young animals form relationships and learn the rules of their society. During play fights, stronger animals often hold back, allowing weaker partners to win sometimes, and animals use special signals, such as the 'play bow' of dogs, to show that their actions are not serious. Animals that break these rules may find that others refuse to play with them, suggesting that play helps teach fairness and cooperation.",
          ],
          questions: [
            { text: "According to paragraph 1, what is one cost of play?", options: ["Playing animals may be less alert to danger.", "Play makes animals hungry for days.", "Play stops animals from growing.", "Play is only possible in winter."], answer: 0 },
            { text: "The word \"apparent\" in paragraph 1 is closest in meaning to", options: ["obvious", "hidden", "dangerous", "unusual"], answer: 0 },
            { text: "According to paragraph 2, why might young predators engage in play fighting?", options: ["to develop the skills needed for hunting", "to frighten their parents", "to find food", "to keep warm"], answer: 0 },
            { text: "What is the purpose of the 'play bow' of dogs?", options: ["to show that their actions are not serious", "to start a real fight", "to ask for food", "to warn of danger"], answer: 0 },
            { text: "What does paragraph 3 suggest about animals that break the rules of play?", options: ["Others may refuse to play with them.", "They become leaders of the group.", "They are rewarded with food.", "They learn faster than others."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our school sports day",
          text: "Every June, my school has a sports d{{ay}}. All the students wear T-shirts in the col{{or}} of their team. This year, I was in the blue te{{am}}. In the morning, I ran in the 100-meter ra{{ce}} and finished third. In the afternoon, I joined the tug-of-war compe{{tition}}. We pulled the rope as hard as we co{{uld}}, and we won! Our parents watched and che{{ered}} for us. At the end of the day, the head teacher gave med{{als}} to the winners. I was tired, but very hap{{py}}. I can't wait for next ye{{ar}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Chess club for kids",
          text: [
            "LEARN TO PLAY CHESS!",
            "Our chess club for children aged 7 to 14 meets every Wednesday from 4 to 5:30 p.m. at the Community Center. Beginners are very welcome.",
            "Experienced coaches teach the rules and strategies of the game. Membership is $20 per month. Chess sets are provided, and there is a small tournament at the end of each month.",
          ],
          questions: [
            { text: "Who is the club for?", options: ["children aged 7 to 14", "adults only", "professional players", "teachers"], answer: 0 },
            { text: "How much is membership?", options: ["$20 per month", "$20 per week", "free", "$50 per year"], answer: 0 },
            { text: "What happens at the end of each month?", options: ["a small tournament", "a party", "a trip to the city", "a test"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why deserts are cold at night",
          paragraphs: [
            "Many people think deserts are always hot. During the day, the temperature can be very high. But at night, some deserts become very cold, sometimes close to freezing.",
            "The main reason is that desert air is very dry. Water in the air acts like a blanket. It holds heat close to the ground. Because there is very little water in desert air, the heat escapes quickly into the sky after the sun goes down.",
            "Deserts also have few clouds and few plants. Clouds and plants help keep heat in other places. Desert animals deal with the cold by hiding in holes under the ground, where the temperature stays more even.",
          ],
          questions: [
            { text: "What can happen to the temperature in some deserts at night?", options: ["It becomes very cold.", "It becomes even hotter.", "It stays the same as during the day.", "It rains every night."], answer: 0 },
            { text: "What is the main reason deserts get cold at night?", options: ["The air is very dry.", "The sand is white.", "The wind is strong.", "The moon is bright."], answer: 0 },
            { text: "The word \"escapes\" in paragraph 2 is closest in meaning to", options: ["gets away", "stays", "increases", "changes color"], answer: 0 },
            { text: "What does water in the air do?", options: ["It holds heat close to the ground.", "It makes the air colder.", "It blocks the sunlight completely.", "It moves sand."], answer: 0 },
            { text: "How do desert animals deal with the cold?", options: ["They hide in holes under the ground.", "They fly to other places.", "They grow thick fur every night.", "They stay in the open sand."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The curse of knowledge",
          text: "Experts are sometimes surprisingly poor at explaining their subject to begin{{ners}}. One reason is a bias known as the curse of know{{ledge}}: once people understand something, they find it very dif{{ficult}} to imagine not knowing it. In a famous study, participants tapped the rhythm of well-known so{{ngs}} on a table and predicted how many listeners would identify the tu{{nes}}. The tappers expected about half of the lis{{teners}} to succeed, but in reality only a tiny frac{{tion}} did. The tappers could hear the melody in their he{{ads}}, so they could not appreciate how confu{{sing}} the tapping sounded to others. Good teachers try to over{{come}} this bias.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Volunteers needed for a sleep study",
          text: [
            "To: Undergraduate students",
            "From: Department of Psychology, Sleep Research Laboratory",
            "Subject: Participants needed for a sleep and memory study",
            "We are looking for healthy students aged 18 to 30 to take part in a study on how sleep affects memory. Participants will spend two nights in our laboratory, where their sleep will be monitored using small sensors, and will complete short memory tasks in the evening and the following morning.",
            "Participants will receive $120 upon completion of both nights. Unfortunately, we cannot include people who regularly take sleep medication, work night shifts or have traveled across more than three time zones in the past month. All data will be kept confidential, and participants may withdraw at any time without giving a reason.",
          ],
          questions: [
            { text: "What will participants do in the study?", options: ["spend two nights in the lab and complete memory tasks", "complete an online survey only", "take sleep medication", "work night shifts"], answer: 0 },
            { text: "Who cannot take part in the study?", options: ["students aged 18 to 30", "people who regularly take sleep medication", "psychology students", "people who sleep well"], answer: 1 },
            { text: "What is true about withdrawing from the study?", options: ["Participants must pay a fee.", "Participants may withdraw at any time without giving a reason.", "Participants cannot withdraw after the first night.", "Participants must give a written explanation."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Ocean currents and climate",
          paragraphs: [
            "The world's oceans are constantly in motion. At the surface, winds drive large currents that flow in huge circular patterns across ocean basins. Deeper down, currents are driven by differences in water density, which depends on temperature and saltiness. Cold, salty water is denser than warm, fresh water, so it sinks and flows slowly along the ocean floor. Together, these surface and deep currents form a global system that some scientists describe as a 'conveyor belt' moving water around the planet.",
            "This system plays a major role in regulating Earth's climate. Ocean currents transport enormous amounts of heat from the tropics toward the poles. One well-known example is the Gulf Stream, a powerful current that carries warm water from the Gulf of Mexico across the Atlantic. Partly as a result of this flow, northwestern Europe enjoys much milder winters than places at similar latitudes in North America or Asia. Currents also influence rainfall patterns, since warm ocean water evaporates more easily and provides moisture for storms.",
            "Scientists are concerned that climate change could weaken parts of this system. As polar ice melts and rainfall increases at high latitudes, large amounts of fresh water enter the North Atlantic. This reduces the saltiness and density of surface water, making it less likely to sink and potentially slowing the deep currents that help drive the conveyor. Some evidence suggests that the Atlantic circulation has already slowed somewhat over the past century. A major slowdown could alter weather patterns, sea levels and ecosystems on both sides of the Atlantic, although scientists continue to debate how quickly such changes might occur.",
          ],
          questions: [
            { text: "According to paragraph 1, what drives deep ocean currents?", options: ["differences in water density", "surface winds only", "the Moon", "underwater volcanoes"], answer: 0 },
            { text: "The word \"regulating\" in paragraph 2 is closest in meaning to", options: ["controlling", "measuring", "destroying", "describing"], answer: 0 },
            { text: "According to paragraph 2, why does northwestern Europe have mild winters?", options: ["The Gulf Stream carries warm water across the Atlantic.", "It is closer to the equator.", "It has many mountains.", "It receives little rainfall."], answer: 0 },
            { text: "According to paragraph 3, how might melting ice affect ocean currents?", options: ["Fresh water could reduce surface density and slow deep currents.", "Melting ice makes water saltier.", "It would make currents flow faster.", "It would have no effect."], answer: 0 },
            { text: "What does the author say about the possible slowdown of Atlantic circulation?", options: ["Scientists agree it will happen next year.", "Some evidence suggests it has slowed, but its speed of change is debated.", "It is impossible.", "It would only affect fish."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Okan", prompt: "Why are you in such a hurry?", chunks: ["my train", "leaves", "in", "fifteen", "minutes"], end: "." },
      { promptBy: "Rachel", prompt: "Did you like the hotel in Rome?", chunks: ["it", "had", "a wonderful", "view of", "the old city"], end: "." },
      { promptBy: "Melek", prompt: "I'm worried about my presentation tomorrow.", chunks: ["would you", "like", "to practice", "it", "in front of me"], end: "?" },
      { promptBy: "Andy", prompt: "Where did you find that old map?", chunks: ["I", "found it", "in", "my grandfather's", "attic"], end: "." },
      { promptBy: "Sevgi", prompt: "When does the summer course begin?", chunks: ["classes", "start", "on", "the first", "Monday of July"], end: "." },
      { promptBy: "Ken", prompt: "Why is the road so wet?", chunks: ["it", "rained", "heavily", "during", "the night"], end: "." },
      { promptBy: "Figen", prompt: "Who is organizing the charity run?", chunks: ["the student", "council", "is", "organizing", "it this year"], end: "." },
      { promptBy: "Dan", prompt: "What did you buy at the market?", chunks: ["I", "bought", "some fresh", "fish and", "vegetables"], end: "." },
      { promptBy: "Nazlı", prompt: "My plants keep dying.", chunks: ["are you", "giving them", "too", "much", "water"], end: "?" },
      { promptBy: "Phil", prompt: "Why did you choose to study history?", chunks: ["I", "have always", "been", "fascinated by", "ancient cultures"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently joined a hiking club at your university. The club organized a weekend trip, but you were unhappy with how it was planned. You want to write to the club president.",
      to: "the hiking club president, Alex",
      subject: "Feedback on last weekend's trip",
      tasks: ["Say what you enjoyed about the trip.", "Describe the problems with the planning.", "Suggest changes for future trips."],
      sample: "Hi Alex,\n\nI wanted to share some thoughts about last weekend's trip to the national park. First of all, I really enjoyed it. The scenery along the ridge trail was breathtaking, and it was a great opportunity to meet other club members, especially as I only joined a few weeks ago.\n\nHowever, there were a few problems with the planning. We received the final schedule only the night before, so several people didn't have time to buy the right equipment. The bus left more than an hour late because the meeting point wasn't clear, and on Saturday we had to walk the last part of the trail in the dark because the route was much longer than described.\n\nFor future trips, I'd suggest sending the schedule and a packing list at least a week in advance and sharing a map of the meeting point. It would also help to choose routes that match the experience of new members, or to offer two groups with different distances.\n\nThanks for all your hard work organizing the club.\n\nBest,\nTuğçe",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Public Health",
      professor: {
        name: "Dr. Ellis",
        text: "Some cities have started to limit the number of fast-food restaurants that can open near schools. Supporters say this could help reduce childhood obesity. Opponents argue that it restricts business and that families, not governments, should decide what children eat. Should cities restrict fast-food restaurants near schools? Explain your view.",
      },
      students: [
        { name: "Isabel", text: "Yes. Children often buy cheap, unhealthy food on their way home from school. If those restaurants weren't so close, they would eat less of it." },
        { name: "Kaan", text: "No. Children will still find unhealthy food somewhere else, like supermarkets. It would be better to teach them about nutrition than to limit businesses." },
      ],
      sample: "I believe cities should restrict new fast-food restaurants near schools, but this should be only one part of a wider strategy. Isabel makes a good point that convenience strongly affects children's choices. When cheap burgers and fried chicken are available a few steps from the school gate, many students buy them every day, often instead of a balanced meal. Reducing this easy access could make a real difference over time. However, Kaan is right that restrictions alone will not solve the problem, since children can still buy snacks in shops. Therefore, cities should combine these limits with nutrition education, healthier school lunches and support for businesses that sell affordable, healthy food. In this way, the policy would not simply ban options but also encourage better ones.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new staff member at a university sports center. The manager is telling you what to say to students.",
      sentences: [
        "Hello, welcome to the sports center.",
        "Please show your student card.",
        "The tennis courts must be booked online.",
        "Towels can be rented at the front desk.",
        "Please wear clean sports shoes in the indoor courts.",
        "The swimming pool is closed every Monday morning for cleaning and water testing.",
        "If you would like to join a team, please write your name on the list next to the entrance, and the coach will contact you within a week.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's travel habits and experiences. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is the most memorable trip you have taken?",
          sample: "The most memorable trip I've taken was a week in Cappadocia with my family a few years ago. We stayed in a small cave hotel, explored underground cities and hiked through valleys with amazing rock formations. The highlight was a hot air balloon ride at sunrise, when the sky was full of colorful balloons. I remember feeling completely amazed by the landscape, and it made me want to travel much more.",
        },
        {
          text: "Do you prefer to plan every detail of a trip or to be spontaneous?",
          sample: "I usually prefer a mix of both. I like to plan the important things in advance, like flights, accommodation and maybe one or two places I really want to see, because it saves money and stress. But I don't like a strict schedule for every hour. Some of my best travel memories come from unplanned moments, like finding a small local restaurant or joining a festival I didn't know about.",
        },
        {
          text: "Do you think tourism has more positive or negative effects on local communities?",
          sample: "I think tourism can have very positive effects when it's managed well. It creates jobs, supports local businesses and encourages communities to protect their history and nature. However, when there are too many tourists, it can cause problems like overcrowding, pollution and rising housing prices for local people. So I think the effects depend on planning. Limits on visitor numbers and investment in local communities can help balance the benefits and the costs.",
        },
        {
          text: "How do you think travel will change in the future?",
          sample: "I think travel will become more environmentally conscious in the future. As people become more aware of climate change, more travelers may choose trains instead of short flights, and airlines may use cleaner fuels. Technology will also play a role. For example, virtual reality might let people explore places before they visit, or even replace some trips. I also think people will travel more slowly, staying longer in one place instead of rushing between many destinations.",
        },
      ],
    },
  },
};
