
import pjLogo from '../assets/pjlogo.svg'

const Navbar = () => {
  return (
    <>
      <div className="font-sans fixed flex justify-between px-4 sm:px-8 items-center top-0 w-screen h-24 text-white">
        <div className="cursor-pointer">
          <img src={pjLogo} alt='Logo' className='w-12 h-12' />
        </div>
        <ul className="hidden md:flex gap-8">
          <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
            <span className='w-full uppercase font-medium text-md text-[#707070] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#724526] to-[#724526] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Color Palette
            </span>
          </li>
          <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
            <span className='w-full uppercase font-medium text-md text-[#707070] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#724526] to-[#724526] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Schedule
            </span>
          </li>
          <li className='p-2 group transition-all duration-300 ease-in-out cursor-pointer'>
            <span className='w-full uppercase font-medium text-md text-[#707070] cursor-pointer bg-left-bottom bg-gradient-to-r from-[#724526] to-[#724526] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Details
            </span>
          </li>
        </ul>

      </div>
    </>
  )
}

export default Navbar