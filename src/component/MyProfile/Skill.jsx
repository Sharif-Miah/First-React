import React from "react";


const Skill = props => (
    <div className="Skill">
        <h4>Skill:</h4>
        <ul>
            <li>{props.SkillA}</li>
            <li>{props.SkillB}</li>
            <li>{props.SkillC}</li>
        </ul>
    </div>
)

export default Skill;