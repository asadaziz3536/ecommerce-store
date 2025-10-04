import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password },{rejectWithValue}) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  return  userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, {rejectWithValue}) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
     return  userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logoutUser=createAsyncThunk("auth/logoutUser", async()=>{
  await  signOut(auth)
  return null

})


const authSlice=createSlice({
    name:"auth",
    initialState:{user:null, loading:false, error:null},
    reducers:{
        setUser:(state,action)=>{state.user=action.payload}
    },

    extraReducers:(builder)=>{
        builder
        .addCase(signupUser.pending,(state)=>{state.loading=true;})
        .addCase(signupUser.fulfilled, (state,action)=>{
            state.loading=false;
            state.user=action.payload
        })
        .addCase(signupUser.rejected, (state, action)=>{
            state.loading=false;
            state.error=action.payload
        })

        .addCase(loginUser.pending,(state,action)=>{state.loading=true})
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
        .addCase(logoutUser.fulfilled,(state)=>{
            state.user=null
        })
      
    }
})

export const {setUser}=authSlice.actions
export default authSlice.reducer
