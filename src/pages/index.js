import Image from 'next/image'
import { Inter } from 'next/font/google'
import Signup from './components/signup'
import Main from './components/main'
import Blog from './components/blog'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main>
    <Main/>
    <Blog/>
   </main>
  )
}
