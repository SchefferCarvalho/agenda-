import { Component} from '@angular/core';

@Component({
  selector: 'app-vis-hoje',
  templateUrl: './vis-hoje.component.html',
  styleUrls: ['./vis-hoje.component.css']
})
export class VisHojeComponent  {

 title = 'Hoje'
 date = new Date();
}
