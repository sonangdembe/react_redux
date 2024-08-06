import React from 'react';
import Form from './components/form/Form';
import { register } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';



const Register = () => {
const dispatch = useDispatch()
// we cann't directly trigger the cmponents in redux, redux will provide the way to it
const handleRegister = (data) =>{
  dispatch(register(data))
}
  return (
  <>
  <Form type='Register' onSubmit={handleRegister}/>
  </>
  );
}

export default Register;
