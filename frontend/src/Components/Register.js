import React, { useEffect, useState } from "react";
import "./Register.css"
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";
import logo from "../images/live chat2.png";

function Register(){
    let Navigate = useNavigate();
    
    const[Name,setName] = useState()
    const[Email,setEmail] = useState()
    const[Password,setPassword] = useState()
    const[confirmPassword,setConfirmPassword] = useState()
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); 
    const [showErrorAlert, setShowErrorAlert] = useState(false);

  

    
 const handleSubmit=(e)=>{
e.preventDefault()
   console.log("submitting form")
   axios.post("https://chat-application-r22z.onrender.com/registerUser",{Name,Email,Password,confirmPassword})
   .then((res)=>{
     console.log(res)
     sessionStorage.setItem("userData", JSON.stringify(res)); // Fix typo here
     setShowSuccessAlert(true); // Set state to show success alert
     setTimeout(() => {
         setShowSuccessAlert(false); // Hide alert after a few seconds
        //  Navigate("/app/welcome");
     }, 3000); 
   }).catch((error)=>{
       console.log(error)
       setShowErrorAlert(true); // Show error message on login failure
       setTimeout(() => {
           setShowErrorAlert(false); // Hide error message after a few seconds
       }, 3000);
   })
 }

useEffect(()=>{
  // handleSubmit()
},[])
    

    return(
        <>
        
            <div className="conatiner">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <div className="card  bg-dark">
             <div className="card-body p-4 p-sm-5">
             <div className="brand">
            <img className="image" src={logo} alt="logo" />
          <span className="para1">SNAPPY</span>
          </div>
                <h5 className="card-title text-center mb-5 fw-light fs-3 text-white" >Register</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" value={Name} onChange={(e)=>{ setName(e.target.value) }} className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus   />
                         <label for="floatingInputUsername">UserName</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text"   value={Email} onChange={(e)=>{ setEmail(e.target.value) }} className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus   />
                         <label for="floatingInputUsername">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password"  value={Password} onChange={(e)=>{ setPassword(e.target.value) }} className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus   />
                         <label for="floatingInputUsername">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password"  value={confirmPassword} onChange={(e)=>{ setConfirmPassword(e.target.value) }} className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus   />
                         <label for="floatingInputUsername">confirmPassword</label>
                    </div>
                  
        

                 

                    <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
              </div> 
              {/* <h3>Already IHave Account </h3><Link to="/Login">Login</Link>
              
              <a class="d-block text-center mt-2 small" >Have an account? Sign In</a> */}
               <Link  to="/" class="d-block text-center mt-2 small" >Have an account? Sign In</Link> 
                </form>

             </div>
                </div>

            </div>

          </div>
       </div> 

        </>
    )
}
export default Register;