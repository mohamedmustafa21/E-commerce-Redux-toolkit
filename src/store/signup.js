import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useDispatch } from "react-redux"; // <== import the useDispatch hook
import { bindActionCreators } from "redux"; // <== import the bindActionCreators function




const firebaseConfig = {
  apiKey: "AIzaSyCOy2QhphtSGoGJtfLLcQx8xkqGWdXRX04",
  authDomain: "e-comm-906de.firebaseapp.com",
  projectId: "e-comm-906de",
  storageBucket: "e-comm-906de.appspot.com",
  messagingSenderId: "883266303746",
  appId: "1:883266303746:web:537b6083122eca35a5741b",
  measurementId: "G-GB3PSKEJ5R",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Define initial state for the slice
const initialState = {
  loading: [],
  error: "",
  userData: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : [],
  status: '',
};


export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData) => {
    const { email, password } = userData;
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return { email: user.email, uid: user.uid, };
  }
);
// export const signupUser = createAsyncThunk(
//   "auth/signupUser",
//   async (userData) => {
//     const { email, password } = userData;
//     const { user } = await createUserWithEmailAndPassword(auth, email, password);
//     return { email: user.email, uid: user.uid };
//   }
// );

export const signInUser = createAsyncThunk(
  "auth/signinUser",
  async (userData) => {
    const { email, password, accessToken } = userData;
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return { email: user.email, uid: user.uid, accessToken: user.stsTokenManager.accessToken };
    // return user
  }
);


export const signInWithGoogle = createAsyncThunk(
  "auth/signinWithGoogle",
  async () => {
    const { user } = await signInWithPopup(auth, provider);
    return { email: user.email, uid: user.uid };
  }
);



// Define slice for the authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData ",JSON.stringify(state.userData))

    },
    clearUser: (state) => {
      state.userData = [];
    },
  },
  extraReducers: {
    [signupUser.pending]: (state) => {
      state.error = null;
      state.loading = true
    },
    [signupUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.status = 'Success';
      state.loading = false;
    },
    [signupUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.code;
    },


    // Login In


    [signInUser.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.status = 'Success';
      state.loading = false;
      localStorage.setItem("userData",(state.userData))


    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.code;
    },

    // 
    [signInWithGoogle.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [signInWithGoogle.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.status = 'Success';
      state.loading = false;
      localStorage.setItem("userData", JSON.stringify(state.userData))

    },
    [signInWithGoogle.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.code;
    },



  },
});

// Export actions and reducer
export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

// stsTokenManeger