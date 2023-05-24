import testIcon from "../../../assets/images/icon-lizard.svg";
import { ITokenObject } from "../../Options/Options";
import "./Token.css";

interface ITokens {
  token: ITokenObject;
  handleChange: (arg: ITokenObject) => void;
  selectedToken: ITokenObject | null;
}

const Token = ({ token, handleChange, selectedToken }: ITokens) => {
  return (
    <div
      className={`token-container ${token.name} ${
        token.name === selectedToken?.name ? "move" : ""
      }`}
    >
      <div className="imagen-container" onClick={() => handleChange(token)}>
        <img className="icon" src={token.image} alt="icon"></img>
      </div>
    </div>
  );
};

export default Token;
