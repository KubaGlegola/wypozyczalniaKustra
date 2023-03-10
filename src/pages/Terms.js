import React, { Fragment } from "react";
import classes from "./Terms.module.css";
import { AiOutlineFilePdf } from "react-icons/ai";
import warunkiNajmu from "../assets/warunkiNajmu.pdf";
import Card from "../components/UI/Card";
import rulesBcg from "../assets/rules.jpg";
import Hero from "../components/Layout/Hero";
import { CSSTransition } from "react-transition-group";

const Terms = () => {
  return (
    <Fragment>
      <Hero imgSrc={rulesBcg}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="example"
        >
          <Card className={classes.container}>
            <h1>Regulamin</h1>
          </Card>
        </CSSTransition>
      </Hero>
      <Card className={classes.termsCard}>
        <h1 className={classes.title}>Regulamin</h1>
        <p>
          <strong>
            Zasady wynajmu obowiązujące w firmie Wypożyczalnia Sprzętu
            Budowlanego - Łukasz Kustra:
          </strong>
        </p>
        <p>Niezbędne dokumenty jeżeli klientem jest firma:</p>
        <ul>
          <li>dokument nadania NIP</li>
          <li>dokument nadania REGON</li>
          <li>dokument poświadczający wpis do ewidencji</li>
          <li>upoważnienie do odbioru ze swojej firmy</li>
        </ul>

        <p>Niezbędne dokumenty dla klientów indywidualnych:</p>
        <ul>
          <li>dwa dokumenty tożsamości ze zdjęciem</li>
        </ul>
        <p>
          Najemca zobowiązany jest do zapoznania się z warunkami umowy najmu,
          która dostępna jest do pobrania poniżej. W przypadku braku takiej
          możliwości zostanie ona udostępniona przez Wynajmującego w formie
          papierowej.
        </p>
        <a
          className={classes.pdfContainer}
          href={warunkiNajmu}
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineFilePdf className={classes.icon} />
          <strong>Warunki umowy najmu</strong>
        </a>
      </Card>
    </Fragment>
  );
};

export default Terms;
