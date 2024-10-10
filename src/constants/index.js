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
  carrent,
  jobit,
  tripguide,
  ican,
  stockmgt,
  threejs,
  placeholder,
  dart,
  flutter,
  cpp,
  c,
  nftopia,
  themaze,
  linkedint,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
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
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "dart",
    icon: dart,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "c",
    icon: c,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Kinetic Technology Limited",
    icon: placeholder,
    iconBg: "#383E56",
    date: "September 2022 - January 2023",
    points: [
      "Developing and maintaining mobile applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring android compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Atlas",
    icon: placeholder,
    iconBg: "#E6DEDD",
    date: "January 2023 - April 2023",
    points: [
      "Developing and maintaining a Stock and Inventory web application using MERN stack and other related technologies.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ICAN",
    icon: placeholder,
    iconBg: "#383E56",
    date: "April 2023 - June 2023",
    points: [
      "Developing and maintaining a web application using HTML, CSS, JavaScript and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer | Game Developer | Cyber-Security",
    company_name: "FreeLancer",
    icon: placeholder,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Full stack Developer:",
      "Developing and maintaining web applications and android applications for various clients using React.js and flutter and other related technologies.",
      "Learning new technologies as i advance in my career",
      "Participating in code reviews and providing constructive feedback to other developers around the world.",
      "Game Developer:",
      "Designing and developing engaging 2D/3D game environments using Unity and C and C++.",
      "Collaborating with artists and sound designers to create immersive game experiences.",
      "Implementing game mechanics, user interfaces, and AI behavior for a variety of game genres.",
      "Optimizing game performance across multiple platforms and devices.",
      "Cyber-Security:",
      "Conducting network and application vulnerability assessments to ensure robust security measures.",
      "Implementing security protocols and practices to protect client systems from cyber threats.",
      "Learning and applying penetration testing techniques on various platforms.",
      "Staying updated with the latest security trends and potential attack vectors to safeguard systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Gideon proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met an android developer who truly cares about their clients' success like Gideon does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gideon optimized our systems and servers, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Stock and Inventory Management Sysytem",
    description:
      "Web-based platform that allows users to manage stock in any business",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "yellow-text-gradient",
      },
    ],
    image: stockmgt,
    live_link: "https://atlas-stock-app.vercel.app/",
    source_code_link: "https://github.com/Giddy-K/atlas-inventory-management-system.git",
  },
  {
    name: "ICAN",
    description:
      "Website for a CBO in Kenya that inspires and empowers girls particularly in Kajiado county",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ican,
    live_link: "https://ican-six.vercel.app/",
    source_code_link: "https://github.com/",
  },
  {
    name: "NFTopia: Realm Of Cards",
    description:
      "Discover a world where NFTs ignite thrilling card battles and unlock boundless possibilities! Welcome to NFTopia: Realm of Cards - where legends are forged, treasures await, and your adventure begins! Let the quest unfold! 🏰🌟",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: nftopia,
    live_link: "https://659c36eeeaaf090759615ad3--dynamic-granita-e11512.netlify.app/",
    source_code_link: "https://github.com/Giddy-K/NFTopia.git",
  },
  {
    name: "The Maze",
    description:
      "The Maze is a 3D Maze game that uses ray casting to render a 2D map into a 3D navigable world! The Maze was written was written in C ussing SDL2 library. Deveploment was performed using Ubuntu 14.04 LTS - gcc (Ubuntu 4.8.4-2ubuntu1~14.04) 4.8.4",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "SDL2 library",
        color: "green-text-gradient",
      },
      {
        name: "Ubuntu 14.04 LTS - gcc",
        color: "pink-text-gradient",
      },
    ],
    image: themaze,
    live_link: "",
    source_code_link: "https://github.com/Giddy-K/The-Maze.git",
  },
  {
    name: "LinkedInt",
    description:
      "LinkedInt is an open-source LinkedIn intelligence-gathering tool designed for educational and testing purposes. It allows users to input LinkedIn credentials and a Hunter.io API key to gather LinkedIn data, generate e-mail predictions, and embed profiles with images into HTML for offline viewing. The tool is developed in Python, focusing on usability and includes filters for specific companies, e-mail domain customization, and improved authentication flows.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Web Scraping",
        color: "green-text-gradient",
      },
      {
        name: "API Integration",
        color: "pink-text-gradient",
      },
    ],
    image: linkedint,
    live_link: "",
    source_code_link: "https://github.com/Giddy-K/LinkedInt.git",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
