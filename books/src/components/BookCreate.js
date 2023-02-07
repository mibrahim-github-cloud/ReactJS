import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    return <div className="book-create">
        <form onSubmit={handleFormSubmit}>
            <label>Enter the Title</label>
            <input value={title} onChange={handleChange} />
            <button>Add Book</button>
        </form>
    </div>;
}

export default BookCreate;