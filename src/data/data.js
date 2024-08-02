import ivosapp from "../assets/ivos-app.jpg";
import portfolio from "../assets/portfolio.jpg";
import isiita from "../assets/isiita1.jpg";
import upcebu from "../assets/upcebu.png";
import usc from "../assets/usc.png";
import jiita from "../assets/jiita.jpg";
import thesis from "../assets/thesis.jpg";

export const HERO_CONTENT =
  `Hi! I'm Alden de Loyola, a Software Developer from Cebu City, Philippines. I am a full-stack developer with expertise in creating website applications
  using architectures like MVC and restful API's. With a proven knack of building the backend and database of systems, I can create user
  interfaces to compliment functional systems and make them whole - all in the pursuit of creating usable systems that caters to the needs of the client. I also have a
  keen interest in machine learning and its wondrous applications in the various fields of society. I believe in the transformative
  power of Computer Science to change the world for the better.`

export const ABOUT_TEXT = `Since 2023, I hold a BS Computer Science degree from the University of the Philippines Cebu. I have an approximately two years
industry experience working mostly as backend and database developer. Maintaining this as my sole field of expertise held me back from achieving more, so 
I went out of my comfort zone to learn frontend development. Fun fact about me: everytime I'd go home
from my 9-hour job, I would use my night's free times (2-3 hrs) to improve my coding skills.
Since then, I always knew I loved creating something out of nothing, and that this philosophy applies in programming too - 
to be able to create an application out of mere lines of codes.`

export const ABOUT_TEXT2 = `Showcased below are some of my highlighted self-made projects using various tech stacks and applications.
I also have a published paper at the Journal of Industrial Information Technology and Application (JITTA) 2024 which was my
undergraduate thesis on machine learning classification.`


export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Software Engineer",
    company: "N-PAX CEBU CORPORATION",
    description: `I was the Lead Developer and CRM of a desktop system that handles the Quality Assurance and Production Order of devices created by a
                  manufacturing company; Developer and CRM of multiple Enterprise Resource Planning (ERP) and Accounting systems from different clients across the country; 
                  Updated and modified complex data strutures, data logic, and system
                  algorithms, from database structures -> backend architecture --> data designing in frontend; Mastered debugging applications and understanding
                  data flow of complex systems; Mastered reading and modifying high-complex SQL queries and stored procedures.
                  `,
    technologies: [".NET Framework", "Microsoft SQL Server", "Windows Forms .NET", "DevExpress", "C#", "SQL", "Desktop Application"],
  },
  {
    year: "February 2023 - June 2023",
    role: "Software Developer Intern",
    company: "MYT SOFTDEV SOLUTIONS, INC.",
    description: `I took my voluntary second internship at MYT SoftDev Solutions all while doing my thesis and studies on senior year. It was quite a challenge to learn another
    language, tech stack, and a new architecture which was creating an API for the frontend developers. At this point, I had the highest learning curve of my
    career especially on backend development because I was solely assigned to create an API for a system that works like "bit.ly", wherein the system receives an external URL
    to shorten its link, and designate the URL's server as its own - making the system a pseudo-server for the inserted URLS. This enables access and control to data analytics retrievable
    from the URL such as its traffic, user and device information of where/when/how the URL is clicked, etc.
    `,
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
      This website is for a music band called "IV OF SPADES" and its soloists, which has two principal features: (1) display of Artist Analytics and Statisics, and (2) a Social Media for the band's fans.
      For the Analytics/Statistics part, data is scraped from Spotify to display a ranking of the most streamed tracks all-time (All-Time), a ranking of the most streamed 
      tracks for the current period of time (Trending Now), and Artist Analytics. To achieve this Analytics feature, I employed and utilized several statistical tools such as coefficient of
      variation to rank artists based on the consistency of their streams across all tracks.

      On the other side, this website also has a social media feature where users can register and log in their profile. They can interact with other users by posting on the "Fan Board" where they can also
      react on the posts of others. This feature is like a simple version of Twitter. 
      `,
     technologies: ["Django","React","postgreSQL","Python","JavaScript","CSS","SQL","API"],
     link: `https://ivos-app-ui.onrender.com`
  },
  {
    title: "Developer Portfolio",
    image: portfolio,
    description:
      "This is a personal developer portfolio to showcase my background, experience, projects, education, and achievements.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "CSS"],
    link: `https://alden-deloyola.netlify.app/`
  },
  {
    title: "Music Genre Classification of Philippine Music",
    image: thesis,
    description:
    `This paper is presented during ISIITA last January 2024 and was selected for publication for the first 2024 issue of JIITA. This paper is a study on Philippine music genre classification. To the unavailability of Philippine music datasets on the web,
    I manually extracted the audio features of 1400 samples of Philippine music using Librosa to create a dataset. They were initially labeled
    by genre. After classifying the data, it was fed to five machine learning models, and then evaluated using
accuracy (model analysis) and recall (genre analysis).`,
    technologies: ["Python", "Sci-kit Learn", "Pandas", "Librosa"],
    link: `http://jiita.org/vol8no1-8-2/`
  }
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
  {
    title: "Paper published on JIITA (2024)",
    description: `After presenting my paper during ISIITA 2024, it was then selected for publication
                  to the Journal of Industrial Information Technology and Application (JITTA), under vol.8 no.1, p.906-913, 2024, DOI: 10.22664/ISITA.2024.8.1.906.
                  JIITA is an international academic open-access journal with a primary foothold in Asia and to the world that promotes
                  integration of machine learning and computing. `,
    image: jiita,
    link: `http://jiita.org/vol8no1-8-2/`
  },
];

export const CONTACTS = [
{
  address: "Brgy. Kamputhaw, Cebu City, Cebu, Philippines, 6000",
  phone: "09695245797",
  email: "aldenrmd10@gmail.com",
},
];