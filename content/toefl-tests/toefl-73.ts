import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 73 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_73: ToeflTest = {
  id: "toefl-73",
  no: 73,
  title: "TOEFL iBT Practice Test 73",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Wallpaper",
          text: "Decorating walls with paper began in China, where people pasted painted rice paper onto their walls more than a thousand years a{{go}}. In Europe, wallpaper became popular in the sixteenth and seventeenth centuries as a cheaper alternative to the expensive tapes{{tries}} that wealthy families hung in their ho{{mes}}. Early wallpaper was printed by hand using carved wooden bl{{ocks}}, and each color required a separate blo{{ck}}, so the process was slow. In the nineteenth century, printing mac{{hines}} made wallpaper affordable for ordinary fami{{lies}}. Some popular green wallpapers of that time contained arsenic, a poisonous subs{{tance}}, which may have made people sick. Today, wallpaper is made from safer mate{{rials}} and is again fashionable in modern inte{{riors}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a projector",
          text: [
            "Hi Ms. Kaya, our student club is showing a documentary in the common room on Friday evening, but the room doesn't have a projector.",
            "Could we borrow the portable projector from the department office? I'll collect it at 4 p.m. on Friday and return it first thing Monday morning.",
          ],
          questions: [
            { text: "Why does the writer need a projector?", options: ["to show a documentary in the common room", "for a class presentation", "for a wedding", "to watch sports"], answer: 0 },
            { text: "When will the writer return the projector?", options: ["first thing Monday morning", "on Friday evening", "next month", "on Saturday"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Bicycle registration day",
          text: [
            "FREE BICYCLE REGISTRATION",
            "Campus security will hold a bicycle registration day on Wednesday, September 18, from 10 a.m. to 3 p.m. outside the student center. Registration is free and takes about five minutes.",
            "Each registered bicycle will receive a sticker with a unique number, which helps police return stolen bicycles to their owners. Please bring your student card and your bicycle. Security staff will also offer free lock checks and safety advice.",
          ],
          questions: [
            { text: "Why should students register their bicycles?", options: ["to help police return stolen bicycles", "to park for free", "to enter a race", "to receive a discount"], answer: 0 },
            { text: "What should students bring?", options: ["their student card and bicycle", "a photo of the bicycle", "a lock", "a fee"], answer: 0 },
            { text: "What else will security staff offer?", options: ["free lock checks and safety advice", "free bicycles", "repairs", "helmets"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The discovery of penicillin",
          paragraphs: [
            "Before the twentieth century, infections caused by bacteria were among the leading causes of death worldwide. A small cut, a sore throat or childbirth could lead to a fatal infection, and doctors had few effective treatments. The discovery of antibiotics, beginning with penicillin, transformed medicine and has saved millions of lives.",
            "In 1928, the Scottish scientist Alexander Fleming returned to his laboratory in London after a holiday and noticed something unusual. One of the dishes in which he had been growing bacteria had been contaminated by a mold. Around the mold, the bacteria had been destroyed, leaving a clear ring. Fleming realized that the mold, a type of Penicillium, was producing a substance that killed bacteria. He named it penicillin. However, he found it difficult to produce the substance in large amounts and to purify it, and for about a decade his discovery received relatively little attention.",
            "In the late 1930s, a team at the University of Oxford, led by Howard Florey and Ernst Chain, developed methods to purify penicillin and test it on animals and then on patients. The results were dramatic. During the Second World War, the United States and Britain organized large-scale production, and penicillin saved many wounded soldiers from deadly infections. In 1945, Fleming, Florey and Chain shared the Nobel Prize. In his Nobel lecture, Fleming warned that bacteria could become resistant to penicillin if it was misused, a prediction that has proved correct, as antibiotic resistance is now a major global health concern.",
          ],
          questions: [
            { text: "According to paragraph 1, why were bacterial infections so dangerous before the twentieth century?", options: ["Doctors had few effective treatments.", "Bacteria did not exist.", "People rarely got infections.", "Hospitals were too expensive."], answer: 0 },
            { text: "According to paragraph 2, what did Fleming notice?", options: ["Bacteria had been destroyed around a mold in one of his dishes.", "His bacteria had grown faster.", "His laboratory had been cleaned.", "A new type of virus."], answer: 0 },
            { text: "The word \"contaminated\" in paragraph 2 is closest in meaning to", options: ["made impure by something unwanted", "cleaned", "heated", "broken"], answer: 0 },
            { text: "Why did Fleming's discovery receive little attention for about a decade?", options: ["He found it difficult to produce and purify penicillin.", "He kept it secret.", "Other scientists disagreed with him.", "Penicillin did not work."], answer: 0 },
            { text: "What did Fleming warn about in his Nobel lecture?", options: ["Bacteria could become resistant if penicillin was misused.", "Penicillin was too expensive.", "Molds were dangerous.", "Wars would increase infections."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our family's new car",
          text: "Last month, my parents bought a new c{{ar}}. Our old car was very old and often broke do{{wn}}. The new one is blue and has big win{{dows}}. It is also electric, so it does not use pet{{rol}}. My father charges it at night in our gar{{age}}. The car is very qu{{iet}}, and the seats are very comfor{{table}}. Last weekend, we drove to the mountains to visit my gran{{dparents}}. My little brother slept the whole w{{ay}}. I like our new car very mu{{ch}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Night photography workshop",
          text: [
            "TAKE AMAZING PHOTOS AT NIGHT!",
            "Join our night photography workshop on Saturday, October 11, from 7 to 10 p.m. at the harbor. Learn how to photograph city lights, stars and reflections on the water.",
            "Bring your own camera and a tripod if you have one. Tripods can also be rented for $5. The workshop costs $30 and is limited to twelve people.",
          ],
          questions: [
            { text: "What will participants learn to photograph?", options: ["city lights, stars and reflections", "birds", "people in a studio", "food"], answer: 0 },
            { text: "What can participants rent?", options: ["tripods", "cameras", "lenses", "boats"], answer: 0 },
            { text: "How many people can join the workshop?", options: ["twelve", "twenty", "six", "unlimited"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why starlings fly together",
          paragraphs: [
            "In autumn and winter, thousands of small birds called starlings sometimes fly together in huge groups. These groups twist and turn in the sky like a moving cloud. This is called a murmuration.",
            "Each starling watches about seven of the birds closest to it. When one bird changes direction, the nearby birds follow quickly. In this way, the whole group can change shape in a second, without any leader.",
            "Scientists think starlings fly together for safety. Hawks and other hunting birds find it very hard to catch one starling in such a large, fast-moving group. After flying together, the starlings usually rest together for the night.",
          ],
          questions: [
            { text: "What is a murmuration?", options: ["a huge group of starlings flying together", "a type of nest", "a bird song", "a winter storm"], answer: 0 },
            { text: "How many nearby birds does each starling watch?", options: ["about seven", "about one hundred", "one", "all of them"], answer: 0 },
            { text: "The word \"leader\" in paragraph 2 is closest in meaning to", options: ["a bird that guides the others", "a baby bird", "a hunting bird", "a nest"], answer: 0 },
            { text: "Why do scientists think starlings fly together?", options: ["for safety from hunting birds", "to find warm weather", "to look for water", "to build nests"], answer: 0 },
            { text: "What do starlings usually do after flying together?", options: ["rest together for the night", "fly to another country", "build new nests", "look for food alone"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The false consensus effect",
          text: "People often assume that others share their opinions, habits and preferences more than they actually do. Psychologists call this the false consensus eff{{ect}}. In a classic study, students were asked whether they would walk around campus wearing a large sign with an unusual mess{{age}}. Students who agreed estimated that most of their pe{{ers}} would also agree, while those who refused believed most others would ref{{use}} as well. One reason for this bias is that people spend most of their time with fri{{ends}} who are similar to them. Another is that people want to see their own choices as nor{{mal}} and reasonable. The effect can lead to mis{{understandings}}, for example when politicians or compa{{nies}} overestimate how many people share their vie{{ws}} about an iss{{ue}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Student transit pass changes",
          text: [
            "To: All registered students",
            "From: Office of Student Services",
            "Subject: Changes to the student transit pass",
            "Starting next semester, the student transit pass will be included automatically in all full-time students' fees, giving unlimited travel on city buses, trams and the metro. The cost of $45 per semester is much lower than the regular monthly price.",
            "Part-time students may purchase the pass separately through the student portal. Students who live outside the city and do not use public transport may apply for an exemption by providing proof of their address before the second week of classes. Passes will be added to student cards, so no separate card is needed.",
          ],
          questions: [
            { text: "What change is being introduced?", options: ["The transit pass will be included automatically in full-time students' fees.", "The transit pass will be canceled.", "Students will need a new card.", "Buses will be free for everyone."], answer: 0 },
            { text: "How can part-time students get the pass?", options: ["by purchasing it through the student portal", "automatically", "at the bus station", "they cannot"], answer: 0 },
            { text: "Who may apply for an exemption?", options: ["students who live outside the city and do not use public transport", "all students", "students who drive cars", "international students only"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The environmental cost of fast fashion",
          paragraphs: [
            "Over the past few decades, the clothing industry has changed dramatically. Many retailers now follow a 'fast fashion' model, producing large quantities of inexpensive clothing that copies the latest trends and reaches stores within weeks. Some brands introduce new collections almost every week. As a result, people buy far more clothes than in the past, and they keep them for a shorter time; many garments are worn only a few times before being thrown away.",
            "This model has significant environmental consequences. Producing textiles requires enormous amounts of water, energy and chemicals. Growing cotton, for example, often depends on irrigation and pesticides, while dyeing and finishing fabrics can release harmful chemicals into rivers if wastewater is not properly treated. Synthetic fabrics such as polyester are made from petroleum, and when they are washed, they release tiny plastic fibers that can end up in oceans. Most discarded clothing is either burned or sent to landfills, and only a small fraction is recycled into new clothing.",
            "Fast fashion has also been criticized for its social impact, since much production takes place in countries where workers may receive low wages and face unsafe conditions. In response, some consumers are buying fewer, higher-quality garments, shopping second-hand or renting clothes for special occasions. Some brands have introduced recycling programs or promise to use more sustainable materials, although critics warn that such efforts can be more about marketing than real change. Several governments are considering policies, such as requiring producers to take responsibility for collecting and recycling the clothes they sell.",
          ],
          questions: [
            { text: "According to paragraph 1, what is 'fast fashion'?", options: ["producing large quantities of cheap, trendy clothing quickly", "making clothes by hand slowly", "selling only expensive clothing", "renting clothes to customers"], answer: 0 },
            { text: "According to paragraph 2, what happens when synthetic fabrics are washed?", options: ["They release tiny plastic fibers.", "They become stronger.", "They turn into cotton.", "They change color."], answer: 0 },
            { text: "The word \"discarded\" in paragraph 2 is closest in meaning to", options: ["thrown away", "repaired", "sold", "washed"], answer: 0 },
            { text: "According to paragraph 3, how are some consumers responding to fast fashion?", options: ["by buying fewer, higher-quality garments or shopping second-hand", "by buying more clothes", "by refusing to wear clothes", "by making their own fabrics"], answer: 0 },
            { text: "What concern do critics raise about brands' sustainability efforts?", options: ["They may be more about marketing than real change.", "They are too expensive for brands.", "They are required by law everywhere.", "They have solved all problems."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Erkan", prompt: "Why are you learning to swim now?", chunks: ["I", "am going", "on a diving", "holiday", "next summer"], end: "." },
      { promptBy: "Laura", prompt: "Did you like your new apartment?", chunks: ["it", "has", "a beautiful", "view", "of the park"], end: "." },
      { promptBy: "Sinem", prompt: "I can't stop thinking about my exam.", chunks: ["why don't", "you", "go", "for a walk", "to relax"], end: "?" },
      { promptBy: "Henry", prompt: "How long did the meeting last?", chunks: ["it", "lasted", "almost", "three", "hours"], end: "." },
      { promptBy: "Cansu", prompt: "When will the new café open?", chunks: ["it", "will", "open", "at the beginning", "of March"], end: "." },
      { promptBy: "Jack", prompt: "Why are the streets wet?", chunks: ["the city", "cleaned", "them", "early", "this morning"], end: "." },
      { promptBy: "Derya", prompt: "What did the professor say about your project?", chunks: ["he", "said", "it", "was", "very creative"], end: "." },
      { promptBy: "Sam", prompt: "Where did you buy these flowers?", chunks: ["I", "bought them", "at", "the market", "on Main Street"], end: "." },
      { promptBy: "Nehir", prompt: "The music is too loud.", chunks: ["could you", "please", "turn", "it", "down a little"], end: "?" },
      { promptBy: "Owen", prompt: "Why did you choose to study economics?", chunks: ["I", "am interested in", "how", "markets", "work"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You bought tickets for a concert, but the event was canceled at the last minute. The organizer has not yet explained how customers will be refunded. You want to write to the ticket company.",
      to: "the ticket company's customer service department",
      subject: "Refund for canceled concert",
      tasks: ["Give details of your ticket purchase.", "Explain what happened.", "Ask about the refund and any extra costs you had."],
      sample: "Dear Customer Service Department,\n\nOn February 12, I bought two tickets through your website for the Blue River concert at the City Arena on April 5. The tickets cost $85 each, and my order number is TK-90412.\n\nOn the day of the concert, my friend and I traveled to the city by train and arrived at the arena an hour before the show. Only then did we see a sign announcing that the concert had been canceled because the lead singer was ill. We received an email from your company at 6:30 p.m., just thirty minutes before the concert was due to start. Since then, I have not received any information about a refund.\n\nCould you please tell me how and when I will receive a full refund for the tickets? In addition, because of the late cancellation, we had to pay $60 for train tickets and $25 for parking, which we would not have spent if we had been informed earlier. I would like to know whether your company will cover any of these costs.\n\nI look forward to your prompt reply.\n\nYours sincerely,\nCeren Aktaş",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Hayes",
        text: "Many people today use dating apps to meet potential partners rather than meeting people through friends, work or social activities. Some believe apps make it easier to find compatible partners. Others argue that apps make relationships more superficial because people judge each other mainly on photos. Have dating apps had a positive or negative effect on relationships? Explain your view.",
      },
      students: [
        { name: "Sophie", text: "Mostly positive. Apps help people meet others they would never meet otherwise, especially in big cities or for people who are busy or shy." },
        { name: "Burak", text: "Mostly negative. People swipe through hundreds of profiles and always think someone better is out there, so they don't commit to anyone." },
      ],
      sample: "I think dating apps have had both positive and negative effects, but overall they have been more positive, especially for certain groups of people. Sophie is right that apps greatly expand the number of people someone can meet. For people who work long hours, have moved to a new city or feel shy in social situations, apps provide opportunities that might not otherwise exist, and many couples today report meeting online. However, Burak raises a real concern. When users can see an almost endless supply of profiles, they may become overly selective and quick to reject people based on appearance, and some may find it difficult to commit. The key is how people use these tools. Treating apps as a way to start conversations, and then getting to know people properly in person, can lead to meaningful relationships.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new employee at a gym. The manager is telling you what to say to new members.",
      sentences: [
        "Welcome to the fitness center.",
        "Here is your membership card.",
        "The gym is open from six until midnight.",
        "Please bring a towel to every workout.",
        "Free fitness classes are listed on the board.",
        "If you would like help using the machines, one of our trainers can show you how to use them safely.",
        "New members receive one free session with a personal trainer, who will help you create an exercise plan that matches your goals.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about health and medicine. The researcher will ask you some questions.",
      questions: [
        {
          text: "How do you usually take care of yourself when you have a cold?",
          sample: "When I have a cold, I try to rest as much as possible and drink lots of warm liquids, like herbal tea with honey and lemon or chicken soup. I also take a hot shower to help with a blocked nose. If I have a fever or feel very tired, I stay at home instead of going to class, so I don't spread it to others. Usually, I feel better after a few days.",
        },
        {
          text: "Do you think people take too much medicine nowadays?",
          sample: "I think some people do take medicine too quickly, especially for minor problems like a mild headache or a cold. In some cases, people even ask for antibiotics when they have a virus, which doesn't help and can contribute to antibiotic resistance. However, medicine is extremely important for treating serious conditions. I think people should follow their doctor's advice and also try lifestyle changes, like better sleep and diet, when appropriate.",
        },
        {
          text: "Should people be encouraged to use traditional or natural remedies?",
          sample: "I think some traditional remedies can be helpful for minor problems, like drinking ginger tea for a sore throat. They have been used for generations, and some have scientific support. However, people should be careful, because not all natural remedies are safe or effective, and some can interact with other medicines. For serious illnesses, people should always see a doctor rather than relying only on traditional treatments.",
        },
        {
          text: "How do you think healthcare will change in the future?",
          sample: "I think healthcare will become more personalized and preventive in the future. With genetic testing and data from wearable devices, doctors may be able to predict health problems early and suggest treatments that suit each person. Online consultations will probably become more common, making healthcare more accessible for people in remote areas. However, it will be important to protect patients' privacy and make sure that new technologies are available to everyone, not just wealthy people.",
        },
      ],
    },
  },
};
