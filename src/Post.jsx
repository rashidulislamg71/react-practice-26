import React from "react";

function Post({ posts }) {
  console.log(posts);
  return <div>{posts.title}</div>;
}

export default Post;
