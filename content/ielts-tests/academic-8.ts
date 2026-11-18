import type { IeltsTest } from "./types";

/** IELTS Academic Practice Test 8: Reading and Writing. Original Netfener content. */
export const ACADEMIC_8: IeltsTest = {
  id: "academic-8",
  track: "academic",
  no: 8,
  title: "IELTS Academic Practice Test 8",
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
            title: "The hidden network beneath the forest",
            paragraphs: [
              "When we walk through a forest, we see trees standing apart from one another, each apparently competing with its neighbours for light, water and nutrients. Beneath our feet, however, many of these trees are connected. Fine threads of fungi, far thinner than a human hair, spread through the soil and wrap around or enter the roots of the trees, forming partnerships known as mycorrhizas.",
              "These partnerships are extremely old, and scientists believe they may have helped the first plants to colonise the land more than four hundred million years ago. Today, the great majority of plant species form them. The arrangement benefits both partners. The fungal threads, which can explore a far greater volume of soil than roots alone, collect water and nutrients such as phosphorus and nitrogen and pass them to the plant. In return, the plant supplies the fungus with sugars that it produces through photosynthesis. In some forests, a significant share of the sugars produced by trees may end up in their fungal partners.",
              "In the 1990s, a Canadian forest scientist, Suzanne Simard, carried out experiments suggesting that these fungal networks might do more than link individual plants to the soil. By labelling carbon with special forms that could be traced, she found evidence that carbon was moving from one tree to another through the fungal threads, including between trees of different species. Her work attracted enormous attention, and the networks were soon popularly described as a 'wood wide web'.",
              "Some writers went further, suggesting that large old trees, sometimes called 'mother trees', use the networks to nourish their young and to warn neighbouring trees of attack by insects. These ideas captured the public imagination and appeared in best-selling books and documentaries.",
              "In recent years, however, a number of scientists have urged caution. A review published in 2023 examined the evidence behind several popular claims and concluded that many of them were not well supported. The reviewers did not dispute that fungal networks exist or that they are important. But they pointed out that it is extremely difficult to prove that carbon moves between trees through the fungi rather than through other routes in the soil, and that, even where some transfer occurs, the amounts may be too small to make much difference to the trees involved. Claims that trees deliberately help their offspring, they argued, went well beyond what the experiments had shown.",
              "Simard and other researchers have responded that the review set an unreasonably high standard of proof and that the evidence for some forms of transfer is stronger than the critics suggest. The debate continues, and it illustrates how difficult it can be to study processes that take place out of sight, in a complex environment such as soil.",
              "Whatever the outcome, there is little doubt that mycorrhizal fungi play a vital role in the health of forests. This has practical consequences. Forestry practices that remove all the trees from an area, or that disturb the soil heavily, may damage the fungal networks and make it harder for new trees to become established. Some foresters now leave a number of older trees standing when an area is harvested, partly in the hope of preserving the fungi in the soil.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
              items: [
                { n: 1, text: "Only a small number of plant species form partnerships with fungi.", answer: "FALSE" },
                { n: 2, text: "Fungal threads can reach a larger volume of soil than plant roots.", answer: "TRUE" },
                { n: 3, text: "Suzanne Simard's experiments involved trees of only one species.", answer: "FALSE" },
                { n: 4, text: "The term 'wood wide web' was invented by Simard herself.", answer: "NOT GIVEN" },
                { n: 5, text: "The 2023 review questioned whether fungal networks exist.", answer: "FALSE" },
                { n: 6, text: "Some foresters now leave older trees standing after harvesting.", answer: "TRUE" },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the notes below. Choose ONE WORD ONLY from the text for each answer.",
              heading: "Mycorrhizal partnerships",
              lines: [
                "Fungi pass water and nutrients such as nitrogen and [[7]] to the plant.",
                "The plant gives the fungus [[8]] made by photosynthesis.",
                "Simard traced the movement of [[9]] between trees.",
                "Popular writers described large old trees as '[[10]] trees'.",
                "Heavy disturbance of the [[11]] may damage fungal networks.",
              ],
              gaps: [
                { n: 7, answers: ["phosphorus"] },
                { n: 8, answers: ["sugars"] },
                { n: 9, answers: ["carbon"] },
                { n: 10, answers: ["mother"] },
                { n: 11, answers: ["soil"] },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 12, text: "What was one criticism made in the 2023 review?", options: ["Fungi do not help trees to obtain nutrients.", "Any carbon transferred might be too little to matter.", "Simard's experiments had been faked.", "Mother trees are too old to be studied."], answer: 1 },
                { n: 13, text: "What point does the writer make in the sixth paragraph?", options: ["The critics have clearly won the debate.", "Studying processes in soil is very difficult.", "Simard has accepted that she was wrong.", "Soil science is no longer important."], answer: 1 },
              ],
            },
          ],
        },
        // ---------------- Passage 2 ----------------
        {
          title: "Part 2",
          intro: "Read the text and answer questions 14–26.",
          passage: {
            title: "Finding longitude at sea",
            paragraphs: [
              "For centuries, sailors on long voyages faced a dangerous problem: they could not reliably tell how far east or west they had travelled. Finding latitude, the distance north or south of the equator, was relatively straightforward, since it could be calculated from the height of the sun at noon or of certain stars at night. Longitude was another matter, and errors in estimating it led to many shipwrecks and lost cargoes.",
              "The difficulty was connected to time. Because the Earth turns through 360 degrees in twenty-four hours, every hour of difference between local time on a ship and the time at a fixed reference point corresponds to fifteen degrees of longitude. A navigator could find local time by observing the sun, but to calculate longitude, he also needed to know the time at the reference point. In principle, a clock set to that time and carried on board would solve the problem. In practice, the clocks of the seventeenth century, which depended on pendulums, could not keep accurate time on a rolling ship, and they were affected by changes in temperature and humidity.",
              "After a series of disasters, the British government passed an act in 1714 offering a prize of up to twenty thousand pounds, an enormous sum at the time, to anyone who could find a practical method of determining longitude at sea. To win the full amount, the method had to be accurate to within half a degree on a voyage to the West Indies.",
              "Many astronomers believed that the answer lay in the sky. One proposed method, known as the lunar distance method, involved measuring the angle between the moon and a particular star and comparing it with tables showing where the moon would be at different times as seen from the reference point. The method was sound, but it required accurate tables, careful observations and lengthy calculations, which could take several hours.",
              "A very different approach was taken by John Harrison, a carpenter from Yorkshire with little formal education, who set out to build a clock that could keep accurate time at sea. Over several decades, he built a series of timekeepers, each more refined than the last. His fourth, completed in 1759, looked like a large pocket watch, about thirteen centimetres across. On a voyage to Jamaica in 1761–62, it lost only about five seconds, well within the accuracy required by the act.",
              "Harrison's success did not bring him immediate reward. The commissioners responsible for awarding the prize, several of whom favoured the astronomical method, demanded further trials and asked him to explain his design in detail and to show that copies could be made by others. Harrison, who believed that he was being treated unfairly, eventually appealed to King George III, and in 1773, when he was in his eighties, Parliament awarded him a substantial sum, although he never formally received the prize itself.",
              "For many years, both methods were used side by side, since marine timekeepers were expensive and the lunar method required only instruments that most ships already carried. By the middle of the nineteenth century, however, as the cost of reliable clocks fell, they had become standard equipment on ocean-going ships.",
            ],
          },
          groups: [
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 14, text: "Why was latitude easier to find than longitude?", options: ["It could be calculated from the position of the sun or stars.", "It did not change during a voyage.", "Ships carried special clocks for it.", "It was marked on all maps."], answer: 0 },
                { n: 15, text: "Why could seventeenth-century clocks not be used at sea?", options: ["They were too large to carry.", "They were affected by the movement of the ship and the weather.", "They were too expensive for most ships.", "Sailors did not know how to use them."], answer: 1 },
                { n: 16, text: "What was a disadvantage of the lunar distance method?", options: ["It was not based on sound science.", "It could only be used at noon.", "The calculations took a long time.", "It required a clock."], answer: 2 },
                { n: 17, text: "Why did both methods continue to be used for many years?", options: ["Harrison refused to share his design.", "Timekeepers were costly, while the lunar method used existing instruments.", "The government banned the use of clocks.", "Clocks were accurate only near the equator."], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the summary below. Choose ONE WORD AND/OR A NUMBER from the text for each answer.",
              heading: "The longitude prize",
              lines: [
                "Each hour of time difference equals [[18]] degrees of longitude.",
                "In 1714, the government offered a prize of up to £[[19]].",
                "The method had to be accurate on a voyage to the West [[20]].",
                "Harrison had trained as a [[21]].",
                "His fourth timekeeper was completed in [[22]].",
                "In the end, Harrison appealed to the [[23]].",
              ],
              gaps: [
                { n: 18, answers: ["fifteen", "15"] },
                { n: 19, answers: ["20,000", "20000", "twenty thousand"] },
                { n: 20, answers: ["indies"] },
                { n: 21, answers: ["carpenter"] },
                { n: 22, answers: ["1759"] },
                { n: 23, answers: ["king"] },
              ],
            },
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 24, text: "Harrison's fourth timekeeper lost only about five seconds on the voyage to Jamaica.", answer: "TRUE" },
                { n: 25, text: "All the commissioners supported Harrison's approach.", answer: "FALSE" },
                { n: 26, text: "Harrison's son helped him with the later trials.", answer: "NOT GIVEN" },
              ],
            },
          ],
        },
        // ---------------- Passage 3 ----------------
        {
          title: "Part 3",
          intro: "Read the text and answer questions 27–40.",
          passage: {
            title: "Do we still need public libraries?",
            paragraphs: [
              "Every few years, it seems, someone announces that the public library has had its day. Why, they ask, should taxpayers fund buildings full of books when almost any information can be found online in seconds, and when e-books can be downloaded at the touch of a button? In a period of tight public budgets, the argument has a certain appeal, and in a number of countries, libraries have closed or had their opening hours reduced.",
              "I believe this argument is mistaken, and that it rests on a misunderstanding of what libraries actually do. It is true that the number of books borrowed from many libraries has fallen. But to judge a library by its lending figures alone is rather like judging a hospital by the number of bandages it uses.",
              "Consider, first, the question of access to information. It is often assumed that everyone now has a fast internet connection and a suitable device. This is simply not the case. A significant number of households have no internet access at home, or rely entirely on a mobile phone with limited data. For people in this position, the library's free computers and internet connection are essential, whether they are applying for jobs, completing government forms that are now available only online, or helping their children with schoolwork. Library staff also spend a great deal of time helping people who lack the skills to use these services.",
              "Second, libraries are among the very few indoor public spaces where people can spend time without being expected to buy anything. Students use them as places to study, parents bring young children to reading sessions, and older people attend clubs and talks. For people who are lonely, a visit to the library may be one of their few regular social contacts. It is difficult to put a monetary value on such things, but that does not make them less important.",
              "Third, libraries continue to play a role in encouraging reading, particularly among children. Research has repeatedly linked reading for pleasure in childhood with success at school and beyond, and children from homes with few books benefit most from access to a library. Summer reading schemes, in which children are encouraged to read a certain number of books during the holidays, have been shown in some studies to reduce the decline in reading skills that often occurs over the summer.",
              "None of this means that libraries should remain unchanged. Some of the most successful libraries I have visited have reinvented themselves, offering spaces for meetings and performances, equipment such as 3D printers, and services ranging from advice on health to help with starting a business. I welcome these developments. There is a danger, however, that in trying to do everything, libraries may lose sight of their central purpose. Books and reading should remain at the heart of what they offer.",
              "Closing a library may save a modest amount of money in the short term. But the costs, which fall mainly on those with the least, are real, even if they do not appear in any budget. A society that values education, equality and community should regard its libraries not as a luxury but as a necessity.",
            ],
          },
          groups: [
            {
              kind: "ynng",
              instruction: "Do the following statements agree with the claims of the writer? Choose YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.",
              items: [
                { n: 27, text: "Lending figures alone are a poor way of measuring a library's value.", answer: "YES" },
                { n: 28, text: "Almost everyone now has fast internet access at home.", answer: "NO" },
                { n: 29, text: "Library staff should be paid more for helping people online.", answer: "NOT GIVEN" },
                { n: 30, text: "Libraries offer people a place to spend time without having to spend money.", answer: "YES" },
                { n: 31, text: "Libraries should offer new services such as 3D printing.", answer: "YES" },
                { n: 32, text: "Libraries should move away from their focus on books.", answer: "NO" },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 33, text: "Why does the writer compare a library to a hospital?", options: ["to show that both are expensive", "to argue that one measure gives a misleading picture", "to suggest that libraries should offer health services", "to explain why libraries are closing"], answer: 1 },
                { n: 34, text: "According to the writer, the library's computers are especially important for people who", options: ["want to play games.", "have limited or no internet access at home.", "work in technology.", "prefer e-books."], answer: 1 },
                { n: 35, text: "What does the writer say about summer reading schemes?", options: ["They have no measurable effect.", "Some studies suggest they help children keep their reading skills.", "They are too expensive to run.", "They are mainly for older children."], answer: 1 },
                { n: 36, text: "What is the writer's main concern about libraries reinventing themselves?", options: ["They may become too popular.", "They may forget their central purpose.", "They may charge for services.", "They may need larger buildings."], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the text for each answer.",
              lines: [
                "Some government [[37]] are now available only online.",
                "Parents bring young children to [[38]] at the library.",
                "Children from homes with [[39]] benefit most from libraries.",
                "According to the writer, the costs of closing a library fall mainly on those with [[40]].",
              ],
              gaps: [
                { n: 37, answers: ["forms"] },
                { n: 38, answers: ["reading sessions"] },
                { n: 39, answers: ["few books"] },
                { n: 40, answers: ["the least", "least"] },
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
            "The chart below shows the percentage of four types of household waste that was recycled in one country in 2005 and 2025.",
            "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          ],
          chart: {
            title: "Household waste recycled (%)",
            unit: "%",
            series: ["2005", "2025"],
            rows: [
              { label: "Paper", values: [48, 74] },
              { label: "Glass", values: [36, 69] },
              { label: "Plastic", values: [9, 38] },
              { label: "Food", values: [4, 27] },
            ],
          },
        },
        {
          title: "Part 2",
          suggestedMinutes: 40,
          minWords: 250,
          prompt: [
            "Some people think that it is better for children to grow up in the countryside than in a large city.",
            "To what extent do you agree or disagree?",
            "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
          ],
        },
      ],
    },
  ],
};
