import React from "react";
import PricingCard from "./PricingCard";

function Pricing(){
    return (
        <section id="pricing">

        <h2>A Plan for Every Dog's Needs</h2>
        <p>Simple and affordable price plans for your and your dog.</p>
    
        <div class=" row">
    
          <div class="pricing-clmn card col-lg-4 col-md-6 "style={{right:"0.5rem"}} >
            
                <PricingCard heading="Chihuahua" h2="Free" line1="5 Matches Per Day"
                 line2="10 Messages Per Day" line3="Unlimited App Usage"  />
                 <button type="button" class="btn btn-outline-light btn-lg btn-block">Sign Up</button>
         
          </div>
    
          <div class="pricing-clmn  card col-lg-4 col-md-6" >

                 <PricingCard heading="Labrador" h2="$49 / mo" line1="Unlimited Matches"
                 line2="Unlimited Messages" line3="Unlimited App Usage" />
                 <button type="button" class="btn btn-light btn-lg btn-block" >Sign Up</button>
           
          </div>
    
          <div class="pricing-clmn  card col-lg-4 col-md-12" style={{left:"0.5rem"}}  >
                
                 <PricingCard heading="Mastiff" h2="$99 / mo" line1="Unlimited Matches"
                 line2="Unlimited Messages" line3="Unlimited App Usage" line4="Unlimited App Usage" />
                 <button type="button" class="btn btn-light btn-lg btn-block">Sign Up</button>
           
           </div>

      </div>
      </section>
    
    );
}
export default Pricing;