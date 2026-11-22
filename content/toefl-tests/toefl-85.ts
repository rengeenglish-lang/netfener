import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 85 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_85: ToeflTest = {
  id: "toefl-85",
  no: 85,
  title: "TOEFL iBT Practice Test 85",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Ice skates",
          text: "People have been skating on ice for thousands of years. The earliest skates, found in northern Europe, were made from animal bo{{nes}} tied to the feet with leather str{{aps}}. These skates did not have sharp edges, so skaters had to push themselves along with long po{{les}}. In the Netherlands, during the Middle Ages, people began using skates with iron bla{{des}} attached to wooden platforms. The sharp edge allowed skaters to push with their le{{gs}} and move much faster. In winter, frozen canals became busy high{{ways}} where people skated to markets and to visit fri{{ends}}. Later, steel blades and boots made skating safer and easier to con{{trol}}. Today, ice skating is both a popular hob{{by}} and an Olympic sp{{ort}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Photos at my show",
          text: [
            "Hi Yasemin, my art exhibition opens on Friday evening at the student gallery! Since you're so good with a camera, would you mind taking some photos?",
            "I'd like to use them for my portfolio. The opening starts at 6, but could you come at 5:30 to take pictures before the crowd arrives?",
          ],
          questions: [
            { text: "What does the writer ask Yasemin to do?", options: ["take photos at the exhibition", "help hang paintings", "sell tickets", "bring snacks"], answer: 0 },
            { text: "Why does the writer want Yasemin to arrive at 5:30?", options: ["to take pictures before the crowd arrives", "to help set up chairs", "to meet the gallery owner", "to buy a painting"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Concert ticket office",
          text: [
            "UNIVERSITY CONCERT TICKETS",
            "Tickets for all concerts in the University Concert Hall can now be bought online or at the new ticket office in the lobby of the Music Building, open Monday to Friday from 11 a.m. to 6 p.m.",
            "Students receive free tickets for most concerts but must reserve them in advance. Any reserved tickets not collected fifteen minutes before a concert begins will be released to people waiting at the door.",
          ],
          questions: [
            { text: "Where is the new ticket office?", options: ["in the lobby of the Music Building", "in the library", "at the main gate", "in the student center"], answer: 0 },
            { text: "What must students do to get free tickets?", options: ["reserve them in advance", "show a receipt", "arrive one hour early", "join a club"], answer: 0 },
            { text: "What happens to reserved tickets not collected in time?", options: ["They are released to people waiting at the door.", "They are mailed to the student.", "They are refunded.", "They remain reserved."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The first suspension bridges",
          paragraphs: [
            "A suspension bridge is a bridge in which the road deck hangs from cables stretched between tall towers. The main cables pass over the towers and are anchored firmly to the ground at each end. Vertical cables, called suspenders, connect the main cables to the deck below. This design allows suspension bridges to span much longer distances than most other types of bridges.",
            "Simple suspension bridges have existed for centuries. In the Andes Mountains, the Inca built bridges from woven grass ropes, and in parts of Asia, people built bridges with iron chains. Modern suspension bridges developed in the early nineteenth century, when engineers began using iron chains and later steel cables to support heavier loads. One famous early example is the Menai Bridge in Wales, completed in 1826, which allowed ships with tall masts to pass beneath it.",
            "Engineers soon learned that long suspension bridges could be affected by wind. In 1940, the Tacoma Narrows Bridge in the United States began twisting violently in strong winds only months after it opened, and it eventually collapsed. Fortunately, no people were killed. Investigations showed that the bridge's deck was too thin and flexible, allowing the wind to create dangerous movements. After this disaster, engineers began testing bridge designs in wind tunnels and making decks stiffer and more aerodynamic. Today, some suspension bridges have main spans of more than two kilometers.",
          ],
          questions: [
            { text: "According to paragraph 1, what are suspenders?", options: ["vertical cables connecting the main cables to the deck", "the tall towers", "the road surface", "the ends of the bridge"], answer: 0 },
            { text: "According to paragraph 1, what is an advantage of suspension bridges?", options: ["They can span much longer distances.", "They are the cheapest bridges.", "They need no towers.", "They never move."], answer: 0 },
            { text: "The word \"anchored\" in paragraph 1 is closest in meaning to", options: ["fixed securely", "painted", "hidden", "removed"], answer: 0 },
            { text: "According to paragraph 3, why did the Tacoma Narrows Bridge collapse?", options: ["Its deck was too thin and flexible for the wind.", "It was hit by a ship.", "An earthquake destroyed it.", "It was overloaded with cars."], answer: 0 },
            { text: "What did engineers do after the Tacoma Narrows disaster?", options: ["They tested designs in wind tunnels and made decks stiffer.", "They stopped building suspension bridges.", "They used only grass ropes.", "They made bridges shorter."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My wobbly tooth",
          text: "When I was six years old, one of my front teeth became loo{{se}}. Every day, I moved it with my tong{{ue}}. My mother said it would fall out soon. One evening, while I was eating an app{{le}}, the tooth came out! I was surprised, but it did not hu{{rt}}. I washed the tooth and put it under my pil{{low}}. My parents told me that the tooth fairy would visit me at ni{{ght}}. In the morning, I found a small coin and a ti{{ny}} letter under the pillow. I was very hap{{py}}. Now I have a new tooth, and I am wait{{ing}} for the next one to fall o{{ut}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Juggling workshop",
          text: [
            "LEARN TO JUGGLE IN ONE AFTERNOON!",
            "Our juggling workshop is open to everyone aged 8 and over. It takes place on Sunday, June 8, from 2 to 4 p.m. in the park next to the City Theater.",
            "A professional circus performer will teach you how to juggle with balls and scarves. The workshop costs $12, and each participant takes home a set of three juggling balls.",
          ],
          questions: [
            { text: "Who can join the workshop?", options: ["everyone aged 8 and over", "only adults", "only circus performers", "only children under 8"], answer: 0 },
            { text: "Who will teach the workshop?", options: ["a professional circus performer", "a school teacher", "a sports coach", "an actor"], answer: 0 },
            { text: "What does each participant take home?", options: ["a set of three juggling balls", "a scarf", "a ticket to the circus", "a certificate"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How crocodiles care for their babies",
          paragraphs: [
            "Crocodiles are large reptiles that live in rivers, lakes and swamps in warm parts of the world. Many people think they are cold and dangerous, but crocodile mothers take good care of their babies.",
            "A female crocodile lays her eggs in a nest made of sand or plants near the water. She stays close to the nest for about three months to protect the eggs from animals that want to eat them.",
            "When the babies are ready to hatch, they make small sounds inside their eggs. The mother hears them and helps open the nest. Then she gently carries the babies to the water in her mouth. She may stay with them for several weeks or even months to keep them safe.",
          ],
          questions: [
            { text: "Where do crocodiles live?", options: ["in rivers, lakes and swamps in warm places", "in cold mountains", "in deserts only", "in the open ocean only"], answer: 0 },
            { text: "Where does a female crocodile lay her eggs?", options: ["in a nest near the water", "in the water", "in trees", "in caves"], answer: 0 },
            { text: "How long does the mother stay close to the nest?", options: ["about three months", "one day", "one week", "one year"], answer: 0 },
            { text: "The word \"gently\" in paragraph 3 is closest in meaning to", options: ["carefully and softly", "quickly", "angrily", "loudly"], answer: 0 },
            { text: "How does the mother carry the babies to the water?", options: ["in her mouth", "on her back", "in her tail", "with her feet"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The pratfall effect",
          text: "We might expect people to like others more when they appear perfect. However, research suggests that competent people can become more likable after making a small mis{{take}}. Psychologists call this the pratfall ef{{fect}}. In a classic experiment, participants listened to recordings of a person answering quiz ques{{tions}}. When a highly skilled contestant accidentally spilled coffee at the e{{nd}}, listeners rated him as more attractive than when no acci{{dent}} occurred. A small error may make an impressive person seem more hu{{man}} and approachable. However, the effect seems to work only for people who are already seen as compe{{tent}}; when an average person makes the same mis{{take}}, they are often judged less favo{{rably}}. Context therefore matters gre{{atly}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Exchange student buddy program",
          text: [
            "To: Current students",
            "From: International Office",
            "Subject: Become a buddy for an exchange student",
            "Each semester, more than two hundred exchange students arrive at our university from around the world. We are looking for volunteers to join our buddy program and help a new student settle in during their first weeks, for example by showing them around campus, explaining how local services work and introducing them to other students.",
            "Buddies are asked to meet their exchange student at least once a week during the first month. You do not need to speak another language, but you should be friendly, reliable and patient. All buddies are invited to a welcome dinner and receive priority places on the International Office's cultural trips. Applications close on August 15.",
          ],
          questions: [
            { text: "What will buddies do?", options: ["help new exchange students settle in", "teach language classes", "find housing for students", "grade exams"], answer: 0 },
            { text: "How often should buddies meet their exchange student during the first month?", options: ["at least once a week", "every day", "once a month", "only on the first day"], answer: 0 },
            { text: "What benefit do buddies receive?", options: ["priority places on cultural trips", "a salary", "free housing", "course credit"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The rise of space tourism",
          paragraphs: [
            "For most of the space age, only professional astronauts trained by government space agencies traveled beyond Earth's atmosphere. In recent years, however, private companies have begun offering flights to paying customers. Some offer brief suborbital trips that reach the edge of space for a few minutes of weightlessness and a view of Earth's curvature, while others have taken private passengers to the International Space Station for stays of several days.",
            "Supporters argue that space tourism could make space travel more accessible over time, just as early airline travel was once limited to the wealthy before becoming affordable for millions. The revenue from tourists may also help companies develop reusable rockets and other technologies that lower the cost of launching satellites and scientific missions. Some supporters believe that experiencing Earth from space, a phenomenon sometimes called the 'overview effect', could inspire greater concern for the planet's environment.",
            "Critics, however, point out that tickets currently cost hundreds of thousands or even millions of dollars, making space tourism available only to a very small group of wealthy people. Rocket launches also release greenhouse gases and soot particles into the upper atmosphere, where they may have a stronger warming effect than emissions at ground level, and the environmental impact could grow if the industry expands rapidly. There are also safety concerns, since accidents have occurred during test flights. As the industry grows, governments face the challenge of developing regulations to protect passengers, the public and the environment.",
          ],
          questions: [
            { text: "According to paragraph 1, what do suborbital trips offer?", options: ["a few minutes of weightlessness and a view of Earth's curvature", "long stays on the Moon", "trips to Mars", "jobs on space stations"], answer: 0 },
            { text: "Why does the author compare space tourism to early airline travel?", options: ["to suggest it could become more affordable over time", "to show that it is dangerous", "to argue that planes should be replaced", "to describe the first astronauts"], answer: 0 },
            { text: "What is the 'overview effect'?", options: ["a sense of concern for Earth inspired by seeing it from space", "a type of rocket engine", "a safety rule", "an illness caused by weightlessness"], answer: 0 },
            { text: "The word \"accessible\" in paragraph 2 is closest in meaning to", options: ["available to more people", "dangerous", "expensive", "secret"], answer: 0 },
            { text: "According to paragraph 3, why might rocket emissions be especially harmful?", options: ["They may have a stronger warming effect in the upper atmosphere.", "They contain no greenhouse gases.", "They make rockets heavier.", "They block satellite signals."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Ozan", prompt: "Why are you wearing a costume?", chunks: ["I", "am going", "to", "a fancy dress", "party tonight"], end: "." },
      { promptBy: "Rose", prompt: "Did you enjoy your first day at work?", chunks: ["everyone", "was", "friendly", "and", "very helpful"], end: "." },
      { promptBy: "Elif", prompt: "My neighbors are very noisy.", chunks: ["have you", "tried", "talking", "to them", "politely"], end: "?" },
      { promptBy: "Nick", prompt: "How did you hear about the job?", chunks: ["I", "saw", "an advertisement", "on", "the company website"], end: "." },
      { promptBy: "Hilal", prompt: "When does the film start?", chunks: ["it", "starts", "at", "half past", "eight"], end: "." },
      { promptBy: "Max", prompt: "Why is the library so quiet today?", chunks: ["most students", "have", "gone home", "for", "the holidays"], end: "." },
      { promptBy: "Sibel", prompt: "What did you think of the speaker?", chunks: ["her", "ideas", "were", "fresh and", "inspiring"], end: "." },
      { promptBy: "Sean", prompt: "Where should I leave my bike?", chunks: ["you", "can lock it", "outside", "the main", "building"], end: "." },
      { promptBy: "Zeynep", prompt: "This hill is too steep.", chunks: ["should", "we", "take", "a short", "break"], end: "?" },
      { promptBy: "Andy", prompt: "Why did you decide to move to the countryside?", chunks: ["I", "wanted", "a quieter", "and healthier", "life"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently borrowed an expensive camera from your university's media center for a class project. Unfortunately, the camera's lens cap was lost while you were filming. You want to write to the media center.",
      to: "the media center manager, Mr. Wilson",
      subject: "Lost lens cap from borrowed camera",
      tasks: ["Explain when and why you borrowed the camera.", "Describe what happened.", "Offer a solution."],
      sample: "Dear Mr. Wilson,\n\nOn Monday, I borrowed a Canon digital camera, number C-14, from the media center for a documentary project for my Film Studies course. I returned the camera this morning, as planned, but I need to let you know about a problem.\n\nOn Wednesday, my group was filming interviews in the park next to the river. It was very windy, and at some point the lens cap must have fallen off the camera bag. We searched the area carefully for almost an hour, and we also asked the park staff, but we could not find it. The camera itself was not damaged in any way, and we were very careful with all the other equipment.\n\nI am very sorry for this. I would like to pay for a replacement lens cap, or if you prefer, I can buy the same model from a camera shop and bring it to the media center. Please let me know which option you would prefer and how much it will cost.\n\nThank you for your understanding.\n\nSincerely,\nBerkay Aslan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Kim",
        text: "Some people think that older adults should continue working past the traditional retirement age if they are healthy and want to. Others believe that people should retire earlier to make room for younger workers and to enjoy their later years. Should people be encouraged to work beyond the traditional retirement age? Explain your view.",
      },
      students: [
        { name: "Laura", text: "Yes. Many older people have valuable experience, and working keeps them active and connected. It also helps pension systems." },
        { name: "Arda", text: "No. Young people already struggle to find jobs. When older workers stay longer, there are fewer opportunities for young graduates." },
      ],
      sample: "I believe people should be allowed and encouraged to work beyond the traditional retirement age if they are healthy and want to, but it should be a choice rather than a requirement. Laura is right that older workers bring valuable experience and knowledge, which can benefit companies and younger colleagues. Continuing to work can also help older people stay mentally active, maintain social connections and feel a sense of purpose. With populations aging in many countries, longer working lives can also ease pressure on pension systems. However, Arda's concern about young workers deserves attention. Research suggests that older people staying in work does not necessarily reduce jobs for young people, since economies are not fixed in size. Nevertheless, governments could support both groups, for example by encouraging flexible part-time roles for older workers and mentoring programs that connect them with young employees.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-GuyNeural",
    repeat: {
      scene: "You are a new staff member at an ice skating rink. The manager is telling you what to say to visitors.",
      sentences: [
        "Welcome to the ice rink.",
        "Skates can be rented at the counter.",
        "Please wear gloves on the ice.",
        "Children under ten must wear helmets.",
        "The ice is cleaned every two hours.",
        "If you are a beginner, you can use the plastic supports near the entrance to help you balance.",
        "Group lessons for children and adults take place every Saturday morning, and the first lesson is free for new students.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about entertainment and the arts. The researcher will ask you some questions.",
      questions: [
        {
          text: "What kind of entertainment do you enjoy most?",
          sample: "The kind of entertainment I enjoy most is watching live theater. There's something special about seeing actors perform in front of you, and every performance is slightly different. I especially like comedies and musicals because they make me laugh and lift my mood. I also enjoy watching series at home, but going to the theater feels like a special event, especially with friends.",
        },
        {
          text: "Do you prefer watching films at home or in the cinema?",
          sample: "I usually watch films at home because it's cheaper and more comfortable, and I can pause the film whenever I want. However, for big action films or films with amazing visual effects, I prefer the cinema. The large screen and powerful sound system make the experience much more exciting. Going to the cinema is also a nice social activity with friends.",
        },
        {
          text: "Should governments financially support the arts?",
          sample: "Yes, I think governments should support the arts. Museums, theaters and orchestras often cannot survive on ticket sales alone, and without public funding, many would close or become too expensive for ordinary people. The arts are an important part of a country's culture and identity, and they also attract tourists. Government support can also help young artists start their careers and make art accessible in small towns, not only in big cities.",
        },
        {
          text: "How has technology changed the way people enjoy music and films?",
          sample: "Technology has completely changed how people enjoy music and films. Today, we can stream almost any song or film instantly on our phones, without buying CDs or DVDs. This makes entertainment more accessible and allows people to discover artists from all over the world. However, some people feel that this has made music and films less special, because we consume so much content quickly. Live concerts and cinema trips have become even more valuable as shared experiences.",
        },
      ],
    },
  },
};
