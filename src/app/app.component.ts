import { Component, HostListener } from '@angular/core';

import { AuthService } from './auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFiller = false;
  showFiller2 = false;
  showMenuButton = true;

  @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
      this.showMenuButton = true;      
  }

  constructor(private auth: AuthService){}

  isLogged(){
    return this.auth.isLoggedIn();
  }

  menuClick(){
    this.showMenuButton = !this.showMenuButton;
  }

}
