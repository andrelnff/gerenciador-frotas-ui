import { Box, Typography, Button, Icon, useTheme } from "@mui/material";
import BarraApp from "../../../Components/BarraApp";
import FormularioVeiculo from "../../../Components/FormularioVeiculo";
import TabelaVeiculos from "../../../Components/TabelaVeiculos";

const Veiculos = () => {
    const theme = useTheme();
    return (
        <>
            <BarraApp />

            <FormularioVeiculo />
            <Box
                marginTop={8}
                display={"flex"}
                flexDirection="column"
                marginX={10}
                bgcolor='#cfe8fc'>
                <Box display={"flex"}
                    paddingTop={theme.spacing(1)}
                    paddingLeft={theme.spacing(1)}
                    borderRadius='20px'>
                    <Typography
                        fontWeight={500}>
                        Veiculos </Typography>
                </Box>
                <Box marginTop={2}>
                    <TabelaVeiculos />
                </Box>
            </Box>
        </>
    )
}

export default Veiculos;