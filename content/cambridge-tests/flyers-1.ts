import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 1. Original Netfener content. */
export const FLYERS_1: CambridgeTest = {
  id: "flyers-1",
  level: "flyers",
  no: 1,
  title: "A2 Flyers · Practice Test 1",
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
              { word: "a calendar", e: "📅" },
              { word: "a pilot", e: "🧑‍✈️" },
              { word: "a museum", e: "🏛️" },
              { word: "an envelope", e: "✉️" },
              { word: "a suitcase", e: "🧳" },
              { word: "a scientist", e: "🧑‍🔬" },
              { word: "a desert", e: "🏜️" },
              { word: "a tent", e: "⛺" },
              { word: "a dictionary", e: "📕" },
              { word: "a moon", e: "🌙" },
              { word: "a factory", e: "🏭" },
              { word: "a key", e: "🔑" },
              { word: "a waiter", e: "🧑‍🍳" },
              { word: "glue", e: "🧴" },
            ],
            items: [
              { text: "This person flies a plane.", answer: "a pilot" },
              { text: "You put a letter in this before you send it.", answer: "an envelope" },
              { text: "There is very little rain in this hot, dry place.", answer: "a desert" },
              { text: "You can find old and interesting things to look at in this building.", answer: "a museum" },
              { text: "People sleep in this when they go camping.", answer: "a tent" },
              { text: "This shows you the days, weeks and months of the year.", answer: "a calendar" },
              { text: "You can use this to find out what a word means.", answer: "a dictionary" },
              { text: "You put your clothes in this when you go on holiday.", answer: "a suitcase" },
              { text: "This person does experiments in a laboratory.", answer: "a scientist" },
              { text: "You use this to open a door.", answer: "a key" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Katy", "Michael"],
            items: [
              { line: "Michael, what did you do in the holidays?", options: ["I went to the mountains with my uncle.", "I'm going next week.", "It was a great holiday, wasn't it?"], answer: 0 },
              { line: "Did you go skiing?", options: ["No, I can't ski yet, so we went walking.", "Yes, I'd like to.", "It's very cold there."], answer: 0 },
              { line: "Where did you stay?", options: ["For ten days.", "In a small hotel near a lake.", "With my best friend's bike."], answer: 1 },
              { line: "Was the food good?", options: ["Yes, especially the soup!", "No, I didn't take it.", "It's in the kitchen."], answer: 0 },
              { line: "Would you like to go there again?", options: ["Yes, I took lots of photos.", "I've never been there.", "Yes, maybe next winter."], answer: 2 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Robert's class was planning a {1} to the zoo. The night before, Robert was so excited that he couldn't sleep.",
              "In the morning, the teacher counted the children on the bus. 'Twenty-five,' she said. 'Everyone is here.' At the zoo, they saw lions, bears and a very tall giraffe. Robert wanted to take a {2} of the penguins, but he couldn't find his camera.",
              "He looked in his {3}, but it wasn't there. 'Maybe I left it on the bus,' he thought. He felt {4}. Then the zoo keeper walked towards him. 'Is this yours?' she asked. She was holding his camera! 'A penguin was playing with it,' she {5}. Everyone laughed.",
            ],
            bank: [
              { word: "trip", e: "🚌" },
              { word: "photo", e: "📷" },
              { word: "backpack", e: "🎒" },
              { word: "worried", e: "😟" },
              { word: "explained", e: "💬" },
              { word: "lunch", e: "🥪" },
              { word: "proud", e: "😊" },
              { word: "forgot", e: "❓" },
            ],
            answers: ["trip", "photo", "backpack", "worried", "explained"],
            titleQuestion: { options: ["A penguin with a camera", "Robert's new bus", "The tallest giraffe"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Hot-air balloons",
            text: [
              "The first hot-air balloon flight with people {1} it took place in Paris in 1783. The balloon flew {2} about twenty-five minutes and travelled around nine kilometres.",
              "A hot-air balloon goes up {3} hot air is lighter than cold air. A burner under the balloon heats the air inside it. When the pilot wants to come down, he or she lets the air get {4}.",
              "Pilots can't really steer a balloon. Instead, they go higher or lower to find winds {5} are blowing in the right direction. Many people enjoy balloon flights {6} the views are amazing.",
              "Today, there are balloon festivals in many countries. One of the {7} festivals takes place every October in the United States, and hundreds of balloons fill the sky. Balloons are often {8} unusual shapes, like animals, houses or even giant faces.",
              "If you want to fly in a balloon, you {9} wear warm clothes, because it can be cold high above the ground. And don't forget your camera, or you'll be sorry {10}!",
            ],
            gaps: [
              { options: ["in", "on", "at"], answer: 0 },
              { options: ["for", "since", "during"], answer: 0 },
              { options: ["because", "so", "but"], answer: 0 },
              { options: ["cool", "cooler", "coolest"], answer: 1 },
              { options: ["who", "which", "what"], answer: 1 },
              { options: ["if", "because", "although"], answer: 1 },
              { options: ["big", "bigger", "biggest"], answer: 2 },
              { options: ["made", "make", "making"], answer: 0 },
              { options: ["should", "would", "could"], answer: 0 },
              { options: ["late", "later", "lately"], answer: 1 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story. Complete the sentences. Write 1, 2, 3 or 4 words.",
            text: [
              "Emma's grandmother lives on a farm in the countryside. Last summer, Emma spent two weeks there with her cousin, Oliver.",
              "Every morning, the children helped Grandma feed the chickens and collect the eggs. Oliver didn't like the goat because it always tried to eat his T-shirt! In the afternoons, they rode bikes along the river or picked strawberries in the field.",
              "One evening, there was a terrible storm. The lights went out, and the children were a bit frightened. Grandma lit some candles and told them stories about when she was a little girl. She explained that she didn't have a television or a computer, so she and her brothers made their own toys from wood.",
              "On the last day, Grandma gave Emma a small wooden horse. 'My father made this for me seventy years ago,' she said. Emma put it on the shelf next to her bed when she got home.",
            ],
            items: [
              { question: "Emma stayed at the farm for ______.", answers: ["two weeks", "2 weeks"] },
              { question: "Every morning, the children fed the chickens and collected ______.", answers: ["the eggs", "eggs"] },
              { question: "Oliver didn't like the goat because it tried to eat ______.", answers: ["his t-shirt", "his tshirt", "his t shirt", "his shirt"] },
              { question: "In the afternoons, the children rode bikes or picked ______.", answers: ["strawberries", "strawberries in the field"] },
              { question: "During the storm, Grandma lit some candles and ______.", answers: ["told them stories", "told stories"] },
              { question: "When Grandma was a girl, she made toys from ______.", answers: ["wood"] },
              { question: "Emma put the wooden horse ______ next to her bed.", answers: ["on the shelf", "on a shelf"] },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "Read the diary and write the missing words. Write one word on each line.",
            title: "Sam's diary",
            text: [
              "Saturday. Today I went to the theatre {1} my parents. We saw a play about a pirate {2} lost his ship. The actors were very funny, and I laughed {3} the time. After the play, we had dinner at an Italian restaurant. I {4} a big pizza. I'd like to {5} an actor when I'm older!",
            ],
            answers: [["with"], ["who", "that"], ["all"], ["had", "ate", "ordered"], ["be", "become"]],
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write about this story. Write 20 or more words.",
            pics: [
              { e: "🧒⚽🏡", label: "1" },
              { e: "🪟💥😮", label: "2" },
              { e: "🧒🙇👵", label: "3" },
            ],
            minWords: 20,
            checklist: ["My story talks about all three pictures.", "I used the past simple (played, broke, said …).", "I wrote 20 or more words."],
            sample: "One afternoon, Tom was playing football in the garden. He kicked the ball very hard and it broke his neighbour's window. Tom was very sorry. He went next door, said sorry to Mrs Brown and offered to help pay for a new window.",
          },
        },
      ],
    },
  ],
};
