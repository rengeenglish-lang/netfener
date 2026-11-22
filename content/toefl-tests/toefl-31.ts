import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 31 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_31: ToeflTest = {
  id: "toefl-31",
  no: 31,
  title: "TOEFL iBT Practice Test 31",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Elevators",
          text: "Simple lifting machines have existed for thousands of years, but early elevators were not safe for peop{{le}}. If the rope broke, the platform simply fe{{ll}}. In 1853, an American inventor named Elisha Otis demonstrated a safety bra{{ke}} at a fair in New York. Standing on a raised platform, he ordered the ro{{pe}} to be cut. The platform dropped only a few centi{{meters}} before the brake stopped it. His invention made passenger elevators possi{{ble}}, and soon architects could design much tal{{ler}} buildings. Without safe elevators, modern skyscra{{pers}} would not ex{{ist}} at a{{ll}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Wrong order",
          text: [
            "Hi, this is Elif from apartment 12. I think the delivery driver left your groceries at my door by mistake.",
            "There are two bags with your name on the receipt. I'll leave them with the doorman so you can pick them up when you get home.",
          ],
          questions: [
            { text: "What happened?", options: ["Elif's groceries were stolen.", "The neighbor's groceries were delivered to Elif's door.", "The driver did not come.", "The order was cancelled."], answer: 1 },
            { text: "Where will Elif leave the bags?", options: ["outside the building", "with the doorman", "in her own kitchen", "at the supermarket"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Visitor parking",
          text: [
            "VISITOR PARKING ON CAMPUS",
            "Visitors may park in Lot C, next to the main entrance, for up to four hours. Parking is free on weekends, but on weekdays visitors must pay $2 per hour at the machines or through the parking app.",
            "Students and staff are not allowed to park in visitor spaces, even if they pay. Cars parked for more than four hours will receive a ticket.",
          ],
          questions: [
            { text: "How long can visitors park in Lot C?", options: ["up to two hours", "up to four hours", "all day", "overnight"], answer: 1 },
            { text: "When is visitor parking free?", options: ["on weekdays", "on weekends", "after 6 p.m.", "never"], answer: 1 },
            { text: "Who is NOT allowed to use visitor spaces?", options: ["parents", "students and staff", "delivery drivers", "guest speakers"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How pearls form",
          paragraphs: [
            "Pearls are among the oldest gems valued by humans, and unlike most precious stones, they are produced by living animals. Many mollusks, including oysters and mussels, can make pearls, though the most valuable come from a small number of oyster species.",
            "A pearl forms when an irritant, such as a parasite or a fragment of shell, becomes trapped inside the animal's soft body. To protect itself, the mollusk covers the irritant with layers of nacre, the same smooth, shiny material that lines the inside of its shell. Nacre is composed of tiny crystals of calcium carbonate arranged in thin sheets and held together by protein. Over months or years, thousands of these layers build up, and the way they reflect and bend light gives a pearl its characteristic glow, known as luster.",
            "Natural pearls are extremely rare; in the past, divers might open thousands of oysters to find a single valuable one. In the early twentieth century, Japanese researchers, most famously Kokichi Mikimoto, developed methods of producing cultured pearls by inserting a small bead and a piece of tissue into an oyster, which then coated the bead with nacre. Cultured pearls quickly came to dominate the market, making pearls affordable to many more people, though natural pearls remain highly prized by collectors.",
          ],
          questions: [
            { text: "According to paragraph 1, how are pearls different from most precious stones?", options: ["They are cheaper.", "They are produced by living animals.", "They are found only in rivers.", "They are made of metal."], answer: 1 },
            { text: "The word \"irritant\" in paragraph 2 is closest in meaning to", options: ["something that causes discomfort", "a type of food", "a shiny crystal", "a predator"], answer: 0 },
            { text: "According to paragraph 2, why does a mollusk cover an irritant with nacre?", options: ["to protect itself", "to attract mates", "to store food", "to grow a new shell"], answer: 0 },
            { text: "What gives a pearl its luster?", options: ["the color of the parasite", "the way its layers reflect and bend light", "the salt in sea water", "a coating added by jewelers"], answer: 1 },
            { text: "According to paragraph 3, what was the effect of cultured pearls?", options: ["Natural pearls became worthless.", "Pearls became affordable to many more people.", "Oysters became extinct.", "Divers found more natural pearls."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A trip to the market",
          text: "Every Saturday, my mother and I go to the local mar{{ket}}. It is very busy and colorful. We buy fresh vegeta{{bles}}, fruit and cheese from the far{{mers}}. My favorite stall sells olives of many diff{{erent}} kinds. The seller always lets me ta{{ste}} them. My mother likes to talk with the sell{{ers}} because she has known them for ye{{ars}}. After shopping, we drink tea in a small tea gar{{den}}. I lo{{ve}} our Saturday mor{{nings}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Babysitter needed",
          text: [
            "BABYSITTER NEEDED",
            "We are looking for a responsible student to look after our two children, aged 5 and 8, on Monday and Wednesday afternoons from 3 to 6 p.m.",
            "Duties include picking them up from school, helping with homework and preparing a simple snack. $16 per hour. Experience with children is required. Please email the Yılmaz family at yilmaz.family@example.com.",
          ],
          questions: [
            { text: "How many children need a babysitter?", options: ["one", "two", "three", "four"], answer: 1 },
            { text: "What is one of the babysitter's duties?", options: ["cooking dinner for the family", "helping with homework", "cleaning the house", "driving the children to sports"], answer: 1 },
            { text: "What is required for the job?", options: ["a driving license", "experience with children", "a teaching degree", "weekend availability"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why cats have whiskers",
          paragraphs: [
            "Cats have long, stiff hairs on their faces called whiskers. They also have smaller whiskers above their eyes and on the backs of their front legs.",
            "Whiskers are very sensitive. They are connected to many nerves, so they can feel tiny movements in the air. This helps cats find their way in the dark and notice things moving nearby.",
            "Whiskers also help cats measure spaces. A cat's whiskers are usually about as wide as its body, so if the whiskers fit through a gap, the cat knows its body can fit too. For this reason, people should never cut a cat's whiskers.",
          ],
          questions: [
            { text: "Where do cats have whiskers?", options: ["only on their noses", "on their faces, above their eyes and on their front legs", "on their tails", "on their backs"], answer: 1 },
            { text: "The word \"sensitive\" in paragraph 2 is closest in meaning to", options: ["able to feel small changes", "very strong", "very long", "easy to break"], answer: 0 },
            { text: "Why are whiskers so sensitive?", options: ["They are connected to many nerves.", "They are made of bone.", "They are very short.", "They grow quickly."], answer: 0 },
            { text: "How do whiskers help cats in the dark?", options: ["They glow.", "They feel movements in the air.", "They keep cats warm.", "They help cats see colors."], answer: 1 },
            { text: "Why should people never cut a cat's whiskers?", options: ["Cats use them to measure spaces.", "They never grow back.", "Cats use them to eat.", "Cutting them is painful."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Hindsight bias",
          text: "After an event has occurred, people often feel that they knew all along how it would tu{{rn}} out. This tendency is called hindsight bias. In one study, students were asked to predict the outcome of an impor{{tant}} political visit. After the visit, they remembered their predic{{tions}} as having been more accurate than they actually we{{re}}. Hindsight bias can make people overconfi{{dent}} about their ability to predict the fut{{ure}}. It can also lead to unfair judg{{ments}}, for example when doctors or managers are blamed for deci{{sions}} that seemed reasonable at the ti{{me}} they were ma{{de}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to library opening hours",
          text: [
            "To: All library users",
            "From: University Library",
            "Subject: 24-hour opening during exams",
            "During the final exam period, from December 1 to December 20, the main library will be open 24 hours a day. Between midnight and 7 a.m., only the ground and first floors will be open, and users must show a valid university ID to enter.",
            "The library café will close at 10 p.m. as usual, but vending machines with snacks and drinks will be available on the ground floor. Security staff will be present throughout the night. Please remember that study spaces may not be reserved by leaving personal belongings; items left unattended for more than an hour may be removed.",
          ],
          questions: [
            { text: "Which floors are open between midnight and 7 a.m.?", options: ["all floors", "only the ground and first floors", "only the top floor", "none"], answer: 1 },
            { text: "What must users show to enter at night?", options: ["a library card from another university", "a valid university ID", "a booking confirmation", "a letter from a professor"], answer: 1 },
            { text: "What may happen to items left unattended for over an hour?", options: ["They may be removed.", "They will be stored at the café.", "Their owners will be fined.", "Nothing will happen."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Deciphering the Rosetta Stone",
          paragraphs: [
            "In 1799, French soldiers rebuilding a fort near the town of Rashid, known to Europeans as Rosetta, in the Nile Delta, uncovered a large slab of dark stone covered with inscriptions. The stone recorded a decree issued by Egyptian priests in 196 BCE, written in three scripts: hieroglyphs, the formal script used for sacred texts; Demotic, an everyday script of the period; and ancient Greek, which scholars could still read.",
            "Because the three texts appeared to say the same thing, the stone offered a key to understanding Egyptian hieroglyphs, which no one had been able to read for more than a thousand years. Early scholars assumed that hieroglyphs were purely symbolic, each sign representing an idea. Progress came when researchers noticed that certain groups of signs were enclosed in oval shapes, called cartouches, and suggested that these contained the names of rulers. The English scientist Thomas Young identified several signs in the name of the ruler Ptolemy and their sound values.",
            "The decisive breakthrough was made by the French scholar Jean-François Champollion. Comparing cartouches on the Rosetta Stone with those on other monuments, and drawing on his knowledge of Coptic, a later form of the Egyptian language, he demonstrated in 1822 that hieroglyphic writing combined signs representing sounds with signs representing ideas. His work opened the way for scholars to read thousands of Egyptian texts, transforming knowledge of ancient Egyptian history, religion and daily life.",
          ],
          questions: [
            { text: "According to paragraph 1, why was the Rosetta Stone important?", options: ["It was the largest stone in Egypt.", "It recorded the same text in three scripts, including Greek.", "It showed a map of the Nile.", "It contained the name of every pharaoh."], answer: 1 },
            { text: "The word \"decisive\" in paragraph 3 is closest in meaning to", options: ["crucial", "minor", "early", "mistaken"], answer: 0 },
            { text: "According to paragraph 2, what did early scholars mistakenly believe about hieroglyphs?", options: ["They represented only sounds.", "They were purely symbolic, each sign representing an idea.", "They were a form of Greek.", "They were invented by the French."], answer: 1 },
            { text: "What did Thomas Young contribute?", options: ["He found the stone.", "He identified sound values of signs in Ptolemy's name.", "He translated all Egyptian texts.", "He invented Coptic."], answer: 1 },
            { text: "What did Champollion demonstrate in 1822?", options: ["Hieroglyphs combined sound signs and idea signs.", "Hieroglyphs were the same as Greek.", "Demotic was older than hieroglyphs.", "The Rosetta Stone was a forgery."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Seda", prompt: "Why are you taking a taxi?", chunks: ["I", "missed", "the last bus", "because of", "the meeting"], end: "." },
      { promptBy: "Mike", prompt: "Have you seen the new exhibition?", chunks: ["we", "are going", "to see it", "on", "Saturday afternoon"], end: "." },
      { promptBy: "Ece", prompt: "I'm nervous about my driving test.", chunks: ["why don't", "you", "take", "one more", "practice lesson"], end: "?" },
      { promptBy: "Noah", prompt: "Where do you usually buy your books?", chunks: ["I", "usually", "buy them", "from", "a second-hand shop"], end: "." },
      { promptBy: "Defne", prompt: "How was the science fair?", chunks: ["our project", "won", "second prize", "in", "our category"], end: "." },
      { promptBy: "Chris", prompt: "Why is the swimming pool closed?", chunks: ["they", "are", "cleaning", "the water", "filters"], end: "." },
      { promptBy: "Melike", prompt: "When does your flight land?", chunks: ["it", "lands", "at", "around", "midnight"], end: "." },
      { promptBy: "Aaron", prompt: "What did you think of the restaurant?", chunks: ["the service", "was", "slow", "but", "the food was excellent"], end: "." },
      { promptBy: "Yağmur", prompt: "The bus is very crowded.", chunks: ["should", "we", "wait for", "the next", "one"], end: "?" },
      { promptBy: "Sean", prompt: "Why did you take up painting?", chunks: ["it", "helps me", "relax", "after", "a long day"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently joined a volunteer program that teaches English to children at a community center. You would like to suggest some changes to make the lessons more effective.",
      to: "the coordinator of the volunteer program, Ms. Özkan",
      subject: "Suggestions for the English lessons",
      tasks: ["Say what you have enjoyed about volunteering so far.", "Describe a problem you have noticed in the lessons.", "Suggest one or two changes that could help."],
      sample: "Dear Ms. Özkan,\n\nI have now been volunteering at the community center for about six weeks, and I wanted to say how much I enjoy it. The children are enthusiastic and curious, and it is very rewarding to see them become more confident each week.\n\nHowever, I have noticed one problem. Our groups include children of very different ages and levels, from complete beginners to children who already read simple stories. As a result, the lessons are often too difficult for some children and too easy for others, and both groups lose interest quickly.\n\nI would like to suggest two changes. First, we could divide the children into two groups by level for part of each session, with one volunteer working with each group. Second, it would be helpful to have a small library of picture books and games at different levels, which more advanced children could use independently. I would be happy to help organize this.\n\nThank you for your time, and I look forward to hearing what you think.\n\nBest regards,\nTolga Aydın",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Technology and Society",
      professor: {
        name: "Dr. Price",
        text: "Self-driving cars are being tested in several cities. Supporters claim they will reduce accidents, since most crashes are caused by human error. Critics worry about safety in unexpected situations, job losses for professional drivers and questions of responsibility when accidents happen. Should governments encourage the widespread use of self-driving cars? Why or why not?",
      },
      students: [
        { name: "Natalie", text: "Yes. Computers don't get tired, drunk or distracted by phones. Even if self-driving cars aren't perfect, they could save thousands of lives every year." },
        { name: "Kerim", text: "Not yet. The technology still makes strange mistakes, and millions of taxi and truck drivers could lose their jobs. We need much more testing first." },
      ],
      sample: "I believe governments should encourage self-driving cars, but gradually and with strict safety standards. Natalie makes a powerful argument: the vast majority of road accidents are caused by human error, such as speeding, fatigue and distraction, and automated systems do not suffer from these problems. If self-driving cars can eventually reduce accidents even by a third, the number of lives saved would be enormous. However, Kerim is right that the technology is not yet ready for every situation, such as heavy snow or unusual road works. Governments should therefore introduce self-driving vehicles step by step, starting with specific uses like highway trucking or airport shuttles, and require extensive testing and transparent reporting of incidents. They should also prepare retraining programs for professional drivers, so that the benefits of the technology do not come at the expense of workers' livelihoods.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are working at the reception of a dental clinic. The dentist is telling you what to say to patients.",
      sentences: [
        "Good morning, please take a seat.",
        "The dentist will call you shortly.",
        "Please switch off your phone in the treatment room.",
        "Your next check-up should be in six months.",
        "We send appointment reminders by text message.",
        "If you need to cancel an appointment, please let us know at least twenty-four hours in advance.",
        "Patients who arrive more than fifteen minutes late may need to book another appointment, because the dentist has a full schedule.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with volunteering and helping others. The researcher will ask you some questions.",
      questions: [
        {
          text: "Have you ever done volunteer work? Describe your experience.",
          sample: "Yes, last summer I volunteered at an animal shelter near my home. I went three mornings a week to feed the dogs, clean their kennels and take them for walks. It was hard work, especially in the heat, but very rewarding. I also helped at adoption days, where I talked to families about the animals. Seeing a dog I had cared for go to a loving home was one of the best feelings I've ever had.",
        },
        {
          text: "Why do you think people volunteer?",
          sample: "I think people volunteer for many reasons. Many simply want to help others or support a cause they care about, like animals or the environment. Others volunteer to gain experience for their careers, especially students who want to strengthen their CVs. Volunteering is also a great way to meet new people and feel part of a community. For older people who have retired, it can give a sense of purpose and structure to their days.",
        },
        {
          text: "Some people think that volunteering should be required for high school students. Do you agree?",
          sample: "I partly agree. Requiring some volunteering could introduce students to experiences they would never try on their own, and many would discover that they enjoy helping others. It can also teach responsibility and empathy. However, if volunteering is forced, some students might do it reluctantly, which isn't good for them or for the organizations. I think schools should require a small number of hours but let students choose the type of volunteering that interests them.",
        },
        {
          text: "Do you think governments should rely on volunteers to provide important services?",
          sample: "No, I don't think governments should rely on volunteers for essential services. Volunteers are extremely valuable, but they may not always be available, and they don't always have professional training. Services like healthcare, education and emergency response need paid professionals who can be held accountable. Volunteers work best when they add something extra, such as company for elderly people in hospitals or tutoring for children, rather than replacing services that the government should provide.",
        },
      ],
    },
  },
};
