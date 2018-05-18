import axios from "axios";
import React from "react";
import Post from "./Post";

class Feed extends React.Component {
  public state = {
    posts: []
  };

  public componentWillMount() {
    axios
      .get(process.env.API_URL + "/api/feed")
      .then(response => {
        const newPosts = response.data.pics;
        const newState = Object.assign({}, this.state, {
          posts: newPosts
        });
        this.setState(newState);
      })
      .catch(error => console.log);
  }

  public render() {
    return (
      <div>
        <h1>Feed</h1>
        <div>
          {this.state.posts.map(p => (
            <Post
              key={this.state.posts.indexOf(p)}
              photoUrl={p.photoUrl}
              comments={p.comments}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Feed;
