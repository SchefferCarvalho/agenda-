import { Component} from '@angular/core';
import { Button } from 'protractor';
import { stringify } from '@angular/compiler/src/util';
import { NgModel } from '@angular/forms';
import { Tarefa } from '../tarefas';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';


@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent  {

 nome
 date
 diciplina
 descricao
 estado
 tarefa : Tarefa
 lista =[]
 CriarTarefa(){
  
  var chavedate = new Date();
  var time = chavedate.getTime();
  var chave: string = 'lista-'+ time;

   this.tarefa = new Tarefa(
   chave,
   this.nome,
   this.date,
   this.diciplina,
   this.descricao,
   0
 );

 localStorage.setItem(chave,JSON.stringify(this.tarefa));
 this.nome = null;
 this.date = null;
 this.diciplina = null;
 this.descricao = null;
 this.estado = null;
 }

 
 

  }
  


