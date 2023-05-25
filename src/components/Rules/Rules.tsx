import "./Rules.css";
import rulesImage from "../../assets/images/image-rules-bonus.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import { useState } from "react";

const Rules = () => {
  const [modalOpen, setModelOpen] = useState(false);
  return (
    <div className="button-container">
      <button onClick={() => setModelOpen(true)}>RULES</button>
      {modalOpen && (
        <div className="modal-container">
          <div className="information-container">
            <div className="rules-text-container">
              <h2>RULES</h2>
              <img
                src={closeIcon}
                alt="close"
                onClick={() => setModelOpen(false)}
              ></img>
            </div>
            <img className="rules-image" src={rulesImage} alt="rules"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rules;
