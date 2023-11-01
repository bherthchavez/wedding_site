import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import useApi from "../hooks/useAPI";
import pg from '../assets/pj.png'
function Rsvp() {
  const params = useParams()


  const [foundInvited, setFoundInvited] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  const { getInvited } = useApi();


  useEffect(() => {
    const fetchInvited = async () => {
      try {
        const result = await getInvited()
        setFoundInvited(result.find(inv => inv.id === params.id))
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchInvited();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchTrigger])

  console.log(foundInvited)

  return (
    <section name='Kulay' className="flex flex-col justify-between bg-custom2 bg-local bg-center bg-cover h-screen  font-sans">
      <div className="container flex flex-col p-8 gap-5 sm:gap-10 mx-auto md:p-8 max-w-[1200px]">
        <div className='flex flex-col justify-center items-center'>
         <div className="flex flex-col justify-center items-center text-[#745129] mb-4 text-xs gap-1 italic">
          <a href='/' className="cursor-pointer">
            <img src={pg} alt='Logo' className='w-20' />
          </a>
          <span>Disyembre  3, 2023</span>
         </div>
          {/* <div className='text-[#797979]  text-center text-lg sm:text-[25px] leading-none sm:leading-[29px] '>
            Pamantayan ng <br /> Pananamit at RSVP
          </div>
          <div className="flex justify-center items-center">
            <div className='sm:ml-24 w-[150px]  h-1 bg-[#f7dabc]'></div>
          </div> */}
        </div>

        <div className='text-[#727171] flex flex-col justify-center items-center gap-2  text-center text-[25px] sm:text-[35px] leading-7 sm:leading-[43px] '>
          <div>Kamusta {foundInvited.first_name === 'male' ? 'Ginoong' : 'Binibining'}</div>
       
          <div className="font-semibold text-[#745129]">{foundInvited.first_name} {foundInvited.last_name}</div>
       
          <div className="mt-5">Ikaw po ba ay Makakadalo sa Kasal namin?</div>
        </div>

        <div className="flex justify-center items-center gap-5">
          <button className="py-2 px-7 bg-transparent border-2 border-gray-500 rounded-md text-gray-600 hover:bg-[#db9b51] hover:text-white hover:border-none hover:shadow-md">
            Makakadalo
          </button>
          <button className="py-2 px-7 bg-transparent border-2 border-gray-500 rounded-md text-gray-600 hover:bg-[#db9b51] hover:text-white hover:border-none hover:shadow-md">
            Hindi
          </button>
          
        </div>


      </div>
      <div className={'p-4 text-xs lg:text-base flex justify-center text-[#f1f0e3]'}>
        <a href='https://julbertpruel.netlify.app/' className=' '>
          ⓒ {new Date().getFullYear()} Julbert Pruel
        </a>
      </div>
    </section>
  )
}

export default Rsvp