import styles from './components.module.css'

const PostCard = ({ post }) => {
    return (
        <div className={styles.PostCard}>
            <img src={post.imageURL} alt="" className={styles.PostCardImage}/> 
            <h2>{post.displayname} saw {post.postContent}</h2>
            <p>Date:  {post.date}</p>
            <p>Favorite Song:  {post.favoriteSong}</p>
            <p>Your Experience:  {post.experience}</p>

        </div>
    ); 
}; 

export default PostCard; 
     
  