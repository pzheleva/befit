import { useContext, useEffect, useState } from "react";
import { Router, useParams, useNavigate } from "react-router-dom";
import { getTopicById } from "../../services/blogService";
import { useForm } from "react-hook-form";
import { getTopicName } from "../../services/blogService";
import { db } from "../../firebase";
import { getDoc, updateDoc, getFirestore, doc, setDoc } from "firebase/firestore";
import 'react-toastify/dist/ReactToastify.css';
import { getId, getFirstName } from "../../services/userService";
import { ToastContainer, toast } from 'react-toastify';
import AuthContext from "../contexts/AuthContext";
import { isAuth } from "../Guard/AuthGuards";


const Edit = () => {
    const routeParams = useParams();
    const id = routeParams.topicId;
    const userId = getId();
    const navigate = useNavigate();
    const {userInfo} = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        getValues,
        watch,
        reset,
        formState: { errors, isDirty, isValid },
      } = useForm({ mode: "onTouched" });

    const [topic, setTopic] = useState([]);

    useEffect(() => {
        async function getTopic(){
        const result = await getTopicById(id);
        setTopic(result)

        }

        getTopic()
    }, [])

    
    const edit = async (data, e) => {
      
        const existingTitle = await titleExists(data.title);
        if(!existingTitle){
          return;
        }

        try{
        e.preventDefault();
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'short' });
        const userFirstName = await getFirstName(userId);
        const docRef = doc(db, "topics", id);

             setDoc(docRef, {
                uidOwner: userId,
                currDay: day,
                currMonth: month,
                firstNameOwner: userFirstName,
                title: data.title,
                imageUrl: data.imageUrl,
                category: data.category,
                textplace: data.textplace,
                comments: topic.comments
             });
             
            navigate(`/blog/details/${id}`);
        }catch(err){
            console.log(err.message);
            errorHandler(err.code);
        }
    };

    
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
    };


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

    return(
        <>
        {/* page title & breadcrumbs start */}
  
        {/* /.page-header */}
        {/* page title & breadcrumbs end */}
        {/*contact-area start*/}
        <div className="contact-area ctc-form1 pad90">
          <div className="container">
          <ToastContainer />
            <div className="row-main">
              <div className="col-md-8">
                <div className="contact-form">
                  <div className="appointment-schedule">
                    <form
                      id="contact-form"
                      data-toggle="validator"
                      role="form"
                      action="POST"
                      className="appointment-form"
                      onSubmit={handleSubmit(edit)}
                    >
                      <div className="row_first">
                      <div className="title">Edit Topic</div>
                      <div className="col-md-4">
                          <div className="form-group">
                            <input
                              id="title"
                              type="text"
                              placeholder="Title"
                              className="form-control"
                            defaultValue={topic.title}
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
                      
                        <div className="col-md-4">
                          <div className="form-group mt10">
                            <input
                              id="imageUrl"
                              type="text"
                              placeholder="ImageUrl"
                              className="form-control"
                              data-error="Enter Image URL"
                              defaultValue={topic.imageUrl}
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
                            <div className="col-md-4">
                          <div className="form-group mt10">
                          <span className="details">Category</span>
                            <select name="category" value={topic.category} {...register("category")}>
                                <option value="health">Health</option>
                                <option value="fitness">Fitness</option>
                                <option value="bodybuilding">Bodybuilding</option>
                                <option value="spa and wellness">Spa and Wellness</option>
                                <option value="weightlifting">Weightlifting</option>
                                <option value="beauty">Beauty</option>
                            </select>
                            <div className="help-block with-errors" />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group mt10">
                            <textarea
                              id="textplace"
                              name="textplace"
                              type="text"
                              placeholder="Type text..."
                              className="form-control"
                              data-error="textarea"
                              defaultValue={topic.textplace}
                               {...register("textplace", {
                                required: true,
                             maxLength: 200,
                            minLength: 100
                            })}
                            />
                          </div>
                        </div>

                        {errors.textplace?.type === "required" && (
                          <p className="help-block with-errors">
                            Text is required!.
                          </p>
                        )}
                        {errors.textplace?.type === "maxLength" && (
                          <p className="help-block with-errors">
                            Max length is 200 characters!
                          </p>
                        )} 
                       {errors.textplace?.type === "minLength" && (
                          <p className="help-block with-errors">
                            Min length is 100 characters!
                          </p>
                        )} 
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="bttn full-width mt10">
                            <button
                              type="submit"
                              className="btn full-width active btn-primary"
                              disabled={!isValid}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                        {/* /.col */}
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

export default isAuth(Edit);

