import axios from 'axios'
import React, { Component } from 'react'

export default class CharacterDetailPage extends Component {
    state = {
        character: "",
        planet: ""
    }

    componentDidMount() {
        this.getCharacter()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.character !== prevState.character) {
            this.getPlanet()
        }
    }

    getCharacter = () => {
        axios.get(this.props.url)
            .then((res) => this.setState({ character: res.data }))
            .catch((err) => console.log(err.response))
    }

    getPlanet = () => {
        axios.get(this.state.character.homeworld)
            .then((res) => this.setState({ planet: res.data }))
            
            .catch((err) => console.log(err.response))
    }
    render() {

        return (
            <div>
                {this.state.character.name && this.state.planet.name ? 
                
                (
                    <div><p>Nome: {this.state.character.name}</p>
                    <p>Planeta Natal: {this.state.planet.name}</p></div>

                ) : <p>carregando...</p>
            
            }

                <button onClick={this.props.goToListPage}>Voltar para Lista</button>
            </div>
        )
    }
}
