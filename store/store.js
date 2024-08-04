import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import blogSlice from './blogSlice';

// combine all the slice and make it as a store house
// all the slice should be imports here as we had declared that store is the collections of the slice 



// configureStore is also a function which will contains objects 
const store = configureStore({
    reducer:{
        // here we can use any name but use the name that we declared previously in the slice according to it
        // if we donn't entry then declare slice won't be working
        auth : authSlice,
        blog : blogSlice
    }

})


// exporting to react so that it can use it in the programs
export default store;
