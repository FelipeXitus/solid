import { ClassePagamentoCheque, ClassePagamentoDinheiro, ClassePagamentoPix } from "./Pagamentos";

const pagamentoCheque = new ClassePagamentoCheque(100);
pagamentoCheque.pagar();

const pagamentoDinheiro = new ClassePagamentoDinheiro(200);
pagamentoDinheiro.pagar();

const pagamentoPix = new ClassePagamentoPix(400);
pagamentoPix.pagar();
