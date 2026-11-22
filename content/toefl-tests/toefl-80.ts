import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 80 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_80: ToeflTest = {
  id: "toefl-80",
  no: 80,
  title: "TOEFL iBT Practice Test 80",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Ice cubes",
          text: "Today, most people can make ice at home in their freezers, but this was not always pos{{sible}}. In the nineteenth century, ice was cut in large blocks from frozen lakes in winter and stored in special buil{{dings}} filled with sawdust. Merchants shipped this natural ice from North America to cities as far away as In{{dia}}. People bought ice from delivery wagons and kept it in insulated wooden bo{{xes}} to keep their food cold. In the early twentieth century, electric refri{{gerators}} became available, and later models included small trays for making ice cu{{bes}}. The first flexible rubber trays made it much easier to remove the ice. Today, many modern freezers make ice auto{{matically}}, and ice is used in drinks, medicine and food stor{{age}} around the wor{{ld}}, especially in hot cli{{mates}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Picking up Zeynep",
          text: [
            "Hi Kaan! My friend Zeynep is arriving by train at 6:15 tonight, but my class finishes at 6:30. Could you meet her at the station and bring her to my apartment?",
            "She has long dark hair and will be wearing a red coat. I'll send you her phone number now. Thank you so much!",
          ],
          questions: [
            { text: "Why can't the writer meet Zeynep?", options: ["The writer's class finishes after the train arrives.", "The writer is sick.", "The writer's car broke down.", "The writer is traveling."], answer: 0 },
            { text: "How will Kaan recognize Zeynep?", options: ["She has long dark hair and a red coat.", "She will hold a sign.", "She will call him first.", "She will be wearing a hat."], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Campus clean-up day",
          text: [
            "JOIN OUR CAMPUS CLEAN-UP DAY!",
            "On Saturday, April 26, from 9 a.m. to 1 p.m., students and staff are invited to help clean the campus gardens, sports fields and lake shore. Meet at the main fountain at 8:45 a.m.",
            "Gloves, bags and tools will be provided, but please wear old clothes and comfortable shoes. Lunch will be served to all volunteers at 1 p.m. Participants can also count the hours toward the university's community service certificate.",
          ],
          questions: [
            { text: "Where should volunteers meet?", options: ["at the main fountain", "at the library", "at the sports center", "at the lake"], answer: 0 },
            { text: "What should volunteers wear?", options: ["old clothes and comfortable shoes", "their best clothes", "sports uniforms", "rain boots only"], answer: 0 },
            { text: "What can participants count the hours toward?", options: ["a community service certificate", "course credits", "a free gym membership", "a scholarship"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How dams change rivers",
          paragraphs: [
            "Dams have been built for thousands of years to control rivers, store water for irrigation and drinking, prevent floods and, since the late nineteenth century, generate electricity. Today, there are tens of thousands of large dams around the world, and very few major rivers flow freely from their source to the sea. Hydroelectric dams provide a significant share of the world's renewable electricity.",
            "However, dams change rivers in profound ways. By blocking the flow of water, they turn sections of rivers into lakes, called reservoirs. Water in reservoirs is usually warmer and moves more slowly than in a flowing river, which can harm fish and other species adapted to cool, fast-moving water. Dams also block the movement of migratory fish, such as salmon and sturgeon, which travel upstream to breed. Although fish ladders and other passages have been built at some dams, they are not always effective.",
            "Another important effect concerns sediment. Rivers naturally carry sand, silt and nutrients downstream, which build up floodplains and deltas and fertilize farmland. Dams trap much of this sediment in their reservoirs, and as a result, land downstream may erode and deltas may shrink. Reservoirs themselves gradually fill with sediment, reducing their capacity over time. In recent years, some countries, particularly the United States, have removed old dams that are no longer useful. In several cases, rivers have recovered surprisingly quickly, with fish returning within a few years. At the same time, many new dams are still being built, especially in developing countries that need electricity and water.",
          ],
          questions: [
            { text: "According to paragraph 1, what have dams been built for?", options: ["irrigation, drinking water, flood control and electricity", "only for decoration", "only for transport", "to create islands"], answer: 0 },
            { text: "According to paragraph 2, why can reservoirs harm some fish?", options: ["The water is warmer and slower than in a flowing river.", "The water is too salty.", "There is no light in reservoirs.", "Reservoirs are always frozen."], answer: 0 },
            { text: "The word \"profound\" in paragraph 2 is closest in meaning to", options: ["very significant", "small", "temporary", "obvious"], answer: 0 },
            { text: "According to paragraph 3, what happens to sediment when a dam is built?", options: ["Much of it is trapped in the reservoir.", "It increases downstream.", "It disappears completely.", "It turns into rock."], answer: 0 },
            { text: "What happened in several cases where old dams were removed?", options: ["Rivers recovered surprisingly quickly.", "Floods destroyed nearby cities.", "Fish disappeared permanently.", "Electricity prices fell."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Helping at my uncle's shop",
          text: "My uncle owns a small fruit and vegetable sh{{op}} in our town. Last summer, I helped him every Satur{{day}}. In the morning, we put fresh app{{les}}, tomatoes and oranges on the she{{lves}}. Then I helped customers find what they wan{{ted}}. My uncle taught me how to weigh the fruit and give the correct cha{{nge}}. Sometimes the shop was very bu{{sy}}, and I had to work quickly. At lunchtime, we ate sandwiches behind the coun{{ter}}. At the end of the summer, my uncle paid me some mo{{ney}}, and I used it to buy a new bi{{ke}}. I learned a lot from this job.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Karaoke night",
          text: [
            "SING YOUR HEART OUT!",
            "Karaoke night every Thursday from 8 p.m. to midnight at The Corner Café. Choose from more than five thousand songs in English, Turkish and Spanish.",
            "Entry is free. Every singer gets a free soft drink, and the best performance of the night wins a dinner for two. Groups are welcome; please book a table if there are more than six of you.",
          ],
          questions: [
            { text: "When is karaoke night?", options: ["every Thursday evening", "every Saturday afternoon", "once a month", "every Monday morning"], answer: 0 },
            { text: "What does every singer get?", options: ["a free soft drink", "a free dinner", "a T-shirt", "a song book"], answer: 0 },
            { text: "When should groups book a table?", options: ["if there are more than six people", "always", "never", "if they want to sing"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How tortoises live so long",
          paragraphs: [
            "Tortoises are slow animals with heavy shells. Some kinds of tortoises can live for more than one hundred years. One famous tortoise in the Seychelles is believed to be almost two hundred years old.",
            "Tortoises live a slow and quiet life. They move slowly, eat plants and use very little energy. Their bodies work slowly, too, and scientists think this may help them age more slowly than many other animals.",
            "A tortoise's hard shell also protects it from most animals that might hunt it. When it feels danger, it pulls its head and legs inside the shell. Because few animals can harm adult tortoises, many of them live for a very long time.",
          ],
          questions: [
            { text: "How long can some tortoises live?", options: ["more than one hundred years", "about ten years", "about one year", "about fifty days"], answer: 0 },
            { text: "What do tortoises eat?", options: ["plants", "fish", "insects only", "meat"], answer: 0 },
            { text: "The word \"age\" in paragraph 2 is closest in meaning to", options: ["grow older", "eat", "move", "sleep"], answer: 0 },
            { text: "What does a tortoise do when it feels danger?", options: ["It pulls its head and legs inside its shell.", "It runs away quickly.", "It climbs a tree.", "It swims away."], answer: 0 },
            { text: "Why do many adult tortoises live a long time?", options: ["Few animals can harm them.", "They live in water.", "They sleep all year.", "They eat a lot of meat."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The scarcity effect",
          text: "People often value things more when they seem rare or difficult to obtain. Psychologists call this the scarcity eff{{ect}}. In a classic experiment, participants tasted cookies from a jar that contained either ten cookies or only two coo{{kies}}. Although the cookies were identical, participants rated those from the nearly empty jar as more desi{{rable}}. Marketers use this tendency when they advertise \"limited editions\" or announce that only a few items are left in sto{{ck}}. Scarcity may signal that something is popular or of high qua{{lity}}, and people may also fear miss{{ing}} an opportunity. However, the effect can lead consumers to buy things they do not really ne{{ed}} or to make rushed deci{{sions}}. Taking time to think before buy{{ing}} can reduce its infl{{uence}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Midterm grade appeals",
          text: [
            "To: Students in Introduction to Psychology",
            "From: Dr. Nguyen, Course Coordinator",
            "Subject: How to request a review of your midterm grade",
            "Midterm exam grades are now available on the course website. If you believe that an error was made in grading your exam, you may request a review within seven days of the grades being posted.",
            "To request a review, complete the online form and explain clearly which question or questions you would like reviewed and why. Please note that your entire exam will be re-examined, which means your grade may go up, go down or stay the same. Requests that do not include a specific explanation will not be considered.",
          ],
          questions: [
            { text: "How long do students have to request a review?", options: ["seven days after grades are posted", "one month", "until the final exam", "two days"], answer: 0 },
            { text: "What must students include in their request?", options: ["which questions to review and why", "a letter from their parents", "a fee", "their entire exam paper"], answer: 0 },
            { text: "What may happen as a result of a review?", options: ["The grade may go up, go down or stay the same.", "The grade can only go up.", "The student will retake the exam.", "The exam will be canceled."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Water scarcity in growing cities",
          paragraphs: [
            "As the world's urban population continues to grow, many cities face increasing difficulties in providing enough clean water for their residents. In some regions, demand is rising faster than supply because of population growth, expanding industries and changing lifestyles. At the same time, climate change is making rainfall less predictable, with longer droughts in some areas. In 2018, the South African city of Cape Town came close to 'Day Zero', when most household taps would have been turned off, after several years of severe drought.",
            "Cities obtain water from a variety of sources, including rivers, lakes, reservoirs and underground aquifers. When groundwater is pumped faster than it is naturally replaced, water tables fall, wells must be dug deeper and, in some cities, the ground itself begins to sink. Much water is also lost before it reaches consumers: in many cities, aging and leaking pipes waste a large share of treated water.",
            "Cities are responding in many ways. Some have invested in repairing pipes and installing smart meters that detect leaks. Others encourage residents to save water through public campaigns, higher prices for heavy users and rules restricting activities such as watering gardens during droughts. Cape Town avoided Day Zero largely through such measures, as residents dramatically reduced their water use. Some cities are turning to alternative sources, such as desalinating seawater or treating wastewater so that it can be reused, sometimes even for drinking. These technologies can be expensive and energy-intensive, but they may become increasingly important as cities continue to grow.",
          ],
          questions: [
            { text: "According to paragraph 1, why are many cities facing water shortages?", options: ["Demand is rising faster than supply, and rainfall is less predictable.", "Rivers are getting larger.", "People are using less water.", "Cities are becoming smaller."], answer: 0 },
            { text: "Why does the author mention Cape Town in paragraph 1?", options: ["as an example of a city that came close to running out of water", "as a city with unlimited water", "as a city that built many dams", "as the largest city in Africa"], answer: 0 },
            { text: "According to paragraph 2, what can happen when groundwater is pumped too quickly?", options: ["The ground can begin to sink.", "Rivers become cleaner.", "Water becomes cheaper.", "Rainfall increases."], answer: 0 },
            { text: "The word \"intensive\" in paragraph 3 is closest in meaning to", options: ["requiring a lot of", "saving", "producing", "avoiding"], answer: 0 },
            { text: "According to paragraph 3, how did Cape Town avoid Day Zero?", options: ["Residents dramatically reduced their water use.", "It built a large desalination plant overnight.", "It received water from another country.", "Heavy rain fell immediately."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ali", prompt: "Why are you leaving the party so early?", chunks: ["I", "have to", "work", "early", "tomorrow morning"], end: "." },
      { promptBy: "Rachel", prompt: "Did you enjoy the art class?", chunks: ["we", "learned", "how to", "paint", "with watercolors"], end: "." },
      { promptBy: "Elif", prompt: "I'm worried about my grades.", chunks: ["why don't", "you", "talk", "to", "your teacher"], end: "?" },
      { promptBy: "Owen", prompt: "How did you get the concert tickets?", chunks: ["I", "bought them", "online", "as soon as", "they were available"], end: "." },
      { promptBy: "Burcu", prompt: "When is the bookstore having its sale?", chunks: ["the sale", "starts", "on", "the first", "of next month"], end: "." },
      { promptBy: "Kevin", prompt: "Why is the road blocked?", chunks: ["a tree", "fell", "during", "the storm", "last night"], end: "." },
      { promptBy: "Aslı", prompt: "What did you have for breakfast?", chunks: ["I", "had", "some toast", "and", "a cup of tea"], end: "." },
      { promptBy: "Harry", prompt: "Where did you learn to play the guitar?", chunks: ["I", "taught", "myself", "using", "online videos"], end: "." },
      { promptBy: "Defne", prompt: "My phone screen is broken.", chunks: ["do you", "know", "a good", "repair", "shop"], end: "?" },
      { promptBy: "Noah", prompt: "Why did you choose to study biology?", chunks: ["I", "have always", "been", "fascinated by", "living things"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You bought a used bicycle from an online seller. The seller said the bicycle was in excellent condition, but after a week the gears stopped working properly. You want to write to the seller.",
      to: "the seller, Mr. Kaplan",
      subject: "Problem with the bicycle I bought",
      tasks: ["Give details of your purchase.", "Describe the problem with the bicycle.", "Suggest how the problem could be solved."],
      sample: "Dear Mr. Kaplan,\n\nTwo weeks ago, on September 5, I bought your used blue mountain bike through the online marketplace for $250. In your advertisement, you described it as being 'in excellent condition, recently serviced and ready to ride', and when I tested it briefly at your house, it seemed to work well.\n\nHowever, after about a week of riding to work, the gears stopped working properly. The chain now slips every time I try to change to a higher gear, and on hills it sometimes comes off completely, which is dangerous. I took the bike to a repair shop, and the mechanic told me that the gear system is badly worn and was probably not serviced recently. He estimated that the repair would cost about $80.\n\nI would like to ask whether you would be willing to pay for the repair, since the bicycle was not in the condition described. Alternatively, I could return the bicycle for a partial refund. I have attached the mechanic's written estimate for your reference.\n\nI hope we can find a fair solution.\n\nBest regards,\nTuncay Er",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Hughes",
        text: "Some people believe that children should start learning a second language as early as possible, even in kindergarten. Others argue that young children should first develop strong skills in their native language, and that foreign language study can begin later in primary school. When should children start learning a foreign language? Explain your view.",
      },
      students: [
        { name: "Chloe", text: "As early as possible. Young children pick up pronunciation easily and aren't afraid of making mistakes. It's much harder to learn later." },
        { name: "Mert", text: "Later is better. Small children need to master their first language. Starting a foreign language too early may confuse some of them." },
      ],
      sample: "I believe children can benefit from starting a foreign language early, as long as the learning is playful and does not replace strong development in their native language. Chloe makes a good point that young children are often better at imitating sounds and are less self-conscious, which helps them develop natural pronunciation. Songs, games and stories in a second language can make learning enjoyable and build a positive attitude toward other cultures. However, Mert raises a valid concern. Children need a solid foundation in their first language for reading and thinking, and research suggests that strong first-language skills actually support second-language learning. Therefore, kindergartens could introduce a foreign language through short, fun activities, while more formal study, including reading and grammar, could begin in primary school.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new staff member at an amusement park ticket office. Your supervisor is telling you what to say to visitors.",
      sentences: [
        "Hello, welcome to the park.",
        "How many tickets would you like?",
        "Children under three enter for free.",
        "The park closes at nine tonight.",
        "Here is a map of all the rides.",
        "If you plan to visit again this year, a season pass may be cheaper than buying single tickets.",
        "The water park is included in your ticket, and you can rent towels and lockers near the entrance to the swimming area.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about shopping and money. The researcher will ask you some questions.",
      questions: [
        {
          text: "Do you prefer buying new things or second-hand things?",
          sample: "I usually prefer buying new things for items I use every day, like shoes or electronics, because I want them to last and to come with a warranty. However, I really enjoy buying second-hand books, furniture and sometimes clothes. They're much cheaper, and it's better for the environment because it reduces waste. I've found some unique items in second-hand shops that I couldn't find anywhere else.",
        },
        {
          text: "What do you usually do when something you bought breaks?",
          sample: "When something breaks, I first try to see if I can fix it myself, often by watching a video online. If it's something more complicated, like a phone or a washing machine, I take it to a repair shop. I only buy a new one if repairing it would cost almost as much. I think it's a waste to throw things away too quickly, and repairing them often saves money.",
        },
        {
          text: "Do you think advertising makes people buy things they don't need?",
          sample: "Yes, I think advertising often encourages people to buy things they don't really need. Ads are designed to make products look exciting and suggest that buying them will make us happier or more attractive. Online ads are especially powerful because they're based on our search history. However, I think people can resist advertising if they think carefully before buying and ask themselves whether they really need something.",
        },
        {
          text: "Should young people be taught how to manage money at school?",
          sample: "Absolutely. Many young people finish school without knowing how to create a budget, save money or understand loans and credit cards. As a result, some get into debt early in life. Schools could teach these skills through practical activities, like planning a monthly budget or comparing prices. This knowledge would help young people make better decisions and become financially independent adults.",
        },
      ],
    },
  },
};
