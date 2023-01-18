import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user-selector";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const currentUser = useSelector(selectCurrentUser);

  const [formFields, setFormFields] = useState<any>(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    navigate("/");
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   alert("passwords do not match");
    //   return;
    // }

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error: any) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password for email!");
      } else if (error.code === "auth/user-not-found") {
        alert("No user associated with this email!");
      } else console.log("user sign in unsuccessful", error.message);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();

    if (await currentUser) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            required
            onChange={handleChange}
            value={email}
          />

          <FormInput
            label="Password"
            name="password"
            type={"password"}
            required
            onChange={handleChange}
            value={password}
          />
          <div className="buttons-container">
            <Button type={"submit"}>Sign In</Button>
            <Button
              buttonType={BUTTON_TYPES_CLASSES.google}
              onClick={signInWithGoogle}
              type="button"
            >
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
