import React from "react";
import Card from "../../UI/Card";
import classes from "./Contact.module.css";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";

import ContactForm from "./ContactForm";

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
            <a href="https://www.facebook.com/people/Wypo%C5%BCyczalnia-sprz%C4%99tu-budowlanego-%C5%81ukasz-Kustra/100088261512715/">
              Facebook
            </a>
          </Card>
        </div>
        <p className={classes.title}>Lub pozwól nam skontaktować się z Tobą!</p>
        <Card className={classes.formCard}>
          <ContactForm />
        </Card>
      </Card>
    </Card>
  );
};

export default Contact;
