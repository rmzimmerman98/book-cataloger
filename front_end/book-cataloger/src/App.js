import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Book from './components/Book';

const App = () => {
  //states
  const [books, setBooks] = useState([])
  //api request
  const getBooks = () => {
    axios.get('http://localhost:3000/books').then((response) => {
      setBooks(response.data)
    })
  }
  return (
    <>
      <h1>Testing</h1>
    </>
  )
   
}

export default App;


