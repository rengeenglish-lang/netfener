import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 4 (2026 format). Original Netfener content. */
export const TOEFL_4: ToeflTest = {
  id: "toefl-4",
  no: 4,
  title: "TOEFL iBT Practice Test 4",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The ancient Olympic Games",
          text: "The first recorded Olympic Games took place in Greece in 776 BCE. At fi{{rst}}, there was only one ev{{ent}}, a running race of about two hun{{dred}} meters. Over ti{{me}}, other sports were add{{ed}}, including wrestling, boxing and cha{{riot}} racing. The ga{{mes}} were held every four ye{{ars}} in honor of the god Zeus, and wars were some{{times}} paused so that athletes could tra{{vel}} safely.",
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Parking permits",
          text: [
            "STUDENT PARKING PERMITS",
            "Permits for the spring semester go on sale online on January 3. Permits are valid only in Lots C and D.",
            "Cars without a valid permit will receive a $40 ticket. Visitors may park in Lot A for up to two hours at no charge.",
          ],
          questions: [
            { text: "Where can students with a permit park?", options: ["in Lot A only", "in Lots C and D", "in any lot", "in Lot A and Lot C"], answer: 1 },
            { text: "What is true about visitor parking?", options: ["Visitors need a permit.", "Visitors can park free for up to two hours in Lot A.", "Visitors must pay $40.", "Visitors can park in Lot D all day."], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Message from a landlord",
          text: [
            "Hi Sara, this is Mr. Novak. Just a reminder that a plumber will come to fix the kitchen sink on Thursday between 9 and 12. You don't need to be home; I'll let him in with my key. Please move any dishes out of the sink the night before. The water will be turned off for about an hour. Thanks!",
          ],
          questions: [
            { text: "Why is the landlord sending the message?", options: ["to ask for the rent", "to tell Sara about a repair visit", "to invite Sara to a meeting", "to ask Sara to fix the sink"], answer: 1 },
            { text: "What does Sara need to do?", options: ["stay home on Thursday", "call the plumber", "remove dishes from the sink", "buy a new sink"], answer: 2 },
            { text: "What will happen during the repair?", options: ["The electricity will be turned off.", "The water will be off for about an hour.", "Sara will have to leave the apartment.", "The kitchen will be closed for a day."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Echolocation in bats",
          paragraphs: [
            "Many bats hunt at night, when there is little or no light. To find their way and catch insects in the dark, they rely on echolocation. A bat produces a series of high-pitched calls, most of which are too high for humans to hear, and then listens for the echoes that bounce back from objects around it.",
            "By analyzing these echoes, a bat can determine the size, shape and distance of an object, and even the direction in which it is moving. As a bat approaches an insect, it increases the rate of its calls dramatically, from a few calls per second to as many as two hundred. This final rapid sequence, known as the feeding buzz, gives the bat extremely precise information in the moment before it catches its prey.",
            "Interestingly, some insects have developed defenses against echolocation. Certain moths can hear bat calls and respond by diving suddenly toward the ground. Others produce clicking sounds of their own, which may confuse the bat or warn it that the moth tastes unpleasant. This ongoing competition between hunter and hunted is a striking example of how species evolve in response to one another.",
          ],
          questions: [
            { text: "What is the main purpose of echolocation for bats?", options: ["to communicate with other bats", "to find their way and catch prey in the dark", "to keep warm at night", "to attract mates"], answer: 1 },
            { text: "The word \"precise\" in paragraph 2 is closest in meaning to", options: ["exact", "loud", "quick", "simple"], answer: 0 },
            { text: "According to paragraph 2, what happens as a bat gets close to an insect?", options: ["It stops calling.", "It calls more slowly.", "It calls much more frequently.", "It flies higher."], answer: 2 },
            { text: "Why does the author mention moths that dive toward the ground?", options: ["to show that some insects can defend themselves against bats", "to explain how moths find food", "to describe how bats choose their prey", "to show that moths cannot hear"], answer: 0 },
            { text: "What does paragraph 3 suggest about bats and insects?", options: ["They do not affect each other.", "They have evolved in response to each other.", "Insects always escape from bats.", "Bats have stopped using echolocation."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Recycling at home",
          text: "Recycling helps to reduce the amount of waste in our cities. Many fam{{ilies}} now sort their rub{{bish}} into different bins. Pa{{per}}, glass and plastic can of{{ten}} be used again to make new prod{{ucts}}. Food waste can be tur{{ned}} into compost for gar{{dens}}. Recycling is ea{{sy}}, and it hel{{ps}} protect the envir{{onment}}.",
        },
        {
          kind: "daily-life",
          genre: "Schedule",
          title: "Swimming classes",
          text: [
            "CITY POOL – BEGINNER SWIMMING CLASSES",
            "Children (ages 6–10): Mondays and Wednesdays, 4:00–4:45 p.m.",
            "Adults: Tuesdays and Thursdays, 7:00–8:00 p.m.",
            "Each course lasts eight weeks and costs $60. Please register at the pool office. Classes are limited to ten swimmers.",
          ],
          questions: [
            { text: "When are the adult classes?", options: ["Mondays and Wednesdays", "Tuesdays and Thursdays", "every weekday", "on weekends"], answer: 1 },
            { text: "How long does each course last?", options: ["four weeks", "six weeks", "eight weeks", "ten weeks"], answer: 2 },
            { text: "Where should people register?", options: ["online", "at the pool office", "by phone", "at a school"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How rainbows form",
          paragraphs: [
            "A rainbow is an arc of colors that appears in the sky, usually after rain. To see one, the sun must be behind you, and there must be drops of water in the air in front of you.",
            "Sunlight looks white, but it is really a mixture of many colors. When sunlight enters a raindrop, it bends. Each color bends by a slightly different amount, so the colors separate. The light then reflects off the back of the drop and comes out again, spreading the colors even more.",
            "This is why we see the colors of a rainbow in the same order every time: red on the outside, then orange, yellow, green, blue and violet on the inside. Sometimes a second, fainter rainbow appears above the first one, with its colors in the opposite order.",
          ],
          questions: [
            { text: "Where must the sun be for you to see a rainbow?", options: ["in front of you", "behind you", "directly above you", "below the horizon"], answer: 1 },
            { text: "The word \"mixture\" in paragraph 2 is closest in meaning to", options: ["combination", "drop", "beam", "shadow"], answer: 0 },
            { text: "According to paragraph 2, why do the colors separate?", options: ["Each color bends by a different amount.", "The raindrop is colored.", "The sun is very hot.", "The light is reflected by clouds."], answer: 0 },
            { text: "Which color is on the outside of a rainbow?", options: ["violet", "green", "red", "blue"], answer: 2 },
            { text: "What is true about the second rainbow?", options: ["It is brighter than the first.", "Its colors are in the opposite order.", "It appears below the first.", "It has only three colors."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Microplastics",
          text: "Microplastics are plastic fragments smaller than five millimeters. They for{{m}} when larger items break down, but they are al{{so}} manufactured for products such as cosme{{tics}}. Researchers have det{{ected}} microplastics in oceans, soil and even drin{{king}} water. Because these par{{ticles}} are so small, they are diff{{icult}} to remove, and their long-term eff{{ects}} on human hea{{lth}} remain poorly under{{stood}}.",
        },
        {
          kind: "daily-life",
          genre: "Policy",
          title: "Academic integrity",
          text: [
            "ACADEMIC INTEGRITY – SUMMARY OF KEY RULES",
            "Submitting work that has been written in whole or in part by another person, or by an automated tool, without acknowledgment is considered plagiarism, regardless of whether the student intended to deceive.",
            "Students may discuss assignments with classmates unless an instructor states otherwise, but all submitted work must be written independently. A first violation normally results in a zero for the assignment; a second violation is referred to the Academic Conduct Committee, which may impose further penalties.",
          ],
          questions: [
            { text: "According to the policy, when is submitting another person's writing considered plagiarism?", options: ["only if the student meant to deceive", "whenever it is not acknowledged", "only if the instructor discovers it", "only for final exams"], answer: 1 },
            { text: "What is true about discussing assignments with classmates?", options: ["It is never allowed.", "It is allowed unless an instructor says otherwise.", "It is allowed only in groups.", "It must be reported to the committee."], answer: 1 },
            { text: "What normally happens after a second violation?", options: ["The student receives a warning.", "The student fails the course automatically.", "The case is sent to a committee.", "The student must rewrite the assignment."], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "The Dust Bowl",
          paragraphs: [
            "During the 1930s, a series of severe dust storms swept across the southern Great Plains of the United States, a region that came to be known as the Dust Bowl. At their worst, the storms carried so much soil that they darkened the sky in cities hundreds of kilometers away, and in some areas the wind removed much of the fertile topsoil that farming depended on.",
            "Although a prolonged drought was the immediate trigger, historians emphasize that human decisions made the disaster far worse. In the preceding decades, high wheat prices and new machinery had encouraged farmers to plow up millions of hectares of native grassland. The deep-rooted prairie grasses had held the soil in place for thousands of years; once they were removed and the rains failed, there was nothing to stop the wind from lifting the exposed earth.",
            "The crisis led to lasting changes in agricultural policy. The federal government created a soil conservation agency, which paid farmers to adopt practices such as planting rows of trees as windbreaks, rotating crops and leaving some land unplowed. These measures did not end drought in the region, but when dry periods returned in later decades, the damage was considerably less severe.",
          ],
          questions: [
            { text: "According to paragraph 1, what was one effect of the dust storms?", options: ["They increased rainfall in distant cities.", "They removed fertile topsoil.", "They created new grasslands.", "They lowered wheat prices."], answer: 1 },
            { text: "The word \"prolonged\" in paragraph 2 is closest in meaning to", options: ["sudden", "extended", "mild", "unexpected"], answer: 1 },
            { text: "According to paragraph 2, why did human decisions make the disaster worse?", options: ["Farmers stopped growing wheat.", "Native grasses that held the soil had been plowed up.", "Machines caused the drought.", "Cities were built on farmland."], answer: 1 },
            { text: "What can be inferred from paragraph 3 about the conservation practices?", options: ["They completely prevented later droughts.", "They reduced the impact of later dry periods.", "Farmers refused to adopt them.", "They were abandoned after the 1930s."], answer: 1 },
            { text: "What is the author's main point in the passage?", options: ["The Dust Bowl was caused only by bad weather.", "A natural event was worsened by human actions and led to policy changes.", "Wheat farming is impossible on the Great Plains.", "Dust storms are common in all dry regions."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= LISTENING =================
  listening: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        { kind: "choose-response", voice: "en-US-BrianNeural", line: "Is it too late to join the photography club this semester?", options: ["Not at all. They accept new members any time.", "I took a photo of the club.", "It's too late to call.", "The semester ends in May."], answer: 0 },
        { kind: "choose-response", voice: "en-US-JennyNeural", line: "Why are you wearing a suit today?", options: ["It's a new suit.", "I have a job interview this afternoon.", "I bought it on sale.", "Today is Wednesday."], answer: 1 },
        { kind: "choose-response", voice: "en-US-TonyNeural", line: "Which bus goes to the hospital?", options: ["It's a big hospital.", "I went there yesterday.", "Take the number twelve.", "The bus is late."], answer: 2 },
        { kind: "choose-response", voice: "en-US-AshleyNeural", line: "Did you enjoy the hiking trip?", options: ["The trip is next week.", "I hike every summer.", "We went by car.", "Yes, the views were amazing."], answer: 3 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "Could you explain how to use the new printer?", options: ["Sure, I'll show you after class.", "It's a color printer.", "I printed it already.", "The printer is new."], answer: 0 },
        { kind: "choose-response", voice: "en-US-AvaNeural", line: "Has the professor posted the reading list yet?", options: ["I like reading lists.", "Not yet, but she said it would be up by Friday.", "The professor is very kind.", "I posted a letter."], answer: 1 },
        { kind: "choose-response", voice: "en-US-JasonNeural", line: "How often does the gym get crowded?", options: ["I go to the gym.", "It's a large gym.", "Mostly in the evenings after five.", "It was crowded."], answer: 2 },
        { kind: "choose-response", voice: "en-US-MichelleNeural", line: "Do you mind if I open the window?", options: ["The window is broken.", "I opened my mind.", "It's a big window.", "Go ahead. It is pretty warm in here."], answer: 3 },
        {
          kind: "conversation",
          title: "Choosing a major",
          cast: { A: "en-US-ChristopherNeural", B: "en-US-LunaNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and her academic advisor.", pause: 1 },
            { who: "B", text: "Professor Diaz, I need to declare my major by next month, and I'm torn between biology and environmental science." },
            { who: "A", text: "Those two overlap quite a bit. What draws you to each?" },
            { who: "B", text: "I love the lab work in biology. But I'm also really interested in climate policy, and environmental science seems more connected to that." },
            { who: "A", text: "Have you considered majoring in biology and minoring in environmental policy? You'd keep the lab focus, and the minor would give you courses in law and economics." },
            { who: "B", text: "I didn't know that was an option. Would it add extra time to my degree?" },
            { who: "A", text: "Not if you plan carefully. Several of the minor's courses also count as general requirements. Let's map out your schedule together next week." },
          ],
          questions: [
            { text: "What is the student's problem?", options: ["She is failing a biology course.", "She cannot decide between two majors.", "She wants to leave the university.", "She missed a deadline."], answer: 1 },
            { text: "What does the advisor suggest?", options: ["choosing environmental science", "taking a year off", "combining a biology major with a policy minor", "talking to a law professor"], answer: 2 },
          ],
        },
        {
          kind: "announcement",
          title: "Fire drill",
          cast: { A: "en-US-GuyNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Attention, residents of Oak Hall. There will be a fire drill tomorrow at ten a.m. When the alarm sounds, please leave the building using the nearest stairway. Do not use the elevators. Gather on the lawn in front of the library and wait until a staff member tells you it's safe to return. The drill should take about fifteen minutes. If you have a class at that time, please let your professor know you may be a few minutes late." },
          ],
          questions: [
            { text: "What should residents do when the alarm sounds?", options: ["wait in their rooms", "leave using the stairs", "take the elevator to the ground floor", "go to the library"], answer: 1 },
            { text: "What does the speaker suggest students with a class at ten do?", options: ["skip the drill", "tell their professor they may be late", "leave the building early", "go to class instead"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Tardigrades",
          cast: { A: "en-US-NancyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a biology class.", pause: 1 },
            { who: "A", text: "Let's talk about one of the toughest animals on Earth, the tardigrade. Tardigrades are tiny, usually less than a millimeter long, with eight legs. They're sometimes called water bears, because under a microscope they look a bit like small, chubby bears." },
            { who: "A", text: "What makes tardigrades famous is their ability to survive extreme conditions. When their environment dries out, they pull in their legs, lose almost all the water in their bodies and curl up into a state called a tun. In this state their metabolism nearly stops. They can survive like this for years, and then come back to life within hours when water returns." },
            { who: "A", text: "In laboratory experiments, tardigrades in the tun state have survived temperatures close to absolute zero, very high levels of radiation, and even a few days in the vacuum of space. Now, I want to be clear: they don't thrive in these conditions. They simply survive them. In their active state, they're actually fairly ordinary, living in moss and soil around the world." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how tardigrades find food", "the ability of tardigrades to survive extreme conditions", "the history of the microscope", "animals that live in space"], answer: 1 },
            { text: "What happens when a tardigrade enters the tun state?", options: ["It grows larger.", "It loses most of its water and its metabolism nearly stops.", "It lays eggs.", "It moves to a new environment."], answer: 1 },
            { text: "Why does the professor say that tardigrades \"don't thrive\" in extreme conditions?", options: ["to point out that they survive rather than live normally there", "to show that the experiments failed", "to explain why they live in space", "to suggest they are rare"], answer: 0 },
            { text: "Where do active tardigrades usually live?", options: ["only in the ocean", "in moss and soil", "inside other animals", "only in cold regions"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-KaiNeural", line: "Where's the nearest coffee shop?", options: ["Just around the corner.", "I don't drink coffee.", "It's very good coffee.", "Since nine o'clock."], answer: 0 },
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "How do you get to school every day?", options: ["Every day at eight.", "I usually walk.", "It's a big school.", "With my homework."], answer: 1 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "Did you call your parents?", options: ["They live far away.", "My parents are teachers.", "Yes, I called them last night.", "I'll call a taxi."], answer: 2 },
        { kind: "choose-response", voice: "en-US-JaneNeural", line: "What's your favorite season?", options: ["Probably autumn.", "It's a long season.", "In the summer.", "I like the weather."], answer: 0 },
        { kind: "choose-response", voice: "en-US-BrandonNeural", line: "Can you pass me the salt?", options: ["It's very salty.", "I passed the test.", "No, it's sugar.", "Here you are."], answer: 3 },
        { kind: "choose-response", voice: "en-US-ElizabethNeural", line: "Why are you so tired today?", options: ["Today is Monday.", "I stayed up late studying.", "I'm going to bed.", "It's a tiring job."], answer: 1 },
        {
          kind: "conversation",
          title: "At the gym",
          cast: { A: "en-US-CoraNeural", B: "en-US-JacobNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a receptionist at the campus gym.", pause: 1 },
            { who: "B", text: "Hi, I'd like to sign up for the yoga class on Thursday evenings." },
            { who: "A", text: "I'm sorry, the Thursday class is full. But there's still space in the Saturday morning class." },
            { who: "B", text: "Saturday morning is fine. Is there a fee?" },
            { who: "A", text: "No, it's free for students. Just bring your own mat, because we only have a few." },
          ],
          questions: [
            { text: "Why can't the student join the Thursday class?", options: ["It has been canceled.", "It is full.", "It is too expensive.", "It is only for teachers."], answer: 1 },
            { text: "What should the student bring?", options: ["a towel", "a yoga mat", "money for the fee", "a student ID photo"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Leap years",
          cast: { A: "en-US-AndrewNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an astronomy class.", pause: 1 },
            { who: "A", text: "Why do we have leap years? It's because the Earth takes about three hundred and sixty-five and a quarter days to travel around the sun, not exactly three hundred and sixty-five." },
            { who: "A", text: "If every calendar year had only three hundred and sixty-five days, the calendar would slowly drift away from the seasons. After a few hundred years, summer would start in the wrong month." },
            { who: "A", text: "To fix this, we add one extra day, February the twenty-ninth, about every four years. That extra quarter of a day each year adds up to one full day every four years, which keeps the calendar in step with the seasons." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["why we have leap years", "how the moon moves", "the history of February", "why summer is hot"], answer: 0 },
            { text: "How long does it take the Earth to go around the sun?", options: ["exactly 365 days", "about 365 and a quarter days", "about 366 days", "about 360 days"], answer: 1 },
            { text: "What would happen without leap years?", options: ["The calendar would drift away from the seasons.", "Years would get shorter.", "February would disappear.", "The Earth would move faster."], answer: 0 },
            { text: "Which day is added in a leap year?", options: ["December 31", "January 1", "February 29", "March 1"], answer: 2 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-AmberNeural", line: "I'm not convinced the survey results are reliable, given how few people responded.", options: ["Good point. Maybe we should collect more data.", "The survey had ten questions.", "I responded to it last week.", "The results were printed."], answer: 0 },
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "Shouldn't we have heard back from the scholarship committee by now?", options: ["The committee has five members.", "They said decisions might take until the end of the month.", "I heard the music.", "We should apply for it."], answer: 1 },
        { kind: "choose-response", voice: "en-US-MonicaNeural", line: "I can't believe the library is closing early again tonight.", options: ["The library has many books.", "I'm closing my laptop.", "Apparently there's a staff training session.", "It closed last year."], answer: 2 },
        { kind: "choose-response", voice: "en-US-RogerNeural", line: "Do you think it's worth buying the expensive calculator for this course?", options: ["The course is in the morning.", "I'm worth it.", "It costs eighty dollars.", "Only if you plan to take more advanced math later."], answer: 3 },
        { kind: "choose-response", voice: "en-US-EmmaNeural", line: "You might want to double-check the room number before the exam.", options: ["Thanks. I'll look at the schedule tonight.", "The room is very large.", "I checked out a book.", "The exam has two parts."], answer: 0 },
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "Isn't it a bit risky to start the project so close to the deadline?", options: ["The project is about history.", "Maybe, but I work best under pressure.", "The deadline was yesterday.", "I'm starting a new job."], answer: 1 },
        {
          kind: "conversation",
          title: "At the writing center",
          cast: { A: "en-US-SaraNeural", B: "en-US-EricNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a tutor at the writing center.", pause: 1 },
            { who: "B", text: "Thanks for meeting me. My professor said my thesis statement is too vague, but I'm not sure how to fix it." },
            { who: "A", text: "Let's read it. 'Social media has had many effects on society.' Well, I can see what your professor means. That statement is true, but it doesn't tell the reader what you're going to argue." },
            { who: "B", text: "I was trying to keep it broad so I could cover everything." },
            { who: "A", text: "That's a common instinct, but a strong thesis takes a position. What's the main point your paragraphs actually make?" },
            { who: "B", text: "Mostly that social media has changed how teenagers form friendships, and not always for the better." },
            { who: "A", text: "That's much more specific, and it's arguable. Build your thesis around that, and then check that each paragraph supports it." },
          ],
          questions: [
            { text: "What problem does the student have?", options: ["His essay is too long.", "His thesis statement is too general.", "He has no sources.", "He missed the deadline."], answer: 1 },
            { text: "What does the tutor imply about a good thesis statement?", options: ["It should cover every topic in the essay.", "It should state a specific, arguable position.", "It should be as short as possible.", "It should avoid taking sides."], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "The domestication of dogs",
          cast: { A: "en-US-ChristopherNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an anthropology class.", pause: 1 },
            { who: "A", text: "Dogs were the first animals that humans domesticated, long before cattle, sheep or horses, and long before agriculture. Genetic studies suggest that dogs descended from a population of wolves at least fifteen thousand years ago, and possibly much earlier." },
            { who: "A", text: "For a long time, the standard story was that humans deliberately captured wolf pups and raised them. But many researchers now favor a different idea, sometimes called self-domestication. In this view, some wolves began scavenging near human camps, feeding on scraps. Wolves that were less fearful and less aggressive toward people had an advantage, since they could get closer to the food. Over many generations, these tamer wolves gradually became a separate population." },
            { who: "A", text: "What's intriguing is that this process may have shaped humans too. Hunters who traveled with dogs could track animals more effectively, and dogs could warn camps of danger. So rather than a one-sided story of humans controlling an animal, domestication may have been a partnership that benefited both species." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how wolves hunt", "theories about how dogs were domesticated", "the history of agriculture", "different breeds of dogs"], answer: 1 },
            { text: "According to the self-domestication idea, why did tamer wolves have an advantage?", options: ["They were stronger hunters.", "They could get closer to human food scraps.", "Humans fed them deliberately.", "They lived longer."], answer: 1 },
            { text: "How does the professor describe the older explanation?", options: ["Humans captured and raised wolf pups.", "Wolves were domesticated after cattle.", "Dogs came from foxes.", "Agriculture created dogs."], answer: 0 },
            { text: "What does the professor imply about the relationship between early humans and dogs?", options: ["Humans controlled dogs completely.", "Both species benefited from the relationship.", "Dogs were mainly kept as pets.", "The relationship began after farming."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Hana", prompt: "Why is the café closed today?", chunks: ["they're", "renovating", "the kitchen", "this", "week"], end: "." },
      { promptBy: "Lucas", prompt: "What did the professor say about the exam?", chunks: ["she said", "it would", "cover", "the last", "three chapters"], end: "." },
      { promptBy: "Amara", prompt: "I'm nervous about my first presentation.", chunks: ["why don't", "you practice", "in front of", "your", "roommates"], end: "?" },
      { promptBy: "Felix", prompt: "How was your summer internship?", chunks: ["I learned", "a lot", "about", "managing", "projects"], end: "." },
      { promptBy: "Nadia", prompt: "Where can I buy a cheap bicycle?", chunks: ["the bike shop", "near the station", "sells", "used ones", "at good prices"], end: "." },
      { promptBy: "Jonah", prompt: "Did you get my message about the meeting?", chunks: ["I did", "but", "I can't", "make it", "on Monday"], end: "." },
      { promptBy: "Leila", prompt: "Which dormitory would you recommend?", chunks: ["I'd choose", "the one", "closest to", "the science", "buildings"], end: "." },
      { promptBy: "Sven", prompt: "My essay is two hundred words too long.", chunks: ["could you", "remove", "some", "of the", "examples"], end: "?" },
      { promptBy: "Maya", prompt: "Why did you choose this university?", chunks: ["it has", "an excellent", "program", "in marine", "biology"], end: "." },
      { promptBy: "Theo", prompt: "Are you going to the career fair?", chunks: ["I'm going", "to meet", "employers", "from", "engineering companies"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You live in an apartment building near your university. For the past three days, the heating in your apartment has not been working, and the weather has been very cold.",
      to: "Mr. Grant (building manager)",
      subject: "Heating not working in Apartment 4B",
      tasks: ["Describe the problem.", "Explain how it is affecting you.", "Ask when the heating will be repaired."],
      sample: "Dear Mr. Grant,\n\nI'm writing to report a problem with the heating in Apartment 4B. Since Saturday evening, the radiators have been completely cold, even though the thermostat is set to twenty-two degrees. I've checked that the power is on, but nothing seems to work.\n\nThis is becoming quite difficult, because the temperatures outside have been below freezing. My apartment is so cold at night that I've had trouble sleeping, and I haven't been able to study at home, so I've been spending long hours in the library instead.\n\nCould you please let me know when someone will be able to repair the heating? I'm usually home after four o'clock, but I'm happy to leave a key with you if that would make it easier.\n\nThank you for your help.\n\nBest regards,\nMina",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education Technology",
      professor: {
        name: "Dr. Ferreira",
        text: "Online courses have become increasingly common at universities, and some people predict that they will eventually replace most traditional lectures. Online courses can be cheaper and more flexible, but critics say that students learn less without face-to-face interaction. Do you think online courses should replace most traditional lectures at universities? Why or why not?",
      },
      students: [
        { name: "Ayşe", text: "I think they should. Many students work or have families, and online courses let them study whenever they have time. Recorded lectures can also be watched again, which is helpful for difficult topics." },
        { name: "Ben", text: "I disagree. In my online classes, I found it hard to stay motivated, and I barely knew my classmates. Being in a room with a professor makes it easier to ask questions and participate." },
      ],
      sample: "I don't think online courses should replace most traditional lectures, although I agree with Ayşe that they have real advantages. Flexibility is important, especially for students who work, and the ability to rewatch a recording is useful when a topic is difficult. However, Ben's point about motivation reflects my own experience. Without a fixed schedule and classmates around me, I tend to postpone watching lectures until the night before an exam. In my view, the best solution is a combination: universities could record lectures so that students can review them, while keeping in-person classes for discussion, group work and questions. This way, students get the flexibility of online learning without losing the interaction that helps them stay engaged and learn more deeply.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are volunteering at a city marathon. The event organizer is giving you instructions.",
      sentences: [
        "Thank you for volunteering today.",
        "Your station is at the ten kilometer mark.",
        "Please hand each runner a cup of water.",
        "Keep the area around the table clear of empty cups.",
        "If a runner looks unwell, call the medical team right away.",
        "The fastest runners should pass your station about thirty minutes after the start.",
        "When the last runner has gone by, please pack up the table and bring the supplies back to the main tent.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people use public transportation. The researcher will ask you some questions.",
      questions: [
        {
          text: "How do you usually travel around your city, and why?",
          sample: "I usually travel by metro, because it's the fastest way to get around my city. The traffic is often terrible, especially during rush hour, so driving or taking a bus can take twice as long. The metro is also fairly cheap with a monthly pass. On weekends, when I'm not in a hurry, I sometimes ride a bicycle instead, because I enjoy the exercise and it lets me see different parts of the city.",
        },
        {
          text: "Tell me about a time when you had a problem while using public transportation.",
          sample: "Last winter I was on my way to an important exam when the train I was on stopped between two stations because of a technical problem. We waited for almost forty minutes without much information. I was really worried, so I emailed my professor to explain. Fortunately, she let me start the exam a little later. Since then, I always leave much earlier when I have something important, and I check the transit app before I leave.",
        },
        {
          text: "Some people think public transportation should be free for everyone. Do you agree? Why or why not?",
          sample: "I think free public transportation is a good idea in principle, but it would be difficult to pay for. On the positive side, it would encourage more people to leave their cars at home, which would reduce traffic and pollution, and it would help people with low incomes. However, the money has to come from somewhere, probably higher taxes. A good compromise might be to make transportation free for students, older people and those on low incomes, while keeping fares for others.",
        },
        {
          text: "In the future, how do you think transportation in cities will change?",
          sample: "I think city transportation will become cleaner and more connected. Most buses will probably be electric, and there may be more bike lanes and shared electric scooters. I also expect apps to combine different types of transport, so you can plan and pay for a whole journey, with a train, a bus and a bike, in one place. Self-driving taxis might become common too, although I think it will take longer than people expect, because of safety concerns.",
        },
      ],
    },
  },
};
