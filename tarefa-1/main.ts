import Colaborador from "./Colaborador";
import QuadroColaboradores from "./QuadroColaboradores";
import { Cargos } from "./enum/cargos";
import GeraRelatorio from "./GeraRelatorio";
import CalculaSalario from "./CalculaSalario";
import Pagamento from "./Pagamento";

const quadroColaboradores = new QuadroColaboradores();
const calculaSalario = new CalculaSalario();
const pagamento = new Pagamento(calculaSalario);
const geraRelatorio = new GeraRelatorio(quadroColaboradores.colaboradores, calculaSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratarColaborador(colaborador1);
quadroColaboradores.contratarColaborador(colaborador2);
quadroColaboradores.contratarColaborador(colaborador3);

console.log(geraRelatorio.gerarJSON());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);