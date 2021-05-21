import { heroes } from './../data/heroes';

export const getHeroById = (id) => heroes.filter ( hero => hero.id === id)
