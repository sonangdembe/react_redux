
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import STATUSES from '../src/globals/status/statuses'

// createSlice is the objects which will contains the objects as the parameter and it can contains more than one objects as a parameters
// Objects are the key and value pairs

const authSlice = createSlice({
   name : "auth",
   initialState : {
    // repeatedly we this so we have to declare and store in slice
    // this is the beauty of redux toolkit
    user : null ,    
    token : null,
    status : null,   
   },


   // now here comes the reducer which is alos reducer
   reducers : {
   // as a convention you can use word <set>as prefix or you use any word but conventions
    setStatus(state,action){
        state.status = action.payload
        // this state is above declared state [ user, token, status]
        // this state.status will store the data that action.payload  is currently containing it may be loading, fail
    },
    setUser(state,action){
        state.user = action.payload
    },
    setToken(state,action){
        state.token = action.payload
    }
   } 
})


// this above is slice and now have to make action in redux toolkit which can be made with a line of code

// name should be same as the reducer which we will be invoking and now this are callled actions
export const {setStatus,setUser,setToken} =  authSlice.actions

// exporting the authSlice which will contains the .reducer as a extension and this reducer will combine all the slice too
export default authSlice.reducer





// Creating async thunk in reduxtoolkit

// for register
export function register(data){
  // this data will holds the info that the user enter in the register forms
  // and should return asunc fun


  //
  return async function registerThunk(dispatch){
    // dispatch will invoke
    
    dispatch(setStatus(STATUSES.LOADING))
    // everytime we dispatch payload is sent and payload contains data i.e statuses.loading
    try{
        const response = await axios.post('https://react30.onrender.com/api/user/register',data)
     
        // checking the status
        if(response.status === 201){
            dispatch(sxetUser(data))
           dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
    }catch (error){
        dispatch(setStatus(STATUSES.ERROR))
    }
}

}







// for login

export function login(data){
    return async function loginThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
   try{
    const response =  await axios.post('https://react30.onrender.com/api/user/login',data)
    if (response.status === 201 && response.data.token){
     dispatch(setToken(response.data.token))
     dispatch(setStatus(STATUSES.SUCCESS))
    }else{
     dispatch(setStatus(STATUSES.ERROR))
    }
   }catch(error){
    dispatch(setStatus(STATUSES.ERROR))
   }
    }
}

// After exporting we just have to call the funtion only