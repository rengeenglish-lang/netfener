import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 63 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_63: ToeflTest = {
  id: "toefl-63",
  no: 63,
  title: "TOEFL iBT Practice Test 63",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Bottle caps",
          text: "In the nineteenth century, bottled drinks were often sealed with corks, which could dry out and let air into the bot{{tle}}. As a result, fizzy drinks lost their bub{{bles}} and sometimes went bad. In 1892, an inventor named William Painter patented the crown ca{{p}}, a small metal lid with a crimped edge and a thin layer of cork inside. It sealed bottles tightly and was cheap to pro{{duce}}. To help people open the new caps, Painter also designed a bottle ope{{ner}}. The crown cap was so successful that it became the stan{{dard}} for beer and soft drinks around the wor{{ld}}. Today, many bottles use twist-off caps, but crown caps are still com{{mon}}, and some people even collect th{{em}} as a hob{{by}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Can you pick up my sister?",
          text: [
            "Hi Can, I'm stuck in traffic on the highway and won't make it to the school in time. Could you pick up my sister Defne at 3:30?",
            "She'll be waiting at the main gate with her teacher. I've already called the school to let them know you're coming. Thanks a million!",
          ],
          questions: [
            { text: "Why can't the writer pick up Defne?", options: ["The writer is stuck in traffic.", "The writer is at work.", "The writer's car broke down.", "The writer is sick."], answer: 0 },
            { text: "What has the writer already done?", options: ["called the school to tell them Can is coming", "picked up Defne's bag", "sent Defne a message", "asked the teacher to drive Defne home"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Water refill stations",
          text: [
            "NEW WATER REFILL STATIONS",
            "To reduce plastic waste, the university has installed free water refill stations on every floor of the main academic buildings. The stations provide filtered drinking water, both cold and at room temperature.",
            "Students and staff are encouraged to bring reusable bottles. Starting next semester, the campus shops will no longer sell water in small plastic bottles. Reusable bottles can be purchased at the bookstore for $5.",
          ],
          questions: [
            { text: "Why has the university installed water refill stations?", options: ["to reduce plastic waste", "to save money on electricity", "because the water was dirty", "to replace the cafeteria"], answer: 0 },
            { text: "What will change next semester?", options: ["Campus shops will stop selling small plastic water bottles.", "The stations will be removed.", "Water will cost $5.", "The bookstore will close."], answer: 0 },
            { text: "Where can people buy a reusable bottle?", options: ["at the bookstore", "at the refill stations", "at the library", "online only"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why some birds cannot fly",
          paragraphs: [
            "Flight gives birds enormous advantages, allowing them to escape predators, find food over wide areas and migrate long distances. Yet dozens of bird species, including ostriches, emus, penguins and kiwis, cannot fly. Genetic studies show that these birds descended from ancestors that could fly, which means that flight was lost independently in several different groups over millions of years.",
            "One important reason for the loss of flight is that flying is extremely costly in terms of energy. Flight muscles are large and require a great deal of food to maintain, and the bones and feathers of flying birds must be light and specially shaped. On islands where there were no mammals that hunted birds, such as New Zealand before humans arrived, the ability to fly offered fewer benefits. Over many generations, birds that invested less energy in flight and more in other traits, such as larger body size or more eggs, may have been more successful. Their wings gradually became smaller and their breastbones lost the large ridge to which flight muscles attach.",
            "Flightless birds have developed other ways to survive. Ostriches can run at speeds of up to seventy kilometers per hour and defend themselves with powerful kicks, while penguins have transformed their wings into flippers that allow them to 'fly' through water. However, many flightless island birds became extremely vulnerable when humans arrived, bringing rats, cats and other predators. Several species, such as the dodo of Mauritius and New Zealand's giant moas, became extinct, and many surviving species today depend on conservation programs that remove predators from islands.",
          ],
          questions: [
            { text: "According to paragraph 1, what do genetic studies show about flightless birds?", options: ["They descended from ancestors that could fly.", "They never had ancestors that could fly.", "They are all closely related.", "They are a type of mammal."], answer: 0 },
            { text: "According to paragraph 2, why did flight offer fewer benefits on some islands?", options: ["There were no mammals that hunted birds.", "There was not enough food.", "The weather was too windy.", "The islands were too small."], answer: 0 },
            { text: "The word \"vulnerable\" in paragraph 3 is closest in meaning to", options: ["easily harmed", "strong", "fast", "common"], answer: 0 },
            { text: "How have penguins adapted their wings?", options: ["They have become flippers for swimming.", "They have disappeared.", "They have become longer for gliding.", "They are used for digging."], answer: 0 },
            { text: "According to paragraph 3, why did many flightless island birds become extinct?", options: ["Humans brought predators such as rats and cats.", "The islands sank.", "They lost the ability to swim.", "They moved to other islands."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our class pet",
          text: "In our classroom, we have a small pet rab{{bit}} named Snowy. She is white with pink ey{{es}}. Every week, two students take care of h{{er}}. They give her fresh water and vegeta{{bles}}, and they clean her ca{{ge}}. Snowy loves carrots and lettuce. During break time, we sometimes let her hop around the clas{{sroom}}. She is very gentle and likes it when we stroke her soft f{{ur}}. In the holidays, a different student takes her ho{{me}}. Last summer, it was my tu{{rn}}, and my little brother was very happy to play with her every d{{ay}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Open-air cinema",
          text: [
            "MOVIES UNDER THE STARS!",
            "Every Friday and Saturday in July and August, Riverside Park will show a film on a giant outdoor screen. Films start at 9 p.m., when it gets dark.",
            "Tickets cost $8 for adults and $4 for children. Bring a blanket or a chair to sit on. Snacks and drinks are sold at the park. If it rains, the film will be shown the next evening.",
          ],
          questions: [
            { text: "When are films shown?", options: ["every Friday and Saturday in July and August", "every day in summer", "only on Sundays", "once a month"], answer: 0 },
            { text: "What should people bring?", options: ["a blanket or a chair", "their own film", "a ticket from last year", "a flashlight"], answer: 0 },
            { text: "What happens if it rains?", options: ["The film will be shown the next evening.", "The film will be canceled forever.", "People get a refund.", "The film will be shown indoors."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why elephants have big ears",
          paragraphs: [
            "African elephants have very large ears. Each ear can be almost two meters long. These big ears are not only for hearing.",
            "Elephants live in hot places, and they cannot sweat very much. Their ears have many blood vessels close to the skin. When an elephant flaps its ears, air moves over them and cools the blood. The cooler blood then travels around the body.",
            "Asian elephants have smaller ears, because they live in places with more shade. Elephants also use their ears to send messages. When an elephant spreads its ears wide, it may be warning others to stay away.",
          ],
          questions: [
            { text: "How long can an African elephant's ear be?", options: ["almost two meters", "about ten centimeters", "five meters", "half a meter"], answer: 0 },
            { text: "Why do elephants flap their ears?", options: ["to cool their blood", "to fly", "to catch insects", "to dig"], answer: 0 },
            { text: "The word \"vessels\" in paragraph 2 refers to", options: ["tubes that carry blood", "boats", "bones", "hairs"], answer: 0 },
            { text: "Why do Asian elephants have smaller ears?", options: ["They live in places with more shade.", "They are younger.", "They hear better.", "They live in water."], answer: 0 },
            { text: "What might an elephant mean when it spreads its ears wide?", options: ["It is warning others to stay away.", "It is hungry.", "It is sleeping.", "It wants to play."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Google effect",
          text: "In the age of search engines, people may remember information differently. In a series of experiments, researchers found that participants who believed they would be able to look up facts la{{ter}} were less likely to remember the facts them{{selves}}. However, they were better at remembering wh{{ere}} the information could be found. Researchers named this the Google eff{{ect}}, or digital amnesia. Some commentators worry that it makes people mentally la{{zy}}. Others argue that it is simply an efficient use of mem{{ory}}: just as people rely on friends or bo{{oks}} to remember certain information, they now rely on comp{{uters}}. Nevertheless, deep understan{{ding}} of a subject still requires knowledge that is stored in one's own mi{{nd}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Thesis advisor change",
          text: [
            "To: Master's students in the Department of Sociology",
            "From: Graduate Program Coordinator",
            "Subject: Procedure for changing your thesis advisor",
            "Students who wish to change their thesis advisor should first discuss the matter with their current advisor whenever possible. You must then find a new faculty member who agrees to supervise your project and who has relevant expertise in your research area.",
            "Both the current and the new advisor must sign the change-of-advisor form, which should be submitted to the Graduate Office. Changes are generally not approved during the final semester of the program unless there are exceptional circumstances. Please note that a change of advisor may require you to revise your research proposal.",
          ],
          questions: [
            { text: "What should students do first if they want to change advisors?", options: ["discuss the matter with their current advisor", "submit a form to the dean", "stop working on their thesis", "choose any professor"], answer: 0 },
            { text: "Who must sign the change-of-advisor form?", options: ["both the current and the new advisor", "only the student", "only the department head", "the student's family"], answer: 0 },
            { text: "When are changes generally not approved?", options: ["during the final semester", "during the first semester", "during summer", "before exams"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Vertical forests and green buildings",
          paragraphs: [
            "As cities grow denser, architects are searching for ways to bring nature back into urban environments. One striking example is the 'vertical forest', a type of high-rise building whose balconies are planted with trees, shrubs and other plants. The best-known example, completed in Milan in 2014, consists of two residential towers that together host hundreds of trees and thousands of smaller plants, equivalent to several hectares of forest on the ground.",
            "Supporters claim that such buildings offer many benefits. Plants absorb carbon dioxide and some air pollutants, produce oxygen and provide shade, which can reduce indoor temperatures in summer and lower the need for air conditioning. Vegetation can also reduce noise from traffic and create habitats for birds and insects in areas where green space is scarce. In addition, research suggests that contact with plants can reduce stress and improve people's sense of well-being.",
            "Critics, however, point out several drawbacks. Vertical forests are expensive to build and maintain. Buildings must be specially strengthened to support the weight of soil, water and trees, and plants require regular care, including irrigation systems and gardeners who work on the outside of the building using ropes and cranes. Some argue that the environmental benefits are modest compared with the large amount of concrete and steel used in construction. Others worry that such buildings mainly serve wealthy residents and do little to address the wider shortage of green space in cities. Even so, many architects believe that integrating plants into buildings, whether through green roofs, walls or balconies, will become an increasingly important part of urban design.",
          ],
          questions: [
            { text: "According to paragraph 1, what is a 'vertical forest'?", options: ["a high-rise building with balconies planted with trees and plants", "a forest growing on a mountain", "a park in the center of a city", "a tall greenhouse for growing food"], answer: 0 },
            { text: "According to paragraph 2, how can plants on buildings reduce the need for air conditioning?", options: ["by providing shade and lowering indoor temperatures", "by producing electricity", "by blocking all sunlight", "by absorbing water"], answer: 0 },
            { text: "The word \"scarce\" in paragraph 2 is closest in meaning to", options: ["limited", "abundant", "beautiful", "expensive"], answer: 0 },
            { text: "According to paragraph 3, why are vertical forests expensive to maintain?", options: ["Plants require irrigation and gardeners working on the outside.", "The trees must be replaced every month.", "Residents pay no rent.", "They use solar panels."], answer: 0 },
            { text: "What concern about vertical forests is mentioned in paragraph 3?", options: ["They may mainly serve wealthy residents.", "They attract too many birds.", "They are too short.", "They have no windows."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Barış", prompt: "Why are you in such a good mood?", chunks: ["I", "got", "a promotion", "at work", "today"], end: "." },
      { promptBy: "Kate", prompt: "Did you enjoy your trip to Rome?", chunks: ["the food", "was", "wonderful", "and the people", "were friendly"], end: "." },
      { promptBy: "Meltem", prompt: "My phone battery dies so quickly.", chunks: ["have you", "checked", "which apps", "use", "the most energy"], end: "?" },
      { promptBy: "Sam", prompt: "How long does it take to walk to the station?", chunks: ["it", "takes", "about", "fifteen", "minutes"], end: "." },
      { promptBy: "Derya", prompt: "When will the new semester begin?", chunks: ["classes", "start", "on", "the second", "of October"], end: "." },
      { promptBy: "Mark", prompt: "Why is the park closed?", chunks: ["they", "are", "planting", "new", "trees"], end: "." },
      { promptBy: "Esra", prompt: "What did you have for lunch?", chunks: ["I", "had", "a salad", "and some", "soup"], end: "." },
      { promptBy: "Owen", prompt: "Where did you learn to swim?", chunks: ["I", "learned", "at", "a summer", "camp"], end: "." },
      { promptBy: "Pınar", prompt: "I think I left my wallet at the café.", chunks: ["should", "we", "go back", "and", "look for it"], end: "?" },
      { promptBy: "Nick", prompt: "Why did you start learning Arabic?", chunks: ["I", "want to", "work", "in", "the Middle East"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You have been asked by your manager to organize a team lunch to celebrate the end of a successful project. You need to write to a restaurant to make a booking.",
      to: "the restaurant manager",
      subject: "Group lunch booking",
      tasks: ["Explain the occasion and the number of people.", "Give details about the date, time and any special requirements.", "Ask about menu options and prices."],
      sample: "Dear Restaurant Manager,\n\nI am writing on behalf of the marketing team at Atlas Technologies to book a table for a group lunch. We have just completed a major project, and our manager would like to celebrate with the whole team. There will be fourteen people in total.\n\nWe would like to book a table for Friday, June 13, at 12:30 p.m., and we expect to stay for about two hours. If possible, we would prefer a private room or a quiet area, as our manager would like to give a short speech. Three members of our team are vegetarian, and one person cannot eat gluten, so we would need suitable dishes for them.\n\nCould you please let me know whether you offer a set menu for groups, and what the price per person would be? I would also like to know whether drinks are included and whether a deposit is required to confirm the booking.\n\nThank you very much. I look forward to hearing from you.\n\nKind regards,\nCeren Yıldırım",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Media Studies",
      professor: {
        name: "Dr. Stewart",
        text: "Many people now get most of their entertainment from short videos lasting less than a minute. Some argue that this format is creative and allows people to enjoy content in small breaks. Others worry that it shortens people's attention spans and makes it harder to concentrate on longer tasks, such as reading books. Are short videos harmful to people's ability to concentrate? Explain your view.",
      },
      students: [
        { name: "Sophie", text: "Yes. When I watch short videos for a long time, I find it really hard to focus on reading or studying afterwards. Everything else feels slow." },
        { name: "Yusuf", text: "I don't think so. People have always enjoyed short entertainment, like comics or TV adverts. What matters is how much time people spend on it." },
      ],
      sample: "I think short videos can harm concentration when people watch them for long periods, but the format itself is not the main problem. Sophie describes an experience that many people share: after scrolling through dozens of fast, highly stimulating clips, slower activities like reading a book or studying can feel boring and difficult. Because short video apps are designed to keep users watching with endless content, it is easy to lose track of time. However, Yusuf makes a good point that short entertainment is not new, and a few short videos during a break are unlikely to cause harm. The key issue is habits and time limits. People, especially students, could benefit from setting daily limits, keeping their phones out of reach while studying and regularly practicing longer activities, such as reading for thirty minutes without interruption.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new employee at a car repair shop. Your manager is telling you what to say to customers.",
      sentences: [
        "Good morning, how can we help you?",
        "Please leave your keys at the front desk.",
        "We will call you when the car is ready.",
        "The repair should take about two hours.",
        "There is a café across the street where you can wait.",
        "If we find any other problems, we will contact you before doing any extra work.",
        "You can pay by card or cash when you collect your car, and all our repairs come with a six-month guarantee.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about work and free time. The researcher will ask you some questions.",
      questions: [
        {
          text: "How do you usually spend your weekends?",
          sample: "On weekends, I try to balance rest and fun. On Saturday mornings, I usually sleep a little later, then go to the market with my roommate to buy fresh food for the week. In the afternoon, I often meet friends for coffee or go to the cinema. On Sundays, I spend some time studying and preparing for the week, but I also like to go for a long walk by the sea in the evening.",
        },
        {
          text: "Do you think people today work too much?",
          sample: "Yes, I think many people today work too much. Technology means that work doesn't really stop when people leave the office, because they can receive emails and messages on their phones at any time. Many people also feel pressure to work long hours to keep their jobs or get promoted. This can lead to stress and health problems. I think companies should respect employees' free time more and encourage a better work-life balance.",
        },
        {
          text: "Would you prefer a job with a high salary and long hours or a job with a lower salary and more free time?",
          sample: "I would prefer a job with a slightly lower salary and more free time, as long as the salary is enough to live comfortably. Free time is important for my health, relationships and hobbies, and I think money can't replace that. However, early in my career, I might accept longer hours to gain experience and save money. Later, I'd like to find a job that allows me to spend more time with my family.",
        },
        {
          text: "How do you think working life will change in the future?",
          sample: "I think working life will become more flexible in the future. More people will probably work from home at least part of the week, and some companies may move to a four-day week. Technology, especially artificial intelligence, will take over many routine tasks, so people will need to keep learning new skills throughout their careers. I hope these changes will give people more control over their time, although they may also create new challenges, like feeling isolated.",
        },
      ],
    },
  },
};
