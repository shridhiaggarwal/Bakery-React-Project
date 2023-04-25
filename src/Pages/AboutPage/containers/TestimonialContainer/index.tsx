import React from "react";
import styled from "styled-components";
import Images from "../../../../components/Images";
import Typography from "../../../../components/Typography";
import TestimonialCard from "../TestimonialCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

interface ITestimonialDataProps {
  name: string;
  testimonial: string;
  imageSrc: string;
  rating: number;
}

interface ITestimonialContainerProps {
  margin?: string;
  testimonialData: Array<ITestimonialDataProps>;
}

const StyledTestimonialContainer = styled.div<{
  margin?: string;
}>`
  margin: ${(props) => props.margin};
`;

const StyledTestimonialCarousel = styled.div`
  .owl-item {
    height: 310px;
  }

  .owl-theme .owl-dots .owl-dot:focus {
    outline: none;
  }

  .owl-theme .owl-dots .owl-dot span {
    width: 15px;
    height: 15px;
    background: white;
    border: 3px solid #cecece;
    transition: all 0.3s ease-in-out;
  }

  .owl-theme .owl-dots .owl-dot.active span,
  .owl-theme .owl-dots .owl-dot:hover span {
    background: #da5162;
  }
`;

function TestimonialContainer(props: ITestimonialContainerProps) {
  const { margin, testimonialData } = props;

  const options = {
    items: 2,
    margin: 20,
    loop: true,
    dots: true,
    autoPlay: true,
    responsive: {
      1: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
    },
    stagePadding: 8,
  };

  return (
    <StyledTestimonialContainer margin={margin}>
      <Typography variant="h4" color="#da5162" margin="0 0 32px 0">
        Sweet Success Stories
      </Typography>
      <StyledTestimonialCarousel>
        <OwlCarousel className="owl-carousel owl-theme owl-loaded" {...options}>
          {testimonialData.map((data) => {
            return (
              <div className="item">
                <TestimonialCard
                  name={data.name}
                  testimonial={data.testimonial}
                  imageSrc={data.imageSrc}
                  rating={data.rating}
                />
              </div>
            );
          })}
        </OwlCarousel>
      </StyledTestimonialCarousel>
    </StyledTestimonialContainer>
  );
}

export default TestimonialContainer;
