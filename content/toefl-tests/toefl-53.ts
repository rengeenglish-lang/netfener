import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 53 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_53: ToeflTest = {
  id: "toefl-53",
  no: 53,
  title: "TOEFL iBT Practice Test 53",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Vending machines",
          text: "Vending machines may seem like a modern invention, but the idea is very o{{ld}}. Around two thousand years ago, a Greek engineer named Hero of Alexandria described a machine that gave out a small amount of holy wa{{ter}} when a coin was dropped into it. The weight of the co{{in}} pressed on a lever that opened a valve. Modern vending machines appeared in the late nineteenth cen{{tury}}, when machines in London sold postcards and machines in the United States sold chew{{ing}} gum on train plat{{forms}}. Today, vending machines sell snacks, drinks, tickets and even hot me{{als}}. In some countries, such as Japan, they can be found on almost every str{{eet}}, and many accept payment by ph{{one}} or ca{{rd}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Can you record the lecture?",
          text: [
            "Hi Kaan! I have a dentist appointment tomorrow at 10, so I'll miss the first half of the economics lecture. Could you record it on your phone for me?",
            "The professor said it's okay to record as long as we don't share it online. I'll sit next to you for the second half!",
          ],
          questions: [
            { text: "Why will the writer miss part of the lecture?", options: ["The writer has a dentist appointment.", "The writer has another class.", "The writer is traveling.", "The writer is sick."], answer: 0 },
            { text: "What condition did the professor give about recording?", options: ["It must not be shared online.", "It must be deleted after a day.", "Only the first half may be recorded.", "It must be approved in writing."], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Stairwell repainting",
          text: [
            "PAINTING WORK – NORTH STAIRWELL",
            "The north stairwell of the Engineering Building will be repainted from Monday to Thursday next week. During this time, the stairwell will be closed between 8 a.m. and 6 p.m.",
            "Please use the south stairwell or the elevators instead. The paint used is low in odor and safe, but anyone with breathing difficulties may prefer to avoid the area. The stairwell will remain open for emergency evacuation at all times.",
          ],
          questions: [
            { text: "What will happen in the north stairwell?", options: ["It will be repainted.", "It will be demolished.", "New lights will be installed.", "It will be cleaned."], answer: 0 },
            { text: "What should people use instead?", options: ["the south stairwell or the elevators", "the fire escape only", "the north stairwell at night", "another building"], answer: 0 },
            { text: "What is true about the stairwell during emergencies?", options: ["It will remain open for evacuation.", "It will be locked.", "It will be closed all week.", "It can only be used by staff."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How hot springs form",
          paragraphs: [
            "Hot springs are places where naturally heated water flows out of the ground. They are found on every continent, and people have bathed in them for thousands of years, often believing that the warm, mineral-rich water has healing properties. Famous examples include the terraces of Pamukkale in Turkey, the onsen of Japan and the geothermal pools of Iceland.",
            "Most hot springs form when rainwater or melted snow seeps deep into the ground through cracks and porous rock. The deeper the water travels, the warmer it becomes, because temperatures inside the Earth rise with depth. In volcanic regions, water can be heated much more quickly by hot rock or magma relatively close to the surface. Heated water becomes less dense and rises back toward the surface through faults and fractures, emerging as a hot spring. During its journey, the water dissolves minerals from the surrounding rock, such as calcium, sulfur and silica.",
            "These dissolved minerals can create spectacular landscapes. At Pamukkale, for example, water rich in calcium carbonate flows down a hillside, and as it cools and releases carbon dioxide, the calcium carbonate is deposited as white limestone, forming terraces and pools. Hot springs also support unusual forms of life. Some bacteria thrive in water close to boiling point, and scientists study them to understand how life might survive in extreme environments, possibly even on other planets. Enzymes from such heat-loving bacteria are now widely used in medical and scientific research.",
          ],
          questions: [
            { text: "According to paragraph 1, why have people bathed in hot springs for thousands of years?", options: ["They often believed the water had healing properties.", "The water was cold and refreshing.", "There were no other sources of water.", "It was required by law."], answer: 0 },
            { text: "The word \"porous\" in paragraph 2 is closest in meaning to", options: ["full of tiny holes", "very hard", "very hot", "smooth"], answer: 0 },
            { text: "According to paragraph 2, why does heated water rise back to the surface?", options: ["It becomes less dense.", "It is pumped by people.", "It freezes underground.", "It is pushed by wind."], answer: 0 },
            { text: "How were the white terraces at Pamukkale formed?", options: ["Calcium carbonate was deposited as the water cooled.", "Snow covered the hillside.", "People built them from stone.", "Volcanic ash settled there."], answer: 0 },
            { text: "Why do scientists study bacteria in hot springs?", options: ["to understand how life might survive in extreme environments", "to make the water cleaner", "to remove them from the springs", "to heat the water"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My sister's birthday party",
          text: "Last Saturday was my little sister's sixth birth{{day}}. My parents organized a party in our gar{{den}}. Ten of her friends came, and everyone wore funny ha{{ts}}. We played games and ran around until we were ti{{red}}. My mother made a big chocolate ca{{ke}} with six candles on top. When my sister blew out the can{{dles}}, everyone sang \"Happy Birthday\". She opened her pres{{ents}} after lunch. Her favorite gift was a red bicy{{cle}} from our grandparents. At the end of the day, she said it was the best par{{ty}} ever. I helped my parents clean up the gar{{den}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Basketball summer camp",
          text: [
            "BASKETBALL SUMMER CAMP!",
            "Boys and girls aged 10 to 15 can improve their basketball skills at our one-week summer camp at City Sports Hall, from 9 a.m. to 3 p.m., Monday to Friday.",
            "Professional coaches will teach shooting, passing and teamwork. The camp costs $120, and every player gets a team T-shirt. Please bring a water bottle and a packed lunch every day.",
          ],
          questions: [
            { text: "Who can join the camp?", options: ["boys and girls aged 10 to 15", "adults only", "professional players", "children under 8"], answer: 0 },
            { text: "What does every player receive?", options: ["a team T-shirt", "a basketball", "free lunch", "a trophy"], answer: 0 },
            { text: "What should players bring every day?", options: ["a water bottle and a packed lunch", "a basketball", "a towel and shampoo", "money for snacks"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How seahorses raise their young",
          paragraphs: [
            "Seahorses are small fish with heads that look like the heads of horses. They live in warm, shallow seas and hold onto sea grass with their curly tails.",
            "Seahorses are unusual because the fathers carry the babies. The mother places her eggs into a special pouch on the father's belly. The father keeps the eggs safe in the pouch for two to four weeks.",
            "When the babies are ready, the father pushes them out into the water. Hundreds of tiny seahorses can be born at once. They must take care of themselves from the first day, and only a few grow into adults.",
          ],
          questions: [
            { text: "Where do seahorses live?", options: ["in warm, shallow seas", "in rivers", "in cold, deep oceans", "in lakes"], answer: 0 },
            { text: "How do seahorses hold onto sea grass?", options: ["with their curly tails", "with their mouths", "with their fins", "with their heads"], answer: 0 },
            { text: "What is unusual about seahorses?", options: ["The fathers carry the babies.", "They can fly.", "They live on land.", "They have no eyes."], answer: 0 },
            { text: "The word \"pouch\" in paragraph 2 is closest in meaning to", options: ["a pocket", "a shell", "a nest in the sand", "a fin"], answer: 0 },
            { text: "What happens to the babies after they are born?", options: ["They must take care of themselves.", "Their parents feed them for months.", "They stay in the pouch.", "They live with their mother."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The illusion of control",
          text: "People often believe they have more influence over events than they actually do. Psychologists call this tendency the illusion of con{{trol}}. In one experiment, participants who chose their own lottery tic{{kets}} valued them more highly than participants who were simply han{{ded}} a ticket, even though the chance of win{{ning}} was exactly the same. Similarly, people playing dice games often throw harder when they want a high num{{ber}}. The illusion is especially strong when a situation inclu{{des}} elements associated with skill, such as choice, practice or compe{{tition}}. It may help people stay moti{{vated}}, but it can also lead to risky deci{{sions}}, for example in gamb{{ling}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Peer review of essays",
          text: [
            "To: Students in Academic Writing 102",
            "From: Ms. Clarke, Course Instructor",
            "Subject: Peer review session next week",
            "Next Tuesday's class will be a peer review session. Please bring two printed copies of the complete first draft of your argumentative essay. You will exchange drafts with two classmates and give written feedback using the checklist posted on the course website.",
            "Your feedback should focus on the clarity of the thesis, the strength of the evidence and the organization of paragraphs, rather than on small grammar mistakes. Participation in the session counts toward your class participation grade. Students who do not bring a draft will not be able to take part and will lose these points.",
          ],
          questions: [
            { text: "What should students bring to the session?", options: ["two printed copies of their first draft", "their final essay", "a laptop", "a grammar book"], answer: 0 },
            { text: "What should feedback focus on?", options: ["the thesis, evidence and organization", "small grammar mistakes", "handwriting", "the length of the essay only"], answer: 0 },
            { text: "What happens to students who do not bring a draft?", options: ["They cannot take part and lose participation points.", "They must write a new essay.", "They receive a failing grade for the course.", "They can submit it later without penalty."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Putting a price on carbon",
          paragraphs: [
            "Many economists argue that one of the most effective ways to reduce greenhouse gas emissions is to put a price on carbon. The basic idea is that when businesses and consumers burn fossil fuels, they impose costs on society, such as damage from climate change, that are not reflected in the price they pay. Economists call such costs 'externalities'. By making polluters pay for their emissions, a carbon price aims to include these hidden costs in market prices.",
            "There are two main approaches. A carbon tax sets a fixed price per ton of carbon dioxide emitted, giving businesses certainty about costs but leaving the total amount of emissions uncertain. A cap-and-trade system, by contrast, sets a limit on total emissions and issues a fixed number of permits, which companies can buy and sell. Companies that reduce their emissions cheaply can sell their extra permits to companies for which reductions are more expensive. This approach guarantees a certain level of emissions but allows the price of permits to vary.",
            "Supporters argue that carbon pricing encourages innovation, since businesses have a financial reason to develop cleaner technologies, and it allows reductions to happen where they are cheapest. Critics point out that carbon prices can raise energy costs for households, which may hit low-income families hardest, and that industries may move to countries without carbon prices. To address these concerns, some governments return the money raised to citizens as direct payments or use it to reduce other taxes, while others have proposed charges on imports from countries without similar policies.",
          ],
          questions: [
            { text: "According to paragraph 1, what are 'externalities'?", options: ["costs imposed on society that are not reflected in prices", "taxes paid by consumers", "profits made by companies", "products sold abroad"], answer: 0 },
            { text: "According to paragraph 2, what is an advantage of a carbon tax?", options: ["It gives businesses certainty about costs.", "It guarantees a certain level of emissions.", "It allows companies to trade permits.", "It eliminates all emissions."], answer: 0 },
            { text: "The word \"guarantees\" in paragraph 2 is closest in meaning to", options: ["ensures", "prevents", "estimates", "reduces"], answer: 0 },
            { text: "According to paragraph 3, why might carbon pricing encourage innovation?", options: ["Businesses have a financial reason to develop cleaner technologies.", "Governments pay for all research.", "Fossil fuels become cheaper.", "Companies must close."], answer: 0 },
            { text: "How do some governments address concerns about higher energy costs?", options: ["by returning the money raised to citizens or reducing other taxes", "by banning carbon pricing", "by increasing all taxes", "by lowering energy production"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Erkan", prompt: "Why are you wearing a raincoat?", chunks: ["the forecast", "said", "there would be", "storms", "this afternoon"], end: "." },
      { promptBy: "Jenny", prompt: "Did you visit the castle?", chunks: ["we", "spent", "the whole", "morning", "exploring it"], end: "." },
      { promptBy: "Gülşen", prompt: "I'm worried about my job interview.", chunks: ["why don't", "you", "prepare", "answers to", "common questions"], end: "?" },
      { promptBy: "Tom", prompt: "How often do you go swimming?", chunks: ["I", "go", "to the pool", "twice", "a week"], end: "." },
      { promptBy: "Aslı", prompt: "When does the bookstore open?", chunks: ["it", "opens", "at nine", "every", "morning"], end: "." },
      { promptBy: "Rick", prompt: "Why is the office so quiet today?", chunks: ["most", "of the staff", "are", "at a", "conference"], end: "." },
      { promptBy: "Hatice", prompt: "What did you think of the play?", chunks: ["the actors", "were", "excellent", "but", "the story was confusing"], end: "." },
      { promptBy: "Sean", prompt: "Where did you learn to dance?", chunks: ["I", "took", "lessons", "at", "a local studio"], end: "." },
      { promptBy: "Melike", prompt: "I need help with my statistics homework.", chunks: ["would you", "like", "to study", "together", "this evening"], end: "?" },
      { promptBy: "Paul", prompt: "Why did you change your phone number?", chunks: ["I", "was getting", "too many", "unwanted", "calls"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You bought a monthly pass for a city bike-sharing service, but the app has been charging you for each ride as if you didn't have a pass. You want to contact the company.",
      to: "the customer support team",
      subject: "Incorrect charges on my monthly pass",
      tasks: ["Explain when you bought the pass.", "Describe the problem with the charges.", "Say what you would like the company to do."],
      sample: "Dear Customer Support Team,\n\nI am writing about a problem with my account. On September 1, I bought a monthly pass for $25 through your app, which should allow unlimited rides of up to forty-five minutes each. I have the confirmation email and receipt for this purchase.\n\nHowever, since then, I have been charged separately for every ride I have taken, as if I did not have a pass. I have used the service to ride to work almost every day, so I have now been charged for twenty-two rides, totaling $44. When I open the app, it still shows that my pass is active, so I do not understand why these charges are being made.\n\nI would like you to refund all the charges for rides taken since September 1 and to fix the problem so that it does not happen again. I would also appreciate it if you could confirm by email when the refund has been processed. I have attached screenshots of my pass and the charges for your reference.\n\nThank you for your assistance.\n\nBest regards,\nOnur Şimşek",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Business Ethics",
      professor: {
        name: "Dr. Watts",
        text: "Many companies use social media influencers to promote their products. Influencers are paid to share posts or videos showing them using certain products. Some people believe this is a modern and effective form of advertising. Others think it can mislead followers, especially young people, who may not realize the posts are advertisements. Should influencer advertising be more strictly regulated? Why or why not?",
      },
      students: [
        { name: "Sophie", text: "Yes. Many young followers trust influencers like friends. If a post is paid for, it should always be clearly labeled, and there should be penalties for hiding it." },
        { name: "Cem", text: "I don't think more rules are needed. People know influencers are paid. Too much regulation could hurt small creators who depend on sponsorships." },
      ],
      sample: "I believe influencer advertising should be more strictly regulated, mainly through clear labeling rules that are actually enforced. Sophie makes an important point: many followers, especially teenagers, see influencers as trusted friends rather than as salespeople. When a recommendation is secretly paid for, followers may buy products they would not otherwise choose, sometimes including diet products or financial services that can be harmful. Clear labels such as 'paid partnership' allow people to judge content fairly. However, Cem is right that regulation should not be so complicated that it harms small creators. The rules should be simple, apply equally to everyone and focus on transparency rather than banning sponsorships. Platforms could also help by adding automatic labels to sponsored posts.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are starting a job at a university student services office. Your supervisor is explaining what to tell students.",
      sentences: [
        "Hello, how can I help you today?",
        "Please take a number and wait.",
        "Student cards are printed in this office.",
        "You will need a photo and your passport.",
        "Replacement cards cost ten dollars each.",
        "If you need a letter confirming your enrollment, you can request it online and collect it the next day.",
        "For questions about tuition payments or scholarships, please visit the finance office on the second floor, which is open from nine until four.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about cities and transportation. The researcher will ask you some questions.",
      questions: [
        {
          text: "How do you usually travel around your city?",
          sample: "I usually travel around my city by metro and bus. I have a student transport card, which makes public transport quite cheap, and the metro is fast because it avoids traffic. For short distances, I prefer to walk, especially when the weather is nice. I don't have a car, and I don't really need one, because almost everything I need is close to a metro station.",
        },
        {
          text: "What could your city do to improve public transportation?",
          sample: "My city could improve public transportation by running buses more often, especially in the evenings and on weekends, when people sometimes wait more than twenty minutes. It would also help to build more metro lines to reach neighborhoods on the edge of the city. In addition, there should be more bike lanes that connect with metro stations, so that people could combine cycling and public transport more easily.",
        },
        {
          text: "Should car use be limited in city centers?",
          sample: "I think car use should be limited in city centers, but only if good alternatives are available. Fewer cars would mean less pollution, less noise and safer streets for pedestrians and cyclists. Some cities have created car-free zones, and they've become very popular with residents and tourists. However, people who need to deliver goods or who have disabilities should still have access, and public transport must be reliable before restrictions are introduced.",
        },
        {
          text: "How do you think people will travel in cities in the future?",
          sample: "In the future, I think people will rely more on electric and shared transportation. Electric buses, scooters and bicycles are already common in many cities. Self-driving taxis might also become popular, reducing the need for people to own cars. I also expect apps to combine different types of transport, so people can plan and pay for a whole journey at once. Hopefully, all these changes will make cities cleaner and less crowded.",
        },
      ],
    },
  },
};
