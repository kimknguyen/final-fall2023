import { useState } from "react"; 
import styles from "./components.module.css"; 


const CreatePostForm = ( { createPostFunction }) => {
    const[imageUpload, setImageUpload] = useState(); 
    return (
        <div>
                <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');

                    .customSub {
                         font-family: 'Rubik Mono One', sans-serif;
                         font-size: 20px; 
                         margin: 50px; 
                     

          }
        `}
                </style>
            <h2 className="customSub">Document your Concert Experience</h2>
            <form className={styles.form} onSubmit={(e) => createPostFunction(e, imageUpload)} >
                
                <label htmlFor= "displayname"> Who went? </label>
                <input type="text" id="displayname" name="displayname" placeholder="Put your name and also the names of friends you went with" />
                
                <label htmlFor= "postContent">Artist</label>
                <input type="text" id="postContent" name="postContent" />

                <label htmlFor= "date"> Date </label>
                <input type="text" id="date" name="date" />

                <label htmlFor= "favoriteSong"> Favorite Song</label>
                <input type="text" id="favoriteSong" name="favoriteSong" />
        
                <label htmlFor= "experience"> Your Experience</label>
                <input type="text" id="experience" name="experience" placeholder="Share your experience and favorite moments of the show" />

                
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    placeholder="Choose image"
                    accept="image/png,image/jpeg,image/gif"
                    onChange={(e) => {
                        setImageUpload(e.target.files[0]); 
                    }}



                />
                

                <button className={styles.button} type= "submit">Create Post</button>            
            </form>
        </div>
    )
}

export default CreatePostForm; 