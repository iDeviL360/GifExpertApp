import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    
    const { data : images, loading } = useFetchGifs(category);


    // //El useEffect se utiliza para ejecutar una funcion solamente una vez, sucede que al momento de modificar algun State el componente entero se redibuja y por ese motivo si tenes una funcion se va a volver a disparar cada vez que haya un cambio, entonces con el useEffect evitamos eso.
    // useEffect(() => {
    //     getGifs( category )
    //         .then(setImages);
    // }, [ category ])

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                    {
                        images.map(img => (
                            <GifGridItem 
                            key={ img.id }
                            { ...img }
                            />
                            ))
                    }
            </div>
        </>
    )
}
