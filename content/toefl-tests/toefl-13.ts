import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 13 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_13: ToeflTest = {
  id: "toefl-13",
  no: 13,
  title: "TOEFL iBT Practice Test 13",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Lighthouses",
          text: "For centuries, lighthouses have hel{{ped}} ships travel safely at night. Ea{{rly}} lighthouses used wood fires or can{{dles}}, which were not very bright. In the nineteenth cent{{ury}}, a French scientist designed a special le{{ns}} made of many rings of gl{{ass}}. It could send a beam of light more than thir{{ty}} kilometers out to sea. Each lighthouse also had its own pat{{tern}} of flashes, so sailors could iden{{tify}} it. Today, most lighthouses are autom{{atic}} and no longer need a keeper.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Package delivery",
          text: [
            "Hi Sam, a package arrived for you while you were out. The delivery driver left it with me because it needed a signature.",
            "I'm going to the gym at 6, so come and get it before then, or I'll leave it with the building manager.",
          ],
          questions: [
            { text: "Why did the driver leave the package with the writer?", options: ["Sam asked the driver to.", "It needed a signature.", "Sam's door was locked.", "The package was damaged."], answer: 1 },
            { text: "What will the writer do if Sam does not come before 6?", options: ["return the package", "leave it with the building manager", "open the package", "take it to the gym"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Printing credits",
          text: [
            "PRINTING ON CAMPUS: CHANGES THIS SEMESTER",
            "Each student will receive 300 free printing credits at the start of the semester. One black-and-white page uses one credit; one color page uses five credits.",
            "Unused credits cannot be carried over to the next semester. Additional credits can be purchased at the library service desk. Printers in the computer labs will now print double-sided by default to reduce paper use.",
          ],
          questions: [
            { text: "How many credits does a color page use?", options: ["one", "three", "five", "ten"], answer: 2 },
            { text: "What happens to unused credits at the end of the semester?", options: ["They are refunded.", "They are carried over.", "They are lost.", "They are given to new students."], answer: 2 },
            { text: "What change has been made to the printers?", options: ["They print in color only.", "They print double-sided by default.", "They are now free for staff.", "They can only be used in the library."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Animal camouflage at sea",
          paragraphs: [
            "In the open ocean there is nowhere to hide, so many animals depend on camouflage to avoid being seen. One common strategy is countershading. Fish such as tuna and mackerel are dark blue or gray on their backs and silvery white underneath. Seen from above, their dark backs blend with the deep water below; seen from below, their pale bellies blend with the bright surface.",
            "Some animals go further and make themselves almost invisible. Many jellyfish, comb jellies and small crustaceans are transparent, allowing light to pass through their bodies. Transparency is easier to achieve in water than on land, because water and living tissue bend light in similar ways, so the edges of a transparent body are hard to see. However, certain organs, such as eyes and the gut, are difficult to make transparent, and some animals reduce their visibility by keeping these organs as small as possible.",
            "In the twilight zone, between about two hundred and one thousand meters deep, a different problem arises. Predators there often look upward to spot the dark outlines of prey against the faint light from above. To hide these silhouettes, many fish and squid produce their own light from organs on their undersides, matching the brightness of the light coming from the surface. This technique, called counter-illumination, can be adjusted as the light changes, for example when a cloud passes overhead.",
          ],
          questions: [
            { text: "According to paragraph 1, why are the backs of tuna dark?", options: ["to attract mates", "to blend with the deep water when seen from above", "to absorb heat from the sun", "to warn predators"], answer: 1 },
            { text: "The word \"achieve\" in paragraph 2 is closest in meaning to", options: ["avoid", "accomplish", "measure", "explain"], answer: 1 },
            { text: "According to paragraph 2, why is transparency easier in water than on land?", options: ["Water is always dark.", "Water and tissue bend light in similar ways.", "Animals in water are smaller.", "There is less light in water."], answer: 1 },
            { text: "What problem do some transparent animals face?", options: ["Their eyes and gut are hard to make transparent.", "They cannot swim fast.", "They are visible at night.", "They need more food."], answer: 0 },
            { text: "What is the purpose of counter-illumination?", options: ["to attract prey from below", "to hide an animal's silhouette from predators below", "to communicate with other fish", "to see in the dark"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our school garden",
          text: "Our school has a small garden behi{{nd}} the main building. Every spring, students pla{{nt}} vegetables such as tomatoes and car{{rots}}. We water the plants after cla{{ss}} and pull out the we{{eds}}. In summer, we pick the vegeta{{bles}} and use them in the school kit{{chen}}. Working in the garden is fun, and it tea{{ches}} us where our food comes fr{{om}}. Next year, we want to gr{{ow}} strawberries too.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Language exchange",
          text: [
            "LANGUAGE EXCHANGE PARTNERS WANTED",
            "Want to practice a new language? Join our language exchange evenings every Wednesday from 6 to 8 p.m. in the International Center.",
            "You will be paired with a student who speaks the language you are learning and wants to learn yours. It's free, and drinks are provided. Sign up at the International Center reception.",
          ],
          questions: [
            { text: "When do the language exchange evenings take place?", options: ["every Monday", "every Wednesday", "every Friday", "every weekend"], answer: 1 },
            { text: "Who will each student be paired with?", options: ["a language teacher", "a student who wants to learn their language", "a tourist", "a librarian"], answer: 1 },
            { text: "How can students take part?", options: ["by paying a fee", "by signing up at the International Center", "by emailing a teacher", "by taking a test"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why we get goosebumps",
          paragraphs: [
            "When we feel cold or frightened, small bumps sometimes appear on our skin. These are called goosebumps, because the skin looks like the skin of a bird without its feathers.",
            "Goosebumps happen when tiny muscles at the base of each hair tighten and make the hair stand up. In animals with thick fur, this traps a layer of air near the skin, which helps them stay warm. It also makes the animal look bigger when it is in danger.",
            "Humans have very little body hair, so goosebumps no longer keep us warm. Scientists think they are left over from our distant ancestors, who had much more hair.",
          ],
          questions: [
            { text: "When do goosebumps usually appear?", options: ["when we are hungry", "when we feel cold or frightened", "when we sleep", "when we are happy"], answer: 1 },
            { text: "What causes goosebumps?", options: ["Tiny muscles make the hairs stand up.", "The skin becomes dry.", "Blood moves away from the skin.", "Hairs fall out."], answer: 0 },
            { text: "How do goosebumps help animals with thick fur?", options: ["They help them run faster.", "They trap air and keep them warm.", "They change the color of the fur.", "They help them find food."], answer: 1 },
            { text: "The word \"ancestors\" in paragraph 3 is closest in meaning to", options: ["children", "relatives who lived long ago", "neighbors", "enemies"], answer: 1 },
            { text: "Why don't goosebumps keep humans warm?", options: ["Humans have very little body hair.", "Humans live indoors.", "Human muscles are too weak.", "Humans wear clothes."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The tragedy of the commons",
          text: "In 1968, the ecologist Garrett Hardin popularized the idea of the tragedy of the commons. He imag{{ined}} a pasture open to all herders, each of whom bene{{fits}} from adding more animals while sharing the co{{st}} of overgrazing with everyone else. Acting ratio{{nally}}, every herder increases the herd, and the pas{{ture}} is eventually destroyed. Later research by the econo{{mist}} Elinor Ostrom showed, however, that many commu{{nities}} have managed shared resources succe{{ssfully}} for centuries by developing their own ru{{les}} and ways of monitoring them, a find{{ing}} that earned her a Nobel Prize.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to the exam timetable",
          text: [
            "To: All students enrolled in BIOL 210",
            "From: Dr. Rebecca Owens",
            "Subject: Final exam – change of date and format",
            "Because of a scheduling conflict with the main examination hall, the final exam for BIOL 210 has been moved from December 12 to December 15. It will still begin at 9 a.m. but will now take place in the Science Center, Rooms 101 and 102. Your room will be assigned by the first letter of your last name.",
            "Please also note that the exam will no longer include an essay section. Instead, there will be additional short-answer questions covering the laboratory sessions. Students who have another exam scheduled at the same time should contact me by November 30 so that alternative arrangements can be made.",
          ],
          questions: [
            { text: "Why has the exam been moved?", options: ["The professor will be away.", "There is a conflict with the main examination hall.", "Students requested a later date.", "The laboratory sessions were cancelled."], answer: 1 },
            { text: "How will students know which room to go to?", options: ["by their student number", "by the first letter of their last name", "by their lab group", "by email on the morning of the exam"], answer: 1 },
            { text: "What change has been made to the exam format?", options: ["The essay section has been replaced by short-answer questions.", "The exam will be taken online.", "The exam will be shorter.", "Laboratory questions have been removed."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why some languages whistle",
          paragraphs: [
            "In a number of mountainous and forested regions around the world, people communicate over long distances by whistling. On La Gomera, one of the Canary Islands, residents traditionally used a whistled form of Spanish known as Silbo Gomero to send messages across deep valleys. Similar whistled languages have been documented in places as different as the mountains of northern Turkey, the highlands of Mexico and the rainforests of the Amazon. In each case, the whistled form is not a separate language but a way of transmitting the speakers' ordinary spoken language.",
            "Whistling is effective in such environments because a whistle carries much farther than a shout. A skilled whistler can be understood several kilometers away, and the sound stands out against natural background noise. Whistled speech preserves the key features of the spoken language in a simplified form. In languages that use pitch to distinguish words, such as many in Mexico and Africa, whistlers follow the melody of the speech. In languages without such tones, such as Spanish and Turkish, whistlers convert the changing qualities of vowels and consonants into changes in pitch.",
            "Researchers have found these practices revealing about how the brain processes language. Studies of whistlers in northern Turkey suggested that whistled Turkish is processed more evenly by both sides of the brain than spoken Turkish, which relies more heavily on the left side. Yet whistled languages are disappearing as roads and mobile phones make long-distance communication easier. In response, the Canary Islands made Silbo Gomero a compulsory subject in local schools in 1999, and UNESCO later recognized it as part of the world's intangible cultural heritage.",
          ],
          questions: [
            { text: "According to paragraph 1, what is true of whistled languages?", options: ["They are entirely separate languages.", "They are ways of transmitting ordinary spoken languages.", "They exist only in the Canary Islands.", "They were invented by scientists."], answer: 1 },
            { text: "The word \"preserves\" in paragraph 2 is closest in meaning to", options: ["changes", "keeps", "hides", "doubles"], answer: 1 },
            { text: "According to paragraph 2, how do whistlers of Spanish and Turkish represent speech?", options: ["by following the melody of tones", "by converting vowel and consonant qualities into changes in pitch", "by whistling one note per word", "by using hand signals"], answer: 1 },
            { text: "What did the studies of Turkish whistlers suggest?", options: ["Whistled language uses only the right side of the brain.", "Whistled language is processed more evenly by both sides of the brain.", "Whistlers cannot understand spoken Turkish.", "Whistling damages hearing."], answer: 1 },
            { text: "Why does the author mention the decision made in 1999?", options: ["to show an effort to preserve a whistled language", "to explain how whistling was invented", "to prove that whistling is easier than speaking", "to describe the arrival of mobile phones"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Lena", prompt: "Why are you leaving so early?", chunks: ["I", "want to", "avoid", "the traffic", "on the highway"], end: "." },
      { promptBy: "Burak", prompt: "Did you get the scholarship?", chunks: ["I", "will find out", "the results", "at the end of", "this month"], end: "." },
      { promptBy: "Chloe", prompt: "I don't understand the homework.", chunks: ["why don't", "we", "go", "to the tutoring center", "together"], end: "?" },
      { promptBy: "Victor", prompt: "Where did you put the projector?", chunks: ["I", "returned it", "to", "the equipment office", "this morning"], end: "." },
      { promptBy: "Deniz", prompt: "How was the lecture on climate change?", chunks: ["the speaker", "explained", "complex ideas", "in a very", "clear way"], end: "." },
      { promptBy: "Paul", prompt: "Why is the library so quiet today?", chunks: ["most students", "have gone", "home", "for", "the long weekend"], end: "." },
      { promptBy: "Yuki", prompt: "Can I borrow your calculator?", chunks: ["you", "can use it", "as long as", "you return it", "after class"], end: "." },
      { promptBy: "Ahmet", prompt: "What are you doing this summer?", chunks: ["I'm", "doing", "an internship", "at", "an engineering firm"], end: "." },
      { promptBy: "Rosa", prompt: "My plants keep dying.", chunks: ["are you", "sure", "they", "get enough", "sunlight"], end: "?" },
      { promptBy: "Felix", prompt: "Why did you change your major?", chunks: ["I", "realized", "that I enjoyed", "economics", "more than law"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are taking an online course, but for the past week you have not been able to access the course videos because of a technical problem.",
      to: "the university's IT help desk",
      subject: "Unable to access course videos",
      tasks: ["Describe the problem you are having.", "Explain what you have already tried.", "Ask for help and say why the problem is urgent."],
      sample: "Dear IT Help Desk,\n\nI am a second-year student taking the online course Introduction to Data Analysis. For the past week, I have been unable to watch any of the course videos on the learning platform. When I click on a video, a message appears saying that the file cannot be loaded, and the screen stays black.\n\nI have already tried several things to solve the problem. I have used two different browsers, cleared my browser history and restarted my laptop. I also tried watching the videos on my phone and on a computer in the library, but the same error message appeared each time, so I do not think the problem is with my device.\n\nCould you please look into this as soon as possible? Our first quiz is next Tuesday, and it is based on the material in the videos, so I am worried that I will fall behind. I would be grateful for any help you can provide.\n\nKind regards,\nEce Demir",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Robinson",
        text: "In many countries, young adults are living with their parents for longer than previous generations did, often until their late twenties. Some people see this as a sensible choice, while others think it delays independence. Do you think it is better for young adults to move out of their parents' home as soon as possible? Why or why not?",
      },
      students: [
        { name: "Ella", text: "I think moving out early is important. Living alone teaches you to manage money, cook and solve problems yourself. These skills are hard to learn if your parents still do everything for you." },
        { name: "Tariq", text: "I don't agree. Rent is very expensive now. Staying with your parents for a few years lets you save money and finish your studies without huge debts." },
      ],
      sample: "I think the answer depends on the situation, but in general I agree more with Tariq. Housing costs in many cities have risen so much that moving out early can force young people into debt or into jobs they don't really want, just to pay the rent. Staying at home for a few years can be a smart financial decision that gives them more freedom later. For example, my older brother lived with our parents until he was twenty-seven and saved enough money to buy a small apartment. However, Ella makes a valid point about independence. Young adults who live at home should still take responsibility for themselves, such as paying a share of the bills, cooking regularly and managing their own schedules. In that way, they can develop independence without facing unnecessary financial pressure.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are volunteering at a city museum. A guide is telling you what to say to visitors at the entrance.",
      sentences: [
        "Welcome to the city museum.",
        "Please leave large bags in the lockers.",
        "Photography is allowed in most rooms.",
        "The café on the first floor is open until five o'clock.",
        "Guided tours in English start every hour from the main hall.",
        "Children under twelve must be accompanied by an adult at all times in the museum.",
        "Visitors who would like to see the special exhibition on ancient Egypt need to buy a separate ticket at the information desk.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people spend their free time. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you enjoy doing in your free time, and why?",
          sample: "In my free time, I really enjoy playing football with friends and reading novels. Football is a great way to relax after studying, because I can stop thinking about assignments and just focus on the game. It also helps me stay fit. Reading is different. I usually read before bed, and it helps me slow down after a busy day. I especially like mystery novels, because I enjoy trying to solve the puzzle before the detective does.",
        },
        {
          text: "Do you think people today have more or less free time than in the past?",
          sample: "I think people today actually have less real free time, even though technology was supposed to save us time. Many people work longer hours or have several jobs, and phones mean that work emails can reach us at any time. Even when we're not working, we often spend our free time scrolling on our phones instead of doing something relaxing. In the past, people may have worked hard, but when they finished work, they were more completely free.",
        },
        {
          text: "Some people prefer to spend their free time at home, while others prefer to go out. Which do you prefer?",
          sample: "I prefer to go out, especially at the weekend. During the week I spend a lot of time sitting at my desk, so on Saturdays I like to meet friends, go hiking or explore a new neighborhood. Going out gives me new experiences and helps me feel more energetic. That said, I do enjoy a quiet evening at home sometimes, watching a film or cooking a nice dinner, particularly when I'm tired after exams.",
        },
        {
          text: "Should schools teach students how to use their free time well? Why or why not?",
          sample: "I think schools could help, but they shouldn't make free time feel like another lesson. Many young people spend most of their free time on screens because they haven't tried other activities. Schools can introduce students to clubs, sports, music and volunteering, so they discover hobbies they enjoy. Teaching students about balancing study and rest would also be useful. But ultimately, free time should be chosen freely, so the goal should be to offer options, not to give instructions.",
        },
      ],
    },
  },
};
