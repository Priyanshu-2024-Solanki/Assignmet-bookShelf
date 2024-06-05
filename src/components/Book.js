import { useState } from "react";

function Book({uniKey ,title , count})
{
    const addToBookshelf = (book) => {
        const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        const updatedBookshelf = [...bookshelf, book];
        // console.log(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };
    
    return <div className="w-60 p-4 m-4 border-2 border-black rounded-lg">
        <div><span className="font-semibold">Book Title:</span> {title}</div>
        <div className="mt-4">Edition Count : {count}</div>
        <button className="mt-20 bg-green-800 p-2 rounded-lg flex mx-auto hover:bg-green-400 hover:text-black text-white" onClick={() => addToBookshelf({
            key: uniKey,
            title,
            count
        })}>Add To BookShelf</button>
    </div>
}

export default Book;