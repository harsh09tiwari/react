import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export function Github(props) {
    const data = useLoaderData()   //   concept of LOADER
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/harsh09tiwari')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return (
        <div className='text-center m-4 bg-white text-black p-2 text-2xl rounded-sm'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={260} />
        </div>
    )
}

//   concept of lOADER
export const githubInfoLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/harsh09tiwari')
    return response.json()
}