import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 38 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_38: ToeflTest = {
  id: "toefl-38",
  no: 38,
  title: "TOEFL iBT Practice Test 38",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Shopping carts",
          text: "Shopping carts are so common today that it is hard to imagine a supermarket without them. They were invented in 1937 by the owner of a grocery store in the United States, who noticed that customers stopped shop{{ping}} when their baskets became too he{{avy}}. His first design was a folding chair with whe{{els}} and two baskets placed on t{{op}}. At first, many customers refused to u{{se}} them. Men thought they looked we{{ak}}, and women said the carts reminded them of baby strol{{lers}}. To change their min{{ds}}, the owner hired people to push carts around the st{{ore}}. Soon, shoppers began to accept the inven{{tion}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Group project meeting",
          text: [
            "Hi team! The library study rooms are all booked tomorrow, so let's meet in the student center café at 3 p.m. instead.",
            "Please bring your part of the slides on a USB drive. We need to practice the full presentation at least once before Friday.",
          ],
          questions: [
            { text: "Why is the meeting place changing?", options: ["The library study rooms are booked.", "The café is closed.", "The presentation was canceled.", "The professor asked for it."], answer: 0 },
            { text: "What should team members bring?", options: ["their laptops and chargers", "their part of the slides on a USB drive", "printed reports", "snacks for the group"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Water shutoff",
          text: [
            "NOTICE TO ALL RESIDENTS",
            "Due to essential pipe repairs, the water supply to Buildings A and B will be shut off on Thursday from 9 a.m. to 3 p.m.",
            "Please store enough water for drinking and cooking before the shutoff. When the water returns, it may look slightly brown for a few minutes; let the tap run until it is clear. We apologize for the inconvenience.",
          ],
          questions: [
            { text: "Why will the water be shut off?", options: ["for essential pipe repairs", "because of a water shortage", "to clean the swimming pool", "because residents did not pay"], answer: 0 },
            { text: "What are residents advised to do before the shutoff?", options: ["leave the building", "store enough water", "call the manager", "turn off the electricity"], answer: 1 },
            { text: "What should residents do if the water looks brown?", options: ["call a plumber", "let the tap run until it is clear", "boil it for ten minutes", "report it to the city"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The story of natural rubber",
          paragraphs: [
            "Natural rubber comes from latex, a milky white liquid produced by certain plants. The most important source is the rubber tree, which is native to the Amazon rainforest. Indigenous peoples of Central and South America used latex for centuries to make balls, waterproof containers and shoes. When Europeans first encountered rubber, they found it interesting but of limited use, because it became sticky in hot weather and hard and brittle in the cold.",
            "In 1839, the American inventor Charles Goodyear discovered that heating rubber with sulfur made it strong, elastic and stable at different temperatures. This process, called vulcanization, transformed rubber into one of the most useful materials of the industrial age. Rubber was soon used for hoses, belts, waterproof clothing and, above all, tires for bicycles and later for automobiles. Demand rose dramatically, and a rubber boom brought great wealth to traders in the Amazon, often at the cost of terrible abuse of local workers.",
            "In the 1870s, seeds of the rubber tree were taken from Brazil to Britain and then to British colonies in Southeast Asia, where large plantations were established. Plantation rubber was cheaper to produce than wild rubber collected from scattered trees in the forest, and by the 1920s Southeast Asia dominated world production, which it still does today. During the Second World War, shortages of natural rubber encouraged the large-scale development of synthetic rubber made from petroleum. Today, synthetic rubber is used more widely, but natural rubber remains essential for products such as aircraft tires, which require its special strength.",
          ],
          questions: [
            { text: "According to paragraph 1, why did Europeans first find rubber of limited use?", options: ["It was too expensive.", "It became sticky in heat and brittle in cold.", "It could not be shaped.", "It was poisonous."], answer: 1 },
            { text: "The word \"brittle\" in paragraph 1 is closest in meaning to", options: ["easily broken", "soft", "colorful", "heavy"], answer: 0 },
            { text: "According to paragraph 2, what did vulcanization do?", options: ["It made rubber strong, elastic and stable.", "It turned rubber into liquid.", "It made rubber cheaper to grow.", "It removed the color from rubber."], answer: 0 },
            { text: "Why did Southeast Asia come to dominate rubber production?", options: ["Plantation rubber was cheaper to produce than wild rubber.", "Rubber trees are native there.", "The Amazon forest disappeared.", "Brazil stopped exporting rubber."], answer: 0 },
            { text: "According to paragraph 3, why is natural rubber still essential?", options: ["It is cheaper than synthetic rubber.", "Some products, such as aircraft tires, need its special strength.", "Synthetic rubber is no longer made.", "It is easier to recycle."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Ice skating with my cousin",
          text: "Last winter, my cousin took me ice skating for the fi{{rst}} time. The skating rink was in the center of the ci{{ty}}. We rented skates at the entr{{ance}}. When I stepped onto the i{{ce}}, I fell down immediately! My cousin hel{{ped}} me stand up. She showed me how to bend my kn{{ees}} and move my feet slowly. After an ho{{ur}}, I could skate around the ri{{nk}} without holding the wall. Then we drank hot chocolate in a small ca{{fe}}. Now I want to go skating every wee{{kend}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Phone repair shop",
          text: [
            "BROKEN PHONE? WE CAN HELP!",
            "QuickFix repairs cracked screens, batteries and charging ports for most phone models. Most repairs take less than one hour.",
            "We are open Monday to Saturday, 10 a.m. to 7 p.m., at 22 Market Street. Students get 15% off with a student card.",
          ],
          questions: [
            { text: "What does the shop repair?", options: ["computers only", "phone screens, batteries and charging ports", "cameras", "televisions"], answer: 1 },
            { text: "How long do most repairs take?", options: ["less than one hour", "one day", "three days", "one week"], answer: 0 },
            { text: "Who gets a discount?", options: ["new customers", "students with a student card", "people over 60", "everyone on Saturday"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How cacti survive in the desert",
          paragraphs: [
            "Deserts are very dry places. It may not rain for months. Yet cactus plants grow well in many deserts of North and South America.",
            "Cacti have special ways of saving water. Their thick stems can store large amounts of water after it rains. Instead of wide leaves, most cacti have sharp spines. Spines lose much less water than leaves, and they also protect the plant from thirsty animals.",
            "Cactus roots usually spread out widely just under the ground. This helps them collect rainwater quickly before it dries up. Many cacti also open their tiny pores only at night, when the air is cool, so they lose less water.",
          ],
          questions: [
            { text: "Where do cacti grow well?", options: ["in rainforests", "in many deserts of the Americas", "near the North Pole", "only in gardens"], answer: 1 },
            { text: "Where do cacti store water?", options: ["in their spines", "in their thick stems", "in their flowers", "in the sand"], answer: 1 },
            { text: "What is one purpose of spines?", options: ["to collect sunlight", "to protect the plant from animals", "to make seeds", "to attract birds"], answer: 1 },
            { text: "The word \"spread out\" in paragraph 3 is closest in meaning to", options: ["extend over a wide area", "grow very deep", "break", "dry up"], answer: 0 },
            { text: "Why do many cacti open their pores at night?", options: ["to catch insects", "to lose less water", "to grow faster", "to make flowers"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Zeigarnik effect",
          text: "In the 1920s, a psychologist noticed that waiters in a busy restaurant could remember complicated orders until the bill was pa{{id}}, but forgot them almost immedi{{ately}} afterwards. She designed experiments in which partic{{ipants}} were given simple tasks, some of which were inter{{rupted}} before they could be finished. Later, participants remem{{bered}} the unfinished tasks much better than the comp{{leted}} ones. This tendency, now called the Zeigarnik effect, suggests that an incom{{plete}} task creates a kind of mental ten{{sion}} that keeps it active in memory. Television series use this idea when episodes end at an exci{{ting}} moment, encouraging viewers to watch the next epi{{sode}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Thesis submission guidelines",
          text: [
            "To: Final-year master's students",
            "From: Graduate School Office",
            "Subject: Thesis submission deadline and format",
            "Your thesis must be submitted electronically through the graduate portal by 5 p.m. on May 20. Late submissions will be accepted only with written approval from your supervisor and the Graduate Director, and may delay your graduation until the following term.",
            "Before submitting, please make sure your thesis follows the formatting guide available on the portal, including the required title page and declaration of originality. All theses are automatically checked by plagiarism detection software; submissions with a high similarity score will be reviewed by a committee before they are sent to examiners.",
          ],
          questions: [
            { text: "How must the thesis be submitted?", options: ["in printed form to the office", "electronically through the graduate portal", "by email to the supervisor", "in person at the library"], answer: 1 },
            { text: "What is required for a late submission?", options: ["a late fee", "written approval from the supervisor and the Graduate Director", "a medical certificate only", "nothing"], answer: 1 },
            { text: "What happens to submissions with a high similarity score?", options: ["They are rejected automatically.", "They are reviewed by a committee.", "They are returned to the student.", "They are published online."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Monsoons and agriculture",
          paragraphs: [
            "A monsoon is a seasonal shift in the direction of the prevailing winds, which brings dramatic changes in rainfall. The best-known example is the South Asian monsoon. During the summer, the land heats up faster than the surrounding ocean, and the warm air above it rises. Moist air from the Indian Ocean flows in to replace it, bringing heavy rains that can last for several months. In winter, the pattern reverses, and dry winds blow from the land toward the sea.",
            "For hundreds of millions of people, the summer monsoon is essential. In India, a large share of the year's rainfall arrives during the monsoon season, and much of the country's farmland depends on this rain rather than on irrigation. The timing of the monsoon's arrival is therefore watched closely. If the rains come late or are weaker than usual, crops such as rice and cotton may fail, food prices can rise and farmers' incomes fall. Even the wider economy can slow down in years of poor monsoon rainfall.",
            "Too much rain can be just as damaging as too little. Intense monsoon downpours can cause floods and landslides, destroy crops and homes and spread waterborne diseases. Climate scientists expect global warming to make monsoon rainfall more variable, with longer dry spells interrupted by more extreme rain events. In response, governments and farmers are investing in improved weather forecasting, water storage systems and crop varieties that can tolerate both drought and flooding.",
          ],
          questions: [
            { text: "According to paragraph 1, what causes the summer monsoon?", options: ["The land heats faster than the ocean, drawing moist ocean air inland.", "The ocean becomes warmer than the land.", "Mountains block the wind.", "The winter winds become stronger."], answer: 0 },
            { text: "The word \"prevailing\" in paragraph 1 is closest in meaning to", options: ["most common", "strongest", "coldest", "rarest"], answer: 0 },
            { text: "According to paragraph 2, why is the timing of the monsoon watched closely?", options: ["Much farmland depends on monsoon rain.", "It affects tourism only.", "It determines school holidays.", "It changes the length of the day."], answer: 0 },
            { text: "What can happen in years of poor monsoon rainfall?", options: ["Food prices may rise and the economy may slow.", "Crops grow faster.", "Floods become more common.", "Farmers earn more money."], answer: 0 },
            { text: "According to paragraph 3, how are governments and farmers responding to climate change?", options: ["by moving all farms to cities", "by improving forecasting, water storage and crop varieties", "by stopping rice production", "by building more factories"], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ozan", prompt: "Why are you wearing a suit today?", chunks: ["I", "have", "an important", "interview", "this afternoon"], end: "." },
      { promptBy: "Anna", prompt: "Did you enjoy the book I lent you?", chunks: ["I", "couldn't", "stop", "reading it", "last night"], end: "." },
      { promptBy: "Selin", prompt: "My bike has a flat tire.", chunks: ["do you", "want", "to borrow", "mine", "for today"], end: "?" },
      { promptBy: "Jake", prompt: "How did you get here so quickly?", chunks: ["I", "took", "a shortcut", "through", "the park"], end: "." },
      { promptBy: "Gül", prompt: "When will the results be announced?", chunks: ["they", "will be", "posted online", "next", "Monday"], end: "." },
      { promptBy: "Mike", prompt: "Why are the lights off in the lab?", chunks: ["the technician", "is", "fixing", "the electrical", "system"], end: "." },
      { promptBy: "Nil", prompt: "What do you think of the new professor?", chunks: ["her", "lectures", "are", "clear and", "interesting"], end: "." },
      { promptBy: "Ben", prompt: "Where are you going on holiday?", chunks: ["we", "are visiting", "my cousins", "in", "Canada"], end: "." },
      { promptBy: "İrem", prompt: "I don't understand this assignment.", chunks: ["why don't", "you", "ask", "the teaching", "assistant"], end: "?" },
      { promptBy: "Leo", prompt: "Why did you start cycling to work?", chunks: ["I", "wanted", "to save", "money and", "get fit"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are organizing a farewell party for a classmate, Lena, who is moving abroad. You want to invite your professor, Dr. Walsh, who taught both of you last year.",
      to: "Dr. Walsh",
      subject: "Farewell party for Lena",
      tasks: ["Explain the reason for the party.", "Give details about the time and place.", "Ask whether the professor can attend and say something about Lena."],
      sample: "Dear Dr. Walsh,\n\nI hope you are well. I am writing because my classmate Lena Fischer, who was in your Environmental Policy course last year, is moving to Norway next month to begin a research position. Several of us are organizing a small farewell party to thank her for being such a wonderful friend and classmate.\n\nThe party will take place on Friday, June 6, from 6 to 9 p.m. in the garden room of the student center. We will have some food and drinks, and a few people will give short speeches.\n\nWe would be delighted if you could join us, even for a short time. Lena has often said that your course was the reason she decided to specialize in environmental research, and I know it would mean a great deal to her to see you there. Please let me know by June 1 if you are able to come.\n\nBest regards,\nAyşe Demirci",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Urban Planning",
      professor: {
        name: "Dr. Carter",
        text: "Many cities have large areas of empty or unused buildings, such as old factories and offices. Some people think these buildings should be demolished to make space for new housing and parks. Others believe old buildings should be renovated and reused because they are part of a city's history. What should cities do with old, unused buildings? Explain your view.",
      },
      students: [
        { name: "Grace", text: "Renovate them. Old factories can become great apartments, studios or markets, and they give a neighborhood character that new buildings don't have." },
        { name: "Emir", text: "Renovation is often too expensive and some old buildings are unsafe. In many cases, it's better to demolish them and build modern, energy-efficient housing." },
      ],
      sample: "I believe cities should renovate old buildings whenever it is practical, and demolish them only when renovation is unsafe or unrealistic. Grace makes a strong point that old factories and warehouses give neighborhoods a unique character. Converting them into apartments, workspaces or cultural centers connects residents with the city's history and can attract visitors and businesses. Renovation can also be better for the environment, because demolishing a building and constructing a new one produces a great deal of waste and emissions. However, Emir is right that not every building can or should be saved. If a structure is badly damaged or would cost far more to repair than to replace, then building modern, energy-efficient housing makes more sense. Cities should therefore assess each building individually rather than follow a single rule.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new assistant at a veterinary clinic. The senior nurse is explaining what to tell pet owners.",
      sentences: [
        "Good morning, welcome to the clinic.",
        "Please keep your dog on a leash.",
        "Cats should stay in their carriers.",
        "The doctor will see you in a few minutes.",
        "Please fill out this form with your pet's medical history.",
        "If your pet needs surgery, it should not eat anything after midnight the night before.",
        "After the appointment, you can pay at the front desk, and we will send you a reminder when your pet's next vaccination is due.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about the places where they live. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you like most about the area where you live?",
          sample: "What I like most about my neighborhood is that everything I need is within walking distance. There's a small market, a pharmacy, a few cafés and a park where I go running in the morning. It's also quite quiet in the evenings, which makes it easy to study. And because I've lived there for several years, I know many of the shopkeepers, so it feels friendly and safe.",
        },
        {
          text: "If you could change one thing about your town or city, what would it be?",
          sample: "If I could change one thing, I would improve public transport. At the moment, buses are often crowded and don't run very frequently in the evenings, so many people drive, which causes traffic jams and pollution. If there were more bus routes, a reliable metro line and safe bike lanes, I think the city would be much more pleasant, and people would spend less time stuck in traffic.",
        },
        {
          text: "Do you think it's better to live in a big city or a small town?",
          sample: "I think it depends on a person's stage of life. For young people, big cities offer more job opportunities, universities and cultural activities, like concerts and museums. However, they can be expensive, noisy and stressful. Small towns are usually calmer and safer, and people have stronger relationships with their neighbors, which can be great for families. Personally, I prefer a big city now, but I might move to a smaller town later.",
        },
        {
          text: "How do you think cities will change in the next thirty years?",
          sample: "I think cities will become greener and more technologically advanced. Because of climate change, many cities will probably plant more trees, create more parks and reduce the number of cars in the center. Electric and self-driving vehicles may become common, and smart systems could manage traffic and energy use more efficiently. At the same time, cities will need to deal with rising housing costs, so I hope they will build more affordable homes as well.",
        },
      ],
    },
  },
};
