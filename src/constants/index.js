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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mypaisaa,
  samsung,
  talink,
  paypal,
  western,
  taskify,
  framer,
  streamify,
  dashboard
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
    title: "Freelancer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  }
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Talink",
    icon: talink,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Developed interactive Bar and Pie Charts using React, TypeScript, and Material UI to visualize travel summary data for councils, districts, and schools",
      "Integrated backend APIs to fetch dynamic data based on the selected view and developed tables to present structured data, enhancing usability and accessibility",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Deployed the web application on AWS using Docker, utilizing EC2 for backend, S3 for static assets, and CloudFront for fast content delivery, ensuring scalability and low latency",
    ],
  },
  {
    title: "Masters in Software Engineering",
    company_name: "Western University, London, Canada",
    icon: western,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Dec 2024",
    points: [
      "Developing and maintaining web applications using React.js and other backend technologies.",
      "Collaborating with students/professors to create high-quality web designs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to fellow students.",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "PayPal",
    icon: paypal,
    iconBg: "#383E56",
    date: "June 2023 - Aug 2023",
    points: [
      "I worked in Buy Now Pay Later(BNPL) microservice. Implemented real-time credit limit adjustments, ensuring accurate deduction and restoration of user credit limit for transactions and refunds",
      "Enhanced the transaction processing system using Java, Spring Boot, PostgreSQL, and Kafka, handling BNPL purchases, refunds, and seamless credit limit updates while integrating with the larger BNPL architecture, including reconciliation and wallet services",
      "Worked on real-time data pipelines for financial transactions data using Apache Airflow and Kafka as the event broker, ensuring high-throughput processing and reducing data processing latency by 40%",
      "Implemented unit and integration testing to ensure system reliability and performed real-time monitoring using Prometheus and Grafana, while also managing CI/CD pipelines using Jenkins and GitHub for automated builds and deployments.",
      "Containerized applications using Docker and managed deployments on Kubernetes, ensuring scalable, fault-tolerant, and efficient deployment pipelines for the BNPL microservice",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "MyPaisaa ( Fintech Startup)",
    icon: mypaisaa,
    iconBg: "#E6DEDD",
    date: "June 2021 - May 2023",
    points: [
      "Built a centralized reporting system by designing ETL pipelines using Kafka and Spring Boot to aggregate financial data from MySQL and MongoDB, transform it into a unified schema, and load it into Amazon Redshift for reporting and historical analysis, enabling real-time financial insights and reducing manual reporting time",
      "Built a low-latency, real-time digital auction system using Java, Spring Boot, MongoDB, and WebSockets, leveraging Redis Pub/Sub for scalable bid updates and webhooks for seamless third-party vendor integration",
      "Designed Spring Boot REST APIs for an aggregator microservice to automate loan disbursal, using WebClient for efficient synchronous inter-service communication and MySQL for data management",
      "Deployed and managed microservices on AWS using Docker and Kubernetes, integrated Prometheus/Grafana for monitoring",
      "Developed dynamic and responsive UI screens using React.js and TypeScript for internal teams, including Chit Groups, Digital Auctions, and Financial Reports",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Samsung Research and Development",
    icon: samsung,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Jun 2021",
    points: [
      "Led the execution and validation of Camera Image Test Suite (ITS) across various Samsung LSI-based chipsets in smartphones, ensuring seamless system integration and API functionality for optimal image quality, performance, and compatibility with hardware components",
      "Tested over 100 CI/CD builds using Java/Python for camera image quality metrics and maintained documentation for internal APIs and production issues, resulting in 25% improvement in bug resolution time and improved SLA",
      "Developed image quality summary reports for various smartphone devices using Jasper Reports, providing detailed insights for ISP tuning and optimization",
    ],
  },
];

const testimonials = [
  {
    testimonial:"Sherry is thoroughly professional at work. It is wonderful to work with him as a team member. Not only assigned but taking initiatives at work is his best attribute. He has very positive attitude at work. Given a chance I would be delighted to work with him again.",
    name: "Swapnil Baluja",
    designation: "Senior Software Engineer",
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "My experience in working with Sherry for about a year at Samsung has been wonderful. Sherry is an individual who is always driven to do beyond what is required, to get the root of the problem or task at hand. He is extremely patient and is always open to discussions and sharing his knowledge in order to tackle any issue at hand.Sherry is compassionate team mate and always shows keen interest to take up responsibility, to learn and inhabit new skills. ",
    name: "Vartika Agarwal",
    designation: "Chief Engineer",
    company: "Samsung R&D ",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I admire how you uphold organizational growth for integrity, diversity, I appreciate how Sherry builds relationships with colleagues. He is always professional and courteous, and he has a natural talent for making people feel comfortable and valued.",
    name: "Hariprasad Bachina",
    designation: "AVP",
    company: "MyPaisaa",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
];

const projects = [
  {
    name: "Admin Dashboard React Material UI",
    description:
      "This project provides a fully responsive and interactive admin panel with dark mode support, dynamic charts, data tables, form validation, and a calendar",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Nivo Charts",
        color: "pink-text-gradient",
      },
      {
        name: "Formik",
        color: "blue-text-gradient",
      },
      {
        name: "Yup",
        color: "green-text-gradient",
      },
      {
        name: "FullCalendar",
        color: "pink-text-gradient",
      },
      {
        name: "Data Grid",
        color: "blue-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/ahujasherry/React-admin-Dashboard.git",
    live_demo_link: "https://streamify-flax.vercel.app/",
  },
  {
    name: "Streamify",
    description:
      "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockblusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the contnet you want to watch.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      
    ],
    image: streamify,
    source_code_link: "https://github.com/ahujasherry/Streamify.git",
    live_demo_link: "https://streamify-flax.vercel.app/",
  },
  {
    name: "React Framer Landing page",
    description:
      "This project provides a fully responsive and interactive admin panel with dark mode support, dynamic charts, data tables, form validation, and a calendar",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Framer",
        color: "green-text-gradient",
      },
     
    ],
    image: framer,
    source_code_link: "https://github.com/ahujasherry/React-Framer-LandingPage.git",
    live_demo_link: "https://react-framer-landing-page.vercel.app/",
  },
  {
    name: "Taskify",
    description:
      "Beautiful UI To Do with voice commands",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      
    ],
    image: taskify,
    source_code_link: "https://github.com/ahujasherry/Taskify.git",
    live_demo_link: "https://taskify-16mn.vercel.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
