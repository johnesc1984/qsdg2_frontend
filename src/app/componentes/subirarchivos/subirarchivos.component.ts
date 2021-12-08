import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SubirarchivosService } from 'src/app/servicios/subirarchivos.service';

@Component({
  selector: 'app-subirarchivos',
  templateUrl: './subirarchivos.component.html',
  styleUrls: ['./subirarchivos.component.css']
})
export class SubirarchivosComponent implements OnInit {

  selectfiles:any
  archivoseleccionado:any;
  progress:number = 0;
  mensaje:string = ''


  constructor(private uploadservice:SubirarchivosService) { }

  ngOnInit(): void {
  }

  @Input() urldestino:string = ""
  @Input() path:string = ""
  @Input() fileName:string = ""

  selectFile(event:any){
    this.selectfiles = event.target.files
  }

  upload(){
    this.progress = 0;
    this.archivoseleccionado = this.selectfiles.item(0);

    this.uploadservice.upload(this.archivoseleccionado,this.urldestino + this.path,this.fileName).subscribe(
      (event:any) => {
        if(event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total)
        }else if(event instanceof HttpResponse){
          this.mensaje = event.body.mensaje
        }
      },
      err => {
        this.progress = 0
        this.mensaje = "Se Presento un error al cargar el Archivo"
        this.archivoseleccionado = undefined
      })

      this.selectfiles = undefined

  }



}
