import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public header:HeaderService) { }

  ngOnInit(): void {
  }

}
