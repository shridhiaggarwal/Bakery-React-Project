import React from "react";
import "./service.css";
import cakeImage from "../../images/elements/cake_element2.png";
import styled from "styled-components";

const ServiceSection = styled.section`
  padding: 0px 80px 40px 80px;
  position: relative;
`;

function ServicesPage() {
  return (
    <ServiceSection>
      <h4>Our Services</h4>
      <div className="serviceBox">
        <div className="serviceBoxText">
          <h5>
            You can't buy happiness
            <br />
            but you can buy CAKE
          </h5>
          <h6>And that's kind of the same thing!</h6>
          <p>
            Our services don't just stop at baking. We also offer catering for
            events and gatherings, with options to fit any budget and dietary
            restrictions. From savory sandwiches to sweet treats, we can provide
            everything you need to make your event a success.
          </p>
          <button className="commonButton">READ MORE</button>
        </div>
        <div className="serviceBoxImage">
          <img src={cakeImage} />
        </div>
      </div>
      <div className="container">
        <div className="owl-carousel owl-theme owl-loaded" id="owl-services">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              // style={{
              //   width: "4689px",
              //   transform:
              //     "translate3d(-1180px, 0px, 0px'); transition: all 0s ease 0s",
              // }}
            >
              <div className="owl-item">
                <div className="serviceCard">
                  <img src="images/services/service1.jpeg" />
                  <div className="serviceCardText">
                    <h4>Birthday Cakes</h4>
                    <p>
                      Make your loved one's birthday extra special with our
                      delicious and beautifully decorated cakes!
                    </p>
                  </div>
                  <button className="commonButton">MORE</button>
                </div>
              </div>
              <div className="owl-item">
                <div className="serviceCard">
                  <img src="images/services/service2.jpeg" />
                  <div className="serviceCardText">
                    <h4>Special Cakes</h4>
                    <p>
                      Make your special occasion even more memorable with our
                      custom cakes!
                    </p>
                  </div>
                  <button className="commonButton">MORE</button>
                </div>
              </div>
              <div className="owl-item">
                <div className="serviceCard">
                  <img src="images/services/service3.png" />
                  <div className="serviceCardText">
                    <h4>Corporate Events</h4>
                    <p>
                      Impress your clients and colleagues with our delectable
                      baked goods at your next corporate event.
                    </p>
                  </div>
                  <button className="commonButton">MORE</button>
                </div>
              </div>
              <div className="owl-item">
                <div className="serviceCard">
                  <img src="images/services/service4.jpeg" />
                  <div className="serviceCardText">
                    <h4>Cupcake & Sweets</h4>
                    <p>
                      Indulge your sweet tooth with our tempting cupcakes and
                      sweets!
                    </p>
                  </div>
                  <button className="commonButton">MORE</button>
                </div>
              </div>
              <div className="owl-item">
                <div className="serviceCard">
                  <img src="images/services/service5.jpeg" />
                  <div className="serviceCardText">
                    <h4>Custom Orders</h4>
                    <p>
                      Looking for something special? Our talented bakers can
                      create custom orders. Let us create something unique just
                      for you.
                    </p>
                  </div>
                  <button className="commonButton">MORE</button>
                </div>
              </div>
              <div className="owl-item">
                <div className="serviceCard">
                  <img src="images/services/service6.jpg" />
                  <div className="serviceCardText">
                    <h4>Quick Delivery</h4>
                    <p>
                      Need your baked goods in a hurry? No problem! We offer
                      quick and reliable delivery services.
                    </p>
                  </div>
                  <button className="commonButton">MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceSection>
  );
}

export default ServicesPage;
