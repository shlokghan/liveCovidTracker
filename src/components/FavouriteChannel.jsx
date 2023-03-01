import React from "react";
import CardsIndex from "./Netflix/CardsIndex";
import PostIndex from "./Facebook/PostIndex";
function FavouriteChannel() {
  const favChannel = "facebook";

  if (favChannel === "netflix") {
    return (
      <>
        <CardsIndex></CardsIndex>
      </>
    );
  } else if(favChannel === "facebook"){
    return (
      <>
        <PostIndex></PostIndex>
        
      </>
    );
  }
}

export default FavouriteChannel;
