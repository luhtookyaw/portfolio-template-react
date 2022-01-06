import React from "react";
import {FaPhoneSquareAlt} from "react-icons/fa";

const GetInTouch = ({ heading, message, email, phone }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a href={`mailto:${email}`}>{email}</a>.
      </p>
      <FaPhoneSquareAlt size={27}/> <a href={`tel:${phone}`}> {phone}</a>
    </>
  );
};

export default GetInTouch;
