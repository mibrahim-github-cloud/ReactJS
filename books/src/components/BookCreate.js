import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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