import React from 'react'
import { MainContainer, SearchBar, StyledMatches } from './Styled'

export default function MatchesAndSearchBar(props) {
  return (
    <MainContainer>
        <StyledMatches>Matches</StyledMatches>
        <SearchBar placeholder='Search' onChange={props.setSearch}/>
    </MainContainer>

  )
}
