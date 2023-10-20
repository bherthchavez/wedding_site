
import Head from "./components/Head"
import Navbar from "./components/Navbar"
import { Analytics } from '@vercel/analytics/react';
import TheChuch from "./components/TheChuch";
import Footer from "./components/Footer";
import TheRecep from "./components/TheRecep";
import Schedule from "./components/Schedule";
import Entourage from "./components/Entourage";
import { useState } from "react";
import Modal from "./components/Modal";
import { qaData } from "./qaData";
import firebase from "./firebase";



function App() {

  const [finalQ, setFinalQ] = useState('Bago mo makita ang buong detalye ng kasal, mayroon kaming dalawang tanong para sa iyo.')

  const generateID = () => {
    return Math.floor(Math.random() * 10000000000)
  }
  const generateQuestion = () => {
    return Math.floor(Math.random() * 4)
  }
  const [qa, setQa] = useState({
    id: generateID(),
    nickName: '',
    finalQuestion: '',
    answer: generateQuestion(),
    qAnswer: '',
    finalAns: '',
    checkAnswer: ''
  })


  const [isModalOpen, setIsModalOpen] = useState(true);
  const [finalAns, setFinalAns] = useState(false);


  const addQA = () => {
      firebase
      .firestore().collection('visitors')
      .add({
        name: qa.nickName,
        finalQuestion: qa.finalQuestion,
        answer: qa.answer,
        qAnswer: qa.qAnswer,
        finalAns: qa.finalAns,
        checkAnswer:finalAns ? 'Tama' : 'Mali'
      })
      .then(() => {
        console.log('QA SAVED!')
      }).catch((error) => {
        console.log(error.message)
      });
  };

  const handleModalClose = (ans) => {

    if (qaData[qa.answer].qAnswer == ans){
      setFinalAns(true)
    }else{
      setFinalAns(false)
    }

    setQa({ ...qa, finalAns: ans })
  }

  const onNextQAClicked = () => {

    if(qa.nickName !== ''){
      setFinalQ(qaData[qa.answer].question)
      setQa({ ...qa, finalQuestion: qaData[qa.answer].question, qAnswer: qaData[qa.answer].qAnswer })
    }
    if(qa.finalAns){
      setIsModalOpen(false)
      addQA()
    }
  }

  const overFlowHiddem = !isModalOpen ? '' : 'overflow-hidden'

  return (
    <>
      <main className={`bg-[#fef1e2] h-screen ${overFlowHiddem}`}>

        <Modal isOpen={isModalOpen} onClose={handleModalClose} qaFinal={qa.finalQuestion} finalAns={qa.finalAns} onOk={onNextQAClicked}>
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold my-8 text-[#724526]">
           {
            qa.finalQuestion !== '' ?
             `Kamusta ${qa.nickName}! Ito ang aming tanong.`
             : 
           ` Maligayang Pagbisita sa aming Website!`
           }
            
            </h2>
            <p className=" text-gray-800 px-4 sm:px-10 my-9">
              {finalQ}
            </p>
            {
              qa.finalQuestion == '' ?
                <div className="my-7">
                  <label
                    className="block text-sm font-medium text-gray-700 "
                    htmlFor="name"
                  >
                    Ano ang iyong palayaw?
                  </label>
                  <input
                    className={`px-4 sm:px-10 text-center mt-1 py-2 text-sm font-normal text-gray-900  border dark:focus:border border-gray-300  outline-none  focus:shadow-sm rounded-md`}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    required
                    onChange={(e) => setQa({ ...qa, nickName: e.target.value })}
                    value={qa.nickName}
                  />
                </div>
                :
                <div className="flex flex-col gap-5 font-semibold sm:px-7 mb-5 sm:mb-0">
                 {
                  qa.finalAns !== '' &&
                 <h1 className={ finalAns ? `text-md font-semibold text-[#1e6e36]` : `text-md font-semibold text-[#e23030]`}>
                 {
                  finalAns 
                  ? `Ang iyong sagot ay tama.`
                  : `Ang iyong sagot ay mali.`
                 }</h1>
                 }
                  <button
                    onClick={()=> handleModalClose(qaData[qa.answer].choice1)}
                    type="button"
                    className="h-10 mx-auto w-full   px-4 sm:px-10 flex justify-start items-center rounded-sm py-1 bg-[#ffecd6] text-sm sm:text-base text-gray-600 hover:bg-[#e6ddd2]"
                  >
                    {qaData[qa.answer].choice1}
                  </button>
                  <button
                    onClick={()=> handleModalClose(qaData[qa.answer].choice2)}
                    type="button"
                    className="h-10 mx-auto w-full px-4 sm:px-10 flex justify-start items-center rounded-sm py-1 bg-[#ffecd6] text-sm sm:text-base text-gray-600 hover:bg-[#e6ddd2]"
                  >
                   {qaData[qa.answer].choice2}
                  </button>
                  <button
                    onClick={()=> handleModalClose(qaData[qa.answer].choice3)}
                    type="button"
                    className="h-10 mx-auto w-full   px-4 sm:px-10 flex justify-start items-center rounded-sm py-1 bg-[#ffecd6] text-sm sm:text-base text-gray-600 hover:bg-[#e6ddd2]"
                  >
                  {qaData[qa.answer].choice3}
                  </button>
                </div>
            }

          </div>
        </Modal>

        <Navbar modalOpen={isModalOpen} />
        <Head />
        <TheChuch />
        <TheRecep />
        <Schedule />
        <Entourage />
        <Footer />
        <Analytics />
      </main>
    </>
  )
}

export default App
