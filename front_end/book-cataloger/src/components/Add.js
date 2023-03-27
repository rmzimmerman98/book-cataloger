import {useState} from 'react'
import axios from 'axios'


const Add = (props) => {
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [publisher, setPublisher] = useState()
    const [summary, setSummary] = useState()
    const [pages, setPages] = useState()
    const [read, setRead] = useState(false)

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleAuthor = (event) => {
        setAuthor(event.target.value)
    }
    const handlePublisher = (event) => {
        setPublisher(event.target.value)
    }
    const handleSummary = (event) => {
        setSummary(event.target.value)
    }
    const handlePages = (event) => {
        setPages(event.target.value)
    }
    const handleRead = () => {
        setRead(!read)
    }

    const handleAdd = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/books', {
            title: title,
            author: author,
            publisher: publisher,
            summary: summary,
            pages: pages,
            read: read
        }).then(()=> {
            props.getBooks()
        })
    } 

    return (
        <>
        <h1>Add Book</h1>
        <form onSubmit={handleAdd}>
            <label htmlFor='title'>Title </label>
            <input type='text' name='title' onChange={handleTitle}></input>
            <br/><br/>
            <label htmlFor='author'>Author </label>
            <input type='text' name='author' onChange={handleAuthor}></input>
            <br/><br/>
            <label htmlFor='publisher'>Publisher </label>
            <input type='text' name='publisher' onChange={handlePublisher}></input>
            <br/><br/>
            <label htmlFor='summary'>Summary</label>
            <input type='text' name='summary' onChange={handleSummary}></input>
            <br/><br/>
            <label htmlFor='pages'>Pages</label>
            <input type='number' name='pages' onChange={handlePages}></input>
            <br/><br/>
            {read 
            ? <><label htmlFor='read'>Finished Reading</label>
            <input type='checkbox' name='read' defaultChecked onChange={handleRead}></input></>
            : <><label htmlFor='read'>Finished Reading</label>
            <input type='checkbox' name='read' onChange={handleRead}></input></>
            }
        </form>
        </>
    )
}

export default Add