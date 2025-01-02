import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInSignUp = () => {
    setIsSignedIn(!isSignedIn);
  };

  const handleSignInSignUp = () => {
    //Validate form data

    const validationResult = validateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(validationResult);

    if (validationResult) return;

    if (isSignedIn) {
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        })
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
        />
      </div>
      <form
        className="absolute w-3/12 p-12 my-36 right-0 left-0 bg-black mx-auto text-white bg-opacity-85 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-800"
          ></input>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-800"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 my-3 w-full  bg-gray-800"
        ></input>
        <p className="font-bold tetx-lg py-3 text-red-700">{errorMessage}</p>
        <button
          className="py-3 my-3 w-full bg-red-600 rounded-lg"
          onClick={handleSignInSignUp}
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInSignUp} className="cursor-pointer">
          {isSignedIn
            ? "New to Netflix? Sign Up now!"
            : "Already a user? Sign In now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
