import Head from "./components/Head"
import Navbar from "./components/Navbar"
import { Analytics } from '@vercel/analytics/react';
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Paula & Julbert</title>
          <meta
            name="description"
            content="Welcome to Our Wedding Website ^_^"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://designcode.io/cloud/v2/twitter.jpg" />
          <meta
            name="twitter:title"
            content="Design+Code - Learn to design and code React and Swift apps"
          />
          <meta name="twitter:creator" content="@diepsteph" />
          <meta name="twitter:site" content="@diepsteph" />
          <meta
            name="twitter:description"
            content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="www.designcode.io" />
          <meta
            property="og:title"
            content="Design+Code - Learn to design and code React and Swift apps"
          />
          <meta
            property="og:description"
            content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
          />
          <meta
            property="og:image"
            content="https://designcode.io/cloud/v2/twitter.jpg"
          />
        </Helmet>
        <main className="bg-[#fef1e2] h-screen">
          <Navbar />
          <Head />
          <Analytics />
        </main>
      </HelmetProvider>
    </>
  )
}

export default App
