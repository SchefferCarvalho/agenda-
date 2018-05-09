import { Routes, RouterModule } from '@angular/router';
import { VisHojeComponent } from './vis-hoje/vis-hoje.component';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { ModuleWithProviders } from '@angular/core';


const APP_ROUTES: Routes = [
       
    {path: 'criartarefa', component: CriarTarefaComponent},
    { path: '', component: VisHojeComponent  }
    
] ;

export const routing: ModuleWithProviders= RouterModule.forRoot(APP_ROUTES);