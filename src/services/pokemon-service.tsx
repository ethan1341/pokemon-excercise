/**
 *
 * @param totalPokemon -> Total number of pokemon that will be displayed on the screen
 * @param offset -> Used for pagination will start getting the pokemon from the given integer
 */

import axios from 'axios';

export const pokeService = {
    getPokemon(totalPokemon: number, offset: number) {
        return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}&offset=${offset}`).then((resp) =>
            resp.json()
        );
    },

    getPokemonList(totalPokemon: number): any {
        let promiseArray: any = []
        for (let i = 0; i < totalPokemon; i++) {
            promiseArray.push(axios.get<Array<any>>(`https://pokeapi.co/api/v2/pokemon/${i+1}/`));
        }

        return Promise.all(promiseArray)
    },

     async getPokedexEntry(pokemonId: number) : Promise<any> {
       const pokedexEntry = await axios.get<Array<any>>(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
         return pokedexEntry
    }
}

export default pokeService;

//Use axios

