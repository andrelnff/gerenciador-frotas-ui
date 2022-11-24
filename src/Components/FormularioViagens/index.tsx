import { Box, Typography, TextField, Button, Icon, useTheme } from "@mui/material";

const FormularioViagens = () => {
    const theme = useTheme();
    return(
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
                    Cadastrar Viagem </Typography>
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
                <TextField id="outlined-basic" label="horarioSaida" variant="outlined" />
                <TextField id="outlined-basic" label="horarioChegada" variant="outlined" />
                <TextField id="outlined-basic" label="odometroSaida" variant="outlined" />
                <TextField id="outlined-basic" label="odometroChegada" variant="outlined" />
                <TextField id="outlined-basic" label="destino" variant="outlined" />
                <TextField id="outlined-basic" label="multa" variant="outlined" />
                <TextField id="outlined-basic" label="acidente" variant="outlined" />
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

export default FormularioViagens