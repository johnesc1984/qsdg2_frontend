import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginregistroComponent } from './componentes/loginregistro/loginregistro.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { UsuariosComponent } from './componentes/administracion/usuarios/usuarios.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { SubirarchivosComponent } from './componentes/subirarchivos/subirarchivos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoginregistroComponent,
    ContactenosComponent,
    UsuariosComponent,
    CarruselComponent,
    MensajesComponent,
    SubirarchivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
