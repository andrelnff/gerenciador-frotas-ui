import { Box, Typography, Button, Icon, useTheme } from "@mui/material";
import BarraApp from "../../../Components/BarraApp";
import FormularioViagens from "../../../Components/FormularioViagens";
import TabelaViagens from "../../../Components/TabelaViagens";

const Viagens = () => {
    const theme = useTheme();
    return (
        <>
            <BarraApp />

            <FormularioViagens />

            <Box
                marginTop={5}
                display={"flex"}
                flexDirection="column"
                marginX={10}
                bgcolor='#cfe8fc'>
                <Box display={"flex"} 
                paddingTop={theme.spacing(1)} 
                paddingLeft={theme.spacing(1)} 
                borderRadius='20px'>
                    <Typography
                    sx={{fontWeight: 500, fontStyle: "bold"}}> Histórico de Viagens </Typography>
                </Box>
                <Box marginTop={2}>
                    <TabelaViagens />
                </Box>
            </Box>
        </>
    )
}

export default Viagens;