import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 70 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_70: ToeflTest = {
  id: "toefl-70",
  no: 70,
  title: "TOEFL iBT Practice Test 70",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Rubber stamps",
          text: "Stamps used to print marks or images have existed for thousands of years. In ancient Mesopotamia, people rolled small stone cylinders across wet cl{{ay}} to create designs that served as signa{{tures}}. Rubber stamps, however, appeared only in the nineteenth cen{{tury}}, after the process of vulcanization made rubber strong and dura{{ble}}. Rubber was ideal because it could be cut into detailed sha{{pes}} and pressed evenly onto pa{{per}}. Offices quickly adopted rubber stamps to mark documents with dates, addresses and words such as \"paid\" or \"received\". Post offices used them to cancel postage sta{{mps}}. Today, many official documents are processed digi{{tally}}, but rubber stamps remain popular for crafts, and teachers still use them to reward chil{{dren}} for good wo{{rk}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Help with math homework",
          text: [
            "Hi Uncle Murat, I'm stuck on my math homework about fractions, and Mum is working late tonight. Do you have time to help me on a video call?",
            "It's due tomorrow morning. I only need help with the last three questions. Could we talk at around 7?",
          ],
          questions: [
            { text: "What does the writer need help with?", options: ["math homework about fractions", "a science project", "an English essay", "a history test"], answer: 0 },
            { text: "How does the writer want to get help?", options: ["on a video call", "by visiting Uncle Murat", "by email", "at school"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Library café reopening",
          text: [
            "THE LIBRARY CAFÉ IS BACK!",
            "After two months of renovation, the library café will reopen on Monday with a larger seating area, new furniture and an expanded menu that includes hot meals, salads and vegan options.",
            "The café will be open from 8 a.m. to 9 p.m. on weekdays and from 10 a.m. to 6 p.m. on weekends. Please note that food bought at the café may be eaten only in the café area, not in the library reading rooms.",
          ],
          questions: [
            { text: "Why was the library café closed?", options: ["for renovation", "because of a staff shortage", "because it moved", "for the summer"], answer: 0 },
            { text: "What is new at the café?", options: ["a larger seating area and an expanded menu", "free coffee for everyone", "longer weekend hours", "a bookstore"], answer: 0 },
            { text: "Where may café food be eaten?", options: ["only in the café area", "anywhere in the library", "in the reading rooms", "outside only"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why salmon return to their home rivers",
          paragraphs: [
            "Many species of salmon have one of the most remarkable life cycles in the animal kingdom. They hatch from eggs in freshwater rivers and streams, spend months or years there as young fish, and then migrate downstream to the ocean. After living in the sea for one to several years, during which they grow much larger, they make a long and difficult journey back to the very stream where they were born in order to reproduce. For many species, this journey ends in death soon after spawning.",
            "How salmon find their way home over hundreds or even thousands of kilometers has long fascinated scientists. Research suggests that they use different senses at different stages of the journey. In the open ocean, salmon appear to navigate using the Earth's magnetic field. Studies have shown that young salmon may 'record' the magnetic signature of the place where they entered the sea and later use it to return to the right part of the coast.",
            "Once they reach the coast, salmon rely on their extraordinary sense of smell. Every stream has a unique chemical 'fingerprint' produced by its soil, rocks and plants. Young salmon memorize the smell of their home stream before leaving, and as adults they follow these familiar odors upstream, choosing the correct branch at each fork in the river. Their return is important not only for the species itself but also for entire ecosystems. When salmon die after spawning, their bodies release nutrients from the ocean into rivers and forests, feeding bears, birds and even trees. Dams and pollution, however, have blocked or damaged many salmon routes.",
          ],
          questions: [
            { text: "According to paragraph 1, why do salmon return to their home streams?", options: ["to reproduce", "to find food", "to escape predators in the ocean", "to spend the winter"], answer: 0 },
            { text: "According to paragraph 2, how do salmon navigate in the open ocean?", options: ["using the Earth's magnetic field", "by following ships", "by looking at the stars", "by following other fish species"], answer: 0 },
            { text: "The word \"signature\" in paragraph 2 is closest in meaning to", options: ["distinctive pattern", "name", "letter", "color"], answer: 0 },
            { text: "According to paragraph 3, how do salmon find their home stream near the coast?", options: ["by following the familiar smell of the stream", "by listening to the water", "by sight only", "by following the coastline"], answer: 0 },
            { text: "Why are salmon important for ecosystems?", options: ["Their bodies release ocean nutrients into rivers and forests.", "They clean the water.", "They eat harmful insects.", "They build dams."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Cleaning the beach",
          text: "Last month, my class went to clean a beach near our sch{{ool}}. Our teacher gave each of us a pair of glo{{ves}} and a big bag. We walked along the sand and picked up plastic bot{{tles}}, bags and old shoes. I was surp{{rised}} by how much rubbish we found! Some of it was very dirty and sme{{lled}} bad. After three hours, we had filled thirty ba{{gs}}. A man from the city came to take them aw{{ay}}. Our teacher told us that plastic can hurt fish and bi{{rds}}. Now I always throw my rubbish in a b{{in}}, and I try to use less plas{{tic}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Bowling night",
          text: [
            "STUDENT BOWLING NIGHT!",
            "Every Tuesday from 7 to 11 p.m., Star Bowling offers a special price for students: $6 per game, including shoe rental.",
            "Bring your friends and show your student card at the counter. Groups of six or more get a free pizza. You can book a lane online to avoid waiting.",
          ],
          questions: [
            { text: "When is student bowling night?", options: ["every Tuesday from 7 to 11 p.m.", "every weekend", "only on Fridays", "once a month"], answer: 0 },
            { text: "What is included in the $6 price?", options: ["shoe rental", "a drink", "a pizza", "two games"], answer: 0 },
            { text: "What do groups of six or more get?", options: ["a free pizza", "a free game", "free drinks", "a discount card"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How woodpeckers protect their heads",
          paragraphs: [
            "Woodpeckers are birds that hit trees with their beaks to find insects and make holes for their nests. They can peck up to twenty times every second.",
            "You might think this would hurt their heads. But woodpeckers have special features that protect them. They have strong neck muscles and thick, spongy bones in their skulls that help absorb the shock.",
            "Woodpeckers also have a very long tongue that wraps around the back of their skull. Some scientists believe it helps support the head. Woodpeckers use their tongues to pull insects out of holes in the wood.",
          ],
          questions: [
            { text: "Why do woodpeckers hit trees?", options: ["to find insects and make nest holes", "to make music", "to sharpen their beaks", "to scare other birds"], answer: 0 },
            { text: "How many times can woodpeckers peck every second?", options: ["up to twenty", "about two", "about one hundred", "about five"], answer: 0 },
            { text: "The word \"absorb\" in paragraph 2 is closest in meaning to", options: ["take in", "increase", "create", "show"], answer: 0 },
            { text: "What protects a woodpecker's head?", options: ["strong neck muscles and spongy bones", "thick feathers", "a hard shell", "a helmet"], answer: 0 },
            { text: "What do woodpeckers use their long tongues for?", options: ["to pull insects out of holes", "to make nests", "to drink water only", "to clean their feathers"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The bizarreness effect",
          text: "People often remember strange or unusual information better than ordinary informa{{tion}}. Psychologists call this the bizarreness ef{{fect}}. In experiments, participants who read sentences describing unusual scenes, such as a dog riding a bicy{{cle}}, later recalled them more easily than sentences describing normal sce{{nes}}, such as a dog chasing a ba{{ll}}. Many memory champions use this idea by creating odd, vivid mental ima{{ges}} to remember long lists of numbers or wo{{rds}}. However, research suggests that the effect is strongest when bizarre and ordinary items are mi{{xed}} together; when everything is strange, the advan{{tage}} becomes much smaller. Unusual information seems to stand out because it differs from its sur{{roundings}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Renewing your housing contract",
          text: [
            "To: Current residents of university housing",
            "From: Residential Life Office",
            "Subject: Housing contract renewal for next year",
            "Residents who wish to stay in university housing next year must renew their contract online by March 15. Current residents who renew on time are guaranteed a room, although not necessarily in the same building. You may list up to three preferred buildings, and requests to stay with your current roommate will be considered.",
            "A deposit of $200 is required at the time of renewal and will be deducted from your first rent payment. Residents who cancel their contract after June 1 will lose their deposit. Rooms not renewed by the deadline will be offered to incoming students.",
          ],
          questions: [
            { text: "What is guaranteed to residents who renew on time?", options: ["a room, though not necessarily in the same building", "the same room", "a single room", "a free parking space"], answer: 0 },
            { text: "What happens to the deposit?", options: ["It is deducted from the first rent payment.", "It is returned in June.", "It is used for repairs.", "It is not required."], answer: 0 },
            { text: "When will residents lose their deposit?", options: ["if they cancel after June 1", "if they renew late", "if they change buildings", "if they live with a roommate"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The rise of the sharing economy",
          paragraphs: [
            "In the past two decades, digital platforms have made it easier than ever for people to share or rent out things they own. Through apps and websites, people can rent a stranger's spare room for a night, borrow tools from neighbors, share car rides or rent bicycles and scooters for short trips. This model, often called the 'sharing economy', is based on the idea that many possessions sit unused much of the time and can be made more productive by sharing them.",
            "Supporters point to several advantages. Sharing can save consumers money, since renting an item for a short time is often cheaper than buying it. It can provide extra income for people who rent out their homes, cars or skills. Environmentally, sharing may reduce the total number of products that need to be manufactured; for example, if more people share cars, fewer cars may need to be built and parked in cities. Platforms also make it easier for people to find services quickly and to trust strangers through rating and review systems.",
            "The sharing economy, however, has also created controversies. In popular tourist cities, the conversion of apartments into short-term rentals for visitors has been blamed for rising rents and a shortage of housing for local residents, leading some cities to limit or regulate such rentals. Traditional businesses, such as hotels and taxi companies, argue that platforms compete unfairly because they often avoid regulations and taxes. In addition, some critics argue that the term 'sharing' is misleading, since many platforms are large, profit-driven companies and many of the people providing services are workers without traditional job protections. Governments continue to debate how best to regulate this rapidly changing sector.",
          ],
          questions: [
            { text: "According to paragraph 1, what idea is the sharing economy based on?", options: ["Many possessions are unused and can be made more productive by sharing.", "People should own more things.", "Everything should be free.", "Only companies should own property."], answer: 0 },
            { text: "According to paragraph 2, how might sharing benefit the environment?", options: ["It may reduce the number of products that need to be manufactured.", "It increases car production.", "It encourages more travel.", "It uses more energy."], answer: 0 },
            { text: "The word \"controversies\" in paragraph 3 is closest in meaning to", options: ["public disagreements", "successes", "inventions", "profits"], answer: 0 },
            { text: "According to paragraph 3, why have some cities limited short-term rentals?", options: ["They have been blamed for rising rents and housing shortages.", "Tourists complained about them.", "They were too cheap.", "They were not popular."], answer: 0 },
            { text: "Why do some critics say the term 'sharing' is misleading?", options: ["Many platforms are large, profit-driven companies.", "Nobody actually uses the platforms.", "Sharing is illegal.", "Platforms do not use the internet."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Taylan", prompt: "Why are you bringing a sweater?", chunks: ["the evenings", "get", "cold", "near", "the lake"], end: "." },
      { promptBy: "Rose", prompt: "Did you enjoy the play?", chunks: ["the main actor", "gave", "an", "incredible", "performance"], end: "." },
      { promptBy: "Gizem", prompt: "I need to improve my English.", chunks: ["why don't", "you", "watch", "films", "with English subtitles"], end: "?" },
      { promptBy: "Harry", prompt: "How did you learn to play the piano?", chunks: ["I", "took", "lessons", "for", "five years"], end: "." },
      { promptBy: "Sibel", prompt: "When does the post office close?", chunks: ["it", "closes", "at", "five", "on weekdays"], end: "." },
      { promptBy: "Jason", prompt: "Why is the street so busy tonight?", chunks: ["there is", "a festival", "in", "the main", "square"], end: "." },
      { promptBy: "Elif", prompt: "What did your brother give you?", chunks: ["he", "gave me", "a book", "about", "space travel"], end: "." },
      { promptBy: "Luke", prompt: "Where can we buy fresh vegetables?", chunks: ["there is", "a farmers' market", "every", "Saturday", "morning"], end: "." },
      { promptBy: "Aynur", prompt: "I can't hear the speaker.", chunks: ["should", "we", "move", "closer to", "the front"], end: "?" },
      { promptBy: "Noah", prompt: "Why did you decide to become a nurse?", chunks: ["I", "want to", "care for", "people", "who are ill"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You signed up for a fitness class at a community center, but the class has been moved to a time when you work. You want to write to the community center manager.",
      to: "the community center manager, Mrs. Hill",
      subject: "Change to the Pilates class schedule",
      tasks: ["Explain which class you signed up for.", "Describe how the schedule change affects you.", "Suggest a solution."],
      sample: "Dear Mrs. Hill,\n\nIn January, I signed up and paid for the ten-week beginners' Pilates class at the Westside Community Center, which was scheduled for Tuesday evenings from 7 to 8 p.m. I have attended the first three classes and have really enjoyed them; the instructor is excellent, and I have already noticed an improvement in my back pain.\n\nHowever, I received an email yesterday saying that, starting next week, the class will move to Tuesday afternoons from 3 to 4 p.m. Unfortunately, I work full-time until 5:30 p.m., so I will not be able to attend any of the remaining seven classes. I believe several other participants are in the same situation.\n\nWould it be possible to keep at least one evening class for participants who work during the day? If that is not possible, I would like to transfer to another evening class at the center or receive a refund for the seven classes I will miss.\n\nThank you for your understanding. I look forward to your reply.\n\nKind regards,\nSevda Uçar",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Urban Studies",
      professor: {
        name: "Dr. Russell",
        text: "Some cities have started to turn busy streets in the city center into pedestrian-only zones, where cars are not allowed. Supporters say this makes the city more pleasant, reduces pollution and helps local shops. Opponents argue that it makes it harder for people to reach the center and moves traffic to other streets. Should more city centers become car-free? Explain your view.",
      },
      students: [
        { name: "Grace", text: "Yes. Car-free streets are quieter and safer. People enjoy walking and spending time there, so shops and cafés often get more customers." },
        { name: "Cenk", text: "Not necessarily. Elderly people and people with disabilities may find it harder to reach the center, and traffic just becomes worse on nearby roads." },
      ],
      sample: "I believe more city centers should become car-free, provided that cities also improve access for those who need it. Grace is right that pedestrian zones can transform city centers. Without cars, streets become quieter, cleaner and safer, and people are more likely to walk slowly, stop at shops and sit in cafés, which can benefit local businesses. Several European cities have reported increased foot traffic after closing streets to cars. However, Cenk raises important concerns about accessibility and traffic. To address these problems, cities should provide frequent public transport to the edges of car-free zones, allow delivery vehicles at certain times and offer special access for people with disabilities. With careful planning, car-free centers can be welcoming for everyone.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new staff member at a youth hostel. The manager is telling you what to say to guests.",
      sentences: [
        "Hello, welcome to the hostel.",
        "Breakfast is included in the price.",
        "Lockers are available in every room.",
        "The kitchen closes at eleven at night.",
        "Please keep the shared bathrooms clean.",
        "If you need towels or sheets, you can rent them at the front desk for a small fee.",
        "We organize a free walking tour of the city every morning at ten, and it leaves from the main entrance of the hostel.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about technology and communication. The researcher will ask you some questions.",
      questions: [
        {
          text: "How do you usually communicate with your friends and family?",
          sample: "I usually communicate with my friends through messaging apps, because it's quick and easy to send messages, photos or voice notes. With my family, especially my grandparents, I prefer phone or video calls, since they like to see my face and hear my voice. When possible, I also try to meet friends in person, because conversations feel more natural and meaningful face to face.",
        },
        {
          text: "Do you prefer texting or talking on the phone?",
          sample: "I generally prefer texting for short, practical messages, like arranging a time to meet, because the other person can reply whenever they're free. However, for important or emotional conversations, I prefer talking on the phone. It's easier to understand someone's feelings from their voice, and there are fewer misunderstandings. Long text conversations about serious topics can sometimes lead to confusion.",
        },
        {
          text: "Has technology made people more connected or more isolated?",
          sample: "I think technology has done both. It has made it possible to stay in touch with people all over the world and to find communities with shared interests. On the other hand, some people spend so much time on their phones that they ignore the people around them. I've seen families at restaurants all looking at their screens instead of talking. So technology can connect us, but only if we use it thoughtfully.",
        },
        {
          text: "Should there be limits on how much time children spend using phones and computers?",
          sample: "Yes, I think children's screen time should be limited, especially for younger children. Spending too much time on screens can affect their sleep, physical activity and ability to concentrate. Children also need time to play outside, read and interact with others face to face. However, technology can be educational, so the limits should depend on what children are doing. Parents could set rules together with their children, which makes the rules easier to follow.",
        },
      ],
    },
  },
};
