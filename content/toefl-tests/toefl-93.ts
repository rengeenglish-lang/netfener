import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 93 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_93: ToeflTest = {
  id: "toefl-93",
  no: 93,
  title: "TOEFL iBT Practice Test 93",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Traffic cones",
          text: "The bright orange traffic cone is a familiar sight on roads around the world. The first traffic cones were made of concrete in the early twentieth cen{{tury}}, but they were heavy and could damage ca{{rs}}. In the 1940s, an American inventor created a cone made of rub{{ber}}, which was lighter and safer. Later, cones were made from flexible plas{{tic}}, which made them cheap and easy to carry and sto{{re}}. Their bright orange color and reflective stri{{pes}} make them visible both during the day and at ni{{ght}}. Workers use them to mark road repairs, accidents and closed la{{nes}}. Traffic cones have even become a symbol of humor in some cities, where people place them on the heads of sta{{tues}} as a jo{{ke}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Picking up my parcel",
          text: [
            "Hi Murat, the post office left a note saying they tried to deliver a parcel to me today. I'm working all week until 7, but the post office closes at 6.",
            "Could you pick it up for me tomorrow? I'll leave the note and my ID card in your mailbox tonight. Thank you!",
          ],
          questions: [
            { text: "Why can't the writer collect the parcel?", options: ["The writer works until after the post office closes.", "The post office is far away.", "The writer is sick.", "The parcel is too heavy."], answer: 0 },
            { text: "What will the writer leave in Murat's mailbox?", options: ["the note and an ID card", "money", "a key", "a gift"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Lecture recordings policy",
          text: [
            "LECTURE RECORDINGS",
            "Starting this semester, most lectures in large lecture halls will be recorded automatically and posted on the course website within twenty-four hours. Recordings will be available until the end of the exam period.",
            "Recordings are for personal study only and may not be shared outside the course. Some lectures may not be recorded if they include sensitive discussions; instructors will announce this in advance. Students who need accessibility support can request captioned recordings.",
          ],
          questions: [
            { text: "When will recordings be posted?", options: ["within twenty-four hours", "at the end of the semester", "immediately during the lecture", "one week later"], answer: 0 },
            { text: "What are students NOT allowed to do with recordings?", options: ["share them outside the course", "watch them at home", "use them for personal study", "watch them before exams"], answer: 0 },
            { text: "Who can request captioned recordings?", options: ["students who need accessibility support", "all instructors", "visitors", "only graduate students"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The mystery of the Nazca Lines",
          paragraphs: [
            "In the dry coastal desert of southern Peru, enormous designs are drawn on the ground. Known as the Nazca Lines, they include straight lines that stretch for kilometers, geometric shapes such as triangles and spirals, and images of animals and plants, including a monkey, a hummingbird and a spider. Many of the figures are so large that their shapes can be fully appreciated only from the air or from nearby hills.",
            "The lines were created by the Nazca people between about 500 BCE and 500 CE. To make them, workers removed the reddish-brown stones that cover the desert surface, revealing the lighter-colored ground underneath. Experiments have shown that small teams of people using simple tools, wooden stakes and ropes could have created even the largest figures in a relatively short time. The lines have survived for so long because the region is one of the driest places on Earth, with almost no rain or wind to erase them.",
            "Why the Nazca people created the lines remains uncertain. Some early researchers suggested that the lines formed a kind of astronomical calendar, pointing to the rising and setting of the sun and stars, but later studies found that only a few lines line up with astronomical events. Many archaeologists now believe that the lines were connected with rituals related to water, which was extremely scarce in the desert. People may have walked along the lines during ceremonies to ask the gods for rain. Others suggest that some lines marked paths to sources of water. Today, the lines are threatened by flooding, vehicles driving across the desert and the growth of nearby settlements.",
          ],
          questions: [
            { text: "According to paragraph 1, why can many figures be fully appreciated only from the air?", options: ["They are extremely large.", "They are hidden underground.", "They are very small.", "They are painted in invisible colors."], answer: 0 },
            { text: "According to paragraph 2, how were the lines made?", options: ["by removing dark stones to reveal lighter ground", "by painting the ground white", "by building stone walls", "by planting trees"], answer: 0 },
            { text: "The word \"erase\" in paragraph 2 is closest in meaning to", options: ["remove", "create", "protect", "decorate"], answer: 0 },
            { text: "What did later studies find about the astronomical calendar theory?", options: ["Only a few lines line up with astronomical events.", "All lines point to the stars.", "The lines were drawn by astronomers.", "The lines were made recently."], answer: 0 },
            { text: "What do many archaeologists now believe about the lines?", options: ["They were connected with rituals related to water.", "They were landing strips for airplanes.", "They were maps of cities.", "They were sports fields."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My first football match",
          text: "Last autumn, my uncle took me to see a real football mat{{ch}} for the first time. The stadium was huge, and there were thousands of peo{{ple}}. Everyone was wearing the team's colors, red and wh{{ite}}. My uncle bought me a scarf and a big bot{{tle}} of water. When the players came onto the fi{{eld}}, the crowd started to sing and sh{{out}}. In the second half, our team scored a beautiful go{{al}}. Everyone jumped up and hugged each ot{{her}}! Our team won two to one. It was the most exciting d{{ay}} of my life, and I want to go again next mon{{th}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Learn to sail",
          text: [
            "LEARN TO SAIL THIS SUMMER!",
            "Our five-day sailing course for beginners runs every week from June to September at Blue Bay Marina. Classes take place from 9 a.m. to 1 p.m. each day.",
            "Experienced instructors will teach you how to control a small sailing boat safely. The course costs $250, including life jackets and a certificate. Participants must be able to swim fifty meters.",
          ],
          questions: [
            { text: "How long is the sailing course?", options: ["five days", "one day", "two weeks", "one month"], answer: 0 },
            { text: "What is included in the price?", options: ["life jackets and a certificate", "lunch", "a boat to keep", "accommodation"], answer: 0 },
            { text: "What must participants be able to do?", options: ["swim fifty meters", "drive a car", "speak two languages", "sail already"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How whales sing",
          paragraphs: [
            "Some whales, especially humpback whales, make long and beautiful sounds. These sounds are often called songs, because they have patterns that repeat.",
            "Only male humpback whales sing. A song can last for up to thirty minutes, and a whale may repeat it for many hours. Scientists think the songs help males attract females, or tell other males to stay away.",
            "Whale songs can travel very far underwater, sometimes many kilometers. Interestingly, all the males in one area sing the same song. Over time, the song slowly changes, and new songs can even spread from one group of whales to another across the ocean.",
          ],
          questions: [
            { text: "Why are whale sounds called songs?", options: ["They have patterns that repeat.", "They are very short.", "Whales sing only at night.", "People taught whales to sing."], answer: 0 },
            { text: "Which humpback whales sing?", options: ["only males", "only females", "only babies", "all whales"], answer: 0 },
            { text: "How long can a song last?", options: ["up to thirty minutes", "a few seconds", "a whole day", "one minute"], answer: 0 },
            { text: "The word \"spread\" in paragraph 3 is closest in meaning to", options: ["move to more places", "disappear", "become quieter", "stay the same"], answer: 0 },
            { text: "What is interesting about whale songs in one area?", options: ["All the males sing the same song.", "Every whale sings a different song.", "The songs never change.", "Only one whale sings."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The picture superiority effect",
          text: "People generally remember pictures better than words. In many experiments, participants who were shown a series of pictures later recalled more of them than participants who were shown the same items as writ{{ten}} words. Psychologists call this the picture superiority ef{{fect}}. One explanation is that pictures are stored in memory in two ways: as a visual image and as a verbal la{{bel}}, while words are usually stored only as verbal informa{{tion}}. Pictures also tend to be more distinc{{tive}}, which makes them easier to separate from other memo{{ries}}. Teachers and designers use this effect by adding images to lessons and presen{{tations}}. However, pictures must be relevant; decorative images that do not relate to the con{{tent}} can actually distract learners and make it harder to under{{stand}} the main po{{int}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "New student ID photos",
          text: [
            "To: All continuing students",
            "From: Campus Card Office",
            "Subject: Updating your student ID photo",
            "To improve security, all student ID cards will be replaced next semester with new cards that include a chip for building access. Students are asked to upload a recent photo through the student portal by November 30. Photos must show your full face against a plain background and must not include sunglasses or hats.",
            "New cards will be ready for collection during the first week of January at the Campus Card Office. Old cards will stop working on January 15. Students who do not upload a photo by the deadline will need to visit the office in person to have their photo taken, which may involve a long wait.",
          ],
          questions: [
            { text: "Why are student ID cards being replaced?", options: ["to improve security with chip-based building access", "because the old design was unpopular", "to reduce costs", "because of a name change"], answer: 0 },
            { text: "Which photo would NOT be accepted?", options: ["a photo with sunglasses", "a photo with a plain background", "a recent photo", "a photo showing the full face"], answer: 0 },
            { text: "What happens if students do not upload a photo by the deadline?", options: ["They must visit the office to have their photo taken.", "They will not receive a card.", "They will pay a fine.", "Their old card will continue working."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Desert greening projects",
          paragraphs: [
            "Desertification, the process by which fertile land becomes desert, threatens the livelihoods of hundreds of millions of people. It is caused by a combination of factors, including drought, deforestation, overgrazing by livestock and poor farming practices. As vegetation disappears, soil becomes exposed to wind and sun, losing its fertility and becoming more likely to blow away.",
            "In response, several ambitious projects have tried to stop deserts from spreading or even to make them green again. One of the best known is Africa's Great Green Wall, an initiative launched in 2007 with the goal of restoring a belt of land across the southern edge of the Sahara, from Senegal in the west to Djibouti in the east. Originally, the plan focused on planting a continuous line of trees, but it has increasingly shifted toward supporting a mosaic of local projects, such as restoring grasslands, protecting naturally growing trees and helping farmers adopt practices that conserve water and soil.",
            "Results have been mixed. In some areas, such as parts of Niger, farmers have successfully regenerated millions of hectares by protecting tree roots that remain in the soil and allowing them to grow again, a technique that is cheaper and more effective than planting new trees. In other places, many planted trees have died because they were not suited to local conditions or because communities were not involved in caring for them. Experts emphasize that successful desert greening depends less on large-scale tree planting than on working with local people, choosing suitable native species and improving land management over the long term.",
          ],
          questions: [
            { text: "According to paragraph 1, what causes desertification?", options: ["drought, deforestation, overgrazing and poor farming", "heavy rainfall", "the growth of cities only", "earthquakes"], answer: 0 },
            { text: "According to paragraph 2, how has the Great Green Wall changed over time?", options: ["It shifted from a line of trees to a mosaic of local projects.", "It was moved to Asia.", "It became a real stone wall.", "It was canceled."], answer: 0 },
            { text: "The word \"regenerated\" in paragraph 3 is closest in meaning to", options: ["restored", "damaged", "sold", "abandoned"], answer: 0 },
            { text: "What technique was successful in parts of Niger?", options: ["protecting tree roots in the soil and allowing them to regrow", "planting foreign trees", "building dams", "using chemical fertilizers"], answer: 0 },
            { text: "What do experts say successful desert greening depends on?", options: ["working with local people and choosing suitable native species", "planting as many trees as possible", "removing farmers from the land", "bringing water from the sea"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Kerem", prompt: "Why are you carrying a yoga mat?", chunks: ["I", "have", "a yoga", "class", "after work"], end: "." },
      { promptBy: "Lucy", prompt: "Did you enjoy the zoo?", chunks: ["the children", "loved", "watching", "the", "penguins"], end: "." },
      { promptBy: "Hande", prompt: "I'm not sure what to study next year.", chunks: ["why don't", "you", "talk", "to", "a career advisor"], end: "?" },
      { promptBy: "Chris", prompt: "How long does it take to cook rice?", chunks: ["it", "usually", "takes", "about", "twenty minutes"], end: "." },
      { promptBy: "Sevda", prompt: "When is the deadline for the essay?", chunks: ["we", "have to", "submit it", "by", "Friday afternoon"], end: "." },
      { promptBy: "Matt", prompt: "Why is the shop so empty today?", chunks: ["most people", "are", "at", "the street", "festival"], end: "." },
      { promptBy: "Ayten", prompt: "What did you think of the new library?", chunks: ["it", "is", "bright", "and very", "comfortable"], end: "." },
      { promptBy: "Joe", prompt: "Where did you find your cat?", chunks: ["she", "was", "hiding", "under", "the bed"], end: "." },
      { promptBy: "Melis", prompt: "This box is too heavy for one person.", chunks: ["should", "we", "carry it", "together", "upstairs"], end: "?" },
      { promptBy: "Nick", prompt: "Why did you choose to live near the sea?", chunks: ["I", "love", "swimming", "and walking", "on the beach"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are organizing a charity run to raise money for a local children's hospital. You want to ask a local sports shop to sponsor the event.",
      to: "the manager of City Sports, Mr. Doğan",
      subject: "Sponsorship request for a charity run",
      tasks: ["Introduce yourself and the event.", "Explain how the shop could help.", "Describe what the shop would receive in return."],
      sample: "Dear Mr. Doğan,\n\nMy name is Leyla Uçar, and I am a volunteer with the Friends of the Children's Hospital, a group that raises money to buy equipment and toys for young patients. On Sunday, May 18, we will hold our first five-kilometer charity run along the seafront, and we expect around four hundred runners, as well as many families who will come to watch.\n\nWe are writing to ask whether City Sports would consider sponsoring the event. As a well-known local sports shop, your support would mean a great deal to us. For example, you could provide prizes for the fastest runners, such as running shoes or sports watches, or donate water bottles for all participants. Alternatively, a financial contribution of any size would help us cover the costs of the event.\n\nIn return, we would display your company's logo on all our posters, T-shirts and our website, and we would thank your shop publicly during the prize ceremony. You would also be welcome to set up a stand at the finish line to promote your products.\n\nThank you for considering our request.\n\nKind regards,\nLeyla Uçar",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Environmental Science",
      professor: {
        name: "Dr. Patel",
        text: "Some cities have introduced rules requiring all new buildings to have solar panels on their roofs. Supporters say this will greatly increase the use of renewable energy. Critics argue that it makes new buildings more expensive and that solar panels are not efficient in every location. Should cities require solar panels on all new buildings? Explain your view.",
      },
      students: [
        { name: "Hannah", text: "Yes. Roofs are wasted space. If every new building produced some of its own electricity, cities would rely much less on fossil fuels." },
        { name: "Burak", text: "Not always. In cloudy places or on buildings shaded by taller ones, panels produce little electricity, so the extra cost isn't worth it." },
      ],
      sample: "I believe cities should generally require solar panels on new buildings, but with exceptions where they clearly would not work well. Hannah makes an excellent point: roofs are usually unused space, and installing panels when a building is constructed is cheaper than adding them later. Over time, the electricity they produce can lower energy bills and reduce greenhouse gas emissions, and as more panels are installed, prices tend to fall. However, Burak raises a fair concern. In locations with heavy shade from nearby buildings or very little sunshine, panels may not produce enough electricity to justify their cost. Therefore, the rule could include exemptions based on a simple assessment of each site, or allow developers in unsuitable locations to contribute instead to community solar projects elsewhere in the city.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new employee at a sailing school. The instructor is telling you what to say to new students.",
      sentences: [
        "Good morning, welcome to the sailing school.",
        "Please put on your life jacket.",
        "We will start with a short safety talk.",
        "Always listen to your instructor on the water.",
        "Lunch will be served at one o'clock.",
        "If the wind becomes too strong, we will return to the harbor and continue the lesson on land.",
        "At the end of the course, every student who passes the practical test will receive a certificate that allows them to rent small boats.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with sports and competitions. The researcher will ask you some questions.",
      questions: [
        {
          text: "Have you ever watched a sports event live? What was it like?",
          sample: "Yes, last year I watched a basketball game live for the first time. The arena was packed, and the atmosphere was incredible. Fans were singing, clapping and cheering for the whole game. It was much more exciting than watching on television, because I could feel the energy of the crowd. The game was very close, and when our team won in the last seconds, everyone jumped up and celebrated together.",
        },
        {
          text: "Do you prefer playing sports or watching them?",
          sample: "I prefer playing sports, because I enjoy being active and spending time with my friends. I play football twice a week, and it helps me stay fit and relax after studying. Watching sports is also fun, especially big events like the World Cup, but I think playing gives me a greater sense of satisfaction. When I play, I'm part of the action rather than just observing it.",
        },
        {
          text: "Is competition in sports good for children?",
          sample: "I think some competition in sports can be good for children, because it teaches them to set goals, work hard and deal with both winning and losing. It can also help them learn teamwork. However, too much pressure to win can make sports stressful and cause children to lose interest. Coaches and parents should focus on effort, improvement and fun, especially for younger children, rather than only on results.",
        },
        {
          text: "Why do you think sports are so popular around the world?",
          sample: "I think sports are popular because they bring people together. Fans of a team feel like part of a community, and big events like the Olympics unite people from many countries. Sports are also exciting and unpredictable, so people enjoy the emotions of watching a close game. In addition, many sports are easy to play almost anywhere, like football, which only needs a ball and some space.",
        },
      ],
    },
  },
};
