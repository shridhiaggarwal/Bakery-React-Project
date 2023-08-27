import React from "react";
import ForgetPasswordForm from "./ForgetPasswordForm";
import AuthPageContainer from "../AuthPageContainer";

function ForgetPasswordPage() {

  const handleForgetPassword = () => {};

  return (
    <AuthPageContainer formContent={<ForgetPasswordForm handleForgetPassword={handleForgetPassword}/>}/>
  );
}

export default ForgetPasswordPage;
