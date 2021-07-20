import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jannik Buschke', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Software Entwickler Portfolio von Jannik Buschke', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jannik',
  subtitle: 'Freelance full stack developer',
  cta: 'More info',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi, I'm Jannik, a software developer with about 10 years of professional experience. I graduated in IT engineering and work since my studies in the area of business apps.",
  paragraphTwo:
    'I focus on full stack web apps with react.js and ASP.NET (Core) (C#) with integrations in the Microsoft platforms (Azure, O365, Teams). I really love to work with these technologies, therefore I am building open source integration and productivity libraries that make my life and the lifes of other developers easier. I also blog about my experiences.',
  paragraphThree: 'I value clean code and see software development as a craftsmanship.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'planner1.png',
    title: 'planner1 (current)',
    info: 'Currently I am working on the product suite of gertrud, a company based in Hamburg. The products target executive board offices and their planning process of complex meetings.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'formik-antd.png',
    title: 'formik-antd (current)',
    info: 'A react integration library for formik and ant design with decent succcess',
    info2: '',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'demo.png',
    title: 'glow (current)',
    info: 'A full stack framework based on ASP.NET Core and react.js ',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'focus.png',
    title: 'focus (current)',
    info: 'A timetracking app',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'focus.png',
    title: 'gatsby-antd-docs (current)',
    info: 'A documentation template build with gatsby',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'past projects',
  //   info: 'I implemented a lot of different apps on different platforms. I mostly used C#. My first app was in the business area of EHSQ',
  //   info2: '',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jbu@janniks.work',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jannikbuschke',
    },
    {
      id: nanoid(),
      name: 'blog',
      url: 'https://www.jannikbuschke.de/blog/',
    },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jannikbuschke',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
