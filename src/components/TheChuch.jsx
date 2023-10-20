
import Church from '../assets/church_1.png'
import Church1 from '../assets/church_2.png'
import Church2 from '../assets/church_3.png'
import Church3 from '../assets/church_4.png'
import Church4 from '../assets/church_5.png'
import Church5 from '../assets/church_6.png'
import { BiLocationPlus } from "react-icons/bi";

import { Carousel } from "@material-tailwind/react";

const TheChuch = () => {
  return (
    <div name='simbahan' className='bg-[#f1f0e3] h-screen'>

      {/* Large Screen */}
      <figure className='h-screen hidden sm:flex justify-center items-center mx-auto max-w-[1200px] pt-5'>
        <div className=' sm:w-[40%]'>
          <div className=' '>
            <div className=' justify-center items-center align-middle py-5 md:py-9 lg:py-12 xl:py-20 px-3  md:px-5 lg:px-9 xl:px-10'>

              <div className='relative'>
                <div className='text-[#4e4e4e] font-light  text-right text-[65px] leading-[63px] '>
                  Ang Simbahan
                </div>
                <span className='ml-56 w-[200px] h-2 bg-[#eac9a5] block'></span>
              </div>

              <div className=' mr-12 mt-12'>
                <div className='text-[#865635] flex text-right font-sans text-[25px] leading-8'>
                  <p className='text-3xl  justify-center items-start '>

                    <BiLocationPlus />
                  </p>
                  <a href='https://www.google.com/search?q=Nuestra+Se%C3%B1ora+de+Gracia+Parish+Church%2C+Guadalupe+Viejo%2C+Makati+City&sca_esv=575117049&sxsrf=AM9HkKlCag8pHVEL36Jogy_FT4osPrAJlw%3A1697789271475&ei=VzUyZaHSHPmbseMPn5SJ6Ac&ved=0ahUKEwjh2bfzlYSCAxX5TWwGHR9KAn0Q4dUDCBA&uact=5&oq=Nuestra+Se%C3%B1ora+de+Gracia+Parish+Church%2C+Guadalupe+Viejo%2C+Makati+City&gs_lp=Egxnd3Mtd2l6LXNlcnAiRU51ZXN0cmEgU2XDsW9yYSBkZSBHcmFjaWEgUGFyaXNoIENodXJjaCwgR3VhZGFsdXBlIFZpZWpvLCBNYWthdGkgQ2l0eTIHECMYrgIYJzICECZIlwxQ-AJY-AJwAXgBkAEAmAFvoAFvqgEDMC4xuAEDyAEA-AEC-AEBwgIKEAAYRxjWBBiwA-IDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp'
                    target='_blank' rel='noreferrer noopener'
                    className='underline flex'>
                    Nuestra Señora de Gracia Parish Church, Guadalupe Viejo, Makati City
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:w-[50%]'>
          <div className='sm:w-[110%] '>
            <Carousel
              className=" rounded-xl"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src={Church}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={Church1}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={Church2}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={Church3}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={Church4}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={Church5}
                alt="image 2"
                className="h-full w-full object-cover"
              />

            </Carousel>
          </div>
        </div>
      </figure>

      {/* Small Screen */}

      <div className='h-screen w-screen sm:hidden m-auto pt-20 sm:pt-0'>
        <div className='m-auto p-5 relative'>
          <div className=' sm:w-[40%]'>
            <div className=' '>
              <div className=' justify-center items-center align-middle py-5 md:py-9 lg:py-12 xl:py-20 px-3  md:px-5 lg:px-9 xl:px-10'>

                <div className='relative'>
                  <div className='text-[#4e4e4e] font-freestyle  text-left text-[60px] leading-[45px] '>
                    Ang Simbahan
                  </div>
                  <span className='ml-20 w-[140px] h-2 bg-[#eac9a5] block'></span>
                </div>

                <div className=' mt-6'>
                  <div className='text-[#865635] flex font-sans text-right text-[22px] leading-8'>
                    <p className='text-3xl flex  items-start '>
                      <BiLocationPlus />
                    </p>
                    <a href='https://www.google.com/search?q=Nuestra+Se%C3%B1ora+de+Gracia+Parish+Church%2C+Guadalupe+Viejo%2C+Makati+City&sca_esv=575117049&sxsrf=AM9HkKlCag8pHVEL36Jogy_FT4osPrAJlw%3A1697789271475&ei=VzUyZaHSHPmbseMPn5SJ6Ac&ved=0ahUKEwjh2bfzlYSCAxX5TWwGHR9KAn0Q4dUDCBA&uact=5&oq=Nuestra+Se%C3%B1ora+de+Gracia+Parish+Church%2C+Guadalupe+Viejo%2C+Makati+City&gs_lp=Egxnd3Mtd2l6LXNlcnAiRU51ZXN0cmEgU2XDsW9yYSBkZSBHcmFjaWEgUGFyaXNoIENodXJjaCwgR3VhZGFsdXBlIFZpZWpvLCBNYWthdGkgQ2l0eTIHECMYrgIYJzICECZIlwxQ-AJY-AJwAXgBkAEAmAFvoAFvqgEDMC4xuAEDyAEA-AEC-AEBwgIKEAAYRxjWBBiwA-IDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp'
                      target='_blank' rel='noreferrer noopener'
                      className='underline flex'>
                      Nuestra Señora de Gracia Parish Church, Guadalupe Viejo, Makati City
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <Carousel
              className=" rounded-xl"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src={Church}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={Church1}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={Church2}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={Church3}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={Church4}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={Church5}
                alt="image 2"
                className="h-full w-full object-cover"
              />

            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheChuch