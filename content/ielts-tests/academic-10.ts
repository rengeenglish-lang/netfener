import type { IeltsTest } from "./types";

/** IELTS Academic Practice Test 10: Reading and Writing. Original Netfener content. */
export const ACADEMIC_10: IeltsTest = {
  id: "academic-10",
  track: "academic",
  no: 10,
  title: "IELTS Academic Practice Test 10",
  modules: [
    {
      id: "reading",
      minutes: 60,
      parts: [
        // ---------------- Passage 1 ----------------
        {
          title: "Part 1",
          intro: "Read the text and answer questions 1–13.",
          passage: {
            title: "How plants keep time",
            paragraphs: [
              "In the eighteenth century, the French astronomer Jean-Jacques d'Ortous de Mairan noticed something curious about a plant he kept in his study. Its leaves opened during the day and folded up at night. Wondering whether the plant was simply responding to sunlight, he placed it in a dark cupboard. To his surprise, the leaves continued to open and close at roughly the right times, even though the plant could not see the sun. He had discovered the first evidence that plants possess an internal clock.",
              "We now know that almost all living things, from bacteria to humans, have such clocks, which follow a cycle of roughly twenty-four hours. They are known as circadian rhythms, from the Latin words meaning 'about a day'. In plants, the clock is not located in a single organ, as it is in animals, where a small region of the brain plays a central role. Instead, each plant cell appears to contain its own clock, made up of a network of genes that switch one another on and off in a regular cycle.",
              "Although the clock runs on its own, it must be kept in step with the real day, since its natural cycle is rarely exactly twenty-four hours. Plants achieve this by detecting light, particularly at dawn and dusk, and changes in temperature. Each morning, the clock is effectively reset, much as we might adjust a watch that runs slightly fast or slow.",
              "The clock allows plants to anticipate regular changes in their environment rather than merely react to them. Before dawn, for example, many plants begin to prepare the machinery they use for photosynthesis, so that they are ready to make use of the light as soon as the sun rises. Some flowers open and release their scent at the time of day when the insects that pollinate them are most active. Experiments have shown that plants whose clocks are matched to the length of the day grow faster and survive better than those whose clocks are out of step.",
              "Plants also use their clocks to measure the length of the day, which tells them what season it is. Many species flower only when the days reach a certain length. This ensures that individual plants of the same species flower at the same time, which is essential for pollination, and that seeds are produced before the arrival of winter. Gardeners and farmers have long made use of this response; growers of certain decorative plants, for example, use artificial lighting or blackout covers to control when the plants come into flower.",
              "Research on plant clocks may have practical benefits. As the climate changes, many crops may need to be grown in places where the length of the day differs from that of the regions in which they were originally developed. Understanding how the clock works could help plant breeders to produce varieties suited to new conditions. Some researchers are also investigating whether the time of day at which crops are treated with chemicals affects how well the treatments work, since a plant's sensitivity to many substances changes over the course of the day.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
              items: [
                { n: 1, text: "De Mairan's plant stopped moving its leaves when it was placed in the dark.", answer: "FALSE" },
                { n: 2, text: "De Mairan published his discovery in a scientific journal.", answer: "NOT GIVEN" },
                { n: 3, text: "In plants, the clock is found in a single organ.", answer: "FALSE" },
                { n: 4, text: "A plant's internal cycle is usually exactly twenty-four hours long.", answer: "FALSE" },
                { n: 5, text: "Plants with clocks matched to the day length grow faster.", answer: "TRUE" },
                { n: 6, text: "Some growers control flowering with artificial light.", answer: "TRUE" },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the notes below. Choose ONE WORD ONLY from the text for each answer.",
              heading: "The plant clock",
              lines: [
                "In each cell, the clock consists of a network of [[7]]",
                "The clock is reset by light and changes in [[8]]",
                "Before dawn, plants prepare for [[9]]",
                "Some flowers release their [[10]] when pollinating insects are active",
                "Flowering at the same time is essential for [[11]]",
              ],
              gaps: [
                { n: 7, answers: ["genes"] },
                { n: 8, answers: ["temperature"] },
                { n: 9, answers: ["photosynthesis"] },
                { n: 10, answers: ["scent"] },
                { n: 11, answers: ["pollination"] },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 12, text: "What does the term 'circadian' refer to?", options: ["a type of plant cell", "a cycle of about one day", "the region of the brain that controls sleep", "the length of the growing season"], answer: 1 },
                { n: 13, text: "Why might research on plant clocks help farmers in the future?", options: ["Crops may be grown in places with different day lengths.", "Plants will no longer need light.", "Chemicals will become unnecessary.", "Days are becoming longer."], answer: 0 },
              ],
            },
          ],
        },
        // ---------------- Passage 2 ----------------
        {
          title: "Part 2",
          intro: "Read the text and answer questions 14–26.",
          passage: {
            title: "Coffee's long journey",
            paragraphs: [
              "Coffee is now one of the most widely traded agricultural products in the world, and it is grown in more than fifty countries, almost all of them in a band around the equator. Yet for most of its history, it was known only in a small part of the world. The coffee plant originated in the highlands of what is now Ethiopia, where its berries may have been eaten or used to make a drink long before coffee spread anywhere else.",
              "A popular legend tells of a goat herder named Kaldi, who noticed that his goats became unusually lively after eating the berries of a certain shrub. There is no evidence that the story is true, and it does not appear in writing until many centuries after coffee drinking began. The earliest reliable evidence of coffee being drunk comes from Yemen, on the other side of the Red Sea, in the fifteenth century, where it was used by members of religious communities to help them stay awake during night-time prayers.",
              "From Yemen, coffee spread across the Middle East. By the sixteenth century, coffee houses had opened in cities such as Cairo and Istanbul. They became important places for conversation, music, games and the exchange of news, and they were sometimes regarded with suspicion by the authorities, who feared that they might encourage political discussion. On several occasions, rulers attempted to close them, but the bans were never effective for long.",
              "For many years, Yemen controlled the trade in coffee, and the export of fertile seeds was strictly forbidden, so that the plant could not be grown elsewhere. This monopoly was eventually broken. According to tradition, a pilgrim named Baba Budan smuggled seven seeds out of Yemen in the seventeenth century and planted them in the hills of southern India. Later in the same century, the Dutch obtained plants and established plantations on the island of Java, in what is now Indonesia, which soon became a major source of coffee for Europe.",
              "The first coffee houses in Western Europe opened in the middle of the seventeenth century, and they quickly became popular. In London, they were known as 'penny universities', because for the price of a cup of coffee a customer could listen to and take part in discussions on a wide range of subjects. Some coffee houses became associated with particular groups of customers. One, frequented by merchants and ship owners, developed into a famous insurance market.",
              "In the eighteenth century, coffee reached the Americas. A French naval officer is said to have carried a single plant across the Atlantic to the Caribbean island of Martinique in the 1720s, sharing his ration of drinking water with it during the voyage. Whatever the truth of this story, coffee cultivation spread rapidly through the region. Brazil, where the plant was introduced in 1727, eventually became the largest producer in the world, a position it still holds today.",
              "The expansion of coffee growing had a darker side. In the Caribbean and Brazil, much of the work on plantations was carried out by enslaved people brought from Africa, and in other places, such as Java, local farmers were forced to grow coffee for export. Today, most of the world's coffee is grown by around twelve million small farmers, many of whom receive only a small share of the price that consumers pay.",
            ],
          },
          groups: [
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 14, text: "What does the writer say about the story of Kaldi?", options: ["It is supported by historical records.", "There is no evidence that it is true.", "It was written down in the fifteenth century.", "It comes from Yemen."], answer: 1 },
                { n: 15, text: "Why was coffee first drunk in Yemen?", options: ["as a medicine", "to help people stay awake during prayers", "to celebrate religious festivals", "as a replacement for alcohol"], answer: 1 },
                { n: 16, text: "Why were the authorities suspicious of coffee houses in the Middle East?", options: ["They sold alcohol.", "They might encourage political discussion.", "They were too expensive.", "They were run by foreigners."], answer: 1 },
                { n: 17, text: "Why were London coffee houses called 'penny universities'?", options: ["They were run by universities.", "Students could study there for free.", "Customers could join discussions for the price of a coffee.", "They sold books for a penny."], answer: 2 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the summary below. Choose ONE WORD AND/OR A NUMBER from the text for each answer.",
              heading: "The spread of coffee",
              lines: [
                "Yemen banned the export of fertile [[18]].",
                "Baba Budan is said to have planted seeds in southern [[19]].",
                "The Dutch set up plantations on the island of [[20]].",
                "One London coffee house became a famous [[21]] market.",
                "A French officer shared his drinking [[22]] with a coffee plant.",
                "Coffee was introduced to Brazil in [[23]].",
              ],
              gaps: [
                { n: 18, answers: ["seeds"] },
                { n: 19, answers: ["india"] },
                { n: 20, answers: ["java"] },
                { n: 21, answers: ["insurance"] },
                { n: 22, answers: ["water"] },
                { n: 23, answers: ["1727"] },
              ],
            },
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 24, text: "Bans on coffee houses in the Middle East were never effective for long.", answer: "TRUE" },
                { n: 25, text: "Brazil is no longer the world's largest producer of coffee.", answer: "FALSE" },
                { n: 26, text: "Small coffee farmers today earn more than they did fifty years ago.", answer: "NOT GIVEN" },
              ],
            },
          ],
        },
        // ---------------- Passage 3 ----------------
        {
          title: "Part 3",
          intro: "Read the text and answer questions 27–40.",
          passage: {
            title: "Why schools should teach philosophy",
            paragraphs: [
              "Ask a group of ten-year-olds whether it is ever right to break a promise, or whether a robot could have feelings, and you are likely to start a lively and surprisingly thoughtful discussion. Children are natural philosophers. They ask questions about fairness, truth and the nature of the world from a very early age. Yet in most countries, philosophy is either absent from the school curriculum or reserved for a small number of older students. I believe this is a missed opportunity, and that philosophy should be taught to children from primary school onwards.",
              "By philosophy, I do not mean the study of great thinkers and their works, valuable though that is for older students. I mean the practice of thinking carefully about difficult questions in a group: listening to others, giving reasons for one's views, considering objections and, sometimes, changing one's mind. Programmes of this kind, often called 'philosophy for children', typically begin with a short story, picture or question chosen to provoke discussion, and the teacher's role is not to give answers but to guide the conversation and encourage pupils to think more deeply.",
              "The most obvious benefit is to children's reasoning. Learning to support a claim with evidence and to recognise weak arguments is useful in every subject, and it is increasingly important in a world in which young people are exposed to large amounts of misleading information online. But there is also evidence that the benefits extend further. A large study carried out in England in 2015, involving several thousand primary school pupils, found that those who took part in weekly philosophy sessions made more progress in reading and mathematics than similar pupils who did not, and that the gains were greatest among children from disadvantaged backgrounds.",
              "I should acknowledge that the results of that study have been debated, and that some later research has found smaller effects. Educational research rarely produces simple conclusions, and I would not claim that philosophy is a cure for every problem in schools. But even if its effect on test scores turns out to be modest, I would still argue for it, because its value does not lie only in examination results.",
              "Philosophy also has social benefits. In a good philosophical discussion, children learn to disagree respectfully, to take turns and to treat the views of others seriously. Teachers often report that pupils who are usually quiet in class find their voice, since there are no 'right answers' to be afraid of getting wrong. In societies that are increasingly divided, the ability to discuss contested questions calmly is not a small thing.",
              "The most common objection is that the curriculum is already full, and that time spent on philosophy must be taken from other subjects. This is a fair point, and schools will have to make choices. But philosophy need not be a separate subject at all; its methods can be used in literature, history or science lessons. What matters most is that teachers receive proper training, since leading a good discussion is a skill that must be learned.",
              "Some critics also worry that philosophy may encourage children to question their parents' values. I find this concern understandable but misplaced. Learning to think for oneself does not mean rejecting what one has been taught; it means understanding why one believes it. That seems to me exactly what education should be for.",
            ],
          },
          groups: [
            {
              kind: "ynng",
              instruction: "Do the following statements agree with the claims of the writer? Choose YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.",
              items: [
                { n: 27, text: "Philosophy should be taught only to older students.", answer: "NO" },
                { n: 28, text: "In philosophy sessions, teachers should give pupils the correct answers.", answer: "NO" },
                { n: 29, text: "Philosophy will solve most of the problems facing schools.", answer: "NO" },
                { n: 30, text: "Philosophy is worth teaching even if its effect on test scores is small.", answer: "YES" },
                { n: 31, text: "Philosophy is more popular with girls than with boys.", answer: "NOT GIVEN" },
                { n: 32, text: "Training teachers to lead discussions is very important.", answer: "YES" },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 33, text: "What does the writer mean by 'philosophy' in this text?", options: ["the study of famous philosophers", "careful group discussion of difficult questions", "lessons in religion", "a university subject"], answer: 1 },
                { n: 34, text: "What did the 2015 study in England find?", options: ["Philosophy had no effect on pupils' progress.", "Pupils made more progress in reading and mathematics.", "Only older pupils benefited.", "Disadvantaged children benefited least."], answer: 1 },
                { n: 35, text: "Why do quiet pupils often take part in philosophy discussions, according to teachers?", options: ["They are given extra marks.", "There are no right answers to get wrong.", "The groups are very small.", "They are asked to read aloud."], answer: 1 },
                { n: 36, text: "How does the writer respond to the objection that the curriculum is full?", options: ["by rejecting it completely", "by suggesting philosophy's methods can be used in other subjects", "by proposing longer school days", "by recommending fewer science lessons"], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the text for each answer.",
              lines: [
                "Philosophy sessions often begin with a short story, picture or [[37]].",
                "Young people are exposed to large amounts of [[38]] online.",
                "In discussions, children learn to disagree [[39]].",
                "According to the writer, learning to think for oneself means understanding [[40]] one believes something.",
              ],
              gaps: [
                { n: 37, answers: ["question"] },
                { n: 38, answers: ["misleading information"] },
                { n: 39, answers: ["respectfully"] },
                { n: 40, answers: ["why"] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "writing",
      minutes: 60,
      tasks: [
        {
          title: "Part 1",
          suggestedMinutes: 20,
          minWords: 150,
          prompt: [
            "The chart below shows the average age at which men and women first got married in one country in five different years.",
            "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          ],
          chart: {
            title: "Average age at first marriage",
            unit: "",
            series: ["Men", "Women"],
            rows: [
              { label: "1985", values: [26, 23] },
              { label: "1995", values: [27, 25] },
              { label: "2005", values: [29, 27] },
              { label: "2015", values: [31, 29] },
              { label: "2025", values: [33, 31] },
            ],
          },
        },
        {
          title: "Part 2",
          suggestedMinutes: 40,
          minWords: 250,
          prompt: [
            "Many people now buy most of the things they need online rather than in shops.",
            "Do the advantages of this development outweigh the disadvantages?",
            "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
          ],
        },
      ],
    },
  ],
};
