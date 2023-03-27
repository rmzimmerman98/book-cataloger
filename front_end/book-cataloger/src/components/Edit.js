import React from 'react';
import { useState } from 'react';
import axios from 'axios'

const Edit = (props) => {
    const [newTitle, setNewTitle] = useState(props.book.title)
    const [newAuthor, setNewAuthor] = useState(props.book.author)
    const [newPublisher, setNewPublisher] = useState(props.book.publisher)
    const [newPages, setNewPages] = useState(props.book.pages)
    const [newSummary, setNewSummary] = useState(props.book.summary)
    const [haveRead, setHaveRead] = useState(props.book.read)
    const [books, setBooks] = useState('')

    const handleTitleUpdate = (event) => {
        setNewTitle(event.target.value)
    }
    const handleAuthorUpdate = (event) => {
        setNewAuthor(event.target.value)
    }
    const handlePublisherUpdate = (event) => {
        setNewPublisher(event.target.value)
    }
    const handlePagesUpdate = (event) => {
        setNewPages(event.target.value)
    }
    const handleSummaryUpdate = (event) => {
        setNewSummary(event.target.value)
    }

    const handleHaveRead = () => {
        setHaveRead(!haveRead)
    }

    const handleEdit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3000/books/${props.book._id}`,
        {
            title: newTitle,
            author: newAuthor,
            publisher: newPublisher,
            pages: newPages,
            summary: newSummary,
            read: haveRead
        }
        ).then(() => {
            axios.get('http://localhost:3000/books').then((response) => {
              setBooks(response.data)
              props.getBooks()
            })
        })
    }

    return (
        <div>
            <form onSubmit={handleEdit}>
                <label>Title:</label><br/><input type='text' name='title' placeholder={props.book.title} onChange={handleTitleUpdate}/><br/>
                <label>Author:</label><br/><input type='text' name='author' placeholder={props.book.author} onChange={handleAuthorUpdate}/><br/>
                <label>Publisher:</label><br/><input type='text' name='publisher' placeholder={props.book.publisher} onChange={handlePublisherUpdate}/><br/>
                <label>Pages:</label><br/><input type='number' name='pages' placeholder={props.book.pages} onChange={handlePagesUpdate}/><br/>
                <label>Summary:</label><br/><input type='text' name='summary' placeholder={props.book.summary} onChange={handleSummaryUpdate}/><br/>
                {props.book.read ? 
                <>
                    <label htmlFor='read'>Finished Reading</label> <input type='checkbox' name='read' onChange={handleHaveRead} defaultChecked/>
                </>
                : 
                <>
                    <label htmlFor='read'>Finished Reading</label> <input type='checkbox' name='read' onChange={handleHaveRead}/>
                </>}
                <button type='submit' form='editForm'>Update</button>
            </form>
            <button onClick={() => {props.handleDelete(props.book)}}>Delete</button>
        </div>
    )
}

export default Edit