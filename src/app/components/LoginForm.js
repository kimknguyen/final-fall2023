import styles from "./components.module.css"; 


const LoginForm = ( {loginUser}) => {
    return (
        <div>
            <h2>Login Form</h2>
            <form className={styles.form} onSubmit={(e) => loginUser(e)}>
                <label htmlFor= "email">Email</label>
                <input type="email" name="email" />

                <label htmlFor= "pass">Password</label>
                <input type="password" name="password" />

                <button type= "submit">Login User</button>            
            </form>
        </div>
    )
}

export default LoginForm