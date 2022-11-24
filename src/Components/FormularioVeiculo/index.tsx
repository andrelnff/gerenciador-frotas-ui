import { Box, Button, Icon, TextField, Typography } from "@mui/material";
import { color, useTheme } from "@mui/system";

const FormularioVeiculo = () => {
    const theme = useTheme();
    return (
        <>
            <Box>
                <Box display={"flex"} 
                    paddingTop={theme.spacing(1)} 
                    paddingLeft={theme.spacing(1)}
                    bgcolor='#cfe8fc'
                    marginTop={5}
                    marginX={10}>
                    <Typography
                        fontWeight={500}>
                        Adicionar Veículo </Typography>
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    display={"flex"}
                    marginX={10}
                    justifyContent='space-around'
                    bgcolor='#f0f5fa'>
                    <TextField id="outlined-basic" label="Marca" variant="outlined" />
                    <TextField id="outlined-basic" label="Modelo" variant="outlined" />
                    <TextField id="outlined-basic" label="Ano" variant="outlined" />
                    <TextField id="outlined-basic" label="Placa" variant="outlined" />
                    <TextField id="outlined-basic" label="Chassi" variant="outlined" />
                </Box>
            </Box>
            <Box
                marginTop={1}
                flex={1}
                display="flex"
                justifyContent="end"
                marginX={10}>
                <Button
                    variant="outlined"
                    endIcon={<Icon>check</Icon>}>
                    Salvar
                </Button>
            </Box>
        </>
    )
}

export default FormularioVeiculo;