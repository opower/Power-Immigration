import React, { useState, useEffect } from 'react';
import img from '../../pages/assets/iccrc.png';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function Quote(props){

  const quotes ={
    0:{
      quote:'Samantha is enthusiastic about helping others. She is professional, openminded and can think outside the box.'
    },
    1:{
      quote:'I admire her passion for her work and the way she constantly strives to learn more to help her career'
    },
    2:{
      quote:'I admire her passion for her work and the way she constantly strives to learn more to help her career'
    }
  }

  const [current, setCurrent] = useState(quotes[2]);
  const [active, setActive] = useState(0);

  const slideShow = () => {
    const length = Object.keys(quotes).length;
    setActive(active + 1);
    if(active >= length - 1){
      setActive(0);
      setCurrent(quotes[active])
    } else {
      setCurrent(quotes[active])
    }
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      slideShow()
    }, 6000);
    return () => clearInterval(interval)
  }, [quotes])


  const styles = {
    card:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      margin:'40px auto',
      maxWidth: '660px',
    },
    p:{
      textAlign:'center',
      marginBottom:20,
    },
    p1:{
      fontSize:'1.5rem',
      fontStyle:'italic',
      textAlign:'center',
      marginBottom:20,
      fontFamily:'Playfair Display'
      
    },
    container:{
      display:'flex',
    },
    span:{
      height:20,
      width:20,
      margin: '0 5px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    outer:{
      display:'flex',
      
    },
    aside:{
      padding:'4rem'
    }

  }

  return(
    <Container component='main' maxWidth='lg'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} style={{alignSelf:'center'}}>
          <div style={styles.card} className='testimonials'>
           <p style={styles.p1}>"{current.quote}"</p>
           <div style={styles.container}>
             {Object.keys(quotes).map(index => (
              <span 
              data-quote={index}
              key={index}
              style={styles.span}/>
            ))}
          </div>
            <style jsx>{`
              span[data-quote="${active}"]:before{
                background-color:#7be3d2;
              }
              span:before{
                content:' ';
                height:7px;
                width:7px;
                border-radius:50%;
                background-color:cadetblue;
                transition: background-color 0.3s ease-in;
              }
            `}</style>
        </div>

        </Grid>
        <Grid item xs={12} sm={4} style={{margin:'40px auto', textAlign:'center'}} className='image'>
        <h4 style={{fontFamily:'Roboto Condensed', color:'#404040'}}>Power Immigration and Consulting is licensed by the Immigration Consultants of Canada Regulatory Council.</h4>
         <img src={img} alt='iccrc'style={{width:'100%', height:'auto'}}/>
          
        </Grid>
      </Grid>

    </Container>
  );
}

