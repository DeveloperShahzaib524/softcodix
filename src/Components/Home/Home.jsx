import React from "react";
import Card from "./Card";
import "../../Styles/home.css";
import img1 from "../../Assets/ServicesCard/Frame 199.png";
import img2 from "../../Assets/ServicesCard/Frame 200.png";
import img3 from "../../Assets/ServicesCard/Frame 201.png";
import img4 from "../../Assets/ServicesCard/Frame 202.png";
import img5 from "../../Assets/ServicesCard/Frame 203.png";
import img6 from "../../Assets/ServicesCard/Frame 204.png";

import { Link } from "react-router-dom";
import PackagesCard from "./PackagesCard";

const Home = () => {
  const CardsData = [
    {
      backgroundImage: img1,
    },
    {
      backgroundImage: img2,
    },
    {
      backgroundImage: img3,
    },
    {
      backgroundImage: img4,
    },
    {
      backgroundImage: img5,
    },
    {
      backgroundImage: img6,
    },
  ];

  const FieldsBox = [
    {
      title: "Logo Design",
    },
    {
      title: "Mobile app Development",
    },
    {
      title: "Wordpress Development",
    },
    {
      title: "Software Development",
    },
    {
      title: "Digital Marketing",
    },
    {
      title: "Web Design Services",
    },
    {
      title: "Stationary Design",
    },
    {
      title: "ebook Design",
    },
    {
      title: "Video Animation",
    },
    {
      title: "2d-#d Character",
    },
    {
      title: "Merchandise Design",
    },
  ];

  const Packages = [
    {
      heading: "Standard Package",
      text1: "4 logo Concepts ",
      text2: "Free Icon Design  ",
      text3: "Free File format (jpg and pdf) ",
      text4: "Unlimited Revisions ",
      text5: "2  Creative Designers",
      text6: "48 hours turnaround time",
      text7: "Money Back guarantee ",
    },
    {
      heading: "Professional Package",
      text1: "8 logo Concepts ",
      text2: "Free Icon Design  ",
      text3: "Free High Resolution Formats ",
      text4: "Unlimited Revisions ",
      text5: "4  Creative Designers ",
      text6: "48 hours turnaround time ",
      text7: "Money Back guarantee ",
    },
    {
      heading: "Business Package",
      text1: "Unlimited logo Concepts",
      text2: "Unlimited Revisions",
      text3: "Free high Resolution formats",
      text4: "Stationary Design",
      text5: "6  Creative Designers",
      text6: "48 hours turnaround time",
      text7: "Money Back guarantee",
    },
  ];

  return (
    <>
      <div className="background-image">
        <div className="ImageText">
          <h1>Empowering Your Digital Future</h1>
          <h3> Innovative Software Solutions for Every Need</h3>
          <p>
            we craft software solutions that drive success and innovation. From
            web and mobile applications to custom software development, our team
            is equipped to handle projects of any scale or complexity. Partner
            with us and unlock the full potential of your digital presence.
          </p>
        </div>
      </div>
      <div className="service">
        <h1>Services</h1>
        <div className="cards-container">
          {CardsData.map((item, index) => (
            <Card key={index} backgroundImage={item.backgroundImage} />
          ))}
        </div>
      </div>
      <div className="fields">
        <h1>Affordable Solutions Packages</h1>
        <p>
          Our clients' satisfaction is our greatest motivation. That's why we're
          committed to providing excellent custom solutions services at
          competitive prices. We understand that every business is unique, so we
          offer customizable logo design packages tailored to your specific
          needs and budget. Partner with us to bring your brand vision to life!
        </p>
      </div>
      <div className="field-box">
        {FieldsBox.map((item, index) => (
          <Link key={index} to>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="packages">
        {Packages.map((packageItem, index) => (
          <PackagesCard
            key={index}
            heading={packageItem.heading}
            text1={packageItem.text1}
            text2={packageItem.text2}
            text3={packageItem.text3}
            text4={packageItem.text4}
            text5={packageItem.text5}
            text6={packageItem.text6}
            text7={packageItem.text7}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
