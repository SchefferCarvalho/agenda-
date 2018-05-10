export class Tarefa {
    chave: string
    nome: string
    date: string
    diciplina: string
    descricao: string
    estado: string

    constructor(
        chave: string,
        nome: string,
        date: string,
        diciplina: string,
        descricao: string,
        estado: string
    ){
        this.chave = chave;
        this.nome = nome;
        this.date = date;
        this.diciplina = diciplina
        this.descricao = descricao
        this.estado = estado

    }
    
}