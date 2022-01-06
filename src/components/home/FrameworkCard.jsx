import React from 'react';
import { Col } from 'react-bootstrap';
import {CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function FrameworkCard({name, logo, value, darkmode}) {
    const level = (value) => {
        if (value >= 50) {
            return "#17a2b8";
        } else if (value >= 30) {
            return "#ffc107";
        } else {
            return "#dc3545";
        }
    }
    return (
        <Col Ig="6">
            <div style={{ width: 120, height: 120 }} className="framework-card">
                <CircularProgressbarWithChildren 
                    value={value}
                    background
                    backgroundPadding={3}
                    styles={buildStyles({
                        backgroundColor: `${darkmode ? "transparent" : "#e9ecef"}`,
                        pathColor: level(value),
                        trailColor: `${darkmode ? "black" : "white"}`,
                    })}
                >
                    <a href={`https://www.${name}`} target="_blank">
                        <img style={{ width: 45, marginTop: -5}} src={logo} alt="" />
                    </a>
                </CircularProgressbarWithChildren>
            </div>
        </Col>
    )
}

export default FrameworkCard;
