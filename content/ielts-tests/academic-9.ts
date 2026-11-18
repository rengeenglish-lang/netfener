import type { IeltsTest } from "./types";

/** IELTS Academic Practice Test 9: Reading and Writing. Original Netfener content. */
export const ACADEMIC_9: IeltsTest = {
  id: "academic-9",
  track: "academic",
  no: 9,
  title: "IELTS Academic Practice Test 9",
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
            title: "How animals sleep",
            paragraphs: [
              "Almost every animal that scientists have studied appears to sleep in some form. Sleep has been observed not only in mammals and birds but also in fish, insects and even jellyfish, which have no brain at all, only a simple network of nerves. This suggests that sleep is extremely ancient and that it serves some essential purpose, although scientists still disagree about exactly what that purpose is.",
              "The amount of sleep animals need varies enormously. Some bats sleep for around twenty hours a day, while giraffes and elephants in the wild may sleep for only two to four hours. In general, large plant-eating animals sleep less than meat-eaters. One explanation is that they must spend many hours eating, since plants provide relatively little energy, and that, as prey, they cannot afford to be unaware of their surroundings for long periods.",
              "Some animals have developed remarkable ways of sleeping while remaining alert. Dolphins and many other marine mammals sleep with only one half of the brain at a time, keeping the other half awake. This allows them to continue swimming and to come to the surface to breathe. While one half of the brain sleeps, the eye on the opposite side of the body is usually closed, and the other eye remains open. Many birds can do the same, and ducks sleeping at the edge of a group have been observed to keep open the eye facing away from the others, watching for predators.",
              "Birds that fly long distances face a particular challenge. For many years, scientists wondered whether birds such as swifts, which may stay in the air for months at a time, ever slept. In 2016, researchers attached small devices to the heads of frigatebirds, large seabirds that fly over the ocean for weeks without landing, to record their brain activity. They found that the birds did sleep while flying, mostly in short periods of about ten seconds, often with one half of the brain at a time, but that they slept for less than an hour a day in total. On land, the same birds slept for more than twelve hours a day.",
              "Scientists have proposed several theories to explain why sleep is necessary. One is that it allows the body to save energy. Another is that it helps the brain to process and store information gathered during the day; experiments with both humans and animals have shown that sleep after learning improves memory. A third theory, supported by research published in 2013, suggests that during sleep the spaces between brain cells widen, allowing fluid to flow through and wash away waste products that build up while we are awake.",
              "These theories are not necessarily in conflict, and sleep may well serve several purposes at once. What is clear is that going without it has serious consequences. In experiments, animals deprived of sleep for long periods became ill, and humans who do not get enough sleep perform worse at a wide range of tasks and are more likely to have accidents.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
              items: [
                { n: 1, text: "Jellyfish have been observed sleeping despite having no brain.", answer: "TRUE" },
                { n: 2, text: "Giraffes in the wild usually sleep for around twenty hours a day.", answer: "FALSE" },
                { n: 3, text: "Meat-eating animals generally sleep more than large plant-eaters.", answer: "TRUE" },
                { n: 4, text: "Dolphins close both eyes when they sleep.", answer: "FALSE" },
                { n: 5, text: "Swifts sleep more than frigatebirds while flying.", answer: "NOT GIVEN" },
                { n: 6, text: "Frigatebirds sleep much longer on land than in the air.", answer: "TRUE" },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the notes below. Choose ONE WORD ONLY from the text for each answer.",
              heading: "Theories about the purpose of sleep",
              lines: [
                "Sleep may help the body to save [[7]]",
                "Sleep after learning improves [[8]]",
                "During sleep, the spaces between brain cells [[9]]",
                "This allows [[10]] to wash away waste products",
                "People who lack sleep are more likely to have [[11]]",
              ],
              gaps: [
                { n: 7, answers: ["energy"] },
                { n: 8, answers: ["memory"] },
                { n: 9, answers: ["widen"] },
                { n: 10, answers: ["fluid"] },
                { n: 11, answers: ["accidents"] },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 12, text: "Why do ducks at the edge of a group keep one eye open?", options: ["to find food", "to watch for predators", "to follow the other ducks", "to see where they are flying"], answer: 1 },
                { n: 13, text: "What does the writer suggest about the different theories of sleep?", options: ["Only one of them can be correct.", "They have all been disproved.", "Sleep may serve more than one purpose.", "They apply only to humans."], answer: 2 },
              ],
            },
          ],
        },
        // ---------------- Passage 2 ----------------
        {
          title: "Part 2",
          intro: "Read the text and answer questions 14–26.",
          passage: {
            title: "The first underground railway",
            paragraphs: [
              "By the middle of the nineteenth century, the streets of London were among the most congested in the world. The city's population had grown rapidly, and every day hundreds of thousands of people travelled into the centre to work, on foot, by horse-drawn bus or by cab. Several new railway lines had been built to bring passengers from the suburbs and from other parts of the country, but for safety and planning reasons they were not allowed to run into the heart of the city, and their stations were located around its edges. Passengers arriving at these stations then had to make their way through the crowded streets.",
              "The idea of building a railway beneath the streets was promoted most energetically by Charles Pearson, a lawyer who worked for the City of London. Pearson argued that an underground line would relieve congestion and allow working people to live in healthier conditions outside the city while still being able to reach their jobs. Many people regarded the idea as absurd, and some newspapers predicted that passengers would be poisoned by fumes or crushed if the tunnels collapsed.",
              "Construction of the first section, between Paddington and Farringdon, began in 1860. Engineers used a method known as 'cut and cover': they dug a deep trench along the line of a street, built a brick-lined tunnel in the trench and then covered it over, rebuilding the street on top. The method was relatively cheap, but it caused great disruption, since streets had to be closed and buildings sometimes had to be demolished. It also meant that the line had to follow the routes of existing roads as far as possible.",
              "The Metropolitan Railway opened on 10 January 1863, and it was an immediate success. Around thirty-eight thousand passengers used it on the first day, and within its first year it carried more than nine million. The trains were pulled by steam locomotives, which had been specially designed to reduce the amount of smoke they produced, but conditions in the tunnels were nevertheless unpleasant, and the company had to install openings to the surface to let out some of the smoke. Pearson himself did not live to see the opening; he died in 1862.",
              "The success of the Metropolitan Railway encouraged the construction of further lines. In the 1880s and 1890s, engineers developed a new technique that allowed tunnels to be dug much deeper, using a large circular shield pushed forward through the clay beneath the city. These deep tunnels, which gave the system its popular name, 'the Tube', did not disturb the streets above and could follow more direct routes. Steam trains could not be used in such tunnels, and the first deep line, which opened in 1890, was operated by electric trains from the start.",
              "Other cities soon followed London's example. Budapest opened an underground line in 1896, Paris in 1900 and New York in 1904. Today, more than two hundred cities around the world have metro systems, and the largest carry several million passengers a day.",
            ],
          },
          groups: [
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 14, text: "Why did passengers arriving by train have to cross the crowded streets?", options: ["Trains stopped running at night.", "Railway stations were located on the edges of the city.", "There were no buses in London.", "The trains were too slow."], answer: 1 },
                { n: 15, text: "What did Charles Pearson believe an underground line would do?", options: ["make railway companies richer", "allow workers to live in healthier places outside the city", "reduce the price of houses in the centre", "replace all the city's roads"], answer: 1 },
                { n: 16, text: "What was a disadvantage of the 'cut and cover' method?", options: ["It was very expensive.", "It caused great disruption to the streets.", "It could only be used for deep tunnels.", "It required electric trains."], answer: 1 },
                { n: 17, text: "Why were electric trains used on the first deep line?", options: ["They were cheaper to build.", "Steam trains could not be used in such deep tunnels.", "Passengers preferred them.", "The government required it."], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the summary below. Choose ONE WORD AND/OR A NUMBER from the text for each answer.",
              heading: "The Metropolitan Railway",
              lines: [
                "Construction of the first section began in [[18]].",
                "The tunnels were lined with [[19]].",
                "About [[20]] passengers travelled on the opening day.",
                "The locomotives were designed to produce less [[21]].",
                "Later deep tunnels were dug using a circular [[22]].",
                "The first city after London to open an underground line was [[23]].",
              ],
              gaps: [
                { n: 18, answers: ["1860"] },
                { n: 19, answers: ["brick"] },
                { n: 20, answers: ["38,000", "38000", "thirty-eight thousand"] },
                { n: 21, answers: ["smoke"] },
                { n: 22, answers: ["shield"] },
                { n: 23, answers: ["budapest"] },
              ],
            },
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 24, text: "Some newspapers believed that the underground railway would be dangerous.", answer: "TRUE" },
                { n: 25, text: "Charles Pearson travelled on the line soon after it opened.", answer: "FALSE" },
                { n: 26, text: "The New York subway was built by British engineers.", answer: "NOT GIVEN" },
              ],
            },
          ],
        },
        // ---------------- Passage 3 ----------------
        {
          title: "Part 3",
          intro: "Read the text and answer questions 27–40.",
          passage: {
            title: "Should we tax the robots?",
            paragraphs: [
              "As machines and software take over an increasing range of tasks once performed by people, a question that would have seemed fanciful a generation ago has entered serious political debate: should companies pay a tax when they replace workers with robots? The idea has been supported by some well-known business leaders and politicians, who argue that it would slow the loss of jobs and raise money to help those affected. I understand the concern behind the proposal, but I believe that a robot tax would be a mistake.",
              "The first problem is one of definition. What exactly is a robot? An industrial arm that welds car bodies is clearly one. But what about a self-service checkout in a supermarket, an accounting program that does the work of several clerks, or an online booking system that has made many travel agents unnecessary? Almost every new machine or piece of software allows some work to be done with fewer people; that, after all, is largely why businesses invest in them. Any tax would require officials to draw lines that would be arbitrary and easy for companies to avoid.",
              "The second problem is that history gives us little reason to believe that new technology destroys work overall. The mechanisation of agriculture, for example, eliminated the jobs of millions of farm labourers, yet employment as a whole grew, as new industries and occupations appeared that no one could have foreseen. I do not claim that this pattern must continue forever, and it would be foolish to ignore the possibility that this time may be different. But the evidence so far does not support the view that automation is causing mass unemployment.",
              "The third and most serious problem is that a tax on automation would discourage the very investment that makes economies more productive. Rising productivity, the ability to produce more with the same effort, is the main source of higher living standards over time. Countries that use robots most intensively, such as South Korea and Germany, are not those with the highest unemployment. A tax that slowed the adoption of new technology might protect some jobs in the short term, but at the cost of making everyone poorer in the long run.",
              "None of this means that we should simply ignore the people whose jobs disappear. The costs of technological change are real, and they often fall heavily on particular workers and regions. A middle-aged factory worker whose job is automated may find it very hard to start a new career, and the fact that new jobs are being created elsewhere is of little comfort to him. Governments have a responsibility to help, through retraining, support for people moving between jobs and investment in regions that have lost their main industries.",
              "The question is how to pay for this. My answer is that it should be paid for through the general tax system, and in particular through taxes on the profits and incomes that new technology generates, rather than through a special tax on the machines themselves. If automation makes some companies and individuals much richer, it is reasonable that they should contribute more. That is a matter for ordinary tax policy, and it does not require us to treat robots as if they were employees.",
            ],
          },
          groups: [
            {
              kind: "ynng",
              instruction: "Do the following statements agree with the claims of the writer? Choose YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.",
              items: [
                { n: 27, text: "A tax on robots would be a sensible policy.", answer: "NO" },
                { n: 28, text: "It would be easy to decide which machines count as robots.", answer: "NO" },
                { n: 29, text: "It is impossible that automation will ever cause mass unemployment.", answer: "NO" },
                { n: 30, text: "Robots in South Korea are more advanced than those in Germany.", answer: "NOT GIVEN" },
                { n: 31, text: "Governments should help workers whose jobs are lost to automation.", answer: "YES" },
                { n: 32, text: "People who become richer through automation should pay more tax.", answer: "YES" },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 33, text: "Why does the writer mention self-service checkouts and accounting programs?", options: ["to show how difficult it is to define a robot", "to praise new technology", "to explain why supermarkets are closing", "to show that robots are expensive"], answer: 0 },
                { n: 34, text: "What does the writer say about the mechanisation of agriculture?", options: ["It caused permanent mass unemployment.", "It destroyed many jobs, but overall employment grew.", "It had little effect on farm workers.", "It was opposed by governments."], answer: 1 },
                { n: 35, text: "According to the writer, the most serious problem with a robot tax is that it would", options: ["be too expensive to collect.", "discourage investment that raises productivity.", "anger business leaders.", "only affect large companies."], answer: 1 },
                { n: 36, text: "How does the writer suggest that help for workers should be funded?", options: ["by a special tax on machines", "by charging workers for retraining", "through the general tax system", "by reducing pensions"], answer: 2 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the text for each answer.",
              lines: [
                "Rising [[37]] is the main source of higher living standards.",
                "Officials would have to draw lines that would be [[38]] and easy to avoid.",
                "The costs of technological change often fall on particular workers and [[39]].",
                "Governments can support people through [[40]] and investment in affected regions.",
              ],
              gaps: [
                { n: 37, answers: ["productivity"] },
                { n: 38, answers: ["arbitrary"] },
                { n: 39, answers: ["regions"] },
                { n: 40, answers: ["retraining"] },
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
            "The chart below shows the number of cars per 1,000 people in four countries in 2000 and 2025.",
            "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          ],
          chart: {
            title: "Cars per 1,000 people",
            unit: "",
            series: ["2000", "2025"],
            rows: [
              { label: "Country A", values: [560, 610] },
              { label: "Country B", values: [420, 395] },
              { label: "Country C", values: [90, 310] },
              { label: "Country D", values: [25, 140] },
            ],
          },
        },
        {
          title: "Part 2",
          suggestedMinutes: 40,
          minWords: 250,
          prompt: [
            "Some people believe that the best way to improve public health is to increase the number of sports facilities. Others think that this would have little effect and that other measures are needed.",
            "Discuss both views and give your own opinion.",
            "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
          ],
        },
      ],
    },
  ],
};
