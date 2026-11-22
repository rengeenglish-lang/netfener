import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 68 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_68: ToeflTest = {
  id: "toefl-68",
  no: 68,
  title: "TOEFL iBT Practice Test 68",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Pocket knives",
          text: "Folding knives that can be carried safely in a pocket have existed for a very long ti{{me}}. Archaeologists have found folding knives from the Roman Empire, some with handles shaped like ani{{mals}}. In the late nineteenth century, the Swiss army asked manufacturers to design a practical knife for its sol{{diers}}. The soldiers needed a tool that could open food ca{{ns}} and take apart their rif{{les}}. The resulting knife included a blade, a screw{{driver}}, a can opener and a small too{{l}} for cleaning. Later versions added scissors, files and even tiny saws. The red knife with a white cross became famous around the wor{{ld}}. However, because of security rules, pocket knives are no longer allowed in airplane cab{{ins}}, so travelers must put them in their checked lug{{gage}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Forgotten lunch box",
          text: [
            "Hi Dad, I left my lunch box on the kitchen table this morning! I have football practice after school, so I'll be really hungry.",
            "Could you bring it to the school office before 12? If you can't, I'll buy something in the cafeteria, but I'd need some money.",
          ],
          questions: [
            { text: "What did the writer forget?", options: ["a lunch box", "football shoes", "homework", "a phone charger"], answer: 0 },
            { text: "What will the writer do if Dad can't bring it?", options: ["buy something in the cafeteria", "skip football practice", "go home at lunch", "borrow food from a friend"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Lecture hall seating changes",
          text: [
            "LECTURE HALL A: NEW SEATING",
            "Lecture Hall A has been renovated with new seats and desks. Each seat now has a power outlet for charging laptops and phones, and the hall has improved lighting and sound.",
            "Because the new desks are larger, the hall now holds 220 students instead of 250. Some large courses have therefore been moved to Lecture Hall C. Please check your timetable before your first class.",
          ],
          questions: [
            { text: "What is new in Lecture Hall A?", options: ["seats with power outlets, better lighting and sound", "a new café", "a projector only", "air conditioning only"], answer: 0 },
            { text: "Why does the hall now hold fewer students?", options: ["The new desks are larger.", "Some seats are broken.", "Fire rules have changed.", "Part of the hall was closed."], answer: 0 },
            { text: "What should students do before their first class?", options: ["check their timetable", "buy a new laptop", "reserve a seat", "contact the professor"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How the Great Pyramid was built",
          paragraphs: [
            "The Great Pyramid of Giza, built for the Egyptian king Khufu around 4,500 years ago, is the largest of the Egyptian pyramids. It was originally about 146 meters tall and contains an estimated 2.3 million stone blocks, some weighing many tons. For centuries, people have wondered how a civilization without iron tools, pulleys or wheeled vehicles for heavy loads could have built such an enormous structure.",
            "Archaeologists have gathered evidence that helps answer this question. Most of the limestone blocks were cut from quarries near the building site, while finer white limestone for the outer surface and granite for the inner chambers were transported from farther away, often by boat along the Nile. In 2013, archaeologists discovered papyrus documents written by an official who described transporting stone blocks along canals. Workers probably moved the blocks on wooden sledges, and wall paintings from other sites show people pouring water on the sand in front of sledges, which experiments have shown greatly reduces friction.",
            "How the blocks were lifted into place remains debated. Many researchers believe workers used ramps made of mud brick and rubble, although they disagree about whether these were straight, zigzagging or spiraling around the pyramid. It was once commonly believed that the pyramids were built by slaves, but discoveries of workers' villages, bakeries and cemeteries near Giza suggest that the builders were paid laborers who were well fed and received medical care. Some workers were permanent skilled craftsmen, while others may have been farmers who worked on the project during the months when the Nile flooded their fields.",
          ],
          questions: [
            { text: "According to paragraph 1, why have people wondered how the Great Pyramid was built?", options: ["The Egyptians lacked iron tools, pulleys and wheeled vehicles for heavy loads.", "It was built very recently.", "It was built underwater.", "It is made of wood."], answer: 0 },
            { text: "According to paragraph 2, how was finer limestone transported?", options: ["often by boat along the Nile", "by train", "by air", "by horses"], answer: 0 },
            { text: "The word \"friction\" in paragraph 2 is closest in meaning to", options: ["resistance between surfaces", "weight", "speed", "heat"], answer: 0 },
            { text: "According to paragraph 3, what do researchers disagree about?", options: ["the shape of the ramps used to lift blocks", "whether the pyramid exists", "who the king was", "the height of the pyramid"], answer: 0 },
            { text: "What do discoveries near Giza suggest about the builders?", options: ["They were paid laborers who were fed and received medical care.", "They were all slaves.", "They came from Europe.", "They worked only at night."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "The school library",
          text: "My favorite place at school is the libr{{ary}}. It is on the second floor, next to the music ro{{om}}. There are thousands of bo{{oks}} on tall wooden shelves. The librarian, Mrs. Kaya, is very fri{{endly}}. She always helps us find interesting sto{{ries}}. During lunch break, I often sit in a quiet cor{{ner}} and read. There are also comfortable chairs and big win{{dows}}. Every Friday, Mrs. Kaya reads a story to the younger child{{ren}}. I borrow two books every we{{ek}}, and I always return them on ti{{me}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Thrift shop opening",
          text: [
            "NEW THRIFT SHOP NOW OPEN!",
            "The Helping Hands Thrift Shop has opened on Market Street. We sell second-hand clothes, books, toys and household items at low prices.",
            "All profits support the local children's hospital. We also accept donations of clean, good-quality items every day from 10 a.m. to 6 p.m. On opening weekend, everything is half price!",
          ],
          questions: [
            { text: "What does the shop sell?", options: ["second-hand clothes, books, toys and household items", "new electronics", "fresh food", "furniture only"], answer: 0 },
            { text: "Where do the profits go?", options: ["to the local children's hospital", "to the shop owners", "to a school", "to an animal shelter"], answer: 0 },
            { text: "What special offer is there on opening weekend?", options: ["Everything is half price.", "Free coffee", "Buy one, get one free", "A free toy for every child"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why roosters crow",
          paragraphs: [
            "Roosters are male chickens. They are famous for crowing loudly early in the morning, often before the sun rises.",
            "Scientists have found that roosters have an inner clock. This clock tells them when morning is coming, even if they are kept in the dark. Roosters crow at dawn to tell other chickens that a new day is starting.",
            "Crowing also tells other roosters, \"This is my area.\" The strongest rooster in a group usually crows first, and the others wait for their turn. Roosters can crow at other times of the day, too, for example when they hear a loud noise.",
          ],
          questions: [
            { text: "What is a rooster?", options: ["a male chicken", "a baby chicken", "a female duck", "a wild bird"], answer: 0 },
            { text: "What tells roosters that morning is coming?", options: ["an inner clock", "the farmer", "other animals", "the moon"], answer: 0 },
            { text: "The word \"dawn\" in paragraph 2 is closest in meaning to", options: ["early morning", "midnight", "noon", "evening"], answer: 0 },
            { text: "Which rooster usually crows first?", options: ["the strongest rooster", "the youngest rooster", "the smallest rooster", "any rooster"], answer: 0 },
            { text: "When else might roosters crow?", options: ["when they hear a loud noise", "only at night", "only when they are hungry", "never"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Optimism bias",
          text: "Most people believe that they are less likely than others to experience negative events, such as illness, accidents or job lo{{ss}}. At the same time, they often expect to enjoy more positive events than the ave{{rage}} person. Researchers call this tendency optimism bi{{as}}. For example, many newly married couples estimate that their own chance of divorce is very lo{{w}}, even though they know the national divorce ra{{te}}. This bias may have benefits: optimistic people often feel less stre{{ssed}} and may work harder toward their go{{als}}. However, it can also lead people to take unnec{{essary}} risks, such as not saving money or ignoring health war{{nings}}. Understanding the bias may help people make more realistic pla{{ns}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Work placement reports",
          text: [
            "To: Students completing a work placement this semester",
            "From: Faculty of Business, Placement Office",
            "Subject: Requirements for your placement report",
            "To receive credit for your work placement, you must submit a final report of 3,000 to 4,000 words by January 15. The report should describe the organization, explain your main tasks and reflect on what you learned, linking your experience to theories studied in your courses.",
            "You must also ask your workplace supervisor to complete an online evaluation form, which will be sent to them automatically in December. Reports will not be graded until the supervisor's evaluation has been received. If your placement ends early for any reason, please contact the Placement Office immediately.",
          ],
          questions: [
            { text: "What should the report include?", options: ["a description of the organization, tasks and reflection on learning", "only a list of working hours", "a business plan", "photographs of the office"], answer: 0 },
            { text: "When will reports be graded?", options: ["after the supervisor's evaluation has been received", "immediately after submission", "at the end of the next year", "before January"], answer: 0 },
            { text: "What should students do if their placement ends early?", options: ["contact the Placement Office immediately", "write a shorter report", "find another job", "do nothing"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Tourism in Antarctica",
          paragraphs: [
            "Antarctica is the coldest, windiest and most remote continent on Earth, and it has no permanent human population. Yet each year, tens of thousands of tourists travel there, mostly on cruise ships that depart from the southern tip of South America during the short summer season. Visitors come to see spectacular glaciers and icebergs and wildlife such as penguins, seals and whales. The number of tourists has grown rapidly in recent decades.",
            "Antarctica is governed by an international agreement, the Antarctic Treaty, which reserves the continent for peaceful purposes and scientific research. Tourism is managed largely through an association of tour operators that has developed strict guidelines. For example, only a limited number of people may go ashore at one time, visitors must keep a safe distance from wildlife, and boots and clothing must be cleaned to prevent the introduction of seeds and microorganisms from other continents.",
            "Despite these rules, scientists and environmental groups have raised concerns. Increasing ship traffic raises the risk of oil spills in waters where cleanup would be extremely difficult. Visitors may disturb breeding animals, and popular landing sites can suffer from trampling of fragile mosses and lichens. In addition, the long journeys to Antarctica produce significant greenhouse gas emissions, contributing to the very warming that threatens its ice and wildlife. Supporters of tourism argue that visitors often return home as passionate advocates for protecting the polar environment. The challenge for the future is to decide how many visitors Antarctica can receive without damaging the qualities that make it unique.",
          ],
          questions: [
            { text: "According to paragraph 1, how do most tourists travel to Antarctica?", options: ["on cruise ships from South America", "by airplane directly from Europe", "by car", "on research stations"], answer: 0 },
            { text: "According to paragraph 2, why must boots and clothing be cleaned?", options: ["to prevent introducing seeds and microorganisms", "to keep visitors warm", "to protect the ships", "to make photographs better"], answer: 0 },
            { text: "The word \"trampling\" in paragraph 3 is closest in meaning to", options: ["being stepped on and damaged", "growing", "melting", "being photographed"], answer: 0 },
            { text: "Which concern about Antarctic tourism is mentioned in paragraph 3?", options: ["the risk of oil spills from increased ship traffic", "too many hotels", "noise from cities", "a lack of tourists"], answer: 0 },
            { text: "What argument do supporters of Antarctic tourism make?", options: ["Visitors often become advocates for protecting the polar environment.", "Tourism has no environmental impact.", "Tourists help scientists with research.", "Tourism should have no limits."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Engin", prompt: "Why are you so quiet today?", chunks: ["I", "didn't", "sleep", "well", "last night"], end: "." },
      { promptBy: "Rachel", prompt: "Did you like the hotel?", chunks: ["the staff", "were", "very", "kind and", "helpful"], end: "." },
      { promptBy: "Sevgi", prompt: "I always forget to drink water.", chunks: ["why don't", "you", "set", "a reminder", "on your phone"], end: "?" },
      { promptBy: "Tom", prompt: "How did your team win the competition?", chunks: ["we", "practiced", "together", "every", "evening"], end: "." },
      { promptBy: "Nilay", prompt: "When will the store reopen?", chunks: ["it", "will", "reopen", "after", "the renovation"], end: "." },
      { promptBy: "Andy", prompt: "Why is the sky so orange?", chunks: ["there is", "a lot of", "dust", "in", "the air"], end: "." },
      { promptBy: "Kübra", prompt: "What did you study at university?", chunks: ["I", "studied", "biology", "and", "chemistry"], end: "." },
      { promptBy: "Gary", prompt: "Where can I park my bicycle?", chunks: ["there is", "a bike rack", "next to", "the main", "entrance"], end: "." },
      { promptBy: "Dilek", prompt: "I can't find my glasses.", chunks: ["did you", "leave them", "in", "the", "car"], end: "?" },
      { promptBy: "Sean", prompt: "Why did you start learning photography?", chunks: ["I", "wanted to", "take", "better pictures", "of nature"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently ordered a birthday cake from a bakery for your friend's party. The cake was delivered on time, but the decoration and message on top were wrong. You want to contact the bakery.",
      to: "the bakery manager",
      subject: "Problem with my cake order",
      tasks: ["Give details of your order.", "Describe what was wrong with the cake.", "Say what you would like the bakery to do."],
      sample: "Dear Bakery Manager,\n\nOn March 2, I ordered a chocolate birthday cake from your bakery for my friend's thirtieth birthday party on March 8. I paid $60 in advance, and the order number is 2291. I asked for the cake to be decorated with blue flowers and the message 'Happy 30th Birthday, Zeynep!'\n\nThe cake was delivered on time, and it tasted delicious. Unfortunately, the decoration was not what I ordered. Instead of blue flowers, the cake had pink hearts, and the message said 'Happy Birthday, Zehra!' I only noticed when I opened the box just before the party, so there was no time to fix it. My friend was very understanding, but I was embarrassed in front of the guests.\n\nI would appreciate a partial refund to reflect the mistake, or a voucher that I could use for a future order. I would also suggest checking orders carefully before delivery, especially when names are included.\n\nThank you for your attention to this matter.\n\nSincerely,\nEbru Kaplan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Communication Studies",
      professor: {
        name: "Dr. Ward",
        text: "Many workplaces now encourage employees to communicate mainly through instant messaging apps instead of email or face-to-face conversations. Supporters say messaging is faster and more efficient. Others argue that it creates constant interruptions and makes it hard to focus on deep work. Is instant messaging a good way for colleagues to communicate at work? Explain your view.",
      },
      students: [
        { name: "Charlotte", text: "Yes. Messaging lets teams solve small problems quickly without long email chains or meetings. It's much more efficient." },
        { name: "Berk", text: "Not really. When messages arrive every few minutes, it's impossible to concentrate. People feel they have to reply immediately." },
      ],
      sample: "I think instant messaging can be a useful way for colleagues to communicate, but only when teams agree on clear rules for using it. Charlotte is right that messaging is ideal for quick questions and small problems; a short message can save time compared with writing a formal email or scheduling a meeting. It also helps remote teams feel connected. However, Berk raises a serious concern. Constant notifications can break concentration, and research suggests that it can take many minutes to fully refocus after an interruption. To get the benefits without the problems, teams could set 'quiet hours' for focused work, use email for longer or less urgent topics and make it clear that people are not expected to reply instantly to every message.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new staff member at a university library. The head librarian is telling you what to say to students.",
      sentences: [
        "Good morning, how can I help you?",
        "You can borrow books for three weeks.",
        "Group study rooms must be booked online.",
        "Please return your books to the front desk.",
        "Printing costs ten cents per page.",
        "If you need help finding sources for your research, you can book an appointment with a subject librarian.",
        "During the exam period, the library will stay open until midnight, and extra study spaces will be available on the ground floor.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's views on happiness and well-being. The researcher will ask you some questions.",
      questions: [
        {
          text: "What makes you feel happy in your daily life?",
          sample: "Small things usually make me happiest in daily life. For example, having breakfast with my roommate in the morning, listening to music on the way to class or going for a walk by the sea in the evening. I also feel happy when I finish a difficult assignment or learn something new. Spending time with friends and laughing together is probably the thing that lifts my mood the most.",
        },
        {
          text: "Do you think money can buy happiness?",
          sample: "I think money can buy some happiness, up to a point. Having enough money to pay for food, housing and healthcare reduces stress and gives people security, which is important for well-being. However, once basic needs are met, more money doesn't seem to make people much happier. Relationships, health and meaningful activities are more important. Spending money on experiences, like travel, or on other people may also bring more happiness than buying things.",
        },
        {
          text: "Are people today happier than people in the past?",
          sample: "It's hard to say. In many ways, people today have better lives than in the past. They live longer, have access to better healthcare and education, and have more comfort and entertainment. However, many people also feel more stressed, lonely or anxious, partly because of busy lifestyles and constant comparison on social media. So I think people today have more opportunities for happiness, but they don't always feel happier.",
        },
        {
          text: "Should governments try to measure and improve citizens' happiness?",
          sample: "I think it's a good idea for governments to measure citizens' well-being, not just economic growth. Knowing how satisfied people are with their lives, health and communities can help governments make better decisions, such as investing in mental health services or green spaces. However, happiness is very personal, and governments shouldn't tell people how to be happy. Their role should be to create conditions that allow people to live good lives.",
        },
      ],
    },
  },
};
