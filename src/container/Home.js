import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            characters: [],
            part1: [],
            part2: [],
            next: true,
            prev: false,
            page: 1,
            part: 1,
            characterName: null

        }

    }

    componentDidMount(){
        return fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then((data) => data.json())
        .then((dataJson) => {
            this.setState({characters: dataJson.results,
                part1: dataJson.results.slice(0,10),
                part2: dataJson.results.slice(10,20)

            })
            console.log('did');
            console.log(this.state.characters);
            console.log(this.state.part1);
            console.log(this.state.part2);
        });

    }

    //e = event
    getCharacter = async (e) => {
        const characterName = e.target.elements.characterName.value;
        e.preventDefault(); // faz a pagina não atualizar apos apertar search
        const api_call = await fetch('https://rickandmortyapi.com/api/character/?page='+this.page+'&name='+characterName);
        const data = await api_call.json();
        this.setState({characters: data.results,
                        part1: data.results.slice(0,10),
                        part2: data.results.slice(10,20),
                        characterName: characterName
                        });
        console.log(this.state.characters);

    }

    nextPage = async () =>{
        var count = this.state.page;
        var part = this.state.part;
        if(this.state.characterName === null && this.state.next === true){

            if(part === 1){
                this.setState({ part: 2,
                                prev: true});
                part = 2;
                console.log("pagina: ",count);
                console.log("parte: ", part);
            }
            else {
                count++;
                part = 1;
                console.log("pagina: ",count);
                console.log("parte: ",part);
                this.setState({ page: this.state.page + 1,
                                part: 1});

                const api_call = await fetch('https://rickandmortyapi.com/api/character/?page='+count);
                const data = await api_call.json();
                console.log("pagina: "+ count);
                console.log(data.info.next);
                this.setState({characters: data.results,
                                part1: data.results.slice(0,10),
                                part2: data.results.slice(10,20),
                            });

                if(data.info.next === ""){
                    this.setState({next: false});
                }
            }

        }

        else if(this.state.characterName !== null && this.state.next === true){
            var countSearch = this.state.page;

            if(this.state.part === 1){
                this.setState({part: 2});
            }
            if(this.state.part === 2){
                this.setState({ page: this.state.page+1,
                                part: 1});

                const api_call = await fetch('https://rickandmortyapi.com/api/character/?page='+countSearch+'&name='+this.state.characterName);
                const data = await api_call.json();
                this.setState({characters: data.results,
                                part1: data.results.slice(0,10),
                                part2: data.results.slice(10,20),});
                if(data.info.next === ""){
                    this.setState({next: false});
                }
            }
        }
    }

    previousPage = async() =>{
        var count = this.state.page;
        var part = this.state.part;
        var prev = this.state.prev;
        if(this.state.characterName === null && this.state.prev === true){

            if(part === 1 && count !== 1){
                this.setState({ part: 2,
                                page: this.state.page-1});
                part = 2;
                count--;
                const api_call = await fetch('https://rickandmortyapi.com/api/character/?page='+count);
                const data = await api_call.json();
                this.setState({characters: data.results,
                                part1: data.results.slice(0,10),
                                part2: data.results.slice(10,20),
                            });

                console.log("pagina: ",count);
                console.log("parte: ", part);

            }
            else if (part === 1 && count === 1){

                this.setState({prev: false});
                prev = false;
                console.log("pagina: ",count);
                console.log("parte: ", part);
            }

            else{
                part = 1;
                this.setState({ part: 1});
                console.log("pagina: ",count);
                console.log("parte: ", part);
            }

        }

        //---------------previous on search--------------------
        else if(this.state.characterName !== null && this.state.prev === true){
            var countSearch = this.state.page;
            var partSearch = this.state.part;

            if(partSearch  === 1 && countSearch !== 1){
                this.setState({ part: 2,
                                page: this.state.page-1});
                partSearch = 2;
                countSearch--;
                const api_call = await fetch('https://rickandmortyapi.com/api/character/?page='+countSearch+'&name='+this.state.characterName);
                const data = await api_call.json();
                this.setState({characters: data.results,
                                part1: data.results.slice(0,10),
                                part2: data.results.slice(10,20),
                            });

                console.log("pagina: ",countSearch);
                console.log("parte: ", partSearch);

            }
            else if (partSearch === 1 && countSearch === 1){

                this.setState({prev: false});
                prev = false;
                console.log("pagina: ",countSearch);
                console.log("parte: ", partSearch);
            }

            else{
                partSearch = 1;
                this.setState({ part: 1});
                console.log("pagina: ",countSearch);
                console.log("parte: ", partSearch);
            }
        }
    }

    onClickCard(e, character){
        console.log(character);
        console.log(character.id);
        return(
            <div to ={{pathname: '/character/'+character.id}}>ver coisa</div>

        );
    }

    render() {
        if(this.state.part === 1){
            return(
                <div>
                <NavBar getCharacter = {this.getCharacter}/>
                    <button onClick = {this.previousPage} type="button" className="btn btn-primary btn-lg">Previous</button>
                    <button onClick = {this.nextPage} type="button" className="btn btn-primary btn-lg">Next</button>
                <div className = "container">
                    <div className = "row" style={{ marginLeft: "15px", marginRight:"15px"}}>
                        {this.state.part1.map((character) =>{
                            return (
                                <div onClick={((e) => this.onClickCard(e, character))} key = {character.id} className = "col-md-4" >
                                    <div className="card text-center" style={{width: "18rem",  margin:"15px"}}>
                                      <img className="card-img-top" src={character.image} alt={character.name}/>
                                      <div className="card-body">
                                        <h5 className="card-title" >{character.name}</h5>
                                      </div>
                                      <ul className="list-group list-group-flush">
                                        <li className="list-group-item" >{character.id}</li>
                                        <li className="list-group-item" >{character.status}</li>
                                        <li className="list-group-item" >{character.species}</li>

                                            <Link to = {{
                                                    pathname: 'character/'+character.id,
                                                    state: {character: character.id}}} className="btn btn-primary text-center">See</Link>

                                      </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className = "row" style={{marginLeft: 15}}>
                <button onClick = {this.previousPage}   type="button" className="btn btn-primary btn-lg">Previous</button>
                <button onClick = {this.nextPage} type="button" className="btn btn-primary btn-lg">Next</button>
                </div>
            </div>
            );
        }
        else{
            console.log(this.state.part2);
            return(
                <div>
                <NavBar/>
                    <button onClick = {this.previousPage} type="button" className="btn btn-primary btn-lg">Previous</button>
                    <button onClick = {this.nextPage} type="button" className="btn btn-primary btn-lg">Next</button>
                <div className = "container">
                    <div className = "row">
                        {this.state.part2.map((character) =>{
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
                <div className = "row">
                <button onClick = {this.previousPage} style={{marginHorizontal: 15}} type="button" className="btn btn-primary btn-lg">Previous</button>
                <button onClick = {this.nextPage} type="button" className="btn btn-primary btn-lg">Next</button>
                </div>
            </div>
            );

        }
    }
}

export default Home;
