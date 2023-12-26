import React from 'react'
// import './Home.css'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="all">
      <div className="navbar">
        <div className="row upper">
          <div className="col-lg-4 right-nav"></div>
          <div className="col-lg-8 left-nav">
            <h3>CHANEL</h3>
            <div className="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>            
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>          



            </div>
          </div>
        </div>
        <div className="lower">
          <a href="">PRODUCT</a>
          <a href="">CATEGORY</a>
          <a href="">ABOUT</a>          
          <a href="">CONTACT</a>          
          
        </div>
          

      </div>
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
