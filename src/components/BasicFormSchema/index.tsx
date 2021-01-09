import * as Yup from "yup";

const nameRegExp = /^[a-zA-Z]+$/;

const BasicFormSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address"),
    username: Yup.string()
        .matches(nameRegExp, "Please enter a valid name")
        .required("Please enter a valid name"),
    password: Yup.string()
        .min(6, "Password must contain at least 6 symbols")
        .required("Password must contain at least 6 symbols"),
    country: Yup.string()
        .required("You must select your country"),
    gender: Yup.string()
        .required("You must select the gender"),
    terms: Yup.boolean()
        .required("You must accept the policies")
        .oneOf([true], "You must accept the policies"),

});
export default BasicFormSchema;