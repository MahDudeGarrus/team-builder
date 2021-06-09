import React from 'react';

export default function NewSquadeMate(props) {
    return (
        <div className='newsquadmate'>
            {props.meBuddies.map(squadmate => (
                <div classname ='regsqaudmate' key={squadmate.firstname}>
                    <h2>{`${squadmate.firstname} ${squadmate.lastname}`} </h2>
                    <p>{`Age: ${squadmate.age}`}</p>
                    <p>{`War Class: ${squadmate.warclass}`}</p>
                    <p>{`Species: ${squadmate.species}`}</p>
                    <p>{`Bio: ${squadmate.bio}`}</p>
                </div>
            ))}
        </div>
    )
}