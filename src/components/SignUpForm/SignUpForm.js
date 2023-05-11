import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input/Input";
import styles from "../../common/formStyles/form.module.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { signUpUser } from "../../services/signUpService";
import { toast } from "react-toastify";

const initialValues = {
   name: "",
   email: "",
   phoneNumber: "",
   password: "",
   confirmPassword: "",
};

const validationSchema = Yup.object({
   name: Yup.string().min(6).required("Name is required"),
   email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
   phoneNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "Invalid phone number")
      .required("Phone number is required"),
   password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Password is required"),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "confirm password must be match")
      .required("confirm password is required"),
});

const SignUpForm = ({ history }) => {
   const onSubmit = async (values, { resetForm }) => {
      const { name, email, phoneNumber, password } = values;

      const userData = {
         name,
         email,
         phoneNumber,
         password,
      };

      try {
         await signUpUser(userData);
         resetForm({
            name: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
         });
         toast.success("Registration was successful");
         history.push("/");
      } catch (err) {
         if (err.response && err.response.data.message)
            toast.error(err.response.data.message);
      }
   };

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
            <h2>Sign Up Form</h2>
         </div>
         <div className={styles.formWrapper}>
            <form
               className={styles.form}
               onSubmit={formik.handleSubmit}>
               {/* body */}
               <div className={styles.form__body}>
                  {/* name section */}
                  <Input
                     label="Name"
                     name="name"
                     formik={formik}
                     placeholder="name..."
                  />
                  {/* email section */}
                  <Input
                     label="E-mail"
                     name="email"
                     formik={formik}
                     placeholder="email..."
                  />
                  {/* phone number section */}
                  <Input
                     label="Phone Number"
                     type="tel"
                     name="phoneNumber"
                     formik={formik}
                     placeholder="phone number..."
                  />
                  {/* password section */}
                  <Input
                     label="Password"
                     name="password"
                     formik={formik}
                     placeholder="password..."
                     type="password"
                  />
                  {/* confirm section */}
                  <Input
                     label="Confirm Password"
                     name="confirmPassword"
                     formik={formik}
                     placeholder="confirm password..."
                     type="password"
                  />
                  {/* submit btn */}
                  <button
                     className="btn"
                     type="submit"
                     disabled={!formik.isValid}>
                     Sign Up
                  </button>
                  <Link
                     to="/log-in"
                     style={{
                        fontSize: "16px",
                        color: "var(--primary-color)",
                     }}>
                     Already login?
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default withRouter(SignUpForm);
