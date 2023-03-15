import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cplusplus,
  python,
  rust,
  swift,
  solidity,
  nextjs,
  tauri,
  electron,
  postgresql,
  meta,
  starbucks,
  tesla,
  logitech,
  liebherr,
  codinov,
  lefilliatrehirschy,
  backingtracklive,
  shopify,
  carrent,
  jobit,
  tripguide,
  chanalog,
  threejs,
  github,
  linkedin,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End",
    icon: web,
  },
  {
    title: "Back End",
    icon: mobile,
  },
  {
    title: "Rust",
    icon: backend,
  },
  {
    title: "Web3",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Rust",
    icon: rust,
  },
  // {
  //   name: "Swift",
  //   icon: swift,
  // },
  {
    name: "Solidity",
    icon: solidity,
  },
  // {
  //   name: "Tauri",
  //   icon: tauri,
  // },
  // {
  //   name: "Electron",
  //   icon: electron,
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: postgresql,
  // },
];

const experiences = [
  {
    title: "Co-lead software developer / R&D ",
    company_name: "LOGITECH",
    icon: logitech,
    iconBg: "#ddd",
    date: "November 2020 - Today",
    points: [
      "Development of a cross-platform application for MacOS and Windows with Javascript / Typescript / SCSS / HTML and other relatives technologies",
      "Made with frameworks like Electron.js and Angular, coupled with system's functionalities specific to OS (Swift for macOS, C# for Windows) and binded to the application thanks to Node.js Native Addons in C++",
      "Collaborating with cross-functional and international teams including designers, product managers, and other developers to create high-quality product",
      "Participating in project management, users interviews for feedbacks and tests",
      "Used daily by 1000+ users",
    ],
  },
  {
    title: "Freelance",
    company_name: "CODINOV",
    icon: codinov,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Feb 2022",
    points: [
      "Prospecting and business development",
      "Website creation (development, hosting, implementation of domain names, SEO)",
      "Node.js web server creation",
      "API creation",
      "Python & Node.js scraper / worker",
      "DApps / Web3 applications and smart contracts creation",
      "Webmarketing (advertising campaign on social networks, e-mailing)",
      "Realization of a responsive digital restaurant menu system using Next.js framework and based on the JAMStack (Netlify) with access by QR code for restaurant customers as part of the COVID-19 health measures",
      "Application maintenance",
    ],
  },
  {
    title: "Co-founder & CTO",
    company_name: "SAS BackingTrackLive",
    icon: backingtracklive,
    iconBg: "#E6DEDD",
    date: "Mar 2019 - May 2020",
    points: [
      "Creation of specifications, technical, functional and user documentation",
      "Realization of graphic models and prototypes of the project on Figma for mobile, tablet and computer",
      "Development of the native iOS development in Swift of the mobile application for iPhone/iPad and development in JavaScript (React.js and Electron.js) of the desktop application (MacOS / Windows)",
      "Management of the startup (Viva Technology 2019 show in Paris, fundraising, communication / marketing campaign, brand image, presentation of the company in front of an audience)",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "LIEBHERR",
    icon: liebherr,
    iconBg: "#E6DEDD",
    date: "Mar 2017 - Sep 2017",
    points: [
      "Development of a C# application for the management of steel sheet cuttings",
      "Establishment of a database for the cutting of parts on steel sheets and development of stored procedure in SQL",
      "Development of an embedded application for PDA allowing to scan the barcodes present on the steel sheets to ensure the follow-up of the stocks and the cuts",
      "Development of a RESTful API in .NET core 2 for intercommunication between different software and devices across the production line",
    ],
  },
  {
    title: "VBA Developer",
    company_name: "Accounting Firm LEFILLIATRE & HIRSCHY",
    icon: lefilliatrehirschy,
    iconBg: "#E6DEDD",
    date: "Sep 2015 - Jan 2016",
    points: [
      "Development of the EDI message control application in VBA (Excel macro)",
      "Implementation of automatic data cleansing procedures in SQL",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jordan is a reliable and talented person! I had the pleasure of collaborating with him on a project at Logitech for about 1.5 year and I have been in awe of Jordan’s ability to always see the glass as half full. (...) If you need a proven software engineer with a get-it-done-with-a-smile approach, then I’m sure that Jordan will be a great addition to your team!",
    name: "Joy Oppliger",
    designation: "UX Designer",
    company: "Logitech",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEth62v6Gr8fg/profile-displayphoto-shrink_800_800/0/1617722967559?e=1684368000&v=beta&t=mfXS7LSTMmDYKh-Ki-qCGupSesFsP6CncoWAOYxGz_s",
  },
  {
    testimonial:
      "Jordan is a very reliable and committed person when it comes to working and getting things done. (...) Jordan managed his part with brio, even though he had to face some technical and functional challenges. (...) It would be a pleasure to work with him again, and I am sure that you will feel the same after spending some time working with him.",
    name: "Matthieu Bargheon",
    designation: "COO",
    company: "Epitech",
    image:
      "https://media.licdn.com/dms/image/D4E03AQFJ4csRF8_J2A/profile-displayphoto-shrink_800_800/0/1676036701769?e=1684368000&v=beta&t=1opzKhDvxP6T3LYo8smuZYj8gTbvtQUqgP-1oGK6s3Q",
  },
];

const projects = [
  {
    name: "Chanalog",
    description:
      "Web3 platform that performs sentiment analysis and organic activity on 4chan /biz/ board to provide users with a better understanding of the current trends surrounding a particular cryptocurrency.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "purple-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
    ],
    image: chanalog,
    source_code_link: "https://chanalog.io/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const socials = [
  {
    name: "Github",
    icon: github,
    link: "https://github.com/jordanlepera/",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://linkedin.com/in/jordanlepera/?locale=en_US",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/jordanlepera",
  },
];

export { services, technologies, experiences, testimonials, projects, socials };
