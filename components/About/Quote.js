import React, { useState, useEffect } from 'react';
import img from '../../pages/assets/iccrc.png'

export default function Quote(props){

  const quotes ={
    0:{
      client:'Bob',
      quote:'Samantha is enthusiastic about helping others. She is professional, openminded and can think outside the box.'
    },
    1:{
      client:'Optimus Prime',
      quote:'I admire her passion for her work and the way she constantly strives to learn more to help her career'
    },
    2:{
      client:'Bugs Bunny',
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
      width: '680px',
    },
    p:{
      textAlign:'center',
      marginBottom:20,
    },
    p1:{
      fontSize:'1.4rem',
      fontStyle:'italic',
      textAlign:'center',
      marginBottom:20,
      
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
    <div style={styles.outer}>
      <div style={{textAlign:'center', margin:'4rem'}}>
        <div style={styles.card}>
          <p style={styles.p1}>"{current.quote}"</p>
          <p style={styles.p}>- {current.client}</p>
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
                background-color:cadetblue;
              }
            `}</style>
        </div>
      </div>
      <div style={styles.aside}>
        <p>Power Immigration and Consulting is licensed by the Immigration Consultants of Canada Regulatory Council.</p>
        <img src={img} alt='iccrc'/>
      </div>
    </div>
  );
}

