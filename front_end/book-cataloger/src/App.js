import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Book from './components/Book'
import Edit from './components/Edit'


const App = () => {

  const [books, setBooks] = useState([])
 
  const getBooks = () => {
    axios.get('http://localhost:3000/books').then((response) => {
      setBooks(response.data)
    })
  }
  const handleDelete = (book) => {
    axios.delete(`http://localhost:3000/books/${book._id}`).then(() => {
      axios.get('http://localhost:3000/books').then((response) => {
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
          <Edit book={book} getBooks={getBooks} handleDelete={handleDelete}/>
          </>
        )
      })}
    </>
  )
   
}

export default App;


