import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 75 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_75: ToeflTest = {
  id: "toefl-75",
  no: 75,
  title: "TOEFL iBT Practice Test 75",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Paper cups",
          text: "In the early twentieth century, public places such as schools and train stations often provided drinking water with a shared metal cup or dip{{per}}. Many people used the same cup every d{{ay}}, which helped spread diseases. When doctors began to warn about the dan{{ger}}, an American lawyer and an inventor developed a disposable cup made of pa{{per}}. At first, they sold water from machines for one ce{{nt}} a cup. As health laws began to ban shared cups, the paper cup became very popu{{lar}}. Later, paper cups were coated with wax and then with plas{{tic}} so that they could hold hot drinks without leak{{ing}}. Today, billions of paper cups are used every ye{{ar}}, but because of the plastic coating, many cannot be recy{{cled}} easily.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Volunteering at the marathon",
          text: [
            "Hi Elif! The city marathon is next Sunday, and they need volunteers to hand out water to runners. I've signed up for the morning shift from 7 to 11.",
            "Would you like to join me? Volunteers get a free T-shirt and breakfast. You can register on the marathon website before Thursday.",
          ],
          questions: [
            { text: "What will volunteers do at the marathon?", options: ["hand out water to runners", "run in the race", "sell tickets", "clean the streets"], answer: 0 },
            { text: "What do volunteers receive?", options: ["a free T-shirt and breakfast", "money", "a medal", "free running shoes"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Summer storage for residents",
          text: [
            "SUMMER STORAGE SERVICE",
            "Students leaving the residence halls for the summer can store up to four boxes or suitcases in the basement storage room from June 10 to September 1. The service costs $25 for the whole summer.",
            "All items must be clearly labeled with your name and room number. Food, electronics and valuable items may not be stored. The university is not responsible for loss or damage, so students are encouraged to use their own insurance.",
          ],
          questions: [
            { text: "How many items can students store?", options: ["up to four boxes or suitcases", "unlimited items", "one suitcase", "ten boxes"], answer: 0 },
            { text: "What must be written on each item?", options: ["the student's name and room number", "the student's phone number only", "the date only", "nothing"], answer: 0 },
            { text: "Which item may NOT be stored?", options: ["electronics", "clothes", "books", "bedding"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How hail forms",
          paragraphs: [
            "Hail consists of balls or irregular lumps of ice that fall from storm clouds. Although hailstones are usually small, about the size of a pea, they can occasionally grow larger than a tennis ball, causing serious damage to crops, cars and buildings. Hail is most common in late spring and summer, which may seem surprising, since it is made of ice.",
            "Hail forms inside large thunderstorm clouds called cumulonimbus clouds, which can rise more than ten kilometers into the atmosphere. Within these clouds, strong upward currents of air, known as updrafts, carry water droplets high into regions where the temperature is far below freezing. Some droplets remain liquid even at these low temperatures, a state known as supercooling. When they touch small particles such as dust or ice crystals, they freeze instantly, forming the core of a hailstone.",
            "As the young hailstone is carried up and down by the updrafts, it collides with more supercooled droplets, which freeze onto its surface, adding new layers of ice. If a hailstone is cut in half, these layers can often be seen as rings, similar to the rings of a tree. The stronger the updrafts, the longer a hailstone can remain in the cloud and the larger it can grow. Eventually, it becomes too heavy for the updrafts to support and falls to the ground. Because summer storms often have the strongest updrafts, they are most likely to produce large hail.",
          ],
          questions: [
            { text: "According to paragraph 1, why may it seem surprising that hail is common in summer?", options: ["because hail is made of ice", "because summer has no clouds", "because hail only falls at night", "because summer storms are rare"], answer: 0 },
            { text: "According to paragraph 2, what are updrafts?", options: ["strong upward currents of air", "falling hailstones", "layers of ice", "types of clouds"], answer: 0 },
            { text: "The word \"instantly\" in paragraph 2 is closest in meaning to", options: ["immediately", "slowly", "partly", "rarely"], answer: 0 },
            { text: "According to paragraph 3, what do the rings inside a hailstone show?", options: ["layers of ice added as the hailstone moved through the cloud", "the age of the cloud", "the temperature of the ground", "pieces of dust"], answer: 0 },
            { text: "Why are summer storms most likely to produce large hail?", options: ["They often have the strongest updrafts.", "They are colder than winter storms.", "They contain no water.", "They last only a few minutes."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Learning to cook eggs",
          text: "Last year, my older brother taught me how to cook eg{{gs}}. First, he showed me how to boil them. We put the eggs in a pot of wa{{ter}} and waited for ten min{{utes}}. Then he taught me how to make an ome{{lette}}. I broke three eggs into a bo{{wl}} and mixed them with a little milk and sa{{lt}}. Then I poured the mixture into a hot p{{an}} with some butter. My first omelette was not very pre{{tty}}, but it tasted good. Now I make breakfast for my family every Satur{{day}} morning, and they always say it is deli{{cious}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Calligraphy workshop",
          text: [
            "THE ART OF BEAUTIFUL WRITING",
            "Learn traditional calligraphy in our two-day weekend workshop at the Cultural Center on March 15 and 16, from 10 a.m. to 3 p.m.",
            "An experienced artist will teach you how to use special pens and ink to create elegant letters. The workshop costs $60, and all materials are included. Tea and light lunch are served both days.",
          ],
          questions: [
            { text: "What will participants learn?", options: ["traditional calligraphy", "painting with oil", "photography", "pottery"], answer: 0 },
            { text: "How long is the workshop?", options: ["two days", "one hour", "one week", "one month"], answer: 0 },
            { text: "What is served during the workshop?", options: ["tea and light lunch", "dinner", "nothing", "only coffee"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How seals stay warm",
          paragraphs: [
            "Seals are animals that live in the ocean and on ice or rocks along the coast. Many seals live in very cold waters near the North and South Poles.",
            "Seals have a thick layer of fat under their skin called blubber. Blubber keeps the heat inside their bodies, like a warm coat. It also stores energy, so seals can survive when food is hard to find.",
            "Seals also have short, thick fur that traps air and helps keep them dry. When they swim in very cold water, their bodies send less blood to their skin and flippers, so less heat is lost.",
          ],
          questions: [
            { text: "Where do many seals live?", options: ["in very cold waters near the Poles", "in deserts", "in rivers in hot countries", "in forests"], answer: 0 },
            { text: "What is blubber?", options: ["a thick layer of fat under the skin", "a type of fish", "a kind of fur", "a seal's nest"], answer: 0 },
            { text: "What else does blubber do?", options: ["It stores energy.", "It helps seals fly.", "It changes color.", "It makes seals heavier for diving only."], answer: 0 },
            { text: "The word \"traps\" in paragraph 3 is closest in meaning to", options: ["holds in", "lets out", "cleans", "breaks"], answer: 0 },
            { text: "How do seals lose less heat in very cold water?", options: ["by sending less blood to their skin and flippers", "by swimming faster", "by staying on land", "by eating more"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Choice-supportive bias",
          text: "After people make a decision, they tend to remember their chosen option more positively than it really deserved and the rejected options more nega{{tively}}. Psychologists call this choice-supportive bi{{as}}. In one study, participants chose between two job off{{ers}} with similar advantages and disad{{vantages}}. Later, when asked to recall the details, they attributed more positive fea{{tures}} to the job they had chosen and more negative features to the one they had rej{{ected}}, even when this was not accurate. The bias may help people feel sati{{sfied}} with their decisions and reduce reg{{ret}}. However, it can also make it difficult to learn from poor choi{{ces}}, since people may not remember them accu{{rately}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to the academic calendar",
          text: [
            "To: All students and faculty",
            "From: Office of the Provost",
            "Subject: Revised academic calendar for next year",
            "Following a review, the university has approved changes to next year's academic calendar. The fall semester will begin one week earlier, on September 8, and will include a one-week reading break in late October, during which no classes will be held.",
            "The final exam period will be shortened from three weeks to two, and the winter break will begin on December 20. Faculty members are asked to update their course schedules accordingly. Students with concerns about how these changes affect their plans, such as travel or work commitments, may contact their academic advisor.",
          ],
          questions: [
            { text: "What change will be made to the fall semester?", options: ["It will begin one week earlier and include a reading break.", "It will be canceled.", "It will be shortened by a month.", "It will start in October."], answer: 0 },
            { text: "What will happen to the final exam period?", options: ["It will be shortened from three weeks to two.", "It will be extended.", "It will be removed.", "It will move to January."], answer: 0 },
            { text: "Who should students contact if they have concerns?", options: ["their academic advisor", "the Provost directly", "their classmates", "the admissions office"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The problem of food waste",
          paragraphs: [
            "Researchers estimate that roughly one-third of all food produced in the world for human consumption is lost or wasted. This occurs at every stage of the food supply chain. In many low-income countries, much food is lost soon after harvest because of poor storage facilities, a lack of refrigeration and difficulties in transporting crops to markets. In wealthier countries, by contrast, a large share of waste occurs at the end of the chain, in shops, restaurants and households.",
            "Food waste has serious environmental consequences. When food is thrown away, all the land, water, energy and labor used to produce, process and transport it are wasted as well. Moreover, food that ends up in landfills decomposes and produces methane, a greenhouse gas far more powerful than carbon dioxide over the short term. Some studies suggest that if food waste were a country, it would be one of the largest emitters of greenhouse gases in the world.",
            "There are many reasons why consumers waste food. People often buy more than they need, misunderstand date labels such as 'best before', which refers to quality rather than safety, and throw away fruit and vegetables that look imperfect but are perfectly edible. Retailers may also reject produce that does not meet strict cosmetic standards. Solutions being tried include clearer labeling, apps that allow shops and restaurants to sell surplus food at a discount and laws that require supermarkets to donate unsold food to charities. In several countries, campaigns have encouraged households to plan meals, store food correctly and use leftovers creatively.",
          ],
          questions: [
            { text: "According to paragraph 1, why is much food lost in many low-income countries?", options: ["poor storage, lack of refrigeration and transport problems", "people buy too much food", "restaurants throw it away", "it is not harvested"], answer: 0 },
            { text: "According to paragraph 2, why is food waste in landfills especially harmful?", options: ["It produces methane, a powerful greenhouse gas.", "It attracts animals.", "It smells bad.", "It takes up too much space."], answer: 0 },
            { text: "The word \"edible\" in paragraph 3 is closest in meaning to", options: ["safe to eat", "expensive", "beautiful", "fresh"], answer: 0 },
            { text: "According to paragraph 3, what does a 'best before' label refer to?", options: ["quality rather than safety", "the exact day food becomes dangerous", "the price of food", "where the food was grown"], answer: 0 },
            { text: "Which solution to food waste is mentioned in paragraph 3?", options: ["laws requiring supermarkets to donate unsold food", "banning restaurants", "producing more food", "removing all date labels"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Mehmet", prompt: "Why are you taking so many photos?", chunks: ["I", "am making", "a photo album", "for", "my grandmother"], end: "." },
      { promptBy: "Emma", prompt: "Did you enjoy your holiday in Spain?", chunks: ["we", "visited", "many", "beautiful", "old cities"], end: "." },
      { promptBy: "Burak", prompt: "I'm always late for work.", chunks: ["why don't", "you", "leave", "home", "ten minutes earlier"], end: "?" },
      { promptBy: "Lily", prompt: "How was the job interview?", chunks: ["it", "went", "better", "than", "I expected"], end: "." },
      { promptBy: "Gizem", prompt: "When will the results be announced?", chunks: ["they", "will be", "announced", "at the end", "of the month"], end: "." },
      { promptBy: "Joel", prompt: "Why is the swimming pool so crowded?", chunks: ["it", "is", "the hottest", "day", "of the year"], end: "." },
      { promptBy: "Ayşe", prompt: "What did you think of the new film?", chunks: ["the story", "was", "exciting", "and", "very original"], end: "." },
      { promptBy: "Tony", prompt: "Where are you going on your honeymoon?", chunks: ["we", "are going", "to", "a small island", "in Greece"], end: "." },
      { promptBy: "Sevda", prompt: "My bike has a flat tire.", chunks: ["do you", "want", "me", "to help you", "fix it"], end: "?" },
      { promptBy: "Peter", prompt: "Why did you start learning to cook?", chunks: ["I", "wanted to", "eat", "healthier", "meals"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You live in a shared house with three other students. The kitchen is often dirty, and there have been arguments about cleaning. You want to write to your housemates to suggest a solution.",
      to: "your housemates",
      subject: "Keeping the kitchen clean",
      tasks: ["Describe the problem with the kitchen.", "Explain why it is important to solve it.", "Suggest a plan that everyone can follow."],
      sample: "Hi everyone,\n\nI wanted to write to you about the kitchen, because I think it's becoming a problem for all of us. Over the past few weeks, dirty dishes have often been left in the sink for days, the counters are sticky, and the trash sometimes overflows. Last week, we even found ants near the stove. I know we're all busy with classes and work, so I'm not blaming anyone.\n\nI think it's important that we solve this soon. A dirty kitchen isn't healthy, and it makes it unpleasant to cook. It has also caused a few arguments between us, and I'd really like us to get along well, since we're living together for the rest of the year.\n\nMy suggestion is that we create a simple weekly schedule. Each person could be responsible for the kitchen one week a month, which would include wiping the counters, taking out the trash and cleaning the floor. Everyone would still wash their own dishes on the same day they use them. Maybe we could meet on Sunday evening to discuss this and make any changes.\n\nThanks, everyone!\nNazlı",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Public Policy",
      professor: {
        name: "Dr. Watts",
        text: "In many countries, the minimum age for driving a car is eighteen. Some people argue that the age should be raised to twenty-one, because young drivers are involved in a high number of accidents. Others believe that this would be unfair and would make it difficult for young people to get to work or school. Should the minimum driving age be raised? Explain your view.",
      },
      students: [
        { name: "Hannah", text: "Yes. Young drivers take more risks and have less experience. Raising the age would save lives." },
        { name: "Cem", text: "No. Many young people need to drive for work, especially in rural areas. Better training would be a fairer solution." },
      ],
      sample: "I do not think the minimum driving age should be raised to twenty-one, but I believe the rules for new drivers should be stricter. Hannah is right that young drivers are involved in a disproportionate number of serious accidents, often because of inexperience, speeding or distraction. This is a real problem that deserves action. However, Cem makes an important point about fairness and practical needs. In rural areas with little public transport, many young people depend on cars to reach jobs, schools and family. A better solution would be a graduated license system, in which new drivers gain experience under conditions that limit risk, for example by not driving late at night or carrying several young passengers during their first year. Combined with better training, this approach could reduce accidents without preventing young people from driving.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new staff member at a botanical garden. The head gardener is telling you what to say to visitors.",
      sentences: [
        "Welcome to the botanical garden.",
        "Please stay on the paths.",
        "Do not pick the flowers.",
        "The tropical greenhouse is on your right.",
        "Guided tours start every hour from the main gate.",
        "If you would like to learn more about a plant, scan the code on its sign with your phone.",
        "Our gift shop sells seeds and small plants from the garden, and all the money helps us protect rare species from around the world.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of decision-making. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe an important decision you made recently.",
          sample: "An important decision I made recently was choosing which master's program to apply to. I had offers from two universities, one in my hometown and one in another city. The program in the other city had a better reputation in my field, but it meant leaving my family and friends. After talking to my professors and visiting both campuses, I decided to move. It was difficult, but I think it was the right choice for my career.",
        },
        {
          text: "Do you usually make decisions quickly or slowly?",
          sample: "It depends on how important the decision is. For small, everyday decisions, like what to eat or which film to watch, I decide quickly. But for important decisions, like choosing a course or making a big purchase, I take my time. I like to gather information, make a list of advantages and disadvantages and ask people I trust for advice. Sometimes this makes me a little slow, but I usually feel more confident afterward.",
        },
        {
          text: "Is it better to follow your feelings or your logic when making decisions?",
          sample: "I think the best decisions usually combine both. Logic helps us consider the facts and possible consequences, so we don't make choices we might regret later. However, feelings are also important, because they tell us what we truly care about. For example, a job might look perfect on paper, but if it feels wrong, we may not be happy there. So I try to think carefully but also listen to my feelings.",
        },
        {
          text: "Should young people make important life decisions on their own?",
          sample: "I think young people should be allowed to make important decisions about their own lives, such as what to study or where to live, because they will live with the consequences. Making decisions also helps them become more independent and responsible. However, it's wise for them to listen to advice from parents, teachers and other experienced people, who may notice things they haven't considered. In the end, though, the final choice should be theirs.",
        },
      ],
    },
  },
};
