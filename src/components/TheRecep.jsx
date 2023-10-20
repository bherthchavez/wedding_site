import { Carousel } from '@material-tailwind/react';
import Reception from '../assets/reception.png'
import Reception1 from '../assets/reception1.png'
import Reception2 from '../assets/reception2.png'
import Reception3 from '../assets/reception3.png'
import { ImLocation } from "react-icons/im";
const TheRecep = () => {
    return (
        <>
            {/* bg-custom2 bg-local bg-center bg-cover */}
            <div name='paghahanda' className='bg-[#f1f0e3]'>

                {/* Large Screen */}
                <figure className='h-screen hidden sm:flex justify-center items-center mx-auto max-w-[1200px]'>

                    <div className=''>
                        <div className='w-50'>
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
                                    src={Reception}
                                    alt="image 1"
                                    className=" object-cover"
                                />
                                <img
                                    src={Reception1}
                                    alt="image 1"
                                    className=" object-cover"
                                />
                                <img
                                    src={Reception2}
                                    alt="image 1"
                                    className=" object-cover"
                                />
                                <img
                                    src={Reception3}
                                    alt="image 1"
                                    className=" object-cover"
                                />

                            </Carousel>
                        </div>
                    </div>
                    <div className='  py-10 '>
                        <div className='relative'>
                            <div className='text-[#4e4e4e] ml-10  text-[65px] leading-[63px]'>
                                Lugar ng Paghahanda
                            </div>
                            <span className='ml-10 w-[200px] h-2 bg-[#eac9a5] block'></span>
                        </div>

                        <div className='ml-10 mt-12'>
                            <div className='text-[#865635] flex text-left text-[25px] leading-8'>
                                <p className='text-3xl flex justify-center text-[#865635] items-end pr-2'>
                                    <ImLocation />
                                </p>
                                <a href='https://www.google.com/search?q=Alta+Guia+Taguig+City&sca_esv=575117049&sxsrf=AM9HkKl06QdeuN0sv0NfFEZGL6TocDXPxQ%3A1697795083424&ei=C0wyZdylGeu74-EPhfeCmAQ&ved=0ahUKEwic1-TGq4SCAxXr3TgGHYW7AEMQ4dUDCBA&uact=5&oq=Alta+Guia+Taguig+City&gs_lp=Egxnd3Mtd2l6LXNlcnAiFUFsdGEgR3VpYSBUYWd1aWcgQ2l0eTILEC4YgAQYxwEYrwEyAhAmMggQABiKBRiGAzIIEAAYigUYhgMyCBAAGIoFGIYDMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUjRBFAAWABwAHgBkAEAmAGjAaABowGqAQMwLjG4AQPIAQD4AQL4AQHiAwQYACBBiAYBugYGCAEQARgU&sclient=gws-wiz-serp'
                                    target='_blank' rel='noreferrer noopener'
                                    className='underline'>
                                    Alta Guia Taguig City
                                </a>
                            </div>
                        </div>
                    </div>

                </figure>

                {/* Small Screen */}

                <div className='h-screen  sm:hidden m-auto flex justify-center items-center'>
                    <div className=' m-auto px-5 relative'>
                        <div className=' sm:w-[40%]'>
                            <div className=' justify-center items-center align-middle py-5 md:py-9 lg:py-12 xl:py-20 px-3  md:px-5 lg:px-9 xl:px-10'>

                                <div className='relative'>
                                    <div className='text-[#4e4e4e] text-left text-[50px]  leading-[45px] '>
                                        Lugar ng Paghahanda
                                    </div>
                                    <span className='ml-24 w-[140px] bottom-1-0 absolute h-2 bg-[#eac9a5] block'></span>
                                </div>

                                <div className='mt-8'>
                                    <div className='text-[#865635] flex text-right justify-end text-[22px] leading-8'>
                                        <p className='text-3xl flex justify-center items-end text-[#865635] pr-2'>
                                            <ImLocation />
                                        </p>
                                        <a href='https://www.google.com/search?q=Alta+Guia+Taguig+City&sca_esv=575117049&sxsrf=AM9HkKl06QdeuN0sv0NfFEZGL6TocDXPxQ%3A1697795083424&ei=C0wyZdylGeu74-EPhfeCmAQ&ved=0ahUKEwic1-TGq4SCAxXr3TgGHYW7AEMQ4dUDCBA&uact=5&oq=Alta+Guia+Taguig+City&gs_lp=Egxnd3Mtd2l6LXNlcnAiFUFsdGEgR3VpYSBUYWd1aWcgQ2l0eTILEC4YgAQYxwEYrwEyAhAmMggQABiKBRiGAzIIEAAYigUYhgMyCBAAGIoFGIYDMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUjRBFAAWABwAHgBkAEAmAGjAaABowGqAQMwLjG4AQPIAQD4AQL4AQHiAwQYACBBiAYBugYGCAEQARgU&sclient=gws-wiz-serp'
                                            target='_blank' rel='noreferrer noopener'
                                            className='underline'>
                                            Alta Guia Taguig City
                                        </a>
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
                                    src={Reception}
                                    alt="image 1"
                                    className="h-full w-full object-cover"
                                />
                                <img
                                    src={Reception1}
                                    alt="image 1"
                                    className="h-full w-full object-cover"
                                />
                                <img
                                    src={Reception2}
                                    alt="image 1"
                                    className="h-full w-full object-cover"
                                />
                                <img
                                    src={Reception3}
                                    alt="image 1"
                                    className="h-full w-full object-cover"
                                />

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>


            

        </>
    )
}

export default TheRecep