import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 27 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_27: ToeflTest = {
  id: "toefl-27",
  no: 27,
  title: "TOEFL iBT Practice Test 27",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Ice cream",
          text: "People have enjoyed cold desserts for a very long time. In ancient China and Persia, cooks mixed sn{{ow}} or ice with fruit and hon{{ey}}. In the seventeenth century, Italian chefs in Paris began making early forms of ice cr{{eam}} using milk, cream and sugar. However, ice cream remained a luxury, because ice was expen{{sive}} and difficult to sto{{re}}. In the nineteenth century, new freezing machi{{nes}} made it cheaper to produce. Today, ice cream is sold all over the wor{{ld}}, and people can choose from hundr{{eds}} of diff{{erent}} flav{{ors}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Group project file",
          text: [
            "Hi everyone, I've uploaded the draft of our presentation to the shared folder. Please add your slides by Thursday evening.",
            "I'll put everything together on Friday morning and send it to the professor before noon. Let me know if you can't open the file!",
          ],
          questions: [
            { text: "What should group members do by Thursday evening?", options: ["present to the class", "add their slides to the shared file", "meet in the library", "send the file to the professor"], answer: 1 },
            { text: "When will the writer send the presentation to the professor?", options: ["on Thursday evening", "before noon on Friday", "on Monday", "after the presentation"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Furniture collection day",
          text: [
            "END-OF-YEAR FURNITURE COLLECTION",
            "Students moving out of off-campus apartments can leave unwanted furniture, lamps and kitchen items at the collection point behind the sports center on May 20 and 21, between 9 a.m. and 5 p.m.",
            "Items must be clean and in working condition. Mattresses and large electrical appliances cannot be accepted. All donations will be offered free to incoming students in August.",
          ],
          questions: [
            { text: "What can students do on May 20 and 21?", options: ["buy furniture cheaply", "donate unwanted items", "rent a moving van", "move into new rooms"], answer: 1 },
            { text: "What CANNOT be accepted?", options: ["lamps", "kitchen items", "mattresses", "chairs"], answer: 2 },
            { text: "What will happen to the donations?", options: ["They will be sold online.", "They will be offered free to incoming students.", "They will be thrown away.", "They will be sent to another city."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why some frogs freeze solid",
          paragraphs: [
            "Most animals die if ice forms inside their bodies, because sharp ice crystals tear cell membranes and the formation of ice draws water out of cells, damaging them. Yet the wood frog of North America survives winter by freezing almost completely. During cold periods, up to two-thirds of the water in its body may turn to ice, its heart stops beating and it stops breathing. To an observer, it appears dead.",
            "The frog's survival depends on chemical preparation. When ice begins to form on its skin, the frog's liver rapidly converts stored starch into large amounts of glucose, a type of sugar, which is carried to its cells. The high concentration of glucose inside the cells acts like antifreeze, reducing the amount of water that leaves them and preventing the cells from shrinking too much. Ice forms mainly in the spaces between cells and in the body cavity rather than inside the cells themselves.",
            "When temperatures rise in spring, the frog thaws from the inside out, and within hours its heart begins to beat again and it resumes breathing. Researchers are studying wood frogs and similar animals in the hope of learning how to preserve human organs for transplants. At present, donated organs can be kept for only a few hours outside the body, and methods that allowed them to be frozen and thawed without damage could save many lives.",
          ],
          questions: [
            { text: "According to paragraph 1, why does freezing usually kill animals?", options: ["Ice crystals damage cells and draw water out of them.", "Animals cannot find food in winter.", "Cold weather stops digestion.", "Animals cannot breathe in snow."], answer: 0 },
            { text: "The word \"resumes\" in paragraph 3 is closest in meaning to", options: ["starts again", "stops", "slows", "avoids"], answer: 0 },
            { text: "According to paragraph 2, what role does glucose play?", options: ["It gives the frog energy to move.", "It acts like antifreeze inside the cells.", "It turns into ice first.", "It keeps the frog's heart beating."], answer: 1 },
            { text: "Where does ice mainly form in a frozen wood frog?", options: ["inside its cells", "in the spaces between cells and in the body cavity", "only on its skin", "in its brain"], answer: 1 },
            { text: "Why are researchers interested in wood frogs?", options: ["to improve methods of preserving organs for transplants", "to develop new kinds of food", "to protect frogs from extinction", "to predict the weather"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Visiting the zoo",
          text: "Last Sunday, my family visited the city zoo. First, we saw the lio{{ns}}, which were sleeping in the s{{un}}. Then we watched the monkeys jumping from tree to tr{{ee}}. My little sister loved the pengu{{ins}} and wanted to stay with them all d{{ay}}. At noon, we had a picnic near the la{{ke}}. In the afternoon, a zoo worker told us about eleph{{ants}} and how much they ea{{t}}. We were tired at the e{{nd}}, but we had a gre{{at}} time.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Apartment cleaning service",
          text: [
            "STUDENT CLEANING SERVICE",
            "Too busy to clean? Two students offer apartment cleaning on weekends. We clean kitchens, bathrooms and living areas and bring all our own cleaning products.",
            "$30 for a one-bedroom apartment, $45 for two bedrooms. 10% discount for regular weekly cleaning. Call or text Ece at 555-0122.",
          ],
          questions: [
            { text: "When is the cleaning service available?", options: ["on weekdays", "on weekends", "every evening", "only on holidays"], answer: 1 },
            { text: "What do the cleaners bring?", options: ["a vacuum cleaner only", "all their own cleaning products", "nothing", "new furniture"], answer: 1 },
            { text: "How can customers get a discount?", options: ["by paying in cash", "by booking regular weekly cleaning", "by having a small apartment", "by booking online"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why we dream",
          paragraphs: [
            "Almost everyone dreams, although many people do not remember their dreams when they wake up. Most vivid dreams happen during a stage of sleep called REM sleep.",
            "During REM sleep, our eyes move quickly under our eyelids, and our brain is very active. However, most of our muscles are relaxed, so we do not act out our dreams.",
            "Scientists are not completely sure why we dream. Some think dreams help us remember things we learned during the day. Others believe dreams help us deal with our emotions.",
          ],
          questions: [
            { text: "When do most vivid dreams happen?", options: ["just after we fall asleep", "during REM sleep", "when we are awake", "in the afternoon"], answer: 1 },
            { text: "What happens to our eyes during REM sleep?", options: ["They open.", "They move quickly under the eyelids.", "They stay completely still.", "They become dry."], answer: 1 },
            { text: "Why don't we act out our dreams?", options: ["Our brain is not active.", "Most of our muscles are relaxed.", "We wake up first.", "We dream only for a few seconds."], answer: 1 },
            { text: "The word \"vivid\" in paragraph 1 is closest in meaning to", options: ["clear and strong", "short", "frightening", "boring"], answer: 0 },
            { text: "What is one idea about why we dream?", options: ["Dreams help us remember what we learned.", "Dreams make us sleep longer.", "Dreams keep us warm.", "Dreams help us breathe."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The endowment effect",
          text: "People often value an object more highly simply because they own it. In a famous experiment, some participants were gi{{ven}} coffee mugs and asked how much they would ac{{cept}} to sell them, while others were asked how much they would pay to bu{{y}} the same mugs. Owners typically demanded about twice as mu{{ch}} as buyers were willing to pay. This patt{{ern}}, known as the endowment effect, challenges the assum{{ption}} that people value goods consistently. It may help expl{{ain}} why people find it difficult to part with posse{{ssions}} and why sellers often over{{estimate}} the value of their hom{{es}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to the printing system",
          text: [
            "To: All faculty and staff",
            "From: Information Technology Services",
            "Subject: New secure printing system",
            "From March 1, all printers in university buildings will use a secure 'print and release' system. When you send a document to print, it will be held in a queue until you log in at any printer using your staff card. Documents not released within 24 hours will be deleted automatically.",
            "This system will protect confidential documents and reduce waste from forgotten printouts. Staff who print large documents of more than 200 pages should continue to use the central print shop, which offers lower prices and binding services. Training videos are available on the IT website.",
          ],
          questions: [
            { text: "What must staff do to print a document under the new system?", options: ["send it by email to IT", "log in at a printer with their staff card", "pay for each page", "print only in their own office"], answer: 1 },
            { text: "What happens to documents not released within 24 hours?", options: ["They are printed automatically.", "They are deleted.", "They are sent to the print shop.", "They are saved for a week."], answer: 1 },
            { text: "Where should staff print very large documents?", options: ["at home", "at the central print shop", "at any printer", "in the library"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The Library of Alexandria",
          paragraphs: [
            "Founded in the early third century BCE in the Egyptian city of Alexandria, the Library of Alexandria became the most famous library of the ancient world. Its founders, the Ptolemaic rulers of Egypt, aimed to collect copies of every important book in existence. According to ancient sources, ships arriving in the city's harbor were searched for books, which were copied; the originals were kept by the library, and the owners received the copies.",
            "The library was part of a larger research institution, the Mouseion, where scholars were supported by the state. Among those associated with it were Eratosthenes, who calculated the circumference of the Earth with remarkable accuracy, and scholars who produced careful editions of the poems of Homer. Estimates of the number of scrolls the library held vary widely, from tens of thousands to several hundred thousand, and modern historians treat the highest figures with caution.",
            "The library's destruction is often described as a single catastrophic event, such as a fire set during Julius Caesar's war in Alexandria in 48 BCE. Most historians now believe, however, that the library declined gradually over several centuries. Funding fell as political conditions changed, scholars were expelled during a power struggle in the second century BCE, and the city suffered repeated conflicts. By the time of the later events often blamed for its end, the great library may already have been largely gone. Its decline is often cited as a warning about how fragile knowledge can be without continued support.",
          ],
          questions: [
            { text: "According to paragraph 1, what happened to books found on ships arriving in Alexandria?", options: ["They were burned.", "They were copied, and the library kept the originals.", "They were sold to scholars.", "They were returned unopened."], answer: 1 },
            { text: "The word \"expelled\" in paragraph 3 is closest in meaning to", options: ["forced to leave", "paid", "honored", "hired"], answer: 0 },
            { text: "According to paragraph 2, what was Eratosthenes known for?", options: ["writing Homer's poems", "calculating the Earth's circumference", "founding the library", "burning the library"], answer: 1 },
            { text: "What do most historians now believe about the library's end?", options: ["It was destroyed in a single fire.", "It declined gradually over centuries.", "It was moved to Rome.", "It never existed."], answer: 1 },
            { text: "Why does the author mention the library's decline in the final sentence?", options: ["to show how fragile knowledge can be without support", "to criticize Julius Caesar", "to describe modern libraries", "to explain how scrolls were made"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Dilara", prompt: "Why are you wearing a coat indoors?", chunks: ["the heating", "in this building", "has", "stopped", "working"], end: "." },
      { promptBy: "Sam", prompt: "Have you finished packing for the trip?", chunks: ["I", "still need", "to buy", "a new", "suitcase"], end: "." },
      { promptBy: "Nisan", prompt: "I'm always late for my morning class.", chunks: ["why don't", "you", "set", "two alarms", "instead of one"], end: "?" },
      { promptBy: "Lucas", prompt: "Where did you find this restaurant?", chunks: ["a friend", "recommended", "it", "to me", "last month"], end: "." },
      { promptBy: "Gül", prompt: "How was your first driving lesson?", chunks: ["it", "was", "scary", "at first", "but fun"], end: "." },
      { promptBy: "Andrew", prompt: "Why is the shop so busy today?", chunks: ["they", "are having", "a big sale", "on", "winter clothes"], end: "." },
      { promptBy: "Feyza", prompt: "Can you help me with this math problem?", chunks: ["I", "can", "help you", "after", "dinner"], end: "." },
      { promptBy: "Nolan", prompt: "What did you do during the summer?", chunks: ["I", "worked", "as a lifeguard", "at", "the city pool"], end: "." },
      { promptBy: "İpek", prompt: "This book is very difficult.", chunks: ["should", "we", "read it", "together", "chapter by chapter"], end: "?" },
      { promptBy: "Caleb", prompt: "Why do you like your new job?", chunks: ["my colleagues", "are", "friendly", "and", "very supportive"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "A friend from another country is planning to visit your city next month for the first time and has asked you for advice.",
      to: "your friend, Mark",
      subject: "Your visit next month",
      tasks: ["Say how you feel about the visit.", "Recommend places to visit and things to do.", "Give practical advice about transport or weather."],
      sample: "Hi Mark,\n\nI was so happy to hear that you are finally coming to İzmir next month! I've been hoping you would visit for a long time, and I'm looking forward to showing you around.\n\nThere are a few places you really shouldn't miss. The Kordon, the long waterfront promenade, is perfect for an evening walk and dinner by the sea. You should also visit Kemeraltı, the old market area, where you can try local snacks and buy spices and souvenirs. If you have a free day, I'd recommend taking a trip to the ancient city of Ephesus, which is about an hour away.\n\nAs for practical advice, the metro and ferries are cheap and easy to use, so you won't need to rent a car. Just buy a travel card at the airport. The weather next month should be warm during the day, but it can get cool in the evenings, so bring a light jacket.\n\nLet me know your exact dates, and I'll keep some time free.\n\nSee you soon,\nCan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Ethics",
      professor: {
        name: "Dr. Adams",
        text: "Zoos have changed a lot in recent decades. Supporters say modern zoos protect endangered species and educate the public. Critics argue that keeping wild animals in captivity is wrong, especially for large, intelligent animals like elephants and orcas, and that conservation should focus on protecting animals in the wild. Do you think zoos should continue to exist? Why or why not?",
      },
      students: [
        { name: "Grace", text: "Yes, but only good ones. Some species survived only because zoos bred them in captivity. And seeing real animals inspires children to care about nature." },
        { name: "Tolga", text: "I think zoos should gradually close. Even the best enclosures can't replace the wild. The money would do more good if it were spent protecting natural habitats." },
      ],
      sample: "I believe zoos should continue to exist, but they need to change significantly. Grace is right that zoos have played an important role in saving some species. Animals such as the Arabian oryx and the California condor survived largely because of breeding programs, and seeing animals up close can inspire a lifelong interest in nature. However, Tolga makes an important point about the welfare of certain animals. Large, wide-ranging and highly intelligent animals, such as elephants and orcas, clearly suffer in captivity, and I think zoos should stop keeping them. Zoos should focus on species that can live well in captivity and that benefit from breeding programs, and a large share of their income should be used to protect habitats in the wild. In this way, zoos can support conservation rather than compete with it.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-JennyNeural",
    repeat: {
      scene: "You are working at a university health center. A nurse is telling you what to say to students who arrive.",
      sentences: [
        "Hello, how can I help you?",
        "Please fill out this form first.",
        "The doctor will see you shortly.",
        "Appointments are free for all registered students.",
        "Please bring your student card to every appointment.",
        "If you need a prescription, you can collect your medicine at the pharmacy next door.",
        "Students who feel very unwell outside opening hours should call the emergency number on the back of their student card.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about learning languages. The researcher will ask you some questions.",
      questions: [
        {
          text: "Why are you learning English, and how do you practice it?",
          sample: "I'm learning English mainly because I want to do a master's degree abroad, and English is also essential in my field, engineering, since most research is published in English. I practice in several ways. I watch series and YouTube videos in English with English subtitles, I read articles related to my studies and I meet a conversation partner online once a week. I also try to write short summaries of what I read to improve my writing.",
        },
        {
          text: "What do you find most difficult about learning a new language?",
          sample: "For me, the most difficult part is speaking fluently in real conversations. I can understand quite a lot and write reasonably well, but when I need to speak quickly, I often can't find the right words, or I worry about making grammar mistakes. Listening to native speakers who talk very fast or use slang is also challenging. The only solution I've found is to practice speaking regularly, even when it feels uncomfortable.",
        },
        {
          text: "Some people think that, with translation apps, it is no longer necessary to learn foreign languages. Do you agree?",
          sample: "I don't agree. Translation apps are very useful for simple tasks, like reading a menu or asking for directions, but they can't replace real language skills. Conversations involve humor, emotions and cultural details that apps often miss, and talking through a phone makes it hard to build real relationships. Learning a language also changes the way you think and helps you understand another culture, which no app can do for you.",
        },
        {
          text: "At what age do you think children should start learning a foreign language? Why?",
          sample: "I think children should start learning a foreign language quite early, perhaps around the age of six or seven. Young children are good at imitating sounds, so they often develop better pronunciation, and they're less afraid of making mistakes. However, the quality of teaching matters more than the starting age. If lessons are boring or focused only on grammar, an early start won't help much, so schools should use games, songs and stories to make learning enjoyable.",
        },
      ],
    },
  },
};
