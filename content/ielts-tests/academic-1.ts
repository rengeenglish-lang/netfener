import type { IeltsTest } from "./types";

/** Short sample of Academic Test 1: shows every screen of the test with a few original questions. */
export const ACADEMIC_1: IeltsTest = {
  id: "academic-1",
  track: "academic",
  no: 1,
  title: "IELTS Academic Practice Test 1",
  modules: [
    {
      id: "listening",
      minutes: 10,
      parts: [
        {
          title: "Part 1",
          intro: "Listen and answer questions 1–8.",
          script: [
            { who: "A", text: "Good morning, Riverside Leisure Centre. How can I help you?" },
            { who: "B", text: "Hi, I'd like to become a member, please." },
            { who: "A", text: "Of course. Can I take your name first?" },
            { who: "B", text: "Yes, it's Sarah Collins. That's C, O, double L, I, N, S." },
            { who: "A", text: "Thank you. We have three types of membership: full, off-peak and family. Which would you like?" },
            { who: "B", text: "I thought about full membership, but I can only come during the day, so off-peak would be better." },
            { who: "A", text: "Fine. And which activity are you most interested in? The gym, swimming or classes?" },
            { who: "B", text: "I'll use the gym sometimes, but mainly swimming." },
            { who: "A", text: "Lovely. When would you like to start? The first of March is a Saturday." },
            { who: "B", text: "I'm away that week. Could I start on the fourteenth of March?" },
            { who: "A", text: "Certainly. Off-peak membership is normally thirty-eight pounds a month, but this month it's thirty-two." },
            { who: "B", text: "Great. By the way, I'm joining because my doctor told me to exercise more. I'm not really trying to lose weight." },
            { who: "A", text: "That's a good reason. Do you drive? Members can park for free for two hours. After that you pay at the machine." },
            { who: "B", text: "Two hours is plenty. Is there anything I need to bring on my first visit?" },
            { who: "A", text: "Just a passport-sized photo for your card. We already have your bank details from the form, and we don't need proof of address." },
            { who: "B", text: "Perfect, thank you." },
          ],
          groups: [
            {
              kind: "notes",
              instruction: "Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.",
              heading: "Riverside Leisure Centre — New member form",
              lines: [
                "Name: Sarah [[1]]",
                "Membership type: [[2]]",
                "Main activity: [[3]]",
                "Start date: [[4]] March",
                "Monthly fee this month: £[[5]]",
              ],
              gaps: [
                { n: 1, answers: ["collins"] },
                { n: 2, answers: ["off-peak", "off peak", "offpeak"] },
                { n: 3, answers: ["swimming"] },
                { n: 4, answers: ["14", "14th", "fourteenth"] },
                { n: 5, answers: ["32"] },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B or C.",
              items: [
                { n: 6, text: "Why does Sarah want to join the centre?", options: ["to lose weight", "her doctor advised it", "to meet new people"], answer: 1 },
                { n: 7, text: "Car parking for members is", options: ["free all day.", "free for two hours.", "not available after 6 pm."], answer: 1 },
                { n: 8, text: "What must Sarah bring on her first visit?", options: ["a photo", "a bank card", "proof of address"], answer: 0 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "reading",
      minutes: 20,
      parts: [
        {
          title: "Part 1",
          intro: "Read the text and answer questions 1–9.",
          passage: {
            title: "The return of the urban beehive",
            paragraphs: [
              "Twenty years ago, keeping bees was seen as a rural hobby, practised mainly by farmers and retired people with large gardens. Today, hives can be found on office roofs, hotel terraces and school grounds in many large cities. In London alone, the number of registered hives more than doubled in the decade after 2008.",
              "Supporters argue that city beekeeping helps to reverse the decline of pollinating insects. Urban areas, they point out, often contain a surprising variety of flowering plants in parks, gardens and along railway lines, and they are largely free of the pesticides used on farmland. Honey produced in cities has even won national prizes.",
              "However, some ecologists are worried. Honeybees are only one of hundreds of bee species, and most wild bees live alone rather than in colonies. When too many hives are placed in a small area, honeybees may take the nectar and pollen that wild species depend on. A study in Paris found that wild bee visits to flowers fell as the density of hives rose.",
              "For this reason, several city councils now advise companies to support pollinators in other ways, for example by planting native flowers or leaving areas of grass uncut. Beekeeping associations have also begun to offer courses that teach new keepers how to judge whether their neighbourhood can support another colony. The aim, one trainer explains, is not to stop urban beekeeping, but to make sure it helps more than it harms.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 1, text: "Beekeeping used to be associated mainly with the countryside.", answer: "TRUE" },
                { n: 2, text: "The number of hives in London fell after 2008.", answer: "FALSE" },
                { n: 3, text: "City honey usually sells for a higher price than farm honey.", answer: "NOT GIVEN" },
                { n: 4, text: "Most species of wild bee live in large colonies.", answer: "FALSE" },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                {
                  n: 5,
                  text: "According to supporters, cities can be good places for bees because",
                  options: ["they are warmer than the countryside.", "they contain many flowering plants and few pesticides.", "there are fewer wild bees competing for food.", "councils pay keepers to put hives on roofs."],
                  answer: 1,
                },
                {
                  n: 6,
                  text: "What did the study in Paris show?",
                  options: ["Honeybees prefer native flowers.", "Wild bees visit more flowers in winter.", "More hives meant fewer wild bee visits to flowers.", "City hives produce less honey each year."],
                  answer: 2,
                },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the sentences. Choose NO MORE THAN TWO WORDS from the text for each answer.",
              lines: [
                "Councils suggest that companies plant [[7]] instead of keeping hives.",
                "Leaving some [[8]] uncut also helps pollinators.",
                "New courses help keepers decide if their [[9]] can support another colony.",
              ],
              gaps: [
                { n: 7, answers: ["native flowers"] },
                { n: 8, answers: ["grass", "areas of grass"] },
                { n: 9, answers: ["neighbourhood", "neighborhood"] },
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
            "The chart below shows the percentage of workers who cycled to work in three cities in 2005 and 2025.",
            "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          ],
          chart: {
            title: "Workers cycling to work (%)",
            unit: "%",
            series: ["2005", "2025"],
            rows: [
              { label: "Northport", values: [4, 15] },
              { label: "Eastvale", values: [12, 14] },
              { label: "Westbury", values: [9, 6] },
            ],
          },
        },
        {
          title: "Part 2",
          suggestedMinutes: 40,
          minWords: 250,
          prompt: [
            "Some people believe that universities should only offer subjects that prepare students directly for a job. Others think universities should also teach subjects that have no obvious practical use.",
            "Discuss both views and give your own opinion.",
            "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
          ],
        },
      ],
    },
  ],
};
