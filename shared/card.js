'use client'
import Image from "next/image";
import placeholder from '../public/loading.jpg';
import { useState, useEffect} from "react";
export const Card=({breed})=>{
    const [imageSrc, setImageSrc]=useState(placeholder);
    const [loading, setLoading]= useState(true);
    useEffect(()=>{
        const fetchImage= async ()=>{
            try{
                const respone = await fetch (`https://dog.ceo/api/breeds/${breed}/image/random`);
                const data= await respone.json();
                setImageSrc(data.message);

            }
            catch(error){
                console.error('Error', error);
            }finally{
                setLoading(false);
            }
            };
            fetchImage();
        },[]);
    return(
        <div className="w-[263px] h[189px]">
            <Image className="rounded-[50px]" src={imageSrc} width={263} height={189} alt="Sobaka"/>
        </div>
    )
}