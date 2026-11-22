import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 65 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_65: ToeflTest = {
  id: "toefl-65",
  no: 65,
  title: "TOEFL iBT Practice Test 65",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Hairbrushes",
          text: "People have taken care of their hair for thousands of years. Archaeologists have found combs made of bone, wood and ivory in many ancient civil{{izations}}. Brushes with bristles appeared much la{{ter}}. Early hairbrushes were made by hand, using animal hair attached to wooden han{{dles}}, and they were expensive items owned mainly by the wea{{lthy}}. In the nineteenth century, an inventor in England patented a brush with bristles fixed into a rubber cush{{ion}}, which made brushing more comfor{{table}}. Later, factories began to produce brushes in large num{{bers}}, and nylon bristles replaced animal ha{{ir}}. Today, there are brushes for every type of ha{{ir}}, and hairdressers say that choosing the right one can reduce dam{{age}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Gift for our teacher",
          text: [
            "Hi everyone! Ms. Aydın is retiring at the end of this term, and I thought our class could buy her a gift together.",
            "If each of us gives $5, we can buy her a nice plant and a card that everyone signs. Please bring the money to school by Thursday!",
          ],
          questions: [
            { text: "Why does the writer want to buy a gift?", options: ["Ms. Aydın is retiring.", "It is Ms. Aydın's birthday.", "Ms. Aydın is moving to another school.", "The class won a competition."], answer: 0 },
            { text: "What does the writer suggest buying?", options: ["a plant and a card", "a book", "flowers and chocolates", "a watch"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Smoke-free campus",
          text: [
            "OUR CAMPUS IS NOW SMOKE-FREE",
            "From January 1, smoking and the use of electronic cigarettes are not permitted anywhere on university property, including outdoor areas, parking lots and inside vehicles parked on campus.",
            "The university health center offers free programs and advice for students and staff who would like to quit smoking. Repeated violations of this policy may result in a fine.",
          ],
          questions: [
            { text: "Where is smoking no longer permitted?", options: ["anywhere on university property", "only inside buildings", "only in the library", "only in parking lots"], answer: 0 },
            { text: "What does the health center offer?", options: ["free programs to help people quit smoking", "free electronic cigarettes", "a smoking area", "free parking"], answer: 0 },
            { text: "What may happen after repeated violations?", options: ["a fine", "expulsion from university", "a free course", "nothing"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The Great Smog of London",
          paragraphs: [
            "In December 1952, a thick, yellow-black fog settled over London and remained for five days. Visibility fell to just a few meters in some places, and buses and ambulances could barely move. People walking in the street could not see their own feet. The event, which became known as the Great Smog, was not ordinary fog but a deadly mixture of fog and air pollution.",
            "At the time, millions of London homes were heated by burning coal, and many factories and power stations also burned coal. Normally, smoke from these sources rose and was carried away by the wind. During the Great Smog, however, a mass of cold air became trapped close to the ground beneath a layer of warmer air above, a condition known as a temperature inversion. Without wind, the smoke and gases had nowhere to go. Particles of soot and sulfur dioxide combined with the fog, creating a toxic cloud that people breathed in day and night.",
            "Doctors soon noticed a sharp rise in deaths, especially among elderly people and those with heart or lung diseases. Initial estimates suggested around four thousand deaths, but later research concluded that the total, including deaths in the following months, may have exceeded ten thousand. The disaster led to major changes in public policy. In 1956, the British Parliament passed the Clean Air Act, which created zones where only smokeless fuels could be burned and encouraged a shift to cleaner forms of heating. The Great Smog is often seen as a turning point in the history of environmental regulation, showing how air pollution can be a direct and immediate threat to human health.",
          ],
          questions: [
            { text: "According to paragraph 1, what was the Great Smog?", options: ["a deadly mixture of fog and air pollution", "an ordinary winter fog", "a snowstorm", "smoke from a single fire"], answer: 0 },
            { text: "According to paragraph 2, why did the smoke not rise and blow away?", options: ["Cold air was trapped near the ground under warmer air, and there was no wind.", "The smoke was too heavy.", "Factories stopped working.", "It rained continuously."], answer: 0 },
            { text: "The word \"toxic\" in paragraph 2 is closest in meaning to", options: ["poisonous", "colorful", "cold", "thick"], answer: 0 },
            { text: "According to paragraph 3, what did later research conclude about the number of deaths?", options: ["It may have exceeded ten thousand.", "It was fewer than one hundred.", "It was exactly four thousand.", "No one died."], answer: 0 },
            { text: "What was one result of the Great Smog?", options: ["The Clean Air Act was passed.", "Coal use increased.", "London's population fell sharply.", "Factories moved into the city center."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My best friend's visit",
          text: "My best friend Elif moved to another city last ye{{ar}}. Last month, she came to visit me for a whole we{{ek}}. I was so exci{{ted}}! On the first day, we went to our old sch{{ool}} and said hello to our teachers. Then we ate ice cream in the pa{{rk}}, just like before. One evening, we watched a fun{{ny}} film and laughed until midnight. We also took many pho{{tos}} together. When she left, we both cr{{ied}} a little. But we promised to call each other every wee{{kend}}, and I will visit her next sum{{mer}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Lantern festival",
          text: [
            "JOIN THE LANTERN FESTIVAL!",
            "Come to the Riverside Lantern Festival on Saturday, September 20, from 6 to 10 p.m. Enjoy music, street food and hundreds of colorful lanterns along the river.",
            "Children can make their own paper lanterns at the craft tent from 6 to 8 p.m. for $3. At 9 p.m., everyone will walk together with their lanterns across the old bridge. Entry is free.",
          ],
          questions: [
            { text: "When is the festival?", options: ["Saturday, September 20, from 6 to 10 p.m.", "every Saturday in September", "Sunday morning", "all week"], answer: 0 },
            { text: "What can children do at the craft tent?", options: ["make their own paper lanterns", "paint faces", "learn to dance", "buy toys"], answer: 0 },
            { text: "What happens at 9 p.m.?", options: ["Everyone walks across the old bridge with lanterns.", "The festival ends.", "Fireworks begin.", "Food stalls close."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How pandas live on bamboo",
          paragraphs: [
            "Giant pandas live in the mountain forests of China. They are famous for their black and white fur and for eating bamboo.",
            "Bamboo makes up almost all of a panda's diet. But bamboo has very little energy, so pandas must eat a lot of it. An adult panda can spend more than twelve hours a day eating, and it may eat over twelve kilograms of bamboo.",
            "Pandas have strong jaws and large back teeth to crush the tough bamboo. They also have a special bone in their wrist that works like a thumb, which helps them hold the bamboo stems. To save energy, pandas move slowly and rest a lot.",
          ],
          questions: [
            { text: "Where do giant pandas live?", options: ["in the mountain forests of China", "in African grasslands", "in the Arctic", "in South American rainforests"], answer: 0 },
            { text: "Why must pandas eat a lot of bamboo?", options: ["Bamboo has very little energy.", "Bamboo is very sweet.", "Bamboo grows quickly.", "Pandas are always hungry."], answer: 0 },
            { text: "The word \"crush\" in paragraph 3 is closest in meaning to", options: ["press and break", "wash", "plant", "throw"], answer: 0 },
            { text: "What helps pandas hold bamboo stems?", options: ["a special bone in their wrist", "their tails", "their ears", "their back feet"], answer: 0 },
            { text: "How do pandas save energy?", options: ["by moving slowly and resting a lot", "by sleeping in the sun", "by eating meat", "by swimming"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Hedonic adaptation",
          text: "Many people believe that a big life change, such as winning money or buying a new house, will make them happier for a long ti{{me}}. However, research suggests that people quickly get used to both positive and negative chan{{ges}}. Psychologists call this hedonic adap{{tation}}. In a famous study, people who had won large lottery pri{{zes}} were not significantly happier a year later than people who had not w{{on}}. Similarly, people who experience serious setb{{acks}} often recover more of their happiness than they would have predi{{cted}}. Adaptation may help people cope with diffi{{culties}}, but it also means that new possessions rarely bring lasting joy. Some researchers suggest that spending money on experi{{ences}} rather than objects may slow this pro{{cess}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Graduation ceremony tickets",
          text: [
            "To: Students graduating this June",
            "From: Office of Student Affairs",
            "Subject: Requesting guest tickets for the graduation ceremony",
            "Each graduating student may request up to four guest tickets for the graduation ceremony on June 28. Requests must be submitted through the student portal by May 31. Because of limited space in the hall, additional tickets cannot be guaranteed.",
            "After May 31, any remaining seats will be offered to students who requested extra tickets, in the order in which their requests were received. Guests who do not have tickets will be able to watch the ceremony on a large screen in the garden outside the hall or online through a live stream. Children under two years old do not need a ticket.",
          ],
          questions: [
            { text: "How many guest tickets can each student request?", options: ["up to four", "two", "unlimited", "six"], answer: 0 },
            { text: "How will remaining seats be distributed after May 31?", options: ["in the order requests for extra tickets were received", "randomly", "to faculty members only", "to the best students"], answer: 0 },
            { text: "How can guests without tickets watch the ceremony?", options: ["on a large screen outside or online", "they cannot watch it", "by standing at the back of the hall", "by buying tickets at the door"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Tourism and small islands",
          paragraphs: [
            "For many small island nations, such as the Maldives, Fiji and several Caribbean states, tourism is the most important part of the economy. Beautiful beaches, warm weather and coral reefs attract millions of visitors each year, and the money they spend on hotels, restaurants and activities can account for a large share of national income and employment. In places with few other natural resources and limited land for agriculture or industry, tourism may offer one of the few opportunities for economic development.",
            "However, heavy dependence on tourism carries serious risks. Because so much of the economy relies on a single industry, island nations are extremely vulnerable to events beyond their control, such as global economic crises, natural disasters and pandemics. When international travel almost stopped in 2020, many island economies suffered severe losses. In addition, much of the money spent by tourists may leave the country, for example when hotels are owned by foreign companies or when food and supplies must be imported.",
            "Tourism can also put pressure on fragile island environments. Large numbers of visitors increase demand for fresh water, which is often scarce on small islands, and generate waste that is difficult to dispose of. Construction along coastlines can damage coral reefs and mangroves that protect islands from storms. In response, some island governments are promoting more sustainable forms of tourism, such as limiting the number of visitors, charging environmental fees and encouraging locally owned guesthouses. Climate change adds a further challenge, since rising sea levels and coral bleaching threaten the very attractions on which island tourism depends.",
          ],
          questions: [
            { text: "According to paragraph 1, why is tourism especially important for many small islands?", options: ["They have few other natural resources and limited land.", "They have large industries.", "They are close to major cities.", "They have no beaches."], answer: 0 },
            { text: "According to paragraph 2, why are island economies vulnerable?", options: ["They rely heavily on a single industry.", "They have too many industries.", "They do not accept tourists.", "They export too much food."], answer: 0 },
            { text: "The word \"fragile\" in paragraph 3 is closest in meaning to", options: ["easily damaged", "very large", "dry", "crowded"], answer: 0 },
            { text: "Why might tourist spending leave the country?", options: ["Hotels may be foreign-owned and supplies imported.", "Tourists pay with foreign coins.", "Islands have no banks.", "Governments refuse tourist money."], answer: 0 },
            { text: "According to paragraph 3, why does climate change pose a challenge to island tourism?", options: ["It threatens the attractions tourism depends on.", "It makes the weather colder.", "It reduces the number of hotels.", "It makes flights cheaper."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ozan", prompt: "Why are you learning to drive?", chunks: ["I", "want to", "visit", "my grandparents", "more often"], end: "." },
      { promptBy: "Megan", prompt: "Did you like the art exhibition?", chunks: ["the paintings", "were", "bright", "and full", "of energy"], end: "." },
      { promptBy: "Sinem", prompt: "I'm not sure how to start my essay.", chunks: ["why don't", "you", "begin", "with", "an interesting question"], end: "?" },
      { promptBy: "Paul", prompt: "How long have you been playing tennis?", chunks: ["I", "have", "played", "since", "I was ten"], end: "." },
      { promptBy: "Elçin", prompt: "When does the bakery open on Sundays?", chunks: ["it", "opens", "at", "eight", "in the morning"], end: "." },
      { promptBy: "Jake", prompt: "Why is the river so high?", chunks: ["it", "has", "rained", "all", "week"], end: "." },
      { promptBy: "Ayten", prompt: "What did you think of the concert?", chunks: ["the singer", "had", "an", "amazing", "voice"], end: "." },
      { promptBy: "Chris", prompt: "Where are you staying in Paris?", chunks: ["we", "rented", "an apartment", "near", "the river"], end: "." },
      { promptBy: "Tuğba", prompt: "My coffee is cold.", chunks: ["would you", "like", "me", "to heat", "it up"], end: "?" },
      { promptBy: "Liam", prompt: "Why did you join the volunteer group?", chunks: ["I", "wanted to", "meet", "people", "who care about nature"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently attended a weekend yoga retreat in the countryside. The retreat was excellent, but the accommodation did not match the description on the website. You want to write to the organizer.",
      to: "the retreat organizer, Ms. Garcia",
      subject: "Feedback on the weekend retreat",
      tasks: ["Say what you enjoyed about the retreat.", "Describe the problem with the accommodation.", "Explain what you would like the organizer to do."],
      sample: "Dear Ms. Garcia,\n\nI attended the weekend yoga retreat at Olive Valley from May 9 to 11, and I wanted to share some feedback. First of all, I really enjoyed the experience. The instructors were knowledgeable and encouraging, the meditation sessions in the garden were very relaxing, and the vegetarian meals were delicious.\n\nHowever, I was disappointed with the accommodation. The website described single rooms with private bathrooms and views of the valley, and I paid extra for this option. Instead, I was given a small shared room with two other participants, and the bathroom was at the end of the hallway, shared by several rooms. The window also faced the parking area. When I mentioned this at the reception, I was told that the single rooms had been overbooked.\n\nI would like to request a refund of the extra amount I paid for the private room, which was $120. I would also suggest updating the website so that future guests know exactly what to expect. Despite this problem, I would be happy to attend another retreat in the future.\n\nKind regards,\nNazlı Özkan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Economics",
      professor: {
        name: "Dr. Patel",
        text: "Some cities are considering making public transportation completely free for all residents. Supporters argue that this would reduce traffic and pollution and help low-income families. Critics say it would be extremely expensive and that the money would be better spent improving the quality of service. Should public transportation be free? Explain your view.",
      },
      students: [
        { name: "Laura", text: "Yes. If buses and trains were free, many more people would use them instead of cars, which would be good for the environment and for people's budgets." },
        { name: "Hakan", text: "No. Free transport sounds nice, but the system would become overcrowded and underfunded. It's better to keep fares low and invest in more frequent service." },
      ],
      sample: "I think making public transportation completely free is an attractive idea, but in most cities it would be better to keep low fares and invest in quality. Laura is right that cost can be a barrier for low-income residents, and free transport could encourage some people to leave their cars at home. A few cities that have introduced free transport have seen ridership increase. However, Hakan raises an important concern. Fares often cover a significant part of operating costs, and without that money, cities might struggle to maintain vehicles or expand services. Studies also suggest that many people choose cars because public transport is slow or unreliable, not because it is expensive. A better approach may be to offer free or heavily discounted passes for students, elderly people and low-income residents while improving frequency and reliability for everyone.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new staff member at an airport information desk. Your supervisor is telling you what to say to travelers.",
      sentences: [
        "Good morning, how can I help you?",
        "Check-in is on the second floor.",
        "Please show your boarding pass at security.",
        "Liquids must be in small containers.",
        "The train to the city leaves every twenty minutes.",
        "If your luggage is missing, please go to the baggage service office next to carousel five.",
        "Free wireless internet is available throughout the airport, and you can connect by selecting the airport network and entering your email address.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with gifts and celebrations. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is the best gift you have ever received?",
          sample: "The best gift I've ever received was a photo album that my sister made for my eighteenth birthday. She secretly collected photos from my childhood, school trips and family holidays, and she wrote small notes next to each picture. It must have taken her weeks. It wasn't expensive, but it was so personal and thoughtful that I almost cried when I opened it. I still look through it whenever I feel homesick.",
        },
        {
          text: "Do you prefer giving gifts or receiving them?",
          sample: "I think I actually prefer giving gifts. I enjoy thinking about what someone would really like and then seeing their reaction when they open it. It makes me feel closer to them. Of course, I also like receiving gifts, but sometimes I feel a little uncomfortable being the center of attention. Giving a gift that someone truly appreciates is one of the nicest feelings.",
        },
        {
          text: "Do you think people spend too much money on celebrations like weddings and birthdays?",
          sample: "In many cases, yes. Some families spend enormous amounts of money on weddings, sometimes even borrowing money, just to impress guests. I think celebrations are important, but they don't need to be expensive to be meaningful. What people usually remember is the atmosphere and spending time with loved ones, not the size of the venue or the number of guests. A smaller, simpler celebration can be just as special.",
        },
        {
          text: "How have celebrations in your country changed over time?",
          sample: "Celebrations in my country have changed quite a lot. In the past, weddings and holidays were usually celebrated at home with large extended families, and neighbors often helped prepare the food. Today, many celebrations take place in restaurants or event halls, and families are often smaller and more spread out. Social media has also changed things, as people now share photos of every celebration online. However, many traditional customs, like visiting elderly relatives during holidays, are still very important.",
        },
      ],
    },
  },
};
