import type { IeltsTest } from "./types";

const COURSES = ["Bread Baking for Beginners", "Introduction to Photography", "First Aid at Home", "Garden Design", "Spanish for Travellers"];

/** IELTS General Training Practice Test 7: Reading and Writing. Original Netfener content. */
export const GENERAL_7: IeltsTest = {
  id: "general-7",
  track: "general",
  no: 7,
  title: "IELTS General Training Practice Test 7",
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
            title: "Maple Street Dental Practice — Information for patients",
            paragraphs: [
              "Maple Street Dental Practice is open from 8 a.m. to 6 p.m., Monday to Friday, and from 9 a.m. to 1 p.m. on Saturdays. We are closed on Sundays and public holidays. Late appointments until 8 p.m. are available on Wednesdays for patients who cannot attend during working hours.",
              "New patients are asked to arrive fifteen minutes before their first appointment to complete a medical history form. Please bring a list of any medicines you are currently taking.",
              "If you need to cancel or change your appointment, please give us at least twenty-four hours' notice. Patients who miss two appointments without letting us know may be removed from our list.",
              "If you have severe toothache or have damaged a tooth, phone the practice as early as possible. We keep a number of emergency appointments free each morning. Outside opening hours, a recorded message will give you the number of the local emergency dental service.",
              "Children under eighteen receive free check-ups. Adults are charged according to the treatment they receive, and a list of prices is displayed in the waiting room. Payment is due at the end of each visit.",
              "Weekend courses at Riverside College",
              "A  Bread Baking for Beginners. Learn to make five types of bread. All ingredients provided. Take home what you bake. Saturday only.",
              "B  Introduction to Photography. Bring your own camera or smartphone. Includes a guided walk around the old town. Saturday and Sunday.",
              "C  First Aid at Home. Learn how to deal with common injuries and emergencies. Participants receive a certificate. Sunday only.",
              "D  Garden Design. Plan a garden that suits your space and budget. Suitable for complete beginners. Includes a visit to a local garden centre.",
              "E  Spanish for Travellers. Useful phrases for holidays and business trips. No previous knowledge of Spanish needed. Free phrase book for every student.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information about Maple Street Dental Practice? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 1, text: "The practice is open on Saturday afternoons.", answer: "FALSE" },
                { n: 2, text: "Evening appointments are available one day a week.", answer: "TRUE" },
                { n: 3, text: "New patients should bring information about their medicines.", answer: "TRUE" },
                { n: 4, text: "Patients who miss one appointment will be removed from the list.", answer: "FALSE" },
                { n: 5, text: "Some appointments are kept free for emergencies.", answer: "TRUE" },
                { n: 6, text: "The practice has recently moved to Maple Street.", answer: "NOT GIVEN" },
                { n: 7, text: "Adults can pay for treatment in monthly instalments.", answer: "FALSE" },
              ],
            },
            {
              kind: "choice",
              instruction: "Look at the five weekend courses, A–E. Which course is each statement true of? You may choose any letter more than once.",
              items: [
                { n: 8, text: "Students receive a document showing they completed the course.", options: COURSES, answer: 2 },
                { n: 9, text: "Students will spend some time outdoors in the town.", options: COURSES, answer: 1 },
                { n: 10, text: "Students can take home the food they make.", options: COURSES, answer: 0 },
                { n: 11, text: "Students are given a free book.", options: COURSES, answer: 4 },
                { n: 12, text: "It includes a trip to a shop.", options: COURSES, answer: 3 },
                { n: 13, text: "Students need to bring their own equipment.", options: COURSES, answer: 1 },
                { n: 14, text: "It would be useful for people who travel for work.", options: COURSES, answer: 4 },
              ],
            },
          ],
        },
        // ---------------- Section 2 ----------------
        {
          title: "Part 2",
          intro: "Read the texts and answer questions 15–27.",
          passage: {
            title: "Parker & Lowe — Staff car parking and travel",
            paragraphs: [
              "Parking at our head office is limited, and spaces are allocated by permit. Permits are issued for one year and must be displayed clearly on the windscreen. To apply, complete the form on the staff website and send it to the facilities team, together with a copy of your vehicle registration document.",
              "Because demand is high, priority is given to staff who have a disability, those who work shifts beginning before 7 a.m. or ending after 8 p.m., and those who live more than thirty kilometres from the office and have no convenient public transport. Other applicants are placed on a waiting list. Staff who share a car with at least one colleague are moved to the top of the waiting list.",
              "A permit costs £15 per month, which is deducted from your salary. Permits cannot be transferred to another member of staff. If you change your car, you must inform the facilities team of the new registration number within five working days.",
              "Cars parked without a valid permit will be given a warning on the first occasion. After a second offence, the car may be removed at the owner's expense.",
              "Travel to work scheme",
              "We encourage staff to travel to work by public transport, bicycle or on foot. Staff can apply for an interest-free loan to buy an annual train or bus season ticket. The loan is repaid from your salary over ten months.",
              "Secure bicycle storage is available in the basement, and there are showers and lockers for staff who cycle or run to work. Staff who cycle to work on at least three days a week can apply for a free annual bicycle service at a local cycle shop.",
              "Staff who need to travel to meetings during the working day should use public transport where possible. Taxis may be used only when public transport is not available or when carrying heavy equipment, and receipts must be kept.",
            ],
          },
          groups: [
            {
              kind: "notes",
              instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.",
              heading: "Car parking permits",
              lines: [
                "Permits last for one [[15]].",
                "Send the application to the [[16]] team.",
                "Include a copy of the vehicle [[17]] document.",
                "Priority is given to staff who live over [[18]] kilometres away.",
                "Staff who share a car move to the top of the [[19]].",
                "The monthly cost is taken from staff members' [[20]].",
                "A new registration number must be reported within [[21]] working days.",
              ],
              gaps: [
                { n: 15, answers: ["year"] },
                { n: 16, answers: ["facilities"] },
                { n: 17, answers: ["registration"] },
                { n: 18, answers: ["30", "thirty"] },
                { n: 19, answers: ["waiting list"] },
                { n: 20, answers: ["salary", "salaries"] },
                { n: 21, answers: ["5", "five"] },
              ],
            },
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information in the text about the travel to work scheme? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 22, text: "Staff must pay interest on loans for season tickets.", answer: "FALSE" },
                { n: 23, text: "Season ticket loans are repaid over ten months.", answer: "TRUE" },
                { n: 24, text: "Bicycles can be stored in the basement.", answer: "TRUE" },
                { n: 25, text: "All staff who cycle to work can get a free bicycle service.", answer: "FALSE" },
                { n: 26, text: "The company plans to build more showers.", answer: "NOT GIVEN" },
                { n: 27, text: "Staff may always take a taxi to meetings.", answer: "FALSE" },
              ],
            },
          ],
        },
        // ---------------- Section 3 ----------------
        {
          title: "Part 3",
          intro: "Read the text and answer questions 28–40.",
          passage: {
            title: "Learning the city by heart",
            paragraphs: [
              "Anyone who wants to drive one of London's licensed black taxis must first pass one of the most demanding tests of memory in the world. Known simply as 'the Knowledge', it requires candidates to learn around twenty-five thousand streets within a radius of about ten kilometres of Charing Cross, in the centre of the city, together with tens of thousands of landmarks, including hotels, hospitals, theatres, police stations and restaurants. They must be able to work out the most direct route between any two points without looking at a map.",
              "The test was introduced in the middle of the nineteenth century, partly in response to complaints from visitors to the Great Exhibition of 1851 that cab drivers did not know their way around. Since then, its basic form has changed surprisingly little. Candidates learn the city by travelling around it, usually on a motor scooter, following a list of several hundred standard routes and exploring the streets on either side of each one. Many spend several hours a day doing this, in all weathers, for years.",
              "Once they feel ready, candidates are examined in a series of one-to-one oral tests, known as 'appearances', in which an examiner names two places and the candidate must describe the route between them, street by street, from memory. The tests become more frequent as candidates progress, and only those who perform consistently well move on to the next stage. On average, it takes around three to four years to complete the Knowledge, and many of those who start never finish.",
              "The Knowledge has attracted the interest of scientists. In a well-known series of studies, researchers at University College London used brain scans to compare taxi drivers with other people. They found that a part of the brain called the hippocampus, which plays an important role in memory and in finding one's way, was larger at the back in taxi drivers than in the comparison group, and that the difference was greater in those who had been driving for longer. A later study followed trainees over several years and found that the change appeared only in those who passed the test, suggesting that it was caused by the learning itself rather than by some natural difference in the people who chose to take it.",
              "In recent years, the Knowledge has faced a new challenge. Satellite navigation systems and app-based car services allow drivers with no special training to find their way around the city. Some people argue that the Knowledge is therefore no longer necessary. Taxi drivers and their supporters reply that a driver who knows the city can respond to traffic and road closures more quickly than a machine, that satellite navigation sometimes makes mistakes, and that the Knowledge is a guarantee of quality. The number of licensed taxi drivers in London has fallen, but the test remains in place, and each year a new group of candidates sets out on their scooters to learn the city by heart.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 28, text: "Candidates may use a map during the test.", answer: "FALSE" },
                { n: 29, text: "The test was introduced partly because of complaints from visitors.", answer: "TRUE" },
                { n: 30, text: "The form of the test has changed greatly since it was introduced.", answer: "FALSE" },
                { n: 31, text: "Most candidates complete the Knowledge in less than a year.", answer: "FALSE" },
                { n: 32, text: "Women now make up half of all new taxi drivers.", answer: "NOT GIVEN" },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 33, text: "How do candidates usually learn the city?", options: ["by studying maps at home", "by travelling around it on a scooter", "by working as taxi passengers", "by using satellite navigation"], answer: 1 },
                { n: 34, text: "What happens in an 'appearance'?", options: ["Candidates drive a taxi with an examiner.", "Candidates describe a route between two places from memory.", "Candidates take a written test.", "Candidates meet the public."], answer: 1 },
                { n: 35, text: "What did the later study of trainees suggest?", options: ["People with larger brains choose to become taxi drivers.", "The change in the brain was caused by the learning.", "The hippocampus becomes smaller with age.", "Failing the test damages the brain."], answer: 1 },
                { n: 36, text: "What do taxi drivers say in defence of the Knowledge?", options: ["Satellite navigation is too expensive.", "They can respond to traffic and road closures faster than a machine.", "Passengers prefer older drivers.", "The test is easy to pass."], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the sentences below. Choose ONE WORD AND/OR A NUMBER from the text for each answer.",
              lines: [
                "Candidates must learn about [[37]] streets.",
                "The area covered is centred on Charing [[38]].",
                "The part of the brain studied is called the [[39]].",
                "The number of licensed taxi drivers in London has [[40]].",
              ],
              gaps: [
                { n: 37, answers: ["25,000", "25000", "twenty-five thousand"] },
                { n: 38, answers: ["cross"] },
                { n: 39, answers: ["hippocampus"] },
                { n: 40, answers: ["fallen"] },
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
            "You have seen an advertisement for a weekend volunteering job at a local animal shelter.",
            "Write a letter to the manager of the shelter. In your letter: explain why you are interested in the job; describe any relevant experience you have; say when you would be available.",
            "Begin your letter as follows: Dear Sir or Madam,",
          ],
        },
        {
          title: "Part 2",
          suggestedMinutes: 40,
          minWords: 250,
          prompt: [
            "In many countries, fewer people are learning practical skills such as cooking, sewing and basic home repairs.",
            "Why is this happening? What can be done to encourage people to learn these skills?",
            "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
          ],
        },
      ],
    },
  ],
};
