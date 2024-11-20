import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log({images, isLoading})



    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Cargando...</h2>)}
            

            <div className="card-grid">
                {/* {images.map((img)=>
                    <li key={img.id}>{img.title}</li>
                )} */}
                {images.map((img) =>
                    <GifItem key={img.id}
                        {...img} // ASÍ NO PASA UNO POR UNO
                        />
                )}

            </div>
            {/* <p>Hola Mundo</p> */}
        </>
    )
}
