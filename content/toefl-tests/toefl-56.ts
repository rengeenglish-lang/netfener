import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 56 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_56: ToeflTest = {
  id: "toefl-56",
  no: 56,
  title: "TOEFL iBT Practice Test 56",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Ballpoint pens",
          text: "Before ballpoint pens became common, most people wrote with fountain pens, which often leaked and had to be refilled with i{{nk}}. In the 1930s, a Hungarian journalist named László Bíró noticed that the ink used to print newspapers dried quic{{kly}} and did not smudge. However, this thick ink would not flow through the ti{{p}} of a fountain pen. Working with his brother, a chem{{ist}}, he designed a pen with a tiny metal ba{{ll}} at the tip. As the pen moved across the pa{{per}}, the ball rolled and picked up ink from a tube ins{{ide}}. The ballpoint pen was cheap, reliable and easy to u{{se}}. Today, billions are sold every ye{{ar}}, and in some countries people still call them \"biros\" after their inven{{tor}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Help with my CV",
          text: [
            "Hi Zafer, I'm applying for a summer job at the tourism office and need to send my CV by Friday. You're so good at writing, could you look at it for me?",
            "I'll email it to you tonight. Even a few quick comments would help a lot. I'll buy you lunch next week to say thanks!",
          ],
          questions: [
            { text: "Why does the writer need help?", options: ["to check a CV for a job application", "to write an essay for class", "to translate a document", "to prepare for an interview"], answer: 0 },
            { text: "When will the writer send the CV?", options: ["tonight", "on Friday", "next week", "tomorrow morning"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Bus stop relocation",
          text: [
            "IMPORTANT: CAMPUS BUS STOP MOVING",
            "Because of construction work on University Avenue, the main campus bus stop will move 200 meters east, to the front of the Medical School, from Monday, March 3.",
            "All bus routes and timetables will remain the same. The temporary stop is clearly marked with yellow signs. The original stop is expected to reopen at the end of May, once construction is complete.",
          ],
          questions: [
            { text: "Why is the bus stop moving?", options: ["because of construction work", "because of a new bus route", "because of complaints", "because the old stop was too small"], answer: 0 },
            { text: "What will NOT change?", options: ["bus routes and timetables", "the location of the stop", "the signs", "the construction schedule"], answer: 0 },
            { text: "When is the original stop expected to reopen?", options: ["at the end of May", "on March 3", "next year", "in one week"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why the Leaning Tower of Pisa leans",
          paragraphs: [
            "The bell tower of the cathedral in Pisa, Italy, is one of the most famous buildings in the world, largely because of a mistake. Construction began in 1173, but by the time builders had completed the third floor about five years later, the tower had already begun to tilt. The problem lay beneath the ground: the tower was built on soft soil made of clay, sand and shells, and its foundation was only three meters deep, far too shallow for such a heavy structure.",
            "Fortunately for the tower, construction was interrupted for almost a century because of wars. This long pause allowed the soil beneath the tower to settle and become more compact. Had the builders continued without a break, the tower would probably have collapsed. When construction resumed, engineers tried to correct the tilt by building the upper floors slightly taller on one side, which is why the tower is actually slightly curved. The tower was finally completed in the late fourteenth century, but it continued to lean further over the following centuries.",
            "By 1990, the tower was leaning more than five degrees, and engineers feared it might fall. It was closed to the public while an international team searched for a solution. After experiments with weights and cables, engineers carefully removed small amounts of soil from beneath the higher side of the tower, allowing it to sink slightly and straighten. By 2001, the tilt had been reduced by about forty centimeters, and the tower reopened. Engineers believe it should now remain stable for at least two hundred years, while still leaning enough to attract millions of visitors.",
          ],
          questions: [
            { text: "According to paragraph 1, why did the tower begin to tilt?", options: ["It was built on soft soil with a shallow foundation.", "An earthquake damaged it.", "It was struck by lightning.", "Its bells were too heavy."], answer: 0 },
            { text: "According to paragraph 2, how did the interruption in construction help the tower?", options: ["It allowed the soil to settle and become more compact.", "It gave builders time to move the tower.", "It allowed a deeper foundation to be built.", "It made the tower lighter."], answer: 0 },
            { text: "Why is the tower slightly curved?", options: ["Upper floors were built taller on one side to correct the tilt.", "It was designed to look modern.", "Wind bent the stone.", "It was damaged during wars."], answer: 0 },
            { text: "The word \"stable\" in paragraph 3 is closest in meaning to", options: ["steady and unlikely to fall", "beautiful", "crowded", "dangerous"], answer: 0 },
            { text: "How did engineers reduce the tilt?", options: ["by removing soil from beneath the higher side", "by adding more floors", "by pushing the tower with machines", "by rebuilding the foundation completely"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My first train trip",
          text: "When I was nine, I took a train for the fi{{rst}} time. My grandmother and I traveled to the co{{ast}} to visit my aunt. The station was big and very bu{{sy}}. We found our se{{ats}} next to a large window. As the train started to mo{{ve}}, I watched the city disappear. Soon we saw fields, rivers and sm{{all}} villages. My grandmother bought me a sand{{wich}} and some juice from a man with a cart. The trip took five ho{{urs}}, but it felt very short because everything was so inter{{esting}}. I still love traveling by tr{{ain}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Rock climbing for beginners",
          text: [
            "TRY ROCK CLIMBING!",
            "Our indoor climbing center offers beginner classes every Friday evening from 6 to 8 p.m. Trained instructors will teach you how to climb safely.",
            "The class costs $30, including shoes, a harness and a helmet. Participants must be at least 12 years old. Wear comfortable clothes and bring a bottle of water.",
          ],
          questions: [
            { text: "When are the beginner classes?", options: ["every Friday evening", "every Sunday morning", "every weekday afternoon", "once a month"], answer: 0 },
            { text: "What is included in the price?", options: ["shoes, a harness and a helmet", "dinner", "a T-shirt", "transport"], answer: 0 },
            { text: "How old must participants be?", options: ["at least 12", "at least 8", "at least 18", "at least 16"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why cows spend all day eating",
          paragraphs: [
            "Cows spend many hours every day eating grass. They also spend many hours chewing, even when they are not eating new food.",
            "Grass is hard to digest. Cows have a stomach with four parts. First, they swallow the grass quickly. Later, they bring the food back up into their mouths and chew it again. This food is called cud.",
            "Chewing the cud breaks the grass into very small pieces. Tiny living things in the cow's stomach then help break down the grass. In this way, cows can get energy from plants that people cannot digest.",
          ],
          questions: [
            { text: "What do cows spend many hours doing?", options: ["eating and chewing", "running", "sleeping", "drinking"], answer: 0 },
            { text: "How many parts does a cow's stomach have?", options: ["four", "two", "one", "six"], answer: 0 },
            { text: "What is cud?", options: ["food that cows bring back up to chew again", "a type of grass", "water in the stomach", "a cow's tooth"], answer: 0 },
            { text: "The word \"swallow\" in paragraph 2 is closest in meaning to", options: ["take into the stomach through the mouth", "spit out", "smell", "cut"], answer: 0 },
            { text: "What helps break down the grass in the cow's stomach?", options: ["tiny living things", "stones", "water only", "sunlight"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Pygmalion effect",
          text: "Teachers' expectations may influence how well their students perform. In a famous study in the 1960s, researchers told teachers that certain students had been identified by a test as likely to make rapid prog{{ress}}. In reality, these students had been chosen at ran{{dom}}. By the end of the year, many of the selected students showed larger gains in test sco{{res}} than their classmates. The researchers suggested that teachers had unconsciously treated these students differ{{ently}}, perhaps by giving them more atten{{tion}}, encouragement and challenging wo{{rk}}. This became known as the Pygmalion eff{{ect}}. Later studies found that the effect is usually smal{{ler}} than first reported, but most researchers agree that expectations can mat{{ter}}, especially for younger chil{{dren}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Laboratory waste disposal",
          text: [
            "To: All researchers in the Biology Building",
            "From: Environmental Health and Safety Office",
            "Subject: New procedures for laboratory waste",
            "From next month, laboratory waste must be separated into four categories: general waste, chemical waste, biological waste and sharp objects such as needles and broken glass. Color-coded containers will be provided in every laboratory, and posters explaining the categories will be displayed above each container.",
            "Chemical waste containers must be labeled with the names of the substances inside and the date. Full containers should be sealed and reported through the online system for collection, which takes place every Wednesday. Laboratories that repeatedly fail to follow these procedures will be inspected and may have their access to certain chemicals restricted.",
          ],
          questions: [
            { text: "How many categories must laboratory waste be separated into?", options: ["four", "two", "three", "six"], answer: 0 },
            { text: "What must chemical waste containers be labeled with?", options: ["the names of the substances and the date", "the lab's phone number", "the researcher's photo", "nothing"], answer: 0 },
            { text: "What may happen to laboratories that repeatedly fail to follow the procedures?", options: ["They may be inspected and have access to chemicals restricted.", "They will be closed permanently.", "They will receive more containers.", "Nothing will happen."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The economics of music streaming",
          paragraphs: [
            "Over the past two decades, the way people listen to music has changed dramatically. Physical sales of CDs and digital downloads have declined, and streaming services, which allow users to listen to millions of songs for a monthly fee or for free with advertisements, now account for the majority of recorded music revenue in many countries. After years of decline caused by illegal file-sharing, the global music industry's income has grown again largely thanks to streaming.",
            "However, the way streaming revenue is distributed has been widely debated. Most services pay rights holders according to the number of times songs are played, dividing a pool of money among all artists based on their share of total streams. Because payments per stream are very small, typically a fraction of a cent, artists need millions of plays to earn significant income. Many musicians argue that this system benefits superstars and record labels while making it extremely difficult for less famous artists to earn a living from recordings alone.",
            "Some economists and artists have proposed alternative models. In a 'user-centric' system, each subscriber's fee would be divided only among the artists that person actually listens to, rather than placed into a shared pool. Supporters believe this would direct more money to smaller artists with dedicated fans. Others argue that streaming has shifted musicians' income toward live performances, merchandise and direct support from fans through online platforms. Meanwhile, streaming has made it easier than ever for independent musicians to reach a global audience, even if converting that audience into income remains a challenge.",
          ],
          questions: [
            { text: "According to paragraph 1, what helped the music industry's income grow again?", options: ["streaming", "CD sales", "illegal file-sharing", "radio advertising"], answer: 0 },
            { text: "According to paragraph 2, why do artists need millions of plays to earn significant income?", options: ["Payments per stream are very small.", "Streaming services do not pay artists.", "Only superstars are paid.", "Songs can only be played once."], answer: 0 },
            { text: "The word \"distributed\" in paragraph 2 is closest in meaning to", options: ["shared out", "collected", "hidden", "increased"], answer: 0 },
            { text: "How would a 'user-centric' system work?", options: ["Each subscriber's fee would go only to the artists that person listens to.", "All money would go to record labels.", "Users would pay per song.", "Artists would pay to be streamed."], answer: 0 },
            { text: "According to paragraph 3, what advantage has streaming given independent musicians?", options: ["It is easier to reach a global audience.", "They earn more than superstars.", "They no longer need to perform live.", "They receive free advertising on TV."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Bülent", prompt: "Why are you buying so much fruit?", chunks: ["I", "am making", "a fruit salad", "for", "the party"], end: "." },
      { promptBy: "Lisa", prompt: "Did you enjoy the theater festival?", chunks: ["we", "saw", "three", "excellent", "performances"], end: "." },
      { promptBy: "Deniz", prompt: "I'm always tired in the afternoon.", chunks: ["have you", "tried", "taking", "a short", "walk after lunch"], end: "?" },
      { promptBy: "Ben", prompt: "How did you find your apartment?", chunks: ["a friend", "told me", "about it", "on", "social media"], end: "." },
      { promptBy: "Esra", prompt: "When will the elevator be repaired?", chunks: ["the technician", "will", "fix it", "by", "Thursday"], end: "." },
      { promptBy: "Adam", prompt: "Why is the restaurant so empty tonight?", chunks: ["most people", "are watching", "the match", "at", "home"], end: "." },
      { promptBy: "Gizem", prompt: "What did the doctor recommend?", chunks: ["he", "recommended", "drinking", "more water", "every day"], end: "." },
      { promptBy: "Oliver", prompt: "Where did you spend your vacation?", chunks: ["we", "rented", "a small house", "near", "the lake"], end: "." },
      { promptBy: "Ayça", prompt: "This exercise is too difficult.", chunks: ["should", "we", "ask", "the teacher", "for help"], end: "?" },
      { promptBy: "Kyle", prompt: "Why did you start learning the violin?", chunks: ["I", "fell in love", "with", "classical", "music"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently bought a new washing machine, and the store promised free installation. However, the installer never arrived on the scheduled day, and nobody called you. You want to contact the store manager.",
      to: "the store manager, Mr. Yavuz",
      subject: "Missed washing machine installation",
      tasks: ["Give details of your purchase and the installation appointment.", "Explain what happened and how it affected you.", "Say what you want the store to do."],
      sample: "Dear Mr. Yavuz,\n\nOn May 10, I bought a washing machine from your store on Atatürk Street, and the salesperson promised free installation. The installation was scheduled for Saturday, May 17, between 9 a.m. and 1 p.m., and I received a confirmation message the day before.\n\nUnfortunately, no one arrived during that time, and nobody from the store called to explain the delay. I waited at home all day, which meant I had to cancel plans with my family. When I called the store in the afternoon, I was told that the installer would contact me, but I have still not heard anything. The machine has now been sitting in my hallway for a week, and I have had to pay to use a laundromat.\n\nI would like the store to arrange a new installation appointment within the next three days, at a time that is confirmed by phone. Given the inconvenience, I would also appreciate it if you could refund the cost of the laundromat or offer a small discount.\n\nI look forward to your prompt reply.\n\nSincerely,\nAylin Karataş",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Psychology",
      professor: {
        name: "Dr. Spencer",
        text: "Some parents give their children rewards, such as money or gifts, for getting good grades at school. They believe this motivates children to work harder. Others think it teaches children to study only for rewards rather than for the joy of learning. Should parents reward children for good grades? Explain your view.",
      },
      students: [
        { name: "Charlotte", text: "Yes. Adults get paid for doing good work, so why not children? Rewards can motivate kids who aren't interested in school." },
        { name: "Volkan", text: "No. If children always expect a reward, they'll stop trying when there isn't one. They should learn that education itself is valuable." },
      ],
      sample: "I think parents should be careful about rewarding children with money or gifts for good grades, although some forms of recognition can be helpful. Volkan makes an important point: research on motivation suggests that when people are rewarded for an activity, they may come to see it as work and lose their natural interest. Children who are paid for every high grade might stop putting in effort when rewards disappear or might focus only on grades rather than on understanding. On the other hand, Charlotte is right that some children need encouragement, especially in subjects they find difficult. Rather than offering money, parents could praise effort and progress, celebrate achievements with a special activity together or let children choose a family outing. This recognizes hard work without turning learning into a transaction.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new assistant at a dental clinic. The dentist is telling you what to say to patients.",
      sentences: [
        "Hello, please come in and sit down.",
        "The dentist will be with you shortly.",
        "Please open your mouth wide.",
        "This will only take a few minutes.",
        "Do not eat or drink anything for two hours.",
        "If you feel any pain after the treatment, you can take a painkiller and call us tomorrow.",
        "We recommend that you visit us for a check-up every six months and brush your teeth carefully twice a day with a soft toothbrush.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about music and entertainment. The researcher will ask you some questions.",
      questions: [
        {
          text: "What kind of music do you enjoy listening to, and when?",
          sample: "I enjoy listening to many kinds of music, but my favorites are indie pop and Turkish folk music. I usually listen to energetic pop songs in the morning while getting ready or when I'm exercising, because they give me energy. In the evening, I prefer calmer music, like acoustic or folk songs, to help me relax. I also listen to instrumental music while studying, because songs with lyrics distract me.",
        },
        {
          text: "Do you prefer listening to music alone or going to live concerts?",
          sample: "I usually listen to music alone because it's easy and I can do it anywhere, like on the bus or while studying. However, I love going to live concerts when I have the chance. The atmosphere at a concert is completely different. You can feel the energy of the crowd and see the musicians performing in front of you. It's a shared experience that makes the music feel more powerful and memorable.",
        },
        {
          text: "Should music be an important part of school education?",
          sample: "Yes, I think music should be an important part of school education. Learning to play an instrument or sing in a choir teaches discipline, patience and teamwork. Some studies suggest that music education can also improve memory and concentration. In addition, music allows students to express their emotions and creativity, which is important for their well-being. Even students who don't become musicians can develop a lifelong appreciation for music.",
        },
        {
          text: "Do you think artists should be able to earn more from streaming services?",
          sample: "I think artists, especially smaller ones, should earn more from streaming services. At the moment, many musicians receive very little money per stream, so only the most famous artists can earn a good living from recordings. Streaming companies and record labels make large profits, and the artists who create the music deserve a fairer share. Perhaps streaming services could change how they distribute money, so that each user's subscription goes to the artists they actually listen to.",
        },
      ],
    },
  },
};
