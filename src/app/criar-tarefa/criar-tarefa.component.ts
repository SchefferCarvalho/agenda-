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
  var chave: string = 'Lista:'+ time;



  /*this.lista.push(this.nome);
  this.lista.push(this.date);
  this.lista.push(this.diciplina);
  this.lista.push(this.descricao);
  this.lista.push(this.estado);*/


   this.tarefa = new Tarefa(
   this.nome,
   this.date,
   this.diciplina,
   this.descricao,
   this.estado  
 );

 this.lista.push(this.tarefa);
 
 localStorage.setItem('tarefas',stringify(this.lista));
 
  //tarefa = new Tarefa(
  //  nome = this.nome,
   // date = this.date)


 }

 
 

  }
  


