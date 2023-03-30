import "./Login.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFirstName } from "../../../services/userService";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const signin = async (data, e) => {
    try {
      e.preventDefault();
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = res.user;
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/home");
    } catch (err) {
      console.log(err.code);
      errorHandler(err.code);
    }
  };

  const errorHandler = (errorCode) => {
    let errorMsg = "";
    switch (errorCode) {
      case "auth/invalid-email":
        errorMsg = "Bad Request.";
        break;
      case "auth/email-already-exists":
        errorMsg = "Email exists!";
        break;
      case "auth/wrong-password":
        errorMsg = "Wrong password!";
        break;
      case "auth/user-not-found":
        errorMsg = "Email not found. Please register!";
        break;
      case "auth/email-already-in-use":
        errorMsg = "Email exists!";
        break;
      default:
        errorMsg = "Something went wrong!";
    }

    if (errorCode) {
      toast.error(errorMsg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      {/* page title & breadcrumbs start */}

      {/* /.page-header */}
      {/* page title & breadcrumbs end */}
      {/*contact-area start*/}
      <div className="contact-area pad90">
        <div className="container">
          <ToastContainer />
          <div className="row-main">
            <div className="custom_class">
              <div className="custom_form">
                  <form
                    id="contact-form"
                    data-toggle="validator"
                    role="form"
                    action="POST"
                    className="appointment-form"
                    onSubmit={handleSubmit(signin)}
                  >
                    <div className="row_first">
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            {...register("email", {
                              required: true,
                              pattern:
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                          />
                        </div>
                      </div>
                      {errors.email && errors.email.type === "required" && (
                        <p className="help-block with-errors">
                          Email is required!
                        </p>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <p className="help-block with-errors">Invalid email!</p>
                      )}
                      <div className="col-md-4">
                        <div className="form-group mt10">
                          <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            data-error="Enter your text"
                            {...register("password", {
                              required: true,
                              maxLength: 25,
                            })}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      {errors.password?.type === "required" && (
                        <p className="help-block with-errors">
                          Password is required!.
                        </p>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <p className="help-block with-errors">
                          Max length is 25 characters!
                        </p>
                      )}
                    </div>
                    <div className="row">
                          <button
                            type="submit"
                            className="myButton"
                            disabled={!isDirty || !isValid}
                          >
                            Login
                          </button>
                      {/* /.col */}
                    </div>
                    <div className="acc">
                      {
                        <p>
                          You don't have an account?{" "}
                          <Link to="/register">Register</Link>
                        </p>
                      }
                    </div>
                    {/* /.row */}
                    <div className="row">
                      <div className="col-md-12">
                        <div id="msgalert" className="hidden" />
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </form>
                </div>
            </div>
            {/* /.col */}
            {/* /.col*/}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/*contact-area end*/}
    </>
  );
}
