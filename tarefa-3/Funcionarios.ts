import { Funcionario, FuncionarioEfetivo, FuncionarioVoluntario } from "./InterfaceFuncionarios";

class ClasseFuncionarioEfetivo implements FuncionarioEfetivo {

    constructor(nome: string, cargaHoraria: number, salario: number) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }
    salario: number;
    nome: string;
    cargaHoraria: number;

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`);
    }

    calculaSalarioLiquido(): number {
        const TAXA_DESCONTO = 0.2;
        const desconto = this.salario * TAXA_DESCONTO;
        return this.salario - desconto;
    }
    calculaParticipacaoDeLucros(lucro: number): number {
        return lucro * this.salario;
    }
}

class ClasseFuncionarioVoluntario implements FuncionarioVoluntario {
    constructor(nome: string, cargaHorariaExtensao: number, funciarioEfetivo: Funcionario) {
        this.nome = nome;
        this.cargaHoraria = cargaHorariaExtensao;
        this.orientador = funciarioEfetivo;
    }
    orientador: Funcionario;
    nome: string;
    cargaHoraria: number;

    escreveRelatorio(): void {
        console.log(`Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`);
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`);
    }
}

export { ClasseFuncionarioEfetivo, ClasseFuncionarioVoluntario };