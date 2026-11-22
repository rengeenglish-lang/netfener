import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 58 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_58: ToeflTest = {
  id: "toefl-58",
  no: 58,
  title: "TOEFL iBT Practice Test 58",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Bricks",
          text: "Bricks are one of the oldest building materials in the world. The first bricks were made more than nine thousand years ago in the Middle East from mud that was shaped by hand and dried in the s{{un}}. These bricks were cheap, but they could be damaged by ra{{in}}. Later, people discovered that bricks baked in a hot ov{{en}}, called a kiln, became much harder and lasted far lon{{ger}}. The ancient Romans used baked bricks to build roads, walls and huge public buil{{dings}}, and they spread brick-making across their emp{{ire}}. In the nineteenth century, machines began to produce bricks in large num{{bers}}, which made them cheaper and more uni{{form}} in size. Today, bricks remain popular because they are strong, fire-resistant and attrac{{tive}}, and they keep buildings cool in sum{{mer}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a tent",
          text: [
            "Hi Oğuz! A few of us are going camping by the lake next weekend, but my tent has a big hole in it. Could I borrow yours?",
            "I'll pick it up on Thursday evening and return it clean and dry on Monday. If you want to join us, there's still space in the car!",
          ],
          questions: [
            { text: "Why does the writer want to borrow a tent?", options: ["The writer's tent has a hole in it.", "The writer lost the tent.", "The writer never had a tent.", "The writer's tent is too small."], answer: 0 },
            { text: "What does the writer offer Oğuz?", options: ["a place in the car to join the trip", "money for the tent", "a new tent", "dinner on Monday"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "New mailroom hours",
          text: [
            "STUDENT MAILROOM: NEW HOURS",
            "Starting next week, the student mailroom will be open from 10 a.m. to 7 p.m., Monday to Friday, and from 10 a.m. to 2 p.m. on Saturdays. The mailroom will remain closed on Sundays.",
            "You will receive an email when a package arrives for you. Please bring your student card to collect it. Packages that are not collected within ten days will be returned to the sender.",
          ],
          questions: [
            { text: "When is the mailroom closed?", options: ["on Sundays", "on Saturdays", "on Mondays", "every evening"], answer: 0 },
            { text: "How will students know a package has arrived?", options: ["They will receive an email.", "They will receive a phone call.", "A note will be left on their door.", "They must check every day."], answer: 0 },
            { text: "What happens to packages not collected within ten days?", options: ["They are returned to the sender.", "They are thrown away.", "They are given to charity.", "They are delivered to the student's room."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The building of the Suez Canal",
          paragraphs: [
            "For centuries, ships traveling between Europe and Asia had to sail around the southern tip of Africa, a journey of many weeks. The idea of cutting a channel through the narrow strip of land in Egypt that separates the Mediterranean Sea from the Red Sea was very old; ancient rulers had built smaller canals linking the Nile River to the Red Sea. However, a direct sea-level canal across the Isthmus of Suez was not attempted until the nineteenth century.",
            "In 1854, a French diplomat, Ferdinand de Lesseps, obtained permission from the ruler of Egypt to build the canal. Construction began in 1859 and lasted ten years. In the early years, much of the digging was done by hand by tens of thousands of Egyptian laborers, many of whom were forced to work under harsh conditions, and thousands are believed to have died. Later, steam-powered dredgers and excavators were introduced, greatly speeding up the work. When it opened in 1869, the canal was about 164 kilometers long and had no locks, since the two seas are at nearly the same level.",
            "The canal transformed world trade, shortening the voyage between Britain and India by about seven thousand kilometers. Because of its strategic importance, control of the canal became a source of international conflict. In 1956, Egypt's president nationalized the canal, leading to a brief war involving Britain, France and Israel. Today, the Suez Canal remains one of the busiest shipping routes in the world, and it has been widened and deepened several times to accommodate larger ships. When a giant container ship became stuck in the canal for six days in 2021, the blockage disrupted global supply chains, showing how much the world still depends on this narrow waterway.",
          ],
          questions: [
            { text: "According to paragraph 1, how did ships travel between Europe and Asia before the canal?", options: ["around the southern tip of Africa", "through the Nile River", "overland by train", "across the Arctic"], answer: 0 },
            { text: "According to paragraph 2, what sped up construction of the canal?", options: ["steam-powered dredgers and excavators", "more laborers from France", "a new route", "the use of horses"], answer: 0 },
            { text: "Why does the Suez Canal have no locks?", options: ["The two seas are at nearly the same level.", "Locks were too expensive.", "Ships were too large for locks.", "The canal is very short."], answer: 0 },
            { text: "The word \"strategic\" in paragraph 3 is closest in meaning to", options: ["important for military or political advantage", "beautiful", "dangerous", "modern"], answer: 0 },
            { text: "What did the 2021 blockage show?", options: ["how much the world still depends on the canal", "that the canal is no longer used", "that ships are getting smaller", "that the canal should be closed"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A week with my cousins",
          text: "Last summer, I spent a week with my cousins in their village. They live on a small fa{{rm}} with goats and chickens. Every morning, we collected eg{{gs}} and gave water to the ani{{mals}}. In the afternoon, we swam in a cold riv{{er}} near the house. My cousin Ali taught me how to climb tr{{ees}}. One evening, we made a big fi{{re}} and cooked potatoes in it. At night, we slept on the roof and looked at the st{{ars}}. I was very sa{{d}} when I had to go home. I hope I can vi{{sit}} them again next ye{{ar}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Pasta-making workshop",
          text: [
            "MAKE FRESH PASTA AT HOME!",
            "Learn how to make fresh pasta and two simple sauces in our three-hour workshop at Olive Kitchen, every Sunday from 2 to 5 p.m.",
            "The workshop costs $40, and you will eat what you make at the end. All ingredients and aprons are provided. Each participant also takes home a recipe booklet.",
          ],
          questions: [
            { text: "What will participants learn to make?", options: ["fresh pasta and two sauces", "bread and cakes", "pizza", "soup"], answer: 0 },
            { text: "What happens at the end of the workshop?", options: ["Participants eat what they made.", "Participants take an exam.", "Participants sell their pasta.", "Participants clean the kitchen."], answer: 0 },
            { text: "What does each participant take home?", options: ["a recipe booklet", "a pasta machine", "an apron", "a bottle of olive oil"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How chicks hatch from eggs",
          paragraphs: [
            "A hen sits on her eggs to keep them warm. After about three weeks, baby chicks are ready to come out of their shells.",
            "Inside the egg, the chick grows and uses the yellow part of the egg as food. When it is ready to hatch, it has a tiny, hard point on its beak called an egg tooth.",
            "The chick uses the egg tooth to make a small hole in the shell. Then it slowly turns around inside the egg and breaks the shell in a circle. Hatching can take a whole day. A few days later, the egg tooth falls off.",
          ],
          questions: [
            { text: "Why does a hen sit on her eggs?", options: ["to keep them warm", "to hide them", "to break them", "to clean them"], answer: 0 },
            { text: "How long does it take before chicks are ready to hatch?", options: ["about three weeks", "about three days", "about three months", "one year"], answer: 0 },
            { text: "What does the chick use as food inside the egg?", options: ["the yellow part of the egg", "seeds", "water", "insects"], answer: 0 },
            { text: "The word \"hatch\" in paragraph 2 is closest in meaning to", options: ["come out of an egg", "fly", "eat", "sleep"], answer: 0 },
            { text: "What happens to the egg tooth a few days after hatching?", options: ["It falls off.", "It grows bigger.", "It turns into a feather.", "It becomes a real tooth."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Belief perseverance",
          text: "Once people form a belief, they often continue to hold it even after the evidence supporting it has been comple{{tely}} discredited. Psychologists call this belief persev{{erance}}. In one experiment, participants were given false feedback suggesting that they were very good or very bad at a particular ta{{sk}}. Later, they were told that the feedback had been invented and had nothing to do with their actual perfor{{mance}}. Nevertheless, many continued to believe that they had the ability suggested by the orig{{inal}} feedback. One explanation is that people create expla{{nations}} for their beliefs, and these explanations remain even when the initial evi{{dence}} disappears. Asking people to consider why the oppo{{site}} might be true can help reduce this bi{{as}}, at least in some situa{{tions}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Grant writing workshop",
          text: [
            "To: Postdoctoral researchers and doctoral candidates",
            "From: Research Development Office",
            "Subject: Two-day grant writing workshop",
            "The Research Development Office will hold a two-day grant writing workshop on November 6 and 7. Sessions will cover identifying suitable funding sources, writing clear research objectives, preparing realistic budgets and responding to reviewers' comments.",
            "Participants are asked to bring a draft of a one-page project summary, which will be reviewed by experienced researchers during the second day. The workshop is free, but places are limited to twenty-five, and priority will be given to those planning to submit an application within the next six months. Registration closes on October 25.",
          ],
          questions: [
            { text: "Which topic will the workshop cover?", options: ["preparing realistic budgets", "publishing a book", "teaching undergraduate courses", "applying for jobs abroad"], answer: 0 },
            { text: "What should participants bring?", options: ["a draft one-page project summary", "a complete grant application", "a registration fee", "a letter from their department"], answer: 0 },
            { text: "Who will be given priority?", options: ["those planning to apply for a grant within six months", "senior professors", "undergraduate students", "those who registered last year"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Microfinance and small loans",
          paragraphs: [
            "Around the world, hundreds of millions of people lack access to basic financial services such as bank accounts and loans. Traditional banks are often unwilling to lend to poor people because they have no property to offer as security and because the small amounts they need are not profitable to manage. As a result, many poor entrepreneurs, such as market traders and small farmers, have relied on moneylenders who charge extremely high interest rates.",
            "Microfinance emerged in the 1970s and 1980s as an attempt to address this problem. One of the best-known pioneers, Bangladesh's Grameen Bank, offered small loans, often to women, without requiring property as security. Instead, borrowers were organized into small groups whose members were responsible for supporting each other's repayments. Surprisingly high repayment rates attracted international attention, and microfinance was widely promoted as a powerful tool for reducing poverty. In 2006, the Grameen Bank and its founder received the Nobel Peace Prize.",
            "In the following years, however, researchers began to examine microfinance more critically. Several large studies found that while small loans helped some borrowers expand their businesses and manage financial emergencies, their average effects on household income and poverty were modest. In some regions, commercial lenders entered the market, charging high interest rates and lending aggressively, which left some borrowers heavily in debt. Today, many experts see microfinance not as a solution to poverty on its own, but as one useful tool among many, alongside savings accounts, insurance and investments in education and health.",
          ],
          questions: [
            { text: "According to paragraph 1, why are traditional banks often unwilling to lend to poor people?", options: ["They have no property as security and small loans are not profitable.", "Poor people never repay loans.", "Governments do not allow it.", "Banks do not lend money at all."], answer: 0 },
            { text: "According to paragraph 2, how did the Grameen Bank's group system work?", options: ["Group members were responsible for supporting each other's repayments.", "Groups shared one bank account.", "Groups paid no interest.", "Groups were made up of bank employees."], answer: 0 },
            { text: "The word \"modest\" in paragraph 3 is closest in meaning to", options: ["fairly small", "enormous", "negative", "unknown"], answer: 0 },
            { text: "What problem arose when commercial lenders entered the microfinance market?", options: ["Some borrowers were left heavily in debt.", "Loans became free.", "Repayment rates rose to 100 percent.", "Poor people stopped borrowing."], answer: 0 },
            { text: "How do many experts view microfinance today?", options: ["as one useful tool among many", "as the complete solution to poverty", "as completely useless", "as more important than education"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Sinan", prompt: "Why are you so excited today?", chunks: ["my favorite", "band", "is playing", "in the city", "tonight"], end: "." },
      { promptBy: "Grace", prompt: "Did you like the documentary about the ocean?", chunks: ["the underwater", "scenes", "were", "absolutely", "beautiful"], end: "." },
      { promptBy: "Gül", prompt: "My plants never grow well.", chunks: ["maybe", "they", "need", "more", "sunlight"], end: "." },
      { promptBy: "Ian", prompt: "How long did it take to write your thesis?", chunks: ["it", "took me", "almost", "two", "years"], end: "." },
      { promptBy: "Hande", prompt: "Where can I get a good haircut?", chunks: ["there is", "an excellent", "barber", "on", "Station Road"], end: "." },
      { promptBy: "Ross", prompt: "Why is the beach closed today?", chunks: ["the waves", "are", "too", "dangerous", "for swimming"], end: "." },
      { promptBy: "Nur", prompt: "What did you think of the exam?", chunks: ["the essay", "question", "was", "easier than", "I expected"], end: "." },
      { promptBy: "Tim", prompt: "When does your sister graduate?", chunks: ["she", "graduates", "at the end", "of", "June"], end: "." },
      { promptBy: "Zehra", prompt: "I don't have enough money for the trip.", chunks: ["could you", "ask", "your parents", "for", "a loan"], end: "?" },
      { promptBy: "Will", prompt: "Why did you start drinking green tea?", chunks: ["I", "read", "that it", "is good", "for your health"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a member of your university's photography club. The club would like to hold an exhibition of members' photos in the main library lobby. You need permission from the library manager.",
      to: "the library manager, Ms. Wright",
      subject: "Request to hold a photography exhibition",
      tasks: ["Introduce yourself and the club.", "Describe the exhibition you are planning.", "Explain why the lobby is a good place and ask for permission."],
      sample: "Dear Ms. Wright,\n\nMy name is Tuna Erdoğan, and I am the secretary of the University Photography Club. Our club has around forty members, ranging from complete beginners to students who have won national photography competitions.\n\nWe are writing to ask whether we could hold a small exhibition of members' photographs in the main library lobby during the first two weeks of April. The theme of the exhibition will be 'Our Campus Through the Seasons', and it will include about thirty framed photographs showing buildings, people and nature on campus throughout the year. The photographs would be displayed on free-standing boards, so there would be no need to put anything on the walls.\n\nWe believe the library lobby would be an ideal location, because it is the busiest place on campus and is visited by students and staff from every faculty. The exhibition would also make the space more welcoming. Our members would set up and remove the boards outside opening hours and would be responsible for keeping the area tidy. Would it be possible to meet to discuss this proposal?\n\nThank you for your consideration.\n\nKind regards,\nTuna Erdoğan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Economics",
      professor: {
        name: "Dr. Morris",
        text: "Many people today choose to rent apartments rather than buy homes, even when they could afford to buy. Some economists argue that renting offers flexibility and avoids the risks of property ownership. Others believe that buying a home is the best long-term investment and provides security. Is it better to rent or to buy a home? Explain your view.",
      },
      students: [
        { name: "Emily", text: "Renting is better for young people. You can move easily for a new job, and you don't have to pay for repairs or worry about house prices falling." },
        { name: "Serhat", text: "Buying is better. Rent is money you never get back, while a house becomes yours over time. It's also security for your family's future." },
      ],
      sample: "I think whether it is better to rent or buy depends largely on a person's stage of life and their plans. For young people, I agree with Emily that renting often makes more sense. Early in a career, people may need to move to a different city for a job or further education, and renting allows them to do so without the cost and stress of selling property. Renters also avoid large repair bills. However, Serhat makes a strong point for those who are ready to settle down. Monthly mortgage payments gradually build ownership, and in many places property values have risen over the long term. A home can also provide stability for children. Therefore, I believe renting is usually wiser in one's twenties, while buying becomes more attractive once someone's job and family situation are stable.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new staff member at a university housing office. Your supervisor is telling you what to say to new residents.",
      sentences: [
        "Welcome to the residence halls.",
        "Here is the key to your room.",
        "Please sign this form before you leave.",
        "Laundry machines are in the basement.",
        "Quiet hours begin at eleven every night.",
        "If something in your room is broken, please report it online so that our maintenance team can repair it.",
        "Guests are welcome during the day, but anyone staying overnight must be registered at the front desk before ten o'clock in the evening.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about homes and living spaces. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe the place where you live now.",
          sample: "I currently live in a small two-bedroom apartment with a roommate, about fifteen minutes from campus by bus. It's on the fourth floor, so it gets a lot of natural light, and from the balcony we can see part of the sea. The kitchen is quite small, but we have a comfortable living room where we often study or watch films. The best part is that it's close to a park.",
        },
        {
          text: "Would you prefer to live in a house or an apartment? Why?",
          sample: "I think I would prefer to live in a house in the future, especially one with a garden. I love the idea of growing my own vegetables and having space for a dog. Houses also usually offer more privacy and less noise from neighbors. However, at this stage of my life, an apartment is more practical, because it's cheaper, easier to maintain and usually closer to the city center and public transport.",
        },
        {
          text: "Is it better for young adults to live with their parents or on their own?",
          sample: "I think living on your own, or with roommates, is a valuable experience for young adults. It teaches you how to manage money, cook, clean and solve problems independently. However, I understand why many young people live with their parents, since rent is very expensive in many cities. Living at home allows them to save money for the future. So it depends on the situation, but I think everyone should try living independently at some point.",
        },
        {
          text: "How might homes be different in the future?",
          sample: "In the future, I think homes will be smaller, smarter and more environmentally friendly. As cities become more crowded, apartments may use space more efficiently, with furniture that folds or moves. Smart systems will probably control lighting, heating and security automatically, saving energy. Many homes may also have solar panels and better insulation to reduce energy use. I also hope future homes will include more shared spaces, like community gardens, to help neighbors connect.",
        },
      ],
    },
  },
};
