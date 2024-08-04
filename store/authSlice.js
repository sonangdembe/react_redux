
import {createSlice} from '@reduxjs/toolkit'

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