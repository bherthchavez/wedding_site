import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import useApi from "../hooks/useAPI";
import pg from '../assets/pj.png'
import men from '../assets/visitors_men.png'
import firebase from "../firebase";


function Rsvp() {
  const params = useParams()


  const [foundInvited, setFoundInvited] = useState([])
  const [btnStatus, setBtnStatus] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  const { getInvited } = useApi();


  useEffect(() => {
    const fetchInvited = async () => {
      try {
        const result = await getInvited()
        const existing = result.find(inv => inv.id === params.id)
        if (existing) {
          setFoundInvited(existing)
          setBtnStatus(existing.status)
        }

      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchInvited();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchTrigger])

  console.log(foundInvited)
  console.log(btnStatus)


  const attending = () => {
    firebase
      .firestore().collection('invited')
      .doc(params.id)
      .update({ status: "attending" })
      .then(() => {
        console.log("status updated!");
        setRefetchTrigger(prev => !prev)
      }).catch((error) => {
        console.log(error.message)
      });

  };
  const notAttending = () => {
    firebase
      .firestore().collection('invited')
      .doc(params.id)
      .update({ status: "not attending" })
      .then(() => {
        console.log("status updated!");
        setRefetchTrigger(prev => !prev)
      }).catch((error) => {
        console.log(error.message)
      });

  };




  return (
    <section name='Kulay' className="flex flex-col justify-between bg-custom2 bg-local bg-[#f1f0e3] h-auto bg-center bg-cover font-sans">
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
          <div className="text-xl">Kamusta {foundInvited.gender === 'male' ? 'Ginoong' : 'Binibining'}</div>

          <div className="font-semibold text-[#745129] capitalize">
         <p>{foundInvited.first_name} {foundInvited.last_name}</p> 
         <p className="text-sm font-normal text-[#745129]">{foundInvited.remarks}</p>
          </div>

          <div className="mt-5 text-xl">Ikaw po ba ay Makakadalo sa Kasal namin?</div>
          <div className="flex justify-center text-base items-center gap-5">
          <button
            onClick={attending}
            className={btnStatus.toLowerCase() === `pending` || btnStatus.toLowerCase() === `not attending`
              ? `py-2 px-7 bg-transparent border-2 border-gray-500 rounded-md text-gray-600 hover:bg-[#db9b51] hover:text-white hover:border-none hover:shadow-md`
              : `py-2 px-7  bg-[#db9b51] text-white shadow-md rounded-md  hover:shadow-none `
            }

          >
            Makakadalo
          </button>

          <button
            onClick={notAttending}
            className={btnStatus.toLowerCase() === `pending` || btnStatus.toLowerCase() === `attending`
              ? `py-2 px-7 bg-transparent border-2 border-gray-500 rounded-md text-gray-600 hover:bg-[#db9b51] hover:text-white hover:border-none hover:shadow-md`
              : `py-2 px-7  bg-[#db9b51] text-white shadow-md rounded-md  hover:shadow-none `
            }

          >
            Hindi
          </button>

        </div>
        </div>

        

        

        <div className="flex justify-center gap-3 sm:gap-10 items-start p-5">
          <div className="text-gray-600">
            <h1 className="text-sm"> Salamat sa Pag kumpirma ng inyong pagdalo. Ito ang inyong dapat isuot sa kasal.</h1>
           <div className="flex flex-col gap-2 mt-3 text-[#a37138] text-center text-sm">

            <p className="bg-[#fff4cb] py-1 px-2 rounded-md">Barong na hindi See Through. </p>
            <p className="bg-[#7b3f00] py-1 px-2 rounded-md text-gray-400">Slacks na Choco Brown ang Kulay. </p>
            <p className="bg-[#2b2b2b] py-1 px-2 rounded-md text-gray-400">Sapatos na Brown o Black ang Kulay. </p>
           </div>
          </div>
          <div>
            <img src={men} alt='Logo' className=' sm:w-32' />
          </div>
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