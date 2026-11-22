import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 50 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_50: ToeflTest = {
  id: "toefl-50",
  no: 50,
  title: "TOEFL iBT Practice Test 50",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Mailboxes",
          text: "Before mailboxes became common, people who wanted to send a letter usually had to take it to a post off{{ice}}. In the nineteenth century, as more people learned to read and wr{{ite}}, the number of letters grew quickly. To make sending mail easi{{er}}, many countries began to place mailboxes on str{{eets}}. In Britain, the first roadside pillar boxes were installed in the 1850s, and they were later painted bright r{{ed}} so that people could find them eas{{ily}}. Postal workers collected the letters several times a d{{ay}}. Although people now send far fewer letters because of em{{ail}}, mailboxes are still used for postcards, documents and small pack{{ages}} in many coun{{tries}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Picking up a few things",
          text: [
            "Hi Ozan, are you passing the supermarket on your way home? We're out of milk and eggs, and I need them for the cake I'm baking for Grandma tomorrow.",
            "If you can get them, I'll pay you back tonight. Also, if they have fresh strawberries, please buy a box!",
          ],
          questions: [
            { text: "Why does the writer need milk and eggs?", options: ["to bake a cake for Grandma", "for breakfast", "for a dinner party", "to make pancakes for a friend"], answer: 0 },
            { text: "What else does the writer ask Ozan to buy if possible?", options: ["fresh strawberries", "flour", "chocolate", "bread"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Window cleaning schedule",
          text: [
            "WINDOW CLEANING – ALL RESIDENTS",
            "Professional cleaners will clean the outside windows of all apartments next Tuesday and Wednesday between 8 a.m. and 5 p.m. Cleaners will work from ropes and platforms on the outside of the building.",
            "Please keep your windows closed and remove any plants or objects from your window ledges and balconies before Tuesday morning. For your privacy, you may wish to close your curtains during these hours.",
          ],
          questions: [
            { text: "What will happen next Tuesday and Wednesday?", options: ["The outside windows will be cleaned.", "New windows will be installed.", "The building will be painted.", "The balconies will be repaired."], answer: 0 },
            { text: "What are residents asked to do?", options: ["keep windows closed and clear their ledges and balconies", "leave their windows open", "stay outside all day", "clean their own windows"], answer: 0 },
            { text: "Why might residents close their curtains?", options: ["for privacy", "to keep the apartment warm", "to protect furniture from dust", "because it is required"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The domestication of cats",
          paragraphs: [
            "Cats are among the most popular pets in the world, yet their relationship with humans developed very differently from that of dogs. Dogs were domesticated from wolves tens of thousands of years ago, probably as hunting partners or guards. Cats, by contrast, seem to have largely domesticated themselves, and the process began much later, around ten thousand years ago.",
            "The origins of this relationship are linked to the beginning of farming. When people in the Near East began to grow and store grain, their stores attracted mice and rats. Wild cats, which hunt small rodents, were drawn to these settlements by the abundant prey. Cats that were less afraid of people could take advantage of this new food supply, and farmers had good reason to tolerate them, since they protected the grain. Over many generations, these cats became increasingly comfortable living near humans.",
            "Genetic studies show that all domestic cats descend from a wild cat species of the Near East and North Africa. Unlike many domesticated animals, however, domestic cats are genetically very similar to their wild relatives, and their appearance changed relatively little until humans began breeding cats for particular colors and features in the past few centuries. Cats spread around the world partly by traveling on ships, where they were valued for controlling rodents. In ancient Egypt, cats became especially admired, and some were even mummified and buried with their owners.",
          ],
          questions: [
            { text: "According to paragraph 1, how did the domestication of cats differ from that of dogs?", options: ["Cats seem to have largely domesticated themselves and much later.", "Cats were domesticated earlier than dogs.", "Cats were used as guards.", "Cats were domesticated from wolves."], answer: 0 },
            { text: "According to paragraph 2, what drew wild cats to early human settlements?", options: ["mice and rats attracted by stored grain", "food given by farmers", "warm houses", "water supplies"], answer: 0 },
            { text: "The word \"tolerate\" in paragraph 2 is closest in meaning to", options: ["allow without complaint", "hunt", "sell", "train"], answer: 0 },
            { text: "According to paragraph 3, what is unusual about domestic cats genetically?", options: ["They are very similar to their wild relatives.", "They are completely different from wild cats.", "They descend from many species.", "They are related to dogs."], answer: 0 },
            { text: "Why were cats valued on ships?", options: ["They controlled rodents.", "They helped sailors navigate.", "They warned of storms.", "They were used as food."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Stories from my grandpa",
          text: "My grandpa is eighty years old, and he loves telling sto{{ries}}. When I visit him on Sundays, we sit together in his gar{{den}}. He tells me about his life when he was yo{{ung}}. He grew up in a small vil{{lage}} without electricity. Every day, he walked five kilometers to sch{{ool}}. In summer, he helped his parents on their fa{{rm}}. My favorite story is about the day he met my grand{{mother}} at a wedding. They danced all ni{{ght}}! I write his stories in a spe{{cial}} notebook so I can remember them for ev{{er}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Charity fun run",
          text: [
            "RUN FOR A GOOD CAUSE!",
            "Join our five-kilometer charity fun run in Central Park on Sunday, May 18, at 9 a.m. Runners and walkers of all ages are welcome.",
            "Registration costs $10 for adults and is free for children under 12. Every participant receives a T-shirt and a medal. All money raised will help buy books for local schools.",
          ],
          questions: [
            { text: "How long is the fun run?", options: ["five kilometers", "ten kilometers", "one kilometer", "a full marathon"], answer: 0 },
            { text: "How much does registration cost for children under 12?", options: ["nothing", "$5", "$10", "$12"], answer: 0 },
            { text: "What will the money be used for?", options: ["buying books for local schools", "building a new park", "paying the runners", "a hospital"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How turtles survive the winter",
          paragraphs: [
            "Many freshwater turtles live in ponds and lakes that freeze in winter. Turtles cannot make their own body heat, so cold weather is very difficult for them.",
            "In autumn, these turtles swim to the bottom of the pond. They rest in the mud, where the water does not freeze. Their bodies slow down a lot, and their hearts beat only a few times a minute.",
            "Turtles cannot come up for air under the ice. Some kinds can take in a little oxygen through their skin from the water around them. In spring, when the ice melts, they swim up to the sun to warm up again.",
          ],
          questions: [
            { text: "Why is cold weather difficult for turtles?", options: ["They cannot make their own body heat.", "They cannot swim in cold water.", "They lose their shells.", "They have no food in ponds."], answer: 0 },
            { text: "Where do turtles rest in winter?", options: ["in the mud at the bottom of the pond", "on the ice", "in trees", "in people's houses"], answer: 0 },
            { text: "The phrase \"slow down\" in paragraph 2 is closest in meaning to", options: ["become less active", "grow bigger", "move faster", "wake up"], answer: 0 },
            { text: "How can some turtles get oxygen under the ice?", options: ["through their skin from the water", "by making holes in the ice", "by swimming to the sea", "by eating plants"], answer: 0 },
            { text: "What do turtles do in spring?", options: ["swim up to the sun to warm up", "dig deeper into the mud", "move to the ocean", "build nests in the ice"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Cognitive load",
          text: "Working memory, the part of the mind that holds information while we use it, has a very limited capa{{city}}. Educational psychologists use the term cognitive load to describe the amount of mental eff{{ort}} required to process new information. When a lesson presents too much information at on{{ce}}, students can become overwhelmed and learn very lit{{tle}}. Research suggests that teachers can reduce unnecessary load by breaking complex topics into smaller st{{eps}}, removing irrelevant deta{{ils}} and placing related text and pictures close toge{{ther}}. Worked examples, which show the solution to a problem step by step, can also help begin{{ners}}. As learners gain experience, however, such support becomes less nece{{ssary}} and may even be unhel{{pful}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Lab report formatting",
          text: [
            "To: Students in Physics 201",
            "From: Physics Laboratory Coordinator",
            "Subject: Formatting requirements for lab reports",
            "All lab reports for Physics 201 must follow the template posted on the course website. Each report should include an abstract, a methods section, a results section with properly labeled graphs and tables, and a discussion of possible sources of error. Reports should not exceed six pages, excluding the appendix.",
            "Reports must be submitted as a single PDF file by 11:59 p.m. one week after the lab session. Late reports will lose ten percent of the available marks per day, up to a maximum of three days, after which they will receive no marks. Raw data sheets signed by your lab instructor must be attached in the appendix.",
          ],
          questions: [
            { text: "Which section must lab reports include?", options: ["a discussion of possible sources of error", "a personal reflection", "a list of references only", "a summary of the textbook"], answer: 0 },
            { text: "What happens to reports submitted more than three days late?", options: ["They receive no marks.", "They lose ten percent.", "They are accepted without penalty.", "They are returned for revision."], answer: 0 },
            { text: "What must be attached in the appendix?", options: ["raw data sheets signed by the lab instructor", "photographs of the lab", "the student's notes", "a copy of the template"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why sleep loss harms performance",
          paragraphs: [
            "Most adults need between seven and nine hours of sleep per night, yet surveys in many countries suggest that a large proportion of people regularly sleep less than this. Long working hours, shift work, screen use late at night and stress all contribute to what some researchers describe as a widespread 'sleep debt'. While occasional short nights may seem harmless, research shows that the effects of insufficient sleep on the brain and body can be significant.",
            "One of the clearest effects of sleep loss is on attention. In laboratory studies, participants who are kept awake for long periods, or who sleep only a few hours a night for several days, show slower reaction times and more frequent lapses of attention, moments when they fail to respond at all. Remarkably, people who are chronically short of sleep often underestimate how impaired they are, believing that they have adapted to less sleep even as their performance continues to decline. This is particularly dangerous for activities such as driving, where a brief lapse can have serious consequences.",
            "Sleep is also essential for learning and memory. During sleep, the brain appears to strengthen and reorganize memories formed during the day, and students who sleep after studying often remember material better than those who stay awake. Lack of sleep can also affect mood and decision-making, making people more irritable and more likely to take risks. Over the long term, chronic sleep loss has been linked to a higher risk of health problems such as obesity, diabetes and heart disease. For these reasons, many health experts argue that sleep should be treated as seriously as diet and exercise.",
          ],
          questions: [
            { text: "According to paragraph 1, what contributes to widespread sleep debt?", options: ["long working hours, shift work, late screen use and stress", "too much exercise", "eating breakfast", "warm weather"], answer: 0 },
            { text: "The word \"lapses\" in paragraph 2 is closest in meaning to", options: ["brief failures", "improvements", "dreams", "movements"], answer: 0 },
            { text: "According to paragraph 2, what is surprising about people who are chronically short of sleep?", options: ["They often underestimate how impaired they are.", "They perform better over time.", "They never feel tired.", "They react faster than others."], answer: 0 },
            { text: "According to paragraph 3, what happens to memories during sleep?", options: ["The brain strengthens and reorganizes them.", "They are deleted.", "They are replaced by dreams.", "Nothing happens to them."], answer: 0 },
            { text: "What do many health experts argue?", options: ["Sleep should be treated as seriously as diet and exercise.", "Sleep is less important than exercise.", "Adults need only five hours of sleep.", "Sleep has no effect on health."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Yusuf", prompt: "Why are you taking so many photos?", chunks: ["I", "want to", "show them", "to my family", "back home"], end: "." },
      { promptBy: "Emma", prompt: "Did you enjoy the jazz concert?", chunks: ["the pianist", "was", "the best", "musician", "I've ever heard"], end: "." },
      { promptBy: "Gizem", prompt: "My room is always so messy.", chunks: ["why don't", "you", "spend", "ten minutes", "tidying every day"], end: "?" },
      { promptBy: "Harry", prompt: "How did you get tickets for the final?", chunks: ["my uncle", "works", "for", "the football", "club"], end: "." },
      { promptBy: "Nihan", prompt: "Where is the meeting being held?", chunks: ["it", "will be", "in", "the conference room", "on the fifth floor"], end: "." },
      { promptBy: "Jake", prompt: "Why is the library so crowded?", chunks: ["final", "exams", "start", "next", "week"], end: "." },
      { promptBy: "Sude", prompt: "What did you have for dinner?", chunks: ["we", "made", "a vegetable", "curry", "with rice"], end: "." },
      { promptBy: "Liam", prompt: "When does your internship start?", chunks: ["it", "starts", "on", "the first", "of July"], end: "." },
      { promptBy: "Beril", prompt: "I've lost my umbrella again.", chunks: ["do you", "want", "to borrow", "my", "spare one"], end: "?" },
      { promptBy: "Noah", prompt: "Why did you choose to study abroad?", chunks: ["I", "wanted to", "experience", "a different", "culture"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your city has announced plans to turn a small park near your home into a parking lot. You use the park regularly and want to write to the city council.",
      to: "the city council",
      subject: "Plans for Linden Park",
      tasks: ["Explain how you and others use the park.", "Describe why you are concerned about the plan.", "Suggest an alternative."],
      sample: "Dear Members of the City Council,\n\nI am writing as a resident of Maple Street to express my concern about the plan to turn Linden Park into a parking lot. I walk through the park every morning on my way to the station, and on weekends I often read there or play basketball with friends. The park is also used every day by parents with young children, elderly residents and dog owners from the surrounding streets.\n\nI am worried that losing the park would have a serious effect on our neighborhood. It is the only green space within walking distance, and there are very few places where children can play safely outdoors. In addition, the large trees help keep the area cool in summer and reduce noise from the main road. A parking lot would bring more traffic and pollution to a quiet residential area.\n\nI understand that parking is a problem near the shopping center. Instead of removing the park, could the council consider building a multi-story car park on the empty land behind the shopping center, or improving bus connections? I hope you will reconsider this decision.\n\nYours faithfully,\nHilal Karaca",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Kim",
        text: "In many families, grandparents play an important role in raising children, especially when both parents work. Some people believe this is the best form of childcare, since grandparents know and love the children. Others think professional childcare centers are better because they offer trained staff and opportunities to socialize with other children. Which do you think is better for young children: care by grandparents or professional childcare? Explain your view.",
      },
      students: [
        { name: "Mia", text: "Grandparents, definitely. Children feel safe and loved with family, and grandparents can pass on traditions and stories that professionals cannot." },
        { name: "Oğulcan", text: "I think childcare centers are better. Children learn to share and play with others their age, and staff are trained in early childhood education." },
      ],
      sample: "I believe the best arrangement for young children is often a combination of both, but if I had to choose, I would favor grandparents for children under three and professional childcare for older preschoolers. Mia is right that very young children benefit greatly from close, loving relationships, and grandparents can give them individual attention and a strong sense of security, as well as family traditions. However, Oğulcan makes a good point about socialization. As children grow older, spending time with other children in a structured environment helps them develop important skills, such as sharing, cooperating and following routines, which prepare them for school. Trained staff can also identify developmental needs early. Families who can combine both forms of care may give their children the advantages of each.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new staff member at a train station information desk. Your manager is telling you what to say to travelers.",
      sentences: [
        "Good afternoon, how can I help you?",
        "Tickets can be bought from these machines.",
        "The train to the airport leaves from platform three.",
        "Please keep your luggage with you at all times.",
        "Trains to the city center run every fifteen minutes.",
        "If your train is delayed by more than an hour, you can apply for a partial refund online.",
        "The last train to the coast leaves at eleven thirty, so if you miss it, you will need to take the night bus, which stops outside the main entrance.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about art and culture. The researcher will ask you some questions.",
      questions: [
        {
          text: "What kind of art or cultural activity do you enjoy most?",
          sample: "I enjoy live music the most, especially small concerts in cafés or outdoor festivals. There's something special about hearing musicians play in person and feeling the energy of the audience. I also like visiting photography exhibitions, because photos can tell powerful stories about people and places. Whenever I travel to a new city, I try to find a local concert or gallery to understand the culture better.",
        },
        {
          text: "Do you think art should be taught in schools as much as subjects like math and science?",
          sample: "I think art should definitely be taught in schools, although perhaps not for the same number of hours as math or science. Art helps students develop creativity, express their feelings and see the world in new ways. These skills are useful in many careers, even in science and engineering, where creative thinking leads to new ideas. Art classes can also help students who struggle in traditional subjects feel successful and confident.",
        },
        {
          text: "Should museums and galleries be free to visit?",
          sample: "I believe museums and galleries should be free, or at least free for students and on certain days. Culture is part of our shared heritage, and everyone should have access to it, regardless of income. When museums are free, more families and young people visit, and they may develop a lifelong interest in history or art. However, museums need money to operate, so governments would have to support them through public funding or donations.",
        },
        {
          text: "How has technology changed the way people experience art and culture?",
          sample: "Technology has changed it a lot. Today, people can listen to almost any song instantly, take virtual tours of famous museums and watch theater performances online. This makes culture much more accessible, especially for people in small towns. Artists can also share their work on social media and reach a global audience without a gallery or record company. On the other hand, some people argue that experiencing art through a screen is less powerful than seeing it in person.",
        },
      ],
    },
  },
};
