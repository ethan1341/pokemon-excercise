import {useEffect, useState} from "react";
import pokeService from "../../../services/pokemon-service";
import {Pokedex} from "../../../model/pokedex";
type props = {
    selectedPokemon: any;
}
export const AboutTab: React.FC<props> = ({selectedPokemon}) => {
    const [pokedexEntry, setPokedextEntry] = useState<Pokedex | null>(null);
    useEffect(()=>{(async()=> {
        if (selectedPokemon.id) {
           const dexEntry = await pokeService.getPokedexEntry(selectedPokemon.id);
           setPokedextEntry(dexEntry.data)

        }
    })()},[])


    return (

        <>
            <div style={{float:'left'}}><img  src={selectedPokemon.sprites.versions['generation-vii']['ultra-sun-ultra-moon']['front_default']} /></div>
        {pokedexEntry &&
            <span >{pokedexEntry['flavor_text_entries'][0].flavor_text}</span>
        }
        </>
    )
}

export default AboutTab