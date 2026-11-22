import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 51 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_51: ToeflTest = {
  id: "toefl-51",
  no: 51,
  title: "TOEFL iBT Practice Test 51",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Paperback books",
          text: "For centuries, most books were bound in hard covers made of leather or thick board, which made them expen{{sive}} to produce. Cheap books with paper covers existed in the nineteenth cen{{tury}}, but they were often poorly made. In 1935, a British publisher launched a series of high-quality paperbacks that cost about the same as a pack of ciga{{rettes}}. The books were small enough to fit in a coat poc{{ket}} and were sold not only in bookshops but also in train sta{{tions}} and shops. The idea was a huge suc{{cess}}. Paperbacks made literature avai{{lable}} to millions of readers who could not afford hardcover edi{{tions}}. Today, paperbacks remain popular, even though many people now read on elec{{tronic}} dev{{ices}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Feeding my fish",
          text: [
            "Hi Nehir, I'm going to a conference in Ankara from Thursday to Sunday. Could you feed my fish while I'm away? You only need to give them a small pinch of food once a day.",
            "The food is on the shelf next to the tank. I'll leave my spare key with the building manager. Thank you so much!",
          ],
          questions: [
            { text: "Why does the writer need help?", options: ["The writer is going to a conference.", "The writer is moving.", "The fish are sick.", "The writer lost the key."], answer: 0 },
            { text: "Where will the spare key be?", options: ["with the building manager", "under the door mat", "next to the tank", "in the mailbox"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "New library printers",
          text: [
            "NEW PRINTERS IN THE LIBRARY",
            "The library has installed six new printers on the first floor. The new printers can print in color, print on both sides of the page and scan documents directly to your university email.",
            "To print, send your document from any library computer or from your own laptop using the 'Campus Print' app, then tap your student card on the printer. Unclaimed print jobs are deleted after 12 hours. Instructions are posted next to each printer.",
          ],
          questions: [
            { text: "What can the new printers do?", options: ["print in color, print on both sides and scan to email", "print photos only", "make copies of books", "bind documents"], answer: 0 },
            { text: "How do students release their print jobs?", options: ["by tapping their student card on the printer", "by entering a password", "by paying at the desk", "by asking a librarian"], answer: 0 },
            { text: "What happens to unclaimed print jobs?", options: ["They are deleted after 12 hours.", "They are printed automatically.", "They are emailed to the student.", "They are kept for a week."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How tsunamis form",
          paragraphs: [
            "A tsunami is a series of powerful ocean waves caused by the sudden movement of a large volume of water. Although tsunamis are sometimes called 'tidal waves', they have nothing to do with tides. Most are triggered by large earthquakes beneath the ocean floor, especially along boundaries where one tectonic plate slides beneath another. When the seabed suddenly rises or falls, it pushes the water above it, generating waves that spread outward in all directions.",
            "In the open ocean, tsunami waves behave very differently from ordinary waves caused by wind. They can travel at speeds of more than seven hundred kilometers per hour, as fast as a jet airplane, yet their height may be less than a meter, so ships at sea often do not notice them passing. The distance between one wave crest and the next can be hundreds of kilometers. As the waves approach the coast and the water becomes shallower, however, they slow down dramatically and their energy is compressed, causing them to grow much taller.",
            "One warning sign of an approaching tsunami is a sudden retreat of the sea, exposing large areas of the seabed. Unfortunately, curious people have sometimes walked out onto the exposed beach, unaware of the danger. Today, many countries operate warning systems that use seismic stations and ocean sensors to detect earthquakes and changes in sea level. These systems can provide coastal communities with minutes or hours of warning, allowing people to move to higher ground. Education is equally important: residents who know the natural warning signs can act quickly even without official alerts.",
          ],
          questions: [
            { text: "According to paragraph 1, what causes most tsunamis?", options: ["large earthquakes beneath the ocean floor", "strong winds", "the tides", "heavy rainfall"], answer: 0 },
            { text: "According to paragraph 2, why do ships at sea often not notice tsunamis?", options: ["The waves may be less than a meter high in the open ocean.", "The waves move too slowly.", "Ships are always far from the waves.", "Tsunamis happen only at night."], answer: 0 },
            { text: "The word \"compressed\" in paragraph 2 is closest in meaning to", options: ["squeezed into a smaller space", "lost", "spread out", "cooled"], answer: 0 },
            { text: "What happens to tsunami waves as they approach the coast?", options: ["They slow down and grow much taller.", "They speed up and become smaller.", "They disappear.", "They turn into tides."], answer: 0 },
            { text: "According to paragraph 3, what is one natural warning sign of a tsunami?", options: ["a sudden retreat of the sea", "a sudden rainstorm", "a drop in temperature", "very calm water"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Our school concert",
          text: "Last December, our school had a big win{{ter}} concert. Every class performed a so{{ng}}. My class sang an old folk song, and I played the gui{{tar}}. We practiced every day for three we{{eks}}. On the night of the concert, the hall was full of par{{ents}} and teachers. I was very nerv{{ous}} before we started. My hands were sha{{king}}! But when the music began, I felt bet{{ter}}. At the end, everyone clapped loudly. My parents said they were very pr{{oud}} of me. It was a won{{derful}} evening.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Kids' science workshop",
          text: [
            "BE A SCIENTIST FOR A DAY!",
            "Children aged 8 to 12 can join our hands-on science workshop at the City Science Center every Saturday morning from 10 to 12.",
            "Kids will build simple robots, make volcanoes and test their own ideas. The workshop costs $15 per child, and all materials are included. Parents can wait in the café downstairs.",
          ],
          questions: [
            { text: "Who can join the workshop?", options: ["children aged 8 to 12", "adults only", "university students", "teachers"], answer: 0 },
            { text: "What will children do?", options: ["build robots and make volcanoes", "watch films", "write stories", "play sports"], answer: 0 },
            { text: "Where can parents wait?", options: ["in the café downstairs", "in the workshop room", "in the parking lot", "at home only"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why we sneeze",
          paragraphs: [
            "Everyone sneezes sometimes. A sneeze is a sudden, strong push of air out of the nose and mouth. It happens without our control.",
            "We sneeze to clean our noses. When dust, pollen or germs get inside the nose, they touch tiny hairs and nerves. The nerves send a message to the brain, and the brain makes the body push the air out very fast to remove them.",
            "Some people sneeze when they look at bright sunlight. Scientists are not completely sure why this happens. A sneeze can spread germs very far, so it is a good idea to sneeze into a tissue or your elbow.",
          ],
          questions: [
            { text: "What is a sneeze?", options: ["a sudden, strong push of air out of the nose and mouth", "a deep breath in", "a kind of cough only", "a sound made by the stomach"], answer: 0 },
            { text: "Why do we sneeze?", options: ["to clean our noses", "to warm the body", "to speak louder", "to sleep better"], answer: 0 },
            { text: "The word \"remove\" in paragraph 2 is closest in meaning to", options: ["take away", "bring in", "grow", "keep"], answer: 0 },
            { text: "What happens to some people in bright sunlight?", options: ["They sneeze.", "They cough.", "They feel hungry.", "They fall asleep."], answer: 0 },
            { text: "Why should people sneeze into a tissue or their elbow?", options: ["Sneezes can spread germs very far.", "It makes the sneeze quieter.", "It stops future sneezes.", "It protects the nose."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The overjustification effect",
          text: "It may seem logical that rewarding people for an activity will make them want to do it more. However, psychologists have found that rewards can sometimes reduce motiva{{tion}}. In a classic study, children who enjoyed drawing were promised a prize for making pic{{tures}}. Later, when no rewards were off{{ered}}, these children spent less time drawing than children who had never been rew{{arded}}. Researchers call this the overjustification eff{{ect}}. When people receive an external rew{{ard}} for something they already enjoy, they may begin to see the activity as wo{{rk}} rather than fun. The effect seems stron{{gest}} for expected, tangible rewards, while unexpected pr{{aise}} is less likely to harm interest in the acti{{vity}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Thesis writing week",
          text: [
            "To: Doctoral students in the final year of their program",
            "From: Graduate Writing Center",
            "Subject: Applications for the spring thesis writing week",
            "The Graduate Writing Center will host a five-day thesis writing week from March 17 to 21. Participants will have access to a quiet workspace from 9 a.m. to 5 p.m., daily short workshops on topics such as structuring chapters and revising drafts, and individual consultations with writing advisors.",
            "Lunch and refreshments will be provided free of charge. Because space is limited to thirty participants, applicants must explain in a short statement what they hope to achieve during the week. Participants are expected to attend all five days; those who cannot commit to the full week should not apply.",
          ],
          questions: [
            { text: "What will participants have access to?", options: ["a quiet workspace, workshops and consultations", "free accommodation", "a new laptop", "a publishing contract"], answer: 0 },
            { text: "What must applicants include in their application?", options: ["a short statement explaining their goals", "a complete thesis", "a fee", "a letter from their family"], answer: 0 },
            { text: "Who should NOT apply?", options: ["students who cannot attend all five days", "final-year doctoral students", "students who need writing help", "students with a supervisor"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The bilingual brain",
          paragraphs: [
            "More than half of the world's population is thought to speak at least two languages. For much of the twentieth century, however, many educators believed that raising children with two languages could confuse them and slow their development. Some early studies seemed to support this view, finding that bilingual children performed worse on certain tests. Later researchers pointed out that these studies often compared children from very different social backgrounds and tested them in a language they did not know well.",
            "From the 1960s onward, more carefully designed studies produced a very different picture. Bilingual children were found to perform as well as or better than monolingual children on many tasks, particularly those requiring them to ignore irrelevant information or switch between rules. One explanation is that bilingual speakers constantly manage two languages that are active in the mind at the same time, choosing one and suppressing the other. This continuous practice may strengthen the brain's 'executive functions', the set of mental skills used for planning, focusing attention and controlling impulses.",
            "Some studies have also suggested that lifelong bilingualism may help delay the onset of symptoms of dementia in older adults, possibly by building a kind of 'cognitive reserve'. However, the research is far from settled. A number of recent large studies have found little or no advantage for bilinguals on tests of executive function, and some researchers argue that earlier positive findings were exaggerated because studies with positive results were more likely to be published. Most experts agree, nonetheless, that bilingualism does not harm children's development and brings clear social, cultural and economic benefits.",
          ],
          questions: [
            { text: "According to paragraph 1, why were some early studies of bilingual children unreliable?", options: ["They compared children from different backgrounds and tested them in unfamiliar languages.", "They studied only adults.", "They used too many participants.", "They were conducted in only one country."], answer: 0 },
            { text: "According to paragraph 2, on which tasks did bilingual children often perform well?", options: ["tasks requiring them to ignore irrelevant information or switch between rules", "tasks requiring physical strength", "spelling tests only", "memorizing long lists of numbers"], answer: 0 },
            { text: "The word \"suppressing\" in paragraph 2 is closest in meaning to", options: ["holding back", "learning", "translating", "repeating"], answer: 0 },
            { text: "According to paragraph 3, why might earlier positive findings have been exaggerated?", options: ["Studies with positive results were more likely to be published.", "Researchers used poor equipment.", "Bilingual people refused to take part.", "The tests were too easy."], answer: 0 },
            { text: "What do most experts agree on, according to paragraph 3?", options: ["Bilingualism does not harm development and brings social, cultural and economic benefits.", "Bilingualism always improves intelligence.", "Bilingualism prevents dementia.", "Children should learn only one language."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Selçuk", prompt: "Why are you carrying so many bags?", chunks: ["I", "did", "the shopping", "for", "the whole week"], end: "." },
      { promptBy: "Abby", prompt: "Did you like the hiking trail?", chunks: ["the view", "from the top", "was", "worth", "the effort"], end: "." },
      { promptBy: "Kübra", prompt: "I keep forgetting people's names.", chunks: ["why don't", "you", "repeat", "their name", "when you meet them"], end: "?" },
      { promptBy: "Mark", prompt: "How did you become interested in astronomy?", chunks: ["my father", "bought me", "a telescope", "when I was", "ten"], end: "." },
      { promptBy: "Derya", prompt: "When will the new library open?", chunks: ["it", "is expected", "to open", "next", "autumn"], end: "." },
      { promptBy: "Pete", prompt: "Why is there so much traffic today?", chunks: ["a truck", "broke down", "on", "the main", "road"], end: "." },
      { promptBy: "İlayda", prompt: "What did you think of the new café?", chunks: ["the coffee", "was", "excellent", "but", "quite expensive"], end: "." },
      { promptBy: "Ryan", prompt: "Where are you going for lunch?", chunks: ["we", "are trying", "the new", "Korean", "restaurant"], end: "." },
      { promptBy: "Merve", prompt: "My laptop battery is almost empty.", chunks: ["do you", "need", "to borrow", "my", "charger"], end: "?" },
      { promptBy: "Andy", prompt: "Why did you join the gym?", chunks: ["I", "want to", "be", "healthier", "this year"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently stayed at a guesthouse in a small coastal town. The owner, Mrs. Yılmaz, was very kind, and you accidentally left your jacket in your room. You want to write to her.",
      to: "the guesthouse owner, Mrs. Yılmaz",
      subject: "Thank you and a forgotten jacket",
      tasks: ["Thank her for your stay.", "Describe the jacket you left behind.", "Ask her to send it and offer to pay the cost."],
      sample: "Dear Mrs. Yılmaz,\n\nI stayed in the blue room at your guesthouse from August 3 to August 7, and I wanted to thank you for making my holiday so special. Your homemade breakfasts were delicious, and your recommendations, especially the small beach beyond the lighthouse, were the highlight of my trip. I felt truly welcome during my stay.\n\nUnfortunately, I seem to have left my jacket in the room. It is a dark green rain jacket with a hood and a small black logo on the left sleeve. I think I hung it behind the door on my last evening, and in my hurry to catch the early bus, I forgot to take it with me.\n\nWould it be possible for you to send it to my home address in Istanbul? I would of course pay for the postage and any packaging. If you prefer, I can transfer the money in advance. My address is included below. Thank you very much for your help, and I hope to visit again next summer.\n\nWarm regards,\nEce Karakaya",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Technology and Society",
      professor: {
        name: "Dr. Graham",
        text: "Self-driving cars are being tested in several cities around the world. Supporters claim they could greatly reduce traffic accidents, most of which are caused by human error. Others are concerned about safety, job losses for drivers and questions of responsibility when accidents occur. Should cities allow self-driving cars on public roads? Why or why not?",
      },
      students: [
        { name: "Amelia", text: "Yes. Human drivers get tired, distracted and sometimes drive dangerously. Self-driving cars don't have those problems, so they could save thousands of lives." },
        { name: "Halil", text: "Not yet. The technology still makes mistakes in unusual situations, and it's not clear who is responsible when an accident happens. We need more testing first." },
      ],
      sample: "I believe cities should allow self-driving cars on public roads, but only gradually and under strict rules. Amelia is right that human error causes the vast majority of traffic accidents. Drivers who are tired, distracted by their phones or under the influence of alcohol put everyone at risk, and well-designed automated systems could reduce these dangers significantly. However, Halil raises valid concerns. The technology can still struggle with unusual situations, such as road construction or extreme weather, and the law must clearly define who is responsible when something goes wrong. Therefore, cities should start by permitting self-driving cars in limited areas and on specific routes, with safety drivers on board and transparent reporting of all incidents. As the technology proves itself, these restrictions could be relaxed.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new assistant at a bicycle rental shop. The owner is telling you what to explain to customers.",
      sentences: [
        "Hello, would you like to rent a bike?",
        "Helmets are included in the price.",
        "Please check the brakes before you leave.",
        "Bikes must be returned by six o'clock.",
        "A map of the cycling routes is available at the counter.",
        "If you have a flat tire, call the number on the bike and we will come to help you.",
        "For longer trips, we recommend our electric bikes, which make it much easier to ride up the hills along the coast.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about money and saving. The researcher will ask you some questions.",
      questions: [
        {
          text: "Do you usually plan how you spend your money? Why or why not?",
          sample: "Yes, I try to plan how I spend my money every month. As a student, I have a limited budget, so at the beginning of each month I write down my fixed costs, like rent, transport and my phone bill. Then I decide how much I can spend on food and entertainment. Planning helps me avoid running out of money before the end of the month, and it also lets me save a little for travel.",
        },
        {
          text: "Is it better to save money or to enjoy spending it while you are young?",
          sample: "I think it's important to find a balance. Young people should enjoy life, travel and have new experiences, because these memories are valuable. However, saving even a small amount regularly is a good habit, and money saved early can grow over time. It also gives you security in case of emergencies, like losing a job or needing medical care. So I'd say spend on meaningful experiences, but avoid wasting money on things you don't really need.",
        },
        {
          text: "Should children receive pocket money from their parents?",
          sample: "I think giving children a small amount of pocket money can be very useful. It teaches them how to manage money, make choices and understand that things have a cost. For example, if they want an expensive toy, they need to save for several weeks. However, parents should guide them and perhaps link part of the money to small household tasks. This way, children also learn the value of work and responsibility.",
        },
        {
          text: "Do you think cash will disappear completely in the future?",
          sample: "I think cash will become much less common, but I'm not sure it will disappear completely. Many people already pay for almost everything with cards or phones because it's fast and convenient. However, some people, especially older people or those in rural areas, still depend on cash. Cash also gives people privacy and works during power cuts or technical problems. So I think governments should make sure cash remains available for those who need it.",
        },
      ],
    },
  },
};
