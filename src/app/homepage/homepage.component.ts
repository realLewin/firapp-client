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
  BLANK_IMAGE_URL = 'https://i.stack.imgur.com/Vkq2a.png';
  profileUrl: Observable<string | null>;
  allPost: Post[] = [];
  imageUrl: string[] = [];
  breakpoint: number;
  windowSize: number;

  constructor(
    private _processPost: ProcessPostService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    // init the post data;
    this.getAllPost();
    this.windowSize = window.innerWidth;
    this.changeLayout();
  }

  // Fetch the post from server side;
  getAllPost() {
    const result = this._processPost.getAllPost();
    result.subscribe((m) => {
      this.allPost = m;
      this.showImage();
    });
  }

  showImage() {
    // Fetch the image from firebase;
    this.allPost.forEach((post) => {
      const ref = this.storage.ref(post.imagePath);
      this.profileUrl = ref.getDownloadURL();
      this.profileUrl.subscribe((m) => {
        this.imageUrl.push(m);
      });
    });
  }

  onResize(event) {
    this.windowSize = event.target.innerWidth;
    this.changeLayout();
  }

  changeLayout() {
    if (this.windowSize <= 600) {
      this.breakpoint = 1;
    } else if (this.windowSize > 600 && this.windowSize <= 960) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }
}
