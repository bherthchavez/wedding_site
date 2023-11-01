
import Head from './Head'
import TheChuch from './TheChuch'
import TheRecep from './TheRecep'
import Schedule from './Schedule'
import Entourage from './Entourage'
import Colors from './Colors'
import Navbar from './Navbar'
import { Analytics } from '@vercel/analytics/react'

function Home() {
    return (
        <>
            <Navbar />
            <Head />
            <TheChuch />
            <TheRecep />
            <Schedule />
            <Entourage />
            <Colors />
            <Analytics />

        </>
    )
}

export default Home