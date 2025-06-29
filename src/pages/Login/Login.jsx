import React,{useState} from "react";
import './Login.css'
import logo from '../../assets/logo.png'

const Login = ()=>{
    const [signState,setSignState]=useState('Sign In')

    return (
        <div className="login">
            <img src={logo} alt="logoimg.png" className="login-logo" />
            <div className="login-form">
                <h1>{signState}</h1>
                <form >
                    {signState==='Sign Up' ? // name tag is only displayed in sign up page
                    <input type="text" placeholder="Your name..." />
                    : <></> }
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password..." />
                    <button>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox"/>
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>

                </form>
                <div className="form-switch">
                        {signState==='Sign In'? 
                    <p>New to Netflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign Up now</span></p> :
                    <p>Already Have account? <span onClick={()=>{setSignState('Sign In')}}>Sign In Now</span></p> }
                </div>
            </div>
        </div>
    )
}

export default Login