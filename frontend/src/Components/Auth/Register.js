import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../Images/google 1.png";
import facebookIcon from "../Images/facebook 1.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast, Toaster } from "react-hot-toast";
import InputForm from "./InputForm";

const url =
  "https://cdn.discordapp.com/attachments/951922266369851422/1159774700164104223/3656684.jpg?ex=65323f5c&is=651fca5c&hm=30e0f57fb285aff2b1b0aa47c088c795909f963c61aac72aff2fdf89c3ef0c13&";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string().email().required("Email is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .min(8, "Password must be at least 8 characters")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function Register() {
  function register(formData) {}
  const formik = useFormik({
    initialValues: {
      fullName: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    async validate(values) {
      try {
        await validationSchema.validate(values, {
          abortEarly: false,
        });
        formik.setErrors({});
      } catch (errors) {
        const validationErrors = {};
        errors.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
          toast.error(error.message, { duration: 700 });
        });
        formik.setErrors(validationErrors);
      }
    },
    async onSubmit({ fullName, email, password, confirmPassword }) {
      toast.promise(
        register({ fullName, email, password, confirmPassword }),
        {
          loading: "Registering...",
          success: ({ data, error }) => {
            if (error) {
              throw new Error(error.data.message);
            }
            // setAuth(data);
            return "Successfully Registered";
          },
          error: ({ message }) => message,
        },
        { duration: 700 }
      );
    },
  });

  return (
    <div className="flex bg-dominant h-screen">
      <div className="flex-[5] hidden md:flex">
        <img src={url} className="max-w-full h-auto" />
      </div>
      <div className="flex flex-col flex-[6] p-6 space-y-6">
        <div className="self-end">
          Have an account?{" "}
          <Link to="/login" className="text-secondary">
            Login!
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="font-bold text-4xl">Join Us</h1>
          <h3>Getting started os easy</h3>
          <div className="flex space-x-8">
            <button className="btn btn-primary btn-outline">
              <img src={googleIcon} /> Google
            </button>
            <button className="btn btn-primary btn-outline">
              <img src={facebookIcon} /> Facebook
            </button>
          </div>
          <div
            id="form"
            className="flex flex-col w-full px-12 border-opacity-100"
          >
            <div>
              <div className="divider">Or continue with</div>
              <form className="space-y-4">
                <InputForm
                  id="fullName"
                  placeholder="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  type="text"
                />
                <InputForm
                  id="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  type="text"
                />
                <InputForm
                  id="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password"
                />
                <InputForm
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  type="password"
                />
                <button type="submit" className="btn btn-block btn-primary">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
