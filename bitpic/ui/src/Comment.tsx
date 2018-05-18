import React from "react";

function Comment(props) {
  return (
    <div>
      <p>{props.text}</p>
      <br />
      <div>
        From: {props.displayName}
        <br />
        {props.date}
      </div>
    </div>
  );
}

export default Comment;
