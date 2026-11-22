import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 100 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_100: ToeflTest = {
  id: "toefl-100",
  no: 100,
  title: "TOEFL iBT Practice Test 100",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Wall calendars",
          text: "People have tracked days, months and seasons for thousands of years, often by observing the Moon and the s{{un}}. Ancient civilizations created calendars to know when to plant cr{{ops}} and when to hold religious festi{{vals}}. Printed calendars became common in Europe after the invention of the printing pr{{ess}}. In the nineteenth century, businesses began giving customers free wall calendars decorated with attractive pic{{tures}} and their company na{{me}}. This was a clever form of adver{{tising}}, because people looked at their calendars every d{{ay}}. Today, most people use digital calendars on their pho{{nes}}, but many families still hang paper calendars in their kitc{{hens}} to write down birthdays and appointments.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Help me choose a gift",
          text: [
            "Hi Duygu, it's my mother's fiftieth birthday next week, and I have no idea what to buy her. You always choose such good presents!",
            "Would you come shopping with me on Saturday afternoon? We could look in the shops around the old market. I'll buy you a coffee afterwards!",
          ],
          questions: [
            { text: "Why does the writer need help?", options: ["to choose a birthday gift for the writer's mother", "to plan a party", "to buy clothes for a wedding", "to choose a restaurant"], answer: 0 },
            { text: "Where does the writer suggest shopping?", options: ["in the shops around the old market", "online", "at the airport", "in another city"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Summer opening hours",
          text: [
            "LIBRARY SUMMER HOURS",
            "From June 15 to September 1, the university library will be open from 9 a.m. to 5 p.m., Monday to Friday. The library will be closed on weekends during the summer.",
            "Books borrowed after June 1 will not be due until September 10. Online resources, including e-books and journal databases, remain available twenty-four hours a day. Study rooms can still be booked through the library website.",
          ],
          questions: [
            { text: "What are the library's summer hours?", options: ["9 a.m. to 5 p.m., Monday to Friday", "twenty-four hours a day", "weekends only", "evenings only"], answer: 0 },
            { text: "When are books borrowed after June 1 due?", options: ["September 10", "June 15", "July 1", "September 1"], answer: 0 },
            { text: "What remains available twenty-four hours a day?", options: ["online resources", "the study rooms", "the help desk", "the café"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How chess spread around the world",
          paragraphs: [
            "Chess is one of the oldest and most widely played board games in the world. Historians believe that it developed from a game called chaturanga, which was played in northern India around the sixth century. Chaturanga was a game of military strategy, and its pieces represented the four divisions of an ancient Indian army: infantry, cavalry, elephants and chariots.",
            "From India, the game spread to Persia, where it became known as shatranj. When Arab armies conquered Persia in the seventh century, the game was adopted throughout the Islamic world, and scholars wrote books analyzing strategies and famous games. Through trade and contact with the Islamic world, chess then reached Europe, including Spain and Italy, by around the tenth century. Along the way, the pieces and rules changed. In medieval Europe, for example, the piece that represented a minister in Persian chess gradually became the queen.",
            "In the late fifteenth century, a series of important rule changes made the game faster and more exciting. The queen, which had previously been able to move only one square diagonally, became the most powerful piece on the board, and the bishop was allowed to move any number of squares. These rules form the basis of modern chess. In the following centuries, chess clubs and tournaments spread, and the first official world champion was recognized in 1886. Today, millions of people play chess online, and computer programs can now defeat even the strongest human players.",
          ],
          questions: [
            { text: "According to paragraph 1, what did the pieces in chaturanga represent?", options: ["the four divisions of an ancient Indian army", "members of a royal family", "different animals", "religious figures"], answer: 0 },
            { text: "According to paragraph 2, how did chess reach Europe?", options: ["through trade and contact with the Islamic world", "through Chinese travelers", "through Roman soldiers", "through Viking sailors"], answer: 0 },
            { text: "The word \"adopted\" in paragraph 2 is closest in meaning to", options: ["taken up and used", "banned", "forgotten", "sold"], answer: 0 },
            { text: "What happened to the Persian minister piece in medieval Europe?", options: ["It gradually became the queen.", "It was removed from the game.", "It became the king.", "It became a horse."], answer: 0 },
            { text: "According to paragraph 3, what effect did the late fifteenth-century rule changes have?", options: ["They made the game faster and more exciting.", "They made the game slower.", "They removed the queen.", "They made the game easier for children only."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My last day of primary school",
          text: "I still remember my last day of primary sch{{ool}}. In the morning, our teacher gave each of us a card with a special mess{{age}}. Then we had a small par{{ty}} in our classroom with cake and juice. We played games and took many pho{{tos}} together. In the afternoon, there was a ceremony in the school ha{{ll}}, and our parents came to watch. Each student received a cert{{ificate}}. When we said goodbye to our teacher, many of us cr{{ied}}. I was sad to leave, but I was also exci{{ted}} about starting a new sch{{ool}}. I still keep my card in a box in my ro{{om}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Sunset boat cruise",
          text: [
            "WATCH THE SUNSET FROM THE SEA!",
            "Join our two-hour sunset cruise along the coast every evening from May to September. The boat leaves the harbor at 7 p.m. and returns at 9 p.m.",
            "Tickets cost $35 for adults and $20 for children under twelve, including a light dinner and drinks. Live music is played on board on Fridays and Saturdays. Please arrive fifteen minutes before departure.",
          ],
          questions: [
            { text: "When does the boat leave?", options: ["at 7 p.m.", "at 9 p.m.", "at noon", "at sunrise"], answer: 0 },
            { text: "What is included in the ticket price?", options: ["a light dinner and drinks", "a hotel room", "a fishing trip", "a free photo"], answer: 0 },
            { text: "On which days is there live music?", options: ["Fridays and Saturdays", "every day", "Mondays only", "Sundays only"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How seeds travel",
          paragraphs: [
            "Plants cannot walk, but their seeds can travel to new places. This helps young plants grow away from their parents, where they have more space and light.",
            "Some seeds are carried by the wind. Dandelion seeds have soft, fluffy parts that work like small parachutes, and maple seeds have wings that spin as they fall. Other seeds float on water. Coconuts, for example, can float across the sea to faraway beaches.",
            "Animals also help seeds travel. Some seeds have tiny hooks that stick to animals' fur. Birds and other animals eat fruit and later drop the seeds in different places. Squirrels bury nuts and sometimes forget them, so new trees can grow.",
          ],
          questions: [
            { text: "Why is it good for seeds to travel?", options: ["Young plants have more space and light away from their parents.", "Seeds like to see new places.", "Parents push them away.", "It makes seeds bigger."], answer: 0 },
            { text: "How do dandelion seeds travel?", options: ["by the wind, using fluffy parts like parachutes", "by floating on water", "by sticking to animals", "by rolling on the ground"], answer: 0 },
            { text: "What can coconuts do?", options: ["float across the sea", "fly through the air", "dig into the ground", "climb trees"], answer: 0 },
            { text: "The word \"bury\" in paragraph 3 is closest in meaning to", options: ["hide under the ground", "eat", "throw", "plant flowers"], answer: 0 },
            { text: "How do birds help seeds travel?", options: ["They eat fruit and drop the seeds in different places.", "They carry seeds in their nests.", "They plant seeds with their beaks.", "They blow seeds with their wings."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The labor illusion",
          text: "People often value a service more when they can see the effort that goes into it. Researchers call this the labor illu{{sion}}. In one study, participants used a travel website that searched for flights. When the website showed a list of the airlines it was check{{ing}}, participants rated the results as more valu{{able}}, even though they had to wait lon{{ger}}. In another study, customers in a restaurant were more satisfied when they could watch the chefs prepare their fo{{od}}. Seeing the work being done seems to make people believe that more ef{{fort}} has been made for them. Businesses can use this effect by making their pro{{cesses}} visible. However, if customers wait too long without any expla{{nation}}, their satis{{faction}} may quickly dec{{line}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Alumni mentoring program",
          text: [
            "To: Final-year undergraduate students",
            "From: Alumni Relations Office",
            "Subject: Get advice from a graduate in your field",
            "The Alumni Mentoring Program connects final-year students with graduates who work in their field of interest. Mentors meet with students online or in person about once a month to offer career advice, review CVs and share their experience of entering the job market.",
            "To apply, complete a short online form describing your career interests and what you hope to gain from the program by October 1. Matches will be announced at a welcome event on October 20. The program is free, but students are expected to attend meetings regularly and to inform their mentor in advance if they cannot attend.",
          ],
          questions: [
            { text: "What will mentors do?", options: ["offer career advice and review CVs", "pay students' tuition", "teach regular courses", "provide internships automatically"], answer: 0 },
            { text: "When will matches be announced?", options: ["at a welcome event on October 20", "on October 1", "at graduation", "by email in December"], answer: 0 },
            { text: "What are students expected to do?", options: ["attend meetings regularly and inform mentors if they cannot attend", "pay a fee", "find their own mentor", "write a thesis"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The science of laughter",
          paragraphs: [
            "Laughter is a universal human behavior: people in every culture laugh, and babies begin laughing at around three or four months of age, long before they can speak. Although we usually associate laughter with jokes and humor, researchers have found that most laughter occurs during ordinary conversation in response to comments that are not particularly funny. This suggests that laughter is primarily a social signal rather than simply a reaction to humor.",
            "Studies show that people are about thirty times more likely to laugh when they are with others than when they are alone. Laughter helps people bond, signals friendliness and can reduce tension in difficult situations. It is also highly contagious; hearing someone else laugh often makes us laugh too, even if we do not know why they are laughing. Some scientists believe that laughter evolved from the playful panting sounds made by apes during rough-and-tumble play, which signal that the activity is not a real fight.",
            "Laughter may also have benefits for health. When people laugh, their breathing and heart rate change, and the brain releases chemicals associated with pleasure and pain relief. Some studies have found that laughing with others increases people's ability to tolerate pain. Laughter has also been linked to reduced stress and improved mood, although researchers caution that many claims about the health benefits of laughter are based on small studies. Nevertheless, programs such as 'laughter yoga', in which people laugh deliberately in groups, have become popular in many countries.",
          ],
          questions: [
            { text: "According to paragraph 1, when does most laughter occur?", options: ["during ordinary conversation", "only after jokes", "when people are alone", "only in children"], answer: 0 },
            { text: "According to paragraph 2, how much more likely are people to laugh with others than alone?", options: ["about thirty times", "about twice", "about the same", "about one hundred times"], answer: 0 },
            { text: "The word \"contagious\" in paragraph 2 is closest in meaning to", options: ["easily spread from person to person", "dangerous", "rare", "silent"], answer: 0 },
            { text: "According to paragraph 2, what might laughter have evolved from?", options: ["the playful panting sounds of apes during play", "human speech", "bird songs", "crying"], answer: 0 },
            { text: "What caution do researchers express in paragraph 3?", options: ["Many health claims are based on small studies.", "Laughter is harmful to health.", "Laughter yoga is dangerous.", "Laughter has no effect on stress."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ozan", prompt: "Why are you packing so many clothes?", chunks: ["I", "am going", "abroad", "for", "three months"], end: "." },
      { promptBy: "Julia", prompt: "Did you enjoy your first week at the new school?", chunks: ["the teachers", "were", "kind", "and very", "helpful"], end: "." },
      { promptBy: "Deniz", prompt: "I can never finish my homework on time.", chunks: ["why don't", "you", "make", "a weekly", "study plan"], end: "?" },
      { promptBy: "Henry", prompt: "How did you learn to play chess so well?", chunks: ["I", "practiced", "online", "every", "evening"], end: "." },
      { promptBy: "Esra", prompt: "When will the new stadium be finished?", chunks: ["it", "should be", "completed", "by", "next summer"], end: "." },
      { promptBy: "Rick", prompt: "Why is everyone wearing red today?", chunks: ["our team", "is playing", "in", "the final", "tonight"], end: "." },
      { promptBy: "Ceyda", prompt: "What did your grandfather tell you?", chunks: ["he", "told me", "stories", "about", "his childhood"], end: "." },
      { promptBy: "Max", prompt: "Where are you celebrating your graduation?", chunks: ["we", "are having", "dinner", "at", "a restaurant by the sea"], end: "." },
      { promptBy: "Aylin", prompt: "This hill is too steep for my bike.", chunks: ["should", "we", "walk", "the rest", "of the way"], end: "?" },
      { promptBy: "Peter", prompt: "Why did you decide to write a book?", chunks: ["I", "wanted to", "share", "my", "travel experiences"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are finishing an English course at a language school. Your teacher, Ms. Harris, helped you improve a lot. You want to write to thank her before you leave.",
      to: "your teacher, Ms. Harris",
      subject: "Thank you for everything",
      tasks: ["Thank your teacher.", "Describe how she helped you improve.", "Explain your future plans and how her teaching will help."],
      sample: "Dear Ms. Harris,\n\nAs my English course comes to an end this week, I wanted to write to thank you for everything you have done for me over the past six months. When I first arrived at the school, I was very nervous about speaking English, and I often stayed silent in class because I was afraid of making mistakes.\n\nYour patience and encouragement made a huge difference. You always created a friendly atmosphere where mistakes were seen as part of learning, and your speaking activities, especially the debates and role-plays, gave me the confidence to express my opinions. Your detailed feedback on my essays also helped me organize my ideas much more clearly, and my writing score has improved significantly.\n\nNext month, I will begin a master's degree in environmental engineering in Canada, where all my classes will be in English. Thanks to your teaching, I feel ready to participate in discussions, write academic papers and make new friends. I will always remember your classes with gratitude.\n\nWith warm regards,\nBurak Özdemir",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education",
      professor: {
        name: "Dr. Hughes",
        text: "Many people believe that the main purpose of a university education is to prepare students for a specific career. Others argue that universities should focus on developing broad knowledge, critical thinking and personal growth, rather than training for particular jobs. What should be the main purpose of a university education? Explain your view.",
      },
      students: [
        { name: "Sophie", text: "Career preparation. University is expensive, and students need practical skills that help them find good jobs after graduation." },
        { name: "Emir", text: "Broad education. Jobs change quickly, so it's more important to learn how to think, solve problems and keep learning throughout life." },
      ],
      sample: "I believe the main purpose of a university education should be to develop broad thinking skills, but universities must also help students prepare for careers. Emir makes a strong point: the job market is changing rapidly, and many of today's students will work in jobs that do not yet exist. Skills such as critical thinking, clear communication, problem-solving and the ability to learn independently will remain valuable whatever career a person chooses. A broad education also helps people become informed citizens. However, Sophie is right that university is a major investment of time and money, and students reasonably expect it to improve their job prospects. Therefore, universities should combine strong academic foundations with practical opportunities, such as internships, projects with companies and career guidance, so that graduates are both thoughtful and employable.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new staff member at a university graduation ceremony. The event coordinator is telling you what to say to graduates and guests.",
      sentences: [
        "Congratulations, and welcome to the ceremony.",
        "Graduates should sit in the front rows.",
        "Guests can sit in the upper balcony.",
        "The ceremony will begin at ten o'clock.",
        "Please turn off your phones during the speeches.",
        "When your name is called, walk to the stage, shake hands with the dean and collect your diploma.",
        "After the ceremony, there will be a reception in the garden, where graduates can take photos with their families and professors.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of learning and personal growth. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is the most important thing you have learned in the past year?",
          sample: "The most important thing I've learned in the past year is how to manage my time effectively. In the past, I often left assignments until the last minute and felt stressed. This year, I started using a weekly planner and breaking big tasks into small steps. As a result, I've been less anxious, my grades have improved and I have more free time to spend with friends.",
        },
        {
          text: "Who has had the biggest influence on your education?",
          sample: "The person who has had the biggest influence on my education is my mother. She was a teacher, and she always encouraged me to read and ask questions. When I struggled with a subject, she helped me find different ways to understand it instead of just giving me the answers. She also taught me that making mistakes is part of learning, which gave me confidence to try difficult things.",
        },
        {
          text: "Do you think people learn more from success or from failure?",
          sample: "I think people often learn more from failure, as long as they reflect on it. When something goes wrong, we are forced to think about what we could do differently, and these lessons tend to stay with us. Success is important too, because it builds confidence and shows us what works. However, failure teaches resilience and humility, which are valuable skills for the rest of our lives.",
        },
        {
          text: "What are your goals for the next five years?",
          sample: "In the next five years, I hope to finish my master's degree and find a job in environmental consulting, helping companies reduce their impact on nature. I'd also like to improve my English and maybe learn a third language, such as German. On a personal level, I want to travel more, stay healthy and keep close relationships with my family and friends, even if I move to another city or country.",
        },
      ],
    },
  },
};
