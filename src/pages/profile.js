import { useRouter } from "next/router";  
import UserProfileCard from "@/app/components/UserProfileCard"
import { useEffect, useState } from "react"; 
import { query, where, getDocs, getFirestore, collection } from "firebase/firestore"; 
import styles from "../app/components/components.module.css"


export default function UserProfile( { isLoggedIn, loginInformation }) {
   const router = useRouter(); 
   const [user, setUser] = useState(); 

    useEffect(() => {
        if (!isLoggedIn) router.push("/login"); 
    }, [isLoggedIn]); 

    useEffect(() => {
        async function getUser() {

           if(!loginInformation?.uid) {
             return; 
           }

            let user = {}; 
            const db = getFirestore(); 
            const q = query(collection(db, "users"), where("userId", "==",loginInformation.uid)); 
            //user = userQuery.data(); 
            //console.log({ user }); 
            //setUser(user); 
            const querySnapshot = await getDocs(q); 
            querySnapshot.forEach((doc) => {
                user = doc.data(); 
            }); 

          
            setUser(user); 

            }

       getUser(); 
    }, [loginInformation]); 

    return (
        <main> 
            <h1 className={styles.customSubHeading}>User Profile</h1>
            <UserProfileCard user={user} loginInformation={loginInformation} />
        </main>

    ); 
} 
