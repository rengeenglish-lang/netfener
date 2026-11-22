import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 81 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_81: ToeflTest = {
  id: "toefl-81",
  no: 81,
  title: "TOEFL iBT Practice Test 81",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Typewriters",
          text: "Before computers, many documents were written on typewriters, machines that printed letters onto paper when keys were pre{{ssed}}. Several inventors created writing mac{{hines}} in the eighteenth and early nineteenth cen{{turies}}, but the first commercially successful typewriter appeared in the United States in the 1870s. It used the QWERTY keyboard lay{{out}}, which is still used on computer keyboards to{{day}}. Typewriters allowed office workers to produce clear documents much faster than writing by ha{{nd}}. They also created new jobs, especially for women, many of whom worked as typ{{ists}} and secretaries. Electric typewriters became common in the twentieth cen{{tury}}. By the 1990s, personal computers had replaced most typewriters, although some writers still enjoy using th{{em}}, and old machines have become popular with collec{{tors}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Morning workout?",
          text: [
            "Hi Sevda! I've just joined the sports center near the university. Would you like to come with me for a morning workout on Tuesdays and Thursdays?",
            "The classes start at 7, so we'd finish in time for our 9 o'clock lecture. I can bring you a guest pass for the first session!",
          ],
          questions: [
            { text: "What does the writer suggest?", options: ["working out together on Tuesday and Thursday mornings", "studying together in the library", "taking a cooking class", "going to a concert"], answer: 0 },
            { text: "What can the writer bring for the first session?", options: ["a guest pass", "a water bottle", "breakfast", "new sports shoes"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "New cafeteria payment cards",
          text: [
            "CAFETERIA PAYMENT CHANGES",
            "Starting next month, the campus cafeterias will no longer accept cash. Students and staff can pay with bank cards, phone payments or their student card after adding money to it online.",
            "Visitors without a bank card can buy a prepaid cafeteria card at the information desk in the main building. Any unused money on prepaid cards can be refunded within six months.",
          ],
          questions: [
            { text: "What change is being introduced?", options: ["The cafeterias will no longer accept cash.", "The cafeterias will close.", "Prices will increase.", "Only students may use the cafeterias."], answer: 0 },
            { text: "Where can visitors buy a prepaid card?", options: ["at the information desk in the main building", "at the bank", "online only", "in the library"], answer: 0 },
            { text: "What is true about unused money on prepaid cards?", options: ["It can be refunded within six months.", "It cannot be refunded.", "It expires after one week.", "It is donated to charity."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How icebergs form",
          paragraphs: [
            "Icebergs are large pieces of freshwater ice that float in the ocean. Although they are found in seawater, they are not formed from frozen seawater. Instead, they break off from glaciers and ice sheets on land, mainly in Greenland and Antarctica. These glaciers are made of snow that has accumulated and compressed over thousands of years.",
            "As glaciers slowly flow toward the coast, their edges extend into the sea. The ice at the front of a glacier is pushed and pulled by tides, waves and its own weight, and eventually cracks form. When large pieces break away and fall into the water, the process is called calving. Calving can produce icebergs of many sizes, from small pieces the size of a car to enormous flat icebergs tens of kilometers long, which typically break away from floating ice shelves in Antarctica.",
            "Only about ten percent of an iceberg is visible above the water; the rest lies hidden beneath the surface. This is because ice is only slightly less dense than seawater. For this reason, icebergs are dangerous to ships, as the famous sinking of the Titanic in 1912 demonstrated. Today, an international patrol uses aircraft, satellites and radar to track icebergs in the North Atlantic. As icebergs drift into warmer waters, they gradually melt. Scientists monitor calving closely, since an increase in the rate at which ice sheets lose ice to the ocean contributes to rising sea levels.",
          ],
          questions: [
            { text: "According to paragraph 1, where do icebergs come from?", options: ["glaciers and ice sheets on land", "frozen seawater", "frozen rivers", "rain that freezes in the air"], answer: 0 },
            { text: "According to paragraph 2, what is calving?", options: ["the breaking away of ice from a glacier into the water", "the melting of an iceberg", "the formation of snow", "the movement of ships through ice"], answer: 0 },
            { text: "The word \"accumulated\" in paragraph 1 is closest in meaning to", options: ["built up", "melted", "disappeared", "moved"], answer: 0 },
            { text: "According to paragraph 3, why is most of an iceberg hidden underwater?", options: ["Ice is only slightly less dense than seawater.", "Icebergs sink slowly.", "The top melts quickly.", "Waves push them down."], answer: 0 },
            { text: "Why do scientists monitor calving closely?", options: ["Increased ice loss contributes to rising sea levels.", "Calving creates new islands.", "Calving warms the ocean.", "Icebergs provide drinking water."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our new kitten",
          text: "Last month, we brought home a little grey kit{{ten}}. We named her Pamuk, which means \"cotton\" in Tur{{kish}}, because she is so soft. At first, she was shy and hid under the so{{fa}}. After a few days, she started to explore the hou{{se}}. Now she loves to play with a small ba{{ll}} and chase my socks. Every morning, I give her food and fresh wa{{ter}}. In the evening, she sleeps on my be{{d}} and purrs loudly. My little brother is learning to be gen{{tle}} with her. Pamuk has made our family very hap{{py}}, and I cannot imagine our home without h{{er}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Tea tasting afternoon",
          text: [
            "DISCOVER TEAS FROM AROUND THE WORLD!",
            "Join our tea tasting afternoon at Leaf & Cup on Saturday, November 9, from 2 to 4 p.m. Try ten different teas from China, India, Japan and Turkey.",
            "A tea expert will explain how each tea is grown and prepared. Tickets cost $15 and include small cakes. Every guest will also receive a sample pack of their favorite tea to take home.",
          ],
          questions: [
            { text: "How many teas will guests try?", options: ["ten", "three", "twenty", "five"], answer: 0 },
            { text: "What will the tea expert explain?", options: ["how each tea is grown and prepared", "how to bake cakes", "the history of the café", "how to open a shop"], answer: 0 },
            { text: "What will every guest receive?", options: ["a sample pack of tea", "a teapot", "a cookbook", "a discount card"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why hippos spend the day in water",
          paragraphs: [
            "Hippos are huge animals that live in rivers and lakes in Africa. Although they are very heavy, they spend most of the day in water.",
            "Hippos have very sensitive skin that can easily burn in the hot sun. Staying in the water keeps their skin cool and wet. Their skin also makes a red liquid that works like sunscreen and protects it from the sun.",
            "Hippos cannot really swim. Instead, they walk or run along the bottom of rivers. At night, they leave the water and walk long distances to eat grass. An adult hippo can eat about forty kilograms of grass in one night.",
          ],
          questions: [
            { text: "Where do hippos live?", options: ["in rivers and lakes in Africa", "in the ocean", "in deserts", "in mountain forests"], answer: 0 },
            { text: "Why do hippos stay in the water during the day?", options: ["to keep their sensitive skin cool and wet", "to catch fish", "to hide from people", "to sleep standing up"], answer: 0 },
            { text: "What does the red liquid on a hippo's skin do?", options: ["It works like sunscreen.", "It attracts insects.", "It helps them swim.", "It changes their color."], answer: 0 },
            { text: "The word \"sensitive\" in paragraph 2 is closest in meaning to", options: ["easily hurt", "very thick", "dry", "dark"], answer: 0 },
            { text: "When do hippos eat?", options: ["at night", "in the morning only", "at noon", "only in the water"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The ostrich effect",
          text: "When people expect bad news, they sometimes avoid information altogether, like the legendary ostrich that hides its head in the sa{{nd}}. Economists call this the ostrich ef{{fect}}. For example, studies have found that investors check their accounts much more often when markets are ris{{ing}} than when they are fal{{ling}}. Similarly, some patients delay medical tests because they are afr{{aid}} of the results. Avoiding unpleasant information may reduce anx{{iety}} in the short term, but it can lead to worse deci{{sions}} in the long run, since problems that are ignored may beco{{me}} more serious. Interestingly, real ostriches do not actually hide their heads; the image is simply a popular my{{th}} that has become a useful meta{{phor}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Thesis printing service",
          text: [
            "To: Graduating master's and doctoral students",
            "From: University Print Center",
            "Subject: Thesis printing and binding service",
            "The University Print Center offers a printing and binding service for theses and dissertations. Hardcover copies with gold lettering on the spine cost $35 each, and softcover copies cost $15. Orders usually take five working days, but during the busy period before graduation, they may take up to ten days.",
            "To place an order, upload a final PDF of your thesis through the Print Center website and choose the number of copies. Please check page numbers and margins carefully before submitting, as we print files exactly as received. Students who need a copy urgently may pay an additional $20 for two-day service.",
          ],
          questions: [
            { text: "How much does a hardcover copy cost?", options: ["$35", "$15", "$20", "$50"], answer: 0 },
            { text: "Why should students check their files carefully?", options: ["The Print Center prints files exactly as received.", "Files are often lost.", "The Print Center edits all files.", "Mistakes cost extra."], answer: 0 },
            { text: "What can students do if they need a copy urgently?", options: ["pay an additional $20 for two-day service", "print it at home", "ask the library", "submit it on paper"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The attention economy",
          paragraphs: [
            "In an age of abundant information, human attention has become a scarce and valuable resource. Many of the most popular digital services, such as social media platforms, video sites and mobile games, are free to use. Instead of charging users directly, these companies earn money mainly by selling advertising, and the more time users spend on their platforms, the more advertisements they can show. Economists and critics describe this situation as the 'attention economy'.",
            "To capture and hold attention, companies design their products carefully. Features such as endless scrolling, autoplaying videos and notifications encourage users to keep using an app longer than they intended. Recommendation algorithms learn what each person finds interesting and show more of it. Some designers have compared certain features to slot machines, since unpredictable rewards, such as new messages or 'likes', can be especially motivating.",
            "Critics argue that the attention economy can harm individuals and society. Heavy use of some apps has been linked to sleep problems, difficulty concentrating and, especially among young people, anxiety and low self-esteem, although researchers continue to debate how strong these effects are. Some also worry that algorithms that prioritize engaging content may spread sensational or misleading information. In response, some governments have proposed rules limiting certain design features for children, while some companies have introduced tools that allow users to track and limit their screen time. Many people are also choosing to 'detox' from technology by taking regular breaks.",
          ],
          questions: [
            { text: "According to paragraph 1, how do many free digital services make money?", options: ["by selling advertising", "by charging users monthly fees", "by selling devices", "through government funding"], answer: 0 },
            { text: "According to paragraph 2, why have some designers compared features to slot machines?", options: ["Unpredictable rewards can be especially motivating.", "Users win money.", "They are noisy.", "They are only used in casinos."], answer: 0 },
            { text: "The word \"prioritize\" in paragraph 3 is closest in meaning to", options: ["give the most importance to", "remove", "hide", "slow down"], answer: 0 },
            { text: "According to paragraph 3, what concern do critics raise about algorithms?", options: ["They may spread sensational or misleading information.", "They are too slow.", "They show too few advertisements.", "They cannot recommend content."], answer: 0 },
            { text: "Which response to the attention economy is mentioned?", options: ["tools that allow users to track and limit screen time", "banning all smartphones", "making all apps more expensive", "closing social media platforms"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Tolga", prompt: "Why are you taking a taxi?", chunks: ["I", "am", "late", "for", "my appointment"], end: "." },
      { promptBy: "Kate", prompt: "Did you like the hiking trail?", chunks: ["the path", "was", "steep but", "the view", "was amazing"], end: "." },
      { promptBy: "Gül", prompt: "I always forget people's birthdays.", chunks: ["why don't", "you", "add them", "to", "your calendar"], end: "?" },
      { promptBy: "Martin", prompt: "How did you learn to drive?", chunks: ["my father", "taught me", "in", "an empty", "parking lot"], end: "." },
      { promptBy: "Seda", prompt: "When will the new library open?", chunks: ["it", "is", "expected", "to open", "next spring"], end: "." },
      { promptBy: "Craig", prompt: "Why is the river so muddy?", chunks: ["it", "rained", "heavily", "in", "the mountains"], end: "." },
      { promptBy: "İlayda", prompt: "What did you buy for your brother?", chunks: ["I", "bought him", "a book", "about", "football"], end: "." },
      { promptBy: "Joe", prompt: "Where should we have lunch?", chunks: ["let's", "try", "the new", "Mexican", "restaurant"], end: "." },
      { promptBy: "Aynur", prompt: "This exercise is confusing.", chunks: ["should", "we", "ask", "the teacher", "to explain it again"], end: "?" },
      { promptBy: "Luke", prompt: "Why did you start learning to paint?", chunks: ["I", "wanted", "a relaxing", "hobby", "after work"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a student representative for your class. Many students have complained that the classroom where your class meets is too small and that there are not enough chairs. You want to write to the department administrator.",
      to: "the department administrator, Ms. Doğan",
      subject: "Classroom space for History 210",
      tasks: ["Explain your role and which class you are writing about.", "Describe the problems with the classroom.", "Suggest a solution."],
      sample: "Dear Ms. Doğan,\n\nI am the student representative for History 210: Modern European History, which meets on Mondays and Wednesdays at 10 a.m. in Room 112. I am writing on behalf of my classmates about the conditions in this classroom.\n\nThis semester, forty-two students are registered for the course, but Room 112 has only thirty-five chairs. As a result, several students have to stand at the back or sit on the floor during the ninety-minute lectures, which is uncomfortable and makes it difficult to take notes. The room also becomes very hot and crowded, and some students have said they find it hard to concentrate. In addition, students at the back cannot see the projector screen clearly.\n\nWould it be possible to move the class to a larger room for the rest of the semester? I noticed that Room 205 seems to be available at that time. If a room change is not possible, perhaps additional chairs could be brought in. Our professor, Dr. Yılmaz, has agreed that a change would be helpful.\n\nThank you very much for your help.\n\nBest regards,\nCan Öztürk",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Psychology",
      professor: {
        name: "Dr. Price",
        text: "Some people believe that taking regular breaks from social media, such as one day a week without it, can improve mental health and productivity. Others think that such breaks are unnecessary, as long as people use social media in moderation. Should people take regular breaks from social media? Explain your view.",
      },
      students: [
        { name: "Grace", text: "Yes. When I took a week off, I slept better and felt less anxious. Breaks remind you that you don't need to be online all the time." },
        { name: "Oğuz", text: "I don't think breaks are necessary. The real problem is how people use social media. If you use it sensibly every day, you don't need to stop." },
      ],
      sample: "I believe regular breaks from social media can be very helpful, especially for people who find it hard to control their use. Grace's experience reflects what many people report: stepping away for a day or a week can improve sleep, reduce anxiety and make people more aware of how much time they spend scrolling. A break can also help people reconnect with offline activities, such as reading, sports or spending time with friends face to face. However, Oğuz makes a fair point that moderation is the ultimate goal. If someone already uses social media in a balanced way, a strict break may not be necessary. In my view, short regular breaks can be a useful tool for building healthier habits, but they work best when combined with everyday limits, like turning off notifications in the evening.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new employee at a flower shop. The owner is telling you what to say to customers.",
      sentences: [
        "Good morning, can I help you?",
        "Roses are on sale this week.",
        "We can deliver flowers anywhere in the city.",
        "Would you like to add a card?",
        "These plants need very little water.",
        "If you order before noon, your flowers will be delivered on the same day at no extra cost.",
        "For weddings and other special events, we offer free consultations to help you choose flowers that match your colors and budget.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with technology at home. The researcher will ask you some questions.",
      questions: [
        {
          text: "What device do you use most at home, and why?",
          sample: "At home, I use my laptop the most. I use it for studying, writing assignments and attending online meetings for my group projects. In the evenings, I also use it to watch films and series. I prefer it to my phone for these activities because the screen is bigger and it's easier to type. Sometimes I use it for so many hours that I need to remind myself to take breaks.",
        },
        {
          text: "Has technology made housework easier?",
          sample: "Yes, technology has made housework much easier. Washing machines, dishwashers and vacuum cleaners save a lot of time and physical effort compared with the past. Some people now use robot vacuum cleaners that clean the floor automatically. My grandmother often tells me how long it took her to wash clothes by hand when she was young. However, technology has also created new tasks, like managing devices and fixing them when they break.",
        },
        {
          text: "Would you like to live in a 'smart home' where everything is connected?",
          sample: "I think some smart home features would be useful, like lights and heating that can be controlled from my phone to save energy. It would also be convenient to check from work whether I turned off the oven. However, I'm a little worried about privacy and security, since connected devices could be hacked. I also don't like the idea of depending completely on technology, so I'd prefer a home with only a few smart features.",
        },
        {
          text: "How do you think technology will change homes in the future?",
          sample: "In the future, I think homes will become more energy-efficient and automated. Many homes might produce their own electricity with solar panels and store it in batteries. Appliances could communicate with each other to use energy at the cheapest times. Robots might help with cleaning and cooking, which could be especially helpful for elderly people. I hope these changes will make life easier while still allowing people to feel comfortable and in control at home.",
        },
      ],
    },
  },
};
