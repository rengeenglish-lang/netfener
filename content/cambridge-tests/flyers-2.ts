import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 2. Original Netfener content. */
export const FLYERS_2: CambridgeTest = {
  id: "flyers-2",
  level: "flyers",
  no: 2,
  title: "A2 Flyers · Practice Test 2",
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
              { word: "a journalist", e: "📰" },
              { word: "a volcano", e: "🌋" },
              { word: "an airport", e: "🛫" },
              { word: "a thermometer", e: "🌡️" },
              { word: "a hotel", e: "🏨" },
              { word: "an astronaut", e: "🧑‍🚀" },
              { word: "a compass", e: "🧭" },
              { word: "a wallet", e: "👛" },
              { word: "a forest", e: "🌲" },
              { word: "an umbrella", e: "☂️" },
              { word: "a newspaper", e: "🗞️" },
              { word: "a dentist", e: "🦷" },
              { word: "a cave", e: "🕳️" },
              { word: "a stamp", e: "📮" },
            ],
            items: [
              { text: "This person travels into space.", answer: "an astronaut" },
              { text: "You can stay here when you are on holiday and don't have a house there.", answer: "a hotel" },
              { text: "This mountain can send hot rock and smoke into the sky.", answer: "a volcano" },
              { text: "This shows you which way is north.", answer: "a compass" },
              { text: "You use this to find out how hot or cold something is.", answer: "a thermometer" },
              { text: "Planes take off and land at this place.", answer: "an airport" },
              { text: "This person writes stories about the news.", answer: "a journalist" },
              { text: "There are lots of trees in this place.", answer: "a forest" },
              { text: "You can keep your money in this.", answer: "a wallet" },
              { text: "This is a dark hole in the side of a mountain or under the ground.", answer: "a cave" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Mr Hall", "Sophia"],
            items: [
              { line: "Sophia, have you finished your science project?", options: ["Nearly. I just need to add some pictures.", "Science is on Tuesday.", "I've got a new pen."], answer: 0 },
              { line: "What is it about?", options: ["It's very long.", "How plants grow in different places.", "I did it with my brother."], answer: 1 },
              { line: "Did you do any experiments?", options: ["Yes, I grew beans in the dark and in the light.", "No, I'm not hungry.", "I don't know her."], answer: 0 },
              { line: "Which beans grew better?", options: ["They were green.", "The ones near the window, of course!", "I bought them at the market."], answer: 1 },
              { line: "Great. Can you show it to the class on Friday?", options: ["Yes, I'd love to.", "It was Friday yesterday.", "No, it isn't mine."], answer: 0 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Harry and his sister Kim were staying with their grandparents near the sea. One morning, they decided to explore the {1} at the end of the beach.",
              "They took a torch and walked carefully over the wet rocks. Inside, it was dark and quiet. Suddenly, Kim saw something {2} on the ground. It was an old metal box! Harry tried to open it, but it was {3}.",
              "They carried the box back to the house. Grandpa looked at it and smiled. 'I {4} this box here when I was ten years old,' he said. He found a small key in a drawer and opened it. Inside, there were some old coins, a photo and a {5} that Grandpa had written to his future self.",
            ],
            bank: [
              { word: "cave", e: "🕳️" },
              { word: "shining", e: "✨" },
              { word: "locked", e: "🔒" },
              { word: "hid", e: "🙈" },
              { word: "letter", e: "✉️" },
              { word: "sandwich", e: "🥪" },
              { word: "sold", e: "💰" },
              { word: "noisy", e: "🔊" },
            ],
            answers: ["cave", "shining", "locked", "hid", "letter"],
            titleQuestion: { options: ["Grandpa's secret box", "A day of swimming", "The broken torch"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Bicycles",
            text: [
              "The first bicycles were made in Germany about two hundred years ago. They didn't {1} pedals, so people pushed them along with their feet.",
              "Later, bicycles got pedals, and some had a very big front wheel and a small back one. These bikes were fast, but they were {2} dangerous, and people often fell off.",
              "The bicycles {3} we ride today, with two wheels of the same size, appeared at the end of the nineteenth century. They quickly became popular {4} they were cheaper than horses and easier to look after.",
              "Today, there are more than a billion bicycles in the world. In some cities, like Amsterdam, there are more bikes {5} people! Cycling is good for your health, and it doesn't make the air {6}.",
              "Many cities {7} special roads for bikes so that cyclists can travel safely. If you ride a bike, you should always {8} a helmet. It's also a good idea to have lights, {9} people can see you when it's dark. Have you {10} cycled to school?",
            ],
            gaps: [
              { options: ["have", "has", "having"], answer: 0 },
              { options: ["also", "too", "either"], answer: 0 },
              { options: ["that", "what", "who"], answer: 0 },
              { options: ["because", "but", "so"], answer: 0 },
              { options: ["than", "as", "then"], answer: 0 },
              { options: ["dirty", "dirtier", "dirtiest"], answer: 0 },
              { options: ["have built", "has built", "building"], answer: 0 },
              { options: ["wear", "dress", "put"], answer: 0 },
              { options: ["so", "because", "if"], answer: 0 },
              { options: ["ever", "never", "yet"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story. Complete the sentences. Write 1, 2, 3 or 4 words.",
            text: [
              "Zoe's class was going to put on a play about a dragon at the end of term. Zoe really wanted to be the dragon, but her teacher, Mrs Patel, chose a boy called Leo. Zoe was given the part of a tree. She only had one line to say!",
              "Zoe was disappointed, but she decided to help in other ways. She painted the castle for the stage and helped her friends learn their words.",
              "On the day of the play, Leo had a terrible cold and couldn't come to school. 'Who knows all the dragon's words?' asked Mrs Patel. Zoe put up her hand. She knew every line because she had practised with Leo so many times.",
              "Zoe wore the green dragon costume, and the play was a great success. Afterwards, Leo sent her a card that said, 'You were a much better dragon than me!'",
            ],
            items: [
              { question: "The class play was about ______.", answers: ["a dragon", "dragon"] },
              { question: "Mrs Patel chose Leo to be ______.", answers: ["the dragon", "a dragon", "dragon"] },
              { question: "In the play, Zoe was going to be ______.", answers: ["a tree", "tree"] },
              { question: "Zoe painted ______ for the stage.", answers: ["the castle", "a castle", "castle"] },
              { question: "Leo couldn't come to school because he had ______.", answers: ["a terrible cold", "a cold", "terrible cold"] },
              { question: "Zoe knew all the lines because she had ______ with Leo.", answers: ["practised", "practiced", "practised them"] },
              { question: "After the play, Leo sent Zoe ______.", answers: ["a card", "card"] },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "Read the email and write the missing words. Write one word on each line.",
            title: "Email",
            text: [
              "Dear Aunt Jenny, Thank you {1} much for the book you sent me. I started reading it on Saturday and I couldn't stop! I finished it {2} two days. The story is about a girl {3} can talk to animals. My favourite part is when she helps a lost elephant find {4} family. Can you tell me the name of another book by the {5} writer? Love, Maya",
            ],
            answers: [["so", "very"], ["in"], ["who", "that"], ["its", "her"], ["same"]],
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write about this story. Write 20 or more words.",
            pics: [
              { e: "👦🐶🌳", label: "1" },
              { e: "🐶🏃💨", label: "2" },
              { e: "👮🐶👦", label: "3" },
            ],
            minWords: 20,
            checklist: ["My story talks about all three pictures.", "I used the past simple (walked, ran, found …).", "I wrote 20 or more words."],
            sample: "Jack was walking his dog in the park. Suddenly, the dog saw a cat and ran away very fast. Jack looked everywhere, but he couldn't find it. Later, a police officer brought the dog back. Jack was very happy.",
          },
        },
      ],
    },
  ],
};
