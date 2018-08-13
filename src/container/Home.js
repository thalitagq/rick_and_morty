import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: []
        };
    }

    componentDidMount(){
        this.getItems();
    }

    getItems(){
        fetch('https://rickandmortyapi.com/api/character/')
          .then(results => results.json())
          .then(results =>this.setState({characters: results}));//console.log(results));
    }


    render() {

        return (
            null
        )

  }
}

export default Home;
