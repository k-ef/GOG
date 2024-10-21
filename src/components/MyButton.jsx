function MyButton({value}){
    return(
        <>
            <div className="size-24 rounded-3xl bg-green2">
                <div className="text-center mt-8 text-white font-bold">{value}</div>
            </div>
        </>
    )
}

export function PlayButton(){
    return(
        <>
            <div className="h-12 rounded-3xl bg-green2 flex items-center justify-center mx-2">
                <div className="text-white font-bold ">PLAY</div>
            </div>
        </>
    )
}

export default MyButton