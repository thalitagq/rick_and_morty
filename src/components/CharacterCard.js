import React from "react";

const CharacterCard = (character)=>{
    console.log(character);
    console.log(JSON.parse(JSON.stringify(character)).imagem);
  return(
  <div className = "col-md-4">
    <div className="card" style={{width: "18rem",  margin:"15px", background:"#263B60"}}>
      <img className="card-img-top" src={character.image} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"  >{character.id}</li>
        <li className="list-group-item" >{character.status}</li>
        <li className="list-group-item">{character.species}</li>
      </ul>
    </div>
  </div>
  );
};

export default CharacterCard;
