// import { useEffect } from "react";
// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase";
// import { getRedirectResult } from "firebase/auth";
import SignUp from "../sign-up/SignUp";
import SignIn from "../sign-in/SignIn";
import { AuthenticationContainer } from "./AuthenticationStyles";

const Authentication = () => {
  // useEffect(() => {
  //   const redirectGoogle = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };

  //   redirectGoogle().catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  // const logGoogleUser = async () => {
  //   const response = await signInWithGooglePopup();
  //   // console.log(response);
  //   const userDocRef = await createUserDocumentFromAuth(response.user);
  // };

  // const logGoogleUserRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();

  //   console.log(user);
  // };

  return (
    <>
      {/* <button onClick={logGoogleUser}>Sign in with Google</button>
      <button>Sign in with Google Redirect</button> */}
      <AuthenticationContainer>
        <SignIn />
        <SignUp />
      </AuthenticationContainer>
    </>
  );
};

export default Authentication;
