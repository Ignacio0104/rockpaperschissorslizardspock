import testIcon from "../../../assets/images/icon-lizard.svg";
import { ITokenObject } from "../../Options/Options";
import { useRef, useState, useEffect } from "react";
import "./Token.css";

interface ITokens {
  token: ITokenObject;
  handleChange: (arg: ITokenObject) => void;
  selectedToken: ITokenObject | null;
  isComputer: boolean;
}

const Token = ({ token, handleChange, selectedToken, isComputer }: ITokens) => {
  return (
    <div
      className={` ${
        isComputer ? "token-container-opponent" : "token-container winner"
      } ${token.name} ${
        token.name === selectedToken?.name ? "move" : ""
      } winner`}
    >
      <div className="imagen-container" onClick={() => handleChange(token)}>
        <img className="icon" src={token.image} alt="icon"></img>
      </div>
    </div>
  );
};

export default Token;
