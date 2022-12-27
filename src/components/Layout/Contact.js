import React from "react";
import Card from "../UI/Card";
import classes from "./Contact.module.css";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";

const Contact = () => {
  return (
    <Card className={classes.contact}>
      <Card className={classes.contactContainer}>
        <p className={classes.title}>Skontakuj się z nami!</p>
        <div className={classes.cardsContainer}>
          <Card className={classes.contactCard}>
            <AiOutlinePhone className={classes.contactIcon} />
            <a href="tel:690-182-219">690 182 219</a>
          </Card>
          <Card className={classes.contactCard}>
            <AiOutlineMail className={classes.contactIcon} />
            <a href="mailto: wynajemkustra@wp.pl">wynajemkustra@wp.pl</a>
          </Card>
          <Card className={classes.contactCard}>
            <AiOutlineFacebook className={classes.contactIcon} />
            Facebook
          </Card>
        </div>
        <p className={classes.title}>Lub pozwól nam się z Tobą skontaktować!</p>
      </Card>
    </Card>
  );
};

export default Contact;
