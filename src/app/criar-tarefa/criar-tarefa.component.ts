import { Component} from '@angular/core';
import { Button } from 'protractor';
import { stringify } from '@angular/compiler/src/util';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent  {

 nome
 date
 value
 descricao
 list=[];
 


 CriarTarefa(){
  
  
  var chavedate = new Date();
  var time = chavedate.getTime();
  var chave: string = 'Lista:'+ time;
  
  this.list.push(this.nome);
  this.list.push(this.date);
  this.list.push(this.value);
  this.list.push(this.descricao);
  
 
  localStorage.setItem(chave,stringify(this.list));
 
 }
 

  }
  


