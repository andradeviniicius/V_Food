import React from "react";
import imgLearnMore from "assets/img/learnMore.png";

import "./style.scss";

const LearnMore = () => {
  return (
    <section className="learnMore">
      <div className="learnMore__content">
        <h1 className="learnMore__title">
          Everyone can be a chef in their own kitchen
        </h1>
        <p className="learnMore__text">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <img
          src={imgLearnMore}
          className="learnMore__img"
          aria-label="Chef pointing to a plate and some ingredients are displayed on screen"
        />
        <button className="learnMore__button">Learn More</button>
      </div>
    </section>
  );
};

export default LearnMore;
