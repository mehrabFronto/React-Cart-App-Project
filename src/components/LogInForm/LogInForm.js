import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input/Input";
import styles from "../../common/formStyles/form.module.css";
import { Link } from "react-router-dom";

const initialValues = {
   email: "",
   password: "",
};

const onSubmit = (values) => {
   console.log(values);
};

const validationSchema = Yup.object({
   email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
   password: Yup.string().required("Password is required"),
});

const LogInForm = () => {
   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
   });
   return (
      <div className={styles.formContainer}>
         {/* header */}
         <div className={styles.form__header}>
            <h2>Log In Form</h2>
         </div>
         <div className={styles.formWrapper}>
            <form
               className={styles.form}
               onSubmit={formik.handleSubmit}>
               {/* body */}
               <div className={styles.form__body}>
                  {/* email section */}
                  <Input
                     label="E-mail"
                     name="email"
                     formik={formik}
                     placeholder="email..."
                  />
                  {/* password section */}
                  <Input
                     label="Password"
                     name="password"
                     formik={formik}
                     placeholder="password..."
                     type="password"
                  />
                  {/* submit btn */}
                  <button
                     className="btn"
                     type="submit"
                     disabled={!formik.isValid}>
                     Log In
                  </button>
                  <Link
                     to="/sign-up"
                     style={{
                        fontSize: "16px",
                        color: "var(--primary-color)",
                     }}>
                     Not signup yet?
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default LogInForm;
