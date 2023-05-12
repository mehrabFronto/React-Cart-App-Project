import { Link } from "react-router-dom";
import { useAuth, useAuthAction } from "../../Providers/AuthProvider";
import styles from "../../common/formStyles/form.module.css";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ProfilePage = ({ history }) => {
   const userData = useAuth();
   const setAuth = useAuthAction();

   useEffect(() => {
      !userData && history.push("/log-in");
   }, []);

   const logOutHandler = () => {
      setAuth(false);
      toast.success("you logged out");
   };

   return (
      <div className={styles.formContainer}>
         {/* header */}
         <section className={styles.form__header}>
            <h2>Your Profile</h2>
         </section>
         {/* body */}
         <section className={styles.formWrapper}>
            <div className={styles.form}>
               <div className={styles.form__body}>
                  <div className="profileInfo">
                     <label>Your Name: </label>
                     <p>{userData.name}</p>
                  </div>
                  <div className="profileInfo">
                     <label>Your E-mail: </label>
                     <p>{userData.email}</p>
                  </div>
                  <div className="profileInfo">
                     <label>Your Phone Number: </label>
                     <p>{userData.phoneNumber}</p>
                  </div>
                  <Link
                     className="link"
                     to="/"
                     onClick={logOutHandler}>
                     Log Out?
                  </Link>
               </div>
            </div>
         </section>
      </div>
   );
};

export default ProfilePage;
