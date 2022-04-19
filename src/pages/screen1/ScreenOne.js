import React from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import "./ScreenOne.css";
import nature from "../../images/nature.jpg";
import { useHistory } from "react-router-dom";

const ScreenOne = () => {
  const history = useHistory();
  return (
    <div className="ScreenOne_container">
      <Header />
      <div className="image_content" onClick={() => history.push("/screen2")}>
        <img className="screen1_image" src={nature} alt="BigCo Inc. logo" />
      </div>
      <Footer />
    </div>
  );
};

export default ScreenOne;
