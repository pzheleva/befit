
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { collection, addDoc, setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Topic.css";
import {getId, getFirstName } from "../../services/userService";
import { getTopicName } from "../../services/blogService";

export default function Topic() {

  
    
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        getValues,
        watch,
        reset,
        formState: { errors, isDirty, isValid },
      } = useForm({ mode: "onChange" });

    const postTopic = async (data, e) => {
        
        const existingTitle = await titleExists(data.title);
        if(!existingTitle){
          return;
        }

        try {
            e.preventDefault(); 
            const id = getId();
            const firstName = await getFirstName(id);
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.toLocaleString('default', { month: 'short' })
            

            await addDoc(collection(db, "topics"), {
                uidOwner: id,
                currDay: day,
                currMonth: month,
                firstNameOwner: firstName,
                title: data.title,
                imageUrl: data.imageUrl,
                category: data.category,
                textplace: data.textplace,
                comments: []
              });

              toast.success("Topic posted!", {
                position: toast.POSITION.TOP_RIGHT
            })
                const docRef = doc(db, "users", id);
    
                await updateDoc(docRef, {
                    posts: arrayUnion(data)
                  });

                  
              setTimeout(() => {
                navigate("/blog");
              }, 2000)
            
              reset()
        }catch(err) {
            console.log(err.code);
            errorHandler(err.code);
        }
        
    }

    async function titleExists(title) {
        const data = await getTopicName();
        let existing = [];
        

        data.forEach(d => {
            if(d.title.toLowerCase() === title.toLowerCase()){
                existing.push(d.title)
            }
        })

        if(existing.length > 0) {
            existing = [];
            toast.error("Title already exists!", {
                position: toast.POSITION.TOP_RIGHT
            })
            return false;
        }

        return true;
    }

    
    const errorHandler = (errorCode) => {
        let errorMsg = ''
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
    
        if(errorCode){
          toast.error(errorMsg, {
            position: toast.POSITION.TOP_RIGHT
        })
        }
      }

    return (
        <>
        {/* page title & breadcrumbs start */}
  
        {/* /.page-header */}
        {/* page title & breadcrumbs end */}
        {/*contact-area start*/}
        <div className="contact-area pad90">
          <div className="container">
         < ToastContainer />
            <div className="row-main">
              <div >
                <div className="contact-form">
                  
                    <form
                      id="contact-form"
                      data-toggle="validator"
                      role="form"
                      action="POST"
                      className="appointment-form"
                      onSubmit={handleSubmit(postTopic)}
                    >
                      <div className="row_first">
                      <div className="title">Post Topic</div>
                      <div className="normal_class">
                          <div className="form-group">
                            <input
                              id="title"
                              type="text"
                              placeholder="Title"
                              className="form-control"
                              {...register("title", {
                                required: true,
                                maxLength: 60
                              })}
                            />
                          </div>
                        </div>
                        {errors.title && errors.title.type === "required" && (
                          <p className="help-block with-errors">
                            Title is required!
                          </p>
                        )}
                        {errors.title && errors.title.type === "maxLength" && (
                          <p className="help-block with-errors">Max length is 60 characters!</p>
                        )}
                        <div className="normal_class">
                          <div className="form-group mt10">
                            <input
                              id="imageUrl"
                              type="text"
                              placeholder="ImageUrl"
                              className="form-control"
                              data-error="Enter Image URL"
                              {...register("imageUrl", {
                                required: true
                              })}
                            />

                          </div>
                        </div>
                        {errors.imageUrl?.type === "required" && (
                          <p className="help-block with-errors">
                            Image is required!.
                          </p>
                        )}
                            <div className="normal_class category_class">
                          
                         
                            <select name="category" {...register("category")} className="options_class">
                                <option value="" disabled selected>Category</option>
                                <option value="health">Health</option>
                                <option value="fitness">Fitness</option>
                                <option value="bodybuilding">Bodybuilding</option>
                                <option value="spa and wellness">Spa and Wellness</option>
                                <option value="weightlifting">Weightlifting</option>
                                <option value="beauty">Beauty</option>
                            </select>
                         
                        </div>

                        <div className="normal_class">
                          <div className="form-group mt10">
                            <textarea
                              id="textplace"
                              name="textplace"
                              type="text"
                              placeholder="Type text..."
                              className="form-control"
                              data-error="textarea"
                              {...register("textplace", {
                                required: true,
                                minLength: 100,
                               maxLength: 200
                              

                              })}
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>

                        {errors.textplace?.type === "required" && (
                          <p className="help-block with-errors">
                            Text is required!.
                          </p>
                        )}
                          {errors.textplace?.type === "minLength" && (
                          <p className="help-block with-errors">
                            Min length is 100 characters!
                          </p>
                        )} 
                        {errors.textplace?.type === "maxLength" && (
                          <p className="help-block with-errors">
                            Max length is 200 characters!
                          </p>
                        )} 
                     
                      </div>
                      <div className="row">
         
                        
                            <button
                              type="submit"
                              className="btn-post"
                              disabled={!isDirty || !isValid}
                            >
                              Submit
                            </button>
                          
                       
                        {/* /.col */}
                      </div>
                   
                      {/* /.row */}
                     
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
    )
}