import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // <== import the useDispatch hook
import { bindActionCreators } from "redux"; // <== import the bindActionCreators function
import { signupUser } from "../../store/signup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import { signupUser } from ""; // <== import the signupUser async thunk
import signup from "../../store/signup";
import authSlice from './../../store/signup';
import { useNavigate } from "react-router-dom";

function Register() {
  const { userData } = useSelector((state) => state.authSlice);
  const navigate = useNavigate()

  console.log(userData)



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch(); // <== get the dispatch function from the store

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signupUser({ email, password })); // <== dispatch the signupUser async thunk
      console.log("done");
      navigate('/login')
    } catch (error) {
      console.error(error);
      // Add code here to handle registration error
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      // Sign up the user with the email and password obtained from Google
      await dispatch(signupUser({ email: user.email, password: token }));

      // Add code here to handle successful login
    } catch (error) {
      console.error(error);
      // Add code here to handle login error
    }
  };
  return (
    <div className="container m-auto grid grid-cols-1 ">
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              onSubmit={handleRegister}
              className="flex flex-col space-y-4 items-center "
            >
              <h2>Register</h2>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  // type="email"
                  // placeholder="Email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              {/* <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /> */}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>

              <button className="bg-[#4081ec] text-white p-2 rounded-md" onClick={handleGoogleLogin}>Sign in with Google</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
