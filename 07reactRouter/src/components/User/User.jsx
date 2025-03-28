import React from 'react'
import { useParams } from 'react-router-dom'

//  this is loader

export function User(props) {
    const {userid} = useParams()   //   help in giving userId or giving the access which is inside the URL
    return (
        <>
            <div className='bg-gray-600 text-white text-2xl p-2 rounded-sm' >User:{userid}</div>
        </>
    )
}