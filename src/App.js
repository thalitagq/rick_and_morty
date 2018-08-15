import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './container/Home';



class App extends Component {

    state = {
        characters: []
    }



    render() {
        return (
        <div>
            <Header/>

            <Home characters = {this.state.characters}/>

        </div>
        );
      }
}

export default App;
