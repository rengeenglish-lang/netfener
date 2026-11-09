import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 3 (Reading and Writing papers). Original Netfener content. */
export const PRELIMINARY_3: CambridgeTest = {
  id: "preliminary-3",
  level: "preliminary",
  no: 3,
  title: "B1 Preliminary · Practice Test 3",
  papers: [
    {
      id: "reading",
      name: "Reading",
      minutes: 45,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "mcq",
            instruction: "For each question, choose the correct answer.",
            items: [
              {
                notice: { genre: "Notice", lines: ["ART COMPETITION", "Entries must be original work by the student and should not be larger than A3. Deadline: 30 April."] },
                question: "What does the notice say about competition entries?",
                options: ["Students must create the work themselves.", "Pictures must be exactly A3 in size.", "Students can enter after 30 April."],
                answer: 0,
              },
              {
                notice: { genre: "Message", lines: ["Max – The plumber can't come until Thursday, so don't use the downstairs shower. The one upstairs is fine. Mum"] },
                question: "What is Mum telling Max?",
                options: ["He should use a different shower until the problem is fixed.", "He needs to call the plumber on Thursday.", "Both showers are broken this week."],
                answer: 0,
              },
              {
                notice: { genre: "Notice", lines: ["TRAIN STATION", "Due to engineering work, passengers for Oxford should change at Reading this weekend. Journey times may be up to 30 minutes longer."] },
                question: "What should passengers travelling to Oxford do this weekend?",
                options: ["take two trains instead of one", "travel 30 minutes earlier than usual", "go by bus to Reading"],
                answer: 0,
              },
              {
                notice: { genre: "Email", lines: ["Hi Lucy,", "I've finished the history presentation slides. Could you check the dates on slides 4 and 5 before tomorrow? I'm not sure they're right.", "Kemal"] },
                question: "What does Kemal want Lucy to do?",
                options: ["check some information in the presentation", "finish the last two slides", "give the presentation tomorrow"],
                answer: 0,
              },
              {
                notice: { genre: "Label", lines: ["Take one tablet twice a day with food.", "Do not take more than four tablets in 24 hours."] },
                question: "What does the label say?",
                options: ["The tablets should be taken at mealtimes.", "You can take four tablets at the same time.", "Take the tablets on an empty stomach."],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "The young people below all want to go on a summer course. Read the descriptions of eight courses. Decide which course would be the most suitable for each person.",
            options: [
              { title: "Code Camp", text: "Learn to build your own website and simple apps in two weeks. Laptops are provided. Morning sessions only, so afternoons are free." },
              { title: "Wild Explorers", text: "Two weeks of hiking, camping and wildlife spotting in the national park. You'll sleep in tents and learn survival skills." },
              { title: "Stage School", text: "Daily acting, singing and dance classes, ending with a performance for families. Open to all levels." },
              { title: "Lens and Light", text: "A one-week photography course in the city. Bring your own camera. Includes a trip to a famous photographer's studio." },
              { title: "Kitchen Science", text: "Discover the science behind cooking through experiments with food. Afternoon sessions for one week." },
              { title: "Sea Skills", text: "Learn to sail and kayak on the coast. You must be able to swim. Two weeks, staying in a seaside hostel." },
              { title: "Language Lab", text: "Intensive Spanish or Italian classes for beginners, with cultural activities like cooking and dance in the evenings." },
              { title: "Young Writers", text: "Work with published authors to write your own short stories. Your best story will appear in a printed collection." },
            ],
            items: [
              { text: "Ece loves being outdoors and wants an adventure in nature. She doesn't mind sleeping outside and would like to learn useful skills for the wild.", answer: 1 },
              { text: "Jonas wants to learn a new language from the start, and he'd also like to experience the culture of the countries where it is spoken.", answer: 6 },
              { text: "Mira dreams of becoming an author and would love to see her work in a real book.", answer: 7 },
              { text: "Leo is interested in technology and wants to create something online. He has a part-time job in the afternoons.", answer: 0 },
              { text: "Selin is a strong swimmer who loves the sea and wants to try water sports she has never done before.", answer: 5 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the text and questions below. For each question, choose the correct answer.",
            text: {
              title: "Running my first marathon",
              paragraphs: [
                "Two years ago, I couldn't run for more than five minutes without stopping. I'd never been sporty at school, and I always found excuses not to exercise. Then my best friend Anna told me she was going to run a marathon to raise money for a children's hospital, and she asked me to join her. I laughed and said no.",
                "But Anna didn't give up. She showed me a training plan that started with just ten minutes of slow running, three times a week. 'Anyone can do this,' she said. Eventually, I agreed to try it for one month, mainly so she would stop asking.",
                "To my surprise, I started to enjoy it. After a few weeks, I could run for half an hour, and I felt more energetic and slept better. There were difficult moments, of course. In winter, it was hard to leave the house on cold, dark mornings, and once I hurt my knee and had to rest for two weeks.",
                "On the day of the marathon, I was terrified. The last ten kilometres were the hardest thing I've ever done, but Anna stayed with me the whole way. When we crossed the finish line together, I cried. We raised over £3,000 for the hospital, and I've already signed up for next year's race.",
              ],
            },
            items: [
              { question: "How did the writer react when Anna first asked her to run a marathon?", options: ["She didn't take the idea seriously.", "She was excited to try it.", "She said she was too busy.", "She suggested a shorter race."], answer: 0 },
              { question: "Why did the writer finally agree to start training?", options: ["She wanted Anna to stop asking her.", "Her doctor told her to exercise.", "She wanted to lose weight.", "The hospital asked her to help."], answer: 0 },
              { question: "What does the writer say about her training?", options: ["It had positive effects on her daily life.", "It was easy from start to finish.", "She trained only in good weather.", "She never had any injuries."], answer: 0 },
              { question: "What helped the writer during the marathon?", options: ["Her friend running beside her", "Advice from a professional coach", "People cheering at the finish", "Thinking about the money she had raised"], answer: 0 },
              { question: "What would be the best title for this text?", options: ["From non-runner to marathon finisher", "How to avoid running injuries", "Why I'll never run again", "Running for beginners: a training plan"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "Animals in the city",
            text: [
              "When we think of wild animals, we usually imagine forests, mountains or the open sea. {1} In fact, many species are now living successfully in towns and cities around the world.",
              "Foxes are a good example. In London alone, there are thought to be around 10,000 of them. {2} They have learned to find food in rubbish bins and gardens, and they make their homes under sheds and in quiet corners of parks.",
              "Birds have also adapted to city life. Some, like pigeons, have lived alongside humans for centuries. {3} Scientists have found that city birds often sing at a higher pitch so that they can be heard above the noise of traffic.",
              "Not everyone is happy about these new neighbours, however. {4} Others worry that some animals could spread disease.",
              "Experts say that the best approach is to learn to live with urban wildlife. {5} Simple actions, such as planting trees and leaving small gaps in fences, can help animals move around safely.",
            ],
            sentences: [
              "But cities are becoming important places for wildlife too.",
              "They first moved into the city in the 1930s and are now a common sight at night.",
              "Others, such as peregrine falcons, have only recently started nesting on tall buildings.",
              "Some people complain that foxes make a mess and keep them awake at night.",
              "Cities can provide food and shelter if we plan them carefully.",
              "Foxes are very rarely seen in the countryside.",
              "Pigeons were once used to carry messages during wars.",
              "Most wild animals are afraid of bright lights.",
            ],
            answers: [0, 1, 2, 3, 4],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Street food",
            text: [
              "In many countries, street food is an important {1} of daily life. In cities such as Bangkok and Istanbul, people buy snacks and meals from small stalls on almost every corner.",
              "Street food is usually cheap and quick, and it often gives visitors a {2} of real local cooking. Many travellers say it's one of the best ways to {3} a new culture.",
              "Some people worry about whether street food is safe to eat. A good {4} is to choose stalls where lots of local people are queuing, because it usually means the food is fresh. It's also wise to {5} sure the food is cooked in front of you. If you follow these simple rules, you're {6} to have a delicious and memorable experience.",
            ],
            gaps: [
              { options: ["part", "piece", "side", "bit"], answer: 0 },
              { options: ["taste", "flavour", "smell", "sense"], answer: 0 },
              { options: ["experience", "attend", "practise", "join"], answer: 0 },
              { options: ["tip", "point", "sign", "plan"], answer: 0 },
              { options: ["make", "be", "get", "do"], answer: 0 },
              { options: ["likely", "possible", "probable", "able"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Our school garden",
            text: [
              "Two years ago, our school decided to turn an empty piece of land {1} a garden. At first, only a few students were interested, but now more than fifty of us help regularly.",
              "We grow vegetables, fruit and flowers. The vegetables are used in the school kitchen, {2} means our lunches are much healthier than before. We've {3} built a small pond, and frogs and dragonflies have already arrived.",
              "Working in the garden has taught me a lot about nature. I didn't know {4} long it takes for a tomato plant to grow, or how important bees are. Next year, we're hoping to sell some of our vegetables {5} parents to raise money for new tools. If you have a school, why not start a garden {6}?",
            ],
            answers: [["into"], ["which"], ["also"], ["how"], ["to"], ["too", "yourself", "there"]],
          },
        },
      ],
    },
    {
      id: "writing",
      name: "Writing",
      minutes: 45,
      parts: [
        {
          title: "Part 1 · Email",
          task: {
            kind: "writing",
            instruction: "Read this email from your English-speaking friend Daniel and the notes you have made. Write your email to Daniel using all the notes. Write about 100 words.",
            input: {
              from: "Daniel",
              subject: "Summer plans",
              lines: [
                "My family is going to rent a house by the sea in August, and we'd love you to come with us! [Thank Daniel]",
                "Would you prefer to go for one week or two? [Say which and why]",
                "There's a lot to do there. What would you like to try? [Suggest]",
                "Do you need anything special, like food you can't eat? [Tell Daniel]",
              ],
            },
            minWords: 100,
            checklist: ["I answered all four notes.", "I opened and closed the email in a friendly way.", "I gave reasons and used linking words.", "I wrote about 100 words."],
            sample:
              "Hi Daniel,\n\nThank you so much for inviting me! I'd love to come to the seaside with your family.\n\nI think one week would be best, because my parents want to visit my grandparents at the end of August, and I should go with them.\n\nI've always wanted to try surfing, so if there's a surf school nearby, that would be amazing. I'd also like to go kayaking or explore the coast on bikes.\n\nI don't need anything special, but I'm allergic to nuts, so please tell your parents.\n\nI can't wait!\nCem",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for young people. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Can technology make us happier?",
              lines: ["Does technology make our lives better or worse?", "How do you use technology every day?", "Write an article and tell us what you think!"],
            },
            minWords: 100,
            checklist: ["My article has a title and speaks to the reader.", "I gave my opinion with examples.", "I used linking words such as 'however' and 'for example'.", "I wrote about 100 words."],
            sample:
              "Happy with my phone? Sometimes!\n\nI use technology every day. I chat with friends, listen to music and watch videos when I'm bored. It definitely makes some things easier and more fun. For example, I can video-call my cousin in Germany for free.\n\nHowever, I don't think technology always makes us happier. When I spend hours scrolling through social media, I often feel tired and a bit sad, because everyone else's life seems perfect.\n\nIn my opinion, technology is like chocolate: a little is great, but too much is bad for you. What do you think?",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The phone rang in the middle of the night.' Write your story in about 100 words.",
            minWords: 100,
            checklist: ["My story begins with the sentence I was given.", "It has a clear beginning, middle and end.", "I used interesting adjectives and past tenses.", "I wrote about 100 words."],
            sample:
              "The phone rang in the middle of the night. Leyla woke up, her heart beating fast. Nobody ever called so late.\n\nIt was her uncle, who worked at the zoo. 'Leyla, I need your help,' he said. 'One of the baby monkeys has escaped, and I think it's hiding in your garden.'\n\nLeyla grabbed a torch and a banana and ran outside. In the old apple tree, she saw two shining eyes. Slowly, she held out the banana, and the little monkey climbed down into her arms.\n\nWhen her uncle arrived, he couldn't stop smiling. 'You're a natural zookeeper!'",
          },
        },
      ],
    },
  ],
};
