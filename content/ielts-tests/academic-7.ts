import type { IeltsTest } from "./types";

/** IELTS Academic Practice Test 7: Reading and Writing. Original Netfener content. */
export const ACADEMIC_7: IeltsTest = {
  id: "academic-7",
  track: "academic",
  no: 7,
  title: "IELTS Academic Practice Test 7",
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
            title: "Why cities are warmer",
            paragraphs: [
              "On a calm summer evening, the centre of a large city can be several degrees warmer than the countryside only a few kilometres away. The difference is often greatest after sunset, when rural areas cool quickly but streets and buildings continue to release the heat they absorbed during the day. Scientists call this effect the urban heat island, and it was first described in the early nineteenth century by Luke Howard, an amateur scientist who recorded temperatures in and around London for several years.",
              "Several factors combine to produce the effect. The first is the materials from which cities are built. Asphalt, concrete, brick and stone absorb large amounts of energy from the sun and store it, releasing it slowly as heat. Dark surfaces, such as roads and many roofs, absorb more energy than light ones. In the countryside, by contrast, much of the ground is covered by soil and plants.",
              "The second factor is the shortage of vegetation. Plants cool their surroundings by releasing water vapour through their leaves, a process called transpiration, which uses energy that would otherwise warm the air. Trees also provide shade. In a city where most of the ground is covered by buildings and paving, this natural cooling is largely lost.",
              "The shape of the city matters too. Tall buildings arranged along narrow streets form what researchers call urban canyons. These trap heat that would otherwise escape into the sky at night, and they reduce the speed of the wind, which would carry warm air away. Finally, cities produce heat of their own, from vehicles, factories and air-conditioning units, which pump heat out of buildings and into the street.",
              "The consequences can be serious. During heatwaves, high night-time temperatures prevent people's bodies from recovering from the heat of the day, and older people and those with health problems are particularly at risk. Higher temperatures also increase the demand for air conditioning, which uses large amounts of electricity and, in turn, adds more heat to the streets.",
              "Cities are now experimenting with a range of solutions. One of the simplest is to make surfaces lighter in colour so that they reflect more sunlight. Some cities have painted roofs white, and others have tested pale coatings on roads and playgrounds, which can reduce surface temperatures considerably on sunny days. Planting trees and creating parks is another approach, although trees need space, water and years to grow. Green roofs, covered with plants, can also help, and they have the added benefit of absorbing rainwater.",
              "Researchers caution, however, that no single measure is enough on its own, and that solutions must suit the local climate. In a hot, dry city, for example, planting trees that need a great deal of water may not be practical, while in a humid city, light-coloured surfaces may be more effective. What is clear is that, as cities grow and summers become hotter, keeping them cool will be one of the major challenges of urban planning.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
              items: [
                { n: 1, text: "The difference in temperature between cities and the countryside is usually greatest at midday.", answer: "FALSE" },
                { n: 2, text: "Luke Howard was a professional scientist employed by a university.", answer: "FALSE" },
                { n: 3, text: "Dark roofs absorb more energy from the sun than light-coloured roofs.", answer: "TRUE" },
                { n: 4, text: "Air-conditioning units add heat to the streets outside buildings.", answer: "TRUE" },
                { n: 5, text: "Heatwaves cause more deaths in cities than in rural areas.", answer: "NOT GIVEN" },
                { n: 6, text: "Green roofs can help to absorb rainwater.", answer: "TRUE" },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the notes below. Choose ONE WORD ONLY from the text for each answer.",
              heading: "Causes of the urban heat island",
              lines: [
                "Building materials store energy and release it slowly as [[7]]",
                "Plants cool the air through a process known as [[8]]",
                "Trees also provide [[9]]",
                "Tall buildings along narrow streets create urban [[10]]",
                "These reduce the speed of the [[11]]",
              ],
              gaps: [
                { n: 7, answers: ["heat"] },
                { n: 8, answers: ["transpiration"] },
                { n: 9, answers: ["shade"] },
                { n: 10, answers: ["canyons"] },
                { n: 11, answers: ["wind"] },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 12, text: "What does the writer say about planting trees?", options: ["It is the cheapest solution.", "It takes time and requires space and water.", "It works only in humid cities.", "It has no effect at night."], answer: 1 },
                { n: 13, text: "What is the main point of the final paragraph?", options: ["Light-coloured surfaces are always the best solution.", "Cities should stop growing.", "Solutions need to be combined and suited to local conditions.", "The problem will soon disappear."], answer: 2 },
              ],
            },
          ],
        },
        // ---------------- Passage 2 ----------------
        {
          title: "Part 2",
          intro: "Read the text and answer questions 14–26.",
          passage: {
            title: "The rise of the citizen scientist",
            paragraphs: [
              "For most of history, scientific research was carried out by a small number of specialists. Today, millions of ordinary people take part in scientific projects in their spare time, counting birds, classifying images of distant galaxies, recording the weather or testing the water in local rivers. This kind of activity, known as citizen science, has grown rapidly in recent decades, and it is now making a real contribution to research in many fields.",
              "In some ways, the idea is not new. Before science became a profession in the nineteenth century, many important observations were made by amateurs, such as clergymen who recorded plants and insects in their parishes. One of the longest-running citizen science projects, a bird count organised every winter in North America, began in 1900, when an ornithologist suggested that people should count birds on Christmas Day rather than hunting them, as had been the custom.",
              "What has changed is the scale. The internet and smartphones have made it possible for huge numbers of people to contribute data and to analyse information collected by professional scientists. In 2007, a project was launched that asked members of the public to classify the shapes of galaxies in images taken by a telescope. The researchers had expected the task to take years; instead, within twenty-four hours of the launch, volunteers were classifying tens of thousands of galaxies an hour. One volunteer, a Dutch schoolteacher, noticed an unusual green object in one image, which turned out to be a previously unknown type of astronomical feature.",
              "Citizen science has particular value in studies that require observations over a large area or a long period of time. No research team could afford to employ enough people to monitor the timing of spring flowering across an entire country, but thousands of volunteers can do it at little cost. Records of this kind have helped scientists to show how climate change is affecting the natural world, for example by causing birds to lay their eggs earlier in the year.",
              "There are, however, challenges. One concerns the quality of the data. Volunteers may lack training and make mistakes, such as misidentifying species. Researchers have developed a number of ways of dealing with this problem. Many projects ask several volunteers to examine the same item, so that errors can be identified, and some provide training or test participants before they begin. Studies comparing volunteer and professional data have often found that, with such checks in place, volunteers can be just as accurate.",
              "Another challenge is keeping people involved. Many volunteers take part only once or twice, and projects depend heavily on a small number of very active participants. Researchers have found that people are more likely to stay involved if they feel that their work is valued, if they receive feedback about what has been discovered, and if they can see how their contribution fits into the larger project.",
              "Some scientists see citizen science not only as a source of data but also as a way of improving public understanding of science. Participants often learn a great deal about the subject they are studying, and they gain a better sense of how scientific research is actually done. In a world where trust in experts is sometimes low, this may be one of its most important benefits.",
            ],
          },
          groups: [
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 14, text: "What does the writer say about the history of citizen science?", options: ["It began with the invention of the internet.", "Amateurs made important observations before science became a profession.", "It was banned in the nineteenth century.", "It was first organised by clergymen."], answer: 1 },
                { n: 15, text: "Why did the North American bird count begin?", options: ["to replace a tradition of hunting birds", "to measure the effects of climate change", "to train young ornithologists", "to raise money for research"], answer: 0 },
                { n: 16, text: "What surprised the researchers in the galaxy project?", options: ["the quality of the telescope images", "how quickly volunteers completed the work", "the number of Dutch volunteers", "how few galaxies there were"], answer: 1 },
                { n: 17, text: "Why is citizen science useful for studying spring flowering?", options: ["Volunteers are better trained than scientists.", "It requires observations across a large area.", "Flowers are difficult to photograph.", "Professional scientists are not interested in it."], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the summary below. Choose ONE WORD ONLY from the text for each answer.",
              heading: "Challenges of citizen science",
              lines: [
                "Volunteers may lack [[18]] and make mistakes.",
                "For example, they may misidentify [[19]].",
                "Projects often ask [[20]] volunteers to look at the same item.",
                "Some projects [[21]] participants before they start.",
                "Volunteers stay involved if they receive [[22]] about discoveries.",
                "Projects rely on a small number of very [[23]] participants.",
              ],
              gaps: [
                { n: 18, answers: ["training"] },
                { n: 19, answers: ["species"] },
                { n: 20, answers: ["several"] },
                { n: 21, answers: ["test"] },
                { n: 22, answers: ["feedback"] },
                { n: 23, answers: ["active"] },
              ],
            },
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 24, text: "The green object found by the Dutch schoolteacher was a new type of feature.", answer: "TRUE" },
                { n: 25, text: "Studies show that volunteer data is always less accurate than professional data.", answer: "FALSE" },
                { n: 26, text: "Most citizen science projects are funded by governments.", answer: "NOT GIVEN" },
              ],
            },
          ],
        },
        // ---------------- Passage 3 ----------------
        {
          title: "Part 3",
          intro: "Read the text and answer questions 27–40.",
          passage: {
            title: "Is homework worth it?",
            paragraphs: [
              "Few aspects of school life cause as much argument as homework. Some parents complain that their children have far too much, leaving no time for play, sport or family life. Others worry that their children have too little and will fall behind. Teachers are often caught in the middle, and the research that might settle the matter has produced results that are more complicated than either side would like.",
              "Let me state my own position at the outset. I am not opposed to homework, and I believe that, used well, it can be valuable. But I am convinced that much of the homework set in schools today is poorly designed, and that for younger children in particular, the amount could be reduced without any loss to their education.",
              "The research evidence supports a distinction based on age. Studies of older secondary school students have generally found a positive link between homework and achievement, although the benefits appear to level off beyond a certain amount, often estimated at around one to two hours a night. For primary school children, however, the link is weak or absent. Young children have less ability to concentrate on their own, and the tasks they are given are often of limited value.",
              "Supporters of homework argue that, even if it does little to raise test scores in the early years, it teaches children useful habits, such as organising their time and working independently. This is a reasonable argument, and I have some sympathy with it. But it assumes that children are actually doing the work themselves. In reality, the homework of young children is often completed with considerable help from parents, which brings me to my second concern.",
              "Homework can widen the gap between children from different backgrounds. A child whose parents have the time, education and confidence to help, and who has a quiet place to work and access to a computer, is at a clear advantage over a child who has none of these things. Schools that set large amounts of homework may therefore, without intending it, be rewarding children for the circumstances of their families rather than for their own efforts. Some schools have responded by offering homework clubs, where pupils can work after lessons with support from staff, and I would like to see these become far more common.",
              "My third concern is the quality of the tasks. Too often, homework consists of finishing work that was not completed in class, or of repetitive exercises whose purpose is unclear to pupils. The most useful homework, in my experience, is closely connected to what is being learned in class, is short enough to be completed without help, and is followed up by the teacher. Reading for pleasure, which many studies have linked to success at school, deserves a far more central place than it usually receives.",
              "Some countries and schools have gone further and abolished homework altogether in primary schools. The results of these experiments are still being studied, and I would not recommend such a step everywhere. What I would recommend is that every school should be able to explain clearly why it sets the homework it does. If it cannot, perhaps the time would be better spent on something else.",
            ],
          },
          groups: [
            {
              kind: "ynng",
              instruction: "Do the following statements agree with the claims of the writer? Choose YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.",
              items: [
                { n: 27, text: "Homework should be abolished in all schools.", answer: "NO" },
                { n: 28, text: "Younger children could be given less homework without harming their education.", answer: "YES" },
                { n: 29, text: "The argument that homework teaches useful habits has some merit.", answer: "YES" },
                { n: 30, text: "Teachers spend too much time marking homework.", answer: "NOT GIVEN" },
                { n: 31, text: "Homework clubs should be more widely available.", answer: "YES" },
                { n: 32, text: "Reading for pleasure is given enough attention in most schools.", answer: "NO" },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 33, text: "What does research suggest about homework for older secondary students?", options: ["It has no effect on achievement.", "More is always better.", "It helps, but the benefits level off.", "It is less useful than for primary pupils."], answer: 2 },
                { n: 34, text: "Why does the writer mention parents helping young children?", options: ["to show that parents enjoy helping", "to question whether children are really learning independent habits", "to argue that parents should be paid", "to suggest that teachers are not needed"], answer: 1 },
                { n: 35, text: "According to the writer, large amounts of homework may", options: ["benefit children whose families can support them.", "reduce the gap between children.", "improve children's sleep.", "make schools more popular."], answer: 0 },
                { n: 36, text: "What does the writer recommend in the final paragraph?", options: ["that all schools copy countries that have abolished homework", "that schools be able to justify the homework they set", "that parents decide how much homework is set", "that homework be replaced by sport"], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the text for each answer.",
              lines: [
                "The benefits for older students often level off at around one to [[37]] a night.",
                "Some children lack a quiet place to work and access to a [[38]].",
                "Useful homework is short enough to be completed [[39]].",
                "Poor homework often involves [[40]] exercises with an unclear purpose.",
              ],
              gaps: [
                { n: 37, answers: ["two hours"] },
                { n: 38, answers: ["computer"] },
                { n: 39, answers: ["without help"] },
                { n: 40, answers: ["repetitive"] },
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
            "The chart below shows the average number of hours per day that people in four age groups spent looking at screens in 2015 and 2025.",
            "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          ],
          chart: {
            title: "Average daily screen time (hours)",
            unit: "hours",
            series: ["2015", "2025"],
            rows: [
              { label: "13–17", values: [5.2, 7.4] },
              { label: "18–34", values: [6.1, 7.9] },
              { label: "35–54", values: [4.3, 6.2] },
              { label: "55+", values: [3.1, 4.8] },
            ],
          },
        },
        {
          title: "Part 2",
          suggestedMinutes: 40,
          minWords: 250,
          prompt: [
            "In many cities, the number of people living alone has increased considerably in recent years.",
            "What are the reasons for this trend? Is it a positive or a negative development?",
            "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
          ],
        },
      ],
    },
  ],
};
