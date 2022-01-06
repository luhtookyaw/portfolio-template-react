import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className="mb-3 rounded" src={data.companylogo} alt="" style={{height: 172}}/>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                </p>
            </div>
        </Col>
     );
}
 
export default ExperienceCard;