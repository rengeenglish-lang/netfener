import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 28 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_28: ToeflTest = {
  id: "toefl-28",
  no: 28,
  title: "TOEFL iBT Practice Test 28",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Public parks",
          text: "For most of history, large gardens belonged to kings and rich fami{{lies}}. Ordinary people could not ent{{er}} them. In the nineteenth century, cities in Europe and North America grew quic{{kly}}, and many workers lived in crowded, dirty stre{{ets}}. Reformers argued that everyone needed fresh air and green spa{{ce}}. As a result, cities began to build public pa{{rks}} open to all. One of the most famous is Central Park in New Yo{{rk}}, which opened in the 1850s. Today, parks are an impor{{tant}} part of city li{{fe}} around the wor{{ld}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Dinner reservation",
          text: [
            "Hi Mom! I booked a table at the Turkish restaurant near my dorm for Saturday at 7.",
            "It's small, so I could only get a table for four. Could you ask Aunt Sevim whether she's coming? If not, I'll invite my roommate.",
          ],
          questions: [
            { text: "Why could the writer only get a table for four?", options: ["The restaurant is small.", "It was the last table.", "The writer forgot to call earlier.", "Saturday is a holiday."], answer: 0 },
            { text: "What will the writer do if Aunt Sevim is not coming?", options: ["cancel the booking", "invite a roommate", "choose another restaurant", "change the time"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Exam hall rules",
          text: [
            "FINAL EXAMINATIONS – RULES FOR CANDIDATES",
            "Arrive at the exam hall at least fifteen minutes before the start time. Students who arrive more than thirty minutes late will not be admitted.",
            "Phones must be switched off and placed in your bag at the front of the hall. Only clear water bottles without labels are allowed on desks. You may not leave the hall during the first hour or the last fifteen minutes of the exam.",
          ],
          questions: [
            { text: "What happens to students who arrive more than thirty minutes late?", options: ["They get less time.", "They will not be admitted.", "They must sit at the back.", "They take the exam another day."], answer: 1 },
            { text: "Where must phones be kept?", options: ["in students' pockets", "in their bags at the front of the hall", "on the desk, switched off", "with the exam supervisor"], answer: 1 },
            { text: "When are students NOT allowed to leave the hall?", options: ["during the first hour and the last fifteen minutes", "at any time", "only during the last hour", "only during the first fifteen minutes"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why Venus is so hot",
          paragraphs: [
            "Venus is often called Earth's twin, because the two planets are similar in size and probably formed from similar materials. Yet conditions on Venus could hardly be more different. Its surface temperature is around 465 degrees Celsius, hot enough to melt lead, and the pressure of its atmosphere is about ninety times that on Earth, roughly equal to the pressure nearly a kilometer under the ocean.",
            "Venus is closer to the Sun than Earth, but this alone cannot explain its extreme heat. In fact, Venus is hotter than Mercury, which is even closer to the Sun. The main reason is its thick atmosphere, which consists mostly of carbon dioxide. Sunlight passes through the atmosphere and warms the surface, which then gives off heat as infrared radiation. The carbon dioxide absorbs much of this radiation and prevents it from escaping into space, causing an extreme greenhouse effect.",
            "Scientists believe that Venus may once have had oceans of liquid water. As the young Sun grew brighter, however, the planet warmed, and its water evaporated. Water vapor is itself a greenhouse gas, so the warming accelerated, a process known as a runaway greenhouse effect. Eventually, much of the water was lost to space. Studying Venus helps scientists understand how planetary climates can change dramatically, and several new missions to the planet are planned for the coming decade.",
          ],
          questions: [
            { text: "According to paragraph 1, why is Venus called Earth's twin?", options: ["It has the same climate as Earth.", "It is similar in size and composition.", "It has oceans like Earth.", "It is the same distance from the Sun."], answer: 1 },
            { text: "The word \"accelerated\" in paragraph 3 is closest in meaning to", options: ["sped up", "stopped", "reversed", "slowed down"], answer: 0 },
            { text: "Why does the author mention Mercury in paragraph 2?", options: ["to show that distance from the Sun alone does not explain Venus's heat", "to compare the size of the two planets", "to explain how Venus formed", "to describe Mercury's atmosphere"], answer: 0 },
            { text: "According to paragraph 2, what role does carbon dioxide play?", options: ["It reflects sunlight back into space.", "It traps heat and prevents it from escaping.", "It cools the surface.", "It creates water vapor."], answer: 1 },
            { text: "According to paragraph 3, what may have happened to Venus's water?", options: ["It froze at the poles.", "It evaporated and much of it was lost to space.", "It moved underground.", "It was absorbed by rocks."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Learning to ride a bike",
          text: "When I was six, my father taught me how to ri{{de}} a bike. At first, he held the back of the se{{at}} while I pedaled. I was nerv{{ous}} and fell down many ti{{mes}}. But my father told me to keep try{{ing}}. One day, I looked back and saw that he was not hold{{ing}} the bike anymore. I was riding by mys{{elf}}! I was so ha{{ppy}}. Now I ride my bike to sch{{ool}} every d{{ay}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Piano for sale",
          text: [
            "PIANO FOR SALE",
            "Used upright piano in excellent condition. Recently tuned. Perfect for beginners or students.",
            "$600 or best offer. The buyer must arrange transport, as the piano is on the second floor. Available for viewing on weekday evenings. Call Mr. Demir at 555-0164.",
          ],
          questions: [
            { text: "What condition is the piano in?", options: ["damaged", "excellent", "new", "needs tuning"], answer: 1 },
            { text: "Who must arrange transport?", options: ["the seller", "the buyer", "a music shop", "Mr. Demir's family"], answer: 1 },
            { text: "When can people see the piano?", options: ["on weekend mornings", "on weekday evenings", "any time", "only on Sundays"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why zebras live in groups",
          paragraphs: [
            "Zebras live on the grasslands of Africa. They usually live in groups called herds, which can include hundreds of animals.",
            "Living in a herd helps zebras stay safe. With many eyes watching, it is easier to notice lions or other predators. When danger comes, the zebras run together.",
            "Their black and white stripes may also help. When many striped zebras run together, it can be hard for a predator to choose one animal to chase. Some scientists also think the stripes keep biting flies away.",
          ],
          questions: [
            { text: "Where do zebras live?", options: ["in forests", "on the grasslands of Africa", "in mountains", "in deserts"], answer: 1 },
            { text: "What is a herd?", options: ["a group of zebras", "a type of grass", "a predator", "a zebra's home"], answer: 0 },
            { text: "How does living in a herd help zebras?", options: ["It helps them find water.", "It makes it easier to notice predators.", "It keeps them warm.", "It helps them sleep."], answer: 1 },
            { text: "The word \"chase\" in paragraph 3 is closest in meaning to", options: ["run after", "eat", "watch", "hide from"], answer: 0 },
            { text: "What do some scientists think the stripes do?", options: ["keep biting flies away", "help zebras swim", "make zebras warmer", "attract mates only"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The mere exposure effect",
          text: "Psychologists have found that people tend to develop a preference for things simply because they are fami{{liar}} with them. In experiments conducted by Robert Zajonc in the 1960s, participants were shown unfamiliar sym{{bols}}, such as Chinese characters, different numbers of ti{{mes}}. Later, they rated the symbols they had seen more of{{ten}} as more pleasant, even though they did not know their mean{{ing}}. This mere exposure effect helps explain why adverti{{sers}} repeat their messages and why songs often become more enjoya{{ble}} after several listen{{ings}}. However, too much repe{{tition}} can lead to bore{{dom}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Academic advising appointments",
          text: [
            "To: All second-year students",
            "From: Academic Advising Center",
            "Subject: Mandatory advising meetings before declaring a major",
            "All second-year students must meet with an academic advisor before declaring their major. Meetings last 30 minutes and can be held in person or online. Please book your appointment through the advising portal by October 31.",
            "Before your meeting, review the requirements for the majors you are considering and prepare a draft plan of the courses you intend to take. Students who have not met with an advisor by the end of the semester will have a hold placed on their account, which will prevent them from registering for spring courses until the meeting has taken place.",
          ],
          questions: [
            { text: "What must second-year students do before declaring a major?", options: ["pass an exam", "meet with an academic advisor", "write an essay", "pay a fee"], answer: 1 },
            { text: "What should students prepare before the meeting?", options: ["a letter from their parents", "a draft plan of courses", "their transcript from high school", "a list of professors"], answer: 1 },
            { text: "What happens if students do not meet an advisor by the end of the semester?", options: ["They must change majors.", "A hold prevents them from registering for spring courses.", "They pay a fine.", "They are assigned a major automatically."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The Black Death and its consequences",
          paragraphs: [
            "Between 1347 and 1351, an epidemic of plague, later known as the Black Death, swept across Europe, the Middle East and North Africa. Spread largely by fleas carried by rats and later between people, the disease killed an estimated thirty to fifty percent of Europe's population within a few years. Contemporary writers described entire villages left empty and cities where the dead could not be buried quickly enough.",
            "The catastrophe had profound economic consequences. With so many workers dead, labor became scarce, and surviving peasants and craftsmen were able to demand higher wages and better conditions. Landowners and governments tried to resist these changes; in England, the Statute of Labourers of 1351 attempted to fix wages at pre-plague levels. Such measures largely failed, however, and in many parts of western Europe the old system of serfdom, in which peasants were tied to the land of a lord, gradually weakened.",
            "Some historians argue that these changes had long-term effects on European development. Higher wages may have encouraged landowners to adopt labor-saving methods and to shift from growing grain to raising sheep, which required fewer workers. Others caution against simple explanations, noting that the consequences differed greatly between regions; in parts of eastern Europe, for example, lords responded by tightening control over peasants. The Black Death thus illustrates how a single disaster can produce very different outcomes depending on existing social and political structures.",
          ],
          questions: [
            { text: "According to paragraph 1, how was the plague mainly spread at first?", options: ["by contaminated water", "by fleas carried by rats", "by spoiled food", "by insects that bite humans in summer"], answer: 1 },
            { text: "The word \"profound\" in paragraph 2 is closest in meaning to", options: ["deep", "brief", "minor", "unexpected"], answer: 0 },
            { text: "According to paragraph 2, why could surviving workers demand higher wages?", options: ["Governments supported them.", "Labor had become scarce.", "Prices had fallen.", "Landowners had left the country."], answer: 1 },
            { text: "What was the purpose of the Statute of Labourers?", options: ["to raise wages", "to fix wages at pre-plague levels", "to end serfdom", "to fight the plague"], answer: 1 },
            { text: "Why does the author mention eastern Europe in paragraph 3?", options: ["to show that consequences differed between regions", "to explain where the plague started", "to describe sheep farming", "to prove that serfdom ended everywhere"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Hande", prompt: "Why did you change your phone number?", chunks: ["I", "kept", "receiving", "calls from", "unknown numbers"], end: "." },
      { promptBy: "Peter", prompt: "Have you heard the news about the campus?", chunks: ["they", "are", "building", "a new", "sports center"], end: "." },
      { promptBy: "Sibel", prompt: "I don't have time to exercise.", chunks: ["why don't", "you", "walk", "to work", "every day"], end: "?" },
      { promptBy: "Logan", prompt: "Where did you learn to play the guitar?", chunks: ["I", "taught myself", "by watching", "online", "videos"], end: "." },
      { promptBy: "Eda", prompt: "How was the concert last night?", chunks: ["the band", "played", "for", "almost", "three hours"], end: "." },
      { promptBy: "Ryan", prompt: "Why is the post office closed?", chunks: ["today", "is", "a national", "holiday", "in this country"], end: "." },
      { promptBy: "Aysel", prompt: "Do you know when the bus arrives?", chunks: ["it", "should", "be here", "in", "five minutes"], end: "." },
      { promptBy: "Evan", prompt: "What did you think of the exam?", chunks: ["it", "was", "easier", "than", "the midterm"], end: "." },
      { promptBy: "Gizem", prompt: "We're running out of milk.", chunks: ["should", "I", "buy some", "on", "my way home"], end: "?" },
      { promptBy: "Mark", prompt: "Why did you decide to live alone?", chunks: ["I", "wanted", "more", "privacy and", "quiet time"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You have been a member of a sports club for two years, but you now want to cancel your membership because you are moving to another city for work.",
      to: "the membership office of the club",
      subject: "Cancellation of membership",
      tasks: ["Explain that you want to cancel your membership and why.", "Mention what you have enjoyed about the club.", "Ask about the cancellation procedure and any refund."],
      sample: "Dear Membership Office,\n\nI am writing to cancel my membership at City Sports Club, membership number 4821. I have recently accepted a job in Ankara and will be moving there at the end of next month, so I will no longer be able to use the club.\n\nI would like to say how much I have enjoyed being a member over the past two years. The swimming pool and the evening yoga classes have been an important part of my routine, and the staff have always been friendly and helpful. In particular, I would like to thank Selin, the yoga instructor, whose classes helped me a great deal during a stressful period at work.\n\nCould you please let me know what I need to do to complete the cancellation? I paid for a full year in advance in January, so I would also like to know whether I am entitled to a refund for the remaining months.\n\nThank you for your help.\n\nBest regards,\nOrhan Güneş",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Political Science",
      professor: {
        name: "Dr. Harris",
        text: "In some countries, voting in national elections is compulsory, and citizens who do not vote may have to pay a small fine. Supporters say this ensures that governments represent the whole population. Critics argue that people should have the freedom not to vote and that forcing people to vote may lead to uninformed choices. Should voting be compulsory? Why or why not?",
      },
      students: [
        { name: "Sophie", text: "Yes. When voting is voluntary, young and poorer people vote less, so politicians ignore them. Compulsory voting makes elections more representative." },
        { name: "Yiğit", text: "No. Choosing not to vote is also a form of political expression. People who don't follow politics shouldn't be forced to choose randomly." },
      ],
      sample: "I am in favor of compulsory voting, provided that voters have the option of leaving their ballot blank. Sophie makes a convincing point. When turnout is low, governments tend to focus on the groups that vote most, often older and wealthier citizens, while the needs of young people and poorer communities receive less attention. In Australia, where voting has been compulsory for about a century, turnout is regularly above ninety percent, and most citizens accept the system. Yiğit is right that people should not be forced to support any particular candidate, which is why a blank or 'none of the above' option is essential. This preserves freedom of expression while still encouraging everyone to take part. Compulsory voting may also motivate people to learn more about the issues, since they know they will have to vote.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are working at the ticket office of a concert hall. Your manager is telling you what to say to customers.",
      sentences: [
        "Good evening and welcome.",
        "The concert starts at eight o'clock.",
        "Your seats are in the upper balcony.",
        "Coats and large bags must be left in the cloakroom.",
        "Photography is not allowed during the performance.",
        "Latecomers will be admitted only during the break, which starts after about forty-five minutes.",
        "If you would like to buy tickets for next month's concerts, students can get a discount by showing a valid student card.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's habits related to shopping. The researcher will ask you some questions.",
      questions: [
        {
          text: "Do you prefer shopping online or in stores? Why?",
          sample: "For most things, I prefer shopping online, because it saves time and I can compare prices easily. I buy books, electronics and household items online almost all the time. However, for clothes and shoes, I prefer going to stores, because I like to try things on and check the quality before buying. Returning items bought online can be annoying, so for anything where size or feel matters, I'd rather see it in person.",
        },
        {
          text: "Tell me about something you bought recently that you are happy with.",
          sample: "Last month I bought a second-hand desk for my room. I found it through an online marketplace, and it cost only about a third of the price of a new one. It's made of solid wood and has several drawers, so I can finally keep my notes and books organized. I'm happy with it not only because it was cheap and useful, but also because buying second-hand is better for the environment.",
        },
        {
          text: "Some people think that advertising makes people buy things they don't need. Do you agree?",
          sample: "Yes, I mostly agree. Advertisements are designed to create desires, often by linking products to happiness, beauty or success. Social media advertising is especially powerful, because it's targeted at our interests and often looks like ordinary posts from people we follow. I've definitely bought things after seeing ads that I didn't really need. However, advertising can also be useful when it informs us about new products or good offers, so people need to be critical rather than avoiding ads completely.",
        },
        {
          text: "How do you think shopping habits will change in the future?",
          sample: "I think online shopping will continue to grow, with faster delivery and perhaps even drones delivering small packages. At the same time, I expect physical stores to become more like places for experiences, where people try products, attend events or meet friends, rather than just buy things. I also hope more people will buy second-hand and repair items instead of replacing them, as awareness of environmental problems increases.",
        },
      ],
    },
  },
};
