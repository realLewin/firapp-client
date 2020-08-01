import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from 'src/assets/config';
import { Subject } from 'rxjs';
import { Info } from 'src/app/core/models/info';

@Injectable({
  providedIn: 'root',
})
export class GetUserMetadataService {
  user: firebase.User;
  userMetadataUrl: string = config.server.userMetadataUrl;
  sub: Subject<boolean> = new Subject();

  constructor(private auth: AngularFireAuth, private http: HttpClient) {}

  getMetadata(): Promise<firebase.User> {
    return this.auth.currentUser;
  }

  sendGetReques(email: string) {
    return this.http.get<Object[]>(`${this.userMetadataUrl}get`, {
      params: new HttpParams().set('email', email),
    });
  }
}
