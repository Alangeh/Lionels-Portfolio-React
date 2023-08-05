import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/aeparts.png';
import Work2 from './assets/jopart.png';
import Work3 from './assets/reactstore.png';
import Work4 from './assets/personal.png';
import Work5 from './assets/project-5.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Lionel',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Alangeh',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '26 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Cameroonian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Istanbul/Turkey',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '<a href="tel: +90 552 527 4506" target="_blank">+90 552 527 4506</a>',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'ngobesinglionel@gmail.com',
  },

  {
    id: 9,
    title: 'Github : ',
    description: '<a href="https://github.com/Alangeh" target="_blank">https://github.com/Alangeh</a>',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, French, Turkish',
  },
];

export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Years of Professional <br /> Experience',
  },

  {
    id: 2,
    no: '7+',
    title: 'Years of <br /> Programming',
  },

  {
    id: 3,
    no: '10+',
    title: 'Completed <br /> Courses',
  },

  {
    id: 4,
    no: '3+',
    title: ' Excellence Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - PRESENT',
    title: 'Web Developer <span> Eryaz Software Technologies ISTANBUL </span>',
    desc: '.NET full-stack software engineer working as part of a team that developes new features for the ERYAZ B2B, B2C and WMS systems as well as debugging and fixing errors on the already existing features. Working directly with REST APIs and Webservices to communicate with client ERP Systems.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Oct 2020 - Nov 2020',
    title: 'Customer Service Support Engineer <span> IRS (Remote) </span>',
    desc: 'Worked as customer service support engineer for the IRS, helping clients of TurboTax with their tax problems, helping them use the tax system and sell tax plans. Experienced first hand how to handle clients facing both technical as well as logical problems when using the CRM system. Gained expeirience using CRMs such as TurboTax and Salesforce',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2017 - 2018',
    title: 'Junior Network Administrator <span> LETECAM Cameroon </span>',
    desc: 'Worked full-time as a junior network administrator intern, performing software and hardware systems support as well as system maintenance',
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2017 - 2018',
    title: 'Junior Systems Administrator <span> One-Stop IC Cameroon </span>',
    desc: 'Worked full-time as a junior systems administrator intern, performing daily systems maintenance.',
  },


  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Masters Degree <span> Gazi University Turkey</span>',
    desc: 'Continuing masters education at Gazi Universty in the department of Computer Engineering, Institute of Applied and Natural Sciences',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'Bachelors Degree (BEng) <span> University of Buea </span>',
    desc: 'Completed Bachelors Degree at the University of Buea, department of Computer Engineering, Faculty of Engineering and Technology',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2014',
    title: 'High School Degree <span> Sacred Heart College (SAHECO) </span>',
    desc: 'Completed high school, achieving first class excellence in sciences.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html/Css',
    percentage: '93',
  },

  {
    id: 2,
    title: 'Javascript/JQuery',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Python',
    percentage: '70',
  },

  {
    id: 4,
    title: 'C# / .NET',
    percentage: '90',
  },

  {
    id: 5,
    title: 'REST APIs',
    percentage: '90',
  },

  {
    id: 6,
    title: 'CI/CD Pipelines',
    percentage: '65',
  },

  {
    id: 7,
    title: 'SQL/MySQL',
    percentage: '86',
  },

  {
    id: 8,
    title: 'React',
    percentage: '69',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'AE PARTS Jordan',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Spare-parts Shop',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'AutoExcellence',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: '.NET MVC, C#, AngularJS, MSSQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://aeparts.jo/Home" targer="_blank" >https://aeparts.jo</a>',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'JoPART Jordan',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Auto Parts Shop',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'AutoExcellence',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: '.NET MVC, C#, AngularJS, MSSQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://jopart.com/" targer="_blank" >https://jopart.com</a>',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Online React Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Online Shop',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C#, .NET Core, ReactJS/Redux, Typescript, SQLite',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://github.com/Alangeh/ReactOnlineShop" targer="_blank">Click for github repository</a>',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'My Personal Site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'My Personal Page',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS, CSS, Typescript, GSAP',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://github.com/Alangeh/Lionels-Portfolio-React" targer="_blank">Click for github repository</a>',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Blog Website',
    details: [
      {
        title: 'Project : ',
        desc: 'Blog Site',
      },
      {
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        title: 'Language : ',
        desc: 'C#, .NET Core, JQuery, Ajax',
      },
      {
        title: 'Preview : ',
        desc: '<a href="https://github.com/Alangeh/Basic-Blog-using-.NET-Core-5-Framework" targer="_blank">Click for github repository</a>',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
