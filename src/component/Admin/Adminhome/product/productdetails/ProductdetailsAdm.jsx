import React from 'react'
import './ProductdetailsAdm.scss'
import { Link } from 'react-router-dom'

const Productdetails = () => {
  return (
    <div>
      <div className="product-details">
        <div className="head">
            <h4>product details</h4>
        </div>
        <div className="row main">
            <div className="col-lg-6">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active caro">
      <img src="/coco.webp" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item caro">
      <img src="/coco in.webp" class="d-block w-100" alt=""/>
    </div>
    {/* <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div> */}
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
            <div className="col-lg-6">
                <div className="content">
                <div className="product-name">
                    <h5>Note 5</h5>
                </div>
                <div className="product-title">
                    <p>Eade perfum spray</p>
                </div>
                <div className="product-description">
                    <p>Irresistibly sensual, irrepressibly spirited. A sparkling, bold ambery fragrance that recalls a daring young Coco Chanel. An absolutely modern composition with a strong yet surprisingly fresh character.</p>
                </div>
                    <div className="product-price">
                        <h6>$105</h6>
                    </div>
                   <div className="edit-button">
                   <Link className='edit-btn'>Edit</Link>
                   </div>

                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetails
