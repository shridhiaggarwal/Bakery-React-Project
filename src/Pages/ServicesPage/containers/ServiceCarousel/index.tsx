import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./serviceCarousel.css";
import ServiceCard from "../ServiceCard";
import Images from "../../../../components/Images"

function ServiceCarousel() {
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

  const servicesData = [
    {
      title: "Birthday Cakes",
      subtitle:
        "Make your loved one's birthday extra special with our delicious and beautifully decorated cakes!",
      imageSrc: Images.SERVICE1,
    },
    {
      title: "Special Cakes",
      subtitle:
        "Make your special occasion even more memorable with our custom cakes!",
      imageSrc: Images.SERVICE2,
    },
    {
      title: "Corporate Events",
      subtitle:
        "Impress your clients and colleagues with our delectable baked goods at your next corporate event.",
      imageSrc: Images.SERVICE3,
    },
    {
      title: "Cupcake & Sweets",
      subtitle:
        "Indulge your sweet tooth with our tempting cupcakes and sweets!",
      imageSrc: Images.SERVICE4,
    },
    {
      title: "Custom Orders",
      subtitle:
        "Looking for something special? Our talented bakers can create custom orders. Let us create something unique just for you.",
      imageSrc: Images.SERVICE5,
    },
    {
      title: "Quick Delivery",
      subtitle:
        "Need your baked goods in a hurry? No problem! We offer quick and reliable delivery services.",
      imageSrc: Images.SERVICE6,
    },
  ];

  return (
    <div className="container serviceCarousel">
      <OwlCarousel
        className="owl-carousel owl-theme owl-loaded"
        {...options}
        id="owl-services"
      >
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
              const { title, subtitle, imageSrc } = service;
              return (
                <div className="owl-item">
                  <ServiceCard
                    title={title}
                    subtitle={subtitle}
                    imageSrc={imageSrc}
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
