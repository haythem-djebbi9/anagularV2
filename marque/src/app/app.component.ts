import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
// Assurez-vous de spécifier le bon chemin vers votre service d'authentification

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'marque';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    let isloggedin: string = localStorage.getItem('isloggedIn')!;
    let loggedUser: string | null = localStorage.getItem('loggedUser');

    if (isloggedin !== 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }
}
