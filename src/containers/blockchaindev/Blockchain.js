import React, {useContext} from "react";
import "./Blockchain.scss";
import BlockchainSkill from "../../components/blockchainSkills/BlockchainSkill";
import {illustration, blockchainSection} from "../../portfolio";
import {Fade} from "react-reveal";
import ethereum from "../../assets/lottie/ethereum";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Blockchain() {
  const {isDark} = useContext(StyleContext);
  if (!blockchainSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="blockchaindev">
      <div className="blockchain-main-div">
        <Fade left duration={1000}>
          <div className="blockchain-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={ethereum} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/programmer.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="blockchain-text-div">
           
            <p
              className={
                isDark
                  ? "dark-mode subTitle blockchain-text-subtitle"
                  : "subTitle blockchain-text-subtitle"
              }
            >
              {blockchainSection.subTitle}
            </p>
            <BlockchainSkill />
            <div>
              {blockchainSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle blockchain-text"
                        : "subTitle blockchain-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
