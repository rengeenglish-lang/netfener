import type { IeltsTest } from "./types";

const CARS = ["CityDrive", "Budget Wheels", "Coastal Car Hire", "EcoRide", "VanGo"];

/** IELTS General Training Practice Test 6: Reading and Writing. Original Netfener content. */
export const GENERAL_6: IeltsTest = {
  id: "general-6",
  track: "general",
  no: 6,
  title: "IELTS General Training Practice Test 6",
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
            title: "Northgate Public Library — Services for members",
            paragraphs: [
              "Membership of Northgate Public Library is free for everyone who lives, works or studies in the area. To join, bring proof of your address, such as a recent bill, to any of our branches. Children under sixteen need a parent or guardian to sign their application form.",
              "Members can borrow up to twelve items at a time, including books, audiobooks and DVDs. Books may be borrowed for three weeks and DVDs for one week. Items can be renewed twice, online or by phone, unless another member has reserved them. A small charge is made for items returned late, except for children's books, which are free of charges.",
              "Our branches offer free use of computers and wi-fi. Computers can be booked for up to two hours a day. Printing and photocopying are available for a small fee, payable by card only.",
              "The Central Library also has a local history room, which holds old maps, newspapers and photographs of the area. The room is open on Tuesdays and Thursdays, and visitors are asked to make an appointment. Items in the local history room cannot be borrowed.",
              "Car hire companies at Northgate Station",
              "A  CityDrive. Small cars ideal for driving in town. Cars can be returned to any of their 15 city locations.",
              "B  Budget Wheels. Lowest prices in the area, but cars must be returned with a full tank of fuel. Minimum age for drivers: 25.",
              "C  Coastal Car Hire. Wide range of cars, including convertibles. Free child seats. Open seven days a week.",
              "D  EcoRide. Electric cars only. Free charging at stations across the region. Hire by the hour available.",
              "E  VanGo. Vans of various sizes for moving house or transporting goods. Discounts for bookings of a week or more.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information about Northgate Public Library? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 1, text: "Only people who live in the area can join the library.", answer: "FALSE" },
                { n: 2, text: "DVDs can be borrowed for three weeks.", answer: "FALSE" },
                { n: 3, text: "Items cannot be renewed if another member has reserved them.", answer: "TRUE" },
                { n: 4, text: "There is no charge for returning children's books late.", answer: "TRUE" },
                { n: 5, text: "Printing can be paid for in cash.", answer: "FALSE" },
                { n: 6, text: "The local history room is open every weekday.", answer: "FALSE" },
                { n: 7, text: "The library plans to put its old photographs online.", answer: "NOT GIVEN" },
              ],
            },
            {
              kind: "choice",
              instruction: "Look at the five car hire companies, A–E. Which company is each statement true of? You may choose any letter more than once.",
              items: [
                { n: 8, text: "You can hire a vehicle for just a few hours.", options: CARS, answer: 3 },
                { n: 9, text: "Young drivers cannot hire from this company.", options: CARS, answer: 1 },
                { n: 10, text: "It is the best choice if you are moving to a new home.", options: CARS, answer: 4 },
                { n: 11, text: "You do not need to bring the car back to the same place.", options: CARS, answer: 0 },
                { n: 12, text: "Families travelling with small children do not pay extra for a seat.", options: CARS, answer: 2 },
                { n: 13, text: "Longer hires are cheaper.", options: CARS, answer: 4 },
                { n: 14, text: "You will not need to pay for fuel or electricity on the road.", options: CARS, answer: 3 },
              ],
            },
          ],
        },
        // ---------------- Section 2 ----------------
        {
          title: "Part 2",
          intro: "Read the texts and answer questions 15–27.",
          passage: {
            title: "Starting work at Coastline Café: staff handbook",
            paragraphs: [
              "Welcome to the Coastline Café team. On your first day, please arrive at 8 a.m. and report to the duty manager, who will give you a tour of the café and introduce you to your colleagues. You will spend your first week working alongside an experienced member of staff, known as your buddy, who will help you learn our routines.",
              "Uniform. You will be given two black T-shirts and an apron with the café's logo. Please provide your own black trousers and comfortable, closed shoes with non-slip soles. Long hair must be tied back. Uniforms should be washed at home and brought in clean for every shift.",
              "Hours and breaks. Your weekly rota will be posted on the noticeboard in the staff room every Thursday for the following week. If you wish to swap a shift with a colleague, you must get the approval of the duty manager first. Staff working shifts of more than six hours are entitled to a thirty-minute unpaid break. You may have one free hot drink and a meal from the staff menu during each shift.",
              "Sickness. If you are unable to come to work because of illness, you must phone the duty manager at least two hours before your shift is due to start. Text messages and emails are not acceptable. If you are absent for more than three days, you will need to provide a note from your doctor.",
              "Food hygiene",
              "All staff who handle food must complete an online food hygiene course within their first two weeks of employment. The course takes about three hours, and you will be paid for the time it takes. Hands must be washed before starting work, after breaks and after handling rubbish or raw food. Separate chopping boards, marked with different colours, must be used for raw meat, vegetables and bread.",
              "Any member of staff who has had stomach illness must not return to work until forty-eight hours after their symptoms have stopped. All food in the fridges must be labelled with the date on which it was prepared. Food that is past its use-by date must be thrown away, even if it appears to be in good condition.",
            ],
          },
          groups: [
            {
              kind: "notes",
              instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.",
              heading: "New staff at Coastline Café",
              lines: [
                "On the first day, report to the [[15]].",
                "An experienced colleague, called a [[16]], helps in the first week.",
                "Staff must provide black trousers and shoes with [[17]] soles.",
                "The rota is put on the noticeboard every [[18]].",
                "Shift swaps must be approved by the duty manager.",
                "Shifts over six hours include an unpaid break of [[19]] minutes.",
                "When ill, staff must [[20]] the duty manager.",
                "After more than three days' absence, a note from a [[21]] is needed.",
              ],
              gaps: [
                { n: 15, answers: ["duty manager"] },
                { n: 16, answers: ["buddy"] },
                { n: 17, answers: ["non-slip"] },
                { n: 18, answers: ["thursday"] },
                { n: 19, answers: ["30", "thirty"] },
                { n: 20, answers: ["phone"] },
                { n: 21, answers: ["doctor"] },
              ],
            },
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information in the text about food hygiene? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 22, text: "The food hygiene course must be completed before the first shift.", answer: "FALSE" },
                { n: 23, text: "Staff are paid for the time they spend on the course.", answer: "TRUE" },
                { n: 24, text: "The same chopping board may be used for meat and bread.", answer: "FALSE" },
                { n: 25, text: "Staff with stomach illness must wait two days after symptoms stop before returning.", answer: "TRUE" },
                { n: 26, text: "The café is inspected by health officers every year.", answer: "NOT GIVEN" },
                { n: 27, text: "Food past its use-by date may be kept if it looks fresh.", answer: "FALSE" },
              ],
            },
          ],
        },
        // ---------------- Section 3 ----------------
        {
          title: "Part 3",
          intro: "Read the text and answer questions 28–40.",
          passage: {
            title: "The riders who carried the mail",
            paragraphs: [
              "In the spring of 1860, a newspaper advertisement appeared in California asking for 'young, skinny, wiry fellows, not over eighteen', who were expert riders and willing to risk death daily. The men who answered it became riders for the Pony Express, a mail service that carried letters across the American West at a speed that had never been achieved before. Although it lasted for only eighteen months, it became one of the most famous episodes in the history of the region.",
              "At that time, the railway and the telegraph reached only as far west as Missouri. Beyond lay almost three thousand kilometres of plains, mountains and desert before the settlements of California, which had grown rapidly since the discovery of gold there in 1848. Letters sent by ship around South America or across Panama could take months to arrive, and the stagecoach route through the south took around three weeks. The founders of the Pony Express believed that a system of relay riders could cut this time to just ten days.",
              "To make this possible, they built or took over around a hundred and ninety stations along the route, roughly sixteen to twenty-five kilometres apart. At each station, a rider would change to a fresh horse in a matter of minutes and continue on his way. After covering about a hundred and twenty kilometres, he would hand the mail to the next rider. The riders carried the letters in a leather cover that fitted over the saddle and could be moved quickly from one horse to the next. To keep the weight down, letters were written on very thin paper, and postage was expensive: at first, sending a letter cost five dollars, a large sum at the time.",
              "The work was hard and dangerous. Riders travelled day and night and in all weathers, crossing rivers, mountain passes and deserts. Several stations were attacked during a conflict with Native American groups in 1860, and a number of station keepers were killed. Remarkably, however, only one delivery of mail is recorded as having been lost.",
              "The service's most celebrated achievement came in November 1860, when riders carried news of the election of Abraham Lincoln as president from the end of the telegraph line to California in less than eight days. Yet the Pony Express was never a financial success. Its costs were enormous, and it did not receive the government contract its founders had hoped for. The final blow came in October 1861, when the telegraph line was completed across the continent, allowing messages to be sent in minutes rather than days. Two days later, the Pony Express announced that it would close.",
              "Despite its short life, the Pony Express was quickly turned into legend, celebrated in books, shows and, later, films. Some of the stories told about it, historians warn, owe more to imagination than to fact. But its reputation rests on a genuine achievement: for a brief period, it connected the two sides of a vast country faster than ever before.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 28, text: "The Pony Express operated for several years.", answer: "FALSE" },
                { n: 29, text: "Gold was discovered in California in 1848.", answer: "TRUE" },
                { n: 30, text: "Riders were paid more than station keepers.", answer: "NOT GIVEN" },
                { n: 31, text: "Many deliveries of mail were lost during the service's operation.", answer: "FALSE" },
                { n: 32, text: "The Pony Express received a large government contract.", answer: "FALSE" },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 33, text: "Why did the founders believe the Pony Express could succeed?", options: ["Relay riders could deliver mail much faster than existing routes.", "Ships were no longer sailing to California.", "The government asked them to start it.", "The railway had reached California."], answer: 0 },
                { n: 34, text: "Why were letters written on very thin paper?", options: ["to reduce the cost of paper", "to keep the weight low", "so that they could be hidden easily", "because thicker paper was not available"], answer: 1 },
                { n: 35, text: "What was the main reason the Pony Express closed?", options: ["Most of its riders had been killed.", "The telegraph line across the continent was completed.", "Lincoln ordered it to stop.", "It lost too many letters."], answer: 1 },
                { n: 36, text: "What do historians say about stories of the Pony Express?", options: ["They are all completely accurate.", "Some are more imaginative than factual.", "They were invented by the government.", "They have never been written down."], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the sentences below. Choose ONE WORD AND/OR A NUMBER from the text for each answer.",
              lines: [
                "Before the Pony Express, the stagecoach route took about [[37]] weeks.",
                "The route had around [[38]] stations.",
                "The mail was carried in a [[39]] cover that fitted over the saddle.",
                "At first, sending a letter cost [[40]] dollars.",
              ],
              gaps: [
                { n: 37, answers: ["three", "3"] },
                { n: 38, answers: ["190", "a hundred and ninety", "one hundred and ninety"] },
                { n: 39, answers: ["leather"] },
                { n: 40, answers: ["five", "5"] },
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
            "Your neighbours have recently started making a lot of noise late at night, and it is affecting your sleep.",
            "Write a letter to your neighbours. In your letter: explain who you are; describe the problem and how it is affecting you; suggest what could be done.",
            "Begin your letter as follows: Dear ...,",
          ],
        },
        {
          title: "Part 2",
          suggestedMinutes: 40,
          minWords: 250,
          prompt: [
            "Some people believe that employers should allow their staff to work from home whenever they want. Others think that people work better when they are together in an office.",
            "Discuss both views and give your own opinion.",
            "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
          ],
        },
      ],
    },
  ],
};
