import React, { useState, useEffect } from 'react';
import michaelLogo from '../../assets/newlogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/slice/theme';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Navbar1() {
 const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);
 const theme = useSelector((state) => state.theme.theme);
 const dispatch = useDispatch();

 const navigate = useNavigate();


 useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY > 0) {
       setIsScrolled(true);
     } else {
       setIsScrolled(false);
     }
   };


   window.addEventListener('scroll', handleScroll);


   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, []);


 useEffect(() => {
   if (isMobileNavOpen) {
     document.body.style.overflow = 'hidden';
     document.documentElement.style.overflow = 'hidden';
   } else {
     document.body.style.overflow = 'auto';
     document.documentElement.style.overflow = 'auto';
   }


   return () => {
     document.body.style.overflow = 'auto';
     document.documentElement.style.overflow = 'auto';
   };
 }, [isMobileNavOpen]);


 return (
   <nav
     className={`${
       isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
     } fixed w-full flex items-center justify-between py-3 px-6 md:px-20 transition-all duration-300`}
   >
     <div className="flex gap-2 items-center">
       <img src={michaelLogo} alt="Logo" className="w-10 lg:w-28" />
     
     </div>


     {/* Desktop */}
     <div className="hidden md:flex gap-12 items-center">
       <div className="flex gap-7 items-center">
         <a
           href="/home"
           className={`${
             isScrolled ? 'text-black' : 'text-white'
           } hover:text-michael_gray_2 text-[14px]`}
         >
           Home
         </a>
         <a
           href="/map"
           className={`${
             isScrolled ? 'text-black' : 'text-white'
           } hover:text-michael_gray_2 text-[14px]`}
         >
           Michael
         </a>
         {/* <a
           href="#"
           className={`${
             isScrolled ? 'text-black' : 'text-white'
           } hover:text-michael_gray_2 text-[14px]`}
         >
           Lorem
         </a>
         <a
           href="#"
           className={`${
             isScrolled ? 'text-black' : 'text-white'
           } hover:text-michael_gray_2 text-[14px]`}
         >
           Lorem
         </a>
         <a
           href="#"
           className={`${
             isScrolled ? 'text-black' : 'text-white'
           } hover:text-michael_gray_2 text-[14px]`}
         >
           Lorem
         </a>
         <a
           href="#"
           className={`${
             isScrolled ? 'text-black' : 'text-white'
           } hover:text-michael_gray_2 text-[14px]`}
         >
           Lorem
         </a> */}
       </div>
       <div className="flex gap-3 items-center">
         <button onClick={() => navigate('/signin')} className={`${ isScrolled ? 'text-michael_red-100' : 'text-white'
           } border border-michael_red_100 px-4 font-medium py-1 rounded-lg text-[12px] hover:bg-michael_dark_red_50`}>
           Sign in
         </button>
         <button onClick={() => navigate('/register')} className="py-1 px-4 bg-michael_red_100 rounded-lg text-white text-[12px] hover:text-michael_gray_2">
           Register
         </button>
         <button
           onClick={() => dispatch(toggleTheme())}
           className="flex items-center justify-center p-2 rounded-full focus:outline-none"
         >
           {theme === 'light' ? (
             <FaSun className="text-white w-6 h-6" />
           ) : (
             <FaMoon className="text-michael_black_1 w-6 h-6" />
           )}
         </button>
       </div>
     </div>


     {/* Mobile */}
     <div className="md:hidden z-50 flex items-center">
       <button
         onClick={() => setIsMobileNavOpen(true)}
         className={`${
           isScrolled ? 'text-black' : 'text-white'
         } text-2xl focus:outline-none`}
       >
         <FaBars />
       </button>
     </div>


     <div
       className={`fixed top-0 left-0 h-full bg-white z-50 p-6 transform transition-transform duration-300 ${
         isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
       }`}
       style={{ width: '100%' }}
     >
       <button
         onClick={() => setIsMobileNavOpen(false)}
         className="text-michael_red_50 text-2xl mb-6 focus:outline-none"
       >
         <FaTimes />
       </button>
       <nav className="flex flex-col gap-6 justify-center text-center">
         <a
           href="/home"
           className="text-black font-semibold hover:text-michael_gray_2 text-[14px]"
         >
           Home
         </a>
         {/* <a
           href="#"
           className="text-black font-semibold hover:text-michael_gray_2 text-[14px]"
         >
           Lorem
         </a>
         <a
           href="#"
           className="text-black font-semibold hover:text-michael_gray_2 text-[14px]"
         >
           Lorem
         </a>
         <a
           href="#"
           className="text-black font-semibold hover:text-michael_gray_2 text-[14px]"
         >
           Lorem
         </a>
         <a
           href="#"
           className="text-black font-semibold hover:text-michael_gray_2 text-[14px]"
         >
           Lorem
         </a> */}
         <button onClick={() => navigate('/signin')} className="border border-michael_red_100 px-4 mx-auto text-michael_red_100 font-semibold py-2 rounded-lg w-[70%] text-[12px] hover:bg-michael_dark_red_50">
           Sign in
         </button>
         <button onClick={() => navigate('/register')} className="py-2 px-4 bg-michael_red_100 mx-auto rounded-lg font-semibold text-white text-[12px] w-[70%] hover:text-michael_gray_2">
           Register
         </button>
       </nav>
     </div>
   </nav>
 );
}


export default Navbar1;
