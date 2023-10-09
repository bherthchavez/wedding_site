
import { useState } from 'react';
import pg2 from '../assets/pj2.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="z-40 bg-[#9f7648] font-sans fixed flex justify-between px-4 sm:px-8 items-center top-0 w-screen h-24 text-white">
        <div className="cursor-pointer">
          <img src={pg2} alt='Logo' className='w-12 h-12' />
        </div>
        <ul className="hidden md:flex gap-8">
          <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
            <span className='w-full tracking-widest  text-md text-[#fef1e2] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#fef1e2] to-[#fef1e2] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Paleta ng Kulay
            </span>
          </li>
          <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
            <span className='w-full tracking-widest  text-md text-[#fef1e2] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#fef1e2] to-[#fef1e2] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Iskedyul
            </span>
          </li>
          <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
            <span className='w-full tracking-widest  text-md text-[#fef1e2] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#fef1e2] to-[#fef1e2] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Mga Detalye
            </span>
          </li>
        </ul>

        {/* Humberger */}
        <div data-aos="fade-left" data-aos-delay="2000" className="relative  block md:hidden">
          <nav>
            <button
              className="w-12 h-11 relative focus:outline-none"
              onClick={handleNav}
            >
              <div className="block w-8 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-[0.120rem] w-8 text-white bg-current transform transition duration-500 ease-in-out rounded-full ${nav ? 'rotate-45' : '-translate-y-1.5'
                    }`}
                ></span>
                <span
                  className={`block absolute h-[0.120rem] w-8 text-white bg-current transform transition duration-500 ease-in-out rounded-full ${nav ? '-rotate-45' : 'translate-y-1.5'
                    }`}
                ></span>
              </div>
            </button>
          </nav>
        </div>


      </div>

      <div className={nav ? 'fixed z-30 left-0 top-0 w-full h-full backdrop-blur-xl bg-[#9f7648] ease-in-out duration-300 bg-opacity-[80%] text-white' : 'z-30 fixed w-[70%] top-0 h-full ease-in-out duration-300  left-[-100%] text-white'}>
        <div className='flex h-screen '>

          <ul className='m-auto text-3xl'>

            <li onClick={handleNav} className='p-7 cursor-pointer '>
              Paleta ng Kulay

            </li>
            <li onClick={handleNav} className='p-7 cursor-pointer  '>
              Iskedyul

            </li>
            <li onClick={handleNav} className='p-7 cursor-pointer  '>
              Mga Detalye
            </li>
          </ul>
        </div>

      </div>
      {/* <div onClick={handleNav} className={nav ? 'z-10 backdrop-blur-sm bg-white/20 mt-[70px]  fixed w-full h-full' : 'hidden'}></div> */}

    </>
  )
}

export default Navbar