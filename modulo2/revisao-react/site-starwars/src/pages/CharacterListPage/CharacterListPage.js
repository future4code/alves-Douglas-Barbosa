import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { CharacterCard } from './Styled'

export default class CharacterListPage extends Component {
    state = {
        charactersList: [],
    }

    componentDidMount() {
        this.getCharactersList()
    }

    getCharactersList = () => {
        axios.get(`${BASE_URL}people/`)
            .then((res) => this.setState({ charactersList: res.data.results }))
            .catch((err) => console.log(err))
    }
    render() {
        const characters = this.state.charactersList.map((person) => {
            return (
                <CharacterCard
                    key={person.url}
                    onClick={() => this.props.goToDetailPage(person.url)}
                >
                    {person.name}

                </CharacterCard>)
        })
        return (
            <div>{characters}</div>
        )
    }
}