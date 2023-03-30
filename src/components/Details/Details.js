import "./Details.css";
import { getTopicById, getCommentsSection } from "../../services/blogService";
import { getId, getFirstName } from "../../services/userService";
import { Router, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import SingleComment from "../SingleComment/SingleComment";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { isAuthor } from "../../services/blogService";
import AuthContext from "../contexts/AuthContext";
import { isAuth } from "../Guard/AuthGuards";
import "./Details.css";

let initialState = [];

const Details = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const routeParams = useParams();
  const id = routeParams.topicId;
  const userId = getId();

  const [topic, setTopic] = useState([]);
  const [userName, setUserName] = useState([]);
  const [commentsTopic, setCommentsTopic] = useState([]);

  const isauthor = isAuthor(topic.uidOwner, userId);

  useEffect(() => {
    async function getTheme() {
      const result = await getTopicById(id);
      initialState = [result];
      setTopic(result);
    }

    getTheme();

    async function getUserName() {
      const result = await getFirstName(userId);
      setUserName(result);
    }
    getUserName();

    async function getComments() {
      const result = await getCommentsSection(id);
      console.log(result);
      setCommentsTopic(result);
    }
    getComments();
  }, []);

  console.log(commentsTopic);

  const post = async (data, e) => {
    try {
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1; //months from 1-12
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();

      const newdate = year + "/" + month + "/" + day;

      const data_new = {
        user: userName,
        text: data.text,
        date: newdate,
      };

      const docRef = doc(db, "topics", id);
      await updateDoc(docRef, {
        comments: arrayUnion(data_new),
      });

      reset();
      setCommentsTopic([
        ...commentsTopic,
        {
          ...data_new,
        },
      ]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deletePost = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const docRef = doc(db, "topics", id);
            deleteDoc(docRef);
            navigate(`/blog`);
          },
        },
        {
          label: "No",
          // onClick: () => alert("Click No")
        },
      ],
    });
  };

  return (
    <>
      {/* /.page-header */}
      {/* page title & breadcrumbs end */}
      {/*single-class start*/}
      <div className="single-class pad90">
        <div className="container">
          
            <div className="col-md-10">
              <div className="single-content">
                
                <div className="single-title">
                  <img src={topic.imageUrl}></img>
                  <h4 className="mt50">{topic.title}</h4>
                  <p className="category">Category: {topic.category}</p>
                  <div className="mt20">{topic.textplace}</div>
                </div>
                {isauthor ? (
                  <>
                    <button className="btn-edit">
                      <Link to={`/blog/details/${id}/edit`} className="btn-edit-sec">Edit</Link>
                    </button>
                    <button
                      className="btn-delete"
                      onClick={deletePost}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  ""
                )}
                <hr></hr>
              </div>

              <div>
                  
                      <div className="card-comments">
                        <div className="p-3">
                          <h6>Comments</h6>
                        </div>
                        <div className="test">
                          <form
                            id="contact-form"
                            data-toggle="validator"
                            role="form"
                            action="POST"
                            className="appointment-form"
                            onSubmit={handleSubmit(post)}
                          >
                            <span className="username">Username: {userName}</span>
                            <input
                              type="text"
                              id="comment_section"
                              className="form-control"
                              placeholder="Enter your comment..."
                              {...register("text")}
                            />
                            <button
                              type="submit"
                              className="btn-post"
                            >
                              POST
                            </button>
                          </form>
                        </div>

                        {commentsTopic.length > 0 ? (
                          <>
                            {commentsTopic.map((c) => (
                              <SingleComment key={c.id} data={c} />
                            ))}
                          </>
                        ) : (
                          <h4 className="noClasses">No comments.</h4>
                        )}
                      </div>
                   
              </div>
              {/*accordion*/}
              {/* <div id="accordion" className="mt50" role="tablist">
            <div className="card">
              <div className="card-header" role="tab" id="headingOne">
                <h5 className="mb-0">
                  <a
                    data-toggle="collapse"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Weight Loss: Insider Secrets To Staying Fuller
                  </a>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, dolor forensibus eum eu. Quodsi
                    postulant eu ius. In quod disputationi eos, no qui quis
                    nostrum constituam, minim novum pericula est et. Eu partem
                    accusam mel, te sed nibh ancillae. Possit nonumes mentitum
                    ea quo, est eu mazim integre blandit. Ad illud adversarium
                    est, no pro{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingTwo">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Protein Pow No-Bake Buckeyes
                  </a>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, dolor forensibus eum eu. Quodsi
                    postulant eu ius. In quod disputationi eos, no qui quis
                    nostrum constituam, minim novum pericula est et. Eu partem
                    accusam mel, te sed nibh ancillae. Possit nonumes mentitum
                    ea quo, est eu mazim integre blandit. Ad illud adversarium
                    est, no pro{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingThree">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    5 High-Protein Game Birds You Should Try
                  </a>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, dolor forensibus eum eu. Quodsi
                    postulant eu ius. In quod disputationi eos, no qui quis
                    nostrum constituam, minim novum pericula est et. Eu partem
                    accusam mel, te sed nibh ancillae. Possit nonumes mentitum
                    ea quo, est eu mazim integre blandit. Ad illud adversarium
                    est, no pro{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingfive">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapsefive"
                    aria-expanded="false"
                    aria-controls="collapsefive"
                  >
                    Protein Pow No-Bake Buckeyes
                  </a>
                </h5>
              </div>
              <div
                id="collapsefive"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingfive"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, dolor forensibus eum eu. Quodsi
                    postulant eu ius. In quod disputationi eos, no qui quis
                    nostrum constituam, minim novum pericula est et. Eu partem
                    accusam mel, te sed nibh ancillae. Possit nonumes mentitum
                    ea quo, est eu mazim integre blandit. Ad illud adversarium
                    est, no pro{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingsix">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapsesix"
                    aria-expanded="false"
                    aria-controls="collapsesix"
                  >
                    Hacks That Make Calorie Counting A Breeze
                  </a>
                </h5>
              </div>
              <div
                id="collapsesix"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingsix"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, dolor forensibus eum eu. Quodsi
                    postulant eu ius. In quod disputationi eos, no qui quis
                    nostrum constituam, minim novum pericula est et. Eu partem
                    accusam mel, te sed nibh ancillae. Possit nonumes mentitum
                    ea quo, est eu mazim integre blandit. Ad illud adversarium
                    est, no pro{" "}
                  </p>
                </div>
              </div>
            </div>
          </div> */}
              {/*accordion*/}
           
            {/* /.col */}
            {/* <div className="col-md-4"> */}
            {/* <div className="search-box mb50">
            <input type="text" placeholder="search" />
            <a href="#">
              <i className="fa fa-search" />
            </a>
          </div> */}
            {/* <div className="single-list mt50">
            <h4 className="mb20">categories</h4>
            <ul>
              <li>
                <a href="#">bodybuidling</a>
              </li>
              <li>
                <a href="#">boxing</a>
              </li>
              <li>
                <a href="#">fitness training</a>
              </li>
              <li>
                <a href="#">yaga and crossfit</a>
              </li>
              <li>
                <a href="#">running</a>
              </li>
            </ul>
          </div> */}
            {/* </div> */}
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default isAuth(Details);
