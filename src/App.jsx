import Head from "./components/Head"
import Navbar from "./components/Navbar"
import { Analytics } from '@vercel/analytics/react';
import TheChuch from "./components/TheChuch";
import Footer from "./components/Footer";
import TheRecep from "./components/TheRecep";
import Schedule from "./components/Schedule";
import Entourage from "./components/Entourage";


function App() {

  return (
    <>
      <main className="bg-[#fef1e2] h-screen">
        <Navbar />
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
