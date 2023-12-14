import styles from './components.module.css'

const PostCard = ({ post }) => {
    return (
        <div className={styles.PostCard}>
            <img src={post.imageURL} alt=""/> 
            <h2>Post Details</h2>
            <p>Artist: {post.postContent}</p>
            <p>Favorite Song: {post.favoriteSong}</p>
             <p>Your Experience: {post.experience}</p>

        </div>
    ); 
}; 

export default PostCard; 
     
  