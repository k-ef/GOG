import { Calculator, CircleIcon, CogIcon, Grid3X3Icon, HomeIcon, Loader2Icon, Play, PuzzleIcon } from "lucide-react"
import MyButton, { PlayButton } from "./MyButton"
import huhuCat from '../assets/huhCat.png'

export default function App() {
    const a = 32
    ////code here

    return (
        <>

            <div className="bg-green h-screen">
                {/* Header */}
                <div className="h-24 mb-5 bg-grey flex items-center gap-x-2">
                    <div className="h-16 w-24 border-2 ml-4 text-white">
                        logo
                    </div>
                    <div className="text-white font-extrabold mb-8">
                        GAME OF THE GENERALS

                    </div>
                </div>

                {/* Clock & Icon */}
                <div className="flex justify-between">
                    <div className="h-12 w-20 border-2 rounded-2xl ml-8 flex items-center justify-center text-white">
                        10:00
                    </div>

                    <div className="size-12 border-2 text-white mr-8 flex items-center justify-center ">
                        KEF
                    </div>
                </div>

                {/* Board */}
                <div className="h-[315px] border-2 mx-3 my-3">

                </div>


                {/* Play Button */}
                <PlayButton />

            </div>
            <footer className="h-24 bg-grey sticky bottom-0 shadow-[rgba(0,0,15,.25)_0px_-5px_10px_0px] flex p-2 gap-x-3 justify-between">
                <HomeIcon size={80} color="white" stroke="black" strokeWidth={2} className="bg-[#d4c782]"/>
                <PuzzleIcon size={80} color="white"/>
                <CircleIcon size={80} color="white"/>
                <Grid3X3Icon size={80} color="white"/>
                <CogIcon size={80} color="white"/> 
            </footer>
        </>
    )
}

