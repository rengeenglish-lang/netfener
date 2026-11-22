import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 21 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_21: ToeflTest = {
  id: "toefl-21",
  no: 21,
  title: "TOEFL iBT Practice Test 21",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Postage stamps",
          text: "Before 1840, people in Britain usually paid for letters when they recei{{ved}} them, not when they sent them. The price depended on the dist{{ance}} and the number of pages, so sending a let{{ter}} was often expensive. A teacher named Rowland Hill sugg{{ested}} a simpler system: a single low pri{{ce}} for any letter, paid in adv{{ance}} with a small printed sta{{mp}}. The first stamp, called the Penny Black, sho{{wed}} the face of Queen Victoria. The idea was so succ{{essful}} that other countries soon cop{{ied}} it.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Moving help",
          text: [
            "Hey Kaan! I'm moving to my new apartment on Sunday, and I've rented a van from 9 to 1.",
            "Could you help me carry the furniture for a couple of hours? I'll buy pizza for everyone afterward. My new place is on the fourth floor, but there's an elevator!",
          ],
          questions: [
            { text: "What does the writer want Kaan to do?", options: ["drive the van", "help carry furniture", "clean the new apartment", "lend some furniture"], answer: 1 },
            { text: "What does the writer offer in return?", options: ["money", "pizza", "a ride home", "a free night's stay"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Study space during renovation",
          text: [
            "LIBRARY RENOVATION: WHERE TO STUDY",
            "The second and third floors of the library will be closed from June 1 to August 31 for renovation. The ground floor will remain open, but with fewer study desks.",
            "Additional quiet study space will be available in the Education Building, Rooms 101–110, from 8 a.m. to 10 p.m. Books from the closed floors can be requested online and collected from the ground-floor service desk within 24 hours.",
          ],
          questions: [
            { text: "Which part of the library will remain open?", options: ["the second floor", "the third floor", "the ground floor", "none of it"], answer: 2 },
            { text: "Where is additional study space available?", options: ["in the student center", "in the Education Building", "in the sports hall", "in the cafeteria"], answer: 1 },
            { text: "How can students get books from the closed floors?", options: ["by visiting the floors with a staff member", "by requesting them online and collecting them at the service desk", "by emailing the librarian", "They cannot get them until September."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why octopuses are so intelligent",
          paragraphs: [
            "Octopuses are among the most intelligent invertebrates, animals without backbones. In laboratory studies, they have learned to open jars to reach food, solve simple mazes and recognize individual human keepers. Some aquarium octopuses have even escaped from their tanks at night, apparently to raid neighboring tanks before returning to their own.",
            "Their intelligence is organized very differently from ours. An octopus has around five hundred million neurons, roughly as many as a dog, but about two-thirds of them are located in its eight arms rather than in its central brain. Each arm can taste, touch and respond to its surroundings with considerable independence; experiments have shown that an arm can continue to reach for food even after the central brain has stopped directing it.",
            "Why octopuses developed such intelligence is puzzling, since most of them live solitary lives and survive for only one or two years, while intelligence in other animals is often linked to long lives and complex social groups. One explanation is that their ancestors lost the protective shell that their relatives, such as snails, still have. Without a shell, octopuses had to rely on camouflage, problem-solving and quick escapes to find food and avoid predators, which may have favored the evolution of a large and flexible nervous system.",
          ],
          questions: [
            { text: "According to paragraph 1, which is evidence of octopus intelligence?", options: ["They build nests.", "They can open jars to reach food.", "They live in large groups.", "They use tools made of stone."], answer: 1 },
            { text: "The word \"solitary\" in paragraph 3 is closest in meaning to", options: ["alone", "short", "dangerous", "busy"], answer: 0 },
            { text: "According to paragraph 2, where are most of an octopus's neurons located?", options: ["in its central brain", "in its arms", "in its eyes", "in its skin"], answer: 1 },
            { text: "Why is octopus intelligence described as puzzling?", options: ["Octopuses live alone and have short lives.", "Octopuses have very few neurons.", "Octopuses cannot learn.", "Octopuses live only in aquariums."], answer: 0 },
            { text: "According to paragraph 3, how might losing a shell have influenced octopus evolution?", options: ["It made them slower.", "It may have favored problem-solving and a flexible nervous system.", "It made them more social.", "It allowed them to live longer."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My favorite season",
          text: "My favorite season is autumn. The weather is not too h{{ot}} or too cold. The leaves on the tre{{es}} turn red, orange and yel{{low}}. I love walking in the pa{{rk}} and hearing the leaves under my fe{{et}}. Autumn is also the time when school star{{ts}} again, and I can see my frie{{nds}}. In the evenings, my family dri{{nks}} hot tea and eats chest{{nuts}}. For me, autumn is the most beau{{tiful}} time of the year.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Board game night",
          text: [
            "BOARD GAME NIGHT!",
            "Every Friday at 7 p.m. in the student lounge. We have more than fifty games, from quick card games to long strategy games.",
            "Everyone is welcome, and you don't need to know the rules. Free snacks are provided. Bring your own games if you'd like to share them!",
          ],
          questions: [
            { text: "When does board game night take place?", options: ["every Monday", "every Wednesday", "every Friday", "every Sunday"], answer: 2 },
            { text: "What do people need to know before coming?", options: ["the rules of every game", "nothing", "how to play chess", "the names of the organizers"], answer: 1 },
            { text: "What are people invited to bring?", options: ["snacks", "their own games", "money", "chairs"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why the sea is salty",
          paragraphs: [
            "The water in the sea tastes salty, but the water in most rivers and lakes does not. Where does the salt come from?",
            "Rain falls on land and slowly breaks down rocks. Tiny amounts of salt and other minerals from the rocks dissolve in the water, and rivers carry them to the sea.",
            "In the sea, the sun heats the water, and some of it evaporates. The water goes into the air, but the salt stays behind. Over millions of years, this process has made the sea salty.",
          ],
          questions: [
            { text: "What is different about sea water and river water?", options: ["River water is saltier.", "Sea water is salty, but most river water is not.", "Both are equally salty.", "Neither contains salt."], answer: 1 },
            { text: "Where does most of the salt in the sea come from?", options: ["from rocks on land", "from fish", "from the air", "from ice"], answer: 0 },
            { text: "The word \"dissolve\" in paragraph 2 is closest in meaning to", options: ["mix into a liquid", "become hard", "change color", "grow larger"], answer: 0 },
            { text: "What happens when sea water evaporates?", options: ["The salt also evaporates.", "The salt stays behind.", "The water becomes fresh.", "The salt turns into rain."], answer: 1 },
            { text: "How long has this process taken?", options: ["a few years", "about a century", "millions of years", "one thousand years"], answer: 2 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Dunning–Kruger effect",
          text: "In 1999, two psychologists, David Dunning and Justin Kruger, published a study suggesting that people with limited skill in an area often overes{{timate}} their abilities. Participants who scored poor{{ly}} on tests of grammar, logic and humor tended to rate their performance as above aver{{age}}. The researchers argued that the know{{ledge}} needed to perform well is often the same knowledge needed to recog{{nize}} one's mistakes. Some later researchers have questioned how lar{{ge}} the effect really is, arguing that part of the pat{{tern}} can be explained by statistical artif{{acts}}, but the idea has become wide{{ly}} kno{{wn}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Thesis printing and binding",
          text: [
            "To: Final-year master's students",
            "From: Graduate School Office",
            "Subject: Submitting your thesis – printing and binding",
            "Master's theses must now be submitted electronically through the thesis portal by May 20. Printed copies are no longer required by the Graduate School. However, some departments still ask for one bound copy for their own library; please check with your department.",
            "Before submitting, make sure your thesis follows the formatting guidelines, including margins, page numbering and the title page template. Theses that do not meet the guidelines will be returned for correction, which may delay your graduation. A free formatting check is available at the Writing Center until May 10.",
          ],
          questions: [
            { text: "How must theses be submitted?", options: ["as two printed copies", "electronically through the portal", "by email to the supervisor", "in person at the library"], answer: 1 },
            { text: "What may some departments still require?", options: ["a bound copy for their library", "an oral presentation", "a printed copy for each examiner", "a fee"], answer: 0 },
            { text: "What is available at the Writing Center until May 10?", options: ["printing services", "a free formatting check", "thesis binding", "extensions"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Megafauna extinctions",
          paragraphs: [
            "Until relatively recently in Earth's history, every continent was home to giant animals. Australia had marsupials as large as hippopotamuses, North America had mammoths, giant ground sloths and saber-toothed cats, and South America had armored mammals the size of small cars. Between roughly fifty thousand and ten thousand years ago, however, most of these large animals, known collectively as megafauna, disappeared.",
            "Scientists have long debated the causes. One view emphasizes climate change: the end of the last ice age brought rapid shifts in temperature and vegetation, which may have destroyed habitats on which large animals depended. A second view emphasizes human hunting. Supporters point out that in many regions, the extinctions occurred soon after humans first arrived. In Australia, most megafauna vanished within several thousand years of human settlement, and in the Americas, many large species disappeared not long after humans spread across the continents.",
            "Evidence from islands has been particularly influential. On islands that humans reached only recently, such as Madagascar and New Zealand, large animals, including giant birds, survived long after their relatives on the continents had disappeared, and became extinct only after people arrived. Because these extinctions occurred at different times in different places, generally following human arrival rather than any single climatic event, many researchers now believe that hunting played a major role, although climate change may have made populations more vulnerable.",
          ],
          questions: [
            { text: "According to paragraph 1, what are megafauna?", options: ["small animals that survived the ice age", "giant animals that once lived on every continent", "animals that live only on islands", "modern endangered species"], answer: 1 },
            { text: "The word \"vanished\" in paragraph 2 is closest in meaning to", options: ["grew", "disappeared", "moved", "changed"], answer: 1 },
            { text: "According to paragraph 2, what supports the hunting explanation?", options: ["Extinctions often occurred soon after humans arrived.", "Humans did not live in Australia.", "Megafauna survived the ice age everywhere.", "Climate was stable during this period."], answer: 0 },
            { text: "Why is evidence from islands important?", options: ["Islands had no large animals.", "Extinctions there followed human arrival, long after continental extinctions.", "Islands were not affected by humans.", "All island animals survived."], answer: 1 },
            { text: "What is the author's conclusion?", options: ["Climate change was the only cause.", "Hunting probably played a major role, possibly helped by climate change.", "Megafauna are still alive.", "The causes are completely unknown."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ayla", prompt: "Why are you wearing a suit today?", chunks: ["I", "have", "an interview", "for an internship", "this afternoon"], end: "." },
      { promptBy: "Nathan", prompt: "Did you see the email from the department?", chunks: ["they", "changed", "the date", "of", "the final exam"], end: "." },
      { promptBy: "Büşra", prompt: "I'm always hungry in class.", chunks: ["why don't", "you", "eat", "a bigger", "breakfast"], end: "?" },
      { promptBy: "Kyle", prompt: "Where can I find a good haircut nearby?", chunks: ["there is", "a great", "barber", "next to", "the bakery"], end: "." },
      { promptBy: "Melek", prompt: "How was your trip to the coast?", chunks: ["we", "swam", "in the sea", "every", "morning"], end: "." },
      { promptBy: "Sean", prompt: "Why is the elevator out of order?", chunks: ["it", "is", "being", "inspected", "by a technician"], end: "." },
      { promptBy: "Ece", prompt: "When do the results come out?", chunks: ["they", "will be", "posted", "online", "next Friday"], end: "." },
      { promptBy: "Dan", prompt: "What did you get your mother for her birthday?", chunks: ["I", "gave her", "a book", "about", "Ottoman history"], end: "." },
      { promptBy: "Sude", prompt: "This café is too crowded to study.", chunks: ["should", "we", "go to", "the library", "instead"], end: "?" },
      { promptBy: "Lewis", prompt: "Why did you start running?", chunks: ["my doctor", "told me", "to get", "more", "exercise"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You bought a monthly pass for the campus gym, but the swimming pool, which was the main reason you joined, has been closed for repairs for three weeks without any notice.",
      to: "the manager of the campus gym",
      subject: "Pool closure and my monthly pass",
      tasks: ["Explain why you bought the pass.", "Describe the problem and how it has affected you.", "Ask for a solution, such as a refund or an extension."],
      sample: "Dear Gym Manager,\n\nI bought a monthly pass for the campus gym on October 1, mainly so that I could use the swimming pool. I have a knee injury, and my doctor recommended swimming three times a week as part of my recovery, since it is less stressful for my joints than running or using machines.\n\nUnfortunately, the pool has been closed for repairs for the past three weeks. I was not informed about this when I bought the pass, and there was no notice on the website. As a result, I have only been able to use the pool twice this month, and my recovery has been slower than expected.\n\nI would like to ask whether it is possible to receive a partial refund for the weeks the pool was closed. Alternatively, I would be happy to have my pass extended for three weeks once the pool reopens. Could you also let me know when the repairs are expected to finish?\n\nThank you for your help.\n\nKind regards,\nBora Aksoy",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education",
      professor: {
        name: "Dr. Green",
        text: "Some universities require all students to take courses outside their main field, for example engineering students taking literature or history. Supporters argue that this produces well-rounded graduates. Others say it wastes time and money that could be spent on specialized skills. Should universities require students to take courses outside their major? Why or why not?",
      },
      students: [
        { name: "Isabella", text: "Yes. Employers want people who can think broadly and communicate well. A history or philosophy course can teach an engineer to write clearly and understand society." },
        { name: "Deniz", text: "I don't think so. University is expensive, and students need to compete for jobs in their field. They can read about other subjects in their free time if they want." },
      ],
      sample: "I believe universities should require some courses outside the major, but the number should be limited. Isabella is right that broad knowledge is valuable. Most problems in the real world do not belong to a single discipline. An engineer designing a new bridge, for instance, must consider its effect on local communities and explain the project to the public, which requires communication and social awareness that technical courses rarely provide. When I took an elective in psychology, it changed how I approach teamwork in my own field. However, Deniz raises a fair concern about cost and time. A sensible compromise would be to require two or three general courses and allow students to choose ones that complement their major, such as ethics for medical students or economics for engineers, so that the courses feel relevant rather than like a burden.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are working at an airport information desk. Your supervisor is telling you what to say to travelers.",
      sentences: [
        "Welcome to the airport.",
        "Check-in desks are on the left.",
        "Your flight leaves from Gate 12.",
        "Please have your passport ready at security.",
        "Liquids must be in containers of one hundred milliliters or less.",
        "Free shuttle buses to the city center leave every twenty minutes from the main exit.",
        "If your luggage has not arrived, please go to the baggage services office before you leave the arrivals hall.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of learning new skills. The researcher will ask you some questions.",
      questions: [
        {
          text: "Tell me about a skill you learned recently. How did you learn it?",
          sample: "Recently I learned how to use a statistics program called R for my research methods course. At first, it was quite frustrating, because I had never written any code before. I watched online tutorials, followed exercises from a free course and asked a classmate who was more experienced to check my work. After about two months of regular practice, I could analyze data on my own, and now I actually enjoy solving problems with it.",
        },
        {
          text: "Do you prefer learning from a teacher or teaching yourself? Why?",
          sample: "I generally prefer learning from a teacher, at least at the beginning. A good teacher can explain difficult ideas clearly, correct mistakes before they become habits and keep me motivated. When I teach myself, I sometimes waste time on unimportant details or give up when I get stuck. However, once I understand the basics, I like to continue on my own, because I can focus on what interests me and learn at my own pace.",
        },
        {
          text: "Some people think that it is harder for adults to learn new skills than for children. Do you agree?",
          sample: "I partly agree. Children seem to learn some things, like languages and pronunciation, more naturally, and they're less afraid of making mistakes. Adults often feel embarrassed when they're not good at something, which can slow them down. However, adults have advantages too. They usually have clearer goals, better study strategies and more discipline. So I'd say adults learn differently rather than less effectively, and with the right motivation, they can learn almost anything.",
        },
        {
          text: "What skill do you think will be most useful for people in the future, and why?",
          sample: "I think the ability to adapt and keep learning will be the most useful skill. Technology is changing so quickly that many jobs will look very different in ten or twenty years, and some will disappear completely. People who can learn new tools and adjust to change will have the best opportunities. Specific skills, like using a particular program, may become outdated, but the habit of learning will always be valuable.",
        },
      ],
    },
  },
};
