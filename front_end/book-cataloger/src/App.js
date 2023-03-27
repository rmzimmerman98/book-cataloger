import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Book from './components/Book';

const App = () => {

  const [books, setBooks] = useState([])
 
  const getBooks = () => {
    axios.get('http://localhost:3000/books').then((response) => {
      setBooks(response.data)
    })
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/books' + data._id, data)
    .then((response) => {
      let newBooks = books.map((book) => {
        return book._id !== data._id ? book : data
      })
    })
  }

  const handleDelete = (bookData) => {
    axios.delete(`http://localhost:3000/books/${bookData._id}`)
    .then(() => {
      axios.get('http://localhost:3000/books')
      .then((response) => {
        setBooks(response.data)
      })
    })
  }

  useEffect(() => getBooks(), [])
  return (
    <>
      <h1>Testing</h1>
      <Add getBooks={getBooks}/>
      {books.map((book) => {
        return (
          <>
          <Book book={book}/>
          <Edit book={book} handleDelete={handleDelete}/>
          </>
        )
      })}
    </>
  )
   
}

export default App;


