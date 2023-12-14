import React from "react";

const PostDetails = ({ post }) => {
  return (
    <div>
      <h2>Post Details</h2>
      <p>Artist: {post.postContent}</p>
      <p>Favorite Song: {post.favoriteSong}</p>
      <p>Your Experience: {post.experience}</p>

    </div>
  );
};

export default PostDetails;
