import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProcessPostService } from 'src/app/core/services/process-post.service';
import { Post } from 'src/app/core/models/post';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AllPost } from 'src/app/core/data/all-post';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  allPost: Post[] = [];
  profileUrl: Observable<string | null>;

  constructor(
    private _processPost: ProcessPostService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    // init the post data;
    this.allPost = AllPost;

    // Fetch the image from firebase;
    const ref = this.storage.ref('images/8hro4MH.jpg');
    this.profileUrl = ref.getDownloadURL();
  }
}

// Fetch the post from server side;
// getAllPost() {
//   const result = this._processPost.getAllPost();
//   result.subscribe((m) => console.log(m));
//   result.subscribe((m) => {
//     this.allPost = m;
//   });
// }

// {
// This part should put in the ngOnInit method;
// this.getAllPost(); // Fetch the post form server;
// }
