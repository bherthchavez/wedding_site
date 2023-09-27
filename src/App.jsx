import Head from "./components/Head"
import Navbar from "./components/Navbar"
import { Analytics } from '@vercel/analytics/react';
function App() {

  return (
    <>
      <main className="bg-[#fef1e2] h-screen">
        <Navbar />
        <Head />
        <Analytics />
      </main>
    </>
  )
}

export default App
