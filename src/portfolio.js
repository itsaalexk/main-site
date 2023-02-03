import aboutpic from "./components/Access/alex-1.jpeg"

const header = {
  
  homepage: '/',
  title: '.',
}

const about = {
  photo:aboutpic,

  name: 'Alex Kononenko',
  role: 'Full Stack Developer',
  description:
    'Devscola & Coderhouse student. Passionate about web-development and Cybersecurity. I enjoy learning new technologies and contributing to open-source projects. Im focused on improving my programming skills and stay updated with the latest technology. ',
  resume: 'https://drive.google.com/file/d/1yzeSrQYcfVlx-bv-RiBAQ9al1Ecfgoqc/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/alex-kononenko-17a2a524b/',
    github: 'https://github.com/itsaalexk',
  },
}

const projects = [

  {
    name: 'Weather App',
    description:
      'This App was developed to provide location data using Mapbox API and then obtain weather data using OpenWeather API.This App uses a CLI only to input and display data',
    stack: ['localstorage', 'Openweather API', 'Mapbox API',"NodeJS"],
    sourceCode: 'https://github.com/itsaalexk/weather-app',
    livePreview: '',
  },
  {
    name: 'Note App',
    description:
      'Simple note App made using Vanilla JS and Webpack as a module bundler . The information provided is stored in localstorage so you dont lose any data when refreshing the App',
    stack: ['Vanilla Js', 'NPM', "Webpack"],
    sourceCode: 'https://github.com/itsaalexk/notes',
    livePreview: 'https://itsaalexk.github.io/notes/',
  },
  {
    name: 'Gif App',
    description:
      'Gif App that fetches data about any gif using Giphy API. This App was developed using React',
    stack: ['API Fetching',"Firebase", 'React'],
    sourceCode: 'https://github.com/itsaalexk/gif-app',
    livePreview: '',
  },
  {
    name: 'Journal App ',
    description:
      'Journal App is able to register some logs , notes and upload some photos',
    stack: ['Javascript', 'Material UI', 'React'],
    sourceCode: 'https://github.com/itsaalexk/Journal-app',
    
  },
  {
    name: 'Calendy',
    description:
      ' Full Stack Calendar app to organize your own tasks',
    stack: ['React', 'Javascript', 'Vite', "MongoDB", "JWT"],
    sourceCode: 'https://github.com/itsaalexk/mern-calendar',
    livePreview: 'https://mern-calendar-tau.vercel.app/',
  },
]

const skills = [

  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'NextJS',
  "React Native",
  'Material UI',
  "Next UI",
  "Bootstap",
  "TailwindCSS",
  'Git/ Github',
  'MERN',
  'Python',
  'Firebase',
  'Docker',
  "Postman"
  
]

const contact = {
  
  email: 'alexkononenko6@protonmail.com',
}

export { header, about, projects, skills, contact }
