import { Box, Button, Icon, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { useForm } from 'react-hook-form';
import http from "../../http";

const FormularioVeiculo = () => {
    const theme = useTheme();

    const { register, handleSubmit } = useForm();

    const aoSubmeterForm = (evento: any) => {
        console.log(evento);

        http.post('/veiculos', evento)
            .then( () => {
                alert("Veiculo Cadastrado Com Sucesso!")
            })
    }

    return (
        <Box>
            <Box display={"flex"}
                flexDirection={"column"}
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
                 display={"flex"}
                 flexDirection={"column"}
                onSubmit={handleSubmit(aoSubmeterForm)}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                autoComplete="off"
                marginX={10}
                justifyContent='space-around'
                bgcolor='#f0f5fa'>
                <TextField label="Marca" variant="outlined" {...register("marca")} />
                <TextField label="Modelo" variant="outlined" {...register("modelo")} />
                <TextField label="Ano" variant="outlined" {...register("ano")} />
                <TextField label="Placa" variant="outlined" {...register("placa")} />
                <TextField label="Chassi" variant="outlined" {...register("chassi")} />
                <Button
                    variant="outlined"
                    type="submit"
                    endIcon={<Icon>check</Icon>}>
                    Salvar
                </Button>
            </Box>

        </Box>
    );
}

export default FormularioVeiculo;