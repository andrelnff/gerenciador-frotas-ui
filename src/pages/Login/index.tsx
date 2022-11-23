import { Box, Button, TextField, Typography } from "@mui/material";



const Login = () => {
    return (

        <Box sx={{
            width: '100vw',
            height: '100vh',
            bgcolor: "#cfe8fc",
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
        }}>

            <Box sx={{
                width: 300,
                height: 400,
                bgcolor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)'
            }}>
            <Typography variant="h5" gutterBottom color={'inherit'} fontWeight='500'>
                 LOGIN
            </Typography>
                <TextField
                    color="secondary"
                    label="Usuario" 
                    variant="standard" />
                <TextField 
                    color="secondary"
                    label="Senha" 
                    type={'password'}
                    variant="standard" />
                <Button color="secondary" variant="contained" href="/administracao">Entrar</Button>
            </Box>
        </Box>

    )
}

export default Login