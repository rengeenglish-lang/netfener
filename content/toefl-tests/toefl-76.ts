import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 76 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_76: ToeflTest = {
  id: "toefl-76",
  no: 76,
  title: "TOEFL iBT Practice Test 76",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Price tags",
          text: "For most of history, buyers and sellers agreed on prices by bargaining. Shopkeepers often charged different prices to different custo{{mers}}, depending on how much they thought each person could pa{{y}}. In the nineteenth century, some shop owners began to attach fixed prices to their go{{ods}}. One reason was religious: some merchants believed it was unfair to charge people different am{{ounts}} for the same item. Fixed prices also saved ti{{me}}, because staff no longer had to bargain with every buy{{er}}. As large department stores grew, they needed to hire many sales{{people}}, and price tags made it easier to train th{{em}}. Today, prices are often shown on electronic la{{bels}} that can be changed instantly from a compu{{ter}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Lost earphones",
          text: [
            "Hi Hande, I think I left my wireless earphones in your car when you drove me home yesterday. They're in a small white case.",
            "Could you check under the passenger seat when you have a moment? If they're there, I can pick them up from your office tomorrow at lunch.",
          ],
          questions: [
            { text: "Where does the writer think the earphones are?", options: ["in Hande's car", "at the office", "at home", "in a café"], answer: 0 },
            { text: "When does the writer suggest picking them up?", options: ["tomorrow at lunch", "tonight", "next week", "this morning"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Guest speaker series",
          text: [
            "SPRING GUEST SPEAKER SERIES",
            "The Faculty of Science invites everyone to its spring guest speaker series. Every Wednesday at 5 p.m. in Auditorium 2, a leading scientist will give a talk on topics such as climate research, space exploration and artificial intelligence.",
            "Talks are free and open to the public, and no registration is required. Each talk lasts about forty-five minutes, followed by questions from the audience. Recordings will be posted on the faculty website one week later.",
          ],
          questions: [
            { text: "When do the talks take place?", options: ["every Wednesday at 5 p.m.", "every weekend", "once a month", "every morning"], answer: 0 },
            { text: "What is true about attending the talks?", options: ["They are free, and no registration is required.", "Only science students may attend.", "Tickets must be bought in advance.", "Registration is required online."], answer: 0 },
            { text: "When will recordings be available?", options: ["one week later", "immediately", "at the end of the semester", "never"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The Great Fire of London",
          paragraphs: [
            "In the early hours of September 2, 1666, a fire broke out in a bakery on Pudding Lane in the City of London. At first, it did not seem unusual; fires were common in the crowded city, where most buildings were made of wood and many had roofs covered with straw. However, after a long, dry summer, the buildings were extremely dry, and a strong wind from the east quickly spread the flames from street to street.",
            "The fire burned for four days. Firefighting methods at the time were very limited, relying mainly on buckets of water, simple hand-operated pumps and hooks used to pull down buildings. The most effective way to stop a fire was to create firebreaks by demolishing houses in its path, but officials hesitated at first, partly because of the cost of destroying property. By the time the wind dropped and the fire was brought under control, it had destroyed more than thirteen thousand houses, nearly ninety churches and St Paul's Cathedral, leaving tens of thousands of people homeless.",
            "Surprisingly, only a small number of deaths were officially recorded, although historians believe the true number may have been higher, since the deaths of poor people were often not recorded. The disaster led to important changes. New building regulations required houses to be built of brick or stone rather than wood, and streets were made wider. The architect Christopher Wren designed a new St Paul's Cathedral and many other churches. The fire also contributed to the development of fire insurance, as companies began offering policies and even organizing their own teams of firefighters.",
          ],
          questions: [
            { text: "According to paragraph 1, why did the fire spread so quickly?", options: ["The buildings were dry and a strong wind spread the flames.", "It started in many places at once.", "There was no water in the city.", "The buildings were made of stone."], answer: 0 },
            { text: "According to paragraph 2, what was the most effective way to stop the fire?", options: ["creating firebreaks by demolishing houses", "using modern fire engines", "waiting for rain", "using chemicals"], answer: 0 },
            { text: "The word \"hesitated\" in paragraph 2 is closest in meaning to", options: ["paused before acting", "acted quickly", "refused completely", "celebrated"], answer: 0 },
            { text: "According to paragraph 3, why might the true number of deaths have been higher?", options: ["The deaths of poor people were often not recorded.", "Historians invented the number.", "Records were lost in a later fire.", "People hid the bodies."], answer: 0 },
            { text: "What change resulted from the fire?", options: ["New regulations required houses to be built of brick or stone.", "London was abandoned.", "All churches were closed.", "Streets became narrower."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My first fishing trip",
          text: "Last summer, my grandfather took me fishing for the fi{{rst}} time. We woke up very early and drove to a quiet la{{ke}}. The water was calm, and the air was cool and fre{{sh}}. My grandfather showed me how to put a worm on the ho{{ok}}. Then we sat in his small boat and wai{{ted}}. For a long time, nothing hap{{pened}}. Suddenly, my line moved! I pulled very hard, and I caught a big silver fi{{sh}}. My grandfather was very pr{{oud}} of me. We took a photo and then put the fish back in the wa{{ter}}. It was a perfect d{{ay}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Retro video game fair",
          text: [
            "RETRO GAME FAIR THIS WEEKEND!",
            "Play classic video games from the 1980s and 1990s at the City Exhibition Hall on Saturday and Sunday from 10 a.m. to 7 p.m. More than fifty old game machines will be available.",
            "Tickets cost $8 for adults and $5 for children under 12. There will also be a game competition on Sunday afternoon, with prizes for the top three players. Food and drinks are sold at the hall.",
          ],
          questions: [
            { text: "What can visitors do at the fair?", options: ["play classic video games", "buy new computers", "learn to program", "watch films"], answer: 0 },
            { text: "How much do tickets cost for children under 12?", options: ["$5", "$8", "nothing", "$10"], answer: 0 },
            { text: "What will happen on Sunday afternoon?", options: ["a game competition", "a concert", "a film screening", "a cooking show"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How hermit crabs find new homes",
          paragraphs: [
            "Hermit crabs are small animals that live near the sea. Unlike other crabs, they do not have a hard shell to protect their soft bodies. Instead, they live inside empty shells left by sea snails.",
            "As a hermit crab grows, its shell becomes too small. Then it must find a bigger one. It checks empty shells carefully with its claws to see if they are the right size.",
            "Sometimes, hermit crabs form a line from the smallest to the largest. When one crab moves into a new shell, the others quickly move into the shells that become free, one after another. This way, many crabs get new homes at the same time.",
          ],
          questions: [
            { text: "What do hermit crabs use as homes?", options: ["empty shells left by sea snails", "holes in the sand", "rocks", "seaweed"], answer: 0 },
            { text: "Why must a hermit crab find a new shell?", options: ["Its shell becomes too small as it grows.", "Its shell becomes dirty.", "Other crabs take its shell.", "The sea breaks its shell."], answer: 0 },
            { text: "How does a hermit crab check a new shell?", options: ["with its claws", "with its eyes only", "by smelling it", "by asking other crabs"], answer: 0 },
            { text: "The word \"form\" in paragraph 3 is closest in meaning to", options: ["make", "break", "leave", "eat"], answer: 0 },
            { text: "What happens when hermit crabs form a line?", options: ["Many crabs get new homes at the same time.", "They fight for one shell.", "They all leave the beach.", "They build a new shell together."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The cheerleader effect",
          text: "Some research suggests that people appear more attractive when they are seen in a group than when they are seen al{{one}}. This idea has been called the cheerleader eff{{ect}}. In several experiments, participants rated the faces of individuals shown in group pho{{tos}} and then rated the same faces shown sepa{{rately}}. On average, faces were rated slightly higher when they appeared in a gr{{oup}}. Researchers suggest that the brain tends to average the features of faces it sees toge{{ther}}, and average faces are often perceived as more attrac{{tive}}. The effect is small, and later studies have found that it does not appear in every situ{{ation}}. Nevertheless, it shows how our judgments can be influenced by the con{{text}} in which we see some{{thing}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Student health insurance enrollment",
          text: [
            "To: International students",
            "From: International Student Services",
            "Subject: Health insurance enrollment deadline",
            "All international students are required to have health insurance while studying at the university. You will be automatically enrolled in the university health plan unless you submit proof of equivalent private insurance by September 30.",
            "The university plan covers doctor's visits, emergency care and hospital stays, but it does not cover routine dental or eye care. The cost will be added to your tuition bill. If you have questions about what is covered or how to make a claim, please attend one of our information sessions during the first two weeks of the semester.",
          ],
          questions: [
            { text: "What happens if students do not submit proof of private insurance by September 30?", options: ["They will be automatically enrolled in the university plan.", "They will lose their student status.", "They will receive no insurance.", "They must leave the country."], answer: 0 },
            { text: "What is NOT covered by the university plan?", options: ["routine dental care", "doctor's visits", "emergency care", "hospital stays"], answer: 0 },
            { text: "How will students pay for the university plan?", options: ["The cost will be added to their tuition bill.", "They pay at each visit.", "It is free.", "They pay by cash at the office."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Rewilding",
          paragraphs: [
            "Traditional conservation has often focused on protecting particular species or preserving landscapes in their current state. In recent decades, a different approach known as rewilding has gained popularity. Rewilding aims to restore natural processes and allow ecosystems to manage themselves, often by reintroducing species that have disappeared from an area, such as large predators or grazing animals, and by reducing human management.",
            "One of the most famous examples took place in Yellowstone National Park in the United States, where gray wolves were reintroduced in 1995 after being absent for about seventy years. Researchers have reported that the wolves changed the behavior of elk, which began to avoid certain areas such as river valleys. As a result, young trees in these areas were able to grow, providing food and shelter for birds and beavers. Some scientists caution, however, that the full story is more complicated, and that other factors, such as changes in climate and human hunting, also played a role.",
            "Rewilding projects now exist in many parts of the world, from reintroducing beavers in Britain to allowing abandoned farmland in Europe to return to forest. Supporters argue that rewilding can increase biodiversity, store carbon and create opportunities for nature-based tourism. Critics, however, point to potential conflicts. Farmers may worry that predators such as wolves or lynx will attack their livestock, and some people feel that rewilding ignores the cultural value of traditional landscapes shaped by farming. Successful projects therefore often depend on involving local communities and providing compensation for losses.",
          ],
          questions: [
            { text: "According to paragraph 1, what does rewilding aim to do?", options: ["restore natural processes and let ecosystems manage themselves", "protect landscapes exactly as they are", "increase farming", "remove all animals"], answer: 0 },
            { text: "According to paragraph 2, how did the wolves affect elk?", options: ["Elk began to avoid certain areas such as river valleys.", "Elk became more numerous.", "Elk moved into the river valleys.", "Elk disappeared completely."], answer: 0 },
            { text: "The word \"caution\" in paragraph 2 is closest in meaning to", options: ["warn", "agree", "celebrate", "prove"], answer: 0 },
            { text: "According to paragraph 3, why might farmers oppose rewilding?", options: ["Predators may attack their livestock.", "Rewilding increases crop prices.", "Forests produce too much water.", "Tourists damage farms."], answer: 0 },
            { text: "What do successful rewilding projects often depend on?", options: ["involving local communities and providing compensation", "removing all farmers", "introducing as many predators as possible", "keeping the public away"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Hasan", prompt: "Why are you studying in the park?", chunks: ["it", "is", "too noisy", "in", "my apartment"], end: "." },
      { promptBy: "Julia", prompt: "Did you enjoy the city tour?", chunks: ["our guide", "knew", "a lot", "about", "local history"], end: "." },
      { promptBy: "Ece", prompt: "I need a new hobby.", chunks: ["why don't", "you", "join", "the", "photography club"], end: "?" },
      { promptBy: "Martin", prompt: "How did you get to the airport?", chunks: ["my brother", "drove me", "there", "early", "this morning"], end: "." },
      { promptBy: "Tülay", prompt: "When does the next semester begin?", chunks: ["it", "begins", "on", "the first", "of February"], end: "." },
      { promptBy: "Rob", prompt: "Why is the train so slow today?", chunks: ["there are", "repairs", "on", "the", "railway line"], end: "." },
      { promptBy: "Hazal", prompt: "What did your friend say about the restaurant?", chunks: ["she", "said", "the desserts", "were", "amazing"], end: "." },
      { promptBy: "Liam", prompt: "Where are you going to live next year?", chunks: ["I", "will share", "an apartment", "with", "two friends"], end: "." },
      { promptBy: "Feride", prompt: "I can't open this file.", chunks: ["did you", "download", "the", "right", "program"], end: "?" },
      { promptBy: "Ross", prompt: "Why did you start running marathons?", chunks: ["I", "wanted", "a new", "personal", "challenge"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently attended a job fair at your university, where you spoke with a representative from an engineering company. You are interested in an internship at the company and want to follow up.",
      to: "the company representative, Mr. Shaw",
      subject: "Follow-up from the career fair",
      tasks: ["Remind him of your conversation.", "Explain your interest in the company.", "Ask about internship opportunities and next steps."],
      sample: "Dear Mr. Shaw,\n\nThank you for taking the time to speak with me at the university career fair last Thursday. We talked about your company's renewable energy projects, and you mentioned the new solar farm your team is designing in central Anatolia. I was the third-year mechanical engineering student who asked about your work on energy storage.\n\nI am very interested in your company because its projects match my academic interests. This semester, I am taking courses in thermodynamics and sustainable energy systems, and I am working on a group project to design a small battery storage system for a school. I believe an internship with your team would allow me to apply these skills in a real-world setting.\n\nCould you please let me know whether your company offers summer internships for undergraduate students, and how I should apply? I have attached my CV, and I would be happy to provide any additional information.\n\nThank you again for your time.\n\nKind regards,\nYiğit Erdem",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education",
      professor: {
        name: "Dr. Graham",
        text: "Some universities are replacing large lectures with smaller, discussion-based classes, even though this requires hiring more teachers. Supporters say students learn more when they participate actively. Others argue that large lectures are an efficient way to share information and allow universities to keep costs down. Should universities replace large lectures with smaller classes? Explain your view.",
      },
      students: [
        { name: "Ava", text: "Yes. In a lecture hall with three hundred students, nobody asks questions. Small classes force students to think and participate." },
        { name: "Serkan", text: "No. Lectures let one expert teach many students at once. If universities hired more teachers, tuition would become even more expensive." },
      ],
      sample: "I believe universities should reduce their reliance on large lectures but not eliminate them completely. Ava makes a strong point: in a huge lecture hall, many students are passive listeners, and they rarely ask questions or test their own understanding. Research suggests that active learning, where students discuss problems and explain ideas to each other, often leads to better results. However, Serkan is right that lectures can be efficient, especially for introducing basic concepts, and hiring many more teachers would increase costs. A balanced approach would be to combine shorter lectures with regular small-group sessions led by teaching assistants. Lectures could also be recorded, allowing class time to focus more on discussion and problem-solving.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new employee at a hotel spa. The spa manager is telling you what to say to guests.",
      sentences: [
        "Good afternoon, welcome to the spa.",
        "Please change in the locker room.",
        "Towels and robes are provided.",
        "The sauna is open until nine tonight.",
        "Please turn off your phone in the relaxation area.",
        "If you would like a massage, I can check which therapists are available this afternoon.",
        "Hotel guests can use the swimming pool and sauna for free, but treatments such as massages and facials must be booked and paid for separately.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about nature and wildlife. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is your favorite animal, and why?",
          sample: "My favorite animal is the dolphin. I've always been amazed by how intelligent and social dolphins are. They live in groups, communicate with each other using different sounds and even seem to play just for fun. When I was a child, I saw a group of wild dolphins jumping next to our boat during a holiday, and I've loved them ever since. They seem so joyful and free.",
        },
        {
          text: "Do you think zoos are a good way to learn about animals?",
          sample: "I think zoos can be a good way to learn about animals, especially for children who may never see them in the wild. Good zoos also take part in breeding programs for endangered species and teach visitors about conservation. However, I'm not comfortable with zoos that keep large animals in small spaces. I think the best zoos are those that focus on animal welfare and education, and that give animals enough space and stimulation.",
        },
        {
          text: "Should wild animals that have disappeared from an area be brought back?",
          sample: "In many cases, I think bringing back animals that have disappeared is a good idea, because they often play important roles in ecosystems. For example, predators can help control populations of other animals and allow forests to recover. However, it needs to be planned carefully, with the support of local people, especially farmers who may be affected. Governments should also provide compensation if animals cause damage.",
        },
        {
          text: "What can ordinary people do to help protect wildlife?",
          sample: "Ordinary people can do many things to help protect wildlife. They can reduce their use of plastic, which often ends up harming animals in the oceans. They can plant native flowers to support bees and butterflies, and avoid using chemicals in their gardens. Supporting conservation organizations, either through donations or volunteering, also helps. Finally, people can be responsible tourists, for example by not buying products made from endangered animals.",
        },
      ],
    },
  },
};
