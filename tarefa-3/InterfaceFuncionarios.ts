interface Funcionario {
    nome: string;
    cargaHoraria: number;
    trabalha(): void;
}

interface FuncionarioEfetivo extends Funcionario {
    salario: number;
    calculaSalarioLiquido(): number;
    calculaParticipacaoDeLucros(lucro: number): number;
   
}

interface FuncionarioVoluntario extends Funcionario {
    orientador: Funcionario;
    escreveRelatorio(): void;
}


export { Funcionario, FuncionarioEfetivo, FuncionarioVoluntario };