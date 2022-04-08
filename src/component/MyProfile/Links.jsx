import React from "react";


const Links = props => (

    <div className="Link">
        <h4>Social Links:</h4>
        <ul>
            <li><a href="#">{props.SocialA}</a></li>
            <li><a href="#">{props.SocialB}</a></li>
            <li><a href="#">{props.SocialC}</a></li>
            <li><a href="#">{props.SocialD}</a></li>
        </ul>
    </div>
)

export default Links;