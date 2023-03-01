import React from "react";
import Post from "./Post";
import ApiFetcher from "./ApiFetcher";

function PostIndex() {
  return (
    <>
     <h1>Welcome to Facebook11</h1>
      {ApiFetcher.map((val) => {
        return (
          <>     
            <Post
              sname={val.sname}
              link={val.link}
              imagesrc={val.imagesrc}
            ></Post>
          </>
        );
      })}
    </>
  );
}

export default PostIndex;
