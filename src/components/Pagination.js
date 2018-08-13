import React, { Component, Fragment } from 'react';

class Pagination extends Component {
    state = {
        characters: []
    }


    //e = event
    getCharacter = async (e) => {
        const characterName = e.target.elements.characterName.value;
        e.preventDefault(); // faz a pagina não atualizar apos apertar search

        const api_call = await fetch('https://rickandmortyapi.com/api/character');

        const data = await api_call.json();
        this.setState({characters: data.results});
        console.log(this.state.characters);

    }

      render() {
        return (
            null


        );
      }
    }
export default Pagination;
