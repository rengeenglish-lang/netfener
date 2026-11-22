import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 40 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_40: ToeflTest = {
  id: "toefl-40",
  no: 40,
  title: "TOEFL iBT Practice Test 40",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Staplers",
          text: "The stapler is a common office tool that joins sheets of paper with a small metal fas{{tener}}. Early staplers appeared in the late nineteenth cen{{tury}}, and each staple had to be loa{{ded}} by hand, one at a ti{{me}}. In the early twentieth century, manufac{{turers}} began to produce staples joined together in long st{{rips}}, which made staplers much faster to u{{se}}. Later designs allowed the user to choose whether the staple's le{{gs}} would bend inward or outward. Today, electric staplers can join hundreds of pa{{ges}}, while tiny staplers fit easily into a pen{{cil}} case.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Change of plans for dinner",
          text: [
            "Hi Murat, I'm so sorry, but I have to cancel our dinner tonight. My manager asked me to finish an urgent report before tomorrow morning.",
            "Could we go to that new Thai restaurant on Thursday instead? I'll book a table for 7:30 if that suits you.",
          ],
          questions: [
            { text: "Why does the writer cancel dinner?", options: ["The writer has to finish an urgent report.", "The writer is sick.", "The restaurant is closed.", "The writer forgot about the plan."], answer: 0 },
            { text: "What does the writer suggest?", options: ["cooking at home tonight", "going to a Thai restaurant on Thursday", "meeting for lunch tomorrow", "ordering food to the office"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Humanities Building elevator",
          text: [
            "NOTICE: ELEVATOR MAINTENANCE",
            "The main elevator in the Humanities Building will be out of service from Monday, October 6, to Wednesday, October 8, for annual safety inspections.",
            "During this time, please use the stairs or the service elevator at the rear of the building. Anyone who requires step-free access may contact the building office to arrange for classes to be moved to the ground floor.",
          ],
          questions: [
            { text: "Why will the main elevator be out of service?", options: ["for annual safety inspections", "because it was damaged in a storm", "because the building is closing", "for painting"], answer: 0 },
            { text: "What can people use while the main elevator is closed?", options: ["only the fire exit", "the stairs or the service elevator", "an elevator in another building", "nothing"], answer: 1 },
            { text: "What can people who need step-free access do?", options: ["cancel their classes", "contact the office to move classes to the ground floor", "use the main elevator anyway", "wait outside"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Sourdough and fermentation",
          paragraphs: [
            "For most of human history, bread was made without the commercial yeast that bakers buy today. Instead, people used sourdough, a mixture of flour and water that has been left to ferment. Flour naturally contains wild yeasts and bacteria. When it is mixed with water and kept warm, these microorganisms begin to feed on the sugars in the flour and multiply. By adding fresh flour and water every day, bakers can keep a sourdough starter alive for years, and some bakeries claim that their starters are more than a century old.",
            "Two groups of microorganisms play key roles in sourdough. Wild yeasts produce carbon dioxide gas, which becomes trapped in the dough and causes it to rise. At the same time, lactic acid bacteria produce acids that give sourdough bread its characteristic sour taste. These acids also slow the growth of mold, so sourdough bread tends to stay fresh longer than bread made with commercial yeast alone.",
            "Because sourdough ferments slowly, often for twelve hours or more, it requires more time and planning than modern baking methods. In the twentieth century, industrial bakeries largely abandoned it in favor of commercial yeast, which allows bread to rise in about an hour. In recent years, however, sourdough has become popular again. Some researchers suggest that the long fermentation breaks down certain substances in flour, which may make the bread easier for some people to digest, although more research is needed to confirm these benefits.",
          ],
          questions: [
            { text: "According to paragraph 1, where do the yeasts and bacteria in sourdough come from?", options: ["They are bought from shops.", "They occur naturally in flour.", "They are added from milk.", "They come from the baker's hands only."], answer: 1 },
            { text: "The word \"multiply\" in paragraph 1 is closest in meaning to", options: ["increase in number", "die", "become sweet", "change color"], answer: 0 },
            { text: "According to paragraph 2, what causes sourdough to rise?", options: ["acids produced by bacteria", "carbon dioxide produced by wild yeasts", "heat from the oven only", "the addition of salt"], answer: 1 },
            { text: "Why does sourdough bread tend to stay fresh longer?", options: ["It contains more sugar.", "Acids from bacteria slow the growth of mold.", "It is baked at a higher temperature.", "It contains less water."], answer: 1 },
            { text: "According to paragraph 3, why did industrial bakeries abandon sourdough?", options: ["It was too expensive.", "Commercial yeast allows bread to rise much faster.", "Customers disliked the taste.", "It was banned by law."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My first bike",
          text: "On my seventh birthday, my parents gave me a red bi{{ke}}. I was very happy, but I didn't know how to ri{{de}} it. My father took me to a quiet st{{reet}} near our house. He held the back of the se{{at}} while I pushed the ped{{als}}. I fell many ti{{mes}}, and once I hurt my kn{{ee}}. But I didn't give u{{p}}. After two weeks, I could ride alone. Now I ride my bike to sch{{ool}} every day, and I still remember how pr{{oud}} I felt that first day.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Hot air balloon rides",
          text: [
            "SEE THE VALLEY FROM THE SKY!",
            "Enjoy a one-hour hot air balloon ride over the beautiful river valley. Flights leave at sunrise every day from April to October, weather permitting.",
            "Tickets cost $150 per person and include breakfast after the flight. Children must be at least eight years old. Book online at least three days in advance.",
          ],
          questions: [
            { text: "When do the flights leave?", options: ["at sunset", "at sunrise", "at noon", "at midnight"], answer: 1 },
            { text: "What is included in the ticket price?", options: ["lunch", "breakfast after the flight", "a free photo", "a hotel room"], answer: 1 },
            { text: "How old must children be?", options: ["at least five", "at least eight", "at least twelve", "at least sixteen"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How Velcro was invented",
          paragraphs: [
            "Velcro is a fastener used on shoes, bags and jackets. It has two strips: one covered with tiny hooks and the other with tiny loops. When they are pressed together, they stick.",
            "Velcro was invented by a Swiss engineer named George de Mestral. In the 1940s, he went for a walk in the mountains with his dog. When they came home, both of them were covered with small seeds called burrs.",
            "De Mestral looked at the burrs under a microscope. He saw that they had tiny hooks that caught on loops in fabric and fur. He spent several years copying this idea with nylon. Today, Velcro is used everywhere, even by astronauts in space.",
          ],
          questions: [
            { text: "What does one strip of Velcro have?", options: ["tiny hooks", "glue", "magnets", "buttons"], answer: 0 },
            { text: "Who invented Velcro?", options: ["an American astronaut", "a Swiss engineer", "a French doctor", "a dog trainer"], answer: 1 },
            { text: "What gave the inventor his idea?", options: ["a bird's feather", "burrs that stuck to him and his dog", "a broken shoe", "a spider's web"], answer: 1 },
            { text: "The word \"copying\" in paragraph 3 is closest in meaning to", options: ["imitating", "selling", "breaking", "forgetting"], answer: 0 },
            { text: "Which material did the inventor use to copy the idea?", options: ["wood", "nylon", "metal", "paper"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Dynamic pricing",
          text: "Many people have noticed that the price of a flight or hotel room can change several times in a single d{{ay}}. This practice is called dynamic pricing. Companies use compu{{ter}} programs that adjust prices according to dem{{and}}, the time remaining before the trip and even the prices of compe{{titors}}. When many customers are searching for the same flight, the program may incr{{ease}} the price; when demand is low, it may of{{fer}} discounts to fill empty se{{ats}}. Supporters argue that dynamic pricing helps companies use their resources effi{{ciently}}. Critics, however, claim that it can seem un{{fair}}, especially when prices rise sharply during emer{{gencies}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Study abroad credit transfer",
          text: [
            "To: Students participating in exchange programs next semester",
            "From: International Programs Office",
            "Subject: Getting credit for courses taken abroad",
            "Before you leave, you must complete a Learning Agreement listing the courses you plan to take at your host university. Each course must be approved by the relevant department at our university; without this approval, we cannot guarantee that the credits will be transferred.",
            "If you change courses after arriving, you must submit a revised agreement within three weeks of the start of the host semester. At the end of your exchange, ask your host university to send an official transcript directly to our office. Grades will be converted according to the published conversion table, but they will not be included in your grade point average.",
          ],
          questions: [
            { text: "What must students complete before leaving?", options: ["a Learning Agreement listing their planned courses", "a language test", "a medical examination", "a housing application"], answer: 0 },
            { text: "What must students do if they change courses after arriving?", options: ["nothing", "submit a revised agreement within three weeks", "return home", "pay an extra fee"], answer: 1 },
            { text: "What is true about grades earned abroad?", options: ["They are included in the GPA.", "They are converted but not included in the GPA.", "They are ignored completely.", "They count double."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why some birds mimic sounds",
          paragraphs: [
            "Many birds learn their songs by listening to adults of their own species, but a smaller number of species go further and imitate the sounds of other animals and even of their environment. The lyrebird of Australia is among the most remarkable mimics. Males can reproduce the calls of dozens of other bird species with astonishing accuracy, and some have been recorded imitating the sounds of camera shutters, car alarms and chainsaws. Parrots, mockingbirds and starlings are also skilled mimics.",
            "Scientists have proposed several explanations for vocal mimicry. One of the most widely supported is that it helps males attract mates. In many species, females appear to prefer males with larger and more varied song repertoires, perhaps because a complex repertoire indicates that a male is healthy, experienced or intelligent. Copying the sounds of other species may simply be an efficient way to build a large repertoire.",
            "Other explanations focus on survival. Some birds imitate the alarm calls of other species to frighten competitors away from food, while others imitate the calls of predators to protect their nests. In some cases, young birds of species that lay their eggs in other birds' nests imitate the begging calls of their hosts' own chicks, encouraging the adult birds to feed them. Because mimicry may serve different purposes in different species, many researchers believe that there is no single explanation for this behavior.",
          ],
          questions: [
            { text: "According to paragraph 1, what is remarkable about the lyrebird?", options: ["It cannot sing at all.", "It can imitate many bird calls and even mechanical sounds.", "It only sings at night.", "It lives in large groups."], answer: 1 },
            { text: "The word \"repertoires\" in paragraph 2 is closest in meaning to", options: ["ranges of sounds a bird can produce", "nests", "feathers", "flight patterns"], answer: 0 },
            { text: "According to paragraph 2, why might females prefer males with varied songs?", options: ["Varied songs may indicate health, experience or intelligence.", "Varied songs are louder.", "Females cannot hear simple songs.", "Varied songs scare away predators."], answer: 0 },
            { text: "According to paragraph 3, why might some birds imitate predators' calls?", options: ["to protect their nests", "to attract mates", "to find food", "to communicate with their chicks"], answer: 0 },
            { text: "What do many researchers conclude about vocal mimicry?", options: ["It has a single purpose in all species.", "It may serve different purposes in different species.", "It is learned only from humans.", "It has no purpose at all."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Onur", prompt: "Why are you taking the stairs?", chunks: ["the elevator", "is", "out of", "order", "again"], end: "." },
      { promptBy: "Lily", prompt: "How was the music festival?", chunks: ["the bands", "were", "amazing", "despite", "the rain"], end: "." },
      { promptBy: "Sinem", prompt: "I need a new phone, but I'm not sure which one.", chunks: ["have you", "read", "any reviews", "of", "the latest models"], end: "?" },
      { promptBy: "Max", prompt: "Where did you learn to cook so well?", chunks: ["my grandfather", "taught me", "most", "of", "his recipes"], end: "." },
      { promptBy: "Ayten", prompt: "When is the library open on weekends?", chunks: ["it", "opens", "at ten", "on Saturdays", "and Sundays"], end: "." },
      { promptBy: "Jason", prompt: "Why is everyone wearing blue today?", chunks: ["we", "are supporting", "a charity", "for", "ocean protection"], end: "." },
      { promptBy: "Fatma", prompt: "How long will the repairs take?", chunks: ["the mechanic", "said", "it", "will take", "two days"], end: "." },
      { promptBy: "Nick", prompt: "What are you studying at the moment?", chunks: ["I'm", "preparing", "for", "my history", "exam"], end: "." },
      { promptBy: "Dilek", prompt: "It's really cold in this classroom.", chunks: ["should", "we", "ask", "someone to", "close the window"], end: "?" },
      { promptBy: "Henry", prompt: "Why did you move to a new apartment?", chunks: ["my old", "apartment", "was", "too far from", "my office"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You have been a member of a local gym for two years. Recently, the gym reduced its opening hours, and many classes have been canceled. You want to write to the gym manager.",
      to: "the gym manager, Ms. Turner",
      subject: "Changes to opening hours and classes",
      tasks: ["Describe how you have used the gym.", "Explain the problems caused by the recent changes.", "Suggest what the gym could do to improve the situation."],
      sample: "Dear Ms. Turner,\n\nI have been a member of your gym for two years, and I have always been very satisfied with the facilities and the friendly staff. I usually come early in the morning before work, and I attend the yoga and cycling classes three evenings a week.\n\nHowever, the recent changes have caused me several problems. Since the gym now opens at 8 a.m. instead of 6 a.m., I can no longer exercise before work. In addition, the Tuesday and Thursday evening yoga classes have been canceled without any explanation, and the remaining classes are now so crowded that it is difficult to find a space. Several other members I have spoken to feel the same way.\n\nI would like to suggest that the gym restore its early opening hours at least three days a week. It would also help if members could book classes online in advance, so that the instructors know how many people to expect. Finally, clear communication about future changes would be very much appreciated.\n\nKind regards,\nBurak Yıldız",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Business Studies",
      professor: {
        name: "Dr. Russell",
        text: "Some companies have started offering employees unlimited paid vacation. Employees can take as many days off as they want, as long as their work is done. Supporters say this shows trust and improves well-being. Critics say employees end up taking fewer days off because they feel guilty or worry about their careers. Is unlimited vacation a good policy? Why or why not?",
      },
      students: [
        { name: "Hannah", text: "I think it's a great idea. Employees are adults, and they should be trusted to manage their own time. It also makes the company more attractive to talented people." },
        { name: "Oğuz", text: "In theory, yes, but in practice people take fewer holidays. Without a clear number of days, no one wants to look lazy compared with their colleagues." },
      ],
      sample: "I think unlimited vacation can be a good policy, but only if the company actively encourages employees to use it. Hannah is right that the policy sends a message of trust and flexibility, which can improve motivation and help companies attract skilled workers. People can take time off when they really need it, for example to care for a family member, without worrying about running out of days. However, Oğuz identifies a serious risk. When there is no clear allowance, many employees feel uncertain about how much time off is acceptable, and they may take fewer days to avoid seeming less committed than their colleagues. To prevent this, companies could set a minimum number of vacation days that everyone must take, and managers could set an example by taking regular holidays themselves.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new tour guide at a national park visitor center. The head ranger is telling you what to say to visitors.",
      sentences: [
        "Welcome to the national park.",
        "Please stay on the marked trails.",
        "Do not feed the wild animals.",
        "Maps are available at the visitor center.",
        "The waterfall trail takes about two hours to complete.",
        "Please take all your trash with you, because there are no garbage bins along the trails.",
        "If you see a bear, do not run; stay calm, make yourself look large and slowly move away while speaking in a firm voice.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people relax and spend their free time. The researcher will ask you some questions.",
      questions: [
        {
          text: "What do you usually do to relax after a busy day?",
          sample: "After a busy day, I usually like to go for a short walk in the park near my home. Being outside and moving a little helps me clear my mind. Then I make a cup of tea and either read a novel or listen to music for a while. I try not to look at my phone too much in the evening, because scrolling through social media often makes me feel more tired instead of relaxed.",
        },
        {
          text: "Do you prefer spending your free time alone or with other people?",
          sample: "I enjoy both, but it depends on my mood and energy. During the week, after classes and work, I often prefer spending time alone, because I need some quiet to recharge. On weekends, though, I love meeting friends, trying new restaurants or playing football together. I think a balance is important: time alone helps me reflect, while time with others keeps me connected and makes me laugh.",
        },
        {
          text: "Do you think people today have less free time than in the past?",
          sample: "In some ways, I think people feel they have less free time, even if they actually don't. Technology means we are always connected, so work emails and messages can reach us at any moment, even on holidays. Many people also take on extra jobs or courses to stay competitive. However, compared with a hundred years ago, people generally work fewer hours. The real problem may be that our free time is often interrupted by our phones.",
        },
        {
          text: "Should employers do more to help their workers relax and avoid stress?",
          sample: "Yes, I think employers should do more, because stressed workers are less productive and more likely to get sick or leave their jobs. Companies could offer flexible working hours, encourage employees to take their full vacation and avoid sending emails late at night. Some companies also provide quiet rooms, exercise classes or counseling services. These measures cost money, but they can save companies money in the long run by keeping employees healthy and motivated.",
        },
      ],
    },
  },
};
