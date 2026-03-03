import { ContratoRemuneravel } from "./Contratos";

const MES_COMERCIAL = 20; //dias trabalhados no mês
export default class FolhaDePagamento {
        static calcularSalarioMensal(funcionario: ContratoRemuneravel): number {
            return funcionario.remuneracao() * MES_COMERCIAL;
        }
    }