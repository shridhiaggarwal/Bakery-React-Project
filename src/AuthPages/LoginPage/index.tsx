import React from "react";
import AuthPageContainer from "../AuthPageContainer";
import Typography from "../../components/Typography";
import styled from "styled-components";
import CustomInputField from "../../components/CustomInputField";
import Button from "../../components/Button";
import CommonLink from "../../components/Link";
import { useNavigate } from "react-router-dom";

interface ILoginFormProps {
  handleLoginClick: () => void;
}

const CenterDiv = styled.div<{
  margin?: string;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;

const StyledForm = styled.form`
  width: 100%;
  z-index: 1;
`;

function LoginForm(props: ILoginFormProps) {
  const navigate = useNavigate();
  const { handleLoginClick } = props;

  const handleSignupLink = () => {
    navigate("/signup");
  };

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
      <StyledForm>
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
      </StyledForm>
      <CenterDiv>
        <Button onButtonClick={handleLoginClick} marginTop={"1.5rem"}>
          Login
        </Button>
      </CenterDiv>
      <CenterDiv margin="0.5rem 0 0 0">
        <Typography variant="caption" margin="0 8px 0 0" textAlign="center">
          Craving our treats? New here?
        </Typography>
        <CommonLink
          textValue={"SignUp"}
          textVariant="caption"
          onLinkClick={handleSignupLink}
        />
      </CenterDiv>
    </>
  );
}

function LoginPage(props: any) {
  const { margin } = props;

  const handleLoginClick = () => {};

  return (
    <AuthPageContainer
      formContent={<LoginForm handleLoginClick={handleLoginClick} />}
    />
  );
}

export default LoginPage;
