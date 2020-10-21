import React from "react";

function FeatureCard(props){
    return(
        
        <div className=" feature-box col-lg-4">
            <i class={props.icon}></i>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </div>
      

    )
}

export default FeatureCard;