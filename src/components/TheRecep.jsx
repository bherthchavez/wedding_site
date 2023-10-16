import Reception from '../assets/reception.png'

const TheRecep = () => {
    return (
        <>
            {/* bg-custom2 bg-local bg-center bg-cover */}
            <div className='bg-[#f1f0e3]'>

                {/* Large Screen */}
                <figure className='h-screen hidden sm:block mx-auto max-w-[1200px]'>


                    <div className=' justify-center items-center align-middle py-10 '>

                        <div className='relative'>
                            <div className='text-[#4e4e4e] ml-32 font-freestyle  text-left text-[95px] leading-[63px]'>
                                Lugar ng Paghahanda
                            </div>
                            <span className='ml-96 w-[200px] h-2 bg-[#eac9a5] block'></span>
                        </div>

                        <div className=' ml-60 mt-12'>
                            <div className='text-[#865635]  text-left font-sans text-[25px] leading-8'>
                                Alta Guia Taguig City
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='w-50'>
                            <img src={Reception} />
                        </div>
                    </div>
                </figure>

                {/* Small Screen */}

                <div className='h-screen  sm:hidden m-auto '>
                    <div className=' m-auto px-5 relative'>
                        <div className=' sm:w-[40%]'>
                                <div className=' justify-center items-center align-middle py-5 md:py-9 lg:py-12 xl:py-20 px-3  md:px-5 lg:px-9 xl:px-10'>

                                    <div className='relative'>
                                        <div className='text-[#4e4e4e] font-freestyle  text-left text-[70px] leading-[75px] '>
                                            Lugar ng Paghahanda
                                        </div>
                                        <span className='ml-14 w-[140px] bottom-2 absolute h-2 bg-[#eac9a5] block'></span>
                                    </div>

                                    <div className=' mr-12 mt-6'>
                                        <div className='text-[#865635]  text-right font-sans text-[20px] leading-8'>
                                            Alta Guia Taguig City
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className=''>
                            <img src={Reception} className='border-[#f1f0e3] border-[10px] rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TheRecep