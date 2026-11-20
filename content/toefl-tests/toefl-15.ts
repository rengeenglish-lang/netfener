import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 15 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_15: ToeflTest = {
  id: "toefl-15",
  no: 15,
  title: "TOEFL iBT Practice Test 15",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Salt",
          text: "Salt has been valuable to people throughout hist{{ory}}. Before refrigerators existed, it was used to pres{{erve}} meat and fish for long jour{{neys}}. Roman soldiers were sometimes gi{{ven}} money to buy salt, and some peo{{ple}} believe the word salary comes from this pra{{ctice}}. In many regions, salt was produced by lea{{ving}} sea water in shallow pools until the wa{{ter}} evaporated. Cities that controlled salt tr{{ade}} often became very ri{{ch}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Concert tickets",
          text: [
            "Hey Jess! I managed to get two tickets for the jazz concert on Saturday. They were the last ones left!",
            "It starts at 8, so let's meet outside the theater at 7:30. You can pay me back for your ticket whenever it's convenient.",
          ],
          questions: [
            { text: "What did the writer get?", options: ["tickets for a film", "tickets for a jazz concert", "a new phone", "a table at a restaurant"], answer: 1 },
            { text: "Where does the writer suggest meeting?", options: ["at a café", "outside the theater", "at Jess's house", "at the bus stop"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Lost property policy",
          text: [
            "STUDENT CENTER: LOST PROPERTY",
            "Items found in the student center are kept at the information desk for thirty days. To collect an item, you must describe it and show your student ID.",
            "Phones, wallets and keys are kept in a locked cabinet and can only be collected between 9 a.m. and 5 p.m. Items not collected after thirty days will be donated to charity, except for documents, which will be sent to the registrar's office.",
          ],
          questions: [
            { text: "How long are found items kept?", options: ["seven days", "fourteen days", "thirty days", "one semester"], answer: 2 },
            { text: "What must students do to collect an item?", options: ["pay a small fee", "describe it and show their student ID", "fill out an online form", "bring a witness"], answer: 1 },
            { text: "What happens to documents that are not collected?", options: ["They are donated to charity.", "They are thrown away.", "They are sent to the registrar's office.", "They are kept for one year."], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "Why rivers meander",
          paragraphs: [
            "Few rivers flow in straight lines. On flat land especially, rivers tend to form a series of curves, called meanders, that wind back and forth across the valley. This pattern develops because water does not flow evenly through a channel. Even a small bend causes water on the outside of the curve to move faster than water on the inside.",
            "The faster water on the outside of a bend has more energy, so it erodes the riverbank, gradually cutting into it. At the same time, slower water on the inside of the bend drops some of the sand and gravel it is carrying, building up a gently sloping bank. Over many years, this combination of erosion and deposition makes the curve more and more pronounced, and the meander slowly migrates across the valley.",
            "Eventually, two bends may come so close together that the river cuts through the narrow strip of land between them, usually during a flood. The river then takes the shorter route, and the abandoned loop is cut off from the main channel. Because it is shaped like a horseshoe, the isolated body of water left behind is called an oxbow lake. Over time, oxbow lakes fill with sediment and plants and may turn into wetlands.",
          ],
          questions: [
            { text: "According to paragraph 1, why do meanders form?", options: ["Water flows evenly through the channel.", "Water on the outside of a bend moves faster than on the inside.", "Rivers always follow ancient roads.", "Wind pushes the water sideways."], answer: 1 },
            { text: "The word \"pronounced\" in paragraph 2 is closest in meaning to", options: ["noticeable", "shallow", "spoken", "temporary"], answer: 0 },
            { text: "According to paragraph 2, what happens on the inside of a bend?", options: ["The bank is eroded quickly.", "Sand and gravel are deposited.", "The water flows fastest.", "The river becomes deeper."], answer: 1 },
            { text: "When does a river usually cut through the land between two bends?", options: ["during a drought", "during a flood", "in winter", "at night"], answer: 1 },
            { text: "What is an oxbow lake?", options: ["a lake formed by a dam", "a loop of river cut off from the main channel", "the source of a river", "a lake used for farming"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Moving to a new city",
          text: "Last year, my family moved to a new city because of my father's j{{ob}}. At first, I was sad to le{{ave}} my old friends. The new school was much big{{ger}}, and I did not know any{{one}}. However, my classmates were very frie{{ndly}}. One girl invited me to join the scho{{ol}} choir. Now I have many new frie{{nds}}, and I like my new ci{{ty}}. I still call my old friends every we{{ek}}, and I vis{{it}} them in summer.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Weekend market",
          text: [
            "CAMPUS WEEKEND MARKET",
            "Every Saturday from 9 a.m. to 1 p.m. on the main lawn. Buy fresh fruit, vegetables, bread and handmade crafts from local sellers.",
            "Students get a 10% discount at most stalls by showing their ID. If it rains, the market moves inside the sports hall.",
          ],
          questions: [
            { text: "When is the market open?", options: ["every Saturday morning", "every Sunday afternoon", "every weekday", "once a month"], answer: 0 },
            { text: "How can students get a discount?", options: ["by arriving early", "by showing their ID", "by paying in cash", "by buying online"], answer: 1 },
            { text: "What happens if it rains?", options: ["The market is cancelled.", "The market moves into the sports hall.", "The market starts later.", "The market moves to Sunday."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why owls turn their heads",
          paragraphs: [
            "Owls are famous for being able to turn their heads a very long way. Some owls can turn their heads about 270 degrees, which means they can almost look behind themselves.",
            "Owls need to turn their heads because their eyes cannot move in their sockets like human eyes. Their eyes are very large and shaped like tubes, which helps them see well at night.",
            "Turning the head so far could be dangerous, because it might stop blood from reaching the brain. However, owls have special blood vessels and extra space in their neck bones that protect the flow of blood.",
          ],
          questions: [
            { text: "How far can some owls turn their heads?", options: ["about 90 degrees", "about 180 degrees", "about 270 degrees", "a full circle"], answer: 2 },
            { text: "Why do owls need to turn their heads?", options: ["Their eyes cannot move in their sockets.", "They cannot hear well.", "Their necks are very short.", "They are looking for water."], answer: 0 },
            { text: "What helps owls see well at night?", options: ["their small eyes", "their large, tube-shaped eyes", "their feathers", "their beaks"], answer: 1 },
            { text: "The word \"protect\" in paragraph 3 is closest in meaning to", options: ["block", "keep safe", "increase", "reduce"], answer: 1 },
            { text: "Why does turning the head not harm owls?", options: ["They have special blood vessels and extra space in their neck bones.", "They only turn their heads slowly.", "They have no blood vessels in their necks.", "They close their eyes while turning."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The bystander effect",
          text: "In the 1960s, social psychologists began investigating why people sometimes fail to help strangers in an emerg{{ency}}. In a series of experiments, participants who belie{{ved}} they were the only witness to a problem were far more lik{{ely}} to respond than those who thought others were pres{{ent}}. The researchers suggested that responsi{{bility}} is spread among everyone present, so each person feels less obli{{gated}} to act. More recent studies of real incid{{ents}} recorded by security cam{{eras}}, however, suggest that in most public conflicts at le{{ast}} one bystander does inter{{vene}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Study abroad information session",
          text: [
            "To: All second-year students",
            "From: Office of International Programs",
            "Subject: Study abroad next year – information session",
            "Students interested in spending a semester or a full year at one of our partner universities are invited to an information session on October 8 at 4 p.m. in the Main Auditorium. Staff will explain the application process, available destinations and scholarships, and former exchange students will share their experiences.",
            "Please note that students must have a grade point average of at least 3.0 to apply, and some destinations require proof of language proficiency. Applications for the following academic year are due on December 1. Students who cannot attend the session may watch a recording on the office's website.",
          ],
          questions: [
            { text: "Who will speak at the information session besides staff?", options: ["professors from partner universities", "former exchange students", "embassy officials", "parents"], answer: 1 },
            { text: "What is required of all applicants?", options: ["a grade point average of at least 3.0", "proof of language proficiency", "a scholarship", "attendance at the session"], answer: 0 },
            { text: "What can students do if they miss the session?", options: ["attend a second session in November", "watch a recording online", "request a private meeting", "apply next year only"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The Green Revolution",
          paragraphs: [
            "In the middle of the twentieth century, many experts feared that the world's rapidly growing population would soon face widespread famine, especially in Asia. Over the following decades, however, food production rose dramatically, a transformation that came to be known as the Green Revolution. Its central element was the development of new high-yielding varieties of wheat and rice. The American scientist Norman Borlaug, working in Mexico, bred wheat with short, sturdy stems that could support heavy heads of grain without falling over, and similar rice varieties were developed in the Philippines.",
            "These new varieties produced much larger harvests, but only under certain conditions. They required large amounts of chemical fertilizer, reliable irrigation and pesticides. In countries such as India and Pakistan, governments supported farmers with subsidies, credit and expanded irrigation systems, and wheat production more than doubled within a few years in the late 1960s. Borlaug was awarded the Nobel Peace Prize in 1970 for his contribution to reducing hunger.",
            "The Green Revolution's legacy remains debated. Its supporters argue that it saved hundreds of millions of people from starvation and reduced the need to convert forests into farmland. Critics point out that its benefits were unevenly distributed, since wealthier farmers could more easily afford the necessary inputs, and that heavy use of fertilizers, pesticides and groundwater has damaged soils and depleted water supplies in some regions. Many researchers now argue that future increases in food production will need to rely on methods that use water and chemicals more efficiently.",
          ],
          questions: [
            { text: "According to paragraph 1, what was special about Borlaug's wheat?", options: ["It grew without water.", "It had short, sturdy stems that supported heavy grain.", "It was resistant to all insects.", "It grew only in Mexico."], answer: 1 },
            { text: "The word \"depleted\" in paragraph 3 is closest in meaning to", options: ["polluted", "reduced", "measured", "protected"], answer: 1 },
            { text: "According to paragraph 2, what did the new varieties require?", options: ["less water than older varieties", "fertilizer, irrigation and pesticides", "very little labor", "colder temperatures"], answer: 1 },
            { text: "Why does the author mention wealthier farmers in paragraph 3?", options: ["to show that benefits were unevenly distributed", "to explain why harvests decreased", "to describe Borlaug's background", "to argue that fertilizers are cheap"], answer: 0 },
            { text: "What do many researchers now argue about future food production?", options: ["It should abandon modern varieties.", "It should use water and chemicals more efficiently.", "It should rely only on traditional farming.", "It no longer needs to increase."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Elena", prompt: "Why are you late for class?", chunks: ["my alarm", "didn't", "go off", "this", "morning"], end: "." },
      { promptBy: "Serkan", prompt: "Have you booked your flight home?", chunks: ["I", "booked it", "last night", "when", "prices dropped"], end: "." },
      { promptBy: "Anna", prompt: "I'm always tired in the afternoon.", chunks: ["have you", "tried", "going", "for a short walk", "after lunch"], end: "?" },
      { promptBy: "Tom", prompt: "What did you think of the movie?", chunks: ["the story", "was", "interesting", "but", "the ending was disappointing"], end: "." },
      { promptBy: "Gül", prompt: "How long have you lived in this city?", chunks: ["I", "have lived", "here", "for", "almost five years"], end: "." },
      { promptBy: "Leo", prompt: "Why is the museum closed today?", chunks: ["they", "are", "preparing", "a new exhibition", "for next week"], end: "." },
      { promptBy: "Nadia", prompt: "Who is giving the guest lecture?", chunks: ["a famous", "scientist", "from", "a university", "in Canada"], end: "." },
      { promptBy: "Oscar", prompt: "Did you finish the reading for today?", chunks: ["I", "read", "the first two chapters", "but not", "the article"], end: "." },
      { promptBy: "Pınar", prompt: "My phone battery dies so quickly.", chunks: ["why don't", "you", "turn off", "the apps", "you don't use"], end: "?" },
      { promptBy: "Daniel", prompt: "Where should we have lunch?", chunks: ["let's", "try", "the new restaurant", "near", "the library"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your professor has assigned a group project, but one member of your group has not attended any meetings or done any work, and the deadline is approaching.",
      to: "your professor",
      subject: "Problem with my project group",
      tasks: ["Explain the situation in your group.", "Describe what your group has already done to solve the problem.", "Ask for the professor's advice on what to do next."],
      sample: "Dear Professor Clark,\n\nI am writing about our group project for Marketing 220, which is due on November 18. There are four students in our group, and three of us have been meeting twice a week since the project was assigned. Unfortunately, the fourth member has not attended any of our meetings and has not completed the section of the report that we agreed he would write.\n\nWe have tried several times to solve the problem ourselves. We sent him messages and emails explaining our schedule and the tasks, and we offered to meet at a time that suited him. He replied once, saying that he was busy, but he has not contacted us since. Because of the deadline, the three of us have started dividing his section among ourselves.\n\nCould you please advise us on what we should do? We would like to know whether we should continue without him and how his contribution will be evaluated.\n\nThank you for your time.\n\nKind regards,\nSelin Aydın",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Science",
      professor: {
        name: "Dr. Kim",
        text: "Air travel is one of the fastest-growing sources of greenhouse gas emissions. Some people believe that governments should discourage flying, for example by taxing frequent flyers or banning short flights when a train journey is available. Others say that flying is essential for business, tourism and family life. Should governments take action to reduce air travel? Why or why not?",
      },
      students: [
        { name: "Lucy", text: "Yes. If we are serious about climate change, we can't ignore flying. Banning short flights where good train connections exist is a simple step that wouldn't cause many problems." },
        { name: "Mehmet", text: "I'm not convinced. For many people, flying is the only practical way to visit family abroad. Higher taxes would mean that only rich people could afford to travel." },
      ],
      sample: "I believe governments should act to reduce air travel, but the measures need to be fair. I agree with Lucy that banning short flights where fast trains exist is sensible. In my country, the train between the two largest cities now takes about the same time as flying once you include airport security, so short flights produce emissions with very little benefit. However, Mehmet makes a strong point about fairness. A simple tax on all tickets would hit families and students hardest. A better approach would be a tax that rises with the number of flights a person takes each year, so that occasional travelers pay little while very frequent flyers pay more. Governments could use the money to improve rail networks, giving people a real alternative instead of simply making travel more expensive.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-JennyNeural",
    repeat: {
      scene: "You are working at the front desk of a hotel. The manager is telling you what to say to guests when they arrive.",
      sentences: [
        "Welcome to our hotel.",
        "Breakfast is served on the ground floor.",
        "Your room is on the fifth floor.",
        "The swimming pool and fitness room are open until ten.",
        "Please let us know if you need anything during your stay.",
        "Free wireless internet is available throughout the hotel, and the password is on your room key card.",
        "If you would like a taxi to the airport tomorrow morning, please tell us before nine o'clock this evening.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of learning and education. The researcher will ask you some questions.",
      questions: [
        {
          text: "Who was your favorite teacher at school, and why?",
          sample: "My favorite teacher was my high school chemistry teacher, Mr. Arslan. Before his class, I thought chemistry was just about memorizing formulas, but he made it exciting with simple experiments and real-life examples, like explaining why bread rises or why metal rusts. He was also very patient and always stayed after class to answer questions. Because of him, I became much more confident in science, and it's one reason I chose to study engineering.",
        },
        {
          text: "Do you prefer studying alone or in a group? Why?",
          sample: "I usually prefer studying alone, especially when I need to read or memorize information, because I can concentrate better and go at my own pace. In a group, conversations often drift away from the topic. That said, group study is really useful before exams, when we can test each other and explain difficult ideas. Explaining something to a friend is one of the best ways to check whether I really understand it myself.",
        },
        {
          text: "Some people believe that online courses are as effective as traditional classes. Do you agree?",
          sample: "I think online courses can be effective, but they're not the same as traditional classes for everyone. They're flexible and allow people to learn from experts anywhere in the world, which is great for working adults. However, they require a lot of self-discipline, and it's easy to fall behind without a fixed schedule. You also miss the spontaneous discussions that happen in a classroom. So I'd say they're equally effective only for students who are highly motivated.",
        },
        {
          text: "What skills do you think schools should teach that they do not teach now?",
          sample: "I think schools should teach more practical life skills, especially personal finance. Many young people leave school without knowing how to make a budget, understand a loan or save for the future, and they learn these things through expensive mistakes. I'd also like schools to teach more about mental health and managing stress, since students face a lot of pressure. Finally, skills like public speaking and teamwork would help students in almost any career they choose.",
        },
      ],
    },
  },
};
