import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 39 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_39: ToeflTest = {
  id: "toefl-39",
  no: 39,
  title: "TOEFL iBT Practice Test 39",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Rubber bands",
          text: "Rubber bands are simple loops of elastic material that can be stretched and then return to their original sh{{ape}}. The first rubber band was patented in England in 1845 by a manufac{{turer}} who made them from natural rubber. Since then, rubber bands have been used for countless pur{{poses}}. Offices use them to hold papers and enve{{lopes}} together, farmers use them to bundle vegeta{{bles}}, and newspapers were once rolled and held with th{{em}}. Most rubber bands today are still made from natural rub{{ber}} because it stretches better than many synthetic mate{{rials}}. However, they slowly lose their elas{{ticity}} when exposed to heat and sunl{{ight}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a camera",
          text: [
            "Hey Kaan, my sister's wedding is this Saturday and my camera just stopped working. Could I borrow yours for the weekend?",
            "I'll take good care of it and bring it back on Monday with a fully charged battery. I can pick it up from your place on Friday evening if that works.",
          ],
          questions: [
            { text: "Why does the writer want to borrow a camera?", options: ["for a sister's wedding", "for a photography class", "for a vacation", "for a school project"], answer: 0 },
            { text: "When does the writer plan to return the camera?", options: ["on Friday evening", "on Saturday", "on Monday", "next month"], answer: 2 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Exam-period noise rules",
          text: [
            "EXTENDED QUIET HOURS: FINAL EXAM PERIOD",
            "From December 8 to December 20, quiet hours in all residence halls will be in effect 24 hours a day. Music, loud conversations and gatherings in hallways are not permitted at any time.",
            "Residents who disturb others may receive a formal warning. If you need a space for group study, rooms are available in the student center until midnight every day.",
          ],
          questions: [
            { text: "What is the purpose of the notice?", options: ["to announce extended quiet hours during exams", "to cancel final exams", "to close the residence halls", "to invite students to a party"], answer: 0 },
            { text: "What may happen to residents who disturb others?", options: ["They may be asked to leave immediately.", "They may receive a formal warning.", "They may have to pay a fine.", "Nothing will happen."], answer: 1 },
            { text: "Where can students study in groups?", options: ["in the hallways", "in rooms at the student center", "in the dining hall after midnight", "in their professors' offices"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How compasses work",
          paragraphs: [
            "For centuries, travelers have used compasses to find their direction. A simple compass consists of a small, lightweight magnetized needle that is free to rotate. Wherever it is placed, the needle turns until one end points roughly toward the north. This happens because the Earth itself behaves like a giant magnet, and the compass needle lines up with the Earth's magnetic field.",
            "The Earth's magnetic field is produced deep inside the planet, where the outer core consists of hot, liquid iron in constant motion. The movement of this electrically conducting metal generates electric currents, which in turn create a magnetic field that extends far into space. Interestingly, the magnetic poles are not in the same places as the geographic North and South Poles, and they slowly move over time. Navigators must therefore make small corrections to their compass readings depending on where they are.",
            "The earliest compasses were developed in China, where magnetized pieces of iron or a naturally magnetic stone called lodestone were used at least as early as the eleventh century. The compass later spread to the Islamic world and Europe, where it became essential for sailors on long voyages, especially when clouds hid the sun and stars. Although satellite navigation systems are widely used today, compasses remain important because they do not require batteries or signals, and pilots, hikers and sailors still carry them as a reliable backup.",
          ],
          questions: [
            { text: "According to paragraph 1, why does a compass needle point toward the north?", options: ["It is attracted by the North Star.", "It lines up with the Earth's magnetic field.", "It is heavier at one end.", "Wind pushes it in that direction."], answer: 1 },
            { text: "According to paragraph 2, what produces the Earth's magnetic field?", options: ["the movement of liquid iron in the outer core", "sunlight", "the oceans", "mountains made of iron"], answer: 0 },
            { text: "Why must navigators make small corrections to compass readings?", options: ["The magnetic poles are not at the geographic poles and they move.", "Compasses are often broken.", "The Earth is not round.", "Needles become weaker at night."], answer: 0 },
            { text: "The word \"essential\" in paragraph 3 is closest in meaning to", options: ["necessary", "decorative", "dangerous", "expensive"], answer: 0 },
            { text: "According to paragraph 3, why are compasses still important today?", options: ["They are more accurate than satellites.", "They do not require batteries or signals.", "They are required by law.", "They are cheaper than maps."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our new puppy",
          text: "Last month, my family got a new pu{{ppy}}. His name is Biscuit, and he is brown and wh{{ite}}. He is very small, but he has a lot of ene{{rgy}}. Every morning, he wakes me up by jumping on my b{{ed}}. I take him for a wa{{lk}} in the park before school. He loves playing with ba{{lls}} and chasing birds. Sometimes he chews my sho{{es}}, which makes my mother an{{gry}}. We are teaching him to sit and wait for his fo{{od}}. Biscuit is already a very important member of our fam{{ily}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "School bake sale",
          text: [
            "BAKE SALE THIS FRIDAY!",
            "Students from Class 7B are selling homemade cakes, cookies and muffins in the school hall during lunch break on Friday.",
            "Everything costs between 50 cents and $2. All money will help pay for our class trip to the science museum. Please bring small coins!",
          ],
          questions: [
            { text: "Who is organizing the bake sale?", options: ["the teachers", "students from Class 7B", "a local bakery", "parents only"], answer: 1 },
            { text: "When is the bake sale?", options: ["Friday during lunch break", "Saturday morning", "every day after school", "Monday evening"], answer: 0 },
            { text: "What will the money be used for?", options: ["new books", "a class trip to the science museum", "a school party", "sports equipment"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Where cork comes from",
          paragraphs: [
            "Cork is a light material used to close wine bottles and to make floors, boards and shoes. It comes from the bark of the cork oak tree, which grows mainly in Portugal and Spain.",
            "Workers remove the thick outer bark by hand with special axes. This does not kill the tree. The bark grows back, and it can be harvested again after about nine years. A cork oak can live for more than two hundred years.",
            "Cork is full of tiny air pockets. This makes it light, soft and able to float. It also keeps out water and protects against heat and noise. Because the trees are not cut down, cork forests remain home to many birds and animals.",
          ],
          questions: [
            { text: "Where does cork come from?", options: ["the roots of a tree", "the bark of the cork oak", "the leaves of a plant", "the seeds of a fruit"], answer: 1 },
            { text: "What happens to the tree when its bark is removed?", options: ["It dies.", "It grows new bark.", "It stops growing.", "It must be cut down."], answer: 1 },
            { text: "How often can cork be harvested from a tree?", options: ["every year", "about every nine years", "every two hundred years", "only once"], answer: 1 },
            { text: "The word \"harvested\" in paragraph 2 is closest in meaning to", options: ["collected", "painted", "burned", "planted"], answer: 0 },
            { text: "Why is cork light and able to float?", options: ["It is full of tiny air pockets.", "It is very thin.", "It contains oil.", "It is mixed with plastic."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The status quo bias",
          text: "When people are offered a choice between keeping their current situation and changing it, they often prefer to keep things as they a{{re}}, even when the alternative is clearly bet{{ter}}. This tendency is called the status quo bias. For example, many employees remain in the same retirement sav{{ings}} plan for years without checking whether other op{{tions}} would suit them better. Researchers have found that the bias becomes stro{{nger}} as the number of choices incre{{ases}}. One reason may be that people fear regret more when they actively change something and it turns out bad{{ly}}. Governments sometimes use this bi{{as}} by making beneficial choices the def{{ault}} option, such as automatic enrollment in pension sch{{emes}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Conference travel funding",
          text: [
            "To: Doctoral students in the Faculty of Social Sciences",
            "From: Faculty Research Committee",
            "Subject: Travel grants for academic conferences",
            "The Faculty offers travel grants of up to $800 for doctoral students who have had a paper accepted for presentation at an international academic conference. Grants may cover registration fees, transportation and accommodation, but not meals or personal expenses.",
            "Applications must be submitted at least six weeks before the conference and must include the acceptance letter, an estimated budget and a short statement from your supervisor. Each student may receive only one grant per academic year. After the conference, recipients must submit original receipts within thirty days; unclaimed funds will be returned to the grant pool.",
          ],
          questions: [
            { text: "Who is eligible for a travel grant?", options: ["all students in the faculty", "doctoral students with a paper accepted at an international conference", "professors only", "students attending any conference as visitors"], answer: 1 },
            { text: "Which expense is NOT covered by the grant?", options: ["registration fees", "transportation", "accommodation", "meals"], answer: 3 },
            { text: "What must recipients do after the conference?", options: ["write a report for the newsletter", "submit original receipts within thirty days", "return the full grant", "apply for another grant"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Ants that farm aphids",
          paragraphs: [
            "Humans are not the only species that practices a form of farming. Many species of ants maintain close relationships with aphids, small insects that feed on the sap of plants. As aphids drink large quantities of sugary sap, they release a sweet liquid waste called honeydew. Ants collect this honeydew as food, often stroking the aphids with their antennae to encourage them to release more of it.",
            "In return, the ants provide the aphids with valuable services. They defend aphid colonies against predators such as ladybugs and parasitic wasps, sometimes attacking insects many times their own size. Some ant species carry aphids to fresh, healthy parts of plants where the sap is richer, and in winter they may take aphid eggs into their nests to protect them from the cold. Studies have shown that aphid colonies tended by ants often grow much larger than colonies without ants.",
            "The relationship, however, is not entirely generous on the ants' side. Some ants produce chemicals that slow down the development of the aphids' wings, preventing them from flying away. Others bite off aphids' wings or eat some of the aphids when honeydew is not needed. Biologists therefore describe the relationship as a form of mutualism with elements of control, in which both partners benefit but one partner clearly has more power. Because ants protect aphids, which can damage crops, ant colonies can sometimes increase the harm aphids cause to agriculture.",
          ],
          questions: [
            { text: "According to paragraph 1, what is honeydew?", options: ["a sweet liquid waste released by aphids", "a type of flower", "a chemical made by ants", "the sap of plants"], answer: 0 },
            { text: "According to paragraph 2, how do ants help aphids?", options: ["by feeding them honeydew", "by defending them from predators and moving them to better plants", "by building nests for them in trees", "by giving them wings"], answer: 1 },
            { text: "The word \"tended\" in paragraph 2 is closest in meaning to", options: ["cared for", "attacked", "ignored", "counted"], answer: 0 },
            { text: "According to paragraph 3, why do some ants slow down the development of aphids' wings?", options: ["to prevent the aphids from flying away", "to help the aphids grow faster", "to protect aphids from the cold", "to make the aphids more colorful"], answer: 0 },
            { text: "What can be inferred about the relationship between ants and aphids?", options: ["Only aphids benefit from it.", "Both benefit, but ants have more control.", "It is harmful to both species.", "It has no effect on agriculture."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Barış", prompt: "Why are you carrying an umbrella?", chunks: ["the forecast", "says", "it", "will rain", "this afternoon"], end: "." },
      { promptBy: "Kate", prompt: "Did you like the new restaurant?", chunks: ["the food", "was", "good but", "the service", "was slow"], end: "." },
      { promptBy: "Defne", prompt: "I'm nervous about my driving test.", chunks: ["would", "it help", "to practice", "with me", "on Sunday"], end: "?" },
      { promptBy: "Joe", prompt: "Where should we meet tomorrow?", chunks: ["let's", "meet", "in front of", "the main", "library"], end: "." },
      { promptBy: "Ceren", prompt: "How did you learn to play the piano?", chunks: ["my aunt", "gave me", "lessons", "when I was", "a child"], end: "." },
      { promptBy: "Alex", prompt: "Why is the shop so busy today?", chunks: ["everything", "is", "half price", "until", "the weekend"], end: "." },
      { promptBy: "Yasemin", prompt: "What did you think of the documentary?", chunks: ["it", "made me", "think", "about", "climate change"], end: "." },
      { promptBy: "Chris", prompt: "When does your flight leave?", chunks: ["it", "leaves", "early", "tomorrow", "morning"], end: "." },
      { promptBy: "Eda", prompt: "My laptop is running very slowly.", chunks: ["have you", "tried", "restarting", "it", "recently"], end: "?" },
      { promptBy: "Sean", prompt: "Why did you join the debate club?", chunks: ["I", "wanted to", "become", "a more confident", "speaker"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You booked a room for three nights at a hotel for a conference, but the conference dates have changed. You need to change your booking.",
      to: "the hotel reservations manager",
      subject: "Change to my reservation",
      tasks: ["Give details of your original booking.", "Explain why you need to change it.", "Describe the new dates and ask about any extra costs."],
      sample: "Dear Reservations Manager,\n\nI am writing regarding my reservation at your hotel. I booked a single room for three nights, from April 14 to April 17, under the name Deniz Aksoy. My confirmation number is HT-58720.\n\nI made this booking because I am attending the International Conference on Renewable Energy, which was originally scheduled for those dates. However, the organizers have just announced that the conference has been moved one week later because of a problem with the venue.\n\nI would therefore like to change my reservation to the nights of April 21 to April 24, if a room is available. I would also be grateful if you could tell me whether there will be any change in the room price or a fee for changing the booking. If possible, I would still prefer a quiet room on a higher floor.\n\nThank you very much for your help, and I look forward to hearing from you.\n\nYours faithfully,\nDeniz Aksoy",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Media Studies",
      professor: {
        name: "Dr. Nguyen",
        text: "News organizations increasingly use short videos and headlines designed to be shared on social media. Some people believe this helps more people stay informed. Others argue that it encourages shallow understanding and makes news more sensational. Has social media made people better or worse informed about current events? Explain your view.",
      },
      students: [
        { name: "Laura", text: "Better informed. Many young people never read newspapers, but now they see news every day on their phones. Even short videos are better than nothing." },
        { name: "Mert", text: "Worse informed. People just read headlines and share them without checking. Social media also spreads false information much faster than the truth." },
      ],
      sample: "I think social media has made people more aware of current events but not necessarily better informed. Laura is right that platforms expose many people, especially young people, to news they would otherwise never encounter. A short video about a natural disaster or an election can spark interest and lead some viewers to look for more information. However, I agree with Mert that the format often encourages shallow engagement. Many users scroll past dozens of headlines a day and share stories without reading them, which makes it easy for misleading or false information to spread. As a result, people may feel informed while actually understanding very little. The solution is not to avoid social media, but to teach media literacy so that people learn to check sources and read beyond the headline.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-JennyNeural",
    repeat: {
      scene: "You are a new employee at a hotel front desk. The front office manager is telling you what to say to guests.",
      sentences: [
        "Good evening, welcome to our hotel.",
        "May I see your passport, please?",
        "Breakfast is served from seven to ten.",
        "Your room is on the fourth floor.",
        "The swimming pool is open until nine o'clock in the evening.",
        "If you need anything during your stay, please call the front desk by pressing zero on your phone.",
        "Check-out time is at noon, but if you need a late check-out, please let us know the day before so that we can check availability.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's attitudes toward work and careers. The researcher will ask you some questions.",
      questions: [
        {
          text: "What kind of job would you like to have in the future, and why?",
          sample: "I would like to work as an environmental engineer. I've always been interested in science, and I care a lot about protecting nature. Environmental engineers design systems to clean water, reduce pollution and manage waste, so I feel that this job would let me use my technical skills to solve real problems. I also like the idea of working on different projects and sometimes working outdoors instead of sitting in an office every day.",
        },
        {
          text: "Is it more important to have a job you enjoy or a job that pays well?",
          sample: "For me, enjoying my job is more important, as long as the salary is enough to live comfortably. We spend a huge part of our lives at work, and doing something we find boring or stressful every day can affect our health and happiness. That said, I understand that money matters, especially for people who support a family. Ideally, I would like to find a job that I enjoy and that also offers a fair salary.",
        },
        {
          text: "Do you think people should stay with one company for a long time or change jobs often?",
          sample: "I think both have advantages. Staying with one company for many years can lead to job security, promotions and strong relationships with colleagues. On the other hand, changing jobs every few years can help people learn new skills, earn higher salaries and discover what they really enjoy. Personally, I would like to try a few different jobs early in my career and then stay longer with a company where I feel I can grow.",
        },
        {
          text: "How do you think artificial intelligence will affect jobs in the future?",
          sample: "I think artificial intelligence will change many jobs rather than simply eliminate them. Repetitive tasks, such as data entry or basic customer service, will probably be done by AI systems. However, new jobs will appear, for example in designing, maintaining and supervising these systems. People will also need to focus more on skills that machines find difficult, like creativity, communication and complex decision-making. Governments and schools should help workers retrain so that no one is left behind.",
        },
      ],
    },
  },
};
