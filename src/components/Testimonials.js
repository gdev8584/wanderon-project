import React from 'react'
import './styles/Testimonials.css'
import star from './asserts/star01.png'

const Testimonials = () => {
  return (
    <div class="fifth_body">
  <div class="container">
    <div class="row">
      <h2 class="text-center">Testimonials</h2>
    </div>
    <div class="row">
      <div class="col">
        <div class="card mx-auto w-75 fifth_col">
          <div class="card-body">
            <div class="d-flex mx-4">
              <h5 class="card-title">Get ready for 5-star Experience with us</h5>
              </div>
              <div class="arrow">
                <i class="fas fa-angle-right"></i>
              </div>
          </div>
          <div class="row row-cols-1 row-cols-lg-4 d-flex justify-content-center">
            <div class="col">
              <div class="card axc">
                <div class="card-body">
                  <div class="row">
                    <div class="col-3">
                    <h2 className='c1'>🙂</h2>
                    </div>
                    <div class="col-3">
                      <div class="row">
                        <h3>Reena</h3>
                      </div>
                      <div class="row r1">
                        <p>13 July 2019</p>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="row">
                        <img width={1} class="c2" src={star}/>
                        <img width={1} class="c3" src={star}/>
                        <img width={1} class="c4" src={star}/>
                        <img width={1} class="c5" src={star}/>
                        <img width={1} class="c6" src={star}/>
                      </div>
                   </div>
                  </div>
                  <p class="card-text txt1">It was fun travelling with wanderOn all the arrangement were perfect, manish
                  was our tour guide he was very careful and cooperative throughout the trip.........</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card axc">
                <div class="card-body">
                  <div class="row">
                    <div class="col-3">
                    <h2 className='c1'>🙂</h2>
                    </div>
                    <div class="col-3">
                      <div class="row">
                        <h3>Aayushi</h3>
                      </div>
                      <div class="row r1">
                        <p>20 July 2019</p>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="row">
                        <img width={1} class="c2" src={star}/>
                        <img width={1} class="c3" src={star}/>
                        <img width={1} class="c4" src={star}/>
                        <img width={1} class="c5" src={star}/>
                        <img width={1} class="c6" src={star}/>
                      </div>
                   </div>
                  </div>
                  <p class="card-text txt1">It was fun travelling with wanderOn all the arrangement were perfect, manish
                  was our tour guide he was very careful and cooperative throughout the trip.........</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card axc">
                <div class="card-body">
                  <div class="row">
                    <div class="col-3">
                    <h2 className='c1'>🙂</h2>
                    </div>
                    <div class="col-3">
                      <div class="row">
                        <h3>    Sunita Ahuja</h3>
                      </div>
                      <div class="row r1">
                        <p>15 June 2019</p>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="row">
                        <img width={1} class="c2" src={star}/>
                        <img width={1} class="c3" src={star}/>
                        <img width={1} class="c4" src={star}/>
                        <img width={1} class="c5" src={star}/>
                        <img width={1} class="c6" src={star}/>
                      </div>
                   </div>
                  </div>
                  <p class="card-text txt1">It was fun travelling with wanderOn all the arrangement were perfect, manish
                  was our tour guide he was very careful and cooperative throughout the trip.........</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Testimonials