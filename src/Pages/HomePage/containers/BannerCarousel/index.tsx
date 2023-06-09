import "./bannerCarousel.css";
import Button from "../../../../components/Button";
import Images from "../../../../components/Images";
import { useNavigate } from "react-router";

function BannerCarousel() {
  const navigate = useNavigate();

  const handleServiceButton = () => {
    navigate("/services");
  };

  const handleMenuButton = () => {
    navigate("/menu");
  };

  const handleContactButton = () => {
    navigate("/contact");
  };

  return (
    <section className="bannerCarousel">
      <div
        id="cakes"
        className="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#cakes" data-slide-to="0" className="active"></li>
          <li data-target="#cakes" data-slide-to="1"></li>
          <li data-target="#cakes" data-slide-to="2"></li>
          <li data-target="#cakes" data-slide-to="3"></li>
          <li data-target="#cakes" data-slide-to="4"></li>
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Images.SLIDER1} alt="cake" />
            <div className="carousel-caption">
              <h3>Welcome to Bakery!</h3>
              <p>
                We bake with love and passion to bring you the best flavors.
              </p>
              <Button onButtonClick={handleMenuButton}>Our menu</Button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Images.SLIDER2} alt="macron" />
            <div className="carousel-caption">
              <h3>Catering Services</h3>
              <p>
                We offer catering services for any kind of event! Contact us to
                make an order
              </p>
              <Button onButtonClick={handleServiceButton}>Our services</Button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Images.SLIDER3} alt="pastry" />
            <div className="carousel-caption">
              <h3>Yummy!</h3>
              <p>
                Satisfy your sweet cravings with our delectable bakery delights.
              </p>
              <Button onButtonClick={handleContactButton}>Contact us</Button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Images.SLIDER4} alt="chocolate pastry" />
            <div className="carousel-caption">
              <h3>Creating Memories, Delicious Bites</h3>
              <p>
                Get a taste of heaven with our handcrafted pastries and
                desserts.
              </p>
              <Button onButtonClick={handleMenuButton}>Our menu</Button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Images.SLIDER5} alt="cupcake" />
            <div className="carousel-caption">
              <h3>We love Cupcakes</h3>
              <p>Join us for a cup of coffee and a bite of heaven.</p>
              <Button onButtonClick={handleContactButton}>Contact us</Button>
            </div>
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#cakes" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#cakes" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  );
}

export default BannerCarousel;
