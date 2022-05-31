/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Mohamed Adel',
  title: "Hi all, I'm Mohamed",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building web applications with Anguler / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1SUMiwxf48XbKIhVFanBdvCEFbA2KvM29/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/Moadell',
  linkedin: 'https://www.linkedin.com/in/mohamed-adel-53a7ba124/',
  gmail: 'mohamedzoma2008@yahoo.com',
 
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web'
    ),
    emoji('⚡ Dealing with datascience problems using Python'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'bitbucket',
      fontAwesomeClassname: 'fab fa-bitbucket',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'monogdb',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'angular',
      fontAwesomeClassname: 'fab fa-angular',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Nile University',
      logo: require('./assets/images/NU.png'),
      subHeader: 'Bachelor of Science in Computer Engineering',
      duration: 'September 2016 - June 2021',
       desc: 'Full Scholarship Student',
      descBullets: [
        'GPA : 3.35/4',
        
      ], 
    },
  /*   {
      schoolName: 'Stanford University',
      logo: require('./assets/images/stanfordLogo.png'),
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'September 2013 - April 2017',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    }, */
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Data Science',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Jr. Innovation Engineer',
      company: 'Nile Uinversity',
      companylogo: require('./assets/images/NU.png'),
      date: 'Aug 2021 – Jan 2022',
      desc:
        'Adept new technologies to be used by NU students and staff. T.A for Physical Sensors Course',
      descBullets: [
        'Teaching',
        'Innovation',
      ],
    },
    {
      role: 'Jr. Software Engineer',
      company: 'Intixel',
      companylogo: require('./assets/images/Int.png'),
      date: 'July 2021 – Dec 2021',
      desc:
        'Developing Annotation tool which used by the Doctors to annotate the possible infected areas from Memogram images and send it back to the machine learning model to improve the overall performance.',
      descBullets: [
        'Reactjs/Redux',
        'Django',
      ],
    },
    
    {
      role: 'Full Stack Devleoper',
      company: 'Funnelll',
      companylogo: require('./assets/images/FU.png'),
      date: 'Nov 2020 – Feb 2021',
      desc:
        'Set up and integrate your marketing stack. Get actionable insights on how to get more sales from your marketing budget.',
      descBullets: [
        'Angular',
        'Monogodb',
      ],
    },
    {
      role: 'Front-End Devleoper',
      company: 'BuddiMeal',
      companylogo: require('./assets/images/BM.png'),
      date: 'Aug 2020 – Oct 2020',
      desc:
        'Working in the restaurants interface to allocate meals.',
      descBullets: [
        'React-JS / Redux',
        'Firebase',
      ],    
      },
    {
      role: 'Co-Founder & CTO',
      company: 'Excellia',
      companylogo: require('./assets/images/ex.png'),
      date: 'June 2020 – Present',
      desc:
        'Excellia is a peer to peer online learning platform allowing students to exchange knowledge with graduates and junior students.',
      descBullets: [
        'React-JS / Redux',
        'Firebase',
      ],
      },
      {
        role: 'Intern Software Engineer',
        company: 'Vodaofne VOIS',
        companylogo: require('./assets/images/VOIS.png'),
        date: 'Jan 2020 – May 2020',
        desc:
          'Working in Digitalization team to automat HR system and some other internal stuff',
        descBullets: [
          'React-JS',
          'React Native',
        ],
        },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Moadell', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME PARTIES THAT I HELPED TO CREATE THEIR TECH WITH HAPPINES',
  projects: [
    {
      image: require('./assets/images/VD.png'),
      link: 'https://www.vodafone.co.uk/',
    },
    {
      image: require('./assets/images/IH.jpg'),
      link: 'https://nu.edu.eg/innovation_hub.php',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Devlopers Soultions Challange Winner',
      subtitle:
        'MENA Region First Place with Excellia Project',
      image: require('./assets/images/DSC.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/1XQe7Uil3hAM8DBzcm3fyKIH6uekc3uRT/view',
        },
        {
          name: 'Google DSC',
          url:
            'https://developers.google.com/community/dsc',
        },
      ],
    },
    {
      title: 'IBM Professional AI Engineer',
      subtitle:
        '6 months program to earn this professinoal diploma',
      image: require('./assets/images/IBM.svg'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://www.coursera.org/account/accomplishments/specialization/certificate/TNUGNBDLYGTE',
        },
        {
          name: 'Program',
          url:
            'https://www.coursera.org/professional-certificates/ai-engineer',
        },
      ],
    },

    {
      title: 'Full-Stack Web Devloper',
      subtitle: 'Completed Certifcation from one million arab coders initiative',
      image: require('./assets/images/MM.jpg'),
      footerLink: [
        { name: 'Certification', url: 'https://drive.google.com/file/d/1w5B7Ue58pv1wKRz-Dco-iaw4f6boYq7I/view' },
        {
          name: 'Program',
          url: 'https://www.arabcoders.ae/',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: '',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: '',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    '',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+20-01091229749',
  emailAddress: 'mo.adel@nu.edu.eg',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};
console.log(process.env.REACT_APP_GITHUB_TOKEN)
export {
  
  illustration,
  greeting,
  socialMediaLinks,
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
};
