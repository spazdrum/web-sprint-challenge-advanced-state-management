import React from 'react';

const Card = (props) => {
    return (
        <div className="smurf">
            <h3>name: {props.data.name}</h3>
            <h4>Age: {props.data.age}</h4>
            <h4>Height: {props.data.height}</h4>
        </div>
    )
}

export default Card;