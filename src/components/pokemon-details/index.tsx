import {useEffect, useState} from "react";
import {useLocation} from 'react-router'
import {Paper, Tab, Tabs} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import DetailsTab from "../detail-tabs";

export const PokemonDetails = () => {
    const [selectedPokemon, setSelectedPokemon] = useState({
        id: 0,
        backgroundColors: [],
        name: "",
        sprites: {other: {'official-artwork': {'front_default': ''}}}
    })
    const location = useLocation();
    const renderBackground = (colors: any) => {
        let background = ''
        if (colors.length > 1) {
            background = `linear-gradient(90deg, ${colors[0]} 50%, ${colors[1]} 50%)`
        } else {
            background = `linear-gradient(90deg, ${colors[0]} 50%, ${colors[0]} 50%)`
        }
        console.log(background, 'woot')
        return background
    }
    useEffect(() => {
        // @ts-ignore
        console.log(location.state.pokemon, 'woot')
        // @ts-ignore
        setSelectedPokemon(location.state.pokemon)

    }, [])

    return (
        <>
            {
                selectedPokemon && selectedPokemon.backgroundColors.length > 0 &&
                < Paper elevation={1} style={{
                    height: 'auto',
                    padding: 15,
                    background: renderBackground(selectedPokemon.backgroundColors),
                    position: 'relative'
                }} className="details">
                    <Grid container alignItems="center" justify="center" direction="column">
                        <Grid container item xs={5} alignItems="flex-start" justify="space-between" direction="row">
                            <h1 style={{color: 'white'}}>{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</h1>
                            <h1 style={{color: 'white'}}>#{selectedPokemon.id.toString().padStart(3, "0")}</h1>
                        </Grid>
                        <Grid item xs={7}>
                            <span style={{display: 'inline-block'}}>
                            <img src={selectedPokemon.sprites.other['official-artwork']['front_default']} width="65%"
                                 height="65%"/>
                            </span>
                        </Grid>
                        <Grid container xs={5} alignItems="center" justify="center" direction="row">
                            <Paper>
                               <DetailsTab selectedPokemon={selectedPokemon}></DetailsTab>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            }
        </>
    )
}

export default PokemonDetails;