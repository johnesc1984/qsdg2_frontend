import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  constructor(private peticion:PeticionService,private msg:MensajesService ) { }

  ngOnInit(): void {
  }

  email:string = '';
  nombre:string = '';
  asunto:string = '';
  mensaje:string = '';


  enviarmensaje(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/contactenos',
      data:{
        email:this.email,
        nombre:this.nombre,
        asunto:this.asunto,
        mensaje:this.mensaje
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      this.msg.load('Mensaje Enviado')

    })


  }

}
