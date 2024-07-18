import ivosapp from "../assets/ivos-app.jpg";
import portfolio from "../assets/portfolio.jpg";
import isiita from "../assets/isiita1.jpg";
import upcebu from "../assets/upcebu.png";
import usc from "../assets/usc.png";

export const HERO_CONTENT =
  `Hi! I'm Alden de Loyola, a Software Developer from Cebu City, Philippines. I am a full-stack developer with expertise in creating website applications
  using architectures like MVC and restful API's. With a proven knack of building the backend and database of systems, I can also create user
  interfaces to compliment the system and make them whole - all in the pursuit of creating usable systems that caters to the needs of anyone. I believe in the transformative
  power of Computer Science to change the world.`

export const ABOUT_TEXT = `Since 2023, I hold a BS Computer Science degree from the University of the Philippines Cebu. I have an approximately two years
industry experience working mostly on creating backend and database of systems. Maintaining this limited field of expertise held me back from achieving the ultimate potential
of a meaningful and useful degree, so I freed myself from the limits of backend development, went out of my comfort zone to learn frontend. Everytime I go home\
from my 9-hour shift job, I would convert my night's remaining free times (2 to 3 hours) to upskill.
In this way, I knew I could obtain the power of creating useful systems. Since then, I always knew I loved to create something out of nothing. It was only until recent times where I
realized that this philosophy applies in programming, too - the ability to be able to create something out of mere lines of codes.`


export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Software Engineer",
    company: "N-PAX CEBU CORPORATION",
    description: `I developed and maintained the backend of Enterprise Resource Planning (ERP) and Accounting systems from multiple clients across the country,
                  all while being the direct contact person whenever they have concerns related to the system or requests to be updated in the system.
                  By upgrading features for the clients’ systems, I mastered debugging solutions and complex SQL queries, creating algorithms and logic across the backend server`,
    technologies: [".NET Framework", "Microsoft SQL Server", "Windows Forms .NET", "DevExpress", "C#", "SQL", "Desktop Application"],
  },
  {
    year: "February 2023 - June 2023",
    role: "Software Developer Intern",
    company: "MYT SOFTDEV SOLUTIONS, INC.",
    description: `I took my voluntary second internship in MYT SoftDev Solutions all while doing my thesis and studies on senior year. It was quite a challenge to learn another
    language, tech stack, and a new architecture which was creating an API for the frontend developers. At this point, I had the highest learning curve of my
    career especially on backend development. In this internship, I was solely assigned to create an API for a system that works like bit.ly wherein a URL is converted to a shortened one
    and is adopted into the system's own server - thus enabling access to the URL's traffic, location,and other analytics`,
    technologies: ["CodeIgniter", "mySQL", "phpMyAdmin","PHP","SQL","API"],
  },
  {
    year: "July 2022 - August 2022",
    role: "Software Developer Intern",
    company: "Mercedes-Benz Group Services Philippines, Inc.",
    description: `My task on this first internship was to create an Employee Management System that handles the employees' profile, shift, and roles in the company's ecosystem. I had a partner
    who worked as a frontend developer, so I was focused on developing the backend and database.`,
    technologies: [".NET Framework", "Microsoft SQL Server","ASP.NET","C#","SQL","jQuery","MVC"],
  },
];

export const PROJECTS = [
  {
    title: "IVOS Analytics Website",
    image: ivosapp,
    description:
      `
      This website is for a music band called "IV OF SPADES", which has two principal features: (1) display of Artist Analytics and Statisics, and (2) a Social Media for the band's fans.
      For the Analytics/Statistics part, data is scraped from Spotify (will soon utilize Spotify API) to display a ranking of the most streamed tracks all-time (All-Time), a ranking of the most streamed 
      tracks for the current period of time (Trending Now), and Artist Analytics - which I have employed several statistical tools such as coefficient of variation to rank the artist based on the 
      consistency of their streams across all tracks.

      On the other side, this website also has a social media feature where users can register and log in their profile. They can interact with other users by posting on the "Fan Board" where they can also
      react on the posts of others, much like a simple version of Twitter. 
      `,
     technologies: ["Django","React","postgreSQL","Python","JavaScript","CSS","SQL","API"],
     link: `https://ivos-app-ui.onrender.com`
  },
  {
    title: "Developer Portfolio",
    image: portfolio,
    description:
      "Personal developer portfolio to showcase background, experience, projects, education, and achievements.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "CSS"],
    link: `https://ubiquitous-parfait-b4cfea.netlify.app`
  },
];

export const EDUCATION = [
  {
    school: "University of the Philippines Cebu",
    image: upcebu,
    address: "Cebu City, Philippines",
    distinction: "Bachelor of Science in Computer Science",
    description: "Cum Laude"
  },
  {
    school: "University of San Carlos",
    image: usc,
    address: "Cebu City, Philippines",
    distinction: "High School Diploma",
    description: "With Honors"
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Presentor at ISIITA 2024",
    description: `On January 16, 2024, I was chosen by my professor, Dr. Robert Roxas, to present my undergraduate Machine Learning thesis on International Symposium on Innovation in Information Tech and Application (ISIITA 2024),
    entitled Music Genre Classification of Philippine Music, alongside fellow students and researchers from different countries accross the globe such as South Korea, US, Uzbekistan etc.`,
    image: isiita,
    link: `https://isiita.org/`
  },
];

export const CONTACTS = [
{
  address: "Brgy. Kamputhaw, Cebu City, Cebu, Philippines, 6000",
  phone: "09695245797",
  email: "aldenrmd10@gmail.com",
},
];