import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 44 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_44: ToeflTest = {
  id: "toefl-44",
  no: 44,
  title: "TOEFL iBT Practice Test 44",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Light bulbs",
          text: "The electric light bulb changed daily life by making it easy to work and read after da{{rk}}. Several inventors experimented with electric lights in the nineteenth cen{{tury}}, but early bulbs burned out after only a few ho{{urs}}. In 1879, Thomas Edison and his team produced a bulb that could last much lon{{ger}}, using a thin thread of carbon ins{{ide}} a glass globe with no air. Over time, the carbon was replaced by tungsten, a metal that can survive very high tempe{{ratures}}. However, traditional bulbs waste most of their ene{{rgy}} as heat. Today, LED bulbs use far less electri{{city}} and can last for many ye{{ars}}, so they have replaced older bulbs in most coun{{tries}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Help moving a sofa",
          text: [
            "Hi Can! I finally bought a sofa for my new apartment, but it's being delivered only to the entrance of the building on Saturday at 10.",
            "Could you help me carry it up to the third floor? There's no elevator. I'll make us lunch afterwards to say thanks!",
          ],
          questions: [
            { text: "Why does the writer need help?", options: ["to carry a sofa up to the third floor", "to choose a new sofa", "to clean the apartment", "to drive to the shop"], answer: 0 },
            { text: "What does the writer offer to do?", options: ["pay for a taxi", "make lunch", "buy dinner at a restaurant", "lend Can a car"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Library late fees removed",
          text: [
            "GOOD NEWS FOR BORROWERS",
            "Starting this month, the university library will no longer charge late fees on overdue books. We hope this change will encourage more students to use the library.",
            "However, borrowers must still return items on time. If a book is more than thirty days overdue, it will be considered lost, and the full replacement cost will be charged to your account until the book is returned.",
          ],
          questions: [
            { text: "What change does the notice announce?", options: ["Late fees will no longer be charged.", "The library will close earlier.", "Borrowing limits will be reduced.", "Books can no longer be renewed."], answer: 0 },
            { text: "What is the purpose of the change?", options: ["to encourage more students to use the library", "to raise money", "to reduce the number of books", "to punish late borrowers"], answer: 0 },
            { text: "What happens if a book is more than thirty days overdue?", options: ["The borrower is banned from the library.", "It is considered lost and the replacement cost is charged.", "Nothing happens.", "The borrower receives a warning only."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The oldest living trees",
          paragraphs: [
            "Some trees live for an astonishingly long time. In the mountains of the western United States, certain bristlecone pines are known to be more than four thousand years old, meaning they were already ancient when the pyramids of Egypt were being built. Other long-lived species include giant sequoias, yews and olive trees, some of which have survived for many centuries.",
            "Surprisingly, many of the oldest trees grow in harsh environments. Bristlecone pines live high in dry, rocky mountains, where the growing season is short and the soil is poor. Under these conditions, they grow extremely slowly, producing dense, resin-filled wood that resists insects, fungi and rot. Few other plants can survive there, so the pines face little competition and fires are rare because there is little vegetation to burn.",
            "Long-lived trees also have unusual ways of coping with damage. When part of an old bristlecone pine dies, often because of drought or erosion, the rest of the tree can continue to live, supported by a narrow strip of living bark. Scientists study the growth rings of these trees, which form each year, to learn about past climates; wide rings indicate good growing years, while narrow rings suggest drought or cold. By comparing rings from living and dead trees, researchers have built records of climate going back thousands of years.",
          ],
          questions: [
            { text: "According to paragraph 1, how old are some bristlecone pines?", options: ["more than four thousand years", "about four hundred years", "about one thousand years", "less than a century"], answer: 0 },
            { text: "According to paragraph 2, why do bristlecone pines face little competition?", options: ["Few other plants can survive in their harsh environment.", "They kill nearby plants.", "They grow in cities.", "They need a lot of water."], answer: 0 },
            { text: "The word \"dense\" in paragraph 2 is closest in meaning to", options: ["thick and compact", "light", "wet", "colorful"], answer: 0 },
            { text: "What can happen when part of an old bristlecone pine dies?", options: ["The rest of the tree can continue to live.", "The whole tree dies immediately.", "The tree grows faster.", "The tree produces more seeds."], answer: 0 },
            { text: "According to paragraph 3, what do narrow growth rings suggest?", options: ["drought or cold", "good growing years", "fires", "the age of insects"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Moving house",
          text: "Last spring, my family moved to a new house in another to{{wn}}. Before the move, we put all our things into big bo{{xes}}. My little brother wrote his name on every box with a red pe{{n}}. On moving day, two men came with a large tru{{ck}}. They carried the furniture, and we helped with the light th{{ings}}. The new house has a big gar{{den}} and three bedrooms, so now I have my own ro{{om}}. At first, I missed my old frie{{nds}}, but I soon met new people at sch{{ool}}. Now I really like our new ho{{me}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Camping gear rental",
          text: [
            "GOING CAMPING? RENT YOUR GEAR!",
            "Outdoor Base rents tents, sleeping bags, stoves and backpacks for weekend trips. A full camping set for two people costs $45 for a weekend.",
            "Pick up your gear on Friday after 3 p.m. and return it by Monday at noon. All equipment is cleaned and checked after every rental. Book online to guarantee availability.",
          ],
          questions: [
            { text: "What does the shop rent?", options: ["camping equipment", "cars", "bicycles", "boats"], answer: 0 },
            { text: "How much is a full camping set for two people?", options: ["$45 for a weekend", "$45 per day", "$20 for a week", "free"], answer: 0 },
            { text: "When must gear be returned?", options: ["by Monday at noon", "on Friday", "on Sunday evening", "within a month"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why giraffes have long necks",
          paragraphs: [
            "Giraffes are the tallest animals in the world. An adult giraffe can be more than five meters tall, and its neck alone can be two meters long.",
            "For a long time, scientists believed that giraffes developed long necks to reach leaves high in trees. This helps them find food that other animals cannot reach, especially in the dry season.",
            "Some scientists have another idea. Male giraffes fight by swinging their necks and hitting each other. Males with longer, heavier necks usually win these fights. Many scientists now think that both food and fighting helped giraffes develop such long necks.",
          ],
          questions: [
            { text: "How long can a giraffe's neck be?", options: ["about two meters", "five meters", "half a meter", "ten meters"], answer: 0 },
            { text: "What was the traditional explanation for giraffes' long necks?", options: ["to reach leaves high in trees", "to see enemies", "to swim", "to keep cool"], answer: 0 },
            { text: "How do male giraffes fight?", options: ["by swinging their necks", "by biting", "by kicking with their back legs only", "by running"], answer: 0 },
            { text: "The word \"develop\" in paragraph 3 is closest in meaning to", options: ["gradually gain", "lose", "hide", "break"], answer: 0 },
            { text: "What do many scientists now think?", options: ["Both food and fighting helped giraffes develop long necks.", "Only fighting matters.", "Giraffes' necks are getting shorter.", "Giraffes do not eat leaves."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Decision fatigue",
          text: "Every day, people make hundreds of decisions, from what to eat for breakfast to how to respond to an em{{ail}}. Some researchers argue that making many choices in a row can grad{{ually}} reduce the quality of later decisions, a phenomenon called decision fati{{gue}}. As people become mentally ti{{red}}, they may start to choose the easiest op{{tion}} or simply avoid deciding. Some well-known lea{{ders}} have said they wear similar clothes every d{{ay}} to save mental ene{{rgy}} for more impor{{tant}} choices. However, later studies have produced mixed res{{ults}}, and scientists continue to debate how strong the effect really is.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Microscope reservation rules",
          text: [
            "To: Graduate students and researchers using the Imaging Facility",
            "From: Imaging Facility Manager",
            "Subject: New reservation rules for the electron microscope",
            "Because demand for the electron microscope has increased sharply, the following rules will apply from next month. Each user may reserve a maximum of six hours per week, and reservations must be made through the online calendar at least two days in advance.",
            "If you cannot use your reserved time, you must cancel at least 24 hours beforehand so that others can use the slot. Users who fail to cancel on time twice in one semester will lose booking privileges for a month. Only users who have completed advanced training may operate the microscope without supervision.",
          ],
          questions: [
            { text: "Why are new rules being introduced?", options: ["Demand for the microscope has increased sharply.", "The microscope is being replaced.", "The facility is closing.", "Users have damaged the equipment."], answer: 0 },
            { text: "What must users do if they cannot use their reserved time?", options: ["cancel at least 24 hours beforehand", "pay a fee", "ask a friend to use it", "nothing"], answer: 0 },
            { text: "Who may operate the microscope without supervision?", options: ["only users with advanced training", "any graduate student", "professors only", "first-year students"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why some species become invasive",
          paragraphs: [
            "When a plant or animal species is introduced to a region where it did not previously live, it usually fails to survive or remains rare. In some cases, however, a newcomer spreads rapidly and causes serious harm to the local environment or economy. Such species are described as invasive. Well-known examples include rabbits in Australia, which have damaged vast areas of farmland and native vegetation, and the zebra mussel, which has blocked water pipes and disrupted ecosystems in North American lakes.",
            "Ecologists have identified several reasons why certain species become invasive. One of the most important is the absence of natural enemies. In their native range, species are kept in check by predators, parasites and diseases that have evolved alongside them. When they arrive in a new region without these enemies, their populations can grow almost without limit. Many invasive species also reproduce quickly, tolerate a wide range of conditions and are not particular about what they eat, allowing them to outcompete native species for food and space.",
            "Human activity plays a central role in the spread of invasive species. Some have been introduced deliberately, for example as pets, garden plants or to control other pests, while others have traveled accidentally in the ballast water of ships or in shipments of wood and soil. Once an invasive species is established, removing it is often extremely difficult and expensive. For this reason, many countries now focus on prevention, through measures such as inspecting imported goods and treating ships' ballast water, as well as on early detection, when eradication is still possible.",
          ],
          questions: [
            { text: "According to paragraph 1, what usually happens when a species is introduced to a new region?", options: ["It fails to survive or remains rare.", "It immediately becomes invasive.", "It replaces all native species.", "It returns to its native range."], answer: 0 },
            { text: "The phrase \"kept in check\" in paragraph 2 is closest in meaning to", options: ["controlled", "encouraged", "protected", "counted"], answer: 0 },
            { text: "According to paragraph 2, why can populations of introduced species grow almost without limit?", options: ["They lack natural enemies in the new region.", "They are fed by humans.", "They live longer in new regions.", "They change their diet completely."], answer: 0 },
            { text: "Which is mentioned in paragraph 3 as an accidental way species spread?", options: ["in the ballast water of ships", "as garden plants", "as pets", "to control pests"], answer: 0 },
            { text: "Why do many countries now focus on prevention?", options: ["Removing established invasive species is difficult and expensive.", "Invasive species are harmless.", "Prevention is required by all international laws.", "Native species no longer exist."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Taner", prompt: "Why did you take a taxi today?", chunks: ["there was", "a strike", "on", "the metro", "this morning"], end: "." },
      { promptBy: "Megan", prompt: "Was the exam difficult?", chunks: ["the last", "question", "was", "harder than", "I expected"], end: "." },
      { promptBy: "Gökçe", prompt: "I've had a headache all day.", chunks: ["have you", "been", "drinking", "enough", "water"], end: "?" },
      { promptBy: "Will", prompt: "How did you hear about this job?", chunks: ["a friend", "sent me", "the advertisement", "last", "week"], end: "." },
      { promptBy: "Sena", prompt: "Where is the nearest pharmacy?", chunks: ["there is", "one", "next to", "the post", "office"], end: "." },
      { promptBy: "Brad", prompt: "Why are there so many tourists here?", chunks: ["the town", "is famous", "for", "its", "summer festival"], end: "." },
      { promptBy: "Duygu", prompt: "What did you do during the power cut?", chunks: ["we", "played", "cards", "by", "candlelight"], end: "." },
      { promptBy: "Scott", prompt: "When are your parents arriving?", chunks: ["their flight", "lands", "at", "six o'clock", "tomorrow"], end: "." },
      { promptBy: "Ilgın", prompt: "I don't have time to cook this week.", chunks: ["why don't", "you", "prepare", "meals", "on Sunday"], end: "?" },
      { promptBy: "Neil", prompt: "Why did you start running?", chunks: ["my doctor", "told me", "to get", "more", "exercise"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your apartment's heating system has not been working properly for a week, and the weather is getting very cold. You have already told the building manager once, but nothing has been done.",
      to: "the building manager, Mr. Şahin",
      subject: "Heating problem in Apartment 12",
      tasks: ["Describe the problem with the heating.", "Explain how it is affecting you.", "Say what action you would like the manager to take."],
      sample: "Dear Mr. Şahin,\n\nI am writing again about the heating in Apartment 12. As I mentioned when I called you last Monday, the radiators in the living room and bedroom have been only slightly warm for more than a week, and the bathroom radiator does not work at all. Unfortunately, nobody has come to check the system yet.\n\nNow that the temperature outside has dropped below zero at night, this has become a serious problem. Even with the windows closed, the apartment is only around fourteen degrees in the evening. I have had to wear a coat while studying, and I have caught a cold. I am also worried that the pipes might be damaged if the situation continues.\n\nI would be grateful if you could arrange for a technician to inspect and repair the heating system within the next two days. If this is not possible, could you please provide an electric heater until it is fixed? Please let me know when someone will come so that I can be at home.\n\nThank you for your attention.\n\nSincerely,\nGizem Arıkan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Cultural Studies",
      professor: {
        name: "Dr. Foster",
        text: "In many countries, traditional crafts such as weaving, pottery and woodworking are disappearing because fewer young people are learning them. Some argue that governments should fund programs to keep these skills alive. Others think that if there is no demand for these crafts, they will naturally disappear and public money should be spent elsewhere. Should governments support traditional crafts? Why or why not?",
      },
      students: [
        { name: "Emily", text: "Yes. Traditional crafts are part of a country's identity. Once the last craftsperson dies, that knowledge is lost forever, so governments should act now." },
        { name: "Tarık", text: "I'm not convinced. Governments have limited budgets, and things like hospitals and schools are more important than keeping old crafts alive." },
      ],
      sample: "I believe governments should provide some support for traditional crafts, though not unlimited funding. Emily is right that crafts like carpet weaving or copper work carry generations of knowledge, as well as stories and techniques unique to a region. If no one learns them, that cultural heritage disappears permanently, and it cannot simply be recreated later. At the same time, Tarık makes a reasonable point about priorities; health and education must come first. However, supporting crafts does not have to be expensive. Governments could offer small grants for apprenticeships, include craft workshops in school programs and help artisans sell their products online or to tourists. Such measures could make traditional crafts economically viable again, so they would not depend on public money forever.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new employee at a car rental company. Your supervisor is telling you what to explain to customers.",
      sentences: [
        "Good morning, how can I help you?",
        "May I see your driving license?",
        "The car must be returned with a full tank.",
        "Insurance is included in the price.",
        "Please check the car carefully for damage before you leave.",
        "If you return the car late, an extra day will be added to your bill.",
        "In case of an accident or a breakdown, call the emergency number on the key ring, and our team will send help as quickly as possible.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about friendship and social life. The researcher will ask you some questions.",
      questions: [
        {
          text: "How did you meet your closest friend?",
          sample: "I met my closest friend, Ezgi, on the first day of high school. We were both new to the school and didn't know anyone, so the teacher made us sit together. At first we were shy, but we quickly realized we liked the same books and music. Since then, we've supported each other through exams, family problems and even moving to different cities for university. We still talk almost every day.",
        },
        {
          text: "Do you prefer having a few close friends or many friends?",
          sample: "I prefer having a few close friends. I enjoy meeting new people, but I feel that deep friendships take a lot of time and effort. With a small group of close friends, I can be completely myself, share my problems and know that they will be there for me when I need help. Having many friends can be fun for social events, but those relationships are often more superficial.",
        },
        {
          text: "Do you think social media helps people maintain friendships?",
          sample: "I think social media helps in some ways. It makes it easy to stay in touch with friends who live far away, and we can share photos and news instantly. However, it can also make friendships feel shallow, because liking someone's post isn't the same as having a real conversation. I believe social media works best as a tool to arrange meetings or calls, not as a replacement for spending real time together.",
        },
        {
          text: "Is it easier or harder for adults to make new friends than for children?",
          sample: "I think it's usually harder for adults. Children spend all day at school with people their own age, and they make friends quickly through play. Adults are often busy with work and family responsibilities, so they have less free time and fewer opportunities to meet new people. They may also be more cautious. Joining clubs, classes or volunteer groups is a good way for adults to meet people with similar interests.",
        },
      ],
    },
  },
};
