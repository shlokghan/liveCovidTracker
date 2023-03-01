import React from "react";
import "./cards.css";

function Cards(props) {
  return (
    <>
      <div>
        <div>
          <img
            className="myImage"
            src={props.imagesrc}
            height={150}
            width={220}
          />
          <div>
            <span className="mySpan">{props.title}</span>
            <h3 className="myh3">{props.sname}</h3>
            <a href={props.link}>
              <button className="myButton"> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
