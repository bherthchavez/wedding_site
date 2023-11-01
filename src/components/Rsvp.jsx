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
      <div className="container flex flex-col p-8 gap-10 mx-auto md:p-8 max-w-[1200px]">
        <div className='flex flex-col justify-center items-center'>
          <a href='/' className="cursor-pointer mb-4">
            <img src={pg} alt='Logo' className='w-20' />
          </a>
          <div className='text-[#4e4e4e]  text-center text-[25px]  leading-[29px] '>
            Pamantayan ng <br /> Pananamit at RSVP
          </div>
          <div className="flex justify-center items-center">
            <div className='ml-24 w-[150px]  h-1 bg-[#eac9a5]'></div>
          </div>
        </div>

        <div className='text-[#4e4e4e]  text-center text-[55px] sm:text-[55px] leading-[63px] '>
          Hello <br /> {foundInvited.first_name}
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