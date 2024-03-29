"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("default");
  return (
    <div className="feq-style-one-area default-padding bg-gray">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-5">
            <div className="thumb-style-two">
              <img src="assets/img/thumb/7.jpg" alt="Image Not Found" />
              <h2>
                <strong>F</strong>AQ
              </h2>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="faq-style-one-info">
              <h2 className="title">{t("Home.faq_title")} </h2>
              <div
                className="accordion accordion-regular mt-35 mt-xs-15"
                id="faqAccordion"
              >
                <div className="faq-style-one">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {t("Home.faq_question_1")}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>{t("Home.faq_answer_1")}</p>
                    </div>
                  </div>
                </div>
                <div className="faq-style-one">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {t("Home.faq_question_2")}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>{t("Home.faq_answer_2")}</p>
                    </div>
                  </div>
                </div>
                <div className="faq-style-one">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      {t("Home.faq_question_3")}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>{t("Home.faq_answer_3")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
