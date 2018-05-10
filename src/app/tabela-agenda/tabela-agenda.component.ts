import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefas';

@Component({
  selector: 'app-tabela-agenda',
  templateUrl: './tabela-agenda.component.html',
  styleUrls: ['./tabela-agenda.component.css']
})
export class TabelaAgendaComponent implements OnInit {

  tarefa
  tarefas = []

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < localStorage.length; index++) {

      this.tarefa = JSON.parse(localStorage.getItem(localStorage.key(index)));
      
      this.tarefas.push(this.tarefa);
    }
  }

  AlteraStatus(chave){
    console.log(chave);

  }
}
