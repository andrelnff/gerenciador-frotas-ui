import { Box, Typography, Button, Icon } from "@mui/material";
import BarraApp from "../../../Components/BarraApp";
import TabelaViagens from "../../../Components/TabelaViagens";

const Viagens = () => {
    return (
        <>
            <BarraApp />
            <Box
                marginTop={5}
                display={"flex"}
                flexDirection="column"
                marginX={10}>
                <Box display={"flex"}>
                    <Typography> Viagens </Typography>
                    <Box flex={1} display="flex" justifyContent="end">
                        <Button
                            variant="outlined"
                            endIcon={<Icon>add</Icon>}>
                            Novo
                        </Button>
                    </Box>

                </Box>
                <Box marginTop={2}>
                    <TabelaViagens />
                </Box>
            </Box>
        </>
    )
}

export default Viagens;