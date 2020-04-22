import React from 'react';
import { Container } from '@material-ui/core';

export default function Template(props){

  const{title, headline, sum, h4, services} = props.obj;

  return(
    <Container>
      <h2>{title}</h2>
      <h3>{headline}</h3>
      <p>{sum}</p>
      <h4>{h4}</h4>
      <ul>
        {services.map(service => {
          return(<li key={service}>{service}</li>);
        })}
      </ul>
    </Container>
  );
}