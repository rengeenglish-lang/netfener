import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 66 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_66: ToeflTest = {
  id: "toefl-66",
  no: 66,
  title: "TOEFL iBT Practice Test 66",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Raincoats",
          text: "For centuries, people protected themselves from rain with cloaks made of wool or animal sk{{ins}}, but these became heavy when wet. In 1823, a Scottish chemist named Charles Macintosh found a way to make cloth water{{proof}}. He placed a thin layer of rubber dissolved in a liquid between two pieces of fab{{ric}}. The new material kept people dry, but early coats smelled unpl{{easant}} and became stiff in cold weat{{her}} and sticky in heat. Later improvements in rubber solved many of these prob{{lems}}. The coats became so popular in Britain that raincoats are still often called \"macs\" in his hon{{or}}. Today, most raincoats are made of light synthetic mate{{rials}} that keep out water while allowing sweat to esc{{ape}}, making them much more comfor{{table}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Picking up a prescription",
          text: [
            "Hi Ayla, I'm still feeling sick and can't get out of bed. The doctor sent my prescription to the pharmacy on Bank Street. Could you pick it up for me on your way home?",
            "The pharmacist just needs my name and date of birth. I'll pay you back when I'm better. Thank you so much!",
          ],
          questions: [
            { text: "Why can't the writer go to the pharmacy?", options: ["The writer is still sick.", "The pharmacy is closed.", "The writer is at work.", "The writer lost the prescription."], answer: 0 },
            { text: "What does the pharmacist need?", options: ["the writer's name and date of birth", "a written letter from the doctor", "the writer's ID card", "a payment in advance"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Sports hall floor repairs",
          text: [
            "SPORTS HALL CLOSED FOR REPAIRS",
            "The main sports hall will be closed from March 10 to March 21 while the wooden floor is repaired and repainted. All basketball, volleyball and badminton sessions in the hall are canceled during this period.",
            "Some classes will move temporarily to the smaller hall next to the swimming pool; please check the online timetable for updates. Members who had booked courts will receive a full refund automatically.",
          ],
          questions: [
            { text: "Why will the sports hall be closed?", options: ["The wooden floor is being repaired and repainted.", "A competition will be held there.", "The roof is leaking.", "It is being turned into a pool."], answer: 0 },
            { text: "Where will some classes move?", options: ["to the smaller hall next to the swimming pool", "to the library", "outdoors", "to another university"], answer: 0 },
            { text: "What will members who booked courts receive?", options: ["a full refund automatically", "a free membership", "a new booking next month", "a discount on classes"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How the Dutch reclaimed land from the sea",
          paragraphs: [
            "About a quarter of the Netherlands lies below sea level, and much of the rest would flood regularly without human protection. For more than a thousand years, the Dutch have fought to protect their land from the sea and from rivers, and they have also created large areas of new land. These reclaimed areas, known as polders, are surrounded by dikes, walls of earth that keep water out.",
            "Creating a polder involves building a dike around an area of shallow water, such as a lake or a marshy part of the coast, and then removing the water inside. For centuries, this was done using windmills, which turned large paddle wheels or screws that lifted water into canals that carried it away. Later, steam-powered pumps and then electric pumps made the process much faster. Once the land is dry, it must be carefully managed, because the soil continues to sink as it dries and as peat decomposes, so pumping must continue permanently.",
            "In the twentieth century, the Dutch carried out some of the largest engineering projects in the world. After a devastating flood in 1953 killed more than eighteen hundred people, the country began the Delta Works, a vast system of dams, barriers and locks designed to protect the southwestern coast. Today, with sea levels rising due to climate change, Dutch engineers are rethinking their approach. Instead of only building higher walls, they are also giving rivers more room to flood safely, creating floating homes and restoring natural features such as dunes and wetlands that can absorb water.",
          ],
          questions: [
            { text: "According to paragraph 1, what is a polder?", options: ["reclaimed land surrounded by dikes", "a type of windmill", "a Dutch river", "a sea wall made of stone"], answer: 0 },
            { text: "According to paragraph 2, how was water traditionally removed from polders?", options: ["by windmills that lifted water into canals", "by digging deep wells", "by waiting for it to evaporate", "by planting trees"], answer: 0 },
            { text: "The word \"decomposes\" in paragraph 2 is closest in meaning to", options: ["breaks down", "grows", "freezes", "moves"], answer: 0 },
            { text: "Why must pumping continue permanently in polders?", options: ["The soil continues to sink.", "It rains every day.", "Windmills stopped working.", "Dikes are made of sand."], answer: 0 },
            { text: "According to paragraph 3, how are Dutch engineers rethinking flood protection?", options: ["by giving rivers more room and restoring natural features", "by only building higher walls", "by moving everyone inland", "by stopping all pumping"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My grandmother's recipe",
          text: "My grandmother makes the best lentil soup in the wor{{ld}}. Last winter, she finally taught me her rec{{ipe}}. First, we washed the red lentils in cold wa{{ter}}. Then we cut an onion and a car{{rot}} into small pieces. We cooked them in a big pot with a little but{{ter}}. After that, we added the lentils, water and some sa{{lt}}. We let the soup cook slowly for about an ho{{ur}}. At the end, my grandmother added lemon juice and a little red pep{{per}}. The soup was delicious! Now I make it for my fam{{ily}} every Sun{{day}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Mosaic art class",
          text: [
            "CREATE YOUR OWN MOSAIC!",
            "Learn how to make beautiful pictures with small pieces of colored glass and tile in our mosaic class at Art House, every Wednesday from 6 to 8 p.m.",
            "The four-week course costs $80, including all materials. Each student will make a small mosaic mirror to take home. Classes are suitable for complete beginners.",
          ],
          questions: [
            { text: "What will students use to make pictures?", options: ["small pieces of colored glass and tile", "paint and brushes", "paper and glue", "wood"], answer: 0 },
            { text: "How long is the course?", options: ["four weeks", "one day", "two months", "one year"], answer: 0 },
            { text: "What will each student take home?", options: ["a small mosaic mirror", "a painting", "a book", "a certificate only"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How ladybugs help gardens",
          paragraphs: [
            "Ladybugs are small, round insects. Many of them are red with black spots. Gardeners are usually very happy to see them.",
            "Ladybugs eat tiny insects called aphids. Aphids feed on plants and can damage flowers and vegetables. One ladybug can eat thousands of aphids during its life.",
            "Ladybugs lay their eggs on plants where there are many aphids. When the young ladybugs hatch, they begin eating aphids right away. Because ladybugs protect plants, some farmers buy them instead of using chemicals to kill insects.",
          ],
          questions: [
            { text: "What color are many ladybugs?", options: ["red with black spots", "green with white spots", "blue", "yellow with stripes"], answer: 0 },
            { text: "What do ladybugs eat?", options: ["tiny insects called aphids", "leaves", "flowers", "fruit"], answer: 0 },
            { text: "The word \"damage\" in paragraph 2 is closest in meaning to", options: ["harm", "grow", "water", "clean"], answer: 0 },
            { text: "Where do ladybugs lay their eggs?", options: ["on plants with many aphids", "in the soil", "in water", "in trees far from plants"], answer: 0 },
            { text: "Why do some farmers buy ladybugs?", options: ["to protect plants instead of using chemicals", "to sell them", "to keep as pets", "to feed birds"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Negativity bias",
          text: "People tend to pay more attention to negative information than to positive information of the same stren{{gth}}. A single critical comment can stay in our minds longer than several comp{{liments}}, and losing money usually feels worse than winning the same am{{ount}} feels good. Psychologists call this tendency negativity bi{{as}}. Some researchers believe it developed because, for early humans, noticing dan{{ger}} was more important for survival than noticing pleas{{ant}} things. Missing a threat could be deadly, while missing an oppor{{tunity}} was usually less serious. Today, this bias may explain why bad news spreads so qui{{ckly}} and why negative political adverti{{sing}} is often effec{{tive}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Research data storage rules",
          text: [
            "To: All graduate researchers",
            "From: Research Integrity Office",
            "Subject: New rules for storing research data",
            "To protect participants' privacy and comply with national regulations, all research data containing personal information must now be stored on the university's secure research server. Personal laptops, USB drives and free cloud services may no longer be used to store such data.",
            "Each research group will receive a protected folder on the server, which can be accessed only by approved members. Data must be kept for at least five years after a project ends. Researchers who need help transferring existing data should contact IT Services before the end of the month.",
          ],
          questions: [
            { text: "Why are the new rules being introduced?", options: ["to protect participants' privacy and comply with regulations", "to save money", "to make data public", "to reduce the number of projects"], answer: 0 },
            { text: "Where must data containing personal information be stored?", options: ["on the university's secure research server", "on personal laptops", "on USB drives", "on free cloud services"], answer: 0 },
            { text: "How long must data be kept after a project ends?", options: ["at least five years", "one month", "until graduation", "ten years"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The debate over lab-grown meat",
          paragraphs: [
            "Lab-grown meat, also called cultivated or cell-based meat, is produced by growing animal cells in large containers called bioreactors rather than by raising and slaughtering animals. Scientists take a small sample of cells from a living animal and place them in a nutrient-rich liquid that allows them to multiply. Over several weeks, these cells can be grown into muscle and fat tissue that resembles conventional meat. The first lab-grown burger was presented in 2013 and cost hundreds of thousands of dollars to produce.",
            "Supporters argue that this technology could transform the food system. Raising livestock requires enormous amounts of land, water and feed, and it is a significant source of greenhouse gas emissions. Producing meat from cells could, in theory, greatly reduce these impacts and eliminate the need to kill animals. It could also reduce the risk of diseases that spread from farm animals to humans and lower the use of antibiotics in agriculture.",
            "However, many challenges remain. Producing cultivated meat on a large scale is still extremely expensive, and the nutrient solutions used to grow cells have traditionally contained ingredients derived from animals, although companies are developing alternatives. Some researchers argue that if bioreactors are powered by fossil fuels, the environmental benefits may be smaller than expected. Consumer acceptance is another uncertainty; surveys suggest that many people are curious but hesitant to eat meat produced in a laboratory. A few countries have approved the sale of cultivated meat, while others have banned it, reflecting deep disagreement about its role in the future of food.",
          ],
          questions: [
            { text: "According to paragraph 1, how is lab-grown meat produced?", options: ["by growing animal cells in bioreactors", "by mixing plants with meat", "by cloning entire animals", "by freezing meat for long periods"], answer: 0 },
            { text: "According to paragraph 2, how could lab-grown meat benefit the environment?", options: ["by reducing land, water and emissions from livestock", "by increasing the number of farms", "by using more antibiotics", "by producing more feed"], answer: 0 },
            { text: "The word \"hesitant\" in paragraph 3 is closest in meaning to", options: ["unsure and slow to act", "excited", "angry", "experienced"], answer: 0 },
            { text: "According to paragraph 3, why might the environmental benefits be smaller than expected?", options: ["Bioreactors may be powered by fossil fuels.", "Cells grow too quickly.", "It requires more animals.", "It uses no energy."], answer: 0 },
            { text: "What does the author suggest about the future of lab-grown meat?", options: ["There is deep disagreement about its role.", "It will soon replace all meat.", "It has been banned everywhere.", "It is already cheaper than conventional meat."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Serkan", prompt: "Why are you going to bed so early?", chunks: ["I", "have to", "catch", "a flight", "at six"], end: "." },
      { promptBy: "Amy", prompt: "Did you enjoy the camping trip?", chunks: ["we", "had", "a great time", "despite", "the rain"], end: "." },
      { promptBy: "Defne", prompt: "I'm bored with my usual lunch.", chunks: ["why don't", "you", "try", "the new", "salad bar"], end: "?" },
      { promptBy: "Matt", prompt: "How did you get to the conference?", chunks: ["I", "took", "the train", "and then", "a taxi"], end: "." },
      { promptBy: "Feride", prompt: "When will the repairs be finished?", chunks: ["the workers", "said", "they", "will finish", "by Friday"], end: "." },
      { promptBy: "Joe", prompt: "Why is the library closed today?", chunks: ["it", "is", "closed", "for", "staff training"], end: "." },
      { promptBy: "Melis", prompt: "What did you think of the lecture?", chunks: ["it", "was", "clear", "and very", "well organized"], end: "." },
      { promptBy: "Nathan", prompt: "Where did you get that jacket?", chunks: ["I", "bought it", "at", "a second-hand", "shop"], end: "." },
      { promptBy: "Ceyda", prompt: "I can't open this jar.", chunks: ["do you", "want", "me", "to try", "opening it"], end: "?" },
      { promptBy: "Steve", prompt: "Why did you start a podcast?", chunks: ["I", "wanted to", "share", "my love", "of history"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are planning to take a month-long summer course at a university in another country. You have questions about accommodation and want to write to the summer school office.",
      to: "the summer school office",
      subject: "Questions about accommodation",
      tasks: ["Introduce yourself and the course you will attend.", "Ask about accommodation options.", "Ask about other practical matters, such as meals or transport."],
      sample: "Dear Summer School Office,\n\nMy name is Burcu Koç, and I am a third-year psychology student from Turkey. I have been accepted to the four-week summer course 'Introduction to Cognitive Neuroscience', which begins on July 7, and I am very much looking forward to attending.\n\nI would like to ask about accommodation options for students. Does the university offer rooms in student residences during the summer, and if so, are there single rooms available? I would also like to know the price per week and whether bedding and towels are provided. If university housing is not available, could you recommend any nearby guesthouses or apartments that other international students have used?\n\nI also have a few practical questions. Are meals available in the residence or on campus, and are there kitchens where students can cook? Finally, could you tell me the best way to travel from the airport to the university? Any information about public transport passes for students would be very helpful.\n\nThank you very much for your help.\n\nBest regards,\nBurcu Koç",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education",
      professor: {
        name: "Dr. Simmons",
        text: "Some schools have replaced traditional textbooks with tablets and digital materials. Supporters say this makes learning more interactive and reduces the weight of students' bags. Others argue that screens distract students and that reading on paper leads to better understanding. Should schools replace printed textbooks with digital materials? Explain your view.",
      },
      students: [
        { name: "Olivia", text: "Yes. Digital materials can include videos, quizzes and up-to-date information. Students are already used to screens, so it makes learning more engaging." },
        { name: "Emir", text: "No. Studies show people often understand and remember more when they read on paper. Tablets also make it easy to get distracted by games and messages." },
      ],
      sample: "I believe schools should use a combination of printed textbooks and digital materials rather than replacing books completely. Olivia is right that digital tools offer real advantages: interactive simulations, videos and instant quizzes can make difficult topics easier to understand, and digital materials can be updated quickly when information changes. They also reduce the weight students carry every day. However, Emir makes an important point. Research suggests that many readers understand longer and more complex texts better on paper, and tablets connected to the internet can easily distract young students. A balanced approach would be to keep printed textbooks for core reading and use digital resources for practice, research and multimedia activities, with clear rules about device use in class.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new employee at a cinema. The manager is telling you what to say to customers.",
      sentences: [
        "Good evening, which film would you like to see?",
        "The next show starts at eight o'clock.",
        "Popcorn and drinks are sold over there.",
        "Please turn off your phone during the film.",
        "Screen number four is on the second floor.",
        "Children under twelve must be accompanied by an adult for films that start after nine.",
        "If you become a member of our cinema club, you will receive a free ticket on your birthday and discounts on snacks every time you visit.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about food and eating habits. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is your favorite meal, and why?",
          sample: "My favorite meal is my mother's stuffed grape leaves, served with yogurt. She fills the leaves with rice, onions, herbs and spices, and they take hours to prepare, so we usually eat them only on special occasions. I love them not only because they're delicious but also because they remind me of family gatherings and holidays at home. Whenever I visit my parents, my mother makes them for me.",
        },
        {
          text: "Do you prefer eating at home or in restaurants?",
          sample: "I generally prefer eating at home, because it's cheaper and I can control what goes into my food. I also enjoy cooking with my roommates and trying new recipes together. However, I like going to restaurants occasionally, especially to try food from other countries or to celebrate a special occasion with friends. Eating out can be a nice break from cooking and washing dishes.",
        },
        {
          text: "Should schools serve only healthy food?",
          sample: "I think schools should mainly serve healthy food, because many children eat at least one meal a day at school, and good nutrition affects their health and ability to concentrate. Schools have a responsibility to set a good example. However, I don't think every treat needs to be banned. Occasional desserts or special meals on holidays can be part of a balanced diet. The goal should be to teach children healthy habits, not to make food seem like a punishment.",
        },
        {
          text: "How do you think people's diets will change in the future?",
          sample: "I think people's diets will become more plant-based in the future, partly because of concerns about the environment and animal welfare. We may see more plant-based meat and even lab-grown meat in supermarkets. Technology might also help people personalize their diets, for example with apps that suggest meals based on their health data. At the same time, I hope people will continue to value traditional home cooking and local ingredients.",
        },
      ],
    },
  },
};
