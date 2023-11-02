import React from "react";
import ViewComments from "../ViewComments";

const AnswerComment = ({
  buttons,
  idComment,
  name,
  comment,
  answer,
  img,
  background,
}) => {
  return (
    <ViewComments
      answer={answer}
      buttons={buttons}
      idComment={idComment}
      name={name}
      comment={comment}
      img={img}
      background={background}
    />
  );
};

export default AnswerComment;
