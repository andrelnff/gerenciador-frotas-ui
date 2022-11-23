import {
    AppBar,
    Box, Button, Divider, Icon, Paper, Toolbar, Typography, useTheme
} from "@mui/material";
import BarraApp from "../../Components/BarraApp";
import TabelaVeiculos from "../../Components/TabelaVeiculos";
import TabelaViagens from "../../Components/TabelaViagens";

const PaginaBaseAdmin = () => {
    const theme = useTheme();
    return (
        <>

            <BarraApp />

            <Box
                marginTop={5}
                display={"flex"}
                flexDirection="column"
                marginX={10}
                bgcolor='#cfe8fc'>
                <Box display={"flex"} paddingTop={theme.spacing(1)} paddingLeft={theme.spacing(1)} borderRadius='20px'>
                    <Typography
                    sx={{fontWeight: 500, fontStyle: "bold"}}> Histórico de Viagens </Typography>
                </Box>
                <Box marginTop={2}>
                    <TabelaViagens />
                </Box>
            </Box>


            <Box
                marginTop={10}
                display={"flex"}
                flexDirection="column"
                marginX={10}
                bgcolor='#cfe8fc'>
                <Box display={"flex"} paddingTop={theme.spacing(1)} paddingLeft={theme.spacing(1)} borderRadius='20px'>
                    <Typography
                    sx={{fontWeight: 500}}> Veiculos </Typography>
                </Box>
                <Box marginTop={2}>
                    <TabelaVeiculos />
                </Box>
            </Box>

        </>
    )
}

export default PaginaBaseAdmin;
