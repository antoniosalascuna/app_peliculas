import { ApiserviceService } from './../../services/apiservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  displayedColumns: string[] = ['Actor', 'Personaje'];
  dataSource = null;
  constructor(private api: ApiserviceService, private route: Router) { }
  id: any = '';

  @Input() identificardor: any ;

  actores: any =
  {
actor: '',
character: ''
  };

  datospelicula: any = {
    length: '',
    poster: '',
    title: '',
    year: '',
    rating: '',


  };

  trailerdepelicula: any =
  {
   link: ''
  };
  ngOnInit(): void {
  this.cargardatos();
  }

  cargardatos()
  {
    if (this.api.getid() !== undefined) {
      this.id = this.api.getid();
      this.api.datosdetallados(this.id).subscribe(resultado  => {
          this.datospelicula = resultado;
          this.actores  = resultado.cast;
          this.trailerdepelicula = resultado.trailer;
          this.dataSource = new MatTableDataSource(resultado.cast);
          console.log(this.datospelicula);
        });
    }else{
     this.route.navigate(['/paginacentral']);
    }
  }

}
