import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./serviceCarousel.css";
import ServiceCard, { IServiceCardProps } from "../ServiceCard";

interface IServiceCarouselProps {
  servicesData: Array<IServiceCardProps>;
}

function ServiceCarousel(props: IServiceCarouselProps) {
  const { servicesData } = props;

  const options = {
    items: 3,
    margin: 20,
    loop: true,
    nav: true,
    navText: [
      "<div class='nav-button owl-prev'><i class='fa fa-chevron-left'></i></div>",
      "<div class='nav-button owl-next'><i class='fa fa-chevron-right'></i></div>",
    ],
    slideBy: 1,
    dots: true,
    autoPlay: true,
    responsive: {
      1: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  return (
    <div className="container serviceCarousel">
      <OwlCarousel className="owl-carousel owl-theme owl-loaded" {...options}>
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              width: "4689px",
              transform:
                "translate3d(-1180px, 0px, 0px'); transition: all 0s ease 0s",
            }}
          >
            {servicesData.map((service) => {
              const { title, subtitle, imageSrc, button } = service;
              return (
                <div className="owl-item">
                  <ServiceCard
                    title={title}
                    subtitle={subtitle}
                    imageSrc={imageSrc}
                    button={button}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default ServiceCarousel;
