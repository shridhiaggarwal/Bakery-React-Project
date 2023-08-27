import React from "react";
import Typography from "../../../components/Typography";
import styled from "styled-components";
import CustomInputField from "../../../components/CustomInputField";
import Button from "../../../components/Button";

interface ILoginFormProps {
  handleLoginClick: () => void;
}

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function LoginForm(props: ILoginFormProps) {
  const { handleLoginClick } = props;
  return (
    <>
      <Typography
        variant="h4"
        color="#da5162"
        margin="0 0 2rem 0"
        textAlign="center"
      >
        Login
      </Typography>
      <form>
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
      </form>
      <CenterDiv>
        <Button onButtonClick={handleLoginClick} marginTop={"1.5rem"}>
          Login
        </Button>
      </CenterDiv>
    </>
  );
}

export default LoginForm;
