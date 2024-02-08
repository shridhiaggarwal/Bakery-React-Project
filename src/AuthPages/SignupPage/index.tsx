import AuthPageContainer from "../AuthPageContainer";
import Typography from "../../components/Typography";
import styled from "styled-components";
import CustomInputField from "../../components/CustomInputField";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import CommonLink from "../../components/Link";

interface ISignupFormProps {
  handleSignupClick: () => void;
}

const CenterDiv = styled.div<{
  margin?: string;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.margin};
`;

const StyledForm = styled.form`
  width: 100%;
  z-index: 1;
`;

function SignupForm(props: ISignupFormProps) {
  const navigate = useNavigate();
  const { handleSignupClick } = props;

  const handleLoginLink = () => {
    navigate("/login");
  };

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
        {/* <CustomInputField
          labelText="Confirm Password"
          id="confirmPassword"
          inputType="password"
          inputPlaceholder="Enter Confirm Password"
          inputName="confirmPassword"
          required={true}
        /> */}
      </StyledForm>
      <CenterDiv>
        <Button onButtonClick={handleSignupClick} marginTop={"1.5rem"}>
          Sign Up
        </Button>
      </CenterDiv>
      <CenterDiv margin="0.5rem 0 0 0">
        <Typography variant="caption" margin="0 8px 0 0" textAlign="center">
          Already registered?
        </Typography>
        <CommonLink
          textValue={"Login"}
          textVariant="caption"
          onLinkClick={handleLoginLink}
        />
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
