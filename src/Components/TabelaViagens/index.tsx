import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../http";
import IViagens from "../../interfaces/IViagens";

const TabelaViagens = () => {
    const [viagens, setViagens] = useState<IViagens[]>([])

    useEffect(() => {
        http
            .get<IViagens[]>("viagens/")
            .then((resposta) => setViagens(resposta.data));
    }, []);


    return(
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>Horario Saida</TableCell>
                    <TableCell>Horario Chegada</TableCell>
                    <TableCell>Odometro Saida (KM)</TableCell>
                    <TableCell>Odometro Chegada (KM)</TableCell>
                    <TableCell>Destino</TableCell>
                    <TableCell>Multa</TableCell>
                    <TableCell>Acidente</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {viagens.map(viagens => <TableRow key={viagens.id}>
                    <TableCell>{viagens.id}</TableCell>
                    <TableCell>{viagens.horarioSaida.toString()}</TableCell>
                    <TableCell>{viagens.horarioChegada.toString()}</TableCell>
                    <TableCell>{viagens.odometroSaida}</TableCell>
                    <TableCell>{viagens.odometroChegada}</TableCell>
                    <TableCell>{viagens.destino}</TableCell>
                    <TableCell>{viagens.multa}</TableCell>
                    <TableCell>{viagens.acidente}</TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    </TableContainer>
    
    )
}

export default TabelaViagens

