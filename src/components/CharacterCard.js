import React from "react";

class CharacterCard extends React.Component {

    state ={
        activeCharacter: [],
        episodes: [],
        episodesNum: []
    }

    componentDidMount = async () =>{
        const id = this.props.location.state.character;
        const request = await fetch('https://rickandmortyapi.com/api/character/'+id);
        const res =  await request.json();
        this.setState({activeCharacter: res,
                        episodes: res.episode
        }, () => {
            this.episodes();
        });

    }

    episodes(){
        var count = this.state.episodes.length;
        console.log("count: "+count);
        var e = [];
        var countString;
        var epn = [];
        var n = " ";
        for(var i = 0; i<count; i++ ){
            e.push(String(this.state.episodes[i]));
            console.log(e[i]);
            console.log(e[i].length);

            console.log(e[i].substring(countString,countString));
        }

        for(var k = 0; k < e.length; k++){//cada string(not working)
            console.log("e: "+e[k]);
            countString = e[k].length;
            for(var j = countString ; j< countString-4; j--){
                console.log(e[k].substring(countString,countString));
                n =  e[k].substring(countString,countString);
                console.log("n: "+ n);

                console.log("nnn: "+ n);
                if(e[j]!=="/"){
                    n = e[j]+n;
                    console.log("n: "+n);
                }
                epn.push(n);
            }
        }
        this.setState({episodesNum: epn});
    }




    render(){
        const character = this.state.activeCharacter;

        return(


            <div className = "container">
                <div className = "active-character">
                    <img className = "active-character-img" src={character.image} alt={character.name}/>
                        <ul className="list-group list-group-flush">

                                <li className="list-group-item"  >{character.id}</li>
                                <li className="list-group-item" >{character.status}</li>
                                <li className="list-group-item">{character.species}</li>

                        </ul>
                </div>

            </div>
    
        );
    }
};

export default CharacterCard;
