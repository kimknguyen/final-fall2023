import { useEffect } from "react"; 
import { useRouter } from "next/navigation"; 
import LoginForm from "@/app/components/LoginForm"
import styles from "../app/components/components.module.css"

export default function Login( { isLoggedIn, loginUser} ) {
    const router = useRouter(); 
    
    useEffect(() => {
        if (isLoggedIn) router.push("/"); 
    }, [isLoggedIn]); 



    return (
        <>
      
        <main>
            <h1 className={styles.customSubHeading}>Login</h1>
            <LoginForm loginUser = {loginUser}/> 
        </main>

        </>


    )
} 