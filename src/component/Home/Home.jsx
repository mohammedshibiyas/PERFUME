import React from 'react'
// import './Home.css'
import './Home.scss'
import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar'

const Home = () => {
  return (
    <div>
      <div className="all">

      <Navbar/>
      <div className="banner">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active main-image">
      <img src="/main banner.webp" class="d-block w-100" alt="..."/>
      <div className="image-details">
        <h6>fragrances</h6>
        <h4>give wonder,give chanel</h4>
        <p>Explore a selection of fragrence gift for holidays.</p>
        <button>shop now</button>
      </div>
    </div>
    <div class="carousel-item main-image">
      <img src="/carosel2.webp" class="d-block w-100" alt="..."/>
      <div className="image-details">
        <h6>fragrances</h6>
        <h4>give wonder,give chanel</h4>
        <p>Explore a selection of fragrence gift for holidays.</p>
        <button>shop now</button>
      </div>
    </div>
    <div class="carousel-item main-image">
      <img src="/blue banner.jpg" class="d-block w-100" alt="..."/>
      <div className="image-details">
        <h6>fragrance</h6>
        <h4>bleu de chanel</h4>
        <button>shop now</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     </div>

   <div className="recomend">
   <h4>RECOMMENDED FOR YOU</h4>
   <div className="products">
    <div className="prod-1">
     
     <img src="/n5.webp" alt="" />
      <div className="details">
        <h5>NOTE 5</h5>
        <p>Eau de Parfum Spray</p>
        <h5>$105</h5>
        <a href="">ADD TO BAG</a>
      </div>
     
    </div>

    <div className="prod-1">
     
     <img src="/black.webp" alt="" />
      <div className="details">
        <h5>BLEU DE CHANEL</h5>
        <p>Eau de Parfum Spray</p>
        <h5>$125</h5>
        <a href="">ADD TO BAG</a>
      </div>
     
    </div>

    <div className="prod-1">
     
     <img src="/prod2.webp" alt="" />
      <div className="details">
        <h5>CHANCE EAU TENDRE</h5>
        <p>Eau de Parfum Spray</p>
        <h5>$90</h5>
        <a href="">ADD TO BAG</a>
      </div>
     
    </div>


   </div>

   {/* Antaues */}

   <div className="row Antaues">
    <div className="col-lg-6 anta-detail">
      <h6>FRAGRENCES</h6>
      <h4>ANTAEUS EAU DE <br/>TOILETTE</h4>
      <p>An aromatic,leather accented scent enhanced by <br />
      woody and spicy notes.
      </p>
      <a href="">SHOP NOW</a>


    </div>
    <div className="col-lg-6 anta-image">
      <img src="/antaeus.webp" alt="" />
    </div>
   </div>


   
   <div className="row Antaues">
   <div className="col-lg-6 anta-image">
      <img src="/Les.webp" alt="" />
    </div>
    <div className="col-lg-6 anta-detail">
      <h6>FRAGRENCES</h6>
      <h4>LES EXCLUSIFES <br/>DE CHANEL</h4>
     
      <a href="">SHOP NOW</a>


    </div>
   
   </div>

   {/*shop by category  */}
   <div className="shop-category">
    <h4>SHOP BY CATEGORY</h4>
   <div className=" category">
   <div className="category-detail">
      <img src="/women.webp" alt="" />
      <h6>women</h6>
    </div>

    <div className="category-detail">
      <img src="/men.webp" alt="" />
      <h6>MEN</h6>
    </div>

    <div className="category-detail">
      <img src="/les ex.webp" alt="" />
      <h6>LES EXCLUSIFES</h6>
    </div>

    <div className="category-detail">
      <img src="/les eaux.webp" alt="" />
      <h6>LES EAUX</h6>
    </div>
   </div>
   </div>

   {/* dark banner */}

      <div className="dark-banner">
        <img src="/dark banner.webp" alt="" />
       <div className="dark-detail">
       <h4>BLEU DE CHANEL <br />EAU DE PARFUM</h4>
       <a href="">discover</a>
       </div>
      </div>

      <div className="multi">
        <div className="multi1">
          <img src="/chanel gift.webp" alt="" />
          <div className="multi-detail">
            <h5>the chanel gift <br />generator</h5>
            <p>Find the perfect present with help from an advisor full of creativity.</p>
            <a href="">get started</a>
          </div>
        </div>

        <div className="multi1">
          <img src="/art.webp" alt="" />
          <div className="multi-detail">
            <h5>the art of detail</h5>
            <p>Elevate your gifts with exquisite wrapping created just for the holidays.</p>
            <a href="">learn more</a>
          </div>
        </div>
      </div>  


      {/* footer */}

      <div className="footer">
        <h2>chanel</h2>
          <div className="row roo">
            <div className="col-lg-3 col-sm-12 col-1">
              <h5>explore chanel.com</h5>
            <div className="links">
            <div> <a href="">Houte Couture</a></div>
             <div> <a href="">Fashion</a></div>
              <div><a href="">High Jewelley</a></div>
              <div><a href="">Fine Jewelley</a></div>
             <div> <a href="">Watches</a></div>
              <div><a href="">Eyewear</a></div>
              <div><a href="">Fragrence</a></div>
             <div> <a href="">Makeup</a></div>
             <div> <a href="">Skincare</a></div>
              <div><a href="">Skincare</a></div>
              <div><a href="">Sitemap</a></div>
            </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-1">
            <h5>Online services</h5>
            <div className="links">
            <div> <a href="">Payment Methods</a></div>
             <div> <a href="">Shipping Options</a></div>
              <div><a href="">My Accounts</a></div>
              <div><a href="">Returns</a></div>
             <div> <a href="">FAQ</a></div>
              <div><a href="">Care & Services</a></div>
              
            </div>

            </div>
            <div className="col-lg-3 col-sm-12 col-1">
            <h5>boutique services</h5>
            <div className="links">
            <div> <a href="">Store Locator</a></div>
             <div> <a href="">Book an Appointmet</a></div>
              
            </div>

            </div>
            <div className="col-lg-3 col-sm-12  col-1">
            <h5>the house of chanel</h5>
            <div className="links">
            <div> <a href="">Careers</a></div>
             <div> <a href="">Legal</a></div>
              <div><a href="">Privacy</a></div>
              <div><a href="">Donot sell or share my Personal <br /> Information</a></div>
             <div> <a href="">Report to Society</a></div>
              <div><a href="">Fighting Cunterfights</a></div>
              <div><a href="">Accessibility</a></div>
             <div> <a href="">California Transparency in Supply Chains</a></div>
             <div> <a href="">Skincare</a></div>
              <div><a href="">Skincare</a></div>
              <div><a href="">Sitemap</a></div>
            </div>
            </div>
          </div>
          <div className="footer-border">
          </div>

          <div className="bottom-footer">
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
          <i class="fa fa-linkedin" aria-hidden="true"></i>


          </div>

    
      </div>

   </div>
   </div>
    </div>
  )
}

export default Home
