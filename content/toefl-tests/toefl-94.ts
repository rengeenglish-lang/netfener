import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 94 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_94: ToeflTest = {
  id: "toefl-94",
  no: 94,
  title: "TOEFL iBT Practice Test 94",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Wheelbarrows",
          text: "The wheelbarrow is a simple machine that makes it much easier to carry heavy lo{{ads}}. Historians believe it was invented in China around two thousand years a{{go}}. Chinese wheelbarrows often had a large wheel in the cen{{ter}}, so that the weight was balanced over the wh{{eel}} and the person pushing it carried very little of the load. In Europe, wheelbarrows appeared much later, during the Middle Ages, and they usually had the wheel at the fr{{ont}}. They were used to carry stones, soil and other mate{{rials}} for building churches and castles. The wheelbarrow works as a lever, allowing a person to move objects that would be far too heavy to lift by ha{{nd}}. Today, gardeners and builders still use wheelbarrows every d{{ay}}, and some models even have electric mot{{ors}} to help on steep hil{{ls}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Practice for the driving test",
          text: [
            "Hi Uncle Can, my driving test is in two weeks, and I really need more practice, especially with parking. Could you take me out driving this weekend?",
            "Dad is away on a business trip, so I can't practice with him. Maybe Saturday afternoon in the supermarket parking lot? I'll pay for the fuel!",
          ],
          questions: [
            { text: "Why does the writer want to practice driving?", options: ["The driving test is in two weeks.", "The writer bought a new car.", "The writer is going on a trip.", "The writer failed the test yesterday."], answer: 0 },
            { text: "Why can't the writer practice with Dad?", options: ["Dad is away on a business trip.", "Dad doesn't have a car.", "Dad is sick.", "Dad doesn't drive."], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Laptop loan service",
          text: [
            "BORROW A LAPTOP FROM THE LIBRARY",
            "Students can now borrow laptops from the library's help desk for up to three days at a time. The service is free, but you must show your student card and sign a loan agreement.",
            "Laptops must be returned to the help desk in person; they may not be left in the book return box. Students who return a laptop late will not be able to borrow another one for two weeks. Any damage must be reported immediately.",
          ],
          questions: [
            { text: "How long can students borrow a laptop?", options: ["up to three days", "one week", "one month", "the whole semester"], answer: 0 },
            { text: "How must laptops be returned?", options: ["in person to the help desk", "in the book return box", "by mail", "to any classroom"], answer: 0 },
            { text: "What happens if a laptop is returned late?", options: ["The student cannot borrow another one for two weeks.", "The student pays $100.", "Nothing happens.", "The student loses library access forever."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The race to the South Pole",
          paragraphs: [
            "In the early twentieth century, the South Pole was one of the last major places on Earth that no human had reached. In 1911, two expeditions set out to be the first to get there: a Norwegian team led by Roald Amundsen and a British team led by Robert Falcon Scott. Both teams faced one of the harshest environments on the planet, with temperatures far below freezing, powerful winds and vast fields of ice.",
            "The two leaders chose very different strategies. Amundsen, who had learned from the Inuit people of the Arctic, relied on skis and teams of sled dogs, which were well suited to traveling across snow and ice. He also planned his supply depots carefully and wore fur clothing similar to that used by Arctic peoples. Scott used a combination of motor sledges, ponies, dogs and men pulling sleds themselves. The motor sledges soon broke down in the cold, and the ponies struggled in the snow, so much of the journey had to be completed on foot, which was exhausting.",
            "Amundsen's team reached the South Pole on December 14, 1911, and returned safely. Scott's team arrived more than a month later, on January 17, 1912, only to find a Norwegian flag already there. On the return journey, Scott and his four companions died from cold, hunger and exhaustion, just a short distance from a supply depot. Their story became famous as an example of bravery in the face of disaster, while historians have also studied the expeditions to understand how preparation, equipment and decision-making influenced their very different outcomes.",
          ],
          questions: [
            { text: "According to paragraph 1, why was the South Pole difficult to reach?", options: ["It had extremely harsh conditions.", "It was guarded by soldiers.", "It was surrounded by mountains only.", "It was far from any ocean."], answer: 0 },
            { text: "According to paragraph 2, what did Amundsen learn from the Inuit?", options: ["methods such as using skis, sled dogs and fur clothing", "how to build motor sledges", "how to ride ponies", "how to sail ships"], answer: 0 },
            { text: "The word \"exhausting\" in paragraph 2 is closest in meaning to", options: ["very tiring", "exciting", "short", "easy"], answer: 0 },
            { text: "What problem did Scott's team face with their motor sledges?", options: ["They broke down in the cold.", "They were too fast.", "They ran out of paint.", "They were too small."], answer: 0 },
            { text: "What happened to Scott and his companions?", options: ["They died on the return journey.", "They reached the Pole first.", "They returned safely.", "They turned back before reaching the Pole."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Making paper boats",
          text: "One rainy afternoon, my grandfather showed me how to make paper bo{{ats}}. First, he took a sheet of colored pa{{per}} and folded it in half. Then he folded the corners down to make a trian{{gle}}. After a few more folds, he opened it carefully, and there was a little bo{{at}}! I tried to make one, too. My first boat was not very go{{od}}, but my second one was much bet{{ter}}. When the rain stopped, we went outside and put our boats in a big pud{{dle}}. They floated on the wa{{ter}}, and we watched them move with the wi{{nd}}. It was a lot of f{{un}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Candle-making workshop",
          text: [
            "MAKE YOUR OWN CANDLES!",
            "Learn how to make scented candles in our two-hour workshop at Light & Wax Studio, every Saturday at 3 p.m. Choose from more than twenty natural scents, such as lavender and orange.",
            "The workshop costs $28, and you will take home three candles you made yourself. All materials are provided. The workshop is suitable for adults and teenagers over fourteen.",
          ],
          questions: [
            { text: "What will participants make?", options: ["scented candles", "soap", "perfume", "jewelry"], answer: 0 },
            { text: "How many candles will participants take home?", options: ["three", "one", "five", "ten"], answer: 0 },
            { text: "Who is the workshop suitable for?", options: ["adults and teenagers over fourteen", "young children only", "professionals only", "everyone of any age"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How deer grow antlers",
          paragraphs: [
            "Many male deer grow antlers on their heads. Antlers look like branches made of bone. Unlike horns, which stay on an animal all its life, antlers fall off and grow back every year.",
            "In spring, new antlers begin to grow. At first, they are covered with soft skin and short fur called velvet. The velvet carries blood that helps the antlers grow very quickly, sometimes more than two centimeters a day.",
            "By late summer, the antlers become hard, and the deer rubs off the velvet against trees. Males use their antlers to fight each other and to attract females. In winter, the antlers fall off, and the cycle begins again the next spring.",
          ],
          questions: [
            { text: "How are antlers different from horns?", options: ["Antlers fall off and grow back every year.", "Antlers are made of hair.", "Antlers stay forever.", "Only females have antlers."], answer: 0 },
            { text: "What is velvet?", options: ["soft skin and short fur covering new antlers", "a type of tree", "a deer's tail", "a kind of food"], answer: 0 },
            { text: "How fast can antlers grow?", options: ["more than two centimeters a day", "one centimeter a year", "one meter a day", "they never grow"], answer: 0 },
            { text: "The word \"cycle\" in paragraph 3 is closest in meaning to", options: ["a pattern that repeats", "a bicycle", "a fight", "a season"], answer: 0 },
            { text: "What do males use their antlers for?", options: ["to fight each other and attract females", "to dig for food", "to climb trees", "to swim"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The default effect",
          text: "When people are offered a choice, they often stay with the option that is selected automatically, known as the default. This tendency is called the default ef{{fect}}. A famous example comes from organ donation. In some coun{{tries}}, people are automatically registered as donors unless they choose to opt o{{ut}}. In others, people must actively sign up to beco{{me}} donors. Countries with automatic registration usually have much higher rates of par{{ticipation}}. Defaults influence decisions because changing them requires ef{{fort}}, and people may see the default as a recommen{{dation}}. Governments and compa{{nies}} use defaults in many areas, such as retirement savings and privacy set{{tings}}, which has raised ethical ques{{tions}} about how much influence they should have.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to student worker pay",
          text: [
            "To: All students employed by the university",
            "From: Human Resources Office",
            "Subject: New pay rates and timesheet system",
            "Starting January 1, the minimum hourly pay rate for student employees will increase from $13 to $14.50. Students who already earn more than the new minimum will receive a raise of fifty cents per hour.",
            "In addition, paper timesheets will be replaced by an online system. Students must enter their hours every week, and supervisors must approve them by Monday at noon. Hours that are not approved on time will be paid in the following pay period. Training videos explaining the new system are available on the Human Resources website.",
          ],
          questions: [
            { text: "What will the new minimum hourly pay rate be?", options: ["$14.50", "$13", "$15", "$12"], answer: 0 },
            { text: "What will replace paper timesheets?", options: ["an online system", "phone calls", "a new paper form", "nothing"], answer: 0 },
            { text: "What happens if hours are not approved on time?", options: ["They will be paid in the following pay period.", "They will not be paid.", "The student will lose the job.", "They will be paid double."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The potential of seaweed farming",
          paragraphs: [
            "Seaweed has been eaten for thousands of years in parts of East Asia, where it is a common ingredient in soups, salads and sushi. In recent years, interest in seaweed farming has grown around the world, not only as a source of food but also as a possible way to address environmental problems. Seaweed farms are now found in countries ranging from Indonesia and the Philippines to Norway and the United States.",
            "Seaweed grows very quickly and does not need fresh water, fertilizer or land, which makes it an attractive crop compared with many plants grown on land. As it grows, seaweed absorbs carbon dioxide and excess nutrients from seawater, which can help reduce local problems such as ocean acidification and the overgrowth of algae caused by agricultural runoff. Seaweed farms can also provide shelter for fish and other marine animals. Beyond food, seaweed is used in cosmetics, medicines and fertilizers, and researchers are developing seaweed-based materials to replace some plastics. Some studies even suggest that adding small amounts of certain seaweeds to cattle feed can reduce the methane cows produce.",
            "Despite this potential, seaweed farming faces challenges. Large farms could shade the seabed, change water flow or compete with other uses of coastal areas, such as fishing and tourism. Storms and rising ocean temperatures can damage crops, and in some places diseases have destroyed entire harvests. In addition, the carbon absorbed by seaweed is stored only temporarily unless the seaweed sinks to the deep ocean or is used in long-lasting products. Scientists therefore stress that seaweed farming can contribute to sustainability but is not a complete solution to climate change.",
          ],
          questions: [
            { text: "According to paragraph 2, why is seaweed an attractive crop?", options: ["It grows quickly and needs no fresh water, fertilizer or land.", "It grows only in deserts.", "It requires a lot of fertilizer.", "It can be grown in any lake."], answer: 0 },
            { text: "According to paragraph 2, how might seaweed help reduce methane from cattle?", options: ["Adding certain seaweeds to cattle feed may reduce methane.", "Cows eat less grass.", "Seaweed absorbs methane from the air.", "Cattle are moved to the sea."], answer: 0 },
            { text: "The word \"excess\" in paragraph 2 is closest in meaning to", options: ["more than is needed", "missing", "natural", "clean"], answer: 0 },
            { text: "Which challenge of seaweed farming is mentioned in paragraph 3?", options: ["Large farms could shade the seabed.", "Seaweed grows too slowly.", "Seaweed cannot be eaten.", "Seaweed needs too much fresh water."], answer: 0 },
            { text: "What do scientists stress about seaweed farming?", options: ["It can contribute to sustainability but is not a complete solution to climate change.", "It will solve climate change on its own.", "It should be banned.", "It has no environmental benefits."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ferhat", prompt: "Why are you learning to cook?", chunks: ["I", "am moving", "into", "my own", "apartment"], end: "." },
      { promptBy: "Rachel", prompt: "Did you enjoy the art workshop?", chunks: ["we", "painted", "a large", "picture", "together"], end: "." },
      { promptBy: "Gizem", prompt: "My bike keeps getting flat tires.", chunks: ["why don't", "you", "buy", "stronger", "tires"], end: "?" },
      { promptBy: "Harry", prompt: "How did you get to the island?", chunks: ["we", "took", "a small", "boat", "from the harbor"], end: "." },
      { promptBy: "Nilay", prompt: "When does the school year end?", chunks: ["it", "ends", "in", "the middle", "of June"], end: "." },
      { promptBy: "Kevin", prompt: "Why are the trains running late?", chunks: ["there", "was", "a problem", "with", "the power lines"], end: "." },
      { promptBy: "Ece", prompt: "What did you see at the zoo?", chunks: ["we", "saw", "lions", "and", "giraffes"], end: "." },
      { promptBy: "Will", prompt: "Where can I find a good dentist?", chunks: ["my dentist", "works", "in", "the clinic", "on Park Street"], end: "." },
      { promptBy: "Hazal", prompt: "It's too cold to sit outside.", chunks: ["should", "we", "go", "inside", "the café"], end: "?" },
      { promptBy: "Tom", prompt: "Why did you choose to study abroad?", chunks: ["I", "wanted", "to improve", "my", "English"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently joined a book club at your local library. You enjoy the meetings, but you think the club could be improved. You want to write to the club organizer with suggestions.",
      to: "the book club organizer, Mrs. Taylor",
      subject: "Suggestions for our book club",
      tasks: ["Say what you enjoy about the club.", "Explain what could be improved.", "Make specific suggestions."],
      sample: "Dear Mrs. Taylor,\n\nI joined the library book club three months ago, and I wanted to thank you for organizing such friendly and interesting meetings. I really enjoy hearing different opinions about the books we read, and I have discovered several authors I would never have chosen myself.\n\nHowever, I have noticed a few things that could make the club even better. First, we usually read only recent novels, so we rarely discuss classic books or nonfiction. Second, the meetings sometimes run over time because a few members talk for a long time, while quieter members do not get a chance to share their views. Finally, many members have mentioned that it is difficult to find copies of the books, as the library often has only two or three.\n\nI would like to suggest that members take turns choosing the books, including occasional classics or nonfiction titles. It might also help to give each person a few minutes to speak at the start of the discussion. Finally, perhaps we could choose books a month in advance, so that members have time to borrow or buy them.\n\nThank you for considering these ideas.\n\nBest wishes,\nZehra Kılıç",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Urban Planning",
      professor: {
        name: "Dr. Carter",
        text: "Some cities have started using electric scooters that people can rent through an app and leave anywhere when they finish their ride. Supporters say scooters reduce car traffic and pollution. Critics complain that scooters clutter sidewalks, cause accidents and are not as environmentally friendly as they seem. Should cities allow shared electric scooters? Explain your view.",
      },
      students: [
        { name: "Chloe", text: "Yes. Scooters are a fast and cheap way to travel short distances, and they're much better than driving a car." },
        { name: "Emre", text: "No. People leave them everywhere, blocking sidewalks, and riders often go too fast. They're dangerous for pedestrians." },
      ],
      sample: "I believe cities should allow shared electric scooters, but only with clear rules about where they can be ridden and parked. Chloe is right that scooters can replace some short car trips, especially for people traveling a few kilometers to work or to a train station, which can reduce traffic and emissions. They are also convenient and affordable. However, Emre raises legitimate safety concerns. When scooters are left on sidewalks, they can block the way for pedestrians, particularly elderly people and people with disabilities, and riders who go too fast on crowded sidewalks can cause accidents. Cities could address these problems by requiring scooters to be parked in designated areas, limiting their speed in busy zones, banning them from sidewalks and requiring companies to collect scooters that are left in the wrong places.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new employee at a garden supply store. Your manager is telling you what to say to customers.",
      sentences: [
        "Hello, can I help you with anything?",
        "Garden tools are in aisle four.",
        "These seeds grow best in spring.",
        "We can deliver heavy bags of soil.",
        "Wheelbarrows are on sale this week.",
        "If you are not sure which plants will grow in your garden, I can recommend some that need very little water.",
        "We hold a free gardening class every Saturday morning, where experts explain how to plant, water and care for vegetables at home.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of adventure and challenges. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is the most challenging thing you have ever done?",
          sample: "The most challenging thing I've done was climbing Mount Erciyes with a group of friends. It took almost the whole day, and the last part was very steep and cold. At one point, I wanted to give up, but my friends encouraged me to keep going. When we finally reached the top, the view was incredible, and I felt very proud. It taught me that I'm capable of more than I think.",
        },
        {
          text: "Do you enjoy trying new and adventurous activities?",
          sample: "Yes, I enjoy trying new activities, although I'm not a big risk-taker. I like things like hiking, kayaking and trying new sports, which are exciting but not too dangerous. I've never tried extreme sports like skydiving, and I'm not sure I'd want to. Trying new things helps me learn about myself and gives me interesting experiences to remember.",
        },
        {
          text: "Why do you think some people enjoy dangerous activities?",
          sample: "I think some people enjoy dangerous activities because of the excitement and the rush of adrenaline they feel. Activities like rock climbing or skydiving can make people feel extremely alive and focused. Others enjoy the challenge of overcoming their fears and pushing their limits. For some people, it's also about achieving something rare, like climbing a famous mountain, which gives them a strong sense of accomplishment.",
        },
        {
          text: "Should children be allowed to take part in risky activities?",
          sample: "I think children should be allowed to take some risks, such as climbing trees or riding bikes, because these activities help them develop confidence, coordination and judgment. If children are protected from every risk, they may become fearful or fail to learn how to deal with challenges. However, adults should make sure the activities are suitable for the children's age and that basic safety rules, like wearing helmets, are followed.",
        },
      ],
    },
  },
};
