
import {useEffect, useRef, useState } from 'react';

function Header() {
  const headerRef= useRef();
  useEffect(()=> {
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";

      }
      else{
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = " 60px 0";

      }
    })
  })
  const[links, setLinke] = useState(["Features", "Team", "Singin", "about"]);
  return (

    <header 
    ref={headerRef}
     className="pt-[60] fixed top-0 left-0 w-full z-50 transition-all duration-200">
      <div className="container mx-auto flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row ">
        <a href='/'>
        <img src="src/assets/images/logo.svg " alt="Logo-Img" />
        </a>
        <nav>
          <ul className='flex justify-end items-center gap-6 '>
            {links.map((link)=>(
              <li key={link}>
                <a href={'/${link.toLowerCase()}'}
                className="hover:opacity-[1] hover:underline transetion-opacity duration-300 ">{link}</a>
              </li>
            ))}
            
          </ul>
        </nav>
      </div>
    </header>
      
      
   
  )
}

export default Header
