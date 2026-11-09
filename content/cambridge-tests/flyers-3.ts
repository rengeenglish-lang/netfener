import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 3. Original Netfener content. */
export const FLYERS_3: CambridgeTest = {
  id: "flyers-3",
  level: "flyers",
  no: 3,
  title: "A2 Flyers · Practice Test 3",
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
              { word: "a mechanic", e: "🧑‍🔧" },
              { word: "a castle", e: "🏰" },
              { word: "a passport", e: "🛂" },
              { word: "a library", e: "📚" },
              { word: "a lighthouse", e: "🗼" },
              { word: "a magician", e: "🎩" },
              { word: "an island", e: "🏝️" },
              { word: "a jungle", e: "🌴" },
              { word: "a microscope", e: "🔬" },
              { word: "a calendar", e: "📅" },
              { word: "a satellite", e: "🛰️" },
              { word: "a sledge", e: "🛷" },
              { word: "a chemist", e: "🧪" },
              { word: "a fridge", e: "🧊" },
            ],
            items: [
              { text: "This person repairs cars and other machines.", answer: "a mechanic" },
              { text: "You need to show this when you travel to another country.", answer: "a passport" },
              { text: "Kings and queens lived in this big old building.", answer: "a castle" },
              { text: "This tall building near the sea has a light to help ships.", answer: "a lighthouse" },
              { text: "This person does tricks and can make things disappear.", answer: "a magician" },
              { text: "This hot, wet forest has lots of tall trees and wild animals.", answer: "a jungle" },
              { text: "Scientists use this to look at very small things.", answer: "a microscope" },
              { text: "This goes around the Earth and sends TV pictures and information.", answer: "a satellite" },
              { text: "Children sit on this and slide down a hill when there is snow.", answer: "a sledge" },
              { text: "You keep food and drinks cold in this.", answer: "a fridge" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Jack", "Olivia"],
            items: [
              { line: "Olivia, have you seen the new film about the space adventure?", options: ["Yes, I saw it last weekend. It was brilliant!", "No, I've never been to space.", "I'm going to the moon."], answer: 0 },
              { line: "Who did you go with?", options: ["By bus.", "My cousin Emma.", "At the new cinema."], answer: 1 },
              { line: "What was the best part?", options: ["When the rocket landed on a strange planet.", "It was two hours long.", "We bought popcorn."], answer: 0 },
              { line: "Would you watch it again?", options: ["Yes, I'd love to see it again with you!", "I watched it on Saturday.", "No, it wasn't open."], answer: 0 },
              { line: "Shall we go on Friday after school?", options: ["It's Friday today.", "Good idea. I'll ask my mum.", "I didn't go to school."], answer: 1 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Every winter, Anna's village had a snow sculpture competition. This year, Anna and her brother Tom decided to {1} a giant snow dragon.",
              "They worked all weekend. Tom made the long tail, and Anna made the head with big {2} teeth from pieces of ice. On Sunday evening, the dragon was finished, and it looked {3}.",
              "But that night, the weather changed. In the morning, the sun was shining and the air was warm. The dragon was {4}! Its head was falling off. Anna and Tom were very sad. Then the judges arrived. 'This is the only {5} dragon we have ever seen!' they laughed, and they gave Anna and Tom a special prize.",
            ],
            bank: [
              { word: "build", e: "🔨" },
              { word: "sharp", e: "🔪" },
              { word: "amazing", e: "🤩" },
              { word: "melting", e: "💧" },
              { word: "smiling", e: "😊" },
              { word: "sell", e: "💰" },
              { word: "boring", e: "🥱" },
              { word: "frozen", e: "🧊" },
            ],
            answers: ["build", "sharp", "amazing", "melting", "smiling"],
            titleQuestion: { options: ["A dragon that melted", "The coldest winter", "Tom wins a race"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "The Moon",
            text: [
              "The Moon is about 384,000 kilometres {1} the Earth. It takes about twenty-seven days to travel all the way around our planet.",
              "The Moon doesn't make {2} own light. We can see it because light from the Sun shines on it. That's {3} the Moon seems to change shape during the month.",
              "In 1969, two American astronauts became the first people to walk on the Moon. They {4} there for about twenty-one hours and collected rocks to bring back to Earth.",
              "There is no air on the Moon, so astronauts have to wear special suits. There is no wind {5}, so the footprints they left are probably still there today!",
              "The Moon is much smaller {6} the Earth. If you jumped on the Moon, you could jump {7} higher than on Earth. Scientists think there {8} be ice in some of its deep craters, and they hope to build a base there one day. {9} knows? Maybe you will visit it {10}!",
            ],
            gaps: [
              { options: ["from", "of", "at"], answer: 0 },
              { options: ["its", "it's", "it"], answer: 0 },
              { options: ["why", "because", "so"], answer: 0 },
              { options: ["stayed", "stay", "staying"], answer: 0 },
              { options: ["either", "too", "also"], answer: 0 },
              { options: ["than", "that", "then"], answer: 0 },
              { options: ["much", "many", "more"], answer: 0 },
              { options: ["might", "must", "should"], answer: 0 },
              { options: ["Who", "What", "Which"], answer: 0 },
              { options: ["one day", "yesterday", "ago"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story. Complete the sentences. Write 1, 2, 3 or 4 words.",
            text: [
              "Daniel's family moved from a big city to a small town by the sea last spring. At first, Daniel didn't like his new home. He missed his old friends, and there was no skate park.",
              "One afternoon, he took his skateboard to the harbour. An old fisherman called Mr Adams was painting his boat. 'That looks like fun,' he said, pointing at the skateboard. 'Can you show me how to do it?'",
              "Daniel laughed, but he gave Mr Adams a short lesson. In return, Mr Adams taught Daniel how to catch crabs and tie sailing knots.",
              "A few weeks later, Mr Adams asked the town council to build a small skate park next to the harbour. When it opened in the summer, Daniel invited all the children from his new school. Now he has lots of friends, and he loves living by the sea.",
            ],
            items: [
              { question: "Daniel's family moved to a small town by ______.", answers: ["the sea"] },
              { question: "At first, Daniel missed ______.", answers: ["his old friends", "his friends", "old friends"] },
              { question: "Mr Adams was painting ______ when Daniel met him.", answers: ["his boat", "a boat", "the boat"] },
              { question: "Daniel gave Mr Adams ______ on the skateboard.", answers: ["a short lesson", "a lesson", "short lesson"] },
              { question: "Mr Adams taught Daniel how to catch crabs and ______.", answers: ["tie sailing knots", "tie knots", "to tie sailing knots"] },
              { question: "The new skate park is next to ______.", answers: ["the harbour", "the harbor"] },
              { question: "Daniel invited all the children from ______ to the opening.", answers: ["his new school", "his school", "new school"] },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "Read the diary and write the missing words. Write one word on each line.",
            title: "Ella's diary",
            text: [
              "Wednesday. Today was our school sports day. I was in {1} running race and the long jump. I came second in the race, {2} I won the long jump! My parents were very proud of {3}. After that, we {4} a picnic in the park. I'm going to practise every day so that I can win {5} races next year.",
            ],
            answers: [["the", "a"], ["but", "and"], ["me"], ["had", "ate"], ["both", "all", "more", "two"]],
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write about this story. Write 20 or more words.",
            pics: [
              { e: "👧🎂👩‍🍳", label: "1" },
              { e: "🐈🎂😱", label: "2" },
              { e: "👨‍👩‍👧🍕😄", label: "3" },
            ],
            minWords: 20,
            checklist: ["My story talks about all three pictures.", "I used the past simple (made, jumped, ate …).", "I wrote 20 or more words."],
            sample: "Lucy and her mum made a big cake for Dad's birthday. They left it on the table, but the cat jumped up and ate some of it! Everyone laughed, and they had pizza for dinner instead.",
          },
        },
      ],
    },
  ],
};
