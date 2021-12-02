import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private peticion:PeticionService,private msg:MensajesService) { }
  
  nombre:string = '';
  email:string = '';
  password:string = '';
  confirmar:string = "";
  datos:any[] = [];
  identificador:string = ""


  ngOnInit(): void {
    this.listar()
  }

 
  nuevo(){
    this.identificador = ''
    this.nombre = ''
    this.email = ''
    this.password = ''
    this.confirmar = ''

  }
  listar(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/Usuarios/Listar',
      data:{}
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      this.datos = res
    })

  }
  Editar(id:string){
    this.identificador = id;
    console.log(id)

    var post = {
      host:this.peticion.urlLocal,
      path:'/Usuarios/ListarId',
      data:{
        id:id
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      this.nombre = res[0].nombre;
      this.email = res[0].email;
    })

  }
  Actualizar(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/Usuarios/Actualizar',
      data:{
        id:this.identificador,
        nombre:this.nombre
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      this.msg.load(res.mensaje)
      this.listar()
    })

  }
  Guardar(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/Usuarios/Guardar',
      data:{
        nombre:this.nombre,
        email:this.email,
        password:this.password,
        confirmar:this.confirmar
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      if(res.state == false){
        this.msg.load(res.mensaje,'danger')
      }
      else{
        this.msg.load(res.mensaje)
        this.listar()
      }

    
    })


  }
  Eliminar(id:string){
    var post = {
      host:this.peticion.urlLocal,
      path:'/Usuarios/Eliminar',
      data:{
        id:id
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      this.msg.load(res.mensaje,'danger')
      this.listar()
    })
  }


  
}
