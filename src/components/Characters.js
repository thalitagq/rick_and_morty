import React from 'react';



const Characters = props => (
    <div className = "container">
        <div className = "row">
            {props.characters.map((character) =>{

                return (
                    <div key = {character.id} className = "col-md-4" >
                        <div className="card" style={{width: "18rem",  margin:"15px", background:"#263B60"}}>
                          <img className="card-img-top" src={character.image} alt={character.name}/>
                          <div className="card-body" style={{background:"#b8db4f"}}>
                            <h5 className="card-title" >{character.name}</h5>
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item" >{character.id}</li>
                            <li className="list-group-item" >{character.status}</li>
                            <li className="list-group-item" >{character.species}</li>
                          </ul>
                        </div>
                    </div>
                );
            })}

        </div>
    </div>


);

export default Characters;
