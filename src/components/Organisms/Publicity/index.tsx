import React from "react";

import "./style.scss";

import post1 from "assets/img/post1.png";
import post2 from "assets/img/post2.png";
import post3 from "assets/img/post3.png";
import post4 from "assets/img/post4.png";

const Publicity = () => {
  return (
    <section className="publicity">
      <div className="publicity__container">
        <h1 className="publicity__title">
          Check out @foodieland_te on Instagram
        </h1>
        <p className="publicity__text">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
        <ul className="publicity__list">
          <li className="publicity__item">
            <img src={post1} />
          </li>

          <li className="publicity__item">
            <img src={post2} />
          </li>

          <li className="publicity__item">
            <img src={post3} />
          </li>

          <li className="publicity__item">
            <img src={post4} />
          </li>
        </ul>

        <a
          className="publicity__btnContainer"
          target="_blank"
          href="https://www.instagram.com/foodieland_te/"
        >
          <button className="publicity__button">
            Visit Our Instagram
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              // fillRule="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mainHeader__svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.83691 0H16.0869C19.8833 0 22.9619 3.07862 22.9619 6.875V15.125C22.9619 18.9214 19.8833 22 16.0869 22H7.83691C4.04054 22 0.961914 18.9214 0.961914 15.125V6.875C0.961914 3.07862 4.04054 0 7.83691 0ZM16.0869 19.9375C18.7407 19.9375 20.8994 17.7787 20.8994 15.125V6.875C20.8994 4.22125 18.7407 2.0625 16.0869 2.0625H7.83691C5.18316 2.0625 3.02441 4.22125 3.02441 6.875V15.125C3.02441 17.7787 5.18316 19.9375 7.83691 19.9375H16.0869Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.46191 11C6.46191 7.96263 8.92454 5.5 11.9619 5.5C14.9993 5.5 17.4619 7.96263 17.4619 11C17.4619 14.0374 14.9993 16.5 11.9619 16.5C8.92454 16.5 6.46191 14.0374 6.46191 11ZM8.52441 11C8.52441 12.8948 10.0672 14.4375 11.9619 14.4375C13.8567 14.4375 15.3994 12.8948 15.3994 11C15.3994 9.10388 13.8567 7.5625 11.9619 7.5625C10.0672 7.5625 8.52441 9.10388 8.52441 11Z"
                fill="white"
              />
              <circle cx="17.8745" cy="5.0875" r="0.732875" fill="white" />
            </svg>
          </button>
        </  a>
      </div>
    </section>
  );
};

export default Publicity;
