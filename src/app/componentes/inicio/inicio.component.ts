import { Component, OnInit } from '@angular/core';
import { SubirarchivosService } from 'src/app/servicios/subirarchivos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private uploads:SubirarchivosService) { }

  ngOnInit(): void {
  }

  destino:string = this.uploads.baseUrl;
  path:string = '/Fotoperfil/Subir/'
  userFile:string = 'userFile'

}
