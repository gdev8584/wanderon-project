import React from 'react'
import './styles/Testimonials.css'
import star from './asserts/star01.png'

const Testimonials = () => {
  return (
    <div className="fifth_body">
  <div className="container">
    <div className="row">
      <h2 className="text-center">Testimonials</h2>
    </div>
    <div className="row">
      <div className="col">
        <div className="card mx-auto w-75 fifth_col">
          <div className="card-body">
            <div className="d-flex mx-4">
              <h5 className="card-title">Get ready for 5-star Experience with us</h5>
              </div>
              <div className="arrow">
                <i className="fas fa-angle-right"></i>
              </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 d-flex justify-content-center">
            <div className="col">
              <div className="card axc">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                    <h2 className='c1'>🙂</h2>
                    </div>
                    <div className="col-3">
                      <div className="row">
                        <h3>Reena</h3>
                      </div>
                      <div className="row r1">
                        <p>13 July 2019</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="row">
                        <img width={1} className="c2" src={star}/>
                        <img width={1} className="c3" src={star}/>
                        <img width={1} className="c4" src={star}/>
                        <img width={1} className="c5" src={star}/>
                        <img width={1} className="c6" src={star}/>
                      </div>
                   </div>
                  </div>
                  <p className="card-text txt1">It was fun travelling with wanderOn all the arrangement were perfect, manish
                  was our tour guide he was very careful and cooperative throughout the trip.........</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card axc">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                    <h2 className='c1'>🙂</h2>
                    </div>
                    <div className="col-3">
                      <div className="row">
                        <h3>Aayushi</h3>
                      </div>
                      <div className="row r1">
                        <p>20 July 2019</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="row">
                        <img width={1} className="c2" src={star}/>
                        <img width={1} className="c3" src={star}/>
                        <img width={1} className="c4" src={star}/>
                        <img width={1} className="c5" src={star}/>
                        <img width={1} className="c6" src={star}/>
                      </div>
                   </div>
                  </div>
                  <p className="card-text txt1">It was fun travelling with wanderOn all the arrangement were perfect, manish
                  was our tour guide he was very careful and cooperative throughout the trip.........</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card axc">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                    <h2 className='c1'>🙂</h2>
                    </div>
                    <div className="col-3">
                      <div className="row">
                        <h3>    Sunita Ahuja</h3>
                      </div>
                      <div className="row r1">
                        <p>15 June 2019</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="row">
                        <img width={1} className="c2" src={star}/>
                        <img width={1} className="c3" src={star}/>
                        <img width={1} className="c4" src={star}/>
                        <img width={1} className="c5" src={star}/>
                        <img width={1} className="c6" src={star}/>
                      </div>
                   </div>
                  </div>
                  <p className="card-text txt1">It was fun travelling with wanderOn all the arrangement were perfect, manish
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