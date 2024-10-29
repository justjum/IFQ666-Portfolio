import { useEffect, useState } from 'react'
import crypto from 'crypto'

export default function Images() {
    const apikey = import.meta.env.REACT_APP_IMAGE_API

    useEffect(()=> {
        async function cloudinary() {
            fetch(`https://api.imgbb.com/1/&key=${apikey}`)
                .then(res => res.json())
                .then(res => console.log(res))
        }
        cloudinary();
    },[])
    
    return <>
        <h1>Images Placeholder</h1>
    </>
}