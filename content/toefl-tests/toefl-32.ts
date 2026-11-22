import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 32 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_32: ToeflTest = {
  id: "toefl-32",
  no: 32,
  title: "TOEFL iBT Practice Test 32",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The first cameras",
          text: "The idea behind the camera is very old. People noticed that light passing through a small ho{{le}} into a dark room created an upside-down ima{{ge}} of the outside world on the opposite wa{{ll}}. Artists used this effect to help them dr{{aw}}. However, it was only in the nineteenth century that inventors found ways to fix the image perma{{nently}}. The earliest photographs needed many minutes of expo{{sure}}, so people had to sit completely st{{ill}}. As technology improved, cameras became smal{{ler}} and faster, and photography bec{{ame}} popular around the wo{{rld}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Rescheduled tutoring",
          text: [
            "Hi Emir, I'm afraid I need to move our tutoring session from Wednesday to Thursday this week. I have a doctor's appointment I couldn't change.",
            "Is 4 p.m. on Thursday OK for you? Same place, the second-floor study area. Please bring the practice test we started last time.",
          ],
          questions: [
            { text: "Why does the tutor need to change the session?", options: ["The tutor has a doctor's appointment.", "The library is closed.", "Emir has an exam.", "The tutor is traveling."], answer: 0 },
            { text: "What should Emir bring?", options: ["a new textbook", "the practice test they started", "his laptop charger", "a dictionary"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Campus recycling challenge",
          text: [
            "RESIDENCE HALL RECYCLING CHALLENGE",
            "Throughout November, residence halls will compete to see which one can recycle the most and throw away the least waste. Bins will be weighed every Friday.",
            "The winning hall will receive $1,000 to spend on improvements chosen by its residents, such as new furniture for the common room. Results will be posted on the sustainability website each week.",
          ],
          questions: [
            { text: "What is the purpose of the challenge?", options: ["to clean the campus", "to see which hall recycles the most and wastes the least", "to raise money for charity", "to choose new furniture"], answer: 1 },
            { text: "How often will bins be weighed?", options: ["every day", "every Friday", "once a month", "at the end of November only"], answer: 1 },
            { text: "What will the winning hall receive?", options: ["a party", "$1,000 for improvements", "free meals", "new recycling bins"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How migrating birds navigate",
          paragraphs: [
            "Every year, billions of birds migrate between their breeding and wintering grounds, sometimes traveling thousands of kilometers and returning to the same nesting site with remarkable precision. How they find their way has fascinated scientists for centuries, and research suggests that birds use several different kinds of information.",
            "One important source is the sun. Experiments in which birds were kept in cages with mirrors that shifted the apparent position of the sun showed that the birds changed the direction in which they tried to fly. Because the sun moves across the sky during the day, birds must also use an internal clock to compensate for its movement. Birds that migrate at night rely on the stars; young birds appear to learn the center of rotation of the night sky, which indicates the direction of north.",
            "Many birds can also sense the Earth's magnetic field. In laboratory experiments, changing the magnetic field around caged birds altered the direction they faced. Scientists are still investigating how this sense works; one leading hypothesis involves light-sensitive molecules in the birds' eyes that may allow them to 'see' the magnetic field. Close to their destination, birds probably rely on familiar landmarks, such as coastlines and mountains, and possibly on smell.",
          ],
          questions: [
            { text: "According to paragraph 1, what is remarkable about migrating birds?", options: ["They never rest.", "They return to the same nesting site with great precision.", "They always fly at night.", "They travel only short distances."], answer: 1 },
            { text: "The word \"compensate\" in paragraph 2 is closest in meaning to", options: ["make up", "ignore", "copy", "measure"], answer: 0 },
            { text: "According to paragraph 2, what did the mirror experiments show?", options: ["Birds cannot see the sun.", "Birds use the sun's position to choose their direction.", "Birds fly only in cloudy weather.", "Birds are afraid of mirrors."], answer: 1 },
            { text: "How do young night-migrating birds find north?", options: ["by following older birds only", "by learning the center of rotation of the night sky", "by smell", "by the sound of the ocean"], answer: 1 },
            { text: "According to paragraph 3, what may allow birds to sense the magnetic field?", options: ["light-sensitive molecules in their eyes", "their feathers", "their beaks", "their sense of hearing"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Helping my grandfather",
          text: "My grandfather lives alone in a small house near our apart{{ment}}. Every Sunday, I visit him and help him with jo{{bs}} around the house. Last week, we painted the gar{{den}} fence together. He showed me how to hold the bru{{sh}} correctly. While we worked, he told me sto{{ries}} about his childhood in a small vil{{lage}}. After we fini{{shed}}, he made tea and we sat in the s{{un}}. I always le{{arn}} something new from h{{im}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Free computer course",
          text: [
            "FREE COMPUTER SKILLS COURSE FOR ADULTS",
            "Learn how to use email, search the internet safely and make video calls. Classes are held at the public library every Tuesday from 10 a.m. to noon for six weeks.",
            "No experience is needed. Laptops are provided. Places are limited, so please register at the library information desk.",
          ],
          questions: [
            { text: "Who is the course for?", options: ["children", "adults", "computer experts", "teachers only"], answer: 1 },
            { text: "How long does the course last?", options: ["one week", "six weeks", "three months", "one year"], answer: 1 },
            { text: "What is provided for students?", options: ["laptops", "a certificate", "free internet at home", "lunch"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why some animals have long necks",
          paragraphs: [
            "Giraffes are the tallest animals on Earth. Their long necks can be almost two meters long.",
            "A long neck helps a giraffe reach leaves high up in trees, where other animals cannot reach them. This means giraffes have less competition for food.",
            "Surprisingly, a giraffe's neck has only seven bones, the same number as a human neck. However, each bone is very long. Male giraffes also use their necks to fight each other by swinging them like heavy clubs.",
          ],
          questions: [
            { text: "How long can a giraffe's neck be?", options: ["about half a meter", "almost two meters", "five meters", "ten meters"], answer: 1 },
            { text: "How does a long neck help a giraffe?", options: ["It helps it run faster.", "It helps it reach high leaves.", "It keeps it cool.", "It helps it swim."], answer: 1 },
            { text: "The word \"competition\" in paragraph 2 is closest in meaning to", options: ["rivalry", "help", "danger", "noise"], answer: 0 },
            { text: "How many bones does a giraffe's neck have?", options: ["three", "seven", "twelve", "twenty"], answer: 1 },
            { text: "How do male giraffes use their necks when fighting?", options: ["They bite each other's necks.", "They swing them like heavy clubs.", "They hide them.", "They use them to make loud sounds."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The spotlight effect",
          text: "Many people believe that others notice their appearance and behavior much more than they actually do. Psychologists call this the spotlight effect. In one experiment, students were asked to wear an embar{{rassing}} T-shirt into a room full of other stud{{ents}}. Afterwards, they estimated that about half of the people in the ro{{om}} had noticed the shirt, but in fact fewer than a quar{{ter}} had. The researchers suggested that we focus so strongly on our own exper{{ience}} that we find it hard to imag{{ine}} how little attention others pay to us. Understanding this effect may help people feel less anx{{ious}} in social situ{{ations}} and wor{{ry}} less about small mist{{akes}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "International student orientation",
          text: [
            "To: Incoming international students",
            "From: International Student Services",
            "Subject: Welcome and orientation program",
            "Welcome to the university! All new international students must attend the orientation program from August 25 to 28. During orientation, you will complete immigration check-in, open a local bank account with the help of our staff, register with the student health center and learn about academic expectations.",
            "Please bring your passport, visa documents and admission letter to the immigration check-in on August 25. Students who arrive after August 28 should contact our office immediately, since failing to complete check-in within thirty days of arrival may affect your visa status. Free airport pickup is available on August 23 and 24 if you register online by August 10.",
          ],
          questions: [
            { text: "What will students do during orientation?", options: ["take placement exams only", "complete immigration check-in and open bank accounts", "choose their majors", "travel around the country"], answer: 1 },
            { text: "What could happen if students do not complete check-in within thirty days?", options: ["They will pay a fee.", "It may affect their visa status.", "They will miss classes.", "Nothing will happen."], answer: 1 },
            { text: "How can students get free airport pickup?", options: ["by calling the office on arrival", "by registering online by August 10", "by arriving on August 28", "It is not available."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The Great Wall of China",
          paragraphs: [
            "The Great Wall of China is often imagined as a single continuous structure built at one time. In reality, it is a series of walls, built and rebuilt by different Chinese states and dynasties over more than two thousand years. The earliest walls date from the seventh century BCE, and after China was unified in 221 BCE, the first emperor, Qin Shi Huang, connected and extended several existing walls to defend against nomadic peoples from the north.",
            "Most of the sections that visitors see today were built much later, during the Ming dynasty, between the fourteenth and seventeenth centuries. Earlier walls were often made of packed earth, wood and stone, materials that wore away over time. The Ming builders, by contrast, made extensive use of bricks and stone blocks, held together with mortar that, according to recent research, contained sticky rice, which made it unusually strong. They also built thousands of watchtowers, from which soldiers could send signals using smoke during the day and fire at night.",
            "The wall's effectiveness as a defense has been debated. It did not always prevent invasions; in the seventeenth century, Manchu forces entered China and founded the Qing dynasty after a Ming general opened a gate to them. Historians suggest, however, that the wall served purposes beyond military defense, such as controlling trade and migration and collecting taxes on goods passing through. A popular belief holds that the wall is visible from space with the naked eye, but astronauts have reported that it is very difficult to see, because it is narrow and similar in color to the surrounding land.",
          ],
          questions: [
            { text: "According to paragraph 1, what is a common misconception about the Great Wall?", options: ["that it was built by the Ming", "that it is a single structure built at one time", "that it is in China", "that it is very old"], answer: 1 },
            { text: "The word \"extensive\" in paragraph 2 is closest in meaning to", options: ["widespread", "limited", "careful", "unusual"], answer: 0 },
            { text: "According to paragraph 2, what made Ming mortar unusually strong?", options: ["iron", "sticky rice", "sea water", "volcanic ash"], answer: 1 },
            { text: "How did soldiers on the watchtowers send signals?", options: ["with flags only", "with smoke during the day and fire at night", "with drums", "with messengers on horses"], answer: 1 },
            { text: "What does the author say about seeing the wall from space?", options: ["It is easy to see.", "It is very difficult to see.", "It glows at night.", "It can be seen from the Moon."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ayten", prompt: "Why are you in such a hurry?", chunks: ["my class", "starts", "in", "five", "minutes"], end: "." },
      { promptBy: "Brian", prompt: "Have you decided on a topic for your essay?", chunks: ["I", "am going to", "write about", "urban", "gardens"], end: "." },
      { promptBy: "Nazlı", prompt: "I get bored studying alone.", chunks: ["why don't", "you", "join", "a study group", "at the library"], end: "?" },
      { promptBy: "Kyle", prompt: "Where did you park the car?", chunks: ["I", "parked it", "on", "the street", "behind the hotel"], end: "." },
      { promptBy: "Fulya", prompt: "How was the boat trip?", chunks: ["we", "saw", "dolphins", "near", "the island"], end: "." },
      { promptBy: "Tim", prompt: "Why is everyone leaving the building?", chunks: ["there", "is", "a fire drill", "this", "morning"], end: "." },
      { promptBy: "Lale", prompt: "When will the new library open?", chunks: ["it", "should", "open", "at the start of", "next semester"], end: "." },
      { promptBy: "Victor", prompt: "What did you study last night?", chunks: ["I", "reviewed", "my notes", "for", "the biology quiz"], end: "." },
      { promptBy: "Rüya", prompt: "The weather is perfect today.", chunks: ["should", "we", "have", "lunch", "outside"], end: "?" },
      { promptBy: "Jason", prompt: "Why did you move closer to campus?", chunks: ["I", "was", "tired of", "long", "commutes"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You and some classmates would like to start a new student club at your university, but you need to find a faculty member to act as the club's advisor.",
      to: "Professor Martin, one of your instructors",
      subject: "Request to be our club advisor",
      tasks: ["Explain the purpose of the club you want to start.", "Explain why you are asking this professor.", "Describe what the advisor's role would involve."],
      sample: "Dear Professor Martin,\n\nI am a student in your Environmental Chemistry course, and I am writing to ask whether you would consider becoming the faculty advisor for a new student club. A group of eight students and I would like to start a Sustainability Club, which would organize recycling projects on campus, invite guest speakers and run workshops on reducing waste in daily life.\n\nWe are asking you because your lectures on environmental issues have inspired many of us, and you clearly care about helping students turn ideas into action. Your knowledge would be extremely valuable as we plan our activities.\n\nAccording to university rules, the advisor's role is not very time-consuming. It would mainly involve signing the club's registration form, meeting with our committee once or twice a semester to review our plans, and offering advice when needed. We would handle all of the organization ourselves.\n\nThank you for considering our request. We would be happy to meet you during your office hours to discuss it further.\n\nKind regards,\nSelin Akın",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Psychology",
      professor: {
        name: "Dr. Mitchell",
        text: "Many companies and schools are introducing mindfulness and meditation programs to reduce stress and improve concentration. Supporters say these programs have real benefits. Critics argue that they put responsibility on individuals instead of addressing the causes of stress, such as heavy workloads. Are mindfulness programs a good response to stress at work and in schools? Why or why not?",
      },
      students: [
        { name: "Jessica", text: "Yes. Short meditation sessions have helped me focus and sleep better. Teaching these skills gives people a tool they can use anywhere." },
        { name: "Mert", text: "They can help a little, but if students have too many exams or employees work twelve-hour days, ten minutes of breathing exercises won't solve the real problem." },
      ],
      sample: "I think mindfulness programs can be helpful, but only if they are combined with efforts to address the causes of stress. Jessica is right that these practices can bring real benefits. Research suggests that regular meditation can reduce anxiety and improve attention, and I have found that a few minutes of slow breathing before an exam helps me stay calm. However, Mert makes an important point. If a school or company offers meditation sessions while continuing to impose unrealistic workloads, the program may seem like a way to avoid responsibility, placing the burden entirely on individuals. A better approach would be to use mindfulness as one part of a wider strategy that also includes reasonable deadlines, enough breaks and access to counseling. That way, people learn useful coping skills, but the organization also makes changes to reduce unnecessary stress.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are working at the entrance of an aquarium. The manager is telling you what to say to visitors.",
      sentences: [
        "Welcome to the city aquarium.",
        "Please do not tap on the glass.",
        "The shark feeding starts at noon.",
        "Flash photography can frighten the animals.",
        "The touch pool is on the lower level next to the café.",
        "Children under five can enter for free, but they must stay with an adult at all times.",
        "If you would like to watch the dolphin presentation this afternoon, please arrive at the outdoor theater ten minutes early.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about technology in education. The researcher will ask you some questions.",
      questions: [
        {
          text: "How do you use technology when you study?",
          sample: "I use technology in almost every part of my studies. I take notes on my tablet, which lets me organize them by subject and search for keywords later. I also use online flashcard apps to memorize vocabulary and formulas, and I watch video lectures when I need extra explanation of difficult topics. For group projects, my classmates and I use shared documents, so we can work on the same file at the same time.",
        },
        {
          text: "Do you think online learning is as effective as learning in a classroom?",
          sample: "I think online learning can be effective, but it isn't the same as learning in a classroom. Online courses are flexible and allow students to study at their own pace, which is great for working adults. However, I find it much harder to stay focused when I'm learning alone at home, and I miss the discussions with classmates and teachers. In my experience, a combination of online materials and face-to-face classes works best.",
        },
        {
          text: "Some people believe that students should not be allowed to use artificial intelligence tools for homework. What do you think?",
          sample: "I don't think a complete ban is realistic or helpful. Artificial intelligence tools are already part of the world students will work in, so they should learn to use them responsibly. They can be useful for explaining concepts or giving feedback on writing. However, if students simply copy answers, they won't learn anything. Teachers should set clear rules, for example allowing AI for brainstorming but requiring students to explain their reasoning in their own words.",
        },
        {
          text: "How do you think classrooms will be different in twenty years?",
          sample: "I think classrooms will become much more personalized. With the help of technology, each student might follow a slightly different learning path, depending on their strengths and weaknesses. Teachers will probably spend less time giving lectures and more time guiding projects and discussions. I also expect more use of virtual reality, for example to visit historical sites or perform science experiments safely. However, I hope schools will still be places where students learn social skills by working together in person.",
        },
      ],
    },
  },
};
