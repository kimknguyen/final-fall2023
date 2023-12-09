import { useEffect } from "react"; 
import { useRouter } from "next/router";
import Header from "@/app/components/Header";  
import CreatePostForm from "@/app/components/CreatePostForm"
import {getFirestore, collection, setDoc} from "firebase/firestore"; 

export default function CreatePost ( { isLoggedIn, userInformation } ) {

    const router = useRouter(); 
    
    useEffect(() => {
        if (!isLoggedIn) router.push("/"); 
    }, [isLoggedIn]); 

    const createPostFunction = useCallback(
        async(e) => {
        e.preventDefault(); 
        const postContent = e.currentTarget.postContent.value; 
        console.log({postContent}); 


        const userId = userInformation.uid; 

        const db = getFirestore();
        await setDoc(doc(db, "posts"), {
            postContent: postContent, 
            usedId: userId
        }); 

        if(data) {
            router.push("/"); 
        }
        

    }, [addDoc, collection, getFirestore, userInformation, router] ); 




    return (
        <>

        <main>
            <h1>Create Post</h1>
            <CreatePostForm/> 
        </main>

        </>



    )
} 