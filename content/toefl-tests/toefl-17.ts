import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 17 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_17: ToeflTest = {
  id: "toefl-17",
  no: 17,
  title: "TOEFL iBT Practice Test 17",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Tea",
          text: "Tea is one of the most popular drinks in the wor{{ld}}. According to legend, it was disco{{vered}} in China nearly five thousand years ago, when leaves from a wild bu{{sh}} fell into a pot of boil{{ing}} water. For centuries, tea was dr{{unk}} mainly in China and Japan. In the seventeenth century, traders brou{{ght}} it to Europe, where it was very expen{{sive}} at first. Today, people in Turkey drink more tea per per{{son}} than in any other coun{{try}}, usually from small gla{{sses}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Library book",
          text: [
            "Hi Leyla, the library just emailed me. The book you borrowed on my card is three days overdue!",
            "Could you return it today? I can't borrow anything else until it's back, and I need some books for my essay.",
          ],
          questions: [
            { text: "What is the problem?", options: ["The book is lost.", "A book borrowed on the writer's card is overdue.", "The library is closed.", "The writer's card has expired."], answer: 1 },
            { text: "Why does the writer want the book returned today?", options: ["to avoid a large fine", "so the writer can borrow other books", "because the writer wants to read it", "because Leyla is leaving"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Campus shuttle timetable",
          text: [
            "CAMPUS SHUTTLE: WINTER TIMETABLE",
            "From November 15, the campus shuttle will run every 15 minutes between 7 a.m. and 7 p.m. on weekdays, and every 30 minutes until midnight.",
            "On weekends, the shuttle will run every 45 minutes between 9 a.m. and 9 p.m. The stop outside the sports center is closed for repairs; please use the stop at the main gate instead.",
          ],
          questions: [
            { text: "How often does the shuttle run on weekday evenings after 7 p.m.?", options: ["every 15 minutes", "every 30 minutes", "every 45 minutes", "every hour"], answer: 1 },
            { text: "When does the weekend service end?", options: ["7 p.m.", "9 p.m.", "midnight", "It does not run on weekends."], answer: 1 },
            { text: "Why should passengers use the main gate stop?", options: ["It is closer to the library.", "The sports center stop is closed for repairs.", "It is the only stop on weekends.", "The shuttle has a new route."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How fireflies flash",
          paragraphs: [
            "On summer evenings in many parts of the world, fireflies light up fields and forests with brief flashes of yellow-green light. Fireflies are actually beetles, and their light is produced by a chemical reaction in special organs near the end of the abdomen. In this reaction, a substance called luciferin combines with oxygen, with the help of an enzyme, and releases energy as light. Remarkably, almost none of the energy is lost as heat, which is why the light is often described as cold light.",
            "Fireflies use their flashes mainly to attract mates. Each species has its own pattern of flashes, which can differ in length, color and the time between flashes. Typically, males fly around flashing their species' signal, while females wait on the ground or on plants and answer with flashes of their own. Fireflies control their flashing by regulating the supply of oxygen to the light organs.",
            "Some species have evolved surprising variations on this system. In parts of Southeast Asia and North America, thousands of males gather in trees and flash in perfect unison, creating waves of light. And females of one North American genus imitate the flash patterns of other species; when males of those species arrive expecting to find a mate, the females capture and eat them, gaining both food and protective chemicals.",
          ],
          questions: [
            { text: "According to paragraph 1, why is firefly light called cold light?", options: ["It is produced only at night.", "Almost none of its energy is lost as heat.", "It is blue in color.", "It is produced by cold-blooded animals."], answer: 1 },
            { text: "The word \"regulating\" in paragraph 2 is closest in meaning to", options: ["controlling", "stopping", "increasing", "measuring"], answer: 0 },
            { text: "According to paragraph 2, what is the main purpose of firefly flashes?", options: ["to frighten predators", "to attract mates", "to find food", "to keep warm"], answer: 1 },
            { text: "What do some males do in parts of Southeast Asia and North America?", options: ["flash in perfect unison", "flash only in winter", "stop flashing completely", "flash in different colors each night"], answer: 0 },
            { text: "Why do females of one North American genus imitate other species?", options: ["to find mates of their own species", "to capture and eat males of those species", "to warn other fireflies", "to confuse predators"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A new pet",
          text: "Last month, my family adopted a dog from an animal she{{lter}}. Her name is Bella, and she is two years o{{ld}}. At first, she was shy and hid un{{der}} the table. Now she follows me everyw{{here}}. Every morning, I take her for a wa{{lk}} in the park. She loves to play with a b{{all}} and to meet other do{{gs}}. Taking care of a pet is a big responsi{{bility}}, but Bella makes our ho{{me}} much hap{{pier}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Used textbooks",
          text: [
            "USED TEXTBOOKS FOR SALE",
            "I'm selling my first-year textbooks for Biology 101, Chemistry 101 and Calculus 1. All are in good condition, with only a few notes in pencil.",
            "Half the bookstore price! Buy all three for $90. Message Ali through the student marketplace app. I can meet on campus any weekday after 3 p.m.",
          ],
          questions: [
            { text: "What condition are the books in?", options: ["new", "good, with a few pencil notes", "damaged", "missing pages"], answer: 1 },
            { text: "How much do all three books cost?", options: ["half the bookstore price each", "$30", "$90", "$120"], answer: 2 },
            { text: "When can Ali meet buyers?", options: ["on weekends", "any weekday after 3 p.m.", "every morning", "only on Mondays"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How cacti survive",
          paragraphs: [
            "Cacti are plants that live in hot, dry deserts. They can survive for months without rain.",
            "Most cacti have thick stems that store large amounts of water. Instead of leaves, they have sharp spines. Spines lose much less water than leaves, and they also protect the plant from animals that want to eat it.",
            "Cacti also have long, shallow roots that spread out just below the surface. When it rains, the roots quickly collect as much water as possible before it dries up.",
          ],
          questions: [
            { text: "Where do cacti usually live?", options: ["in rainforests", "in hot, dry deserts", "near the sea", "in cold mountains"], answer: 1 },
            { text: "Where do cacti store water?", options: ["in their spines", "in their thick stems", "in their flowers", "in the soil"], answer: 1 },
            { text: "What is one purpose of spines?", options: ["to collect sunlight", "to protect the plant from animals", "to attract insects", "to store food"], answer: 1 },
            { text: "The word \"shallow\" in paragraph 3 is closest in meaning to", options: ["not deep", "very long", "thick", "weak"], answer: 0 },
            { text: "Why are cacti roots near the surface?", options: ["to find insects", "to collect rainwater quickly", "to avoid hot sand", "to hold the plant up"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The Matthew effect",
          text: "In 1968, the sociologist Robert Merton described a pattern he called the Matthew effect: in science, well-known researchers tend to rece{{ive}} more credit for a discovery than lesser-known colle{{agues}} who make similar contributions. Because recognition attracts fund{{ing}}, talented students and further atten{{tion}}, early advantages can accum{{ulate}} over time. The concept has since been appl{{ied}} far beyond science, for exam{{ple}} to education, where children who learn to read early often impr{{ove}} faster than others, and to economics, where inequalities in wea{{lth}} may grow over gener{{ations}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Laboratory access cards",
          text: [
            "To: All graduate students and research staff, Department of Chemistry",
            "From: Building Manager",
            "Subject: New access card system for laboratories",
            "From February 1, all laboratories in the Chemistry Building will be accessible only with the new electronic access cards. Existing keys will no longer work. To receive a card, you must complete the updated online safety training and collect the card in person from the building office, Room 105, with photo identification.",
            "Undergraduate students working in research labs will receive cards only if their supervisor submits a request form. Access outside normal working hours, from 8 a.m. to 6 p.m. on weekdays, will require additional approval from the head of department.",
          ],
          questions: [
            { text: "What must staff do before receiving a card?", options: ["return their old keys", "complete the updated online safety training", "pay a deposit", "get approval from the head of department"], answer: 1 },
            { text: "How can undergraduate researchers receive a card?", options: ["by applying online themselves", "if their supervisor submits a request form", "by visiting the head of department", "They cannot receive cards."], answer: 1 },
            { text: "What requires additional approval?", options: ["access during weekday working hours", "access outside normal working hours", "collecting a card", "completing safety training"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Bird song dialects",
          paragraphs: [
            "Many songbirds do not sing perfectly by instinct; they learn their songs, much as human children learn to speak. In species such as the white-crowned sparrow, young males listen to adult males during a sensitive period early in life and memorize their songs. Later, they practice, at first producing a rambling, imperfect version sometimes compared to the babbling of infants, before gradually refining it until it matches the memorized model.",
            "Because songs are learned, they can vary from place to place, producing regional dialects. White-crowned sparrows living only a few kilometers apart in California may sing recognizably different songs, and researchers have been able to identify a bird's birthplace from its song. These differences appear to arise from small copying errors that accumulate over generations, combined with the tendency of birds to learn from neighbors in their local area.",
            "Dialects can also change over time. Recordings of white-throated sparrows in Canada showed that a new version of the song, ending in a two-note pattern rather than the traditional three-note ending, spread from western Canada across thousands of kilometers within about two decades, eventually replacing the older form in many areas. Scientists do not fully understand why some song variants spread so rapidly, but the phenomenon offers a rare opportunity to observe cultural change in animals as it happens.",
          ],
          questions: [
            { text: "According to paragraph 1, how do young white-crowned sparrows learn their songs?", options: ["They are born knowing them.", "They listen to adult males and then practice.", "They copy the songs of other species.", "They learn from their mothers only."], answer: 1 },
            { text: "The word \"refining\" in paragraph 1 is closest in meaning to", options: ["improving", "forgetting", "shortening", "repeating"], answer: 0 },
            { text: "According to paragraph 2, what causes regional dialects to form?", options: ["differences in climate", "copying errors that accumulate, combined with local learning", "differences in body size", "the influence of human music"], answer: 1 },
            { text: "What happened to the white-throated sparrow song in Canada?", options: ["It disappeared completely.", "A new two-note ending spread widely.", "It became much longer.", "It was copied from another species."], answer: 1 },
            { text: "Why does the author describe the spread of the new song as a rare opportunity?", options: ["It allows scientists to observe cultural change as it happens.", "It proves that birds cannot learn.", "It shows that songs never change.", "It explains how birds migrate."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Derya", prompt: "Why are you carrying so many books?", chunks: ["I", "am returning", "them", "to", "the library"], end: "." },
      { promptBy: "Will", prompt: "Have you met our new roommate?", chunks: ["I", "met her", "briefly", "this", "morning"], end: "." },
      { promptBy: "Esra", prompt: "I can't sleep before exams.", chunks: ["have you", "tried", "drinking", "herbal tea", "before bed"], end: "?" },
      { promptBy: "Adam", prompt: "Where are you going for spring break?", chunks: ["I'm", "visiting", "my cousins", "in", "Istanbul"], end: "." },
      { promptBy: "Hale", prompt: "How was the history exam?", chunks: ["the questions", "were", "harder", "than", "I expected"], end: "." },
      { promptBy: "Mark", prompt: "Why is everyone wearing blue today?", chunks: ["it", "is", "the annual", "school spirit", "day"], end: "." },
      { promptBy: "Cansu", prompt: "Can you help me move this table?", chunks: ["I", "can help", "as soon as", "I finish", "this call"], end: "." },
      { promptBy: "Luke", prompt: "What did the doctor say?", chunks: ["she", "told me", "to rest", "for", "a few days"], end: "." },
      { promptBy: "Pelin", prompt: "We need more chairs for the meeting.", chunks: ["could", "we", "borrow some", "from", "the next room"], end: "?" },
      { promptBy: "Ryan", prompt: "Why did you join the debate club?", chunks: ["I", "wanted to", "improve", "my public", "speaking skills"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You attended a guest lecture at your university by a well-known scientist, and you would like to learn more about her research and possible opportunities to work in her field.",
      to: "the guest speaker, Dr. Fernandez",
      subject: "Thank you for your lecture",
      tasks: ["Thank the speaker and mention what you found most interesting.", "Explain your own interest in the field.", "Ask for advice or information about opportunities."],
      sample: "Dear Dr. Fernandez,\n\nThank you very much for your lecture on ocean plastic pollution at our university yesterday. I found it fascinating, especially the part about how microplastics enter the food chain through tiny plankton. I had never realized that the problem begins at such a small scale.\n\nI am a second-year environmental science student, and I have become increasingly interested in marine pollution. Last summer, I volunteered with a local group that organizes beach clean-ups, and I helped record the types of waste we collected. Your lecture made me think seriously about pursuing research in this area after I graduate.\n\nI would be very grateful for any advice you could give me. Are there particular courses or skills that you would recommend? I would also like to know whether your research group ever accepts undergraduate students for summer internships.\n\nThank you again for an inspiring talk.\n\nKind regards,\nDefne Koç",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Economics",
      professor: {
        name: "Dr. Wilson",
        text: "Some cities have introduced a tax on tourists, such as a small nightly charge added to hotel bills, to pay for cleaning, infrastructure and the protection of historic sites. Supporters say tourists should help pay for the costs they create. Critics worry that the tax will discourage visitors. Should popular cities charge a tourist tax? Why or why not?",
      },
      students: [
        { name: "Sara", text: "Yes. Tourists use public services, and local residents shouldn't pay all the costs. A small charge of a few dollars a night won't stop anyone from visiting a famous city." },
        { name: "Emre", text: "I'm against it. Tourism brings jobs and money to the city. Adding extra charges sends the wrong message and may push visitors to choose other destinations." },
      ],
      sample: "I support a tourist tax, as long as the money is clearly used to improve the city. Sara is right that visitors create real costs. In very popular cities, crowds increase the amount of rubbish, put pressure on public transport and damage historic buildings, and it seems unfair that residents alone should pay for this. A charge of a few dollars per night is very small compared with the price of a hotel room, so it is unlikely to change most people's travel plans. Emre's concern is understandable, but evidence from cities such as Barcelona and Amsterdam suggests that tourism has remained strong after these taxes were introduced. The key is transparency: if the city shows that the money is spent on cleaner streets, better transport and the restoration of monuments, both tourists and residents will benefit.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are working at a university bookstore. The store manager is telling you what to say to customers.",
      sentences: [
        "Welcome to the campus bookstore.",
        "Textbooks are on the second floor.",
        "Used books are about half the price of new ones.",
        "Please keep your receipt if you might return something.",
        "Students get a ten percent discount on all university clothing.",
        "Books can be returned for a full refund within two weeks of the start of the semester.",
        "If the book you need is out of stock, we can order it for you, and it usually arrives within three working days.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with travel. The researcher will ask you some questions.",
      questions: [
        {
          text: "Tell me about a place you have visited that you would like to return to. Why?",
          sample: "I'd love to return to Cappadocia, in central Turkey. I went there with my family a few years ago, and the landscape was unlike anything I'd seen, with strange rock formations and houses carved into the hills. We took a hot-air balloon ride at sunrise, which was unforgettable. I'd like to go back because we only stayed for two days, and I'd like to explore the hiking trails and underground cities more slowly next time.",
        },
        {
          text: "Do you prefer to travel with a detailed plan or decide things as you go? Why?",
          sample: "I prefer to have a basic plan but leave room for flexibility. I like to book my transport and accommodation in advance, because that reduces stress and is usually cheaper. But I don't plan every hour of the day. Some of my best travel experiences happened by chance, like finding a small local restaurant or a festival I didn't know about. If everything is planned, you can miss those surprises.",
        },
        {
          text: "Some people think that tourism harms the places people visit. What is your opinion?",
          sample: "I think tourism can be harmful if it isn't managed well. In some popular cities, rents have risen because many apartments are rented to tourists, and historic sites are damaged by huge crowds. However, tourism also brings jobs and helps protect culture, because there's money to restore old buildings. So I don't think the answer is to stop tourism, but to manage it, for example by limiting visitor numbers at fragile sites and encouraging people to visit less famous places.",
        },
        {
          text: "How do you think travel will change in the future?",
          sample: "I think travel will become more environmentally conscious. More people may choose trains instead of short flights, and there will probably be new technologies like electric or hydrogen planes. I also think virtual reality might let people explore places they can't visit, although I don't think it will replace real travel. Finally, I expect more people to combine travel with work, since remote jobs make it possible to work from almost anywhere.",
        },
      ],
    },
  },
};
