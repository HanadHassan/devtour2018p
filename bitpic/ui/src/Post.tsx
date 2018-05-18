import React from "react";
import Comment from "./Comment";

const style = {
  width: "200px"
};

const imgStyle = {
  maxWidth: "100%",
  maxHeight: "100%"
};

function Post(props) {
  return (
    <div style={style}>
      <img src={props.photoUrl} style={imgStyle} />
      <div>
        <h3>Comments:</h3>
        {props.comments.map(c => (
          <Comment
            key={props.comments.indexOf(c)}
            text={c.text}
            displayName={c.displayName}
            date={c.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Post;
