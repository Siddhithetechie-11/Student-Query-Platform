import {createReducer} from '@reduxjs/toolkit'
const initialState = {
  isAuthenticated:false
};

export const userReducer = createReducer(initialState,{
      LoginRequest:(state)=>{
         state.loading=true;
      },
      LoginSuccess:(state,action)=>{
          state.loading=false;
          state.user = action.payload;
          state.isAuthenticated = true;
      },
      LoginFailure:(state,action)=>{
         state.loading= false;
         state.error = action.payload;
         state.isAuthenticated = false;



      },
      RegisterRequest:(state)=>{
         state.loading=true;
          
      },
      RegisterSuccess:(state,action)=>{
        state.loading=false;
        state.user = action.payload;
        state.isAuthenticated = true;


         
      },
      RegisterFailure:(state,action)=>{
        state.loading=false;
        state.error = action.payload;
        state.isAuthenticated = false;


         
      },
      LoadUserRequest:(state)=>{
        state.loading=true;

         
      },
      LoadUserSuccess:(state,action)=>{
        state.loading=false;
        state.user = action.payload;
        state.isAuthenticated = true;


      },
      LoadUserFailure:(state,action)=>{
        state.loading=false;
        state.error = action.payload;
        state.isAuthenticated = false;


      },


      logOutRequest  :(state)=>{
        state.loading = true;
      },
      logOutSuccess:(state,action)=>{
         state.loading=false;
         state.user = null;
         state.isAuthenticated = false;
      },
      logOutFailure:(state,action)=>{
           state.loading = false;
           state.isAuthenticated = true;
           state.error=action.payload
      }

});



export const allUsersReducer = createReducer(initialState, {
  allUsersRequest: (state) => {
    state.loading = true;
  },
  allUsersSuccess: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  allUsersFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const getPostOfFollowingReducer = createReducer(initialState,{
  getPostOfFollowingRequest :(state)=>{
    state.loading = true;
  },
  getPostOfFollowingSuccess:(state,action)=>{
     state.loading = false;
     state.posts= action.payload;

  },
  getPostOfFollowingFailure:(state,action)=>{
     state.loading=false;
     state.error=action.payload;
  },
  clearErrors:(state)=>{
     state.error=null;
  }
})

export const userProfileReducer = createReducer(initialState, {
  userProfileRequest: (state) => {
    state.loading = true;
  },
  userProfileSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  userProfileFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});


