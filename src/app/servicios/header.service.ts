import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  public logueado:boolean = true;
  public nombreusuario:string = ''


}
