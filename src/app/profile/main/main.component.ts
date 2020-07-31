import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { AllPost } from 'src/app/core/data/all-post';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  allPost: Post[] = [];
  imageUrl: string[] = [];

  constructor() {
    this.allPost = AllPost;
    this.allPost.forEach((post) => {
      this.imageUrl.push(post.imagePath);
    });
  }

  ngOnInit(): void {}
}
