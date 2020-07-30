import { Injectable } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {} from 'src/assets/config.json'

@Injectable({
  providedIn: 'root',
})
export class ProcessPostService {
  httpPost: Observable<object>;
  result: string = '';
  postUrl: string = 'http://localhost:7777/api/post';

  constructor(private http: HttpClient) {}

  postPost(postData: Post) {
    this.httpPost = this.http.post(this.postUrl, postData);
    this.httpPost.subscribe((m) => (this.result = m.toString()));
    return this.result;
    // return this.http.post(this.postUrl, postData);
  }
}
