import {EggMethod, LevelMethod, MachineMethod, TutorMethod} from "../../../model/move";
import React, {useEffect, useMemo, useState} from "react";
import {MoveState} from "../../../ui-type/type";
import {MovesDropdown} from "./moves-dropdown";
import {MovesList} from "./moves-list";
import {Tester} from "../../tester";

type props = {
    selectedPokemon: any;
}

export const MovesTab: React.FC<props> = ({selectedPokemon}) => {

    type FilterFn = (move: EggMethod | MachineMethod | LevelMethod | TutorMethod) => boolean;

    const machineFilterFn: FilterFn = (learnMethod) => learnMethod.name === "machine"
    const eggFilterFn: FilterFn = (learnMethod) => learnMethod.name === "egg";
    const levelUpFilterFn: FilterFn = (learnMethod) => learnMethod.name === "level-up";
    const tutorFilterFn: FilterFn = (learnMethod) => learnMethod.name === "tutor";
    const allMovesFilterFn: FilterFn = () => true;
    const [moveTypeFilter, setMoveTypeFilter] = useState<MoveState>(MoveState.ALL)
    const [pokemonMoves, setPokemonMoves] = useState([]);
    const [count, setCount] = useState(1);

    const filterFn = useMemo(() => {
        if (moveTypeFilter === "MACHINE") {
            const filteredMoves = selectedPokemon.moves.filter((moves: any) => {
                return  machineFilterFn(moves.version_group_details[0].move_learn_method)
            });
            return filteredMoves
        } else if (moveTypeFilter === "LEVELUP") {
            const filteredMoves = selectedPokemon.moves.filter((moves: any) => {
                return levelUpFilterFn(moves.version_group_details[0].move_learn_method)
            });
            console.log(filteredMoves)
            return filteredMoves
        } else if (moveTypeFilter === "TUTOR") {
            const filteredMoves = selectedPokemon.moves.filter((moves: any) => {
                return tutorFilterFn(moves.version_group_details[0].move_learn_method)
            });
            console.log(filteredMoves)
            return filteredMoves
        } else if (moveTypeFilter === "EGG") {
            const filteredMoves = selectedPokemon.moves.filter((moves: any) => {
                return eggFilterFn(moves.version_group_details[0].move_learn_method)
            });
            console.log(filteredMoves)
            return filteredMoves
        }
        const filteredMoves = selectedPokemon.moves.filter((moves: any) => {
            return allMovesFilterFn(moves.version_group_details[0].move_learn_method)
        });
        console.log(filteredMoves)
        return filteredMoves
    }, [moveTypeFilter]);

    useEffect(() => {
        (() => {
        })()
    }, [filterFn])
    return (
        <>
            <MovesDropdown onChange={setMoveTypeFilter} moveState={moveTypeFilter}/>
            <>
                {filterFn.map((pokemonMove: any)=>{
                    return  <h2>{pokemonMove.move.name}</h2>
                })}
            </>
            <Tester></Tester>
        </>
    )
}

export default MovesTab