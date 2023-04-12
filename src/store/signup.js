import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
loading: false,
error: null,
user: null,
};

// Define async thunk for signing up a new user
export const signupUser = createAsyncThunk(
"auth/signupUser",
async (userData) => {
const { email, password } = userData;
const { user } = await createUserWithEmailAndPassword(auth, email, password);
return user;
}
);

// Define slice for the authentication
const authSlice = createSlice({
name: "auth",
initialState :{userData : [] , userToken:"", error:null,status:'null' },
reducers: {
setUser: (state, action) => {
state.user = action.payload;
},
clearUser: (state) => {
state.user = null;
},
},
extraReducers: {
[signupUser.pending]: (state) => {
state.error = null;
state.loading = true

},
[signupUser.fulfilled]: (state, action) => {
state.user = action.payload;
state.userData = action.payload;
state.userToken = action.payload.stsTokenManager.accessToken;
state.status = 'Success';
state.loading = false;

},
[signupUser.rejected]: (state, action) => {
state.loading = false;
state.error = action.error.message;
},
},
});

// Export actions and reducer
export  const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

// stsTokenManeger