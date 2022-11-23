import { AppBar, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/system";

const BarraApp = () => {
    const theme = useTheme();
    return (
        <AppBar position="static"
            color="secondary">
            <Box
                gap={1}
                marginX={1}
                padding={1}
                paddingX={2}
                display="flex"
                alignItems="center"
                height={theme.spacing(5)}>
                <Typography 
                    variant="h6"
                    component="a"
                    href="/administracao"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        color: 'inherit',
                        textDecoration: 'none',
                      }}>
                    Administração
                </Typography>

                <Box
                    display="flex"
                    marginLeft={theme.spacing(4)}>
                    <Button sx={{ fontWeight: 500, color: "white" }}
                        color="primary"
                        disableElevation
                        href="/administracao/viagens"
                        variant="text">
                        Viagem
                    </Button>
                </Box>

                <Box
                    marginLeft={theme.spacing(2)}
                    display="flex" >
                    <Button sx={{ fontWeight: 500, color: "white" }}
                        color="primary"
                        disableElevation
                        href="/administracao/veiculos"
                        variant="text">
                        Veiculo
                    </Button>
                </Box>

                <Box flex={1} display="flex" justifyContent="end">
                    <Button
                        color="primary"
                        disableElevation
                        href="/" variant="contained">
                        Logout
                    </Button>
                </Box>


            </Box>
        </AppBar>

    )
}

export default BarraApp;