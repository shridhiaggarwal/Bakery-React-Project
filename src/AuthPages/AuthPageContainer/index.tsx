import React from "react";
import styled from "styled-components";
import Images from "../../components/Images";

interface IAuthPageContainerProps {
  formContent: any;
}

const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 400px;
  height: inherit;
`;

const AuthPageBox = styled.section`
  background-image: url(${Images.BACKGROUND3});
  height: 100vh;
  position: relative;
`;

const Image1 = styled.img`
  position: absolute;
  top: 40px;
  left: 50px;
  width: 200px;
  rotate: -30deg;
`;

const Image2 = styled.img`
  position: absolute;
  top: 280px;
  left: 300px;
  width: 200px;
  rotate: 30deg;
`;

const Image3 = styled.img`
  position: absolute;
  bottom: 30px;
  left: 50px;
  width: 200px;
  rotate: -30deg;
`;

const Image4 = styled.img`
  position: absolute;
  top: 40px;
  right: 50px;
  width: 200px;
`;

const Image5 = styled.img`
  position: absolute;
  top: 280px;
  right: 300px;
  width: 200px;
`;

const Image6 = styled.img`
  position: absolute;
  bottom: 80px;
  right: 50px;
  width: 230px;
  rotate: -30deg;
`;

function AuthPageContainer(props: IAuthPageContainerProps) {
  const { formContent } = props;

  return (
    <AuthPageBox>
      <Image1 src={Images.CAKE_ELEMENT8} />
      <Image2 src={Images.CAKE_ELEMENT9} />
      <Image3 src={Images.ICECREAM_ELEMENT2} />
      <Image4 src={Images.DONUT_ELEMENT3} />
      <Image5 src={Images.COOKIE_ELEMENT1} />
      <Image6 src={Images.CAKE_ELEMENT10} />
      <StyledFormDiv>{formContent}</StyledFormDiv>
    </AuthPageBox>
  );
}

export default AuthPageContainer;
