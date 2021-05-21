import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from './../../Hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const {q = ""} = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({value:q});
    const {value:searchText} = values; 
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch= (e)=> {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }
    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            name="value"
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={handleInputChange}
                            value={searchText}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        heroesFiltered.map(hero=>(
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
