"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillGithub } from "react-icons/ai";
import LinkedAccount from "./shared/LinkedAccount";
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav]=useState(false);
  const handleNav=()=>{
    setNav(!nav);

  }
  return(
    <div className="sticky top-0 w-full h-20 shadow-md z-[100] bg-white">
      
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
        <Link href={"/"}>
          <Image src={"/logo.png"}
           alt=""
            width={100}
             height={100} 
             className="w-16 h-16 rounded-full bg-[#54ca95]" />
          </Link>
          <div>
            <ul className="hidden md:flex items-center">
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
                <Link href={"/"}>About</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
                <Link href={"/skills"}>skills</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
                <Link href={"/contact"}>contact</Link>
              </li>
            </ul>
           
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size="20" />

            </div>
          </div>
      </div>

      <div className={`${nav ?"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":""}`}>
        <div className={`${nav ?" fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500":"fixed left-[-100%] top-0 p-10 ease-in duration-500"}`}>
          <div className="flex w-full items-center justify-between">
          <Link href={"/"}>
          <Image src={"/logo.png"} 
          alt="" 
          width={100}
           height={100} 
           className="w-16 h-16 rounded-full bg-[#54ca95]" />
          </Link>
          <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
            <AiOutlineClose/>

          </div>
          </div> 

          <div className="border-b border-gray-300 my-5">
            <p className="w-[85%] md:w-[90%] py-4"> Saad Waheed | Web Manager </p>
          </div>
          <div className="py-4 flex flex-col">
          <ul className=" uppercase text-sm">
            <Link href={"/"} >
            <li className="py-4 ">about</li>
            </Link>
            <Link href={"/skills"} >
            <li className="py-4 ">skills</li>
            </Link>
            <Link href={"/contact"} >
            <li className="py-4 ">contact</li>
            </Link>
          </ul>
          <div className="py-10">
            <p className="uppercase tracking-widest text-[#54ca95] w-full sm:w-[80%]">
              Let&apos;s Connect
            </p>
            <div className="flex justify-between items-center py-4 w-full sm:w-[80%]">
              <LinkedAccount url="www.facebook.com"> 
              <FaFacebook />
              </LinkedAccount>
              <LinkedAccount url="www.youtube.com"> 
              <AiFillYoutube />
              </LinkedAccount>
              <LinkedAccount url="www.facebook.com"> 
              <AiFillGithub />
              </LinkedAccount>

            </div>

          </div>
        </div>   
      </div>
    </div>
  </div>
  );}
export default Navbar