import React from "react";
import styled from "styled-components";
import ImageBox from "../../../../components/ImageBox";
import Images from "../../../../components/Images";
import Typography from "../../../../components/Typography";

interface IMiniAboutBoxProps {
  title: string;
  subtitle: string;
  iconClass?: string;
  imageSrc?: string;
}

interface IAboutBoxProps {
  margin?: string;
  aboutPageData: Array<IMiniAboutBoxProps>;
}

const StyledAboutBox = styled.div<{
  margin?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};
  @media only screen and (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

const StyledContentBox = styled.div`
  width: 600px;
`;

const StyledImageBox = styled(ImageBox)`
  @media only screen and (max-width: 992px) {
    margin: 0 20px 0 0;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledMiniAboutBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
`;

const StyledIcon = styled.i`
  background-color: #fdf2d2;
  border-radius: 50%;
  padding: 16px;
  margin-right: 16px;
  color: #da5162;
  font-size: 24px;
`;

const StyledImage = styled.img`
  margin-top: 8px;
  margin-right: 24px;
`;

function MiniAboutBox(props: IMiniAboutBoxProps) {
  const { title, subtitle, iconClass, imageSrc } = props;
  return (
    <StyledMiniAboutBox>
      {iconClass && <StyledIcon className={iconClass}></StyledIcon>}
      {imageSrc && <StyledImage src={imageSrc} />}
      <div>
        <Typography
          variant="h6"
          color="#da5162"
          fontWeight="bold"
          margin="0 0 8px 0"
        >
          {title}
        </Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </div>
    </StyledMiniAboutBox>
  );
}

function AboutBox(props: IAboutBoxProps) {
  const { margin, aboutPageData } = props;

  return (
    <StyledAboutBox margin={margin}>
      <StyledImageBox imageSrc={Images.CAKE_ELEMENT7} margin="0 80px 0 0" />
      <StyledContentBox>
        {aboutPageData.map((data) => {
          return (
            <MiniAboutBox
              title={data.title}
              subtitle={data.subtitle}
              iconClass={data.iconClass}
              imageSrc={data.imageSrc}
            />
          );
        })}
      </StyledContentBox>
    </StyledAboutBox>
  );
}

export default AboutBox;
