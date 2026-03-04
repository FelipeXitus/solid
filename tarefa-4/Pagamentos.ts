import { Pagamento  } from "./InterfacePagamentos";

class ClassePagamentoCheque implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }
    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por cheque.`);
    }
}

class ClassePagamentoDinheiro implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por dinheiro.`);
    }
}

class ClassePagamentoPix implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por Pix.`);
    }
}

export { ClassePagamentoCheque, ClassePagamentoDinheiro, ClassePagamentoPix };