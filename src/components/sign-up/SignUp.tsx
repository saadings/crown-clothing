import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./SignUp.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState<any>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user }: any = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else console.log("user creation unsuccessful", error.message);
    }
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            label={"Display Name"}
            name="displayName"
            type="text"
            required
            onChange={handleChange}
            value={displayName}
          />

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

          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type={"password"}
            required
            onChange={handleChange}
            value={confirmPassword}
          />

          {/* <button type="submit">Sign Up</button> */}
          <Button type={"submit"}>Sign Up</Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
