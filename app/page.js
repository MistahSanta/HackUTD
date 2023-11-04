
import Playbar from "./components/Playbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 w-full ">
      
      <footer className="w-full h-[10vh] flex absolute bottom-0 left-0 justify-center bg-black"> 
        <Playbar />
      </footer>
    </main>
  )
}
