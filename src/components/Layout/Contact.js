import React from "react";
import Card from "../UI/Card";
import classes from "./Contact.module.css";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";
import Input from "../UI/Input";
import Button from "../UI/Button";

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
        <p className={classes.title}>Lub pozwól nam się z Tobą skontaktować!</p>
        <Card className={classes.formCard}>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[1-9][0-9]{2}-[0-9]{3}-[0-9]{3}"
            label="Wpisz numer telefonu"
            maxlength="9"
            placeholder="000-000-000"
          />
          <Input
            type="email"
            id="email"
            name="email"
            label="Wpisz adres e-mail"
          />
          <div className={classes.textarea}>
            <label htmlFor="message">Wpisz treść wiadomości</label>
            <textarea id="message" name="message" rows="10" />
          </div>
          <Button type="submit">Wyślij wiadomość</Button>
        </Card>
      </Card>
    </Card>
  );
};

export default Contact;
