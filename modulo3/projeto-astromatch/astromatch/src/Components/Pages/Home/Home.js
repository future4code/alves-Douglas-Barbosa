import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../../Header/Header';
import Card from '../../Card/Card';
import { MainContainer } from './Styled'
import BottomBar from '../../BottomBar/BottomBar';
import HomeBottomHr from '../../HomeBottomHr/HomeBottomHr';


export default function Home(props) {
    const [person, setPerson] = useState([])

    useEffect(() => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglashenrique/person')
            .then((res) => setPerson(res.data.profile))
            .catch((err) => alert(err.response))
    }, []);

    const getNewPerson = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglashenrique/person')
            .then((res) => setPerson(res.data.profile))
            .catch((err) => alert(err.response))
    }

    return (
        <MainContainer>
            <Header 
            setPageToMatches={props.setPageToMatches}
            page={props.page}/>
            <Card
                id={person.id}
                name={person.name}
                age={person.age}
                bio={person.bio}
                photo={person.photo} />
            <BottomBar
                id={person.id}
                getNewPerson={getNewPerson} />
            <HomeBottomHr />
        </MainContainer>)
}
