import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { StateContext } from '../Context/AuthProvider'

const SignUp = () => {

    const {
        name, 
        setName, 
        email, 
        setEmail, 
        password, 
        setPassword, 
        confirmPassword, 
        setConfirmPassword,
    } = useContext(StateContext);

    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);

    const [redAlert, setRedAlert] = useState(false);
    const [greenAlert, setGreenAlert] = useState(false);

    const navigate = useNavigate();

    const checkName =(e)=>{
        setName(e.target.value);
        if(name.length<=2){
            setValidName(false);
        }else if(!name.includes(" ")){
            setValidName(false);
        }else if(!name.split(" ")[1]){
            setValidName(false);
        }else{
            setValidName(true);
        }
    }

    const checkEmail =(e)=>{
        setEmail(e.target.value);
        if(email.length<=12){
            setValidEmail(false);
        }else if(!email.includes("@")){
            setValidEmail(false);
        }else if(!email.split("@")[1]===("gmail.com" || "outlook.com" || "yahoo.com")){
            setValidEmail(false);
        }else{
            setValidEmail(true);
        }
    }

    const checkPassword =(e)=>{
        setPassword(e.target.value);
        if(password.length<5){
            setValidPassword(false);
        }else{
            setValidPassword(true);
        }
    }

    const checkConfirmPassword =(e)=>{
        setConfirmPassword(e.target.value);
        if(confirmPassword.length < 5 ){
            setValidConfirmPassword(false);
        }else{
            setValidConfirmPassword(true);
        }
    }


    const onSubmit=()=>{
        if(!validName || !validEmail || (password !== confirmPassword) || !validPassword){
            console.log("Invalid")
            setRedAlert(true);
            setGreenAlert(false);
            if(!validName){
                alert("Enter valid name");
            }else if(!validEmail){
                alert("Enter valid email");
            }else if(password !== confirmPassword){
                alert("Password did not matched");
            }else if(password.length < 5){
                alert("Password is too short");
            }
        }else{
            setRedAlert(false);
            setGreenAlert(true);
            window.localStorage.setItem("localName", name);
            window.localStorage.setItem("localEmail", email);
            window.localStorage.setItem("localPassword", password);
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                navigate('/profile');
            },500 );
        }
    }

    useEffect(() => {
        if(window.localStorage.getItem("localName")){
            setTimeout(()=>{
                navigate('/profile');
            }, 500)
        }
    }, [])
    

  return (
    <div className='w-2/4 py-12  ml-9'>
        <div className='border border-black bg-white px-2 pt-3 pb-3 mt-5 basis-1/2'>
            <h2 className='text-4xl text-black mt-3 px-4'>Signup</h2>
            <div className='mt-2 shadow-2xl  px-6 pt-9 pb-3'>
                <div className=' border border-transparent border-b-gray-700 mt-0.5'>
                    <input 
                        placeholder='Full Name' 
                        className='bg-transparent text-gray-700 h-10 w-full outline-none' 
                        value={name} 
                        onChange={checkName} />
                </div>

                <div className=' border border-transparent border-b-black mt-1'>
                    <input 
                        placeholder='Email' 
                        className='bg-transparent text-gray-700 h-10 w-full outline-none' 
                        value={email} 
                        onChange={checkEmail}  />
                </div>

                <div className=' border border-transparent border-b-black mt-1'>
                    <input 
                        placeholder='Password' 
                        className='bg-transparent text-gray-700 h-10 w-full outline-none' 
                        value={password} 
                        onChange={checkPassword} />
                </div>

                <div className=' border border-transparent border-b-black mt-1'>
                    <input 
                        placeholder='Confirm Password' 
                        className='bg-transparent text-gray-700 h-10 w-full outline-none'  
                        value={confirmPassword} 
                        onChange={checkConfirmPassword} />
                </div>

                <div className='py-5'>
                    <h2 className={`text-red-800 ${!redAlert?"hidden":"flex"}`}>Error: All the fields are mandatory</h2>
                    <h2 className={`text-green-700  ${!greenAlert?"hidden":"flex"}`}>Successfully Signed Up!</h2>
                </div>

                <button onClick={onSubmit} className='bg-black text-white w-30 rounded-sm p-2'>Signup</button>
            </div>
        </div>
    </div>
    
  )
}

export default SignUp