import aboutpic from "./components/Access/alex-1.jpeg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: '.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
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
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
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
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
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
    name: 'Pokemon data App',
    description:
      'Pokemon App retrieves data from PokeApi to provide information about any given Pokemon',
    stack: ['Next UI', 'Typescript', 'NextJs'],
    sourceCode: 'https://github.com/itsaalexk/pokemon-data',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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
  'Git/ Github',
  'MERN',
  'Python',
  'Firebase',
  'Docker',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alexkononenko6@protonmail.com',
}

export { header, about, projects, skills, contact }
