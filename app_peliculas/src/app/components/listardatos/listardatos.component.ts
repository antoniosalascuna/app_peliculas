import { ApiserviceService } from './../../services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listardatos',
  templateUrl: './listardatos.component.html',
  styleUrls: ['./listardatos.component.css'],
  animations: [
    trigger('fade', [

      state('void' ,style({opacity: 0})),
      transition(':enter, :leave', [ //void <=> * es lo mismo
        animate(2000)
      ])
    ])
  ]
})
export class ListardatosComponent implements OnInit {
  displayedColumns: string[] = ['Titulo', 'Imagen', 'Detalle'];
  dataSource = null;
  constructor(private api: ApiserviceService, private toast: ToastrService) { }
datos: any ;
dato: any ;
results: any = {
  companies: '',
  names: '',
  titles: ''
 };
  mostrardatos()
  {
    this.dato = ((document.getElementById('input') as HTMLInputElement).value);
    console.log(this.dato);
    this.api.obtenerdatos(this.dato).subscribe(result => {
    this.results  = result;
    this.dataSource = new MatTableDataSource(result.titles);
    console.log(this.results);
    });
  }
  ngOnInit(): void {
  }

  cargardatos()
  {
    if (this.results !== undefined) {
    }
  }

  enviarid(id: any){
    if (this.results !== undefined) {
      this.api.setid(id);
    }
  }

  mostrarmensajes()
  {
    this.toast.warning('ESTAMOS PROVANDO ALERTAS!', 'Prevencion!');
  }

}
