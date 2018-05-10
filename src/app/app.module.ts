import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VisHojeComponent } from './vis-hoje/vis-hoje.component';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    VisHojeComponent,
    CriarTarefaComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
