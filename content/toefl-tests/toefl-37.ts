import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 37 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_37: ToeflTest = {
  id: "toefl-37",
  no: 37,
  title: "TOEFL iBT Practice Test 37",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Zippers",
          text: "Zippers are found on jackets, bags and many other everyday items. Early versions were invented in the late nineteenth century, but they did not wo{{rk}} very well and often came apart. In the early twentieth century, an engineer impro{{ved}} the design by using two rows of small metal te{{eth}} that lock together when a slider moves over th{{em}}. At first, zippers were used mainly on boots and tobacco pou{{ches}}. Later, clothing compa{{nies}} began to use them on trousers and jack{{ets}}. Today, zippers are made of metal or plas{{tic}}, and factories produce mil{{lions}} of them every d{{ay}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Sharing a taxi",
          text: [
            "Hi Melis! Are you also flying home on Friday? My flight leaves at 7 a.m., so I'm planning to take a taxi to the airport at 4:30.",
            "If your flight is around the same time, we could share the taxi and split the cost. Let me know by Wednesday so I can book it!",
          ],
          questions: [
            { text: "What does the writer suggest?", options: ["sharing a taxi to the airport", "taking the train together", "changing flights", "staying an extra day"], answer: 0 },
            { text: "When does the writer want an answer?", options: ["by Monday", "by Wednesday", "on Friday morning", "at the airport"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Computer lab printing",
          text: [
            "COMPUTER LAB PRINTING POLICY",
            "Each student receives 200 free pages of black-and-white printing per semester. Additional pages cost five cents each and are charged to your student account.",
            "Color printing is available only on the printer next to the help desk and costs twenty-five cents per page. Documents not collected within 24 hours are deleted from the print queue and are not refunded.",
          ],
          questions: [
            { text: "How many free pages does each student receive?", options: ["100 per semester", "200 per semester", "200 per month", "unlimited"], answer: 1 },
            { text: "Where is color printing available?", options: ["on every printer", "only on the printer next to the help desk", "only in the library", "nowhere on campus"], answer: 1 },
            { text: "What happens to documents not collected within 24 hours?", options: ["They are mailed to the student.", "They are deleted and not refunded.", "They are kept at the help desk.", "They are printed again for free."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How lichens survive",
          paragraphs: [
            "Lichens are small, often colorful growths found on rocks, tree bark, walls and even bare soil. Although they may look like plants, lichens are actually partnerships between two very different organisms: a fungus and a partner that can produce food through photosynthesis, usually a green alga or a type of bacterium. This kind of close, long-term relationship between different species is called symbiosis.",
            "Each partner provides something the other needs. The fungus forms the main body of the lichen, protecting the partner from drying out and from strong sunlight, and absorbing water and minerals from rain, mist and dust. In return, the alga or bacterium uses sunlight to produce sugars, which feed the fungus. Neither partner could survive on its own in many of the harsh environments where lichens are found.",
            "Thanks to this partnership, lichens can live in places where few other organisms survive, including deserts, high mountains and the Arctic. Many lichens can dry out completely and remain inactive for long periods, then resume growth within minutes when water becomes available. Because lichens absorb substances directly from the air, many species are very sensitive to pollution. Scientists therefore use them as indicators of air quality: where certain lichens disappear, the air is likely to be polluted.",
          ],
          questions: [
            { text: "According to paragraph 1, what is a lichen?", options: ["a type of moss", "a partnership between a fungus and an organism that photosynthesizes", "a small flowering plant", "a kind of insect"], answer: 1 },
            { text: "According to paragraph 2, what does the fungus provide?", options: ["sugars made from sunlight", "protection and water and minerals", "seeds", "oxygen only"], answer: 1 },
            { text: "The word \"harsh\" in paragraph 2 is closest in meaning to", options: ["difficult and severe", "pleasant", "crowded", "wet"], answer: 0 },
            { text: "According to paragraph 3, what can many lichens do when they dry out?", options: ["They die immediately.", "They remain inactive and resume growth when water returns.", "They move to wetter places.", "They turn into plants."], answer: 1 },
            { text: "Why do scientists use lichens as indicators of air quality?", options: ["They grow faster in polluted air.", "Many species are sensitive to pollution.", "They produce clean air.", "They change color at night."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A rainy Saturday",
          text: "Last Saturday, it rained all d{{ay}}, so my family stayed at ho{{me}}. In the morning, my brother and I played board ga{{mes}}. Then my father taught us how to make piz{{za}}. We put tomatoes, cheese and mushrooms on t{{op}}. It tasted much better than pizza from a resta{{urant}}! In the afternoon, we watched an old mo{{vie}} together on the so{{fa}}. My mother made hot chocolate for every{{one}}. I usually prefer sunny days, but that rainy Saturday was really f{{un}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Used books sale",
          text: [
            "BIG USED BOOK SALE!",
            "Thousands of used books for children and adults at the Central Library hall, Friday to Sunday, 9 a.m. to 6 p.m.",
            "Paperbacks are $1 and hardcovers are $2. On Sunday afternoon, fill a bag with as many books as you like for just $5! All money goes to the library.",
          ],
          questions: [
            { text: "Where is the sale?", options: ["at a bookstore", "at the Central Library hall", "at a school", "in a park"], answer: 1 },
            { text: "How much does a hardcover cost?", options: ["$1", "$2", "$5", "$10"], answer: 1 },
            { text: "What special offer is there on Sunday afternoon?", options: ["free coffee", "a bag of books for $5", "half-price hardcovers", "a free bookmark"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why soap bubbles are round",
          paragraphs: [
            "Children everywhere enjoy blowing soap bubbles. Bubbles can be blown through wands of many shapes, but they almost always become round.",
            "A bubble is a thin layer of soapy water with air inside. The surface of the water pulls inward, like a stretched sheet of rubber. This pulling force is called surface tension. A sphere is the shape with the smallest surface for the amount of air inside, so the bubble pulls itself into a ball.",
            "Bubbles often show bright, changing colors. These colors appear because light reflects from both sides of the thin soap layer. Bubbles pop when the layer becomes too thin, often because the water dries up.",
          ],
          questions: [
            { text: "What shape do bubbles almost always become?", options: ["square", "round", "flat", "the same shape as the wand"], answer: 1 },
            { text: "What is a bubble made of?", options: ["a thin layer of soapy water with air inside", "solid soap", "only air", "plastic"], answer: 0 },
            { text: "The word \"tension\" in paragraph 2 is closest in meaning to", options: ["pulling force", "color", "weight", "heat"], answer: 0 },
            { text: "Why do bubbles show bright colors?", options: ["The soap has color added.", "Light reflects from both sides of the thin layer.", "The air inside is colored.", "The sun paints them."], answer: 1 },
            { text: "Why do bubbles often pop?", options: ["The layer becomes too thin as water dries up.", "They become too heavy.", "They touch the air.", "They grow too round."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The peak-end rule",
          text: "How do people remember an experience such as a holiday, a concert or even a visit to the den{{tist}}? Research suggests that memories are not an accurate ave{{rage}} of every moment. Instead, people tend to judge an experience mainly by two mom{{ents}}: its most intense point and its en{{ding}}. This pattern is known as the peak-end ru{{le}}. In one study, participants who held a hand in cold wa{{ter}} for a lon{{ger}} period, with slightly warmer water at the end, rated the experience as less unplea{{sant}} than a shorter period without the warmer end{{ing}}. Businesses and doctors can use this finding to improve how customers and pati{{ents}} remember their visits.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changing your major",
          text: [
            "To: Undergraduate students considering a change of major",
            "From: Office of the Registrar",
            "Subject: Procedure for changing your major",
            "Students who wish to change their major must first meet with an advisor in the new department to discuss requirements and to confirm that they can still graduate within a reasonable time. After the meeting, the advisor will sign a change-of-major form, which must then be submitted to the Registrar's Office.",
            "Requests submitted after the tenth week of the semester will take effect the following semester. Please be aware that some programs, including Nursing and Architecture, have limited places and require a separate application with minimum grade requirements; meeting these requirements does not guarantee admission.",
          ],
          questions: [
            { text: "What must students do first to change their major?", options: ["submit a form to the Registrar", "meet with an advisor in the new department", "pay a fee", "write an essay"], answer: 1 },
            { text: "What happens to requests submitted after the tenth week?", options: ["They are rejected.", "They take effect the following semester.", "They require a fee.", "They are processed immediately."], answer: 1 },
            { text: "What is true about the Nursing and Architecture programs?", options: ["They accept all students.", "They require a separate application and admission is not guaranteed.", "They have no grade requirements.", "They can only be joined in the first year."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Terrace farming in mountain regions",
          paragraphs: [
            "In many mountainous parts of the world, from the Andes to Southeast Asia and the Mediterranean, hillsides are covered with step-like fields called terraces. Each terrace is a flat strip of land supported by a wall of stone or earth, and the terraces rise one above the other up the slope. Some terrace systems have been farmed continuously for more than a thousand years.",
            "Terraces solve several problems that make steep land difficult to farm. On an unaltered slope, heavy rain quickly runs downhill, carrying away fertile soil and leaving crops with too little water. Terraces slow this flow, allowing water to soak into the ground and greatly reducing erosion. In rice-growing regions, terraces can be flooded in a controlled way, with water flowing gradually from higher fields to lower ones through carefully designed channels. Terraces can also create small differences in temperature and moisture, allowing farmers to grow different crops at different heights.",
            "Building and maintaining terraces, however, requires enormous amounts of labor, and walls must be repaired after storms and landslides. In recent decades, many terraces have been abandoned as young people have moved to cities and farming on flat land has become more profitable. When terraces are neglected, their walls can collapse, sometimes increasing erosion beyond what would occur on the original slope. Some governments and international organizations now support efforts to preserve terraces, both for their agricultural value and as part of a region's cultural heritage.",
          ],
          questions: [
            { text: "According to paragraph 1, what is a terrace?", options: ["a flat strip of land supported by a wall on a slope", "a type of mountain crop", "a stone building for storing grain", "a channel for carrying water"], answer: 0 },
            { text: "According to paragraph 2, how do terraces reduce erosion?", options: ["by covering the soil with stones", "by slowing the flow of water downhill", "by preventing all rainfall", "by removing the soil"], answer: 1 },
            { text: "The word \"neglected\" in paragraph 3 is closest in meaning to", options: ["not cared for", "rebuilt", "flooded", "sold"], answer: 0 },
            { text: "Why have many terraces been abandoned?", options: ["The soil became too fertile.", "Young people moved to cities and flat-land farming became more profitable.", "Governments banned them.", "The climate became too cold."], answer: 1 },
            { text: "What can happen when terraces are neglected, according to paragraph 3?", options: ["They become more productive.", "Their walls may collapse, increasing erosion.", "They turn into forests immediately.", "They become tourist attractions."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Cansu", prompt: "Why didn't you answer my call?", chunks: ["my phone", "was", "on silent", "during", "the lecture"], end: "." },
      { promptBy: "Mark", prompt: "Where did you get that bag?", chunks: ["my sister", "bought it", "for me", "in", "Istanbul"], end: "." },
      { promptBy: "Hülya", prompt: "I'm too tired to cook tonight.", chunks: ["why don't", "we", "order", "some food", "from the new place"], end: "?" },
      { promptBy: "Peter", prompt: "Have you finished the essay?", chunks: ["I", "still", "need to", "write", "the conclusion"], end: "." },
      { promptBy: "Esra", prompt: "What time does the store close?", chunks: ["it", "usually", "closes", "at nine", "on weekdays"], end: "." },
      { promptBy: "Daniel", prompt: "Why is the train so crowded?", chunks: ["there", "is", "a big football", "match", "tonight"], end: "." },
      { promptBy: "Nur", prompt: "How was the hotel?", chunks: ["the room", "was", "clean", "but", "very small"], end: "." },
      { promptBy: "Tom", prompt: "What are you doing this weekend?", chunks: ["I'm", "helping", "my parents", "paint", "their kitchen"], end: "." },
      { promptBy: "Bahar", prompt: "This math problem is really difficult.", chunks: ["would you", "like me", "to explain", "it", "to you"], end: "?" },
      { promptBy: "Ian", prompt: "Why did you choose this university?", chunks: ["it", "has", "an excellent", "engineering", "program"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your university sports center plans to close its swimming pool for six months for renovation. Many students, including you, use the pool regularly. You want to write to the sports center manager.",
      to: "the sports center manager, Mr. Lewis",
      subject: "Swimming pool closure",
      tasks: ["Explain how you use the swimming pool.", "Describe how the closure will affect students.", "Suggest a way to reduce the impact of the closure."],
      sample: "Dear Mr. Lewis,\n\nI am a second-year student, and I am writing about the planned six-month closure of the university swimming pool. I swim there four mornings a week before my classes, and I am also a member of the student swimming club, which trains in the pool every Tuesday and Thursday evening.\n\nThe closure will have a serious effect on many students. For those of us on the swimming team, six months without training means we may not be able to compete in the national university championships in the spring. Many other students use the pool to stay healthy and to relax during stressful exam periods, and there are no affordable public pools near campus.\n\nI understand that the renovation is necessary, but I would like to suggest a solution. Could the university arrange for students to use the city pool at a discounted price during the closure? Alternatively, the work could be split into two shorter phases so that part of the pool remains open.\n\nThank you for considering this request.\n\nKind regards,\nEmre Kılıç",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Psychology",
      professor: {
        name: "Dr. Price",
        text: "Many people today use apps and devices to track their daily steps, sleep, heart rate and calories. Supporters say this information helps people build healthier habits. Critics argue that constant tracking can create stress and make people focus on numbers rather than on how they actually feel. Do you think personal health tracking does more good than harm? Why?",
      },
      students: [
        { name: "Nora", text: "I think it does more good. Since I started tracking my steps, I walk much more. Seeing the numbers every day motivates me to keep going." },
        { name: "Berk", text: "I'm not so sure. My friend became obsessed with her sleep score and actually started sleeping worse because she was worried about it." },
      ],
      sample: "I believe personal health tracking does more good than harm for most people, as long as it is used as a guide rather than a goal in itself. Nora's experience is common: simple feedback, such as a daily step count, makes people aware of their habits and encourages small improvements that add up over time. Tracking can also reveal problems that people might otherwise ignore, such as an unusually high resting heart rate. That said, Berk raises a real concern. When people treat every number as a test they must pass, tracking can increase anxiety and become counterproductive. To avoid this, people should focus on long-term trends instead of daily scores, and take regular breaks from their devices. Used sensibly, tracking is a useful tool for building healthier routines.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are starting a part-time job at a university bookstore. The store manager is giving you instructions.",
      sentences: [
        "Thank you for joining our team.",
        "Your shift starts at nine o'clock.",
        "Textbooks are on the second floor.",
        "Students can return books within two weeks.",
        "Please check that every returned book is in good condition.",
        "During the first week of the semester, the store is very busy, so we will open an extra cash register.",
        "If a customer asks for a book that is out of stock, offer to order it for them and write their contact details in the order book.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of learning new skills. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is a skill you have learned recently, and how did you learn it?",
          sample: "Recently, I learned how to edit videos. I wanted to make short videos about my trips, so I downloaded a free editing program and watched online tutorials. At first, it was frustrating because there were so many buttons and options, but I practiced a little every evening. After about a month, I was able to make a five-minute video with music and titles, and my friends were really impressed.",
        },
        {
          text: "Do you prefer learning new skills on your own or with a teacher?",
          sample: "It depends on the skill, but generally I prefer learning with a teacher at the beginning. A teacher can correct my mistakes before they become habits and can explain things I might misunderstand on my own. For example, when I started playing the guitar, my teacher showed me how to hold my hand properly. Once I have the basics, though, I enjoy practicing on my own and exploring at my own pace.",
        },
        {
          text: "Some people say adults find it harder than children to learn new skills. Do you agree?",
          sample: "I partly agree. Children often learn things like languages or sports more naturally, and they are less afraid of making mistakes. Adults, on the other hand, have less free time and often feel embarrassed when they are beginners. However, adults also have advantages. They can set clear goals, choose effective learning strategies and understand why they are learning something. So I think adults can learn very successfully if they are patient and motivated.",
        },
        {
          text: "Do you think online courses will replace traditional classes in the future?",
          sample: "I don't think online courses will completely replace traditional classes, but they will become a much bigger part of education. Online courses are flexible and often cheaper, which is great for people who work or live far from a university. However, many students learn better when they can interact with teachers and classmates face to face, ask questions immediately and work on group projects. I think the future will be a mix of both, with online materials supporting classroom learning.",
        },
      ],
    },
  },
};
