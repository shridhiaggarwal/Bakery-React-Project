import React from "react";
import LoginForm from "./loginForm";
import AuthPageContainer from "../AuthPageContainer";

function LoginPage(props: any) {
  const { margin } = props;

  const handleLoginClick = () => {};

  return (
    <AuthPageContainer formContent={<LoginForm handleLoginClick={handleLoginClick}/>}/>
  );
}

export default LoginPage;

