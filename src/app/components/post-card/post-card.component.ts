import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  @Input() imageUrl: string[];
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
