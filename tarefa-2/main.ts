import FolhaDePagamento from "./FolhaPagamento";
import { Clt, Estagiario, Pj } from "./Contratos";

const funcionarioClt = new Clt();
const funcionarioEstagiario = new Estagiario();
const funcionarioPj = new Pj();
console.log(`Sou ${funcionarioClt.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioClt)}`)
console.log(`Sou ${funcionarioPj.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioPj)}`)
console.log(`Sou ${funcionarioEstagiario.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioEstagiario)}`)
