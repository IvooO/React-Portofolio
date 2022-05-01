import React from "react";
import "./BlockchainSkill.scss";
import {blockchainSection} from "../../portfolio";


export default function BlockchainSkill() {
  return (
    <div>
      <div className="blockchain-skills-main-div">
        <ul className="dev-icons">
          {blockchainSection.blockchainSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="blockchain-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>

    
  );
}
