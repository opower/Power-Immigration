import React, { useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavMenu(props){

  const [navColor, setColor] = useState(props.color);
  const navRef = useRef()
  navRef.current = navColor;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 || props.color ) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const styles={
    nav: {
      backgroundColor:`${ navColor ? '#7be3d2' : 'transparent' }`,
      position:'sticky',
      top:0,
      transition: '.5s ease',
      zIndex:2,
      display:'flex',
      justifyContent:'space-between'
    },
    h3:{
      color:`${ navColor ? 'white' : 'transparent' }`,
      margin:'auto',
      marginLeft:'2rem',
      fontSize:'1.4rem'
      // paddingTop:'1rem',
    }
  }


  return(
    <>
      <div className='smallNav'style={{display:'none'}}>
        <FontAwesomeIcon icon={faBars} style={{color:'white', height:20, width:20}}/>
      </div>
      <div style={styles.nav} className='nav'>
        <h3 style={styles.h3}>POWER IMMIGRATION & CONSULTING</h3>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/services"><a>Services</a></Link></li>
          <li><Link href="/news"><a>News</a></Link></li>
          <li><Link href="/book"><a>Book A Consultation</a></Link></li>
        </ul>
        <style jsx>{`
          h3{
            font-family:'Roboto Condensed';
          }
          ul{
            display:flex;
            justify-content:flex-end;
            padding-top: 2rem;
            padding-bottom: 2rem;
            margin:0
          }
          li{
            list-style:none;
            margin-right:2rem;
          }
          a{
            text-decoration:none;
            color: white;
            letter-spacing:2px;
          },
        
        `}</style>
      </div></>
  );

}