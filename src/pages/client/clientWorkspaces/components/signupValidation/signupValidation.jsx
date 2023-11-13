import * as Yup from "yup";

export const signupValidation = {
  newName: Yup.string().min(3).max(255).required("Please enter new name"),
  subdomain: Yup.string().min(3).max(255).required("Please enter subdomain"),
};
