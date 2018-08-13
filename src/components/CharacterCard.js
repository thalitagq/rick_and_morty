import React from "react";

const CharacterCard = (props)=>{
  return(
  <div class = "col-md-4">
    <div class="card" style={{width: "18rem",  margin:"15px", background:"#263B60"}}>
      <img class="card-img-top" src=".../100px180/?text=Image cap" />
      <div class="card-body">
        <h5 class="card-title">(props.name)</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"  >(props.id)</li>
        <li class="list-group-item" >(props.status)</li>
        <li class="list-group-item">(props.species)</li>
      </ul>
    </div>
  </div>
  );
};

export default CharacterCard;
