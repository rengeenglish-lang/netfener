import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 89 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_89: ToeflTest = {
  id: "toefl-89",
  no: 89,
  title: "TOEFL iBT Practice Test 89",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Toasters",
          text: "For centuries, people made toast by holding slices of bread over an open fire on long metal for{{ks}}. This method required constant atten{{tion}}, because the bread could easily burn. The first electric toasters appeared in the early twentieth cen{{tury}}, but they toasted only one side of the bread at a ti{{me}}, so users had to turn each slice by ha{{nd}}. In 1919, an American mechanic who was tired of burnt toast in his factory cafe{{teria}} invented a toaster with a timer and a spring. When the bread was ready, it popped up automa{{tically}}. Pop-up toasters became very popu{{lar}} after sliced bread was introduced in the 1920s. Today, toasters are found in kitchens around the wor{{ld}}, and some even print pictures on bre{{ad}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Checking on Grandma",
          text: [
            "Hi Sinan, I'm stuck at work until late tonight, and Grandma isn't answering her phone. I'm a little worried because she had a cold yesterday.",
            "Since you live on her street, could you knock on her door and make sure she's okay? Please send me a message after you see her. Thank you!",
          ],
          questions: [
            { text: "Why is the writer worried?", options: ["Grandma isn't answering her phone and had a cold.", "Grandma lost her keys.", "Grandma moved to a new house.", "Grandma missed a doctor's appointment."], answer: 0 },
            { text: "Why does the writer ask Sinan?", options: ["He lives on Grandma's street.", "He is a doctor.", "He has Grandma's keys.", "He is not working today."], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Late-night safety escort",
          text: [
            "FREE SAFETY ESCORT SERVICE",
            "Students and staff who feel unsafe walking alone on campus at night can request a free safety escort. Trained student volunteers will walk with you to any location on campus or to nearby bus stops.",
            "The service operates every night from 8 p.m. to 2 a.m. To request an escort, call the campus security number or use the security app. Please allow up to fifteen minutes for an escort to arrive.",
          ],
          questions: [
            { text: "Who provides the safety escort?", options: ["trained student volunteers", "police officers", "taxi drivers", "professors"], answer: 0 },
            { text: "When does the service operate?", options: ["every night from 8 p.m. to 2 a.m.", "all day", "only on weekends", "only during exams"], answer: 0 },
            { text: "How long might people wait for an escort?", options: ["up to fifteen minutes", "one hour", "a few seconds", "until the next day"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Angkor's water system",
          paragraphs: [
            "Angkor, in present-day Cambodia, was the capital of the Khmer Empire between the ninth and fifteenth centuries. It is best known for its spectacular stone temples, especially Angkor Wat, the largest religious monument in the world. However, archaeologists have discovered that Angkor was much more than a collection of temples. It was a vast urban area, possibly home to several hundred thousand people, supported by an extraordinary system for managing water.",
            "The region around Angkor experiences a long dry season and a rainy season with heavy monsoon rains. To make the most of this water, the Khmer built an enormous network of canals, embankments and reservoirs, known as barays. The largest of these reservoirs were several kilometers long. Researchers believe that the system was used to control flooding during the rainy season and to store water for use during the dry months, possibly supporting rice farming and supplying the city's population. Some of the barays may also have had religious meaning, representing the oceans that surrounded the sacred mountain at the center of the universe.",
            "Much of what is known about Angkor's water system has been discovered recently using laser scanning technology called lidar, which can detect the shape of the ground beneath thick forest. These surveys have revealed roads, canals and neighborhoods that were previously hidden. Some researchers believe that the water system also played a role in the city's decline. In the fourteenth and fifteenth centuries, a series of severe droughts and unusually heavy monsoons may have damaged canals and reservoirs, making the system harder to maintain. Combined with political and economic changes, these problems may have encouraged the population to move elsewhere.",
          ],
          questions: [
            { text: "According to paragraph 1, what have archaeologists discovered about Angkor?", options: ["It was a vast urban area supported by a water management system.", "It was a small village.", "It was built underwater.", "It was only a religious site with no people."], answer: 0 },
            { text: "According to paragraph 2, what were the barays used for?", options: ["controlling floods and storing water for the dry season", "keeping fish for the king", "transporting stone for temples", "holding religious ceremonies only"], answer: 0 },
            { text: "The word \"embankments\" in paragraph 2 is closest in meaning to", options: ["raised walls of earth", "bridges", "temples", "fields"], answer: 0 },
            { text: "According to paragraph 3, how has lidar helped researchers?", options: ["It revealed hidden roads, canals and neighborhoods beneath the forest.", "It found gold in the temples.", "It measured rainfall.", "It cleaned the canals."], answer: 0 },
            { text: "What may have contributed to Angkor's decline?", options: ["droughts and heavy monsoons that damaged the water system", "an earthquake", "a volcanic eruption", "the arrival of tourists"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Visiting the planetarium",
          text: "Last month, my class visited the planetarium in the ci{{ty}}. We sat in comfortable chairs under a big round ceil{{ing}}. When the lights went off, the ceiling was full of st{{ars}}. A guide explained the names of the plan{{ets}} and showed us how they move around the s{{un}}. We also saw pictures of the Moon and a beautiful galaxy far aw{{ay}}. My favorite part was when it felt like we were flying through sp{{ace}}! After the show, we visited a small museum with old telescopes and pie{{ces}} of real rocks from space. Now I want to become an astron{{aut}} when I gr{{ow}} up.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Family bike day",
          text: [
            "FAMILY BIKE DAY IN THE PARK!",
            "On Sunday, May 4, the roads in Central Park will be closed to cars from 9 a.m. to 3 p.m. so that families can cycle safely.",
            "Free bike safety checks and children's cycling lessons will be offered near the main entrance. Bicycles and helmets can also be rented for $5. Please remember to bring water and sunscreen.",
          ],
          questions: [
            { text: "What will happen in Central Park on May 4?", options: ["The roads will be closed to cars so families can cycle.", "A car race will take place.", "The park will be closed.", "A concert will be held."], answer: 0 },
            { text: "What will be offered for free?", options: ["bike safety checks and children's cycling lessons", "bicycles", "lunch", "T-shirts"], answer: 0 },
            { text: "How much does it cost to rent a bicycle and helmet?", options: ["$5", "nothing", "$15", "$20"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How moles dig tunnels",
          paragraphs: [
            "Moles are small animals that live almost all their lives underground. They have soft, dark fur, tiny eyes and very large front feet.",
            "Moles use their large front feet like shovels. Their feet are wide and have strong claws. A mole pushes the soil to the side and behind it as it moves forward. A single mole can dig many meters of tunnels in one day.",
            "Moles cannot see well, but they have a very good sense of touch and smell. Their tunnels work like traps for food. Worms and insects fall into the tunnels, and the mole runs along to find and eat them. Moles may store extra worms in special underground rooms.",
          ],
          questions: [
            { text: "Where do moles live?", options: ["almost always underground", "in trees", "in rivers", "in houses"], answer: 0 },
            { text: "How do moles use their front feet?", options: ["like shovels to dig", "to climb trees", "to swim", "to catch birds"], answer: 0 },
            { text: "The word \"claws\" in paragraph 2 is closest in meaning to", options: ["sharp nails", "teeth", "ears", "eyes"], answer: 0 },
            { text: "Which senses help moles most?", options: ["touch and smell", "sight", "taste", "hearing only"], answer: 0 },
            { text: "How do moles get food?", options: ["Worms and insects fall into their tunnels.", "They hunt birds.", "They eat grass.", "People feed them."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Mandela effect",
          text: "Sometimes large numbers of people share the same false memory. For example, many people clearly remember a famous cartoon character wearing a tail, or a well-known film line that was never actually sp{{oken}}. This phenomenon has been called the Mandela ef{{fect}}, after a writer noticed that many people mistakenly remembered that Nelson Mandela had died in pri{{son}} in the 1980s. Psychologists exp{{lain}} that memory does not work like a recor{{ding}}. Each time we recall an event, we rebuild it, and details can be cha{{nged}} or filled in from other sour{{ces}}. If many people have similar experiences or expec{{tations}}, they may make similar mis{{takes}}. Social media can also spread these errors, making false memories seem even more con{{vincing}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to the honors program",
          text: [
            "To: Students in the University Honors Program",
            "From: Director of the Honors Program",
            "Subject: Updated requirements for the honors certificate",
            "Beginning next academic year, students in the Honors Program will need to complete four honors seminars instead of five to receive the honors certificate. However, all students will also be required to complete a research or community project in their final year, supervised by a faculty member.",
            "Students who are currently in their final year may choose to follow either the old or the new requirements. Project proposals must be approved by the honors committee by the end of the fall semester. An information session about choosing a project and finding a supervisor will be held on September 25.",
          ],
          questions: [
            { text: "How many honors seminars will be required next year?", options: ["four", "five", "three", "six"], answer: 0 },
            { text: "What new requirement is being added?", options: ["a research or community project in the final year", "a language exam", "a study abroad semester", "an internship"], answer: 0 },
            { text: "What choice do current final-year students have?", options: ["to follow either the old or the new requirements", "to skip all seminars", "to leave the program without penalty", "to delay graduation"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The economics of luxury goods",
          paragraphs: [
            "In basic economic theory, when the price of a product rises, people usually buy less of it. Luxury goods, such as designer handbags, expensive watches and high-end cars, sometimes seem to break this rule. For some luxury products, higher prices can actually make them more desirable. Economists sometimes describe these as 'Veblen goods', after the economist Thorstein Veblen, who wrote about 'conspicuous consumption' in the late nineteenth century.",
            "Veblen argued that wealthy people often buy expensive goods not mainly for their practical use, but to display their wealth and social status to others. A luxury watch tells the time no better than an inexpensive one, but its high price signals that its owner can afford it. If such a product became cheap and widely available, it might lose some of its appeal to buyers who want to stand out. For this reason, luxury brands carefully control their prices, limit production and sometimes destroy unsold products rather than selling them at a discount.",
            "The luxury market has changed in recent decades. Growing middle classes in countries such as China and India have created many new buyers, and social media has made luxury products more visible than ever. At the same time, some consumers, particularly younger ones, are showing more interest in experiences, second-hand luxury goods and brands with strong environmental and ethical commitments. Critics argue that conspicuous consumption encourages waste and deepens social inequality, while defenders point out that luxury industries employ skilled craftspeople and preserve traditional techniques.",
          ],
          questions: [
            { text: "According to paragraph 1, how do some luxury goods seem to break a basic economic rule?", options: ["Higher prices can make them more desirable.", "They are never sold.", "They are always cheap.", "Their prices never change."], answer: 0 },
            { text: "According to paragraph 2, why do wealthy people often buy expensive goods, according to Veblen?", options: ["to display their wealth and social status", "because they are more practical", "because they last forever", "to save money"], answer: 0 },
            { text: "The word \"conspicuous\" in paragraph 1 is closest in meaning to", options: ["easily noticed", "secret", "careful", "cheap"], answer: 0 },
            { text: "Why do luxury brands sometimes destroy unsold products?", options: ["to avoid selling them at a discount and losing appeal", "because the products are dangerous", "because of new laws", "to recycle materials"], answer: 0 },
            { text: "According to paragraph 3, how are some younger consumers changing the luxury market?", options: ["They show more interest in experiences, second-hand goods and ethical brands.", "They buy only new luxury goods.", "They refuse to use social media.", "They prefer cheaper fast fashion only."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Kaan", prompt: "Why are you taking a cooking class?", chunks: ["I", "want to", "learn", "how to make", "Italian food"], end: "." },
      { promptBy: "Emma", prompt: "Did you enjoy the beach holiday?", chunks: ["the weather", "was", "perfect", "the whole", "week"], end: "." },
      { promptBy: "Gizem", prompt: "I can never remember my passwords.", chunks: ["why don't", "you", "write them", "in", "a safe place"], end: "?" },
      { promptBy: "Henry", prompt: "How long have you been playing chess?", chunks: ["I", "started", "playing", "when I was", "seven"], end: "." },
      { promptBy: "Nehir", prompt: "When will the new bus line open?", chunks: ["it", "should", "start", "running", "next month"], end: "." },
      { promptBy: "Jason", prompt: "Why is the swimming pool closed?", chunks: ["they", "are", "cleaning", "it", "this week"], end: "." },
      { promptBy: "Aslı", prompt: "What did you do at the weekend?", chunks: ["I", "helped", "my parents", "in", "their garden"], end: "." },
      { promptBy: "Sam", prompt: "Where can I buy cheap train tickets?", chunks: ["you", "can", "buy them", "online", "in advance"], end: "." },
      { promptBy: "Pelin", prompt: "My phone is almost out of battery.", chunks: ["do you", "need", "to borrow", "my", "power bank"], end: "?" },
      { promptBy: "Tim", prompt: "Why did you start learning German?", chunks: ["I", "got", "a scholarship", "to study", "in Berlin"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your university is planning to remove the piano from the student lounge to create more seating. Many students enjoy playing and listening to the piano there. You want to write to the student services director.",
      to: "the student services director, Ms. Grant",
      subject: "The piano in the student lounge",
      tasks: ["Explain how students use the piano.", "Explain why removing it would be a loss.", "Suggest an alternative solution."],
      sample: "Dear Ms. Grant,\n\nI am writing about the plan to remove the piano from the student lounge in the Union Building. As a regular visitor to the lounge, I have seen how much this piano means to students. Every day, students of all majors sit down to play, from beginners practicing simple songs to music students performing classical pieces. Others gather around to listen, and sometimes small groups even sing together.\n\nRemoving the piano would be a real loss for the student community. It creates a friendly and relaxed atmosphere, especially during stressful exam periods, and it helps students who do not know each other start conversations. For many students who cannot afford a piano at home, it is also the only chance to practice.\n\nI understand that more seating is needed. Perhaps the piano could be moved to a corner of the lounge, and a few chairs could be rearranged to create more space. Alternatively, folding chairs could be added for busy times. I would be happy to help collect students' opinions on these ideas.\n\nThank you for considering this request.\n\nKind regards,\nEmir Yılmaz",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Economics",
      professor: {
        name: "Dr. Coleman",
        text: "In many cities, rents have risen much faster than wages. Some people believe governments should introduce rent controls, limiting how much landlords can increase rents each year. Others argue that rent controls discourage landlords from maintaining buildings and reduce the supply of housing. Should cities introduce rent controls? Explain your view.",
      },
      students: [
        { name: "Sophie", text: "Yes. Without limits, many families are forced to leave their neighborhoods. Rent controls give tenants security." },
        { name: "Mert", text: "No. If landlords can't raise rents, fewer people will build new apartments, and the housing shortage will get worse." },
      ],
      sample: "I believe cities should introduce moderate rent controls, but only alongside policies that increase the supply of housing. Sophie is right that rapidly rising rents can force families out of neighborhoods where they have lived for many years, disrupting children's education and community ties. Limiting annual rent increases to a reasonable level, perhaps linked to inflation, would give tenants security and time to plan. However, Mert makes an important economic point. Strict rent controls can reduce landlords' incentive to maintain buildings or to invest in new housing, which may worsen shortages over time. To avoid this, rent controls could apply only to existing buildings, while new developments are exempt for a period. Governments should also invest in public and affordable housing, so that tenants are protected and the overall supply grows.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new employee at a car wash. The manager is telling you what to say to customers.",
      sentences: [
        "Good morning, which wash would you like?",
        "The basic wash costs ten dollars.",
        "Please close all your windows.",
        "The wash takes about fifteen minutes.",
        "You can wait in the lounge with free coffee.",
        "If you would like the inside cleaned too, we can vacuum the seats and clean the windows for an extra five dollars.",
        "Customers who buy a monthly pass can wash their car as many times as they like, and they also receive a free air freshener.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about consumer culture. The researcher will ask you some questions.",
      questions: [
        {
          text: "Do you care about brands when you buy things?",
          sample: "I care about brands for some products, but not for others. For electronics, like my phone or laptop, I usually choose well-known brands because I trust their quality and after-sales service. However, for things like clothes, food or household products, I don't mind buying cheaper brands or store brands if the quality is good. I think paying extra just for a famous logo is often a waste of money.",
        },
        {
          text: "Why do you think some people buy very expensive luxury products?",
          sample: "I think people buy luxury products for different reasons. Some genuinely appreciate the quality and craftsmanship, like a handmade leather bag that lasts for decades. Others buy them to show their success or social status, because expensive brands are recognized by others. Social media also plays a role, since people see influencers with luxury items and want to have the same lifestyle. For some people, buying a luxury product is also a way to reward themselves after working hard.",
        },
        {
          text: "Is it better to buy a few high-quality items or many cheaper ones?",
          sample: "I think it's usually better to buy a few high-quality items. Although they cost more at first, they often last much longer, so you save money in the long run. They are also better for the environment, because less waste is produced. For example, a good pair of shoes can last for years, while cheap ones may fall apart in a few months. However, for things that you only need for a short time, cheaper items may make more sense.",
        },
        {
          text: "How can people avoid buying things they don't need?",
          sample: "People can avoid unnecessary purchases by making a shopping list and sticking to it. Another useful idea is to wait a few days before buying something that isn't essential; often, the desire to buy it disappears. Unsubscribing from marketing emails and limiting time on shopping apps can also help. Finally, thinking about where you will use an item and how often can help you decide whether you really need it.",
        },
      ],
    },
  },
};
