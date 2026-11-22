import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 95 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_95: ToeflTest = {
  id: "toefl-95",
  no: 95,
  title: "TOEFL iBT Practice Test 95",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Garden hoses",
          text: "Watering plants by hand with buckets was hard work, and for most of history it was the only opt{{ion}}. Early hoses were made from leather and were used mainly by firefigh{{ters}}. In the seventeenth century, Dutch inventors created leather hoses that could carry water from a pump to a fi{{re}}, but they were heavy and often leaked. In the nineteenth century, rubber hoses became avai{{lable}}, and they were much lighter and more flex{{ible}}. As more homes were connected to running wa{{ter}}, garden hoses became common in suburban gar{{dens}}. Today, most hoses are made of plastic or rub{{ber}} and can be attached to sprinklers. However, in dry regions, cities sometimes limit the use of hoses during summer to save wa{{ter}} and pro{{tect}} supplies.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Help at the fair",
          text: [
            "Hi Sibel! Our club has a stall at the spring fair on Saturday, selling handmade cards and bookmarks. One of our volunteers is sick, so we need an extra person from 10 to 2.",
            "Would you be able to help? You'd just need to talk to customers and take payments. Lunch is on us!",
          ],
          questions: [
            { text: "Why does the club need an extra person?", options: ["One of the volunteers is sick.", "The fair is longer this year.", "They are selling more products.", "The club has a new stall."], answer: 0 },
            { text: "What would Sibel need to do?", options: ["talk to customers and take payments", "make cards", "set up the stall at dawn", "drive the club members"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Late-night bus service",
          text: [
            "NEW LATE-NIGHT BUS SERVICE",
            "Beginning this semester, a late-night bus will run between the main campus and the city center every thirty minutes from 11 p.m. to 3 a.m. on Thursday, Friday and Saturday nights.",
            "The service is free for students with a valid student card. Buses stop at the library, the student residences and the central train station. Please wait at the marked bus stops, as drivers cannot stop elsewhere.",
          ],
          questions: [
            { text: "When does the late-night bus run?", options: ["Thursday, Friday and Saturday nights", "every night", "only on Sundays", "only during exams"], answer: 0 },
            { text: "How much does it cost for students?", options: ["It is free with a valid student card.", "$2 per ride", "$5 per night", "$20 per month"], answer: 0 },
            { text: "Where must passengers wait?", options: ["at the marked bus stops", "anywhere on the road", "inside the library", "at the taxi stand"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How diamonds form",
          paragraphs: [
            "Diamonds are the hardest natural material on Earth, and they are prized both as gemstones and as industrial tools for cutting and drilling. A diamond is made entirely of carbon, the same element found in coal and in the graphite used in pencils. What makes diamonds different is the way their carbon atoms are arranged: each atom is strongly bonded to four others in a rigid, three-dimensional structure, which gives diamonds their remarkable hardness.",
            "Most natural diamonds form deep within the Earth's mantle, about 150 to 200 kilometers below the surface, where temperatures exceed 1,000 degrees Celsius and pressures are tens of thousands of times greater than at the surface. Under these extreme conditions, carbon atoms can arrange themselves into the diamond structure. Many diamonds are estimated to be between one and three billion years old, making them among the oldest materials that humans can hold.",
            "Diamonds reach the surface through rare and violent volcanic eruptions that originate deep in the mantle. These eruptions carry diamonds upward very quickly through narrow channels called kimberlite pipes. If the journey were slow, the diamonds might change into graphite as the pressure decreased. Most diamond mines are located in such ancient volcanic pipes. Today, scientists can also produce diamonds in laboratories by recreating high pressures and temperatures or by depositing carbon from a gas. Laboratory-grown diamonds are chemically identical to natural ones and are increasingly used in jewelry and technology, raising questions about the future of the traditional diamond industry.",
          ],
          questions: [
            { text: "According to paragraph 1, what makes diamonds different from coal and graphite?", options: ["the arrangement of their carbon atoms", "the element they are made of", "their color only", "their age"], answer: 0 },
            { text: "According to paragraph 2, where do most natural diamonds form?", options: ["deep within the Earth's mantle", "on the ocean floor", "in rivers", "in the atmosphere"], answer: 0 },
            { text: "The word \"rigid\" in paragraph 1 is closest in meaning to", options: ["stiff and firm", "soft", "colorful", "light"], answer: 0 },
            { text: "According to paragraph 3, why must diamonds travel to the surface quickly?", options: ["If the journey were slow, they might change into graphite.", "They would melt in the sun.", "They would become too large.", "They would be lost in the ocean."], answer: 0 },
            { text: "What does the author say about laboratory-grown diamonds?", options: ["They are chemically identical to natural diamonds.", "They are softer than natural diamonds.", "They are made of plastic.", "They cannot be used in jewelry."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Visiting an old castle",
          text: "Last summer, my family visited an old castle on a hill near the s{{ea}}. It was more than six hundred years o{{ld}}. We walked across a wooden bri{{dge}} and through a huge gate. Inside, there were tall towers and thick stone wa{{lls}}. A guide told us that soldiers once lived there and protected the ki{{ng}}. We climbed many narrow st{{airs}} to the top of the tallest tower. From there, we could see the whole to{{wn}} and the ships in the harbor. In the gift shop, I bought a small toy sw{{ord}}. It was a very interes{{ting}} day, and I learned a lot about his{{tory}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Climbing wall open day",
          text: [
            "TRY CLIMBING FOR FREE!",
            "The university sports center is holding a climbing wall open day on Saturday, October 18, from 10 a.m. to 4 p.m. Instructors will help beginners try climbing safely.",
            "Shoes and harnesses are provided. No experience is needed, but participants under sixteen must bring a signed form from a parent. Visitors who join the climbing club on the day receive a free T-shirt.",
          ],
          questions: [
            { text: "How much does it cost to try climbing on the open day?", options: ["It is free.", "$5", "$10", "$20"], answer: 0 },
            { text: "What must participants under sixteen bring?", options: ["a signed form from a parent", "their own shoes", "a helmet", "a student card"], answer: 0 },
            { text: "What do visitors who join the club on the day receive?", options: ["a free T-shirt", "a free harness", "free lessons for a year", "a water bottle"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How fish breathe underwater",
          paragraphs: [
            "People and many other animals breathe air with their lungs. Fish live in water, so they need a different way to get oxygen.",
            "Fish breathe with special body parts called gills, which are found on each side of their heads. A fish takes water into its mouth and pushes it out through the gills. The gills take oxygen from the water and send it into the fish's blood.",
            "The gills have many thin, soft parts that give them a very large surface. This helps fish take in as much oxygen as possible. Some fish, like sharks, must keep swimming all the time so that water keeps moving over their gills.",
          ],
          questions: [
            { text: "What do fish use to breathe?", options: ["gills", "lungs", "their tails", "their fins"], answer: 0 },
            { text: "Where are the gills found?", options: ["on each side of the head", "on the tail", "inside the stomach", "on the back"], answer: 0 },
            { text: "What do the gills take from the water?", options: ["oxygen", "salt", "food", "sand"], answer: 0 },
            { text: "The word \"surface\" in paragraph 3 is closest in meaning to", options: ["outside area", "color", "weight", "length"], answer: 0 },
            { text: "Why must some sharks keep swimming?", options: ["so that water keeps moving over their gills", "to find food all the time", "to stay warm", "to escape from boats"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The identifiable victim effect",
          text: "People are often more willing to help a single, identifiable person than a large number of anonymous peo{{ple}} in the same situation. Researchers call this the identifiable victim ef{{fect}}. In one study, participants were asked to donate money to help children facing hun{{ger}}. Those who were shown a photo and the name of one young girl gave significantly more than those who were shown sta{{tistics}} about millions of children in need. Surprisingly, when the photo was combined with the sta{{tistics}}, donations dec{{reased}}. One explanation is that a single person triggers strong emo{{tions}}, while large numbers feel abstract and over{{whelming}}. Charities often use personal stories in their campaigns for this rea{{son}}, although some critics worry that it can influence decisions in unbal{{anced}} ways.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Conference volunteers needed",
          text: [
            "To: Students in the Faculty of Social Sciences",
            "From: Conference Organizing Committee",
            "Subject: Volunteers needed for the international sociology conference",
            "Our faculty will host an international sociology conference from June 12 to 14, with more than five hundred participants from thirty countries. We are looking for student volunteers to help with registration, guide visitors around campus and assist speakers in the lecture rooms.",
            "Volunteers must be available for at least two full days and attend a short training session on June 10. In return, volunteers can attend conference sessions for free, receive lunch each day and obtain a certificate of participation. Students who speak a second language are especially welcome. Please register through the conference website by May 20.",
          ],
          questions: [
            { text: "What will volunteers do?", options: ["help with registration, guide visitors and assist speakers", "give lectures", "write research papers", "organize flights"], answer: 0 },
            { text: "What is required of volunteers?", options: ["availability for at least two full days and attendance at training", "a degree in sociology", "a car", "payment of a fee"], answer: 0 },
            { text: "What do volunteers receive?", options: ["free entry to sessions, lunch and a certificate", "a salary", "free flights", "course credit"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The problem of deepfakes",
          paragraphs: [
            "Advances in artificial intelligence have made it possible to create highly realistic fake videos, images and audio recordings, often called 'deepfakes'. Using machine learning systems trained on large numbers of real images and recordings, software can make it appear that a person said or did something they never actually said or did. While early deepfakes were often easy to detect because of strange facial movements or unnatural voices, the technology has improved rapidly, and some fakes are now very difficult to distinguish from genuine material.",
            "Deepfakes have some legitimate uses. Film studios can use the technology to create special effects or to translate actors' speech into other languages while matching their lip movements. Teachers and museums can use it to create engaging educational content, such as videos in which historical figures appear to speak. However, the technology also poses serious risks. Deepfakes have been used to spread false political messages, to commit fraud by imitating the voices of company executives and to create harmful content about individuals without their consent.",
            "Responding to these risks is challenging. Researchers are developing tools that can detect manipulated media by identifying subtle signs that humans might miss, but creators of deepfakes keep improving their techniques. Some technology companies are adding digital 'watermarks' or labels to content created with artificial intelligence, and some governments have introduced laws that make certain harmful uses of deepfakes illegal. Experts also emphasize the importance of media literacy, encouraging people to check sources and to be cautious about sharing shocking videos before confirming they are genuine.",
          ],
          questions: [
            { text: "According to paragraph 1, why are deepfakes becoming harder to detect?", options: ["The technology has improved rapidly.", "People watch fewer videos.", "Deepfakes are made by hand.", "Cameras have become worse."], answer: 0 },
            { text: "According to paragraph 2, what is one legitimate use of deepfake technology?", options: ["translating actors' speech while matching lip movements", "spreading false political messages", "committing fraud", "creating harmful content"], answer: 0 },
            { text: "The word \"genuine\" in paragraph 1 is closest in meaning to", options: ["real", "fake", "old", "expensive"], answer: 0 },
            { text: "Why is responding to deepfakes challenging, according to paragraph 3?", options: ["Creators keep improving their techniques.", "No one is interested in the problem.", "Detection tools are perfect.", "Deepfakes are legal everywhere."], answer: 0 },
            { text: "What do experts emphasize?", options: ["the importance of media literacy and checking sources", "banning all videos", "trusting every video online", "avoiding the internet completely"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Okan", prompt: "Why are you taking the train today?", chunks: ["my car", "is", "at the garage", "for", "repairs"], end: "." },
      { promptBy: "Sarah", prompt: "Did you enjoy the concert in the park?", chunks: ["the music", "was", "great", "but", "it rained a little"], end: "." },
      { promptBy: "Defne", prompt: "I'm bored with my usual routine.", chunks: ["why don't", "you", "try", "a new", "sport"], end: "?" },
      { promptBy: "Rob", prompt: "How long did your trip to Japan last?", chunks: ["we", "stayed", "there", "for", "two weeks"], end: "." },
      { promptBy: "Elçin", prompt: "When will the photos be ready?", chunks: ["they", "will be", "ready", "by", "Thursday afternoon"], end: "." },
      { promptBy: "Jake", prompt: "Why is the beach so crowded today?", chunks: ["it", "is", "the first", "warm day", "of the year"], end: "." },
      { promptBy: "Aynur", prompt: "What did you do during the holiday?", chunks: ["I", "visited", "my grandparents", "in", "the village"], end: "." },
      { promptBy: "Max", prompt: "Where should we meet tomorrow?", chunks: ["let's", "meet", "outside", "the cinema", "at seven"], end: "." },
      { promptBy: "Zeynep", prompt: "I can't hear the teacher well.", chunks: ["should", "we", "ask her", "to use", "the microphone"], end: "?" },
      { promptBy: "Phil", prompt: "Why did you start volunteering at the shelter?", chunks: ["I", "love", "animals", "and want", "to help them"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently joined an online photography course, but you are having technical problems uploading your assignments. The deadline for the first assignment is approaching. You want to write to the course instructor.",
      to: "the course instructor, Ms. Brown",
      subject: "Problem uploading my first assignment",
      tasks: ["Introduce yourself and the course.", "Describe the technical problem.", "Ask for help and suggest a temporary solution."],
      sample: "Dear Ms. Brown,\n\nMy name is Kaan Erdem, and I am enrolled in your online course Introduction to Digital Photography, which began two weeks ago. I am really enjoying the lessons, especially the videos about using natural light.\n\nI am writing because I am having trouble uploading my first assignment, which is due this Friday at midnight. Every time I try to upload my five photos through the course website, the upload stops at about ninety percent and an error message appears saying that the file could not be processed. I have tried using two different browsers and reducing the size of the images, but the problem continues. I have attached a screenshot of the error message.\n\nCould you please let me know if there is another way to submit my work? As a temporary solution, I could send the photos to you by email or share them through a cloud storage link before the deadline. I would also appreciate any advice on how to fix the upload problem for future assignments.\n\nThank you very much for your help.\n\nBest regards,\nKaan Erdem",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Media Studies",
      professor: {
        name: "Dr. Stewart",
        text: "Some people believe that news organizations should avoid showing violent or disturbing images, even when reporting on wars and disasters. Others argue that such images are necessary to show the truth and make people understand the seriousness of events. Should news organizations show disturbing images? Explain your view.",
      },
      students: [
        { name: "Olivia", text: "Yes, sometimes. Without these images, people may not understand how terrible a war or disaster really is. They can push people to help." },
        { name: "Serkan", text: "I don't think so. Disturbing images can upset viewers, especially children, and they don't respect the dignity of the victims." },
      ],
      sample: "I believe news organizations should sometimes show disturbing images, but only when they are necessary to inform the public, and with clear warnings and careful choices. Olivia is right that powerful images can reveal the reality of war, famine or natural disasters in a way that words alone cannot. Throughout history, certain photographs have changed public opinion and encouraged people to donate or demand political action. However, Serkan raises important concerns. Graphic images can shock and upset viewers, especially children, and showing victims in their worst moments may violate their dignity and their families' privacy. Therefore, news organizations should avoid using such images simply to attract attention, provide warnings before showing them and choose images that convey the seriousness of events without being unnecessarily graphic.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new employee at a jewelry store. Your manager is telling you what to say to customers.",
      sentences: [
        "Good afternoon, welcome to our store.",
        "Are you looking for a gift?",
        "These rings are made of silver.",
        "We can engrave a name for free.",
        "Please let me know if you'd like to try anything on.",
        "If the ring doesn't fit, you can bring it back within two weeks and we will change the size.",
        "All our jewelry comes with a one-year guarantee, and we offer free cleaning for any piece you buy from us.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about technology and trust. The researcher will ask you some questions.",
      questions: [
        {
          text: "How do you decide whether information you see online is true?",
          sample: "When I see information online, especially surprising news, I try to check whether it comes from a reliable source, like a well-known news organization or an official website. I also look for the same information on other websites. If only one unknown site is reporting something, I'm usually suspicious. I also check the date, because sometimes old stories are shared again as if they were new.",
        },
        {
          text: "Do you trust what you read on social media?",
          sample: "I don't trust everything I read on social media. Anyone can post information, and false stories often spread quickly because they are shocking or emotional. I follow some reliable news accounts and experts, but even then I try to check important information elsewhere. I think it's important to be careful and not share posts unless I'm sure they are true.",
        },
        {
          text: "Should technology companies be responsible for stopping false information?",
          sample: "I think technology companies should take some responsibility, because their platforms make it very easy for false information to spread to millions of people. They could label suspicious content, reduce the visibility of false posts and work with independent fact-checkers. However, they should be careful not to remove content unfairly or limit free speech. I think governments, companies and users all need to work together on this problem.",
        },
        {
          text: "How can schools help students deal with false information online?",
          sample: "Schools can help by teaching media literacy as part of regular lessons. Students could learn how to check sources, recognize misleading headlines and identify edited images or videos. Teachers could use real examples from social media and ask students to investigate whether they are true. It's also important to teach students to think critically and to understand why people create false information, so they become more careful users of the internet.",
        },
      ],
    },
  },
};
