import cakeImage from "../../../../images/elements/cake_element2.png";
import styled from "styled-components";
import ImageBox from "../../../../components/ImageBox";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import Typography from "../../../../components/Typography";

const StyledServiceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  @media only screen and (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

const StyledImageBox = styled(ImageBox)`
  @media only screen and (max-width: 992px) {
    margin: 0 0 0 20px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function ServiceBox() {
  const getSeriveBoxTitle = () => {
    return (
      <>
        <Typography variant="h3" color="#da5162" margin="0 0 1.5rem 0">
          You can't buy happiness
          <br />
          but you can buy CAKE
        </Typography>
        <Typography variant="h5" margin="0 0 1.5rem 0">
          And that's kind of the same thing!
        </Typography>
      </>
    );
  };

  return (
    <StyledServiceBox>
      <TitleSubtitleButtonBox
        customTitle={getSeriveBoxTitle()}
        subtitle={{
          value:
            "Our services don't just stop at baking. We also offer catering for events and gatherings, with options to fit any budget and dietary restrictions. From savory sandwiches to sweet treats, we can provide everything you need to make your event a success.",
          variant: "body1",
        }}
        buttonText="Read more"
      />
      <StyledImageBox imageSrc={cakeImage} margin="0 0 0 80px" />
    </StyledServiceBox>
  );
}

export default ServiceBox;