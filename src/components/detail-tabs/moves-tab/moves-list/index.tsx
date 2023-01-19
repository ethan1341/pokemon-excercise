import React, {useEffect} from "react";
import pokeService from "../../../../services/pokemon-service";

type props = {
    moves: any
}
export const MovesList:React.FC<props> = ({moves}) => {
    useEffect(()=>{(async()=> {
        // if (selectedPokemon.id) {
        //     const dexEntry = await pokeService.getPokedexEntry(selectedPokemon.id);
        //     setPokedextEntry(dexEntry.data)
        //
        // }
    })()},[])
    return (
        <>
            {moves.map((pokemonMove: any)=>{
                return  <h2>{pokemonMove.move.name}</h2>
            })}{moves.map((pokemonMove: any)=>{
                return  <h2>{pokemonMove.move.name}</h2>
            })}
        </>
    )
}

export default MovesList;