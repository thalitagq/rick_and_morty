import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';

class Home extends Component {

    state = {
        characters: []
    }

    componentDidMount(){
        return fetch('https://rickandmortyapi.com/api/character/?page=2')
        .then((data) => data.json())
        .then((dataJson) => {
            this.setState({characters: dataJson.results})
            console.log('did');
            console.log(this.state.characters);
        });

    }

    getCharacter(i){
        return fetch('https://rickandmortyapi.com/api/character/?page='+i)
        .then((data) => data.json())
        .then((dataJson) => {
            this.setState({characters: dataJson.results})
            console.log(this.state.characters);
        });

    };



    render() {
        let c = this.state.characters[0];
        return (

            <div className = "container">
                <div className = "row">
                    <CharacterCard character = {c}/>
                </div>
            </div>
        )

  }
}

export default Home;
