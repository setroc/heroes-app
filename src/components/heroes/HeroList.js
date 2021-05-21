import React, { useMemo } from 'react'
import { getHeroesByPublisher } from './../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-6 g-4 mb-5 animate__animated animate__slideInDown">
            {
                heroes.map(hero=>(
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            } 
        </div>
    )   
}
