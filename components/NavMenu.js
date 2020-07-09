import React, { useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {SlideDown} from 'react-slidedown'


export default function NavMenu(props){

  const [navColor, setColor] = useState(props.color);
  const [toggle, setToggle] = useState(false);
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

  const showNav = () =>{
    setToggle(prev => !prev);
  }

  const styles={
    nav: {
      backgroundColor:`${ navColor ? 'cadetblue' : 'transparent' }`,
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
    },
    smallNav:{
      display:'none', 
      backgroundColor:'cadetblue', 
      padding:'1rem',
    },
    navList:{
      backgroundColor:'cadetblue',
      color:'white',
      listStyle:'none',
      display:'none',
    }
  }


  return(
    <><div style={{position:'sticky',top:0, zIndex:'2'}}>
      <div className='smallNav'style={styles.smallNav}>
        <h4 style={{color:'white', fontFamily:'Roboto Condensed', margin:'1rem 0'}}>POWER IMMIGRATION & CONSULTING</h4 >
        <button onClick={showNav} style={{cursor:'pointer', border:0, backgroundColor:'cadetblue'}}>
          <FontAwesomeIcon icon={faBars} style={{color:'white', height:20, width:20}}/> 
        </button>
      </div>
      <SlideDown className={'my-dropdown-slidedown'}>
        {toggle ? <div style={styles.navList} className='navList'>
            <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/services"><a>Services</a></Link></li>
              <li><Link href="/news"><a>News</a></Link></li>
              <li><Link href="/book"><a>Book A Consultation</a></Link></li>
            </ul>
        <style jsx>{`
        .navList a{
          color:white;
          opacity:100%;
          text-decoration:none;
        }
        li{
          margin-bottom:.5rem
        }
        ul{
          list-style:none;
          margin-top: .5rem;
          text-align: center;
          margin: auto;
          padding-left: 0;
          padding-bottom: .5rem;
        }
        `}</style>
          </div>   : null}
      </SlideDown>
        </div>
      <div style={styles.nav} className='nav'>
        <h3 style={styles.h3}>POWER IMMIGRATION & CONSULTING</h3>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/services"><a>Services</a></Link></li>
          {/* <li><Link href="/news"><a>News</a></Link></li> */}
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
            margin-right:1.6rem;
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