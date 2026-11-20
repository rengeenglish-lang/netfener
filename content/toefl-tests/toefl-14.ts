import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 14 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_14: ToeflTest = {
  id: "toefl-14",
  no: 14,
  title: "TOEFL iBT Practice Test 14",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The first zoos",
          text: "People have kept wild animals for thousands of years. Ancient rul{{ers}} in Egypt and China collected lions, eleph{{ants}} and exotic birds to show their pow{{er}} and wealth. These collections were not ope{{n}} to ordinary people. The first mod{{ern}} zoos appeared in Europe in the eighte{{enth}} and nineteenth centuries. At fir{{st}}, animals were often kept in small ca{{ges}}. Today, many zoos try to cre{{ate}} more natural spaces and supp{{ort}} the protection of endangered species.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Carpool",
          text: [
            "Morning! My car is at the garage until Friday, so I can't drive us to work this week.",
            "Could you pick me up instead? I'll pay for the gas. I'll be waiting outside my building at 8:15.",
          ],
          questions: [
            { text: "Why can't the writer drive this week?", options: ["The writer is on vacation.", "The writer's car is being repaired.", "The writer has lost the car keys.", "The writer is working from home."], answer: 1 },
            { text: "What does the writer offer to do?", options: ["pay for gas", "buy lunch", "drive next month", "take the bus"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Quiet hours during exams",
          text: [
            "RESIDENCE HALLS: EXTENDED QUIET HOURS",
            "From December 5 until the end of the exam period, quiet hours will be in effect 24 hours a day in all residence halls. Music, loud conversations and gatherings in hallways are not permitted.",
            "Common rooms on each floor will remain open for group study. Residents who repeatedly break the quiet hours rule will be reported to the housing office.",
          ],
          questions: [
            { text: "When do the extended quiet hours begin?", options: ["at the start of the semester", "on December 5", "after the exam period", "on weekends only"], answer: 1 },
            { text: "What remains available during this period?", options: ["parties in hallways", "common rooms for group study", "loud music until midnight", "the dining hall only"], answer: 1 },
            { text: "What may happen to residents who repeatedly break the rule?", options: ["They will be moved to another hall.", "They will be reported to the housing office.", "They will lose their exam results.", "They will pay a fine immediately."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The invention of the barcode",
          paragraphs: [
            "In 1948, a graduate student named Bernard Silver overheard a supermarket executive asking whether a way could be found to record product information automatically at the checkout. Silver and his friend Norman Joseph Woodland began working on the problem. Woodland, inspired by Morse code, drew dots and dashes in the sand of a beach and then extended them downward into thick and thin lines. In 1952, the two men received a patent for a circular design based on this idea.",
            "Their invention, however, was ahead of its time. The equipment needed to read the code was large, expensive and unreliable, and the patent expired before the system could be widely used. It was only in the 1970s, when lasers and computer chips became cheaper, that barcode scanning became practical. In 1973, American grocery companies agreed on a standard rectangular code, known as the Universal Product Code, which Woodland helped to develop.",
            "On June 26, 1974, a pack of chewing gum became the first product to be scanned at a supermarket checkout, in the US state of Ohio. At first, many shops were reluctant to adopt the system, because it required expensive scanners and every manufacturer had to print codes on its packaging. Once enough products carried codes, however, the advantages became clear: checkouts became faster, pricing errors fell and shops could track their stock precisely. Today, barcodes are scanned billions of times a day.",
          ],
          questions: [
            { text: "According to paragraph 1, what inspired Woodland's design?", options: ["the shape of supermarket shelves", "Morse code", "musical notes", "a computer program"], answer: 1 },
            { text: "The word \"reluctant\" in paragraph 3 is closest in meaning to", options: ["unwilling", "eager", "unable", "proud"], answer: 0 },
            { text: "According to paragraph 2, why was the original invention not widely used at first?", options: ["The patent was rejected.", "The reading equipment was large, expensive and unreliable.", "Supermarkets did not sell enough products.", "The code was too difficult to print."], answer: 1 },
            { text: "What was the first product scanned at a supermarket checkout?", options: ["a can of soup", "a pack of chewing gum", "a bottle of milk", "a loaf of bread"], answer: 1 },
            { text: "According to paragraph 3, which is NOT mentioned as an advantage of barcodes?", options: ["faster checkouts", "fewer pricing errors", "precise stock tracking", "lower prices for customers"], answer: 3 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A visit to the dentist",
          text: "Yesterday I went to the dentist for a check-up. I was a lit{{tle}} nervous, but the dentist was very ki{{nd}}. She looked at my te{{eth}} and said they were healthy. Then she clea{{ned}} them with a small machine. She told me to bru{{sh}} my teeth twice a d{{ay}} and to eat fewer swe{{ets}}. The visit only to{{ok}} twenty minutes. I will go ba{{ck}} in six months for my next ch{{eck}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Photography club",
          text: [
            "JOIN THE PHOTOGRAPHY CLUB!",
            "We meet every Thursday at 5 p.m. in the Arts Building, Room 3. Beginners are welcome. You can use your phone or your own camera.",
            "Each month, we organize a photo walk around the city, and the best pictures are shown in the library. Membership is $10 for the whole year.",
          ],
          questions: [
            { text: "When does the club meet?", options: ["every Tuesday", "every Thursday", "every Saturday", "once a month"], answer: 1 },
            { text: "What can members use to take photos?", options: ["only professional cameras", "their phones or their own cameras", "cameras borrowed from the club", "film cameras only"], answer: 1 },
            { text: "Where are the best pictures shown?", options: ["in the Arts Building", "in the library", "on the city website", "in a newspaper"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How kangaroos move",
          paragraphs: [
            "Kangaroos live in Australia and are famous for hopping. They have very strong back legs and long feet, and they use their large tails for balance.",
            "Hopping is an efficient way to travel. When a kangaroo lands, the tendons in its legs stretch like springs. They store energy and then release it to push the kangaroo into the next jump. This means that kangaroos use very little extra energy when they hop faster.",
            "Kangaroos cannot walk backward easily, and when they move slowly, they use their tail as a fifth leg. They can travel at more than fifty kilometers an hour for short distances.",
          ],
          questions: [
            { text: "What do kangaroos use their tails for when hopping?", options: ["to swim", "for balance", "to dig", "to carry food"], answer: 1 },
            { text: "The word \"efficient\" in paragraph 2 is closest in meaning to", options: ["slow", "economical", "dangerous", "noisy"], answer: 1 },
            { text: "What do the tendons in a kangaroo's legs do?", options: ["They store and release energy.", "They keep the kangaroo warm.", "They help it eat.", "They make it heavier."], answer: 0 },
            { text: "How do kangaroos use their tail when moving slowly?", options: ["as a fifth leg", "to hold their babies", "to fight", "to swim"], answer: 0 },
            { text: "How fast can kangaroos travel for short distances?", options: ["about ten kilometers an hour", "about twenty kilometers an hour", "more than fifty kilometers an hour", "more than one hundred kilometers an hour"], answer: 2 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Mpemba effect",
          text: "Under certain conditions, hot water appears to freeze faster than cold wa{{ter}}. This puzzling observation is named after Erasto Mpemba, a Tanzanian stu{{dent}} who noticed it in the 1960s while making ice cr{{eam}}. Possible explana{{tions}} include faster evaporation, which reduces the amo{{unt}} of water to be frozen, and differences in dissol{{ved}} gases. However, the effect is diffi{{cult}} to reproduce reli{{ably}}, and some physicists argue that it disap{{pears}} when experiments are carefully contr{{olled}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Library fines and holds",
          text: [
            "To: All library users",
            "From: University Library Services",
            "Subject: New policy on overdue items and holds",
            "Beginning next semester, the library will no longer charge daily fines for overdue books. Instead, borrowing privileges will be suspended for any user with an item more than fourteen days overdue, and the suspension will be lifted as soon as the item is returned. Items not returned within sixty days will be considered lost, and the user will be charged a replacement fee.",
            "The library is also changing its hold system. Users may now place up to ten holds at a time, an increase from five, and items on hold will be kept at the service desk for seven days rather than three. Holds that are not collected within this period will be released to the next person on the waiting list.",
          ],
          questions: [
            { text: "What will happen to users with items more than fourteen days overdue?", options: ["They will pay a daily fine.", "Their borrowing privileges will be suspended.", "They will be charged a replacement fee immediately.", "They will lose their library card permanently."], answer: 1 },
            { text: "When is an item considered lost?", options: ["after fourteen days", "after thirty days", "after sixty days", "after one semester"], answer: 2 },
            { text: "What change is made to the hold system?", options: ["Users can place fewer holds.", "Items on hold are kept longer.", "Holds can only be placed online.", "Holds are no longer available."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Urban foxes",
          paragraphs: [
            "Over the past century, red foxes have become a familiar sight in many European cities, including London, Bristol and Zurich. Foxes were first recorded living in British suburbs in the 1930s, when the expansion of low-density housing with large gardens created an environment that offered food, shelter and relatively few dangers. Since then, urban populations have grown, and in some cities foxes can be seen in parks, railway lines and even busy town centers.",
            "Urban foxes differ from their rural relatives in several ways. Their territories are usually much smaller, because food is concentrated and abundant: they eat discarded human food, garden fruit, insects, small birds and rodents. Studies have also found that city foxes tend to be bolder and less fearful of humans, although it remains unclear whether this reflects learning during an individual's lifetime or genetic changes across generations. Some research has even suggested that the shape of urban foxes' skulls has changed slightly, perhaps because scavenging requires less powerful jaws than hunting.",
            "Not everyone welcomes these neighbors. Some residents complain about noise, damage to gardens and the spreading of rubbish, and there are occasional fears about disease. Others enjoy seeing wildlife in the city and feed foxes deliberately. Wildlife experts generally advise against feeding, since it can make foxes dependent on people and increase conflicts. They also point out that culling foxes in cities is largely ineffective, because when foxes are removed, others quickly move into the empty territories.",
          ],
          questions: [
            { text: "According to paragraph 1, why did foxes begin living in British suburbs in the 1930s?", options: ["Their rural habitats were destroyed by floods.", "New housing with large gardens offered food and shelter.", "People released them into towns.", "Hunting was banned in the countryside."], answer: 1 },
            { text: "The word \"abundant\" in paragraph 2 is closest in meaning to", options: ["plentiful", "scarce", "fresh", "hidden"], answer: 0 },
            { text: "According to paragraph 2, why are urban foxes' territories smaller?", options: ["Cities have more predators.", "Food is concentrated and plentiful.", "Foxes avoid busy streets.", "Urban foxes are smaller animals."], answer: 1 },
            { text: "What is uncertain about urban foxes' boldness?", options: ["whether it exists at all", "whether it is learned or genetic", "whether it affects their diet", "whether it makes them dangerous"], answer: 1 },
            { text: "According to paragraph 3, why is culling foxes in cities largely ineffective?", options: ["Foxes are difficult to catch.", "Other foxes quickly move into empty territories.", "Residents protect the foxes.", "Culling is illegal in most cities."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ayşe", prompt: "Why did you call me this morning?", chunks: ["I", "wanted to", "ask you", "about", "tonight's dinner plans"], end: "." },
      { promptBy: "Matt", prompt: "Have you seen the new science building?", chunks: ["I", "visited it", "last week", "with", "my lab partner"], end: "." },
      { promptBy: "Sofia", prompt: "I can't decide which course to take.", chunks: ["why don't", "you", "talk to", "your academic advisor", "first"], end: "?" },
      { promptBy: "Kaan", prompt: "Where is the nearest pharmacy?", chunks: ["there is", "one", "next to", "the post office", "on Main Street"], end: "." },
      { promptBy: "Grace", prompt: "How did your team do in the tournament?", chunks: ["we", "reached", "the final", "but", "lost by one point"], end: "." },
      { promptBy: "Owen", prompt: "Why are the roads so busy today?", chunks: ["there is", "a big", "football match", "in the city", "this afternoon"], end: "." },
      { promptBy: "Melis", prompt: "Do you know when the essay is due?", chunks: ["the professor", "extended", "the deadline", "until", "next Monday"], end: "." },
      { promptBy: "James", prompt: "What did you do during the holiday?", chunks: ["I", "spent", "most of it", "visiting", "my grandparents"], end: "." },
      { promptBy: "Lara", prompt: "This room is too cold.", chunks: ["should", "we", "ask someone", "to turn up", "the heating"], end: "?" },
      { promptBy: "Henry", prompt: "Why did you choose this university?", chunks: ["it", "has", "one of the best", "biology programs", "in the country"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You have been living in a university residence hall for a month. The heating in your room has not been working properly, and the nights are getting colder.",
      to: "the residence hall maintenance office",
      subject: "Heating problem in my room",
      tasks: ["Describe the problem with the heating.", "Explain how it is affecting you.", "Ask when the problem can be fixed and suggest a convenient time."],
      sample: "Dear Maintenance Office,\n\nI am writing to report a problem with the heating in my room, number 314 in Oak Hall. Since the beginning of the month, the radiator has only been slightly warm, even when it is turned up to the highest setting. At night, the room becomes very cold, especially now that outside temperatures are dropping below zero.\n\nThe problem is starting to affect my health and my studies. I have had a cold for the past week, and I find it difficult to concentrate when I study in my room in the evenings. I have been going to the library to keep warm, but it closes at ten, so this is not a long-term solution.\n\nCould you please let me know when someone can come to repair the radiator? I am usually in my room on weekday mornings before ten and all day on Fridays, so either of those times would be convenient.\n\nThank you for your help.\n\nBest regards,\nCan Öztürk",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Business Studies",
      professor: {
        name: "Dr. Nguyen",
        text: "Some companies have introduced a four-day working week, in which employees work four days but receive the same salary. Supporters say this makes workers happier and more productive. Others believe it is impractical for many businesses. Do you think companies should adopt a four-day working week? Why or why not?",
      },
      students: [
        { name: "Mia", text: "Yes. People who have more rest are more focused and creative. Several trials have shown that productivity stayed the same or even improved, while employees were less stressed." },
        { name: "Yusuf", text: "It might work for office jobs, but what about hospitals, shops or factories? These businesses need staff every day, and hiring more people would be very expensive." },
      ],
      sample: "I think a four-day week is a good idea for many companies, but it cannot be a universal rule. Mia is right that rest improves performance. I worked part-time in a design studio that tried a four-day week, and the team became noticeably more efficient, because people planned their work carefully and wasted less time in unnecessary meetings. However, Yusuf raises an important point about businesses that must operate every day. Hospitals and shops cannot simply close on Fridays. In these cases, a different form of flexibility might work better, such as shorter shifts or rotating schedules that give each employee an extra day off without closing the business. So instead of forcing one model on everyone, governments and companies should encourage experiments and let each sector find the arrangement that suits it best.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are working at a campus information booth during orientation week. A coordinator is telling you what to say to new students.",
      sentences: [
        "Welcome to orientation week.",
        "Your student card is ready at the registration desk.",
        "Free campus tours start every thirty minutes.",
        "The welcome lunch will be served in the main dining hall.",
        "Please check the orientation app for changes to the schedule.",
        "International students should attend the visa information session tomorrow morning at ten.",
        "If you have not yet received your timetable, you can collect a printed copy from your department office before Friday.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's views about cities and the places they live. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe the place where you grew up. What did you like about it?",
          sample: "I grew up in a medium-sized coastal town in western Turkey. What I liked most was being close to the sea. In summer, my friends and I went swimming almost every day after school, and in the evenings families walked along the waterfront. The town was small enough that you often met people you knew in the street, which gave it a friendly atmosphere. The only disadvantage was that there weren't many cultural activities, like concerts or museums.",
        },
        {
          text: "Would you rather live in a big city or a small town? Why?",
          sample: "At this stage of my life, I'd rather live in a big city. Cities offer more job opportunities, better universities and a wider range of cultural activities, which are important to me now. I also enjoy meeting people from different backgrounds. However, I can imagine moving to a smaller town later, when I have a family, because life there is usually calmer, safer and less expensive, and children can spend more time outdoors.",
        },
        {
          text: "What is one thing that city governments could do to improve life for residents?",
          sample: "I think improving public transport would make the biggest difference. In many cities, people spend hours every day stuck in traffic, which is stressful and bad for the environment. If buses and trains were more frequent, reliable and affordable, fewer people would need to drive. This would reduce pollution and noise and give people more free time. Cities could also create more bicycle lanes, which would encourage people to exercise as part of their daily routine.",
        },
        {
          text: "Some people believe that cities will become even larger in the future. Do you think this is a good thing?",
          sample: "I think it's both positive and negative. Larger cities can be very efficient, because people live close to jobs, schools and services, and public transport can serve many people at once. They also bring together talented people, which encourages new ideas. However, if growth is not planned well, it can lead to housing shortages, traffic and pollution. So whether larger cities are a good thing really depends on how well governments plan for that growth.",
        },
      ],
    },
  },
};
