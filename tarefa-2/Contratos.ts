interface ContratoRemuneravel {
    titulo: string;
    remuneracao(): number;
}
class Clt implements ContratoRemuneravel {
    private GANHO_POR_HORA_CLT = 24;
    private CARGA_HORARIA_DIARIA_CLT = 8;
    titulo: string = 'CLT';
    remuneracao(): number {
        return this.GANHO_POR_HORA_CLT * this.CARGA_HORARIA_DIARIA_CLT;
    }
}
class Estagiario implements ContratoRemuneravel {
    private GANHO_POR_HORA_ESTAGIARIO = 14;
    private CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;
    titulo: string = 'Estágiario';
    remuneracao(): number {
        return this.GANHO_POR_HORA_ESTAGIARIO * this.CARGA_HORARIA_DIARIA_ESTAGIARIO;
    }
}
class Pj implements ContratoRemuneravel {
    private GANHO_POR_HORA_PJ = 30;
    private CARGA_HORARIA_DIARIA_PJ = 8;
    titulo: string = 'PJ';
    remuneracao(): number {
        return this.GANHO_POR_HORA_PJ * this.CARGA_HORARIA_DIARIA_PJ;
    }
}

export { ContratoRemuneravel, Clt, Estagiario, Pj };