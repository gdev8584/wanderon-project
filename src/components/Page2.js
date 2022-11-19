import React, { useContext } from 'react'
import Slider from "react-slick";
import './styles/Page2.css'
import settings from "./setting"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Next from './asserts/chevron-circled.svg'
import { dcontext } from '../App';
import Paragraph from './Paragraph';

const Page2 = () => {
    const data = useContext(dcontext)
    const {callapi,loading} = data;
    let filterArray = [44566, 30980, 31894,6120,43750,40479,40621,39483,42155,41026,43694]
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
    <div className='second'>
        <div className='scombine d-flex justify-content-center'>
            <div className='st mx-4'></div>
            <h1 className='sm mx-2'>Featured</h1>
            <div className='sb mx-4'></div>
        </div>
        <div style={{ margin: 30,position:"relative",right:0,zIndex:1}} className="btn-aa">
        <button style={{
        position:"absolute",left:"10%",transform:"translateY(160px)"}} onClick={() => slider.current.slickPrev()}><img className="rotateImg" width={60} src={Next} alt="Next" /></button>
        <button
          style={{ marginLeft: 15,position:"absolute",right:"10%",transform:"translateY(160px)" }}
          onClick={() => slider.current.slickNext()}
        >
          <img width={60} src={Next} alt="Next" />
        </button>
      </div>

      <Slider className='text-center' ref={slider} {...settings}>
      {result.map((item, index) => {
          return (
            <div className="card mb-3">
                <img src={item.featuredImage.link} className="card-img-top simg" alt={item.featuredImage.altText} />
                <div className='d-flex justify-content-between pt-2 px-3 s-slug text-success'>
                    <div>{item.featuredImage.title}</div>
                    <div><i class="fas fa-share-alt"></i></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-start text-capitalize">{item.title}</h5>
                    <p className="card-text text-start"><Paragraph /></p>
                    <div className='d-flex jusify-content-start'>
                    <span class="badge rounded-pill text-bg-light sv">{item.tags[0].name}</span>
                    <span class="badge rounded-pill text-bg-light sv">{item.tags[1].name}</span>
                    </div>
                    <p className="card-text"><small className="text-muted d-flex justify-content-between p-4">
                    <div>
                    {d(item.date)}
                    </div>
                    <div>
                    <i class="fas fa-eye"></i> 10k Viewers
                    </div></small></p>
                </div>
            </div>
          )
        })}
      </Slider>
      </div>
  )
}

export default Page2