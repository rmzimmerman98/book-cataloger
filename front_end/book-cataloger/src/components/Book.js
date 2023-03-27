const Book = (props) => {
    return (
        <div>
            <div key={props.book._id}>
                <h2>Title: {props.book.title}</h2>
                <h4>Author: {props.book.author}</h4>
                <h4>Publisher: {props.book.publisher}</h4>
                <h4>Pages: {props.book.pages}</h4>
                <h4>Summary: {props.book.summary}</h4>
                <h4>Finished Reading: {props.book.read ? <>true</> : <>false</>}</h4>
            </div>
        </div>
    )
}

export default Book