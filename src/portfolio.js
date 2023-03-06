import aboutpic from './components/Access/alex-1.jpeg'

const header = {
  homepage: '/',
  title: '.',
}


const about = {
  photo: aboutpic,

  name: 'Alex Kononenko',
  role: 'Full Stack Developer',
  description:
    'Passionate about web-development and Cybersecurity. I enjoy learning new technologies and contributing to open-source projects. Im focused on improving my programming skills and stay updated with the latest technology. ',
  resume:
    'https://drive.google.com/file/d/1ocUh4llS0-z3i5M1PCUnxEv-BseF9IxP/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/alex-kononenko-17a2a524b/',
    github: 'https://github.com/itsaalexk',
  },
}

const projects = [
  {
    name: 'Calendy',
    description:
      'This App was developed to provide a team calendar to make working together a lot easier , you can create new users and work together comfortably',
    stack: ['MongoDB', 'ExpressJs', 'React', 'NodeJs', 'Mongoose'],
    sourceCode: 'https://github.com/itsaalexk/mern-calendar',
    livePreview: 'mern-calendar-tau.vercel.app',
  },
  {
    name: 'Open Jira',
    description: 'Kanban like app for managing current and pending tasks',
    stack: ['Typescript', 'NextJs', 'MongoDB'],
    sourceCode: 'https://github.com/itsaalexk/open-jira',
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
    name: 'Weather App',
    description:
      'This App was developed to provide location data using Mapbox API and then obtain weather data using OpenWeather API.This App uses a CLI only to input and display data',
    stack: ['localstorage', 'Openweather API', 'Mapbox API', 'NodeJS'],
    sourceCode: 'https://github.com/itsaalexk/weather-app',
    livePreview: '',
  },
  {
    name: 'Note App',
    description:
      'Simple note App made using Vanilla JS and Webpack as a module bundler . The information provided is stored in localstorage so you dont lose any data when refreshing the App',
    stack: ['Vanilla Js', 'NPM', 'Webpack'],
    sourceCode: 'https://github.com/itsaalexk/notes',
    livePreview: 'https://itsaalexk.github.io/notes/',
  },
  {
    name: 'Gif App',
    description:
      'Gif App that fetches data about any gif using Giphy API. This App was developed using React',
    stack: ['API Fetching', 'Firebase', 'React'],
    sourceCode: 'https://github.com/itsaalexk/gif-app',
    livePreview: '',
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
  'React Native',
  'Material UI',
  'Next UI',
  'Bootstap',
  'TailwindCSS',
  'Git/ Github',
  'MERN',
  'Python',
  'Firebase',
  'Docker',
  'Postman',
]

const contact = {
  email: 'alexkononenko6@protonmail.com',
}

export { header, about, projects, skills, contact }
