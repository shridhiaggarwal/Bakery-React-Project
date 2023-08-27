import React from "react";
import SignupForm from "./SignupForm";
import AuthPageContainer from "../AuthPageContainer";

function SignupPage() {
  const handleSignupClick = () => {};

  return (
    <AuthPageContainer
      formContent={<SignupForm handleSignupClick={handleSignupClick} />}
    />
  );
}

export default SignupPage;
