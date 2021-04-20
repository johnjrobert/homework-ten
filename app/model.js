var MODEL = (function() {

    var homeContent = `
    
    <div class="hero">
    
  

    <h1 class="travelfly-header">travel-fly</h1>

    <p class="header-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
        Fugiat aliquid minus nemo sed est.</p>

    <div class="read-more">
        <a href="learn-more.html">READ MORE</a>
       
    </div>
</div>

<section class="promo-tours">

    <div class="isreal">
        <h1 class="isreal-header">ISREAL</h1>
        <h2 class="isreal-cost">From $1000</h2>
            <div class="learn-more">
                <a href="isreal.html">Learn More</a>
            </div>
    </div>
    <div class="usa">
        <h1 class="usa-header">U. S. A. </h1>
        <h2 class="usa-cost">From $1500</h2>
            <div class="learn-more">
                <a href="usa.html">Learn More</a></div>
    </div>
    <div class="aus">
        <h1 class="aus-header">Australlia</h1>
        <h2 class="aus-cost">From $1800</h2>
            <div class="learn-more">
                <a href="australlia.html">Learn More</a></div>
    </div>

</section>

<section class="booking-form">
    <div class="booking-header">Booking Form</div>
    <div class="line-one">
        <div class="line-one-name">
            <div class="name-text">
                name...
            </div>
        </div>
        <div class="line-one-email">
            <div class="email-text">email...</div>
        </div>
    </div>

    <div class="line-two">
        <div class="line-two-country">
            <div class="country-text">
                country...
            </div>
        </div>
        <div class="line-two-hotel">
            <div class="hotel-text">
                hotel...
            </div>
        </div>
    </div>

    <div class="line-three">
        <div class="line-three-check-in">Check-In</div>
        <div class="line-three-date">
            <div class="date-in">05/10/2020</div>
            <div class="calendar"></div>
        </div>
    </div>

    <div class="line-four">
        <div class="line-four-check-out">Check-Out</div>
        <div class="line-four-date">
            <div class="out-date">05/12/2020</div>
            <div class="calendar"></div>
        </div>
    </div>

    <div class="line-five">
        <div class="adult-text">Adult</div>
        <div class="adult">
            <div class="adult-arrow"></div>
        </div>
        <div class="children-text">Children</div>
        <div class="children">
            <div class="children-arrow"></div>
        </div>
        <div class="rooms-text">Rooms</div>
        <div class="rooms">
            <div class="rooms-arrow"></div>
        </div>


    </div>

    <div class="message">
        <div class="message-text">message...</div>
    </div>

    <div class="submit-button">Submit</div>

</section>

<footer>
    <div class="footer-content">
        <div class="logo"></div>
        <div class="copyright">Copyright 2019 travel-fly.  All rights reserved</div>
        <div class="social"></div>
    </div>
    
</footer>

    `

    var toursContent = `

    

    <div class="heroTours">
        <h1 class="heroTitle">TOURS:</h1>
    </div>
    <div class="toursPage">
        <div class="rowOne">
            <div class="isreal">
                <h1 class="isreal-header">ISRAEL</h1>
                <h2 class="isreal-cost">From $1000</h2>
                <div class="learn-more"><a href="isreal.html" class="learnMore">Learn More</a></div>
            </div>
            <div class="usa">
                <h1 class="usa-header">U.S.A</h1>
                <h2 class="usa-cost">From $1500</h2>
                <div class="learn-more"><a href="usa.html" class="learnMore">Learn More</a></div>
            </div>
            <div class="aust">
                <h1 class="aust-header">Australia</h1>
                <h2 class="aust-cost">From $1800</h2>
                <div class="learn-more"><a href="australlia.html" class="learnMore">Learn More</a></div>
            </div>
        </div>

        <div class="rowTwo">
            <div class="nz">
                <h1 class="nz-header">New Zealand</h1>
                <h2 class="nz-cost">From $1200</h2>
                <div class="learn-more"><a href="nz.html" class="learnMore">Learn More</a></div>
            </div>
            <div class="france">
                <h1 class="france-header">France</h1>
                <h2 class="france-cost">From $2500</h2>
                <div class="learn-more"><a href="france.html" class="learnMore">Learn More</a></div>
            </div>
            <div class="egypt">
                <h1 class="egypt-header">Egypt</h1>
                <h2 class="egypt-cost">From $900</h2>
                <div class="learn-more"><a href="egypt.html" class="learnMore">Learn More</a></div>
            </div>
        </div>

        <div class="rowThree">
            <div class="japan">
                <h1 class="japan-header">Japan</h1>
                <h2 class="japan-cost">From $1300</h2>
                <div class="learn-more"><a href="japan.html" class="learnMore">Learn More</a></div>
            </div>
            <div class="canada">
                <h1 class="canada-header">Canada</h1>
                <h2 class="canada-cost">From $2000</h2>
                <div class="learn-more"><a href="canada.html" class="learnMore">Learn More</a></div>
            </div>
            <div class="uae">
                <h1 class="uae-header">U.A.E.</h1>
                <h2 class="uae-cost">From $3000</h2>
                <div class="learn-more"><a href="uae.html" class="learnMore">Learn More</a></div>
            </div>
        </div>
    </div>

    <footer>
        <div class="footer-content">
            <div class="logo"></div>
            <div class="copyright">Copyright 2019 travel-fly.  All rights reserved</div>
            <div class="social"></div>
        </div>
    </footer>

    `

    var aboutContent = `
 
    
   
    <div class="about">
        <div class="aboutHeader">
            <h1 class="aheader">About</h1>
            <div class="bottomBorder"></div>
        </div>
        
        <div class="bottomBorder"></div>
        <p class="aboutPara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 

        </p>
    </div>
    <div class="client">
        <div class="clientHead">
           <h1 class="clientHeader"> CLIENT QUOTES:</h1>
           
        </div>
        <div class="bottomBorderTwo"></div>
        <div class="miranda">
            <div class="mirandaPic"></div>
            <div class="mirandaQuote">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

                <div class="byLine">-Miranda Brown</div>
            </div>
        </div>
        <div class="john">
            <div class="johnPic"></div>
            <div class="johnQuote">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

                <div class="byLineTwo">-Jonathon Wes</div>
            </div>
        </div>

    </div>
    <footer>
        <div class="footer-content">
            <div class="logo"></div>
            <div class="copyright">Copyright 2019 travel-fly.  All rights reserved</div>
            <div class="social"></div>
        </div>
    </footer>

    `

    var specialOffersContent = `

   
 
    

    <div class="special-offers">
        <div class="special-title">Special Offers:</div>
        <div class="barc">
            <div class="barc-image"></div>
            <div class="barc-text">
                <div class="barc-title">BARCELONA, SPAIN</div>
                <div class="barc-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
                <div class="learn-more">
                    <a href="contact.html">LEARN MORE</a></div>
            </div>
        </div>
        <div class="bangkok">
            <div class="bang-image"></div>
            <div class="bang-text">
                <div class="bang-title">BANGKOK, THAILAND</div>
                <div class="bang-para">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
                <div class="learn-more"><a href="contact.html">LEARN MORE</a></div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="footer-content">
            <div class="logo"></div>
            <div class="copyright">Copyright 2019 travel-fly.  All rights reserved</div>
            <div class="social"></div>
        </div>
    </div>

`

    var blogContent = `

    
    

    <div class="blog-title">BLOG:</div>

    <div class="blog">
        <div class="blog1">
            <div class="blueIcon">
                <div class="blue-button"></div>
            </div>
            <div class="blogPiece">
                <div class="blogImage"></div>
                <div class="blogText">
                    <div class="black-text">Sed et persipiatis unde omnis iste natus</div>
                    <div class="blue-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
                </div>
            </div>
        </div>

        <div class="blog2">
            <div class="blueIcon">
                <div class="blue-button"></div>
            </div>
            <div class="blogPiece">
                <div class="blogImage"></div>
                <div class="blogText">
                    <div class="black-text">Sed et persipiatis unde omnis iste natus</div>
                    <div class="blue-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
                </div>
            </div>
        </div>
    </div>

    
    <div class="footer">
        <div class="footer-content">
            <div class="logo"></div>
            <div class="copyright">Copyright 2019 travel-fly.  All rights reserved</div>
            <div class="social"></div>
        </div>
    </div>
    `

    var contactContent = `

   
    

    <div class="contact-title">CONTACT US:</div>

    <div class="middle">
        <div class="map"></div>
        <div class="contact-form">
            <div class="name">name...</div>
            <div class="address">email address...</div>
            <div class="company">comapny...</div>
            <div class="message">message...</div>
            <div class="submit">SEND MESSAGE</div>
        </div>
    </div>

    <div class="bottom">
        <div class="bottomPara">travel-fly Inc. <br>
            8901 Marmora Road,<br>
            Glasgow, D04 89GR.<br>
            Freephone:+1 800 559 6580<br>
            Telephone:+1 800 603 6035<br>
            FAX:+1 800 889 9898<br>
            E-mail: mail@travelfly.org</div>
        
    </div>




    <div class="footer">
        <div class="footer-content">
            <div class="logo"></div>
            <div class="copyright">Copyright 2019 travel-fly.  All rights reserved</div>
            <div class="social"></div>
        </div>
    </div>
    `


    var _getPageContent = function(pageId) {
        console.log("test" + pageId);
        
        $("#hello").html(eval(pageId));
    };

    return {
        getPageContent: _getPageContent
    }
})();