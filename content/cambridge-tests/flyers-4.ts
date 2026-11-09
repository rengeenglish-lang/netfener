import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 4. Original Netfener content. */
export const FLYERS_4: CambridgeTest = {
  id: "flyers-4",
  level: "flyers",
  no: 4,
  title: "A2 Flyers · Practice Test 4",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 40,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "definitions",
            instruction: "Look and read. Choose the correct word for each sentence. There are some extra words.",
            bank: [
              { word: "a pilot", e: "🧑‍✈️" },
              { word: "a desert", e: "🏜️" },
              { word: "an envelope", e: "✉️" },
              { word: "a museum", e: "🏛️" },
              { word: "a volcano", e: "🌋" },
              { word: "a journalist", e: "📰" },
              { word: "a tent", e: "⛺" },
              { word: "a wallet", e: "👛" },
              { word: "a telescope", e: "🔭" },
              { word: "a dictionary", e: "📕" },
              { word: "an engineer", e: "👷" },
              { word: "a suitcase", e: "🧳" },
              { word: "a factory", e: "🏭" },
              { word: "a compass", e: "🧭" },
            ],
            items: [
              { text: "This person flies planes and takes people to other countries.", answer: "a pilot" },
              { text: "It is very hot and dry here, and there is lots of sand.", answer: "a desert" },
              { text: "You put a letter inside this before you post it.", answer: "an envelope" },
              { text: "You can see old and interesting things in this building.", answer: "a museum" },
              { text: "This mountain sometimes has fire and hot rocks coming out of the top.", answer: "a volcano" },
              { text: "This person writes stories for newspapers or websites.", answer: "a journalist" },
              { text: "People sleep in this when they go camping.", answer: "a tent" },
              { text: "You can look at the stars and planets with this.", answer: "a telescope" },
              { text: "You can find the meanings of words in this book.", answer: "a dictionary" },
              { text: "You put your clothes in this when you go on holiday.", answer: "a suitcase" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Harry", "Zoe"],
            items: [
              { line: "Zoe, what are you doing this weekend?", options: ["I'm going camping with my family.", "I went to the beach.", "It's on Sunday."], answer: 0 },
              { line: "Where are you going to camp?", options: ["Next to a lake in the mountains.", "In a big tent.", "For two nights."], answer: 0 },
              { line: "Have you ever been camping before?", options: ["Yes, I'm camping now.", "No, this is my first time.", "I'll go tomorrow."], answer: 1 },
              { line: "What are you going to do there?", options: ["We're going to fish and go for long walks.", "We went by car.", "It was really exciting."], answer: 0 },
              { line: "Don't forget to take a torch!", options: ["It's my torch.", "Thanks, I'll put it in my bag now.", "I can't see the lake."], answer: 1 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Oliver's grandfather was a {1} when he was young, and he often told stories about his trips on the ocean. One rainy afternoon, Oliver found an old wooden box in the attic.",
              "Inside the box, there was a {2} of an island with a red cross on it. 'Is this a treasure map?' Oliver asked. His grandfather {3} and said, 'Let's find out!'",
              "The next weekend, they took a small boat to the island. They walked through the forest and found a big rock next to the red cross. Under the rock, they {4} a small metal tin. Inside, there wasn't any gold. There was a {5} of Oliver's grandmother and grandfather on their wedding day!",
            ],
            bank: [
              { word: "sailor", e: "⛵" },
              { word: "map", e: "🗺️" },
              { word: "smiled", e: "😊" },
              { word: "discovered", e: "🔍" },
              { word: "photo", e: "📷" },
              { word: "doctor", e: "🩺" },
              { word: "forgot", e: "🤔" },
              { word: "bottle", e: "🍾" },
            ],
            answers: ["sailor", "map", "smiled", "discovered", "photo"],
            titleQuestion: { options: ["Grandfather's secret treasure", "A storm at sea", "Oliver learns to swim"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Elephants",
            text: [
              "Elephants are the biggest animals that live {1} land. There are two main kinds: African elephants and Asian elephants. African elephants have bigger ears, {2} help them to stay cool in the hot sun.",
              "An elephant's trunk is very useful. Elephants use it to breathe, smell, drink and pick {3} food. They can also use it to say hello to {4} elephants!",
              "Elephants live in family groups. The oldest female is the leader, and she remembers {5} to find water when it hasn't rained for a long time. Baby elephants drink their mothers' milk {6} about two years.",
              "Elephants eat for up to sixteen hours a day. An adult elephant can eat {7} than 150 kilograms of plants every day! Sadly, there are fewer elephants today {8} there were a hundred years ago. Many people are working hard to protect {9}, so that our children {10} still be able to see them in the future.",
            ],
            gaps: [
              { options: ["on", "in", "at"], answer: 0 },
              { options: ["which", "who", "what"], answer: 0 },
              { options: ["up", "out", "off"], answer: 0 },
              { options: ["other", "another", "others"], answer: 0 },
              { options: ["where", "when", "who"], answer: 0 },
              { options: ["for", "since", "during"], answer: 0 },
              { options: ["more", "most", "much"], answer: 0 },
              { options: ["than", "then", "that"], answer: 0 },
              { options: ["them", "their", "they"], answer: 0 },
              { options: ["will", "did", "are"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story. Complete the sentences. Write 1, 2, 3 or 4 words.",
            text: [
              "Every year, Sophie's school has a talent show. This year, Sophie wanted to play the violin, but she was very nervous because she had never played in front of so many people.",
              "Her music teacher, Mr Jones, gave her some good advice. 'Practise in front of your family first,' he said. So every evening, Sophie played for her parents and her little brother in the living room.",
              "On the night of the show, the hall was full. When Sophie walked onto the stage, her hands were shaking. Then she saw her brother in the front row. He was holding a sign that said 'GO SOPHIE!'",
              "Sophie smiled and started to play. When she finished, everyone clapped and cheered. She didn't win first prize, but the head teacher asked her to play at the school's summer concert.",
            ],
            items: [
              { question: "Sophie wanted to play ______ in the talent show.", answers: ["the violin", "violin"] },
              { question: "Sophie was nervous because she had never played in front of ______.", answers: ["so many people", "many people", "lots of people"] },
              { question: "Mr Jones told Sophie to practise in front of ______ first.", answers: ["her family", "family"] },
              { question: "Sophie practised every evening in ______.", answers: ["the living room", "living room"] },
              { question: "Sophie's brother sat in ______.", answers: ["the front row", "front row"] },
              { question: "Sophie's brother was holding ______.", answers: ["a sign", "sign"] },
              { question: "The head teacher asked Sophie to play at ______.", answers: ["the summer concert", "the school's summer concert", "summer concert"] },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "Read the diary and write the missing words. Write one word on each line.",
            title: "Leo's diary",
            text: [
              "Saturday. This morning, my dad and I went {1} the new science museum in town. We saw a real rocket and learned how astronauts live in space. {2} best part was the room where you can feel what it's like to walk on the moon. After that, we had lunch in the museum café. I had a burger and Dad had {3} salad. Before we left, Dad bought {4} a book about planets. I want to go back next month {5} my best friend.",
            ],
            answers: [["to"], ["the"], ["a", "some"], ["me"], ["with"]],
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write about this story. Write 20 or more words.",
            pics: [
              { e: "👦⚽🌳", label: "1" },
              { e: "⚽🪟💥", label: "2" },
              { e: "👦👵🍪", label: "3" },
            ],
            minWords: 20,
            checklist: ["My story talks about all three pictures.", "I used the past simple (played, broke, said …).", "I wrote 20 or more words."],
            sample: "Tom was playing football in the park. He kicked the ball very hard and it broke an old woman's window. Tom said sorry, and the woman gave him some cookies because he was honest.",
          },
        },
      ],
    },
  ],
};
