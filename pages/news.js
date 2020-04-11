import React, { useState, useEffect } from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

export default function News(){

  const [news, setNews] = useState("")

  useEffect(() => {

  }, [])



  return(s
    <div>
      <NavMenu color={'#7be3d2'}/>
      <Footer/>
    </div>
  );
}