import styles from "./components.module.css"; 

const UserProfileCard = ({user}) => {
    return (
        <div className={styles.UserProfile}>
            <p>Name: {user?.name}</p>
            <p>Password: {user?.email}</p>
        </div>
    ); 
}; 

export default UserProfileCard