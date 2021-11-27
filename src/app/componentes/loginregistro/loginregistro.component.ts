import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/servicios/header.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-loginregistro',
  templateUrl: './loginregistro.component.html',
  styleUrls: ['./loginregistro.component.css']
})
export class LoginregistroComponent implements OnInit {

  constructor(private peticion:PeticionService,private header:HeaderService) { }
  
  registro:any = {
    nombre:'',
    email:'',
    password:'',
    confirmar:''
  }

  login:any = {
    email: '',
    password:''
  }

  ngOnInit(): void {
  }

  IniciarSesion(datos:any){
    console.log(datos)

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/Login',
      data:{
        email:datos.email,
        password:datos.password
      }
    }

   this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
     console.log(res)
      this.header.logueado = res.state;
      
   })

  }

  Registrar(datos:any){
   


    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/Guardar',
      data:{
        nombre:datos.nombre,
        email:datos.email,
        password:datos.password,
        confirmar:datos.confirmar
      }
    }

   this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
     console.log(res)
   })



  }

}
