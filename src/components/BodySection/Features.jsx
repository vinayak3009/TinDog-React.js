import React from "react";
import FeatureCard from "./FeatureCard";

function features(){
    return(
        <div>
                <section id="features" >
                <div className="container">
                <div class="row  ">
                <FeatureCard icon="far fa-check-circle fa-4x icon-line1" 
                heading="Easy to use." text="So easy to use, even your dog could do it." />

                <FeatureCard icon="fas fa-bullseye fa-4x icon-line1" 
                heading="Elite Clientele" text="We have all the dogs, the greatest dogs." />

                <FeatureCard icon="fas fa-heart fa-4x icon-line1" 
                heading="Guaranteed to work." text="Find the love of your dog's life or your money back." />   
                
                </div>
                </div>

                </section>
        </div>
    );
}
export default features;