import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/Typography";
import Images from "../../../../components/Images";

interface ITestimonialCardProps {
  name: string;
  testimonial: string;
  imageSrc: string;
  rating: number;
}

const StyledTestimonialCard = styled.div`
  position: relative;
  display: flex;
  height: 300px !important;
  align-items: center;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
  border-left: 4px dotted #da5162;
  border-top: 4px dotted #da5162;
  border-radius: 8px;
  padding: 24px;
  &:hover {
    .quoteMarkClass {
      transform: rotate(16deg);
      transition: 300ms linear all;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 12px;
  }
`;

const TestimonialText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const StyledImage = styled.img`
  width: 140px !important;
  height: 140px;
  object-fit: cover;
  flex-shrink: 0;
  border: 4px solid #da5162;
  border-radius: 50%;
  @media only screen and (max-width: 576px) {
    margin-bottom: 16px;
  }
`;

const StyledQuoteMark = styled.img`
  width: 110px !important;
  position: absolute;
  right: 24px;
  top: 16px;
  opacity: 0.5;
`;

const StyledWrapTypography = styled(Typography)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

function TestimonialCard(props: ITestimonialCardProps) {
  const { name, testimonial, imageSrc, rating } = props;

  return (
    <StyledTestimonialCard>
      <StyledImage src={imageSrc} />
      <TestimonialText>
        <StyledQuoteMark src={Images.QUOTE_MARK} className="quoteMarkClass"/>
        <StyledWrapTypography variant="body1">{testimonial}</StyledWrapTypography>
        <Typography
          variant="body1"
          color="#da5162"
          fontWeight="bold"
          margin="8px 0 0 0"
          textAlign="right"
        >
          -{name}
        </Typography>
      </TestimonialText>
    </StyledTestimonialCard>
  );
}

export default TestimonialCard;
