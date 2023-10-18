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



function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);


  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const onDeleteUserClicked = () => {

  }

  const overFlowHiddem =  !isModalOpen ? '' : 'overflow-hidden'

  return (
    <>
      <main className={`bg-[#fef1e2]  h-screen ${overFlowHiddem}`}>

       <Modal isOpen={isModalOpen} onClose={handleModalClose} onOk={onDeleteUserClicked}>
        <div className="bg-white p-4">
          <h2 className="text-xl font-bold my-8 text-[#724526] ">Maligayang Pagbisita sa aming website!</h2>
          <p className=" text-gray-800 px-4 sm:px-10 my-10">
          Bago mo makita ang buong detalye ng website, 
          mayroon kaming dalawang tanong para sa iyo.
          </p>
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
