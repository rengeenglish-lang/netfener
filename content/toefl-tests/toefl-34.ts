import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 34 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_34: ToeflTest = {
  id: "toefl-34",
  no: 34,
  title: "TOEFL iBT Practice Test 34",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Dictionaries",
          text: "Today we take dictionaries for granted, but for a long time no complete dictionary of English exis{{ted}}. In 1755, Samuel Johnson published a famous dictionary that took him and a small team nine ye{{ars}} to complete. It contained about forty thousand wo{{rds}}, and Johnson included quotations from well-known wri{{ters}} to show how each word was us{{ed}}. Later, in the nineteenth century, scholars began work on the Oxford English Diction{{ary}}, which aimed to record the hist{{ory}} of every word in the langu{{age}}. That project took about seventy ye{{ars}} to fin{{ish}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Picnic plans",
          text: [
            "Hi everyone! The weather forecast for Sunday looks great, so the picnic is still on. Let's meet at the park entrance at noon.",
            "I'll bring the blanket and drinks. Can each person bring one dish to share? Please tell the group what you're bringing so we don't end up with five salads!",
          ],
          questions: [
            { text: "Where will they meet?", options: ["at the writer's house", "at the park entrance", "at a restaurant", "at the bus station"], answer: 1 },
            { text: "What does the writer ask everyone to do?", options: ["bring drinks", "bring one dish and tell the group what it is", "arrive early", "bring a blanket"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Lab equipment booking",
          text: [
            "PHYSICS DEPARTMENT – EQUIPMENT BOOKING",
            "Students working on independent projects may borrow equipment such as oscilloscopes and laser kits. Equipment must be booked online at least three days in advance and collected from Room 210.",
            "Items may be borrowed for a maximum of one week. Students are responsible for any damage, and equipment returned late may result in the loss of borrowing privileges for the rest of the semester.",
          ],
          questions: [
            { text: "How far in advance must equipment be booked?", options: ["one day", "three days", "one week", "one month"], answer: 1 },
            { text: "How long can equipment be borrowed?", options: ["one day", "three days", "up to one week", "one semester"], answer: 2 },
            { text: "What may happen if equipment is returned late?", options: ["a fine of $10", "loss of borrowing privileges for the semester", "a warning only", "nothing"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How chameleons catch insects",
          paragraphs: [
            "Chameleons are slow-moving lizards, but they can catch insects with astonishing speed. Their secret is a tongue that can extend to more than twice the length of their body and shoot out of the mouth in a fraction of a second. In some small species, the tongue accelerates faster than a high-performance sports car.",
            "Muscles alone could not produce such rapid movement. Instead, the chameleon's tongue works like a catapult. Before the tongue is launched, muscles surrounding a bone in the tongue contract slowly, stretching sheaths of elastic tissue and storing energy in them. When the chameleon releases this energy, the tongue shoots forward far faster than a muscle could move it directly.",
            "Catching prey requires more than speed. The tip of the tongue is covered with thick, sticky mucus, which is hundreds of times more viscous than human saliva and allows the chameleon to hold even relatively large insects. The tongue tip can also form a small cup shape at the moment of impact, helping to grip the prey. Chameleons rely on excellent eyesight to aim; their eyes can move independently, allowing them to search two directions at once before focusing both eyes on a target.",
          ],
          questions: [
            { text: "According to paragraph 1, how long can a chameleon's tongue extend?", options: ["half its body length", "more than twice its body length", "exactly its body length", "ten times its body length"], answer: 1 },
            { text: "The word \"viscous\" in paragraph 3 is closest in meaning to", options: ["thick and sticky", "thin and watery", "hot", "colorful"], answer: 0 },
            { text: "According to paragraph 2, how does the tongue achieve its speed?", options: ["Muscles move it directly.", "Energy stored in elastic tissue is released suddenly.", "The chameleon jumps forward.", "Air pressure pushes it out."], answer: 1 },
            { text: "What helps the chameleon hold its prey?", options: ["sharp teeth", "sticky mucus and a cup-shaped tongue tip", "its claws", "its tail"], answer: 1 },
            { text: "What is special about chameleon eyes?", options: ["They can see in total darkness.", "They can move independently.", "They are always closed.", "They can see only one color."], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My first concert",
          text: "Last month, I went to my first concert with my older cou{{sin}}. The band was one of my favo{{rites}}. We arrived early and waited in a long li{{ne}}. When the music star{{ted}}, everyone began to sing and da{{nce}}. The lights were very bri{{ght}}, and the music was very lo{{ud}}. I knew the words to almost every so{{ng}}. After the concert, my ears were ring{{ing}}, but I was very ha{{ppy}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Summer job at the zoo",
          text: [
            "SUMMER JOBS AT THE CITY ZOO",
            "The city zoo is hiring students for the summer to work in the gift shop, help visitors and assist with educational activities for children.",
            "Work is from June to August, four days a week, including weekends. Applicants must be at least eighteen and enjoy working with people. Apply online by May 1.",
          ],
          questions: [
            { text: "What is one job at the zoo?", options: ["feeding lions", "helping visitors", "cleaning animal cages", "driving the zoo train"], answer: 1 },
            { text: "How many days a week is the work?", options: ["two", "three", "four", "seven"], answer: 2 },
            { text: "What is required of applicants?", options: ["a degree in biology", "being at least eighteen", "experience with animals", "a driving license"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How mountains form",
          paragraphs: [
            "Mountains are some of the most impressive landforms on Earth. Many of them were formed by the movement of huge pieces of the Earth's surface, called plates.",
            "When two plates push against each other, the rock between them is squeezed and pushed upward. Over millions of years, this can create tall mountain ranges. The Himalayas, the highest mountains in the world, were formed this way and are still growing slowly.",
            "Other mountains are formed by volcanoes. When lava erupts and cools again and again, it can build up a tall mountain. Mount Fuji in Japan is an example of a volcanic mountain.",
          ],
          questions: [
            { text: "What are plates?", options: ["huge pieces of the Earth's surface", "flat mountains", "types of rock", "volcanoes"], answer: 0 },
            { text: "What happens when two plates push against each other?", options: ["The rock is squeezed and pushed upward.", "The sea dries up.", "A lake forms.", "The rock melts completely."], answer: 0 },
            { text: "What does the passage say about the Himalayas?", options: ["They are shrinking.", "They are still growing slowly.", "They are volcanic.", "They are the oldest mountains."], answer: 1 },
            { text: "The word \"impressive\" in paragraph 1 is closest in meaning to", options: ["remarkable", "dangerous", "small", "ordinary"], answer: 0 },
            { text: "How was Mount Fuji formed?", options: ["by plates pushing together", "by volcanic eruptions", "by rivers", "by glaciers"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The bandwagon effect",
          text: "People often adopt beliefs or behaviors simply because many others are doing the sa{{me}}. This tendency, known as the bandwagon effect, can be seen in fash{{ion}}, politics and even financial mar{{kets}}. For example, a product may become popular partly because people assume that its popul{{arity}} reflects high quality. Researchers have shown that displaying the number of downloads of a so{{ng}} can strongly influence which songs listeners cho{{ose}}. While following others can be a useful short{{cut}} when information is limited, it can also lead to rapid sprea{{ding}} of mistaken ide{{as}} and unsustainable price bub{{bles}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Changes to the sports facility rules",
          text: [
            "To: All members of the university sports center",
            "From: Sports Center Management",
            "Subject: Booking system for courts and classes",
            "From January 15, all tennis courts, squash courts and fitness classes must be booked in advance through the new sports center app. Bookings open seven days ahead, and each member may hold a maximum of three bookings at any time.",
            "Members who do not attend a booking without canceling at least two hours beforehand will receive a warning. After three warnings, booking privileges will be suspended for two weeks. Walk-in use of the gym and swimming pool will continue as before and does not require booking.",
          ],
          questions: [
            { text: "What must be booked in advance?", options: ["the gym and swimming pool", "courts and fitness classes", "the café", "the changing rooms"], answer: 1 },
            { text: "What happens after three warnings?", options: ["Membership is canceled.", "Booking privileges are suspended for two weeks.", "A fine is charged.", "Nothing happens."], answer: 1 },
            { text: "Which facilities do not require booking?", options: ["tennis courts", "fitness classes", "the gym and swimming pool", "squash courts"], answer: 2 },
          ],
        },
        {
          kind: "academic",
          title: "How the telegraph changed communication",
          paragraphs: [
            "Before the nineteenth century, messages could travel no faster than the people or animals that carried them. News from distant cities might take days or weeks to arrive, and governments, traders and newspapers often acted on information that was already out of date. The electric telegraph changed this almost overnight, making it possible to send messages over long distances in a matter of minutes.",
            "Several inventors in Europe and the United States developed telegraph systems in the 1830s and 1840s. The most widely adopted was associated with the American painter and inventor Samuel Morse, who, with his collaborator Alfred Vail, developed a code in which letters were represented by combinations of short and long electrical signals, known as dots and dashes. In 1844, Morse sent a message by wire from Washington to Baltimore, a distance of about sixty kilometers. Within a few decades, telegraph lines connected cities across Europe and North America.",
            "The consequences were far-reaching. Railways used the telegraph to coordinate train movements, improving safety. Financial markets in different cities became closely linked, because prices could be compared almost instantly. Newspapers began to publish reports from distant places on the same day, and news agencies emerged to collect and sell information. In 1866, after earlier attempts had failed, a lasting cable was laid across the floor of the Atlantic Ocean, reducing the time needed to send a message between Europe and North America from about ten days by ship to a few minutes.",
          ],
          questions: [
            { text: "According to paragraph 1, what was a problem before the telegraph?", options: ["Messages were too expensive to write.", "Information often arrived out of date.", "There were no newspapers.", "Governments did not use messages."], answer: 1 },
            { text: "The phrase \"far-reaching\" in paragraph 3 is closest in meaning to", options: ["wide-ranging", "short-lived", "unexpected", "local"], answer: 0 },
            { text: "According to paragraph 2, how did Morse code represent letters?", options: ["with pictures", "with combinations of short and long signals", "with numbers only", "with colored lights"], answer: 1 },
            { text: "How did railways use the telegraph?", options: ["to sell tickets", "to coordinate train movements", "to build tracks", "to power trains"], answer: 1 },
            { text: "What was the effect of the 1866 Atlantic cable?", options: ["Messages took ten days instead of minutes.", "Messages between Europe and North America took minutes instead of days.", "Ships stopped crossing the Atlantic.", "Newspapers closed."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Tülay", prompt: "Why are you taking the stairs?", chunks: ["I", "am", "trying", "to get", "more exercise"], end: "." },
      { promptBy: "Phil", prompt: "Have you finished the reading list?", chunks: ["I", "have", "two more", "books", "to read"], end: "." },
      { promptBy: "Canan", prompt: "I'm always tired in the morning.", chunks: ["why don't", "you", "stop", "drinking coffee", "after dinner"], end: "?" },
      { promptBy: "Glen", prompt: "Where did you get your new glasses?", chunks: ["I", "bought them", "at", "the optician", "downtown"], end: "." },
      { promptBy: "Berna", prompt: "How was the hiking trip?", chunks: ["the view", "from", "the top", "was", "amazing"], end: "." },
      { promptBy: "Rick", prompt: "Why is the meeting postponed?", chunks: ["the manager", "is", "stuck", "at", "the airport"], end: "." },
      { promptBy: "Dilek", prompt: "Can you recommend a good dentist?", chunks: ["my dentist", "is", "very gentle", "and", "always on time"], end: "." },
      { promptBy: "Sam", prompt: "What did you do yesterday evening?", chunks: ["I", "cooked", "dinner", "for", "my roommates"], end: "." },
      { promptBy: "Fatoş", prompt: "The library is closing soon.", chunks: ["should", "we", "continue", "at", "my apartment"], end: "?" },
      { promptBy: "Leo", prompt: "Why do you enjoy gardening?", chunks: ["it", "gives me", "a chance", "to be", "outside"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You have just finished a semester-long exchange program at a university abroad. You want to write to your exchange coordinator there.",
      to: "your exchange coordinator, Ms. Bauer",
      subject: "Thank you for a wonderful semester",
      tasks: ["Thank the coordinator for their help during your exchange.", "Describe what you enjoyed most about your semester.", "Suggest one way the program could be improved for future students."],
      sample: "Dear Ms. Bauer,\n\nNow that I am back home, I wanted to thank you for all your help during my exchange semester in Vienna. From the moment I arrived, you made me feel welcome, and your advice about housing and registering for courses saved me a great deal of stress.\n\nWhat I enjoyed most was the chance to study in an international environment. My classes included students from more than fifteen countries, and our discussions gave me new perspectives on topics I thought I already understood. I also loved exploring the city's museums and concerts with the other exchange students, many of whom have become close friends.\n\nIf I could suggest one improvement, it would be to organize a few more events that bring exchange students together with local students. Most of my friends were other international students, and I would have liked more opportunities to practice German and learn about Austrian culture from local people. A language exchange program or a buddy system might help.\n\nThank you once again for making my semester so memorable.\n\nWith best wishes,\nUmut Kaya",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Morgan",
        text: "In many countries, people are moving from small towns and villages to large cities in search of jobs and opportunities. As a result, some rural areas are losing their young people and their services, such as schools and shops. Should governments try to encourage people to stay in or move to rural areas? Why or why not?",
      },
      students: [
        { name: "Abigail", text: "Yes. If villages empty out, we lose local traditions and farmland is abandoned. Governments could support remote work and improve internet access in rural areas." },
        { name: "Emre", text: "I don't think governments should interfere. People should live where they can find work and services. It's more efficient to invest in cities where most people live." },
      ],
      sample: "I believe governments should encourage people to live in rural areas, but through support rather than pressure. Abigail makes an important point: when villages lose their populations, they lose not only people but also local knowledge, traditions and the care of farmland and landscapes. In my grandparents' region, many villages now have only elderly residents, and schools and clinics have closed. However, Emre is right that people should not be forced to stay where they cannot find work. The best solution is to make rural life more attractive by improving internet connections, transport and healthcare, and by offering incentives for businesses to locate outside big cities. With the rise of remote work, many young professionals could choose to live in the countryside if basic services were available. This would also reduce overcrowding and housing costs in cities.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are working at a bicycle rental shop. The owner is telling you what to say to customers.",
      sentences: [
        "Hello, welcome to our shop.",
        "Bikes can be rented by the hour.",
        "Helmets are included in the price.",
        "Please check the brakes before you leave.",
        "A map of the cycling routes is on the wall.",
        "If you have a flat tire, call us and we will bring you a replacement bike.",
        "Bikes must be returned before seven o'clock in the evening, or an extra charge will be added to your bill.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's habits related to music. The researcher will ask you some questions.",
      questions: [
        {
          text: "What kind of music do you enjoy, and when do you usually listen to it?",
          sample: "I enjoy many kinds of music, but I mostly listen to indie pop and traditional Turkish folk music. I usually listen to music when I'm commuting or exercising, because it makes the time pass quickly and gives me energy. When I'm studying, I prefer instrumental music, such as piano or film soundtracks, because songs with lyrics distract me. On weekends, I sometimes listen to my parents' old records with them.",
        },
        {
          text: "Do you prefer listening to music alone or going to live concerts? Why?",
          sample: "Most of the time I listen to music alone with headphones, because it's convenient and I can choose exactly what I want to hear. But I think live concerts are a completely different and special experience. The energy of the crowd, the sound and seeing the musicians perform make the music feel more alive. I try to go to a few concerts every year, especially small ones by local bands, which are cheaper and more personal.",
        },
        {
          text: "Some people think that every child should learn to play a musical instrument. Do you agree?",
          sample: "I agree that every child should have the opportunity to learn an instrument, but I don't think it should be forced. Learning music develops patience, concentration and coordination, and some research suggests it can help with other subjects, like mathematics. It can also become a source of joy for life. However, if children are pushed to practice an instrument they don't like, they may come to hate music. So schools should offer a variety of instruments and let children choose.",
        },
        {
          text: "How has technology changed the way people listen to music?",
          sample: "Technology has completely changed how we listen to music. In the past, people bought records or CDs and listened to whole albums. Now, streaming services give us access to millions of songs for a small monthly fee, and algorithms recommend new music based on our taste. This makes it easy to discover artists from all over the world. On the other hand, many musicians earn very little from streaming, and people may listen more casually, without paying full attention.",
        },
      ],
    },
  },
};
