import {React, useEffect, useState} from 'react';
import {MatchDetailCard} from "../component/MatchDetailCard";
import {MatchSmallCard} from "../component/MatchSmallCard";

export const TeamPage = () => {

    const [team, setTeam] = useState({matches: []});
    useEffect(
        () => {
            const fetchTeam = async () => {
                const response = await fetch('http://localhost:8080/team/Mumbai%20Indians');
                const data = await response.json();
                setTeam(data);
            };
            fetchTeam();



        }, []
    );


    if (!team || !team.teamName) {
        return <h1>Team not found</h1>
    }


    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard match = {team.matches[0]}/>
            {team.matches.slice(1).map(match => <MatchSmallCard match={match} />)}

        </div>
    );
}
