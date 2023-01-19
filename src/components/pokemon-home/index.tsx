import PokemonGrid from './../pokemon-grid';
import {useEffect, useState} from "react";
import pokeService from '../../services/pokemon-service';
import { GridSpacing } from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';

export const PokemonGeneral = () => {
    const [pokemonData, setPokemonData] = useState([])
    const addBackground = (pokemon: any,typeArray: any)=>{
            pokemon.backgroundColors = [];
            typeArray.forEach((pokemonType : any ,indx : any)=>{
                switch (pokemonType.type.name) {
                    case "fire":
                       return pokemon.backgroundColors.push("#fd7d24")
                    case "grass":
                        return pokemon.backgroundColors.push("#9bcc50")
                    case "ground":
                        return pokemon.backgroundColors.push("#c9b00d")
                    case "bug":
                        return pokemon.backgroundColors.push("#729f3f")
                    case "dark":
                        return pokemon.backgroundColors.push("#707070")
                    case "dragon":
                        return pokemon.backgroundColors.push("#f16e57")
                    case "electric":
                        return pokemon.backgroundColors.push("#eed535")
                    case "fairy":
                        return pokemon.backgroundColors.push("#fdb9e9")
                    case "fighting":
                        return pokemon.backgroundColors.push("#d56723")
                    case "flying":
                        return pokemon.backgroundColors.push("#aee4ff")
                    case "ghost":
                        return pokemon.backgroundColors.push("#7b62a3")
                    case "ice":
                        return pokemon.backgroundColors.push("#51c4e7")
                    case "normal":
                        return pokemon.backgroundColors.push("#a4acaf")
                    case "poison":
                        return pokemon.backgroundColors.push("#b97fc9")
                    case "psychic":
                        return pokemon.backgroundColors.push("#f366b9")
                    case " rock":
                        return pokemon.backgroundColors.push("#a38c21")
                    case "steel":
                        return pokemon.backgroundColors.push("#9eb7b8")
                    case "water":
                        return pokemon.backgroundColors.push("#4592c4")
                    default:
                        return "white";
                }
            })
    }
    useEffect(() => {
        (async () => {
            try {
                const pokemonDatas = await pokeService.getPokemonList(12)

                const data = pokemonDatas.forEach(function(par:any , indx: any) {
                    addBackground(par.data,par.data.types)
                });
                setPokemonData(pokemonDatas)
            } catch (e) {
                console.error(e)
            }
        })()
    }, [])
    return ( <Grid container>
            <PokemonGrid pokemonData={pokemonData}></PokemonGrid>
    </Grid>

    )
}
export default PokemonGeneral;