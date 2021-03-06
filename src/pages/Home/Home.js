import React from "react";
import { QuotesData } from "./QuotesData";
import { ContactData } from "./ContactData";
import "./home.scss";
import Avatar from "../../assets/favicon.jpg";
import Notify from "../../components/Nofity/Notify";

const Home = () => {
  const index = Math.floor(Math.random() * QuotesData.length);
  return (
    <div className="home-container">
      <div className="home-content">
        <img className="home-avt" src={Avatar}></img>
        <h1 className="home-name">Trần Tâm</h1>
        <h2 className="home-position">Front-end Developer</h2>
        <p className="home-quotes">{QuotesData[index].quote}</p>
        <p className="home-person">{QuotesData[index].person}</p>
        <div className="home-contact">
          {ContactData.map((item) => {
            return (
              <a className="home-contact-item" href={item.path} target="_blank">
                {item.icon}
              </a>
            );
          })}
        </div>
        <div className="home-resume"></div>
      </div>
      <Notify />
    </div>
  );
};

export default Home;
