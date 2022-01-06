import React, { useState } from "react";
import { Fragment } from 'react';
import ScrollButton from './components/ScrollButton';
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  getInTouch,
  experiences,
  education
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";

import Experience from "./components/home/Experience";
import Education from "./components/home/Education";
import DarkModeToggle from "react-dark-mode-toggle";
import Ripple from "react-preloaders/lib/Ripple/Ripple";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        darkmode={props.darkmode}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
          darkmode={props.darkmode}
        />
      )}
      {education.show && (
        <Education
          heading={education.heading}
          message={education.message}
          img={education.images}
          imageSize={education.imageSize}
          universities={education.universities}
          darkmode={props.darkmode}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
          frameworks={skills.frameworks}
          darkmode={props.darkmode}
        />
      )}
      {
        experiences.show && (
          <Experience 
            experiences={experiences}
            darkmode={props.darkmode}
          />
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
          darkmode={props.darkmode}
        />
      )}
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && 
        <Navbar darkmode={isDarkMode} ref={titleRef}>
          <DarkModeToggle
            onChange={() => setIsDarkMode(!isDarkMode)}
            checked={isDarkMode}
            size={50}
          />
        </Navbar>
      }
      <Route path="/" exact component={() => <Home darkmode={isDarkMode} ref={titleRef}/>} />
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <div style={{backgroundColor: "#17a2b8", height: "1px"}}></div>
      <Footer darkmode={isDarkMode}>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
            phone={getInTouch.phone}
          />
        )}
      </Footer>
      <Fragment>
        <ScrollButton />
      </Fragment>
      <Ripple background="#17a2b8" color="white"/>
    </BrowserRouter>
  );
};

export default App;
