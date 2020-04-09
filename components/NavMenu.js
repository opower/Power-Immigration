import React, { useState, useEffect, useRef} from 'react';
import Link from 'next/link';

export default function NavMenu(props){

  const [navColor, setColor] = useState(props.color);
  const navRef = useRef()
  navRef.current = navColor;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
      transition: '.5s ease'
    }
  }


  return(
      <div style={styles.nav}>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/services"><a>Services</a></Link></li>
          <li><Link href="/news"><a>News</a></Link></li>
          <li><Link href="/book"><a>Book A Consultation</a></Link></li>
        </ul>
        <style jsx>{`
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
      </div>
  );

}