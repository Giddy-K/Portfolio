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
  stockmgt,
  threejs,
  placeholder,
  dart,
  flutter,
  cpp,
  c,
  graphql,
  flask,
  django,
  nextjs,
  kotlin,
  csharp,
  godot,
  aws,
  kubernetes,
  ganache,
  //Projects
  nftopia,
  ican,
  themaze,
  linkedint,
  reverseshell,
  hades,
  warpath,
  identeefi,
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
    title: "Full Stack Software Engineer",
    icon: web,
  },
  {
    title: "Ethical Hacker",
    icon: mobile,
  },
  {
    title: "Game Developer",
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
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "NestJS",
    icon: nextjs,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Unity (C#)",
    icon: csharp,
  },
  {
    name: "Godot Engine",
    icon: godot,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Ganache",
    icon: ganache,
  },
];

const experiences = [
  {
    title: "Cross-Platform Mobile Developer",
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
    title: "Full Stack Developer",
    company_name: "Atlas",
    icon: placeholder,
    iconBg: "#E6DEDD",
    date: "January 2023 - April 2023",
    points: [
      "Developing and maintaining the Atlas Stock and Inventory web application using MERN stack and React Native FrameWork and other related technologies.",
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
    title: "Full stack Developer | Game Developer | Ethical Hacker",
    company_name: "FreeLancer",
    icon: placeholder,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
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
      "Ethical Hacker:",
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
        color: "orange-text-gradient",
      },
    ],
    image: stockmgt,
    live_link: "https://atlas-stock-app.vercel.app/",
    source_code_link:
      "https://github.com/Giddy-K/atlas-inventory-management-system.git",
  },
  {
    name: "Anti-Counterfeit Product Identification System",
    description:
      "The Anti-Counterfeit Product Identification System Using Blockchain is an innovative solution that uses blockchain technology to combat counterfeit products in various industries. It uses QR codes, smart contracts, and the Ethereum network to provide a secure and transparent platform for tracking and verifying product authenticity. The system is significant in addressing global supply chain issues by reducing the prevalence of counterfeit goods and enhancing transparency and trust.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "orange-text-gradient",
      },
      {
        name: "ethers.js",
        color: "blue-text-gradient",
      },
    ],
    image: identeefi,
    source_code_link:
      "https://github.com/Giddy-K/anti-counterfeit-product-identification-system-using-blockchain.git",
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
  {
    name: "Hades_Control_RAT",
    description:
      "Hades_Control is a lightweight, native open-source C++ Remote Administration Tool (RAT) for Windows. It enables remote command execution via CMD, PowerShell, or any console-based application. The tool includes features such as keylogging, script execution, multiple connections, startup persistence, DNS resolving, and more. Ideal for system administrators and cybersecurity professionals, Lilith provides remote control and administration capabilities with low latency and minimal bandwidth usage.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "PowerShell",
        color: "green-text-gradient",
      },
      {
        name: "Shell",
        color: "pink-text-gradient",
      },
      {
        name: "Keylogger",
        color: "blue-text-gradient",
      },
      {
        name: "CMD",
        color: "orange-text-gradient",
      },
    ],
    image: hades,
    live_link: "",
    source_code_link: "https://github.com/Giddy-K/HadesControl.git",
  },
  {
    name: "Reverse_shell_monitor",
    description:
      "Reverse_shell_monitor is a security tool designed to monitor and manage reverse shell connections. It is built using Python for scripting, PowerShell, Shell, VBScript, and Batchfile for automating and executing tasks across different environments. The tool aims to help system administrators and cybersecurity professionals identify, control, and terminate unauthorized reverse shell connections, ensuring system security and compliance.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PowerShell",
        color: "green-text-gradient",
      },
      {
        name: "Shell",
        color: "pink-text-gradient",
      },
      {
        name: "VBScript",
        color: "orange-text-gradient",
      },
      {
        name: "Batchfile",
        color: "green-text-gradient",
      },
    ],
    image: reverseshell,
    live_link: "",
    source_code_link: "https://github.com/Giddy-K/Reverse_shell_monitor.git",
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
      {
        name: "#HACKATHON PROJECT##",
        color: "orange-text-gradient",
      },
    ],
    image: nftopia,
    live_link:
      "https://dynamic-granita-e11512.netlify.app/",
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
    name: "Warpath Warriors",
    description:
      "Warpath Warriors is an adrenaline-fueled 2D fighting game that combines intense action with diverse characters, each with their unique fighting styles and abilities. Engage in thrilling battles, challenge your friends, and become the ultimate warrior!",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: warpath,
    source_code_link: "https://github.com/Giddy-K/Warpath-Warriors.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
