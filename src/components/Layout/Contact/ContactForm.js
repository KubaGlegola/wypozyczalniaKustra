import React from "react";
import classes from "./ContactForm.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const ContactForm = () => {
  return (
    <form className={classes.form}>
      <Input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        pattern="[1-9][0-9]{2}-[0-9]{3}-[0-9]{3}"
        label="Wpisz numer telefonu"
        maxLength="9"
        placeholder="000-000-000"
      />
      <Input
        type="email"
        id="email"
        name="email"
        label="Wpisz adres e-mail"
        placeholder="example@domain.com"
      />
      <div className={classes.textarea}>
        <label htmlFor="message">Wpisz treść wiadomości</label>
        <textarea id="message" name="message" rows="10" placeholder="message" />
      </div>
      <Button type="submit">Wyślij wiadomość</Button>
    </form>
  );
};

export default ContactForm;
