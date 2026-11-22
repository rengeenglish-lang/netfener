import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 22 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_22: ToeflTest = {
  id: "toefl-22",
  no: 22,
  title: "TOEFL iBT Practice Test 22",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Honey hunters",
          text: "In parts of Africa, people and a small bird work together to fi{{nd}} honey. The bird, called the honeyguide, knows where wild bees ma{{ke}} their nests, but it cannot open them. When it sees hun{{ters}}, it calls loudly and flies from tree to tr{{ee}}, leading them to a ne{{st}}. The hunters open the nest with ax{{es}} and take the honey. The bird then eats the wax that is le{{ft}} behind. Scientists have shown that the birds respond to spe{{cial}} calls that the hunters ma{{ke}} to ask for th{{eir}} help.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Forgotten laptop",
          text: [
            "Hi Aylin! I think I left my laptop charger in the seminar room after class.",
            "If you're still on campus, could you check whether it's there? It's black with a blue sticker. I'll come and collect it from your dorm tonight.",
          ],
          questions: [
            { text: "What did the writer leave behind?", options: ["a laptop", "a laptop charger", "a notebook", "a phone"], answer: 1 },
            { text: "What will the writer do tonight?", options: ["buy a new charger", "collect it from Aylin's dorm", "go back to the seminar room", "call the professor"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Flu vaccination clinic",
          text: [
            "FREE FLU VACCINATION CLINIC",
            "The Student Health Center is offering free flu vaccinations to all students and staff on October 14 and 15, from 10 a.m. to 4 p.m., in the Student Center ballroom.",
            "No appointment is needed, but please bring your university ID. If you have a fever on the day, please wait until you feel better and visit the Health Center instead.",
          ],
          questions: [
            { text: "Who can receive a free vaccination?", options: ["students only", "staff only", "students and staff", "local residents"], answer: 2 },
            { text: "What should people bring?", options: ["an appointment letter", "their university ID", "a medical record", "a payment card"], answer: 1 },
            { text: "What should people with a fever do?", options: ["come early", "wait and visit the Health Center later", "bring a doctor's note", "call an ambulance"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The domestication of horses",
          paragraphs: [
            "Horses transformed human history. They made it possible to travel quickly over long distances, to farm larger areas and to wage war in new ways. Yet when and where wild horses were first domesticated has long been debated.",
            "For many years, archaeologists believed that the Botai culture of what is now Kazakhstan, about 5,500 years ago, had been among the first to tame horses. Excavations at Botai sites uncovered thousands of horse bones, traces of mare's milk in pottery and possible signs of wear from bridles on horses' teeth. However, genetic studies published in 2018 revealed that the Botai horses were not the ancestors of modern domestic horses but of Przewalski's horses, a population that later returned to the wild.",
            "A larger genetic study in 2021, which analyzed ancient DNA from hundreds of horses across Europe and Asia, traced modern domestic horses to the lower Volga and Don river region of southwestern Russia around 4,200 years ago. From there, these horses spread rapidly across Asia and Europe within a few centuries, replacing local horse populations. Their spread coincided with the appearance of light, spoke-wheeled chariots, suggesting that the new horses were valued for their speed and their ability to pull vehicles.",
          ],
          questions: [
            { text: "According to paragraph 1, how did horses change human history?", options: ["They replaced farming.", "They allowed faster travel and new forms of farming and warfare.", "They ended trade.", "They made cities smaller."], answer: 1 },
            { text: "The word \"traced\" in paragraph 3 is closest in meaning to", options: ["followed back", "hid", "replaced", "copied"], answer: 0 },
            { text: "According to paragraph 2, what did the 2018 genetic studies show?", options: ["Botai horses were the ancestors of modern domestic horses.", "Botai horses were the ancestors of Przewalski's horses.", "The Botai did not keep horses.", "Horses were first domesticated in Europe."], answer: 1 },
            { text: "According to paragraph 3, where did modern domestic horses originate?", options: ["in Kazakhstan", "in the lower Volga and Don region", "in western Europe", "in China"], answer: 1 },
            { text: "Why does the author mention spoke-wheeled chariots?", options: ["to suggest why the new horses were valued", "to describe Botai pottery", "to explain how horses were tamed", "to show that horses were used for milk"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A birthday surprise",
          text: "Last week was my mother's birthday, and my sister and I plan{{ned}} a surprise for her. We cleaned the hou{{se}} and decorated the living room with balloons and flow{{ers}}. Then we cooked her favorite me{{al}}, rice with chicken and vegetables. When she came ho{{me}} from work, we turned off the lig{{hts}} and hid behind the so{{fa}}. She was very surprised and very hap{{py}}. We ate together and ga{{ve}} her a pres{{ent}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Weekend café job",
          text: [
            "PART-TIME HELP WANTED – CORNER CAFÉ",
            "We're looking for a friendly student to work on Saturdays and Sundays from 8 a.m. to 2 p.m. Duties include taking orders, making coffee and cleaning tables.",
            "No experience is needed; we will train you. $15 per hour plus tips and free lunch. Visit us at 14 Park Road and ask for Maria.",
          ],
          questions: [
            { text: "When would the student work?", options: ["on weekday mornings", "on Saturdays and Sundays", "every evening", "only on Sundays"], answer: 1 },
            { text: "What is required for the job?", options: ["previous experience", "no experience", "a cooking certificate", "a driving license"], answer: 1 },
            { text: "What does the job include besides pay?", options: ["free accommodation", "tips and free lunch", "a bonus every month", "free coffee beans"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How bees make honey",
          paragraphs: [
            "Bees make honey from nectar, a sweet liquid found inside flowers. A worker bee collects nectar and carries it back to the hive in a special stomach.",
            "At the hive, the bee passes the nectar to other bees. They add enzymes and put it into small wax cells. Then they fan it with their wings to remove water, which makes it thick.",
            "When the honey is ready, the bees cover each cell with wax. They eat the honey in winter, when there are no flowers. A strong hive can make much more honey than it needs, so beekeepers can take some.",
          ],
          questions: [
            { text: "What do bees use to make honey?", options: ["pollen", "nectar", "water", "leaves"], answer: 1 },
            { text: "How do bees carry nectar to the hive?", options: ["on their legs", "in a special stomach", "in their wings", "in wax cells"], answer: 1 },
            { text: "Why do bees fan the nectar with their wings?", options: ["to cool the hive", "to remove water and make it thick", "to change its color", "to attract other bees"], answer: 1 },
            { text: "The word \"cover\" in paragraph 3 is closest in meaning to", options: ["seal", "eat", "clean", "move"], answer: 0 },
            { text: "Why can beekeepers take some honey?", options: ["Bees do not eat honey.", "A strong hive makes more than it needs.", "Bees make honey only in summer.", "Bees leave the hive in winter."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Loss aversion",
          text: "Research in behavioral psychology suggests that people feel the pain of los{{ing}} something more strongly than the pleasure of gaining something of equal val{{ue}}. This tendency, known as loss aversion, helps expl{{ain}} why many people refuse a coin toss in which they could either win or lo{{se}} the same amount. Some studies estimate that losses are felt roughly twice as int{{ensely}} as gains, although the exact fig{{ure}} varies. Businesses use the princ{{iple}} in their marketing, for exam{{ple}} by describing a discount as an opport{{unity}} that customers will lose if they do not act qui{{ckly}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to the meal plan",
          text: [
            "To: All students living in residence halls",
            "From: University Dining Services",
            "Subject: Meal plan options for next year",
            "Starting next academic year, students in residence halls will be able to choose between three meal plans instead of one. The Basic Plan includes ten meals per week, the Standard Plan includes fourteen, and the Unlimited Plan allows any number of visits to the dining halls. First-year students must choose either the Standard or Unlimited Plan.",
            "Each plan also includes 'dining dollars' that can be spent at campus cafés. Unused meals do not carry over from week to week, but unused dining dollars may be carried over until the end of the academic year. Students must select their plan by August 1; those who do not will be placed on the Standard Plan.",
          ],
          questions: [
            { text: "Which plans can first-year students choose?", options: ["any of the three", "only the Basic Plan", "the Standard or Unlimited Plan", "only the Unlimited Plan"], answer: 2 },
            { text: "What happens to unused dining dollars?", options: ["They are lost each week.", "They can be carried over until the end of the year.", "They are refunded.", "They are converted into meals."], answer: 1 },
            { text: "What happens to students who do not choose a plan by August 1?", options: ["They will have no meal plan.", "They will be placed on the Standard Plan.", "They will be placed on the Basic Plan.", "They will pay a fine."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The mystery of the Tunguska explosion",
          paragraphs: [
            "On the morning of June 30, 1908, an enormous explosion occurred over a remote forest near the Podkamennaya Tunguska River in Siberia. Witnesses dozens of kilometers away described a column of bluish light moving across the sky, followed by a flash and a shock wave that knocked people off their feet and broke windows. The blast flattened an estimated eighty million trees over an area of more than two thousand square kilometers.",
            "Because the area was so isolated, the first scientific expedition did not reach it until 1927. To the surprise of its leader, Leonid Kulik, there was no crater. Instead, trees near the center of the area were still standing, though stripped of their branches, while trees farther away had been knocked down in a radial pattern pointing away from the center. This pattern suggested that the explosion had occurred in the air rather than on the ground.",
            "Most scientists now believe that the explosion was caused by a stony asteroid or a fragment of a comet, perhaps fifty to sixty meters across, which entered the atmosphere at high speed and broke apart several kilometers above the ground, releasing energy equivalent to a large nuclear weapon. Because the object exploded in the air, little of it reached the surface, which explains the absence of a crater. The event has encouraged efforts to detect and track objects that might one day threaten populated areas.",
          ],
          questions: [
            { text: "According to paragraph 1, what did the explosion do to the forest?", options: ["It set fire to a few trees.", "It flattened millions of trees over a large area.", "It created a lake.", "It had no effect on the trees."], answer: 1 },
            { text: "The word \"isolated\" in paragraph 2 is closest in meaning to", options: ["remote", "dangerous", "crowded", "frozen"], answer: 0 },
            { text: "What surprised Leonid Kulik when he reached the area?", options: ["There were many fragments of rock.", "There was no crater.", "The trees were undamaged everywhere.", "The area was full of people."], answer: 1 },
            { text: "What did the pattern of fallen trees suggest?", options: ["The explosion occurred in the air.", "A volcano had erupted.", "A storm had passed through.", "The explosion happened underground."], answer: 0 },
            { text: "According to paragraph 3, why is there no crater?", options: ["The object was very small.", "The object exploded in the air.", "The crater was filled by a river.", "The explosion was caused by a fire."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Gülşen", prompt: "Why do you look so tired?", chunks: ["I", "stayed up", "late", "finishing", "my essay"], end: "." },
      { promptBy: "Mason", prompt: "Have you visited the new art gallery?", chunks: ["I", "went", "on its", "opening", "night"], end: "." },
      { promptBy: "Ilgın", prompt: "I can never find a parking space.", chunks: ["why don't", "you", "take", "the bus", "to campus"], end: "?" },
      { promptBy: "Eric", prompt: "Where are you going to celebrate?", chunks: ["we", "booked", "a table", "at", "a seafood restaurant"], end: "." },
      { promptBy: "Kübra", prompt: "How did the soccer game go?", chunks: ["our team", "won", "in", "the last", "minute"], end: "." },
      { promptBy: "Jason", prompt: "Why is the library so busy?", chunks: ["final exams", "start", "next", "week", "for most students"], end: "." },
      { promptBy: "Rana", prompt: "Can you lend me some money?", chunks: ["I", "can lend you", "twenty dollars", "until", "Friday"], end: "." },
      { promptBy: "Scott", prompt: "What did you learn at the workshop?", chunks: ["we", "learned", "how to", "write", "better cover letters"], end: "." },
      { promptBy: "Hilal", prompt: "The heater in our room isn't working.", chunks: ["should", "we", "report it", "to", "maintenance"], end: "?" },
      { promptBy: "Aaron", prompt: "Why did you start learning Japanese?", chunks: ["I", "have", "always been", "interested in", "Japanese films"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You missed an important exam because you were in the hospital with a sudden illness. You need to contact your professor to arrange a make-up exam.",
      to: "your professor, Dr. Hughes",
      subject: "Missed exam due to illness",
      tasks: ["Explain why you missed the exam.", "Mention any documents you can provide.", "Ask about the possibility of taking a make-up exam."],
      sample: "Dear Dr. Hughes,\n\nI am writing to explain why I was absent from the midterm exam for Introduction to Sociology on Tuesday morning. On Monday night, I developed severe stomach pain, and I was taken to the emergency department of City Hospital, where I was diagnosed with appendicitis. I had surgery early on Tuesday and stayed in the hospital until yesterday.\n\nI have a medical certificate from the hospital that confirms the dates of my admission and surgery, and I would be happy to send you a copy or bring it to your office once I am well enough to return to campus.\n\nI would be very grateful if I could take a make-up exam. My doctor has advised me to rest for one more week, so I would be able to take the exam any time after next Wednesday. Please let me know what arrangements would be possible.\n\nThank you for your understanding.\n\nYours sincerely,\nKerem Polat",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Communication Studies",
      professor: {
        name: "Dr. Lopez",
        text: "Many companies now use video interviews, and some even use software to analyze candidates' answers before a human sees them. Supporters say this saves time and reduces bias. Critics argue that it is impersonal and may introduce new kinds of unfairness. Should companies use automated video interviews in hiring? Why or why not?",
      },
      students: [
        { name: "Chloe", text: "Yes, for the first stage. Companies receive hundreds of applications, and software can screen them consistently. A human interviewer can then meet the best candidates." },
        { name: "Volkan", text: "No. Software might judge people on things like their accent or facial expressions, which have nothing to do with ability. It also feels cold, and good candidates may decide not to apply." },
      ],
      sample: "I think companies can use video interviews, but they should be very cautious about letting software make decisions. Chloe is right that large companies need efficient ways to manage huge numbers of applications, and recorded interviews can help, because candidates can answer at a convenient time and recruiters can review them later. However, Volkan raises a serious concern. Automated systems learn from past data, and if that data reflects existing biases, the software may unfairly reject people because of their accent, background or appearance. I would support video interviews only if a human reviews every recording, and if companies regularly test their systems for bias and explain to candidates how decisions are made. Efficiency is important, but it should not come at the cost of fairness.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are working at a train station information desk. Your manager is telling you what to say to passengers.",
      sentences: [
        "Welcome to the central station.",
        "Tickets can be bought from the machines.",
        "The next train to the airport leaves at ten.",
        "Please keep your ticket until the end of your journey.",
        "Bicycles are allowed on trains outside rush hour.",
        "Passengers traveling with large luggage should use the elevators next to platform three.",
        "If your train is canceled, you can use your ticket on the next available service without paying extra.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about food and eating habits. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is a typical meal in your family, and who usually cooks?",
          sample: "In my family, a typical dinner includes a vegetable dish cooked with olive oil, some rice or bulgur, yogurt and fresh bread. On weekends we often have grilled meat or fish. My mother usually cooks during the week, but my father cooks on Sundays, and he's actually quite good at it. Since I moved away for university, I've started cooking some of these dishes myself, although they never taste quite the same.",
        },
        {
          text: "Do you prefer eating at home or in restaurants? Why?",
          sample: "I prefer eating at home most of the time. It's cheaper, healthier and I know exactly what's in my food. I also enjoy cooking with friends; it's a relaxing way to spend an evening. However, I like going to restaurants occasionally, especially to try food from other countries that I don't know how to cook. For special occasions, like birthdays, a restaurant also makes the evening feel more special.",
        },
        {
          text: "Some people think that schools should teach children how to cook. What is your opinion?",
          sample: "I think it's a great idea. Cooking is a basic life skill, but many young people leave home without knowing how to prepare a simple meal, so they rely on fast food or delivery, which is expensive and often unhealthy. Cooking lessons could also teach children about nutrition and about where food comes from. It doesn't need to be complicated; even learning a few simple, healthy recipes would make a big difference.",
        },
        {
          text: "How do you think people's eating habits will change in the future?",
          sample: "I think people will eat less meat in the future, partly for health reasons and partly because of environmental concerns. Plant-based products are already becoming more popular and cheaper. I also expect more people to order food through apps, since many young people are busy and live alone. On the other hand, I hope there will be a growing interest in local and seasonal food, as people become more aware of how food is produced.",
        },
      ],
    },
  },
};
