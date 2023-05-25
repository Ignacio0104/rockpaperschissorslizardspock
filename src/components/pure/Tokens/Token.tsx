import testIcon from "../../../assets/images/icon-lizard.svg";
import { ITokenObject } from "../../Options/Options";
import { useRef, useState, useEffect } from "react";
import "./Token.css";

interface ITokens {
  token: ITokenObject;
  handleChange: (arg: ITokenObject) => void;
  selectedToken: ITokenObject | null;
  isComputer: boolean;
  isWinner: boolean;
}

const Token = ({
  token,
  handleChange,
  selectedToken,
  isComputer,
  isWinner,
}: ITokens) => {
  useEffect(() => {
    console.log(isWinner);
  }, [isWinner]);

  return (
    <div
      className={` ${
        isComputer ? "token-container-opponent" : "token-container"
      } ${token.name} ${token.name === selectedToken?.name ? "move" : ""} ${
        isWinner ? "winner" : ""
      }`}
    >
      <div className="imagen-container" onClick={() => handleChange(token)}>
        <img className="icon" src={token.image} alt="icon"></img>
      </div>
    </div>
  );
};

export default Token;
