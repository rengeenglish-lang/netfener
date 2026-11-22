import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 90 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_90: ToeflTest = {
  id: "toefl-90",
  no: 90,
  title: "TOEFL iBT Practice Test 90",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Shopping receipts",
          text: "A receipt is a written record showing what a customer bought and how much they pa{{id}}. For centuries, merchants wrote receipts by hand, if they gave them at a{{ll}}. In the late nineteenth century, an American saloon owner invented the cash regi{{ster}}, partly to stop his employees from stealing mo{{ney}}. Later versions printed a paper record of each sa{{le}}, which could be given to the custo{{mer}}. Receipts became important for returning products, checking prices and keeping track of household spen{{ding}}. Today, most receipts are printed on special heat-sensitive pa{{per}}, which can fade over time. Many shops now offer digital receipts by em{{ail}}, which save paper and are easier to sto{{re}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Recording the match",
          text: [
            "Hi Dad, I have a late lab session tonight and will miss the basketball final at 8. Could you record it for me on the TV?",
            "Please don't tell me the score when I get home! I want to watch it as if it were live. Thanks!",
          ],
          questions: [
            { text: "Why will the writer miss the match?", options: ["The writer has a late lab session.", "The writer is traveling.", "The TV is broken.", "The writer is at a concert."], answer: 0 },
            { text: "What does the writer ask Dad not to do?", options: ["tell the writer the score", "watch the match", "turn off the TV", "invite friends"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Pool closed for a competition",
          text: [
            "POOL CLOSED THIS WEEKEND",
            "The university swimming pool will be closed to the public on Saturday and Sunday because it is hosting the regional university swimming championships.",
            "Spectators are welcome to watch the competition free of charge from the seating area on the upper level. The pool will reopen for regular swimming on Monday at 6 a.m. The gym and fitness classes will not be affected.",
          ],
          questions: [
            { text: "Why will the pool be closed?", options: ["It is hosting a swimming championship.", "It is being repaired.", "The water is being changed.", "There are not enough staff."], answer: 0 },
            { text: "Where can spectators watch the competition?", options: ["from the seating area on the upper level", "from the pool deck", "online only", "from the gym"], answer: 0 },
            { text: "What will NOT be affected?", options: ["the gym and fitness classes", "regular swimming", "the pool opening times", "the swimming lessons"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The first cookbooks",
          paragraphs: [
            "Recipes have been written down for thousands of years. Some of the oldest known recipes come from ancient Mesopotamia, where cooks recorded instructions for stews and broths on clay tablets almost four thousand years ago. These early recipes listed ingredients, such as meat, onions and garlic, but often gave few details about quantities or cooking times, suggesting that they were written for experienced cooks who already knew the basic methods.",
            "One of the most famous early collections is a Roman cookbook often attributed to a man named Apicius, which was probably compiled in the fourth or fifth century. It contains hundreds of recipes, including dishes made with exotic ingredients and rich sauces flavored with fish sauce, honey and spices. Because it describes expensive dishes, historians believe it reflects the food of wealthy households rather than the everyday meals of ordinary Romans, who ate mainly grains, beans and vegetables.",
            "For many centuries, cookbooks were rare and handwritten, and most cooking knowledge was passed down orally from one generation to the next. The invention of the printing press made cookbooks much more widely available. By the eighteenth and nineteenth centuries, cookbooks written for middle-class households became popular, and authors began to include exact measurements and step-by-step instructions. Some, like those written for women managing households, also offered advice on budgeting, cleaning and entertaining guests. Historians today study old cookbooks to learn not only about food but also about trade, social class and daily life in the past.",
          ],
          questions: [
            { text: "According to paragraph 1, what does the lack of details in early recipes suggest?", options: ["They were written for experienced cooks.", "They were written for children.", "The food was very simple.", "They were not real recipes."], answer: 0 },
            { text: "According to paragraph 2, why do historians believe the Roman cookbook reflects wealthy households?", options: ["It describes expensive dishes with exotic ingredients.", "It was written by an emperor.", "It contains only bread recipes.", "It was very cheap to buy."], answer: 0 },
            { text: "The word \"compiled\" in paragraph 2 is closest in meaning to", options: ["collected and put together", "destroyed", "translated", "cooked"], answer: 0 },
            { text: "According to paragraph 3, how was most cooking knowledge passed on for many centuries?", options: ["orally from one generation to the next", "through printed books", "in cooking schools", "on television"], answer: 0 },
            { text: "Why do historians study old cookbooks?", options: ["to learn about trade, social class and daily life", "to find lost treasures", "to open restaurants", "to translate ancient languages"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Riding a horse for the first time",
          text: "Last summer, I visited a farm with my family, and I rode a hor{{se}} for the first time. The horse was brown and white, and her name was Bella. At first, I was a little afr{{aid}} because she was so big. The farmer helped me climb onto the sad{{dle}}. He showed me how to hold the re{{ins}} and sit straight. Then he walked next to us while Bella moved slo{{wly}} around the field. After a while, I felt more relax{{ed}}. Bella was very gen{{tle}}. At the end, I gave her an app{{le}}, and she ate it from my ha{{nd}}. I want to ride again so{{on}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Mini golf opening",
          text: [
            "NEW MINI GOLF COURSE NOW OPEN!",
            "Our eighteen-hole mini golf course in Harbor Park is open every day from 10 a.m. to 10 p.m. Each hole has a different theme, from pirate ships to volcanoes.",
            "Tickets cost $9 for adults and $6 for children. During our opening week, every family ticket comes with free ice cream. The course is also lit at night for evening games.",
          ],
          questions: [
            { text: "How many holes does the course have?", options: ["eighteen", "nine", "twelve", "twenty-four"], answer: 0 },
            { text: "What special offer is there during opening week?", options: ["free ice cream with every family ticket", "free entry for children", "half-price tickets", "a free golf club"], answer: 0 },
            { text: "Why can people play in the evening?", options: ["The course is lit at night.", "It is open twenty-four hours.", "It is indoors.", "There is a full moon."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why dung beetles roll balls",
          paragraphs: [
            "Dung beetles are small insects that live on every continent except Antarctica. They are famous for an unusual habit: they make balls out of animal waste and roll them away.",
            "Dung beetles use the balls as food and as places to lay their eggs. A beetle may roll a ball many times bigger than itself. It pushes the ball with its back legs while standing on its front legs, so it moves backward.",
            "Scientists have found that some dung beetles use the sun, the moon and even the light of the Milky Way to roll their balls in a straight line. This helps them move away quickly from other beetles that might try to steal their food. Dung beetles are also helpful, because they clean up waste and put nutrients back into the soil.",
          ],
          questions: [
            { text: "Where do dung beetles live?", options: ["on every continent except Antarctica", "only in Africa", "only in deserts", "only in Antarctica"], answer: 0 },
            { text: "What do dung beetles use the balls for?", options: ["as food and as places to lay their eggs", "as toys", "to build houses", "to attract birds"], answer: 0 },
            { text: "How does a dung beetle move when rolling a ball?", options: ["backward, pushing with its back legs", "forward, pulling with its mouth", "sideways", "by flying"], answer: 0 },
            { text: "The word \"steal\" in paragraph 3 is closest in meaning to", options: ["take without permission", "share", "clean", "build"], answer: 0 },
            { text: "Why are dung beetles helpful?", options: ["They clean up waste and add nutrients to the soil.", "They eat harmful birds.", "They make honey.", "They pollinate trees."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The nocebo effect",
          text: "Most people have heard of the placebo effect, in which patients feel better after receiving a treatment with no active ingre{{dients}}. Less well known is its opposite, the nocebo ef{{fect}}. In this case, negative expectations cause people to experience unpleasant symp{{toms}}. In clinical trials, for example, some participants who receive sugar pills report side ef{{fects}}, such as headaches or nausea, simply because they were warned that the real medi{{cine}} might cause them. The nocebo effect may also explain why some patients stop taking useful medicines after reading lists of possible prob{{lems}}. Doctors face a diffi{{cult}} balance: they must inform patients about risks honestly, but they may also try to explain them in ways that do not create unnec{{essary}} fear. How information is pre{{sented}} can therefore affect patients' heal{{th}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Thesis defense schedule",
          text: [
            "To: Doctoral candidates planning to defend this spring",
            "From: Graduate Office",
            "Subject: Scheduling your thesis defense",
            "Candidates who plan to defend their thesis this spring must submit the final draft to their examination committee at least six weeks before the proposed defense date. The defense date must be agreed with all committee members and registered with the Graduate Office.",
            "Defenses may be held in person or online, but at least one committee member must be present in person if the defense is held on campus. Please note that no defenses can be scheduled during the final exam period in May. Candidates who wish to graduate in June must complete their defense by May 1.",
          ],
          questions: [
            { text: "When must candidates submit the final draft?", options: ["at least six weeks before the defense", "one week before the defense", "on the day of the defense", "after the defense"], answer: 0 },
            { text: "When can defenses NOT be scheduled?", options: ["during the final exam period in May", "in April", "on weekdays", "in the morning"], answer: 0 },
            { text: "By when must candidates who want to graduate in June complete their defense?", options: ["May 1", "June 1", "May 31", "April 1"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Sponge cities",
          paragraphs: [
            "As cities grow, more of their land is covered by concrete, asphalt and buildings. These hard surfaces prevent rainwater from soaking into the ground. During heavy storms, water rushes over streets and into drains, which can quickly become overwhelmed, causing floods. At the same time, because rain runs off instead of soaking in, underground water supplies may not be refilled, contributing to water shortages during dry periods.",
            "To address both problems, some cities are adopting the idea of the 'sponge city', a concept promoted strongly in China since 2015. Instead of relying only on pipes and concrete channels to carry water away as quickly as possible, sponge cities aim to absorb, store and reuse rainwater, much like a sponge. Techniques include green roofs covered with plants, parks designed to flood safely during storms, wetlands, rain gardens and pavements made of materials that allow water to pass through. The stored water can later be used for irrigation or, after treatment, for other purposes.",
            "Supporters argue that sponge city designs offer many benefits beyond flood control. Green spaces can cool cities during heat waves, provide habitats for wildlife and create pleasant areas for residents. However, the approach also faces challenges. It requires significant investment and long-term maintenance, and in places with extremely intense rainfall, natural systems may not be able to absorb all the water. Some sponge city projects in China were still overwhelmed by record-breaking storms. Experts therefore recommend combining sponge city techniques with traditional drainage and good urban planning, such as avoiding construction in areas that are especially prone to flooding.",
          ],
          questions: [
            { text: "According to paragraph 1, why do hard surfaces in cities contribute to flooding?", options: ["They prevent rainwater from soaking into the ground.", "They attract more rain.", "They block the sun.", "They make drains larger."], answer: 0 },
            { text: "According to paragraph 2, what is the main idea of a sponge city?", options: ["to absorb, store and reuse rainwater", "to remove all parks", "to build taller buildings", "to cover all land with concrete"], answer: 0 },
            { text: "The word \"overwhelmed\" in paragraph 1 is closest in meaning to", options: ["unable to cope", "cleaned", "emptied", "closed"], answer: 0 },
            { text: "Which benefit of sponge city designs is mentioned in paragraph 3?", options: ["Green spaces can cool cities during heat waves.", "They make cities drier.", "They eliminate all storms.", "They reduce the number of residents."], answer: 0 },
            { text: "What do experts recommend?", options: ["combining sponge city techniques with traditional drainage and planning", "abandoning sponge cities", "building in flood-prone areas", "removing all drainage pipes"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Uğur", prompt: "Why are you carrying a camera?", chunks: ["I", "am taking", "photos", "for", "the school magazine"], end: "." },
      { promptBy: "Kate", prompt: "Did you enjoy the music festival?", chunks: ["we", "danced", "all night", "and met", "many people"], end: "." },
      { promptBy: "Elif", prompt: "I always forget to water my plants.", chunks: ["why don't", "you", "set", "a weekly", "reminder"], end: "?" },
      { promptBy: "Mark", prompt: "How did you learn to speak Spanish?", chunks: ["I", "lived", "with", "a family", "in Madrid"], end: "." },
      { promptBy: "Tuğba", prompt: "When does the museum open on Mondays?", chunks: ["it", "is", "closed", "every", "Monday"], end: "." },
      { promptBy: "Will", prompt: "Why are there so many police cars?", chunks: ["the president", "is", "visiting", "the city", "today"], end: "." },
      { promptBy: "Derya", prompt: "What did you think of the new café?", chunks: ["the coffee", "was", "strong", "and", "delicious"], end: "." },
      { promptBy: "Joe", prompt: "Where did you learn to cook?", chunks: ["my mother", "taught me", "when I was", "a", "teenager"], end: "." },
      { promptBy: "Nil", prompt: "The bus is very late.", chunks: ["should", "we", "walk", "to the next", "stop"], end: "?" },
      { promptBy: "Adam", prompt: "Why did you decide to become a pilot?", chunks: ["I", "have always", "loved", "flying", "and traveling"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently bought a monthly membership at a yoga studio, but the studio has canceled several classes without notice. You want to write to the studio manager.",
      to: "the yoga studio manager, Ms. Lee",
      subject: "Canceled classes and my membership",
      tasks: ["Explain your membership and how you use the studio.", "Describe the problem with the canceled classes.", "Say what you would like the studio to do."],
      sample: "Dear Ms. Lee,\n\nAt the beginning of March, I bought a monthly unlimited membership at your studio for $90. I chose your studio because of its convenient evening classes, and I planned to attend the 7 p.m. classes on Mondays, Wednesdays and Fridays after work.\n\nUnfortunately, during the past three weeks, four of these evening classes have been canceled without any notice. On two occasions, I arrived at the studio only to find a sign on the door saying that the class was canceled. As I travel thirty minutes to get to the studio, this has been very frustrating, and I have only been able to attend five classes this month instead of the twelve I expected.\n\nI would like to ask for a partial refund or an extension of my membership by two weeks to make up for the missed classes. I would also suggest sending text messages or emails to members when classes are canceled, so that people do not travel unnecessarily.\n\nThank you for your attention to this matter.\n\nKind regards,\nGamze Toprak",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Public Health",
      professor: {
        name: "Dr. Ellis",
        text: "Some employers offer free healthy snacks, gym memberships and wellness programs to their employees. Supporters say these programs improve health and productivity. Critics argue that employers should focus on reducing workload and stress instead, since these are major causes of poor health at work. What is the best way for employers to improve employees' health? Explain your view.",
      },
      students: [
        { name: "Ava", text: "Wellness programs are great. Free gym memberships and healthy food make it easier for employees to take care of themselves." },
        { name: "Kerem", text: "Those programs are nice, but they don't solve the real problem. If people work twelve hours a day, they don't have time for the gym." },
      ],
      sample: "I believe the most effective way for employers to improve employees' health is to address workload and stress first, and then offer wellness programs as an additional benefit. Kerem makes an important point: long working hours, unrealistic deadlines and constant emails outside working hours are major causes of exhaustion, poor sleep and anxiety. A free gym membership is of little use if employees have no time or energy to use it. However, Ava is right that wellness programs can make healthy choices easier, especially when combined with reasonable schedules. Healthy food in the office and on-site exercise classes can encourage better habits. Therefore, companies should set realistic workloads, respect employees' free time and train managers to recognize signs of stress, while also providing practical wellness resources.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new employee at a bakery. The baker is telling you what to say to customers.",
      sentences: [
        "Good morning, what would you like today?",
        "The bread is fresh from the oven.",
        "These cakes contain nuts.",
        "We close at six this evening.",
        "Would you like a bag for that?",
        "If you would like to order a birthday cake, please tell us at least three days in advance.",
        "Every evening after five, all the bread and pastries that are left are sold at half price, so customers can get great bargains.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about food and cooking traditions. The researcher will ask you some questions.",
      questions: [
        {
          text: "Who taught you to cook, and what did you learn?",
          sample: "My grandmother taught me most of what I know about cooking. When I was a child, I often stayed with her during school holidays, and she let me help her in the kitchen. She taught me how to make traditional dishes, like stuffed peppers and lentil soup, and how to bake bread. She never used exact measurements, so I learned to cook by watching, tasting and practicing, which is something I still enjoy today.",
        },
        {
          text: "Do you think it's important to keep traditional recipes alive?",
          sample: "Yes, I think it's very important to keep traditional recipes alive. They are part of our culture and family history, and each dish often has a story behind it. When we cook traditional food, we feel connected to our ancestors and to the place we come from. Writing recipes down, sharing them with friends and teaching them to children are good ways to make sure they are not forgotten.",
        },
        {
          text: "Do people today cook less than in the past?",
          sample: "I think many people today do cook less than in the past. People are busier, and there are many convenient alternatives, like ready meals, food delivery apps and restaurants. In the past, especially in my grandparents' generation, almost every meal was cooked at home. However, I've noticed that many young people are becoming interested in cooking again, partly because of cooking videos online and concerns about healthy eating.",
        },
        {
          text: "Should cooking be taught in schools?",
          sample: "Yes, I believe cooking should be taught in schools. It's an essential life skill that helps people eat healthily and save money. Many young people leave home without knowing how to prepare simple, nutritious meals, and they end up relying on fast food. Cooking classes could also teach students about nutrition, food safety and different cultures through their cuisines. Besides, cooking together can be fun and help students develop teamwork skills.",
        },
      ],
    },
  },
};
