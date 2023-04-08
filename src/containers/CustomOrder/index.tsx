import React from "react";
import customOrderStyles from "./customOrder.module.css";
import Button from "../../components/Button";
import cupcakeElement from "../../images/elements/cupcake_element.png";

function CustomOrder() {
  return (
    <section className={customOrderStyles.customOrder}>
      <div className={customOrderStyles.customOrderImage}>
        <img src={cupcakeElement} />
      </div>
      <div className={customOrderStyles.customOrderText}>
        <h4>Custom Orders</h4>
        <p>
          At our bakery, we understand that everyone has unique tastes and
          preferences. That's why we offer a custom order service that allows
          you to create a dessert that's uniquely yours. Whether it's a specific
          flavor or a particular design, we'll work with you to create something
          truly special.
        </p>
        <Button>Contact us</Button>
      </div>
    </section>
  );
}

export default CustomOrder;
