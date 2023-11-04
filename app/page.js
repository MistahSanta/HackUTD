import Image from 'next/image'
import Playbar from './components/playbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  

      <footer className="flex flex-col h-[12vh] w-full bottom-0 absolute left-0 justify-center items-center bg-red-500"> 
        <Playbar />
      </footer>
      
    </main>
  )
}
