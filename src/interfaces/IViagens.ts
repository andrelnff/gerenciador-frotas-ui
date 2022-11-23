import IVeiculo from "./IVeiculo"
import IUsuario  from "./IVeiculo"

export default interface IViagens {
    id: number
    horarioSaida: Date
    horarioChegada: Date
    odometroSaida: number
    odometroChegada: number
    destino: string
    multa: number
    acidente: number
    usuario: IUsuario
    veiculo: IVeiculo
}