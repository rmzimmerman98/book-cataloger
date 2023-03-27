import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Book from './components/Book'

const App = () => {

  const [books, setBooks] = useState([])
 
  const getBooks = () => {
    axios.get('http://localhost:3000/books').then((response) => {
      setBooks(response.data)
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
          </>
        )
      })}
    </>
  )
   
}

export default App;


