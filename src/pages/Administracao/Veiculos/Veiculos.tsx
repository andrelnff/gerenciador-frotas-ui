import { Box, Typography, Button, Icon } from "@mui/material";
import BarraApp from "../../../Components/BarraApp";
import TabelaVeiculos from "../../../Components/TabelaVeiculos";

const Veiculos = () => {
    return (
        <>
            <BarraApp />
            <Box
                marginTop={5}
                display={"flex"}
                flexDirection="column"
                marginX={10}
                bgcolor='#cfe8fc'>
                <Box display={"flex"}>
                    <Typography> Veiculos </Typography>
                    <Box flex={1} display="flex" justifyContent="end">
                        <Button
                            variant="outlined"
                            endIcon={<Icon>add</Icon>}>
                            Novo
                        </Button>
                    </Box>

                </Box>
                <Box marginTop={2}>
                    <TabelaVeiculos />
                </Box>
            </Box>
        </>
    )
}

export default Veiculos;