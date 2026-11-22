import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 61 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_61: ToeflTest = {
  id: "toefl-61",
  no: 61,
  title: "TOEFL iBT Practice Test 61",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Bubble wrap",
          text: "Bubble wrap was not originally designed for packaging. In 1957, two American engineers tried to create a new kind of textured wall{{paper}} by sealing two shower curtains together so that air was trapped between th{{em}}. The product did not sell as wallpaper, and their next idea, using it to insulate green{{houses}}, also failed. A few years later, however, a large computer company was looking for a way to protect its new mac{{hines}} during shipping. The bubbles of air absorbed sho{{cks}} very well, and the company began to use the mate{{rial}} to wrap its products. Soon, many other businesses did the sa{{me}}. Today, bubble wrap is used to protect fragile ob{{jects}} around the world, and many people enjoy popping the bub{{bles}} just for f{{un}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a bike lock",
          text: [
            "Hi Mehmet, I just realized I left my bike lock at my parents' house. Could I borrow your spare one for a few days?",
            "I'll come to your dorm room after my 3 p.m. class to pick it up. I'll give it back on Sunday when I get mine back. Thanks!",
          ],
          questions: [
            { text: "Why does the writer need a bike lock?", options: ["The writer left the lock at the parents' house.", "The writer's lock was stolen.", "The writer bought a new bike.", "The writer's lock is broken."], answer: 0 },
            { text: "When will the writer return the lock?", options: ["on Sunday", "after the 3 p.m. class", "tomorrow morning", "next month"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Holiday closure",
          text: [
            "RECREATION CENTER: HOLIDAY HOURS",
            "The Recreation Center will be closed from December 24 to January 1 for the winter holidays. During this time, all fitness classes and court reservations are canceled.",
            "Members whose monthly passes include these dates will receive a one-week extension automatically. The outdoor running track will remain open during daylight hours, but no staff will be on duty.",
          ],
          questions: [
            { text: "When will the Recreation Center be closed?", options: ["from December 24 to January 1", "every weekend in December", "only on January 1", "for the whole month of January"], answer: 0 },
            { text: "What will members with monthly passes receive?", options: ["a one-week extension", "a refund", "a free class", "a gift"], answer: 0 },
            { text: "What is true about the outdoor running track?", options: ["It will be open during daylight hours without staff.", "It will be closed.", "It will be open at night.", "It will be used for a competition."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why Venice was built on water",
          paragraphs: [
            "Venice, in northeastern Italy, is famous for its canals, bridges and buildings that seem to rise directly from the water. The city stands on more than a hundred small islands in a shallow lagoon, separated from the Adriatic Sea by a chain of narrow sandbanks. Its origins date back to the fifth and sixth centuries, when people from the mainland fled to the lagoon to escape invading armies. The marshy islands, difficult to reach by land and too shallow for large warships, offered natural protection.",
            "Building a city on such unstable ground required remarkable engineering. The Venetians drove millions of wooden posts, made mainly of larch and oak, deep into the mud until they reached a firmer layer of compacted clay. On top of these posts, they placed wooden platforms and then stone foundations, on which buildings were constructed. Because the wood was completely submerged in water and mud with very little oxygen, it did not rot easily. Instead, minerals from the water gradually hardened it, and many of these foundations have lasted for centuries.",
            "Today, Venice faces serious threats. The city is slowly sinking, partly because of natural processes and partly because of groundwater pumping in the twentieth century, which has since been stopped. At the same time, sea levels are rising, and floods known as 'acqua alta' have become more frequent. To protect the city, engineers built a system of movable barriers at the entrances to the lagoon, which can be raised during high tides. The system, which began operating in 2020, has prevented many floods, but scientists warn that it may need to be raised so often in the future that it could harm the lagoon's ecosystem.",
          ],
          questions: [
            { text: "According to paragraph 1, why did people first settle in the Venetian lagoon?", options: ["to escape invading armies", "to find gold", "to build a port for warships", "to farm fertile land"], answer: 0 },
            { text: "According to paragraph 2, why did the wooden posts not rot easily?", options: ["They were submerged in water and mud with little oxygen.", "They were covered with paint.", "They were made of metal.", "They were replaced every year."], answer: 0 },
            { text: "The word \"submerged\" in paragraph 2 is closest in meaning to", options: ["under water", "dried", "burned", "painted"], answer: 0 },
            { text: "According to paragraph 3, what is one cause of Venice sinking?", options: ["groundwater pumping in the twentieth century", "too many tourists", "earthquakes", "heavy buildings made of glass"], answer: 0 },
            { text: "What concern do scientists have about the movable barriers?", options: ["Raising them very often could harm the lagoon's ecosystem.", "They do not work at all.", "They are too expensive to build.", "They block tourist boats permanently."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Making pancakes",
          text: "Every Sunday morning, my sister and I make pan{{cakes}} for breakfast. First, we mix flour, milk and two eg{{gs}} in a large bowl. My sister adds a little su{{gar}}, and I stir the mixture until it is smo{{oth}}. Then our mother heats a pan on the sto{{ve}}. We pour a small amount of mixture into the p{{an}} and wait until bubbles appear. Then we turn the pancake over. Sometimes it falls on the fl{{oor}}, and we all laugh! We eat our pancakes with honey and fresh fr{{uit}}. They are delicious, and we always eat too ma{{ny}}. It is my favorite part of the we{{ek}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Salsa dance nights",
          text: [
            "DANCE THE NIGHT AWAY!",
            "Salsa nights every Friday at the Blue Moon Club. A one-hour lesson for beginners starts at 8 p.m., followed by open dancing until midnight.",
            "Entry is $10, including the lesson. You don't need to bring a partner. Comfortable shoes are recommended. Students with a student card pay only $6.",
          ],
          questions: [
            { text: "When does the beginner lesson start?", options: ["at 8 p.m.", "at midnight", "at 6 p.m.", "at 10 p.m."], answer: 0 },
            { text: "What is true about partners?", options: ["You don't need to bring one.", "You must bring a partner.", "Partners pay extra.", "Partners are chosen by the teacher."], answer: 0 },
            { text: "How much do students pay?", options: ["$6", "$10", "nothing", "$12"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why snakes shed their skin",
          paragraphs: [
            "Snakes grow all their lives. But their skin does not grow with them. When a snake gets bigger, its old skin becomes too tight.",
            "To solve this problem, a snake grows a new skin under the old one. Then it rubs its head against a rock or a branch to break the old skin. Slowly, the snake crawls out, and the old skin comes off in one long piece, like a sock turned inside out.",
            "Young snakes shed their skin more often because they grow quickly. Shedding also removes small insects that live on the skin. Before shedding, a snake's eyes often look cloudy, and it may hide until the new skin is ready.",
          ],
          questions: [
            { text: "Why does a snake's old skin become too tight?", options: ["The snake grows, but the skin does not.", "The weather becomes cold.", "The snake eats too much.", "The skin gets wet."], answer: 0 },
            { text: "How does a snake start to remove its old skin?", options: ["It rubs its head against a rock or branch.", "It bites the skin.", "It swims in water.", "It waits for rain."], answer: 0 },
            { text: "The word \"shed\" in the title is closest in meaning to", options: ["lose or get rid of", "paint", "grow", "find"], answer: 0 },
            { text: "Why do young snakes shed their skin more often?", options: ["They grow quickly.", "Their skin is weaker.", "They are more active at night.", "They live in water."], answer: 0 },
            { text: "What may a snake do before shedding?", options: ["hide until the new skin is ready", "change color to red", "eat more food", "climb high trees"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Survivorship bias",
          text: "During the Second World War, military analysts examined planes that returned from missions and noted where they had been hit by enemy fi{{re}}. Some suggested adding armor to the areas with the most da{{mage}}. However, a statistician named Abraham Wald pointed out that these planes had surv{{ived}}. The planes that were hit in other pla{{ces}}, such as the engines, had probably crashed and never retu{{rned}}. Therefore, armor should be added where the returning planes showed no da{{mage}}. This story illustrates survivorship bi{{as}}, the error of drawing conclusions only from cases that passed some selec{{tion}} process. For example, studying only successful compa{{nies}} may give a misleading picture of what leads to suc{{cess}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "New course textbook",
          text: [
            "To: Students registered for Introduction to Economics",
            "From: Dr. Reyes, Course Instructor",
            "Subject: Change of textbook for next semester",
            "Please note that the required textbook for this course has changed. We will be using the new edition of 'Principles of Economics', which includes updated data and case studies. The previous edition will not be suitable, as chapter numbers and practice problems have changed.",
            "The new edition is available at the campus bookstore and as an e-book, which costs about half the price of the printed version. A limited number of copies will also be available on short-term loan at the library reserve desk. If cost is a concern, please contact me before the semester begins, and I will help you find a solution.",
          ],
          questions: [
            { text: "Why is the previous edition not suitable?", options: ["Chapter numbers and practice problems have changed.", "It is too expensive.", "It is no longer printed.", "It is in a different language."], answer: 0 },
            { text: "What is true about the e-book?", options: ["It costs about half the price of the printed version.", "It is free.", "It is not available.", "It costs more than the printed version."], answer: 0 },
            { text: "What should students do if cost is a concern?", options: ["contact the instructor before the semester begins", "use the old edition", "skip the readings", "drop the course"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The growing problem of space debris",
          paragraphs: [
            "Since the first satellite was launched in 1957, humans have sent thousands of objects into orbit around Earth. Many of these objects are no longer working. Along with old satellites, Earth's orbit now contains used rocket stages, fragments from explosions and collisions, and even small items such as tools dropped by astronauts. Together, these objects are known as space debris. Scientists estimate that there are tens of thousands of pieces larger than ten centimeters and hundreds of millions of smaller fragments.",
            "Space debris poses a serious danger because objects in orbit travel at extremely high speeds, often more than seven kilometers per second. At such speeds, even a fragment the size of a coin can severely damage a working satellite or a spacecraft carrying astronauts. The International Space Station regularly changes its orbit to avoid large pieces of debris. Some experts warn of a scenario known as the Kessler syndrome, in which collisions create more debris, which causes further collisions, eventually making certain orbits too dangerous to use.",
            "As the number of satellites increases rapidly, particularly with the launch of large networks providing internet service, the problem is becoming more urgent. Space agencies and companies have proposed various solutions. New satellites can be designed to move into lower orbits at the end of their working lives, where they will burn up in the atmosphere, or into 'graveyard' orbits far from busy areas. Engineers are also testing technologies to capture and remove debris, such as nets, harpoons and robotic arms. However, there is no single international authority that can enforce rules in space, and cooperation between countries remains a major challenge.",
          ],
          questions: [
            { text: "According to paragraph 1, what does space debris include?", options: ["old satellites, rocket stages and fragments", "only meteors", "only working satellites", "clouds of gas"], answer: 0 },
            { text: "According to paragraph 2, why is even a small fragment dangerous?", options: ["Objects in orbit travel at extremely high speeds.", "Fragments are radioactive.", "Fragments are made of heavy metal.", "They block sunlight."], answer: 0 },
            { text: "The word \"scenario\" in paragraph 2 is closest in meaning to", options: ["possible situation", "solution", "law", "machine"], answer: 0 },
            { text: "What is the Kessler syndrome?", options: ["a chain reaction of collisions that creates more debris", "a disease affecting astronauts", "a method of removing debris", "a type of satellite network"], answer: 0 },
            { text: "According to paragraph 3, what is a major challenge in dealing with space debris?", options: ["There is no international authority to enforce rules.", "Satellites cannot change orbit.", "Debris is impossible to detect.", "Companies refuse to launch satellites."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Furkan", prompt: "Why are you carrying a guitar?", chunks: ["I", "have", "a music lesson", "after", "school"], end: "." },
      { promptBy: "Ella", prompt: "Did you like the hotel breakfast?", chunks: ["there was", "a wide", "choice", "of fresh", "fruit"], end: "." },
      { promptBy: "Zeynep", prompt: "I'm always losing my keys.", chunks: ["why don't", "you", "keep them", "in", "the same place"], end: "?" },
      { promptBy: "Mike", prompt: "How was the football match?", chunks: ["our team", "won", "in", "the last", "minute"], end: "." },
      { promptBy: "Burcu", prompt: "When will the results be published?", chunks: ["they", "will be", "available", "online", "next Friday"], end: "." },
      { promptBy: "Alex", prompt: "Why is the road so quiet today?", chunks: ["most people", "have left", "the city", "for", "the holiday"], end: "." },
      { promptBy: "Gamze", prompt: "What did you do after the exam?", chunks: ["we", "went", "to", "a café", "to celebrate"], end: "." },
      { promptBy: "Harry", prompt: "Where do you usually buy your groceries?", chunks: ["I", "shop", "at", "the market", "near my house"], end: "." },
      { promptBy: "Sevda", prompt: "My computer has a virus.", chunks: ["should", "you", "take it", "to", "a technician"], end: "?" },
      { promptBy: "Joel", prompt: "Why did you decide to take a gap year?", chunks: ["I", "wanted to", "travel", "before", "starting university"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your friend Sara is visiting your city for the first time next month and has asked you for advice about her trip. You want to write to her.",
      to: "your friend Sara",
      subject: "Your trip next month!",
      tasks: ["Say how you feel about her visit.", "Recommend places to see and things to do.", "Offer to help with something during her stay."],
      sample: "Hi Sara,\n\nI'm so excited that you're finally coming to visit! It's been almost two years since we last saw each other, and I can't wait to show you around my city.\n\nThere are a few places you really shouldn't miss. The old town is beautiful, with narrow streets, small craft shops and a lovely castle on the hill. If you go up there in the early evening, you can watch the sunset over the bay. I also recommend taking a ferry to the islands, which only takes about an hour; it's a great way to escape the busy city. For food, you have to try the fish restaurants along the harbor and the street food market on Saturdays.\n\nI'd be happy to pick you up from the airport when you arrive, and you're very welcome to stay at my apartment for a few nights if you'd like. I could also take a day off work so we can go to the islands together. Just send me your flight details when you have them.\n\nSee you soon!\nEce",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Studies",
      professor: {
        name: "Dr. Foster",
        text: "Some cities have started to charge visitors a daily tourist tax to help pay for cleaning, maintenance and protecting historic sites. Supporters believe tourists should contribute to the costs they create. Critics argue that such taxes discourage tourism and hurt local businesses. Should popular cities charge a tourist tax? Explain your view.",
      },
      students: [
        { name: "Chloe", text: "Yes. Tourists use roads, water and public services, and they create a lot of waste. A small tax is a fair way to make them help pay for this." },
        { name: "Doruk", text: "No. Tourists already spend a lot of money in hotels, restaurants and shops. An extra tax could make them choose a different destination." },
      ],
      sample: "I think popular cities should charge a modest tourist tax, as long as the money is clearly used to benefit both residents and visitors. Chloe makes a valid point: large numbers of tourists put pressure on public services, from cleaning streets to maintaining historic buildings, and local residents often pay most of these costs through their own taxes. A small daily fee, perhaps added to hotel bills, is a fair way to share the burden. However, Doruk's concern is reasonable if the tax is too high or poorly explained. Cities should keep the amount small, compared with the overall cost of a trip, and show visitors exactly how the money is spent, for example on restoring monuments or improving public transport. Used transparently, a tourist tax can help protect the very places that attract visitors.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new employee at a supermarket. Your supervisor is telling you what to say to customers.",
      sentences: [
        "Good morning, can I help you?",
        "Fresh bread is at the end of this aisle.",
        "We close at ten o'clock tonight.",
        "Plastic bags cost ten cents each.",
        "This week, all fruit and vegetables are on sale.",
        "If you can't find a product, I can check whether we have it in the storeroom.",
        "Customers who join our loyalty program receive points every time they shop, which they can use for discounts on future purchases.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of travel and different cultures. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe a place you would like to visit in the future and explain why.",
          sample: "I would really like to visit Japan in the future. I've always been interested in Japanese culture, from traditional temples and gardens to modern cities like Tokyo. I'd love to try authentic Japanese food, travel on the high-speed trains and see the cherry blossoms in spring. I also admire how Japanese society combines ancient traditions with advanced technology, and I'd like to experience that for myself.",
        },
        {
          text: "What is the best way to learn about a different culture?",
          sample: "I think the best way to learn about a different culture is to spend time with people from that culture, ideally by living or traveling in their country. Talking to local people, trying their food and taking part in their celebrations teaches you things that books cannot. If traveling isn't possible, you can still learn a lot by watching films, reading novels from that culture and meeting international students in your own city.",
        },
        {
          text: "Do you think it's important to learn some of the local language before traveling?",
          sample: "Yes, I think learning even a few basic phrases is important. Simple words like 'hello', 'thank you' and 'excuse me' show respect for local people, and they often respond more warmly. Knowing some of the language also makes practical things easier, like ordering food or asking for directions. Of course, you don't need to be fluent, and translation apps can help, but making the effort really improves the travel experience.",
        },
        {
          text: "How has the internet changed the way people travel?",
          sample: "The internet has completely changed travel. Today, people can book flights and hotels in minutes, compare prices and read reviews from other travelers. Maps on our phones make it easy to find our way in a foreign city, and translation apps help us communicate. However, the internet has also made some places extremely crowded, because everyone wants to visit the same popular spots they see on social media. Sometimes it's nice to explore without planning everything online.",
        },
      ],
    },
  },
};
