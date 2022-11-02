import React from "react";
import locationIcon from "./images/location-icon.svg";
function Hero(props) {
  console.log(props.item);

  return (
    <div className="travel-list">
      <div className="image">
        <img src={props.item.imageUrl} alt="" />
      </div>
      <div className="desc">
        <div className="location">
          <img src={locationIcon} alt="" />
          <p>{props.item.location}</p>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <h4>
          {props.item.startDate} - {props.item.endDate}
        </h4>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
export default Hero;
