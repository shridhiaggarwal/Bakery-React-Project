import React from "react";
import styled from "styled-components";
import Images from "../../../../components/Images";
import Typography from "../../../../components/Typography";
import TestimonialCard from "../TestimonialCard";

interface ITestimonialContainerProps {
  margin?: string;
}

const StyledTeamContainer = styled.div<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
`;

function TestimonialContainer(props: ITestimonialContainerProps) {
  const { margin } = props;

  const testimonialData = [
    { name: "Ishita Kapoor", testimonial: "Owner", imageSrc: Images.TESTMONIAL1 },
    {
      name: "Takashi Tanaka",
      designation: "Head Chef",
      imageSrc: Images.TESTMONIAL2,
    },
    { name: "Emily Thompson", testimonial: "Baker", imageSrc: Images.TESTMONIAL3 },
    { name: "Rohit Singh", testimonial: "Baker", imageSrc: Images.TESTMONIAL4 },
  ];

  return (
    <StyledTeamContainer margin={margin}>
      <Typography variant="h4" color="#da5162" margin="0 0 32px 0">
        Sweet Success Stories
      </Typography>
      <div className="row">
        {testimonialData.map((data) => {
          return (
            <div className="col-md-3">
              <TestimonialCard
                name={data.name}
                designation={data.testimonial}
                imageSrc={data.imageSrc}
              />
            </div>
          );
        })}
      </div>
    </StyledTeamContainer>
  );
}

export default TestimonialContainer;
