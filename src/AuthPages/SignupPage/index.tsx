import React from "react";
import AuthPageContainer from "../AuthPageContainer";
import Typography from "../../components/Typography";
import styled from "styled-components";
import CustomInputField from "../../components/CustomInputField";
import Button from "../../components/Button";

interface ISignupFormProps {
  handleSignupClick: () => void;
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  z-index: 1;
`;

function SignupForm(props: ISignupFormProps) {
  const { handleSignupClick } = props;

  return (
    <>
      <Typography
        variant="h4"
        color="#da5162"
        margin="0 0 2rem 0"
        textAlign="center"
      >
        Sign Up
      </Typography>
      <StyledForm>
        <CustomInputField
          labelText="Name"
          id="name"
          inputType="text"
          inputPlaceholder="Enter Name"
          inputName="name"
          autofocus={true}
          required={true}
        />
        <CustomInputField
          labelText="Email"
          id="email"
          inputType="email"
          inputPlaceholder="Enter Email"
          inputName="email"
          required={true}
        />
        <CustomInputField
          labelText="Password"
          id="password"
          inputType="password"
          inputPlaceholder="Enter Password"
          inputName="password"
          required={true}
        />
        <CustomInputField
          labelText="Confirm Password"
          id="confirmPassword"
          inputType="password"
          inputPlaceholder="Enter Confirm Password"
          inputName="confirmPassword"
          required={true}
        />
      </StyledForm>
      <CenterDiv>
        <Button onButtonClick={handleSignupClick} marginTop={"1.5rem"}>
          Sign Up
        </Button>
      </CenterDiv>
    </>
  );
}

function SignupPage() {
  const handleSignupClick = () => {};

  return (
    <AuthPageContainer
      formContent={<SignupForm handleSignupClick={handleSignupClick} />}
    />
  );
}

export default SignupPage;
