import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 52 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_52: ToeflTest = {
  id: "toefl-52",
  no: 52,
  title: "TOEFL iBT Practice Test 52",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Safety pins",
          text: "The safety pin is a simple device, but it solved an old prob{{lem}}. Ordinary straight pins, which people had used for centuries to fasten clo{{thes}}, often fell out or pricked the skin. In 1849, an American mechanic named Walter Hunt needed to pay a de{{bt}}. While twisting a piece of wire in his fin{{gers}}, he created a pin with a coil at one end and a cl{{asp}} at the other that covered the sharp po{{int}}. He patented the invention and then sold the rights for only four hundred dol{{lars}}. The company that bought it earned millions. Safety pins are still used today to hold baby clothes, attach numbers to runners and make quick rep{{airs}} to torn clo{{thing}} and ba{{gs}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Returning your dish",
          text: [
            "Hi Aunt Sevim! Thank you again for the delicious stuffed peppers you brought on Sunday. Everyone loved them.",
            "I still have your blue dish. I'll bring it back on Wednesday evening when I come to help Uncle Ali with his computer, if that's okay.",
          ],
          questions: [
            { text: "Why does the writer thank Aunt Sevim?", options: ["for the stuffed peppers she brought", "for a birthday gift", "for helping with a computer", "for a ride home"], answer: 0 },
            { text: "When will the writer return the dish?", options: ["on Wednesday evening", "on Sunday", "tomorrow morning", "next month"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Washing machine payments",
          text: [
            "LAUNDRY UPDATE: NEW PAYMENT SYSTEM",
            "From October 1, the washing machines and dryers in all residence halls will no longer accept coins. Instead, residents can pay using the 'WashPay' app or by tapping their student card.",
            "Each wash costs $2 and each drying cycle costs $1.50. Money can be added to your student card at the front desk or online. If a machine does not work, please report it through the app to receive an automatic refund.",
          ],
          questions: [
            { text: "What change will happen from October 1?", options: ["The machines will no longer accept coins.", "The laundry room will close.", "Prices will be reduced.", "New machines will be installed."], answer: 0 },
            { text: "How much does a drying cycle cost?", options: ["$1.50", "$2", "$1", "$3"], answer: 0 },
            { text: "What should residents do if a machine does not work?", options: ["report it through the app for a refund", "call a technician", "use a coin", "leave a note on the machine"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why some mountains are still growing",
          paragraphs: [
            "Mountains may seem permanent and unchanging, but many are still rising today. The Himalayas, which include Mount Everest, the world's highest peak, are one example. They began to form about fifty million years ago, when the Indian tectonic plate, moving northward, collided with the Eurasian plate. Because neither plate could easily sink beneath the other, the crust between them was pushed upward, folding and stacking layers of rock.",
            "This collision has not stopped. The Indian plate continues to push northward at a rate of a few centimeters per year, and as a result, parts of the Himalayas are still rising by several millimeters each year. Evidence of the mountains' origins can be found high on their slopes: rocks near the summit of Mount Everest contain fossils of sea creatures, showing that these rocks were once at the bottom of an ancient ocean that lay between the two continents.",
            "At the same time, other forces are wearing mountains down. Rain, ice, wind and rivers constantly erode rock, carrying material downhill and into the sea. Glaciers carve deep valleys, and landslides can remove huge amounts of rock in moments. The height of a mountain range at any time therefore reflects a balance between uplift and erosion. Interestingly, erosion can itself encourage further uplift: as material is removed from the top of a mountain range, the crust becomes lighter and rises slightly, a little like a boat rising in the water when cargo is unloaded.",
          ],
          questions: [
            { text: "According to paragraph 1, how did the Himalayas form?", options: ["The Indian plate collided with the Eurasian plate.", "A volcano erupted under the sea.", "Glaciers piled up rocks.", "The Earth's crust cooled and shrank."], answer: 0 },
            { text: "According to paragraph 2, what do fossils of sea creatures near Everest's summit show?", options: ["The rocks were once at the bottom of an ocean.", "Sea creatures once climbed mountains.", "The mountain is made of shells only.", "The sea level was once higher than Everest."], answer: 0 },
            { text: "The word \"erode\" in paragraph 3 is closest in meaning to", options: ["gradually wear away", "build up", "heat", "protect"], answer: 0 },
            { text: "According to paragraph 3, what determines a mountain range's height at any time?", options: ["a balance between uplift and erosion", "the amount of snow", "the age of the rocks only", "the number of rivers"], answer: 0 },
            { text: "Why does the author compare mountains to a boat being unloaded?", options: ["to explain how erosion can cause the crust to rise slightly", "to describe how mountains move sideways", "to show that mountains float on the ocean", "to explain how glaciers form"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Painting my bedroom",
          text: "Last summer, my parents said I could paint my bed{{room}}. I chose a light blue co{{lor}}. First, my father and I moved all the furni{{ture}} into the middle of the room. Then we covered the floor with old news{{papers}}. My father showed me how to use a brush and a rol{{ler}}. We started early in the mor{{ning}} and finished in the late after{{noon}}. I got a lot of paint on my clo{{thes}} and even in my hair! When the walls were dry, we put everything back. Now my room looks fresh and ne{{w}}, and I am very hap{{py}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Clothes exchange day",
          text: [
            "BRING ONE, TAKE ONE!",
            "Bring your clean, unwanted clothes to the Community Hall on Saturday, March 8, from 10 a.m. to 2 p.m., and exchange them for something new to you.",
            "For every item you bring, you can take one item home. Entry is free. Any clothes left at the end of the day will be given to a local charity.",
          ],
          questions: [
            { text: "What can people do at the event?", options: ["exchange clothes", "buy new clothes", "learn to sew", "sell furniture"], answer: 0 },
            { text: "How many items can people take home?", options: ["one for every item they bring", "as many as they want", "only three", "none"], answer: 0 },
            { text: "What will happen to clothes left at the end?", options: ["They will be given to a local charity.", "They will be thrown away.", "They will be sold.", "They will be returned to their owners."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How starfish eat",
          paragraphs: [
            "Starfish, also called sea stars, live in oceans all over the world. Most have five arms, but some kinds have many more. They do not have a brain or blood.",
            "Many starfish eat shellfish, such as mussels and clams. A starfish wraps its arms around the shell and pulls slowly with hundreds of tiny tube feet. After some time, the shell opens a little.",
            "Then the starfish does something amazing. It pushes its stomach out of its body and into the shell. The stomach digests the food inside the shell. When it has finished eating, the starfish pulls its stomach back in.",
          ],
          questions: [
            { text: "How many arms do most starfish have?", options: ["five", "eight", "ten", "two"], answer: 0 },
            { text: "What do many starfish eat?", options: ["shellfish such as mussels and clams", "seaweed only", "small fish only", "sand"], answer: 0 },
            { text: "How does a starfish open a shell?", options: ["It pulls slowly with its tube feet.", "It bites the shell.", "It hits the shell against a rock.", "It waits for the tide."], answer: 0 },
            { text: "The word \"digests\" in paragraph 3 is closest in meaning to", options: ["breaks down food", "hides", "throws away", "cleans"], answer: 0 },
            { text: "What is amazing about the way starfish eat?", options: ["They push their stomach out of their body into the shell.", "They eat with their eyes.", "They swallow shells whole.", "They eat only at night."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Choice architecture",
          text: "The way choices are presented can strongly influence what people decide, even when the options themselves remain the sa{{me}}. Researchers call the design of these situations choice architec{{ture}}. For example, in school cafeterias, placing fruit at eye level and near the cash regi{{ster}} can increase the number of students who buy it. Similarly, listing the healthiest meal fi{{rst}} on a menu may make it more popu{{lar}}. Supporters argue that such small chan{{ges}} can improve health and savings without restri{{cting}} freedom, since people can still choose any op{{tion}}. Critics, however, worry that governments and compa{{nies}} may use these techniques to manipulate people in ways they do not no{{tice}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Geology field trip",
          text: [
            "To: Students in Introduction to Geology",
            "From: Dr. Hassan, Course Instructor",
            "Subject: Field trip to the coastal cliffs – important information",
            "Our field trip to the coastal cliffs will take place on Saturday, April 5. The bus will leave from the front of the Science Building at 7:30 a.m. sharp and return at about 6 p.m. Attendance is required, as the field report counts for twenty percent of your final grade.",
            "Please wear sturdy hiking boots and bring waterproof clothing, a packed lunch and at least two liters of water. Hammers and hard hats will be provided. Students who cannot attend for medical or religious reasons must contact me by March 28 to arrange an alternative assignment.",
          ],
          questions: [
            { text: "Why is attendance required?", options: ["The field report counts for twenty percent of the final grade.", "The bus is free.", "It is the last class of the semester.", "The cliffs will soon be closed."], answer: 0 },
            { text: "What will be provided?", options: ["hammers and hard hats", "lunch and water", "hiking boots", "waterproof clothing"], answer: 0 },
            { text: "What should students who cannot attend do?", options: ["contact the instructor by March 28", "join the trip next year", "write an extra exam", "send a friend instead"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Food deserts",
          paragraphs: [
            "The term 'food desert' is used to describe neighborhoods where residents have limited access to affordable, nutritious food, such as fresh fruit, vegetables and whole grains. In many low-income urban areas, the nearest supermarket may be several kilometers away, and residents without cars must rely on public transport or on small convenience stores that sell mainly processed and packaged foods. Rural areas can also be food deserts, since shops may be very far apart.",
            "Researchers have long linked food deserts to poor diets and high rates of diet-related diseases such as obesity and diabetes. The reasoning seemed straightforward: if people cannot easily buy healthy food, they will eat less of it. In response, some governments offered financial incentives to supermarket chains to open stores in underserved neighborhoods.",
            "However, several studies of these new supermarkets produced surprising results. Although residents welcomed the new stores, their diets often changed very little. This has led researchers to argue that physical access is only part of the problem. The cost of healthy food, the time needed to prepare meals, cooking skills, family habits and the heavy marketing of cheap processed foods all influence what people eat. Some scholars now prefer the term 'food apartheid' or 'food inequity' to emphasize that diet is shaped by broader social and economic conditions. Effective solutions, they argue, must combine improved access with lower prices, nutrition education and support for community gardens and local markets.",
          ],
          questions: [
            { text: "According to paragraph 1, what is a food desert?", options: ["a neighborhood with limited access to affordable, nutritious food", "a desert where no plants grow", "a market that sells only sweets", "a region with no restaurants"], answer: 0 },
            { text: "According to paragraph 2, how did some governments respond to food deserts?", options: ["They offered incentives to supermarkets to open stores.", "They banned convenience stores.", "They gave everyone free cars.", "They closed fast-food restaurants."], answer: 0 },
            { text: "The word \"underserved\" in paragraph 2 is closest in meaning to", options: ["lacking adequate services", "overcrowded", "wealthy", "rural"], answer: 0 },
            { text: "What surprising result did studies of new supermarkets find?", options: ["Residents' diets often changed very little.", "Residents stopped eating processed food.", "The supermarkets closed immediately.", "Prices became much higher."], answer: 0 },
            { text: "Why do some scholars prefer terms such as 'food inequity'?", options: ["to emphasize that diet is shaped by broader social and economic conditions", "because the word 'desert' is too long", "to describe rural areas only", "to promote new supermarkets"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ferhat", prompt: "Why are you smiling so much?", chunks: ["I", "just", "got", "accepted to", "my dream university"], end: "." },
      { promptBy: "Kate", prompt: "Did you enjoy the cooking show?", chunks: ["the chef", "made", "everything", "look", "so easy"], end: "." },
      { promptBy: "Nil", prompt: "I always get lost in this city.", chunks: ["why don't", "you", "download", "an offline", "map"], end: "?" },
      { promptBy: "Brian", prompt: "How did you meet your best friend?", chunks: ["we", "were", "in", "the same", "chemistry class"], end: "." },
      { promptBy: "Sinem", prompt: "When is the deadline for the scholarship?", chunks: ["applications", "must be", "submitted", "by", "the end of May"], end: "." },
      { promptBy: "Cole", prompt: "Why is the park so busy today?", chunks: ["there is", "a free", "concert", "this", "afternoon"], end: "." },
      { promptBy: "Elçin", prompt: "What did you learn at the workshop?", chunks: ["we", "learned", "how to", "give", "better presentations"], end: "." },
      { promptBy: "Max", prompt: "Where are you celebrating New Year?", chunks: ["we", "are going", "to", "my grandparents'", "house"], end: "." },
      { promptBy: "Burcu", prompt: "This sweater is too small for me.", chunks: ["can you", "exchange it", "for", "a larger", "size"], end: "?" },
      { promptBy: "Jack", prompt: "Why did you start cycling to school?", chunks: ["it", "is", "faster", "than", "taking the bus"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a member of a student environmental club. The club wants to place recycling bins in every building on campus, and you need permission from the campus facilities office.",
      to: "the campus facilities manager, Mr. Ortiz",
      subject: "Proposal for recycling bins on campus",
      tasks: ["Introduce yourself and the club.", "Explain the problem and your proposal.", "Describe how the club will help and ask for a meeting."],
      sample: "Dear Mr. Ortiz,\n\nMy name is Burak Tekin, and I am the president of the Green Campus Club, a student group of about sixty members who work to make our university more environmentally friendly.\n\nWe have noticed that most buildings on campus have only general waste bins. As a result, large amounts of paper, plastic bottles and cans are thrown away instead of being recycled. In a small survey we carried out last month, more than eighty percent of students said they would recycle if bins were easily available. We would therefore like to propose placing clearly labeled recycling bins for paper, plastic and metal on every floor of each academic building.\n\nOur club would be happy to help with this project. Our members could design the labels and posters, inform students about the new system through social media and check the bins regularly to make sure they are being used correctly. Would it be possible to arrange a meeting next week to discuss the proposal in more detail?\n\nThank you for your time and consideration.\n\nSincerely,\nBurak Tekin",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Health Sciences",
      professor: {
        name: "Dr. Reid",
        text: "Many workplaces now offer standing desks, encouraging employees to stand for part of the day instead of sitting. Some experts say that sitting for long periods is harmful to health and that standing desks should be standard in offices. Others argue that standing all day also causes problems and that regular movement is more important. Should employers provide standing desks for all employees? Explain your view.",
      },
      students: [
        { name: "Hannah", text: "Yes. Office workers sit for eight or nine hours a day, which is terrible for the back and heart. Standing desks give them an easy way to move more." },
        { name: "Yasin", text: "I'm not sure they're worth it. Standing for hours can hurt your legs and feet. It would be better to encourage short walking breaks." },
      ],
      sample: "I think employers should offer standing desks to employees who want them, but they should also promote regular movement. Hannah is right that office workers spend most of the day sitting, and research links long periods of sitting to back pain, weight gain and heart problems. Adjustable desks allow people to change position easily, which can reduce stiffness and make them feel more energetic. However, Yasin makes a valid point that standing still for hours is not a perfect solution, as it can cause pain in the legs and feet. The real goal should be to avoid staying in any single position for too long. Therefore, companies should combine standing desks with short, regular breaks for walking or stretching, and perhaps hold some meetings while walking.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new employee at a garden center. Your manager is telling you what to say to customers.",
      sentences: [
        "Good morning, welcome to the garden center.",
        "Indoor plants are in the greenhouse.",
        "These flowers need a lot of sunlight.",
        "Please water them twice a week.",
        "We can deliver large plants to your home for a small fee.",
        "If your plant dies within a month, bring it back with your receipt and we will replace it.",
        "Our gardening workshops take place every Saturday morning, and this week we will be teaching customers how to grow vegetables on a balcony.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's relationships with nature and the outdoors. The researcher will ask you some questions.",
      questions: [
        {
          text: "How often do you spend time in nature, and what do you do?",
          sample: "I try to spend time in nature at least once a week. During the week, I usually go for a walk or a run in a large park near my home. On weekends, when the weather is nice, my friends and I sometimes take a bus to the forest outside the city and go hiking. Being surrounded by trees and fresh air helps me relax and forget about my assignments for a while.",
        },
        {
          text: "Do you think children today spend enough time outdoors?",
          sample: "No, I don't think most children spend enough time outdoors. Many children today prefer playing video games or watching videos on tablets, and parents are often worried about safety, so they keep their children inside. However, playing outside is important for children's physical health, creativity and social skills. Schools could help by organizing more outdoor activities and lessons, and cities should provide safe parks and playgrounds.",
        },
        {
          text: "Should cities create more green spaces, even if it means building fewer homes?",
          sample: "This is a difficult question, because many cities have serious housing shortages. Still, I believe green spaces are essential and should be protected. Parks improve air quality, reduce heat in summer and give people places to exercise and relax, which benefits their mental health. Cities can build more homes by using space more efficiently, for example by building taller apartment buildings, while still keeping parks and planting trees along streets.",
        },
        {
          text: "How can people who live in cities feel more connected to nature?",
          sample: "People in cities can connect with nature in many small ways. They can grow plants on their balconies or join community gardens, where they can grow vegetables with their neighbors. Visiting local parks regularly, birdwatching or simply walking along a river can also help. On weekends, people can take trips to nearby forests or beaches. Even keeping plants at home can make people feel calmer and more connected to the natural world.",
        },
      ],
    },
  },
};
