import React from 'react';

const Form = props => (
    <form onSubmit={props.getCharacter} style = {{marginBotton:'2rem' }}>
        <input  type = "text" name = "characterName"/>
        <button>Search</button>
    </form>

)

export default Form;
