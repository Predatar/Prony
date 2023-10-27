import React from "react";
import img1 from "../../../../../../img/Post/Comments/1.png";
import Comments from "../Comments";
const RenderComments = () => {
  return (
    <>
      <Comments
        img={img1}
        name="Konnor Castro"
        tag
        secondaryTag
        secondaryColorTag="#27AE60"
        colorTag="#EB5757"
      />
      <Comments
        white
        img={img1}
        name="Bryson Casey"
        secondaryTag
        secondaryColorTag="#27AE60"
      />
      <Comments
        img={img1}
        name="Montana Leon"
        tag
        secondaryTag
        secondaryColorTag="#27AE60"
        colorTag="#EB5757"
      />
      <Comments
        white
        img={img1}
        name="Safaa Marriott"
        tag
        secondaryTag
        secondaryColorTag="#27AE60"
        colorTag="#EB5757"
      />
      <Comments img={img1} name="Sophia-Rose Nava" tag />
      <Comments white img={img1} name="Kasim Daniels" />
    </>
  );
};

export default RenderComments;
