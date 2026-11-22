import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 46 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_46: ToeflTest = {
  id: "toefl-46",
  no: 46,
  title: "TOEFL iBT Practice Test 46",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Scissors",
          text: "Scissors are among the oldest cutting tools still in daily use. The earliest known scissors were made in ancient Egypt about three thousand five hundred ye{{ars}} ago. They consisted of a single piece of met{{al}} bent so that two blades met at the e{{nd}}. Around two thousand years ago, the Romans developed scissors with two separate blades joined by a pi{{vot}}, which is the design we still use to{{day}}. For centuries, scissors were made by hand and were quite expen{{sive}}. In the eighteenth century, an English manufacturer began producing them in large quan{{tities}} from hardened ste{{el}}. Modern scissors are made in many sha{{pes}} for special purposes, such as cutting hair, fabric or pa{{per}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Returning a borrowed book",
          text: [
            "Hi Leyla, I finished the novel you lent me last month. I loved the ending! I'd like to return it, but I won't be on campus until next Thursday.",
            "Is it okay if I leave it with your roommate tomorrow instead? She said she'll be home after 5.",
          ],
          questions: [
            { text: "What does the writer want to do?", options: ["return a borrowed novel", "borrow another book", "buy Leyla a gift", "join a book club"], answer: 0 },
            { text: "What does the writer suggest?", options: ["leaving the book with Leyla's roommate", "mailing the book", "keeping the book until Thursday", "leaving the book in the library"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Locker cleanout",
          text: [
            "SPORTS CENTER LOCKER CLEANOUT",
            "All lockers in the sports center changing rooms must be emptied by Friday, June 20, for annual cleaning and repairs.",
            "Any items left in lockers after this date will be removed and stored at the front desk for two weeks. Items not collected within that time will be donated or thrown away. Locker rentals for the new academic year will begin on September 1.",
          ],
          questions: [
            { text: "Why must lockers be emptied?", options: ["for annual cleaning and repairs", "because the sports center is closing", "because lockers will be sold", "for a security check"], answer: 0 },
            { text: "What happens to items left in lockers after June 20?", options: ["They are removed and stored for two weeks.", "They are thrown away immediately.", "They are mailed to the owners.", "They remain in the lockers."], answer: 0 },
            { text: "When will locker rentals for the new year begin?", options: ["September 1", "June 20", "two weeks after June 20", "next January"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How satellites stay in orbit",
          paragraphs: [
            "Thousands of artificial satellites now circle the Earth, providing services such as weather forecasting, communication, television broadcasting and navigation. A common question is why these satellites do not simply fall back to the ground. The answer lies in a balance between the satellite's speed and the pull of Earth's gravity.",
            "Imagine throwing a ball horizontally from the top of a very tall mountain. The ball follows a curved path and falls to the ground some distance away. If it were thrown faster, it would travel farther before landing. Because the Earth's surface is curved, an object launched fast enough would fall toward the Earth at the same rate that the surface curves away beneath it. In other words, the object would keep falling but never reach the ground. This continuous falling around the planet is what we call an orbit. For a satellite in low orbit, this requires a speed of nearly eight kilometers per second.",
            "Satellites are placed in different orbits depending on their purpose. Those in low Earth orbit, a few hundred kilometers above the surface, travel around the planet in about ninety minutes and are useful for detailed observation. Much higher, at about thirty-six thousand kilometers, a satellite takes exactly one day to complete an orbit, so it appears to stay above the same point on the Earth. These geostationary satellites are ideal for communication and weather monitoring. Satellites in low orbit gradually slow down because of friction with the thin upper atmosphere, and without occasional boosts they eventually fall back and burn up.",
          ],
          questions: [
            { text: "According to paragraph 1, what keeps satellites from falling back to the ground?", options: ["a balance between their speed and gravity", "large engines that run constantly", "the lack of gravity in space", "strong winds"], answer: 0 },
            { text: "According to paragraph 2, what is an orbit?", options: ["continuous falling around the planet without reaching the ground", "a straight path away from Earth", "a path that ends on the Moon", "a fixed position in space"], answer: 0 },
            { text: "Why does a geostationary satellite appear to stay above the same point?", options: ["It takes exactly one day to complete an orbit.", "It does not move at all.", "It is attached to a tower.", "It moves faster than the Earth's surface."], answer: 0 },
            { text: "The word \"ideal\" in paragraph 3 is closest in meaning to", options: ["perfectly suitable", "expensive", "dangerous", "unusual"], answer: 0 },
            { text: "According to paragraph 3, why do satellites in low orbit eventually fall?", options: ["Friction with the upper atmosphere slows them down.", "Gravity becomes stronger over time.", "They run out of batteries.", "The Sun pulls them away."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Learning to cook rice",
          text: "Last month, my mother taught me how to cook ri{{ce}}. First, she showed me how to wash it in cold wa{{ter}} until the water became cle{{ar}}. Then we put the rice in a pot with a little but{{ter}} and salt. My mother said the most important th{{ing}} is to use the right amount of water. We cooked it on low he{{at}} for fifteen minutes without opening the l{{id}}. When it was ready, the rice smelled won{{derful}}. Now I cook rice for my family every Fri{{day}}, and my father says it is even better than my mother's, but I think he is jok{{ing}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Wool knitting club",
          text: [
            "KNIT WITH US!",
            "The Knitting Club meets every Thursday evening from 6 to 8 at the Green Street Café. Beginners and experienced knitters are all welcome.",
            "Bring your own needles and wool, or buy a starter kit from us for $15. Every winter, club members knit hats and scarves for a local children's charity.",
          ],
          questions: [
            { text: "Where does the club meet?", options: ["at the Green Street Café", "at a school", "at the library", "at a member's home"], answer: 0 },
            { text: "What can people buy from the club?", options: ["a starter kit for $15", "coffee and cake", "finished scarves", "knitting books"], answer: 0 },
            { text: "What do club members do every winter?", options: ["knit hats and scarves for a children's charity", "hold a competition", "take a trip abroad", "close the club"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why bananas turn brown",
          paragraphs: [
            "When you buy bananas, they are usually yellow. After a few days, brown spots appear, and soon the whole banana may turn brown.",
            "Bananas continue to ripen after they are picked. As they ripen, they produce a gas called ethylene. This gas makes the fruit softer and sweeter, and it also breaks down the yellow color in the skin.",
            "If you keep bananas next to other fruit, the gas can make the other fruit ripen faster, too. Putting bananas in the refrigerator makes the skin turn brown quickly, but the fruit inside stays fresh for longer.",
          ],
          questions: [
            { text: "What color are bananas usually when you buy them?", options: ["yellow", "brown", "red", "black"], answer: 0 },
            { text: "What do bananas produce as they ripen?", options: ["a gas called ethylene", "water", "oil", "seeds"], answer: 0 },
            { text: "The word \"ripen\" in paragraph 2 is closest in meaning to", options: ["become ready to eat", "become smaller", "freeze", "grow on trees"], answer: 0 },
            { text: "What can happen to other fruit kept next to bananas?", options: ["It can ripen faster.", "It can stay green.", "It can become sour.", "It can grow bigger."], answer: 0 },
            { text: "What happens when bananas are kept in the refrigerator?", options: ["The skin turns brown, but the fruit inside stays fresh longer.", "They become yellow again.", "They ripen much faster inside.", "They stop changing completely."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Social proof",
          text: "When people are uncertain about how to behave, they often look at what others are do{{ing}}. Psychologists call this social proof. For example, a restaurant with a long que{{ue}} outside may seem more attractive than an empty one, even if passersby know noth{{ing}} about the food. In one well-known experiment, hotel guests were more likely to reuse their tow{{els}} when a sign said that most previous guests had do{{ne}} so than when the sign simply asked them to help the environ{{ment}}. Marketers use social proof through customer rev{{iews}} and phrases such as \"best-selling\". However, social proof can also lead people to fol{{low}} the crowd in harm{{ful}} ways, especially in emer{{gencies}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Summer research assistantships",
          text: [
            "To: Undergraduate students in the natural sciences",
            "From: Office of Undergraduate Research",
            "Subject: Applications open for summer research assistantships",
            "Each summer, the university funds forty undergraduate research assistantships, allowing students to work full-time for ten weeks on a faculty member's research project. Assistants receive a stipend of $4,000 and free on-campus housing for the duration of the program.",
            "Applicants should first contact a faculty member whose research interests them and agree on a project. The application, which includes a project description and a letter of support from the faculty member, is due on February 28. Priority will be given to students who have not previously held an assistantship. At the end of the summer, all assistants must present their work at a poster session.",
          ],
          questions: [
            { text: "What do research assistants receive?", options: ["a stipend and free on-campus housing", "course credit only", "a full scholarship", "a laptop"], answer: 0 },
            { text: "What should applicants do first?", options: ["contact a faculty member and agree on a project", "submit their transcript", "pay an application fee", "attend an interview"], answer: 0 },
            { text: "Who will be given priority?", options: ["students who have not previously held an assistantship", "graduate students", "students with the highest grades", "students from other universities"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Gentrification and changing neighborhoods",
          paragraphs: [
            "Gentrification refers to the process by which a lower-income urban neighborhood attracts wealthier residents and businesses, leading to rising property values and changes in the area's character. The process often begins when artists, students and young professionals, attracted by low rents and interesting old buildings, move into a neighborhood. New cafés, galleries and shops follow, and the area gains a reputation as a fashionable place to live.",
            "Supporters of gentrification point to its benefits. Investment can lead to the renovation of neglected buildings, improved public spaces and lower crime rates. Local governments may collect more tax revenue, which can fund better schools and services. Long-time homeowners can also benefit as the value of their property rises.",
            "Critics, however, emphasize the costs, particularly for long-time residents who rent their homes. As property values increase, landlords often raise rents, and many low-income residents are forced to move to cheaper areas, sometimes far from their jobs, schools and social networks. Small local businesses may also be replaced by more expensive shops aimed at newcomers. Over time, a neighborhood's cultural identity can change dramatically. Cities have tried various measures to address these problems, such as rent controls, requirements that new developments include affordable housing and programs to support local businesses, but there is ongoing debate about how effective these measures are.",
          ],
          questions: [
            { text: "According to paragraph 1, how does gentrification often begin?", options: ["Artists, students and young professionals move in because of low rents.", "Large companies build factories in the area.", "The government demolishes old buildings.", "Wealthy families move out of the area."], answer: 0 },
            { text: "According to paragraph 2, how can long-time homeowners benefit from gentrification?", options: ["The value of their property rises.", "Their rents decrease.", "They receive free services.", "They are given new houses."], answer: 0 },
            { text: "The word \"neglected\" in paragraph 2 is closest in meaning to", options: ["poorly cared for", "newly built", "very expensive", "crowded"], answer: 0 },
            { text: "According to paragraph 3, why are many low-income renters forced to move?", options: ["Landlords raise rents as property values increase.", "They are offered better jobs elsewhere.", "Their buildings are declared unsafe.", "They prefer quieter areas."], answer: 0 },
            { text: "What does the author suggest about measures to address the problems of gentrification?", options: ["Their effectiveness is still debated.", "They have completely solved the problems.", "They have never been tried.", "They only benefit newcomers."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Mert", prompt: "Why are you leaving work early today?", chunks: ["I", "have to", "pick up", "my daughter", "from school"], end: "." },
      { promptBy: "Julia", prompt: "Was the museum interesting?", chunks: ["the dinosaur", "exhibition", "was", "absolutely", "fascinating"], end: "." },
      { promptBy: "Canan", prompt: "I can never wake up on time.", chunks: ["why don't", "you", "put", "your alarm", "across the room"], end: "?" },
      { promptBy: "Mike", prompt: "How long did the repairs take?", chunks: ["the mechanic", "fixed", "the car", "in", "two hours"], end: "." },
      { promptBy: "Feride", prompt: "Where should I park my car?", chunks: ["there is", "free parking", "behind", "the main", "building"], end: "." },
      { promptBy: "Steve", prompt: "Why is everyone wearing jackets?", chunks: ["the air", "conditioning", "is", "set", "too low"], end: "." },
      { promptBy: "Gül", prompt: "What did you think of the speech?", chunks: ["it", "was", "inspiring", "but", "a little long"], end: "." },
      { promptBy: "Bill", prompt: "When are you going to visit Japan?", chunks: ["we", "are planning", "to go", "in", "early spring"], end: "." },
      { promptBy: "Nesrin", prompt: "I need to send this package today.", chunks: ["do you", "know", "when", "the post office", "closes"], end: "?" },
      { promptBy: "Carl", prompt: "Why did you start volunteering?", chunks: ["I", "wanted to", "give", "something back", "to my community"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a member of a university orchestra. The orchestra's rehearsal room is often cold and noisy because of construction work nearby. You want to write to the music department administrator.",
      to: "the music department administrator, Ms. Grant",
      subject: "Problems with the rehearsal room",
      tasks: ["Explain your role in the orchestra.", "Describe the problems with the rehearsal room.", "Suggest a solution."],
      sample: "Dear Ms. Grant,\n\nI play the cello in the university orchestra, and I am also the student representative for the string section. I am writing on behalf of several members about the conditions in Room 105, where we rehearse every Monday and Wednesday evening.\n\nSince the construction work began next door, rehearsals have become very difficult. The drilling and hammering often continue until 7 p.m., so for the first hour we can hardly hear the conductor or each other. In addition, the room has been very cold, probably because some windows were removed for the construction. Cold temperatures affect our instruments as well as our fingers, and several string players have had to retune constantly.\n\nWould it be possible to move our rehearsals temporarily to the recital hall or another room in the music building until the construction work is finished? If that is not possible, perhaps the rehearsals could start an hour later, after the work has stopped for the day.\n\nThank you for your help.\n\nKind regards,\nDeniz Uysal",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Psychology",
      professor: {
        name: "Dr. Allen",
        text: "Some schools have introduced daily mindfulness sessions, in which students spend ten minutes sitting quietly and focusing on their breathing. Supporters claim this reduces stress and improves concentration. Others argue that the time would be better spent on academic subjects or physical exercise. Should schools include mindfulness sessions in the daily schedule? Explain your view.",
      },
      students: [
        { name: "Olivia", text: "Yes. Students today are under a lot of pressure, and ten minutes of calm can help them focus better for the rest of the day." },
        { name: "Burak", text: "I'm skeptical. Many students would just be bored. Physical exercise is a more effective way to reduce stress, and it has health benefits too." },
      ],
      sample: "I think schools should include short mindfulness sessions, but they should be offered alongside, not instead of, physical activity. Olivia is right that many students experience high levels of stress from exams, social pressure and constant use of their phones. Research suggests that regular mindfulness practice can help people manage anxiety and improve attention, and a ten-minute session costs very little time. However, Burak makes a fair point that not every student will benefit equally, and some may find it boring if it is forced on them. Exercise is also an excellent way to reduce stress. A good compromise would be to introduce mindfulness as a short, optional activity at the start of the day, while making sure that students also have enough time for sports and outdoor play.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are starting a summer job at a theme park. Your supervisor is explaining what to tell visitors at a ride.",
      sentences: [
        "Welcome to the roller coaster.",
        "Please keep your bags in the lockers.",
        "Riders must be at least 140 centimeters tall.",
        "Keep your hands inside the car at all times.",
        "Please remove your glasses and hats before the ride begins.",
        "If you feel unwell during the ride, raise your hand at the end so that a staff member can help you.",
        "Photos of the ride are available at the exit, and you can buy them printed or send them directly to your phone using the code on your ticket.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about education and learning. The researcher will ask you some questions.",
      questions: [
        {
          text: "What was your favorite subject at school, and why?",
          sample: "My favorite subject at school was biology. I loved learning about how living things work, from tiny cells to whole ecosystems. My teacher made the lessons really interesting by taking us outside to study plants and insects, and by doing experiments in the lab. I think biology helped me understand my own body and the natural world better, and it's one of the reasons I decided to study environmental science at university.",
        },
        {
          text: "Do you think homework is necessary for students?",
          sample: "I think some homework is necessary, but it shouldn't be too much. Homework helps students practice what they learned in class and develop the habit of working independently. However, if students have several hours of homework every night, they don't have enough time to rest, play sports or spend time with family, which are also important for their development. I think short, meaningful assignments are much better than long, repetitive ones.",
        },
        {
          text: "Should university education be free for everyone?",
          sample: "I believe university education should be free or at least very affordable, because it gives people the chance to improve their lives regardless of their family's income. Society also benefits when more people are well educated, through better jobs, innovation and higher tax revenue. However, free education is very expensive for governments, so it may be necessary to limit it to certain programs, or to ask graduates with high incomes to contribute later through taxes.",
        },
        {
          text: "How do you think classrooms will be different in twenty years?",
          sample: "In twenty years, I think classrooms will be much more digital and personalized. Students might use artificial intelligence tutors that adapt lessons to their individual level and learning speed. Virtual reality could allow students to visit historical places or explore the human body in three dimensions. However, I hope teachers will still play a central role, because they can motivate students, guide discussions and help them develop social skills that technology cannot teach.",
        },
      ],
    },
  },
};
