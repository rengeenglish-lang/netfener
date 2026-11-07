import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 7 (2026 format). Original Netfener content. */
export const TOEFL_7: ToeflTest = {
  id: "toefl-7",
  no: 7,
  title: "TOEFL iBT Practice Test 7",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The printing press",
          text: "Before the fifteenth century, books in Europe were copied by hand, which made them rare and expensive. Around 1450, Johannes Gutenberg devel{{oped}} a printing press that used movable met{{al}} letters. Each letter could be arra{{nged}} to form a page and then reu{{sed}} for the next one. Printers could now prod{{uce}} hundreds of copies in the ti{{me}} it once took to copy a sin{{gle}} book. As prices fe{{ll}}, more people learned to re{{ad}}, and new ideas spr{{ead}} quickly across the continent.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Ride to the airport",
          text: [
            "Hi Sam! My flight leaves at 7:40 tomorrow morning, so I need to be at the airport by 6:00. Could you still give me a ride?",
            "If it's too early for you, no problem at all. I can book a taxi instead. Just let me know by tonight so I have time to arrange it.",
          ],
          questions: [
            { text: "What time does the writer need to be at the airport?", options: ["5:00", "6:00", "7:40", "8:00"], answer: 1 },
            { text: "What will the writer do if Sam cannot help?", options: ["change the flight", "take the bus", "book a taxi", "ask another friend"], answer: 2 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Lost and found",
          text: [
            "CAMPUS LOST AND FOUND",
            "Items found on campus are kept at the Security Office in the basement of Hartley Hall. The office is open Monday to Friday, 9:00 a.m. to 5:00 p.m.",
            "To collect an item, you must show a student or staff ID card and describe the item. Items that are not collected within 60 days are donated to local charities. Phones and laptops are kept for 90 days.",
          ],
          questions: [
            { text: "Where are lost items kept?", options: ["at the main library", "in the basement of Hartley Hall", "at the student center", "in each classroom"], answer: 1 },
            { text: "What must people do to collect an item?", options: ["pay a small fee", "fill out an online form", "show an ID card and describe the item", "bring a friend as a witness"], answer: 2 },
            { text: "What is true about phones and laptops?", options: ["They are kept longer than other items.", "They are donated immediately.", "They are kept for 60 days.", "They are sent to the police."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Urban heat islands",
          paragraphs: [
            "On a summer afternoon, the center of a large city can be several degrees warmer than the countryside around it. This phenomenon, known as the urban heat island effect, has been observed in cities all over the world, and the difference is often greatest at night.",
            "The main cause is the materials that cities are built from. Asphalt, concrete and brick absorb large amounts of solar energy during the day and release it slowly after sunset. In addition, cities have fewer trees and less soil, so there is less evaporation, a process that naturally cools the air. Heat from cars, air conditioners and factories adds further warmth.",
            "Urban heat islands are more than an inconvenience. Higher temperatures increase energy use for cooling, worsen air pollution and pose serious health risks during heat waves, especially for elderly people. To reduce the effect, many cities are planting more trees, painting roofs in light colors that reflect sunlight, and creating parks that act as natural cooling zones.",
          ],
          questions: [
            { text: "According to paragraph 1, when is the temperature difference often greatest?", options: ["in the early morning", "at midday", "at night", "in winter"], answer: 2 },
            { text: "The word \"absorb\" in paragraph 2 is closest in meaning to", options: ["reflect", "take in", "produce", "lose"], answer: 1 },
            { text: "According to paragraph 2, why does less evaporation make cities warmer?", options: ["Evaporation naturally cools the air.", "Evaporation creates clouds.", "Evaporation increases pollution.", "Evaporation damages buildings."], answer: 0 },
            { text: "Which of the following is NOT mentioned as a problem caused by urban heat islands?", options: ["higher energy use", "worse air pollution", "health risks during heat waves", "more frequent flooding"], answer: 3 },
            { text: "Why do some cities paint roofs in light colors?", options: ["to make buildings more attractive", "to reflect sunlight", "to protect them from rain", "to help planes see them"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Packing for a trip",
          text: "Packing for a trip can be stressful. It is a good id{{ea}} to make a list a few da{{ys}} before you leave. First, check the wea{{ther}} so you know which clo{{thes}} to bring. Do not forg{{et}} your passport and your pho{{ne}} charger. Try to pack li{{ght}}, because a heavy b{{ag}} is hard to carry. Fin{{ally}}, leave some space for thi{{ngs}} you buy on your trip.",
        },
        {
          kind: "daily-life",
          genre: "Menu",
          title: "Campus café specials",
          text: [
            "TODAY'S SPECIALS – CAMPUS CAFÉ",
            "Soup of the day: tomato and basil, $4. Served with fresh bread.",
            "Lunch deal: any sandwich with a drink for $7 (11:00 a.m.–2:00 p.m. only). Vegetarian options are marked with a green leaf on the board.",
          ],
          questions: [
            { text: "What comes with the soup?", options: ["a salad", "fresh bread", "a drink", "a cookie"], answer: 1 },
            { text: "When is the lunch deal available?", options: ["all day", "only in the morning", "from 11:00 a.m. to 2:00 p.m.", "only on weekends"], answer: 2 },
            { text: "How can customers find vegetarian options?", options: ["They are marked with a green leaf.", "They are on a separate menu.", "They are cheaper.", "They must ask the cashier."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How owls hunt at night",
          paragraphs: [
            "Owls are birds that usually hunt at night. They have several special features that help them catch small animals, such as mice, in the dark.",
            "First, owls have very large eyes that collect a lot of light. They cannot move their eyes, so they turn their heads instead. Some owls can turn their heads almost all the way around.",
            "Owls also have excellent hearing. On many owls, one ear is a little higher than the other, which helps them find exactly where a sound is coming from. Finally, their feathers have soft edges, so they can fly almost silently and surprise their prey.",
          ],
          questions: [
            { text: "When do owls usually hunt?", options: ["in the morning", "at noon", "at night", "in the afternoon"], answer: 2 },
            { text: "Why do owls turn their heads?", options: ["because they cannot move their eyes", "to stay warm", "to scare other birds", "because their necks are short"], answer: 0 },
            { text: "The word \"exactly\" in paragraph 3 is closest in meaning to", options: ["quickly", "precisely", "loudly", "sometimes"], answer: 1 },
            { text: "How does the position of an owl's ears help it?", options: ["It helps the owl fly faster.", "It helps the owl find where a sound comes from.", "It keeps the owl's head warm.", "It makes the owl look bigger."], answer: 1 },
            { text: "Why can owls fly almost silently?", options: ["They fly very slowly.", "They are very small.", "Their feathers have soft edges.", "They fly very high."], answer: 2 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Ocean acidification",
          text: "The oceans absorb roughly a quarter of the carbon dioxide that humans rel{{ease}} into the atmosphere. Although this slows global war{{ming}}, it comes at a co{{st}}. When carbon dioxide diss{{olves}} in seawater, it forms carbonic ac{{id}}, gradually lowering the water's p{{H}}. This makes it more diff{{icult}} for organisms such as corals and oysters to bu{{ild}} their shells and skeletons, which could disr{{upt}} entire marine food ch{{ains}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Thesis submission rules",
          text: [
            "To: Graduate students",
            "From: Graduate School Office",
            "Subject: Changes to thesis submission",
            "Beginning this spring, all theses must be submitted electronically through the university's online repository. Printed copies will no longer be accepted, except for students in the Fine Arts program, who may still submit a printed portfolio along with the electronic file.",
            "Please note that the formatting check, which previously took place after submission, must now be completed before you upload your thesis. Appointments with a formatting advisor can be booked online and should be made at least two weeks before your submission deadline.",
          ],
          questions: [
            { text: "What is the main change described in the email?", options: ["Theses must now be submitted online.", "Thesis deadlines have been extended.", "Theses must be shorter.", "Fine Arts students no longer write theses."], answer: 0 },
            { text: "Who may still submit printed work?", options: ["all doctoral students", "students in the Fine Arts program", "students who miss the deadline", "international students"], answer: 1 },
            { text: "What is true about the formatting check?", options: ["It has been canceled.", "It now happens after submission.", "It must be completed before uploading the thesis.", "It is done automatically by the repository."], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "The domestication of wheat",
          paragraphs: [
            "Around ten thousand years ago, people in the region known as the Fertile Crescent, in what is now the Middle East, began cultivating wild grasses. Over many generations, this process transformed wild wheat into the crop that today feeds a large share of the world's population. The change, however, was not the result of a deliberate plan; it emerged gradually from the way early farmers harvested and replanted seeds.",
            "In wild wheat, the seed heads shatter when they are ripe, scattering seeds on the ground so that new plants can grow. This trait is essential for survival in nature, but it makes harvesting difficult. Occasionally, plants appeared with a mutation that kept the seeds attached to the stalk. When early farmers cut the stalks and carried them home, they inevitably collected more seeds from these non-shattering plants. When some of those seeds were planted the following year, the proportion of non-shattering plants increased.",
            "Archaeologists can trace this process by examining preserved plant remains. Studies suggest that the transition from mostly wild to mostly domesticated wheat took perhaps one to two thousand years, far longer than scientists once assumed. This slow pace indicates that domestication was an unintended consequence of human behavior rather than a sudden invention, and it reveals how humans and plants gradually came to depend on one another.",
          ],
          questions: [
            { text: "According to paragraph 1, how did the domestication of wheat happen?", options: ["through a deliberate plan by early scientists", "gradually, as a result of harvesting and replanting", "suddenly, after a single discovery", "through trade with other regions"], answer: 1 },
            { text: "The word \"inevitably\" in paragraph 2 is closest in meaning to", options: ["rarely", "unavoidably", "carefully", "secretly"], answer: 1 },
            { text: "Why is seed shattering important for wild wheat?", options: ["It protects the seeds from animals.", "It allows new plants to grow from scattered seeds.", "It makes the plant taller.", "It helps farmers harvest the plant."], answer: 1 },
            { text: "According to paragraph 2, why did non-shattering plants become more common?", options: ["Farmers collected and replanted more of their seeds.", "They grew better in dry weather.", "Animals avoided eating them.", "They produced larger seeds."], answer: 0 },
            { text: "What does the author suggest by mentioning that domestication took one to two thousand years?", options: ["Early farmers were not intelligent.", "Domestication was an unintended, gradual process.", "Wheat is difficult to grow.", "Archaeologists' methods are unreliable."], answer: 1 },
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
        { kind: "choose-response", voice: "en-US-BrianNeural", line: "Do you know where the career center moved to?", options: ["I'm still deciding on a career.", "It's in the new building next to the gym now.", "They moved last semester.", "The center is very helpful."], answer: 1 },
        { kind: "choose-response", voice: "en-US-AvaNeural", line: "Could you send me the notes from yesterday's class?", options: ["Sure, I'll email them to you tonight.", "Class was at ten.", "I sent a letter.", "The notes are short."], answer: 0 },
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "Why don't we study together for the biology quiz?", options: ["Biology is my favorite subject.", "The quiz was hard.", "I studied alone.", "That's a great idea. How about Wednesday?"], answer: 3 },
        { kind: "choose-response", voice: "en-US-ElizabethNeural", line: "How long does it take to get downtown by bus?", options: ["The bus is blue.", "I take the bus every day.", "About twenty minutes, if there's no traffic.", "Downtown is busy."], answer: 2 },
        { kind: "choose-response", voice: "en-US-JasonNeural", line: "Is the gym open on public holidays?", options: ["I go to the gym often.", "Only in the morning, I think.", "Holidays are fun.", "It's a large gym."], answer: 1 },
        { kind: "choose-response", voice: "en-US-SaraNeural", line: "Have you met our new lab assistant yet?", options: ["Not yet. What's she like?", "The lab is on the third floor.", "I assisted the professor.", "We met at the lab yesterday morning, didn't we?"], answer: 0 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "What did you think of the movie last night?", options: ["It starts at eight.", "I watched it with friends.", "The theater was crowded.", "It was much better than I expected."], answer: 3 },
        { kind: "choose-response", voice: "en-US-NancyNeural", line: "Which dorm are you living in this year?", options: ["I'm living with two roommates.", "Maple Hall, on the north side of campus.", "This year is my second.", "The dorm has a kitchen."], answer: 1 },
        {
          kind: "conversation",
          title: "Changing a course section",
          cast: { A: "en-US-AmberNeural", B: "en-US-KaiNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a registrar's office employee.", pause: 1 },
            { who: "B", text: "Hi. I'm registered for Statistics in the morning section, but I just got a part-time job that starts at nine. Can I switch to the afternoon section?" },
            { who: "A", text: "Let me check. The afternoon section is full right now, but there's a waiting list. You're number three on it if I add you." },
            { who: "B", text: "Hmm. Is there any other option?" },
            { who: "A", text: "There's also an evening section on Tuesdays and Thursdays, and it still has a few seats. It meets from six to seven thirty." },
            { who: "B", text: "That would actually work better with my job. Let's do that." },
          ],
          questions: [
            { text: "Why does the student want to change sections?", options: ["The professor is too strict.", "He has a new part-time job.", "The morning class is too difficult.", "He wants to take the class with a friend."], answer: 1 },
            { text: "What does the student decide to do?", options: ["join the waiting list", "stay in the morning section", "switch to the evening section", "drop the course"], answer: 2 },
          ],
        },
        {
          kind: "announcement",
          title: "Library renovation",
          cast: { A: "en-US-ChristopherNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Attention, students. Starting next Monday, the second floor of the main library will be closed for renovation for about three weeks. During this time, the quiet study area will move to the first floor reading room. Books from the second floor can still be requested at the front desk, and staff will bring them to you within an hour. Group study rooms on the third floor are not affected and can be booked online as usual. We apologize for any inconvenience." },
          ],
          questions: [
            { text: "What will happen to the quiet study area?", options: ["It will close completely.", "It will move to the first floor.", "It will move to the third floor.", "It will open later in the evening."], answer: 1 },
            { text: "How can students get books from the second floor?", options: ["by requesting them at the front desk", "by visiting another library", "by ordering them online only", "They cannot get them."], answer: 0 },
          ],
        },
        {
          kind: "talk",
          title: "Why we procrastinate",
          cast: { A: "en-US-JennyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a psychology class.", pause: 1 },
            { who: "A", text: "Almost everyone procrastinates sometimes, putting off a task even when they know delaying it will cause problems later. Many people think procrastination is simply a matter of laziness or poor time management, but psychologists now see it differently." },
            { who: "A", text: "Research suggests that procrastination is mainly about managing emotions. When a task makes us feel anxious, bored or uncertain, avoiding it gives us immediate relief. The problem is that this relief is temporary. The task is still there, and the stress usually grows as the deadline gets closer." },
            { who: "A", text: "So what helps? One effective strategy is to make the first step very small. Instead of telling yourself to write your whole essay, you might decide to write just one paragraph or even just the title. Once people begin, the task usually feels less unpleasant than they expected, and it becomes easier to continue. Another strategy is to be kind to yourself. Studies show that students who forgive themselves for procrastinating are actually less likely to procrastinate the next time." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how to manage time with a calendar", "the emotional causes of procrastination and ways to reduce it", "why some students are lazy", "the history of psychology research"], answer: 1 },
            { text: "According to the professor, why do people avoid unpleasant tasks?", options: ["Avoiding them gives immediate emotional relief.", "They forget about the deadline.", "They have too much free time.", "They are not interested in grades."], answer: 0 },
            { text: "Why does the professor mention writing just the title of an essay?", options: ["to show that titles are important", "to give an example of making the first step very small", "to criticize students who write short essays", "to explain how to choose a topic"], answer: 1 },
            { text: "What does the professor say about students who forgive themselves?", options: ["They get lower grades.", "They procrastinate more often.", "They are less likely to procrastinate later.", "They work more slowly."], answer: 2 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-JaneNeural", line: "What time is it?", options: ["It's almost noon.", "It's a nice watch.", "On Monday.", "For two hours."], answer: 0 },
        { kind: "choose-response", voice: "en-US-JacobNeural", line: "Where is the nearest bank?", options: ["I need some money.", "It opens at nine.", "It's across the street from the post office.", "The bank is very old."], answer: 2 },
        { kind: "choose-response", voice: "en-US-MonicaNeural", line: "Do you want to sit inside or outside?", options: ["Outside, please. It's a beautiful day.", "I sat down.", "It's a nice table.", "We're inside now."], answer: 0 },
        { kind: "choose-response", voice: "en-US-BrandonNeural", line: "Who is your English teacher this year?", options: ["English is easy.", "Mr. Lopez. He's really nice.", "This year is busy.", "I teach English."], answer: 1 },
        { kind: "choose-response", voice: "en-US-LunaNeural", line: "Can I borrow your pen for a minute?", options: ["It's a blue pen.", "I bought it yesterday.", "A minute is short.", "Of course. Here you go."], answer: 3 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "How was the test this morning?", options: ["It's tomorrow morning.", "Not bad, but the last part was difficult.", "I tested the computer.", "In Room 5."], answer: 1 },
        {
          kind: "conversation",
          title: "Buying a bus pass",
          cast: { A: "en-US-AshleyNeural", B: "en-US-RogerNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a worker at a bus station.", pause: 1 },
            { who: "B", text: "Hello. How much is a bus pass for one month?" },
            { who: "A", text: "It's forty dollars. But if you're a student, it's only twenty-five." },
            { who: "B", text: "Great, I'm a student. Here's my card." },
            { who: "A", text: "Thanks. The pass works on all city buses, and you can also use it on the train on weekends." },
          ],
          questions: [
            { text: "How much does the student pay for the pass?", options: ["fifteen dollars", "twenty-five dollars", "forty dollars", "sixty dollars"], answer: 1 },
            { text: "When can the pass be used on the train?", options: ["every day", "only in the morning", "on weekends", "never"], answer: 2 },
          ],
        },
        {
          kind: "talk",
          title: "How chameleons change color",
          cast: { A: "en-US-AndrewNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a biology class.", pause: 1 },
            { who: "A", text: "Chameleons are famous for changing color. Many people think they do this to hide, by matching the color of the things around them. But that's not the main reason." },
            { who: "A", text: "Chameleons usually change color to communicate with other chameleons and to control their body temperature. For example, a male may turn bright colors to show that he is strong, or to attract a female. A chameleon may also turn darker in the morning, because dark colors absorb more heat from the sun." },
            { who: "A", text: "How do they do it? Their skin contains tiny crystals. When the chameleon relaxes or stretches its skin, the space between these crystals changes, and that changes the way light is reflected. So the color you see is really about light." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["where chameleons live", "why and how chameleons change color", "what chameleons eat", "how to care for a pet chameleon"], answer: 1 },
            { text: "According to the professor, what is one main reason chameleons change color?", options: ["to communicate", "to sleep", "to find water", "to grow"], answer: 0 },
            { text: "Why might a chameleon turn darker in the morning?", options: ["to hide from birds", "to absorb more heat from the sun", "because it is tired", "to attract insects"], answer: 1 },
            { text: "What causes the color change?", options: ["changes in what the chameleon eats", "changes in the space between tiny crystals in the skin", "the chameleon's blood", "colored water in the skin"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "I can't believe the deadline for the research proposal got moved up.", options: ["Neither can I. I'll have to finish it this weekend.", "The proposal was accepted.", "I moved last week.", "Research is interesting."], answer: 0 },
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "Didn't the professor say we could use our notes during the exam?", options: ["The exam is on Friday.", "I take notes on my laptop.", "Only for the second part, I think.", "She said it was easy."], answer: 2 },
        { kind: "choose-response", voice: "en-US-MichelleNeural", line: "I wonder whether the shuttle is still running this late.", options: ["I wonder about it too.", "It was running yesterday.", "The shuttle is free.", "It runs until midnight on weekdays."], answer: 3 },
        { kind: "choose-response", voice: "en-US-TonyNeural", line: "Wouldn't it be better to interview a few more people before we draw conclusions?", options: ["The interview was long.", "You're right. Our sample is pretty small.", "We drew a picture.", "I concluded the meeting."], answer: 1 },
        { kind: "choose-response", voice: "en-US-EmmaNeural", line: "Hasn't the department announced who won the scholarship?", options: ["Not yet. They're announcing it on Monday.", "I won a game.", "The department is large.", "Scholarships are expensive."], answer: 0 },
        { kind: "choose-response", voice: "en-US-ChristopherNeural", line: "I'm not sure my laptop will last through a three-hour exam.", options: ["The exam is in the gym.", "My laptop is new.", "You could ask for a seat near an outlet.", "Three hours is the limit."], answer: 2 },
        {
          kind: "conversation",
          title: "A problem with group work",
          cast: { A: "en-US-RogerNeural", B: "en-US-LunaNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and her professor.", pause: 1 },
            { who: "B", text: "Professor Hart, I wanted to talk about our group project. One member hasn't contributed anything, and the presentation is next week." },
            { who: "A", text: "I see. Have you talked to him directly about it?" },
            { who: "B", text: "We sent a few messages, but he hasn't replied." },
            { who: "A", text: "Try one more time, but be specific. Give him a clear task and a deadline, and copy me on the message. If he still doesn't respond, I'll speak with him myself." },
            { who: "B", text: "And what about the grade? It doesn't seem fair if he gets the same grade as everyone else." },
            { who: "A", text: "It won't be the same. Each of you will submit a short evaluation of your group members, and I take that into account. So document what each person does." },
          ],
          questions: [
            { text: "What is the student's problem?", options: ["She missed the presentation.", "A group member has not contributed.", "The project topic is too difficult.", "She wants to change groups."], answer: 1 },
            { text: "How will the professor make grading fair?", options: ["by giving everyone the same grade", "by canceling the presentation", "by using students' evaluations of their group members", "by giving an extra exam"], answer: 2 },
          ],
        },
        {
          kind: "talk",
          title: "The Doppler effect",
          cast: { A: "en-US-NancyNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a physics class.", pause: 1 },
            { who: "A", text: "You've all noticed this: when an ambulance passes you with its siren on, the pitch of the siren seems to drop suddenly at the moment it goes by. The siren itself hasn't changed. What you're hearing is called the Doppler effect." },
            { who: "A", text: "Sound travels in waves. When the ambulance is moving toward you, each new wave is produced a little closer to you than the last one, so the waves get squeezed together. Waves that are closer together have a higher frequency, which we hear as a higher pitch. Once the ambulance passes and moves away, the waves are stretched out, so the pitch sounds lower." },
            { who: "A", text: "The same principle applies to light, and that's where it gets really important. Astronomers noticed that the light from most distant galaxies is shifted toward the red end of the spectrum, meaning the light waves are stretched. This told them that those galaxies are moving away from us, which became one of the key pieces of evidence that the universe is expanding." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how sirens are designed", "the Doppler effect and its importance in astronomy", "the speed of sound", "how ambulances move through traffic"], answer: 1 },
            { text: "According to the professor, why does a siren sound higher as it approaches?", options: ["The driver makes it louder.", "The sound waves are squeezed together.", "The waves are stretched out.", "The air is warmer near the ambulance."], answer: 1 },
            { text: "What did astronomers learn from light shifted toward red?", options: ["Distant galaxies are moving away from us.", "Galaxies are getting hotter.", "Stars are getting closer to Earth.", "Light travels more slowly in space."], answer: 0 },
            { text: "Why does the professor begin with the example of an ambulance?", options: ["to discuss road safety", "to introduce a familiar example before a more complex application", "to explain how sound is recorded", "to show that sirens are too loud"], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Mia", prompt: "Why are you carrying an umbrella?", chunks: ["the forecast", "said", "it might", "rain", "this afternoon"], end: "." },
      { promptBy: "Lucas", prompt: "How was your first day at the new job?", chunks: ["everyone", "was", "very", "friendly", "and helpful"], end: "." },
      { promptBy: "Ayşe", prompt: "I need a quiet place to study.", chunks: ["have you", "checked", "the reading room", "on", "the top floor"], end: "?" },
      { promptBy: "Daniel", prompt: "What are you doing this weekend?", chunks: ["I'm going", "to visit", "my grandparents", "in", "the countryside"], end: "." },
      { promptBy: "Hannah", prompt: "Why didn't you come to the party?", chunks: ["I had", "to finish", "a report", "for", "my manager"], end: "." },
      { promptBy: "Mateo", prompt: "Is the museum worth visiting?", chunks: ["it has", "one of", "the best", "art collections", "in the country"], end: "." },
      { promptBy: "Grace", prompt: "I forgot my lunch at home.", chunks: ["would you", "like", "to share", "some of", "my sandwiches"], end: "?" },
      { promptBy: "Yusuf", prompt: "What did the librarian say?", chunks: ["she said", "the book", "will be", "available", "next week"], end: "." },
      { promptBy: "Chloe", prompt: "Why are you learning Japanese?", chunks: ["I'm hoping", "to work", "in Tokyo", "after", "I graduate"], end: "." },
      { promptBy: "Noah", prompt: "How often do you go swimming?", chunks: ["I try", "to go", "at least", "twice", "a week"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently bought a pair of headphones from an online store. When they arrived, one side did not work.",
      to: "the store's customer service team",
      subject: "Problem with my headphone order",
      tasks: ["Describe the problem with the headphones.", "Explain what you have already tried.", "Say what you would like the store to do."],
      sample: "Dear Customer Service Team,\n\nI'm writing about a pair of wireless headphones that I ordered from your website last week (order number 48213). They arrived on Monday, but unfortunately the left side does not produce any sound at all.\n\nBefore contacting you, I tried several things. I fully charged the headphones, reset them following the instructions in the manual, and connected them to two different devices, my phone and my laptop. In every case, only the right side worked.\n\nSince the headphones appear to be faulty, I would like to return them and receive a replacement pair. If a replacement is not available, I would prefer a full refund. Could you please tell me how to send them back and whether you will provide a return shipping label?\n\nThank you for your help.\n\nBest regards,\nDaniel Park",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education",
      professor: {
        name: "Dr. Alvarez",
        text: "Many schools now give students laptops or tablets to use in class instead of printed textbooks. Supporters say digital devices make learning more interactive and up to date, while critics worry about distraction and screen time. Do you think schools should replace printed textbooks with digital devices? Why or why not?",
      },
      students: [
        { name: "Emily", text: "Yes. Digital textbooks can be updated immediately, and they include videos and quizzes that help students understand difficult topics. They're also lighter than a bag full of books." },
        { name: "Marcus", text: "I disagree. When I study on a screen, I'm tempted to check messages and games. I also remember information better when I read on paper." },
      ],
      sample: "I think schools should use digital devices, but not completely replace printed textbooks. Emily is right that digital materials have real advantages. A science textbook can include a video of an experiment, and an interactive quiz gives students instant feedback, which a printed page cannot do. However, Marcus raises an important point about distraction. Many students, including me, find it hard to concentrate when notifications keep appearing. There is also research suggesting that people understand long texts better on paper. In my opinion, the best approach is a combination. Schools could use devices for practice activities and multimedia, while keeping printed books for longer readings. Teachers could also use software that blocks games and social media during lessons, so that students benefit from technology without losing focus.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are volunteering at a city museum. A museum guide is explaining your duties.",
      sentences: [
        "Thank you for helping us today.",
        "The main entrance opens at nine o'clock.",
        "Please wear your volunteer badge at all times.",
        "Visitors are not allowed to take photos with a flash.",
        "The children's workshop starts in the art room at eleven.",
        "If someone asks for directions, you can give them a map from the information desk.",
        "At the end of the day, please return your badge and sign the volunteer list before you leave.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people use their free time. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is your favorite way to spend a free afternoon?",
          sample: "My favorite way to spend a free afternoon is to go for a long walk by the sea and then meet a friend at a café. Walking helps me clear my mind after a busy week, especially when the weather is nice. Afterward, chatting with a friend over tea makes me feel relaxed and connected. Sometimes I also bring a book and read for an hour, which is something I rarely have time to do during the week.",
        },
        {
          text: "Do you think people today have more free time or less free time than people in the past? Why?",
          sample: "In some ways, people have more free time today, because machines do a lot of housework, like washing clothes and dishes. But I think many people feel they have less free time. Smartphones make it possible to work and answer messages at any hour, so the line between work and free time has become blurry. As a result, even when people are technically free, they are often still thinking about work or checking their phones.",
        },
        {
          text: "Some people prefer to spend their free time alone, while others prefer to be with friends. Which do you prefer, and why?",
          sample: "I enjoy both, but if I had to choose, I'd say I prefer spending free time with friends. Doing activities together, like cooking dinner or playing football, makes them more fun, and it's a good way to keep friendships strong. That said, I also need some time alone to recharge, especially after a stressful day. So usually I spend weekends with friends and keep a few quiet evenings during the week for myself.",
        },
        {
          text: "How do you think hobbies can help people in their careers?",
          sample: "I think hobbies can help people in their careers in several ways. First, many hobbies develop useful skills. For example, playing in a band teaches teamwork, and writing a blog improves communication skills. Second, hobbies reduce stress, so people come back to work with more energy and creativity. Finally, hobbies can lead to new opportunities. Someone who enjoys photography might start doing it professionally, or meet people through a hobby who later help them find a job.",
        },
      ],
    },
  },
};
