import React from 'react';
import { Container } from '@material-ui/core';

export default function Template(props){

  const{title, headline, sum} = props.obj;

  return(
    <Container style={{padding:'0 2rem'}}>
      <h2 style={{marginTop:'.5rem', color:'cadetblue', fontSize:'2rem'}}><b>{title}</b></h2>
      <h3 style={{color:'#4d4b4b'}}>{headline}</h3>
      <p>{sum}</p>
    </Container>
  );
}