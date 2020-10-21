import React from "react";


function PricingCard(props){
    return(
        <div>
        <div className="card-header">
        <h3>{props.heading}</h3>
        </div>
        <div className="card-body">
        <h2>{props.h2}</h2>
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.line3}</p>
        <p>{props.line4}</p>

        </div>
        </div>
    );
}

export default PricingCard;