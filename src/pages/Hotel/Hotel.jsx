import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import "./Hotel.css";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252826206.jpg?k=220bdf00916d9bcd138b0a137127bcab2adeee414c15f7cb447c45495ecac56d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252826206.jpg?k=220bdf00916d9bcd138b0a137127bcab2adeee414c15f7cb447c45495ecac56d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252826206.jpg?k=220bdf00916d9bcd138b0a137127bcab2adeee414c15f7cb447c45495ecac56d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252826206.jpg?k=220bdf00916d9bcd138b0a137127bcab2adeee414c15f7cb447c45495ecac56d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252826206.jpg?k=220bdf00916d9bcd138b0a137127bcab2adeee414c15f7cb447c45495ecac56d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252826206.jpg?k=220bdf00916d9bcd138b0a137127bcab2adeee414c15f7cb447c45495ecac56d&o=&hp=1",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                voluptatibus! Tenetur aspernatur maxime quo repellendus velit
                quod corrupti, nihil harum necessitatibus, voluptatibus
                mollitia! Id quae officia commodi adipisci, ut ea harum atque
                pariatur cum sit quis tempore ad, alias iste! Fugiat suscipit
                nulla numquam assumenda itaque, consequuntur in accusamus sequi!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
