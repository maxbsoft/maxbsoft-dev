const inputJson = [
  {
    id: 12,
    title: 'Senior React Native Developer',
    meta: 'GeoRest Ltd.',
    text: [
      'Developed and maintained a comprehensive suite of mobile food delivery applications for both iOS and Android platforms using React Native.',
      'Collaborated with front-end and back-end developers to create applications for businesses, couriers, and customers.',
    ],
    year: '2020 - Present',
  },
  {
    id: 11,
    title: 'Senior Front-End Developer',
    meta: 'Dataforest.ai',
    text: [
      'Led front-end development for web applications, including CRM system dashboards using React.js.',
      'Specialized in React Native for mobile app development.',
      'Collaborated with cross-functional teams, including UI/UX designers and developers.',
      'Conducted technical interviews as part of the hiring process.',
    ],
    year: '2019 - 2020',
  },
  {
    id: 10,
    title: 'Lead Developer',
    meta: 'Self-Employed (Balukh M. FOP)',
    text: [
      'Led technical project leadership with responsibilities spanning cross-platform mobile app development in React Native.',
      'Engineered high-performing web applications using React JS and Electron JS.',
      'Contributed to native iOS app development in Objective-C and Swift.',
      'Managed server-side development in Node.js and Java.',
      'Directed a team of three developers, assigning tasks, ensuring project deadlines, and maintaining coding standards.',
      'Achieved successful project completions with high user engagement and positive client feedback.',
    ],
    year: '2013 - 2019',
  },
  {
    id: 9,
    title: 'React Native Developer',
    meta: 'WannaFight mobile app, Freelance',
    text: [
      'Developed WannaFight, a mobile app for iOS and Android, offering a realistic combat experience based on user and opponent data like weight, height, pull-ups count, and reaction strength, measured via device accelerometer.',
      'Led the creation of a project management dashboard.',
      'Utilized technologies such as React Native, Spine Animation, PHP, Laravel, JavaScript, PixiJs, HTML, CSS, Firebase, and Postgres.',
      'Managed a team of artists and animators, defining technical requirements for character and animation development.',
    ],
    year: '2017 - 2018',
  },
  {
    id: 8,
    title: 'iOS Developer',
    meta: 'Fitness mobile app, Freelance',
    text: [
      'Developed pulse measurement module for iOS in Objective-C.',
      'Designed and implemented a dashboard for displaying measurement results and statistics using PHP with Laravel.',
    ],
    year: '2017',
  },
  {
    id: 7,
    title: 'Java Developer',
    meta: 'MisterLauncher desktop application, Freelance',
    text: [
      'Developed the Minecraft Launcher for Windows, Mac OS, and Linux platforms using Java.',
    ],
    year: '2016',
  },
  {
    id: 6,
    title:
      'Mobile App Developer, JavaScript Developer, PHP Developer, Java Developer, Action Script 3 Developer',
    meta: 'Freelance',
    text: [
      'Specialized in mobile app development using Adobe AIR technology.',
      'Created iOS applications in Objective-C.',
      'Developed video chat applications similar to Chatroulette.com.',
      'Worked on the development of e-commerce websites and a social network for dating.',
      'Designed websites for various companies.',
    ],
    year: '2012 - 2013',
  },
  {
    id: 5,
    title: 'iOS Developer, Android Developer, Front-End Developer',
    meta: '3DTuning, LLC',
    text: [
      'Developed 3DTuning mobile application for iOS and Android.',
      'Allowed users to customize hundreds of vehicles with photorealistic quality and detail.',
      'Utilized Adobe AIR, ActionScript 3, Objective-C, Java, Starling, and Feathers UI.',
      'Implemented in-app purchases and subscriptions.',
    ],
    year: '2013 - 2018',
  },
  {
    id: 4,
    title: 'Action Script 3 Developer, Java Developer, PHP Developer',
    meta: 'Vizual Technologies, Inc',
    text: [
      'Developed a video chat system using the Red5 Media Server with Flash technology and ActionScript 3.',
      'Created an online video editor for producing promotional videos using Red5, Flash, CakePHP, PHP, and ActionScript 3.',
      'Built mobile apps with Adobe AIR technology.',
      'Designed and implemented native extensions for Adobe AIR using Objective-C and Java for iOS and Android.',
    ],
    year: '2009 - 2012',
  },
  {
    id: 3,
    title: 'Action Script 3 Developer, Java Developer',
    meta: 'Freelance',
    text: [
      'Developed an online video chat with an interactive whiteboard using ActionScript 3 and Red5 (Java).',
      'Created e-commerce websites with PHP, HTML, CSS, and JavaScript.',
      'Designed websites for various companies.',
    ],
    year: '2009',
  },
  {
    id: 2,
    title: 'Graphic Designer, Web Developer, System Administrator',
    meta: 'Elton, LLC (Printing house)',
    text: [
      'Specialized in Graphic Design, creating print layouts using software such as Corel Draw, Adobe Illustrator, Page Maker, Adobe Photoshop, and Microsoft Office.',
      'Designed various materials like flyers, brochures, catalogs, and business cards.',
      'Developed logos and prepared layouts for offset printing.',
      'Worked as a Web Developer, focusing on the design and development of company websites.',
      "Responsible for Network Design and Implementation, designing and establishing the company's internal network and handling network administration tasks.",
    ],
    year: '2002 - 2008',
  },
  {
    id: 1,
    title: '1C Developer, System Administrator',
    meta: 'Avtomehstroy (Auto transport enterprise)',
    text: [
      'Contributed to the development and implementation of a Document Management System, including the design of a system for inputting primary company documents.',
      'Engineered an automated payroll calculation system for employees, factoring in tax deductions, using 1C Enterprise software.',
      "Responsible for Network Design and Implementation, successfully designing and establishing the company's internal network.",
      'Managed network administration tasks.',
    ],
    year: '2001 - 2002',
  },
];

// Mock translation function - replace this with actual translation logic
function translate(text, language) {
  return `Translated to ${language}: ${text}`; // Placeholder translation
}

// Convert each entry to the required structure with "translations"
const outputJson = inputJson.map((item) => ({
  id: item.id,
  title: {
    en: item.title,
    uk: translate(item.title, 'uk'),
    ru: translate(item.title, 'ru'),
  },
  meta: {
    en: item.meta,
    uk: translate(item.meta, 'uk'),
    ru: translate(item.meta, 'ru'),
  },
  text: item.text.map((text) => ({
    en: text,
    uk: translate(text, 'uk'),
    ru: translate(text, 'ru'),
  })),
  year: {
    en: item.year,
    uk: translate(item.year, 'uk'),
    ru: translate(item.year, 'ru'),
  },
}));

// Node.js code to print out the converted JSON
// eslint-disable-next-line
console.log(JSON.stringify(outputJson, null, 2));
