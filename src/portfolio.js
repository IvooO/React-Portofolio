/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ivo Van Overstraeten",
  title: "Hi all, I'm Ivo",
  subTitle: emoji(
    "A web and blockchain developer 🚀 based in Brussels, Belgium. I'm building applications with JavaScript / Reactjs / Nodejs / Solidity / Infura and some other cool libraries and frameworks. Previous background in quality management within the food industry and operational management experience in a research lab. I hope one day to make a change with the skills that I have."
    
  ),
  resumeLink:
    "https://drive.google.com/file/d/1rTdDi35Vng0dkqPOInVpZwOlHAfWX61Y/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IvooO",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "ivovanoverstraeten@gmail.com",
  facebook: "https://www.facebook.com/ivo.vanoverstraeten",
  medium: "https://medium.com/@saadpasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blockchain Section

const blockchainSection = {
  title: "",
  subTitle: "BLOCKCHAIN DEVELOPER",
  skills: [
    emoji(
      "⚡ Token Development Services"
    ),
    emoji("⚡ Smart Contract Development and Dapp development"),
    emoji(
      "⚡ Token Wallet Development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  blockchainSkills: [
    {
      skillName: "Bitcoin",
      fontAwesomeClassname: "fab fa-btc"
    },
    {
      skillName: "Ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    }
    // {
    //   skillName: "Wallets",
    //   fontAwesomeClassname: "fab fa-wallet"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const workExperiences = {
  //   display: true, //Set it to true to show workExperiences Section
  //   experience: [
  //     {
  //       role: "Software Engineer",
  //       company: "Facebook",
  //       companylogo: require("./assets/images/facebookLogo.png"),
  //       date: "June 2018 – Present",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //       descBullets: [
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  //       ]
  //     },
  //     {
  //       role: "Front-End Developer",
  //       company: "Quora",
  //       companylogo: require("./assets/images/quoraLogo.png"),
  //       date: "May 2017 – May 2018",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //     },
  //     {
  //       role: "Software Engineer Intern",
  //       company: "Airbnb",
  //       companylogo: require("./assets/images/airbnbLogo.png"),
  //       date: "Jan 2015 – Sep 2015",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //     }
  //   ]
    };


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// // Work experience section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Udacity",
      logo: require("./assets/images/udacityLogo.png"),
      subHeader: "Blockchain Developer",
      duration: "Oktober 2021 - February 2022",
      desc: "Blockchain Developer Nanodegree program.",
      descBullets: [
        "Blockchain Fundamentals",
        "Ethereum Smart Contracts, Tokens and Dapps",
        "Blockchain Architecture",
        "Dapp with autonomous smart contracts and oracles"
      ]
    },
    {
      schoolName: "Udacity",
      logo: require("./assets/images/udacityLogo.png"),
      subHeader: "Full Stack Web Developer",
      duration: "September 2021 - Januari 2022",
      desc: "Full Stack Web Developer Nanodegree program.",
      descBullets: ["SQL and Data Modeling for the Web",
                    "API Development and Documentation", 
                    "Identity Access Management", 
                    "Server Deployment and Containerization"]
    },
 
    {
      schoolName: "MIT Sloan School of Management",
      logo: require("./assets/images/MITLogo.png"),
      subHeader: "Blockchain and Money",
      duration: "January 2020 - April 2020",
      desc: "Explore blockchain technology’s potential use—by entrepreneurs and incumbents—to change the world of money and finance. Prof Gary Gensler.",
      descBullets: ["Cryptography and consensus",
                    "Smart contracts and DApps", 
                    "Financial system challenges and opportunities", 
                    "Trade finance and supply chain"]
    },
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "CS50's Introduction to Computer Science",
      duration: "September 2017- July 2018",
      desc: "CS50x teaches how to think algorithmically and solve problems efficiently.",
      descBullets: ["Understanding of computer science and programming",
                    "Algorithmically thinking and solving programming problems efficiently",
                    "Abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development", 
                    "Familiarity in a number of languages, including C, PHP, and JavaScript plus SQL, CSS, and HTML"]
    },


  ]
};

 

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

  const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
  };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Blockchain Development Services"),
  subtitle:
    "Helping enterprises and startups leverage all the benefits of the blockchain",

  achievementsCards: [
    {
      title: "Token Development Services",
      subtitle:
        "We Create Variety Of Tokens On Any Blockchain.",
      image: require("./assets/images/token.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Smart Contract and Dapp Development",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Token Wallet Development",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@IvooO/must-have-blockchain-developer-skills-e5bb323b1ad7",
      title: "Must-have blockchain developer skills",
      description:
        "Successfully navigating the many roles and responsibilities of a blockchain developer requires specialized skills ranging from cryptography to smart contracts to web development."
    },
    {
      url: "https://www.economist.com/leaders/2015/10/31/the-trust-machine",
      title: "The trust machine",
      description:
        "The technology behind bitcoin could transform how the economy works."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

 const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
 };

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  foto: require("./assets/images/foto.JPG"),
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+32 (0)485587174",
  email_address: "ivovanoverstraeten@gmail.com"
};

// Twitter Section

 const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
 };

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  blockchainSection,
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
  twitterDetails
};
