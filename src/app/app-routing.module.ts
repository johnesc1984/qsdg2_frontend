import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/administracion/usuarios/usuarios.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginregistroComponent } from './componentes/loginregistro/loginregistro.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'contactenos',component:ContactenosComponent},
  {path:'loginoregistro',component:LoginregistroComponent},
  {path:'administracion/usuarios',component:UsuariosComponent},
  {path:'**',component:InicioComponent,pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
