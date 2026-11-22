import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 87 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_87: ToeflTest = {
  id: "toefl-87",
  no: 87,
  title: "TOEFL iBT Practice Test 87",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Tin cans",
          text: "In the early nineteenth century, the French government offered a prize to anyone who could find a way to keep food fresh for soldiers and sai{{lors}}. A French cook named Nicolas Appert discovered that food sealed in glass jars and heated in boiling wa{{ter}} would not spoil for months. Glass, however, could easily br{{eak}}. In 1810, an Englishman patented the idea of using metal cans instead. Early cans were made by ha{{nd}} and were so thick that people had to open them with a ham{{mer}} and chisel. Surprisingly, the can opener was not invented until several decades lat{{er}}. Today, cans are made by machines in huge numb{{ers}}, and canned food can last for ye{{ars}}. Metal cans are also easy to recy{{cle}}, which helps reduce was{{te}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a ladder",
          text: [
            "Hi Mr. Aksoy, a bird has built a nest in the gutter of our roof, and water is coming into the house when it rains. Could I borrow your ladder on Saturday morning?",
            "My brother will help me, so we'll be careful. We'll bring it back by noon. Thank you very much!",
          ],
          questions: [
            { text: "Why does the writer need a ladder?", options: ["to clear a bird's nest from the gutter", "to paint the house", "to pick fruit", "to fix a window"], answer: 0 },
            { text: "When will the writer return the ladder?", options: ["by noon on Saturday", "on Sunday evening", "next week", "tonight"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Printer paper shortage",
          text: [
            "TEMPORARY PAPER SHORTAGE",
            "Because of a delay in our delivery, the library printers are running low on paper. Until new supplies arrive next Wednesday, each student may print a maximum of twenty pages per day.",
            "Students are encouraged to read documents on screen where possible and to print on both sides of the page. Paper is still available for printing theses and official documents at the help desk. We apologize for the inconvenience.",
          ],
          questions: [
            { text: "Why is there a paper shortage?", options: ["because of a delay in delivery", "because the printers are broken", "because students printed too much", "because of a new rule"], answer: 0 },
            { text: "How many pages may each student print per day?", options: ["twenty", "ten", "fifty", "unlimited"], answer: 0 },
            { text: "What is still available at the help desk?", options: ["paper for theses and official documents", "free notebooks", "new printers", "photocopies of books"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The Dutch tulip mania",
          paragraphs: [
            "Tulips were introduced to Western Europe from the Ottoman Empire in the sixteenth century, and they quickly became fashionable among wealthy collectors in the Dutch Republic. Their brilliant colors were unlike those of any other flower known in Europe. The most valuable varieties had striking stripes and flame-like patterns on their petals. These patterns, scientists later discovered, were caused by a virus that weakened the plants and made them difficult to grow, which made them even more rare and desirable.",
            "During the 1630s, prices for tulip bulbs rose dramatically. People began trading not only actual bulbs but also contracts to buy bulbs in the future, often in taverns, and many buyers hoped to sell them quickly at a profit. At the height of the trade, in the winter of 1636 to 1637, some rare bulbs were reportedly sold for more than the price of a house in Amsterdam. Then, in February 1637, buyers suddenly stopped appearing at auctions, and prices collapsed within days.",
            "The episode, often called 'tulip mania', has become one of the most famous examples of an economic bubble, in which prices rise far above an item's real value because people expect them to keep rising. However, some historians argue that popular accounts have exaggerated the event. Their research suggests that relatively few people were involved, that most trading was limited to wealthy merchants and that the collapse did not cause widespread ruin to the Dutch economy. Many of the dramatic stories, they suggest, came from moral pamphlets written to warn people against greed.",
          ],
          questions: [
            { text: "According to paragraph 1, why were striped tulips especially rare?", options: ["A virus that caused the patterns also weakened the plants.", "They grew only in winter.", "They were illegal.", "They could only be grown in the Ottoman Empire."], answer: 0 },
            { text: "According to paragraph 2, what did people trade besides actual bulbs?", options: ["contracts to buy bulbs in the future", "paintings of tulips", "houses", "seeds of other flowers"], answer: 0 },
            { text: "The word \"collapsed\" in paragraph 2 is closest in meaning to", options: ["fell suddenly", "rose slowly", "stayed the same", "doubled"], answer: 0 },
            { text: "What is an economic bubble, according to paragraph 3?", options: ["a situation in which prices rise far above real value because people expect them to keep rising", "a period of stable prices", "a type of tax", "a shortage of goods"], answer: 0 },
            { text: "What do some historians argue about tulip mania?", options: ["Popular accounts have exaggerated the event.", "It destroyed the Dutch economy.", "It involved everyone in the country.", "It never happened at all."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My first time on a plane",
          text: "When I was ten, I flew on an airplane for the first ti{{me}}. My family was going to visit my aunt in Germ{{any}}. At the airport, we checked our bags and walked through secu{{rity}}. I was very excited when I saw the big pla{{ne}}. I sat next to the win{{dow}}. When the plane took off, my stomach felt fun{{ny}}, but I was not afraid. I looked down and saw tiny houses and ca{{rs}}. Soon we were above the clo{{uds}}, which looked like white cotton. A flight attendant gave me a drink and a small to{{y}}. I loved every minute of the fli{{ght}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Drone flying lessons",
          text: [
            "LEARN TO FLY A DRONE!",
            "Our two-hour beginner drone course teaches you how to fly safely, take photos from the air and follow local rules. Lessons take place every Sunday at 10 a.m. at Westfield Sports Park.",
            "Drones are provided, so you don't need your own. The course costs $45. Participants must be at least 14 years old. Lessons are canceled in strong wind or rain, and you can choose another date for free.",
          ],
          questions: [
            { text: "What will participants learn?", options: ["how to fly a drone safely and take aerial photos", "how to build a drone", "how to repair cameras", "how to fly an airplane"], answer: 0 },
            { text: "Do participants need their own drone?", options: ["No, drones are provided.", "Yes, they must bring one.", "Only advanced students need one.", "They must buy one at the park."], answer: 0 },
            { text: "What happens if there is strong wind or rain?", options: ["The lesson is canceled, and participants can choose another date.", "The lesson takes place indoors.", "Participants lose their money.", "The lesson becomes shorter."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How geckos climb walls",
          paragraphs: [
            "Geckos are small lizards that live in warm countries. They can run up walls and even walk upside down across ceilings without falling.",
            "The secret is in their feet. Each toe is covered with millions of tiny hairs. The end of each hair splits into even smaller hairs. These hairs are so small that they can get very close to the surface of a wall.",
            "When the tiny hairs touch a surface, a weak force pulls them toward it. Because there are millions of hairs, all these weak forces together are strong enough to hold the gecko. Scientists have studied gecko feet to create special tapes and gloves that can stick to walls.",
          ],
          questions: [
            { text: "What can geckos do?", options: ["run up walls and walk across ceilings", "fly", "swim underwater for hours", "change color like chameleons"], answer: 0 },
            { text: "What covers a gecko's toes?", options: ["millions of tiny hairs", "glue", "sharp claws only", "feathers"], answer: 0 },
            { text: "The word \"surface\" in paragraph 2 is closest in meaning to", options: ["the outside part of something", "the inside of a building", "a type of lizard", "a kind of hair"], answer: 0 },
            { text: "Why are the weak forces strong enough to hold the gecko?", options: ["There are millions of hairs.", "The gecko is very heavy.", "The walls are wet.", "The gecko uses its tail."], answer: 0 },
            { text: "What have scientists created after studying gecko feet?", options: ["special tapes and gloves", "new types of shoes for runners", "medicine", "robots that swim"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The endowed progress effect",
          text: "People are more likely to complete a goal if they feel they have already made some progress toward it. In one study, a car wash gave customers loyalty ca{{rds}}. Some cards required eight stamps for a free wa{{sh}}, while others required ten stamps but came with two stamps already ad{{ded}}. Although both groups needed eight more visits, customers with the ten-stamp cards were much more likely to complete th{{em}}, and they did so more qui{{ckly}}. Researchers called this the endowed progress ef{{fect}}. The feeling of having already started seems to increase moti{{vation}}. Businesses use this idea in loyalty pro{{grams}}, and teachers and app designers use it to encourage learners to keep go{{ing}} until they finish a ta{{sk}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Accommodation for visiting researchers",
          text: [
            "To: Faculty members hosting international visitors",
            "From: International Research Office",
            "Subject: Booking accommodation for visiting researchers",
            "The university guesthouse offers furnished apartments for visiting researchers staying between one week and six months. Apartments include a kitchen, internet access and weekly cleaning, and they are located a ten-minute walk from the main campus.",
            "Hosts should submit a booking request at least four weeks before the visitor's arrival, including the visitor's dates and research purpose. Because demand is high in September and October, early booking is strongly recommended for these months. Costs are usually charged to the host department's research budget unless the visitor pays directly.",
          ],
          questions: [
            { text: "What is included in the apartments?", options: ["a kitchen, internet access and weekly cleaning", "meals", "a car", "a private office"], answer: 0 },
            { text: "How far in advance should hosts submit a booking request?", options: ["at least four weeks", "one day", "six months", "one week"], answer: 0 },
            { text: "Why is early booking recommended for September and October?", options: ["Demand is high in those months.", "The guesthouse is closed.", "Prices are lower.", "There are fewer apartments."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The psychology of nostalgia",
          paragraphs: [
            "The word 'nostalgia' was invented in the seventeenth century by a Swiss medical student to describe a condition observed among soldiers serving far from home. Combining Greek words for 'return home' and 'pain', it was originally considered a serious illness, with symptoms such as sadness, loss of appetite and even fever. For a long time, nostalgia continued to be viewed as a negative state associated with depression and an unhealthy attachment to the past.",
            "Modern psychological research has produced a very different picture. Today, nostalgia is usually defined as a sentimental longing for the past, often for experiences shared with family and friends. Studies have found that nostalgia, although it can contain a touch of sadness, is generally a positive emotion. Recalling nostalgic memories tends to increase people's sense of social connection, boost self-esteem and make life feel more meaningful. People often experience nostalgia when they feel lonely or anxious, and it may serve as a psychological resource that helps them cope.",
            "Researchers have also explored how nostalgia influences behavior. Some studies suggest that people who have just recalled nostalgic memories are more willing to help others and feel more optimistic about the future. Businesses frequently use nostalgia in advertising, presenting products with images and music from consumers' childhoods. However, psychologists note that nostalgia is not always beneficial. When people constantly compare the present unfavorably with an idealized past, nostalgia may prevent them from adapting to change. As with many emotions, its effects seem to depend on how and how often it is experienced.",
          ],
          questions: [
            { text: "According to paragraph 1, how was nostalgia originally viewed?", options: ["as a serious illness", "as a pleasant feeling", "as a type of music", "as a sign of intelligence"], answer: 0 },
            { text: "According to paragraph 2, what effect does nostalgia often have?", options: ["It increases social connection and self-esteem.", "It always causes depression.", "It makes people forget the past.", "It reduces appetite."], answer: 0 },
            { text: "The word \"longing\" in paragraph 2 is closest in meaning to", options: ["strong desire", "fear", "memory loss", "anger"], answer: 0 },
            { text: "According to paragraph 3, why do businesses use nostalgia in advertising?", options: ["to connect products with images and music from consumers' childhoods", "to make products cheaper", "to criticize the past", "to reduce sales"], answer: 0 },
            { text: "When might nostalgia be harmful?", options: ["when people constantly compare the present unfavorably with an idealized past", "when people feel lonely", "when people recall happy memories", "when people listen to music"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Bülent", prompt: "Why are you buying a new bike?", chunks: ["my old one", "was", "stolen", "outside", "the library"], end: "." },
      { promptBy: "Julia", prompt: "Did you like the hotel pool?", chunks: ["it", "was", "large", "and very", "clean"], end: "." },
      { promptBy: "Sevgi", prompt: "I'm always tired after lunch.", chunks: ["why don't", "you", "eat", "a lighter", "meal"], end: "?" },
      { promptBy: "Tom", prompt: "How did you become interested in art?", chunks: ["my grandfather", "was", "a painter", "and taught", "me"], end: "." },
      { promptBy: "Melek", prompt: "When does the swimming season start?", chunks: ["the outdoor pools", "open", "at", "the beginning", "of June"], end: "." },
      { promptBy: "Brad", prompt: "Why is the road closed today?", chunks: ["they", "are", "holding", "a bicycle", "race"], end: "." },
      { promptBy: "Pınar", prompt: "What did you think of the new teacher?", chunks: ["she", "is", "very", "patient and", "friendly"], end: "." },
      { promptBy: "Sean", prompt: "Where can I buy fresh fish?", chunks: ["there is", "a fish market", "near", "the", "harbor"], end: "." },
      { promptBy: "Gizem", prompt: "My laptop screen is very dark.", chunks: ["have you", "checked", "the", "brightness", "settings"], end: "?" },
      { promptBy: "Oliver", prompt: "Why did you start learning to swim?", chunks: ["I", "want to", "go", "snorkeling", "next summer"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a member of your apartment building's residents' committee. Several residents have complained that the building's bicycle storage room is full of old, abandoned bicycles. You want to write to all residents.",
      to: "all residents of the building",
      subject: "Clearing the bicycle storage room",
      tasks: ["Explain the problem.", "Describe what the committee plans to do.", "Tell residents what they need to do and by when."],
      sample: "Dear Residents,\n\nOn behalf of the residents' committee, I am writing about the bicycle storage room in the basement. Over the past few months, many residents have told us that the room has become so full that it is difficult to park or remove bicycles. When we checked the room last week, we found that a large number of the bicycles appear to be old and unused, with flat tires, rusted chains and missing parts.\n\nTo solve this problem, the committee plans to clear the storage room on Saturday, May 17. Any bicycle that has not been labeled by then will be considered abandoned and will be donated to a local repair workshop, which fixes old bicycles and gives them to people in need.\n\nIf you would like to keep your bicycle, please attach a label with your name and apartment number to it by Friday, May 16. Labels are available from the box next to the mailboxes in the entrance hall. If you have any questions, please contact me in Apartment 12.\n\nThank you for your cooperation.\n\nBest regards,\nNilay Arslan\nResidents' Committee",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Media Studies",
      professor: {
        name: "Dr. Nguyen",
        text: "Many films and television series are remakes or sequels of older stories, rather than completely new ideas. Some people believe this shows a lack of creativity in the entertainment industry. Others argue that remakes allow classic stories to reach new audiences and can be creative in their own way. Are remakes and sequels good for the entertainment industry? Explain your view.",
      },
      students: [
        { name: "Charlotte", text: "Not really. Studios make remakes because they're safe and profitable, but it means fewer original stories get made." },
        { name: "Ahmet", text: "I think they can be good. Many classic films are old, and a remake with modern technology can introduce the story to young people." },
      ],
      sample: "I believe remakes and sequels can be valuable, but the entertainment industry relies on them too heavily. Ahmet makes a fair point that a thoughtful remake can bring a classic story to a new generation, update it for modern audiences or explore it from a fresh perspective. Some sequels have even been better than the original films. However, Charlotte is right that studios often choose remakes and sequels because they seem financially safe, since audiences already know the characters. When most large budgets go to familiar stories, original ideas and new writers find it harder to get support. A healthier industry would balance both: studios could continue producing successful sequels while also investing a portion of their budgets in original projects, especially those by emerging filmmakers.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new employee at an airport café. The manager is telling you what to say to customers.",
      sentences: [
        "Good morning, what can I get you?",
        "We have fresh sandwiches and salads.",
        "Would you like your coffee to take away?",
        "Our card machine is next to the register.",
        "Please check the boarding times on the screen.",
        "If you are in a hurry to catch your flight, you can order online and collect your food without waiting in line.",
        "Passengers with a boarding pass from our partner airline receive a free pastry with every hot drink before eleven in the morning.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's memories and feelings about the past. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is a place from your childhood that you remember fondly?",
          sample: "A place I remember very fondly is the small park near my grandparents' house. Every summer, my cousins and I spent whole afternoons there, climbing trees, playing football and buying ice cream from a small kiosk. My grandmother would call us home for dinner from the balcony. When I visit the park today, it looks much smaller than I remember, but it still brings back happy memories.",
        },
        {
          text: "Do you think life was better in the past?",
          sample: "I don't think life was simply better in the past. People today live longer, have better healthcare and have access to more information and opportunities. However, some things may have been better, like having more time to spend with family and neighbors and less stress from technology. I think we sometimes remember the past as better than it really was because we forget the difficulties.",
        },
        {
          text: "Is it important to keep old photographs and letters?",
          sample: "Yes, I think it's very important to keep old photographs and letters. They help us remember our family history and the people who were important to us. Looking at old photos of my grandparents when they were young helps me understand their lives better. Today, most photos are digital, so it's important to back them up and perhaps print some special ones, so they don't get lost.",
        },
        {
          text: "Why do you think people enjoy old songs and films?",
          sample: "I think people enjoy old songs and films because they connect them to memories and feelings from earlier times in their lives. Hearing a song from your teenage years can instantly remind you of friends or special events. Old films can also feel comforting because they are familiar. Some people also feel that older music and films had more meaningful stories or better quality, although that's partly a matter of taste.",
        },
      ],
    },
  },
};
