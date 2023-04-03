import React, {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {


  const navigate = useNavigate();

  let getName = window.localStorage.getItem("localName");
  let getEmail = window.localStorage.getItem("localEmail");
  let getPassword = window.localStorage.getItem("localPassword");

  useEffect(() => {
    if(!getName){
      setTimeout(()=>{
        navigate('/');
      }, 500)
    }
  }, [])
  
  const signOut =()=>{
    window.localStorage.setItem("localName", "");
    window.localStorage.setItem("localEmail", "");
    window.localStorage.setItem("localPassword", "");
    navigate('/')
  }

  return (
    <div className='w-[60%] ml-20 mt-10 bg-white text-2xl flex flex-col gap-6 shadow-2x1 px-6 pt-6 pb-6 text-gray-700 border border-black'>
        <h2 className='text-4xl text-black'>Profile </h2>
        <h2>Full Name : {getName}</h2>
        <h2>Email : {getEmail} </h2>
        <h2>Password : {getPassword} </h2>
        <button onClick={signOut} className='bg-black text-white w-28 mt-5 mx-2 rounded-sm p-2'>Logout</button>
    </div>
  )
}

export default Profile