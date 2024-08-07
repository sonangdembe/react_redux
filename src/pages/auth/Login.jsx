import React from "react";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import STATUSES from "../../globals/status/statuses";
import { login } from "../../../store/authSlice";

const Login = () => {
  const {user, status} = useSelector((state) => state.auth)
  const navigate = useNavigate()

  // this data will contains register data until we refresh page 
  // this is the beauty of state management


const dispatch = useDispatch()
  const  handleLogin =(data) =>{
   dispatch(login(data))

   if(status === STATUSES.SUCCESS){
    return navigate('/')
   }else{
    return navigate('/login')
   }
  } 
  return (
    <>
    <Form type='Login' user={user} onSubmit={handleLogin}/>
    </>
  );
}

export default Login
