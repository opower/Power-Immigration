import React, { useState, useEffect } from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import axios from 'axios';
import Card from '../components/Card';
import { Container } from '@material-ui/core';
import image from './assets/texture1.png';

export default function News(){

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    axios.get('http://newsapi.org/v2/everything?' +
    'sources=cbc-news&' +
    'q=Immigration&' +
    'q=migration&' +
    'q=border&' +
    'q=immigration&' +
    'from='+`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()-14}`+ '&' +
    'apiKey=caf81abd7b1d4e91abad7c03cb1ed3c7')
    .then(function(response) {
        setArticles(response.data.articles);
    })
  }, [JSON.stringify(articles)])

  return(
    <div style={{background: `url(${image})`}}>
      <NavMenu color={'cadetblue'}/>
      <Container>
        <h1 style={{textAlign:'center', color:'#404040'}}>Latest Canadian Immigration News</h1>
        {/* <div className='separator'>♦</div> */}
        <Card articles={articles}/>
      </Container>
      <Footer/>
    </div>
  );
}