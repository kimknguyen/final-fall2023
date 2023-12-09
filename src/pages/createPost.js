import { useEffect } from "react"; 
import { useRouter } from "next/router"; 
import CreatePostForm from "@/app/components/CreatePostForm"


export default function CreateUser ( { isLoggedIn } ) {

    const router = useRouter(); 
    
    useEffect(() => {
        if (!isLoggedIn) router.push("/"); 
    }, [isLoggedIn]); 

    const createPostFunction = useCallback((e) => {
        e.preventDefault(); 
        const postContent = e.currentTarget.postContent.value; 
        console.log({postContent})



    }, [] ); 




    return (
        <>

        <main>
            <h1>Create Post</h1>
            <CreatePostForm createPostFunction={createPostFunction}/> 
        </main>

        </>



    )
} 