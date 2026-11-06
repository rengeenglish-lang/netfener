import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 3 (2026 format). Original Netfener content. */
export const TOEFL_3: ToeflTest = {
  id: "toefl-3",
  no: 3,
  title: "TOEFL iBT Practice Test 3",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The monarch migration",
          text: "Every autumn, millions of monarch butterflies fly south from Canada and the United States to central Mexico. The jou{{rney}} can cover more than four thou{{sand}} kilometers. Remarkably, no sin{{gle}} butterfly makes the round tr{{ip}}, because the insects that ret{{urn}} north in spring are the chil{{dren}} or grandchildren of those that left. Scientists bel{{ieve}} the butterflies use the posi{{tion}} of the sun to navi{{gate}}, along with an internal cl{{ock}}.",
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Laundry room",
          text: [
            "LAUNDRY ROOM – PLEASE READ",
            "Washers and dryers are available from 7 a.m. to 11 p.m. Each machine takes a student card; coins are no longer accepted.",
            "Please remove your clothes promptly. Laundry left in a machine for more than 30 minutes after the cycle ends may be moved to the shelf by the door.",
          ],
          questions: [
            { text: "How do students pay for the machines?", options: ["with coins", "with a student card", "at the front desk", "online in advance"], answer: 1 },
            { text: "What may happen to clothes left in a machine too long?", options: ["They may be put on a shelf.", "They may be thrown away.", "They may be washed again.", "They may be taken to lost and found."], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Volunteer orientation",
          text: [
            "To: New volunteers",
            "From: Ruth Abbott, Community Garden Coordinator",
            "Subject: Saturday orientation",
            "Hello and welcome!",
            "Our orientation for new volunteers will be held this Saturday from 9:00 to 11:00 a.m. at the garden shed on Pine Street. We'll show you how to use the tools safely and explain the weekly schedule.",
            "Please wear closed shoes and bring a water bottle. Gloves will be provided. If it rains, we will meet in Room 12 of the community center next door instead.",
            "See you soon,\nRuth",
          ],
          questions: [
            { text: "What will volunteers learn at the orientation?", options: ["how to grow vegetables at home", "how to use tools safely and the weekly schedule", "how to apply for a paid position", "how to design a garden"], answer: 1 },
            { text: "What should volunteers bring?", options: ["gloves", "their own tools", "a water bottle", "a packed lunch"], answer: 2 },
            { text: "What will happen if it rains?", options: ["The orientation will be canceled.", "The orientation will move to the community center.", "The orientation will start later.", "Volunteers will work in the rain."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Green roofs",
          paragraphs: [
            "A green roof is a roof that is partly or completely covered with plants growing in a layer of soil. Although the idea is ancient, green roofs have become increasingly common in modern cities, encouraged by local governments that offer tax benefits to building owners who install them.",
            "One of their main advantages is temperature control. Ordinary dark roofs absorb sunlight and can become extremely hot in summer, which raises the temperature of the surrounding air and increases the need for air conditioning. Plants, by contrast, use energy from the sun to release water through their leaves, cooling both the roof and the building beneath it.",
            "Green roofs also help to manage rainwater. During a heavy storm, water runs off conventional roofs very quickly, which can overwhelm city drains and cause flooding. A green roof absorbs much of the rain and releases it slowly. The main disadvantage is cost: green roofs are more expensive to install than conventional roofs, and many older buildings must be reinforced to support the extra weight of wet soil.",
          ],
          questions: [
            { text: "According to paragraph 1, why have green roofs become more common?", options: ["They are cheaper than other roofs.", "Some governments offer financial incentives.", "They were invented recently.", "Older buildings require them."], answer: 1 },
            { text: "The word \"conventional\" in paragraph 3 is closest in meaning to", options: ["ordinary", "modern", "damaged", "flat"], answer: 0 },
            { text: "According to paragraph 2, how do plants cool a roof?", options: ["by reflecting all sunlight", "by blocking the wind", "by releasing water through their leaves", "by absorbing heat from the building"], answer: 2 },
            { text: "What problem with conventional roofs is described in paragraph 3?", options: ["They let rain into buildings.", "They release rainwater too quickly.", "They are too heavy.", "They are difficult to repair."], answer: 1 },
            { text: "What does the author mention as a disadvantage of green roofs?", options: ["They attract insects.", "They make buildings hotter.", "They can be costly and heavy.", "They need daily watering."], answer: 2 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Breakfast",
          text: "Many people say that breakfast is the most important meal of the day. After a long ni{{ght}}, the body needs ene{{rgy}} to start the day. A good brea{{kfast}} might include bread, fr{{uit}} or eggs. Some peo{{ple}} are too busy to eat in the mor{{ning}}, so they buy coffee on the w{{ay}} to work. Doctors say that chil{{dren}} who eat breakfast often do bet{{ter}} at sch{{ool}}.",
        },
        {
          kind: "daily-life",
          genre: "Poster",
          title: "Spring concert",
          text: [
            "UNIVERSITY ORCHESTRA – SPRING CONCERT",
            "Friday, April 18, at 7:30 p.m. in Hallam Hall. Music by Mozart and Dvořák.",
            "Tickets: $10, or free for students with ID. Doors open at 7:00. Please arrive early, as seating is limited.",
          ],
          questions: [
            { text: "Who can attend the concert for free?", options: ["children", "students with ID", "orchestra members' families", "everyone"], answer: 1 },
            { text: "What time do the doors open?", options: ["6:30 p.m.", "7:00 p.m.", "7:30 p.m.", "8:00 p.m."], answer: 1 },
            { text: "Why should people arrive early?", options: ["There are not many seats.", "Tickets are sold only at the door.", "The concert starts at seven.", "Parking is difficult."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How penguins stay warm",
          paragraphs: [
            "Emperor penguins live in Antarctica, one of the coldest places on Earth, where winter temperatures can fall below minus forty degrees. They survive thanks to several special features.",
            "First, penguins have thick layers of fat under their skin, and their feathers are packed very closely together. The feathers trap a layer of warm air next to the body, like a coat.",
            "Second, emperor penguins huddle. Thousands of birds stand close together in a large group, sharing their body heat. The penguins slowly move around, so that each bird spends some time in the warm center and some time on the cold outside. In this way, the whole group stays warm through the long winter.",
          ],
          questions: [
            { text: "Where do emperor penguins live?", options: ["in the Arctic", "in Antarctica", "in South America", "in Australia"], answer: 1 },
            { text: "The word \"trap\" in paragraph 2 is closest in meaning to", options: ["hold", "warm", "lose", "clean"], answer: 0 },
            { text: "According to paragraph 2, what do penguin feathers do?", options: ["help them fly", "keep warm air close to the body", "change color in winter", "make them heavier"], answer: 1 },
            { text: "What is huddling?", options: ["swimming in groups", "standing close together to share heat", "building nests", "sleeping under the snow"], answer: 1 },
            { text: "Why do the penguins move around in the huddle?", options: ["to find food", "so each bird spends time in the warm center", "to look for their chicks", "to keep the snow away"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Plate tectonics",
          text: "The theory of plate tectonics explains many of the Earth's most dramatic features. The planet's outer la{{yer}} is divided into large plates that move sl{{owly}} over a hotter, softer interior. Where pla{{tes}} collide, mountains can for{{m}}; where they sep{{arate}}, new crust is crea{{ted}}. Most earthquakes and volc{{anoes}} occur along these bound{{aries}}, which explains why they are concen{{trated}} in particular reg{{ions}}.",
        },
        {
          kind: "daily-life",
          genre: "Safety rules",
          title: "Chemistry laboratory",
          text: [
            "LABORATORY SAFETY – ALL USERS",
            "Safety goggles must be worn at all times while experiments are in progress, including by visitors and by students who are only observing. Contact lenses are discouraged; students who wear them must inform the instructor before the session.",
            "Chemical spills of any size must be reported to the instructor immediately. Students should not attempt to clean up spills themselves unless they have completed the spill-response training offered at the start of each semester.",
          ],
          questions: [
            { text: "Who must wear safety goggles?", options: ["only students running experiments", "everyone in the lab while experiments are in progress", "only instructors", "only students who wear contact lenses"], answer: 1 },
            { text: "What must students who wear contact lenses do?", options: ["remove them before class", "tell the instructor before the session", "stay outside the lab", "wear two pairs of goggles"], answer: 1 },
            { text: "Under what condition may a student clean up a spill?", options: ["if the spill is small", "if the instructor is busy", "if the student has completed spill-response training", "if the chemical is not dangerous"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "Does language shape thought?",
          paragraphs: [
            "Linguists and psychologists have long debated whether the language a person speaks influences the way that person thinks. A strong version of this idea, associated with the early twentieth-century writer Benjamin Lee Whorf, held that language determines thought, so that speakers of different languages effectively live in different mental worlds. Few researchers today accept this extreme position.",
            "However, a weaker version has received considerable experimental support. Some languages, for example, describe locations using fixed directions such as north and south rather than terms like left and right. Studies have found that speakers of such languages are unusually good at keeping track of compass directions, even indoors. Similarly, languages differ in how finely they divide the color spectrum, and some experiments suggest that speakers distinguish colors slightly faster when their language uses separate words for them.",
            "Critics caution that such effects are typically small and that it is difficult to separate the influence of language from that of culture and environment. A community that relies on compass directions may do so because of its landscape and way of life, not simply because of its grammar. The current consensus, therefore, is that language can influence certain habits of thought, but it does not confine speakers to a single way of seeing the world.",
          ],
          questions: [
            { text: "According to paragraph 1, what did the strong version of Whorf's idea claim?", options: ["Language has no effect on thought.", "Language determines how people think.", "All languages are basically the same.", "Thought develops before language."], answer: 1 },
            { text: "The word \"extreme\" in paragraph 1 is closest in meaning to", options: ["popular", "radical", "recent", "careful"], answer: 1 },
            { text: "Why does the author mention languages that use compass directions?", options: ["to show that some languages lack words for left and right", "to provide evidence for a weaker form of the idea", "to argue that grammar determines landscape", "to explain how maps were invented"], answer: 1 },
            { text: "According to paragraph 3, why is it difficult to interpret these studies?", options: ["The effects are very large.", "Language is hard to separate from culture and environment.", "Few languages have been studied.", "Researchers disagree about color names."], answer: 1 },
            { text: "Which statement best summarizes the current view described in the passage?", options: ["Language completely controls thought.", "Language has no measurable effect on thought.", "Language can influence some habits of thought but does not limit speakers to one view.", "Culture is less important than grammar."], answer: 2 },
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
        { kind: "choose-response", voice: "en-US-EmmaNeural", line: "Excuse me, is this the line for the shuttle bus?", options: ["The bus is very comfortable.", "Yes, it should be here in five minutes.", "I took a taxi instead.", "It's a long line of text."], answer: 1 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "Have you met the new teaching assistant yet?", options: ["Yes, she seems really helpful.", "I'm meeting them at noon.", "The assistant is new.", "I teach on Mondays."], answer: 0 },
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "How much did you pay for your textbooks this term?", options: ["I read three of them.", "At the bookstore.", "Almost two hundred dollars, unfortunately.", "They're about biology."], answer: 2 },
        { kind: "choose-response", voice: "en-US-JasonNeural", line: "Do you want to grab dinner after the seminar?", options: ["The seminar was interesting.", "I had dinner yesterday.", "It starts at six.", "Sure, how about the Thai place?"], answer: 3 },
        { kind: "choose-response", voice: "en-US-JaneNeural", line: "Why is the elevator out of order again?", options: ["Maintenance said they're replacing a part.", "It goes to the fifth floor.", "I prefer the stairs on Mondays.", "Order it online."], answer: 0 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "Who's giving the keynote speech at the conference?", options: ["It's in the main hall.", "A scientist from the space agency.", "The conference lasts two days.", "I gave a speech last year."], answer: 1 },
        { kind: "choose-response", voice: "en-US-NancyNeural", line: "Could you turn the music down a little?", options: ["It's my favorite band.", "I bought it online.", "Sorry, is that better?", "Turn left at the corner."], answer: 2 },
        { kind: "choose-response", voice: "en-US-TonyNeural", line: "When are you planning to submit your application?", options: ["It's a very long application.", "I applied for a scholarship.", "The office is on campus.", "Probably by the end of the week."], answer: 3 },
        {
          kind: "conversation",
          title: "At the career center",
          cast: { A: "en-US-MichelleNeural", B: "en-US-BrandonNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and an advisor at the career center.", pause: 1 },
            { who: "B", text: "Hi. I'm hoping to find a summer internship, but I'm not sure where to start." },
            { who: "A", text: "Well, the first step is making sure your résumé is ready. Have you had anyone look at it?" },
            { who: "B", text: "Not yet. I've only listed my part-time job at the café, because I didn't think anything else was relevant." },
            { who: "A", text: "That's a common mistake. Employers want to see skills, and you can show skills through class projects or volunteer work too. For example, did you lead a group project or organize an event?" },
            { who: "B", text: "Actually, I organized a fundraiser for the hiking club last semester." },
            { who: "A", text: "That's exactly the kind of thing to include. Why don't you add it and bring the résumé to our drop-in session on Wednesday? Then we can look at internship listings together." },
          ],
          questions: [
            { text: "Why does the student visit the career center?", options: ["to get help finding an internship", "to apply for a job at the center", "to change his major", "to sign up for a club"], answer: 0 },
            { text: "What does the advisor suggest the student add to his résumé?", options: ["his grades", "the fundraiser he organized", "more details about the café", "a photo"], answer: 1 },
          ],
        },
        {
          kind: "announcement",
          title: "Dining hall hours",
          cast: { A: "en-US-AshleyNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Hello, everyone. Starting this Sunday, the North Dining Hall will change its weekend hours. Brunch will now be served from ten a.m. to two p.m. on Saturdays and Sundays, and dinner will begin at five instead of five thirty. We're making this change because many of you told us in our recent survey that you'd like a later brunch. Weekday hours will stay the same. As always, you can check the daily menu on the dining app." },
          ],
          questions: [
            { text: "What is changing?", options: ["the dining hall's weekend hours", "the price of meals", "the location of the dining hall", "the weekday menu"], answer: 0 },
            { text: "Why is the dining hall making the change?", options: ["to save money", "because students requested a later brunch", "because of staff shortages", "to prepare for exams"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Why Mars is red",
          cast: { A: "en-US-AndrewNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an astronomy class.", pause: 1 },
            { who: "A", text: "If you've ever seen Mars in the night sky, you'll know it has a reddish color, which is why it's often called the red planet. So, what makes it red?" },
            { who: "A", text: "The answer is iron. The rocks and dust on the Martian surface contain a lot of iron. Over billions of years, that iron has reacted with small amounts of oxygen to form iron oxide, which is essentially rust. The fine, rusty dust covers much of the planet." },
            { who: "A", text: "And that dust doesn't stay on the ground. Mars has strong winds and huge dust storms, some large enough to cover the entire planet for weeks. The dust is lifted into the atmosphere, so even the Martian sky often looks pinkish or orange during the day." },
            { who: "A", text: "Now, an interesting detail: the rust is mostly on the surface. When rovers have drilled just a few centimeters into the ground, they've found rock that's gray rather than red. So in a sense, Mars is only red on the outside." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how rovers travel on Mars", "why Mars appears red", "the history of Mars exploration", "the size of Martian dust storms"], answer: 1 },
            { text: "According to the professor, what is the Martian dust made of?", options: ["frozen water", "iron oxide", "volcanic glass", "sand from oceans"], answer: 1 },
            { text: "Why does the professor mention dust storms?", options: ["to explain why the sky can also look reddish", "to describe dangers for astronauts", "to show that Mars has oceans", "to explain how rovers are powered"], answer: 0 },
            { text: "What did rovers find when they drilled into the ground?", options: ["red rock", "liquid water", "gray rock", "metal deposits"], answer: 2 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-SaraNeural", line: "Do you have the time?", options: ["It's almost three o'clock.", "I don't have time to talk.", "The clock is new.", "Time flies."], answer: 0 },
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "Where did you put the keys?", options: ["They're for the car.", "On the table by the door.", "I locked the door.", "This morning."], answer: 1 },
        { kind: "choose-response", voice: "en-US-CoraNeural", line: "How was the movie last night?", options: ["At eight o'clock.", "With my sister.", "Really funny. You should see it.", "The theater is downtown."], answer: 2 },
        { kind: "choose-response", voice: "en-US-JacobNeural", line: "Are you ready for the test tomorrow?", options: ["I think so. I studied all weekend.", "The test is in Room 5.", "It's a math test.", "Tomorrow is Tuesday."], answer: 0 },
        { kind: "choose-response", voice: "en-US-MonicaNeural", line: "Can I sit here?", options: ["It's a nice chair.", "I'm sitting down.", "In the front row.", "Of course. Go ahead."], answer: 3 },
        { kind: "choose-response", voice: "en-US-RogerNeural", line: "What are you doing this weekend?", options: ["It was fun.", "I'm visiting my grandparents.", "On Saturday morning.", "Last weekend."], answer: 1 },
        {
          kind: "conversation",
          title: "Planning a grocery trip",
          cast: { A: "en-US-AvaNeural", B: "en-US-KaiNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between two roommates.", pause: 1 },
            { who: "A", text: "We're almost out of milk and bread. Do you want to go to the supermarket together this afternoon?" },
            { who: "B", text: "Sure, but I have class until three. Can we go after that?" },
            { who: "A", text: "That works. Let's take the bus, because we'll have a lot to carry." },
            { who: "B", text: "Good idea. I'll make a list so we don't forget anything." },
          ],
          questions: [
            { text: "What are the roommates planning to do?", options: ["go to a class", "go grocery shopping", "cook dinner for friends", "clean the apartment"], answer: 1 },
            { text: "Why will they take the bus?", options: ["It is raining.", "They will have a lot to carry.", "The supermarket is closed.", "They do not have bicycles."], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Why zebras have stripes",
          cast: { A: "en-US-ElizabethNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a biology class.", pause: 1 },
            { who: "A", text: "Today let's look at a question people have asked for a long time: why do zebras have stripes? Scientists have suggested several answers." },
            { who: "A", text: "One old idea is that the stripes confuse lions. When many zebras run together, the stripes may make it hard for a lion to pick out a single animal. Another idea is that the stripes help keep zebras cool in the hot sun." },
            { who: "A", text: "But recent experiments support a different answer: flies. In one study, researchers put striped coats on horses. Biting flies landed far less often on the striped coats than on plain ones. So the stripes may mainly protect zebras from insects that spread disease." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how lions hunt zebras", "possible reasons for zebra stripes", "how horses keep cool", "diseases in Africa"], answer: 1 },
            { text: "What is one old idea about zebra stripes?", options: ["They help zebras find water.", "They confuse lions.", "They help zebras swim.", "They attract other zebras."], answer: 1 },
            { text: "What did researchers put on horses in the study?", options: ["striped coats", "special shoes", "sun hats", "insect spray"], answer: 0 },
            { text: "What did the study suggest?", options: ["Stripes make animals warmer.", "Stripes help protect against biting flies.", "Flies prefer striped coats.", "Horses do not like coats."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "Hasn't the deadline for course registration already passed?", options: ["Technically, yes, but the department can make exceptions.", "I'm registered to vote.", "The course is very popular.", "It passed by the library."], answer: 0 },
        { kind: "choose-response", voice: "en-US-LunaNeural", line: "I'd rather not present first, if that's all right with the group.", options: ["The group has four members.", "No problem. I don't mind going first.", "I presented it last week.", "That's all right, I'm first."], answer: 1 },
        { kind: "choose-response", voice: "en-US-ChristopherNeural", line: "Did you end up going to that lecture on artificial intelligence?", options: ["The lecture hall seats three hundred.", "Artificial intelligence is a big field.", "I meant to, but I got stuck at work.", "I'll end it soon."], answer: 2 },
        { kind: "choose-response", voice: "en-US-AmberNeural", line: "You're not still working on that problem set, are you?", options: ["I set the table already.", "There are ten problems in it.", "It's due on Thursday.", "Afraid so. The last question is really tricky."], answer: 3 },
        { kind: "choose-response", voice: "en-US-BrianNeural", line: "I wonder if the museum offers student discounts.", options: ["It's worth asking at the ticket desk.", "The museum has three floors.", "I wonder about that painting.", "Discounts are for students."], answer: 0 },
        { kind: "choose-response", voice: "en-US-JennyNeural", line: "Wouldn't it be cheaper to cook at home than to eat out every night?", options: ["I ate out last night.", "Definitely, but I never seem to have the time.", "The restaurant is cheap.", "Home is far from here."], answer: 1 },
        {
          kind: "conversation",
          title: "Transfer credits",
          cast: { A: "en-US-DavisNeural", B: "en-US-SaraNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and an employee at the registrar's office.", pause: 1 },
            { who: "B", text: "Hi. I transferred here this semester, and I noticed that one of my courses from my old college doesn't appear on my record." },
            { who: "A", text: "Let me take a look. Which course is it?" },
            { who: "B", text: "Introduction to Statistics. I got an A in it, so I assumed it would count toward my economics major." },
            { who: "A", text: "I see the problem. The course was only two credits at your previous college, and our equivalent course is three credits, so it couldn't be matched automatically." },
            { who: "B", text: "So does that mean I have to take statistics again?" },
            { who: "A", text: "Not necessarily. If you bring the course syllabus to the economics department, they can review it. If they decide it covered the same material, they can approve it as an exception. Many students in your situation get it approved." },
          ],
          questions: [
            { text: "Why wasn't the course added to the student's record automatically?", options: ["She did not pass it.", "It had fewer credits than the equivalent course.", "Her old college has closed.", "It was not a statistics course."], answer: 1 },
            { text: "What does the employee imply about the student's chances?", options: ["She will probably have to retake the course.", "There is a good chance the course will be approved.", "The department never makes exceptions.", "She should change her major."], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Opportunity cost",
          cast: { A: "en-US-RogerNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an economics class.", pause: 1 },
            { who: "A", text: "One of the most useful ideas in economics is opportunity cost. The opportunity cost of a choice is the value of the best alternative you give up when you make that choice. Notice that it's not just about money." },
            { who: "A", text: "Take your decision to attend this lecture. The money cost might be zero, since you've already paid tuition. But the opportunity cost is whatever else you could have done with this hour: working a shift and earning wages, say, or studying for another exam. If you'd earn twenty dollars an hour at your job, part of the cost of attending is that twenty dollars." },
            { who: "A", text: "This explains some behavior that might seem puzzling. For example, university enrollment often rises during economic downturns. Why would people spend more on education when money is tight? Because when jobs are scarce, the wages people give up by studying are lower. The opportunity cost of education falls, so more people choose it." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how universities set tuition", "the concept of opportunity cost", "why wages rise in a downturn", "how to manage a budget"], answer: 1 },
            { text: "According to the professor, what is opportunity cost?", options: ["the money paid for a product", "the value of the best alternative given up", "the cost of borrowing money", "a cost that is always zero"], answer: 1 },
            { text: "Why does the professor mention working a shift at a job?", options: ["to show that opportunity cost can include wages not earned", "to encourage students to find jobs", "to explain how tuition is paid", "to compare different jobs"], answer: 0 },
            { text: "According to the professor, why does enrollment often rise during economic downturns?", options: ["Tuition becomes cheaper.", "Universities advertise more.", "The opportunity cost of studying is lower.", "Students have more savings."], answer: 2 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ella", prompt: "Why are you carrying an umbrella? It's sunny.", chunks: ["the forecast", "says", "it will", "rain", "this afternoon"], end: "." },
      { promptBy: "Marco", prompt: "Did you finish the group project?", chunks: ["we still", "need", "to add", "the", "conclusion"], end: "." },
      { promptBy: "Yuki", prompt: "I'm looking for a quiet place to study.", chunks: ["have you", "tried", "the reading room", "on the", "top floor"], end: "?" },
      { promptBy: "Liam", prompt: "How did you hear about the job?", chunks: ["a friend", "sent me", "the link", "to the", "job posting"], end: "." },
      { promptBy: "Zara", prompt: "What time should we leave for the airport?", chunks: ["we should", "leave", "at least", "three hours", "before the flight"], end: "." },
      { promptBy: "Owen", prompt: "Why didn't you come to practice yesterday?", chunks: ["I had", "a doctor's", "appointment", "that I", "couldn't change"], end: "." },
      { promptBy: "Ines", prompt: "I want to learn to cook healthier meals.", chunks: ["you could", "sign up for", "the cooking class", "at the", "community center"], end: "." },
      { promptBy: "Paul", prompt: "Is the museum worth visiting?", chunks: ["the new", "exhibition", "about ancient Egypt", "is", "fascinating"], end: "." },
      { promptBy: "Rosa", prompt: "My laptop is running really slowly.", chunks: ["have you", "tried", "restarting it", "or closing", "some programs"], end: "?" },
      { promptBy: "Tariq", prompt: "Why are you learning Japanese?", chunks: ["I'm planning", "to study", "in Tokyo", "for a", "semester"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Last week you borrowed a video camera from your university's media center for a class project. While you were filming, the camera's battery cover broke.",
      to: "Ms. Patel (media center manager)",
      subject: "Damage to borrowed camera",
      tasks: ["Explain what happened to the camera.", "Apologize and offer to pay for or fix the damage.", "Ask whether you can still borrow equipment in the future."],
      sample: "Dear Ms. Patel,\n\nI'm writing about the video camera I borrowed from the media center last Tuesday for my journalism project. While I was filming outdoors on Friday, the battery cover snapped off when I was changing the battery. The camera itself still works, but the cover no longer stays closed.\n\nI'm very sorry about this. I was trying to be careful, but I should have been more gentle with it. I'd be happy to pay for a replacement cover or for the repair, whichever is easier for the center.\n\nI also wanted to ask whether I will still be able to borrow equipment in the future. I have another project next month, and the media center's cameras are very useful for my course.\n\nThank you, and apologies again.\n\nSincerely,\nKai",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Urban Studies",
      professor: {
        name: "Dr. Lindqvist",
        text: "Several major cities have banned private cars from parts of their downtown areas, turning streets over to pedestrians, cyclists and public transportation. Supporters say this reduces pollution and makes city centers more pleasant. Opponents argue that it hurts local businesses and makes life difficult for people who depend on cars. Should more cities ban cars from their downtown areas? Why or why not?",
      },
      students: [
        { name: "Priya", text: "I strongly support car-free downtowns. When I visited a city that had closed its center to cars, the streets were full of people walking and sitting outside cafés. It felt much safer and healthier." },
        { name: "Daniel", text: "I see the benefits, but I worry about people with disabilities and elderly residents who can't easily walk or cycle. A total ban could make it very hard for them to reach shops and services." },
      ],
      sample: "I think more cities should ban private cars from their downtown areas, but only if they address the concern that Daniel raises. Priya is right that car-free streets are more pleasant and safer, and they also reduce air pollution, which is a serious health problem in many cities. However, a ban will only be fair if everyone can still reach the city center. Cities could allow exceptions for people with disabilities, delivery vehicles and taxis, and they could improve public transportation before the ban begins, for example by adding more frequent buses and accessible stations. Some European cities have done this successfully and found that, after an initial drop, many shops actually received more customers, because people who walk tend to stop and browse more often than people who drive past.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are starting a part-time job at the campus bookstore. Your supervisor is giving you instructions.",
      sentences: [
        "Thanks for joining us today.",
        "The cash register is next to the entrance.",
        "Textbooks are arranged by course number.",
        "Customers can return books within two weeks of purchase.",
        "Please check that every returned book has a receipt.",
        "During the first week of classes, the store gets very crowded in the afternoon.",
        "If a customer cannot find a book on the shelf, you can check the computer to see whether it has been ordered.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people learn new skills. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe a skill you learned recently and how you learned it.",
          sample: "Recently I learned how to edit videos. I needed it for a class project, so I watched a series of free online tutorials and then practiced by editing short clips from a family trip. At first it was frustrating, because the software has so many features, but after about two weeks I could cut scenes, add music and include subtitles. Learning by doing a real project really helped, because I had a clear goal and could see my progress.",
        },
        {
          text: "Do you prefer to learn new things on your own or with a teacher? Why?",
          sample: "It depends on the skill, but generally I prefer learning with a teacher. A teacher can notice my mistakes early, before they become habits, and explain things in a way that suits me. For example, when I took piano lessons, my teacher corrected my hand position, which I would never have noticed by myself. That said, for simple practical skills, like using a new app, I'm happy to learn on my own with online videos, because it's faster and more flexible.",
        },
        {
          text: "Some people believe that schools should teach more practical skills, like managing money, instead of traditional subjects. What do you think?",
          sample: "I think schools should include more practical skills, but not instead of traditional subjects. Skills like managing money, cooking or understanding a contract are extremely useful, and many young people leave school without them. However, subjects like math, science and history teach students how to think logically and understand the world. The best approach would be to combine them, for example by using real-life budgeting problems in math class, so students learn both at the same time.",
        },
        {
          text: "How do you think technology will change the way people learn in the future?",
          sample: "I think technology will make learning much more personalized. Already, some apps adjust exercises to each learner's level, and in the future artificial intelligence could act like a personal tutor that explains topics in different ways until a student understands. Virtual reality might also let students practice skills, like surgery or engineering, in realistic situations without any risk. However, I believe human teachers will still be important, because motivation and encouragement are hard to replace with technology.",
        },
      ],
    },
  },
};
