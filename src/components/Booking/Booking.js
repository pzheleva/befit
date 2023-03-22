import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getId } from "../../services/userService";
import { getFirestore, doc, updateDoc, arrayUnion, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import AuthContext from "../contexts/AuthContext";
import { isAuth } from "../Guard/AuthGuards";



const Booking = () => {

    const id = getId();

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        reset,
        formState: { errors, isDirty, isValid },
      } = useForm({ mode: "onTouched" });


    const book = async (data, e) => {
        try{
            const docRef = doc(db, "users", id);

            await updateDoc(docRef, {
                bookings: arrayUnion(data)
              })
          reset();
        }catch(err){
            toast.error(err.message, {
                position: toast.POSITION.TOP_RIGHT
            })
            
        }
    }
    
    return(
        <div className="contact-area ctc-form1 pad90">
  <div className="container">
  <ToastContainer />
    <div className="row">
      <div className="col-md-8">
        <div className="contact-form ">
          <div className="appointment-schedule">
            <form
              id="contact-form"
              data-toggle="validator"
              role="form"
              action="POST"
              className="appointment-form"
              onSubmit={handleSubmit(book)}
            >
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input type="date" className="form-control" id="date" {...register("date", {
                                required: true,
                              })}/>
                  </div>
                </div>
                {errors.date && errors.date.type === "required" && (
                          <p className="help-block with-errors">
                            Date is required!
                          </p>
                        )}
                <div className="col-md-4">
                  <div className="form-group">
                    <select name="time" className="form-control" {...register("time")}>
                      <option value="09.00am">09.00am</option>
                      <option value="10.00am">10.00am</option>
                      <option value="11.00am">11.00am</option>
                      <option value="12.00pm">12.00pm</option>
                      <option value="01.00pm">01.00pm</option>
                      <option value="03.00pm">03.00pm</option>
                      <option value="04.00pm">04.00pm</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <select name="class" className="form-control" {...register("class")}>
                    <option value="Bodybuilding">Bodybuilding</option>
                    <option value="Services">Services</option>
                    <option value="Crossfit">Crossfit</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Belly dance">Belly dance</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group mt10">
                    <input
                      id="inputName"
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      data-error="Enter your name"
                      {...register("inputName", {
                        required: true,
                        maxLength: 20
                      })}
                    />
                  </div>
                </div>
                {errors.inputName && errors.inputName.type === "required" && (
                          <p className="help-block with-errors">
                            Name is required!
                          </p>
                        )}
                        {errors.inputName && errors.inputName.type === "maxLength" && (
                          <p className="help-block with-errors">
                            Maximum characters are 20!
                          </p>
                        )}
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      id="phone"
                      type="text"
                      placeholder="Phone"
                      className="form-control"
                      required=""
                      {...register("phone", {
                        required: true,
                        pattern:
                          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      })}
                    />
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
              </div>
              <div className="row">
    
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="inputMessage"
                      id="inputMessage"
                      cols={10}
                      rows={5}
                      placeholder="Your comment text here"
                      {...register("inputMessage", {
                        maxLength: 100
                      })}
                    />
                  </div>
                </div>
                      {errors.inputMessage?.type === "maxLength" && (
                        <p className="help-block with-errors">
                          Maximum characters are 100!
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
                      book now
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
      <div className="col-md-4">
        <div className="booking-schedule">
          <ul>
            <li>
              <i className="fa fa-calendar" />
              monday to wednesday
            </li>
            <li>
              <i className="fa fa-clock-o" />
              07.00am----10.00pm
            </li>
            <li>
              <i className="fa fa-calendar" />
              monday to wednesday
            </li>
            <li>
              <i className="fa fa-clock-o" />
              07.00am----10.00pm
            </li>
            <li>
              <i className="fa fa-clock-o" />
              07.00am----10.00pm
            </li>
          </ul>
        </div>
      </div>
      {/* /.col*/}
    </div>
    {/* /.row */}
  </div>
  {/* /.container */}
</div>

    )
}

export default isAuth(Booking);