import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 5. Original Netfener content. */
export const FLYERS_5: CambridgeTest = {
  id: "flyers-5",
  level: "flyers",
  no: 5,
  title: "A2 Flyers · Practice Test 5",
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
              { word: "a firefighter", e: "🧑‍🚒" },
              { word: "a cave", e: "🕳️" },
              { word: "a stamp", e: "📮" },
              { word: "an airport", e: "🛫" },
              { word: "a scientist", e: "🧑‍🔬" },
              { word: "a rocket", e: "🚀" },
              { word: "a pyramid", e: "🔺" },
              { word: "a moustache", e: "🥸" },
              { word: "a glove", e: "🧤" },
              { word: "a tortoise", e: "🐢" },
              { word: "a hotel", e: "🏨" },
              { word: "a guitar", e: "🎸" },
              { word: "a newspaper", e: "🗞️" },
              { word: "a calculator", e: "🧮" },
            ],
            items: [
              { text: "This person puts out fires and helps people in danger.", answer: "a firefighter" },
              { text: "This is a big hole in the side of a mountain or under the ground.", answer: "a cave" },
              { text: "You put this small piece of paper on a letter before you post it.", answer: "a stamp" },
              { text: "You go here to get on a plane.", answer: "an airport" },
              { text: "This person works in a laboratory and does experiments.", answer: "a scientist" },
              { text: "This can travel very fast into space.", answer: "a rocket" },
              { text: "This is hair that grows above a man's mouth.", answer: "a moustache" },
              { text: "This animal moves very slowly and carries its house on its back.", answer: "a tortoise" },
              { text: "You can stay here when you are on holiday.", answer: "a hotel" },
              { text: "You can read about what happened yesterday in this.", answer: "a newspaper" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Mum", "Emma"],
            items: [
              { line: "Emma, why are you so happy today?", options: ["I got the best mark in the maths test!", "I'm going to be happy.", "It's Tuesday today."], answer: 0 },
              { line: "That's brilliant! Was it difficult?", options: ["It was in the morning.", "Some questions were quite hard, but I'd practised a lot.", "Yes, it's my favourite."], answer: 1 },
              { line: "Who helped you to practise?", options: ["My friend Ali. We studied together at the library.", "On Monday and Wednesday.", "With a pencil."], answer: 0 },
              { line: "Shall we have a special dinner to celebrate?", options: ["Yes! Could we have pizza?", "I had dinner yesterday.", "It isn't special."], answer: 0 },
              { line: "Of course. Would you like to invite Ali too?", options: ["I invited him last year.", "Great idea! I'll phone him now.", "He likes maths."], answer: 1 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Maya lived in a small village next to a forest. One autumn morning, she was walking to school when she heard a strange noise {1} a bush. She looked and saw a little owl with a hurt wing.",
              "Maya {2} the owl very carefully and put it in her scarf. She took it to the vet, who said, 'It's lucky you found it. It can't fly, so it is in {3}.'",
              "Every day after school, Maya visited the owl and gave it food. After three weeks, its wing was better. The vet and Maya took the owl back to the forest. It opened its wings and {4} up into a tall tree. Then it turned and looked at Maya. 'I think it's saying thank you,' the vet {5}.",
            ],
            bank: [
              { word: "behind", e: "🌿" },
              { word: "lifted", e: "🤲" },
              { word: "danger", e: "⚠️" },
              { word: "flew", e: "🦉" },
              { word: "whispered", e: "🤫" },
              { word: "between", e: "↔️" },
              { word: "swam", e: "🏊" },
              { word: "shouted", e: "📢" },
            ],
            answers: ["behind", "lifted", "danger", "flew", "whispered"],
            titleQuestion: { options: ["Maya saves an owl", "A new school for Maya", "The lost scarf"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Rainforests",
            text: [
              "Rainforests are thick forests that grow in hot places near the middle of the Earth. As their name tells us, it rains {1} lot there – almost every day!",
              "More than half of all the kinds of plants and animals in the world live in rainforests. Some of them, {2} colourful frogs and enormous butterflies, can't be found anywhere else.",
              "The trees in a rainforest grow very tall because they all want to reach the sunlight. The tops of the trees are so close together {3} the ground below is quite dark.",
              "Rainforests are important for {4} of us, even if we live far away. The trees take in gas that is bad for the planet and give out the air that we breathe. Many medicines {5} made from rainforest plants too.",
              "Unfortunately, people are cutting {6} lots of rainforest trees to make space for farms and roads. Scientists say that we {7} protect these forests before it's too late. You can help by using {8} paper and by recycling. If everyone does something small, {9} can make a big difference. The rainforests need us, {10} we need them too!",
            ],
            gaps: [
              { options: ["a", "an", "the"], answer: 0 },
              { options: ["like", "as", "such"], answer: 0 },
              { options: ["that", "than", "what"], answer: 0 },
              { options: ["all", "every", "each"], answer: 0 },
              { options: ["are", "is", "be"], answer: 0 },
              { options: ["down", "off", "out"], answer: 0 },
              { options: ["must", "can't", "mustn't"], answer: 0 },
              { options: ["less", "fewer", "least"], answer: 0 },
              { options: ["we", "us", "our"], answer: 0 },
              { options: ["and", "but", "or"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story. Complete the sentences. Write 1, 2, 3 or 4 words.",
            text: [
              "Last winter, Ahmet and his cousin Selin went skiing in the mountains with Ahmet's parents. They stayed in a small wooden hotel near the ski lifts.",
              "On the first day, Ahmet and Selin had a lesson with a ski teacher called Marco. Selin learned very quickly, but Ahmet kept falling over in the snow. 'Don't worry,' Marco laughed. 'Everyone falls when they start.'",
              "On the third day, there was a big snowstorm, so nobody could ski. The children stayed inside and played board games next to the fire. In the evening, the hotel cook made them hot chocolate with cream.",
              "On the last day, Ahmet skied all the way down a small hill without falling. Selin took a video of him on her phone, and he sent it to his grandmother.",
            ],
            items: [
              { question: "Ahmet and Selin went skiing in ______.", answers: ["the mountains", "mountains"] },
              { question: "They stayed in a small ______ near the ski lifts.", answers: ["wooden hotel", "hotel"] },
              { question: "Their ski teacher was called ______.", answers: ["marco"] },
              { question: "At first, Ahmet kept ______ in the snow.", answers: ["falling over", "falling"] },
              { question: "Nobody could ski on the third day because there was ______.", answers: ["a big snowstorm", "a snowstorm", "snowstorm"] },
              { question: "In the evening, the hotel cook made ______ for the children.", answers: ["hot chocolate", "hot chocolate with cream"] },
              { question: "Ahmet sent Selin's video to ______.", answers: ["his grandmother", "grandmother"] },
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
              "Hi Grace, I'm writing to tell you about my new pet. It's {1} small grey kitten, and her name is Misty. She is {2} funny! She likes playing with my shoelaces and sleeping on my homework. Yesterday she climbed {3} the curtains and couldn't get down. Mum had to help {4}. Would you like to come and meet her {5} Saturday? Love, Ruby",
            ],
            answers: [["a"], ["very", "so", "really"], ["up"], ["her"], ["on", "this", "next"]],
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write about this story. Write 20 or more words.",
            pics: [
              { e: "👧🚲🌞", label: "1" },
              { e: "🚲💥😢", label: "2" },
              { e: "👨🔧🚲", label: "3" },
            ],
            minWords: 20,
            checklist: ["My story talks about all three pictures.", "I used the past simple (rode, fell, helped …).", "I wrote 20 or more words."],
            sample: "On a sunny day, Kate rode her bike to the park. Suddenly she fell off and her bike broke. She was very sad. Then her dad fixed the bike and she was happy again.",
          },
        },
      ],
    },
  ],
};
