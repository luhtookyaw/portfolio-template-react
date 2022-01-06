import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Row } from "react-bootstrap";

const Experience = ({experiences, darkmode}) => {
    return (  
        <div
        id="experiences"
        className="jumbotron jumbotron-fluid m-0 p-70"
        style={{ backgroundColor: `${darkmode ? "black" : "white"}` }}
        >
            <div className={`container container-fluid ${darkmode && "text-white"}`}>
                <h2 className="display-4 mb-5 text-center">
                    {experiences.heading}
                </h2>
                <Row>
                    {
                        experiences.data.map(data => {
                            return <ExperienceCard key={data.company} data={data}/>
                        })
                    }
                </Row>
            </div>
        </div>
    );
}
 
export default Experience;