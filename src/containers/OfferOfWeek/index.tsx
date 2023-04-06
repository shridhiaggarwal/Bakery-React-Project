import React from "react";
import offerOfWeekStyles from "./offerOfWeek.module.css";
import iceCreamElement from "../../images/elements/icecream_element.png";
import cakeElement from "../../images/elements/cake_element.png";
import Button from "../../components/Button";

function OfferOfWeek() {
  return (
    <section className={offerOfWeekStyles.offerOfWeek}>
      <img
        className={offerOfWeekStyles.icecreamElement}
        src={iceCreamElement}
      />
      <div className={offerOfWeekStyles.offerOfWeekText}>
        <h4>Offer of the Week</h4>
        <p>
          Treat yourself with our delicious offer of the week - buy any dessert
          and get a scoop of ice cream for free.
        </p>
        <Button>Check our menu</Button>
      </div>
      <div className={offerOfWeekStyles.offerOfWeekImage}>
        <img src={cakeElement} />
      </div>
    </section>
  );
}

export default OfferOfWeek;
