import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";




function App() {

    const [animal, setAnimal] = useState([]);
    function getRandomAnimal() {
        const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

        return animals[Math.floor(Math.random() * animal.length)];
    }

    const handleClick = () => {
        setAnimal([...animal, getRandomAnimal()])
    }

    const renderAnimals = animal.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return <div className='app'>
        <button onClick={handleClick}>Add Animal</button>
        <div className='animal-list'>
            {renderAnimals}
        </div>
    </div>;
}

export default App;