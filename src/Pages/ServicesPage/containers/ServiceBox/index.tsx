import styled from "styled-components";
import ImageBox from "../../../../components/ImageBox";
import TitleSubtitleButtonBox from "../../../../components/TitleSubtitleButtonBox";
import Typography from "../../../../components/Typography";
import Images from "../../../../components/Images";
import { useNavigate } from "react-router";

interface IServiceBoxProps{
  showButton?: boolean;
}

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

function ServiceBox(props: IServiceBoxProps) {
  const {showButton} = props;
  const navigate = useNavigate();

  const handleServiceButton = () => {
    navigate("/services");
  };

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
        button={ showButton ? {
          text: "Read more",
          onClick: handleServiceButton
        } : undefined}
      />
      <StyledImageBox imageSrc={Images.CAKE_ELEMENT2} margin="0 0 0 80px" />
    </StyledServiceBox>
  );
}

export default ServiceBox;
