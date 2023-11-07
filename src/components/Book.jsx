import "../styles/Book.css"

const Book = ( {poster} ) => {
    return (
        <div className="book">
            <img 
            width = {200}
            height = {220}
            src={poster}
            alt= "book"
            >
            </img>
        </div>
    )
}

export default Book;