import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';

import Home from './container/Home';
import Characters from './components/Characters';


class App extends Component {

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
        <div>
            <Header/>
            <NavBar getCharacter = {this.getCharacter}/>
            <Home/>

        </div>
        );
      }
}

export default App;
