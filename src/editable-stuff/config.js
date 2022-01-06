// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ce8744, #acce44, #4484ce, #6b32cf, #1ad7c0, #ff7f7f, #ff9b11, #9b59b6, #5bd1de, #bd72cc, #fc2819",
  firstName: "Lu Htoo",
  middleName: "",
  lastName: "Kyaw",
  message: " Heading to future with autonomous technology",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/luhtookyaw",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/luhtoo.kyaw.73",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lu-htoo-kyaw-382347188",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/LuHtooKyaw?t=5O_HN9nd0vljNEHO5GJpxw&s=09",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilePic.jpg"),
  imageSize: 375,
  message:
    "My name is Lu Htoo Kyaw. Bachelor degree graduate from University of Yangon. Mainly enthusiastic in developing softwares and websites especially associated with those of A.I, computer vision, etc. Reliable and punctual software developer able to handle fast-paced work. Proven willingness to take on any task to support the project team and help the team progress. Offer strong coding skills and confidence to overcome strict deadlines.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "luhtookyaw", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["portfolio-template-react", "netflix-clone-react", "restaurant-system-fullstack", "disneyplus-clone-react"],
};

// Education SECTION
const education = {
  show: true,
  heading: "Education",
  message:
    "Went to a number of universities holding strong educational background. A lot of online studies can be mentioned.",
  images: [
    {
      img: require("../editable-stuff/universityofyangon.jpeg"),
      label: "University of Yangon",
      paragraph: "December 2014 - December 2019"
    },
    {
      img: require("../editable-stuff/uit.jpeg"),
      label: "University of Information Technology, Yangon",
      paragraph: "February 2019 - Till Date"
    },
  ],
  imageSize: {
    width: "400",
    height: "320"
  },
  universities: {
    first: "University Of Yangon - Bachelor Of Science (Geology)",
    second: "University Of Information Technology - Bachelor Of Computer Science (Information Technology)",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "PHP", value: 64 },
    { name: "C/C++", value: 30 },
    { name: "JavaScript", value: 50 },
    { name: "Java", value: 40 },
    { name: "HTML/CSS", value: 70 },
    { name: "R", value: 20 },
  ],
  softSkills: [
    { name: "Full Stack Web Development", value: 60 },
    { name: "Artificial Intelligence/Machine Learning", value: 66 },
    { name: "Data Science/Statistics", value: 42 },
    { name: "Programming Languages", value: 75 },
    { name: "Unix/Linux", value: 49 },
    { name: "UI/UX", value: 50 },
    { name: "Databases", value: 65 },
    { name: "Desktop Publishing And Presentation Tools", value: 80 },
  ],
  frameworks: [
    { name: "laravel.com", logo: require("../editable-stuff/laravellogo.svg"), value: 50 },
    { name: "djangoproject.com", logo: require("../editable-stuff/djangologo.svg"), value: 16 },
    { name: "reactjs.org", logo: require("../editable-stuff/reactlogo.svg"), value: 80 },
    { name: "vuejs.org", logo: require("../editable-stuff/vuelogo.svg"), value: 40 },
    { name: "tensorflow.org", logo: require("../editable-stuff/tensorflowlogo.svg"), value: 80 },
    { name: "pytorch.org", logo: require("../editable-stuff/pytorchlogo.svg"), value: 40 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Thanks For Checking Out",
  message:
    "I am currently looking for job. If you are interested, email me at",
  email: "luhtookyaw8798@gmail.com",
  phone: "+959799899364"
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, education, getInTouch, experiences };
