import React, { useState } from 'react';
import {FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {

    const [contact, setContact] = useState ([
    { icon: "icon-phone.svg", text: "+20121212121" },
    { icon: "icon-email.svg", text: "example@fylo.com" },
    ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
   
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px]">
      <div className="container">
        <a href="/">
        <img src="src/assets/images/logo.svg" alt="logo-img"
        className="w-[175px] h-[66px] object-contain" />
        </a>

        <div className='flex justify-center flex-wrap flex-col md:flex-row gap-[30px] mt-[30px]'>
            <div className='flex items-start w-[340px] max-w-full gap[15px] '>
                <img src="src/assets/images/icon-location.svg" 
                alt="loction-img" className='w-[18px] h-[18px] object-contain'
                 />
                <p className="font-normal text-sm tracking-[0.8px] ml-3">
                    Lorem ipsu"t, consectetur adipisicing elit.
                    Est in quasi ratione quidem veniam,
                    recusandae dolor dignissimos aspernatur nam ab.
                </p>
            </div>
            <div>
                {contact.map((item)=>(
                    <div key={item.text} className='flex items-center gap[15px] mb-[15px] last-of-type:mb-0 '>
                        <img src={`src/assets/images/${item.icon}`} 
                        alt="icon" className="w-[18px] h-[18px] object-contain " 
                        />
                        <p className='ml-4'>{item.text}</p>
                    </div>
                ))}
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-2  gap-[20px] text-base'>
                {links.map((link)=>(f
                    <li key={link}>
                    <a 
                    href={`/${link.toLowerCase()}`}
                    className='hover:text-primary transition-colors duration-300 text-base'>
                    {link}
                    </a>
                    </li>
                  
                ))}
            </ul>
            <ul className='flex justify-center w-full gap-[15px] md:w-auto'>
                {socialIcons.map((item) =>(
                    <li key={item}>
                        <a href="" className='group'>
                            <div className='w-[40px] h-[40px]  element-center  border border-white rounded-full'>
                                {item === "facebook" ?
                                (<FaFacebookF  className='group-hover:text-primary transition-all decoration-300'/> ):
                                item === "twitter" ?
                                ( <FaTwitter  className='group-hover:text-primary transition-all decoration-300' /> ):
                                (<FaInstagram  className='group-hover:text-primary transition-all decoration-300'/>)} 

                            </div>
                        </a>
                    </li>

                ))}
              

                
            </ul>
        </div>
        </div>
    </section>
  )
}
