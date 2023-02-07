import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){
    const [books, setBooks] = useState([]);

    const fetchbooks = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);
    },[]);


    const deleteBookById = async (id) => {

        const response = await axios.delete(`http://localhost:3001/books/${id}`);

        console.log(response.data);

        const updatedBooks = books.filter((book) => {
            return id !== book.id;
        });

        setBooks(updatedBooks);

    };

    const editBookById = async (id, newTitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title : newTitle
        });

        console.log(response.data);

        const updatedBooks = books.map((book) => {

            if (id === book.id)
                return { ...book, ...response.data };

            return book;
        });

        setBooks(updatedBooks);

    };

    const createBook = async (title) => {

        const response = await axios.post("http://localhost:3001/books", {
            title
        });

        console.log(response.data);

        const updatedBooks = [...books, response.data];

        setBooks(updatedBooks);
    }

    const valueToShare = {
        books,
        fetchbooks,
        deleteBookById,
        editBookById,
        createBook
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };

export default BooksContext;
