import React from "react";
import errorFood from "../../../assets/img/errorFood.png";
import "./style.scss";

const ErrorMessage = () => {
  return (
    <div className="messageErrorBox">
      <h1 className="messageErrorBox_text--red">Error 404</h1>
      <p className="messageErrorBox_text--bold">
        Desculpe! Esta pagina está indisponível! Tente mais tarde
      </p>
      <div className="messageErrorBox__image">
        <img src={errorFood} />
      </div>
    </div>
  );
};

export default ErrorMessage;
