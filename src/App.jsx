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


function App() {


  const [finalQ, setFinalQ] = useState('Bago mo makita ang buong detalye ng website, mayroon kaming dalawang tanong para sa iyo.')

  const generateID = () => {
    return Math.floor(Math.random() * 10000000000)
  }
  const [qa, setQa] = useState({
    id: generateID(),
    nickName: '',
    finalQuestion: '',
    answer: ''
  })


  const [isModalOpen, setIsModalOpen] = useState(true);


  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const onNextQAClicked = () => {
    setFinalQ(qaData[0].question)
    setQa({ ...qa, finalQuestion: qaData[0].question })
  }

  console.log(qa)

  const overFlowHiddem = !isModalOpen ? '' : 'overflow-hidden'

  return (
    <>
      <main className={`bg-[#fef1e2]  h-screen ${overFlowHiddem}`}>

        <Modal isOpen={isModalOpen} onClose={handleModalClose} qaFinal={qa.finalQuestion} onOk={onNextQAClicked}>
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold my-8 text-[#724526]">Maligayang Pagbisita sa aming website!</h2>
            <p className=" text-gray-800 px-4 sm:px-10 my-10">
              {finalQ}
            </p>
            {
              qa.finalQuestion == '' ?
                <div className="my-10">
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
                <div className="flex flex-col gap-3 justify-center items-center">
                  <button
                    onClick={handleModalClose}
                    type="button"
                    className="h-9  px-4 sm:px-10 flex  rounded-md border border-transparent shadow-sm  py-1 bg-[#7a6955] text-base text-white hover:bg-[#866239]"
                  >
                    {qaData[0].choice1}
                  </button>
                  <button
                    onClick={handleModalClose}
                    type="button"
                    className="h-9  px-4 sm:px-10 flex  rounded-md border border-transparent shadow-sm  py-1 bg-[#7a6955] text-base text-white hover:bg-[#866239]"
                  >
                    {qaData[0].choice2}
                  </button>
                  <button
                    onClick={handleModalClose}
                    type="button"
                    className="h-9  px-4 sm:px-10 flex  rounded-md border border-transparent shadow-sm  py-1 bg-[#7a6955] text-base text-white hover:bg-[#866239]"
                  >
                    {qaData[0].choice3}
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
