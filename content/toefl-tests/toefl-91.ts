import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 91 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_91: ToeflTest = {
  id: "toefl-91",
  no: 91,
  title: "TOEFL iBT Practice Test 91",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Shoelaces",
          text: "People have tied their shoes with laces for thousands of years. Archaeologists have found a leather shoe in Armenia, more than five thousand years o{{ld}}, which still had a leather lace threaded through its ho{{les}}. For many centuries, however, shoes were also fastened with buckles, which were often decorated and showed the owner's wea{{lth}}. Shoelaces became more common in Europe in the eighteenth and nineteenth cen{{turies}}, especially after an English inventor patented the small metal or plastic tube at the end of a la{{ce}}. This tube, called an aglet, stops the lace from fraying and makes it easier to pu{{sh}} through the holes. Today, many children learn to tie their la{{ces}} at school, although some shoes now use elastic or Velcro inst{{ead}}, which are fas{{ter}} and easier to u{{se}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Help with the decorations",
          text: [
            "Hi Ayşe! The class party is tomorrow at 6, and I still need to put up the decorations in the hall. Could you come and help me at around 4?",
            "Please bring some tape and scissors if you have them. I've already bought the balloons and lights. Thanks a lot!",
          ],
          questions: [
            { text: "What does the writer need help with?", options: ["putting up decorations for the class party", "cooking food", "buying tickets", "cleaning the classroom"], answer: 0 },
            { text: "What has the writer already bought?", options: ["balloons and lights", "tape and scissors", "food and drinks", "a cake"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Study room cleaning schedule",
          text: [
            "STUDY ROOMS: CLEANING SCHEDULE",
            "To keep the study rooms clean, cleaning staff will enter each room every day at 7 a.m. and 6 p.m. Please do not leave personal belongings in the rooms overnight.",
            "Any items left after 10 p.m. will be taken to the lost property office at the library entrance. Food is allowed in the study rooms, but please take all rubbish with you or place it in the bins in the hallway.",
          ],
          questions: [
            { text: "When will cleaning staff enter the study rooms?", options: ["every day at 7 a.m. and 6 p.m.", "once a week", "only at night", "every hour"], answer: 0 },
            { text: "What happens to items left after 10 p.m.?", options: ["They are taken to the lost property office.", "They are thrown away.", "They stay in the room.", "They are given to charity."], answer: 0 },
            { text: "What is true about food in the study rooms?", options: ["It is allowed, but rubbish must be removed.", "It is not allowed.", "Only drinks are allowed.", "It is allowed only in the evening."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How the Eiffel Tower was built",
          paragraphs: [
            "The Eiffel Tower was built for the 1889 World's Fair in Paris, which celebrated the hundredth anniversary of the French Revolution. The design was chosen from more than one hundred proposals in a competition. The engineering company of Gustave Eiffel won with a plan for an iron tower about three hundred meters tall, which would make it the tallest structure in the world at the time.",
            "Construction took just over two years, a remarkably short time for such a large structure. The tower was made of around eighteen thousand individual iron pieces, which were designed with great precision and manufactured in Eiffel's factory outside Paris. On the building site, workers assembled the pieces using millions of rivets, heated metal pins that were hammered into place. The tower's open lattice structure, made of crisscrossing iron beams, made it relatively light and allowed strong winds to pass through it, which was essential for its stability.",
            "Not everyone welcomed the tower. While it was being built, a group of famous artists and writers published a letter protesting against what they called a 'useless and monstrous' structure that would ruin the beauty of Paris. The tower was originally intended to stand for only twenty years. However, it proved valuable as a platform for radio antennas and scientific experiments, which helped save it from being taken down. Over time, Parisians came to love it, and today the Eiffel Tower is one of the most visited monuments in the world and a symbol of France.",
          ],
          questions: [
            { text: "According to paragraph 1, why was the Eiffel Tower built?", options: ["for the 1889 World's Fair", "as a radio station", "as a home for the king", "as a military tower"], answer: 0 },
            { text: "According to paragraph 2, where were the iron pieces made?", options: ["in Eiffel's factory outside Paris", "on the building site", "in another country", "in an old castle"], answer: 0 },
            { text: "The word \"essential\" in paragraph 2 is closest in meaning to", options: ["necessary", "beautiful", "expensive", "unusual"], answer: 0 },
            { text: "Why was the open lattice structure important?", options: ["It made the tower light and allowed wind to pass through.", "It made the tower easier to paint.", "It allowed people to climb it.", "It made the tower taller."], answer: 0 },
            { text: "What helped save the tower from being taken down?", options: ["its use for radio antennas and scientific experiments", "the protest letter", "a new law", "its use as a hotel"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Baking cookies with my aunt",
          text: "Last weekend, I visited my aunt, and we baked cook{{ies}} together. First, we washed our ha{{nds}} and put on aprons. My aunt showed me how to mix butter and su{{gar}} in a large bowl. Then we added eggs, flour and chocolate pie{{ces}}. I used a spoon to put small balls of dough on a tr{{ay}}. We baked them in the ov{{en}} for twelve minutes. The kitchen smelled wonder{{ful}}! When the cookies were ready, we let them cool and then put them in a bo{{x}}. I took some home for my par{{ents}}, and they loved th{{em}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Rollerskating night",
          text: [
            "ROLL INTO THE WEEKEND!",
            "Every Friday from 7 to 10 p.m., the Sports Hall becomes a roller rink with music and colorful lights. Skaters of all levels are welcome.",
            "Entry costs $6, and skates can be rented for $3. Helmets and knee pads are free to borrow. Children under ten must be accompanied by an adult.",
          ],
          questions: [
            { text: "When is the rollerskating night?", options: ["every Friday evening", "every Sunday morning", "once a month", "every weekday afternoon"], answer: 0 },
            { text: "What is free to borrow?", options: ["helmets and knee pads", "skates", "drinks", "music players"], answer: 0 },
            { text: "Who must come with an adult?", options: ["children under ten", "teenagers", "beginners", "everyone"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How dogs smell so well",
          paragraphs: [
            "Dogs have an amazing sense of smell. Scientists believe it is many thousands of times better than the human sense of smell.",
            "A dog's nose has hundreds of millions of special smell cells, while a human nose has only about six million. The part of a dog's brain that understands smells is also much larger than in humans.",
            "Dogs can even smell with each side of their nose separately, which helps them find where a smell is coming from. Because of this, dogs are trained to help people in many ways. They find lost people, check bags at airports and can even notice some illnesses by smell.",
          ],
          questions: [
            { text: "How does a dog's sense of smell compare with a human's?", options: ["It is many thousands of times better.", "It is about the same.", "It is weaker.", "It is only twice as good."], answer: 0 },
            { text: "How many smell cells does a human nose have?", options: ["about six million", "hundreds of millions", "about one hundred", "none"], answer: 0 },
            { text: "The word \"separately\" in paragraph 3 is closest in meaning to", options: ["one at a time", "together", "slowly", "loudly"], answer: 0 },
            { text: "Why does smelling with each side of the nose help dogs?", options: ["It helps them find where a smell comes from.", "It helps them breathe faster.", "It makes them run faster.", "It keeps their noses warm."], answer: 0 },
            { text: "What can trained dogs do?", options: ["find lost people and check bags at airports", "read books", "drive cars", "cook food"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Barnum effect",
          text: "Many people believe that horoscopes and personality tests describe them with surprising accu{{racy}}. In a famous experiment in 1948, a psychologist gave his stu{{dents}} a personality test and then gave each of them what he said was an individual descrip{{tion}}. In fact, every student received the same te{{xt}}, which contained general statements such as \"You have a great need for other people to like you\". On average, students rated the description as highly accu{{rate}}. This tendency to accept vague, general statements as perso{{nally}} meaningful is known as the Barnum ef{{fect}}, named after a famous circus owner who claimed to have \"something for every{{one}}\". The effect helps explain the popularity of fortune-telling and some online quiz{{zes}}, and it shows why people should be careful when interpreting such resu{{lts}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Research poster printing",
          text: [
            "To: Graduate students presenting at the Research Symposium",
            "From: Graduate Student Association",
            "Subject: Free poster printing for the symposium",
            "The Graduate Student Association will cover the cost of printing one research poster for each student presenting at the annual Research Symposium on April 10. Posters must be no larger than 90 by 120 centimeters.",
            "To use this service, upload your poster as a PDF file through the association's website by April 1. Posters submitted after this date will not be printed free of charge. Printed posters can be collected from the association office between April 7 and April 9. Please check spelling and image quality carefully, as reprints cannot be offered.",
          ],
          questions: [
            { text: "What will the association pay for?", options: ["printing one research poster for each presenter", "travel to the symposium", "registration fees", "lunch for presenters"], answer: 0 },
            { text: "What happens to posters submitted after April 1?", options: ["They will not be printed free of charge.", "They will be printed later.", "They will be rejected from the symposium.", "They will be printed in black and white."], answer: 0 },
            { text: "Why should students check spelling and image quality carefully?", options: ["Reprints cannot be offered.", "Posters will be graded.", "The printer is very slow.", "Posters will be published online."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The rise of esports",
          paragraphs: [
            "Esports, or electronic sports, are organized competitions in which professional players or teams compete in video games. Although people have competed in video games since the 1970s, esports have grown enormously in the past two decades. Major tournaments now fill large stadiums, and millions of viewers watch matches online through live streaming platforms. The best players can earn substantial incomes from prize money, salaries and sponsorships.",
            "Several factors have contributed to this growth. Fast internet connections allow players from around the world to compete with each other, and streaming platforms make it easy for fans to watch live matches and interact with players. Many popular games are free to play, which attracts large numbers of young players. Companies have invested heavily in professional leagues, and some universities now offer scholarships for esports players, treating them like traditional athletes.",
            "The rise of esports has also sparked debate. Some people question whether video games should be considered sports at all, since they do not require the same physical effort as football or swimming. Supporters respond that top players need extremely fast reactions, strategic thinking and teamwork, and that they train for many hours each day. Others worry about the health effects of spending long hours in front of screens, as well as problems such as gaming addiction. As the industry continues to grow, organizations are developing guidelines for player health, including regular breaks and physical exercise.",
          ],
          questions: [
            { text: "According to paragraph 1, how do top esports players earn money?", options: ["from prize money, salaries and sponsorships", "only from ticket sales", "by selling games", "from government grants"], answer: 0 },
            { text: "According to paragraph 2, why do many free-to-play games help esports grow?", options: ["They attract large numbers of young players.", "They are easier to win.", "They have no advertisements.", "They are played only in stadiums."], answer: 0 },
            { text: "The word \"substantial\" in paragraph 1 is closest in meaning to", options: ["large", "small", "unfair", "temporary"], answer: 0 },
            { text: "What argument do supporters make in paragraph 3?", options: ["Top players need fast reactions, strategic thinking and teamwork.", "Esports require more physical effort than football.", "Esports should be played only by children.", "Video games have no health effects."], answer: 0 },
            { text: "What are organizations doing in response to health concerns?", options: ["developing guidelines including regular breaks and exercise", "banning esports", "increasing playing hours", "removing streaming platforms"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Mehmet", prompt: "Why are you buying flowers?", chunks: ["it", "is", "my mother's", "birthday", "today"], end: "." },
      { promptBy: "Lily", prompt: "Did you enjoy the boat trip?", chunks: ["we", "saw", "some", "beautiful", "islands"], end: "." },
      { promptBy: "Selin", prompt: "I'm always late for class.", chunks: ["why don't", "you", "set", "your alarm", "earlier"], end: "?" },
      { promptBy: "Ryan", prompt: "How did you learn to play the drums?", chunks: ["I", "took", "lessons", "at", "a music school"], end: "." },
      { promptBy: "Sena", prompt: "When will the new shop open?", chunks: ["it", "will", "open", "at the end", "of the month"], end: "." },
      { promptBy: "Max", prompt: "Why is the street so quiet?", chunks: ["everyone", "is", "watching", "the football", "match"], end: "." },
      { promptBy: "Pınar", prompt: "What did you learn at the museum?", chunks: ["we", "learned", "about", "ancient", "Egyptian life"], end: "." },
      { promptBy: "Craig", prompt: "Where should I put my suitcase?", chunks: ["you", "can", "leave it", "next to", "the door"], end: "." },
      { promptBy: "Aylin", prompt: "My coffee is too hot.", chunks: ["should", "I", "add", "some", "cold milk"], end: "?" },
      { promptBy: "Owen", prompt: "Why did you choose to study history?", chunks: ["I", "love", "learning", "about", "the past"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You took part in a three-day volunteer program to plant trees in a national park. The program was well organized, but you think it could attract more volunteers. You want to write to the program coordinator.",
      to: "the program coordinator, Mr. Hughes",
      subject: "Feedback on the tree-planting program",
      tasks: ["Say what you enjoyed about the program.", "Explain why it may not attract many volunteers.", "Suggest ways to attract more volunteers."],
      sample: "Dear Mr. Hughes,\n\nI recently took part in the three-day tree-planting program at Green Valley National Park, and I wanted to thank you for such a well-organized and rewarding experience. I really enjoyed working with the rangers, who explained why each type of tree was chosen, and it was very satisfying to see the hundreds of young trees we planted on the last day.\n\nHowever, I noticed that there were only twelve volunteers, although the park could clearly use many more. I think one reason is that very few people know about the program. I only found out about it by chance through a friend. In addition, the program runs from Wednesday to Friday, which makes it difficult for students and people with full-time jobs to take part.\n\nTo attract more volunteers, I would suggest advertising the program at universities and on social media, perhaps with photos and short videos from this year's event. It would also help to offer a weekend option or allow people to join for just one day. I would be happy to help share information at my university.\n\nThank you again for a wonderful experience.\n\nBest regards,\nDeniz Uslu",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Hayes",
        text: "Many young people today say they would rather work for a company whose values match their own, even if it pays less. Others believe that salary and job security should be the most important factors when choosing a job. What is more important when choosing a job: matching values or higher pay? Explain your view.",
      },
      students: [
        { name: "Isabel", text: "Matching values. If you believe in what your company does, you'll be more motivated and happier at work." },
        { name: "Yusuf", text: "Higher pay. Values are nice, but you need a good salary to pay rent, support a family and save for the future." },
      ],
      sample: "I believe that both matter, but for most people, a reasonable salary should come first, and matching values should be the deciding factor between jobs that pay enough. Yusuf is right that financial security is essential. Without enough income to pay rent, support a family and save for emergencies, it is difficult to feel satisfied, no matter how meaningful the work is. However, Isabel makes an important point about motivation. People who believe in their company's mission often feel more engaged, work harder and stay longer, and working for an organization whose actions conflict with one's values can cause stress. Therefore, I would advise people to set a minimum salary they need and then choose, among jobs that meet that level, the one whose values best match their own.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new employee at a shoe store. Your manager is telling you what to say to customers.",
      sentences: [
        "Hello, can I help you find a pair?",
        "What size do you usually wear?",
        "These running shoes are very light.",
        "Please try them on over here.",
        "We have this model in three colors.",
        "If the shoes feel too tight, I can bring you a half size bigger to try.",
        "Customers who join our free loyalty club receive a discount on their birthday and early access to our seasonal sales.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about hobbies and free time. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is a hobby you have, and how did you start it?",
          sample: "One of my hobbies is playing the guitar. I started when I was fourteen, after my uncle gave me his old guitar. At first, I taught myself by watching online videos, and later I took lessons at a music school. Now I play almost every evening to relax, and sometimes I play at small events with friends. It's a great way to express myself and take a break from studying.",
        },
        {
          text: "Do you think hobbies are important for adults?",
          sample: "Yes, I think hobbies are very important for adults. Many adults have stressful jobs and family responsibilities, and hobbies give them time to relax and do something they enjoy. Hobbies can also help people learn new skills, meet others with similar interests and stay physically or mentally active. Even a simple hobby, like gardening or reading, can improve people's mood and make life more balanced.",
        },
        {
          text: "Are video games a good hobby?",
          sample: "I think video games can be a good hobby if they are played in moderation. Many games require problem-solving, creativity and teamwork, especially when people play with friends online. They can also be a fun way to relax. However, spending too many hours playing can lead to problems like poor sleep or less physical activity. So I'd say video games are fine as long as people balance them with other activities.",
        },
        {
          text: "Should schools encourage students to develop hobbies?",
          sample: "Yes, I believe schools should encourage students to develop hobbies. Clubs for music, art, sports or science can help students discover their talents and interests outside regular lessons. Hobbies also teach important skills like discipline, patience and cooperation. In addition, they can reduce stress and help students make friends. Schools could organize after-school clubs and give students opportunities to share their hobbies with others.",
        },
      ],
    },
  },
};
