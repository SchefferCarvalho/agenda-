export class Tarefa {
    
    nome: string
    date: string
    diciplina: string
    descricao: string
    estado: string

    constructor( nome: string,
        date: string,
        diciplina: string,
        descricao: string,
        estado: string
    ){
        this.nome = nome;
        this.date = date;
        this.diciplina = diciplina
        this.descricao = descricao
        this.estado = estado

    }
    
}