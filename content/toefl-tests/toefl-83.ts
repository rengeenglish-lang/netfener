import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 83 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_83: ToeflTest = {
  id: "toefl-83",
  no: 83,
  title: "TOEFL iBT Practice Test 83",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Snow globes",
          text: "A snow globe is a small glass ball filled with water and tiny white pieces that look like falling sn{{ow}} when the globe is shaken. Snow globes first became popular in France in the nineteenth cen{{tury}}, and one was sold as a souvenir at the Paris World's Fair in 1889, showing the newly built Eiffel To{{wer}}. According to one story, an Austrian mechanic invented the modern snow globe by acci{{dent}} around 1900. He was trying to make a brighter light bu{{lb}} by placing a glass ball of water in front of a la{{mp}}. When he added small pieces of material to reflect the li{{ght}}, they reminded him of falling sn{{ow}}. Today, snow globes are sold as souvenirs and holiday deco{{rations}} all over the wor{{ld}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Printing a boarding pass",
          text: [
            "Hi Meltem, my printer has run out of ink, and I need to print my boarding pass for tomorrow's early flight. Could I send it to you and pick it up tonight?",
            "It's just one page. I can come by your place at around 9 p.m. if that's not too late. Thanks so much!",
          ],
          questions: [
            { text: "Why does the writer need help?", options: ["The writer's printer has no ink.", "The writer lost the boarding pass.", "The flight was canceled.", "The writer has no computer."], answer: 0 },
            { text: "When does the writer plan to pick up the page?", options: ["tonight at around 9 p.m.", "tomorrow morning", "at the airport", "next week"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Pool lane schedule",
          text: [
            "NEW SWIMMING LANE SCHEDULE",
            "From Monday, the swimming pool will be divided into slow, medium and fast lanes during busy hours, from 6 to 9 a.m. and from 5 to 8 p.m. Swimmers should choose the lane that matches their speed.",
            "Outside these hours, all lanes are open for general swimming. On Saturday mornings, two lanes will be reserved for swimming lessons. Please always swim on the right side of the lane.",
          ],
          questions: [
            { text: "When will the pool be divided into lanes by speed?", options: ["during busy morning and evening hours", "all day", "only on weekends", "only at night"], answer: 0 },
            { text: "What happens on Saturday mornings?", options: ["Two lanes are reserved for swimming lessons.", "The pool is closed.", "All lanes are fast lanes.", "Children cannot swim."], answer: 0 },
            { text: "Which side of the lane should swimmers use?", options: ["the right side", "the left side", "the middle", "any side"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How Iceland uses the heat beneath its surface",
          paragraphs: [
            "Iceland sits on the Mid-Atlantic Ridge, the boundary where the North American and Eurasian tectonic plates are slowly moving apart. As a result, the island has many volcanoes and hot springs, and hot rock lies relatively close to the surface. For centuries, Icelanders used natural hot springs for bathing and washing clothes, but in the twentieth century they began to use this underground heat on a much larger scale.",
            "Today, Iceland is one of the world leaders in geothermal energy, which is energy obtained from heat inside the Earth. Wells are drilled deep into the ground to reach reservoirs of hot water and steam. In power plants, the steam drives turbines that generate electricity. Hot water is also piped directly into homes and buildings for heating. Around nine out of ten homes in Iceland are heated by geothermal energy, and together with hydroelectric power from its rivers, it provides almost all of the country's electricity from renewable sources.",
            "Geothermal energy has brought many benefits to Iceland. Heating costs are low, air pollution in cities has fallen dramatically since the days when homes were heated with coal and oil, and greenhouses heated by geothermal water allow farmers to grow vegetables and even bananas in a cold climate. Some streets and sidewalks in Reykjavik are heated from below to keep them free of snow and ice. However, geothermal power is not without problems. Plants can release small amounts of gases, such as hydrogen sulfide, which has a strong smell, and some underground reservoirs can cool if water is extracted too quickly. Engineers are therefore working to manage these resources carefully.",
          ],
          questions: [
            { text: "According to paragraph 1, why does Iceland have many volcanoes and hot springs?", options: ["It sits on a boundary where two tectonic plates are moving apart.", "It is close to the equator.", "It has many large rivers.", "It has very cold winters."], answer: 0 },
            { text: "According to paragraph 2, what is geothermal energy?", options: ["energy obtained from heat inside the Earth", "energy from the wind", "energy from burning coal", "energy from the sun"], answer: 0 },
            { text: "How many homes in Iceland are heated by geothermal energy?", options: ["around nine out of ten", "about half", "very few", "all of them"], answer: 0 },
            { text: "The word \"extracted\" in paragraph 3 is closest in meaning to", options: ["removed", "heated", "frozen", "added"], answer: 0 },
            { text: "Which problem of geothermal power is mentioned in paragraph 3?", options: ["Underground reservoirs can cool if water is extracted too quickly.", "It causes volcanoes to erupt.", "It is more expensive than coal.", "It cannot heat homes."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Grandma's eightieth birthday",
          text: "Last month, my grandmother turned eighty years o{{ld}}. Our whole family planned a surprise par{{ty}} for her. My aunt booked a room in a small resta{{urant}}, and my cousins decorated it with balloons and flow{{ers}}. I made a big card, and everyone in the family wrote a mess{{age}} in it. When my grandmother walked in, everyone shouted \"Surprise!\" She was so happy that she started to c{{ry}}. We ate a delicious dinner and a huge chocolate ca{{ke}}. Then my grandfather gave a short spe{{ech}}. It was a very spe{{cial}} evening for all of u{{s}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Build a bird box",
          text: [
            "BUILD A HOME FOR BIRDS!",
            "Children aged 7 to 12 can build their own wooden bird box at the Nature Center on Saturday, March 22, from 10 a.m. to 12 p.m.",
            "All wood, nails and tools are provided, and an adult must stay with each child. The workshop costs $10 per bird box. Children can take their bird box home and hang it in their garden.",
          ],
          questions: [
            { text: "What will children build?", options: ["a wooden bird box", "a toy boat", "a kite", "a bookshelf"], answer: 0 },
            { text: "Who must stay with each child?", options: ["an adult", "a teacher", "an older sibling", "no one"], answer: 0 },
            { text: "What can children do with their bird box?", options: ["take it home and hang it in their garden", "sell it", "leave it at the Nature Center", "give it to the school"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How puffins catch fish",
          paragraphs: [
            "Puffins are small seabirds with black and white feathers and colorful orange beaks. They live in the North Atlantic Ocean and come to land only to lay their eggs.",
            "Puffins are excellent swimmers. They use their wings to 'fly' underwater and can dive more than sixty meters deep. They catch small fish, such as sand eels, in their beaks.",
            "A puffin can carry many fish at the same time. Its rough tongue holds the fish against the top of its beak, so it can keep catching more without dropping the ones it already has. Some puffins have been seen carrying more than fifty small fish at once.",
          ],
          questions: [
            { text: "What color are puffins' beaks?", options: ["orange", "black", "white", "blue"], answer: 0 },
            { text: "When do puffins come to land?", options: ["only to lay their eggs", "every night", "to find food", "in winter only"], answer: 0 },
            { text: "How do puffins move underwater?", options: ["They use their wings.", "They use their tails only.", "They walk on the bottom.", "They float."], answer: 0 },
            { text: "The word \"rough\" in paragraph 3 is closest in meaning to", options: ["not smooth", "soft", "long", "colorful"], answer: 0 },
            { text: "How can puffins carry many fish at once?", options: ["Their rough tongue holds the fish against their beak.", "They carry them in their feet.", "They swallow them all.", "They put them under their wings."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The illusory truth effect",
          text: "Hearing a statement many times can make people more likely to believe it, even when it is false. Psychologists call this the illusory truth ef{{fect}}. In experiments, participants rated statements they had seen before as more truth{{ful}} than new statements, regardless of whether they were actually ac{{curate}}. The effect occurs even when people know the cor{{rect}} answer. One explanation is that repeated information is easier to proc{{ess}}, and this feeling of ease is mistaken for tr{{uth}}. The illusory truth effect helps explain why false rumors and adver{{tising}} slogans can be so persuasive when they are repe{{ated}}. Researchers suggest that encouraging people to check sour{{ces}} and think carefully can reduce its influ{{ence}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Lab equipment training sessions",
          text: [
            "To: New graduate students in the Department of Physics",
            "From: Laboratory Manager",
            "Subject: Required training for laboratory equipment",
            "Before using specialized equipment in the physics laboratories, such as lasers and vacuum systems, all new graduate students must complete equipment-specific training. Training sessions will be held during the first three weeks of the semester and last about two hours each.",
            "Please register through the department website for the sessions relevant to your research group. Your supervisor can tell you which equipment you will need. Access to each piece of equipment will be granted only after you pass a short practical assessment at the end of the session. Students who miss their scheduled session must wait until the next training period, which begins in January.",
          ],
          questions: [
            { text: "What must new graduate students do before using specialized equipment?", options: ["complete equipment-specific training", "buy their own equipment", "write a research proposal", "pay a deposit"], answer: 0 },
            { text: "Who can tell students which equipment they will need?", options: ["their supervisor", "the department head", "other students", "the library"], answer: 0 },
            { text: "What happens if students miss their training session?", options: ["They must wait until the next training period in January.", "They can use the equipment anyway.", "They are removed from the program.", "They receive private training immediately."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The ethics of de-extinction",
          paragraphs: [
            "Advances in genetic technology have raised a possibility that once belonged only to science fiction: bringing extinct species back to life. This idea, known as de-extinction, involves using DNA recovered from preserved specimens to recreate animals that have disappeared. Because ancient DNA is usually damaged, scientists generally cannot create an exact copy of an extinct animal. Instead, they edit the genes of a closely related living species so that it carries some of the traits of the extinct one. One well-known project aims to create elephants with characteristics of the woolly mammoth, such as thick hair and the ability to survive in cold climates.",
            "Supporters argue that de-extinction could help restore damaged ecosystems. Some scientists suggest, for example, that mammoth-like animals grazing in the Arctic could help maintain grasslands and slow the thawing of frozen soil, which releases greenhouse gases. They also argue that the genetic tools developed in such projects could help protect endangered species by increasing their genetic diversity or making them more resistant to disease.",
            "Critics raise serious ethical and practical concerns. Recreated animals might suffer health problems, and they would be born without parents of their own species to teach them how to behave. Moreover, the habitats in which extinct species once lived may have changed or disappeared, leaving them with nowhere suitable to live. Some conservationists also worry that the promise of de-extinction could reduce public support for protecting species that are still alive, since people might believe that extinction is no longer permanent. Finally, de-extinction projects are extremely expensive, and critics argue that the money could save many more species if it were spent on protecting existing habitats.",
          ],
          questions: [
            { text: "According to paragraph 1, why can scientists generally not create an exact copy of an extinct animal?", options: ["Ancient DNA is usually damaged.", "It is illegal everywhere.", "There are no related living species.", "The animals were too large."], answer: 0 },
            { text: "According to paragraph 2, how might mammoth-like animals help the Arctic?", options: ["by maintaining grasslands and slowing the thawing of frozen soil", "by eating all the trees", "by melting the ice", "by attracting tourists"], answer: 0 },
            { text: "The word \"thawing\" in paragraph 2 is closest in meaning to", options: ["melting", "freezing", "growing", "drying"], answer: 0 },
            { text: "According to paragraph 3, why might recreated animals struggle to behave normally?", options: ["They would have no parents of their own species to teach them.", "They would be too intelligent.", "They would live in zoos only.", "They would be too small."], answer: 0 },
            { text: "What concern do some conservationists raise about de-extinction?", options: ["It could reduce support for protecting species that are still alive.", "It will make all species extinct.", "It is too cheap.", "It will create too many mammoths."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Bora", prompt: "Why are you carrying an umbrella on a sunny day?", chunks: ["the forecast", "said", "it", "would rain", "later"], end: "." },
      { promptBy: "Lucy", prompt: "Did you like the cooking show?", chunks: ["the chef", "made", "a delicious", "dessert", "in ten minutes"], end: "." },
      { promptBy: "Pelin", prompt: "I can't concentrate in the library.", chunks: ["why don't", "you", "try", "wearing", "earplugs"], end: "?" },
      { promptBy: "Rob", prompt: "How did you meet your wife?", chunks: ["we", "met", "at", "a friend's", "wedding"], end: "." },
      { promptBy: "Ayla", prompt: "When is the next train to the coast?", chunks: ["the next one", "leaves", "at", "a quarter", "to four"], end: "." },
      { promptBy: "Mike", prompt: "Why is the restaurant closed today?", chunks: ["the owners", "are", "attending", "a family", "wedding"], end: "." },
      { promptBy: "Elçin", prompt: "What did you think of the exhibition?", chunks: ["the photographs", "were", "powerful", "and very", "moving"], end: "." },
      { promptBy: "Sam", prompt: "Where can I buy cheap books?", chunks: ["there is", "a second-hand", "bookshop", "near", "the university"], end: "." },
      { promptBy: "Gizem", prompt: "My computer keeps freezing.", chunks: ["should", "we", "restart it", "and", "try again"], end: "?" },
      { promptBy: "Phil", prompt: "Why did you decide to learn Japanese?", chunks: ["I", "am planning", "to visit", "Japan", "next year"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently moved into a new apartment. The landlord promised to replace the old refrigerator before you moved in, but it has not been replaced, and it is not working properly. You want to write to the landlord.",
      to: "your landlord, Mr. Çelik",
      subject: "Refrigerator in Apartment 4B",
      tasks: ["Remind the landlord of his promise.", "Describe the problem with the refrigerator.", "Explain what you would like him to do and by when."],
      sample: "Dear Mr. Çelik,\n\nI moved into Apartment 4B on October 1, and I would first like to thank you for helping me with the keys and the move. When we signed the rental contract on September 15, you promised that the old refrigerator in the kitchen would be replaced with a new one before I moved in.\n\nUnfortunately, the refrigerator has not been replaced, and it is not working properly. It makes a loud noise, especially at night, and it does not stay cold enough. Yesterday, I had to throw away milk and meat that had gone bad after only two days. I am worried that this is not safe, and it is also expensive for me to keep replacing food.\n\nI would be grateful if you could arrange for a new refrigerator to be delivered and installed by the end of next week, as you originally promised. If this is not possible, could you please arrange a repair as soon as possible in the meantime? I am available most evenings after 6 p.m. and on weekends.\n\nThank you for your help.\n\nKind regards,\nDilara Aydemir",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Studies",
      professor: {
        name: "Dr. Turner",
        text: "Many cities are planting large numbers of trees along streets and in parks to reduce heat, absorb pollution and improve residents' well-being. However, trees require water and maintenance, and some residents complain about falling leaves, roots damaging sidewalks and allergies. Should cities invest heavily in planting more trees? Explain your view.",
      },
      students: [
        { name: "Sophie", text: "Yes. Trees make streets cooler in summer and cleaner. Neighborhoods with more trees are also more pleasant places to live." },
        { name: "Yasin", text: "Not necessarily. Trees cost a lot to maintain, and in dry cities they need large amounts of water. The money might be better spent elsewhere." },
      ],
      sample: "I believe cities should invest significantly in planting trees, but they should choose species and locations carefully. Sophie is right that trees provide many benefits. They provide shade and lower street temperatures during heat waves, absorb some air pollution and rainwater, and make neighborhoods more attractive, which can improve people's mental health and even raise property values. However, Yasin raises a valid concern, especially for dry cities. Planting thirsty species in a region with water shortages would be unwise. Cities should therefore choose native, drought-tolerant trees that require less water and are less likely to cause allergies. They should also plan maintenance budgets in advance and design sidewalks with enough space for roots. With careful planning, the long-term benefits of trees far outweigh their costs.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new staff member at a science center. The education coordinator is telling you what to say to visitors.",
      sentences: [
        "Hello, welcome to the science center.",
        "The planetarium show begins at noon.",
        "You may touch all the exhibits on this floor.",
        "The café is next to the main entrance.",
        "Please keep children close to you at all times.",
        "If you would like to join the free robot workshop, please sign up at the information desk before eleven.",
        "Our members receive free entry all year, discounts in the gift shop and invitations to special evening events with guest scientists.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about cities and the environment. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you like most about the city or town where you live?",
          sample: "What I like most about my city is that it's close to the sea. Whenever I feel stressed, I can walk along the coast and enjoy the fresh air and the view. The city also has many small cafés and markets where I can buy fresh fruit and vegetables. It's busy, but not as crowded as some big capitals, so it feels comfortable to live in.",
        },
        {
          text: "What environmental problem in your city would you most like to solve?",
          sample: "The environmental problem I would most like to solve in my city is air pollution caused by traffic. During rush hours, the roads are very crowded, and the air can feel heavy, especially in winter. I would like the city to improve public transport, create more bike lanes and encourage people to use electric vehicles. Planting more trees along busy roads could also help reduce pollution.",
        },
        {
          text: "Do you think people in cities should grow some of their own food?",
          sample: "I think it's a great idea for people in cities to grow some of their own food, even if it's only a few herbs or tomatoes on a balcony. It helps people understand where food comes from, and fresh vegetables taste much better. Community gardens are also a good way for neighbors to meet each other. Of course, cities can't produce all their food, but small gardens can still make a difference.",
        },
        {
          text: "How can cities encourage people to live more sustainably?",
          sample: "Cities can encourage sustainable living in many ways. They can make public transport cheaper and more reliable, so people use their cars less. They can provide recycling and composting services that are easy to use. Cities can also offer financial support for installing solar panels or improving home insulation. Finally, educational campaigns and community events can help people learn about simple changes they can make in their daily lives.",
        },
      ],
    },
  },
};
