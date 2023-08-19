import Image from 'next/image'
import { Inter } from 'next/font/google'
import Signup from './components/signup'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main>
    <Signup/>
   </main>
  )
}
