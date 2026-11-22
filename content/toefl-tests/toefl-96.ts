import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 96 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_96: ToeflTest = {
  id: "toefl-96",
  no: 96,
  title: "TOEFL iBT Practice Test 96",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Corkscrews",
          text: "For centuries, bottles of wine were sealed with corks, which had to be pushed in tightly to keep air o{{ut}}. Removing them could be very diffi{{cult}}. The first corkscrews appeared in the seventeenth cen{{tury}} and were probably based on a tool used to remove bullets from the barrels of gu{{ns}}. Early corkscrews had a simple T-shaped han{{dle}} attached to a metal spi{{ral}}. The user turned the spiral into the cork and then pulled ha{{rd}}. Later inventors designed corkscrews with levers that made the cork much easier to rem{{ove}}. Today, many bottles have screw caps, but corkscrews are still widely used, and some people collect unusual old mod{{els}} as a hob{{by}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Walking my dog",
          text: [
            "Hi Leyla, I have to stay late at the office tonight, and my dog Bob hasn't been out since this morning. Could you take him for a short walk around 6?",
            "The spare key is with the doorman, and his lead is hanging next to the door. Just twenty minutes in the park would be perfect. Thank you!",
          ],
          questions: [
            { text: "Why does the writer need help?", options: ["The writer has to stay late at the office.", "The dog is sick.", "The writer is traveling.", "The writer lost the dog."], answer: 0 },
            { text: "Where is the spare key?", options: ["with the doorman", "under the mat", "next to the door", "in the mailbox"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Common room TV rules",
          text: [
            "COMMON ROOM TELEVISION",
            "The television in the residence hall common room may be used between 8 a.m. and 11 p.m. Residents can book the TV for special events, such as sports matches or film nights, through the front desk.",
            "Bookings are limited to three hours per group, and the volume must be kept at a reasonable level. Please switch off the TV and tidy the room when you finish. Repeated misuse may lead to the TV being removed.",
          ],
          questions: [
            { text: "When can the TV be used?", options: ["between 8 a.m. and 11 p.m.", "twenty-four hours a day", "only on weekends", "only in the evenings"], answer: 0 },
            { text: "How can residents book the TV for special events?", options: ["through the front desk", "online only", "by asking other residents", "they cannot book it"], answer: 0 },
            { text: "What may happen after repeated misuse?", options: ["The TV may be removed.", "Residents will pay a fine.", "The common room will be closed forever.", "Nothing will happen."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How hot air balloons fly",
          paragraphs: [
            "The hot air balloon was the first technology that allowed humans to fly. In 1783, two French brothers, Joseph-Michel and Jacques-Étienne Montgolfier, launched a balloon made of fabric and paper in front of a crowd. Later that year, a sheep, a duck and a rooster became the first passengers, and soon afterward, two men completed the first human flight, drifting over Paris for about twenty-five minutes.",
            "Hot air balloons work because hot air is lighter than cold air. When air is heated, its molecules move faster and spread farther apart, so a given volume of hot air weighs less than the same volume of cooler air. A balloon consists of a large fabric envelope, a burner and a basket for passengers. When the pilot turns on the burner, it heats the air inside the envelope. Once the air inside is hot enough, the balloon becomes lighter than the surrounding air and rises. To descend, the pilot allows the air to cool or opens a vent at the top to release some hot air.",
            "Balloon pilots cannot steer their balloons in the same way as airplane pilots. Instead, they control only height. Because winds often blow in different directions at different altitudes, skilled pilots change height to find winds that will carry them in the direction they want to go. For this reason, balloon flights usually take place early in the morning or late in the evening, when winds are calmer and more predictable. Today, hot air balloons are used mainly for recreation and tourism, offering passengers peaceful views of landscapes from above.",
          ],
          questions: [
            { text: "According to paragraph 1, who were the first passengers in a hot air balloon?", options: ["a sheep, a duck and a rooster", "two French brothers", "a group of soldiers", "a king and queen"], answer: 0 },
            { text: "According to paragraph 2, why does a hot air balloon rise?", options: ["Hot air is lighter than the surrounding cooler air.", "The burner pushes it upward.", "The wind lifts the basket.", "The envelope is filled with water."], answer: 0 },
            { text: "The word \"descend\" in paragraph 2 is closest in meaning to", options: ["go down", "go up", "turn around", "speed up"], answer: 0 },
            { text: "According to paragraph 3, how do pilots control the direction of a balloon?", options: ["by changing height to find winds blowing in the right direction", "by using a steering wheel", "by using engines", "by throwing objects from the basket"], answer: 0 },
            { text: "Why do balloon flights usually take place in the early morning or late evening?", options: ["Winds are calmer and more predictable.", "It is warmer then.", "There are fewer birds.", "The views are better at night."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A morning at the pond",
          text: "Every Sunday morning, my little brother and I walk to the pond in our pa{{rk}}. We take some seeds and small pieces of vegeta{{bles}} for the ducks. When the ducks see us, they swim quickly toward the sh{{ore}}. My brother laughs when they quack lou{{dly}}. Sometimes there are baby ducks following their mot{{her}} in a long line. We also see fish swimming under the wa{{ter}} and frogs sitting on big gr{{een}} lea{{ves}}. After feeding the ducks, we sit on a wooden ben{{ch}} and watch the birds. It is a quiet and happy way to start the we{{ek}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Archery for beginners",
          text: [
            "TRY ARCHERY THIS SUMMER!",
            "Our beginner archery sessions take place every Saturday at 10 a.m. and 2 p.m. at Oak Hill Sports Field. Qualified coaches will teach you how to hold a bow and shoot safely.",
            "Each one-hour session costs $15, including all equipment. Participants must be at least ten years old. Please wear closed shoes and avoid loose clothing. Sessions are canceled in heavy rain.",
          ],
          questions: [
            { text: "Who teaches the sessions?", options: ["qualified coaches", "students", "parents", "volunteers from a school"], answer: 0 },
            { text: "What is included in the price?", options: ["all equipment", "lunch", "a trophy", "a T-shirt"], answer: 0 },
            { text: "What should participants avoid wearing?", options: ["loose clothing", "closed shoes", "sports clothes", "hats"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How chipmunks store food",
          paragraphs: [
            "Chipmunks are small striped animals that live in forests in North America. They are related to squirrels, but they spend much more time on the ground.",
            "Chipmunks have special pouches in their cheeks. They can fill these pouches with nuts and seeds and carry a lot of food at once. Sometimes their cheeks become so full that they look much bigger than their heads.",
            "Chipmunks carry the food back to their underground homes, where they store it in special rooms. In winter, they sleep for long periods, but they wake up from time to time to eat from their food store. Unlike some animals, they do not get very fat before winter.",
          ],
          questions: [
            { text: "Where do chipmunks live?", options: ["in forests in North America", "in African deserts", "in the ocean", "in cold mountains in Asia"], answer: 0 },
            { text: "What special feature do chipmunks have?", options: ["pouches in their cheeks", "long necks", "wings", "a very long tail"], answer: 0 },
            { text: "The word \"pouches\" in paragraph 2 is closest in meaning to", options: ["small pockets", "teeth", "eyes", "stripes"], answer: 0 },
            { text: "Where do chipmunks store their food?", options: ["in special rooms in their underground homes", "in trees", "under rocks", "in people's houses"], answer: 0 },
            { text: "What do chipmunks do during winter?", options: ["sleep for long periods and wake to eat", "travel to warm places", "eat grass every day", "build new homes"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Stroop effect",
          text: "In 1935, the psychologist John Ridley Stroop described a simple but powerful experiment. Participants were shown color words, such as \"red\" or \"blue\", printed in different colored in{{ks}}. They were asked to name the color of the ink rather than read the wo{{rd}}. When the word and the ink matched, participants answered quic{{kly}}. However, when they did not match, for example when the word \"blue\" was printed in red i{{nk}}, people took much longer and made more mis{{takes}}. This is known as the Stroop ef{{fect}}. It shows that reading is so automatic for adults that it is difficult to igno{{re}} the meaning of a word, even when it is not rele{{vant}}. Today, versions of the test are used to study atten{{tion}} and mental con{{trol}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Final-year project showcase",
          text: [
            "To: Final-year engineering students",
            "From: Faculty of Engineering",
            "Subject: Present your project at the end-of-year showcase",
            "The Faculty of Engineering will hold its annual project showcase on June 5 in the main exhibition hall. All final-year students are invited to display their projects, and representatives from more than thirty companies have confirmed that they will attend.",
            "Each team will receive a table and a display board. Teams must register their project and indicate any special requirements, such as electricity or extra space, by May 15. Prizes will be awarded for the most innovative project and the best presentation, and the winning teams will receive funding to develop their ideas further.",
          ],
          questions: [
            { text: "Who will attend the showcase besides students?", options: ["representatives from more than thirty companies", "only professors", "school children", "government officials only"], answer: 0 },
            { text: "What must teams do by May 15?", options: ["register their project and indicate special requirements", "finish their final exam", "pay a fee", "build a website"], answer: 0 },
            { text: "What will winning teams receive?", options: ["funding to develop their ideas further", "a job offer", "free tuition", "a trip abroad"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Earthquake-resistant buildings",
          paragraphs: [
            "Earthquakes themselves rarely kill people directly; most deaths and injuries occur when buildings collapse. For this reason, engineers have spent decades developing ways to make buildings safer during earthquakes. The goal is not necessarily to prevent all damage, which would be extremely expensive, but to make sure that buildings do not collapse and that people inside can escape safely.",
            "One basic principle is flexibility. Buildings that are too rigid can crack and break when the ground shakes, while structures that can bend slightly are better able to absorb the energy of an earthquake. Engineers use steel frames and reinforced concrete, in which steel bars are placed inside the concrete to make it stronger and more flexible. They also design buildings with a regular, balanced shape, since unusual shapes can cause some parts of a building to twist more than others.",
            "In earthquake-prone countries such as Japan and Chile, more advanced technologies are also used. Some buildings rest on base isolators, flexible pads made of rubber and steel placed between the building and its foundation, which reduce the amount of shaking that reaches the structure. Tall buildings may contain dampers, heavy devices that move in the opposite direction to the building's motion and reduce swaying. However, such technologies can be costly, and many people around the world live in older buildings constructed before modern codes were introduced. Strengthening these existing buildings is one of the greatest challenges in reducing earthquake risk.",
          ],
          questions: [
            { text: "According to paragraph 1, what causes most deaths in earthquakes?", options: ["the collapse of buildings", "the shaking of the ground itself", "fires only", "tsunamis only"], answer: 0 },
            { text: "According to paragraph 2, why is flexibility important for buildings?", options: ["Flexible structures can absorb earthquake energy better.", "Flexible buildings are cheaper.", "Flexible buildings are taller.", "Flexible buildings need no foundation."], answer: 0 },
            { text: "The word \"reinforced\" in paragraph 2 is closest in meaning to", options: ["strengthened", "painted", "softened", "removed"], answer: 0 },
            { text: "According to paragraph 3, what do base isolators do?", options: ["reduce the amount of shaking that reaches the building", "make buildings taller", "heat the building", "predict earthquakes"], answer: 0 },
            { text: "What does the author describe as one of the greatest challenges?", options: ["strengthening older buildings constructed before modern codes", "building new skyscrapers", "predicting earthquakes exactly", "finding steel"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Taner", prompt: "Why are you smiling?", chunks: ["I", "just", "heard", "some", "great news"], end: "." },
      { promptBy: "Kate", prompt: "Did you enjoy the camping trip?", chunks: ["we", "saw", "so many", "stars", "at night"], end: "." },
      { promptBy: "Burcu", prompt: "I always forget my umbrella.", chunks: ["why don't", "you", "keep", "a small one", "in your bag"], end: "?" },
      { promptBy: "Mike", prompt: "How long have you been a teacher?", chunks: ["I", "have taught", "English", "for", "ten years"], end: "." },
      { promptBy: "Ayşe", prompt: "When does the bakery open?", chunks: ["it", "opens", "at", "seven", "every morning"], end: "." },
      { promptBy: "Ben", prompt: "Why is the river so high today?", chunks: ["it", "rained", "all", "night", "in the mountains"], end: "." },
      { promptBy: "Gül", prompt: "What did you think of the lecture?", chunks: ["it", "was", "interesting", "but", "too long"], end: "." },
      { promptBy: "Sean", prompt: "Where did you learn to play tennis?", chunks: ["I", "joined", "a club", "near", "my school"], end: "." },
      { promptBy: "Sinem", prompt: "My computer is very slow.", chunks: ["should", "you", "delete", "some", "old files"], end: "?" },
      { promptBy: "Nathan", prompt: "Why did you decide to become a chef?", chunks: ["I", "have always", "loved", "cooking", "for others"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently ordered a set of kitchen knives online as a gift for your parents, but the package arrived with one knife missing. You want to contact the online shop.",
      to: "the online shop's customer service team",
      subject: "Missing item in my order",
      tasks: ["Give details of your order.", "Describe the problem.", "Say what you would like the shop to do."],
      sample: "Dear Customer Service Team,\n\nOn March 18, I ordered a six-piece kitchen knife set from your website as an anniversary gift for my parents. The order number is KS-30981, and I paid $120, including express delivery, because I wanted the gift to arrive before their anniversary on March 25.\n\nThe package arrived yesterday, but when I opened it to wrap the gift, I found that one of the knives, the large bread knife, was missing. The box was sealed, and there was an empty space in the wooden block where the knife should have been. I have attached photographs of the box and the knife block.\n\nI would like you to send the missing bread knife as soon as possible, ideally by express delivery, so that I can give the complete set to my parents on time. If this is not possible, I would prefer a partial refund for the missing item. Please let me know which option you can offer.\n\nThank you for your help.\n\nBest regards,\nOğuz Yalın",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Psychology",
      professor: {
        name: "Dr. Spencer",
        text: "Some people prefer to plan their weekends and holidays carefully, with a schedule of activities. Others prefer to leave their free time unplanned so that they can decide what to do spontaneously. Is it better to plan free time or to be spontaneous? Explain your view.",
      },
      students: [
        { name: "Mia", text: "Planning is better. If you don't plan, you often waste your free time doing nothing or scrolling on your phone." },
        { name: "Barış", text: "Being spontaneous is better. Free time should be relaxing. If everything is scheduled, it feels like another workday." },
      ],
      sample: "I think the best approach is to plan a few key activities while leaving plenty of time unplanned. Mia makes a good point: without any plans, free time can easily disappear into unproductive activities, such as scrolling through social media for hours, and people may later feel they have wasted their weekend. Planning one or two meaningful activities, like meeting friends or going for a hike, ensures that free time includes things people truly value. However, Barış is right that leisure should feel relaxing rather than like another set of obligations. Some of the most enjoyable moments come from spontaneous decisions, such as exploring a new neighborhood or accepting a last-minute invitation. A flexible balance allows people to benefit from both structure and freedom.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new staff member at a hot air balloon company. The chief pilot is telling you what to say to passengers.",
      sentences: [
        "Good morning, welcome to Sky Rides.",
        "Please sign the safety form here.",
        "The flight will last about one hour.",
        "Wear comfortable shoes and warm clothes.",
        "Children must be at least eight years old.",
        "If the wind is too strong, we may have to move your flight to another day for safety reasons.",
        "After landing, we will celebrate with a small breakfast in the field, and every passenger will receive a flight certificate.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about travel and new experiences. The researcher will ask you some questions.",
      questions: [
        {
          text: "Is there a new experience you would like to try in the future?",
          sample: "I would really like to try a hot air balloon ride in Cappadocia. I've seen many photos of colorful balloons floating over the valleys at sunrise, and it looks magical. I think seeing the landscape from above in such a peaceful way would be an unforgettable experience. I'm saving money for it, and I hope to do it next summer with my family.",
        },
        {
          text: "Do you prefer traveling to new places or returning to places you know?",
          sample: "I usually prefer traveling to new places, because I enjoy discovering different cultures, food and landscapes. Every new place teaches me something. However, I also enjoy returning to a few favorite places, like my grandparents' village, because they feel comfortable and full of memories. I think both kinds of travel have value: new places for excitement and familiar places for relaxation.",
        },
        {
          text: "Why do some people avoid trying new things?",
          sample: "I think many people avoid trying new things because they feel afraid of failing or looking foolish in front of others. Some people also prefer the comfort of their routines and don't like uncertainty. Others may worry about the cost or the time required. However, trying new things can be very rewarding, so it helps to start with small changes, like trying a new food or hobby, to build confidence.",
        },
        {
          text: "How can people be encouraged to step out of their comfort zone?",
          sample: "People can be encouraged to step out of their comfort zone by taking small, manageable steps rather than making huge changes at once. Having a friend to try something new with can also make it less scary. Schools and workplaces can help by creating supportive environments where mistakes are seen as part of learning. Celebrating small achievements can also motivate people to keep trying new challenges.",
        },
      ],
    },
  },
};
