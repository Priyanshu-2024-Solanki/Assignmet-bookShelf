import React from 'react'

const NewBook = ({title , count}) => {
    return <div className="w-60 p-4 m-4 border-2 border-black rounded-lg">
        <div><span className="font-semibold">Book Title:</span> {title}</div>
        <div className="mt-4">Edition Count : {count}</div>
    </div>
}

export default NewBook
