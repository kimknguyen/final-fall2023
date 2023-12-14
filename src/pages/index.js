import { useEffect, useState } from "react";
import { useRouter } from "next/router";  
import { getDocs, getFirestore, collection } from "firebase/firestore"; 
import PostCard from "../app/components/PostCard"; 



export default function Dashboard( { isLoggedIn }) {
   const router = useRouter(); 
   const [allPosts, setAllPosts] = useState([]); 

    useEffect(() => {
        if (!isLoggedIn) router.push("/login"); 
    }, [isLoggedIn]); 

    useEffect(() => {
        async function getAllPosts(){
            const postsArray = []; 
            const db = getFirestore(); 
            const postsQuery = await getDocs(collection(db, "posts")); 

            postsQuery.forEach((post) => {
                postsArray.push({ id: post.id, ...post.data()}); 
            }); 

            setAllPosts(postsArray); 
        }

        getAllPosts(); 
    }, []); 


    return (
        <main>
            <div>
                <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Rubik+Puddles&display=swap');

                    .customHeading {
                         font-family: 'Rubik Puddles', sans-serif;
                         font-size: 115px; 
                         text-align: center; 
                         padding: 10px; 
                         background-image: url('https://www.bhmpics.com/downloads/lined-paper-background/15.white-crumpled-lined-paper-background_53876-150112.jpg');
                         background-size: cover;
                         
          }
        `}
                </style>
            <h1 className="customHeading">Concert Chronicles</h1>
            </div>
            {allPosts.map((post, i) => (
                <PostCard post={post} key={i}/>
            ))}

        </main>

    ); 
} 