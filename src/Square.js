import {useState} from 'react';
import './Square.css';

function Square(){
    const[value, setValue] = useState(null);

    function handleClick(){
        setValue('X');
    }

    return <button onClick={handleClick} classname="square">{value}</button>
}

export default Square;