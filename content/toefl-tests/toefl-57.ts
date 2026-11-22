import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 57 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_57: ToeflTest = {
  id: "toefl-57",
  no: 57,
  title: "TOEFL iBT Practice Test 57",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Tea bags",
          text: "According to a popular story, the tea bag was invented by accident. In the early twentieth century, a New York tea merchant began sending samples of tea to his customers in small silk ba{{gs}} instead of expensive metal ti{{ns}}. Some customers thought the bags were meant to be put directly into hot wa{{ter}}, and they found this method very conve{{nient}}. Soon, they asked the merchant for more bags. Later, manufacturers replaced silk with che{{aper}} materials such as gauze and pa{{per}}. Tea bags became especially popular after the Second World War, when people wanted quick and easy ways to make dri{{nks}}. Today, most tea in many coun{{tries}} is made with tea bags, although some tea lovers still prefer loose lea{{ves}}, which they say have a richer fla{{vor}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Picking up the cake",
          text: [
            "Hi Emir, the cake for Dad's surprise party is ready at the bakery on Elm Street. I can't leave work until 6, and the bakery closes at 5:30.",
            "Could you pick it up after school? It's already paid for. Please keep it in the fridge at your place so Dad doesn't see it!",
          ],
          questions: [
            { text: "Why can't the writer pick up the cake?", options: ["The writer works until after the bakery closes.", "The writer doesn't have a car.", "The bakery is too far away.", "The writer forgot to pay."], answer: 0 },
            { text: "Why should Emir keep the cake at his place?", options: ["so Dad doesn't see it", "because the writer has no fridge", "because the party is at Emir's house", "to keep it away from children"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Guest parking permits",
          text: [
            "GUEST PARKING FOR RESIDENTS",
            "Residents who expect visitors with cars can request a free one-day guest parking permit from the building office. Each apartment may receive up to four permits per month.",
            "Permits must be displayed clearly on the car's dashboard. Cars without a valid permit parked in the residents' area will be towed at the owner's expense. Guest permits cannot be used for overnight parking for more than two consecutive nights.",
          ],
          questions: [
            { text: "How many guest permits can each apartment receive per month?", options: ["up to four", "one", "unlimited", "up to ten"], answer: 0 },
            { text: "What happens to cars without a valid permit?", options: ["They will be towed at the owner's expense.", "They will receive a warning.", "They can stay for one day.", "They will be moved to the street."], answer: 0 },
            { text: "What is a limitation of guest permits?", options: ["They cannot be used overnight for more than two nights in a row.", "They cost $10 each.", "They are only for weekends.", "They are only for family members."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How hummingbirds hover",
          paragraphs: [
            "Hummingbirds are among the smallest birds in the world, and they are the only birds that can hover in place for long periods and even fly backward. These abilities allow them to feed on nectar from flowers while remaining in the air. Some species beat their wings more than fifty times per second, producing the humming sound that gives them their name.",
            "Most birds generate lift mainly on the downstroke, when they push their wings down. Hummingbirds, however, have unusual shoulder joints that allow them to rotate their wings almost completely. As a result, their wings trace a figure-eight pattern, generating lift on both the forward and backward strokes. In this respect, their flight resembles that of insects more than that of other birds. By adjusting the angle of their wings, hummingbirds can move up, down, sideways and backward with remarkable precision.",
            "Such flight requires enormous amounts of energy. Relative to their size, hummingbirds have the highest metabolic rate of any warm-blooded animal, and their hearts can beat more than a thousand times per minute during flight. To fuel this activity, they must feed every few minutes and may visit hundreds or even thousands of flowers in a day. At night, when they cannot feed, many hummingbirds enter a state called torpor, in which their body temperature and heart rate fall dramatically, saving energy until morning.",
          ],
          questions: [
            { text: "According to paragraph 1, what can hummingbirds do that other birds cannot?", options: ["hover for long periods and fly backward", "swim underwater", "fly at very high altitudes", "migrate long distances"], answer: 0 },
            { text: "According to paragraph 2, how is hummingbird flight similar to insect flight?", options: ["Their wings generate lift on both forward and backward strokes.", "They have four wings.", "They only fly at night.", "They do not flap their wings."], answer: 0 },
            { text: "The word \"precision\" in paragraph 2 is closest in meaning to", options: ["accuracy", "speed", "noise", "strength"], answer: 0 },
            { text: "According to paragraph 3, why must hummingbirds feed every few minutes?", options: ["Their flight requires enormous amounts of energy.", "Flowers close quickly.", "They have very large stomachs.", "They cannot store water."], answer: 0 },
            { text: "What is torpor?", options: ["a state in which body temperature and heart rate fall to save energy", "a type of flower", "a way of flying backward", "a hummingbird's nest"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Planting a tree",
          text: "Last spring, our school planted trees in the park next to the riv{{er}}. Each class received one small tr{{ee}}. My class planted an apple tree. First, we dug a deep ho{{le}} with shovels. Then we carefully put the tree in the hole and covered the roots with so{{il}}. Our teacher showed us how to water it prop{{erly}}. We also put a small wooden si{{gn}} next to it with the name of our cl{{ass}}. Every month, we visit the park to see how our tree is gro{{wing}}. Our teacher says it will give us apples in a few ye{{ars}}. I can't wa{{it}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Stargazing evening",
          text: [
            "LOOK AT THE STARS!",
            "Join the City Astronomy Club for a stargazing evening on Saturday, August 12, at Hill Park. We will look at the Moon, planets and the summer meteor shower through large telescopes.",
            "The event starts at 9 p.m. and is free for everyone. Bring a warm jacket and a blanket. If the sky is cloudy, the event will move to the following Saturday.",
          ],
          questions: [
            { text: "What will people look at during the event?", options: ["the Moon, planets and a meteor shower", "birds", "the city lights", "old photographs"], answer: 0 },
            { text: "How much does the event cost?", options: ["nothing", "$5", "$10", "$20"], answer: 0 },
            { text: "What will happen if the sky is cloudy?", options: ["The event will move to the following Saturday.", "The event will be canceled.", "People will watch a film instead.", "The event will start later."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How sharks find their food",
          paragraphs: [
            "Sharks are excellent hunters. They have lived in the oceans for millions of years and have very strong senses.",
            "Sharks have a very good sense of smell. Some sharks can smell a small amount of blood in the water from far away. They also have a line along each side of their body that feels movements in the water. This helps them find fish that are swimming nearby.",
            "Sharks also have tiny holes on their heads. These holes can feel the weak electricity that all living animals make. Even if a fish hides under the sand, a shark can find it.",
          ],
          questions: [
            { text: "How long have sharks lived in the oceans?", options: ["for millions of years", "for a few hundred years", "only since humans existed", "for about fifty years"], answer: 0 },
            { text: "What can some sharks smell from far away?", options: ["a small amount of blood", "flowers", "smoke", "sand"], answer: 0 },
            { text: "What does the line along a shark's body feel?", options: ["movements in the water", "the temperature of the air", "light", "sound from ships only"], answer: 0 },
            { text: "The word \"weak\" in paragraph 3 is closest in meaning to", options: ["not strong", "very loud", "dangerous", "bright"], answer: 0 },
            { text: "How can a shark find a fish hiding under the sand?", options: ["by feeling the electricity it makes", "by looking very carefully", "by listening to it", "by digging everywhere"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Hawthorne effect",
          text: "In the 1920s and 1930s, researchers at a factory near Chicago studied how working conditions affected productivity. When they increased the lighting in the facto{{ry}}, workers produced more. Surprisingly, when they reduced the light{{ing}}, productivity also rose. Researchers concluded that workers may have improved simply because they knew they were being obser{{ved}} and felt that someone was interested in th{{em}}. This idea became known as the Hawthorne ef{{fect}}, after the name of the fac{{tory}}. Later scholars, however, questioned the original con{{clusions}}, pointing out problems with the way the studies were desi{{gned}}. Nevertheless, the term is still used to describe changes in beha{{vior}} that occur when people know they are part of a stu{{dy}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Final project teams",
          text: [
            "To: Students in Software Engineering 310",
            "From: Professor Aksoy",
            "Subject: Final project teams and deadlines",
            "Final project teams of four students have now been posted on the course website. Teams were formed to balance programming experience, so please do not request changes unless there is a serious scheduling conflict. Each team must submit a one-page project proposal by October 15.",
            "In addition to the final software and report, each team member will submit a confidential evaluation of their teammates' contributions. These evaluations will be used to adjust individual grades if necessary. Teams experiencing problems with communication or participation should contact the teaching assistant early rather than waiting until the end of the semester.",
          ],
          questions: [
            { text: "Why were teams formed in a particular way?", options: ["to balance programming experience", "to put friends together", "randomly", "by student request"], answer: 0 },
            { text: "What will the confidential evaluations be used for?", options: ["to adjust individual grades if necessary", "to choose team leaders", "to select the best project", "to cancel projects"], answer: 0 },
            { text: "What should teams with problems do?", options: ["contact the teaching assistant early", "change teams immediately", "wait until the end of the semester", "work alone"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The ethics of gene editing",
          paragraphs: [
            "In 2012, scientists described a powerful new tool for editing DNA, known as CRISPR. Adapted from a natural defense system used by bacteria against viruses, CRISPR allows researchers to cut DNA at precise locations and remove, replace or add genetic material. Compared with earlier methods, it is faster, cheaper and far more accurate, and it is now used in laboratories around the world.",
            "The technology offers enormous potential benefits. Researchers are developing CRISPR-based treatments for inherited diseases such as sickle cell disease, in which a single genetic error causes serious health problems. In agriculture, gene editing could produce crops that resist disease or tolerate drought without introducing genes from other species. Some scientists have even proposed using it to reduce populations of disease-carrying mosquitoes.",
            "These possibilities have also raised difficult ethical questions. Most current medical treatments edit cells in a patient's body, and the changes are not passed on to children. Editing embryos, however, would create changes that could be inherited by future generations, with consequences that are difficult to predict. In 2018, a scientist announced that he had edited the genes of twin babies, provoking international condemnation and a prison sentence. Critics warn that allowing embryo editing could eventually lead to 'designer babies', with parents selecting traits such as height or intelligence, which might increase inequality. Many scientists and ethicists have called for strict international rules, arguing that society as a whole, not just researchers, should decide how such technology is used.",
          ],
          questions: [
            { text: "According to paragraph 1, where does CRISPR come from?", options: ["a natural defense system used by bacteria", "a chemical found in plants", "a computer program", "human blood cells"], answer: 0 },
            { text: "According to paragraph 2, how could gene editing benefit agriculture?", options: ["by producing crops that resist disease or tolerate drought", "by making crops grow underground", "by replacing farmers with machines", "by changing the color of crops"], answer: 0 },
            { text: "The word \"inherited\" in paragraph 3 is closest in meaning to", options: ["passed down from parents", "cured", "removed", "discovered"], answer: 0 },
            { text: "Why is editing embryos more controversial than editing a patient's cells?", options: ["Changes could be passed on to future generations.", "It is less accurate.", "It is more expensive.", "It only affects adults."], answer: 0 },
            { text: "What have many scientists and ethicists called for?", options: ["strict international rules on gene editing", "a complete end to genetic research", "more designer babies", "private companies to make all decisions"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Yiğit", prompt: "Why are you wearing two jackets?", chunks: ["it", "is", "freezing", "outside", "this morning"], end: "." },
      { promptBy: "Rose", prompt: "Did you finish reading the report?", chunks: ["I", "read", "most of it", "on", "the train"], end: "." },
      { promptBy: "Burak", prompt: "I'm not sure which course to take.", chunks: ["why don't", "you", "speak", "to", "your advisor"], end: "?" },
      { promptBy: "Henry", prompt: "How was your first week at work?", chunks: ["it", "was", "busy", "but very", "interesting"], end: "." },
      { promptBy: "Dilara", prompt: "When will the new shopping center open?", chunks: ["it", "is", "scheduled", "to open", "in December"], end: "." },
      { promptBy: "Mark", prompt: "Why is the river so dirty?", chunks: ["a factory", "has been", "dumping", "waste", "into it"], end: "." },
      { promptBy: "Ece", prompt: "What did you do at the weekend?", chunks: ["we", "went", "hiking", "in", "the forest"], end: "." },
      { promptBy: "Sam", prompt: "Where can I buy a SIM card?", chunks: ["there is", "a phone shop", "inside", "the train", "station"], end: "." },
      { promptBy: "Ceren", prompt: "This box is too heavy to lift.", chunks: ["should", "we", "take out", "some", "of the books"], end: "?" },
      { promptBy: "Luke", prompt: "Why did you decide to study medicine?", chunks: ["I", "want to", "work", "in", "rural hospitals"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your neighbor plays loud music late at night several times a week, and it is affecting your sleep and studies. You have decided to write a polite email to your neighbor.",
      to: "your neighbor in Apartment 7",
      subject: "Noise in the evenings",
      tasks: ["Introduce yourself.", "Explain the problem politely.", "Suggest a solution that works for both of you."],
      sample: "Dear Neighbor,\n\nMy name is Elif, and I live in Apartment 8, directly next to yours. I moved in about two months ago, and I hope you are enjoying the building as much as I am.\n\nI wanted to mention something politely. On several evenings each week, I can hear music quite loudly from your apartment, often until one or two in the morning. Unfortunately, the walls between our apartments seem to be quite thin. I am a university student, and I have early classes most days, so I have been finding it difficult to sleep and to concentrate on my studies, especially now that my exams are approaching.\n\nI completely understand that you want to enjoy your music, and I don't want to cause any problems. Would it be possible to turn the volume down after 11 p.m. on weekdays? On weekends, of course, later evenings are no problem. If you like, you could also let me know when you are planning a party, so that I can make other plans.\n\nThank you very much for understanding.\n\nBest wishes,\nElif",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Urban Studies",
      professor: {
        name: "Dr. Brooks",
        text: "Many cities are installing large numbers of surveillance cameras in public places, such as streets, parks and train stations. Supporters argue that cameras help prevent crime and make it easier to solve crimes after they happen. Critics worry about privacy and the possibility that the recordings could be misused. Should cities install more surveillance cameras in public places? Explain your view.",
      },
      students: [
        { name: "Natalie", text: "Yes. Cameras make people feel safer, and they help the police catch criminals. If you're not doing anything wrong, you have nothing to worry about." },
        { name: "Kerem", text: "No. Constant surveillance invades people's privacy. Recordings could be hacked or used to track people who haven't committed any crime." },
      ],
      sample: "I think cities can install more cameras in specific high-risk locations, but only with strong privacy protections. Natalie is right that cameras can help solve crimes, for example by identifying suspects after a robbery or helping find a missing child, and visible cameras may discourage some crimes in busy places like train stations. However, I strongly disagree with the idea that people who do nothing wrong have nothing to worry about. Kerem points out a real risk: large networks of cameras, especially when combined with facial recognition, could be used to track ordinary people's movements or could be hacked. Therefore, cities should limit cameras to places where there is clear evidence of a safety problem, delete recordings after a short period and allow independent oversight of how footage is used.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new employee at an electronics store. Your manager is telling you what to say to customers.",
      sentences: [
        "Hello, can I help you find something?",
        "Laptops are at the back of the store.",
        "This phone comes with a two-year warranty.",
        "You can try the headphones over there.",
        "We offer free delivery for orders over one hundred dollars.",
        "If the product doesn't work properly, you can return it within thirty days with your receipt.",
        "Our technicians can also set up your new computer and transfer your files from your old one for a small additional fee.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about health and fitness. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you do to stay healthy?",
          sample: "To stay healthy, I try to exercise at least three times a week. I usually go running in the park or swim at the university pool. I also try to eat a balanced diet with plenty of vegetables and avoid too much fast food, although that's not always easy for a busy student. Getting enough sleep is also important to me, so I try not to stay up too late during the week.",
        },
        {
          text: "Is it better to exercise alone or with others?",
          sample: "I think exercising with others is usually better, especially for motivation. When I go running with a friend, I'm less likely to skip a session, because I don't want to let them down. Group classes like dance or yoga are also fun and social. However, exercising alone has advantages too. You can choose your own pace and schedule, and it can be a peaceful time to think. I like to do both.",
        },
        {
          text: "Should governments do more to encourage people to exercise?",
          sample: "Yes, I think governments should do more. Lack of exercise causes many health problems, which cost public health systems a lot of money. Governments could build more bike lanes, parks and free outdoor gyms, and make sports facilities cheaper for young people and families. They could also support more physical education in schools. These investments would improve people's health and could save money in the long run.",
        },
        {
          text: "Do you think fitness apps and devices really help people get healthier?",
          sample: "I think fitness apps and devices can help some people, especially those who like setting goals and tracking their progress. For example, seeing your step count every day might encourage you to walk more. However, they don't work for everyone. Many people stop using them after a few weeks, and some become too focused on numbers. In the end, building healthy habits depends more on motivation and routine than on technology.",
        },
      ],
    },
  },
};
