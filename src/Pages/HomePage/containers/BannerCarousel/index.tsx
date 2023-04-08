import "./bannerCarousel.css";
import slider1Image from "../../../../images/slider/slider-1.png"
import slider2Image from "../../../../images/slider/slider-2.png"
import slider3Image from "../../../../images/slider/slider-3.png"
import slider4Image from "../../../../images/slider/slider-4.jpg"
import slider5Image from "../../../../images/slider/slider-5.jpg"
import Button from "../../../../components/Button";

function BannerCarousel() {
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
            <img src={slider1Image} alt="cake" />
            <div className="carousel-caption">
              <h3>Welcome to Bakery!</h3>
              <p>
                We bake with love and passion to bring you the best flavors.
              </p>
              <Button>our menu</Button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2Image} alt="macron" />
            <div className="carousel-caption">
              <h3>Catering Services</h3>
              <p>
                We offer catering services for any kind of event! Contact us to
                make an order
              </p>
              <Button>our services</Button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3Image} alt="pastry" />
            <div className="carousel-caption">
              <h3>Yummy!</h3>
              <p>
                Satisfy your sweet cravings with our delectable bakery delights.
              </p>
              <Button>contact us</Button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider4Image} alt="chocolate pastry" />
            <div className="carousel-caption">
              <h3>Creating Memories, Delicious Bites</h3>
              <p>
                Get a taste of heaven with our handcrafted pastries and
                desserts.
              </p>
              <Button>our menu</Button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider5Image} alt="cupcake" />
            <div className="carousel-caption">
              <h3>We love Cupcakes</h3>
              <p>Join us for a cup of coffee and a bite of heaven.</p>
              <Button>contact us</Button>
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
