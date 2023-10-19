
import Church from '../assets/church_1.png'

const TheChuch = () => {
  return (
    <div className='bg-[#f1f0e3] h-screen'>

      {/* Large Screen */}
      <figure className='h-screen hidden sm:flex justify-center items-center mx-auto max-w-[1200px] pt-5'>
        <div className=' sm:w-[40%]'>
          <div className=' '>
            <div className=' justify-center items-center align-middle py-5 md:py-9 lg:py-12 xl:py-20 px-3  md:px-5 lg:px-9 xl:px-10'>

              <div className='relative'>
                <div className='text-[#4e4e4e] font-freestyle  text-right text-[95px] leading-[63px] '>
                  Ang Simbahan
                </div>
                <span className='ml-56 w-[200px] h-2 bg-[#eac9a5] block'></span>
              </div>

              <div className=' mr-12 mt-12'>
                <div className='text-[#865635]  text-right font-sans text-[25px] leading-8'>
                  Nuestra Señora de Gracia Parish Church, Guadalupe Viejo, Makati City
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:w-[50%]'>
          <div className='sm:w-[110%] '>
            <img src={Church} className='border-[#f1f0e3] border-[10px] rounded-xl' />
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
                  <div className='text-[#4e4e4e] font-freestyle  text-left text-[70px] leading-[45px] '>
                    Ang Simbahan
                  </div>
                  <span className='ml-20 w-[140px] h-2 bg-[#eac9a5] block'></span>
                </div>

                <div className=' mr-10 mt-6'>
                  <div className='text-[#865635]  text-right font-sans text-[22px] leading-8'>
                    Nuestra Señora de Gracia Parish Church, Guadalupe Viejo, Makati City
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={Church} className='border-[#f1f0e3] border-[10px] rounded-xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheChuch