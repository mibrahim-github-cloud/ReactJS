import './index.css';
import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from './hooks/use-books-context';

function App() {
    const { fetchbooks } = useBooksContext();

    useEffect(() => {
        fetchbooks();
    }, [fetchbooks]);

    return <div>
        <label>Reading List!!</label>
        <BookList/>
        <BookCreate/>
    </div>
}

export default App;