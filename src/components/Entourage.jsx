
const Entourage = () => {
    return (
        <section className="bg-[#f1f0e3] py-5 sm:py-10 ">
            <div className="container flex flex-col justify-center p-8 gap-10 mx-auto md:p-8 max-w-[1200px]">
                {/* <p className="p-2 text-sm font-medium tracki text-center uppercase">How it works</p> */}
                {/* <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Pamunuan</h2> */}
                <div className='relative'>
                    <div className='text-[#4e4e4e] font-freestyle  text-left text-[95px] leading-[63px] '>
                        Pamunuan
                    </div>
                    <span className=' w-[150px] h-2 bg-[#eac9a5] block'></span>
                </div>

                <div className="grid gap-10 md:gap-8 px-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-xl text-[#4e4e4e]">Mga magulang ng babaeng ikakasal</h3>
                        {/* <p className="mt-1 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p> */}

                        <div className="flex flex-col justify-start items-start pl-5">
                            {/* <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" /> */}
                            <div className="text-left ">
                                <div className="my-2 text-[#9f7648]">
                                    <h2 className="text-xl font-semibold sm:text-xl">Jocelyn G. Alibusa</h2>
                                    <p className="text-xs sm:text-base text-gray-400">Ang Ina</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start pl-5">
                            {/* <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" /> */}
                            <div className="text-left ">
                                <div className="my-2 text-[#9f7648]">
                                    <h2 className="text-xl font-semibold sm:text-xl">Godofredo E. Alibusa</h2>
                                    <p className="text-xs sm:text-base text-gray-400">Ang Ama</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h3 className="font-semibold text-xl text-[#4e4e4e]">Magulang ng lalaking ikakasal</h3>
                        <div className="flex flex-col justify-start items-start pl-5">
                            <div className="text-left ">
                                <div className="my-2 text-[#9f7648]">
                                    <h2 className="text-xl font-semibold sm:text-xl">Aldita R. Chavez</h2>
                                    <p className="text-xs sm:text-base text-gray-400">Ang Ina</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start pl-5">
                            <div className="text-left ">
                                <div className="my-2 text-[#9f7648]">
                                    <h2 className="text-xl font-semibold sm:text-xl">Francisco B. Pruel</h2>
                                    <p className="text-xs sm:text-base text-gray-400">Ang Ama</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="font-semibold text-xl text-[#4e4e4e]">Ninong at Ninang</h3>
                            <span className="text-xs sm:text-sm text-gray-400">Magsisilbing saksi sa aming mga panata</span>
                        </div>
                        <div className="flex flex-col justify-start items-start ">
                            <div className="text-left ">
                                <div className="my-2 text-[#9f7648] text-base font-medium pl-5">
                                    <h2 className="">Mrs. Dra. Wilma Tuvillo</h2>
                                    <h2 className="">Mr. Jamison</h2>
                                    <h2 className="">Mrs. Helen Kung</h2>
                                    <h2 className="">Mr. Manny Kung</h2>
                                    <h2 className="">Mrs. Edith Suarez</h2>
                                    {/* <p className="text-xs sm:text-base text-gray-400">Ang Ina</p> */}
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