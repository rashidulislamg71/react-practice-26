import React, { use } from "react";
import Post from "./Post";

function Posts({ postsPromise }) {
  const posts = use(postsPromise);
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} posts={post} />
      ))}
    </div>
  );
}

export default Posts;
