import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as Icon from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('login') login: ElementRef; 
  icon = Icon;

  constructor(
    private render:Renderer2
  ){
    
  }

  onClickOpenLogin() {
    this.render.addClass(this.login.nativeElement, "show");
    
  }

  onClick(){
    this.render.removeClass(this.login.nativeElement, 'show');
  }

  onKeyPress($event){
    console.log($event);
    
  }

}
