import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 16 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_16: ToeflTest = {
  id: "toefl-16",
  no: 16,
  title: "TOEFL iBT Practice Test 16",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The first umbrellas",
          text: "Umbrellas were first used more than three thousand years ago, but not for ra{{in}}. In ancient Egypt and China, they protec{{ted}} important people from the hot su{{n}}. Servants usually car{{ried}} them, and their size and col{{or}} showed the owner's rank. In China, people later cove{{red}} paper umbrellas with oil to make them water{{proof}}. In Europe, umbrellas did not bec{{ome}} common until the eighteenth cent{{ury}}, when a few brave men started car{{rying}} them in the streets of London.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Running late",
          text: [
            "Hi Professor Allen, this is Kemal from your 2 p.m. seminar. My train has stopped because of a signal problem, so I will be about fifteen minutes late.",
            "I'm sorry. I have my presentation slides on a USB stick, so I can go last if that helps.",
          ],
          questions: [
            { text: "Why will Kemal be late?", options: ["He overslept.", "His train has stopped because of a signal problem.", "He forgot his slides.", "He is feeling unwell."], answer: 1 },
            { text: "What does Kemal offer to do?", options: ["send his slides by email", "give his presentation last", "skip the seminar", "present next week"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Café reusable cup scheme",
          text: [
            "GREEN CUP SCHEME – ALL CAMPUS CAFÉS",
            "From next Monday, campus cafés will no longer offer paper cups. Customers can either bring their own cup or borrow a green reusable cup for a $2 deposit.",
            "Return the cup to any campus café within seven days to get your deposit back. Customers who bring their own cup will receive 20 cents off every hot drink.",
          ],
          questions: [
            { text: "What will campus cafés stop offering?", options: ["hot drinks", "paper cups", "discounts", "cold drinks"], answer: 1 },
            { text: "How can customers get their deposit back?", options: ["by returning the cup within seven days", "by buying a second drink", "by showing a student ID", "by washing the cup"], answer: 0 },
            { text: "What do customers who bring their own cup receive?", options: ["a free drink each week", "20 cents off every hot drink", "a free green cup", "priority service"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How glaciers carve valleys",
          paragraphs: [
            "Valleys shaped by rivers and valleys shaped by glaciers can usually be told apart at a glance. A river cuts downward into the rock, producing a narrow valley with steep sides that meet at the bottom, rather like the letter V. A glacier, by contrast, fills the entire valley with ice and grinds against both its floor and its sides, widening and deepening it into a broad U shape.",
            "Glaciers erode the land in two main ways. In a process called plucking, meltwater seeps into cracks in the bedrock beneath the glacier and freezes again, attaching the rock to the ice; as the glacier moves, it pulls away blocks of stone. In abrasion, rocks frozen into the base of the glacier scrape the ground like sandpaper, polishing the bedrock and leaving long scratches that show the direction in which the ice moved.",
            "When the climate warms and glaciers retreat, they leave behind distinctive landscapes. Smaller tributary glaciers often did not cut as deeply as the main glacier, so their valleys are left hanging high above the main valley floor, and rivers from them form spectacular waterfalls. Where glacial valleys reach the coast and are flooded by the sea, they become long, narrow inlets called fjords, such as those found along the coasts of Norway and New Zealand.",
          ],
          questions: [
            { text: "According to paragraph 1, how does a glacial valley differ from a river valley?", options: ["It is narrower.", "It is shaped like a U rather than a V.", "It has no steep sides.", "It is always shorter."], answer: 1 },
            { text: "The word \"seeps\" in paragraph 2 is closest in meaning to", options: ["flows slowly", "explodes", "evaporates", "freezes"], answer: 0 },
            { text: "According to paragraph 2, what happens during plucking?", options: ["Rocks in the ice polish the ground.", "Frozen meltwater attaches rock to the ice, which pulls it away.", "Rivers cut downward into the rock.", "Wind blows sand against the valley walls."], answer: 1 },
            { text: "What do the scratches left by abrasion show?", options: ["the age of the rock", "the direction in which the ice moved", "the temperature of the glacier", "the depth of the river"], answer: 1 },
            { text: "Why are some tributary valleys left hanging above the main valley?", options: ["Their glaciers did not cut as deeply.", "They were formed by rivers later.", "They were raised by earthquakes.", "They were filled with sand."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Learning to cook",
          text: "This year, I decided to lea{{rn}} how to cook. My mother gave me some ea{{sy}} recipes. First, I made pasta with tom{{ato}} sauce, and it was quite go{{od}}. Then I tried to bake a ca{{ke}}, but I forgot the su{{gar}}! Now I cook dinner for my fam{{ily}} every Sunday. Cooking takes ti{{me}}, but it is fun, and it is che{{aper}} than eating in restaur{{ants}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Tutor wanted",
          text: [
            "MATH TUTOR WANTED",
            "Looking for a university student to help my 14-year-old son with math twice a week, on Tuesday and Thursday afternoons.",
            "Lessons will take place at our home, a ten-minute walk from campus. $25 per hour. Previous tutoring experience is preferred. Please call Mrs. Clarke at 555-0143.",
          ],
          questions: [
            { text: "How often will the lessons take place?", options: ["once a week", "twice a week", "every day", "once a month"], answer: 1 },
            { text: "Where will the lessons take place?", options: ["at the university", "at the family's home", "in a library", "online"], answer: 1 },
            { text: "What is preferred for the job?", options: ["a car", "previous tutoring experience", "a math degree", "weekend availability"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why some birds migrate",
          paragraphs: [
            "Every autumn, millions of birds fly south, and every spring they return north. This journey is called migration.",
            "Birds migrate mainly to find food. In winter, northern areas become cold, and insects, fruit and seeds become hard to find. In the south, food is easier to get. In spring, the north has long days and lots of food, which is perfect for raising chicks.",
            "Migrating birds find their way in several ways. They use the position of the sun and stars, and some can sense the Earth's magnetic field. Young birds often learn the route by following older birds.",
          ],
          questions: [
            { text: "When do many birds fly south?", options: ["in spring", "in summer", "in autumn", "at night only"], answer: 2 },
            { text: "What is the main reason birds migrate?", options: ["to find food", "to escape people", "to find water", "to rest"], answer: 0 },
            { text: "Why is the north good for raising chicks in spring?", options: ["It is warmer than the south.", "It has long days and lots of food.", "There are no predators.", "It has more trees."], answer: 1 },
            { text: "The word \"sense\" in paragraph 3 is closest in meaning to", options: ["detect", "create", "change", "avoid"], answer: 0 },
            { text: "How do young birds often learn the route?", options: ["by reading the stars alone", "by following older birds", "by flying at random", "by staying close to roads"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Sunk cost fallacy",
          text: "Economists use the term sunk cost to describe money, time or effort that has already been spent and cannot be recov{{ered}}. Logically, such costs should not influ{{ence}} future decisions, since they are lost regard{{less}} of what happens next. Yet people often contin{{ue}} with failing projects because they have alre{{ady}} invested heavily in them, a pattern known as the sunk cost fall{{acy}}. For exam{{ple}}, someone may sit through a boring film simply because they paid for the tic{{ket}}. Businesses and governments are equally vulne{{rable}} to this error, which can lead to large was{{te}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to graduation ceremonies",
          text: [
            "To: All final-year students",
            "From: Office of the Registrar",
            "Subject: Graduation ceremonies – important changes",
            "Due to the record number of graduating students this year, ceremonies will be held over three days, June 10 to 12, instead of two. Each faculty has been assigned a specific day and time, which you can find on the graduation website. Each graduate may now invite up to three guests, rather than four.",
            "To attend, you must register online by April 30 and order your gown from the university supplier by May 15. Students who do not register by the deadline will not be included in the printed program and will not be able to take part in the ceremony, although they will still receive their degree certificates by mail.",
          ],
          questions: [
            { text: "Why will ceremonies be held over three days?", options: ["The main hall is being renovated.", "There is a record number of graduating students.", "Guests asked for more options.", "Some faculties requested separate days."], answer: 1 },
            { text: "How many guests may each graduate invite?", options: ["two", "three", "four", "five"], answer: 1 },
            { text: "What will happen to students who do not register by the deadline?", options: ["They will not receive their degrees.", "They cannot take part in the ceremony.", "They will pay a late fee.", "They will be assigned to the last day."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The Great Moon Hoax",
          paragraphs: [
            "In August 1835, the New York newspaper The Sun published a series of six articles claiming that the famous astronomer Sir John Herschel, then working at the Cape of Good Hope, had used a powerful new telescope to observe life on the Moon. The articles described forests, lakes, herds of bison-like animals and, most sensationally, winged human-like creatures living in temples. The reports were presented as reprints from a respected Scottish scientific journal, and they included detailed technical descriptions of the telescope.",
            "The articles caused a sensation. The Sun's circulation rose dramatically, and other newspapers reprinted the story, some of them apparently believing it. Many readers were convinced, partly because the technical language sounded authoritative and partly because Herschel himself was far away and could not easily deny it. In fact, the Scottish journal had ceased publication years earlier, and the articles were almost certainly written by a reporter named Richard Adams Locke.",
            "Historians have debated Locke's intentions. Some see the articles as a simple attempt to sell newspapers. Others argue that Locke intended them as satire, mocking popular writers who claimed that the Moon and planets must be inhabited, and was surprised when readers took them seriously. Whatever the motive, the hoax illustrates how easily scientific authority can be borrowed to make an extraordinary claim persuasive, a lesson that remains relevant in the age of online misinformation.",
          ],
          questions: [
            { text: "According to paragraph 1, how were the articles presented?", options: ["as fiction", "as reprints from a respected scientific journal", "as letters from readers", "as reports from a government agency"], answer: 1 },
            { text: "The word \"ceased\" in paragraph 2 is closest in meaning to", options: ["started", "stopped", "increased", "changed"], answer: 1 },
            { text: "According to paragraph 2, why did many readers believe the story?", options: ["The newspaper offered photographs.", "The technical language sounded authoritative.", "Herschel confirmed it publicly.", "Other astronomers had seen the creatures."], answer: 1 },
            { text: "What do some historians believe about Locke's intentions?", options: ["He wanted to become an astronomer.", "He meant the articles as satire.", "He was paid by Herschel.", "He wanted to promote space travel."], answer: 1 },
            { text: "Why does the author mention online misinformation?", options: ["to show that the hoax was published online", "to suggest the lesson of the hoax is still relevant", "to explain how newspapers are printed", "to argue that Locke was innocent"], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Irem", prompt: "Why didn't you come to the party?", chunks: ["I", "had to", "finish", "a report", "for work"], end: "." },
      { promptBy: "George", prompt: "Have you tried the new pizza place?", chunks: ["we", "went there", "on Friday", "with", "some classmates"], end: "." },
      { promptBy: "Fatma", prompt: "I always forget my appointments.", chunks: ["why don't", "you", "set", "reminders", "on your phone"], end: "?" },
      { promptBy: "Sam", prompt: "Where did you learn Spanish?", chunks: ["I", "studied it", "for two years", "in", "high school"], end: "." },
      { promptBy: "Ece", prompt: "How was the weather on your trip?", chunks: ["it", "rained", "every day", "except", "the last one"], end: "." },
      { promptBy: "Jack", prompt: "Why is the gym closed?", chunks: ["they", "are", "installing", "new equipment", "this week"], end: "." },
      { promptBy: "Mina", prompt: "What time does the store open?", chunks: ["it", "opens", "at nine", "on", "weekdays"], end: "." },
      { promptBy: "Arda", prompt: "Did you enjoy the book I lent you?", chunks: ["I", "couldn't", "stop reading", "until", "the last page"], end: "." },
      { promptBy: "Clara", prompt: "My room is always messy.", chunks: ["should", "we", "organize it", "together", "this weekend"], end: "?" },
      { promptBy: "Ethan", prompt: "Why are you studying French?", chunks: ["I", "plan to", "do", "a master's degree", "in Paris"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You signed up for a weekend workshop on public speaking offered by your university's career center, but you have just learned that you have a required lab session at the same time.",
      to: "the career center",
      subject: "Public speaking workshop – scheduling conflict",
      tasks: ["Explain which workshop you registered for and why you can no longer attend.", "Say why the workshop is important to you.", "Ask whether you can join a later session or get the workshop materials."],
      sample: "Dear Career Center Team,\n\nI registered last week for the public speaking workshop on Saturday, March 9, from 10 a.m. to 2 p.m. Unfortunately, I have just found out that my chemistry department has scheduled a required laboratory session at the same time, and I am not allowed to miss it because it counts toward my final grade.\n\nI am very disappointed, because the workshop is important to me. In my program, we have to give several presentations each semester, and I often feel nervous and forget what I planned to say. I was hoping the workshop would help me become more confident before my job interviews this summer.\n\nCould you please let me know whether the workshop will be offered again later this semester? If not, I would be grateful if you could send me any materials or recordings from the session, so that I can practice on my own.\n\nThank you for your understanding.\n\nBest regards,\nBerk Şahin",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Psychology",
      professor: {
        name: "Dr. Taylor",
        text: "Many schools are considering banning mobile phones completely during the school day, including during breaks. Supporters say this improves concentration and social interaction. Opponents argue that students need to learn to manage their phones responsibly. Should schools ban phones for the whole school day? Why or why not?",
      },
      students: [
        { name: "Nina", text: "Yes. Students can't focus when their phones are always buzzing. During breaks, they just stare at screens instead of talking to each other or playing outside." },
        { name: "Burak", text: "A total ban goes too far. Students will use phones as adults, so school is the right place to learn self-control. Phones are also useful for emergencies and for learning apps." },
      ],
      sample: "I agree with Nina that phones should be banned for most of the school day, especially for younger students. Research and my own experience suggest that even having a phone on the desk reduces concentration, because students keep checking for messages. When my secondary school introduced a rule that phones had to stay in lockers, the atmosphere during breaks changed completely: people talked, played games and made new friends. However, Burak makes a fair point about learning self-control. A good compromise would be to ban phones for younger students but give older students limited, supervised use, for example in specific lessons where they are used as learning tools. Schools could also teach digital habits directly. Emergencies are not a strong argument against a ban, because parents can always contact the school office.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are working as a guide on a city bus tour. The tour manager is telling you what to say to passengers.",
      sentences: [
        "Welcome aboard the city tour.",
        "Please stay seated while the bus is moving.",
        "Our first stop is the old harbor.",
        "You will have thirty minutes to explore each stop.",
        "Headphones with commentary in six languages are under your seat.",
        "Please make sure you return to the bus on time, because we cannot wait for late passengers.",
        "If you would like to continue the tour tomorrow, your ticket is valid for forty-eight hours from the time of purchase.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people make important decisions. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe an important decision you made recently. How did you make it?",
          sample: "Recently I had to decide whether to stay in my hometown for university or move to a bigger city. I made a list of the advantages and disadvantages of each option, looking at the quality of the programs, the cost of living and how far I'd be from my family. I also talked to students who were already studying in both places. In the end, I chose the bigger city, because the program was much stronger in my field.",
        },
        {
          text: "Do you usually ask other people for advice before making decisions? Why or why not?",
          sample: "Yes, for important decisions I usually ask a few people I trust, like my parents and my older sister. They know me well and can sometimes see things I miss, especially when I'm excited about an idea. However, I try not to ask too many people, because then I get confused by different opinions. In the end, I make the final decision myself, since I'm the one who has to live with the result.",
        },
        {
          text: "Some people make decisions quickly, while others take a long time. Which approach do you think is better?",
          sample: "I think it depends on the decision. For small, everyday choices, like what to eat or which film to watch, deciding quickly saves time and energy. But for big decisions, such as choosing a job or a place to live, it's better to take time to collect information and think about the consequences. The problem is that some people spend so long thinking that they miss opportunities, so even careful decisions need a deadline.",
        },
        {
          text: "Do you think young people today have more choices than their parents had? Is this a good thing?",
          sample: "I definitely think young people today have more choices, in education, careers, travel and even lifestyle. My parents had only a few options when they chose a job, and most people stayed in the same city. Having more choices is mostly positive, because people can find a life that suits them. However, it can also create stress, because when there are so many options, people worry about choosing the wrong one and sometimes find it hard to commit.",
        },
      ],
    },
  },
};
