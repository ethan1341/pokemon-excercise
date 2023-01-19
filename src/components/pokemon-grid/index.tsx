import {useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import pokeService from "../../services/pokemon-service";
import {Paper} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useLocation} from "react-router";

type props = {
    pokemonData: any;
}


export const PokemonGrid: React.FC<props> = ({pokemonData}) => {
    const history = useHistory();
    const location = useLocation();

    const GoToDetails = (pokemon: any) => {
        history.push({
            pathname: '/pokemon-detail',
            state: { pokemon }
        })
    }

    useEffect(() => {
    }, [])
    const renderBackground = (colors:any) => {
        let background = ''
        if (colors.length > 1) {
            background = `linear-gradient(90deg, ${colors[0]} 50%, ${colors[1]} 50%)`
        } else {
            background = `linear-gradient(90deg, ${colors[0]} 50%, ${colors[0]} 50%)`
        }
        return background
    }
    return (
        <>
            {pokemonData.map((pokemon: any) => {
                return <Grid item xs={2} style={{padding: 15}}>
                    <Paper elevation={1} style={{
                        height: 'auto',
                        padding: 15,
                        background: renderBackground(pokemon.data.backgroundColors),
                        position: 'relative'
                    }} onClick={() => GoToDetails(pokemon.data)}>
                        <div className="background">#{pokemon.data.id.toString().padStart(3, "0")}</div>
                        <img src={pokemon.data.sprites.other['official-artwork']['front_default']}
                             style={{width: '45%', height: 'auto', position: 'relative', zIndex: 2}}/>
                        <div>
                            <span style={{fontSize: '32px', color: "white"}}>{pokemon.data.name}</span>
                        </div>
                    </Paper>
                </Grid>
            })}
        </>
    )
}

export default PokemonGrid;