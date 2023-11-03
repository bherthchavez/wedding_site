import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import useApi from "../hooks/useAPI";
import pg from '../assets/pj.png'
import men from '../assets/visitors_men.png'
import women from '../assets/visitors_women.png'
import guest_women from '../assets/guest_women.png'
import guest_men from '../assets/guest_men.png'
import firebase from "../firebase";
import Modal2 from "./Modal2";


function Rsvp() {
  const params = useParams()
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false);
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



  const attending = () => {
    firebase
      .firestore().collection('invited')
      .doc(params.id)
      .update({ status: "attending" })
      .then(() => {
        setRefetchTrigger(prev => !prev)
        setIsModalOpen(prev => !prev)
        console.log(foundInvited.status)
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
        setRefetchTrigger(prev => !prev)
        setIsModalOpen(prev => !prev)
        console.log(foundInvited.status)
      }).catch((error) => {
        console.log(error.message)
      });

  };

  const handleModalClose = () => {
    if(foundInvited.status === 'attending'){

      setIsModalOpen(prev => !prev)
    }else{
      navigate(`/`)
    }
  }

  return (
    <>
      <Modal2 isOpen={isModalOpen} onClose={handleModalClose} notAttending={foundInvited.status}>
        <div className="bg-white p-4 ">
          <div className="flex justify-between sm:justify-center items-center text-center gap-5 my-5">

            <h2 className="text-lg font-bold  text-[#724526]">
              Maraming Salamat po sa iyong pag-kumpirma.
              <br />

            </h2>

          </div>
          {
            foundInvited.status === 'attending'
            &&
            <div className="flex flex-col  text-left gap-5 px-4 sm:px-10 mb-10 sm:my-10 text-gray-800 ">
            <h1 className="  text-sm font-semibold">
              Munting Paalala at Hiling:
            </h1>
            <ul className="list-disc list-inside text-sm flex flex-col gap-3 tracking-wide">
              <li>
                {`Iwasan kumuha ng litrato o bidyo habang nagaganap ang seremonya para mapanatiling taimtim o 
              "solemn" ang kasal. Papayagan lamang pagkatapos ng "first kiss" bilang mag-asawa.`}
              </li>
              <li>
                Ang okasyon na ito ay para lamang sa matatanda. Kaya naman ang pagsama ng bata ay ipinagbabawal.
              </li>
              <li>
                {`Ang mga imbitadong bisita lamang ang pwedeng makadalo sa aming kasal. Iwasan po magsama ng "plus one".`}
              </li>
            </ul>
          </div>
          }
        


        </div>
      </Modal2>
      <section name='Kulay' className="flex flex-col justify-between bg-custom2 bg-local bg-[#f1f0e3] h-auto bg-center bg-cover font-sans">
        <div className="container flex flex-col p-8 gap-5 sm:gap-10 mx-auto md:p-8 max-w-[1200px]">
          <div className='flex flex-col justify-center items-center'>
            <div className="flex flex-col justify-center items-center text-[#745129] mb-4 text-xs gap-1 italic">
              <a href='/' className="cursor-pointer">
                <img src={pg} alt='Logo' className='w-20' />
              </a>
              <span>Disyembre  3, 2023</span>
            </div>
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
                  ? `py-2 px-4 bg-transparent border-2 border-gray-500 rounded-md text-gray-600 hover:bg-[#db9b51] hover:text-white hover:border-none hover:shadow-md`
                  : `py-2 px-4  bg-[#db9b51] text-white shadow-md rounded-md  hover:shadow-none `
                }

              >
                Makakadalo
              </button>

              <button
                onClick={notAttending}
                className={btnStatus.toLowerCase() === `pending` || btnStatus.toLowerCase() === `attending`
                  ? `py-2 px-4 bg-transparent border-2 border-gray-500 rounded-md text-gray-600 hover:bg-[#db9b51] hover:text-white hover:border-none hover:shadow-md`
                  : `py-2 px-4  bg-[#db9b51] text-white shadow-md rounded-md  hover:shadow-none `
                }

              >
                Hindi
              </button>

            </div>
          </div>




          {foundInvited.gender === 'male'
            &&
            foundInvited.remarks == 'importanteng bisita'
            &&
            <div className="flex justify-center gap-3 sm:gap-10 items-start p-5 border-t-2  border-[#e9d2b7]">
              <div className="text-gray-600 w-60 sm:w-80">
                <h1 className="text-sm">Ito po ang inyong dapat isuot sa kasal.</h1>
                <div className="flex flex-col gap-2 mt-3 text-[#a37138] text-center text-xs sm:text-sm">
                  <p className="bg-[#7b3f00] p-2 rounded-md text-gray-300">Semi-Formal Attire na Choco Brown ang Kulay.</p>
                  <p className="bg-[#ffefde] p-2 text-xs rounded-md  text-red-600 text-left">
                    <span className="font-extrabold">PAALALA:</span> <br />
                    <span className="font-semibold"> Bawal ang T-shirt, Sando, Maong Pants o Shorts, Tsinelas, Hoodie.</span></p>
                </div>
              </div>
              <div>
                <img src={guest_men} alt='Logo' className='w-44' />
              </div>
            </div>
          }

          {
            foundInvited.gender === 'female'
            &&
            foundInvited.remarks == 'importanteng bisita'
            &&
            <div className="flex justify-center gap-3 sm:gap-10 items-start p-5 border-t-2  border-[#e9d2b7]">
              <div className="text-gray-600 w-60 sm:w-80">
                <h1 className="text-sm">Ito po ang inyong dapat isuot sa kasal.</h1>
                <div className="flex flex-col gap-2 mt-3 text-[#a37138] text-center text-xs sm:text-sm">
                  <p className="bg-[#7b3f00] p-2 rounded-md text-gray-300">Semi-Formal Attire na Choco Brown ang Kulay.</p>
                  <p className="bg-[#ffefde] p-2 text-xs rounded-md  text-red-600 text-left">
                    <span className="font-extrabold">PAALALA:</span> <br />
                    <span className="font-semibold"> Bawal ang T-shirt, Sando, Maong Pants o Shorts, Tsinelas, Hoodie.</span></p>
                </div>
              </div>
              <div>
                <img src={guest_women} alt='Logo' className='w-60' />
              </div>
            </div>
          }

          {
            foundInvited.gender === 'male'
            &&
            foundInvited.remarks !== 'importanteng bisita'
            &&
            <div className="flex justify-center gap-3 sm:gap-10 items-start p-5 border-t-2  border-[#e9d2b7]">
              <div className="text-gray-600 w-60 sm:w-80">
                <h1 className="text-sm">Ito po ang inyong dapat isuot sa kasal.</h1>
                <div className="flex flex-col gap-2 mt-3 text-[#a37138] text-center text-xs sm:text-sm">
                  <p className="bg-[#fff4cb] p-2 rounded-md">Barong na hindi See Through. </p>
                  <p className="bg-[#7b3f00] p-2 rounded-md text-gray-300">Slacks na Choco Brown ang Kulay. </p>
                  <p className="bg-[#2b2b2b] p-2 rounded-md text-gray-300">Sapatos na Brown o Black ang Kulay. </p>
                </div>
              </div>
              <div>
                <img src={men} alt='Logo' className=' w-32' />
              </div>
            </div>
          }

          {
            foundInvited.gender === 'female'
            &&
            foundInvited.remarks !== 'importanteng bisita'
            &&
            <div className="flex justify-center gap-3 sm:gap-10 items-start p-5  border-t-2  border-[#e9d2b7]">
              <div className="text-gray-600 w-60 sm:w-60">
                <h1 className="text-sm">Ito po ang inyong dapat isuot sa kasal.</h1>
                <div className="flex flex-col gap-2 mt-3 text-[#a37138] text-center text-xs sm:text-sm">
                  <p className="bg-[#7b3f00] p-2 rounded-md text-gray-300">Formal Attire na Choco Brown ang Kulay.</p>
                </div>
              </div>
              <div>
                <img src={women} alt='Logo' className=' sm:w-56' />
              </div>
            </div>
          }




        </div>
        <div className={'p-4 text-xs lg:text-base flex justify-center text-[#f1f0e3]'}>
          <a href='https://julbertpruel.netlify.app/' className=' '>
            ⓒ {new Date().getFullYear()} Julbert Pruel
          </a>
        </div>
      </section>
    </>
  )
}

export default Rsvp