import type { IeltsTest } from "./types";

const GYMS = ["FitHub", "Oakwood Pool & Gym", "Studio Move", "PowerHouse", "Green Park Outdoor Fitness"];

/** IELTS General Training Practice Test 5: Reading and Writing. Original Netfener content. */
export const GENERAL_5: IeltsTest = {
  id: "general-5",
  track: "general",
  no: 5,
  title: "IELTS General Training Practice Test 5",
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
            title: "Hillside Leisure Centre — Swimming lessons for children",
            paragraphs: [
              "Hillside Leisure Centre offers swimming lessons for children aged four to fourteen. Lessons take place in the small teaching pool, which is kept at a warmer temperature than the main pool. Classes are grouped by ability rather than by age, and each class has no more than eight children.",
              "Before joining, every child must attend a free assessment session, where an instructor will decide which class is most suitable. Assessments take place on Saturday mornings and must be booked in advance at reception.",
              "Lessons last thirty minutes and run in blocks of ten weeks. The full cost of the block must be paid before the first lesson. If a child misses a lesson because of illness, a replacement lesson can be arranged, provided that the centre is informed at least two hours beforehand. No refunds are given for missed lessons.",
              "Parents may watch lessons from the viewing area on the first floor but are asked not to stand at the side of the pool. Children should arrive changed and ready ten minutes before their lesson. Goggles may be worn, but other swimming aids are provided by the centre.",
              "Gyms in Westbridge",
              "A  FitHub. Open 24 hours a day, every day. Monthly membership only, no joining fee. No classes, but personal trainers can be booked for an extra charge.",
              "B  Oakwood Pool & Gym. Gym, 25-metre pool and sauna. Discounts for students and people over 60. Closed on public holidays.",
              "C  Studio Move. Small studio offering yoga, dance and Pilates classes only. Classes must be booked online at least 24 hours ahead.",
              "D  PowerHouse. Specialist weightlifting gym. Free induction session for all new members. Membership requires a minimum contract of 12 months.",
              "E  Green Park Outdoor Fitness. Group exercise sessions held in the park in all weathers. Pay per session, no membership needed. First session free.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information about swimming lessons at Hillside Leisure Centre? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 1, text: "The teaching pool is warmer than the main pool.", answer: "TRUE" },
                { n: 2, text: "Children are placed in classes according to their age.", answer: "FALSE" },
                { n: 3, text: "Parents must pay for the assessment session.", answer: "FALSE" },
                { n: 4, text: "Lessons can be paid for one at a time.", answer: "FALSE" },
                { n: 5, text: "A child who is ill may be offered a replacement lesson.", answer: "TRUE" },
                { n: 6, text: "The instructors are all qualified lifeguards.", answer: "NOT GIVEN" },
                { n: 7, text: "Children must bring their own swimming aids.", answer: "FALSE" },
              ],
            },
            {
              kind: "choice",
              instruction: "Look at the five gyms, A–E. Which gym is each statement true of? You may choose any letter more than once.",
              items: [
                { n: 8, text: "You do not need to become a member to use it.", options: GYMS, answer: 4 },
                { n: 9, text: "Members must sign up for at least a year.", options: GYMS, answer: 3 },
                { n: 10, text: "It offers lower prices for older people.", options: GYMS, answer: 1 },
                { n: 11, text: "It can be used at any time of day or night.", options: GYMS, answer: 0 },
                { n: 12, text: "It does not have any gym equipment.", options: GYMS, answer: 2 },
                { n: 13, text: "You can try it once without paying.", options: GYMS, answer: 4 },
                { n: 14, text: "New members are shown how to use the equipment free of charge.", options: GYMS, answer: 3 },
              ],
            },
          ],
        },
        // ---------------- Section 2 ----------------
        {
          title: "Part 2",
          intro: "Read the texts and answer questions 15–27.",
          passage: {
            title: "Brightline Logistics — Health and safety for warehouse staff",
            paragraphs: [
              "All new warehouse staff must complete a half-day health and safety course before starting work. The course covers safe lifting, the use of equipment, fire procedures and the reporting of accidents. Staff who have not completed the course will not be permitted to work on the warehouse floor.",
              "Protective clothing is provided free of charge. Safety boots and high-visibility vests must be worn at all times in the warehouse. Gloves should be worn when handling sharp or rough materials. If any item of protective clothing becomes damaged, it should be returned to the supervisor, who will issue a replacement.",
              "Lifting heavy objects is the most common cause of injury in our warehouses. Before lifting, check the weight of the item and, if it is over 20 kilograms, ask a colleague for help or use a trolley. Bend your knees, keep your back straight and hold the item close to your body. Never twist your body while carrying a load.",
              "Forklift trucks may only be driven by staff who hold a valid licence. Our company runs a five-day forklift training course, which is free for permanent employees. Pedestrians should keep to the marked walkways and should never walk behind a reversing forklift.",
              "Fire safety",
              "The fire alarm is tested every Monday at 10 a.m. If the alarm sounds at any other time, stop work immediately and leave the building by the nearest exit. Do not stop to collect personal belongings and do not use the goods lift. Go to the assembly point in the staff car park, where your supervisor will check that everyone is present. Do not re-enter the building until a fire officer says that it is safe to do so.",
              "Each area of the warehouse has a trained fire warden, who wears a yellow hat during an evacuation. Fire extinguishers are located beside every exit, but staff should only attempt to use them if they have been trained and if the fire is very small.",
            ],
          },
          groups: [
            {
              kind: "notes",
              instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.",
              heading: "Warehouse safety rules",
              lines: [
                "The safety course lasts [[15]].",
                "Safety boots and [[16]] must be worn in the warehouse.",
                "Damaged protective clothing should be given to the [[17]].",
                "For items over [[18]] kilograms, get help or use a trolley.",
                "Keep your back straight and never [[19]] your body when carrying.",
                "Forklift training lasts [[20]] days.",
                "Pedestrians must stay on the marked [[21]].",
              ],
              gaps: [
                { n: 15, answers: ["half a day", "a half day", "half-day"] },
                { n: 16, answers: ["high-visibility vests", "vests"] },
                { n: 17, answers: ["supervisor"] },
                { n: 18, answers: ["20", "twenty"] },
                { n: 19, answers: ["twist"] },
                { n: 20, answers: ["5", "five"] },
                { n: 21, answers: ["walkways"] },
              ],
            },
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information in the text about fire safety? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 22, text: "The fire alarm is tested once a week.", answer: "TRUE" },
                { n: 23, text: "Staff may use the goods lift during an evacuation.", answer: "FALSE" },
                { n: 24, text: "The assembly point is in the staff car park.", answer: "TRUE" },
                { n: 25, text: "Supervisors decide when staff can return to the building.", answer: "FALSE" },
                { n: 26, text: "Fire wardens receive extra pay.", answer: "NOT GIVEN" },
                { n: 27, text: "All staff are expected to use fire extinguishers on any fire.", answer: "FALSE" },
              ],
            },
          ],
        },
        // ---------------- Section 3 ----------------
        {
          title: "Part 3",
          intro: "Read the text and answer questions 28–40.",
          passage: {
            title: "A short history of the bicycle",
            paragraphs: [
              "The bicycle is so familiar today that it is easy to forget how recent an invention it is. Its earliest ancestor appeared in Germany in 1817, when an inventor named Karl Drais built a two-wheeled wooden machine that the rider pushed along with his feet. It had no pedals, but it could be steered, and on good roads it allowed the rider to travel considerably faster than walking. Drais's 'running machine' was briefly fashionable among wealthy young men in several European cities, but it was difficult to use on rough streets, and some cities banned it from the pavements after accidents involving pedestrians.",
              "Pedals were added in the 1860s, when makers in France attached them directly to the front wheel. These machines were nicknamed 'boneshakers', because their iron-rimmed wheels made riding extremely uncomfortable. Since each turn of the pedals produced one turn of the front wheel, the only way to go faster was to make that wheel larger. The result was the 'high-wheeler', or 'penny-farthing', popular in the 1870s and 1880s, whose front wheel could be more than a metre and a half across. It was fast, but the rider sat high above the ground, and falls were common and often serious. Riding it was largely a sport for young, athletic men.",
              "The design that we recognise today, known at the time as the 'safety bicycle', appeared in the 1880s. It had two wheels of equal size and a chain that connected the pedals to the rear wheel. By using gears of different sizes, it allowed the wheel to turn faster than the pedals, so a large wheel was no longer necessary. Shortly afterwards, air-filled rubber tyres, developed by a Scottish vet named John Boyd Dunlop to make his son's tricycle more comfortable, made riding far smoother.",
              "The safety bicycle caused a sensation. During the 1890s, a cycling craze swept Europe and North America, and millions of bicycles were sold. For the first time, ordinary people could travel independently over considerable distances, cheaply and at a speed of their choosing. The bicycle had a particular effect on the lives of women. It gave them a new freedom of movement, and it encouraged changes in women's clothing, since the long, heavy skirts of the period were unsuitable for cycling. An American campaigner for women's rights remarked that the bicycle had done more to free women than anything else in the world.",
              "With the arrival of the motor car in the twentieth century, the bicycle came to be seen in many wealthy countries as a children's toy or a poor person's transport. In others, such as the Netherlands and Denmark, it remained an important part of everyday life, partly because of deliberate decisions by city authorities in the 1970s to build separate cycle paths and to limit car traffic in city centres. Today, as cities around the world look for ways to reduce traffic congestion and pollution, many are following their example, and the bicycle, more than two hundred years after Drais's invention, is enjoying a new popularity.",
            ],
          },
          groups: [
            {
              kind: "tfng",
              instruction: "Do the following statements agree with the information given in the text? Choose TRUE, FALSE or NOT GIVEN.",
              items: [
                { n: 28, text: "Drais's machine had pedals attached to the front wheel.", answer: "FALSE" },
                { n: 29, text: "Some cities banned Drais's machine from pavements.", answer: "TRUE" },
                { n: 30, text: "Boneshakers were more comfortable than earlier machines.", answer: "FALSE" },
                { n: 31, text: "Penny-farthings were cheaper than safety bicycles.", answer: "NOT GIVEN" },
                { n: 32, text: "The bicycle influenced the way women dressed.", answer: "TRUE" },
              ],
            },
            {
              kind: "choice",
              instruction: "Choose the correct letter, A, B, C or D.",
              items: [
                { n: 33, text: "Why did the front wheel of the high-wheeler become so large?", options: ["to make the machine look impressive", "because a larger wheel was the only way to increase speed", "to make it safer for riders", "because it was easier to build"], answer: 1 },
                { n: 34, text: "What was the main advantage of the chain on the safety bicycle?", options: ["It allowed the rear wheel to turn faster than the pedals.", "It made the bicycle lighter.", "It meant no tyres were needed.", "It allowed the rider to sit higher."], answer: 0 },
                { n: 35, text: "Why did John Boyd Dunlop develop air-filled tyres?", options: ["to win cycle races", "to make his son's tricycle more comfortable", "to sell to car makers", "to make bicycles faster"], answer: 1 },
                { n: 36, text: "Why did cycling remain popular in the Netherlands and Denmark?", options: ["Cars were banned there.", "Cities chose to build cycle paths and limit car traffic.", "Bicycles were cheaper there.", "The weather is better for cycling."], answer: 1 },
              ],
            },
            {
              kind: "notes",
              instruction: "Complete the sentences below. Choose ONE WORD ONLY from the text for each answer.",
              lines: [
                "Drais built a two-wheeled [[37]] machine.",
                "Riding a penny-farthing was mainly a [[38]] for young men.",
                "Dunlop worked as a [[39]].",
                "Many cities now hope bicycles will help reduce congestion and [[40]].",
              ],
              gaps: [
                { n: 37, answers: ["wooden"] },
                { n: 38, answers: ["sport"] },
                { n: 39, answers: ["vet"] },
                { n: 40, answers: ["pollution"] },
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
            "You recently stayed at a hotel and left a valuable item in your room when you checked out.",
            "Write a letter to the hotel manager. In your letter: give details of your stay; describe the item and where you left it; explain what you would like the hotel to do.",
            "Begin your letter as follows: Dear Sir or Madam,",
          ],
        },
        {
          title: "Part 2",
          suggestedMinutes: 40,
          minWords: 250,
          prompt: [
            "In some countries, young people are encouraged to work or travel for a year between finishing school and starting university.",
            "Discuss the advantages and disadvantages of this for young people.",
            "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
          ],
        },
      ],
    },
  ],
};
