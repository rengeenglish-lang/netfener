import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 5 (2026 format). Original Netfener content. */
export const TOEFL_5: ToeflTest = {
  id: "toefl-5",
  no: 5,
  title: "TOEFL iBT Practice Test 5",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Volcanoes",
          text: "A volcano is an opening in the Earth's surface through which melted rock escapes. Deep under{{ground}}, this rock is called mag{{ma}}; once it reaches the surf{{ace}}, it is known as lava. Some volc{{anoes}} erupt violently, throwing ash high into the a{{ir}}, while others release lava sl{{owly}}. Although eruptions can be dang{{erous}}, volcanic soil is very fer{{tile}}, so many far{{mers}} live near act{{ive}} volcanoes.",
        },
        {
          kind: "daily-life",
          genre: "Sign",
          title: "Museum hours",
          text: [
            "CITY HISTORY MUSEUM",
            "Open Tuesday to Sunday, 10 a.m.–5 p.m. Closed Mondays. Free entry on the first Sunday of every month.",
            "Large bags must be left in the lockers on the ground floor. Photography without flash is permitted.",
          ],
          questions: [
            { text: "On which day is the museum closed?", options: ["Sunday", "Monday", "Tuesday", "Saturday"], answer: 1 },
            { text: "What must visitors do with large bags?", options: ["carry them in their hands", "leave them in a locker", "show them at the entrance", "take them back to the car"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Book club",
          text: [
            "To: Book Club Members",
            "From: Omar Haddad",
            "Subject: This month's meeting",
            "Hi all,",
            "Our next meeting will be on Thursday, March 6, at 6:30 p.m. Because the café where we usually meet is being renovated, we'll gather in the library's group study room on the second floor instead.",
            "We'll be discussing the first half of the novel, up to chapter twelve, so there's no need to finish the whole book yet. Snacks are welcome, but please avoid anything with nuts, as one member has an allergy.",
            "Omar",
          ],
          questions: [
            { text: "Why is the meeting being held in the library?", options: ["The library is closer.", "The café is being renovated.", "More members are coming.", "The library has the book."], answer: 1 },
            { text: "How much of the novel should members read before the meeting?", options: ["the whole book", "the first chapter", "up to chapter twelve", "the last half"], answer: 2 },
            { text: "What does Omar ask members not to bring?", options: ["any food", "drinks", "snacks containing nuts", "other books"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "The placebo effect",
          paragraphs: [
            "A placebo is a treatment that has no active medical ingredient, such as a sugar pill. Remarkably, patients who receive a placebo often report that their symptoms improve. This phenomenon, known as the placebo effect, is one reason why new medicines are tested against placebos: a drug is only considered effective if it works better than an inactive pill.",
            "The placebo effect appears to be strongest for symptoms that are influenced by the brain's perception, such as pain, nausea and fatigue. When people expect a treatment to help, the brain may release natural pain-relieving chemicals. Brain-imaging studies have shown changes in activity in pain-related areas of the brain after patients take a placebo they believe to be a painkiller.",
            "Surprisingly, the effect can occur even when patients know they are taking a placebo. In several studies, people with chronic conditions who were openly given placebo pills still reported improvements. Researchers believe that the ritual of taking a pill, along with the attention of a caring doctor, may itself contribute to how patients feel. Placebos cannot cure diseases such as infections or cancer, however, so they are no substitute for effective treatment.",
          ],
          questions: [
            { text: "According to paragraph 1, why are new medicines tested against placebos?", options: ["to see whether they work better than an inactive pill", "to make them cheaper", "to find out how they taste", "to reduce side effects"], answer: 0 },
            { text: "The word \"perception\" in paragraph 2 is closest in meaning to", options: ["strength", "awareness", "memory", "growth"], answer: 1 },
            { text: "According to paragraph 2, for which symptoms is the placebo effect strongest?", options: ["infections", "broken bones", "pain, nausea and fatigue", "high blood pressure"], answer: 2 },
            { text: "What is surprising about the studies described in paragraph 3?", options: ["Placebos cured infections.", "Patients improved even when they knew the pill was a placebo.", "Doctors refused to use placebos.", "Placebos worked only in children."], answer: 1 },
            { text: "What does the author say about the limits of placebos?", options: ["They cannot cure diseases such as infections.", "They never affect pain.", "They are dangerous.", "They work only with a doctor present."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Dogs as pets",
          text: "Dogs are one of the most popular pets in the world. They are lo{{yal}} and friendly, and many peo{{ple}} think of them as part of the fam{{ily}}. Dogs need exer{{cise}} every day, so their own{{ers}} often take them for wa{{lks}}. Some dogs are also tra{{ined}} to help people, for exa{{mple}} by guiding people who can{{not}} see or by finding people after an earth{{quake}}.",
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Lost and found",
          text: [
            "LOST AND FOUND",
            "Items found in the student center are kept at the information desk for 30 days. To collect an item, describe it and show your student ID.",
            "Phones and wallets are taken to the campus security office in Hall B for safekeeping.",
          ],
          questions: [
            { text: "How long are found items kept at the information desk?", options: ["7 days", "14 days", "30 days", "60 days"], answer: 2 },
            { text: "What must students do to collect an item?", options: ["pay a small fee", "describe it and show their ID", "fill in an online form", "wait until the end of the month"], answer: 1 },
            { text: "Where are lost phones taken?", options: ["to the information desk", "to the library", "to the security office in Hall B", "to the police station"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "How submarines dive",
          paragraphs: [
            "A submarine is a ship that can travel under the water. To move up and down, submarines use special tanks called ballast tanks.",
            "When a submarine wants to dive, it opens valves that let seawater flow into the ballast tanks. The water makes the submarine heavier, so it sinks. When it wants to come back up, it uses compressed air to push the water out of the tanks. The submarine becomes lighter and rises to the surface.",
            "Submarines also have small wings called diving planes, which help them steer up or down while they are moving, in the same way that an airplane uses its wings.",
          ],
          questions: [
            { text: "What do submarines use to move up and down?", options: ["engines on the roof", "ballast tanks", "large sails", "anchors"], answer: 1 },
            { text: "The word \"flow\" in paragraph 2 is closest in meaning to", options: ["run", "freeze", "stop", "jump"], answer: 0 },
            { text: "What happens when water enters the ballast tanks?", options: ["The submarine becomes lighter.", "The submarine becomes heavier and sinks.", "The submarine moves faster.", "The submarine turns around."], answer: 1 },
            { text: "How does a submarine rise to the surface?", options: ["It adds more water to the tanks.", "It uses compressed air to push water out.", "It turns off its engines.", "It drops its anchor."], answer: 1 },
            { text: "What are diving planes compared to?", options: ["the wheels of a car", "the wings of an airplane", "the sails of a boat", "the legs of a fish"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Behavioral economics",
          text: "Traditional economic models assume that people make rational decisions. Behavioral economics chal{{lenges}} this assumption by showing that real deci{{sions}} are often influenced by emo{{tions}}, habits and mental short{{cuts}}. For example, people tend to va{{lue}} what they already own more hig{{hly}} than identical items they do not own. Such insi{{ghts}} have shaped govern{{ment}} policies, such as auto{{matically}} enrolling workers in pen{{sion}} plans.",
        },
        {
          kind: "daily-life",
          genre: "Contract clause",
          title: "Residence hall agreement",
          text: [
            "RESIDENCE HALL AGREEMENT – SECTION 7: EARLY TERMINATION",
            "Residents who wish to end this agreement before the close of the academic year must submit written notice to the Housing Office at least 30 days in advance. Residents who leave without notice remain responsible for the full semester's charges.",
            "Charges will be reduced on a weekly basis from the date of departure only if the resident withdraws from the university entirely, or if a replacement resident approved by the Housing Office takes over the room.",
          ],
          questions: [
            { text: "What must a resident do to end the agreement early?", options: ["pay a fee immediately", "give written notice at least 30 days ahead", "find a new roommate", "move out at the end of the week"], answer: 1 },
            { text: "What happens to a resident who leaves without giving notice?", options: ["They pay only for the weeks they stayed.", "They are responsible for the full semester's charges.", "They lose their place at the university.", "They must pay a weekly fine."], answer: 1 },
            { text: "In which situation are charges reduced from the date of departure?", options: ["if the resident moves to another room", "if the resident gives one week's notice", "if an approved replacement takes over the room", "if the resident complains about the room"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "Life at hydrothermal vents",
          paragraphs: [
            "Until the late 1970s, scientists generally assumed that almost all life on Earth depended, directly or indirectly, on energy from the sun. That assumption was overturned in 1977, when researchers exploring the ocean floor near the Galápagos Islands discovered hydrothermal vents: openings in the seafloor from which mineral-rich water, heated by underlying magma, pours into the surrounding ocean.",
            "To their astonishment, the scientists found dense communities of organisms clustered around the vents, including giant tube worms more than two meters long, clams and crabs, thriving in complete darkness. The foundation of these ecosystems turned out to be bacteria that obtain energy not from sunlight but from chemical reactions involving compounds such as hydrogen sulfide in the vent water. This process, known as chemosynthesis, allows the bacteria to produce organic matter, which in turn supports the animals. Tube worms, for instance, have no mouth or digestive system; instead, they host the bacteria inside their bodies and absorb the nutrients they produce.",
            "The discovery had implications far beyond marine biology. If complex ecosystems can exist without sunlight, then life might be possible in other places once considered uninhabitable, such as the oceans thought to lie beneath the icy surfaces of some moons in our solar system. Some researchers have even proposed that life on Earth itself may have originated in environments similar to hydrothermal vents.",
          ],
          questions: [
            { text: "According to paragraph 1, what did scientists assume before 1977?", options: ["that life could exist without sunlight", "that almost all life depended on energy from the sun", "that the ocean floor was too cold for vents", "that magma never reached the seafloor"], answer: 1 },
            { text: "The word \"astonishment\" in paragraph 2 is closest in meaning to", options: ["disappointment", "amazement", "confusion", "relief"], answer: 1 },
            { text: "According to paragraph 2, how do the bacteria at the vents obtain energy?", options: ["from sunlight", "from eating tube worms", "from chemical reactions involving compounds in the water", "from the heat of the water alone"], answer: 2 },
            { text: "Why does the author mention that tube worms have no mouth or digestive system?", options: ["to show how they depend on bacteria for nutrients", "to explain why they grow so large", "to compare them with clams", "to suggest they are not animals"], answer: 0 },
            { text: "What does paragraph 3 suggest about the significance of the discovery?", options: ["It proved that life exists on other moons.", "It suggested that life might exist in places without sunlight.", "It showed that vents are dangerous to marine life.", "It ended research into the origin of life."], answer: 1 },
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
        { kind: "choose-response", voice: "en-US-AriaNeural", line: "Is there anywhere on campus to print photos?", options: ["The photo was beautiful.", "The copy center in the library can do it.", "I printed my essay.", "Campus is very big."], answer: 1 },
        { kind: "choose-response", voice: "en-US-DavisNeural", line: "Did you remember to bring the tickets?", options: ["Yes, they're in my bag.", "The tickets were expensive.", "I remember the concert.", "I'll bring my friend."], answer: 0 },
        { kind: "choose-response", voice: "en-US-SaraNeural", line: "Why is everyone wearing red today?", options: ["Red is a nice color.", "It's on sale.", "There's a basketball game tonight, and that's our team color.", "I wore it yesterday."], answer: 2 },
        { kind: "choose-response", voice: "en-US-BrandonNeural", line: "How long have you been waiting?", options: ["I'm waiting for the bus.", "The wait is long.", "Until five o'clock.", "Only about ten minutes."], answer: 3 },
        { kind: "choose-response", voice: "en-US-MichelleNeural", line: "Could we move our meeting to Thursday?", options: ["Thursday works for me.", "We met on Tuesday.", "The meeting is in Room 3.", "I moved last month."], answer: 0 },
        { kind: "choose-response", voice: "en-US-KaiNeural", line: "Have you tried the new pizza place downtown?", options: ["I like downtown.", "Not yet. Is it any good?", "Pizza is from Italy.", "It's new to me."], answer: 1 },
        { kind: "choose-response", voice: "en-US-JennyNeural", line: "Who's in charge of the volunteer schedule?", options: ["The schedule is weekly.", "I volunteered on Saturday.", "Ask Maria. She organizes it.", "It's in charge."], answer: 2 },
        { kind: "choose-response", voice: "en-US-TonyNeural", line: "Should I bring my laptop to the workshop?", options: ["It's a new laptop.", "The workshop is free.", "I'll bring snacks.", "Yes, you'll need it for the exercises."], answer: 3 },
        {
          kind: "conversation",
          title: "Interlibrary loan",
          cast: { A: "en-US-ElizabethNeural", B: "en-US-JacobNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and a librarian.", pause: 1 },
            { who: "B", text: "Hi. I need a book for my history paper, but the online catalog says the library doesn't have it." },
            { who: "A", text: "You can request it through interlibrary loan. We'll borrow it from another university library for you." },
            { who: "B", text: "Great. How long does that usually take?" },
            { who: "A", text: "Usually about a week, sometimes a little longer. When is your paper due?" },
            { who: "B", text: "In three weeks." },
            { who: "A", text: "Then you should have plenty of time. Just fill out the request form on the library website. One thing to know: interlibrary loan books usually can't be renewed, so plan to finish with it within the loan period." },
          ],
          questions: [
            { text: "What does the student need?", options: ["help writing his paper", "a book the library does not have", "a quiet study room", "a library card"], answer: 1 },
            { text: "What does the librarian warn the student about?", options: ["The books are expensive.", "The loan usually cannot be renewed.", "The form is difficult.", "The book may be damaged."], answer: 1 },
          ],
        },
        {
          kind: "announcement",
          title: "Shuttle detour",
          cast: { A: "en-US-AmberNeural" },
          script: [
            { who: "N", text: "Listen to an announcement on a college campus.", pause: 1 },
            { who: "A", text: "Attention, students and staff. Because of road construction on College Avenue, the campus shuttle will follow a different route for the next two weeks. The stop in front of the art building will be temporarily closed. Instead, please use the stop on Maple Street, just behind the art building. All other stops remain the same, but please allow an extra five to ten minutes for your trip. The updated route map is available on the transportation website." },
          ],
          questions: [
            { text: "Why is the shuttle changing its route?", options: ["because of road construction", "because a new stop has opened", "because of bad weather", "because the art building is closed"], answer: 0 },
            { text: "What should riders who usually use the art building stop do?", options: ["walk to College Avenue", "use the stop on Maple Street", "take a city bus instead", "wait for two weeks"], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "The invention of the piano",
          cast: { A: "en-US-BrianNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a music history class.", pause: 1 },
            { who: "A", text: "Before the piano, the most popular keyboard instrument in Europe was the harpsichord. When you press a key on a harpsichord, a small device plucks the string. The problem is that it plucks the string the same way no matter how hard you press, so the player can't make a note louder or softer." },
            { who: "A", text: "Around the year seventeen hundred, an Italian instrument maker named Bartolomeo Cristofori solved this problem. Instead of plucking the strings, his instrument used small hammers to strike them. The harder the player pressed a key, the harder the hammer hit the string, and the louder the sound. He called it something like 'a harpsichord with soft and loud', and that's where the name piano comes from: in Italian, piano means soft." },
            { who: "A", text: "The new instrument wasn't an instant success. Early pianos were expensive and fairly quiet, and many musicians stuck with the harpsichord. But by the end of the eighteenth century, composers like Mozart were writing music that depended on the piano's ability to change volume, and it gradually replaced the harpsichord altogether." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["the life of Mozart", "how the piano developed from the harpsichord", "how to play the harpsichord", "Italian music in the seventeenth century"], answer: 1 },
            { text: "What was the main limitation of the harpsichord?", options: ["It was too loud.", "Players could not change the volume of a note.", "It had too few keys.", "It was very heavy."], answer: 1 },
            { text: "According to the professor, where does the name \"piano\" come from?", options: ["the inventor's name", "the Italian word for soft", "the city where it was built", "the sound of the hammers"], answer: 1 },
            { text: "What does the professor imply about the piano's early years?", options: ["It quickly replaced the harpsichord.", "It took time to become popular.", "Composers refused to write for it.", "It was cheaper than the harpsichord."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        { kind: "choose-response", voice: "en-US-LunaNeural", line: "Where are you from?", options: ["I'm from Canada.", "I'm going home.", "From nine to five.", "It's very far."], answer: 0 },
        { kind: "choose-response", voice: "en-US-EricNeural", line: "Would you like to come to my party on Saturday?", options: ["It was a great party.", "I'd love to. What time?", "Saturday is the weekend.", "I like parties."], answer: 1 },
        { kind: "choose-response", voice: "en-US-AshleyNeural", line: "How much is this sweater?", options: ["It's blue.", "It's my size.", "It's thirty dollars.", "It's very warm."], answer: 2 },
        { kind: "choose-response", voice: "en-US-GuyNeural", line: "Is it going to rain today?", options: ["It rained last week.", "I like the rain.", "Rain is good for plants.", "The forecast says it will."], answer: 3 },
        { kind: "choose-response", voice: "en-US-CoraNeural", line: "Can I borrow your dictionary?", options: ["Sure, here it is.", "It's an English dictionary.", "I bought it yesterday.", "Words are important."], answer: 0 },
        { kind: "choose-response", voice: "en-US-RogerNeural", line: "Why are you late?", options: ["It's late.", "My bus broke down.", "I'm leaving now.", "At nine o'clock."], answer: 1 },
        {
          kind: "conversation",
          title: "Planning a party",
          cast: { A: "en-US-JaneNeural", B: "en-US-JasonNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between two students.", pause: 1 },
            { who: "A", text: "Let's have a party for Mia's birthday next Friday." },
            { who: "B", text: "Good idea. Should we have it at our apartment?" },
            { who: "A", text: "It's a bit small. What about the common room downstairs? It's free to use." },
            { who: "B", text: "Perfect. I'll make a cake, and you can send the invitations." },
          ],
          questions: [
            { text: "Why are the students planning a party?", options: ["for a graduation", "for Mia's birthday", "to welcome new students", "for the end of exams"], answer: 1 },
            { text: "Where will the party be?", options: ["in their apartment", "in a restaurant", "in the common room", "in a park"], answer: 2 },
          ],
        },
        {
          kind: "talk",
          title: "Why the sky is blue",
          cast: { A: "en-US-MonicaNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in a science class.", pause: 1 },
            { who: "A", text: "Have you ever wondered why the sky is blue? Sunlight contains all the colors of the rainbow. When sunlight enters the Earth's atmosphere, it hits tiny gas particles in the air." },
            { who: "A", text: "These particles scatter blue light much more than red or yellow light, because blue light travels in shorter waves. The blue light is spread across the whole sky, so when we look up, we see blue in every direction." },
            { who: "A", text: "At sunrise and sunset, sunlight has to travel through much more air to reach us. Most of the blue light is scattered away before it arrives, so we see more red and orange instead." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["why the sky is blue", "how rainbows form", "why the sun is hot", "how clouds form"], answer: 0 },
            { text: "Why is blue light scattered more than other colors?", options: ["It travels in shorter waves.", "It is brighter.", "It comes from the ocean.", "It is warmer."], answer: 0 },
            { text: "What do gas particles in the air do?", options: ["absorb all light", "scatter sunlight", "make clouds", "block the sun"], answer: 1 },
            { text: "Why do we see red and orange at sunset?", options: ["The sun changes color.", "Most of the blue light is scattered away.", "There are more clouds.", "The air is warmer."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        { kind: "choose-response", voice: "en-US-ChristopherNeural", line: "I was hoping to switch into the Tuesday section of the lab, if there's room.", options: ["Let me check, but I think it's already full.", "The lab is on Tuesday.", "There's a room on the third floor.", "I switched my phone off."], answer: 0 },
        { kind: "choose-response", voice: "en-US-AvaNeural", line: "Wouldn't it be better to interview a few experts before writing the survey?", options: ["The survey is online.", "That's a good idea. It could help us ask better questions.", "I interviewed for a job.", "Experts are very busy."], answer: 1 },
        { kind: "choose-response", voice: "en-US-SteffanNeural", line: "You don't happen to have a spare charger, do you?", options: ["My phone is new.", "I charge it every night.", "Sorry, I only brought one.", "Spare time is important."], answer: 2 },
        { kind: "choose-response", voice: "en-US-NancyNeural", line: "I thought the professor said the paper could be any length.", options: ["The paper is about history.", "The professor is very strict.", "I'm thinking about it.", "She did, but the syllabus says ten pages maximum."], answer: 3 },
        { kind: "choose-response", voice: "en-US-AndrewNeural", line: "Are you sure we should take the shortcut through the park at night?", options: ["Maybe you're right. Let's stay on the main road.", "The park is beautiful.", "I'm sure it's a short cut.", "We took it this morning."], answer: 0 },
        { kind: "choose-response", voice: "en-US-EmmaNeural", line: "It seems like the renovation of the science building is taking forever.", options: ["The science building is new.", "I know. They said it would be finished last spring.", "I love science.", "It takes about an hour."], answer: 1 },
        {
          kind: "conversation",
          title: "Financial aid",
          cast: { A: "en-US-TonyNeural", B: "en-US-AriaNeural" },
          script: [
            { who: "N", text: "Listen to a conversation between a student and an employee at the financial aid office.", pause: 1 },
            { who: "B", text: "Hi. I received a letter saying my financial aid for next year might be reduced, and I'm not sure why." },
            { who: "A", text: "Let me look at your file. It seems we're still missing your updated tax information. Without it, the system calculates your aid using last year's numbers, and since your family's situation has changed, that probably underestimates what you need." },
            { who: "B", text: "Oh. My father lost his job this year, so our income is much lower now." },
            { who: "A", text: "Then it's especially important to submit the updated documents. You can also fill out a special circumstances form explaining the change. Once we have both, we can review your aid, and in situations like yours, the amount often goes up rather than down." },
            { who: "B", text: "Is there a deadline?" },
            { who: "A", text: "The end of this month. The sooner the better, though, because reviews can take a few weeks." },
          ],
          questions: [
            { text: "Why might the student's financial aid be reduced?", options: ["Her grades have fallen.", "The office is missing her updated tax information.", "She has changed her major.", "She applied too late."], answer: 1 },
            { text: "What does the employee imply about the student's aid?", options: ["It will definitely be reduced.", "It may increase once her documents are reviewed.", "It cannot be changed.", "It depends on her grades."], answer: 1 },
          ],
        },
        {
          kind: "talk",
          title: "Desire paths",
          cast: { A: "en-US-DavisNeural" },
          script: [
            { who: "N", text: "Listen to part of a talk in an urban planning class.", pause: 1 },
            { who: "A", text: "If you look at almost any park or university campus, you'll see narrow trails of worn-down grass where people have cut across the lawn instead of following the paved paths. Planners call these desire paths, because they show where people actually want to walk." },
            { who: "A", text: "For a long time, the usual response was to fight them: put up fences or signs telling people to keep off the grass. But that rarely works. People tend to take the most direct route, and if the official path forces them to go out of their way, many will simply ignore it." },
            { who: "A", text: "So some planners have taken the opposite approach. When a new campus or park opens, they deliberately wait, sometimes for a whole year, before building permanent paths. They watch where desire paths form, and then pave those routes. The result is a layout that matches how people really move, and it's often cheaper, too, because there's less need to repair damaged grass. It's a nice example of designing with users rather than for them." },
          ],
          questions: [
            { text: "What is the talk mainly about?", options: ["how to grow grass in parks", "informal paths that show how people want to walk", "the history of university campuses", "how to build fences"], answer: 1 },
            { text: "According to the professor, why do fences and signs rarely work?", options: ["People prefer the most direct route.", "They are too expensive.", "They damage the grass.", "People cannot read the signs."], answer: 0 },
            { text: "What do some planners do before building permanent paths?", options: ["ask people to vote on routes", "wait and observe where desire paths form", "plant more trees", "close the park"], answer: 1 },
            { text: "What does the professor mean by \"designing with users rather than for them\"?", options: ["letting people's behavior shape the design", "asking users to pay for the design", "designing only for students", "ignoring what users want"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ivy", prompt: "Why did you change your major?", chunks: ["I realized", "that I", "enjoy", "working with", "numbers"], end: "." },
      { promptBy: "Max", prompt: "What should I bring to the picnic?", chunks: ["could you", "bring", "some fruit", "and", "a blanket"], end: "?" },
      { promptBy: "Lena", prompt: "How was the concert last night?", chunks: ["the band", "played", "for", "almost", "three hours"], end: "." },
      { promptBy: "Raj", prompt: "Is the campus gym open during the holidays?", chunks: ["it's open", "every day", "except", "on", "public holidays"], end: "." },
      { promptBy: "Clara", prompt: "I keep forgetting my assignments.", chunks: ["why don't", "you write", "them down", "in", "a planner"], end: "?" },
      { promptBy: "Hugo", prompt: "What did you do over spring break?", chunks: ["I visited", "my cousins", "who live", "near", "the coast"], end: "." },
      { promptBy: "Mei", prompt: "Which train should I take to the city?", chunks: ["the express", "train", "is", "much", "faster"], end: "." },
      { promptBy: "Jasper", prompt: "Why are you selling your car?", chunks: ["I don't", "need it", "since I", "moved", "downtown"], end: "." },
      { promptBy: "Dina", prompt: "Have you started your research paper?", chunks: ["I've found", "most of", "my sources", "but", "haven't started writing"], end: "." },
      { promptBy: "Kofi", prompt: "Where did you learn to speak French so well?", chunks: ["I lived", "in Montreal", "for", "two years", "as a child"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You have been meeting a private tutor every Wednesday to prepare for an important exam. This week, you need to attend a family event out of town on Wednesday.",
      to: "Mr. Alvarez (tutor)",
      subject: "This Wednesday's session",
      tasks: ["Explain why you cannot attend this week.", "Suggest another time to meet.", "Ask what you should study before your next session."],
      sample: "Dear Mr. Alvarez,\n\nI'm afraid I won't be able to attend our session this Wednesday. My grandmother is celebrating her eightieth birthday, and my whole family is traveling to her town for the weekend, so I'll be away from Wednesday morning until Friday.\n\nWould it be possible to meet on Monday or Tuesday evening instead? I'm free after six o'clock on both days, and I'd really like not to miss a week, since my exam is only a month away.\n\nAlso, could you let me know what I should work on before our next session? If you have any practice exercises, I could do them while I'm traveling.\n\nThank you for understanding.\n\nBest wishes,\nSofia",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Linguistics",
      professor: {
        name: "Dr. Nakamura",
        text: "In many countries, high school students are required to study a second language for several years. Supporters argue that learning another language improves career opportunities and helps students understand other cultures. Others believe that, with translation technology improving rapidly, schools should use this time for other subjects. Should high schools require students to learn a second language? Why or why not?",
      },
      students: [
        { name: "Elena", text: "Yes, absolutely. Learning Spanish in high school helped me make friends during a trip to Mexico, and it made me more curious about other cultures. A translation app could never give me that experience." },
        { name: "Jamal", text: "I'm not so sure. Most students forget the language soon after graduating because they never use it. That time might be better spent on subjects like computer science that are directly useful for careers." },
      ],
      sample: "I believe high schools should require a second language, although I understand Jamal's concern about students forgetting what they learn. Translation technology is certainly useful, but, as Elena suggests, it cannot replace the deeper understanding of another culture that comes from learning its language. Language study also develops general skills, such as memory and attention to detail, which help in other subjects. The real problem Jamal describes is that many language courses focus too much on grammar exercises and too little on real communication. If schools used more practical methods, such as conversation practice, online exchanges with students in other countries and short trips abroad, students would be more motivated and more likely to keep using the language after they graduate.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are starting work at the city's tourist information office. Your manager is explaining how things work.",
      sentences: [
        "Good morning, and welcome to the team.",
        "Maps of the city are on the shelf by the door.",
        "Visitors often ask how to get to the old harbor.",
        "The walking tour leaves from here at eleven every morning.",
        "Please remind visitors that the museums are closed on Mondays.",
        "If someone wants to book a hotel, you can make the reservation on the computer.",
        "On busy days in summer, we open an hour earlier, so the morning shift starts at eight o'clock.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's food and eating habits. The researcher will ask you some questions.",
      questions: [
        {
          text: "What does a typical day of meals look like for you?",
          sample: "On a typical weekday, I have a quick breakfast, usually yogurt with fruit and a cup of coffee. Lunch is often at the university cafeteria, where I choose a salad or a hot dish, depending on the menu. In the evening, I try to cook at home with my roommates, something simple like pasta or rice with vegetables. On weekends I have more time, so I sometimes cook a bigger meal or go out to eat with friends.",
        },
        {
          text: "Tell me about a meal that is special to you.",
          sample: "A meal that's very special to me is the dinner my family has on the first night of a holiday. My mother makes a large dish of stuffed vegetables, which takes her almost all afternoon, and we eat it with fresh bread and salad. What makes it special isn't only the food, but the fact that everyone is together around the table, talking and laughing for hours. Whenever I eat that dish now, it reminds me of home.",
        },
        {
          text: "Some people say that fast food should be more heavily taxed to encourage healthier eating. Do you agree? Why or why not?",
          sample: "I partly agree. A tax on very unhealthy foods might encourage people to make better choices, and the money could be used for health programs or to make fresh food cheaper. However, I worry that it would mostly affect people with low incomes, who often rely on fast food because it's cheap and quick. So I think a tax would only be fair if it came together with other measures, like reducing the price of fruit and vegetables and teaching cooking skills in schools.",
        },
        {
          text: "How do you think the way people eat will change in the future?",
          sample: "I think people will eat less meat in the future, partly for environmental reasons and partly because plant-based alternatives are getting better and cheaper. I also expect more people to order food through apps, since many are busy and cooking every day takes time. On the other hand, I hope there will be a growing interest in local, seasonal food, because more people are becoming aware of where their food comes from and how it affects their health.",
        },
      ],
    },
  },
};
