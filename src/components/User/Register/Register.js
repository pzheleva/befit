import "./Register.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const singup = async (data, e) => {
    console.log(data);
    try {
      e.preventDefault();
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = res.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        age: data.age,
        bookings: [],
        posts: [],
      });
      reset();
      navigate("/login");
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
          

                  <form
                    id="contact-form"
                    data-toggle="validator"
                    role="form"
                    action="POST"
                    className="appointment-form"
                    onSubmit={handleSubmit(singup)}
                  >
                    <div className="row_first">
                      <div className="col-md-4">
                        <div className="form-group mt10">
                          <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="form-control"
                            data-error="Enter your text"
                            // value={firstName}

                            {...register("firstName", {
                              required: true,
                              maxLength: 15,
                              pattern: /^[A-Za-z]+/,
                            })}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      {errors.firstName?.type === "required" && (
                        <p className="help-block with-errors">
                          First Name is required.
                        </p>
                      )}
                      {errors.firstName?.type === "maxLength" && (
                        <p className="help-block with-errors">
                          Max length is 15 characters!
                        </p>
                      )}
                      {errors.lastName?.type === "pattern" && (
                        <p className="help-block with-errors">
                          Only English letters allowed!!
                        </p>
                      )}
                      <div className="col-md-4">
                        <div className="form-group mt10">
                          <input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                            data-error="Enter your name"
                            {...register("lastName", {
                              required: true,
                              maxLength: 15,
                              pattern: /^[A-Za-z]+/,
                            })}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      {errors.lastName?.type === "required" && (
                        <p className="help-block with-errors">
                          Last Name is required.
                        </p>
                      )}
                      {errors.lastName?.type === "maxLength" && (
                        <p className="help-block with-errors">
                          Max length is 15 characters!
                        </p>
                      )}
                      {errors.lastName?.type === "pattern" && (
                        <p className="help-block with-errors">
                          Only English letters allowed!!
                        </p>
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
                              pattern:
                                /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
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
                      {errors.password?.type === "pattern" && (
                        <p className="help-block with-errors">
                          Password must be a combination of lower-case,
                          upper-case, numbers and at least 9 characters long!
                        </p>
                      )}
                      <div className="col-md-4">
                        <div className="form-group mt10">
                          <input
                            id="rePassword"
                            type="password"
                            placeholder="Repeat Password"
                            className="form-control"
                            data-error="Enter your text"
                            {...register("rePassword", {
                              required: true,
                            })}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      {errors.rePassword?.type === "required" && (
                        <p className="help-block with-errors">
                          Password is required!.
                        </p>
                      )}
                      {watch("rePassword") !== watch("password") &&
                      getValues("rePassword") ? (
                        <p className="help-block with-errors">
                          password not match
                        </p>
                      ) : null}
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            id="phone"
                            type="text"
                            placeholder="Phone"
                            className="form-control"
                            data-error="Enter your phone number"
                            {...register("phone", {
                              required: true,
                              pattern:
                                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                            })}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      {errors.phone?.type === "required" && (
                        <p className="help-block with-errors">
                          Phone number is required!
                        </p>
                      )}
                      {errors.phone?.type === "pattern" && (
                        <p className="help-block with-errors">
                          Invalid phone number!
                        </p>
                      )}
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
                        <div className="form-group">
                          <input
                            id="age"
                            type="text"
                            placeholder="Age"
                            className="form-control"
                            data-error="Enter your age"
                            {...register("age", {
                              required: true,
                              pattern: /^\d+$/,
                            })}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      {errors.age && errors.age.type === "required" && (
                        <p className="help-block with-errors">
                          Age is required!
                        </p>
                      )}
                      {errors.age && errors.age.type === "pattern" && (
                        <p className="help-block with-errors">
                          Only numbers allowed!
                        </p>
                      )}
                    </div>
                    
             
                        <div className="custom_button">
                          <button
                            type="submit"
                            className="myButton2"
                            disabled={!isDirty || !isValid}
                          >
                            Register
                          </button>
                        </div>
                      
                      {/* /.col */}
                    
                    <div className="acc">
                      <p>
                        You already have an account?{" "}
                        <Link to="/login">Log In</Link>
                      </p>
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
            {/* /.col */}
            {/* /.col*/}
          
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/*contact-area end*/}
    </>
  );
}
