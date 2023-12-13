import { useRouter } from "next/router";  
import UserProfileCard from "@/app/components/UserProfileCard"
import { useEffect, useState } from "react"; 
import { 
    query, 
    where, 
    getDocs, 
    getFirestore,
    collection 
} from "firebase/firestore"; 


export default function UserProfile( { isLoggedIn, loginInformation }) {
   const router = useRouter(); 
   const [user, setUser] = useState(); 

    useEffect(() => {
        if (!isLoggedIn) router.push("/login"); 
    }, [isLoggedIn]); 

    useEffect(() => {
        async function getUser() {
            let user = {}; 
            const db = getFirestore(); 
            const q = query(
                collection(db, "users"), 
                where("userId", "==",loginInformation?.uid)
                ); 
            //user = userQuery.data(); 
            //console.log({ user }); 
            //setUser(user); 
            const queryShanpshot = await getDocs(q); 
            querySnapshot.forEach((doc) => {
                user = doc.data(); 
            }); 

            if(loginInformation) {
                setUser(user); 

            }

        }

        getUser(); 
    }, [loginInformation]); 

    return (
        <main>
        
            <h1>User Profile</h1>
            <UserProfileCard user={user} loginInformation={loginInformation} />
        </main>

    ); 
} 