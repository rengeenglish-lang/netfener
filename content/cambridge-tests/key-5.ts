import type { CambridgeTest } from "./types";

/** A2 Key practice test 5 (Reading & Writing). Original Netfener content. */
export const KEY_5: CambridgeTest = {
  id: "key-5",
  level: "key",
  no: 5,
  title: "A2 Key · Practice Test 5",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 60,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "mcq",
            instruction: "For each question, choose the correct answer.",
            items: [
              {
                notice: { genre: "Notice", lines: ["SCHOOL LIBRARY", "Please return all books by 20 June.", "Students with late books cannot get their exam results."] },
                question: "What does the notice say?",
                options: ["Students must bring books back before a certain date.", "The library will close on 20 June.", "Exam results are in the library."],
                answer: 0,
              },
              {
                notice: { genre: "Text message", lines: ["Leo – the cinema's full tonight. Shall we go tomorrow instead? Same time? Ren"] },
                question: "What does Ren suggest?",
                options: ["seeing the film on a different day", "meeting at a different time tonight", "going to a different cinema"],
                answer: 0,
              },
              {
                notice: { genre: "Sign", lines: ["SPORTS CENTRE", "Tennis courts must be booked online at least one day before."] },
                question: "What must you do to play tennis?",
                options: ["reserve a court the day before or earlier", "pay at the sports centre on the day", "bring your own tennis balls"],
                answer: 0,
              },
              {
                notice: { genre: "Email", lines: ["Hi everyone,", "The class trip to the castle is now on Thursday because of the bad weather on Wednesday. Everything else stays the same.", "Mr Ortiz"] },
                question: "What has changed?",
                options: ["the day of the trip", "the place the class is visiting", "the time the bus leaves"],
                answer: 0,
              },
              {
                notice: { genre: "Notice", lines: ["LOST PROPERTY", "Found: black backpack in Room 12 on Monday.", "Ask at reception to collect it."] },
                question: "What should the owner of the backpack do?",
                options: ["go to reception", "look in Room 12", "wait until Monday"],
                answer: 0,
              },
              {
                notice: { genre: "Advertisement", lines: ["DANCE CLASSES", "Beginners welcome! First lesson free.", "Every Tuesday and Thursday, 6–7 p.m."] },
                question: "What does the advertisement say?",
                options: ["You don't have to pay for your first class.", "Classes are only for experienced dancers.", "There is one class every week."],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Oscar",
                text: "Last summer I stayed with a family in Spain for a month. I went to a language school every morning and explored the city in the afternoons. The food was amazing, but it was hotter than I expected. I still write to my host family every month.",
              },
              {
                title: "Aisha",
                text: "In July I went on a camping holiday in Scotland with my school. We walked up mountains and slept in tents. It rained almost every day, so our clothes were always wet! But I made lots of new friends, and we still meet up.",
              },
              {
                title: "Kenji",
                text: "My family drove around Italy for two weeks. We visited six cities, and I took hundreds of photos. My favourite was Venice. The worst part was the long hours in the car, but my little sister and I played games to pass the time.",
              },
            ],
            items: [
              { text: "studied during their holiday?", answer: 0 },
              { text: "had bad weather?", answer: 1 },
              { text: "travelled with people from their school?", answer: 1 },
              { text: "is still in contact with the people they stayed with?", answer: 0 },
              { text: "found the travelling boring?", answer: 2 },
              { text: "was surprised by the temperature?", answer: 0 },
              { text: "visited many different places?", answer: 2 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "Cooking for her community",
              paragraphs: [
                "Fifteen-year-old Isla has always loved cooking. 'My grandmother taught me when I was small,' she says. 'We made bread together every Sunday.' But last year, Isla decided to use her cooking skills to help other people.",
                "She noticed that some older people in her town lived alone and didn't often eat a proper meal. So she asked the owner of a local café if she could use the kitchen on Sunday afternoons when it was closed. He said yes immediately.",
                "Now, every Sunday, Isla and four friends cook soup and pasta for about thirty people. A local supermarket gives them vegetables for free, and volunteers drive the meals to people's homes.",
                "'The best part is chatting with the people we cook for,' Isla says. 'Some of them have amazing stories. One man told me he used to be a chef on a ship!' Isla hopes to study cooking at college and open her own restaurant one day.",
              ],
            },
            items: [
              { question: "Who first taught Isla to cook?", options: ["her grandmother", "a café owner", "a school teacher"], answer: 0 },
              { question: "Why did Isla start her project?", options: ["She wanted to help older people eat well.", "She needed money for college.", "The café needed a new cook."], answer: 0 },
              { question: "How did the café owner react to Isla's idea?", options: ["He agreed straight away.", "He asked her to pay to use the kitchen.", "He wanted to cook with her."], answer: 0 },
              { question: "How do the meals get to people?", options: ["Volunteers take them by car.", "People come to the café.", "Isla delivers them on foot."], answer: 0 },
              { question: "What does Isla enjoy most?", options: ["talking to the people she cooks for", "trying new recipes", "working in a big kitchen"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Pandas",
            text: [
              "Giant pandas live in the mountain forests of China. They are easy to {1} because of their black and white fur.",
              "Pandas spend most of the day eating. Their main food is bamboo, and an adult panda can eat up to 38 kilograms of it every day. Because bamboo doesn't {2} much energy, pandas move slowly and rest a lot.",
              "For many years, pandas were in danger because people cut down the forests where they lived. Now the Chinese government {3} the forests, and the number of pandas is slowly {4}.",
              "Baby pandas are very small when they are born – about the {5} of a stick of butter! They stay with their mothers for about two years before they {6} to live alone.",
            ],
            gaps: [
              { options: ["recognise", "know", "realise"], answer: 0 },
              { options: ["give", "make", "take"], answer: 0 },
              { options: ["protects", "saves", "keeps"], answer: 0 },
              { options: ["growing", "rising", "raising"], answer: 0 },
              { options: ["size", "height", "length"], answer: 0 },
              { options: ["begin", "enjoy", "finish"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Email",
            text: [
              "Dear Uncle Tom,",
              "Thanks so much {1} the tickets to the football match! Dad and I went last Saturday, and it was fantastic. Our team won 3–1, and the last goal was amazing.",
              "We got {2} the stadium early so we could watch the players warming up. One of them even waved {3} us! After the match, we bought scarves {4} the shop, and I'm wearing mine now.",
              "When are you coming to visit? I'd love to show you {5} photos I took. Maybe we {6} go to a match together next time!",
              "Love,",
              "Kerem",
            ],
            answers: [["for"], ["to"], ["at", "to"], ["from", "in", "at"], ["the", "my", "some", "all"], ["can", "could", "will", "should"]],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Your English friend, Chris, is coming to your town next week. Write a note to Chris. Write 25 words or more.",
            prompts: ["Suggest a place to meet.", "Say what time to meet.", "Say what you can do together."],
            minWords: 25,
            checklist: ["I wrote about all three points.", "I used a friendly greeting and ending.", "I wrote 25 words or more."],
            sample: "Hi Chris,\n\nLet's meet outside the big shopping centre next to the station. Can you be there at 11 o'clock on Saturday? We can have lunch and then go to the new skate park.\n\nSee you soon,\nArda",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              { e: "👦🎒🚌", label: "1" },
              { e: "🚌🎒😱", label: "2" },
              { e: "👩‍🦰🎒😄", label: "3" },
            ],
            minWords: 35,
            checklist: ["My story talks about all three pictures.", "I used past tenses and linking words like 'when', 'then' and 'so'.", "I wrote 35 words or more."],
            sample: "Last Monday, Can took the bus to school. He was tired, so he fell asleep. When he got off the bus, he forgot his bag. He was very worried because his homework was in it. Then a kind woman ran after him with the bag, and Can was very happy.",
          },
        },
      ],
    },
  ],
};
