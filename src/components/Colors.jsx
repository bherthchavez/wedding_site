
import { useEffect, useState } from "react";
import useApi from "../hooks/useAPI"
import { useNavigate } from "react-router-dom";

const Colors = () => {

    const navigate = useNavigate()
    const [details, setDetails] = useState(
        {
            firstName: '',
            lastName: ''
        }
    )
    const [listInvited, setListInvited] = useState([])
    const [noFound, setNoFound] = useState("")
    // eslint-disable-next-line no-unused-vars
    const [refetchTrigger, setRefetchTrigger] = useState(false);

    const { getInvited } = useApi();


    useEffect(() => {
        const fetchInvited = async () => {
            try {
                const result = await getInvited()
                setListInvited(result)
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        fetchInvited();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refetchTrigger])

    console.log(listInvited)

    

    const searchInvited = () => {
        if(details.firstName !== "" && details.lastName !== ""){

           const existing = listInvited.find(inv => inv.first_name.toUpperCase() == details.firstName.toUpperCase() && inv.last_name.toUpperCase() == details.lastName.toUpperCase())
           
           existing 
           ? navigate(`rsvp/${existing.id}`)
           :  setNoFound("Hindi makita ang iyong pangalan, tingnan ang iyong inilagay na pangalan at apelyido. O makipag-ugnayan kay Paula at Berth.")
        }
        
    }

    return (
        <section name='Kulay' className="bg-custom2 bg-local bg-center bg-cover py-5 sm:py-10 font-sans">
            <div className="container flex flex-col mt-20 h-screen p-8 sm:gap-10 mx-auto md:p-8 max-w-[1200px]">
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-[#4e4e4e]  text-center text-[35px] sm:text-[55px] leading-[43px] sm:leading-[63px] '>
                        Pamantayan ng <br /> Pananamit at RSVP
                    </div>
                    
                </div>


                <div className=" md:gap-8 px-8 ">
                    <div className=" flex flex-col gap-2 justify-center items-center ">
                        <div className="flex flex-col gap-2 justify-end items-end px-9 sm:px-0 py-5 sm:py-0 sm:p-2 w-96">
                            <div className="text-base mb-4 sm:text-base tracking-wide text-gray-600">
                                Mangyaring ilagay ang iyong pangalan at apelyido upang matukoy  kung ano ang dapat mong isuot  at kumpirmahin ang iyong pagdalo.
                            </div>
                            <label
                                htmlFor="Pangalan"
                                className="relative block w-full overflow-hidden rounded-md border-2 border-gray-500 px-3 pt-3 shadow-sm focus-within:border-[#f7ce9f] focus-within:ring-1 focus-within:ring-[#916533]"
                            >
                                <input
                                    id="pangalan"
                                    name="pangalan"
                                    type="text"
                                    placeholder="Pangalan"
                                    required
                                    value={details.firstName}
                                    onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
                                    className="peer uppercase tracking-widest h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />

                                <span
                                    className="absolute tracking-widest start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    Pangalan
                                </span>
                            </label>
                            <label
                                htmlFor="Apelyido"
                                className="relative block w-full overflow-hidden rounded-md border-2 border-gray-500 px-3 pt-3 shadow-sm focus-within:border-[#f7ce9f] focus-within:ring-1 focus-within:ring-[#916533]"
                            >
                                <input
                                    id="apelyido"
                                    name="apelyido"
                                    type="text"
                                    placeholder="Apelyido "
                                    required
                                    value={details.lastName}
                                    onChange={e => setDetails({ ...details, lastName: e.target.value })}
                                    className="peer uppercase tracking-widest h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />

                                <span
                                    className="absolute tracking-widest start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    Apelyido
                                </span>
                            </label>

                           {noFound && 
                            <h1 className="text-[#a57034] text-xs mb-2">
                           {noFound}
                            </h1>
                           }
                            <button
                                className=" group relative inline-flex items-center overflow-hidden rounded-md bg-[#da9e5b] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#f3ba7a]"
                                onClick={searchInvited}
                            >
                                <span className="absolute -end-full transition-all group-hover:end-4">
                                    <svg
                                        className="h-5 w-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span className="text-sm tracking-widest  transition-all group-hover:me-4">
                                    Tingnan
                                </span>
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Colors