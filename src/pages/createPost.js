import { useCallback, useEffect, useState } from "react"; 
import { useRouter } from "next/router";
import CreatePostForm from "@/app/components/CreatePostForm"
import {getFirestore, collection, addDoc} from "firebase/firestore"; 
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"; 
import PostDetails from "@/app/components/PostDetails"

export default function CreatePost ( { isLoggedIn, userInformation } ) {

    const router = useRouter(); 
    const [createdPost, setCreatedPost] = useState(null); 
    
    useEffect(() => {
        if (!isLoggedIn) router.push("/"); 
    }, [isLoggedIn]); 

    const createPostFunction = useCallback(
        async(e, imageUpload) => {
        e.preventDefault(); 

        const storage = getStorage(); 
        const db = getFirestore();

        const postContent = e.currentTarget.postContent.value; 
        //console.log({postContent}); 
        const favoriteSong = e.currentTarget.favoriteSong.value; 
        const experience = e.currentTarget.experience.value; 

        console.log("postContent:", postContent);
        console.log("favoriteSong:", favoriteSong);
        console.log("experience:", experience);

        let imageURL; 
        const storageRef = ref(storage, 'images/' + imageUpload?.name); 
        
        await uploadBytes(storageRef, imageUpload)
            .then(async (snapshot) => {
                await getDownloadURL(snapshot.ref).then((url) => {
                    imageURL = url; 
                }); 
            })
            .catch((error) => {
                console.warn(error); 
            }); 
        
        const userId = userInformation.uid; 

        const data = await addDoc(collection(db, "posts"), {
            postContent: postContent, 
            favoriteSong: favoriteSong, 
            experience: experience, 
            userId: userId, 
            imageURL, 
        }); 

        if(data) {

            setCreatedPost({
                postContent, 
                favoriteSong, 
                experience, 
            }); 
            router.push("/"); 
        }
        

    }, [addDoc, collection, getFirestore, userInformation, router] ); 




    return (
        <>

        <main>
            <h1>Create Post</h1>
            <CreatePostForm createPostFunction={createPostFunction}/> 
            {createdPost && <PostDetails post={createdPost}/>}
        </main>

        </>



    )
} 