import { Component } from '@angular/core';
import * as Icon from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  icon = Icon;

  onClickOpenLogin() {
    alert("Login!");
  }

}
