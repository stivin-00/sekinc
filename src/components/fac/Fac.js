import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import "./Fac.css";

const Fac = () => {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <div className="bodyf">
        <div className="contentf">
          <h1 class="titlef">Frequently Asked Questions</h1>
          <div class="content content--card">

          {questions.map((question) => {
            return (
              <div class="cardf" key={question.id}>
              <h3 class="card__titlef">{question.title}</h3>
              <p class="card__bodyf">{question.info}</p>
            </div>
            );
          })}
          </div>
        </div>
      </div>

      <div className="containerq">
        <h3>frequently asked questions</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Fac;
