import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useEffect, useState } from "react";
import http from "../../http";
import IVeiculo from "../../interfaces/IVeiculo";

const TabelaVeiculos = () => {
    const [veiculos, setVeiculos] = useState<IVeiculo[]>([])

    useEffect(() => {
        http
            .get<IVeiculo[]>("veiculos/")
            .then((resposta) => setVeiculos(resposta.data));
    }, []);


    return(
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>Marca</TableCell>
                    <TableCell>Modelo</TableCell>
                    <TableCell>Ano</TableCell>
                    <TableCell>Placa</TableCell>
                    <TableCell>Chassi</TableCell>
                    <TableCell>Estado Atual</TableCell>
                    <TableCell>Quilometragem</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {veiculos.map(veiculo => <TableRow key={veiculo.id}>
                    <TableCell>{veiculo.id}</TableCell>
                    <TableCell>{veiculo.marca}</TableCell>
                    <TableCell>{veiculo.modelo}</TableCell>
                    <TableCell>{veiculo.ano}</TableCell>
                    <TableCell>{veiculo.placa}</TableCell>
                    <TableCell>{veiculo.chassi}</TableCell>
                    <TableCell>{veiculo.estadoAtual}</TableCell>
                    <TableCell>{veiculo.quilometragem}</TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    </TableContainer>
    
    )
}

export default TabelaVeiculos

