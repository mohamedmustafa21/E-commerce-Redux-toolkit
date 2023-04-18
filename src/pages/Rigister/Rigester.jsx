import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // <== import the useDispatch hook
import { bindActionCreators } from "redux"; // <== import the bindActionCreators function
import { clearUser, signupUser } from "../../store/signup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import { signupUser } from ""; // <== import the signupUser async thunk
import signup from "../../store/signup";
import authSlice from './../../store/signup';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register() {
  const { userData,error } = useSelector((state) => state.authSlice);
  const navigate = useNavigate()

  console.log(userData)


  const [loading,setLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [errorDeatils, setError] = useState("");

  const dispatch = useDispatch(); // <== get the dispatch function from the store

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //      dispatch(signupUser({ email, password }));
  //     setLoading(true) // <== dispatch the signupUser async thunk
  //     console.log("done");
  //   } catch (error) {
  //     console.error(error);
  //     setError(error);
  //     // Add code here to handle registration error
  //   }
  // };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      dispatch(signupUser({ email, password })); // <== dispatch the signupUser async thunk
      if (userData.email) {
        navigate("/login");
        // dispatch(clearUser())
      } else {
        setError(error);
        console.log(error)
      }
    } catch (error) {
      console.error(error);
      setError(error);
      // Add code here to handle registration error
    }
  };

  const handleGoogleSignup = async (e) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = await GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
  
      // Sign up the user with the email and password obtained from Google
      await dispatch(signupUser({ email: user.email, password: token }));
      navigate("/");
      // Add code here to handle successful signup
    } catch (error) {
      console.log(error);
      // Add code here to handle signup error
    }
  };


  
  useEffect(() => {
    if (userData.accessToken) {
      navigate("/");
    }
  }, [userData.accessToken, navigate]);
  
  useEffect(() => {
    if (error && errorDeatils !== error) {
      setError(error);
      console.log(errorDeatils)
    }
  }, [setError, error, errorDeatils]);

  // useEffect(() => {
  //   if (userData.error) {
  //    setError(error)
  //   }
  // }, [userData, setError]);
  useEffect(() => {
    if (userData.email) {
      navigate("/login");
    }
  }, [userData.email, navigate]);
  return (
    <div>
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1681310775~exp=1681311375~hmac=5ff9e45357a93bb15f1fea782ecfd2a387f70216557f3a4457f64729339991f0"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <div className="w-full text-center mb-3 ">
              <h2 className="font-[700] text-lg">
                Rigister <i className="fa-solid fa-arrow-turn-down"></i>
              </h2>
            </div>
            <form onSubmit={handleRegister}>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  id="exampleFormControlInput3"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black max-md:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Email address"
                />
                <label
                  htmlFor="exampleFormControlInput3"
                  className="pointer-events-none absolute  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  id="exampleFormControlInput33"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer  block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Password"
                />
                <label
                  htmlFor="exampleFormControlInput33"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                >
                  Password
                </label>
              </div>

        
              {errorDeatils && (
  <div
    className="text-center p-4 mb-4  text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
    role="alert"
  >
    <span className=" font-[900] "></span>
    {errorDeatils.slice(5)}
  </div>
)}

              <button
                type="submit"
                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm bg-black font-medium uppercase leading-normal text-white   shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                // data-te-ripple-init
                // data-te-ripple-color="light"
              >
                Create <i className="fa-solid fa-user-plus"></i>
                <i className={` ${loading ? "fa-solid fa-spinner fa-spin":""} text- white`}></i>
              </button>
              <div className="mt-6 flex items-center justify-between ">
                <a
                  onClick={() => {
                    dispatch(clearUser());
                    navigate("/login");
                  }}
                 
                  className="bg-[#2ea253]  p-2 text-white font-[600] rounded-md text-primary transition cursor-pointer  duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Go To Login <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              <a
                className="bg-[white] text-black mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                // style="background-color: "
               onClick={()=>handleGoogleSignup()}
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {" "}
               
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  className="mr-3  "
                  x="0px"
                  y="0px"
                  width="30"
                  height="30 "
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Continue with Google
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
