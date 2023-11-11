import kyla from '../assets/kyla.jpg'
import pam from '../assets/pam.jpg'
import tibor from '../assets/tibor.jpg'


const Entourage = () => {
    return (
        <section name='pamunuan' className="bg-[#f1f0e3] py-5 sm:py-10 font-sans">
            <div  className="container flex flex-col justify-center p-8 gap-10 mx-auto md:p-8 max-w-[1200px]">
                <div className='relative'>
                    <div className='text-[#4e4e4e]  text-left text-[55px] sm:text-[65px] leading-[63px] '>
                        Pamunuan
                    </div>
                    <span className=' w-[150px] h-2 bg-[#eac9a5] block'></span>
                </div>

                <div className="grid gap-10 md:gap-8 px-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <h3 className=" text-3xl sm:text-4xl text-[#9f7648] text-center mb-2 sm:mb-3">Abay na Pandangal</h3>
                        <div className="flex flex-col justify-center items-center">
                            <img src={pam} alt=""
                                className="w-28 h-28 grayscale mx-auto sm:mx-0 rounded-full dark:bg-gray-500 aspect-square" />
                            <div className="text-left mx-auto sm:mx-0">
                                <div className="my-2 text-gray-600">
                                    <h2 className="text-base font-semibold sm:text-lg text-center ">Pamela Bennett G. Alibusa</h2>
                                    <p className="text-xs sm:text-sm text-gray-400 text-center ">Kapatid ng babaeng ikakasal</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src={kyla} alt=""
                                className="w-28 h-28 grayscale mx-auto sm:mx-0 rounded-full dark:bg-gray-500 aspect-square" />
                            <div className="text-left mx-auto sm:mx-0">
                                <div className="my-2 text-gray-600">
                                    <h2 className="text-base font-semibold sm:text-lg text-center ">Kyla Caughlin R. Alibusa</h2>
                                    <p className="text-xs sm:text-sm text-gray-400 text-center ">Pamangkin ng babaeng ikakasal</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-2  items-center">
                        <h3 className=" text-3xl sm:text-4xl text-[#9f7648] text-center mb-2 sm:mb-3">Natatanging Ginoo</h3>
                        <div className="flex flex-col justify-center items-center">
                            <img src={tibor} alt=""
                                className="w-28 h-28 bg-auto   rounded-full mx-auto sm:mx-0 grayscale dark:bg-gray-500 aspect-square" />
                            <div className="text-left  mx-auto sm:mx-0">
                                <div className="my-2 text-gray-600">
                                    <h2 className="text-base font-semibold sm:text-lg text-center ">Jake C. Pruel</h2>
                                    <p className="text-xs sm:text-sm text-gray-400 text-center ">Kapatid ng lalaking ikakasal</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col justify-center items-center gap-2 sm:mt-20">
                        <h3 className=" text-3xl sm:text-4xl text-[#9f7648] text-center mb-2 sm:mb-3">Magulang ng Babaeng Ikakasal</h3>
                        <div className="flex flex-col justify-start items-start "> <div className="text-left ">
                            <div className="my-2 text-gray-600">
                                <h2 className="text-base font-semibold sm:text-lg">Jocelyn G. Alibusa</h2>
                                <p className="text-xs text-center sm:text-sm text-gray-400">Ang Ina</p>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col justify-start items-start "> <div className="text-left ">
                            <div className="my-2 text-gray-600">
                                <h2 className="text-base font-semibold sm:text-lg">Godofredo E. Alibusa</h2>
                                <p className="text-xs sm:text-sm text-center text-gray-400">Ang Ama</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center sm:mt-20">
                        <h3 className=" text-3xl sm:text-4xl text-[#9f7648] text-center mb-2 sm:mb-3">Magulang ng Lalaking Ikakasal</h3>
                        <div className="flex flex-col justify-start items-start ">
                            <div className="text-left ">
                                <div className="my-2 text-gray-600">
                                    <h2 className="text-base font-semibold sm:text-lg">Aldita R. Chavez</h2>
                                    <p className="text-xs text-center sm:text-sm text-gray-400">Ang Ina</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start ">
                            <div className="text-left ">
                                <div className="my-2 text-gray-600">
                                    <h2 className="text-base font-semibold sm:text-lg">Francisco B. Pruel</h2>
                                    <p className="text-xs text-center sm:text-sm text-gray-400">Ang Ama</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-2  items-center sm:mt-20">
                        <div>
                            <h3 className=" text-3xl sm:text-4xl text-[#9f7648] text-center">Ninong at Ninang</h3>
                            <p className="text-xs sm:text-sm text-gray-400 text-center mb-4">Magsisilbing saksi sa aming mga panata</p>
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <h2 className="">Ms. Edith Suarez</h2>
                                    <h2 className="">Dra. Wilma Tuvillo-Jamison</h2>
                                    <h2 className="mt-3 sm:hidden">Mrs. Helen Kung</h2>
                                    <h2 className="sm:hidden">Mr. Manny Kung</h2>
                                    <h2 className="mt-3 sm:hidden">Mrs. Mary Jane Silverio </h2>
                                    <h2 className="sm:hidden">Mr. Rogelio Silverio</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden flex-col gap-2  sm:flex justify-center items-center sm:mt-20">
                        <div>
                            <h3 className=" text-3xl sm:text-4xl text-[#9f7648] text-center">Ninong at Ninang</h3>
                            <p className="text-xs sm:text-sm text-gray-400 text-center mb-4">Magsisilbing saksi sa aming mga panata</p>
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium">
                                    <h2 className="">Mrs. Helen Kung</h2>
                                    <h2 className="">Mr. Manny Kung</h2>
                                    <h2 className="mt-2">Mrs. Mary Jane Silverio </h2>
                                    <h2 className="">Mr. Rogelio Silverio</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-5 justify-center items-center sm:mt-20">
                        <div>
                            <h3 className="text-3xl sm:text-4xl text-[#9f7648] text-center">Ikalawang Pares</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base   font-semibold">Kandila</p>
                                        <h2 className="pl-2">Jeremei Kyrell Peña</h2>
                                        <h2 className="pl-2">Philip Roimon Domingo  </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base  font-semibold">Belo</p>
                                        <h2 className="pl-2">Mrs. May R. Alibusa</h2>
                                        <h2 className="pl-2">Mr. Thomas Alexie G. Alibusa  </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base font-semibold  ">Yugal</p>
                                        <h2 className="pl-2">Xyla Nicole Velasco</h2>
                                        <h2 className="pl-2">Raymarth Legaspi</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base  font-semibold ">Munting Abay</p>
                                        <h2 className="pl-2">Lyka Joyce Lazana</h2>
                                        <h2 className="pl-2">Jhoanna Marie Lazana</h2>
                                        <h2 className="pl-2">Aleksandrei Miles R. Alibusa</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex sm:hidden flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base  font-semibold ">Singsing</p>
                                        <h2 className="pl-2">Dwayne Godfrey R. Alibusa</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:hidden flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base font-semibold  ">Bibliya</p>
                                        <h2 className="pl-2">Kevin Josh Topino</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:hidden flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base font-semibold  ">Arras</p>
                                        <h2 className="pl-2">Jerome C. Proel</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="hidden flex-col gap-5 sm:flex  items-center sm:mt-20">
                        <div className="flex flex-col justify-center items-center sm:mt-16">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base  font-semibold ">Singsing</p>
                                        <h2 className="pl-2">Dwayne Godfrey R. Alibusa</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base  font-semibold ">Bibliya</p>
                                        <h2 className="pl-2">Kevin Josh Topino</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <div className="text-center ">
                                <div className="my-2 text-gray-600 text-base font-medium ">
                                    <div className="flex flex-col">
                                        <p className="text-[#9f7648] text-base font-semibold  ">Arras</p>
                                        <h2 className="pl-2">Jerome C. Proel</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Entourage