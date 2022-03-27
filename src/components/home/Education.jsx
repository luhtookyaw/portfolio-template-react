import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { GoMortarBoard } from "react-icons/go";
import Zoom from "react-reveal/Zoom";

const Education = ({ heading, message, img, imageSize, universities, darkmode }) => {
  return (
    <div
      id="education"
      className="jumbotron jumbotron-fluid m-0 p-70"
      style={{ backgroundColor: `${darkmode ? "black" : "white"}` }}
    >
      <div className={`container container-fluid ${darkmode && "text-white"}`}>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="lead">{message}</p>
            {/* <ul className="fa-ul">
              <li className="lead"><span className="fa-li"><i className="fas fa-check-square"></i></span>{first}</li>
              <li className="lead"><span className="fa-li"><i className="fas fa-spinner fa-pulse"></i></span>{second}</li>
            </ul> */}
            {universities.map((value) => (
              <section className={`shadow ${darkmode ? 'bg-dark' : 'bg-white'} edu-accordion`}>
                  <div className="edu-name">{value.graduated && <GoMortarBoard size={20}/>} {value.name}</div>
                  <div className="edu-desc"><Zoom>{value.degree}</Zoom></div>
              </section>
            ))}
          </div>
          <div className="col-md-6">
            <Carousel>
              {img.map((value, index) => {
                return (
                  <Carousel.Item>
                    <div className="carousel-img">
                      <img
                        className="d-block w-100 img-fit"
                        src={value.img}
                        alt="First slide"
                        width={imageSize.width}
                        height={imageSize.height}
                      />
                    </div>
                    <Carousel.Caption>
                      <h3>{value.label}</h3>
                      <p>
                        {value.paragraph}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
