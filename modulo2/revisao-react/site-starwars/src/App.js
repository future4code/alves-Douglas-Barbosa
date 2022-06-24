import React, { Component } from 'react'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage'
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'

export default class App extends Component {
  state = {
    currenteScreen: "list",
    clickedCharacterUrl: ""
  }

  goToDetailPage = (url) => {
    this.setState({currenteScreen: "detail", clickedCharacterUrl: url})
  }

  goToListPage = () => {
    this.setState({currenteScreen: "list", clickedCharacterUrl: ""})
  }

  selectPage = () => {
    switch (this.state.currenteScreen) {
      case "list":
        return <CharacterListPage goToDetailPage={this.goToDetailPage}/>
        case "detail": 
        return <CharacterDetailPage goToListPage={this.goToListPage} url={this.state.clickedCharacterUrl}/>
        default:
          return <CharacterListPage goToDetailPage={this.goToDetailPage}/>
    }
  }

  render() {
    return (
      <div>
        {this.selectPage()}</div>
    )
  }
}