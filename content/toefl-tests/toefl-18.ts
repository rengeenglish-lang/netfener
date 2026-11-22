import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 18 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_18: ToeflTest = {
  id: "toefl-18",
  no: 18,
  title: "TOEFL iBT Practice Test 18",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "The first newspapers",
          text: "Before newspapers existed, news traveled slowly by word of mou{{th}} or by letter. In ancient Rome, officials wrote daily repo{{rts}} on large boards and placed them in public squ{{ares}}. The first printed newspapers appe{{ared}} in Germany in the early seventeenth cent{{ury}}. They were small, often only four pa{{ges}}, and contained news about wars, trade and politi{{cal}} events. As printing became cheap{{er}} and more people learned to re{{ad}}, newspapers became an important sou{{rce}} of information.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Group dinner",
          text: [
            "Hi all! For Friday's group dinner, I've booked a table for eight at Olive Garden Bistro at 7:30.",
            "They need a $10 deposit per person by Wednesday, so please send it to me before then. Let me know if you have any food allergies!",
          ],
          questions: [
            { text: "What has the writer booked?", options: ["a table for eight", "a private room", "a cooking class", "a table for four"], answer: 0 },
            { text: "What must people do by Wednesday?", options: ["choose their meals", "pay a $10 deposit", "confirm the time", "invite more friends"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Computer lab rules",
          text: [
            "COMPUTER LAB – PLEASE READ",
            "Food and drinks are not allowed near the computers. Water bottles with lids may be kept on the floor.",
            "Computers automatically log users out after 20 minutes without activity, and unsaved work will be lost. Please save your files to your university cloud account, not to the desktop, since all files on the computers are deleted every night.",
          ],
          questions: [
            { text: "What is allowed in the lab?", options: ["snacks at the desks", "water bottles with lids on the floor", "hot drinks", "food in sealed boxes"], answer: 1 },
            { text: "What happens after 20 minutes without activity?", options: ["The computer shuts down.", "Users are logged out.", "Files are saved automatically.", "An alarm sounds."], answer: 1 },
            { text: "Why should students save files to the cloud?", options: ["The desktop is too small.", "Files on the computers are deleted every night.", "Cloud storage is faster.", "The lab printer only uses the cloud."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why some animals hibernate and others migrate",
          paragraphs: [
            "Winter presents animals in cold regions with a serious challenge: temperatures fall, food becomes scarce, and keeping the body warm requires a great deal of energy. Animals have developed two broad strategies to cope. Some leave, traveling to warmer places where food remains available. Others stay but reduce their energy needs dramatically by entering a state of deep inactivity.",
            "Migration is common among animals that can travel long distances efficiently, especially birds. Flying allows them to cover thousands of kilometers relatively quickly, so the energy cost of the journey is outweighed by the benefits of spending winter in a region with plentiful food. For small mammals such as ground squirrels and hedgehogs, by contrast, traveling such distances would be impossible. Many of these animals hibernate instead, lowering their body temperature, heart rate and breathing to a fraction of normal levels and surviving on fat stored during the summer.",
            "Some animals use intermediate strategies. Bears, for example, enter a long winter sleep in which their body temperature falls only a few degrees, allowing them to wake relatively quickly if disturbed. Some bats migrate short distances to suitable caves and then hibernate there. These variations suggest that the choice between migrating and staying depends on a balance of factors, including an animal's size, its ability to travel and the kind of food it eats.",
          ],
          questions: [
            { text: "According to paragraph 1, what challenge does winter present?", options: ["too much food", "cold temperatures and scarce food", "long days", "heavy rain"], answer: 1 },
            { text: "The word \"outweighed\" in paragraph 2 is closest in meaning to", options: ["exceeded", "measured", "doubled", "ignored"], answer: 0 },
            { text: "According to paragraph 2, why do many small mammals hibernate rather than migrate?", options: ["They prefer cold weather.", "They cannot travel such long distances.", "They have no stored fat.", "They migrate at night."], answer: 1 },
            { text: "How does the winter sleep of bears differ from typical hibernation?", options: ["Their body temperature falls only slightly.", "They do not sleep at all.", "They migrate first.", "They eat throughout the winter."], answer: 0 },
            { text: "What is the main idea of paragraph 3?", options: ["All animals hibernate.", "Some animals combine or modify the two strategies.", "Bats are the only animals that migrate.", "Hibernation is dangerous."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My grandmother's garden",
          text: "My grandmother lives in a small village, and she has a beautiful gar{{den}}. She grows apples, pears and many kinds of flow{{ers}}. Every summer, I stay with her for two we{{eks}}. We wake up early and water the pla{{nts}} before it gets hot. In the after{{noon}}, we make jam from the fr{{uit}}. In the evening, we sit outside and wat{{ch}} the stars. I learn a lot from her, and I always feel ha{{ppy}} in her ho{{use}}. I hope to have a garden like hers one d{{ay}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Yoga for students",
          text: [
            "FREE YOGA FOR STUDENTS",
            "Feeling stressed? Join our free yoga classes every Monday and Wednesday at 6 p.m. in the Wellness Center.",
            "No experience needed. Mats are provided, but please wear comfortable clothes. Spaces are limited to 20 students, so arrive early.",
          ],
          questions: [
            { text: "How much do the classes cost?", options: ["nothing", "$5", "$10", "$20 a month"], answer: 0 },
            { text: "What do students need to bring?", options: ["a yoga mat", "comfortable clothes", "a water bottle", "a membership card"], answer: 1 },
            { text: "Why should students arrive early?", options: ["The class starts with a test.", "Spaces are limited.", "The room is hard to find.", "They need to register online."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How earthworms help the soil",
          paragraphs: [
            "Earthworms are small animals that live in the soil. Although many people ignore them, they are very important for plants.",
            "As earthworms move through the ground, they make tunnels. These tunnels let air and water reach plant roots more easily.",
            "Earthworms also eat dead leaves and other plant material. Their waste, called castings, is full of nutrients that help plants grow. For this reason, gardeners are usually happy to find many worms in their soil.",
          ],
          questions: [
            { text: "Where do earthworms live?", options: ["in trees", "in the soil", "in rivers", "on leaves"], answer: 1 },
            { text: "What do earthworm tunnels allow?", options: ["air and water to reach roots", "insects to escape", "rain to stay on the surface", "sunlight to enter the ground"], answer: 0 },
            { text: "What do earthworms eat?", options: ["living roots", "dead leaves and plant material", "small insects", "seeds"], answer: 1 },
            { text: "The word \"nutrients\" in paragraph 3 is closest in meaning to", options: ["substances that help growth", "small stones", "harmful chemicals", "water droplets"], answer: 0 },
            { text: "Why are gardeners happy to find many worms?", options: ["Worms eat pests.", "Worms make the soil healthier for plants.", "Worms keep birds away.", "Worms make the soil drier."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Moore's law",
          text: "In 1965, the engineer Gordon Moore observed that the number of transistors that could be placed on a computer chip was doub{{ling}} roughly every year, a rate he later revi{{sed}} to every two years. This predi{{ction}}, known as Moore's law, held remarkably well for decades and helped dri{{ve}} enormous increases in computing pow{{er}}. However, as transistors have approached the size of only a few dozen ato{{ms}}, further shrinking has become increa{{singly}} difficult and expensive. Engineers are therefore explo{{ring}} alternatives, such as stacking components in three dimen{{sions}} and designing chips for specific ta{{sks}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Peer mentoring program",
          text: [
            "To: Third- and fourth-year undergraduate students",
            "From: Student Success Center",
            "Subject: Become a peer mentor",
            "The Student Success Center is recruiting peer mentors for next year. Each mentor will be matched with three to five first-year students from the same faculty and will meet them at least twice a month to offer advice on study habits, campus life and adjusting to university.",
            "Mentors must complete a two-day training workshop in August and should have a strong academic record. In return, they will receive a $500 stipend for the year and a certificate that can be included in job applications. Applications, including a short statement explaining why you want to be a mentor, are due by April 10.",
          ],
          questions: [
            { text: "How often will mentors meet their students?", options: ["once a semester", "at least twice a month", "every day", "once a week"], answer: 1 },
            { text: "What must mentors do in August?", options: ["start meeting their students", "complete a two-day training workshop", "submit their application", "receive their stipend"], answer: 1 },
            { text: "What will mentors receive in return?", options: ["free accommodation", "a stipend and a certificate", "course credit", "a guaranteed job"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The Voynich manuscript",
          paragraphs: [
            "In 1912, a book dealer named Wilfrid Voynich purchased a small, handwritten book from a collection near Rome. Its roughly 240 pages are filled with an unknown script, accompanied by drawings of unidentifiable plants, astronomical diagrams and groups of small human figures bathing in pools connected by tubes. Despite more than a century of effort by linguists, codebreakers and, more recently, computer scientists, no one has convincingly read a single sentence of the text.",
            "Radiocarbon dating carried out in 2009 showed that the parchment was made in the early fifteenth century, which ruled out some earlier theories that the book was a modern forgery created by Voynich himself. Statistical analyses have also revealed that the text has some features of natural language, such as patterns in the frequency of words similar to those found in known languages. At the same time, it has unusual characteristics: certain words are repeated two or three times in a row far more often than in ordinary writing.",
            "Explanations remain divided. Some researchers believe the manuscript records a real language, perhaps an otherwise unknown dialect, written in an invented alphabet. Others think it is an elaborate code. A third group argues that it may be a meaningless hoax created in the fifteenth or sixteenth century to deceive a wealthy collector, noting that a skilled forger could produce text with language-like statistics using simple methods. Each year, new claims to have solved the mystery appear, but none has yet won general acceptance among specialists.",
          ],
          questions: [
            { text: "According to paragraph 1, what does the manuscript contain?", options: ["a known script and maps", "an unknown script with unusual drawings", "only astronomical tables", "printed text in Latin"], answer: 1 },
            { text: "The word \"elaborate\" in paragraph 3 is closest in meaning to", options: ["simple", "complicated", "ancient", "secret"], answer: 1 },
            { text: "What did radiocarbon dating show?", options: ["The parchment dates from the early fifteenth century.", "The book was written by Voynich.", "The text is in Latin.", "The drawings were added later."], answer: 0 },
            { text: "According to paragraph 2, what is unusual about the text?", options: ["It contains no repeated words.", "Some words are repeated several times in a row more often than usual.", "It uses only numbers.", "It is written from bottom to top."], answer: 1 },
            { text: "What does the author suggest about recent claims to have solved the mystery?", options: ["They have been accepted by most specialists.", "None has won general acceptance.", "They all prove the book is a hoax.", "They were made by Voynich's family."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Tuba", prompt: "Why is the kitchen so clean?", chunks: ["my roommates", "and I", "cleaned it", "together", "last night"], end: "." },
      { promptBy: "Nick", prompt: "Have you chosen a topic for your thesis?", chunks: ["I", "am going to", "write about", "renewable energy", "in cities"], end: "." },
      { promptBy: "Gizem", prompt: "I keep missing the morning bus.", chunks: ["why don't", "you", "prepare", "your bag", "the night before"], end: "?" },
      { promptBy: "Alex", prompt: "Where did you buy your bike?", chunks: ["I", "bought it", "second-hand", "from", "a student online"], end: "." },
      { promptBy: "Yasemin", prompt: "How was the job fair?", chunks: ["I", "spoke to", "several companies", "about", "internships"], end: "." },
      { promptBy: "Peter", prompt: "Why is the parking lot full?", chunks: ["there", "is", "a basketball game", "at", "the stadium tonight"], end: "." },
      { promptBy: "Elçin", prompt: "Do you know where my keys are?", chunks: ["I", "saw them", "on the table", "next to", "the door"], end: "." },
      { promptBy: "Max", prompt: "What are you doing after graduation?", chunks: ["I", "hope to", "work", "for a while", "before graduate school"], end: "." },
      { promptBy: "Dilan", prompt: "The presentation is tomorrow.", chunks: ["should", "we", "meet", "one more time", "tonight"], end: "?" },
      { promptBy: "Jacob", prompt: "Why do you like living downtown?", chunks: ["everything", "I need", "is", "within", "walking distance"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are the organizer of a study group for an introductory statistics course. The room you usually book in the library is no longer available, and you need to inform the other members.",
      to: "the members of your study group",
      subject: "Change of location for our study group",
      tasks: ["Explain why the usual room is no longer available.", "Suggest a new place and time to meet.", "Ask members to confirm whether the new arrangement works for them."],
      sample: "Hi everyone,\n\nI have some news about our statistics study group. The library has just told me that the group study rooms on the third floor will be closed for the rest of the month while new furniture and screens are installed. Unfortunately, this means we cannot use Room 3B on Tuesday evenings as usual.\n\nI have looked at a few options, and I think the best place would be the seminar room in the Mathematics Building, Room 210. It is quiet, has a large whiteboard and can be booked for free by students. It is available on Wednesdays from 6 to 8 p.m., so I suggest that we meet then instead, starting next week.\n\nCould you please reply by Friday to let me know whether Wednesday evening works for you? If several people cannot come, I will look for another time.\n\nThanks, and see you soon,\nAlp",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Media Studies",
      professor: {
        name: "Dr. Martinez",
        text: "Many young people now get most of their news from social media rather than from newspapers or television. Some argue that this makes news more accessible and diverse. Others worry that it exposes people to false information and only shows them views they already agree with. Is getting news from social media mainly a positive or a negative development? Why?",
      },
      students: [
        { name: "Olivia", text: "I think it's positive. Social media lets us hear from people directly affected by events, not only from large media companies. It's also free and fast." },
        { name: "Hakan", text: "It's mostly negative. Algorithms show us what keeps us scrolling, not what is true. False stories spread quickly, and people end up in bubbles where everyone agrees with them." },
      ],
      sample: "I believe getting news from social media is mostly negative, although it has some real advantages. Olivia is right that social media can give a voice to people who are usually ignored. During natural disasters, for example, local residents often share information faster than traditional news outlets. However, Hakan's concern is more serious. Because platforms are designed to keep users engaged, they tend to promote emotional and sensational content, whether or not it is accurate. I have seen friends share dramatic stories that turned out to be completely false, and corrections rarely spread as widely as the original posts. The solution is not to avoid social media entirely, but to use it alongside reliable sources and to teach young people how to check information before believing or sharing it.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are working at the reception of a language school. The director is telling you what to say to new students.",
      sentences: [
        "Welcome to our language school.",
        "Classes start at nine every morning.",
        "Your placement test is in Room 4.",
        "Please collect your books from the front desk after the test.",
        "The student lounge has free coffee and a small library.",
        "If you want to change to a different class level, please speak to your teacher first.",
        "Students who miss more than three lessons in a month will need to meet with the director to discuss their attendance.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people use their money. The researcher will ask you some questions.",
      questions: [
        {
          text: "Do you usually save money or spend it? Explain why.",
          sample: "I try to save a part of my money every month, even if it's only a small amount. When I started university, I spent everything I had and often ran out of money before the end of the month, which was stressful. Now I put about twenty percent of my income from my part-time job into a savings account as soon as I get paid. That way, I can still enjoy spending the rest without worrying.",
        },
        {
          text: "What is something you bought that was worth the money? Why?",
          sample: "One of the best things I've bought was a good pair of noise-canceling headphones. They were quite expensive, but I use them every day, on the bus, in the library and at home when my roommates are noisy. They help me concentrate when I'm studying, and they make long journeys much more pleasant. Because I use them so often, I feel that the cost per day has become very small.",
        },
        {
          text: "Some people think that children should receive pocket money to learn how to manage money. Do you agree?",
          sample: "Yes, I agree. Giving children a small amount of pocket money teaches them that money is limited and that they need to make choices. If they spend everything on sweets, they learn that they can't buy the toy they wanted later. My parents gave me a weekly allowance from the age of ten, and I think it helped me learn to save. However, parents should also talk to children about money, not just give it to them.",
        },
        {
          text: "Do you think cash will disappear in the future? Is that a good thing?",
          sample: "I think cash will become much less common, but I'm not sure it will disappear completely. Many people already pay for almost everything with cards or phones because it's quick and convenient. However, cash is still important for some older people and for people without bank accounts, and it works when there are technical problems or power cuts. So I think it would be a mistake to remove cash entirely, even if most payments become digital.",
        },
      ],
    },
  },
};
