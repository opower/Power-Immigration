import React, { useState, useEffect } from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import axios from 'axios';
import Card from '../components/Card';
import { Container } from '@material-ui/core';

export default function News(){

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    axios.get('http://newsapi.org/v2/everything?' +
    'sources=cbc-news&' +
    'q=Immigration&' +
    'q=border&' +
    'q=immigration&' +
    'from='+`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()-14}`+ '&' +
    `apiKey=${process.env.NEWS}`)
    .then(function(response) {
        setArticles(response.data.articles);
        console.log(articles)
    })
  }, [JSON.stringify(articles)])

  return(
    <div>
      <NavMenu color={'#7be3d2'}/>
      <Container>
        <h2>Latest Canadian Immigration News</h2>
        <Card articles={articles}/>
      </Container>
      <Footer/>
    </div>
  );
}