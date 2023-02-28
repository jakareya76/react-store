import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignUp = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not metch");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      setFormFields({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign Up with your Email</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
