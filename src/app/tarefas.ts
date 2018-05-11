export class Tarefa {
    chave: string
    nome: string
    date: string
    diciplina: string
    descricao: string
    estado: number

    constructor(
        chave: string,
        nome: string,
        date: string,
        diciplina: string,
        descricao: string,
        estado: number
    ){
        this.chave = chave;
        this.nome = nome;
        this.date = date;
        this.diciplina = diciplina
        this.descricao = descricao
        this.estado = estado

    }
    
}