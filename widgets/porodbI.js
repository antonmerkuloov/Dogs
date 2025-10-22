import { Card } from "../shared/card"
import {Title} from "../shared/ui"

const breedsList=[
    {src:"appenzeller"},
    {src:"bluetick"},
    {src:"chihuahua"},
    {src:"dalmatian"},
    {src:"greyhound"},
    {src:"husky"},
    {src:"malinois"},
    {src:"mudhol"},
    {src:"papillon"},
    {src:"pitbull"},

]
export const PorodbI=()=>{
    return(
        <div className="my-16">
            <Title children="Породы"/>
            <div className="mt-7 flex flex-wrap  items-start gap-2,5 w-[1360px]">
                {breedsList.map((item, i)=>{
                    return <Card key={i} breed={item.src}/>
                })}
            </div>
            
        </div>
    )
}