import React from "react";
import styled from "styled-components";
import Images from "../../../../components/Images";
import Typography from "../../../../components/Typography";
import TestimonialCard from "../TestimonialCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

interface ITestimonialContainerProps {
  margin?: string;
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
  const { margin } = props;

  const testimonialData = [
    {
      name: "Satoshi Suzuki",
      testimonial:
        "I am blown away by the quality and taste of the cakes from this bakery. Every bite was a heavenly experience.",
      imageSrc: Images.TESTMONIAL1,
      rating: 4,
    },
    {
      name: "Rhea Mehra",
      testimonial:
        "I couldn't get enough of the delicious cupcakes from this bakery. They were the perfect addition to my daughter's birthday party.",
      imageSrc: Images.TESTMONIAL2,
      rating: 4.5,
    },
    {
      name: "Ayumi Ishida",
      testimonial:
        "I ordered a custom cake for my sister's wedding and it was absolutely stunning. The attention to detail was impeccable and it tasted even better than it looked.",
      imageSrc: Images.TESTMONIAL3,
      rating: 5,
    },
    {
      name: "William Anderson",
      testimonial:
        "I was hesitant to order online, but the quick delivery and amazing taste of the baked goods from this bakery exceeded all of my expectations. I will definitely be a repeat customer!",
      imageSrc: Images.TESTMONIAL4,
      rating: 4,
    },
  ];

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
{/* 
      <div className="row">
        {testimonialData.map((data) => {
          return (
            <div className="col-md-6">
              <TestimonialCard
                name={data.name}
                testimonial={data.testimonial}
                imageSrc={data.imageSrc}
                rating={data.rating}
              />
            </div>
          );
        })}
      </div> */}
    </StyledTestimonialContainer>
  );
}

export default TestimonialContainer;
