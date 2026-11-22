import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 36 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_36: ToeflTest = {
  id: "toefl-36",
  no: 36,
  title: "TOEFL iBT Practice Test 36",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Paper clips",
          text: "The paper clip is a small object that most people use without thinking. It is usually made from a single piece of steel wi{{re}} bent into a double loop. Before paper clips became com{{mon}}, people held papers together with pins or rib{{bons}}, which could damage the pa{{ges}}. In the late nineteenth century, several inven{{tors}} designed bent wire clips, and factories soon began to pro{{duce}} them in large numbers. The design that is most popular to{{day}} is strong but flexible, so it can be used ma{{ny}} times. Paper clips are so che{{ap}} that offices buy them in boxes of hun{{dreds}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Running late for practice",
          text: [
            "Coach, my bus broke down on the highway and we're waiting for a replacement. I'm really sorry, but I'll be about thirty minutes late for practice.",
            "Could you ask someone to save me a spot in the warm-up group? I'll go straight to the field when I arrive.",
          ],
          questions: [
            { text: "Why will the writer be late?", options: ["The writer's bus broke down.", "The writer overslept.", "The writer forgot about practice.", "The writer had an exam."], answer: 0 },
            { text: "What does the writer ask the coach to do?", options: ["cancel practice", "save a spot in the warm-up group", "send a car", "call the writer's parents"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Residence hall bicycles",
          text: [
            "RESIDENCE HALL BICYCLE STORAGE",
            "Bicycles may be stored only in the locked bike room on the ground floor. Bicycles left in hallways, stairwells or rooms block emergency exits and will be removed.",
            "To use the bike room, register your bicycle at the front desk and collect a free access card. Each spring, unregistered or abandoned bicycles are donated to a local charity.",
          ],
          questions: [
            { text: "Where may bicycles be stored?", options: ["in student rooms", "in the locked bike room", "in the hallways", "outside the main entrance"], answer: 1 },
            { text: "Why are bicycles not allowed in hallways?", options: ["They block emergency exits.", "They damage the floors.", "They are often stolen.", "They make noise at night."], answer: 0 },
            { text: "What happens to abandoned bicycles each spring?", options: ["They are sold at auction.", "They are donated to a local charity.", "They are returned to the shop.", "They are kept in the basement."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How the Inca built their roads",
          paragraphs: [
            "In the fifteenth and early sixteenth centuries, the Inca Empire controlled a vast territory along the western side of South America, stretching through the Andes Mountains. To govern this enormous and rugged region, the Inca built a road network that eventually extended for roughly forty thousand kilometers. The roads crossed deserts, rainforests and some of the highest mountains in the world.",
            "Inca engineers adapted their roads to the landscape. On steep slopes, they cut stone staircases into the mountainside, and in wet areas they raised roads on stone platforms and built drainage channels so that rain would not wash them away. To cross deep river valleys, communities wove suspension bridges from grass fibers. These bridges had to be rebuilt regularly, and the work was organized as a duty that local villages owed to the state.",
            "The Inca did not use wheeled vehicles or horses, so the roads were designed for people on foot and for llamas carrying goods. Along the routes stood thousands of rest stations where travelers could find food, shelter and supplies. Teams of runners carried messages in relays, each running a short distance before passing the message to the next, allowing news to travel hundreds of kilometers in a single day. Parts of this road network are still used by local people today.",
          ],
          questions: [
            { text: "According to paragraph 1, why did the Inca build the road network?", options: ["to govern a vast and rugged territory", "to attract foreign traders", "to escape from enemies", "to connect the empire to Europe"], answer: 0 },
            { text: "The word \"rugged\" in paragraph 1 is closest in meaning to", options: ["rough and uneven", "flat and empty", "warm and wet", "crowded and busy"], answer: 0 },
            { text: "According to paragraph 2, how did Inca engineers deal with wet areas?", options: ["They avoided them completely.", "They raised the roads on stone platforms and built drainage channels.", "They used wooden boats.", "They covered the roads with grass."], answer: 1 },
            { text: "What is true about the grass suspension bridges?", options: ["They lasted for centuries without repair.", "They were rebuilt regularly by local villages.", "They were built by foreign engineers.", "They were used only by the emperor."], answer: 1 },
            { text: "According to paragraph 3, how could news travel so quickly?", options: ["by horse riders", "by teams of runners working in relays", "by wheeled carts", "by smoke signals only"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A visit to the aquarium",
          text: "Last Sunday, my parents took me and my little sister to the city aquar{{ium}}. It was our first vis{{it}}, and we were very excited. In the first room, there was a huge ta{{nk}} full of colorful fish. My sister liked the small yellow ones be{{st}}. Then we walked through a glass tun{{nel}}, and sharks swam right over our hea{{ds}}! At noon, we watched the penguins eat their lu{{nch}}. In the gift shop, my father bought us a book about sea ani{{mals}}. We read it together in the car on the way ho{{me}}, and now I want to become a marine biol{{ogist}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Weekend farmers' market",
          text: [
            "FRESH FROM THE FARM!",
            "Visit the Riverside Farmers' Market every Saturday and Sunday from 8 a.m. to 1 p.m. in the town square.",
            "Buy fresh fruit, vegetables, bread and cheese directly from local farmers. Bring your own bags and receive a free apple with every purchase over $10.",
          ],
          questions: [
            { text: "When is the market open?", options: ["every weekday", "every Saturday and Sunday morning", "only on Sunday evenings", "once a month"], answer: 1 },
            { text: "Who sells the products?", options: ["supermarkets", "local farmers", "restaurants", "students"], answer: 1 },
            { text: "How can customers get a free apple?", options: ["by bringing a friend", "by spending more than $10", "by arriving early", "by paying in cash"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why flamingos are pink",
          paragraphs: [
            "Flamingos are famous for their bright pink feathers. However, flamingo chicks are born with gray or white feathers.",
            "Flamingos become pink because of the food they eat. They feed on tiny shrimp and algae that contain natural colors called pigments. When flamingos digest this food, the pigments are stored in their feathers, legs and beaks.",
            "If a flamingo does not get enough of this food, its feathers slowly become pale. For this reason, zoos give their flamingos special food with added pigments. A bright pink color can also show other flamingos that a bird is healthy.",
          ],
          questions: [
            { text: "What color are flamingo chicks?", options: ["bright pink", "gray or white", "red", "orange"], answer: 1 },
            { text: "Why do flamingos become pink?", options: ["because of the sun", "because of pigments in their food", "because of their age", "because of the water temperature"], answer: 1 },
            { text: "The word \"pale\" in paragraph 3 is closest in meaning to", options: ["light in color", "dark", "wet", "long"], answer: 0 },
            { text: "Why do zoos give flamingos special food?", options: ["to make them grow faster", "to keep their feathers pink", "to help them fly", "to make them sleep"], answer: 1 },
            { text: "What can a bright pink color show other flamingos?", options: ["that a bird is young", "that a bird is healthy", "that a bird is hungry", "that a bird is lost"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Choice overload",
          text: "It seems natural to assume that having more choices makes people happier. However, a number of studies suggest that too many op{{tions}} can have the opposite effect. In one well-known exper{{iment}}, shoppers were offered samples of either six or twenty-four kinds of ja{{m}}. More people stopped at the larger dis{{play}}, but far fewer of them actually bou{{ght}} anything. Researchers call this phe{{nomenon}} choice overload. When faced with too many alter{{natives}}, people may feel anx{{ious}} about making the wrong deci{{sion}}, or they may avoid deciding altoge{{ther}}. Later studies have found that the effect depends on the situation.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Research lab safety training",
          text: [
            "To: New members of the Chemistry Research Laboratory",
            "From: Laboratory Safety Officer",
            "Subject: Mandatory safety training before lab access",
            "Before you are given access to the laboratory, you must complete two safety requirements: an online module on chemical handling, which takes about ninety minutes, and an in-person session covering emergency equipment such as eyewash stations, fire blankets and showers. In-person sessions are held every Tuesday at 2 p.m.; please register in advance, as places are limited.",
            "Your access card will be activated only after both requirements have been recorded in the safety database, which usually takes two working days. Please note that training must be renewed every year, and members whose training has expired will have their access suspended automatically.",
          ],
          questions: [
            { text: "What must new members do before they can access the laboratory?", options: ["complete an online module and an in-person session", "pass a chemistry exam", "buy their own safety equipment", "work with a supervisor for a month"], answer: 0 },
            { text: "When will a member's access card be activated?", options: ["immediately after the online module", "after both requirements are recorded in the database", "on the first Tuesday of the month", "after a year"], answer: 1 },
            { text: "What happens if a member's training expires?", options: ["They must pay a fine.", "Their access is suspended automatically.", "They receive a warning letter only.", "Nothing happens until the next semester."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The economics of tipping",
          paragraphs: [
            "In many countries, customers are expected to leave a tip, an extra payment beyond the listed price, for services such as restaurant meals, taxi rides and haircuts. In the United States, tips can make up a large share of a server's income, and leaving no tip is widely considered rude. In other countries, such as Japan, tipping is uncommon and may even be seen as confusing or impolite.",
            "From an economic point of view, tipping is puzzling. Traditional economic models assume that people act to maximize their own benefit, yet many customers tip generously even in restaurants they will never visit again, where a poor tip would have no consequences for future service. This suggests that tipping is driven less by self-interest than by social norms, feelings of guilt or fairness, and the desire to be seen as generous.",
            "Researchers have also questioned whether tipping actually rewards good service. Several studies have found that the size of a tip is only weakly related to the quality of service, and more strongly influenced by factors such as the size of the bill, the weather and the server's friendliness or appearance. Critics argue that this makes workers' incomes unpredictable and can lead to unfair differences in pay. As a result, some restaurants have replaced tipping with higher menu prices that include a service charge, although customers' reactions to this change have been mixed.",
          ],
          questions: [
            { text: "According to paragraph 1, how is tipping viewed in Japan?", options: ["It is expected for all services.", "It is uncommon and may seem confusing or impolite.", "It is required by law.", "It is only done in taxis."], answer: 1 },
            { text: "Why does the author describe tipping as \"puzzling\" in paragraph 2?", options: ["Tips are difficult to calculate.", "People tip even when it brings them no future benefit.", "Tipping is illegal in many places.", "Servers refuse to accept tips."], answer: 1 },
            { text: "The word \"norms\" in paragraph 2 is closest in meaning to", options: ["accepted rules of behavior", "prices", "laws", "mistakes"], answer: 0 },
            { text: "According to paragraph 3, what do several studies show about tips?", options: ["They are closely tied to service quality.", "They are only weakly related to service quality.", "They are always the same percentage.", "They are larger in bad weather."], answer: 1 },
            { text: "Why have some restaurants replaced tipping with a service charge?", options: ["to make workers' incomes less unpredictable and fairer", "to lower menu prices", "because customers asked for it", "to reduce the number of staff"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Derya", prompt: "Why were you absent from the meeting?", chunks: ["I", "had", "a dentist", "appointment", "this morning"], end: "." },
      { promptBy: "Sam", prompt: "Is the new café any good?", chunks: ["their", "sandwiches", "are", "really", "delicious"], end: "." },
      { promptBy: "Gizem", prompt: "I can't find my keys anywhere.", chunks: ["did you", "check", "the pocket", "of", "your jacket"], end: "?" },
      { promptBy: "Ryan", prompt: "How long have you lived in this city?", chunks: ["I", "have", "lived here", "for", "three years"], end: "." },
      { promptBy: "Pınar", prompt: "What should I bring to the picnic?", chunks: ["you", "could", "bring", "some fruit", "and drinks"], end: "." },
      { promptBy: "Owen", prompt: "Why is the road closed?", chunks: ["they", "are", "repairing", "the bridge", "this week"], end: "." },
      { promptBy: "Seda", prompt: "Who is giving the presentation tomorrow?", chunks: ["the new", "manager", "will", "present", "the results"], end: "." },
      { promptBy: "Luke", prompt: "What did the doctor say?", chunks: ["she", "told me", "to rest", "for", "a few days"], end: "." },
      { promptBy: "Ece", prompt: "The concert tickets are almost sold out.", chunks: ["should", "we", "buy", "them", "right now"], end: "?" },
      { promptBy: "Adam", prompt: "Why are you learning Spanish?", chunks: ["I", "am planning", "to study", "in Madrid", "next year"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You ordered a laptop from an online store two weeks ago. It arrived today, but the screen is cracked and the charger is missing. You want to contact the store.",
      to: "the customer service team",
      subject: "Damaged laptop order",
      tasks: ["Explain what you ordered and when.", "Describe the problems with the delivery.", "Say what you would like the store to do."],
      sample: "Dear Customer Service Team,\n\nI am writing about a laptop I ordered from your website on March 3. The order number is 48213, and I paid for express delivery because I need the laptop for my university courses.\n\nUnfortunately, when the package arrived this morning, I found two serious problems. First, the screen has a long crack across the bottom corner, even though the box itself did not look damaged. Second, the charger, which is listed as included in the product description, was missing from the box. As a result, I cannot use the laptop at all.\n\nI would like you to send me a replacement laptop with the charger as soon as possible, and to arrange for a courier to collect the damaged one at no cost to me. If a replacement is not available within a week, I would prefer a full refund. I have attached photographs of the damage for your records.\n\nThank you for your help. I look forward to your reply.\n\nSincerely,\nKerem Doğan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education",
      professor: {
        name: "Dr. Hughes",
        text: "Many schools are debating whether students should be allowed to use calculators and other digital tools during math lessons and exams. Some educators believe these tools help students focus on solving complex problems. Others worry that students will never learn basic skills properly. Should students be allowed to use calculators in math class? Explain your view.",
      },
      students: [
        { name: "Maya", text: "Yes. In real life, everyone uses calculators. It makes more sense to teach students how to solve real problems than to spend hours on long calculations." },
        { name: "Tolga", text: "I disagree. If students rely on calculators too early, they won't understand numbers. They won't even notice when an answer is obviously wrong." },
      ],
      sample: "In my opinion, calculators should be allowed in math class, but only after students have mastered the basic skills. Tolga makes an important point: students who never learn to calculate by hand may not develop a feel for numbers, and they may accept a ridiculous answer simply because a machine produced it. That is why young students should first practice arithmetic without any devices. However, I agree with Maya that once these foundations are in place, calculators become valuable tools. In higher grades, they allow students to spend their time on understanding concepts, modeling real situations and checking different strategies, instead of on long, repetitive calculations. A balanced approach could include some exam sections without calculators to test basic skills and others with calculators to test problem solving.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new volunteer at a city museum. The volunteer coordinator is explaining your duties.",
      sentences: [
        "Welcome to the museum volunteer team.",
        "Please wear your badge at all times.",
        "Visitors may not touch the paintings.",
        "Guided tours begin every hour at the front desk.",
        "Please remind visitors that photography with flash is not allowed.",
        "If a child gets separated from their family, bring them to the information desk immediately.",
        "At the end of your shift, return your radio to the office and write any problems you noticed in the volunteer notebook.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people shop and spend money. The researcher will ask you some questions.",
      questions: [
        {
          text: "Do you prefer shopping in stores or online? Why?",
          sample: "I usually prefer shopping online for things like books and electronics, because it's faster and I can easily compare prices and read reviews from other customers. However, for clothes and shoes, I prefer going to a store, because I want to try things on and check the quality of the material. Online sizes are often different from brand to brand, so returning items can be a real hassle.",
        },
        {
          text: "How do you usually decide whether something is worth buying?",
          sample: "Before buying something expensive, I ask myself whether I really need it or just want it at that moment. If I'm not sure, I wait a few days, and often I realize I don't need it at all. I also look at reviews and think about how often I will use it. For example, I spent more money on a good pair of running shoes because I use them almost every day.",
        },
        {
          text: "Some people think that young people should learn about managing money at school. Do you agree?",
          sample: "I strongly agree. Many young people leave school without knowing how to make a budget, how interest on loans works or why saving early is important. As a result, some of them get into debt as soon as they get their first credit card. Schools could teach these practical skills through simple projects, like planning a monthly budget for a student living alone. This knowledge would be useful for everyone, whatever career they choose.",
        },
        {
          text: "Do you think advertising has too much influence on people's choices?",
          sample: "I think advertising does have a strong influence, especially on social media, where ads are personalized based on what we search for and like. Sometimes I see an ad for something I was just talking about, and it makes me want to buy it immediately. However, I believe people can reduce this influence by being more aware of how advertising works. Teaching people, especially children, to question ads is probably more realistic than banning them.",
        },
      ],
    },
  },
};
