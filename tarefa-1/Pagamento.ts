import Colaborador from "./Colaborador";
import CalculaSalario from "./CalculaSalario";

export default class Pagamento {
    constructor(private servicoCalculaSalario: CalculaSalario) {}

    pagar(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalculaSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}