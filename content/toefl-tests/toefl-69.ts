import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 69 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_69: ToeflTest = {
  id: "toefl-69",
  no: 69,
  title: "TOEFL iBT Practice Test 69",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Teapots",
          text: "The teapot was invented in China, where tea had been popular for centuries. Before teapots, people often made tea by boiling leaves directly in a p{{ot}} or by whisking powdered tea in a bo{{wl}}. In the sixteenth and seventeenth centuries, potters in China began making small teapots from a special red cl{{ay}}. These pots kept tea warm and were believed to improve its fla{{vor}}. When Dutch and Portuguese traders brought tea to Europe, they also brought Chinese tea{{pots}}, which became fashionable among wealthy fami{{lies}}. European factories later learned to make their own porcelain, a hard white cer{{amic}}. Today, teapots come in countless sha{{pes}} and materials, from glass to iron, and in some coun{{tries}} they are still an important part of daily li{{fe}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Looking for a study partner",
          text: [
            "Hi Can, I saw that you're also taking the advanced statistics course. Would you like to study together before the midterm?",
            "I was thinking we could meet twice a week in the library and go through the practice problems. Let me know which days work for you!",
          ],
          questions: [
            { text: "What does the writer suggest?", options: ["studying together before the midterm", "changing courses", "joining a sports team", "working on a project for another class"], answer: 0 },
            { text: "How often does the writer want to meet?", options: ["twice a week", "every day", "once a month", "only on weekends"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Hallway carpet cleaning",
          text: [
            "CARPET CLEANING: ALL FLOORS",
            "The hallway carpets on all floors will be professionally cleaned on Saturday from 8 a.m. to 4 p.m. The carpets will be wet for several hours after cleaning.",
            "Please do not leave shoes, bags or other items in the hallways on Friday night. Residents are asked to walk carefully and use the side of the hallway while the carpets are drying. The elevators will remain in service.",
          ],
          questions: [
            { text: "What will happen on Saturday?", options: ["The hallway carpets will be cleaned.", "New carpets will be installed.", "The elevators will be repaired.", "The building will be painted."], answer: 0 },
            { text: "What are residents asked not to do on Friday night?", options: ["leave items in the hallways", "use the elevators", "turn on lights", "open their windows"], answer: 0 },
            { text: "What is true about the elevators?", options: ["They will remain in service.", "They will be closed.", "They will be cleaned too.", "They can only be used by staff."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The floating gardens of the Aztecs",
          paragraphs: [
            "When Spanish explorers arrived in the Aztec capital of Tenochtitlan in 1519, they were astonished by what they saw. The city, built on an island in Lake Texcoco in the Valley of Mexico, was one of the largest in the world, with perhaps two hundred thousand inhabitants. Feeding such a large population in a region of shallow lakes and marshes required an ingenious agricultural system known as chinampas.",
            "Chinampas are often described as 'floating gardens', although they did not actually float. Farmers created them by building rectangular plots in the shallow lake, using layers of mud, decaying vegetation and soil held in place by wooden stakes and woven reeds. Willow trees were planted along the edges, and their roots helped anchor the plots to the lake bed. The plots were separated by narrow canals, which farmers used to travel by canoe and to transport crops to market.",
            "The system was remarkably productive. Because the plots were surrounded by water, the soil stayed moist throughout the year, and farmers could scoop up nutrient-rich mud from the canals to fertilize their fields. As a result, chinampas could produce several harvests each year of crops such as maize, beans, squash and flowers. After the Spanish conquest, the lakes were gradually drained, and most chinampas disappeared. Some survive today in the Xochimilco area of Mexico City, where they are protected as a World Heritage site, and researchers are studying them as a model for sustainable urban agriculture.",
          ],
          questions: [
            { text: "According to paragraph 1, why did Tenochtitlan need an ingenious agricultural system?", options: ["It had a large population in an area of lakes and marshes.", "It had very little water.", "It was located in a desert.", "It was destroyed by Spanish explorers."], answer: 0 },
            { text: "The word \"ingenious\" in paragraph 1 is closest in meaning to", options: ["clever and original", "simple", "ancient", "expensive"], answer: 0 },
            { text: "According to paragraph 2, how were chinampas anchored to the lake bed?", options: ["by the roots of willow trees", "by heavy stones", "by metal chains", "by floating rafts"], answer: 0 },
            { text: "According to paragraph 3, why were chinampas so productive?", options: ["The soil stayed moist and farmers used nutrient-rich mud as fertilizer.", "They received no rain.", "They were protected by walls.", "They grew only one crop."], answer: 0 },
            { text: "What happened to most chinampas after the Spanish conquest?", options: ["They disappeared as the lakes were drained.", "They were expanded.", "They were moved to Spain.", "They became floating cities."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My first sleepover",
          text: "When I was eight, my friend Mina invited me to a sleep{{over}} at her house. I was very excited, but also a little nerv{{ous}}, because I had never slept away from ho{{me}}. I packed my pajamas, a toothbrush and my favorite te{{ddy}} bear. At Mina's house, we ate pizza and watched a fun{{ny}} film. Then we made a tent with blankets in the living ro{{om}}. We told stories with a flash{{light}} until very late. In the morning, Mina's mother made pan{{cakes}} for us. I had a wonderful ti{{me}}, and now we have sleepovers every few mon{{ths}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Beach volleyball league",
          text: [
            "JOIN OUR BEACH VOLLEYBALL LEAGUE!",
            "Teams of four can sign up for our summer beach volleyball league at Sunset Beach. Games are played every Thursday evening from June to August.",
            "Registration costs $60 per team. All skill levels are welcome, and every team will play at least ten games. The winning team will receive free dinners at the Beach Café.",
          ],
          questions: [
            { text: "How many players are on each team?", options: ["four", "two", "six", "eight"], answer: 0 },
            { text: "When are games played?", options: ["every Thursday evening from June to August", "every weekend all year", "only in July", "on Sunday mornings"], answer: 0 },
            { text: "What will the winning team receive?", options: ["free dinners at the Beach Café", "a trophy only", "money", "new volleyballs"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How goats climb steep cliffs",
          paragraphs: [
            "Mountain goats live in high, rocky mountains in North America. They can climb steep cliffs where few other animals can go.",
            "Mountain goats have special hooves. Each hoof has two toes that can spread apart, and the bottom of each toe has a soft, rough pad. These pads work like the bottom of a climbing shoe and help the goats grip the rocks.",
            "Mountain goats also have strong shoulders and legs, and they have very good balance. Living on cliffs keeps them safe from wolves and bears, which cannot follow them. Young goats can climb rocks only a few hours after they are born.",
          ],
          questions: [
            { text: "Where do mountain goats live?", options: ["in high, rocky mountains in North America", "in deserts", "in forests near rivers", "on farms"], answer: 0 },
            { text: "What is special about mountain goats' hooves?", options: ["They have two toes with soft, rough pads.", "They are very long.", "They are made of metal.", "They have claws."], answer: 0 },
            { text: "The word \"grip\" in paragraph 2 is closest in meaning to", options: ["hold firmly", "break", "slide", "jump"], answer: 0 },
            { text: "Why does living on cliffs keep mountain goats safe?", options: ["Wolves and bears cannot follow them.", "It is warmer there.", "There is more food.", "They can hide in caves."], answer: 0 },
            { text: "When can young goats climb rocks?", options: ["only a few hours after they are born", "after one year", "after a month", "only as adults"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The testing effect",
          text: "Many students prepare for exams by rereading their notes and textbooks. However, research suggests that a more effective method is to test oneself on the mate{{rial}}. In typical experiments, students who read a passage and then practiced recalling it remembered much more a week la{{ter}} than students who simply read the passage several ti{{mes}}. This finding is known as the testing ef{{fect}}. Trying to retrieve information from memory seems to strengthen it, making it easier to remember in the fut{{ure}}. Practice tests also show students what they do not yet kn{{ow}}, helping them focus their ef{{forts}}. Teachers can use this idea by giving frequent short qui{{zzes}} that do not count heavily toward final gra{{des}}, reducing stu{{dents}}' anxiety.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Updated dissertation format",
          text: [
            "To: Doctoral candidates in all departments",
            "From: Graduate School",
            "Subject: Updated formatting requirements for dissertations",
            "The Graduate School has updated its formatting requirements for dissertations submitted after September 1. The main changes concern the title page, which must now include the candidate's research identifier, and the reference list, which should follow the citation style used in your field rather than a single university style.",
            "Dissertations will also be submitted only in electronic form; printed copies are no longer required by the Graduate School, although some departments may still request them. A new template and a checklist are available on the Graduate School website. Candidates may book a short format review appointment two weeks before submission.",
          ],
          questions: [
            { text: "What is one change to the dissertation requirements?", options: ["The title page must include the candidate's research identifier.", "Dissertations must be shorter.", "All dissertations must use one university citation style.", "Printed copies are now required."], answer: 0 },
            { text: "How must dissertations be submitted?", options: ["only in electronic form", "only in printed form", "both electronic and printed", "by mail"], answer: 0 },
            { text: "What can candidates book before submission?", options: ["a short format review appointment", "an extension", "a language exam", "a meeting with the dean"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The circular economy",
          paragraphs: [
            "Most modern economies follow what is often called a 'linear' model: raw materials are extracted, turned into products, used and then thrown away. This model has produced enormous wealth, but it also generates vast amounts of waste and depends on the continuous extraction of natural resources, many of which are limited. As populations and consumption grow, many economists and environmental scientists argue that this approach cannot continue indefinitely.",
            "The idea of a 'circular economy' offers an alternative. In a circular system, products and materials are kept in use for as long as possible, and waste is minimized through design. Products are designed to be durable, repairable and easy to take apart, so that their components can be reused or recycled at the end of their life. Instead of selling products, some companies offer services; for example, a lighting company might sell 'light' to businesses, keeping ownership of the lamps and taking responsibility for maintaining and recycling them.",
            "Supporters argue that a circular economy could reduce environmental damage while creating new jobs in repair, remanufacturing and recycling. Some countries have introduced 'right to repair' laws, which require manufacturers to make spare parts and repair information available to consumers. However, the transition faces obstacles. Recycling many materials, such as certain plastics, remains technically difficult or expensive, and products designed for long life may be less profitable for companies that rely on frequent sales. Critics also note that recycling alone cannot solve the problem if overall consumption continues to rise. Nevertheless, the concept has gained considerable support from governments and businesses.",
          ],
          questions: [
            { text: "According to paragraph 1, what is the 'linear' economic model?", options: ["Materials are extracted, made into products, used and thrown away.", "Products are reused endlessly.", "Materials are never extracted.", "Products are shared among people."], answer: 0 },
            { text: "According to paragraph 2, how are products designed in a circular economy?", options: ["to be durable, repairable and easy to take apart", "to be used only once", "to be as cheap as possible", "to be replaced every year"], answer: 0 },
            { text: "Why does the author mention a lighting company that sells 'light'?", options: ["to give an example of a company offering services instead of products", "to describe a new type of lamp", "to explain how electricity works", "to criticize lighting companies"], answer: 0 },
            { text: "The word \"obstacles\" in paragraph 3 is closest in meaning to", options: ["difficulties", "benefits", "laws", "goals"], answer: 0 },
            { text: "According to paragraph 3, why might long-lasting products be less attractive to some companies?", options: ["They may be less profitable for companies that rely on frequent sales.", "They are illegal in some countries.", "Customers do not want them.", "They cannot be recycled."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Levent", prompt: "Why are you smiling?", chunks: ["my brother", "just", "sent me", "a funny", "video"], end: "." },
      { promptBy: "Helen", prompt: "Did you visit the old castle?", chunks: ["we", "climbed", "to the top", "of", "the tower"], end: "." },
      { promptBy: "Ayşe", prompt: "I'm nervous about speaking in class.", chunks: ["why don't", "you", "prepare", "a few", "notes first"], end: "?" },
      { promptBy: "Kyle", prompt: "How long did the flight take?", chunks: ["it", "took", "about", "four", "hours"], end: "." },
      { promptBy: "Gökçe", prompt: "When will you finish the painting?", chunks: ["I", "hope", "to finish", "it", "by Sunday"], end: "." },
      { promptBy: "Brad", prompt: "Why is the shop closed early today?", chunks: ["the owner", "has", "a family", "emergency", "today"], end: "." },
      { promptBy: "Ebru", prompt: "What did you do at the festival?", chunks: ["we", "listened to", "music", "and tried", "local food"], end: "." },
      { promptBy: "Jim", prompt: "Where did you put the tickets?", chunks: ["I", "put them", "in", "the front pocket", "of my bag"], end: "." },
      { promptBy: "Merve", prompt: "This restaurant is too crowded.", chunks: ["should", "we", "find", "another", "place"], end: "?" },
      { promptBy: "Adam", prompt: "Why did you choose this neighborhood?", chunks: ["it", "is", "quiet", "and close", "to the sea"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your university is planning to close the student café in your building and replace it with vending machines. You and many other students are unhappy about this decision. You want to write to the director of campus services.",
      to: "the director of campus services, Dr. Clarke",
      subject: "Planned closure of the student café",
      tasks: ["Explain how students use the café.", "Describe why vending machines would not be a good replacement.", "Suggest an alternative to closing the café."],
      sample: "Dear Dr. Clarke,\n\nI am writing on behalf of a group of students in the Social Sciences Building regarding the planned closure of our student café. The café is an important part of daily life in our building. Many of us buy breakfast or lunch there between classes, and it is also a popular place for group meetings and informal conversations with classmates and professors.\n\nWe do not believe that vending machines would be a good replacement. They usually offer only packaged snacks and sugary drinks, rather than fresh, healthy food. Students who have long days on campus would have to walk to other buildings for a proper meal, which is difficult with tight schedules. In addition, losing the café would mean losing a friendly social space where students feel welcome.\n\nIf the café is closing because it is not profitable, perhaps it could reduce its opening hours or offer a smaller menu instead of closing completely. Student volunteers could also help promote the café through social media. We would be grateful for the opportunity to discuss these ideas with you.\n\nYours sincerely,\nEce Altun",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Ethics",
      professor: {
        name: "Dr. Morgan",
        text: "Many websites and apps are free to use because they collect information about users and use it to show personalized advertisements. Some people think this is a fair exchange, since users receive useful services without paying. Others believe that collecting personal data in this way is an invasion of privacy. Is it acceptable for companies to collect users' data in exchange for free services? Explain your view.",
      },
      students: [
        { name: "Natalie", text: "I think it's acceptable. Nothing is really free; if we want free email or maps, we have to accept ads. Personalized ads are actually more useful than random ones." },
        { name: "Onur", text: "I don't agree. Most people don't understand how much data is collected or how it's used. Companies can learn very private things about us." },
      ],
      sample: "I believe collecting users' data in exchange for free services can be acceptable, but only if companies are transparent and give users real control. Natalie makes a fair point: running services like search engines and email systems costs a great deal of money, and advertising allows billions of people to use them without paying. Personalized ads may even be more relevant to users. However, Onur is right that the current system often lacks honesty. Privacy policies are long and confusing, and many people do not realize that their location, interests and even health information may be tracked and shared. Therefore, companies should explain clearly what data they collect, allow users to refuse tracking without losing basic access and never sell sensitive information. With such protections, the exchange would be much fairer.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new employee at a pet shop. The owner is telling you what to say to customers.",
      sentences: [
        "Hello, welcome to our pet shop.",
        "Dog food is in the second aisle.",
        "These fish need warm, clean water.",
        "Please don't tap on the glass.",
        "We sell toys for cats and small dogs.",
        "If you are thinking of buying a pet, we can give you advice about how to take care of it.",
        "Every Saturday morning, a local vet visits the shop and offers free health checks for pets, so you are welcome to bring your animals then.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about learning and memory. The researcher will ask you some questions.",
      questions: [
        {
          text: "How do you usually prepare for an important exam?",
          sample: "When I prepare for an important exam, I usually start about two weeks before. First, I make a study plan and divide the topics into small parts. I review my notes, but I also test myself with practice questions or flashcards, because that helps me remember better. A few days before the exam, I study with classmates and explain topics to each other. I also try to sleep well the night before.",
        },
        {
          text: "Do you have a good memory? What helps you remember things?",
          sample: "I think I have a fairly good memory for things I'm interested in, like stories or music lyrics, but I sometimes forget small everyday tasks. To remember important things, I write them in a planner or set reminders on my phone. For studying, I find it helpful to connect new information to something I already know or to create pictures in my mind. Repeating information over several days also helps a lot.",
        },
        {
          text: "Do you think students should memorize information or focus on understanding?",
          sample: "I think understanding is more important, but some memorization is still necessary. If students understand concepts deeply, they can apply them in new situations and solve problems, which is more useful than repeating facts. However, in subjects like languages, medicine or chemistry, you need to remember basic vocabulary, terms or formulas before you can understand more complex ideas. So the best approach is to combine both.",
        },
        {
          text: "Has technology made people's memories worse?",
          sample: "In some ways, I think technology has changed how we use our memory. We no longer need to remember phone numbers, directions or many facts, because our phones store them for us. Some people worry this makes our memory weaker. However, it may also free our minds to focus on more important things, like thinking critically and being creative. The key is not to rely on technology for everything and to keep exercising our memory.",
        },
      ],
    },
  },
};
