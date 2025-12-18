/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename if you change animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Lavi",
  title: "Hi, I'm Lavi",
  subTitle: emoji(
    "Results-driven .NET Developer with 3+ years of experience building scalable web applications using ASP.NET, C#, .NET Core, MVC, Web API and SQL Server."
  ),
  resumeLink: "https://drive.google.com/file/d/1phAOm5ZpBw2oa6oWkZ01wuUysuxVVbOI/view?usp=drivesdk", // yahan apna real resume link daal
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/your-github-username",
  linkedin: "https://www.linkedin.com/in/lavi-singh-0bab601b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  gmail: "kmlavi41@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "Backend-focused .NET Developer building scalable, high-performance web applications",
  skills: [
    emoji(
      "⚡ Develop full-stack web applications using ASP.NET, .NET Core, MVC and C#"
    ),
    emoji(
      "⚡ Design and optimize SQL Server databases, queries and stored procedures"
    ),
    emoji(
      "⚡ Build RESTful Web APIs and integrate them with modern front-end clients"
    ),
    emoji(
      "⚡ Write clean, maintainable code following best practices, testing and code reviews"
    )
  ],
  softwareSkills: [
    { skillName: "ASP.NET", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: ".NET Core", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "MVC", fontAwesomeClassname: "fas fa-layer-group" },
    { skillName: "SQL Server", fontAwesomeClassname: "fas fa-database" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Vision Institute of Technology, Kanpur",
      logo: require("./assets/images/college.jfif"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "July 2016 - April 2020",
      desc:
        "Studied core computer science fundamentals and software engineering concepts, focusing on web development and .NET technologies.",
      descBullets: [
        "Completed academic projects using ASP.NET and C#.",
        "Learnt database concepts, data structures and algorithms."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend / .NET",
      progressPercentage: "85%"
    },
    {
      Stack: "Database (SQL Server / MySQL)",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend (HTML, CSS, JavaScript)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer (.NET)",
      company: "Microwins Software Solutions",
      companylogo: require("./assets/images/microwins.png"),
      date: "July 2023 – Oct 2025",
      desc:
        "Worked as a .NET Developer building and maintaining scalable web applications.",
      descBullets: [
        "Developed and maintained .NET web applications using ASP.NET, C#, MVC, .NET Core and SQL Server.",
        "Transformed UX designs into responsive web apps using latest .NET libraries and components including Blazor.",
        "Implemented updates, testing and debugging to enhance usability, stability and performance."
      ]
    },
    {
      role: "Software Developer Trainee",
      company: "Microwins Software Solutions",
      companylogo: require("./assets/images/microwins.png"),
      date: "Aug 2022 – July 2023",
      desc:
        "Trained on full-stack web development using ASP.NET and modern front-end technologies.",
      descBullets: [
        "Built training projects with ASP.NET, HTML, CSS, JavaScript and jQuery.",
        "Learnt MVC architecture, responsive design and best coding practices."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Chetu India Pvt Ltd",
      companylogo: require("./assets/images/chetu.jfif"),
      date: "Apr 2022 – July 2022",
      desc:
        "Assisted senior developers in .NET web application development and maintenance.",
      descBullets: [
        "Supported development of ASP.NET modules and bug fixes.",
        "Participated in team stand-ups and code reviews to learn industry practices."
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "Real-world logistics and freight platforms built with .NET",
  projects: [
    {
      image: require("./assets/images/bs.png"),
      projectName: "BS Worldwide",
      projectDesc:
        "Freight forwarding network platform for 5000+ member offices worldwide, built using .NET Core, MVC and MS SQL.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bsworldwide.net/"
        }
      ]
    },
    {
      image: require("./assets/images/ar.jpg"),
      projectName: "AR Logistic",
      projectDesc:
        "Logistics management solution providing air, rail and road transportation services with a scalable .NET backend.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.arlogistic.in/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Seminars, webinars and workshops that helped me grow as a developer.",
  achievementsCards: [
    {
      title: "Python Seminar",
      subtitle: "Attended Python seminar organized by CETPA Infotech Pvt Ltd.",
      image: require("./assets/images/Python.png"),
      imageAlt: "Seminar",
      footerLink: []
    },
    {
      title: "Python Webinar",
      subtitle: "Attended Python webinar organized by Coding Ninja.",
      image: require("./assets/images/Python.png"),
      imageAlt: "Webinar",
      footerLink: []
    },
    {
      title: "MATLAB Workshop",
      subtitle: "Completed MATLAB workshop organized by IQRA Software Pvt Ltd.",
      image: require("./assets/images/matlab.png"),
      imageAlt: "Workshop",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "Planning to share learnings about .NET, clean architecture and performance optimization.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections
const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I love sharing whatever I learn with friends and fellow developers."
  ),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Maybe someday 🙂",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a .NET project, freelance work or job opportunity? My inbox is open.",
  number: "+91-6393977480",
  email_address: "kmlavi41@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "", // your twitter handle without @
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
