import React,{useState,useEffect} from "react";
import { Link ,json,useNavigate} from "react-router-dom";
import "./Register.css"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import logo from "../images/live chat2.png";

import axios from "axios";

function Login(){
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    console.log(userData)
    let Navigate = useNavigate();
    
   
    const[Email,setEmail] = useState("")
    const[Password,setPassword] = useState("")
    // const[data,setData] = useState({Email,Password})
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); 
    const [showErrorAlert, setShowErrorAlert] = useState(false);


    
 const handleSubmit=(e)=>{

e.preventDefault()
   console.log("submitting form")
   
    // const config={
    //     headers:{
    //         "content-type":"application/json",
    //     },
    // };
   
   axios.post("https://chat-application-r22z.onrender.com/login",{Email,Password})
   .then((data)=>{
     console.log(data)
     sessionStorage.setItem("userData", JSON.stringify(data)); // Fix typo here
     setShowSuccessAlert(true); // Set state to show success alert
     setTimeout(() => {
         setShowSuccessAlert(false); // Hide alert after a few seconds
         Navigate("/app/welcome");
     }, 3000); // Change the time duration as needed
   }).catch((error)=>{
       console.log(error)
       console.log(error);
       setShowErrorAlert(true); // Show error message on login failure
       setTimeout(() => {
           setShowErrorAlert(false); // Hide error message after a few seconds
       }, 3000);
   })
 }

useEffect(()=>{
//   handleSubmit()
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
                <h5 className="card-title text-center mb-5 fw-light fs-3 text-white" >Login</h5>
                <form onSubmit={handleSubmit}>
                    

                    <div className="form-floating mb-3">
                        <input type="Email"   value={Email} onChange={(e)=>{ setEmail(e.target.value) }}  className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus   />
                         <label for="floatingInputUsername">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="Password"  value={Password} onChange={(e)=>{ setPassword(e.target.value) }} className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus   />
                         <label for="floatingInputUsername">Password</label>
                    </div>
                    

                    <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Login</button>
              </div>
              {/* <h3><Link to="/Register">  Dont Have An Account  SignUP</Link></h3> */}
              <Link  to="/Register" class="d-block text-center mt-2 small" >Have Not  An account? Sign up</Link>
                </form>

             </div>
                </div>

            </div>

          </div>
       </div>
       <Stack sx={{ width: '50%' }} spacing={2} style={{ position: 'absolute', top: '10px', right: '10px' }}>
                {showSuccessAlert && (
                    <Alert severity="success" onClose={() => setShowSuccessAlert(false)}>
                        Login successful! Redirecting.....
                    </Alert>
                )}
                   {showErrorAlert && (
                    <Alert severity="error" onClose={() => setShowErrorAlert(false)}>
                        Incorrect email or password. Please try again.
                    </Alert>
                )}
            </Stack>
        </>
    )
}
export default Login;