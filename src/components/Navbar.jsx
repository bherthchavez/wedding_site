
import { useState } from 'react';
import pg2 from '../assets/pj2.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <>
      <div className={`z-20 bg-[#9f7648]  fixed flex justify-between px-4 sm:px-8 items-center top-0 w-screen h-20 text-white`}>
   
          <a href='/' className="cursor-pointer">
            <img src={pg2} alt='Logo' className='w-12 h-12' />
          </a>
        <ul className="hidden md:flex gap-8 ">
          <Link to='simbahan' smooth={true} duration={500}>
            <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
              <span className='w-full tracking-widest  text-md text-[#fef1e2] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#fef1e2] to-[#fef1e2] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Ang Simbahan
              </span>
            </li>
          </Link>
          <Link to='paghahanda' smooth={true} duration={500}>
            <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
              <span className='w-full tracking-widest  text-md text-[#fef1e2] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#fef1e2] to-[#fef1e2] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Lugar ng Paghahanda
              </span>
            </li>
          </Link>
          <Link to='pamunuan' smooth={true} duration={500}>
            <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
              <span className='w-full tracking-widest  text-md text-[#fef1e2] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#fef1e2] to-[#fef1e2] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Pamunuan
              </span>
            </li>
          </Link>
          <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
            <span className='w-full tracking-widest  text-md text-[#fef1e2] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#fef1e2] to-[#fef1e2] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Mga Detalye
            </span>
          </li>
        </ul>

        {/* Humberger */}
        <div data-aos="fade-left" data-aos-delay="2000" className="relative  block md:hidden ">
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

      <div className={nav ? `overflow-hidden fixed z-10 left-0 top-0 w-full h-full backdrop-blur-xl  bg-[#9f7648] ease-in-out duration-300 bg-opacity text-white` : 'z-10 fixed w-[70%] top-0 h-full ease-in-out duration-300  left-[-100%] text-white'}>
        <div className='flex justify-center items-center  h-screen '>

          <ul className='text-3xl flex flex-col  gap-8 '>
            <Link to='simbahan' smooth={true} duration={500}>
              <li onClick={handleNav} className=' cursor-pointer '>
                Ang Simbahan
              </li>
            </Link>
            <Link to='paghahanda' smooth={true} duration={500}>
              <li onClick={handleNav} className=' cursor-pointer  '>
                Lugar ng Paghahanda
              </li>
            </Link>
            <Link to='pamunuan' smooth={true} duration={500}>
              <li onClick={handleNav} className=' cursor-pointer  '>
                Pamunuan
              </li>
            </Link>
            <Link to='' smooth={true} duration={500}>
              <li onClick={handleNav} className=' cursor-pointer  '>
                Mga Detalye
              </li>
            </Link>



          </ul>
        </div>

      </div>
      {/* <div onClick={handleNav} className={nav ? 'z-10 backdrop-blur-sm bg-white/20 mt-[70px]  fixed w-full h-full' : 'hidden'}></div> */}

    </>
  )
}

export default Navbar