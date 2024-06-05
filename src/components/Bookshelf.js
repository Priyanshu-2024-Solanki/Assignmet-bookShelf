import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NewBook from './NewBook';

const Bookshelf = () => {
    const [bookShelf , setBookShelf] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const bookShelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        // console.log(bookShelf);
        setBookShelf(bookShelf);
    },[])

    function clearCart()
    {
        const updatedBookshelf = [];
        setBookShelf([]);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf))
    }

    if(bookShelf.length === 0) {
        return (<div>
                   <button className="ml-[550px] mt-10 bg-green-800 mr-10 p-2 rounded-lg hover:bg-green-400 hover:text-black text-white" onClick={() => navigate('/')}>Back to Search</button>
             <div className='text-center mt-10 text-red-400 text-3xl items-center'>
               Please add some books to your shelf
             </div>
        </div>)
       
    }

  return (
    <div >
       <button className="ml-[550px] mt-10 bg-green-800 mr-10 p-2 rounded-lg hover:bg-green-400 hover:text-black text-white" onClick={() => navigate('/')}>Back to Search</button>
       <button className='bg-red-400 p-2 rounded-lg hover:bg-red-700' onClick={clearCart}>Clear Shelf</button>
    <div className='flex flex-wrap items-center justify-center mt-20'>

      {bookShelf.map((book) => (
            <NewBook key={book.key} title={book.title} count={book.count} />
        ))}
    </div>
    </div>
  )
}

export default Bookshelf
