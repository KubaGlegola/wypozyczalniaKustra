import React from "react";
import Card from "../UI/Card";
import classes from "./Terms.module.css";
import { AiOutlineFilePdf } from "react-icons/ai";

const Terms = () => {
  return (
    <Card className={classes.termsCard}>
      <h1 className={classes.title}>Regulamin</h1>
      <p>
        <strong>
          Zasady wynajmu obowiązujące w firmie Wypożyczalnia Sprzętu Budowlanego
          - Łukasz Kustra:
        </strong>
      </p>
      <p>
        Niezbędne dokumenty jeżeli klientem jest firma:
        <ul>
          <li>dokument nadania NIP</li>
          <li>dokument nadania REGON</li>
          <li>dokument poświadczający wpis do ewidencji</li>
          <li>upoważnienie do odbioru ze swojej firmy</li>
        </ul>
      </p>
      <p>
        Niezbędne dokumenty dla klientów indywidualnych:
        <ul>
          <li>dwa dokumenty tożsamości ze zdjęciem</li>
        </ul>
      </p>
      <AiOutlineFilePdf />
    </Card>
  );
};

export default Terms;
