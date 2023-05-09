import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up-form.component";
import Button from "../../components/buttons/buttons.component";
import "./sign-in.styles.scss";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h1>Sign in Page</h1>
      <button className="buttons-container" onClick={logGoogleUser}>
        {" "}
        Sign in with Google
      </button>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignIn;
