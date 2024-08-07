
import {createSlice} from '@reduxjs/toolkit'

// createSlice is the objects which will contains the objects as the parameter and it can contains more than one objects as a parameters
// Objects are the key and value pairs

const blogSlice = createSlice({
   name : "blog",
   initialState : {
    // repeatedly we this so we have to declare and store in slice
    // this is the beauty of redux toolkit
    title : null ,    
    subtitle : null,
     category: null,
     image : null,
     description: null   
   },


   // now here comes the reducer which is alos reducer
   reducers : {
   // as a convention you can use word <set>as prefix or you use any word but conventions
    setTitle(state,action){
        state.title = action.payload
        // this state is above declared state [ user, token, status]
        // this state.status will store the data that action.payload  is currently containing it may be loading, fail
    },
    setSubtitle(state,action){
        state.subtitle = action.payload
    },
    setCategory(state,action){
        state.category = action.payload
    },
    setImage(state,action){
        state.image = action.payload
    },
    setDescription(state,action){
        state.description= action.payload
    }
   } 
})


// this above is slice and now have to make action in redux toolkit which can be made with a line of code

// name should be same as the reducer which we will be invoking and now this are callled actions
export const {setTitle,setSubtitle,setCategory,setImage,setDescription} =  blogSlice.actions

// exporting the authSlice which will contains the .reducer as a extension
export default blogSlice.reducer


function addBlog(data){
    return async function addBlogThunk(dispatch){

    }
}