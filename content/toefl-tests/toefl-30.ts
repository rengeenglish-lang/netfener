import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 30 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_30: ToeflTest = {
  id: "toefl-30",
  no: 30,
  title: "TOEFL iBT Practice Test 30",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Matches",
          text: "For thousands of years, starting a fire was slow and difficult. People rubbed sticks toge{{ther}} or struck stones to make spar{{ks}}. In 1826, an English chemist named John Walker accidentally discovered that a stick cove{{red}} with certain chemicals caught fire when it was scrat{{ched}} against a rough surface. His matches were useful but sometimes dange{{rous}}, because they could light by accid{{ent}}. Later, inventors created safety matches, which light only when struck on a spe{{cial}} strip on the bo{{x}}. These matches quickly beca{{me}} com{{mon}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Concert cancelled",
          text: [
            "Bad news! The band just announced that tonight's concert is cancelled because the singer is sick.",
            "They'll refund our tickets automatically within five days. Do you still want to meet for dinner instead? I know a good Thai place near the station.",
          ],
          questions: [
            { text: "Why was the concert cancelled?", options: ["bad weather", "the singer is sick", "low ticket sales", "a problem with the venue"], answer: 1 },
            { text: "What does the writer suggest?", options: ["going to another concert", "meeting for dinner instead", "asking for a refund in person", "staying at home"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Wellness week",
          text: [
            "STUDENT WELLNESS WEEK – MARCH 10–14",
            "Join free activities designed to help you relax and stay healthy during the busy middle of the semester. Events include morning yoga, cooking demonstrations, a mental health workshop and therapy dog visits in the library.",
            "No registration is required for most activities, but places in the cooking demonstrations are limited and must be booked in advance on the wellness website.",
          ],
          questions: [
            { text: "What is the purpose of Wellness Week?", options: ["to raise money", "to help students relax and stay healthy", "to prepare students for exams", "to welcome new students"], answer: 1 },
            { text: "Where will the therapy dogs be?", options: ["in the gym", "in the library", "in the dining hall", "outside the main gate"], answer: 1 },
            { text: "Which activity must be booked in advance?", options: ["morning yoga", "the mental health workshop", "the cooking demonstrations", "therapy dog visits"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "Why the Moon has craters",
          paragraphs: [
            "Looking at the Moon through a telescope, one sees a surface covered with circular depressions of every size, from tiny pits to basins hundreds of kilometers wide. In the seventeenth century, when Galileo first observed them, many people assumed that these craters were volcanic. Today, scientists know that almost all of them were formed by impacts from asteroids and comets.",
            "When an object strikes the Moon at high speed, often more than ten kilometers per second, its energy is released almost instantly in an explosion. The explosion blasts out a bowl-shaped crater much larger than the impacting object and throws rock and dust across the surrounding surface. Large impacts can produce craters with central peaks and long bright streaks, called rays, that extend for hundreds of kilometers.",
            "Earth has been struck by similar objects, but most of its craters have disappeared. Wind, water and the movement of the Earth's crust gradually erode and bury them, and plants cover the land. The Moon, by contrast, has no atmosphere, no flowing water and very little geological activity, so its craters can survive for billions of years. As a result, the Moon's surface serves as a record of the history of impacts in the inner solar system, which scientists have used to estimate the ages of surfaces on other planets.",
          ],
          questions: [
            { text: "According to paragraph 1, what did many people in Galileo's time believe about the craters?", options: ["They were formed by impacts.", "They were volcanic.", "They were lakes.", "They were built by people."], answer: 1 },
            { text: "The word \"depressions\" in paragraph 1 is closest in meaning to", options: ["hollows", "mountains", "shadows", "rivers"], answer: 0 },
            { text: "According to paragraph 2, why are craters larger than the objects that create them?", options: ["The Moon's surface is soft.", "The impact releases energy in an explosion.", "The objects break into many pieces before landing.", "Craters grow over time."], answer: 1 },
            { text: "Why have most craters on Earth disappeared?", options: ["Earth is struck less often.", "Erosion, crust movement and plants have hidden them.", "Earth's craters are smaller.", "People have filled them in."], answer: 1 },
            { text: "How do scientists use the Moon's craters?", options: ["to predict eclipses", "as a record of impacts to estimate the ages of surfaces", "to measure the Moon's temperature", "to locate water"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My favorite food",
          text: "My favorite food is my grandmother's soup. She makes it with lentils, onions and car{{rots}}. Every winter, when the weather is co{{ld}}, she cooks a big p{{ot}} of it. The whole house smells won{{derful}}. We eat the soup with fresh br{{ead}} and a little lemon. My grandmother says the rec{{ipe}} came from her own mot{{her}}. Last month, she taught me how to ma{{ke}} it. Now I can cook it for my frie{{nds}} too, but it is never as go{{od}} as hers.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Lost cat",
          text: [
            "LOST CAT – PLEASE HELP!",
            "Our gray cat, Duman, has been missing since Monday evening from the area near Oak Street. He is very friendly and wears a blue collar with a small bell.",
            "If you see him, please do not try to catch him, as he may run away. Call us at 555-0199 at any time. Reward offered.",
          ],
          questions: [
            { text: "When did the cat go missing?", options: ["on Sunday morning", "on Monday evening", "last week", "on Friday night"], answer: 1 },
            { text: "What does the cat wear?", options: ["a red collar", "a blue collar with a small bell", "a name tag only", "nothing"], answer: 1 },
            { text: "What should people do if they see the cat?", options: ["catch him", "call the owners", "feed him", "take him to a vet"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why bread rises",
          paragraphs: [
            "Most bread is made from flour, water, salt and yeast. Yeast is a tiny living organism, a kind of fungus.",
            "When bakers mix the ingredients and leave the dough in a warm place, the yeast eats the sugars in the flour. As it does this, it produces a gas called carbon dioxide.",
            "The gas forms small bubbles that get trapped in the dough, making it grow bigger. When the bread is baked, the heat kills the yeast, and the bubbles leave holes that make the bread light and soft.",
          ],
          questions: [
            { text: "What is yeast?", options: ["a type of flour", "a tiny living organism", "a kind of salt", "a machine for baking"], answer: 1 },
            { text: "What does yeast eat?", options: ["salt", "the sugars in flour", "water", "carbon dioxide"], answer: 1 },
            { text: "The word \"trapped\" in paragraph 3 is closest in meaning to", options: ["held inside", "released", "destroyed", "heated"], answer: 0 },
            { text: "Why does the dough grow bigger?", options: ["Bakers add more flour.", "Gas bubbles get trapped in it.", "Water turns into steam.", "The salt expands."], answer: 1 },
            { text: "What happens to the yeast when the bread is baked?", options: ["It grows faster.", "It is killed by the heat.", "It turns into sugar.", "It leaves the bread."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The availability heuristic",
          text: "When people judge how likely an event is, they often rely on how easily examples come to mi{{nd}}. Psychologists call this mental shortcut the availability heuri{{stic}}. For example, after news reports of a plane cra{{sh}}, many people overestimate the risk of flying, even though statistically it is far safer than driv{{ing}}. Dramatic or recent events are easier to reme{{mber}}, so they seem more com{{mon}} than they actually are. This bias can affect personal deci{{sions}} as well as public pol{{icy}}, when governments respond to highly visi{{ble}} risks while igno{{ring}} more serious ones.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to the campus bike-share program",
          text: [
            "To: All students and staff",
            "From: Office of Sustainability",
            "Subject: Bike-share program – new rules and electric bikes",
            "From April 1, the campus bike-share program will include thirty new electric bikes in addition to the existing regular bikes. Regular bikes will remain free for the first 30 minutes of each ride, while electric bikes will cost $0.10 per minute. Both types can be unlocked using the campus mobile app.",
            "Bikes must be returned to an official docking station. Users who leave bikes elsewhere will be charged a $20 relocation fee. To encourage safety, users who complete a short online cycling safety course will receive five free hours of electric bike use.",
          ],
          questions: [
            { text: "What is new in the bike-share program?", options: ["Regular bikes will cost money.", "Electric bikes will be added.", "Bikes will be removed from campus.", "Bikes can be kept overnight."], answer: 1 },
            { text: "What happens if users leave bikes outside a docking station?", options: ["They lose their account.", "They pay a $20 relocation fee.", "They receive a warning only.", "Nothing happens."], answer: 1 },
            { text: "How can users get free electric bike time?", options: ["by riding every day", "by completing an online safety course", "by inviting friends", "by buying a monthly pass"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The disappearance of the Aral Sea",
          paragraphs: [
            "In the middle of the twentieth century, the Aral Sea, located between Kazakhstan and Uzbekistan, was the fourth-largest lake in the world. It supported a thriving fishing industry, and towns along its shores depended on it for work and food. Within a few decades, however, it shrank to a small fraction of its former size, in what has been described as one of the worst environmental disasters caused by human activity.",
            "The cause lay far from the lake itself. Beginning in the 1960s, Soviet planners diverted much of the water from the two rivers that fed the Aral Sea, the Amu Darya and the Syr Darya, to irrigate vast cotton fields in the surrounding desert. Many irrigation canals were poorly built and lost large amounts of water through leaks and evaporation. With little river water reaching it, the lake began to shrink rapidly, and its water became increasingly salty, killing most of its fish.",
            "The consequences were severe. Fishing towns found themselves many kilometers from the shore, with abandoned ships lying in the sand. Winds picked up salt and chemical residues from the exposed lake bed and spread them across the region, harming crops and, according to many studies, the health of local residents. In the early 2000s, Kazakhstan built a dam to separate and preserve the northern part of the lake, and water levels and fish populations there have partly recovered, but the larger southern part remains largely dry.",
          ],
          questions: [
            { text: "According to paragraph 1, what was the Aral Sea like in the mid-twentieth century?", options: ["a small, salty pond", "one of the largest lakes in the world", "a dry desert", "an artificial reservoir"], answer: 1 },
            { text: "The word \"diverted\" in paragraph 2 is closest in meaning to", options: ["redirected", "cleaned", "stored", "blocked completely"], answer: 0 },
            { text: "According to paragraph 2, why did the lake shrink?", options: ["Rainfall increased.", "River water was diverted to irrigate cotton fields.", "An earthquake drained it.", "Fishing industries used too much water."], answer: 1 },
            { text: "What effect did winds have on the region?", options: ["They spread salt and chemicals from the lake bed.", "They brought rain to the lake.", "They cooled the climate.", "They pushed ships back into the water."], answer: 0 },
            { text: "What happened after Kazakhstan built a dam?", options: ["The whole lake recovered.", "The northern part partly recovered.", "The southern part became a forest.", "The dam caused the lake to disappear."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Burak", prompt: "Why are you smiling?", chunks: ["my sister", "just", "had", "a baby", "girl"], end: "." },
      { promptBy: "Kate", prompt: "Have you booked the hotel yet?", chunks: ["I", "booked", "a room", "with", "a sea view"], end: "." },
      { promptBy: "Nihan", prompt: "I always lose my keys.", chunks: ["why don't", "you", "put a hook", "next to", "the door"], end: "?" },
      { promptBy: "Owen", prompt: "Where should we meet tomorrow?", chunks: ["let's", "meet", "in front of", "the old", "clock tower"], end: "." },
      { promptBy: "Ezgi", prompt: "How was your weekend in the mountains?", chunks: ["it", "snowed", "the whole", "time", "we were there"], end: "." },
      { promptBy: "Liam", prompt: "Why are the trains delayed?", chunks: ["a tree", "fell", "on the tracks", "during", "the storm"], end: "." },
      { promptBy: "Sinem", prompt: "When is the deadline for applications?", chunks: ["you", "must", "apply", "before", "the end of May"], end: "." },
      { promptBy: "Jack", prompt: "What did the coach say after the game?", chunks: ["he", "was", "proud", "of", "our effort"], end: "." },
      { promptBy: "Aslı", prompt: "The music next door is too loud.", chunks: ["should", "we", "ask", "the neighbors", "to turn it down"], end: "?" },
      { promptBy: "Henry", prompt: "Why did you choose to study history?", chunks: ["I", "find", "the past", "really", "fascinating"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your university newspaper is looking for students to write regular articles. You would like to write a weekly column.",
      to: "the editor of the university newspaper",
      subject: "Proposal for a weekly column",
      tasks: ["Introduce yourself and explain why you want to write for the newspaper.", "Describe the topic of the column you would like to write.", "Explain why you think students would be interested."],
      sample: "Dear Editor,\n\nMy name is Duru Aydemir, and I am a second-year student in the Department of Economics. I read your announcement looking for new writers, and I would very much like to contribute to the newspaper. I have always enjoyed writing, and last year I ran a small blog about student life that attracted several hundred regular readers.\n\nI would like to propose a weekly column called 'Student Budget', which would offer practical advice on managing money as a student. Each week, I would focus on a different topic, such as finding affordable housing, cooking cheap but healthy meals, understanding scholarships and avoiding common financial mistakes. I would also interview students and local businesses to include real experiences and tips.\n\nI believe the column would be popular because money is one of the biggest sources of stress for students, yet few of us have ever received advice on how to manage it. Practical, honest guidance from another student could make a real difference.\n\nThank you for considering my proposal. I would be happy to send a sample column.\n\nBest regards,\nDuru Aydemir",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Architecture",
      professor: {
        name: "Dr. Kowalski",
        text: "Some cities preserve their historic buildings strictly, so that old neighborhoods keep their traditional appearance. Others allow modern buildings to be constructed alongside or even in place of older ones. Is it more important for cities to preserve historic buildings or to allow modern development? Why?",
      },
      students: [
        { name: "Charlotte", text: "Preservation matters more. Historic buildings give a city its identity and attract tourists. Once they are demolished, they can never be replaced." },
        { name: "Efe", text: "Cities need to change to meet modern needs, like more housing and better infrastructure. Keeping every old building can make cities expensive and difficult to live in." },
      ],
      sample: "I think cities should protect their most valuable historic buildings while allowing careful modern development around them. Charlotte is right that historic architecture gives a city its character. The old quarters of cities such as Prague or Istanbul attract millions of visitors precisely because they preserve a sense of history that new buildings cannot recreate. However, Efe makes an important point about the needs of residents. If every old building is protected, housing becomes scarce and expensive, and cities may struggle to install modern infrastructure. The best approach is selective: protect buildings of real historical or architectural importance, but allow new construction elsewhere, with design rules that ensure new buildings fit in with their surroundings. Old buildings can also be adapted for new uses, such as turning former factories into apartments or cultural centers, which preserves heritage while meeting modern needs.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are working at the help desk of a university computer lab. A technician is telling you what to say to students.",
      sentences: [
        "Welcome to the computer lab.",
        "Please log in with your student account.",
        "Printing costs ten cents per page.",
        "Save your work to the cloud before you leave.",
        "The lab is open until midnight during the exam period.",
        "If a computer is not working, please write the number on the form at the front desk.",
        "Students who need special software for their courses can request it by filling out an online form at least one week in advance.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about history and the past. The researcher will ask you some questions.",
      questions: [
        {
          text: "Is there a period of history that you find especially interesting? Why?",
          sample: "I'm especially interested in the late Ottoman period, in the nineteenth and early twentieth centuries. It was a time of huge change, with new technologies like railways and the telegraph, new ideas about government and education, and many difficult political challenges. Many things in modern Turkey, from architecture to institutions, have roots in that period. I also enjoy reading memoirs from that time, because they show how ordinary people experienced those changes.",
        },
        {
          text: "Did you enjoy history lessons at school? Why or why not?",
          sample: "Honestly, I didn't enjoy them very much at school. The lessons focused mainly on memorizing dates, wars and names of rulers, and we rarely discussed why events happened or how people lived. It was only later, when I watched documentaries and read historical novels, that I realized how fascinating history can be. I think if my teachers had used more stories, visits to museums and discussions, I would have enjoyed the subject much more.",
        },
        {
          text: "Some people think that it is important for everyone to learn about history. Do you agree?",
          sample: "Yes, I strongly agree. History helps us understand why the world is the way it is today, including the origins of countries, conflicts and cultural traditions. It also teaches us to evaluate evidence and to see events from different perspectives, which are valuable skills in a world full of misinformation. Most importantly, learning about past mistakes can help societies avoid repeating them, although unfortunately that doesn't always happen.",
        },
        {
          text: "How do you think people in the future will remember our time?",
          sample: "I think people in the future will remember our time as the period when the internet and artificial intelligence transformed almost every part of life. They'll probably also see it as the time when climate change became impossible to ignore, and they may judge us by how seriously we responded to it. Interestingly, they will have enormous amounts of information about us, from photos and videos to social media posts, so they might know our daily lives in great detail.",
        },
      ],
    },
  },
};
