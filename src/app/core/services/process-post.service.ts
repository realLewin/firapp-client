import { Injectable } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {} from 'src/assets/config.json'

@Injectable({
  providedIn: 'root',
})
export class ProcessPostService {
  postUrl: string = 'http://localhost:7777/api/post/post';
  getUrl: string = 'http://localhost:7777/api/post/get';
  httpPost: Observable<object>;
  httpGet: Observable<Post[]>;
  result: string = '';
  getResult: object;

  constructor(private http: HttpClient) {}

  postPost(postData: Post) {
    this.httpPost = this.http.post(this.postUrl, postData);
    this.httpPost.subscribe((m) => (this.result = m.toString()));
    return this.result;
    // return this.http.post(this.postUrl, postData);
  }

  getAllPost() {
    this.httpGet = this.http.get<Post[]>(this.getUrl);
    return this.httpGet;
    // this.httpGet.subscribe((m) => (this.getResult = m));
    // return this.getResult;
  }
}
