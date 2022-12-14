import React, { useContext } from 'react'
import bag from './asserts/bag.png'
import Slider from "react-slick";
import './styles/Page3.css'
import settings from "./setting1"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Next from './asserts/chevron-circled.svg'
import { dcontext } from '../App';
import Paragraph from './Paragraph';

const Page5 = () => {
    const data = useContext(dcontext)
    const {callapi,loading} = data;
    let filterArray = [43694,32905,38915, 31894,41346,43750,43126,42380,36937,41026,43694]
    let result = callapi.filter((item)=> filterArray.includes(item.id))
    console.log(result)
    let d = (date)=>{
        let dx = new Date(date)
        var month = dx.getUTCMonth() + 1; //months from 1-12
        var day = dx.getUTCDate();
        var year = dx.getUTCFullYear();
        return year+"-"+month+"-"+day
    }
    const slider = React.useRef(null);

    if (loading) {
        return (
          <span>Loading...</span>
        )
      }
  return (
    <div className='third'>
        <div className='scombine d-flex justify-content-center'>
            <div className='st1'></div>
            <h1 className='sm'>Backpacking</h1>
            <h1 className='sm'> Trips</h1>
            <div className='sb1 mx-4'></div>
        </div>
        <div style={{ margin: 30,position:"relative",right:0,zIndex:1}} className="btn-aa">
        <button style={{
        position:"absolute",left:"34%",transform:"translateY(624px)"}} onClick={() => slider.current.slickPrev()}><img className="rotateImg" width={30} src={Next} alt="Next" /></button>
        <button
          style={{ marginLeft: 15,position:"absolute",right:"30.5%",transform:"translateY(623px)" }}
          onClick={() => slider.current.slickNext()}
        >
          <img width={30} src={Next} alt="Next" />
        </button>
      </div>

      <Slider className='text-center' ref={slider} {...settings}>
      {result.map((item, index) => {
          return (
            <div className="container text-center">
              <div className="row">
                <div className="col">
                <img src={item.featuredImage.link} className="card-img-top simg" alt={item.featuredImage.altText} />
                <div className='d-flex justify-content-between pt-2 px-1 text-success s-slug'>
                    <div>{item.featuredImage.title}</div>
                    <div><i className="fas fa-share-alt"></i></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-start text-capitalize">{item.title}</h5>
                    <p className="card-text text-start"><Paragraph /></p>
                    <div className='d-flex jusify-content-start'>
                    <span className="badge rounded-pill text-bg-light sv">{item.tags[0].name}</span>
                    <span className="badge rounded-pill text-bg-light sv">{item.tags[1].name}</span>
                    </div>
                    <p className="card-text"><small className="text-muted d-flex justify-content-between p-4">
                    <div>
                    {d(item.date)}
                    </div>
                    <div>
                    <i className="fas fa-eye"></i> 10k Viewers
                    </div></small></p>
                </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-outline-success" type="button">See More</button>
      </div>

      </div>
  )
}

export default Page5