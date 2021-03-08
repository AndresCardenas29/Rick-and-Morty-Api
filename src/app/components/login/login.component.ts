import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import * as Icon from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  icon = Icon;
  @ViewChild('contenedor') contenedor:ElementRef;

  constructor(
    private renderer:Renderer2
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    const value= Swal.fire({
      title:'Hello World!',
      text:'Hello madafaca! :D',
      showCancelButton: true,

    });

    console.log(value);
    
  }

  registro() {
    this.contenedor.nativeElement.scrollLeft += 300; 
  }
  login() {
    this.contenedor.nativeElement.scrollLeft = 0; 
  }

  alertaError(mensaje:string) {
    Swal.fire('Oops!', mensaje, 'error');
  }

}
