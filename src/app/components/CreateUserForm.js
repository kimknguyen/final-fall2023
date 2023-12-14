import styles from "./components.module.css"; 


const CreateUserForm = ( { createUser }) => {
    return (
        <div>
            <h2 className={styles.customSub}>Document your Concert Experience. Make an Account Now!</h2>
            <form className={styles.form} onSubmit={(e) => createUser(e)}>
                <label htmlFor= "name">Name</label>
                <input type="text" name="name" />

                <label htmlFor= "email">Email</label>
                <input type="email" name="email" />

                <label htmlFor= "password">Password</label>
                <input type="password" name="password" />

                <button className={styles.button} type= "submit">Create User</button>            
            </form>
        </div>
    )
}

export default CreateUserForm; 