import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 42 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_42: ToeflTest = {
  id: "toefl-42",
  no: 42,
  title: "TOEFL iBT Practice Test 42",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Sunglasses",
          text: "Sunglasses are now a popular fashion item, but their original purpose was practical. Centuries ago, Inuit people carved goggles from bone or wo{{od}} with narrow slits to protect their ey{{es}} from the bright light reflected by sn{{ow}}. In China, judges are said to have worn glasses made of smoky quar{{tz}} so that others could not see their reac{{tions}}. Modern sunglasses became popular in the 1930s, when pilots needed protec{{tion}} from the glare at high alti{{tudes}}. Today, doctors recommend sunglasses that block harmful ultra{{violet}} rays, because long expo{{sure}} can damage the eyes. Dark lenses alone do not guar{{antee}} this protection.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Forgot my phone charger",
          text: [
            "Hi Deniz, I left my phone charger plugged in next to my desk in the office. My battery is almost dead and I have an important call tonight.",
            "Could you put the charger in my mailbox downstairs before you leave? I'll come and pick it up at around 6. Thank you!",
          ],
          questions: [
            { text: "Where did the writer leave the charger?", options: ["next to the writer's desk in the office", "in the car", "at home", "in a café"], answer: 0 },
            { text: "What does the writer ask Deniz to do?", options: ["lend a different charger", "put the charger in the writer's mailbox", "call the writer at 6", "bring the charger to the writer's home"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Campus blood drive",
          text: [
            "GIVE BLOOD, SAVE LIVES",
            "The Red Crescent mobile blood donation unit will be on campus outside the sports center on Tuesday and Wednesday from 10 a.m. to 4 p.m.",
            "Donors must be at least 18 years old, weigh more than 50 kilograms and feel healthy on the day. Please eat a good meal and drink plenty of water before donating, and bring a photo ID. Each donation takes about 45 minutes in total.",
          ],
          questions: [
            { text: "Where will the blood donation unit be?", options: ["inside the library", "outside the sports center", "at the hospital", "in the cafeteria"], answer: 1 },
            { text: "Which of the following is a requirement for donors?", options: ["being at least 18 years old", "being a medical student", "having donated before", "being under 30"], answer: 0 },
            { text: "What are donors advised to do before donating?", options: ["skip breakfast", "eat a good meal and drink water", "exercise heavily", "avoid drinking water"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How earthquakes are measured",
          paragraphs: [
            "Earthquakes occur when rocks deep underground suddenly break or slip along a fault, releasing energy that travels through the Earth in the form of waves. Scientists detect these waves using instruments called seismometers, which record even very small movements of the ground. By comparing the times at which waves arrive at different seismometers, scientists can determine where an earthquake began and how deep it was.",
            "For much of the twentieth century, the size of earthquakes was described using the Richter scale, developed in the 1930s. The scale was based on the largest movement recorded by a particular type of seismometer. Because the scale is logarithmic, each whole number represents a tenfold increase in the measured ground movement. However, the Richter scale did not work well for very large earthquakes or for earthquakes far from the instruments, so scientists now generally use the moment magnitude scale, which estimates the total energy released based on the size of the fault and how far it slipped.",
            "Magnitude describes the energy released at the source, but it does not tell us how strongly the ground shook in a particular place. For that, scientists use intensity scales, which describe the effects of an earthquake on people, buildings and the landscape, from shaking that is barely felt to total destruction. The same earthquake can therefore have one magnitude but many different intensities, depending on the distance from the source, the type of soil and the quality of local buildings. This distinction helps explain why earthquakes of similar magnitude can cause very different levels of damage.",
          ],
          questions: [
            { text: "According to paragraph 1, how can scientists determine where an earthquake began?", options: ["by comparing arrival times of waves at different seismometers", "by measuring the damage to buildings", "by asking people where they felt it", "by measuring the temperature of rocks"], answer: 0 },
            { text: "The word \"logarithmic\" in paragraph 2 suggests that each whole number on the scale", options: ["represents a tenfold increase", "represents an equal increase of one unit", "describes a different country", "is measured in kilometers"], answer: 0 },
            { text: "Why do scientists now generally use the moment magnitude scale?", options: ["The Richter scale did not work well for very large or distant earthquakes.", "The Richter scale was too expensive.", "The Richter scale measured only intensity.", "Seismometers are no longer used."], answer: 0 },
            { text: "According to paragraph 3, what do intensity scales describe?", options: ["the energy at the source", "the effects of an earthquake in particular places", "the depth of the fault", "the speed of waves"], answer: 1 },
            { text: "Why can earthquakes of similar magnitude cause very different levels of damage?", options: ["Intensity depends on distance, soil type and building quality.", "Magnitude is often measured incorrectly.", "Some earthquakes do not release energy.", "Seismometers record only small earthquakes."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My brother's wedding",
          text: "Last summer, my older brother got mar{{ried}}. The wedding was in a beautiful gar{{den}} near the sea. More than a hundred gue{{sts}} came, and everyone wore their best clot{{hes}}. My brother looked very nerv{{ous}} before the ceremony, but he smiled when his bride arri{{ved}}. After the ceremony, we ate a delicious din{{ner}} and listened to live mu{{sic}}. I danced with my grandmother until midn{{ight}}. It was one of the happiest da{{ys}} of my life.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Pottery workshop",
          text: [
            "MAKE YOUR OWN CUP!",
            "Join our two-hour pottery workshop at Clay Corner Studio every Sunday at 2 p.m. Learn to shape clay on a pottery wheel and decorate your own cup or bowl.",
            "The price is $35, including all materials. Your finished piece will be fired in our oven and ready to collect one week later. No experience is needed.",
          ],
          questions: [
            { text: "What can people make at the workshop?", options: ["a cup or bowl", "a painting", "a necklace", "a wooden toy"], answer: 0 },
            { text: "What is included in the price?", options: ["lunch", "all materials", "a second workshop", "delivery to your home"], answer: 1 },
            { text: "When can people collect their finished pieces?", options: ["immediately", "the same evening", "one week later", "one month later"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "How whales breathe",
          paragraphs: [
            "Whales live in the ocean, but they are not fish. They are mammals, like humans, so they must breathe air.",
            "Whales breathe through blowholes on the top of their heads. When a whale comes to the surface, it quickly breathes out and then breathes in fresh air. The warm air it breathes out makes a cloud of water drops, called a spout.",
            "Whales can hold their breath for a long time. Some kinds can stay underwater for more than an hour. While they sleep, many whales rest only half of their brain at a time, so they remember to come up for air.",
          ],
          questions: [
            { text: "Why must whales breathe air?", options: ["because they are mammals", "because they are fish", "because the water is cold", "because they are very large"], answer: 0 },
            { text: "Where are a whale's blowholes?", options: ["on the top of its head", "under its tail", "on its sides", "in its mouth"], answer: 0 },
            { text: "What is a spout?", options: ["a cloud of water drops from a whale's breath", "a kind of fish", "a wave", "a baby whale"], answer: 0 },
            { text: "The word \"surface\" in paragraph 2 is closest in meaning to", options: ["the top of the water", "the bottom of the sea", "the beach", "the sky"], answer: 0 },
            { text: "How do many whales sleep?", options: ["They rest half of their brain at a time.", "They sleep on the beach.", "They stop breathing for a day.", "They sleep only in winter."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The serial position effect",
          text: "If you are asked to remember a long list of words, you will probably recall the first few and the last few more eas{{ily}} than those in the mid{{dle}}. Psychologists call this pattern the serial position eff{{ect}}. The advantage for early items is thought to occur because people have more ti{{me}} to rehearse them, which helps transfer them into long-term mem{{ory}}. The advantage for the final items, by con{{trast}}, seems to depend on short-term memory, since these items are still fre{{sh}} when recall begins. When participants are distr{{acted}} for half a minute before recal{{ling}} the list, the advantage for the final items usually disap{{pears}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Career fair registration",
          text: [
            "To: All final-year undergraduate students",
            "From: Career Development Center",
            "Subject: Spring Career Fair – registration now open",
            "More than eighty employers from engineering, finance, health care and technology will attend the Spring Career Fair on March 12 in the main exhibition hall. Registration is free but required, and registered students will receive a list of attending employers and the positions they are offering one week before the event.",
            "We strongly recommend that you have your resume reviewed by a career advisor before the fair. Advisors offer twenty-minute appointments, which fill up quickly in the weeks before the event. Students should dress professionally and bring several printed copies of their resume, as many employers do not accept digital copies on the day.",
          ],
          questions: [
            { text: "What will registered students receive one week before the fair?", options: ["a list of attending employers and positions", "a free resume template", "a job offer", "an invitation to dinner"], answer: 0 },
            { text: "Why does the email recommend booking an advisor appointment early?", options: ["Appointments fill up quickly before the event.", "Advisors are leaving the university.", "The fair has been moved earlier.", "Appointments cost more later."], answer: 0 },
            { text: "Why should students bring printed copies of their resume?", options: ["Many employers do not accept digital copies on the day.", "The hall has no internet.", "Printed resumes are required by law.", "Employers will sign them."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Rooftop farming in cities",
          paragraphs: [
            "As cities grow, more and more food must be transported over long distances to feed their populations. In response, a growing number of urban farmers are turning to a space that has traditionally been ignored: the roofs of buildings. Rooftop farms range from small community gardens on apartment buildings to large commercial operations that grow vegetables on the roofs of warehouses and supermarkets.",
            "Supporters point to several benefits. Rooftop farms can supply fresh produce to nearby residents and restaurants, reducing the energy used for transport and refrigeration. Green roofs also absorb rainwater, which reduces the risk of flooding during heavy storms, and they help insulate buildings, lowering the energy needed for heating and cooling. In addition, plants on roofs can reduce the urban heat island effect, in which cities become significantly warmer than surrounding areas because of heat absorbed by concrete and asphalt.",
            "Nevertheless, rooftop farming faces significant challenges. Many older buildings cannot support the weight of soil, water and equipment without expensive structural reinforcement. Roofs are exposed to strong winds and intense sunlight, and getting water, tools and workers up to the roof can be difficult. As a result, many rooftop farms struggle to make a profit and depend on grants or on selling high-value crops such as herbs and salad greens. Critics also note that rooftop farms can produce only a small fraction of a city's food. Even so, many planners see them as a valuable part of a broader strategy to make cities greener and more resilient.",
          ],
          questions: [
            { text: "According to paragraph 1, why are urban farmers turning to rooftops?", options: ["Food must be transported long distances to growing cities.", "Rooftops have better soil.", "Governments require it.", "Rooftops are cheaper than farmland in all cases."], answer: 0 },
            { text: "According to paragraph 2, how can green roofs reduce flooding?", options: ["by absorbing rainwater", "by blocking rain entirely", "by draining water into rivers", "by heating the roof"], answer: 0 },
            { text: "The word \"insulate\" in paragraph 2 is closest in meaning to", options: ["protect from heat loss or gain", "decorate", "clean", "divide"], answer: 0 },
            { text: "According to paragraph 3, why do many rooftop farms grow herbs and salad greens?", options: ["These high-value crops help them make money.", "These plants need no water.", "Other crops are illegal on roofs.", "Customers refuse to buy other vegetables."], answer: 0 },
            { text: "What is the author's overall view of rooftop farming?", options: ["It can replace traditional farming.", "It has limits but can be a valuable part of making cities greener.", "It is too dangerous to continue.", "It has no benefits."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Volkan", prompt: "Why are you so tired today?", chunks: ["my neighbors", "had", "a loud", "party", "last night"], end: "." },
      { promptBy: "Amy", prompt: "Did you get the tickets for the play?", chunks: ["they", "were", "sold out", "by the time", "I called"], end: "." },
      { promptBy: "Sibel", prompt: "I can't decide what to wear to the interview.", chunks: ["why don't", "you", "wear", "your", "dark blue suit"], end: "?" },
      { promptBy: "Eric", prompt: "How often do you visit your grandparents?", chunks: ["we", "visit them", "at least", "once", "a month"], end: "." },
      { promptBy: "Tuba", prompt: "What happened to your phone screen?", chunks: ["I", "dropped it", "on", "the stairs", "this morning"], end: "." },
      { promptBy: "Matt", prompt: "Why is the cafeteria closed?", chunks: ["the kitchen", "is", "being", "cleaned", "today"], end: "." },
      { promptBy: "Elçin", prompt: "Who won the chess tournament?", chunks: ["a first-year", "student", "won", "it", "on Saturday"], end: "." },
      { promptBy: "Rick", prompt: "What are your plans after graduation?", chunks: ["I", "hope", "to work", "for an", "engineering firm"], end: "." },
      { promptBy: "Gamze", prompt: "This soup needs something.", chunks: ["should", "we", "add", "a little", "more salt"], end: "?" },
      { promptBy: "Tim", prompt: "Why are you learning to code?", chunks: ["I", "want to", "build", "my own", "mobile app"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your friend Jack recommended a local dentist to you. You visited the dentist last week and had a very good experience. You want to thank Jack and tell him about it.",
      to: "your friend Jack",
      subject: "Thanks for the recommendation",
      tasks: ["Thank Jack for recommending the dentist.", "Describe your visit.", "Offer to do something for Jack in return."],
      sample: "Hi Jack,\n\nI just wanted to say a big thank you for recommending Dr. Özkan to me. As you know, I've been afraid of dentists since I was a child, so I had been putting off my appointment for months, even though my tooth was really starting to hurt.\n\nI finally went last Thursday, and the experience was much better than I expected. The receptionist was friendly, and I only had to wait five minutes. Dr. Özkan explained everything she was going to do before she started, and she checked several times to make sure I wasn't in pain. It turned out I needed a small filling, and the whole thing was over in about half an hour. I've already booked my next check-up!\n\nTo thank you, I'd love to take you out for dinner at that new burger place near the station. Are you free next Friday evening? It's my treat.\n\nSee you soon,\nOrhan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Simmons",
        text: "In many countries, the number of people living alone has increased significantly over the past few decades. Some sociologists see this as a sign of independence and personal freedom. Others worry that it leads to loneliness and weaker communities. Is the rise in people living alone a positive or negative trend? Explain your view.",
      },
      students: [
        { name: "Sophie", text: "I think it's positive. Living alone gives people freedom to organize their lives the way they want. It's a choice that wasn't possible for many people in the past." },
        { name: "Cenk", text: "I think it's mostly negative. Many elderly people live alone not by choice, and they often feel isolated. Society loses the support that families used to provide." },
      ],
      sample: "I think the rise in people living alone is neither entirely positive nor entirely negative; its effects depend on whether it is a choice. Sophie is right that, for many young professionals, living alone reflects greater financial independence and the freedom to make their own decisions about their homes, routines and relationships. This kind of independence can be a sign of social progress. However, Cenk raises an important concern about elderly people, many of whom live alone because their partners have died or their children have moved away. For them, isolation can lead to loneliness, depression and health problems. Rather than judging the trend itself, societies should focus on building strong community connections, such as neighborhood centers and volunteer visiting programs, so that living alone does not mean being alone.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new assistant at a cooking school. The head chef is explaining the kitchen rules for students.",
      sentences: [
        "Welcome to the cooking school.",
        "Please wash your hands before class.",
        "Aprons are hanging next to the door.",
        "Sharp knives must be handled with care.",
        "Tell the instructor immediately if you cut or burn yourself.",
        "At the end of each class, every student must clean their workstation and put all equipment back in its place.",
        "Students with food allergies should inform the chef before the course begins so that we can prepare suitable ingredients for them.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with technology in daily life. The researcher will ask you some questions.",
      questions: [
        {
          text: "Which piece of technology do you use most in your daily life, and why?",
          sample: "The piece of technology I use most is definitely my smartphone. I use it to communicate with friends and family, check my university email, read the news and listen to music on the bus. I also use apps for banking and for planning my study schedule. It's convenient because it combines so many functions in one small device. Sometimes, though, I feel I depend on it a little too much.",
        },
        {
          text: "Do you think technology makes people's lives easier or more stressful?",
          sample: "I think it does both. On the one hand, technology saves us a lot of time. We can pay bills, shop or find information in seconds. On the other hand, constant notifications and the pressure to reply to messages immediately can make people feel stressed and distracted. I believe the key is how we use it. If we set limits, like turning off notifications in the evening, technology can make life easier without overwhelming us.",
        },
        {
          text: "Should children be allowed to have smartphones? At what age?",
          sample: "I think children shouldn't have their own smartphones until around the age of twelve or thirteen. Younger children can easily become addicted to games and social media, and they may see inappropriate content online. However, older children often need phones to stay in touch with their parents, especially if they travel to school alone. Parents should also use controls to limit screen time and teach children how to use phones responsibly.",
        },
        {
          text: "What new technology do you think will have the biggest impact in the next ten years?",
          sample: "I think artificial intelligence will have the biggest impact in the next ten years. It's already being used in medicine to analyze scans, in education to personalize learning and in businesses to answer customer questions. In the future, it could help scientists discover new medicines much faster or help solve environmental problems. However, it also raises serious questions about privacy, jobs and fairness, so governments will need to create clear rules for its use.",
        },
      ],
    },
  },
};
