import React, { useEffect, useState, useRef } from 'react';
import Book from './Book';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const queryRef = useRef(query);
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setBooks(data.docs);
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
       
      
    };
    
    const handler = setTimeout(()=>{
        if(queryRef.current === query) {
            // console.log(query);
            fetchBooks();
        }
    },1000);

    return () => {
        clearTimeout(handler);
    }
  }, [query]);

  useEffect(()=>{
    queryRef.current = query;
  },[query])


  return (
    <div>
      <div className="flex mt-4 justify-end">
        <div className="m-2 text-center mr-[350px] text-2xl">Search by Book Name :</div>
        <button className="bg-green-800 mr-10 p-2 rounded-lg hover:bg-green-400 hover:text-black text-white" onClick={() => navigate('/bookshelf')}>My Bookshelf</button>
      </div>
      <input
        className="border border-black flex mx-auto mt-4 px-5 py-2 rounded-lg"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type a book name..."
      />
      {loading && <div className="text-center mt-4">Loading...</div>}
      {error && <div className="text-center mt-4 text-red-500">{error}</div>}
      {!loading && books.length > 0 && (
        <div className="flex flex-wrap items-center justify-center mt-20">
          {books.map((book) => (
            <Book key={book.key} uniKey={book.key} title={book.title} count={book.edition_count} />
          ))}
        </div>
      )}
      {!loading && books.length===0 && <div className='text-center mt-4 text-red-500'>No Books Found</div>} 
    </div>
  );
}

export default MainPage;
