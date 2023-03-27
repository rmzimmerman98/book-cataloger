const Book = (props) => {
    return (
        <div>
            <div key={props.book._id}>
                <h3>{props.book.title}</h3>
                <h4>{props.book.author}</h4>
                <h4>{props.book.publisher}</h4>
                <h6>{props.book.pages}</h6>
                <p>{props.book.summary}</p>
            </div>
        </div>
    )
}

export default Book