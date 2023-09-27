import Head from "./components/Head"
import Navbar from "./components/Navbar"
import { Analytics } from '@vercel/analytics/react';
// import pjLogo from '../src/assets/pjlogo.svg'
// import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {

  return (
    <>
      {/* <HelmetProvider> */}
        {/* <Helmet> */}
          {/* <title>Paula & Julbert</title> */}
          {/* <meta property="og:image" content={pjLogo}/> */}
        {/* </Helmet> */}
        <main className="bg-[#fef1e2] h-screen">
          <Navbar />
          <Head />
          <Analytics />
        </main>
      {/* </HelmetProvider> */}
    </>
  )
}

export default App
