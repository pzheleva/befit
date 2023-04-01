import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getId } from "../../services/userService";
import { getFirestore, doc, updateDoc, arrayUnion, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import AuthContext from "../contexts/AuthContext";
import { isAuth } from "../Guard/AuthGuards";
import "./Booking.css";
import Footer from "../Footer/Footer";


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
              toast.success("Booking successful!", {
                position: toast.POSITION.TOP_RIGHT
            })
          reset();
        }catch(err){
            toast.error(err.message, {
                position: toast.POSITION.TOP_RIGHT
            })
            
        }
    }
    
    return(
        <div className="contact-area pad90">
  <div className="container">
  <ToastContainer />
   
     
            <form
             
              data-toggle="validator"
              role="form"
              action="POST"
              className="booking_class"
              onSubmit={handleSubmit(book)}
            >
              
                <div className="booking-class">
               
                    <input type="date" className="form-control tst" id="date" {...register("date", {
                                required: true,
                              })}/>
                 
                </div>
                {errors.date && errors.date.type === "required" && (
                          <p className="help-block with-errors">
                            Date is required!
                          </p>
                        )}
                <div className="booking-class">
                  
                    <select name="time" className="form-control tst" {...register("time")}>
                    <option value="" disabled selected>Choose a time</option>
                      <option value="09.00am">09.00am</option>
                      <option value="10.00am">10.00am</option>
                      <option value="11.00am">11.00am</option>
                      <option value="12.00pm">12.00pm</option>
                      <option value="01.00pm">01.00pm</option>
                      <option value="03.00pm">03.00pm</option>
                      <option value="04.00pm">04.00pm</option>
                    </select>
                  
                </div>
                <div className="booking-class">
                  <select name="class" className="form-control tst" {...register("class")}>
                  <option value="" disabled selected>Choose a class</option>
                    <option value="Bodybuilding">Bodybuilding</option>
                    <option value="Services">Services</option>
                    <option value="Crossfit">Crossfit</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Belly dance">Belly dance</option>
                  </select>
                </div>
              
              
                <div className="booking-class">
                 
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
                <div className="booking-class">
                 
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
              
              
    
                <div className="booking-class">
                  
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
                      {errors.inputMessage?.type === "maxLength" && (
                        <p className="help-block with-errors">
                          Maximum characters are 100!
                        </p>
                      )}
              
              
                <div className="booking-btn">
                
                    <button
                      type="submit"
                      className="btn-test"
                      disabled={!isValid}
                    >
                      BOOK NOW
                    </button>
                  
                </div>
                {/* /.col */}
              
              {/* /.row */}
             
              {/* /.row */}
            </form>
         
      {/* /.col */}
    
      {/* /.col*/}
    
    {/* /.row */}
  </div>
  {/* /.container */}
  <Footer/>
</div>

    )
}

export default isAuth(Booking);