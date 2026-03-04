import { ClasseFuncionarioEfetivo, ClasseFuncionarioVoluntario } from "./Funcionarios";

const funcionarioEfetivo = new ClasseFuncionarioEfetivo("João", 40, 2400);
const funcionarioVoluntario = new ClasseFuncionarioVoluntario("Enzo", 20, funcionarioEfetivo);

//Efetivo
console.log("nome:", funcionarioEfetivo.nome);
console.log("salário bruto:", funcionarioEfetivo.salario);
console.log("salário líquido:", funcionarioEfetivo.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioEfetivo.calculaParticipacaoDeLucros(2.5), "\n");

//Voluntário
console.log("nome:", funcionarioVoluntario.nome);
console.log("orientador:", funcionarioVoluntario.orientador.nome);
funcionarioVoluntario.escreveRelatorio();
funcionarioVoluntario.trabalha();