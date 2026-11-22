import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 67 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_67: ToeflTest = {
  id: "toefl-67",
  no: 67,
  title: "TOEFL iBT Practice Test 67",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Sewing needles",
          text: "The sewing needle is one of the oldest tools invented by humans. Archaeologists have found needles made of bone and ivory that are more than forty thousand years o{{ld}}. With these tools, early people could sew animal skins together to make warm clo{{thes}}, which helped them survive in cold clim{{ates}}. Over time, needles were made from bronze, iron and finally st{{eel}}. For centuries, each needle was made by hand, and making the tiny hole, called the e{{ye}}, was especially diffi{{cult}}. In the eighteenth and nineteenth centuries, machines made needles cheaper and more common. The invention of the sewing mac{{hine}} later changed the clothing indus{{try}}, but hand needles are still used for repairs and fine embroi{{dery}} all over the wor{{ld}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Swapping shifts",
          text: [
            "Hi Kerem, my sister's graduation is next Saturday, and I'm scheduled to work at the café that day from 10 to 4. Would you be able to swap shifts with me?",
            "I could take your Sunday shift instead. If that works for you, I'll tell the manager today.",
          ],
          questions: [
            { text: "Why does the writer want to swap shifts?", options: ["to attend a sister's graduation", "to go on holiday", "to study for an exam", "to see a doctor"], answer: 0 },
            { text: "What does the writer offer to do?", options: ["take Kerem's Sunday shift", "pay Kerem extra money", "work two shifts next week", "bring Kerem to the graduation"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Fire extinguisher inspection",
          text: [
            "SAFETY INSPECTION NOTICE",
            "Technicians will inspect and test all fire extinguishers and smoke detectors in the apartment building on Tuesday, May 6, between 9 a.m. and 3 p.m. They will need to enter each apartment for about ten minutes.",
            "If you will not be at home, please leave a key with the building manager by Monday evening. Residents who prefer to be present may book a specific time slot by calling the office.",
          ],
          questions: [
            { text: "What will technicians do?", options: ["inspect fire extinguishers and smoke detectors", "repair the elevators", "paint the hallways", "replace windows"], answer: 0 },
            { text: "What should residents who will not be home do?", options: ["leave a key with the building manager", "cancel the inspection", "call the fire department", "stay home anyway"], answer: 0 },
            { text: "How can residents be present during the inspection?", options: ["by booking a specific time slot", "by waiting all day", "by sending an email to the technicians", "by changing the date"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How mosquitoes find people",
          paragraphs: [
            "Mosquitoes are among the most dangerous animals in the world, not because of their bites themselves but because some species spread diseases such as malaria, dengue fever and the Zika virus. Only female mosquitoes bite, since they need proteins from blood to produce their eggs. To find a source of blood, they rely on a remarkable set of senses that allow them to locate people even in the dark.",
            "The first clue that mosquitoes use is carbon dioxide, the gas that humans and other animals breathe out. Mosquitoes can detect small increases in carbon dioxide from several meters away, and when they notice it, they begin flying toward its source. As they get closer, they respond to other signals, such as body heat, moisture and the chemicals in human skin and sweat. Each person's skin produces a unique mixture of odors, partly created by the bacteria that live on it, which may explain why some people seem to be bitten far more often than others.",
            "Understanding how mosquitoes find their targets has helped scientists develop better ways to protect people. Insect repellents work by blocking or confusing the mosquito's ability to detect human odors. Traps that release carbon dioxide and human-like scents can attract and capture large numbers of mosquitoes. Researchers are also studying the genes that control mosquitoes' sense of smell, hoping that this knowledge could lead to new methods of preventing the diseases they carry.",
          ],
          questions: [
            { text: "According to paragraph 1, why do female mosquitoes bite?", options: ["They need proteins from blood to produce eggs.", "They are defending their nests.", "They need water.", "They want to spread diseases."], answer: 0 },
            { text: "According to paragraph 2, what is the first clue mosquitoes use to find people?", options: ["carbon dioxide", "light", "sound", "color"], answer: 0 },
            { text: "The word \"unique\" in paragraph 2 is closest in meaning to", options: ["one of a kind", "strong", "common", "pleasant"], answer: 0 },
            { text: "Why might some people be bitten more often than others?", options: ["Their skin produces a different mixture of odors.", "They breathe less.", "They have less body heat.", "They wear dark clothes only."], answer: 0 },
            { text: "According to paragraph 3, how do insect repellents work?", options: ["by blocking or confusing the mosquito's ability to detect human odors", "by killing all mosquitoes nearby", "by making people invisible", "by cooling the skin"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Picking apples",
          text: "Every autumn, my family visits an apple farm outside the ci{{ty}}. The farmer gives us big bask{{ets}}, and we walk between the rows of tr{{ees}}. Some apples are red, and others are gr{{een}}. My little sister cannot reach the high bran{{ches}}, so my father lifts her up. We try to pick only the best app{{les}}. Sometimes we eat one right from the tr{{ee}}! After two hours, our baskets are fu{{ll}}. At home, my mother makes a delicious apple ca{{ke}}, and the whole house smells won{{derful}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Guided bike tour",
          text: [
            "SEE THE CITY BY BIKE!",
            "Join our three-hour guided bike tour of the old town and the waterfront. Tours leave every day at 10 a.m. from the Central Station bike shop.",
            "The tour costs $30, including a bike, a helmet and a stop for coffee. Tours are offered in English, German and Turkish. The route is flat and suitable for beginners.",
          ],
          questions: [
            { text: "How long is the tour?", options: ["three hours", "one hour", "all day", "thirty minutes"], answer: 0 },
            { text: "What is included in the price?", options: ["a bike, a helmet and a coffee stop", "lunch", "a hotel room", "a train ticket"], answer: 0 },
            { text: "Why is the tour suitable for beginners?", options: ["The route is flat.", "It is very short.", "It uses electric bikes only.", "It is indoors."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How crabs grow",
          paragraphs: [
            "Crabs have hard shells that protect their soft bodies. But a hard shell cannot grow bigger. So how do crabs grow?",
            "When a crab gets too big for its shell, it grows a new, soft shell underneath. Then the old shell cracks open, and the crab slowly climbs out. This is called molting.",
            "After molting, the crab takes in water to make its body bigger. Its new shell is soft for a few days, so the crab hides from fish and birds. Slowly, the new shell becomes hard. Young crabs molt many times a year, but adult crabs molt less often.",
          ],
          questions: [
            { text: "What protects a crab's soft body?", options: ["a hard shell", "thick fur", "feathers", "scales"], answer: 0 },
            { text: "What happens when a crab gets too big for its shell?", options: ["It grows a new shell underneath.", "It stops eating.", "It finds an empty shell.", "It dies."], answer: 0 },
            { text: "The word \"cracks\" in paragraph 2 is closest in meaning to", options: ["breaks", "grows", "shines", "melts"], answer: 0 },
            { text: "Why does a crab hide after molting?", options: ["Its new shell is still soft.", "It is very hungry.", "It wants to sleep.", "It is looking for food."], answer: 0 },
            { text: "Which crabs molt more often?", options: ["young crabs", "adult crabs", "very old crabs", "male crabs only"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Action bias",
          text: "In many situations, people feel that doing something is better than doing nothing, even when action is unlikely to help. Researchers call this tendency action bi{{as}}. A well-known example comes from studies of soccer goal{{keepers}} facing penalty kicks. Statistically, goalkeepers would stop more kicks if they stayed in the center of the go{{al}}, but they almost always dive to the left or ri{{ght}}. One explanation is that a goalkeeper who stays still and lets in a goal may feel more embar{{rassed}} than one who dives in the wr{{ong}} direction. Action bias can also affect inves{{tors}}, who may trade too often, and doctors, who may order unnec{{essary}} tests. Sometimes, patient wai{{ting}} is the wisest strat{{egy}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Requesting an official transcript",
          text: [
            "To: Current students and alumni",
            "From: Office of the Registrar",
            "Subject: New online system for transcript requests",
            "Official transcripts can now be requested through our new online system instead of by paper form. Electronic transcripts are sent directly to the recipient by secure email, usually within one working day, and cost $5 each.",
            "Printed transcripts in sealed envelopes are still available for $10 and are mailed within five working days. Please note that transcripts cannot be issued to students who have unpaid fees or library fines. Students should check that their account is clear before submitting a request, especially if they have an application deadline.",
          ],
          questions: [
            { text: "How are electronic transcripts sent?", options: ["directly to the recipient by secure email", "by regular mail", "by fax", "in person only"], answer: 0 },
            { text: "How much does a printed transcript cost?", options: ["$10", "$5", "nothing", "$20"], answer: 0 },
            { text: "Why should students check their account before requesting a transcript?", options: ["Transcripts cannot be issued if fees or fines are unpaid.", "The system often deletes requests.", "They must update their address.", "They need to pay a deposit."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why inflation happens",
          paragraphs: [
            "Inflation refers to a general rise in the prices of goods and services over time, which means that each unit of money buys less than it did before. A small amount of inflation, around two percent per year, is considered normal and even desirable by many central banks, since it encourages spending and investment. However, high inflation can cause serious problems, reducing the value of savings and making it difficult for households and businesses to plan for the future.",
            "Economists generally distinguish between two main causes of inflation. 'Demand-pull' inflation occurs when the total demand for goods and services in an economy grows faster than the economy's ability to produce them. This can happen when consumers have more money to spend, for example because of rising wages, low interest rates or government spending. 'Cost-push' inflation, by contrast, occurs when the costs of production rise, often because of increases in the price of energy or raw materials. Businesses then pass these higher costs on to consumers in the form of higher prices.",
            "Expectations also play an important role. If workers and businesses expect prices to keep rising, workers may demand higher wages and businesses may raise prices in advance, which can cause inflation to continue even after the original cause has disappeared. To control inflation, central banks often raise interest rates, which makes borrowing more expensive and reduces spending. This can slow the economy and increase unemployment, so central banks must try to balance the goal of stable prices against the risk of causing a recession.",
          ],
          questions: [
            { text: "According to paragraph 1, why do many central banks consider a small amount of inflation desirable?", options: ["It encourages spending and investment.", "It increases the value of savings.", "It reduces taxes.", "It makes goods cheaper."], answer: 0 },
            { text: "According to paragraph 2, what is 'demand-pull' inflation?", options: ["when demand grows faster than the economy's ability to produce", "when production costs rise", "when prices fall", "when wages decrease"], answer: 0 },
            { text: "The word \"pass ... on\" in paragraph 2 is closest in meaning to", options: ["transfer", "hide", "reduce", "refuse"], answer: 0 },
            { text: "According to paragraph 3, how can expectations cause inflation to continue?", options: ["Workers demand higher wages and businesses raise prices in advance.", "People stop spending money.", "Central banks lower interest rates.", "Energy prices fall."], answer: 0 },
            { text: "What risk do central banks face when raising interest rates?", options: ["slowing the economy and increasing unemployment", "making borrowing cheaper", "increasing inflation", "raising the value of money too much"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Tamer", prompt: "Why are you taking the stairs?", chunks: ["I", "am trying", "to get", "more", "exercise"], end: "." },
      { promptBy: "Lucy", prompt: "Did you enjoy the concert?", chunks: ["the orchestra", "played", "my", "favorite", "symphony"], end: "." },
      { promptBy: "Pelin", prompt: "My room is too cold at night.", chunks: ["have you", "thought about", "buying", "a small", "heater"], end: "?" },
      { promptBy: "Kevin", prompt: "How did you learn about the job?", chunks: ["my professor", "recommended me", "to", "the company", "manager"], end: "." },
      { promptBy: "Hülya", prompt: "When is your next exam?", chunks: ["my next", "exam", "is", "on", "Thursday afternoon"], end: "." },
      { promptBy: "Rob", prompt: "Why is the traffic so bad today?", chunks: ["there", "is", "an accident", "on", "the bridge"], end: "." },
      { promptBy: "Aslı", prompt: "What did you buy at the bookstore?", chunks: ["I", "bought", "a novel", "and", "a cookbook"], end: "." },
      { promptBy: "Max", prompt: "Where are you going this summer?", chunks: ["we", "are going", "camping", "in", "the mountains"], end: "." },
      { promptBy: "Zehra", prompt: "I forgot my lunch at home.", chunks: ["would you", "like", "to share", "my", "sandwich"], end: "?" },
      { promptBy: "Phil", prompt: "Why did you choose to study architecture?", chunks: ["I", "love", "designing", "beautiful", "buildings"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently moved to a new city and joined a local library. You would like to volunteer there in your free time. You want to write to the library's volunteer coordinator.",
      to: "the volunteer coordinator, Mr. Brown",
      subject: "Volunteering at the library",
      tasks: ["Introduce yourself.", "Explain why you want to volunteer and what skills you have.", "Ask about the available opportunities and your schedule."],
      sample: "Dear Mr. Brown,\n\nMy name is Aslı Tan, and I recently moved to the city to begin a master's degree in education. Since joining the Central Library last month, I have been visiting almost every week, and I am very impressed by the friendly atmosphere and the wide range of activities for children and adults.\n\nI would love to volunteer at the library in my free time. Volunteering would help me give something back to my new community and meet local people. I have experience working with children, as I volunteered as a reading assistant at a primary school for two years in my hometown. I am also comfortable using computers and could help visitors who need assistance with online services.\n\nCould you please tell me what volunteer opportunities are currently available? I am free on Tuesday and Thursday afternoons and on Saturday mornings. I would be happy to attend any training that is required.\n\nThank you for your time. I look forward to hearing from you.\n\nBest regards,\nAslı Tan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Kim",
        text: "In many countries, people are living longer, and the number of elderly people is growing. Some believe that families should be primarily responsible for caring for elderly relatives. Others argue that governments should provide more professional care services so that families are not overwhelmed. Who should be mainly responsible for caring for the elderly: families or governments? Explain your view.",
      },
      students: [
        { name: "Isabel", text: "Families. Elderly people are happier when they're cared for by people who love them, and it's a way for children to repay their parents." },
        { name: "Kaan", text: "Governments. Many families can't care for elderly relatives because both partners work full-time. Professional care is often safer for people with serious health problems." },
      ],
      sample: "I believe caring for the elderly should be a shared responsibility, with families providing emotional support and governments ensuring access to professional services. Isabel is right that elderly people often feel happiest and most secure when they are surrounded by family. Regular visits, shared meals and conversations give them a sense of belonging that professional care alone cannot provide. However, Kaan raises an important point. In many families today, both adults work full-time, and caring for a relative with dementia or serious health problems requires skills and time that families may not have. Governments should therefore support families by funding home-care nurses, day centers and high-quality care homes, and by offering flexible working arrangements for people who care for elderly relatives.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new employee at a bookstore café. The owner is telling you what to say to customers.",
      sentences: [
        "Welcome, please feel free to look around.",
        "New books are on the table by the door.",
        "You can read books in the café before buying.",
        "Our coffee is made with local beans.",
        "Please be careful with hot drinks near the books.",
        "If you can't find a particular book, we can order it for you and it usually arrives in two days.",
        "Every Thursday evening, we host a book club where readers meet to discuss a novel, and everyone is welcome to join for free.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about community and neighbors. The researcher will ask you some questions.",
      questions: [
        {
          text: "How well do you know your neighbors?",
          sample: "I know some of my neighbors quite well. There's an elderly couple on my floor who often invite me for tea, and I help them carry their shopping sometimes. I also say hello to several other neighbors in the elevator, but I don't really know their names. Since many people in my building are students who move every year, it's harder to build strong relationships with everyone.",
        },
        {
          text: "Do you think it's important to have a good relationship with your neighbors?",
          sample: "Yes, I think it's very important. Good neighbors can help each other in many ways, like watching each other's homes during holidays, sharing tools or helping in an emergency. Having friendly neighbors also makes a place feel safer and more welcoming. Even small gestures, like saying hello or offering help, can make daily life more pleasant for everyone.",
        },
        {
          text: "Are communities weaker today than they were in the past?",
          sample: "In some ways, I think communities are weaker today. People move more often for work or study, and many spend their free time online rather than with neighbors. In the past, people often lived in the same place for their whole lives and knew everyone around them. However, new types of communities have developed, such as online groups and local social media pages, which can bring people together around shared interests.",
        },
        {
          text: "What can be done to make neighborhoods friendlier?",
          sample: "There are several things that could make neighborhoods friendlier. Local governments could create more parks and community centers where people can meet. Neighborhoods could organize events like street festivals, markets or clean-up days. Even simple ideas, like a shared garden or a book exchange box, can encourage people to talk to each other. I also think individuals can make a difference by introducing themselves to new neighbors.",
        },
      ],
    },
  },
};
