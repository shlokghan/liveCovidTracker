import React from "react";
import Cards from "./Cards";
import seriesData from "./SeriesData";
import CardsIndexByArray from "./CardsIndexByArray";

function CardsIndex() {
  // function myfunc(val) {
  //   //console.log(val);
  //   return (
  //     <>
  //       <Cards
  //         imagesrc={val.imagesrc}
  //         title={val.title}
  //         sname={val.sname}
  //         link={val.link}
  //       />
  //     </>
  //   );
  // }

  return (
    <>
      <h1> List of Top 5 Netflix series 2023</h1>
      {seriesData.map((val, index, arr) => {
        return (
          <>
            <Cards
              imagesrc={val.imagesrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          </>
        );
      })}
    </>
  );
}

export default CardsIndex;
