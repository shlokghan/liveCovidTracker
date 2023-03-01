import React from "react";
import seriesData from "./SeriesData";
import Cards from "./Cards";

function CardsIndexByArray() {
  return (
    <>
      <Cards
        imagesrc={seriesData[0].imagesrc}
        title={seriesData[0].title}
        sname={seriesData[0].sname}
        link={seriesData[0].link}
      />

      <Cards
        imagesrc={seriesData[1].imagesrc}
        title={seriesData[1].title}
        sname={seriesData[1].sname}
        link={seriesData[1].link}
      />
      <Cards
        imagesrc={seriesData[2].imagesrc}
        title={seriesData[2].title}
        sname={seriesData[2].sname}
        link={seriesData[2].link}
      />
      <Cards
        imagesrc={seriesData[3].imagesrc}
        title={seriesData[3].title}
        sname={seriesData[3].sname}
        link={seriesData[3].link}
      />
    </>
  );
}

export default CardsIndexByArray;
