import React, { Fragment } from "react";
import classes from "./Contact.module.css";
import {
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import ContactForm from "../components/Layout/Contact/ContactForm";
import Card from "../components/UI/Card";
import Hero from "../components/Layout/Hero";
import heroBcg from "../assets/hammer.jpg";
import { CSSTransition } from "react-transition-group";
import "../animations.css";

const Contact = () => {
  return (
    <Fragment>
      <Hero imgSrc={heroBcg}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="example"
        >
          <Card className={classes.container}>
            <h1 classes>kontakt</h1>
          </Card>
        </CSSTransition>
      </Hero>
      <Card className={classes.contact}>
        <Card className={classes.contactContainer}>
          <h1 className={classes.title}>Skontakuj się z nami!</h1>
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
          <h2 className={classes.title}>
            Lub pozwól nam skontaktować się z Tobą!
          </h2>
          <Card className={classes.formCard}>
            <ContactForm />
          </Card>
        </Card>
      </Card>
    </Fragment>
  );
};

export default Contact;
