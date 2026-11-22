import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 35 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_35: ToeflTest = {
  id: "toefl-35",
  no: 35,
  title: "TOEFL iBT Practice Test 35",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Pencils",
          text: "The pencil is one of the simplest and most useful writing tools. In the sixteenth century, people in England discovered a large depo{{sit}} of graphite, a soft black mineral that left clear ma{{rks}} on paper. At first, they wrapped pieces of graphite in string or sheep{{skin}} to hold them. Later, craftsmen placed the graphite inside wooden hol{{ders}}. In the eighteenth century, a French inventor found a way to mix powdered graphite with cl{{ay}}, which allowed pencils of different hard{{ness}} to be made. Today, billions of pencils are produced every ye{{ar}}, and many still have a small era{{ser}} on the e{{nd}}, which makes corre{{cting}} mistakes easy.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Missed lecture",
          text: [
            "Hey Arda, I was sick yesterday and missed the statistics lecture. Did the professor say anything about the homework?",
            "If you don't mind, could you send me a photo of your notes tonight? I'll bring you coffee tomorrow morning as a thank-you!",
          ],
          questions: [
            { text: "Why did the writer miss the lecture?", options: ["The writer was sick.", "The writer overslept.", "The writer was traveling.", "The lecture was canceled."], answer: 0 },
            { text: "What does the writer offer Arda?", options: ["money", "coffee tomorrow morning", "help with homework", "a ride to campus"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Snow day procedures",
          text: [
            "SEVERE WEATHER: CAMPUS CLOSURE PROCEDURES",
            "In the event of heavy snow, the university may close or delay opening. Decisions will be announced by 6 a.m. through text alerts, the university website and local radio stations.",
            "If the campus is closed, all classes will be canceled, but the library and dining halls will remain open for students living on campus. Instructors may choose to hold online classes; check your course page for details.",
          ],
          questions: [
            { text: "When will closure decisions be announced?", options: ["the night before", "by 6 a.m.", "at noon", "after the first class"], answer: 1 },
            { text: "What remains open if the campus is closed?", options: ["all classrooms", "the library and dining halls", "the sports center", "nothing"], answer: 1 },
            { text: "What may instructors do on closure days?", options: ["give extra exams", "hold online classes", "extend the semester", "cancel the course"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How vaccines train the immune system",
          paragraphs: [
            "The human immune system protects the body from bacteria, viruses and other organisms that cause disease. When a new germ enters the body, the immune system must learn to recognize it, a process that can take days or weeks. During that time, the person may become seriously ill. Once the infection is defeated, however, the immune system retains special memory cells that can respond much more quickly if the same germ appears again.",
            "Vaccines take advantage of this memory. A vaccine exposes the immune system to a harmless version or part of a germ, such as a weakened or inactivated virus, or a protein from its surface. The immune system responds by producing antibodies and memory cells, just as it would during a real infection, but without the person having to suffer the disease. If the person is later exposed to the real germ, the immune system can recognize and destroy it before it causes serious illness.",
            "The first vaccine was developed in the 1790s by the English doctor Edward Jenner, who observed that milkmaids who had caught cowpox, a mild disease, seemed to be protected from smallpox. Since then, vaccines have dramatically reduced diseases such as measles and polio, and smallpox was declared eradicated worldwide in 1980. More recently, scientists have developed vaccines that deliver genetic instructions, called messenger RNA, which teach the body's own cells to produce a protein that triggers an immune response.",
          ],
          questions: [
            { text: "According to paragraph 1, why can a new infection make a person seriously ill?", options: ["The immune system takes time to learn to recognize the germ.", "The body has no immune system.", "Germs are invisible.", "Memory cells attack the body."], answer: 0 },
            { text: "The word \"retains\" in paragraph 1 is closest in meaning to", options: ["keeps", "loses", "creates", "destroys"], answer: 0 },
            { text: "According to paragraph 2, what does a vaccine contain?", options: ["a fully active, dangerous germ", "a harmless version or part of a germ", "antibiotics", "memory cells from another person"], answer: 1 },
            { text: "What did Edward Jenner observe?", options: ["Milkmaids who had cowpox seemed protected from smallpox.", "Cows never caught smallpox.", "Smallpox was caused by milk.", "Doctors did not catch diseases."], answer: 0 },
            { text: "According to paragraph 3, what do messenger RNA vaccines do?", options: ["They contain a weakened virus.", "They teach the body's cells to produce a protein that triggers an immune response.", "They replace the immune system.", "They cure smallpox."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our class trip",
          text: "At the end of the school year, our class went on a trip to a farm. We traveled there by tra{{in}}. The farmer sho{{wed}} us cows, sheep and chick{{ens}}. We learned how to milk a c{{ow}}, which was harder than it looked! Then we collected eggs and fed the ani{{mals}}. For lunch, we ate bread and cheese made on the fa{{rm}}. In the afternoon, we rode on a trac{{tor}} through the fie{{lds}}. Everyone was tired on the way ho{{me}}, but we all agreed it was the best trip of the ye{{ar}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Drawing classes",
          text: [
            "LEARN TO DRAW!",
            "Beginner drawing classes every Saturday morning from 10 to 12 at the Art Center on Hill Street. Learn to draw people, buildings and nature.",
            "All materials are provided. Classes cost $12 each, or $40 for a month. Classes are suitable for teenagers and adults.",
          ],
          questions: [
            { text: "When are the classes?", options: ["every Saturday morning", "every Sunday afternoon", "every weekday evening", "once a month"], answer: 0 },
            { text: "What do students need to bring?", options: ["paper and pencils", "nothing, because materials are provided", "a sketchbook", "paints"], answer: 1 },
            { text: "Who are the classes suitable for?", options: ["young children only", "teenagers and adults", "professional artists", "teachers"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why the ocean is blue",
          paragraphs: [
            "When we look at the ocean on a sunny day, it usually looks blue. But if we put ocean water in a glass, it looks clear.",
            "Sunlight contains all the colors. When sunlight enters deep water, the water absorbs red, orange and yellow light more strongly than blue light. Blue light travels farther and is scattered back toward our eyes.",
            "The color of the sea can also change. Near the coast, it may look green or brown because of tiny plants, sand or mud in the water. The sky also affects the color, so the sea often looks gray on a cloudy day.",
          ],
          questions: [
            { text: "What does ocean water look like in a glass?", options: ["blue", "green", "clear", "gray"], answer: 2 },
            { text: "Which colors does deep water absorb more strongly?", options: ["blue and violet", "red, orange and yellow", "only green", "all colors equally"], answer: 1 },
            { text: "The word \"scattered\" in paragraph 2 is closest in meaning to", options: ["spread in different directions", "stopped", "heated", "collected"], answer: 0 },
            { text: "Why might the sea look green near the coast?", options: ["because of tiny plants, sand or mud", "because the water is colder", "because of fish", "because it is deeper"], answer: 0 },
            { text: "Why does the sea often look gray on a cloudy day?", options: ["The water becomes dirty.", "The sky affects its color.", "Blue light disappears at night.", "The waves are bigger."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The decoy effect",
          text: "Marketers have discovered that adding a third, less attractive option can change which of two other options customers choose. For example, a cinema might offer a small popcorn for three dollars and a large one for seven. Many customers would cho{{ose}} the small size. If the cinema adds a medium size for six and a half dol{{lars}}, the large size suddenly appears to be a much bet{{ter}} deal, and more customers buy it. The medium option, which few people actually pur{{chase}}, is called a decoy. This decoy eff{{ect}} shows that people often judge op{{tions}} by comparing them with one ano{{ther}} rather than by consid{{ering}} their absolute val{{ue}}. It is widely used in pricing subscrip{{tions}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Scholarship renewal",
          text: [
            "To: Recipients of the Excellence Scholarship",
            "From: Office of Financial Aid",
            "Subject: Renewing your scholarship for next year",
            "Your Excellence Scholarship can be renewed for up to four years, provided that you maintain a grade point average of at least 3.3 and complete at least 30 credits per academic year. Renewal is not automatic; you must submit the renewal form through the financial aid portal by June 15.",
            "Students whose average falls slightly below 3.3 may apply for a one-semester probation period, during which they will continue to receive the scholarship but must raise their average by the end of the semester. Students who take a leave of absence must inform the office in advance, or the scholarship may be canceled.",
          ],
          questions: [
            { text: "What is required to renew the scholarship?", options: ["a GPA of at least 3.3 and 30 credits per year", "a new application essay", "a recommendation letter", "a GPA of at least 3.0"], answer: 0 },
            { text: "What is true about renewal?", options: ["It is automatic.", "Students must submit a form by June 15.", "It requires an interview.", "It is available for only one year."], answer: 1 },
            { text: "What is the purpose of the probation period?", options: ["to give students time to raise their average", "to reduce the scholarship amount", "to transfer the scholarship to another student", "to allow a leave of absence"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why some languages disappear",
          paragraphs: [
            "Linguists estimate that there are around seven thousand languages spoken in the world today, but their distribution is extremely uneven. A small number of languages, such as English, Mandarin Chinese and Spanish, have hundreds of millions of speakers, while thousands of others are spoken by small communities. Many researchers believe that a large proportion of the world's languages could disappear by the end of this century.",
            "Languages rarely disappear because their speakers die out. More commonly, communities gradually shift to a more widely spoken language. Parents may choose to raise their children in the dominant language because it offers better access to education, employment and the media, and children may come to associate the traditional language with poverty or old-fashioned ways of life. Within a few generations, the traditional language may be spoken only by elderly people.",
            "The loss of a language involves more than the loss of words. Languages contain knowledge accumulated over centuries, such as detailed vocabularies for local plants, animals and environmental conditions, as well as stories, songs and ways of understanding the world. In recent decades, many communities have launched efforts to revitalize their languages, for example through immersion schools, recordings of elderly speakers and the use of social media. Some of these efforts have been remarkably successful, suggesting that language decline is not inevitable.",
          ],
          questions: [
            { text: "According to paragraph 1, how are the world's languages distributed?", options: ["evenly among countries", "very unevenly, with a few languages having most speakers", "mostly in Europe", "only in large cities"], answer: 1 },
            { text: "The word \"revitalize\" in paragraph 3 is closest in meaning to", options: ["bring new life to", "replace", "translate", "forget"], answer: 0 },
            { text: "According to paragraph 2, what is the most common way languages disappear?", options: ["Their speakers die in wars.", "Communities gradually shift to a more widely spoken language.", "Governments ban them.", "They are replaced by sign languages."], answer: 1 },
            { text: "Why might parents raise children in a dominant language?", options: ["It offers better access to education and jobs.", "It is easier to pronounce.", "It has more words.", "It is required by law."], answer: 0 },
            { text: "What does the author suggest in the final sentence?", options: ["All endangered languages will disappear.", "Language decline is not inevitable.", "Social media causes language loss.", "Only elderly people can save languages."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Sevil", prompt: "Why did you leave the party early?", chunks: ["I", "had to", "catch", "the last train", "home"], end: "." },
      { promptBy: "Chris", prompt: "Have you visited the new science museum?", chunks: ["we", "went there", "with", "our class", "last Friday"], end: "." },
      { promptBy: "Elif", prompt: "I spend too much time on my phone.", chunks: ["why don't", "you", "turn off", "notifications", "in the evening"], end: "?" },
      { promptBy: "Josh", prompt: "Where can I buy cheap furniture?", chunks: ["there is", "a second-hand", "shop", "near", "the stadium"], end: "." },
      { promptBy: "Meltem", prompt: "How did the job interview go?", chunks: ["they", "offered me", "the job", "at the end of", "the interview"], end: "." },
      { promptBy: "Kevin", prompt: "Why is the library so cold?", chunks: ["the heating", "system", "is being", "repaired", "today"], end: "." },
      { promptBy: "Aylin", prompt: "When do we need to submit the report?", chunks: ["the deadline", "is", "next", "Wednesday", "at noon"], end: "." },
      { promptBy: "Will", prompt: "What did you do on your vacation?", chunks: ["I", "spent", "a week", "hiking", "in the Alps"], end: "." },
      { promptBy: "Burcu", prompt: "This restaurant is fully booked.", chunks: ["should", "we", "try", "the café", "across the street"], end: "?" },
      { promptBy: "Nathan", prompt: "Why did you decide to study medicine?", chunks: ["I", "want to", "help", "people", "in my community"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently moved into a new apartment, and your neighbor has been very helpful, for example by helping you carry boxes and showing you where the nearest shops are. You want to thank them.",
      to: "your neighbor, Mrs. Arslan",
      subject: "Thank you for your help",
      tasks: ["Thank your neighbor for their help.", "Describe how their help made a difference to you.", "Invite them to do something with you."],
      sample: "Dear Mrs. Arslan,\n\nI wanted to write to thank you for all your kindness since I moved into the building two weeks ago. When I arrived with all my boxes and no one to help me, you and your husband immediately came out to help me carry everything up the stairs, and I will never forget it.\n\nYour help has made a real difference to my first weeks here. I didn't know anyone in the neighborhood, and moving to a new city on my own felt quite lonely. Thanks to you, I already know where the best bakery and the cheapest market are, and you even recommended a good doctor when I caught a cold. Knowing that friendly neighbors live next door makes me feel much more at home.\n\nTo say thank you, I would love to invite you and your husband for dinner at my apartment next Saturday evening. I am learning to cook some dishes from my hometown, and I would be happy to share them with you. Please let me know if that day suits you.\n\nWith warm wishes,\nZeynep Uçar",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Studies",
      professor: {
        name: "Dr. Baker",
        text: "Some cities have introduced 'congestion charges,' requiring drivers to pay a fee to enter the city center during busy hours. Supporters say these charges reduce traffic and pollution and raise money for public transport. Opponents argue that they are unfair to people who must drive for work and to people on low incomes. Should more cities introduce congestion charges? Why or why not?",
      },
      students: [
        { name: "Ella", text: "Yes. In cities like London and Stockholm, congestion charges reduced traffic significantly. The money can be used to improve buses and trains, which helps everyone." },
        { name: "Hakan", text: "No. It's another tax on ordinary people. Wealthy drivers will simply pay, while workers who need their cars for their jobs will suffer the most." },
      ],
      sample: "I think more cities should introduce congestion charges, but they need to be designed fairly. Ella is right that these charges have worked in several cities. When fewer cars enter the center, buses move faster, the air becomes cleaner and streets become safer for pedestrians and cyclists. The revenue can also be invested directly in public transport, giving people a real alternative to driving. However, Hakan's concern about fairness is important. A charge that is the same for everyone can be a much heavier burden for low-income workers than for wealthy drivers. Cities could address this by offering discounts or exemptions for people who need vehicles for their work, such as electricians and caregivers, and by making sure that public transport is affordable and reliable before the charge is introduced.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are working at the reception of a fitness center. Your manager is telling you what to say to new members.",
      sentences: [
        "Welcome to our fitness center.",
        "Please scan your card at the entrance.",
        "Lockers are in the changing rooms.",
        "Group classes must be booked in advance.",
        "Personal trainers are available for an extra fee.",
        "Please wipe down the machines after use and return all weights to the racks.",
        "If this is your first visit, a trainer can show you how to use the equipment safely, and this introduction session is free.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about health and medicine. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you usually do when you feel unwell?",
          sample: "When I feel slightly unwell, for example if I have a cold, I usually rest, drink plenty of water and herbal tea, and get more sleep. My mother always recommends soup, and I have to admit it helps. If the symptoms are more serious or last more than a few days, I go to the university health center or see a doctor. I try not to take medicine unless it's really necessary.",
        },
        {
          text: "Do you think people today are healthier than people fifty years ago?",
          sample: "In some ways, yes. People live longer today because of better medicine, vaccines and healthcare, and many diseases that were common fifty years ago are now rare or treatable. However, in other ways, people may be less healthy. Many of us spend most of the day sitting, eat more processed food and experience more stress. So I think we're better at treating diseases but sometimes worse at preventing problems through healthy lifestyles.",
        },
        {
          text: "Some people believe that healthcare should be completely free for everyone. What is your opinion?",
          sample: "I believe basic healthcare should be free for everyone, because health is a fundamental need and nobody should avoid seeing a doctor because they can't afford it. When people get treatment early, it's often cheaper for society in the long run. However, providing completely free healthcare is very expensive, so governments need to manage it carefully. Some small fees for non-essential services might help reduce unnecessary visits while keeping essential care free.",
        },
        {
          text: "How do you think technology will change healthcare in the future?",
          sample: "I think technology will make healthcare more personalized and accessible. Wearable devices can already monitor heart rate and sleep, and in the future they might detect illnesses before people notice symptoms. Artificial intelligence could help doctors analyze medical images and choose treatments more accurately. Online consultations will also make it easier for people in rural areas to see specialists. However, I hope technology will support doctors rather than replace the human relationship between doctors and patients.",
        },
      ],
    },
  },
};
