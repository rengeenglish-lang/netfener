import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 41 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_41: ToeflTest = {
  id: "toefl-41",
  no: 41,
  title: "TOEFL iBT Practice Test 41",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Toothbrushes",
          text: "People have cleaned their teeth for thousands of years. In ancient times, many cultures used chew sticks, which were thin twi{{gs}} with frayed ends. The first bristle toothbrush was made in China, where coarse hairs from pigs were attached to handles made of bo{{ne}} or bamboo. In the late eighteenth century, an Englishman began to man{{ufacture}} toothbrushes in large numb{{ers}}. Animal hair remained common until the 1930s, when nylon bris{{tles}} were introduced. Nylon was cheaper and dried more qui{{ckly}}, so it was more hygi{{enic}}. Today, dentists recommend repla{{cing}} a toothbrush every three mon{{ths}}, because worn bristles do not clean te{{eth}} effectively.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Watering the plants",
          text: [
            "Hi Ece, I'm visiting my parents this weekend. Could you water the plants in my room on Saturday? The key is under the blue flowerpot by the door.",
            "The big one by the window needs a full glass of water, but the small cactus doesn't need any. Thanks so much, I'll bring you some of my mom's cookies!",
          ],
          questions: [
            { text: "Why does the writer need help?", options: ["The writer is visiting family this weekend.", "The writer is sick.", "The writer lost the key.", "The writer is moving out."], answer: 0 },
            { text: "What does the writer say about the cactus?", options: ["It needs a full glass of water.", "It does not need any water.", "It should be moved to the window.", "It needs water every day."], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Language exchange program",
          text: [
            "JOIN THE LANGUAGE EXCHANGE PROGRAM",
            "The International Office matches students who want to practice a foreign language with native speakers of that language. Partners meet for one hour a week and spend half the time speaking each language.",
            "To join, complete the online form by September 25, listing the languages you speak and the language you want to practice. Partners are matched within two weeks. Participation is free, but students are expected to attend meetings regularly.",
          ],
          questions: [
            { text: "How do partners spend their meeting time?", options: ["They speak each language for half the time.", "They take a formal language test.", "They only speak English.", "They watch films together."], answer: 0 },
            { text: "What is the deadline to join?", options: ["September 25", "two weeks from now", "the end of the semester", "there is no deadline"], answer: 0 },
            { text: "What is expected of participants?", options: ["paying a small fee", "attending meetings regularly", "speaking three languages", "teaching a class"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How seed banks protect crops",
          paragraphs: [
            "Over the past century, farmers around the world have increasingly planted a small number of high-yielding crop varieties. While this has greatly increased food production, it has also led to the disappearance of thousands of traditional varieties that were once grown locally. These older varieties often carry valuable traits, such as resistance to particular diseases or the ability to grow in poor soil or dry conditions. Once a variety is lost, its genetic diversity cannot easily be recovered.",
            "To prevent such losses, scientists have created seed banks, facilities where seeds are dried and stored at low temperatures so that they remain alive for decades or even centuries. There are now more than a thousand seed banks around the world. The best known is the Svalbard Global Seed Vault, built deep inside a mountain on a remote Norwegian island. It stores backup copies of seeds from other seed banks, so that if a collection is destroyed by war, natural disaster or equipment failure, the seeds can be returned.",
            "Seed banks are not only a form of insurance; they are also actively used by plant breeders. When a new disease threatens a crop, breeders can search seed bank collections for varieties that are naturally resistant and cross them with modern varieties. Seed banks do have limitations, however. Some plants produce seeds that cannot survive drying or freezing, and stored seeds do not continue to adapt to changing conditions as crops grown in fields do. For this reason, many experts argue that seed banks should be combined with efforts to support farmers who continue to grow traditional varieties.",
          ],
          questions: [
            { text: "According to paragraph 1, why have many traditional crop varieties disappeared?", options: ["Farmers have increasingly planted a small number of high-yielding varieties.", "They were destroyed by a single disease.", "They were banned by governments.", "They could not be eaten."], answer: 0 },
            { text: "The word \"traits\" in paragraph 1 is closest in meaning to", options: ["characteristics", "prices", "seasons", "farms"], answer: 0 },
            { text: "According to paragraph 2, what is the main role of the Svalbard Global Seed Vault?", options: ["to sell seeds to farmers", "to store backup copies of seeds from other seed banks", "to grow new crops in the Arctic", "to research plant diseases"], answer: 1 },
            { text: "How do plant breeders use seed bank collections?", options: ["to find varieties that resist new diseases", "to produce frozen food", "to decorate gardens", "to replace modern varieties completely"], answer: 0 },
            { text: "According to paragraph 3, what is one limitation of seed banks?", options: ["They are too cold for any seeds.", "Stored seeds do not adapt to changing conditions.", "They can store only wheat.", "They are open only to scientists."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Baking with my father",
          text: "Every Sunday morning, my father and I bake something toge{{ther}}. Last week, we made banana cake. First, we mixed flour, sugar and eg{{gs}} in a big bowl. Then I mashed three ripe bana{{nas}} with a fork. My father put the mixture into a ti{{n}}, and we baked it in the ov{{en}} for forty minutes. The whole kitchen sme{{lled}} wonderful. While we waited, we washed the dis{{hes}}. When the cake was ready, we let it co{{ol}} and then ate it with a glass of mi{{lk}}. It was the best cake I have ever ta{{sted}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Summer reading challenge",
          text: [
            "SUMMER READING CHALLENGE!",
            "Children aged 6 to 12 can join the Summer Reading Challenge at any city library from June 15 to August 31. It is completely free.",
            "Read six books during the summer and receive a certificate and a medal. Every child who finishes will also be invited to a special party in September.",
          ],
          questions: [
            { text: "Who can join the challenge?", options: ["children aged 6 to 12", "teenagers only", "adults", "teachers"], answer: 0 },
            { text: "How much does it cost to join?", options: ["$5", "$10", "nothing", "$1 per book"], answer: 2 },
            { text: "What do children get if they read six books?", options: ["a new book", "a certificate and a medal", "free movie tickets", "money"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why mushrooms appear after rain",
          paragraphs: [
            "After a rainy night, mushrooms sometimes appear suddenly on lawns and in forests. It can seem as if they grew overnight.",
            "In fact, the main part of the fungus lives under the ground. It is a large network of thin threads that spreads through the soil for months or even years. We usually cannot see it.",
            "Mushrooms are only the parts that make spores, which are like tiny seeds. When the soil becomes wet, the network quickly fills the mushrooms with water, so they grow large very fast. The spores are then carried away by the wind to start new networks.",
          ],
          questions: [
            { text: "When do mushrooms often appear suddenly?", options: ["after a rainy night", "during dry weather", "in winter only", "at midday"], answer: 0 },
            { text: "Where does the main part of the fungus live?", options: ["on top of trees", "under the ground", "in the air", "inside rocks"], answer: 1 },
            { text: "What is the job of a mushroom?", options: ["to make spores", "to collect sunlight", "to store food for animals", "to hold the soil"], answer: 0 },
            { text: "The word \"network\" in paragraph 2 is closest in meaning to", options: ["a system of connected parts", "a single root", "a hole", "a flower"], answer: 0 },
            { text: "How are spores carried away?", options: ["by the wind", "by rivers only", "by people", "by birds only"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The planning fallacy",
          text: "Students often expect to finish an essay in two days, only to find themselves working late the night before the dead{{line}}. Psychologists use the term planning fallacy to describe the tendency to underes{{timate}} how long a task will take, even when people know that similar ta{{sks}} took longer in the past. The fallacy affects not only indivi{{duals}} but also large organizations; major construction pro{{jects}} frequently finish years late and far over bud{{get}}. One reason is that people focus on the specific st{{eps}} of their plan and imagine everything going smoo{{thly}}, while ignoring possible prob{{lems}}. Asking how long similar projects actually took is a useful correc{{tion}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Peer tutoring positions",
          text: [
            "To: Students who have completed Calculus I and II",
            "From: Mathematics Learning Center",
            "Subject: Paid peer tutoring positions for next semester",
            "The Mathematics Learning Center is hiring peer tutors for next semester. Tutors work between six and ten hours per week, helping first-year students with homework and exam preparation, and are paid $15 per hour. Applicants must have earned at least a B+ in both Calculus I and Calculus II.",
            "To apply, please submit a short statement explaining why you would be a good tutor, along with the name of a mathematics instructor who can recommend you. Shortlisted applicants will be asked to explain a calculus problem to a panel as part of the interview. All new tutors must attend a training workshop during the first week of the semester.",
          ],
          questions: [
            { text: "What is required to apply for the position?", options: ["at least a B+ in Calculus I and II", "a mathematics degree", "previous teaching experience", "a perfect grade point average"], answer: 0 },
            { text: "What will shortlisted applicants be asked to do?", options: ["take a written exam", "explain a calculus problem to a panel", "teach a full class", "write an essay"], answer: 1 },
            { text: "What must all new tutors do?", options: ["attend a training workshop in the first week", "work at least twenty hours a week", "pay a registration fee", "take Calculus III"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why wildfires are becoming more severe",
          paragraphs: [
            "Wildfires are a natural part of many ecosystems. In forests and grasslands around the world, periodic fires clear away dead plant material, release nutrients into the soil and create open spaces where new plants can grow. Some species even depend on fire: certain pine trees produce cones that open and release their seeds only after being exposed to intense heat. In recent decades, however, many regions have experienced wildfires that are larger, hotter and more destructive than in the past.",
            "Scientists point to several causes. Rising temperatures, linked to climate change, dry out vegetation and soils, and fire seasons in many areas now begin earlier and end later than they once did. At the same time, decades of policies aimed at putting out every fire as quickly as possible have allowed dead wood and dense undergrowth to accumulate in some forests. When a fire does start in such conditions, it has much more fuel available and can spread rapidly into the crowns of trees, where it is extremely difficult to control.",
            "Human settlement has also changed the picture. As more homes are built near or within forests and grasslands, more fires are started accidentally by people, and more lives and properties are at risk. In response, fire managers increasingly use controlled burns, small fires deliberately set under carefully chosen conditions to reduce fuel. Communities are also encouraged to clear vegetation around buildings and to use fire-resistant materials. Experts emphasize that the goal is not to eliminate fire completely, which is impossible, but to restore a healthier balance between fire and the landscape.",
          ],
          questions: [
            { text: "According to paragraph 1, how can wildfires benefit ecosystems?", options: ["They clear dead material and release nutrients.", "They remove all trees permanently.", "They make soils less fertile.", "They prevent new plants from growing."], answer: 0 },
            { text: "The word \"accumulate\" in paragraph 2 is closest in meaning to", options: ["build up", "disappear", "burn", "grow taller"], answer: 0 },
            { text: "According to paragraph 2, how have past fire policies contributed to severe fires?", options: ["They allowed dead wood and undergrowth to build up.", "They caused too many controlled burns.", "They planted more pine trees.", "They made fire seasons shorter."], answer: 0 },
            { text: "What is a controlled burn?", options: ["a small fire deliberately set to reduce fuel", "a fire started by lightning", "a fire inside a building", "a method of planting trees"], answer: 0 },
            { text: "What do experts say is the goal of fire management?", options: ["to eliminate all fires", "to restore a healthier balance between fire and the landscape", "to stop people from living in forests", "to replace forests with grasslands"], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Emre", prompt: "Why did you get up so early?", chunks: ["I", "wanted to", "watch", "the sunrise", "from the hill"], end: "." },
      { promptBy: "Jess", prompt: "Have you tried the new bakery?", chunks: ["their", "cinnamon rolls", "are", "the best", "in town"], end: "." },
      { promptBy: "Zehra", prompt: "I always forget my passwords.", chunks: ["why don't", "you", "use", "a password", "manager"], end: "?" },
      { promptBy: "Rob", prompt: "How was your first day at the new job?", chunks: ["my colleagues", "were", "very", "friendly and", "helpful"], end: "." },
      { promptBy: "Mine", prompt: "When is the next bus to the city center?", chunks: ["the next one", "leaves", "in", "about", "ten minutes"], end: "." },
      { promptBy: "Paul", prompt: "Why is the museum closed today?", chunks: ["they", "are", "preparing", "a new", "exhibition"], end: "." },
      { promptBy: "Aslı", prompt: "What did your advisor say about your plan?", chunks: ["she", "suggested", "taking", "fewer courses", "next semester"], end: "." },
      { promptBy: "Greg", prompt: "Where are you having your birthday dinner?", chunks: ["we", "booked", "a table", "at an Italian", "restaurant"], end: "." },
      { promptBy: "Hande", prompt: "This box is too heavy for me.", chunks: ["do you", "need", "help", "carrying it", "upstairs"], end: "?" },
      { promptBy: "Colin", prompt: "Why are you saving money?", chunks: ["I", "want to", "buy", "a car", "next summer"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You took an evening photography course at a community center. The course was excellent, but the classroom was too small and some equipment did not work. The center has asked for feedback.",
      to: "the community center coordinator, Mr. Hall",
      subject: "Feedback on the photography course",
      tasks: ["Say what you liked about the course.", "Describe the problems you experienced.", "Suggest how the course could be improved."],
      sample: "Dear Mr. Hall,\n\nThank you for asking for feedback on the evening photography course, which I completed last week. Overall, I enjoyed it very much. The instructor, Ms. Kaya, was knowledgeable and patient, and her practical assignments, such as photographing the old market at night, helped me improve my skills quickly.\n\nHowever, there were a few problems. The classroom was too small for eighteen students, so during the lighting demonstrations many of us could not see what the instructor was doing. In addition, the projector often stopped working, and two of the three studio lamps were broken for most of the course, which meant we had to wait a long time to practice.\n\nFor future courses, I would suggest using a larger room or limiting the group to twelve students. It would also be helpful to check and repair the equipment before the course begins. With these changes, I think the course would be truly excellent, and I would happily recommend it to my friends.\n\nBest regards,\nCem Aydın",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Ethics",
      professor: {
        name: "Dr. Morgan",
        text: "Many zoos and aquariums argue that they play an important role in protecting endangered species and educating the public. However, some people believe that keeping wild animals in captivity is wrong, no matter how good the conditions are. Should wildlife parks and sanctuaries replace traditional animal collections in cities? Explain your opinion.",
      },
      students: [
        { name: "Chloe", text: "Yes. Sanctuaries give animals much more space and a more natural environment. People can still learn about animals there, or through documentaries." },
        { name: "Serkan", text: "Not necessarily. City collections are easy for families and schools to visit. If they closed, many children would never see a real animal up close." },
      ],
      sample: "I believe that, in the long term, large wildlife parks and sanctuaries should gradually replace traditional animal collections in cities, especially for large or highly intelligent species. Chloe is right that animals such as elephants, big cats and great apes need far more space and freedom than most city facilities can provide, and many show signs of stress in small enclosures. Sanctuaries can offer more natural environments while still supporting breeding programs for endangered species. Nevertheless, Serkan makes a fair point about access. Seeing a living animal can inspire children in a way that a documentary cannot, and city collections are easy for schools to visit. A reasonable compromise would be for city facilities to focus on smaller animals that adapt well to captivity, while sanctuaries care for larger species.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new volunteer at a public library. The head librarian is explaining what to tell visitors.",
      sentences: [
        "Welcome to the city library.",
        "Please keep your voice down.",
        "Food is not allowed in the reading room.",
        "You can borrow up to ten books at a time.",
        "Computers can be reserved for one hour at the information desk.",
        "If you return a book late, a small fee will be added to your library account.",
        "Children's story time takes place every Saturday at eleven in the children's section, and parents are welcome to stay with their children.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about food and cooking. The researcher will ask you some questions.",
      questions: [
        {
          text: "How often do you cook your own meals, and what do you usually make?",
          sample: "I cook my own meals about four or five times a week. Usually, I make simple dishes like pasta with vegetables, lentil soup or rice with chicken, because they are cheap, healthy and don't take too long. On weekends, when I have more time, I sometimes try a new recipe from the internet. Cooking at home helps me save money, and I also know exactly what goes into my food.",
        },
        {
          text: "Do you think people today eat more or less healthily than in the past?",
          sample: "I think it's mixed. Today, people know much more about nutrition, and healthy foods from all over the world are available in supermarkets. However, many people are very busy, so they rely on fast food, ready meals and snacks that contain a lot of sugar, salt and fat. In the past, people probably ate simpler food prepared at home. So I'd say people have more healthy options now, but they don't always choose them.",
        },
        {
          text: "Should schools teach students how to cook?",
          sample: "Yes, I think cooking should be taught in schools. It's a basic life skill that everyone needs, yet many young people leave home without knowing how to prepare a simple meal. As a result, they often eat unhealthy fast food. Cooking classes could also teach students about nutrition, budgeting and reducing food waste. Plus, cooking together can be a fun way for students to work as a team and learn about different cultures through food.",
        },
        {
          text: "Some people think governments should tax unhealthy foods such as sugary drinks. What is your opinion?",
          sample: "I generally support taxes on sugary drinks, because they can encourage people to choose healthier options, and the money raised could be used for health education or to make fruit and vegetables cheaper. Some countries that introduced such taxes have seen people buying fewer sugary drinks. However, I think taxes alone are not enough. People also need clear information about nutrition and access to affordable, healthy food, especially in low-income areas.",
        },
      ],
    },
  },
};
