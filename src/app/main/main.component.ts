import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  items: Observable<any[]>;
  isShowToolbar: boolean = true;
  userId: string;
  position = { x: 0, y: 0 };
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  closeNav() {
    this.sidenav.close();
  }
  updatePos() {
    this.position = { x: 0, y: 0 };
  }

  routeProfile() {
    this.auth.currentUser
      .then((user) => {
        this.userId = user.uid;
        this.router.navigate(['profile', this.userId]);
      })
      .catch((err) => console.log(err));
  }
}
