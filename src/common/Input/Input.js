import styles from "./input.module.css";

const Input = ({ label, name, type = "text", placeholder, formik }) => {
   return (
      <div className={styles.form__control}>
         <label
            className={styles.form__title}
            htmlFor={name}>
            {label}
         </label>
         <input
            id={name}
            name={name}
            type={type}
            className={styles.form__input}
            placeholder={placeholder}
            {...formik.getFieldProps(name)}
         />
         {formik.errors[name] && formik.touched[name] && (
            <span style={{ color: "red" }}>{formik.errors[name]}</span>
         )}
      </div>
   );
};

export default Input;
