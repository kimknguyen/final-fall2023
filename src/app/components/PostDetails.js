import React from "react";

const PostDetails = ({ post }) => {
    console.log("Post received:", post);

    if (!post) {
        return <p>No post details available.</p>;
      }

    const { postContent, favoriteSong, experience } = post; 

  return (
    <div>
      <h2>Post Details</h2>
      <p>Artist: {postContent}</p>
      <p>Favorite Song: {favoriteSong}</p>
        <p>Your Experience: {experience}</p>

    </div>
  );
};

export default PostDetails;
