

import React from 'react';
import Form from './components/form/Form';
import authSlice, { register } from '../../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import STATUSES from '../../globals/status/statuses';
import { useNavigate } from 'react-router-dom';



const Register = () => {

  
  
  const {status} = useSelector((state)=> state.auth)
  //  const useSelector((state)=>state) // if we know the  all the state
  const navigate = useNavigate()
  console.log(status)

  
  
  const dispatch = useDispatch()
// we cann't directly trigger the cmponents in redux, redux will provide the way to it
const handleRegister = (data) =>{
  // dispatch is the way through which we will be communicating and registe
  // register is the protions that we had defined in authSlice 
  dispatch(register(data))
 // status -> success -> navigate to login else register
 // now have to bring the <Slice name> called 'auth' cause we had declared it as a auth in authSlcie
 // for that [ to combine the react and redux  called react-redux it gives lot's of hooks which helps us to bring 'auth' slice to react here ]
 // i.e. useSelector is used to  [ kahe nikalnu paro vane useSelector]
 // [ kahe kura pathauna paro or kahe kura call garna paro vane useDispatche ]

if(status === STATUSES.SUCCESS){
  return navigate('/login')
}else{
  return navigate('/register')
}


}
  return (
  <>
  <Form type='Register' onSubmit={handleRegister}/>
  </>
  );
}

export default Register;
