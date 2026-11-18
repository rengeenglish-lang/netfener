import type { IeltsTest } from "./types";

const TOURS = ["Harbour Boat Trip", "Old Town Walking Tour", "Food Market Tour", "Night Ghost Walk", "Bike the Coast"];

/** IELTS General Training Practice Test 8: Reading and Writing. Original Netfener content. */
export const GENERAL_8: IeltsTest = {
  id: "general-8",
  track: "general",
  no: 8,
  title: "IELTS General Training Practice Test 8",
  modules: [
    {
      id: "reading",
      minutes: 60,
      parts: [
        // ---------------- Section 1 ----------------
        {
          title: "Part 1",
          intro: "Read the texts and answer questions 1–14.",
          passage: {
            title: "Lakeside Campsite — Rules for visitors",
            paragraphs: [
              "Welcome to Lakeside Campsite. Arrivals are welcome between 2 p.m. and 8 p.m. If you expect to arrive later, please phone the site office so that we can leave your information pack at the gate. On the day you leave, pitches must be cleared by 11 a.m.",
              "Each pitch can be used by a maximum of six people and one vehicle. Additional cars must be left in the visitors' car park near the entrance, for which a small daily charge is made. The speed limit on the site is 8 kilometres per hour.",
              "Campfires are not permitted anywhere on the site, but barbecues may be used if they are raised off the ground. Disposable barbecues must be placed in the metal bins provided once they have cooled.",
              "Dogs are welcome, but they must be kept on a lead at all times and are not allowed in the shower blocks or the shop. A dog-walking area is provided next to the lake.",
              "Quiet time is from 10.30 p.m. to 7 a.m. During this period, please keep noise to a minimum and do not drive on the site except in an emergency. Swimming in the lake is allowed only in the marked area and only when a lifeguard is on duty.",
              "City tours from the tourist information centre",
              "A  Harbour Boat Trip. One-hour cruise around the harbour with commentary. Runs every hour from 10 a.m. Not suitable for wheelchair users.",
              "B  Old Town Walking Tour. Two-hour tour of historic streets with a local guide. Free of charge, but guides welcome tips.",
              "C  Food Market Tour. Taste local specialities at the covered market. Price includes all food. Not available on Mondays, when the market is closed.",
              "D  Night Ghost Walk. Stories of the city's dark past. Starts at 9 p.m. Not recommended for children under twelve.",
              "E  Bike the Coast. Three-hour cycle ride along the coastal path. Bikes and helmets included. Minimum height for riders: 1.4 metres.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information about Lakeside Campsite? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 1, text: "Visitors arriving after 8 p.m. should contact the site office.", answer: "TRUE" },
                { n: 2, text: "Two cars may be parked on each pitch.", answer: "FALSE" },
                { n: 3, text: "Parking in the visitors' car park is free.", answer: "FALSE" },
                { n: 4, text: "Campfires are allowed in some parts of the site.", answer: "FALSE" },
                { n: 5, text: "Dogs may be taken into the shop.", answer: "FALSE" },
                { n: 6, text: "The shop sells fresh bread every morning.", answer: "NOT GIVEN" },
                { n: 7, text: "Swimming is only permitted when a lifeguard is present.", answer: "TRUE" },
              ],
            },
            {
              kind: "choice",
              instruction: "Look at the five city tours, A–E. Which tour is each statement true of? You may choose any letter more than once.",
              items: [
                { n: 8, text: "There is no fixed price for this tour.", options: TOURS, answer: 1 },
                { n: 9, text: "It is not suitable for young children.", options: TOURS, answer: 3 },
                { n: 10, text: "Equipment is provided as part of the price.", options: TOURS, answer: 4 },
                { n: 11, text: "It cannot be taken on one day of the week.", options: TOURS, answer: 2 },
                { n: 12, text: "People in wheelchairs cannot join it.", options: TOURS, answer: 0 },
                { n: 13, text: "Participants must be tall enough to take part.", options: TOURS, answer: 4 },
                { n: 14, text: "It takes place in the evening.", options: TOURS, answer: 3 },
              ],
            },
          ],
        },
        // ---------------- Section 2 ----------------
        {
          title: "Part 2",
          intro: "Read the texts and answer questions 15–27.",
          passage: {
            title: "Halden Insurance — Working from home policy",
            paragraphs: [
              "Halden Insurance allows most office staff to work from home for up to three days a week, once they have completed their probation period of six months. Staff who wish to work from home must agree a regular pattern with their line manager, which will be reviewed every six months. All staff are expected to be in the office on Tuesdays, when team meetings are held.",
              "Equipment. The company will provide a laptop, a monitor, a keyboard and a headset for use at home. Staff can also claim up to £200 towards the cost of a suitable desk or chair. Receipts must be submitted within one month of purchase. All equipment remains the property of the company and must be returned if you leave.",
              "Your workspace. Before you begin working from home, you must complete an online assessment of your home workspace, which checks that your desk, chair and lighting are suitable. If any problems are identified, your manager will discuss how they can be solved.",
              "Working hours. When working from home, you should keep to your normal working hours and be available by phone and video call during the company's core hours of 10 a.m. to 4 p.m. You should take regular breaks away from your screen, and you are not expected to reply to messages outside your working hours.",
              "Security",
              "Company information must be kept secure at all times. Only use the laptop provided by the company for work, and do not allow family members or friends to use it. Make sure your home wi-fi network is protected by a password. When taking part in calls, be careful that other people cannot overhear confidential conversations.",
              "Paper documents containing customers' personal details should not be taken home. If you print a document at home for any reason, it must be brought back to the office and placed in the secure recycling bins rather than thrown away with household waste. Any loss or theft of company equipment must be reported to the IT helpdesk immediately, so that the device can be locked remotely.",
            ],
          },
          groups: [
            {
              kind: "notes",
              instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.",
              heading: "Working from home: key points",
              lines: [
                "Staff can work from home after a probation period of [[15]] months.",
                "The working pattern is agreed with the [[16]].",
                "All staff must be in the office on [[17]].",
                "Staff may claim up to £[[18]] for a desk or chair.",
                "Receipts must be sent within one [[19]].",
                "An online [[20]] of the home workspace is required.",
                "Staff must be available during core hours from 10 a.m. to [[21]].",
              ],
              gaps: [
                { n: 15, answers: ["6", "six"] },
                { n: 16, answers: ["line manager"] },
                { n: 17, answers: ["tuesdays", "tuesday"] },
                { n: 18, answers: ["200"] },
                { n: 19, answers: ["month"] },
                { n: 20, answers: ["assessment"] },
                { n: 21, answers: ["4 p.m.", "4 pm", "4"] },
              ],
            },
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information in the text about security? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 22, text: "Family members may use the company laptop for personal tasks.", answer: "FALSE" },
                { n: 23, text: "Staff should use a password on their home wi-fi.", answer: "TRUE" },
                { n: 24, text: "Staff may take documents with customers' personal details home.", answer: "FALSE" },
                { n: 25, text: "Documents printed at home should be put in household rubbish.", answer: "FALSE" },
                { n: 26, text: "The company has had problems with stolen laptops in the past.", answer: "NOT GIVEN" },
                { n: 27, text: "Lost devices can be locked by the IT helpdesk.", answer: "TRUE" },
              ],
            },
          ],
        },
        // ---------------- Section 3 ----------------
        {
          title: "Part 3",
          intro: "Read the text and answer questions 28–40.",
          passage: {
            title: "Why we keep pets",
            paragraphs: [
              "In many countries, more households now contain a pet than contain a child. People spend large sums on food, toys, medical treatment and even clothing for their animals, and many describe their pets as members of the family. From a purely practical point of view, this is puzzling. Unlike farm animals, most pets provide no food or income, and unlike working dogs, many perform no useful task. Why, then, do so many people choose to share their homes with them?",
              "The relationship between humans and animals is ancient. Dogs were the first animals to be domesticated, and genetic evidence suggests that they are descended from wolves that began living alongside human groups at least fifteen thousand years ago. At first, these animals probably helped with hunting and guarding, and they may have fed on the waste food left by people. Cats came later. They appear to have attached themselves to human settlements after the beginning of farming, attracted by the mice and rats that fed on stored grain. In both cases, the relationship probably began because it benefited both sides.",
              "Today, the benefits are mostly of a different kind. Many studies have suggested that owning a pet can be good for people's health. Dog owners, for example, tend to take more exercise, since dogs need to be walked every day. Some research has found that stroking an animal can lower blood pressure and reduce stress, and pets are now used in some hospitals, care homes and schools to comfort patients and help children who find reading aloud difficult. Pets may also help people to meet others: dog owners often say that they have got to know neighbours while out walking.",
              "Scientists caution, however, that the evidence is not always as strong as is sometimes claimed. People who own pets may differ in other ways from those who do not; they may, for example, be wealthier or healthier to begin with, which makes it difficult to tell whether the pets themselves are responsible for any benefits. Some large studies have found little difference in health between owners and non-owners once these other factors are taken into account.",
              "For many owners, though, the most important reason for keeping a pet has little to do with health. It is the emotional bond. Pets offer companionship, and they respond to their owners with what appears to be affection, without judging them. Research has shown that when dogs and their owners look into each other's eyes, levels of a hormone associated with social bonding rise in both, much as they do between parents and young children.",
              "Owning a pet also brings responsibilities and costs. Animals need food, exercise, medical care and attention throughout their lives, which for some species can last fifteen years or more. Animal welfare organisations report that large numbers of pets are abandoned each year, often because their owners did not realise how much work they would involve. Many organisations therefore urge people to think carefully, and to consider adopting an animal from a shelter, before bringing a pet into their home.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 28, text: "Cats were domesticated before dogs.", answer: "FALSE" },
                { n: 29, text: "Cats were attracted to farming settlements by mice and rats.", answer: "TRUE" },
                { n: 30, text: "Pets are used in some schools to help children with reading.", answer: "TRUE" },
                { n: 31, text: "Cat owners take more exercise than dog owners.", answer: "NOT GIVEN" },
                { n: 32, text: "All large studies show that pet owners are much healthier.", answer: "FALSE" },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 33, text: "Why does the writer find the popularity of pets puzzling 'from a purely practical point of view'?", options: ["Pets are often unhealthy.", "Most pets provide no food, income or useful work.", "Pets are difficult to buy.", "Most people dislike animals."], answer: 1 },
                { n: 34, text: "How did the relationship between humans and early dogs probably begin?", options: ["People caught wolves to keep as pets.", "It benefited both humans and the animals.", "Dogs were bred for food.", "Wolves were afraid of humans."], answer: 1 },
                { n: 35, text: "Why is it difficult to prove that pets improve health?", options: ["Few people own pets.", "Pet owners may already differ from non-owners in other ways.", "Scientists are not interested in pets.", "Pets are rarely ill."], answer: 1 },
                { n: 36, text: "What happens when dogs and owners look into each other's eyes?", options: ["Both become more stressed.", "A hormone linked to social bonding increases in both.", "The dog's blood pressure rises.", "The owner feels judged."], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the sentences below. Choose ONE WORD AND/OR A NUMBER from the text for each answer.",
              lines: [
                "Dogs are descended from [[37]].",
                "Dogs began living with humans at least [[38]] years ago.",
                "Stroking an animal may reduce [[39]] and lower blood pressure.",
                "Animal organisations suggest adopting an animal from a [[40]].",
              ],
              gaps: [
                { n: 37, answers: ["wolves"] },
                { n: 38, answers: ["15,000", "15000", "fifteen thousand"] },
                { n: 39, answers: ["stress"] },
                { n: 40, answers: ["shelter"] },
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
            "You recently bought an expensive kitchen appliance online, but it stopped working after two weeks.",
            "Write a letter to the company that sold it. In your letter: give details of the appliance and when you bought it; describe the problem; say what you would like the company to do.",
            "Begin your letter as follows: Dear Sir or Madam,",
          ],
        },
        {
          title: "Part 2",
          suggestedMinutes: 40,
          minWords: 250,
          prompt: [
            "Some people believe that it is the responsibility of parents to teach children how to manage money. Others think that this should be taught at school.",
            "Discuss both views and give your own opinion.",
            "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
          ],
        },
      ],
    },
  ],
};
