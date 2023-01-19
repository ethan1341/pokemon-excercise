import {Box, Typography} from "@material-ui/core";

type props = {
    children: any,
    value: number,
    selectedPokemon: any,
    index: number
}

export const TabPanel: React.FC<props>  = ({children, value, index, selectedPokemon}) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default TabPanel