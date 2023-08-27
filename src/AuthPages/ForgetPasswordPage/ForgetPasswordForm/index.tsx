import React from "react";
import Typography from "../../../components/Typography";
import styled from "styled-components";
import CustomInputField from "../../../components/CustomInputField";
import Button from "../../../components/Button";

interface IForgetPasswordFormProps {
    handleForgetPassword: () => void;
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function LoginForm(props: IForgetPasswordFormProps) {
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
      <form>
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
      </form>
      <CenterDiv>
        <Button onButtonClick={handleForgetPassword} marginTop={"1.5rem"}>
          Reset Password
        </Button>
      </CenterDiv>
    </>
  );
}

export default LoginForm;
