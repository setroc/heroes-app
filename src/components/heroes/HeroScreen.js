import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from './../../selectors/getHeroById';

const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])
    if ( !hero ) {
        <Redirect to="/" />
    }
    const {superhero,publisher,alter_ego,first_appearance,characters} = hero[0];
    const handleReturn = ()=> {
        history.goBack();
    }
    return (
        <div className="row mt-5 animate__animated animate__lightSpeedInLeft">
            <div className="col-4">
                <img 
                    // src={`../assets/heroes/${heroeId}.jpg`}
                    src={heroImages(`./${heroeId}.jpg`).default}
                    className="img-thumbnail"
                    alt={superhero} 
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
                    <li className="list-group-item"><b>First Appearance</b> {first_appearance }</li>

                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                    className="btn btn-dark"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
