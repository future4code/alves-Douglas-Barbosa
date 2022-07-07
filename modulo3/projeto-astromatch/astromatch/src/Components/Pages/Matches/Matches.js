import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderMatches from '../../Header/HeaderMatches/HeaderMatches'
import { MainContainer } from './Styled'
import HomeBottomHr from '../../HomeBottomHr/HomeBottomHr';
import MatchesAndSearchBar from '../../MatchesAndSearchBar/MatchesAndSearchBar';
import CardMatches from '../../CardMatches/CardMatches';
import { DisplayMatches } from '../../CardMatches/Styled';
import ResetMatches from '../../ResetMatches/ResetMatches';
import DevelopedBy from '../../DevelopedBy/DevelopedBy';

export default function Matches(props) {
    const [matches, setMatches] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglashenrique/matches')
            .then((res) => setMatches(res.data.matches))
            .catch((err) => alert(err.response))
    }, []);

    const getMatches = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglashenrique/matches')
        .then((res) => setMatches(res.data.matches))
        .catch((err) => alert(err.response))
    }

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <MainContainer>
            <HeaderMatches page={props.home} />
            <MatchesAndSearchBar
                search={search}
                setSearch={onChangeSearch}></MatchesAndSearchBar>
            <DisplayMatches>
                {matches.filter((match) => {
                    return (
                        match.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        match.bio
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    );
                }).map((match) => {
                    return <CardMatches
                        key={match.id}
                        id={match.id}
                        age={match.age}
                        name={match.name}
                        photo={match.photo} />
                })}
            </DisplayMatches>
            <ResetMatches 
            getMatches={getMatches}/>
            <DevelopedBy />
            <HomeBottomHr />
        </MainContainer>
    )
}
