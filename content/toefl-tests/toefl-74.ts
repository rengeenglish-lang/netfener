import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 74 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_74: ToeflTest = {
  id: "toefl-74",
  no: 74,
  title: "TOEFL iBT Practice Test 74",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Measuring tapes",
          text: "For most of history, people measured length using parts of the body, such as the foot or the width of a ha{{nd}}. Because bodies differ, these measurements were not very accu{{rate}}. Over time, governments introduced standard units, and craftsmen used wooden rulers and measuring ro{{ds}}. Flexible measuring tapes made of cloth were used by tail{{ors}} to measure their customers' bod{{ies}}. In 1868, an American inventor patented a spring-loaded tape measure that rolled up inside a small me{{tal}} case. Later designs used a thin, curved strip of st{{eel}} that stayed straight when pulled out, making it easy for one person to measure long dist{{ances}}. Today, builders still rely on tape measures, although some also use laser dev{{ices}} that measure distances inst{{antly}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Picnic this Sunday?",
          text: [
            "Hi all! The weather looks perfect for Sunday, so how about a picnic in Lakeside Park at 1 p.m.?",
            "I'll bring sandwiches and a big blanket. Could someone bring drinks and someone else bring fruit? Let's meet near the playground by the main gate.",
          ],
          questions: [
            { text: "What is the writer suggesting?", options: ["a picnic in Lakeside Park on Sunday", "a trip to the beach", "a dinner at a restaurant", "a study session"], answer: 0 },
            { text: "What will the writer bring?", options: ["sandwiches and a blanket", "drinks", "fruit", "a football"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Extended library hours",
          text: [
            "EXTENDED HOURS DURING FINALS",
            "During the final exam period, from December 1 to December 19, the main library will be open 24 hours a day, Monday to Friday, and from 8 a.m. to midnight on weekends.",
            "Between midnight and 7 a.m., only students with a valid student card will be allowed to enter, and only the ground floor and the second floor will be open. Free coffee will be available in the lobby from 10 p.m. to 2 a.m.",
          ],
          questions: [
            { text: "When will the library be open 24 hours?", options: ["Monday to Friday during the final exam period", "every day all year", "only on weekends", "only on December 19"], answer: 0 },
            { text: "Who can enter between midnight and 7 a.m.?", options: ["only students with a valid student card", "anyone", "only staff", "only graduate students"], answer: 0 },
            { text: "What will be available in the lobby late at night?", options: ["free coffee", "free sandwiches", "free printing", "free taxis"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How sunflowers follow the sun",
          paragraphs: [
            "Young sunflowers display a remarkable behavior. During the day, their stems slowly bend so that the developing flower heads face the sun as it moves across the sky from east to west. At night, the plants gradually turn back toward the east, ready to face the rising sun in the morning. This daily movement, known as heliotropism, has fascinated observers for centuries.",
            "Research published in 2016 helped explain how and why this happens. Scientists found that the movement is caused by uneven growth in the stem. During the day, cells on the east side of the stem grow faster than those on the west side, causing the stem to bend toward the west. At night, the pattern reverses, and the west side grows faster. Experiments showed that this rhythm is controlled by the plant's internal clock, which is coordinated with the daily cycle of light. When plants were kept in a room where the light did not move, they continued to turn for several days, showing that the behavior was not simply a reaction to light.",
            "Interestingly, the movement stops when sunflowers mature. Adult sunflowers no longer follow the sun; instead, most of them face east permanently. The researchers discovered that east-facing flowers warm up faster in the morning and attract more bees and other pollinators than flowers turned to the west. Tracking the sun also appears to help young plants grow, since those that were prevented from turning had smaller leaves. The behavior thus seems to benefit sunflowers at different stages of their lives in different ways.",
          ],
          questions: [
            { text: "According to paragraph 1, what do young sunflowers do at night?", options: ["They turn back toward the east.", "They stop growing.", "They face west.", "They close their flowers."], answer: 0 },
            { text: "According to paragraph 2, what causes the stem to bend?", options: ["uneven growth on different sides of the stem", "wind", "the weight of the flower", "water in the soil"], answer: 0 },
            { text: "What did experiments with stationary light show?", options: ["The movement is controlled by an internal clock.", "Sunflowers die without moving light.", "Sunflowers turn only in sunlight.", "Sunflowers prefer artificial light."], answer: 0 },
            { text: "The word \"mature\" in paragraph 3 is closest in meaning to", options: ["become fully grown", "die", "open", "turn"], answer: 0 },
            { text: "According to paragraph 3, why do adult sunflowers face east?", options: ["East-facing flowers warm faster and attract more pollinators.", "They cannot see the sun in the west.", "The wind blows from the east.", "They need more shade."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Helping Mrs. Öztürk next door",
          text: "Mrs. Öztürk lives in the house next to ours. She is eighty years old and lives al{{one}}. Last winter, she hurt her le{{g}}, and she could not go out for a few we{{eks}}. My mother and I decided to help h{{er}}. Every day after school, I went to the super{{market}} and bought bread, milk and fru{{it}} for her. On weekends, I helped her water her pla{{nts}}. She told me interesting stories about her chil{{dhood}}. When her leg got better, she baked a delicious ca{{ke}} for our family. Now we are good fri{{ends}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Sushi-making class",
          text: [
            "LEARN TO MAKE SUSHI!",
            "Our two-hour sushi-making class takes place every Thursday at 7 p.m. at Sakura Kitchen. A Japanese chef will show you how to prepare rice and roll three types of sushi.",
            "The class costs $45, including all ingredients and a drink. You can eat everything you make at the end. Vegetarian options are available. Book at least two days in advance.",
          ],
          questions: [
            { text: "Who teaches the class?", options: ["a Japanese chef", "a school teacher", "a student", "a nutrition expert"], answer: 0 },
            { text: "What is included in the price?", options: ["all ingredients and a drink", "a cookbook", "a knife set", "a second class"], answer: 0 },
            { text: "How far in advance should people book?", options: ["at least two days", "one month", "on the same day", "one week"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How arctic foxes survive the cold",
          paragraphs: [
            "Arctic foxes live in some of the coldest places on Earth, where winter temperatures can fall below minus forty degrees. Yet these small animals stay warm.",
            "In winter, arctic foxes grow very thick white fur. The white color also helps them hide in the snow. They have short ears, short legs and a short nose, so they lose less heat. Even the bottoms of their feet are covered with fur.",
            "When an arctic fox sleeps, it curls into a ball and wraps its long, bushy tail around its body like a blanket. In summer, the fox's fur becomes brown or gray, so it can hide among rocks and plants.",
          ],
          questions: [
            { text: "How cold can winter temperatures be where arctic foxes live?", options: ["below minus forty degrees", "about zero degrees", "about ten degrees", "about minus five degrees"], answer: 0 },
            { text: "Why is white fur helpful in winter?", options: ["It keeps the fox warm and helps it hide in the snow.", "It makes the fox look bigger.", "It keeps insects away.", "It helps the fox swim."], answer: 0 },
            { text: "Why do arctic foxes have short ears and legs?", options: ["to lose less heat", "to run faster", "to hear better", "to dig holes"], answer: 0 },
            { text: "The word \"bushy\" in paragraph 3 is closest in meaning to", options: ["thick with fur", "thin", "short", "wet"], answer: 0 },
            { text: "What color is the fox's fur in summer?", options: ["brown or gray", "white", "red", "black"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The just-world hypothesis",
          text: "Many people want to believe that the world is fair, so that good things happen to good people and bad things happen to those who dese{{rve}} them. Psychologists call this belief the just-world hypo{{thesis}}. This belief can make people feel safe, because it suggests that they can avoid misfor{{tune}} by behaving well. However, it can also lead people to blame vic{{tims}}. In some experiments, participants who watched another person receive painful shocks began to view that person more nega{{tively}}, as if the person must have deserved the pun{{ishment}}. The belief may make people less willing to help those in dif{{ficulty}}, such as the poor or the ill. Recognizing this bias can encourage more empa{{thy}} and fairer judg{{ments}} about others' situa{{tions}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Laboratory assistant positions",
          text: [
            "To: Undergraduate students majoring in biology or chemistry",
            "From: Department of Biochemistry",
            "Subject: Part-time laboratory assistant positions",
            "The Department of Biochemistry is hiring four part-time laboratory assistants for the spring semester. Assistants will work about eight hours per week, preparing equipment and solutions for teaching laboratories and helping maintain records. The position pays $14 per hour.",
            "Applicants should have completed at least one laboratory course with a grade of B or higher and must be available on Tuesday or Thursday afternoons. Previous laboratory experience is helpful but not required, as training will be provided. To apply, send a short cover letter and your class schedule to the department office by January 10.",
          ],
          questions: [
            { text: "What will laboratory assistants do?", options: ["prepare equipment and solutions and maintain records", "teach laboratory classes", "conduct their own research", "grade students' exams"], answer: 0 },
            { text: "Which requirement is mentioned?", options: ["availability on Tuesday or Thursday afternoons", "previous laboratory experience", "graduate student status", "a driver's license"], answer: 0 },
            { text: "What should applicants send?", options: ["a short cover letter and their class schedule", "a full research paper", "three recommendation letters", "a fee"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The cost of hosting the Olympic Games",
          paragraphs: [
            "Hosting the Olympic Games is often seen as a great honor and an opportunity to showcase a city to the world. Cities compete for the right to host the Games, arguing that they will attract tourists, create jobs, improve infrastructure and inspire residents to become more active. In some cases, such as Barcelona in 1992, the Games are credited with transforming a city, revitalizing its waterfront and boosting tourism for decades.",
            "However, economists who have studied the Olympics are often skeptical about these benefits. The costs of hosting have grown enormously, with recent Games costing many billions of dollars, frequently far more than originally planned. Cities must build or upgrade stadiums, athletes' villages, transport systems and security, and much of this spending comes from public funds. Tourism benefits may be smaller than expected, since regular tourists often avoid host cities during the Games because of crowds and high prices.",
            "Another problem concerns what happens after the Games. Some facilities built for the Olympics have been used rarely or abandoned, becoming costly burdens for local governments. In response to these concerns, fewer cities have been willing to bid in recent years, and several have withdrawn after public opposition. The International Olympic Committee has introduced reforms encouraging hosts to use existing or temporary venues and to align Olympic projects with long-term urban plans. Whether these reforms will make hosting financially sustainable remains to be seen.",
          ],
          questions: [
            { text: "According to paragraph 1, why do cities compete to host the Olympics?", options: ["They hope to attract tourists, create jobs and improve infrastructure.", "They are required to by law.", "They want to reduce tourism.", "They want to save money."], answer: 0 },
            { text: "Why does the author mention Barcelona?", options: ["as an example of a city transformed by the Games", "as a city that lost money", "as a city that refused to host", "as the first Olympic city"], answer: 0 },
            { text: "The word \"skeptical\" in paragraph 2 is closest in meaning to", options: ["doubtful", "enthusiastic", "angry", "certain"], answer: 0 },
            { text: "According to paragraph 2, why might tourism benefits be smaller than expected?", options: ["Regular tourists often avoid host cities during the Games.", "Hotels are closed during the Games.", "Athletes are not allowed to travel.", "Visitors cannot buy tickets."], answer: 0 },
            { text: "What has the International Olympic Committee done in response to concerns?", options: ["encouraged the use of existing or temporary venues", "required larger stadiums", "banned public funding", "reduced the number of sports to one"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Kaan", prompt: "Why are you walking so fast?", chunks: ["I", "don't want", "to be late", "for", "my interview"], end: "." },
      { promptBy: "Natalie", prompt: "Did you enjoy the beach?", chunks: ["the water", "was", "warm", "and very", "clear"], end: "." },
      { promptBy: "Gül", prompt: "I'm too busy to exercise.", chunks: ["why don't", "you", "walk", "to work", "instead"], end: "?" },
      { promptBy: "Mike", prompt: "How did you learn to dance so well?", chunks: ["I", "took", "classes", "for", "several years"], end: "." },
      { promptBy: "Esra", prompt: "When is your sister's wedding?", chunks: ["it", "will be", "on", "the last Saturday", "of June"], end: "." },
      { promptBy: "Craig", prompt: "Why is the office so cold?", chunks: ["the heating", "has", "been", "turned off", "for repairs"], end: "." },
      { promptBy: "Hilal", prompt: "What did you do on your birthday?", chunks: ["my friends", "took me", "to", "a nice", "restaurant"], end: "." },
      { promptBy: "Ben", prompt: "Where should I put these boxes?", chunks: ["please", "put them", "in", "the storage", "room"], end: "." },
      { promptBy: "Defne", prompt: "This bag is really heavy.", chunks: ["should", "we", "take", "a taxi", "home"], end: "?" },
      { promptBy: "Kyle", prompt: "Why did you choose this job?", chunks: ["it", "allows me", "to travel", "to many", "countries"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently started volunteering at an animal shelter. You have noticed that the shelter needs more help on weekends and have an idea for recruiting volunteers. You want to write to the shelter director.",
      to: "the shelter director, Ms. Price",
      subject: "Idea for recruiting weekend volunteers",
      tasks: ["Explain your role at the shelter.", "Describe the problem you have noticed.", "Suggest your idea for solving it."],
      sample: "Dear Ms. Price,\n\nI started volunteering at the Happy Tails Shelter three weeks ago, and I usually help on Tuesday and Thursday afternoons by walking the dogs and cleaning the cat rooms. I really enjoy the work, and everyone has been very welcoming.\n\nLast Saturday, I came in for an extra shift and noticed that there were only two volunteers for more than forty animals. Several dogs did not get a walk at all, and the staff seemed very busy dealing with visitors who wanted to adopt pets. One of the staff members told me that weekends are always difficult because many regular volunteers are busy with their families.\n\nI would like to suggest contacting local universities to recruit student volunteers for weekend shifts. Many students are looking for volunteer experience, and some programs, such as veterinary science and psychology, even require it. I would be happy to design a poster and speak to the student volunteering office at my own university. We could also offer a short training session on Saturday mornings for new volunteers.\n\nThank you for considering this idea.\n\nBest regards,\nİpek Yıldız",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Science",
      professor: {
        name: "Dr. Allen",
        text: "Some people believe that individuals should make major lifestyle changes, such as flying less, eating less meat and avoiding unnecessary purchases, to fight climate change. Others argue that individual actions make little difference and that governments and large companies must take the lead. Who should be mainly responsible for addressing climate change: individuals or governments and companies? Explain your view.",
      },
      students: [
        { name: "Olivia", text: "Individuals. If millions of people change their habits, it adds up. Companies will also change if customers demand greener products." },
        { name: "Kerem", text: "Governments and companies. A few large companies produce most emissions. Individual choices are tiny compared with national energy policies." },
      ],
      sample: "I believe governments and large companies should take the main responsibility for addressing climate change, although individual actions still matter. Kerem is right that the largest sources of emissions, such as power plants, heavy industry and transport systems, are shaped by policies and business decisions that individuals cannot control. Only governments can invest in renewable energy on a large scale, set emission limits and build efficient public transport. However, Olivia makes a valuable point that individual choices can influence the market and politics. When consumers buy greener products and vote for leaders who support climate action, they put pressure on companies and governments to change. Therefore, individuals should make reasonable changes in their own lives, but their most important contribution may be demanding stronger action from those with the greatest power.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new staff member at a train company's customer service desk. Your supervisor is telling you what to say to passengers.",
      sentences: [
        "Hello, how can I help you today?",
        "Your train leaves from platform six.",
        "Seat reservations are recommended on weekends.",
        "Bicycles are allowed in the last carriage.",
        "The café car is in the middle of the train.",
        "If your train is canceled, you can use your ticket on the next available train at no extra cost.",
        "Passengers who buy their tickets at least two weeks in advance can save up to forty percent, and students receive an additional discount with a valid card.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about the environment and everyday choices. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is one thing you do to reduce waste?",
          sample: "One thing I do to reduce waste is avoid buying drinks in plastic bottles. I always carry a reusable water bottle, and there are refill stations on my campus, so it's very easy. I also take a reusable coffee cup to the café near my faculty, and they even give a small discount for it. It's a small change, but over a year it saves hundreds of bottles and cups.",
        },
        {
          text: "Would you be willing to pay more for environmentally friendly products?",
          sample: "I would be willing to pay a little more for environmentally friendly products, especially for things I use every day, like cleaning products or clothing. However, as a student, my budget is limited, so I can't always afford the most expensive options. I think governments should help by making green products cheaper, for example through tax reductions, so that more people can choose them.",
        },
        {
          text: "Do you think people should fly less to protect the environment?",
          sample: "I think people should try to fly less, especially for short trips where trains or buses are good alternatives. Flying produces a large amount of greenhouse gas emissions per passenger. However, flying is sometimes necessary, for example to visit family abroad. I think a reasonable approach would be to avoid unnecessary flights, combine trips when possible and support airlines and governments that invest in cleaner fuels.",
        },
        {
          text: "What can schools do to teach children about the environment?",
          sample: "Schools can do a lot to teach children about the environment. They can include environmental topics in science and geography lessons and organize practical activities, such as gardening, recycling projects or trips to nature reserves. Children often learn best by doing, so involving them in reducing waste at school can be very effective. Schools can also encourage children to share what they learn with their families, which can influence habits at home.",
        },
      ],
    },
  },
};
