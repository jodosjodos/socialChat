import { createSlice } from "@reduxjs/toolkit"

const initialState={user:null,loading:false,isLoggedIn:false,error:null}

const userSlice = createSlice({
  initialState: initialState,
  reducers: {
    loadUserStart: (state) => {
      state.loading = true;
    },

    loadUserSuccess: (state,action) => {
      state.loading = false
      state.user = action.payload;
    },
    loadUserFailure: (state, action) => {
      state.loading = false
      state.error=action.payload
    }

  },
  
    
  
  
})