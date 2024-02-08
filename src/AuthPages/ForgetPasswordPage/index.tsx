import React from "react";
import AuthPageContainer from "../AuthPageContainer";
import Typography from "../../components/Typography";
import styled from "styled-components";
import CustomInputField from "../../components/CustomInputField";
import Button from "../../components/Button";

interface IForgetPasswordFormProps {
  handleForgetPassword: () => void;
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  z-index: 1;
`;

function ForgetPasswordForm(props: IForgetPasswordFormProps) {
  const { handleForgetPassword } = props;

  return (
    <>
      <Typography
        variant="h4"
        color="#da5162"
        margin="0 0 2rem 0"
        textAlign="center"
      >
        Forget Password
      </Typography>
      <StyledForm>
        <CustomInputField
          labelText="Email"
          id="email"
          inputType="email"
          inputPlaceholder="Enter Email"
          inputName="email"
          required={true}
          disabled={true}
        />
        <CustomInputField
          labelText="Current Password"
          id="curentPassword"
          inputType="password"
          inputPlaceholder="Enter Current Password"
          inputName="curentPassword"
          required={true}
        />
        <CustomInputField
          labelText="New Password"
          id="newPassword"
          inputType="password"
          inputPlaceholder="Enter New Password"
          inputName="newPassword"
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
        <Button onButtonClick={handleForgetPassword} marginTop={"1.5rem"}>
          Reset Password
        </Button>
      </CenterDiv>
    </>
  );
}

function ForgetPasswordPage() {
  const handleForgetPassword = () => {};

  return (
    <AuthPageContainer
      formContent={
        <ForgetPasswordForm handleForgetPassword={handleForgetPassword} />
      }
    />
  );
}

export default ForgetPasswordPage;
