import React, {  createContext, useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';

import Headers from './components/Headers';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Testimonials from './components/Testimonials';
export const dcontext = createContext()
function App() {
  const [data1,setData1] = useState("")
  const [callapi,setCallApi] = useState([])
  const [loading,setLoading] = useState(false)
  let getData = async ()=>{
    setLoading(true)
    let resp = await fetch(`https://api.npoint.io/f89acb9ee900ca95b8dc`)
       let data = resp.json()
       setCallApi(await data)
       xca(await data)
       setLoading(false)
  }
  let xca = (data)=>{
    let xc = data.map((cur)=>{
      return cur
    }).filter((dat)=> dat.id === 43102)
  setData1(xc[0].featuredImage.link)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <dcontext.Provider value={{callapi,data1,loading}}>
      <div className="App">
        <Headers />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Testimonials />
        <Page7 />
        <Footer />
    </div>
    </dcontext.Provider>
  );
}

export default App;
