import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 29 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_29: ToeflTest = {
  id: "toefl-29",
  no: 29,
  title: "TOEFL iBT Practice Test 29",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Traffic lights",
          text: "As cities grew busier in the nineteenth century, crossing the street became danger{{ous}}. The first traffic signal was installed in London in 1868. It was operated by a police offi{{cer}} and used gas lamps at night. Unfortunately, the gas exploded a few weeks la{{ter}}, injuring the officer. Electric traffic lig{{hts}} appeared in the United States in the early twentieth cent{{ury}}. At first, they had only red and gre{{en}} lights. The yellow light was added later to warn dri{{vers}} that the signal was about to cha{{nge}}. Today, many traffic lights are contr{{olled}} by compu{{ters}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Library study room",
          text: [
            "Good news! I managed to book study room 3 in the library for Thursday from 2 to 5.",
            "It has a big screen, so we can practice our presentation properly. Bring your laptop and the charger. The room is on the second floor, next to the elevators.",
          ],
          questions: [
            { text: "Why did the writer choose study room 3?", options: ["It is the quietest room.", "It has a big screen for practicing the presentation.", "It is the biggest room.", "It has computers."], answer: 1 },
            { text: "Where is the room?", options: ["on the ground floor", "on the second floor, next to the elevators", "in the basement", "next to the café"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Course textbook rental",
          text: [
            "TEXTBOOK RENTAL PROGRAM",
            "Students can now rent many required textbooks from the campus bookstore for about half the price of buying them new. Rented books must be returned by the last day of the exam period.",
            "Highlighting and notes in pencil are allowed, but books with water damage or missing pages will be charged at the full purchase price. Students who wish to keep a rented book may buy it at the end of the semester by paying the difference.",
          ],
          questions: [
            { text: "How much does renting a book cost?", options: ["about half the price of a new book", "the same as buying it", "nothing", "a quarter of the price"], answer: 0 },
            { text: "What will result in a charge at the full purchase price?", options: ["notes in pencil", "highlighting", "water damage or missing pages", "returning the book early"], answer: 2 },
            { text: "What can students do if they want to keep a rented book?", options: ["They cannot keep it.", "Pay the difference at the end of the semester.", "Rent it for another year for free.", "Exchange it for another book."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why some trees live for thousands of years",
          paragraphs: [
            "Some of the oldest living organisms on Earth are trees. Bristlecone pines in the mountains of California and Nevada can live for more than four thousand years, and one individual is estimated to be nearly five thousand years old. Surprisingly, these ancient trees grow in some of the harshest conditions imaginable: on dry, rocky slopes at high altitude, exposed to strong winds and freezing temperatures.",
            "Their harsh environment may actually help them live longer. Because growth is extremely slow, their wood is very dense and contains resin that protects it from insects, fungi and rot. The sparse vegetation around them also reduces the risk of fire spreading. In addition, bristlecone pines can survive even when much of the tree has died. If part of the trunk is damaged, a narrow strip of living bark may continue to supply water and nutrients to a few living branches, allowing the tree to survive for centuries more.",
            "Scientists value these trees not only for their age but also for the information stored in their growth rings. Each year, a tree adds a new ring, whose width reflects the conditions of that year: wide rings indicate favorable years, narrow rings difficult ones. By matching patterns of rings in living trees with those in dead wood found nearby, researchers have built a continuous record of climate extending back about nine thousand years. This record has also been used to check the accuracy of radiocarbon dating.",
          ],
          questions: [
            { text: "According to paragraph 1, where do bristlecone pines grow?", options: ["in warm, wet valleys", "on dry, rocky slopes at high altitude", "near the coast", "in tropical rainforests"], answer: 1 },
            { text: "The word \"sparse\" in paragraph 2 is closest in meaning to", options: ["thin", "dense", "tall", "colorful"], answer: 0 },
            { text: "According to paragraph 2, how does slow growth help the trees?", options: ["It makes their wood dense and resistant to decay.", "It allows them to grow taller.", "It helps them produce more seeds.", "It attracts helpful insects."], answer: 0 },
            { text: "What does the width of a growth ring indicate?", options: ["the age of the tree", "the conditions of that year", "the height of the tree", "the number of branches"], answer: 1 },
            { text: "According to paragraph 3, what has the tree-ring record been used for?", options: ["to plant new forests", "to check the accuracy of radiocarbon dating", "to measure the size of mountains", "to predict earthquakes"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A new school",
          text: "This year, I started at a new school. On the first day, I did not know any of the stud{{ents}}. I sat alone at lun{{ch}} and felt a bit s{{ad}}. The next day, a girl named Deniz sat next to me and asked my na{{me}}. We talked about our favorite boo{{ks}} and music. Now we are best frie{{nds}}. My teachers are kind, and I enjoy my cla{{sses}}. I think changing sch{{ools}} was a go{{od}} deci{{sion}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Free running club",
          text: [
            "RUN WITH US!",
            "Our free running club meets every Tuesday and Thursday at 7 a.m. outside the main gate. We run about five kilometers at an easy pace.",
            "All levels are welcome. Wear running shoes and bring water. After the Thursday run, we have breakfast together at the campus café.",
          ],
          questions: [
            { text: "How often does the club meet?", options: ["once a week", "twice a week", "every day", "once a month"], answer: 1 },
            { text: "How far do they usually run?", options: ["about two kilometers", "about five kilometers", "about ten kilometers", "a marathon"], answer: 1 },
            { text: "What happens after the Thursday run?", options: ["a race", "breakfast together at the campus café", "a yoga class", "a meeting with a coach"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why objects have colors",
          paragraphs: [
            "White light, such as sunlight, is actually a mixture of many colors. We can see these colors when light passes through a glass prism.",
            "When light enters the prism, it bends. Each color bends by a slightly different amount, so the colors spread out. Red bends the least and violet bends the most.",
            "Objects look colored because of the light they reflect. A red apple, for example, reflects mostly red light and absorbs the other colors. A white object reflects all colors, and a black object absorbs almost all of them.",
          ],
          questions: [
            { text: "What is white light?", options: ["one single color", "a mixture of many colors", "light without any color", "only red and blue light"], answer: 1 },
            { text: "What happens when light enters a prism?", options: ["It stops.", "It bends.", "It becomes darker.", "It turns white."], answer: 1 },
            { text: "Which color bends the most?", options: ["red", "green", "yellow", "violet"], answer: 3 },
            { text: "The word \"absorbs\" in paragraph 3 is closest in meaning to", options: ["takes in", "sends back", "creates", "changes"], answer: 0 },
            { text: "Why does a black object look black?", options: ["It reflects all colors.", "It absorbs almost all colors.", "It reflects only red light.", "It produces its own light."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The framing effect",
          text: "The way information is presented can strongly influence people's deci{{sions}}, even when the underlying facts are identical. In a classic study, participants were asked to choose between two treatments for a disea{{se}}. When the outcomes were described in terms of lives sav{{ed}}, most chose the safer option; when the same outcomes were described in terms of lives lo{{st}}, most chose the risk{{ier}} one. This framing effect shows that people do not always eval{{uate}} options logically. It has important implic{{ations}} for medicine, public pol{{icy}} and marketing, where the wor{{ding}} of a message can shape cho{{ices}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Graduate teaching workshop",
          text: [
            "To: All new graduate teaching assistants",
            "From: Center for Teaching Excellence",
            "Subject: Required teaching orientation",
            "All graduate students who will work as teaching assistants for the first time this fall must attend a two-day teaching orientation on August 22 and 23. The program covers leading discussions, grading fairly, supporting students with disabilities and university policies on academic honesty.",
            "Teaching assistants who cannot attend because of travel or visa delays may complete an online version of the orientation, but they must finish it before their first class. Participants will receive a $150 payment for attending, and lunch will be provided on both days. Please register through the center's website by August 10.",
          ],
          questions: [
            { text: "Who must attend the orientation?", options: ["all graduate students", "new graduate teaching assistants", "all faculty members", "undergraduate tutors"], answer: 1 },
            { text: "What option is available to those delayed by travel or visa problems?", options: ["skip the orientation", "complete an online version before their first class", "attend next year", "send a colleague instead"], answer: 1 },
            { text: "What will participants receive for attending?", options: ["course credit", "a $150 payment and lunch", "a certificate only", "a free textbook"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why the Industrial Revolution began in Britain",
          paragraphs: [
            "Between roughly 1760 and 1840, Britain experienced a dramatic transformation in the way goods were produced. Machines driven by water and later by steam replaced hand labor in industries such as cotton textiles, while new methods greatly increased the production of iron. This Industrial Revolution eventually spread around the world, but historians have long debated why it began in Britain rather than elsewhere, for example in China or the Netherlands, which were also wealthy and commercially advanced.",
            "One influential explanation emphasizes wages and energy prices. According to the economic historian Robert Allen, wages in Britain were unusually high compared with those in most other countries, while coal was abundant and cheap. This combination made it profitable for British businesses to invest in machines that replaced expensive workers with cheap energy. In countries where labor was cheap and fuel was expensive, the same machines would not have paid for themselves.",
            "Other historians stress different factors. Some point to Britain's political stability and the protection of property rights, which encouraged investment. Others emphasize culture, arguing that a widespread interest in practical science and experimentation produced a large number of inventors and skilled mechanics. Still others highlight the role of overseas trade and colonies, which provided raw materials such as cotton and markets for manufactured goods. Most scholars now agree that no single cause is sufficient, and that the Industrial Revolution resulted from a combination of economic, political and cultural conditions.",
          ],
          questions: [
            { text: "According to paragraph 1, what question have historians debated?", options: ["when steam engines were invented", "why the Industrial Revolution began in Britain", "how cotton was grown", "why China became wealthy"], answer: 1 },
            { text: "The word \"abundant\" in paragraph 2 is closest in meaning to", options: ["plentiful", "expensive", "rare", "dirty"], answer: 0 },
            { text: "According to Robert Allen, why did British businesses invest in machines?", options: ["Workers refused to work.", "Wages were high and coal was cheap.", "The government required it.", "Machines were cheaper than land."], answer: 1 },
            { text: "Which factor is NOT mentioned in paragraph 3?", options: ["political stability", "interest in practical science", "overseas trade and colonies", "a warm climate"], answer: 3 },
            { text: "What do most scholars now agree?", options: ["Wages were the only cause.", "No single cause is sufficient.", "The revolution began in China.", "Culture had no influence."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Özlem", prompt: "Why did you go to bed so early?", chunks: ["I", "have", "to catch", "a flight", "at six"], end: "." },
      { promptBy: "Joel", prompt: "Have you tried the new bus route?", chunks: ["it", "is", "much faster", "than", "the old one"], end: "." },
      { promptBy: "Melis", prompt: "I can't remember new vocabulary.", chunks: ["why don't", "you", "use", "flashcards", "every evening"], end: "?" },
      { promptBy: "Ian", prompt: "Where is the student health center?", chunks: ["it", "is", "behind", "the main", "library"], end: "." },
      { promptBy: "Sevda", prompt: "How was the cooking class?", chunks: ["we", "learned", "to make", "fresh", "pasta"], end: "." },
      { promptBy: "Nick", prompt: "Why is the café closed early today?", chunks: ["they", "are", "short", "of", "staff"], end: "." },
      { promptBy: "Gonca", prompt: "When will you visit your family?", chunks: ["I", "will go", "home", "during", "the winter break"], end: "." },
      { promptBy: "Brandon", prompt: "What did you do for your birthday?", chunks: ["my friends", "took me", "to", "a comedy", "show"], end: "." },
      { promptBy: "Kader", prompt: "This room is too dark to study.", chunks: ["should", "we", "move", "closer to", "the window"], end: "?" },
      { promptBy: "Eric", prompt: "Why did you join the choir?", chunks: ["I", "have", "always", "loved", "singing"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You ordered some furniture online for your new apartment. The delivery was scheduled for last Saturday, but it never arrived, and no one contacted you.",
      to: "the customer service department of HomeStyle Furniture",
      subject: "Missed delivery – order number 58204",
      tasks: ["Explain what you ordered and when it was supposed to arrive.", "Describe the problem the missed delivery has caused.", "Say what you would like the company to do."],
      sample: "Dear Customer Service Team,\n\nI am writing about my order number 58204, which I placed on your website on March 2. I ordered a bed frame, a mattress and a small bookshelf, and the delivery was confirmed for Saturday, March 16, between 9 a.m. and 1 p.m.\n\nI stayed at home all day on Saturday, but the delivery never arrived, and nobody from your company contacted me to explain the delay. When I called your helpline, I waited for forty minutes and was then disconnected. This has caused me serious problems. I moved into my new apartment last week, and I have been sleeping on the floor while waiting for the bed. I also took a day off work to be at home for the delivery.\n\nI would like you to arrange a new delivery as soon as possible, preferably this Saturday morning, and to confirm the time in writing. Given the inconvenience, I would also appreciate a refund of the delivery fee.\n\nI look forward to your prompt reply.\n\nYours faithfully,\nSeda Karaca",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology of Media",
      professor: {
        name: "Dr. Turner",
        text: "Many famous athletes, musicians and influencers have millions of followers, especially among young people. Some people believe that celebrities have a responsibility to be good role models. Others argue that celebrities are ordinary people who should not be expected to set an example. Do celebrities have a responsibility to act as role models for young people? Why or why not?",
      },
      students: [
        { name: "Hannah", text: "Yes. They choose to be public figures and earn a lot from their fame. Young people copy their behavior, so they should think about the influence they have." },
        { name: "Arda", text: "Not really. Being good at football or singing doesn't make someone a moral expert. Parents and teachers should be the main role models, not strangers on social media." },
      ],
      sample: "I believe celebrities do have some responsibility to behave well, although parents and teachers remain more important role models. Hannah makes a strong point: celebrities benefit enormously from public attention, and many actively build relationships with young followers on social media. When a famous athlete speaks openly about mental health or promotes healthy habits, it can encourage young fans more effectively than any lesson at school. Similarly, when celebrities behave badly, their actions may seem acceptable to impressionable followers. However, Arda is right that we should not expect celebrities to be perfect. They are human and will make mistakes, and young people need to learn to think critically about the people they admire. So celebrities should be aware of their influence and act responsibly, but families and schools must still provide the main guidance.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are working at the entrance of a botanical garden. The garden director is telling you what to say to visitors.",
      sentences: [
        "Welcome to the botanical garden.",
        "Please stay on the paths at all times.",
        "The tropical greenhouse is open until four.",
        "Picking flowers or leaves is not allowed.",
        "Guided walks start at the main gate every hour.",
        "The café near the lake serves lunch from twelve until two thirty every day.",
        "If you would like to learn more about the plants, you can download our free audio guide using the code on your ticket.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about sports and physical activity. The researcher will ask you some questions.",
      questions: [
        {
          text: "What sports or physical activities do you enjoy? Why?",
          sample: "I really enjoy playing basketball and going hiking. Basketball is great because it's fast and social; I play with friends twice a week, and it's a fun way to stay fit while spending time together. Hiking is different, because it's more relaxing. I like getting out of the city, breathing fresh air and enjoying nature. Both activities help me reduce stress after studying, and I always sleep better on days when I've been active.",
        },
        {
          text: "Do you prefer watching sports or playing them? Why?",
          sample: "I definitely prefer playing sports. Watching a big football match with friends can be exciting, but I find it more satisfying to actually take part. When I play, I'm completely focused and forget about my worries, and I also get the health benefits. Watching sports on television for hours can feel a bit passive. That said, I do enjoy watching major events like the Olympics, because the athletes' stories are inspiring.",
        },
        {
          text: "Some people believe that schools should spend more time on physical education. What do you think?",
          sample: "I agree that schools should spend more time on physical education. Many children spend most of their day sitting, either in class or in front of screens, and lack of exercise is linked to health problems. Regular physical activity also improves concentration and mood, so it can actually help students do better in other subjects. However, PE classes should offer a variety of activities, not only competitive sports, so that every student can find something they enjoy.",
        },
        {
          text: "Why do you think some people don't exercise regularly?",
          sample: "I think the main reason is lack of time. Many people work long hours or have family responsibilities, and exercise is the first thing they give up. Cost can be another barrier, since gym memberships and sports clubs can be expensive. Some people also lack confidence, especially if they had bad experiences with sports at school. Making exercise easier, for example by creating safe walking and cycling routes and free outdoor equipment in parks, could help many people become more active.",
        },
      ],
    },
  },
};
