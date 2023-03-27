import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'

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
    </>
  )
   
}

export default App;


