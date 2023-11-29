import { createSlice } from "@reduxjs/toolkit"

const initialState={user:null,loading:false,isLoggedIn:false,error:null}

const userSlice = createSlice({
  name:'user',
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

export default userSlice.reducer
export const {loadUserStart,loadUserFailure,loadUserSuccess} =userSlice.actions