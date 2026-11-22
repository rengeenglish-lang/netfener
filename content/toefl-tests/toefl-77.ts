import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 77 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_77: ToeflTest = {
  id: "toefl-77",
  no: 77,
  title: "TOEFL iBT Practice Test 77",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Jigsaw puzzles",
          text: "The first jigsaw puzzles were not made for entertainment. In the 1760s, a London mapmaker named John Spilsbury glued a map onto a thin piece of wo{{od}} and cut it along the borders of the coun{{tries}}. Children could then learn geography by putting the pie{{ces}} back together. These early puzzles were expensive, because each one was cut by ha{{nd}}. In the early twentieth century, puzzles for adults became fashion{{able}}, and companies began to print pictures of landscapes and famous pain{{tings}} on them. During the economic difficulties of the 1930s, cheap cardboard puzzles became very popu{{lar}}, since they offered hours of entertainment at a low pr{{ice}}. Today, some puzzles have thousands of pieces, and people enjoy solving them alone or with fri{{ends}} and fam{{ily}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Ordering pizza for the group",
          text: [
            "Hi team, we'll probably work late on the project tonight, so I'm going to order pizza for everyone at around 7.",
            "Please reply by 5 p.m. and tell me which kind you want. There'll be a vegetarian option. It's about $6 each, and you can pay me back tomorrow.",
          ],
          questions: [
            { text: "Why is the writer ordering pizza?", options: ["The team will probably work late.", "It is someone's birthday.", "The office café is closed.", "They won a competition."], answer: 0 },
            { text: "What should team members do by 5 p.m.?", options: ["reply with the kind of pizza they want", "pay $6", "finish the project", "go home"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Accessible entrance closed",
          text: [
            "TEMPORARY CLOSURE: EAST ENTRANCE RAMP",
            "The wheelchair ramp at the east entrance of the Student Center is closed for repairs until Friday, November 14.",
            "During this time, please use the step-free entrance on the north side of the building, next to the bicycle racks. Staff at the information desk can also provide assistance. We apologize for the inconvenience and thank you for your patience.",
          ],
          questions: [
            { text: "What is closed?", options: ["the wheelchair ramp at the east entrance", "the entire Student Center", "the bicycle racks", "the information desk"], answer: 0 },
            { text: "Which entrance should people use instead?", options: ["the step-free entrance on the north side", "the east entrance stairs", "the back door of the library", "the parking garage"], answer: 0 },
            { text: "Who can provide assistance?", options: ["staff at the information desk", "security guards only", "students", "the bicycle shop"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The rock-cut city of Petra",
          paragraphs: [
            "Hidden among the desert mountains of southern Jordan lies Petra, one of the most remarkable archaeological sites in the world. Visitors approach the city through a narrow canyon, more than a kilometer long, whose walls rise up to eighty meters high. At the end of the canyon, they suddenly see the Treasury, a magnificent building whose elaborate facade has been carved directly into the pink sandstone cliff.",
            "Petra was the capital of the Nabataeans, an Arab people who grew wealthy by controlling trade routes between Arabia, Egypt and the Mediterranean world. Caravans carrying valuable goods, such as incense, spices and textiles, passed through the city, and the Nabataeans collected taxes and provided water and protection. At its height, around the first century, Petra may have been home to tens of thousands of people.",
            "One of the Nabataeans' greatest achievements was their system of water management. Although the region receives very little rain, they built dams, channels and underground cisterns to collect and store water from rare storms and from springs, allowing the city to flourish in the desert. Petra declined after the Romans took control of the region and trade routes shifted, and earthquakes later damaged many buildings. For centuries, the city was known only to local people, until a Swiss explorer visited it in 1812 and described it to Europeans. Today it is a World Heritage site and one of Jordan's most popular tourist destinations.",
          ],
          questions: [
            { text: "According to paragraph 1, how do visitors approach Petra?", options: ["through a narrow canyon", "by boat", "by crossing a bridge", "through a tunnel under the city"], answer: 0 },
            { text: "The word \"elaborate\" in paragraph 1 is closest in meaning to", options: ["detailed and complex", "plain", "small", "modern"], answer: 0 },
            { text: "According to paragraph 2, how did the Nabataeans become wealthy?", options: ["by controlling trade routes", "by mining gold", "by farming", "by fishing"], answer: 0 },
            { text: "According to paragraph 3, how did the Nabataeans obtain water?", options: ["They built dams, channels and cisterns to collect and store water.", "They imported water from Egypt.", "They dug deep wells only.", "It rained frequently."], answer: 0 },
            { text: "Which of the following contributed to Petra's decline?", options: ["Roman control and shifting trade routes", "a lack of tourists", "a flood", "a war with Egypt"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Building a sandcastle",
          text: "Last summer, my cousin and I built a big sand{{castle}} on the beach. First, we filled our buckets with wet sa{{nd}}. Wet sand is better because it holds its sha{{pe}}. We turned the buckets over to make four tall tow{{ers}}. Then we used our hands to build wa{{lls}} between them. My cousin dug a deep ri{{ng}} around the castle and filled it with sea wa{{ter}}. We decorated the castle with shells and small sto{{nes}}. In the evening, the waves came and slowly washed it aw{{ay}}. We were a little sad, but we promised to build an even bigger one the next d{{ay}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Paper folding for kids",
          text: [
            "FOLD, CREATE AND PLAY!",
            "Children aged 6 to 11 can learn the Japanese art of paper folding at the City Library every Saturday from 11 a.m. to 12 p.m. They will make animals, flowers and boats from colored paper.",
            "The class is free, and all paper is provided. Places are limited to fifteen children, so please register at the children's desk. Parents may stay and join in.",
          ],
          questions: [
            { text: "What will children make?", options: ["animals, flowers and boats from paper", "clay pots", "paintings", "wooden toys"], answer: 0 },
            { text: "How much does the class cost?", options: ["It is free.", "$5", "$10", "$15"], answer: 0 },
            { text: "Where should parents register their children?", options: ["at the children's desk", "online only", "by phone", "at the school"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How jellyfish move",
          paragraphs: [
            "Jellyfish are sea animals with soft bodies shaped like bells or umbrellas. They have no bones, no brain and no heart. Most of their bodies are made of water.",
            "To move, a jellyfish squeezes its bell-shaped body. This pushes water out from under the bell, and the jellyfish moves forward. Then the bell relaxes and opens again, and the jellyfish repeats the movement.",
            "Jellyfish are not strong swimmers, so ocean currents often carry them over long distances. They catch small fish and other tiny animals with their long tentacles, which can sting. Some jellyfish can even glow in the dark.",
          ],
          questions: [
            { text: "What are most of a jellyfish's body made of?", options: ["water", "bones", "muscle", "fat"], answer: 0 },
            { text: "How does a jellyfish move?", options: ["by squeezing its body to push water out", "by flapping fins", "by walking on the sea floor", "by using its tentacles as legs"], answer: 0 },
            { text: "The word \"squeezes\" in paragraph 2 is closest in meaning to", options: ["presses together", "opens wide", "eats", "colors"], answer: 0 },
            { text: "Why are jellyfish often carried over long distances?", options: ["They are not strong swimmers.", "They like to travel.", "Fish carry them.", "They fly."], answer: 0 },
            { text: "What do jellyfish use to catch food?", options: ["their long tentacles", "their teeth", "their bells", "nets"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The rhyme-as-reason effect",
          text: "Sayings that rhyme may seem more truthful than those that do not. In one study, participants read pairs of statements with the same mea{{ning}}, such as \"What sobriety conceals, alcohol reveals\" and \"What sobriety conceals, alcohol unmasks\". On average, participants rated the rhyming ver{{sions}} as more accurate. Researchers call this the rhyme-as-reason ef{{fect}}. One explanation is that rhyming statements are eas{{ier}} for the brain to process, and people tend to confuse ease of proce{{ssing}} with truth. Advertisers and politicians often use short rhyming slo{{gans}} for this reason. However, when participants were warned to focus on mean{{ing}} rather than sound, the effect beca{{me}} weaker, suggesting that care{{ful}} thinking can reduce its influ{{ence}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Last day to drop a course",
          text: [
            "To: All undergraduate students",
            "From: Office of the Registrar",
            "Subject: Reminder – final day to drop courses without a grade",
            "This is a reminder that the last day to drop a course without it appearing on your transcript is Friday, October 3. After this date, students who drop a course will receive a 'W' on their transcript, which does not affect the grade point average but will be visible to future employers and graduate schools.",
            "The final deadline to drop with a 'W' is November 14. Students receiving financial aid should speak with the Financial Aid Office before dropping any course, as reducing your course load may affect your eligibility. International students must also check that they will maintain the minimum number of credits required for their visa.",
          ],
          questions: [
            { text: "What happens if students drop a course after October 3?", options: ["They receive a 'W' on their transcript.", "Their GPA decreases.", "They must pay a large fine.", "Nothing appears on their transcript."], answer: 0 },
            { text: "Who should speak with the Financial Aid Office before dropping a course?", options: ["students receiving financial aid", "all graduate students", "students with high grades", "faculty members"], answer: 0 },
            { text: "What must international students check?", options: ["that they maintain the minimum credits required for their visa", "that their passport is valid", "that their housing is paid", "that they have a job"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The psychology of crowds",
          paragraphs: [
            "For much of the twentieth century, crowds were viewed with suspicion. Influential writers argued that when individuals join a large group, they lose their sense of personal identity and responsibility and become irrational, emotional and easily led. According to this view, crowds turn ordinary people into a mindless mass capable of violence and panic. Such ideas shaped how authorities planned for public events and responded to protests.",
            "More recent research has challenged this picture. Psychologists studying real events, from music festivals to emergencies, have found that people in crowds generally do not lose their ability to think. Instead, they often adopt a shared social identity, seeing themselves as part of a group with common values and goals. This shared identity can guide behavior in positive ways. For example, studies of emergencies such as bombings and fires have found that panic is relatively rare; people frequently help strangers, wait their turn and support those who are injured, because they feel a sense of solidarity with others in the same situation.",
            "This new understanding has practical implications. Crowd safety experts now emphasize that disasters at large events are usually caused not by irrational behavior but by problems with design and management, such as narrow exits, poor communication and overcrowding. When too many people are packed into a space, physical pressure can become dangerous regardless of how calmly individuals behave. Event organizers therefore focus on monitoring crowd density, providing clear information and designing spaces that allow people to move safely. Treating crowds as groups of reasonable people, rather than as dangerous mobs, can also improve relations between authorities and the public.",
          ],
          questions: [
            { text: "According to paragraph 1, how were crowds traditionally viewed?", options: ["as irrational, emotional and easily led", "as calm and organized", "as unimportant", "as always helpful"], answer: 0 },
            { text: "According to paragraph 2, what do people in crowds often adopt?", options: ["a shared social identity", "a completely new personality", "a fear of others", "a leader's opinions"], answer: 0 },
            { text: "The word \"solidarity\" in paragraph 2 is closest in meaning to", options: ["unity and mutual support", "anger", "confusion", "competition"], answer: 0 },
            { text: "According to paragraph 3, what usually causes disasters at large events?", options: ["problems with design and management", "irrational behavior by individuals", "bad weather only", "a lack of police"], answer: 0 },
            { text: "What do event organizers now focus on?", options: ["monitoring crowd density and providing clear information", "preventing people from attending", "using more police force", "making events shorter"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Kemal", prompt: "Why are you carrying a tent?", chunks: ["we", "are going", "camping", "near", "the lake"], end: "." },
      { promptBy: "Chloe", prompt: "Did you like the science museum?", chunks: ["the space", "exhibition", "was", "my", "favorite part"], end: "." },
      { promptBy: "Aylin", prompt: "My plants keep dying.", chunks: ["are you", "giving them", "enough", "light and", "water"], end: "?" },
      { promptBy: "Ethan", prompt: "How did you hear about this café?", chunks: ["I", "read", "a review", "of it", "online"], end: "." },
      { promptBy: "Sude", prompt: "When will the new bridge open?", chunks: ["it", "should", "open", "early", "next year"], end: "." },
      { promptBy: "Jake", prompt: "Why is the beach so empty?", chunks: ["it", "is", "too", "windy", "to swim"], end: "." },
      { promptBy: "Nur", prompt: "What did you think of the lecture?", chunks: ["the speaker", "explained", "everything", "very", "clearly"], end: "." },
      { promptBy: "Steve", prompt: "Where should I put my coat?", chunks: ["you", "can hang it", "behind", "the", "door"], end: "." },
      { promptBy: "Merve", prompt: "I can't find a good book to read.", chunks: ["would you", "like", "to borrow", "one", "of mine"], end: "?" },
      { promptBy: "Gary", prompt: "Why did you decide to move abroad?", chunks: ["I", "got", "a job offer", "in", "Germany"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You belong to a student film club. The club wants to hold a short film festival on campus and needs funding from the student union. You want to write to the student union's funding committee.",
      to: "the student union funding committee",
      subject: "Funding request for a student film festival",
      tasks: ["Introduce the club and the event.", "Explain what the money would be used for.", "Describe how the event would benefit students."],
      sample: "Dear Members of the Funding Committee,\n\nI am writing on behalf of the University Film Club, which has about seventy members who meet weekly to watch, discuss and make films. This spring, we would like to organize the first Campus Short Film Festival, a two-day event in April where students can screen short films they have made and attend workshops with local filmmakers.\n\nWe are requesting $1,500 to support the festival. Most of the money would be used to rent a professional projector and sound system for the main auditorium, as the current equipment is not suitable for large screenings. The remaining funds would cover printing posters, paying small fees to two guest filmmakers and providing prizes for the best films in three categories.\n\nWe believe the festival would benefit students across the university, not only film club members. It would give students a chance to share their creative work with a large audience, learn practical skills from professionals and meet people with similar interests. All screenings and workshops would be free for students. We would be happy to present our plan at your next meeting.\n\nThank you for considering our request.\n\nSincerely,\nAlp Korkmaz",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Economics",
      professor: {
        name: "Dr. Morris",
        text: "Some people believe that governments should ban single-use coffee cups and require cafés to use only reusable cups. Supporters say this would greatly reduce waste. Others argue that it would be inconvenient for customers and expensive for small businesses. Should single-use coffee cups be banned? Explain your view.",
      },
      students: [
        { name: "Mia", text: "Yes. Billions of cups are thrown away every year, and most can't be recycled. People can easily carry their own cups." },
        { name: "Tolga", text: "No. Many people buy coffee on the way to work and don't want to carry a cup all day. Small cafés would also have to pay for washing systems." },
      ],
      sample: "I think a complete ban on single-use coffee cups would be too sudden, but governments should strongly discourage them. Mia is right that disposable cups create an enormous amount of waste, and because many are lined with plastic, they are difficult to recycle. Encouraging people to carry reusable cups is a realistic change, as many already carry water bottles. However, Tolga raises practical concerns. Not everyone remembers their cup every day, and small cafés may not have space or money for dishwashing equipment. A better approach would be to introduce a small fee on disposable cups, offer discounts to customers who bring their own and support deposit systems where people can borrow a reusable cup and return it to any participating café. Over time, these measures could reduce waste without causing major inconvenience.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new assistant at a tourist information office. Your manager is telling you what to say to visitors.",
      sentences: [
        "Good morning, welcome to the information office.",
        "Here is a free map of the city.",
        "The castle is a short walk from here.",
        "Most museums are closed on Mondays.",
        "You can buy bus tickets from the driver.",
        "If you are interested in a boat trip, they leave from the harbor every hour until six o'clock.",
        "For visitors staying more than two days, we recommend the city pass, which includes free public transport and entry to most of the museums.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of games and puzzles. The researcher will ask you some questions.",
      questions: [
        {
          text: "Do you enjoy playing games or solving puzzles? Which ones?",
          sample: "Yes, I really enjoy puzzles, especially crosswords and word games. I usually do the crossword in the newspaper on Sunday mornings with my father. I also like board games, such as strategy games where you have to plan several moves ahead. They're a great way to spend time with friends without looking at screens. Sometimes I play puzzle games on my phone when I'm waiting for the bus.",
        },
        {
          text: "Do you think playing games can help people learn?",
          sample: "Yes, I think games can be a very effective way to learn. Games make learning more fun and motivating, and they often involve problem-solving, planning and teamwork. For example, language learning apps that use game-like features encourage people to practice every day. Strategy games can also improve critical thinking. However, games should be used along with other learning methods, not as a replacement for studying.",
        },
        {
          text: "Are video games a waste of time?",
          sample: "I don't think video games are necessarily a waste of time. Many games require creativity, quick thinking and cooperation with other players, and they can be a good way to relax after a busy day. Some games even teach history or science. However, playing for many hours every day can be a problem if it takes time away from sleep, exercise or relationships. Like many things, video games are fine in moderation.",
        },
        {
          text: "Should schools use more games in their lessons?",
          sample: "I think schools could use more games in their lessons, especially for younger students. Games can help children stay focused and remember information better. For example, a math game or a history quiz can make lessons more interactive. Teachers could also use role-playing games to teach students about different perspectives. However, games should be connected to clear learning goals, so that students are not just playing but also learning something useful.",
        },
      ],
    },
  },
};
