export const Button=({children}) =>
{
    return( 
    <div className="bg-[#4d86ff] w-fit py-2.5 px-11 rounded-b-full transition ease-in-out duration-500 hover:bg-[#7ea6ff]">
            <a href="#">
                <span className="text-white">{children}</span>
            </a>
    </div>
    )
}
export const Title=({children}) =>{
    return <h2 className="text-[#4d86ff]
    font-[Inter] text-4xl font-black">{children}</h2>
}
export const Link =({children}) =>{
    return <a href="{Link}">{children}</a>
}
