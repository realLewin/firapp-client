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
  isLiked: boolean = false;
  isMarked: boolean = false;
  userPhotoUrl: string =
    'https://cdn.shopify.com/s/files/1/0669/7933/products/excel-leggings-pastel-pink-3863200989301_grande.jpg?v=1560307432';

  constructor() {}

  ngOnInit(): void {}
}
