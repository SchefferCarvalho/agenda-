import { Component} from '@angular/core';
import { Button } from 'protractor';


@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent  {

 nome
 date
 value
 id
 List = [];

 CriarTarefa(){
 
  localStorage.setItem('nomeSalvo',this.nome);
  localStorage.setItem('dataSalva',this.date);
  localStorage.setItem('diciplinaSalva',this.value);
  localStorage.setItem('descricao',this.id);

 }

  }
  


