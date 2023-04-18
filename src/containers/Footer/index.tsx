import Images from "../../components/Images";
import styled from "styled-components";
import Typography from "../../components/Typography";

const FooterSection = styled.footer`
  background-color: #fdf2d2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 60px 80px;
  @media only screen and (max-width: 576px) {
    padding: 20px;
  }
`;

const FooterLogoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 60px;
  @media only screen and (max-width: 576px) {
    margin-right: 0px;
    margin-bottom: 1rem;
  }
`;

const FooterText = styled.div``;

const FooterField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const FooterFieldIcons = styled.i`
  color: #da5162;
  margin-right: 12px;
`;

const FooterSocial = styled.div`
  @media only screen and (max-width: 576px) {
    text-align: center;
  }
`;

const FooterSocialIcons = styled.i`
  width: 40px;
  height: 40px;
  background-color: #da5162;
  color: white;
  text-align: center;
  padding: 8px;
  border: 2px solid #da5162;
  border-radius: 50%;
  font-size: 1.25rem;
  margin-right: 20px;
  transition: all 0.5s;
  &:hover {
    background-color: transparent;
    border: 2px solid #da5162;
    color: #da5162;
  }
`;

const FooterCopyRight = styled(Typography)`
  @media only screen and (max-width: 576px) {
    text-align: center;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <FooterLogoText>
        <FooterLogo>
          <a href="#home">
            <img src={Images.PINK_LOGO} />
          </a>
          <Typography
            variant="h5"
            color="#da5162"
            fontFamily={`"Pacifico", cursive`}
            fontWeight="bolder"
          >
            Bakery!
          </Typography>
        </FooterLogo>
        <FooterText>
          <FooterField>
            <FooterFieldIcons
              className="fa fa-map-marker"
              aria-hidden="true"
            ></FooterFieldIcons>
            <Typography variant="caption" fontWeight="bold">
              Block B, Kamla Nagar, Delhi, India
            </Typography>
          </FooterField>
          <FooterField>
            <FooterFieldIcons
              className="fa fa-phone"
              aria-hidden="true"
            ></FooterFieldIcons>
            <Typography variant="caption" fontWeight="bold">
              +91 9876543210
            </Typography>
          </FooterField>
          <FooterField>
            <FooterFieldIcons
              className="fa fa-clock-o"
              aria-hidden="true"
            ></FooterFieldIcons>
            <Typography variant="caption" fontWeight="bold">
              Mon-Sat: 9 A.M. - 5 P.M.
            </Typography>
          </FooterField>
          <FooterSocial>
            <a href="/">
              <FooterSocialIcons className="fa fa-facebook"></FooterSocialIcons>
            </a>
            <a href="/">
              <FooterSocialIcons className="fa fa-youtube-play"></FooterSocialIcons>
            </a>
            <a href="/">
              <FooterSocialIcons className="fa fa-twitter"></FooterSocialIcons>
            </a>
          </FooterSocial>
        </FooterText>
      </FooterLogoText>
      <FooterCopyRight variant="caption" fontWeight="bold">
        Copyright © 2023 - Developed by Shridhi
      </FooterCopyRight>
    </FooterSection>
  );
}

export default Footer;
