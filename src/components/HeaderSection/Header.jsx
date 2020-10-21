import React from "react";

function Header(){
    return(
        <section id="home"> 
        <div class="header-section">
        <div class="row">

        <div class="col-lg-6 ">
        <h1>Meet new and interesting dogs nearby.</h1>
        <button type="button" class="btn btn-dark btn-lg btn-block  download-button"><i class="fab fa-google-play fa-lg"> Download</i></button>
        <button type="button" class="btn btn-outline-light btn-lg btn-block download-button"><i class="fab fa-apple  fa-lg "> Download</i></button>
        </div>

        <div class="col-lg-6 ">
        <img class="mydog" src="../images/iphone6.png" alt="mydog" />
       
        </div>
        </div>
        </div>
        </section>
       
    )
}

export default Header;