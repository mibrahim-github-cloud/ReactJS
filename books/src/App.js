import './index.css';
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {

        const updatedBooks = books.filter((book) => {
            return id !== book.id;
        });

        setBooks(updatedBooks);

    };

    const editBookById = (id,newTitle) => {

        const updatedBooks = books.map((book) => {

            if(id==book.id)
                return {...book,title:newTitle};

            return book;
        });

        setBooks(updatedBooks);

    };

    const createBook = (title) => {
        const updatedBooks = [...books, {
            id: Math.round(Math.random() * 9999),
            title
        }];

        setBooks(updatedBooks);
    }

    return <div>
        <label>Reading List!!</label>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}></BookList>
        <BookCreate onCreate={createBook} />
    </div>
}

export default App;