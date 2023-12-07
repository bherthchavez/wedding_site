import pjLogo from '../assets/pjlogo.svg'
import banner from '../assets/banner.png'

import MainLogo from '../assets/Main-Logo.png'
import { useEffect, useState } from 'react';


const Head = () => {

  const [countdownDate] = useState(new Date('12/3/2023').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  });

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  const currentTime = new Date().getTime();

  const distanceToDate = countdownDate - currentTime;


  return (
    <>
      <div className='bg-custom bg-local bg-center bg-cover h-screen'>
        <div className='fixed top-20 left-[-200px] sm:left-[-280px]'>
          <img src={pjLogo} className='h-[350px] sm:h-[500px] opacity-5' />
        </div>
        <div className='fixed bottom-5 right-[-200px] sm:right-[-280px]'>
          <img src={pjLogo} className='h-[350px] sm:h-[500px] opacity-5' />
        </div>

        {/* Large Screen */}
        <figure className='h-screen hidden sm:flex justify-center items-center mx-auto max-w-[1200px] pt-5'>
          <div className=' sm:w-[40%]'>
            <div className='sm:w-[115%]'>
              <img src={banner} className='border-[#f1f0e3] border-[10px] rounded-xl' />
            </div>
          </div>
          <div className='sm:w-[55%]'>
            <div className=' bg-[#fdfaf6]   rounded-xl opacity-95'>
              <div className='flex justify-center items-center align-middle py-5 md:py-9 lg:py-12 xl:py-20 px-3  md:px-5 lg:px-9 xl:px-10'>

                <div className=''>
                  <img src={MainLogo} className='' />
                </div>

                <div className=' ml-12'>
                  <div className='text-[#b89e81]  text-left font-serif text-[25px] leading-8'>
                    {distanceToDate < 0 ?
                      'We Got Married !!'
                      :
                      'Linggo, Disyembre  3, 2023'
                    }
                  </div>

                  <div className="flex my-4  text-[#949393] justify-start gap-3 items-center text-[18px] mt-10">
                    <div className=''>
                      <h1 className='text-center'>{(distanceToDate) < 0 ? '' : state.days || '0'}</h1>
                      <p className='text-xs font-light text-center'> {(distanceToDate) < 0 ? '' : 'Araw'} </p>
                    </div>
                    <div className=''>
                      <h1 className='text-center'>{(distanceToDate) < 0 ? '⛪' : state.hours || '00'}</h1>
                      <div className='text-xs font-light'>{(distanceToDate) < 0 ? '' : 'Oras'}   </div>
                    </div>
                    <div className=''>
                      <h1 className='text-center'>{(distanceToDate) < 0 ? '👰' : state.minutes || '00'}</h1>
                      <div className='text-xs font-light'> {(distanceToDate) < 0 ? '' : 'Minuto'}  </div>
                    </div>
                    <div className=''>
                      <h1 className='text-center'>{(distanceToDate) < 0 ? '🤵' : state.seconds || '00'}</h1>
                      <div className='text-xs font-light'>{(distanceToDate) < 0 ? '' : 'Segundo'}  </div>
                    </div>
                  </div>

                </div>




              </div>

            </div>
          </div>
        </figure>

        {/* Small Screen */}

        <div className='h-screen w-screen sm:hidden m-auto'>
          <div className=' m-auto p-5 relative'>
            <div className='pt-20'>
              <img src={banner} className='border-[#f1f0e3] border-[10px] rounded-xl' />
            </div>

            <div className='absolute top-[80%] right-5   bg-[#fdfaf6]   rounded-xl opacity-90'>
              
              <div className='flex justify-center items-center p-4'>
                <img src={MainLogo} className='w-44' />
              </div>
              <div className='px-14 mt-2'>
                  <div className='text-[#b89e81]  text-center font-serif text-lg leading-8 '>
                    {distanceToDate < 0 ?
                      'We Got Married !!'
                      :
                      'Linggo, Disyembre  3, 2023'
                    }
                  </div>

                  <div className="flex pb-6 text-[#949393] justify-center gap-3 items-center font-sans text-base ">
                        <div className=''>
                          <h1 className='text-center'>{(distanceToDate) < 0 ? '' : state.days || '0'}</h1>
                          <p className='text-xs font-light'> {(distanceToDate) < 0 ? '' : 'Araw'} </p>
                        </div>
                        <div className=''>
                          <h1 className='text-center'>{(distanceToDate) < 0 ? '⛪' : state.hours || '00'}</h1>
                          <div className='text-xs font-light'>{(distanceToDate) < 0 ? '' : 'Oras'}   </div>
                        </div>
                        <div className=''>
                          <h1 className='text-center'>{(distanceToDate) < 0 ? '👰' : state.minutes || '00'}</h1>
                          <div className='text-xs font-light'> {(distanceToDate) < 0 ? '' : 'Minuto'}  </div>
                        </div>
                        <div className=''>
                          <h1 className='text-center'>{(distanceToDate) < 0 ? '🤵' : state.seconds || '00'}</h1>
                          <div className='text-xs font-light'>{(distanceToDate) < 0 ? '' : 'Segundo'}  </div>
                        </div>
                      </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Head